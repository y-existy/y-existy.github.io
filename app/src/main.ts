import * as $ from 'jquery';
import * as bitcore from 'bitcore-lib';
import * as jsSHA from 'jssha';

export default class Main {
    public network = `livenet`;

    constructor(public name){
        /*$(() => {
            $(document.body).html("hello");
        });*/
    }

    private _makeKey(target, num){
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
    private _makeAddress(privkey){
        // 公開鍵作成
            var privateKey = new bitcore.PrivateKey(privkey, this.network);
            var publicKey = privateKey.toPublicKey();

        // bitcoin アドレス作成
            var pubKey = publicKey;
            var publicKey = new bitcore.PublicKey(pubKey, this.network);
            var address = publicKey.toAddress();
            var str_address = address.toString();
            return str_address;
        }

    public text2bitcoin_address(text, num){
        var key = this._makeKey(text, num);
        return this._makeAddress(key);
    }

    public add(x, y){
        return x + y;
    }
}




