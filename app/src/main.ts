/*
使っているbitcoinライブラリーの説明：
    Insight is a simple agent to perform queries to an Insight
    blockchain explorer. The default servers are https://insight.bitpay.com
    and  https://test-insight.bitpay.com, hosted by BitPay Inc.
    You can (and we strongly suggest you do) run your own insight server.
    For more information, head to https://github.com/bitpay/insight-api
*/
import * as $ from 'jquery';
import * as bitcore from 'bitcore-lib';
import * as explorers from 'bitcore-explorers';
import * as jsSHA from 'jssha';
import * as xmlhttprequest from 'xmlhttprequest';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/base.css';

export default class Main {
    // "testnet" | "livenet"
    public network = "";

    constructor() {
        this._initlisten();
    }

    private _makeKey(target, num) {
        // sha256のハッシュ作成
        var sha256 = new jsSHA("SHA-256", "TEXT");
        sha256.update(target);
        var hash = sha256.getHash("HEX");
        if (num == 1) {
            return hash;
        } else {
            return this._makeKey(hash, num - 1);
        }
    }

    private _makeAddress(privkey) {
        // 公開鍵作成
        var privateKey = new bitcore.PrivateKey(privkey, this.network);
        var publicKey = privateKey.toPublicKey();
        // bitcoin アドレス作成
        var address = (new bitcore.PublicKey(publicKey, this.network)).toAddress();
        var str_address = address.toString();
        return str_address;
    }

    private _makeAddress_hash(privkey) {
        // 公開鍵作成
        var privateKey = new bitcore.PrivateKey(privkey, this.network);
        var publicKey = privateKey.toPublicKey();
        // bitcoin アドレス作成
        var address = (new bitcore.PublicKey(publicKey, this.network)).toAddress();
        return address;
    }

    public text2bitcoin_address(text, num) {
        var key = this._makeKey(text, num);
        return [key, this._makeAddress(key)];
    }
    /*
        bitcoinを送信するところまで作成したい。
        やり方としては、現アドレスのUTXOがどれくらい残っているか把握するために
        blockchainAPIを利用。
        そこで取得したデータからTxを作成して、insightのwebページに
        無理やりpostするという流れをとる。
    */

    public get_request(url): Promise<any> {
        const XMLHttpRequest = xmlhttprequest.XMLHttpRequest;
        let request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.send(null);
        return request.responseText;
    }

    public async getUTXOs(address) {
        let url = ""
        if (this.network == "testnet") {
            url = "https://testnet.blockchain.info/ja/unspent?active=" + address;
        } else if (this.network == "livenet") {
            url = "https://blockchain.info/ja/unspent?active=" + address;
        }
        const result = await this.get_request(url);
        return result;
    }

    public async address2utxos(address) {
        const utxo_json = JSON.parse(await this.getUTXOs(address));
        let utxos = [];
        utxo_json["unspent_outputs"].forEach(function (tx) {
            var utxo = new bitcore.Transaction.UnspentOutput({
                "txid": tx["tx_hash"],
                "vout": tx["tx_output_n"],
                "address": address,
                "scriptPubKey": tx["script"],
                "satoshis": tx["value"]
            });
            utxos.push(utxo);
        }
        );
        return utxos;
    }

    public async makeTransaction(from_address, priv_key, amount, to_address) {
        const utxos = await this.address2utxos(from_address);
        console.log(utxos)
        let tx = new bitcore.Transaction()
        .fee(10000)
        .from(utxos)
        .to(to_address, amount)
        .change(from_address)
        .sign(priv_key);
        return tx.serialize();
    }

    private _makeQrcode(id, text) {
        jQuery(id).empty();
        jQuery(id).qrcode({
            render: "table",
            text: text
        });
    }

    private _initlisten(): void {
        var me = this;
        $("#generate").on("click", function (event) {
            me.network = String($('[name=network]').val());
            let key = $(".input_key").val();
            let num = $(".input_num").val();
            let [priv_key, address] = me.text2bitcoin_address(key, Number(num));
            $(".address").val(address);
            me._makeQrcode("#address_qrcode", address);
            $(".priv_key").val(priv_key);
            me._makeQrcode("#priv_key_qrcode", priv_key);
        });
    }
}
var m = new Main();