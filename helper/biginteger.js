/**
 * Created by hengliang.cui on 2014/12/18.
 */

var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array;
var dbits = 28
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

module.exports = BigInteger;

function BigInteger(a, b) {
    this.fromString(a, b)
}

BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;

BigInteger.prototype.clamp=function() {
    var a = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == a)--this.t
}

BigInteger.prototype.fromString = function(a,b){
    var c;
    if (b == 16) c = 4;
    else if (b == 8) c = 3;
    else if (b == 256) c = 8;
    else if (b == 2) c = 1;
    else if (b == 32) c = 5;
    else if (b == 4) c = 2;
    else {
        //this.fromRadix(a, b);
        return
    }
    this.t = 0;
    this.s = 0;
    var d = a.length,
        e = false,
        f = 0;
    while (--d >= 0) {
        var g = c == 8 ? a[d] & 255 : intAt(a, d);
        if (g < 0) {
            if (a.charAt(d) == "-") e = true;
            continue
        }
        e = false;
        if (f == 0) this[this.t++] = g;
        else if (f + c > this.DB) {
            this[this.t - 1] |= (g & (1 << this.DB - f) - 1) << f;
            this[this.t++] = g >> this.DB - f
        } else this[this.t - 1] |= g << f;
        f += c;
        if (f >= this.DB) f -= this.DB
    }
    if (c == 8 && (a[0] & 128) != 0) {
        this.s = -1;
        if (f > 0) this[this.t - 1] |= (1 << this.DB - f) - 1 << f
    }
    this.clamp();
    if (e) BigInteger.ZERO.subTo(this, this)
};

BigInteger.prototype.subTo = function(a,b){
    var c = 0,
        d = 0,
        e = Math.min(a.t, this.t);
    while (c < e) {
        d += this[c] - a[c];
        b[c++] = d & this.DM;
        d >>= this.DB
    }
    if (a.t < this.t) {
        d -= a.s;
        while (c < this.t) {
            d += this[c];
            b[c++] = d & this.DM;
            d >>= this.DB
        }
        d += this.s
    } else {
        d += this.s;
        while (c < a.t) {
            d -= a[c];
            b[c++] = d & this.DM;
            d >>= this.DB
        }
        d -= a.s
    }
    b.s = d < 0 ? -1 : 0;
    if (d < -1) b[c++] = this.DV + d;
    else if (d > 0) b[c++] = d;
    b.t = c;
    b.clamp()
};


BigInteger.ZERO = nbv(0);

function intAt(a, b) {
    var c = BI_RC[a.charCodeAt(b)];
    return c == null ? -1 : c
}

function nbv(a) {
    var b = nbi();
    b.fromInt(a);
    return b
}