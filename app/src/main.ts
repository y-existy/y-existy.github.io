import * as $ from 'jquery';
import * as bitcore from 'bitcore-lib';
import * as jsSHA from 'jssha';

export default class Main {
    public network = `livenet`;

    constructor(){
        this._initlisten();
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
        return [key, this._makeAddress(key)];
    }

    private _initlisten() :void{
        var me = this;
        $("#generate").on("click", function(event){
            let key = $(".input_key").val();
            let num = $(".input_num").val();
            let [priv_key, address] = me.text2bitcoin_address(key, Number(num));
            $(".address").val(address);
            $(".priv_key").val(priv_key);
        });
    }
}
var m = new Main();