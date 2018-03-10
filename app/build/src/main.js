"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bitcore = require("bitcore-lib");
var jsSHA = require("jssha");
var Main = /** @class */ (function () {
    function Main(name) {
        this.name = name;
        this.network = "livenet";
        /*$(() => {
            $(document.body).html("hello");
        });*/
    }
    Main.prototype._makeKey = function (target, num) {
        // sha256のハッシュ作成
        var sha256 = new jsSHA("SHA-256", "TEXT");
        sha256.update(target);
        var hash = sha256.getHash("HEX");
        if (num == 1) {
            return hash;
        }
        else {
            return this._makeKey(hash, num - 1);
        }
    };
    Main.prototype._makeAddress = function (privkey) {
        // 公開鍵作成
        var privateKey = new bitcore.PrivateKey(privkey, this.network);
        var publicKey = privateKey.toPublicKey();
        // bitcoin アドレス作成
        var pubKey = publicKey;
        var publicKey = new bitcore.PublicKey(pubKey, this.network);
        var address = publicKey.toAddress();
        var str_address = address.toString();
        return str_address;
    };
    Main.prototype.text2bitcoin_address = function (text, num) {
        var key = this._makeKey(text, num);
        return this._makeAddress(key);
    };
    Main.prototype.add = function (x, y) {
        return x + y;
    };
    return Main;
}());
exports.default = Main;
//# sourceMappingURL=main.js.map