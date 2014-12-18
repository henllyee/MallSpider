/**
 * Created by hengliang.cui on 2014/12/18.
 */
var BigInteger = require('biginteger');

module.exports = RSAkey;

var RSAkey=function(){
    this.n = null;
    this.e = 0;
    this.d = null;
    this.p = null;
    this.q = null;
    this.dmp1 = null;
    this.dmq1 = null;
    this.coeff = null
}

RSAkey.prototype.keySplit=function(a){
    keys = a.split(",");
    if (!a || !keys[0] || !keys[1] || !keys[2] || !keys[3]) {
        return {};
    }
    return {
        sessionkey : keys[0],
        keyname : keys[1],
        evalue : keys[2],
        nvalue : keys[3]
    };

}

RSAkey.prototype.RSAEncrypt=function(a) {
    var b = pkcs1pad2(a, this.n.bitLength() + 7 >> 3);
    if (b == null) return null;
    var c = this.doPublic(b);
    if (c == null) return null;
    var d = c.toString(16);
    var e = (this.n.bitLength() + 7 >> 3 << 1) - d.length;
    while (e-- > 0) d = "0" + d;
    return d
}

RSAkey.prototype.doPublic=function(a){
    return a.modPowInt(this.e, this.n)
}

RSAkey.prototype.setPublic=function(a,b){
    if (a&&b&& a.length > 0 && b.length > 0) {
        this.n = parseBigInt(a, 16);
        this.e = parseInt(b, 16)
    }
}

function parseBigInt(a, b) {
    return new BigInteger(a, b)
}

function pkcs1pad2(a, b) {
    if (b < a.length + 11) {
        return null
    }
    var c = new Array;
    var d = a.length - 1;
    while (d >= 0 && b > 0) c[--b] = a.charCodeAt(d--);
    c[--b] = 0;
    var e = new SecureRandom;
    var f = new Array;
    while (b > 2) {
        f[0] = 0;
        while (f[0] == 0) e.nextBytes(f);
        c[--b] = f[0]
    }
    c[--b] = 2;
    c[--b] = 0;
    return new BigInteger(c)
}


function SecureRandom() {}

SecureRandom.prototype.nextBytes = rng_get_bytes;