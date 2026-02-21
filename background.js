import { setStorageItem as $0, StorageKeys as kn, getStorageItem as Rs, deactivateLicence as Is, validateLicence as Ns, getLicenceState as Ps, initializeTrial as Ls } from "./src/licence.js";
async function getRecipes() {
  return (await Rs(kn.RECIPES)) || [];
}
async function saveRecipe(e) {
  const t = await getRecipes();
  const r = t.findIndex(a => a.id === e.id);
  if (r >= 0) {
    t[r] = {
      ...e,
      updatedAt: Date.now()
    };
  } else {
    t.push({
      ...e,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  }
  await $0(kn.RECIPES, t);
}
async function deleteRecipe(e) {
  const r = (await getRecipes()).filter(a => a.id !== e);
  await $0(kn.RECIPES, r);
} /*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var Fa = {
  version: "0.20.3"
};
var Zr = 1200;
function Qt(e) {
  Zr = e;
}
function bs() {
  Qt(1200);
}
function pa(t) {
  return String.fromCharCode(t);
}
function Qn(t) {
  return String.fromCharCode(t);
}
var ur = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function ya(e) {
  var t = "";
  var r = 0;
  var a = 0;
  var n = 0;
  var s = 0;
  var i = 0;
  var f = 0;
  var o = 0;
  for (var l = 0; l < e.length;) {
    r = e.charCodeAt(l++);
    s = r >> 2;
    a = e.charCodeAt(l++);
    i = (r & 3) << 4 | a >> 4;
    n = e.charCodeAt(l++);
    f = (a & 15) << 2 | n >> 6;
    o = n & 63;
    if (isNaN(a)) {
      f = o = 64;
    } else if (isNaN(n)) {
      o = 64;
    }
    t += ur.charAt(s) + ur.charAt(i) + ur.charAt(f) + ur.charAt(o);
  }
  return t;
}
function Us(e) {
  var t = "";
  var r = 0;
  var a = 0;
  var n = 0;
  var s = 0;
  var i = 0;
  var f = 0;
  var o = 0;
  for (var l = 0; l < e.length;) {
    r = e.charCodeAt(l++);
    if (r > 255) {
      r = 95;
    }
    s = r >> 2;
    a = e.charCodeAt(l++);
    if (a > 255) {
      a = 95;
    }
    i = (r & 3) << 4 | a >> 4;
    n = e.charCodeAt(l++);
    if (n > 255) {
      n = 95;
    }
    f = (a & 15) << 2 | n >> 6;
    o = n & 63;
    if (isNaN(a)) {
      f = o = 64;
    } else if (isNaN(n)) {
      o = 64;
    }
    t += ur.charAt(s) + ur.charAt(i) + ur.charAt(f) + ur.charAt(o);
  }
  return t;
}
function Ws(e) {
  var t = "";
  var r = 0;
  var a = 0;
  var n = 0;
  var s = 0;
  var i = 0;
  var f = 0;
  var o = 0;
  for (var l = 0; l < e.length;) {
    r = e[l++];
    s = r >> 2;
    a = e[l++];
    i = (r & 3) << 4 | a >> 4;
    n = e[l++];
    f = (a & 15) << 2 | n >> 6;
    o = n & 63;
    if (isNaN(a)) {
      f = o = 64;
    } else if (isNaN(n)) {
      o = 64;
    }
    t += ur.charAt(s) + ur.charAt(i) + ur.charAt(f) + ur.charAt(o);
  }
  return t;
}
function it(e) {
  var t = "";
  var r = 0;
  var a = 0;
  var n = 0;
  var s = 0;
  var i = 0;
  var f = 0;
  var o = 0;
  if (e.slice(0, 5) == "data:") {
    var l = e.slice(0, 1024).indexOf(";base64,");
    if (l > -1) {
      e = e.slice(l + 8);
    }
  }
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var l = 0; l < e.length;) {
    s = ur.indexOf(e.charAt(l++));
    i = ur.indexOf(e.charAt(l++));
    r = s << 2 | i >> 4;
    t += String.fromCharCode(r);
    f = ur.indexOf(e.charAt(l++));
    a = (i & 15) << 4 | f >> 2;
    if (f !== 64) {
      t += String.fromCharCode(a);
    }
    o = ur.indexOf(e.charAt(l++));
    n = (f & 3) << 6 | o;
    if (o !== 64) {
      t += String.fromCharCode(n);
    }
  }
  return t;
}
var Oe = function () {
  return typeof Buffer !== "undefined" && typeof process !== "undefined" && typeof process.versions !== "undefined" && !!process.versions.node;
}();
var zr = function () {
  if (typeof Buffer !== "undefined") {
    var e = !Buffer.from;
    if (!e) {
      try {
        Buffer.from("foo", "utf8");
      } catch {
        e = true;
      }
    }
    if (e) {
      return function (t, r) {
        if (r) {
          return new Buffer(t, r);
        } else {
          return new Buffer(t);
        }
      };
    } else {
      return Buffer.from.bind(Buffer);
    }
  }
  return function () { };
}();
var Ca = function () {
  if (typeof Buffer === "undefined") {
    return false;
  }
  var e = zr([65, 0]);
  if (!e) {
    return false;
  }
  var t = e.toString("utf16le");
  return t.length == 1;
}();
function pt(e) {
  if (Oe) {
    if (Buffer.alloc) {
      return Buffer.alloc(e);
    } else {
      return new Buffer(e);
    }
  } else if (typeof Uint8Array !== "undefined") {
    return new Uint8Array(e);
  } else {
    return new Array(e);
  }
}
function e0(e) {
  if (Oe) {
    if (Buffer.allocUnsafe) {
      return Buffer.allocUnsafe(e);
    } else {
      return new Buffer(e);
    }
  } else if (typeof Uint8Array !== "undefined") {
    return new Uint8Array(e);
  } else {
    return new Array(e);
  }
}
function kr(t) {
  if (Oe) {
    return zr(t, "binary");
  } else {
    return t.split("").map(function (r) {
      return r.charCodeAt(0) & 255;
    });
  }
}
function Va(e) {
  if (typeof ArrayBuffer === "undefined") {
    return kr(e);
  }
  var t = new ArrayBuffer(e.length);
  var r = new Uint8Array(t);
  for (var a = 0; a != e.length; ++a) {
    r[a] = e.charCodeAt(a) & 255;
  }
  return t;
}
function mt(e) {
  if (Array.isArray(e)) {
    return e.map(function (a) {
      return String.fromCharCode(a);
    }).join("");
  }
  var t = [];
  for (var r = 0; r < e.length; ++r) {
    t[r] = String.fromCharCode(e[r]);
  }
  return t.join("");
}
function Hs(e) {
  if (typeof Uint8Array === "undefined") {
    throw new Error("Unsupported");
  }
  return new Uint8Array(e);
}
var je = Oe ? function (e) {
  return Buffer.concat(e.map(function (t) {
    if (Buffer.isBuffer(t)) {
      return t;
    } else {
      return zr(t);
    }
  }));
} : function (e) {
  if (typeof Uint8Array !== "undefined") {
    var t = 0;
    var r = 0;
    for (t = 0; t < e.length; ++t) {
      r += e[t].length;
    }
    var a = new Uint8Array(r);
    var n = 0;
    t = 0;
    r = 0;
    for (; t < e.length; r += n, ++t) {
      n = e[t].length;
      if (e[t] instanceof Uint8Array) {
        a.set(e[t], r);
      } else if (typeof e[t] == "string") {
        a.set(new Uint8Array(kr(e[t])), r);
      } else {
        a.set(new Uint8Array(e[t]), r);
      }
    }
    return a;
  }
  return [].concat.apply([], e.map(function (s) {
    if (Array.isArray(s)) {
      return s;
    } else {
      return [].slice.call(s);
    }
  }));
};
function Gs(e) {
  var t = [];
  var r = 0;
  var a = e.length + 250;
  var n = pt(e.length + 255);
  for (var s = 0; s < e.length; ++s) {
    var i = e.charCodeAt(s);
    if (i < 128) {
      n[r++] = i;
    } else if (i < 2048) {
      n[r++] = i >> 6 & 31 | 192;
      n[r++] = i & 63 | 128;
    } else if (i >= 55296 && i < 57344) {
      i = (i & 1023) + 64;
      var f = e.charCodeAt(++s) & 1023;
      n[r++] = i >> 8 & 7 | 240;
      n[r++] = i >> 2 & 63 | 128;
      n[r++] = f >> 6 & 15 | 128 | (i & 3) << 4;
      n[r++] = f & 63 | 128;
    } else {
      n[r++] = i >> 12 & 15 | 224;
      n[r++] = i >> 6 & 63 | 128;
      n[r++] = i & 63 | 128;
    }
    if (r > a) {
      t.push(n.slice(0, r));
      r = 0;
      n = pt(65535);
      a = 65530;
    }
  }
  t.push(n.slice(0, r));
  return je(t);
}
var Yt = /\u0000/g;
var ma = /[\u0001-\u0006]/g;
function kt(e) {
  var t = "";
  for (var r = e.length - 1; r >= 0;) {
    t += e.charAt(r--);
  }
  return t;
}
function Br(e, t) {
  var r = "" + e;
  if (r.length >= t) {
    return r;
  } else {
    return Ue("0", t - r.length) + r;
  }
}
function On(e, t) {
  var r = "" + e;
  if (r.length >= t) {
    return r;
  } else {
    return Ue(" ", t - r.length) + r;
  }
}
function ka(e, t) {
  var r = "" + e;
  if (r.length >= t) {
    return r;
  } else {
    return r + Ue(" ", t - r.length);
  }
}
function Xs(e, t) {
  var r = "" + Math.round(e);
  if (r.length >= t) {
    return r;
  } else {
    return Ue("0", t - r.length) + r;
  }
}
function Vs(e, t) {
  var r = "" + e;
  if (r.length >= t) {
    return r;
  } else {
    return Ue("0", t - r.length) + r;
  }
}
var r0 = Math.pow(2, 32);
function Ft(e, t) {
  if (e > r0 || e < -r0) {
    return Xs(e, t);
  }
  var r = Math.round(e);
  return Vs(r, t);
}
function Oa(e, t) {
  t = t || 0;
  return e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108;
}
var t0 = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]];
var nn = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
function $s(e) {
  e ||= {};
  e[0] = "General";
  e[1] = "0";
  e[2] = "0.00";
  e[3] = "#,##0";
  e[4] = "#,##0.00";
  e[9] = "0%";
  e[10] = "0.00%";
  e[11] = "0.00E+00";
  e[12] = "# ?/?";
  e[13] = "# ??/??";
  e[14] = "m/d/yy";
  e[15] = "d-mmm-yy";
  e[16] = "d-mmm";
  e[17] = "mmm-yy";
  e[18] = "h:mm AM/PM";
  e[19] = "h:mm:ss AM/PM";
  e[20] = "h:mm";
  e[21] = "h:mm:ss";
  e[22] = "m/d/yy h:mm";
  e[37] = "#,##0 ;(#,##0)";
  e[38] = "#,##0 ;[Red](#,##0)";
  e[39] = "#,##0.00;(#,##0.00)";
  e[40] = "#,##0.00;[Red](#,##0.00)";
  e[45] = "mm:ss";
  e[46] = "[h]:mm:ss";
  e[47] = "mmss.0";
  e[48] = "##0.0E+0";
  e[49] = "@";
  e[56] = "\"上午/下午 \"hh\"時\"mm\"分\"ss\"秒 \"";
  return e;
}
var Me = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: "\"上午/下午 \"hh\"時\"mm\"分\"ss\"秒 \""
};
var a0 = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  67: 9,
  68: 10,
  69: 12,
  70: 13,
  71: 14,
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  76: 20,
  77: 21,
  78: 22,
  79: 45,
  80: 46,
  81: 47,
  82: 0
};
var zs = {
  5: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
  63: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
  6: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
  64: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
  7: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
  65: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
  8: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
  66: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
  41: "_(* #,##0_);_(* \\(#,##0\\);_(* \"-\"_);_(@_)",
  42: "_(\"$\"* #,##0_);_(\"$\"* \\(#,##0\\);_(\"$\"* \"-\"_);_(@_)",
  43: "_(* #,##0.00_);_(* \\(#,##0.00\\);_(* \"-\"??_);_(@_)",
  44: "_(\"$\"* #,##0.00_);_(\"$\"* \\(#,##0.00\\);_(\"$\"* \"-\"??_);_(@_)"
};
function Da(e, t, r) {
  var a = e < 0 ? -1 : 1;
  for (var n = e * a, s = 0, i = 1, f = 0, o = 1, l = 0, c = 0, x = Math.floor(n); l < t && (x = Math.floor(n), f = x * i + s, c = x * l + o, !(n - x < 5e-8));) {
    n = 1 / (n - x);
    s = i;
    i = f;
    o = l;
    l = c;
  }
  if (c > t) {
    if (l > t) {
      c = o;
      f = s;
    } else {
      c = l;
      f = i;
    }
  }
  if (!r) {
    return [0, a * f, c];
  }
  var h = Math.floor(a * f / c);
  return [h, a * f - h * c, c];
}
function Ks(e) {
  var t = e.toPrecision(16);
  if (t.indexOf("e") > -1) {
    var r = t.slice(0, t.indexOf("e"));
    r = r.indexOf(".") > -1 ? r.slice(0, r.slice(0, 2) == "0." ? 17 : 16) : r.slice(0, 15) + Ue("0", r.length - 15);
    return r + t.slice(t.indexOf("e"));
  }
  var a = t.indexOf(".") > -1 ? t.slice(0, t.slice(0, 2) == "0." ? 17 : 16) : t.slice(0, 15) + Ue("0", t.length - 15);
  return Number(a);
}
function yt(e, t, r) {
  if (e > 2958465 || e < 0) {
    return null;
  }
  e = Ks(e);
  var a = e | 0;
  var n = Math.floor((e - a) * 86400);
  var s = 0;
  var i = [];
  var f = {
    D: a,
    T: n,
    u: (e - a) * 86400 - n,
    y: 0,
    m: 0,
    d: 0,
    H: 0,
    M: 0,
    S: 0,
    q: 0
  };
  if (Math.abs(f.u) < 0.000001) {
    f.u = 0;
  }
  if (t && t.date1904) {
    a += 1462;
  }
  if (f.u > 0.9999) {
    f.u = 0;
    if (++n == 86400) {
      f.T = n = 0;
      ++a;
      ++f.D;
    }
  }
  if (a === 60) {
    i = r ? [1317, 10, 29] : [1900, 2, 29];
    s = 3;
  } else if (a === 0) {
    i = r ? [1317, 8, 29] : [1900, 1, 0];
    s = 6;
  } else {
    if (a > 60) {
      --a;
    }
    var o = new Date(1900, 0, 1);
    o.setDate(o.getDate() + a - 1);
    i = [o.getFullYear(), o.getMonth() + 1, o.getDate()];
    s = o.getDay();
    if (a < 60) {
      s = (s + 6) % 7;
    }
    if (r) {
      s = qs(o, i);
    }
  }
  f.y = i[0];
  f.m = i[1];
  f.d = i[2];
  f.S = n % 60;
  n = Math.floor(n / 60);
  f.M = n % 60;
  n = Math.floor(n / 60);
  f.H = n;
  f.q = s;
  return f;
}
function Dn(e) {
  if (e.indexOf(".") == -1) {
    return e;
  } else {
    return e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
  }
}
function Ys(e) {
  if (e.indexOf("E") == -1) {
    return e;
  } else {
    return e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
  }
}
function js(e) {
  var t = e < 0 ? 12 : 11;
  var r = Dn(e.toFixed(12));
  if (r.length <= t || (r = e.toPrecision(10), r.length <= t)) {
    return r;
  } else {
    return e.toExponential(5);
  }
}
function Zs(e) {
  var t = Dn(e.toFixed(11));
  if (t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0") {
    return e.toPrecision(6);
  } else {
    return t;
  }
}
function Js(e) {
  if (!isFinite(e)) {
    if (isNaN(e)) {
      return "#NUM!";
    } else {
      return "#DIV/0!";
    }
  }
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
  var r;
  if (t >= -4 && t <= -1) {
    r = e.toPrecision(10 + t);
  } else if (Math.abs(t) <= 9) {
    r = js(e);
  } else if (t === 10) {
    r = e.toFixed(10).substr(0, 12);
  } else {
    r = Zs(e);
  }
  return Dn(Ys(r.toUpperCase()));
}
function wn(e, t) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      if (e) {
        return "TRUE";
      } else {
        return "FALSE";
      }
    case "number":
      if ((e | 0) === e) {
        return e.toString(10);
      } else {
        return Js(e);
      }
    case "undefined":
      return "";
    case "object":
      if (e == null) {
        return "";
      }
      if (e instanceof Date) {
        return et(14, fr(e, t && t.date1904), t);
      }
  }
  throw new Error("unsupported value in General format: " + e);
}
function qs(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  if (e < 60) {
    r = (r + 6) % 7;
  }
  return r;
}
function Qs(e, t, r, a) {
  var n = "";
  var s = 0;
  var i = 0;
  var f = r.y;
  var o;
  var l = 0;
  switch (e) {
    case 98:
      f = r.y + 543;
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          o = f % 100;
          l = 2;
          break;
        default:
          o = f % 10000;
          l = 4;
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          o = r.m;
          l = t.length;
          break;
        case 3:
          return nn[r.m - 1][1];
        case 5:
          return nn[r.m - 1][0];
        default:
          return nn[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          o = r.d;
          l = t.length;
          break;
        case 3:
          return t0[r.q][0];
        default:
          return t0[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          o = 1 + (r.H + 11) % 12;
          l = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          o = r.H;
          l = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          o = r.M;
          l = t.length;
          break;
        default:
          throw "bad minute format: " + t;
      }
      break;
    case 115:
      if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000") {
        throw "bad second format: " + t;
      }
      if (r.u === 0 && (t == "s" || t == "ss")) {
        return Br(r.S, t.length);
      } else {
        if (a >= 2) {
          i = a === 3 ? 1000 : 100;
        } else {
          i = a === 1 ? 10 : 1;
        }
        s = Math.round(i * (r.S + r.u));
        if (s >= i * 60) {
          s = 0;
        }
        if (t === "s") {
          if (s === 0) {
            return "0";
          } else {
            return "" + s / i;
          }
        } else {
          n = Br(s, 2 + a);
          if (t === "ss") {
            return n.substr(0, 2);
          } else {
            return "." + n.substr(2, t.length - 1);
          }
        }
      }
    case 90:
      switch (t) {
        case "[h]":
        case "[hh]":
          o = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          o = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          o = ((r.D * 24 + r.H) * 60 + r.M) * 60 + (a == 0 ? Math.round(r.S + r.u) : r.S);
          break;
        default:
          throw "bad abstime format: " + t;
      }
      l = t.length === 3 ? 1 : 2;
      break;
    case 101:
      o = f;
      l = 1;
      break;
  }
  var c = l > 0 ? Br(o, l) : "";
  return c;
}
function nt(e) {
  var t = 3;
  if (e.length <= t) {
    return e;
  }
  for (var r = e.length % t, a = e.substr(0, r); r != e.length; r += t) {
    a += (a.length > 0 ? "," : "") + e.substr(r, t);
  }
  return a;
}
var z0 = /%/g;
function ef(e, t, r) {
  var a = t.replace(z0, "");
  var n = t.length - a.length;
  return Jr(e, a, r * Math.pow(10, n * 2)) + Ue("%", n);
}
function rf(e, t, r) {
  for (var a = t.length - 1; t.charCodeAt(a - 1) === 44;) {
    --a;
  }
  return Jr(e, t.substr(0, a), r / Math.pow(10, (t.length - a) * 3));
}
function K0(e, t) {
  var r;
  var a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) {
      return "0.0E+0";
    }
    if (t < 0) {
      return "-" + K0(e, -t);
    }
    var n = e.indexOf(".");
    if (n === -1) {
      n = e.indexOf("E");
    }
    var s = Math.floor(Math.log(t) * Math.LOG10E) % n;
    if (s < 0) {
      s += n;
    }
    r = (t / Math.pow(10, s)).toPrecision(a + 1 + (n + s) % n);
    if (r.indexOf("e") === -1) {
      var i = Math.floor(Math.log(t) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + s) : r += "E+" + (i - s); r.substr(0, 2) === "0.";) {
        r = r.charAt(0) + r.substr(2, n) + "." + r.substr(2 + n);
        r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      }
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (f, o, l, c) {
      return o + l + c.substr(0, (n + s) % n) + "." + c.substr(s) + "E";
    });
  } else {
    r = t.toExponential(a);
  }
  if (e.match(/E\+00$/) && r.match(/e[+-]\d$/)) {
    r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1);
  }
  if (e.match(/E\-/) && r.match(/e\+/)) {
    r = r.replace(/e\+/, "e");
  }
  return r.replace("e", "E");
}
var Y0 = /# (\?+)( ?)\/( ?)(\d+)/;
function tf(e, t, r) {
  var a = parseInt(e[4], 10);
  var n = Math.round(t * a);
  var s = Math.floor(n / a);
  var i = n - s * a;
  var f = a;
  return r + (s === 0 ? "" : "" + s) + " " + (i === 0 ? Ue(" ", e[1].length + 1 + e[4].length) : On(i, e[1].length) + e[2] + "/" + e[3] + Br(f, e[4].length));
}
function af(e, t, r) {
  return r + (t === 0 ? "" : "" + t) + Ue(" ", e[1].length + 2 + e[4].length);
}
var j0 = /^#*0*\.([0#]+)/;
var Z0 = /\)[^)]*[0#]/;
var J0 = /\(###\) ###\\?-####/;
function gr(e) {
  var t = "";
  var r;
  for (var a = 0; a != e.length; ++a) {
    switch (r = e.charCodeAt(a)) {
      case 35:
        break;
      case 63:
        t += " ";
        break;
      case 48:
        t += "0";
        break;
      default:
        t += String.fromCharCode(r);
    }
  }
  return t;
}
function n0(e, t) {
  var r = Math.pow(10, t);
  return "" + Math.round(e * r) / r;
}
function i0(e, t) {
  var r = e - Math.floor(e);
  var a = Math.pow(10, t);
  if (t < ("" + Math.round(r * a)).length) {
    return 0;
  } else {
    return Math.round(r * a);
  }
}
function nf(e, t) {
  if (t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length) {
    return 1;
  } else {
    return 0;
  }
}
function sf(e) {
  if (e < 2147483647 && e > -2147483648) {
    return "" + (e >= 0 ? e | 0 : e - 1 | 0);
  } else {
    return "" + Math.floor(e);
  }
}
function Ir(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Z0)) {
    var a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    if (r >= 0) {
      return Ir("n", a, r);
    } else {
      return "(" + Ir("n", a, -r) + ")";
    }
  }
  if (t.charCodeAt(t.length - 1) === 44) {
    return rf(e, t, r);
  }
  if (t.indexOf("%") !== -1) {
    return ef(e, t, r);
  }
  if (t.indexOf("E") !== -1) {
    return K0(t, r);
  }
  if (t.charCodeAt(0) === 36) {
    return "$" + Ir(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  }
  var n;
  var s;
  var i;
  var f;
  var o = Math.abs(r);
  var l = r < 0 ? "-" : "";
  if (t.match(/^00+$/)) {
    return l + Ft(o, t.length);
  }
  if (t.match(/^[#?]+$/)) {
    n = Ft(r, 0);
    if (n === "0") {
      n = "";
    }
    if (n.length > t.length) {
      return n;
    } else {
      return gr(t.substr(0, t.length - n.length)) + n;
    }
  }
  if (s = t.match(Y0)) {
    return tf(s, o, l);
  }
  if (t.match(/^#+0+$/)) {
    return l + Ft(o, t.length - t.indexOf("0"));
  }
  if (s = t.match(j0)) {
    n = n0(r, s[1].length).replace(/^([^\.]+)$/, "$1." + gr(s[1])).replace(/\.$/, "." + gr(s[1])).replace(/\.(\d*)$/, function (p, g) {
      return "." + g + Ue("0", gr(s[1]).length - g.length);
    });
    if (t.indexOf("0.") !== -1) {
      return n;
    } else {
      return n.replace(/^0\./, ".");
    }
  }
  t = t.replace(/^#+([0.])/, "$1");
  if (s = t.match(/^(0*)\.(#*)$/)) {
    return l + n0(o, s[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
  }
  if (s = t.match(/^#{1,3},##0(\.?)$/)) {
    return l + nt(Ft(o, 0));
  }
  if (s = t.match(/^#,##0\.([#0]*0)$/)) {
    if (r < 0) {
      return "-" + Ir(e, t, -r);
    } else {
      return nt("" + (Math.floor(r) + nf(r, s[1].length))) + "." + Br(i0(r, s[1].length), s[1].length);
    }
  }
  if (s = t.match(/^#,#*,#0/)) {
    return Ir(e, t.replace(/^#,#*,/, ""), r);
  }
  if (s = t.match(/^([0#]+)(\\?-([0#]+))+$/)) {
    n = kt(Ir(e, t.replace(/[\\-]/g, ""), r));
    i = 0;
    return kt(kt(t.replace(/\\/g, "")).replace(/[0#]/g, function (p) {
      if (i < n.length) {
        return n.charAt(i++);
      } else if (p === "0") {
        return "0";
      } else {
        return "";
      }
    }));
  }
  if (t.match(J0)) {
    n = Ir(e, "##########", r);
    return "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  }
  var c = "";
  if (s = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    i = Math.min(s[4].length, 7);
    f = Da(o, Math.pow(10, i) - 1, false);
    n = "" + l;
    c = Jr("n", s[1], f[1]);
    if (c.charAt(c.length - 1) == " ") {
      c = c.substr(0, c.length - 1) + "0";
    }
    n += c + s[2] + "/" + s[3];
    c = ka(f[2], i);
    if (c.length < s[4].length) {
      c = gr(s[4].substr(s[4].length - c.length)) + c;
    }
    n += c;
    return n;
  }
  if (s = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    i = Math.min(Math.max(s[1].length, s[4].length), 7);
    f = Da(o, Math.pow(10, i) - 1, true);
    return l + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? On(f[1], i) + s[2] + "/" + s[3] + ka(f[2], i) : Ue(" ", i * 2 + 1 + s[2].length + s[3].length));
  }
  if (s = t.match(/^[#0?]+$/)) {
    n = Ft(r, 0);
    if (t.length <= n.length) {
      return n;
    } else {
      return gr(t.substr(0, t.length - n.length)) + n;
    }
  }
  if (s = t.match(/^([#0?]+)\.([#0]+)$/)) {
    n = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1");
    i = n.indexOf(".");
    var x = t.indexOf(".") - i;
    var h = t.length - n.length - x;
    return gr(t.substr(0, x) + n + t.substr(t.length - h));
  }
  if (s = t.match(/^00,000\.([#0]*0)$/)) {
    i = i0(r, s[1].length);
    if (r < 0) {
      return "-" + Ir(e, t, -r);
    } else {
      return nt(sf(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function (p) {
        return "00," + (p.length < 3 ? Br(0, 3 - p.length) : "") + p;
      }) + "." + Br(i, s[1].length);
    }
  }
  switch (t) {
    case "###,##0.00":
      return Ir(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var u = nt(Ft(o, 0));
      if (u !== "0") {
        return l + u;
      } else {
        return "";
      }
    case "###,###.00":
      return Ir(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return Ir(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + t + "|");
}
function ff(e, t, r) {
  for (var a = t.length - 1; t.charCodeAt(a - 1) === 44;) {
    --a;
  }
  return Jr(e, t.substr(0, a), r / Math.pow(10, (t.length - a) * 3));
}
function of(e, t, r) {
  var a = t.replace(z0, "");
  var n = t.length - a.length;
  return Jr(e, a, r * Math.pow(10, n * 2)) + Ue("%", n);
}
function q0(e, t) {
  var r;
  var a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) {
      return "0.0E+0";
    }
    if (t < 0) {
      return "-" + q0(e, -t);
    }
    var n = e.indexOf(".");
    if (n === -1) {
      n = e.indexOf("E");
    }
    var s = Math.floor(Math.log(t) * Math.LOG10E) % n;
    if (s < 0) {
      s += n;
    }
    r = (t / Math.pow(10, s)).toPrecision(a + 1 + (n + s) % n);
    if (!r.match(/[Ee]/)) {
      var i = Math.floor(Math.log(t) * Math.LOG10E);
      if (r.indexOf(".") === -1) {
        r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + s);
      } else {
        r += "E+" + (i - s);
      }
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (f, o, l, c) {
      return o + l + c.substr(0, (n + s) % n) + "." + c.substr(s) + "E";
    });
  } else {
    r = t.toExponential(a);
  }
  if (e.match(/E\+00$/) && r.match(/e[+-]\d$/)) {
    r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1);
  }
  if (e.match(/E\-/) && r.match(/e\+/)) {
    r = r.replace(/e\+/, "e");
  }
  return r.replace("e", "E");
}
function Wr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Z0)) {
    var a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    if (r >= 0) {
      return Wr("n", a, r);
    } else {
      return "(" + Wr("n", a, -r) + ")";
    }
  }
  if (t.charCodeAt(t.length - 1) === 44) {
    return ff(e, t, r);
  }
  if (t.indexOf("%") !== -1) {
    return of(e, t, r);
  }
  if (t.indexOf("E") !== -1) {
    return q0(t, r);
  }
  if (t.charCodeAt(0) === 36) {
    return "$" + Wr(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  }
  var n;
  var s;
  var i;
  var f;
  var o = Math.abs(r);
  var l = r < 0 ? "-" : "";
  if (t.match(/^00+$/)) {
    return l + Br(o, t.length);
  }
  if (t.match(/^[#?]+$/)) {
    n = "" + r;
    if (r === 0) {
      n = "";
    }
    if (n.length > t.length) {
      return n;
    } else {
      return gr(t.substr(0, t.length - n.length)) + n;
    }
  }
  if (s = t.match(Y0)) {
    return af(s, o, l);
  }
  if (t.match(/^#+0+$/)) {
    return l + Br(o, t.length - t.indexOf("0"));
  }
  if (s = t.match(j0)) {
    n = ("" + r).replace(/^([^\.]+)$/, "$1." + gr(s[1])).replace(/\.$/, "." + gr(s[1]));
    n = n.replace(/\.(\d*)$/, function (p, g) {
      return "." + g + Ue("0", gr(s[1]).length - g.length);
    });
    if (t.indexOf("0.") !== -1) {
      return n;
    } else {
      return n.replace(/^0\./, ".");
    }
  }
  t = t.replace(/^#+([0.])/, "$1");
  if (s = t.match(/^(0*)\.(#*)$/)) {
    return l + ("" + o).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
  }
  if (s = t.match(/^#{1,3},##0(\.?)$/)) {
    return l + nt("" + o);
  }
  if (s = t.match(/^#,##0\.([#0]*0)$/)) {
    if (r < 0) {
      return "-" + Wr(e, t, -r);
    } else {
      return nt("" + r) + "." + Ue("0", s[1].length);
    }
  }
  if (s = t.match(/^#,#*,#0/)) {
    return Wr(e, t.replace(/^#,#*,/, ""), r);
  }
  if (s = t.match(/^([0#]+)(\\?-([0#]+))+$/)) {
    n = kt(Wr(e, t.replace(/[\\-]/g, ""), r));
    i = 0;
    return kt(kt(t.replace(/\\/g, "")).replace(/[0#]/g, function (p) {
      if (i < n.length) {
        return n.charAt(i++);
      } else if (p === "0") {
        return "0";
      } else {
        return "";
      }
    }));
  }
  if (t.match(J0)) {
    n = Wr(e, "##########", r);
    return "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  }
  var c = "";
  if (s = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    i = Math.min(s[4].length, 7);
    f = Da(o, Math.pow(10, i) - 1, false);
    n = "" + l;
    c = Jr("n", s[1], f[1]);
    if (c.charAt(c.length - 1) == " ") {
      c = c.substr(0, c.length - 1) + "0";
    }
    n += c + s[2] + "/" + s[3];
    c = ka(f[2], i);
    if (c.length < s[4].length) {
      c = gr(s[4].substr(s[4].length - c.length)) + c;
    }
    n += c;
    return n;
  }
  if (s = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    i = Math.min(Math.max(s[1].length, s[4].length), 7);
    f = Da(o, Math.pow(10, i) - 1, true);
    return l + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? On(f[1], i) + s[2] + "/" + s[3] + ka(f[2], i) : Ue(" ", i * 2 + 1 + s[2].length + s[3].length));
  }
  if (s = t.match(/^[#0?]+$/)) {
    n = "" + r;
    if (t.length <= n.length) {
      return n;
    } else {
      return gr(t.substr(0, t.length - n.length)) + n;
    }
  }
  if (s = t.match(/^([#0]+)\.([#0]+)$/)) {
    n = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1");
    i = n.indexOf(".");
    var x = t.indexOf(".") - i;
    var h = t.length - n.length - x;
    return gr(t.substr(0, x) + n + t.substr(t.length - h));
  }
  if (s = t.match(/^00,000\.([#0]*0)$/)) {
    if (r < 0) {
      return "-" + Wr(e, t, -r);
    } else {
      return nt("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function (p) {
        return "00," + (p.length < 3 ? Br(0, 3 - p.length) : "") + p;
      }) + "." + Br(0, s[1].length);
    }
  }
  switch (t) {
    case "###,###":
    case "##,###":
    case "#,###":
      var u = nt("" + o);
      if (u !== "0") {
        return l + u;
      } else {
        return "";
      }
    default:
      if (t.match(/\.[0#?]*$/)) {
        return Wr(e, t.slice(0, t.lastIndexOf(".")), r) + gr(t.slice(t.lastIndexOf(".")));
      }
  }
  throw new Error("unsupported format |" + t + "|");
}
function Jr(e, t, r) {
  if ((r | 0) === r) {
    return Wr(e, t, r);
  } else {
    return Ir(e, t, r);
  }
}
function lf(e) {
  var t = [];
  var r = false;
  for (var a = 0, n = 0; a < e.length; ++a) {
    switch (e.charCodeAt(a)) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++a;
        break;
      case 59:
        t[t.length] = e.substr(n, a - n);
        n = a + 1;
    }
  }
  t[t.length] = e.substr(n);
  if (r === true) {
    throw new Error("Format |" + e + "| unterminated string ");
  }
  return t;
}
var Q0 = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function vt(e) {
  for (var t = 0, r = "", a = ""; t < e.length;) {
    switch (r = e.charAt(t)) {
      case "G":
        if (Oa(e, t)) {
          t += 6;
        }
        t++;
        break;
      case "\"":
        while (e.charCodeAt(++t) !== 34 && t < e.length);
        ++t;
        break;
      case "\\":
        t += 2;
        break;
      case "_":
        t += 2;
        break;
      case "@":
        ++t;
        break;
      case "B":
      case "b":
        if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2") {
          return true;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return true;
      case "A":
      case "a":
      case "上":
        if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "上午/下午") {
          return true;
        }
        ++t;
        break;
      case "[":
        for (a = r; e.charAt(t++) !== "]" && t < e.length;) {
          a += e.charAt(t);
        }
        if (a.match(Q0)) {
          return true;
        }
        break;
      case ".":
      case "0":
      case "#":
        while (t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1));
        break;
      case "?":
        while (e.charAt(++t) === r);
        break;
      case "*":
        ++t;
        if (e.charAt(t) == " " || e.charAt(t) == "*") {
          ++t;
        }
        break;
      case "(":
      case ")":
        ++t;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        while (t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1);
        break;
      case " ":
        ++t;
        break;
      default:
        ++t;
        break;
    }
  }
  return false;
}
function cf(e, t, r, a) {
  var n = [];
  for (var s = "", i = 0, f = "", o = "t", l, c, x, h = "H"; i < e.length;) {
    switch (f = e.charAt(i)) {
      case "G":
        if (!Oa(e, i)) {
          throw new Error("unrecognized character " + f + " in " + e);
        }
        n[n.length] = {
          t: "G",
          v: "General"
        };
        i += 7;
        break;
      case "\"":
        for (s = ""; (x = e.charCodeAt(++i)) !== 34 && i < e.length;) {
          s += String.fromCharCode(x);
        }
        n[n.length] = {
          t: "t",
          v: s
        };
        ++i;
        break;
      case "\\":
        var u = e.charAt(++i);
        var p = u === "(" || u === ")" ? u : "t";
        n[n.length] = {
          t: p,
          v: u
        };
        ++i;
        break;
      case "_":
        n[n.length] = {
          t: "t",
          v: " "
        };
        i += 2;
        break;
      case "@":
        n[n.length] = {
          t: "T",
          v: t
        };
        ++i;
        break;
      case "B":
      case "b":
        if (e.charAt(i + 1) === "1" || e.charAt(i + 1) === "2") {
          if (l == null && (l = yt(t, r, e.charAt(i + 1) === "2"), l == null)) {
            return "";
          }
          n[n.length] = {
            t: "X",
            v: e.substr(i, 2)
          };
          o = f;
          i += 2;
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        f = f.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (t < 0 || l == null && (l = yt(t, r), l == null)) {
          return "";
        }
        for (s = f; ++i < e.length && e.charAt(i).toLowerCase() === f;) {
          s += f;
        }
        if (f === "m" && o.toLowerCase() === "h") {
          f = "M";
        }
        if (f === "h") {
          f = h;
        }
        n[n.length] = {
          t: f,
          v: s
        };
        o = f;
        break;
      case "A":
      case "a":
      case "上":
        var g = {
          t: f,
          v: f
        };
        if (l == null) {
          l = yt(t, r);
        }
        if (e.substr(i, 3).toUpperCase() === "A/P") {
          if (l != null) {
            g.v = l.H >= 12 ? e.charAt(i + 2) : f;
          }
          g.t = "T";
          h = "h";
          i += 3;
        } else if (e.substr(i, 5).toUpperCase() === "AM/PM") {
          if (l != null) {
            g.v = l.H >= 12 ? "PM" : "AM";
          }
          g.t = "T";
          i += 5;
          h = "h";
        } else if (e.substr(i, 5).toUpperCase() === "上午/下午") {
          if (l != null) {
            g.v = l.H >= 12 ? "下午" : "上午";
          }
          g.t = "T";
          i += 5;
          h = "h";
        } else {
          g.t = "t";
          ++i;
        }
        if (l == null && g.t === "T") {
          return "";
        }
        n[n.length] = g;
        o = f;
        break;
      case "[":
        for (s = f; e.charAt(i++) !== "]" && i < e.length;) {
          s += e.charAt(i);
        }
        if (s.slice(-1) !== "]") {
          throw "unterminated \"[\" block: |" + s + "|";
        }
        if (s.match(Q0)) {
          if (l == null && (l = yt(t, r), l == null)) {
            return "";
          }
          n[n.length] = {
            t: "Z",
            v: s.toLowerCase()
          };
          o = s.charAt(1);
        } else if (s.indexOf("$") > -1) {
          s = (s.match(/\$([^-\[\]]*)/) || [])[1] || "$";
          if (!vt(e)) {
            n[n.length] = {
              t: "t",
              v: s
            };
          }
        }
        break;
      case ".":
        if (l != null) {
          for (s = f; ++i < e.length && (f = e.charAt(i)) === "0";) {
            s += f;
          }
          n[n.length] = {
            t: "s",
            v: s
          };
          break;
        }
      case "0":
      case "#":
        for (s = f; ++i < e.length && "0#?.,E+-%".indexOf(f = e.charAt(i)) > -1;) {
          s += f;
        }
        n[n.length] = {
          t: "n",
          v: s
        };
        break;
      case "?":
        for (s = f; e.charAt(++i) === f;) {
          s += f;
        }
        n[n.length] = {
          t: f,
          v: s
        };
        o = f;
        break;
      case "*":
        ++i;
        if (e.charAt(i) == " " || e.charAt(i) == "*") {
          ++i;
        }
        break;
      case "(":
      case ")":
        n[n.length] = {
          t: a === 1 ? "t" : f,
          v: f
        };
        ++i;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (s = f; i < e.length && "0123456789".indexOf(e.charAt(++i)) > -1;) {
          s += e.charAt(i);
        }
        n[n.length] = {
          t: "D",
          v: s
        };
        break;
      case " ":
        n[n.length] = {
          t: f,
          v: f
        };
        ++i;
        break;
      case "$":
        n[n.length] = {
          t: "t",
          v: "$"
        };
        ++i;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f) === -1) {
          throw new Error("unrecognized character " + f + " in " + e);
        }
        n[n.length] = {
          t: "t",
          v: f
        };
        ++i;
        break;
    }
  }
  var m = 0;
  var v = 0;
  var C;
  i = n.length - 1;
  o = "t";
  for (; i >= 0; --i) {
    switch (n[i].t) {
      case "h":
      case "H":
        n[i].t = h;
        o = "h";
        if (m < 1) {
          m = 1;
        }
        break;
      case "s":
        if (C = n[i].v.match(/\.0+$/)) {
          v = Math.max(v, C[0].length - 1);
          m = 4;
        }
        if (m < 3) {
          m = 3;
        }
      case "d":
      case "y":
      case "e":
        o = n[i].t;
        break;
      case "M":
        o = n[i].t;
        if (m < 2) {
          m = 2;
        }
        break;
      case "m":
        if (o === "s") {
          n[i].t = "M";
          if (m < 2) {
            m = 2;
          }
        }
        break;
      case "X":
        break;
      case "Z":
        if (m < 1 && n[i].v.match(/[Hh]/)) {
          m = 1;
        }
        if (m < 2 && n[i].v.match(/[Mm]/)) {
          m = 2;
        }
        if (m < 3 && n[i].v.match(/[Ss]/)) {
          m = 3;
        }
    }
  }
  var F;
  switch (m) {
    case 0:
      break;
    case 1:
    case 2:
    case 3:
      if (l.u >= 0.5) {
        l.u = 0;
        ++l.S;
      }
      if (l.S >= 60) {
        l.S = 0;
        ++l.M;
      }
      if (l.M >= 60) {
        l.M = 0;
        ++l.H;
      }
      if (l.H >= 24) {
        l.H = 0;
        ++l.D;
        F = yt(l.D);
        F.u = l.u;
        F.S = l.S;
        F.M = l.M;
        F.H = l.H;
        l = F;
      }
      break;
    case 4:
      switch (v) {
        case 1:
          l.u = Math.round(l.u * 10) / 10;
          break;
        case 2:
          l.u = Math.round(l.u * 100) / 100;
          break;
        case 3:
          l.u = Math.round(l.u * 1000) / 1000;
          break;
      }
      if (l.u >= 1) {
        l.u = 0;
        ++l.S;
      }
      if (l.S >= 60) {
        l.S = 0;
        ++l.M;
      }
      if (l.M >= 60) {
        l.M = 0;
        ++l.H;
      }
      if (l.H >= 24) {
        l.H = 0;
        ++l.D;
        F = yt(l.D);
        F.u = l.u;
        F.S = l.S;
        F.M = l.M;
        F.H = l.H;
        l = F;
      }
      break;
  }
  var U = "";
  var H;
  for (i = 0; i < n.length; ++i) {
    switch (n[i].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        n[i].v = "";
        n[i].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        n[i].v = Qs(n[i].t.charCodeAt(0), n[i].v, l, v);
        n[i].t = "t";
        break;
      case "n":
      case "?":
        for (H = i + 1; n[H] != null && ((f = n[H].t) === "?" || f === "D" || (f === " " || f === "t") && n[H + 1] != null && (n[H + 1].t === "?" || n[H + 1].t === "t" && n[H + 1].v === "/") || n[i].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (n[H].v === "/" || n[H].v === " " && n[H + 1] != null && n[H + 1].t == "?"));) {
          n[i].v += n[H].v;
          n[H] = {
            v: "",
            t: ";"
          };
          ++H;
        }
        U += n[i].v;
        i = H - 1;
        break;
      case "G":
        n[i].t = "t";
        n[i].v = wn(t, r);
        break;
    }
  }
  var V = "";
  var y;
  var N;
  if (U.length > 0) {
    if (U.charCodeAt(0) == 40) {
      y = t < 0 && U.charCodeAt(0) === 45 ? -t : t;
      N = Jr("n", U, y);
    } else {
      y = t < 0 && a > 1 ? -t : t;
      N = Jr("n", U, y);
      if (y < 0 && n[0] && n[0].t == "t") {
        N = N.substr(1);
        n[0].v = "-" + n[0].v;
      }
    }
    H = N.length - 1;
    var D = n.length;
    for (i = 0; i < n.length; ++i) {
      if (n[i] != null && n[i].t != "t" && n[i].v.indexOf(".") > -1) {
        D = i;
        break;
      }
    }
    var X = n.length;
    if (D === n.length && N.indexOf("E") === -1) {
      for (i = n.length - 1; i >= 0; --i) {
        if (n[i] != null && "n?".indexOf(n[i].t) !== -1) {
          if (H >= n[i].v.length - 1) {
            H -= n[i].v.length;
            n[i].v = N.substr(H + 1, n[i].v.length);
          } else if (H < 0) {
            n[i].v = "";
          } else {
            n[i].v = N.substr(0, H + 1);
            H = -1;
          }
          n[i].t = "t";
          X = i;
        }
      }
      if (H >= 0 && X < n.length) {
        n[X].v = N.substr(0, H + 1) + n[X].v;
      }
    } else if (D !== n.length && N.indexOf("E") === -1) {
      H = N.indexOf(".") - 1;
      i = D;
      for (; i >= 0; --i) {
        if (n[i] != null && "n?".indexOf(n[i].t) !== -1) {
          c = n[i].v.indexOf(".") > -1 && i === D ? n[i].v.indexOf(".") - 1 : n[i].v.length - 1;
          V = n[i].v.substr(c + 1);
          for (; c >= 0; --c) {
            if (H >= 0 && (n[i].v.charAt(c) === "0" || n[i].v.charAt(c) === "#")) {
              V = N.charAt(H--) + V;
            }
          }
          n[i].v = V;
          n[i].t = "t";
          X = i;
        }
      }
      if (H >= 0 && X < n.length) {
        n[X].v = N.substr(0, H + 1) + n[X].v;
      }
      H = N.indexOf(".") + 1;
      i = D;
      for (; i < n.length; ++i) {
        if (n[i] != null && ("n?(".indexOf(n[i].t) !== -1 || i === D)) {
          c = n[i].v.indexOf(".") > -1 && i === D ? n[i].v.indexOf(".") + 1 : 0;
          V = n[i].v.substr(0, c);
          for (; c < n[i].v.length; ++c) {
            if (H < N.length) {
              V += N.charAt(H++);
            }
          }
          n[i].v = V;
          n[i].t = "t";
          X = i;
        }
      }
    }
  }
  for (i = 0; i < n.length; ++i) {
    if (n[i] != null && "n?".indexOf(n[i].t) > -1) {
      y = a > 1 && t < 0 && i > 0 && n[i - 1].v === "-" ? -t : t;
      n[i].v = Jr(n[i].t, n[i].v, y);
      n[i].t = "t";
    }
  }
  var b = "";
  for (i = 0; i !== n.length; ++i) {
    if (n[i] != null) {
      b += n[i].v;
    }
  }
  return b;
}
var s0 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function f0(e, t) {
  if (t == null) {
    return false;
  }
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case "=":
      if (e == r) {
        return true;
      }
      break;
    case ">":
      if (e > r) {
        return true;
      }
      break;
    case "<":
      if (e < r) {
        return true;
      }
      break;
    case "<>":
      if (e != r) {
        return true;
      }
      break;
    case ">=":
      if (e >= r) {
        return true;
      }
      break;
    case "<=":
      if (e <= r) {
        return true;
      }
      break;
  }
  return false;
}
function hf(e, t) {
  var r = lf(e);
  var a = r.length;
  var n = r[a - 1].indexOf("@");
  if (a < 4 && n > -1) {
    --a;
  }
  if (r.length > 4) {
    throw new Error("cannot find right format for |" + r.join("|") + "|");
  }
  if (typeof t != "number") {
    return [4, r.length === 4 || n > -1 ? r[r.length - 1] : "@"];
  }
  if (typeof t == "number" && !isFinite(t)) {
    t = 0;
  }
  switch (r.length) {
    case 1:
      r = n > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = n > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = n > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var s = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1) {
    return [a, s];
  }
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var i = r[0].match(s0);
    var f = r[1].match(s0);
    if (f0(t, i)) {
      return [a, r[0]];
    } else if (f0(t, f)) {
      return [a, r[1]];
    } else {
      return [a, r[i != null && f != null ? 2 : 1]];
    }
  }
  return [a, s];
}
function et(e, t, r) {
  if (r == null) {
    r = {};
  }
  var a = "";
  switch (typeof e) {
    case "string":
      if (e == "m/d/yy" && r.dateNF) {
        a = r.dateNF;
      } else {
        a = e;
      }
      break;
    case "number":
      if (e == 14 && r.dateNF) {
        a = r.dateNF;
      } else {
        a = (r.table ?? Me)[e];
      }
      if (a == null) {
        a = r.table && r.table[a0[e]] || Me[a0[e]];
      }
      if (a == null) {
        a = zs[e] || "General";
      }
      break;
  }
  if (Oa(a, 0)) {
    return wn(t, r);
  }
  if (t instanceof Date) {
    t = fr(t, r.date1904);
  }
  var n = hf(a, t);
  if (Oa(n[1])) {
    return wn(t, r);
  }
  if (t === true) {
    t = "TRUE";
  } else if (t === false) {
    t = "FALSE";
  } else {
    if (t === "" || t == null) {
      return "";
    }
    if (isNaN(t) && n[1].indexOf("0") > -1) {
      return "#NUM!";
    }
    if (!isFinite(t) && n[1].indexOf("0") > -1) {
      return "#DIV/0!";
    }
  }
  return cf(n[1], t, r, n[0]);
}
function ei(e, t) {
  if (typeof t != "number") {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (Me[r] == null) {
        if (t < 0) {
          t = r;
        }
        continue;
      }
      if (Me[r] == e) {
        t = r;
        break;
      }
    }
    if (t < 0) {
      t = 391;
    }
  }
  Me[t] = e;
  return t;
}
function $a(e) {
  for (var t = 0; t != 392; ++t) {
    if (e[t] !== undefined) {
      ei(e[t], t);
    }
  }
}
function za() {
  Me = $s();
}
var Ra = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function uf(e) {
  var t = typeof e == "number" ? Me[e] : e;
  t = t.replace(Ra, "(\\d+)");
  Ra.lastIndex = 0;
  return new RegExp("^" + t + "$");
}
function xf(e, t, r) {
  var a = -1;
  var n = -1;
  var s = -1;
  var i = -1;
  var f = -1;
  var o = -1;
  (t.match(Ra) || []).forEach(function (x, h) {
    var u = parseInt(r[h + 1], 10);
    switch (x.toLowerCase().charAt(0)) {
      case "y":
        a = u;
        break;
      case "d":
        s = u;
        break;
      case "h":
        i = u;
        break;
      case "s":
        o = u;
        break;
      case "m":
        if (i >= 0) {
          f = u;
        } else {
          n = u;
        }
        break;
    }
  });
  Ra.lastIndex = 0;
  if (o >= 0 && f == -1 && n >= 0) {
    f = n;
    n = -1;
  }
  var l = ("" + (a >= 0 ? a : new Date().getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (s >= 1 ? s : 1)).slice(-2);
  if (l.length == 7) {
    l = "0" + l;
  }
  if (l.length == 8) {
    l = "20" + l;
  }
  var c = ("00" + (i >= 0 ? i : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2);
  if (i == -1 && f == -1 && o == -1) {
    return l;
  } else if (a == -1 && n == -1 && s == -1) {
    return c;
  } else {
    return l + "T" + c;
  }
}
var df = {
  "d.m": "d\\.m"
};
function pf(e, t) {
  return ei(df[e] || e, t);
}
var o0 = function () {
  var e = {
    version: "1.2.0"
  };
  function t() {
    var y = 0;
    var N = new Array(256);
    for (var D = 0; D != 256; ++D) {
      y = D;
      y = y & 1 ? y >>> 1 ^ -306674912 : y >>> 1;
      y = y & 1 ? y >>> 1 ^ -306674912 : y >>> 1;
      y = y & 1 ? y >>> 1 ^ -306674912 : y >>> 1;
      y = y & 1 ? y >>> 1 ^ -306674912 : y >>> 1;
      y = y & 1 ? y >>> 1 ^ -306674912 : y >>> 1;
      y = y & 1 ? y >>> 1 ^ -306674912 : y >>> 1;
      y = y & 1 ? y >>> 1 ^ -306674912 : y >>> 1;
      y = y & 1 ? y >>> 1 ^ -306674912 : y >>> 1;
      N[D] = y;
    }
    if (typeof Int32Array !== "undefined") {
      return new Int32Array(N);
    } else {
      return N;
    }
  }
  var r = t();
  function a(y) {
    var N = 0;
    var D = 0;
    var X = 0;
    var b = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
    for (X = 0; X != 256; ++X) {
      b[X] = y[X];
    }
    for (X = 0; X != 256; ++X) {
      D = y[X];
      N = 256 + X;
      for (; N < 4096; N += 256) {
        D = b[N] = D >>> 8 ^ y[D & 255];
      }
    }
    var Y = [];
    for (X = 1; X != 16; ++X) {
      Y[X - 1] = typeof Int32Array !== "undefined" && typeof b.subarray == "function" ? b.subarray(X * 256, X * 256 + 256) : b.slice(X * 256, X * 256 + 256);
    }
    return Y;
  }
  var n = a(r);
  var s = n[0];
  var i = n[1];
  var f = n[2];
  var o = n[3];
  var l = n[4];
  var c = n[5];
  var x = n[6];
  var h = n[7];
  var u = n[8];
  var p = n[9];
  var g = n[10];
  var m = n[11];
  var v = n[12];
  var C = n[13];
  var F = n[14];
  function U(y, N) {
    var D = N ^ -1;
    for (var X = 0, b = y.length; X < b;) {
      D = D >>> 8 ^ r[(D ^ y.charCodeAt(X++)) & 255];
    }
    return ~D;
  }
  function H(y, N) {
    var D = N ^ -1;
    for (var X = y.length - 15, b = 0; b < X;) {
      D = F[y[b++] ^ D & 255] ^ C[y[b++] ^ D >> 8 & 255] ^ v[y[b++] ^ D >> 16 & 255] ^ m[y[b++] ^ D >>> 24] ^ g[y[b++]] ^ p[y[b++]] ^ u[y[b++]] ^ h[y[b++]] ^ x[y[b++]] ^ c[y[b++]] ^ l[y[b++]] ^ o[y[b++]] ^ f[y[b++]] ^ i[y[b++]] ^ s[y[b++]] ^ r[y[b++]];
    }
    for (X += 15; b < X;) {
      D = D >>> 8 ^ r[(D ^ y[b++]) & 255];
    }
    return ~D;
  }
  function V(y, N) {
    for (var D = N ^ -1, X = 0, b = y.length, Y = 0, le = 0; X < b;) {
      Y = y.charCodeAt(X++);
      if (Y < 128) {
        D = D >>> 8 ^ r[(D ^ Y) & 255];
      } else if (Y < 2048) {
        D = D >>> 8 ^ r[(D ^ (Y >> 6 & 31 | 192)) & 255];
        D = D >>> 8 ^ r[(D ^ (Y & 63 | 128)) & 255];
      } else if (Y >= 55296 && Y < 57344) {
        Y = (Y & 1023) + 64;
        le = y.charCodeAt(X++) & 1023;
        D = D >>> 8 ^ r[(D ^ (Y >> 8 & 7 | 240)) & 255];
        D = D >>> 8 ^ r[(D ^ (Y >> 2 & 63 | 128)) & 255];
        D = D >>> 8 ^ r[(D ^ (le >> 6 & 15 | 128 | (Y & 3) << 4)) & 255];
        D = D >>> 8 ^ r[(D ^ (le & 63 | 128)) & 255];
      } else {
        D = D >>> 8 ^ r[(D ^ (Y >> 12 & 15 | 224)) & 255];
        D = D >>> 8 ^ r[(D ^ (Y >> 6 & 63 | 128)) & 255];
        D = D >>> 8 ^ r[(D ^ (Y & 63 | 128)) & 255];
      }
    }
    return ~D;
  }
  e.table = r;
  e.bstr = U;
  e.buf = H;
  e.str = V;
  return e;
}();
var Pe = function () {
  var t = {
    version: "1.2.2"
  };
  function r(d, E) {
    var _ = d.split("/");
    var w = E.split("/");
    for (var T = 0, S = 0, P = Math.min(_.length, w.length); T < P; ++T) {
      if (S = _[T].length - w[T].length) {
        return S;
      }
      if (_[T] != w[T]) {
        if (_[T] < w[T]) {
          return -1;
        } else {
          return 1;
        }
      }
    }
    return _.length - w.length;
  }
  function a(d) {
    if (d.charAt(d.length - 1) == "/") {
      if (d.slice(0, -1).indexOf("/") === -1) {
        return d;
      } else {
        return a(d.slice(0, -1));
      }
    }
    var E = d.lastIndexOf("/");
    if (E === -1) {
      return d;
    } else {
      return d.slice(0, E + 1);
    }
  }
  function n(d) {
    if (d.charAt(d.length - 1) == "/") {
      return n(d.slice(0, -1));
    }
    var E = d.lastIndexOf("/");
    if (E === -1) {
      return d;
    } else {
      return d.slice(E + 1);
    }
  }
  function s(d, E) {
    if (typeof E == "string") {
      E = new Date(E);
    }
    var _ = E.getHours();
    _ = _ << 6 | E.getMinutes();
    _ = _ << 5 | E.getSeconds() >>> 1;
    d.write_shift(2, _);
    var w = E.getFullYear() - 1980;
    w = w << 4 | E.getMonth() + 1;
    w = w << 5 | E.getDate();
    d.write_shift(2, w);
  }
  function i(d) {
    var E = d.read_shift(2) & 65535;
    var _ = d.read_shift(2) & 65535;
    var w = new Date();
    var T = _ & 31;
    _ >>>= 5;
    var S = _ & 15;
    _ >>>= 4;
    w.setMilliseconds(0);
    w.setFullYear(_ + 1980);
    w.setMonth(S - 1);
    w.setDate(T);
    var P = E & 31;
    E >>>= 5;
    var W = E & 63;
    E >>>= 6;
    w.setHours(E);
    w.setMinutes(W);
    w.setSeconds(P << 1);
    return w;
  }
  function f(d) {
    wr(d, 0);
    var E = {};
    var _ = 0;
    for (; d.l <= d.length - 4;) {
      var w = d.read_shift(2);
      var T = d.read_shift(2);
      var S = d.l + T;
      var P = {};
      switch (w) {
        case 21589:
          _ = d.read_shift(1);
          if (_ & 1) {
            P.mtime = d.read_shift(4);
          }
          if (T > 5) {
            if (_ & 2) {
              P.atime = d.read_shift(4);
            }
            if (_ & 4) {
              P.ctime = d.read_shift(4);
            }
          }
          if (P.mtime) {
            P.mt = new Date(P.mtime * 1000);
          }
          break;
        case 1:
          {
            var W = d.read_shift(4);
            var R = d.read_shift(4);
            P.usz = R * Math.pow(2, 32) + W;
            W = d.read_shift(4);
            R = d.read_shift(4);
            P.csz = R * Math.pow(2, 32) + W;
          }
          break;
      }
      d.l = S;
      E[w] = P;
    }
    return E;
  }
  var o;
  function l() {
    return o ||= mf;
  }
  function c(d, E) {
    if (d[0] == 80 && d[1] == 75) {
      return qn(d, E);
    }
    if ((d[0] | 32) == 109 && (d[1] | 32) == 105) {
      return Fs(d, E);
    }
    if (d.length < 512) {
      throw new Error("CFB file size " + d.length + " < 512");
    }
    var _ = 3;
    var w = 512;
    var T = 0;
    var S = 0;
    var P = 0;
    var W = 0;
    var R = 0;
    var L = [];
    var M = d.slice(0, 512);
    wr(M, 0);
    var j = x(M);
    _ = j[0];
    switch (_) {
      case 3:
        w = 512;
        break;
      case 4:
        w = 4096;
        break;
      case 0:
        if (j[1] == 0) {
          return qn(d, E);
        }
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + _);
    }
    if (w !== 512) {
      M = d.slice(0, w);
      wr(M, 28);
    }
    var q = d.slice(0, w);
    h(M, _);
    var ae = M.read_shift(4, "i");
    if (_ === 3 && ae !== 0) {
      throw new Error("# Directory Sectors: Expected 0 saw " + ae);
    }
    M.l += 4;
    P = M.read_shift(4, "i");
    M.l += 4;
    M.chk("00100000", "Mini Stream Cutoff Size: ");
    W = M.read_shift(4, "i");
    T = M.read_shift(4, "i");
    R = M.read_shift(4, "i");
    S = M.read_shift(4, "i");
    for (var Z = -1, Q = 0; Q < 109 && (Z = M.read_shift(4, "i"), !(Z < 0)); ++Q) {
      L[Q] = Z;
    }
    var de = u(d, w);
    m(R, S, de, w, L);
    var be = C(de, P, L, w);
    if (P < be.length) {
      be[P].name = "!Directory";
    }
    if (T > 0 && W !== le) {
      be[W].name = "!MiniFAT";
    }
    be[L[0]].name = "!FAT";
    be.fat_addrs = L;
    be.ssz = w;
    var He = {};
    var or = [];
    var Xt = [];
    var Vt = [];
    F(P, be, de, or, T, He, Xt, W);
    p(Xt, Vt, or);
    or.shift();
    var $t = {
      FileIndex: Xt,
      FullPaths: Vt
    };
    if (E && E.raw) {
      $t.raw = {
        header: q,
        sectors: de
      };
    }
    return $t;
  }
  function x(d) {
    if (d[d.l] == 80 && d[d.l + 1] == 75) {
      return [0, 0];
    }
    d.chk(_e, "Header Signature: ");
    d.l += 16;
    var E = d.read_shift(2, "u");
    return [d.read_shift(2, "u"), E];
  }
  function h(d, E) {
    var _ = 9;
    d.l += 2;
    switch (_ = d.read_shift(2)) {
      case 9:
        if (E != 3) {
          throw new Error("Sector Shift: Expected 9 saw " + _);
        }
        break;
      case 12:
        if (E != 4) {
          throw new Error("Sector Shift: Expected 12 saw " + _);
        }
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + _);
    }
    d.chk("0600", "Mini Sector Shift: ");
    d.chk("000000000000", "Reserved: ");
  }
  function u(d, E) {
    for (var _ = Math.ceil(d.length / E) - 1, w = [], T = 1; T < _; ++T) {
      w[T - 1] = d.slice(T * E, (T + 1) * E);
    }
    w[_ - 1] = d.slice(_ * E);
    return w;
  }
  function p(d, E, _) {
    for (var w = 0, T = 0, S = 0, P = 0, W = 0, R = _.length, L = [], M = []; w < R; ++w) {
      L[w] = M[w] = w;
      E[w] = _[w];
    }
    for (; W < M.length; ++W) {
      w = M[W];
      T = d[w].L;
      S = d[w].R;
      P = d[w].C;
      if (L[w] === w) {
        if (T !== -1 && L[T] !== T) {
          L[w] = L[T];
        }
        if (S !== -1 && L[S] !== S) {
          L[w] = L[S];
        }
      }
      if (P !== -1) {
        L[P] = w;
      }
      if (T !== -1 && w != L[w]) {
        L[T] = L[w];
        if (M.lastIndexOf(T) < W) {
          M.push(T);
        }
      }
      if (S !== -1 && w != L[w]) {
        L[S] = L[w];
        if (M.lastIndexOf(S) < W) {
          M.push(S);
        }
      }
    }
    for (w = 1; w < R; ++w) {
      if (L[w] === w) {
        if (S !== -1 && L[S] !== S) {
          L[w] = L[S];
        } else if (T !== -1 && L[T] !== T) {
          L[w] = L[T];
        }
      }
    }
    for (w = 1; w < R; ++w) {
      if (d[w].type !== 0) {
        W = w;
        if (W != L[W]) {
          do {
            W = L[W];
            E[w] = E[W] + "/" + E[w];
          } while (W !== 0 && L[W] !== -1 && W != L[W]);
        }
        L[w] = -1;
      }
    }
    E[0] += "/";
    w = 1;
    for (; w < R; ++w) {
      if (d[w].type !== 2) {
        E[w] += "/";
      }
    }
  }
  function g(d, E, _) {
    var w = d.start;
    for (var T = d.size, S = [], P = w; _ && T > 0 && P >= 0;) {
      S.push(E.slice(P * Y, P * Y + Y));
      T -= Y;
      P = xt(_, P * 4);
    }
    if (S.length === 0) {
      return I(0);
    } else {
      return je(S).slice(0, d.size);
    }
  }
  function m(d, E, _, w, T) {
    var S = le;
    if (d === le) {
      if (E !== 0) {
        throw new Error("DIFAT chain shorter than expected");
      }
    } else if (d !== -1) {
      var P = _[d];
      var W = (w >>> 2) - 1;
      if (!P) {
        return;
      }
      for (var R = 0; R < W && (S = xt(P, R * 4)) !== le; ++R) {
        T.push(S);
      }
      if (E >= 1) {
        m(xt(P, w - 4), E - 1, _, w, T);
      }
    }
  }
  function v(d, E, _, w, T) {
    var S = [];
    var P = [];
    T ||= [];
    var W = w - 1;
    var R = 0;
    var L = 0;
    for (R = E; R >= 0;) {
      T[R] = true;
      S[S.length] = R;
      P.push(d[R]);
      var M = _[Math.floor(R * 4 / w)];
      L = R * 4 & W;
      if (w < 4 + L) {
        throw new Error("FAT boundary crossed: " + R + " 4 " + w);
      }
      if (!d[M]) {
        break;
      }
      R = xt(d[M], L);
    }
    return {
      nodes: S,
      data: p0([P])
    };
  }
  function C(d, E, _, w) {
    var T = d.length;
    var S = [];
    var P = [];
    var W = [];
    var R = [];
    var L = w - 1;
    var M = 0;
    var j = 0;
    var q = 0;
    var ae = 0;
    for (M = 0; M < T; ++M) {
      W = [];
      q = M + E;
      if (q >= T) {
        q -= T;
      }
      if (!P[q]) {
        R = [];
        var Z = [];
        for (j = q; j >= 0;) {
          Z[j] = true;
          P[j] = true;
          W[W.length] = j;
          R.push(d[j]);
          var Q = _[Math.floor(j * 4 / w)];
          ae = j * 4 & L;
          if (w < 4 + ae) {
            throw new Error("FAT boundary crossed: " + j + " 4 " + w);
          }
          if (!d[Q] || (j = xt(d[Q], ae), Z[j])) {
            break;
          }
        }
        S[q] = {
          nodes: W,
          data: p0([R])
        };
      }
    }
    return S;
  }
  function F(d, E, _, w, T, S, P, W) {
    var R = 0;
    var L = w.length ? 2 : 0;
    for (var M = E[d].data, j = 0, q = 0, ae; j < M.length; j += 128) {
      var Z = M.slice(j, j + 128);
      wr(Z, 64);
      q = Z.read_shift(2);
      ae = Mn(Z, 0, q - L);
      w.push(ae);
      var Q = {
        name: ae,
        type: Z.read_shift(1),
        color: Z.read_shift(1),
        L: Z.read_shift(4, "i"),
        R: Z.read_shift(4, "i"),
        C: Z.read_shift(4, "i"),
        clsid: Z.read_shift(16),
        state: Z.read_shift(4, "i"),
        start: 0,
        size: 0
      };
      var de = Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2);
      if (de !== 0) {
        Q.ct = U(Z, Z.l - 8);
      }
      var be = Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2);
      if (be !== 0) {
        Q.mt = U(Z, Z.l - 8);
      }
      Q.start = Z.read_shift(4, "i");
      Q.size = Z.read_shift(4, "i");
      if (Q.size < 0 && Q.start < 0) {
        Q.size = Q.type = 0;
        Q.start = le;
        Q.name = "";
      }
      if (Q.type === 5) {
        R = Q.start;
        if (T > 0 && R !== le) {
          E[R].name = "!StreamData";
        }
      } else if (Q.size >= 4096) {
        Q.storage = "fat";
        if (E[Q.start] === undefined) {
          E[Q.start] = v(_, Q.start, E.fat_addrs, E.ssz);
        }
        E[Q.start].name = Q.name;
        Q.content = E[Q.start].data.slice(0, Q.size);
      } else {
        Q.storage = "minifat";
        if (Q.size < 0) {
          Q.size = 0;
        } else if (R !== le && Q.start !== le && E[R]) {
          Q.content = g(Q, E[R].data, (E[W] || {}).data);
        }
      }
      if (Q.content) {
        wr(Q.content, 0);
      }
      S[ae] = Q;
      P.push(Q);
    }
  }
  function U(d, E) {
    return new Date((Dr(d, E + 4) / 10000000 * Math.pow(2, 32) + Dr(d, E) / 10000000 - 11644473600) * 1000);
  }
  function H(d, E) {
    l();
    return c(o.readFileSync(d), E);
  }
  function V(d, E) {
    var _ = E && E.type;
    if (!_) {
      if (Oe && Buffer.isBuffer(d)) {
        _ = "buffer";
      }
    }
    switch (_ || "base64") {
      case "file":
        return H(d, E);
      case "base64":
        return c(kr(it(d)), E);
      case "binary":
        return c(kr(d), E);
    }
    return c(d, E);
  }
  function y(d, E) {
    var _ = E || {};
    var w = _.root || "Root Entry";
    d.FullPaths ||= [];
    d.FileIndex ||= [];
    if (d.FullPaths.length !== d.FileIndex.length) {
      throw new Error("inconsistent CFB structure");
    }
    if (d.FullPaths.length === 0) {
      d.FullPaths[0] = w + "/";
      d.FileIndex[0] = {
        name: w,
        type: 5
      };
    }
    if (_.CLSID) {
      d.FileIndex[0].clsid = _.CLSID;
    }
    N(d);
  }
  function N(d) {
    var E = "Sh33tJ5";
    if (!Pe.find(d, "/" + E)) {
      var _ = I(4);
      _[0] = 55;
      _[1] = _[3] = 50;
      _[2] = 54;
      d.FileIndex.push({
        name: E,
        type: 2,
        content: _,
        size: 4,
        L: 69,
        R: 69,
        C: 69
      });
      d.FullPaths.push(d.FullPaths[0] + E);
      D(d);
    }
  }
  function D(d, E) {
    y(d);
    var _ = false;
    var w = false;
    for (var T = d.FullPaths.length - 1; T >= 0; --T) {
      var S = d.FileIndex[T];
      switch (S.type) {
        case 0:
          if (w) {
            _ = true;
          } else {
            d.FileIndex.pop();
            d.FullPaths.pop();
          }
          break;
        case 1:
        case 2:
        case 5:
          w = true;
          if (isNaN(S.R * S.L * S.C)) {
            _ = true;
          }
          if (S.R > -1 && S.L > -1 && S.R == S.L) {
            _ = true;
          }
          break;
        default:
          _ = true;
          break;
      }
    }
    if (!!_ || !!E) {
      var P = new Date(1987, 1, 19);
      var W = 0;
      var R = Object.create ? Object.create(null) : {};
      var L = [];
      for (T = 0; T < d.FullPaths.length; ++T) {
        R[d.FullPaths[T]] = true;
        if (d.FileIndex[T].type !== 0) {
          L.push([d.FullPaths[T], d.FileIndex[T]]);
        }
      }
      for (T = 0; T < L.length; ++T) {
        var M = a(L[T][0]);
        for (w = R[M]; !w;) {
          while (a(M) && !R[a(M)]) {
            M = a(M);
          }
          L.push([M, {
            name: n(M).replace("/", ""),
            type: 1,
            clsid: rr,
            ct: P,
            mt: P,
            content: null
          }]);
          R[M] = true;
          M = a(L[T][0]);
          w = R[M];
        }
      }
      L.sort(function (ae, Z) {
        return r(ae[0], Z[0]);
      });
      d.FullPaths = [];
      d.FileIndex = [];
      T = 0;
      for (; T < L.length; ++T) {
        d.FullPaths[T] = L[T][0];
        d.FileIndex[T] = L[T][1];
      }
      for (T = 0; T < L.length; ++T) {
        var j = d.FileIndex[T];
        var q = d.FullPaths[T];
        j.name = n(q).replace("/", "");
        j.L = j.R = j.C = -(j.color = 1);
        j.size = j.content ? j.content.length : 0;
        j.start = 0;
        j.clsid = j.clsid || rr;
        if (T === 0) {
          j.C = L.length > 1 ? 1 : -1;
          j.size = 0;
          j.type = 5;
        } else if (q.slice(-1) == "/") {
          for (W = T + 1; W < L.length && a(d.FullPaths[W]) != q; ++W);
          j.C = W >= L.length ? -1 : W;
          W = T + 1;
          for (; W < L.length && a(d.FullPaths[W]) != a(q); ++W);
          j.R = W >= L.length ? -1 : W;
          j.type = 1;
        } else {
          if (a(d.FullPaths[T + 1] || "") == a(q)) {
            j.R = T + 1;
          }
          j.type = 2;
        }
      }
    }
  }
  function X(d, E) {
    var _ = E || {};
    if (_.fileType == "mad") {
      return ys(d, _);
    }
    D(d);
    switch (_.fileType) {
      case "zip":
        return gs(d, _);
    }
    var w = function (ae) {
      var Z = 0;
      var Q = 0;
      for (var de = 0; de < ae.FileIndex.length; ++de) {
        var be = ae.FileIndex[de];
        if (be.content) {
          var He = be.content.length;
          if (He > 0) {
            if (He < 4096) {
              Z += He + 63 >> 6;
            } else {
              Q += He + 511 >> 9;
            }
          }
        }
      }
      var or = ae.FullPaths.length + 3 >> 2;
      var Xt = Z + 7 >> 3;
      var Vt = Z + 127 >> 7;
      for (var $t = Xt + Q + or + Vt, ht = $t + 127 >> 7, an = ht <= 109 ? 0 : Math.ceil((ht - 109) / 127); $t + ht + an + 127 >> 7 > ht;) {
        an = ++ht <= 109 ? 0 : Math.ceil((ht - 109) / 127);
      }
      var Yr = [1, an, ht, Vt, or, Q, Z, 0];
      ae.FileIndex[0].size = Z << 6;
      Yr[7] = (ae.FileIndex[0].start = Yr[0] + Yr[1] + Yr[2] + Yr[3] + Yr[4] + Yr[5]) + (Yr[6] + 7 >> 3);
      return Yr;
    }(d);
    var T = I(w[7] << 9);
    var S = 0;
    var P = 0;
    {
      for (S = 0; S < 8; ++S) {
        T.write_shift(1, ce[S]);
      }
      for (S = 0; S < 8; ++S) {
        T.write_shift(2, 0);
      }
      T.write_shift(2, 62);
      T.write_shift(2, 3);
      T.write_shift(2, 65534);
      T.write_shift(2, 9);
      T.write_shift(2, 6);
      S = 0;
      for (; S < 3; ++S) {
        T.write_shift(2, 0);
      }
      T.write_shift(4, 0);
      T.write_shift(4, w[2]);
      T.write_shift(4, w[0] + w[1] + w[2] + w[3] - 1);
      T.write_shift(4, 0);
      T.write_shift(4, 4096);
      T.write_shift(4, w[3] ? w[0] + w[1] + w[2] - 1 : le);
      T.write_shift(4, w[3]);
      T.write_shift(-4, w[1] ? w[0] - 1 : le);
      T.write_shift(4, w[1]);
      S = 0;
      for (; S < 109; ++S) {
        T.write_shift(-4, S < w[2] ? w[1] + S : -1);
      }
    }
    if (w[1]) {
      for (P = 0; P < w[1]; ++P) {
        for (; S < 236 + P * 127; ++S) {
          T.write_shift(-4, S < w[2] ? w[1] + S : -1);
        }
        T.write_shift(-4, P === w[1] - 1 ? le : P + 1);
      }
    }
    function W(ae) {
      for (P += ae; S < P - 1; ++S) {
        T.write_shift(-4, S + 1);
      }
      if (ae) {
        ++S;
        T.write_shift(-4, le);
      }
    }
    P = S = 0;
    P += w[1];
    for (; S < P; ++S) {
      T.write_shift(-4, he.DIFSECT);
    }
    for (P += w[2]; S < P; ++S) {
      T.write_shift(-4, he.FATSECT);
    }
    W(w[3]);
    W(w[4]);
    for (var R = 0, L = 0, M = d.FileIndex[0]; R < d.FileIndex.length; ++R) {
      M = d.FileIndex[R];
      if (M.content) {
        L = M.content.length;
        if (!(L < 4096)) {
          M.start = P;
          W(L + 511 >> 9);
        }
      }
    }
    for (W(w[6] + 7 >> 3); T.l & 511;) {
      T.write_shift(-4, he.ENDOFCHAIN);
    }
    P = S = 0;
    R = 0;
    for (; R < d.FileIndex.length; ++R) {
      M = d.FileIndex[R];
      if (M.content) {
        L = M.content.length;
        if (!!L && !(L >= 4096)) {
          M.start = P;
          W(L + 63 >> 6);
        }
      }
    }
    while (T.l & 511) {
      T.write_shift(-4, he.ENDOFCHAIN);
    }
    for (S = 0; S < w[4] << 2; ++S) {
      var j = d.FullPaths[S];
      if (!j || j.length === 0) {
        for (R = 0; R < 17; ++R) {
          T.write_shift(4, 0);
        }
        for (R = 0; R < 3; ++R) {
          T.write_shift(4, -1);
        }
        for (R = 0; R < 12; ++R) {
          T.write_shift(4, 0);
        }
        continue;
      }
      M = d.FileIndex[S];
      if (S === 0) {
        M.start = M.size ? M.start - 1 : le;
      }
      var q = S === 0 && _.root || M.name;
      if (q.length > 31) {
        console.error("Name " + q + " will be truncated to " + q.slice(0, 31));
        q = q.slice(0, 31);
      }
      L = (q.length + 1) * 2;
      T.write_shift(64, q, "utf16le");
      T.write_shift(2, L);
      T.write_shift(1, M.type);
      T.write_shift(1, M.color);
      T.write_shift(-4, M.L);
      T.write_shift(-4, M.R);
      T.write_shift(-4, M.C);
      if (M.clsid) {
        T.write_shift(16, M.clsid, "hex");
      } else {
        for (R = 0; R < 4; ++R) {
          T.write_shift(4, 0);
        }
      }
      T.write_shift(4, M.state || 0);
      T.write_shift(4, 0);
      T.write_shift(4, 0);
      T.write_shift(4, 0);
      T.write_shift(4, 0);
      T.write_shift(4, M.start);
      T.write_shift(4, M.size);
      T.write_shift(4, 0);
    }
    for (S = 1; S < d.FileIndex.length; ++S) {
      M = d.FileIndex[S];
      if (M.size >= 4096) {
        T.l = M.start + 1 << 9;
        if (Oe && Buffer.isBuffer(M.content)) {
          M.content.copy(T, T.l, 0, M.size);
          T.l += M.size + 511 & -512;
        } else {
          for (R = 0; R < M.size; ++R) {
            T.write_shift(1, M.content[R]);
          }
          for (; R & 511; ++R) {
            T.write_shift(1, 0);
          }
        }
      }
    }
    for (S = 1; S < d.FileIndex.length; ++S) {
      M = d.FileIndex[S];
      if (M.size > 0 && M.size < 4096) {
        if (Oe && Buffer.isBuffer(M.content)) {
          M.content.copy(T, T.l, 0, M.size);
          T.l += M.size + 63 & -64;
        } else {
          for (R = 0; R < M.size; ++R) {
            T.write_shift(1, M.content[R]);
          }
          for (; R & 63; ++R) {
            T.write_shift(1, 0);
          }
        }
      }
    }
    if (Oe) {
      T.l = T.length;
    } else {
      while (T.l < T.length) {
        T.write_shift(1, 0);
      }
    }
    return T;
  }
  function b(d, E) {
    var _ = d.FullPaths.map(function (R) {
      return R.toUpperCase();
    });
    var w = _.map(function (R) {
      var L = R.split("/");
      return L[L.length - (R.slice(-1) == "/" ? 2 : 1)];
    });
    var T = false;
    if (E.charCodeAt(0) === 47) {
      T = true;
      E = _[0].slice(0, -1) + E;
    } else {
      T = E.indexOf("/") !== -1;
    }
    var S = E.toUpperCase();
    var P = T === true ? _.indexOf(S) : w.indexOf(S);
    if (P !== -1) {
      return d.FileIndex[P];
    }
    var W = !S.match(ma);
    S = S.replace(Yt, "");
    if (W) {
      S = S.replace(ma, "!");
    }
    P = 0;
    for (; P < _.length; ++P) {
      if ((W ? _[P].replace(ma, "!") : _[P]).replace(Yt, "") == S || (W ? w[P].replace(ma, "!") : w[P]).replace(Yt, "") == S) {
        return d.FileIndex[P];
      }
    }
    return null;
  }
  var Y = 64;
  var le = -2;
  var _e = "d0cf11e0a1b11ae1";
  var ce = [208, 207, 17, 224, 161, 177, 26, 225];
  var rr = "00000000000000000000000000000000";
  var he = {
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: le,
    FREESECT: -1,
    HEADER_SIGNATURE: _e,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: rr,
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function Qe(d, E, _) {
    l();
    var w = X(d, _);
    o.writeFileSync(E, w);
  }
  function Xe(d) {
    var E = new Array(d.length);
    for (var _ = 0; _ < d.length; ++_) {
      E[_] = String.fromCharCode(d[_]);
    }
    return E.join("");
  }
  function mr(d, E) {
    var _ = X(d, E);
    switch (E && E.type || "buffer") {
      case "file":
        l();
        o.writeFileSync(E.filename, _);
        return _;
      case "binary":
        if (typeof _ == "string") {
          return _;
        } else {
          return Xe(_);
        }
      case "base64":
        return ya(typeof _ == "string" ? _ : Xe(_));
      case "buffer":
        if (Oe) {
          if (Buffer.isBuffer(_)) {
            return _;
          } else {
            return zr(_);
          }
        }
      case "array":
        if (typeof _ == "string") {
          return kr(_);
        } else {
          return _;
        }
    }
    return _;
  }
  var yr;
  function ve(d) {
    try {
      var E = d.InflateRaw;
      var _ = new E();
      _._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag);
      if (_.bytesRead) {
        yr = d;
      } else {
        throw new Error("zlib does not expose bytesRead");
      }
    } catch (w) {
      console.error("cannot use native zlib: " + (w.message || w));
    }
  }
  function ge(d, E) {
    if (!yr) {
      return Zn(d, E);
    }
    var _ = yr.InflateRaw;
    var w = new _();
    var T = w._processChunk(d.slice(d.l), w._finishFlushFlag);
    d.l += w.bytesRead;
    return T;
  }
  function Te(d) {
    if (yr) {
      return yr.deflateRawSync(d);
    } else {
      return Gt(d);
    }
  }
  var Fe = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var ye = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
  var Ee = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function A(d) {
    var E = (d << 1 | d << 11) & 139536 | (d << 5 | d << 15) & 558144;
    return (E >> 16 | E >> 8 | E) & 255;
  }
  var B = typeof Uint8Array !== "undefined";
  var O = B ? new Uint8Array(256) : [];
  for (var k = 0; k < 256; ++k) {
    O[k] = A(k);
  }
  function z(d, E) {
    var _ = O[d & 255];
    if (E <= 8) {
      return _ >>> 8 - E;
    } else {
      _ = _ << 8 | O[d >> 8 & 255];
      if (E <= 16) {
        return _ >>> 16 - E;
      } else {
        _ = _ << 8 | O[d >> 16 & 255];
        return _ >>> 24 - E;
      }
    }
  }
  function ne(d, E) {
    var _ = E & 7;
    var w = E >>> 3;
    return (d[w] | (_ <= 6 ? 0 : d[w + 1] << 8)) >>> _ & 3;
  }
  function re(d, E) {
    var _ = E & 7;
    var w = E >>> 3;
    return (d[w] | (_ <= 5 ? 0 : d[w + 1] << 8)) >>> _ & 7;
  }
  function xe(d, E) {
    var _ = E & 7;
    var w = E >>> 3;
    return (d[w] | (_ <= 4 ? 0 : d[w + 1] << 8)) >>> _ & 15;
  }
  function te(d, E) {
    var _ = E & 7;
    var w = E >>> 3;
    return (d[w] | (_ <= 3 ? 0 : d[w + 1] << 8)) >>> _ & 31;
  }
  function we(d, E) {
    var _ = E & 7;
    var w = E >>> 3;
    return (d[w] | (_ <= 1 ? 0 : d[w + 1] << 8)) >>> _ & 127;
  }
  function ue(d, E, _) {
    var w = E & 7;
    var T = E >>> 3;
    var S = (1 << _) - 1;
    var P = d[T] >>> w;
    if (!(_ < 8 - w) && !(P |= d[T + 1] << 8 - w, _ < 16 - w) && !(P |= d[T + 2] << 16 - w, _ < 24 - w)) {
      P |= d[T + 3] << 24 - w;
    }
    return P & S;
  }
  function Se(d, E, _) {
    var w = E & 7;
    var T = E >>> 3;
    if (w <= 5) {
      d[T] |= (_ & 7) << w;
    } else {
      d[T] |= _ << w & 255;
      d[T + 1] = (_ & 7) >> 8 - w;
    }
    return E + 3;
  }
  function Le(d, E, _) {
    var w = E & 7;
    var T = E >>> 3;
    _ = (_ & 1) << w;
    d[T] |= _;
    return E + 1;
  }
  function $e(d, E, _) {
    var w = E & 7;
    var T = E >>> 3;
    _ <<= w;
    d[T] |= _ & 255;
    _ >>>= 8;
    d[T + 1] = _;
    return E + 8;
  }
  function tr(d, E, _) {
    var w = E & 7;
    var T = E >>> 3;
    _ <<= w;
    d[T] |= _ & 255;
    _ >>>= 8;
    d[T + 1] = _ & 255;
    d[T + 2] = _ >>> 8;
    return E + 16;
  }
  function ie(d, E) {
    var _ = d.length;
    var w = _ * 2 > E ? _ * 2 : E + 5;
    var T = 0;
    if (_ >= E) {
      return d;
    }
    if (Oe) {
      var S = e0(w);
      if (d.copy) {
        d.copy(S);
      } else {
        for (; T < d.length; ++T) {
          S[T] = d[T];
        }
      }
      return S;
    } else if (B) {
      var P = new Uint8Array(w);
      if (P.set) {
        P.set(d);
      } else {
        for (; T < _; ++T) {
          P[T] = d[T];
        }
      }
      return P;
    }
    d.length = w;
    return d;
  }
  function De(d) {
    var E = new Array(d);
    for (var _ = 0; _ < d; ++_) {
      E[_] = 0;
    }
    return E;
  }
  function ee(d, E, _) {
    var w = 1;
    var T = 0;
    var S = 0;
    var P = 0;
    var W = 0;
    var R = d.length;
    var L = B ? new Uint16Array(32) : De(32);
    for (S = 0; S < 32; ++S) {
      L[S] = 0;
    }
    for (S = R; S < _; ++S) {
      d[S] = 0;
    }
    R = d.length;
    var M = B ? new Uint16Array(R) : De(R);
    for (S = 0; S < R; ++S) {
      L[T = d[S]]++;
      if (w < T) {
        w = T;
      }
      M[S] = 0;
    }
    L[0] = 0;
    S = 1;
    for (; S <= w; ++S) {
      L[S + 16] = W = W + L[S - 1] << 1;
    }
    for (S = 0; S < R; ++S) {
      W = d[S];
      if (W != 0) {
        M[S] = L[W + 16]++;
      }
    }
    var j = 0;
    for (S = 0; S < R; ++S) {
      j = d[S];
      if (j != 0) {
        W = z(M[S], w) >> w - j;
        P = (1 << w + 4 - j) - 1;
        for (; P >= 0; --P) {
          E[W | P << j] = j & 15 | S << 4;
        }
      }
    }
    return w;
  }
  var at = B ? new Uint16Array(512) : De(512);
  var Ur = B ? new Uint16Array(32) : De(32);
  if (!B) {
    for (var Ve = 0; Ve < 512; ++Ve) {
      at[Ve] = 0;
    }
    for (Ve = 0; Ve < 32; ++Ve) {
      Ur[Ve] = 0;
    }
  }
  (function () {
    var d = [];
    for (var E = 0; E < 32; E++) {
      d.push(5);
    }
    ee(d, Ur, 32);
    var _ = [];
    for (E = 0; E <= 143; E++) {
      _.push(8);
    }
    for (; E <= 255; E++) {
      _.push(9);
    }
    for (; E <= 279; E++) {
      _.push(7);
    }
    for (; E <= 287; E++) {
      _.push(8);
    }
    ee(_, at, 288);
  })();
  var rn = function () {
    var E = B ? new Uint8Array(32768) : [];
    for (var _ = 0, w = 0; _ < Ee.length - 1; ++_) {
      for (; w < Ee[_ + 1]; ++w) {
        E[w] = _;
      }
    }
    for (; w < 32768; ++w) {
      E[w] = 29;
    }
    var T = B ? new Uint8Array(259) : [];
    _ = 0;
    w = 0;
    for (; _ < ye.length - 1; ++_) {
      for (; w < ye[_ + 1]; ++w) {
        T[w] = _;
      }
    }
    function S(W, R) {
      for (var L = 0; L < W.length;) {
        var M = Math.min(65535, W.length - L);
        var j = L + M == W.length;
        R.write_shift(1, +j);
        R.write_shift(2, M);
        R.write_shift(2, ~M & 65535);
        while (M-- > 0) {
          R[R.l++] = W[L++];
        }
      }
      return R.l;
    }
    function P(W, R) {
      for (var L = 0, M = 0, j = B ? new Uint16Array(32768) : []; M < W.length;) {
        var q = Math.min(65535, W.length - M);
        if (q < 10) {
          L = Se(R, L, +(M + q == W.length));
          if (L & 7) {
            L += 8 - (L & 7);
          }
          R.l = L / 8 | 0;
          R.write_shift(2, q);
          R.write_shift(2, ~q & 65535);
          while (q-- > 0) {
            R[R.l++] = W[M++];
          }
          L = R.l * 8;
          continue;
        }
        L = Se(R, L, +(M + q == W.length) + 2);
        var ae = 0;
        for (; q-- > 0;) {
          var Z = W[M];
          ae = (ae << 5 ^ Z) & 32767;
          var Q = -1;
          var de = 0;
          if ((Q = j[ae]) && (Q |= M & -32768, Q > M && (Q -= 32768), Q < M)) {
            while (W[Q + de] == W[M + de] && de < 250) {
              ++de;
            }
          }
          if (de > 2) {
            Z = T[de];
            if (Z <= 22) {
              L = $e(R, L, O[Z + 1] >> 1) - 1;
            } else {
              $e(R, L, 3);
              L += 5;
              $e(R, L, O[Z - 23] >> 5);
              L += 3;
            }
            var be = Z < 8 ? 0 : Z - 4 >> 2;
            if (be > 0) {
              tr(R, L, de - ye[Z]);
              L += be;
            }
            Z = E[M - Q];
            L = $e(R, L, O[Z] >> 3);
            L -= 3;
            var He = Z < 4 ? 0 : Z - 2 >> 1;
            if (He > 0) {
              tr(R, L, M - Q - Ee[Z]);
              L += He;
            }
            for (var or = 0; or < de; ++or) {
              j[ae] = M & 32767;
              ae = (ae << 5 ^ W[M]) & 32767;
              ++M;
            }
            q -= de - 1;
          } else {
            if (Z <= 143) {
              Z = Z + 48;
            } else {
              L = Le(R, L, 1);
            }
            L = $e(R, L, O[Z]);
            j[ae] = M & 32767;
            ++M;
          }
        }
        L = $e(R, L, 0) - 1;
      }
      R.l = (L + 7) / 8 | 0;
      return R.l;
    }
    return function (R, L) {
      if (R.length < 8) {
        return S(R, L);
      } else {
        return P(R, L);
      }
    };
  }();
  function Gt(d) {
    var E = I(50 + Math.floor(d.length * 1.1));
    var _ = rn(d, E);
    return E.slice(0, _);
  }
  var Ce = B ? new Uint16Array(32768) : De(32768);
  var vr = B ? new Uint16Array(32768) : De(32768);
  var lt = B ? new Uint16Array(128) : De(128);
  var ua = 1;
  var Kr = 1;
  function ct(d, E) {
    var _ = te(d, E) + 257;
    E += 5;
    var w = te(d, E) + 1;
    E += 5;
    var T = xe(d, E) + 4;
    E += 4;
    var S = 0;
    var P = B ? new Uint8Array(19) : De(19);
    var W = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var R = 1;
    var L = B ? new Uint8Array(8) : De(8);
    var M = B ? new Uint8Array(8) : De(8);
    var j = P.length;
    for (var q = 0; q < T; ++q) {
      P[Fe[q]] = S = re(d, E);
      if (R < S) {
        R = S;
      }
      L[S]++;
      E += 3;
    }
    var ae = 0;
    L[0] = 0;
    q = 1;
    for (; q <= R; ++q) {
      M[q] = ae = ae + L[q - 1] << 1;
    }
    for (q = 0; q < j; ++q) {
      if ((ae = P[q]) != 0) {
        W[q] = M[ae]++;
      }
    }
    var Z = 0;
    for (q = 0; q < j; ++q) {
      Z = P[q];
      if (Z != 0) {
        ae = O[W[q]] >> 8 - Z;
        for (var Q = (1 << 7 - Z) - 1; Q >= 0; --Q) {
          lt[ae | Q << Z] = Z & 7 | q << 3;
        }
      }
    }
    var de = [];
    for (R = 1; de.length < _ + w;) {
      ae = lt[we(d, E)];
      E += ae & 7;
      switch (ae >>>= 3) {
        case 16:
          S = 3 + ne(d, E);
          E += 2;
          ae = de[de.length - 1];
          while (S-- > 0) {
            de.push(ae);
          }
          break;
        case 17:
          S = 3 + re(d, E);
          E += 3;
          while (S-- > 0) {
            de.push(0);
          }
          break;
        case 18:
          S = 11 + we(d, E);
          E += 7;
          while (S-- > 0) {
            de.push(0);
          }
          break;
        default:
          de.push(ae);
          if (R < ae) {
            R = ae;
          }
          break;
      }
    }
    var be = de.slice(0, _);
    var He = de.slice(_);
    for (q = _; q < 286; ++q) {
      be[q] = 0;
    }
    for (q = w; q < 30; ++q) {
      He[q] = 0;
    }
    ua = ee(be, Ce, 286);
    Kr = ee(He, vr, 30);
    return E;
  }
  function xa(d, E) {
    if (d[0] == 3 && !(d[1] & 3)) {
      return [pt(E), 2];
    }
    for (var _ = 0, w = 0, T = e0(E || 262144), S = 0, P = T.length >>> 0, W = 0, R = 0; (w & 1) == 0;) {
      w = re(d, _);
      _ += 3;
      if (w >>> 1) {
        if (w >> 1 == 1) {
          W = 9;
          R = 5;
        } else {
          _ = ct(d, _);
          W = ua;
          R = Kr;
        }
      } else {
        if (_ & 7) {
          _ += 8 - (_ & 7);
        }
        var L = d[_ >>> 3] | d[(_ >>> 3) + 1] << 8;
        _ += 32;
        if (L > 0) {
          for (!E && P < S + L && (T = ie(T, S + L), P = T.length); L-- > 0;) {
            T[S++] = d[_ >>> 3];
            _ += 8;
          }
        }
        continue;
      }
      while (true) {
        if (!E && P < S + 32767) {
          T = ie(T, S + 32767);
          P = T.length;
        }
        var M = ue(d, _, W);
        var j = w >>> 1 == 1 ? at[M] : Ce[M];
        _ += j & 15;
        j >>>= 4;
        if ((j >>> 8 & 255) === 0) {
          T[S++] = j;
        } else {
          if (j == 256) {
            break;
          }
          j -= 257;
          var q = j < 8 ? 0 : j - 4 >> 2;
          if (q > 5) {
            q = 0;
          }
          var ae = S + ye[j];
          if (q > 0) {
            ae += ue(d, _, q);
            _ += q;
          }
          M = ue(d, _, R);
          j = w >>> 1 == 1 ? Ur[M] : vr[M];
          _ += j & 15;
          j >>>= 4;
          var Z = j < 4 ? 0 : j - 2 >> 1;
          var Q = Ee[j];
          if (Z > 0) {
            Q += ue(d, _, Z);
            _ += Z;
          }
          if (!E && P < ae) {
            T = ie(T, ae + 100);
            P = T.length;
          }
          while (S < ae) {
            T[S] = T[S - Q];
            ++S;
          }
        }
      }
    }
    if (E) {
      return [T, _ + 7 >>> 3];
    } else {
      return [T.slice(0, S), _ + 7 >>> 3];
    }
  }
  function Zn(d, E) {
    var _ = d.slice(d.l || 0);
    var w = xa(_, E);
    d.l += w[1];
    return w[0];
  }
  function Jn(d, E) {
    if (d) {
      if (typeof console !== "undefined") {
        console.error(E);
      }
    } else {
      throw new Error(E);
    }
  }
  function qn(d, E) {
    var _ = d;
    wr(_, 0);
    var w = [];
    var T = [];
    var S = {
      FileIndex: w,
      FullPaths: T
    };
    y(S, {
      root: E.root
    });
    for (var P = _.length - 4; (_[P] != 80 || _[P + 1] != 75 || _[P + 2] != 5 || _[P + 3] != 6) && P >= 0;) {
      --P;
    }
    _.l = P + 4;
    _.l += 4;
    var W = _.read_shift(2);
    _.l += 6;
    var R = _.read_shift(4);
    _.l = R;
    P = 0;
    for (; P < W; ++P) {
      _.l += 20;
      var L = _.read_shift(4);
      var M = _.read_shift(4);
      var j = _.read_shift(2);
      var q = _.read_shift(2);
      var ae = _.read_shift(2);
      _.l += 8;
      var Z = _.read_shift(4);
      var Q = f(_.slice(_.l + j, _.l + j + q));
      _.l += j + q + ae;
      var de = _.l;
      _.l = Z + 4;
      if (Q && Q[1]) {
        if ((Q[1] || {}).usz) {
          M = Q[1].usz;
        }
        if ((Q[1] || {}).csz) {
          L = Q[1].csz;
        }
      }
      _s(_, L, M, S, Q);
      _.l = de;
    }
    return S;
  }
  function _s(d, E, _, w, T) {
    d.l += 2;
    var S = d.read_shift(2);
    var P = d.read_shift(2);
    var W = i(d);
    if (S & 8257) {
      throw new Error("Unsupported ZIP encryption");
    }
    var R = d.read_shift(4);
    var L = d.read_shift(4);
    var M = d.read_shift(4);
    for (var j = d.read_shift(2), q = d.read_shift(2), ae = "", Z = 0; Z < j; ++Z) {
      ae += String.fromCharCode(d[d.l++]);
    }
    if (q) {
      var Q = f(d.slice(d.l, d.l + q));
      if ((Q[21589] || {}).mt) {
        W = Q[21589].mt;
      }
      if ((Q[1] || {}).usz) {
        M = Q[1].usz;
      }
      if ((Q[1] || {}).csz) {
        L = Q[1].csz;
      }
      if (T) {
        if ((T[21589] || {}).mt) {
          W = T[21589].mt;
        }
        if ((T[1] || {}).usz) {
          M = T[1].usz;
        }
        if ((T[1] || {}).csz) {
          L = T[1].csz;
        }
      }
    }
    d.l += q;
    var de = d.slice(d.l, d.l + L);
    switch (P) {
      case 8:
        de = ge(d, M);
        break;
      case 0:
        d.l += L;
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + P);
    }
    var be = false;
    if (S & 8) {
      R = d.read_shift(4);
      if (R == 134695760) {
        R = d.read_shift(4);
        be = true;
      }
      L = d.read_shift(4);
      M = d.read_shift(4);
    }
    if (L != E) {
      Jn(be, "Bad compressed size: " + E + " != " + L);
    }
    if (M != _) {
      Jn(be, "Bad uncompressed size: " + _ + " != " + M);
    }
    tn(w, ae, de, {
      unsafe: true,
      mt: W
    });
  }
  function gs(d, E) {
    var _ = E || {};
    var w = [];
    var T = [];
    var S = I(1);
    var P = _.compression ? 8 : 0;
    var W = 0;
    var R = 0;
    var L = 0;
    var M = 0;
    var j = 0;
    var q = d.FullPaths[0];
    var ae = q;
    var Z = d.FileIndex[0];
    var Q = [];
    var de = 0;
    for (R = 1; R < d.FullPaths.length; ++R) {
      ae = d.FullPaths[R].slice(q.length);
      Z = d.FileIndex[R];
      if (!!Z.size && !!Z.content && (!Array.isArray(Z.content) || Z.content.length != 0) && ae != "Sh33tJ5") {
        var be = M;
        var He = I(ae.length);
        for (L = 0; L < ae.length; ++L) {
          He.write_shift(1, ae.charCodeAt(L) & 127);
        }
        He = He.slice(0, He.l);
        Q[j] = typeof Z.content == "string" ? o0.bstr(Z.content, 0) : o0.buf(Z.content, 0);
        var or = typeof Z.content == "string" ? kr(Z.content) : Z.content;
        if (P == 8) {
          or = Te(or);
        }
        S = I(30);
        S.write_shift(4, 67324752);
        S.write_shift(2, 20);
        S.write_shift(2, W);
        S.write_shift(2, P);
        if (Z.mt) {
          s(S, Z.mt);
        } else {
          S.write_shift(4, 0);
        }
        S.write_shift(-4, Q[j]);
        S.write_shift(4, or.length);
        S.write_shift(4, Z.content.length);
        S.write_shift(2, He.length);
        S.write_shift(2, 0);
        M += S.length;
        w.push(S);
        M += He.length;
        w.push(He);
        M += or.length;
        w.push(or);
        S = I(46);
        S.write_shift(4, 33639248);
        S.write_shift(2, 0);
        S.write_shift(2, 20);
        S.write_shift(2, W);
        S.write_shift(2, P);
        S.write_shift(4, 0);
        S.write_shift(-4, Q[j]);
        S.write_shift(4, or.length);
        S.write_shift(4, Z.content.length);
        S.write_shift(2, He.length);
        S.write_shift(2, 0);
        S.write_shift(2, 0);
        S.write_shift(2, 0);
        S.write_shift(2, 0);
        S.write_shift(4, 0);
        S.write_shift(4, be);
        de += S.l;
        T.push(S);
        de += He.length;
        T.push(He);
        ++j;
      }
    }
    S = I(22);
    S.write_shift(4, 101010256);
    S.write_shift(2, 0);
    S.write_shift(2, 0);
    S.write_shift(2, j);
    S.write_shift(2, j);
    S.write_shift(4, de);
    S.write_shift(4, M);
    S.write_shift(2, 0);
    return je([je(w), je(T), S]);
  }
  var da = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function ws(d, E) {
    if (d.ctype) {
      return d.ctype;
    }
    var _ = d.name || "";
    var w = _.match(/\.([^\.]+)$/);
    if (w && da[w[1]] || E && (w = (_ = E).match(/[\.\\]([^\.\\])+$/), w && da[w[1]])) {
      return da[w[1]];
    } else {
      return "application/octet-stream";
    }
  }
  function Ts(d) {
    for (var E = ya(d), _ = [], w = 0; w < E.length; w += 76) {
      _.push(E.slice(w, w + 76));
    }
    return `${_.join(`\r
`)}\r
`;
  }
  function Es(d) {
    var E = d.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function (L) {
      var M = L.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (M.length == 1 ? "0" + M : M);
    });
    E = E.replace(/ $/mg, "=20").replace(/\t$/mg, "=09");
    if (E.charAt(0) == `
`) {
      E = "=0D" + E.slice(1);
    }
    E = E.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    var _ = [];
    for (var w = E.split(`\r
`), T = 0; T < w.length; ++T) {
      var S = w[T];
      if (S.length == 0) {
        _.push("");
        continue;
      }
      for (var P = 0; P < S.length;) {
        var W = 76;
        var R = S.slice(P, P + W);
        if (R.charAt(W - 1) == "=") {
          W--;
        } else if (R.charAt(W - 2) == "=") {
          W -= 2;
        } else if (R.charAt(W - 3) == "=") {
          W -= 3;
        }
        R = S.slice(P, P + W);
        P += W;
        if (P < S.length) {
          R += "=";
        }
        _.push(R);
      }
    }
    return _.join(`\r
`);
  }
  function Ss(d) {
    var E = [];
    for (var _ = 0; _ < d.length; ++_) {
      for (var w = d[_]; _ <= d.length && w.charAt(w.length - 1) == "=";) {
        w = w.slice(0, w.length - 1) + d[++_];
      }
      E.push(w);
    }
    for (var T = 0; T < E.length; ++T) {
      E[T] = E[T].replace(/[=][0-9A-Fa-f]{2}/g, function (S) {
        return String.fromCharCode(parseInt(S.slice(1), 16));
      });
    }
    return kr(E.join(`\r
`));
  }
  function As(d, E, _) {
    var w = "";
    var T = "";
    var S = "";
    var P;
    for (var W = 0; W < 10; ++W) {
      var R = E[W];
      if (!R || R.match(/^\s*$/)) {
        break;
      }
      var L = R.match(/^([^:]*?):\s*([^\s].*)$/);
      if (L) {
        switch (L[1].toLowerCase()) {
          case "content-location":
            w = L[2].trim();
            break;
          case "content-type":
            S = L[2].trim();
            break;
          case "content-transfer-encoding":
            T = L[2].trim();
            break;
        }
      }
    }
    ++W;
    switch (T.toLowerCase()) {
      case "base64":
        P = kr(it(E.slice(W).join("")));
        break;
      case "quoted-printable":
        P = Ss(E.slice(W));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + T);
    }
    var M = tn(d, w.slice(_.length), P, {
      unsafe: true
    });
    if (S) {
      M.ctype = S;
    }
  }
  function Fs(d, E) {
    if (Xe(d.slice(0, 13)).toLowerCase() != "mime-version:") {
      throw new Error("Unsupported MAD header");
    }
    var _ = E && E.root || "";
    var w = (Oe && Buffer.isBuffer(d) ? d.toString("binary") : Xe(d)).split(`\r
`);
    var T = 0;
    var S = "";
    for (T = 0; T < w.length; ++T) {
      S = w[T];
      if (!!/^Content-Location:/i.test(S) && (S = S.slice(S.indexOf("file")), _ ||= S.slice(0, S.lastIndexOf("/") + 1), S.slice(0, _.length) != _)) {
        while (_.length > 0 && (_ = _.slice(0, _.length - 1), _ = _.slice(0, _.lastIndexOf("/") + 1), S.slice(0, _.length) != _));
      }
    }
    var P = (w[1] || "").match(/boundary="(.*?)"/);
    if (!P) {
      throw new Error("MAD cannot find boundary");
    }
    var W = "--" + (P[1] || "");
    var R = [];
    var L = [];
    var M = {
      FileIndex: R,
      FullPaths: L
    };
    y(M);
    var j;
    var q = 0;
    for (T = 0; T < w.length; ++T) {
      var ae = w[T];
      if (ae === W || ae === W + "--") {
        if (q++) {
          As(M, w.slice(j, T), _);
        }
        j = T;
      }
    }
    return M;
  }
  function ys(d, E) {
    var _ = E || {};
    var w = _.boundary || "SheetJS";
    w = "------=" + w;
    var T = ["MIME-Version: 1.0", "Content-Type: multipart/related; boundary=\"" + w.slice(2) + "\"", "", "", ""];
    var S = d.FullPaths[0];
    var P = S;
    var W = d.FileIndex[0];
    for (var R = 1; R < d.FullPaths.length; ++R) {
      P = d.FullPaths[R].slice(S.length);
      W = d.FileIndex[R];
      if (!!W.size && !!W.content && P != "Sh33tJ5") {
        P = P.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function (de) {
          return "_x" + de.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function (de) {
          return "_u" + de.charCodeAt(0).toString(16) + "_";
        });
        var L = W.content;
        var M = Oe && Buffer.isBuffer(L) ? L.toString("binary") : Xe(L);
        var j = 0;
        for (var q = Math.min(1024, M.length), ae = 0, Z = 0; Z <= q; ++Z) {
          if ((ae = M.charCodeAt(Z)) >= 32 && ae < 128) {
            ++j;
          }
        }
        var Q = j >= q * 4 / 5;
        T.push(w);
        T.push("Content-Location: " + (_.root || "file:///C:/SheetJS/") + P);
        T.push("Content-Transfer-Encoding: " + (Q ? "quoted-printable" : "base64"));
        T.push("Content-Type: " + ws(W, P));
        T.push("");
        T.push(Q ? Es(M) : Ts(M));
      }
    }
    T.push(`${w}--\r
`);
    return T.join(`\r
`);
  }
  function Cs(d) {
    var E = {};
    y(E, d);
    return E;
  }
  function tn(d, E, _, w) {
    var T = w && w.unsafe;
    if (!T) {
      y(d);
    }
    var S = !T && Pe.find(d, E);
    if (!S) {
      var P = d.FullPaths[0];
      if (E.slice(0, P.length) == P) {
        P = E;
      } else {
        if (P.slice(-1) != "/") {
          P += "/";
        }
        P = (P + E).replace("//", "/");
      }
      S = {
        name: n(E),
        type: 2
      };
      d.FileIndex.push(S);
      d.FullPaths.push(P);
      if (!T) {
        Pe.utils.cfb_gc(d);
      }
    }
    S.content = _;
    S.size = _ ? _.length : 0;
    if (w) {
      if (w.CLSID) {
        S.clsid = w.CLSID;
      }
      if (w.mt) {
        S.mt = w.mt;
      }
      if (w.ct) {
        S.ct = w.ct;
      }
    }
    return S;
  }
  function ks(d, E) {
    y(d);
    var _ = Pe.find(d, E);
    if (_) {
      for (var w = 0; w < d.FileIndex.length; ++w) {
        if (d.FileIndex[w] == _) {
          d.FileIndex.splice(w, 1);
          d.FullPaths.splice(w, 1);
          return true;
        }
      }
    }
    return false;
  }
  function Os(d, E, _) {
    y(d);
    var w = Pe.find(d, E);
    if (w) {
      for (var T = 0; T < d.FileIndex.length; ++T) {
        if (d.FileIndex[T] == w) {
          d.FileIndex[T].name = n(_);
          d.FullPaths[T] = _;
          return true;
        }
      }
    }
    return false;
  }
  function Ds(d) {
    D(d, true);
  }
  t.find = b;
  t.read = V;
  t.parse = c;
  t.write = mr;
  t.writeFile = Qe;
  t.utils = {
    cfb_new: Cs,
    cfb_add: tn,
    cfb_del: ks,
    cfb_mov: Os,
    cfb_gc: Ds,
    ReadShift: jt,
    CheckField: vi,
    prep_blob: wr,
    bconcat: je,
    use_zlib: ve,
    _deflateRaw: Gt,
    _inflateRaw: Zn,
    consts: he
  };
  return t;
}();
var mf;
function l0(e) {
  if (typeof e == "string") {
    return Va(e);
  } else if (Array.isArray(e)) {
    return Hs(e);
  } else {
    return e;
  }
}
function oa(e, t, r) {
  if (typeof Deno !== "undefined") {
    if (r && typeof t == "string") {
      switch (r) {
        case "utf8":
          t = new TextEncoder(r).encode(t);
          break;
        case "binary":
          t = Va(t);
          break;
        default:
          throw new Error("Unsupported encoding " + r);
      }
    }
    return Deno.writeFileSync(e, t);
  }
  var a = r == "utf8" ? ea(t) : t;
  if (typeof IE_SaveFile !== "undefined") {
    return IE_SaveFile(a, e);
  }
  if (typeof Blob !== "undefined") {
    var n = new Blob([l0(a)], {
      type: "application/octet-stream"
    });
    if (typeof navigator !== "undefined" && navigator.msSaveBlob) {
      return navigator.msSaveBlob(n, e);
    }
    if (typeof saveAs !== "undefined") {
      return saveAs(n, e);
    }
    if (typeof URL !== "undefined" && typeof document !== "undefined" && document.createElement && URL.createObjectURL) {
      var s = URL.createObjectURL(n);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function") {
        if (URL.revokeObjectURL && typeof setTimeout !== "undefined") {
          setTimeout(function () {
            URL.revokeObjectURL(s);
          }, 60000);
        }
        return chrome.downloads.download({
          url: s,
          filename: e,
          saveAs: true
        });
      }
      var i = document.createElement("a");
      if (i.download != null) {
        i.download = e;
        i.href = s;
        document.body.appendChild(i);
        i.click();
        document.body.removeChild(i);
        if (URL.revokeObjectURL && typeof setTimeout !== "undefined") {
          setTimeout(function () {
            URL.revokeObjectURL(s);
          }, 60000);
        }
        return s;
      }
    } else if (typeof URL !== "undefined" && !URL.createObjectURL && typeof chrome == "object") {
      var f = "data:application/octet-stream;base64," + Ws(new Uint8Array(l0(a)));
      return chrome.downloads.download({
        url: f,
        filename: e,
        saveAs: true
      });
    }
  }
  if (typeof $ !== "undefined" && typeof File !== "undefined" && typeof Folder !== "undefined") {
    try {
      var o = File(e);
      o.open("w");
      o.encoding = "binary";
      if (Array.isArray(t)) {
        t = mt(t);
      }
      o.write(t);
      o.close();
      return t;
    } catch (l) {
      if (!l.message || l.message.indexOf("onstruct") == -1) {
        throw l;
      }
    }
  }
  throw new Error("cannot save file " + e);
}
function Ze(e) {
  for (var t = Object.keys(e), r = [], a = 0; a < t.length; ++a) {
    if (Object.prototype.hasOwnProperty.call(e, t[a])) {
      r.push(t[a]);
    }
  }
  return r;
}
function c0(e, t) {
  var r = [];
  for (var a = Ze(e), n = 0; n !== a.length; ++n) {
    if (r[e[a[n]][t]] == null) {
      r[e[a[n]][t]] = a[n];
    }
  }
  return r;
}
function Rn(e) {
  var t = [];
  for (var r = Ze(e), a = 0; a !== r.length; ++a) {
    t[e[r[a]]] = r[a];
  }
  return t;
}
function Ka(e) {
  var t = [];
  for (var r = Ze(e), a = 0; a !== r.length; ++a) {
    t[e[r[a]]] = parseInt(r[a], 10);
  }
  return t;
}
function vf(e) {
  var t = [];
  for (var r = Ze(e), a = 0; a !== r.length; ++a) {
    if (t[e[r[a]]] == null) {
      t[e[r[a]]] = [];
    }
    t[e[r[a]]].push(r[a]);
  }
  return t;
}
var ri = Date.UTC(1899, 11, 30, 0, 0, 0);
var _f = Date.UTC(1899, 11, 31, 0, 0, 0);
var gf = Date.UTC(1904, 0, 1, 0, 0, 0);
function fr(e, t) {
  var r = e.getTime();
  var a = (r - ri) / 86400000;
  if (t) {
    a -= 1462;
    if (a < -1402) {
      return a - 1;
    } else {
      return a;
    }
  } else if (a < 60) {
    return a - 1;
  } else {
    return a;
  }
}
function Ot(e) {
  if (e >= 60 && e < 61) {
    return e;
  }
  var t = new Date();
  t.setTime((e > 60 ? e : e + 1) * 24 * 60 * 60 * 1000 + ri);
  return t;
}
var wf = /^(\d+):(\d+)(:\d+)?(\.\d+)?$/;
var Tf = /^(\d+)-(\d+)-(\d+)$/;
var ti = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;
function Fr(e, t) {
  if (e instanceof Date) {
    return e;
  }
  var r = e.match(wf);
  if (r) {
    return new Date((t ? gf : _f) + ((parseInt(r[1], 10) * 60 + parseInt(r[2], 10)) * 60 + (r[3] ? parseInt(r[3].slice(1), 10) : 0)) * 1000 + (r[4] ? parseInt((r[4] + "000").slice(1, 4), 10) : 0));
  }
  r = e.match(Tf);
  if (r) {
    return new Date(Date.UTC(+r[1], +r[2] - 1, +r[3], 0, 0, 0, 0));
  }
  r = e.match(ti);
  if (r) {
    return new Date(Date.UTC(+r[1], +r[2] - 1, +r[3], +r[4], +r[5], r[6] && parseInt(r[6].slice(1), 10) || 0, r[7] && parseInt((r[7] + "0000").slice(1, 4), 10) || 0));
  }
  var a = new Date(e);
  return a;
}
function In(e, t) {
  if (Oe && Buffer.isBuffer(e)) {
    return e.toString("binary");
  }
  if (typeof TextDecoder !== "undefined") {
    try {
      var r = {
        "€": "",
        "‚": "",
        ƒ: "",
        "„": "",
        "…": "",
        "†": "",
        "‡": "",
        ˆ: "",
        "‰": "",
        Š: "",
        "‹": "",
        Œ: "",
        Ž: "",
        "‘": "",
        "’": "",
        "“": "",
        "”": "",
        "•": "",
        "–": "",
        "—": "",
        "˜": "",
        "™": "",
        š: "",
        "›": "",
        œ: "",
        ž: "",
        Ÿ: ""
      };
      if (Array.isArray(e)) {
        e = new Uint8Array(e);
      }
      return new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (s) {
        return r[s] || s;
      });
    } catch { }
  }
  var a = [];
  var n = 0;
  try {
    for (n = 0; n < e.length - 65536; n += 65536) {
      a.push(String.fromCharCode.apply(0, e.slice(n, n + 65536)));
    }
    a.push(String.fromCharCode.apply(0, e.slice(n)));
  } catch {
    try {
      for (; n < e.length - 16384; n += 16384) {
        a.push(String.fromCharCode.apply(0, e.slice(n, n + 16384)));
      }
      a.push(String.fromCharCode.apply(0, e.slice(n)));
    } catch {
      for (; n != e.length; ++n) {
        a.push(String.fromCharCode(e[n]));
      }
    }
  }
  return a.join("");
}
function pr(e) {
  if (typeof JSON !== "undefined" && !Array.isArray(e)) {
    return JSON.parse(JSON.stringify(e));
  }
  if (typeof e != "object" || e == null) {
    return e;
  }
  if (e instanceof Date) {
    return new Date(e.getTime());
  }
  var t = {};
  for (var r in e) {
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      t[r] = pr(e[r]);
    }
  }
  return t;
}
function Ue(e, t) {
  for (var r = ""; r.length < t;) {
    r += e;
  }
  return r;
}
function qr(e) {
  var t = Number(e);
  if (!isNaN(t)) {
    if (isFinite(t)) {
      return t;
    } else {
      return NaN;
    }
  }
  if (!/\d/.test(e)) {
    return t;
  }
  var r = 1;
  var a = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function () {
    r *= 100;
    return "";
  });
  if (!isNaN(t = Number(a)) || (a = a.replace(/[(]([^()]*)[)]/, function (n, s) {
    r = -r;
    return s;
  }), !isNaN(t = Number(a)))) {
    return t / r;
  } else {
    return t;
  }
}
var Ef = /^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/;
var Sf = /^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/;
var Af = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/;
var Ff = new Date("6/9/69 00:00 UTC").valueOf() == -17798400000;
function yf(e) {
  if (e[2]) {
    if (e[3]) {
      if (e[4]) {
        return new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[4], parseFloat(e[3]) * 1000));
      } else {
        return new Date(Date.UTC(1899, 11, 31, e[7] == "p" ? 12 : 0, +e[1], +e[2], parseFloat(e[3]) * 1000));
      }
    } else if (e[5]) {
      return new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1000 : 0));
    } else {
      return new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], 0, 0));
    }
  } else {
    return new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), 0, 0, 0));
  }
}
function Cf(e) {
  if (e[2]) {
    if (e[3]) {
      if (e[4]) {
        return new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[4], parseFloat(e[3]) * 1000));
      } else {
        return new Date(Date.UTC(1899, 11, 31, 0, +e[1], +e[2], parseFloat(e[3]) * 1000));
      }
    } else if (e[5]) {
      return new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1000 : 0));
    } else {
      return new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], 0, 0));
    }
  } else {
    return new Date(Date.UTC(1899, 11, 31, +e[1], 0, 0, 0));
  }
}
var kf = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function Ia(e) {
  if (Af.test(e)) {
    if (e.indexOf("Z") == -1) {
      return Ya(new Date(e));
    } else {
      return new Date(e);
    }
  }
  var t = e.toLowerCase();
  var r = t.replace(/\s+/g, " ").trim();
  var a = r.match(Ef);
  if (a) {
    return yf(a);
  }
  a = r.match(Sf);
  if (a) {
    return Cf(a);
  }
  a = r.match(ti);
  if (a) {
    return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], a[6] && parseInt(a[6].slice(1), 10) || 0, a[7] && parseInt((a[7] + "0000").slice(1, 4), 10) || 0));
  }
  var n = new Date(Ff && e.indexOf("UTC") == -1 ? e + " UTC" : e);
  var s = new Date(NaN);
  var i = n.getYear();
  n.getMonth();
  var f = n.getDate();
  if (isNaN(f)) {
    return s;
  }
  if (t.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    t = t.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "");
    if (t.length > 3 && kf.indexOf(t) == -1) {
      return s;
    }
  } else if (t.replace(/[ap]m?/, "").match(/[a-z]/)) {
    return s;
  }
  if (i < 0 || i > 8099 || e.match(/[^-0-9:,\/\\\ ]/)) {
    return s;
  } else {
    return n;
  }
}
function Lt(e) {
  return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
}
function Ya(e) {
  return new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
}
function pe(e, t, r) {
  if (e.FullPaths) {
    if (Array.isArray(r) && typeof r[0] == "string") {
      r = r.join("");
    }
    if (typeof r == "string") {
      var a;
      if (Oe) {
        a = zr(r);
      } else {
        a = Gs(r);
      }
      return Pe.utils.cfb_add(e, t, a);
    }
    Pe.utils.cfb_add(e, t, r);
  } else {
    e.file(t, r);
  }
}
function Nn() {
  return Pe.utils.cfb_new();
}
var qe = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`;
var Of = {
  "&quot;": "\"",
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
};
var Pn = Rn(Of);
var Ln = /[&<>'"]/g;
var Df = /[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;
function me(e) {
  var t = e + "";
  return t.replace(Ln, function (r) {
    return Pn[r];
  }).replace(Df, function (r) {
    return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function h0(e) {
  return me(e).replace(/ /g, "_x0020_");
}
var ai = /[\u0000-\u001f]/g;
function sn(e) {
  var t = e + "";
  return t.replace(Ln, function (r) {
    return Pn[r];
  }).replace(/\n/g, "<br/>").replace(ai, function (r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function Rf(e) {
  var t = e + "";
  return t.replace(Ln, function (r) {
    return Pn[r];
  }).replace(ai, function (r) {
    return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
function If(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function Nf(e) {
  switch (e) {
    case 1:
    case true:
    case "1":
    case "true":
      return true;
    case 0:
    case false:
    case "0":
    case "false":
      return false;
  }
  return false;
}
function fn(e) {
  var t = "";
  for (var r = 0, a = 0, n = 0, s = 0, i = 0, f = 0; r < e.length;) {
    a = e.charCodeAt(r++);
    if (a < 128) {
      t += String.fromCharCode(a);
      continue;
    }
    n = e.charCodeAt(r++);
    if (a > 191 && a < 224) {
      i = (a & 31) << 6;
      i |= n & 63;
      t += String.fromCharCode(i);
      continue;
    }
    s = e.charCodeAt(r++);
    if (a < 240) {
      t += String.fromCharCode((a & 15) << 12 | (n & 63) << 6 | s & 63);
      continue;
    }
    i = e.charCodeAt(r++);
    f = ((a & 7) << 18 | (n & 63) << 12 | (s & 63) << 6 | i & 63) - 65536;
    t += String.fromCharCode(55296 + (f >>> 10 & 1023));
    t += String.fromCharCode(56320 + (f & 1023));
  }
  return t;
}
function u0(e) {
  var t = pt(e.length * 2);
  var r;
  var a;
  var n = 1;
  var s = 0;
  var i = 0;
  var f;
  for (a = 0; a < e.length; a += n) {
    n = 1;
    if ((f = e.charCodeAt(a)) < 128) {
      r = f;
    } else if (f < 224) {
      r = (f & 31) * 64 + (e.charCodeAt(a + 1) & 63);
      n = 2;
    } else if (f < 240) {
      r = (f & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63);
      n = 3;
    } else {
      n = 4;
      r = (f & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63);
      r -= 65536;
      i = 55296 + (r >>> 10 & 1023);
      r = 56320 + (r & 1023);
    }
    if (i !== 0) {
      t[s++] = i & 255;
      t[s++] = i >>> 8;
      i = 0;
    }
    t[s++] = r % 256;
    t[s++] = r >>> 8;
  }
  return t.slice(0, s).toString("ucs2");
}
function x0(e) {
  return zr(e, "binary").toString("utf8");
}
var va = "foo bar bazâð£";
var Dt = Oe && (x0(va) == fn(va) && x0 || u0(va) == fn(va) && u0) || fn;
var ea = Oe ? function (e) {
  return zr(e, "utf8").toString("binary");
} : function (e) {
  var t = [];
  for (var r = 0, a = 0, n = 0; r < e.length;) {
    a = e.charCodeAt(r++);
    switch (true) {
      case a < 128:
        t.push(String.fromCharCode(a));
        break;
      case a < 2048:
        t.push(String.fromCharCode(192 + (a >> 6)));
        t.push(String.fromCharCode(128 + (a & 63)));
        break;
      case a >= 55296 && a < 57344:
        a -= 55296;
        n = e.charCodeAt(r++) - 56320 + (a << 10);
        t.push(String.fromCharCode(240 + (n >> 18 & 7)));
        t.push(String.fromCharCode(144 + (n >> 12 & 63)));
        t.push(String.fromCharCode(128 + (n >> 6 & 63)));
        t.push(String.fromCharCode(128 + (n & 63)));
        break;
      default:
        t.push(String.fromCharCode(224 + (a >> 12)));
        t.push(String.fromCharCode(128 + (a >> 6 & 63)));
        t.push(String.fromCharCode(128 + (a & 63)));
    }
  }
  return t.join("");
};
var Pf = function () {
  var e = [["nbsp", " "], ["middot", "·"], ["quot", "\""], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function (t) {
    return [new RegExp("&" + t[0] + ";", "ig"), t[1]];
  });
  return function (r) {
    var a = r.replace(/^[\t\n\r ]+/, "").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/, "$1").replace(/>\s+/g, ">").replace(/\b\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^<>]*>/g, "");
    for (var n = 0; n < e.length; ++n) {
      a = a.replace(e[n][0], e[n][1]);
    }
    return a;
  };
}();
var ni = /(^\s|\s$|\n)/;
function ir(e, t) {
  return "<" + e + (t.match(ni) ? " xml:space=\"preserve\"" : "") + ">" + t + "</" + e + ">";
}
function ra(e) {
  return Ze(e).map(function (t) {
    return " " + t + "=\"" + e[t] + "\"";
  }).join("");
}
function J(e, t, r) {
  return "<" + e + (r != null ? ra(r) : "") + (t != null ? (t.match(ni) ? " xml:space=\"preserve\"" : "") + ">" + t + "</" + e : "/") + ">";
}
function Tn(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (r) {
    if (t) {
      throw r;
    }
  }
  return "";
}
function Lf(e, t) {
  switch (typeof e) {
    case "string":
      var r = J("vt:lpwstr", me(e));
      r = r.replace(/&quot;/g, "_x0022_");
      return r;
    case "number":
      return J((e | 0) == e ? "vt:i4" : "vt:r8", me(String(e)));
    case "boolean":
      return J("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date) {
    return J("vt:filetime", Tn(e));
  }
  throw new Error("Unable to serialize " + e);
}
var ar = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
};
var Or = {
  o: "urn:schemas-microsoft-com:office:office",
  x: "urn:schemas-microsoft-com:office:excel",
  ss: "urn:schemas-microsoft-com:office:spreadsheet",
  dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
  mv: "http://macVmlSchemaUri",
  v: "urn:schemas-microsoft-com:vml",
  html: "http://www.w3.org/TR/REC-html40"
};
function Mf(e, t) {
  var r = 1 - (e[t + 7] >>> 7) * 2;
  var a = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15);
  var n = e[t + 6] & 15;
  for (var s = 5; s >= 0; --s) {
    n = n * 256 + e[t + s];
  }
  if (a == 2047) {
    if (n == 0) {
      return r * Infinity;
    } else {
      return NaN;
    }
  } else {
    if (a == 0) {
      a = -1022;
    } else {
      a -= 1023;
      n += Math.pow(2, 52);
    }
    return r * Math.pow(2, a - 52) * n;
  }
}
function Bf(e, t, r) {
  var a = (t < 0 || 1 / t == -Infinity ? 1 : 0) << 7;
  var n = 0;
  var s = 0;
  var i = a ? -t : t;
  if (isFinite(i)) {
    if (i == 0) {
      n = s = 0;
    } else {
      n = Math.floor(Math.log(i) / Math.LN2);
      s = i * Math.pow(2, 52 - n);
      if (n <= -1023 && (!isFinite(s) || s < Math.pow(2, 52))) {
        n = -1022;
      } else {
        s -= Math.pow(2, 52);
        n += 1023;
      }
    }
  } else {
    n = 2047;
    s = isNaN(t) ? 26985 : 0;
  }
  for (var f = 0; f <= 5; ++f, s /= 256) {
    e[r + f] = s & 255;
  }
  e[r + 6] = (n & 15) << 4 | s & 15;
  e[r + 7] = n >> 4 | a;
}
function d0(e) {
  var t = [];
  var r = 10240;
  for (var a = 0; a < e[0].length; ++a) {
    if (e[0][a]) {
      for (var n = 0, s = e[0][a].length; n < s; n += r) {
        t.push.apply(t, e[0][a].slice(n, n + r));
      }
    }
  }
  return t;
}
var p0 = Oe ? function (e) {
  if (e[0].length > 0 && Buffer.isBuffer(e[0][0])) {
    return Buffer.concat(e[0].map(function (t) {
      if (Buffer.isBuffer(t)) {
        return t;
      } else {
        return zr(t);
      }
    }));
  } else {
    return d0(e);
  }
} : d0;
function m0(e, t, r) {
  var a = [];
  for (var n = t; n < r; n += 2) {
    a.push(String.fromCharCode(Kt(e, n)));
  }
  return a.join("").replace(Yt, "");
}
var Mn = Oe ? function (e, t, r) {
  if (!Buffer.isBuffer(e) || !Ca) {
    return m0(e, t, r);
  } else {
    return e.toString("utf16le", t, r).replace(Yt, "");
  }
} : m0;
function v0(e, t, r) {
  var a = [];
  for (var n = t; n < t + r; ++n) {
    a.push(("0" + e[n].toString(16)).slice(-2));
  }
  return a.join("");
}
var ii = Oe ? function (e, t, r) {
  if (Buffer.isBuffer(e)) {
    return e.toString("hex", t, t + r);
  } else {
    return v0(e, t, r);
  }
} : v0;
function _0(e, t, r) {
  var a = [];
  for (var n = t; n < r; n++) {
    a.push(String.fromCharCode(Ct(e, n)));
  }
  return a.join("");
}
var la = Oe ? function (t, r, a) {
  if (Buffer.isBuffer(t)) {
    return t.toString("utf8", r, a);
  } else {
    return _0(t, r, a);
  }
} : _0;
function si(e, t) {
  var r = Dr(e, t);
  if (r > 0) {
    return la(e, t + 4, t + 4 + r - 1);
  } else {
    return "";
  }
}
var fi = si;
function oi(e, t) {
  var r = Dr(e, t);
  if (r > 0) {
    return la(e, t + 4, t + 4 + r - 1);
  } else {
    return "";
  }
}
var li = oi;
function ci(e, t) {
  var r = Dr(e, t) * 2;
  if (r > 0) {
    return la(e, t + 4, t + 4 + r - 1);
  } else {
    return "";
  }
}
var hi = ci;
function ui(t, r) {
  var a = Dr(t, r);
  if (a > 0) {
    return Mn(t, r + 4, r + 4 + a);
  } else {
    return "";
  }
}
var xi = ui;
function di(e, t) {
  var r = Dr(e, t);
  if (r > 0) {
    return la(e, t + 4, t + 4 + r);
  } else {
    return "";
  }
}
var pi = di;
function mi(e, t) {
  return Mf(e, t);
}
var Na = mi;
function Bn(t) {
  return Array.isArray(t) || typeof Uint8Array !== "undefined" && t instanceof Uint8Array;
}
if (Oe) {
  fi = function (t, r) {
    if (!Buffer.isBuffer(t)) {
      return si(t, r);
    }
    var a = t.readUInt32LE(r);
    if (a > 0) {
      return t.toString("utf8", r + 4, r + 4 + a - 1);
    } else {
      return "";
    }
  };
  li = function (t, r) {
    if (!Buffer.isBuffer(t)) {
      return oi(t, r);
    }
    var a = t.readUInt32LE(r);
    if (a > 0) {
      return t.toString("utf8", r + 4, r + 4 + a - 1);
    } else {
      return "";
    }
  };
  hi = function (t, r) {
    if (!Buffer.isBuffer(t) || !Ca) {
      return ci(t, r);
    }
    var a = t.readUInt32LE(r) * 2;
    return t.toString("utf16le", r + 4, r + 4 + a - 1);
  };
  xi = function (t, r) {
    if (!Buffer.isBuffer(t) || !Ca) {
      return ui(t, r);
    }
    var a = t.readUInt32LE(r);
    return t.toString("utf16le", r + 4, r + 4 + a);
  };
  pi = function (t, r) {
    if (!Buffer.isBuffer(t)) {
      return di(t, r);
    }
    var a = t.readUInt32LE(r);
    return t.toString("utf8", r + 4, r + 4 + a);
  };
  Na = function (t, r) {
    if (Buffer.isBuffer(t)) {
      return t.readDoubleLE(r);
    } else {
      return mi(t, r);
    }
  };
  Bn = function (t) {
    return Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array !== "undefined" && t instanceof Uint8Array;
  };
}
function Ct(e, t) {
  return e[t];
}
function Kt(e, t) {
  return e[t + 1] * 256 + e[t];
}
function bf(e, t) {
  var r = e[t + 1] * 256 + e[t];
  if (r < 32768) {
    return r;
  } else {
    return (65535 - r + 1) * -1;
  }
}
function Dr(e, t) {
  return e[t + 3] * 16777216 + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
}
function xt(e, t) {
  return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
function Uf(e, t) {
  return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
function jt(e, t) {
  var r = "";
  var a;
  var n;
  var s = [];
  var i;
  var f;
  var o;
  var l;
  switch (t) {
    case "dbcs":
      l = this.l;
      if (Oe && Buffer.isBuffer(this) && Ca) {
        r = this.slice(this.l, this.l + e * 2).toString("utf16le");
      } else {
        for (o = 0; o < e; ++o) {
          r += String.fromCharCode(Kt(this, l));
          l += 2;
        }
      }
      e *= 2;
      break;
    case "utf8":
      r = la(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2;
      r = Mn(this, this.l, this.l + e);
      break;
    case "wstr":
      return jt.call(this, e, "dbcs");
    case "lpstr-ansi":
      r = fi(this, this.l);
      e = 4 + Dr(this, this.l);
      break;
    case "lpstr-cp":
      r = li(this, this.l);
      e = 4 + Dr(this, this.l);
      break;
    case "lpwstr":
      r = hi(this, this.l);
      e = 4 + Dr(this, this.l) * 2;
      break;
    case "lpp4":
      e = 4 + Dr(this, this.l);
      r = xi(this, this.l);
      if (e & 2) {
        e += 2;
      }
      break;
    case "8lpp4":
      e = 4 + Dr(this, this.l);
      r = pi(this, this.l);
      if (e & 3) {
        e += 4 - (e & 3);
      }
      break;
    case "cstr":
      e = 0;
      r = "";
      while ((i = Ct(this, this.l + e++)) !== 0) {
        s.push(pa(i));
      }
      r = s.join("");
      break;
    case "_wstr":
      e = 0;
      r = "";
      while ((i = Kt(this, this.l + e)) !== 0) {
        s.push(pa(i));
        e += 2;
      }
      e += 2;
      r = s.join("");
      break;
    case "dbcs-cont":
      r = "";
      l = this.l;
      o = 0;
      for (; o < e; ++o) {
        if (this.lens && this.lens.indexOf(l) !== -1) {
          i = Ct(this, l);
          this.l = l + 1;
          f = jt.call(this, e - o, i ? "dbcs-cont" : "sbcs-cont");
          return s.join("") + f;
        }
        s.push(pa(Kt(this, l)));
        l += 2;
      }
      r = s.join("");
      e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      r = "";
      l = this.l;
      o = 0;
      for (; o != e; ++o) {
        if (this.lens && this.lens.indexOf(l) !== -1) {
          i = Ct(this, l);
          this.l = l + 1;
          f = jt.call(this, e - o, i ? "dbcs-cont" : "sbcs-cont");
          return s.join("") + f;
        }
        s.push(pa(Ct(this, l)));
        l += 1;
      }
      r = s.join("");
      break;
    default:
      switch (e) {
        case 1:
          a = Ct(this, this.l);
          this.l++;
          return a;
        case 2:
          a = (t === "i" ? bf : Kt)(this, this.l);
          this.l += 2;
          return a;
        case 4:
        case -4:
          if (t === "i" || (this[this.l + 3] & 128) === 0) {
            a = (e > 0 ? xt : Uf)(this, this.l);
            this.l += 4;
            return a;
          } else {
            n = Dr(this, this.l);
            this.l += 4;
            return n;
          }
        case 8:
        case -8:
          if (t === "f") {
            if (e == 8) {
              n = Na(this, this.l);
            } else {
              n = Na([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0);
            }
            this.l += 8;
            return n;
          }
          e = 8;
        case 16:
          r = ii(this, this.l, e);
          break;
      }
  }
  this.l += e;
  return r;
}
function Wf(e, t, r) {
  e[r] = t & 255;
  e[r + 1] = t >>> 8 & 255;
  e[r + 2] = t >>> 16 & 255;
  e[r + 3] = t >>> 24 & 255;
}
function Hf(e, t, r) {
  e[r] = t & 255;
  e[r + 1] = t >> 8 & 255;
  e[r + 2] = t >> 16 & 255;
  e[r + 3] = t >> 24 & 255;
}
function Gf(e, t, r) {
  e[r] = t & 255;
  e[r + 1] = t >>> 8 & 255;
}
function Xf(e, t, r) {
  var a = 0;
  var n = 0;
  if (r === "dbcs") {
    for (n = 0; n != t.length; ++n) {
      Gf(this, t.charCodeAt(n), this.l + n * 2);
    }
    a = t.length * 2;
  } else if (r === "sbcs" || r == "cpstr") {
    t = t.replace(/[^\x00-\x7F]/g, "_");
    n = 0;
    for (; n != t.length; ++n) {
      this[this.l + n] = t.charCodeAt(n) & 255;
    }
    a = t.length;
  } else if (r === "hex") {
    for (; n < e; ++n) {
      this[this.l++] = parseInt(t.slice(n * 2, n * 2 + 2), 16) || 0;
    }
    return this;
  } else if (r === "utf16le") {
    var s = Math.min(this.l + e, this.length);
    for (n = 0; n < Math.min(t.length, e); ++n) {
      var i = t.charCodeAt(n);
      this[this.l++] = i & 255;
      this[this.l++] = i >> 8;
    }
    while (this.l < s) {
      this[this.l++] = 0;
    }
    return this;
  } else {
    switch (e) {
      case 1:
        a = 1;
        this[this.l] = t & 255;
        break;
      case 2:
        a = 2;
        this[this.l] = t & 255;
        t >>>= 8;
        this[this.l + 1] = t & 255;
        break;
      case 3:
        a = 3;
        this[this.l] = t & 255;
        t >>>= 8;
        this[this.l + 1] = t & 255;
        t >>>= 8;
        this[this.l + 2] = t & 255;
        break;
      case 4:
        a = 4;
        Wf(this, t, this.l);
        break;
      case 8:
        a = 8;
        if (r === "f") {
          Bf(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        a = 4;
        Hf(this, t, this.l);
        break;
    }
  }
  this.l += a;
  return this;
}
function vi(e, t) {
  var r = ii(this, this.l, e.length >> 1);
  if (r !== e) {
    throw new Error(t + "Expected " + e + " saw " + r);
  }
  this.l += e.length >> 1;
}
function wr(e, t) {
  e.l = t;
  e.read_shift = jt;
  e.chk = vi;
  e.write_shift = Xf;
}
function $r(e, t) {
  e.l += t;
}
function I(e) {
  var t = pt(e);
  wr(t, 0);
  return t;
}
function xr() {
  var e = [];
  var t = Oe ? 16384 : 2048;
  if (Oe) {
    I(t).copy;
  }
  function r(c) {
    var x = I(c);
    wr(x, 0);
    return x;
  }
  var a = r(t);
  function n() {
    if (a) {
      if (a.l) {
        if (a.length > a.l) {
          a = a.slice(0, a.l);
          a.l = a.length;
        }
        if (a.length > 0) {
          e.push(a);
        }
      }
      a = null;
    }
  }
  function s(c) {
    if (a && c < a.length - a.l) {
      return a;
    } else {
      n();
      return a = r(Math.max(c + 1, t));
    }
  }
  function i() {
    n();
    return je(e);
  }
  function f() {
    n();
    return e;
  }
  function o(c) {
    n();
    a = c;
    if (a.l == null) {
      a.l = a.length;
    }
    s(t);
  }
  return {
    next: s,
    push: o,
    end: i,
    _bufs: e,
    end2: f
  };
}
function G(e, t, r, a) {
  var n = +t;
  var s;
  if (!isNaN(n)) {
    a ||= Ju[n].p || (r || []).length || 0;
    s = 1 + (n >= 128 ? 1 : 0) + 1;
    if (a >= 128) {
      ++s;
    }
    if (a >= 16384) {
      ++s;
    }
    if (a >= 2097152) {
      ++s;
    }
    var i = e.next(s);
    if (n <= 127) {
      i.write_shift(1, n);
    } else {
      i.write_shift(1, (n & 127) + 128);
      i.write_shift(1, n >> 7);
    }
    for (var f = 0; f != 4; ++f) {
      if (a >= 128) {
        i.write_shift(1, (a & 127) + 128);
        a >>= 7;
      } else {
        i.write_shift(1, a);
        break;
      }
    }
    if (a > 0 && Bn(r)) {
      e.push(r);
    }
  }
}
function Zt(e, t, r) {
  var a = pr(e);
  if (t.s) {
    if (a.cRel) {
      a.c += t.s.c;
    }
    if (a.rRel) {
      a.r += t.s.r;
    }
  } else {
    if (a.cRel) {
      a.c += t.c;
    }
    if (a.rRel) {
      a.r += t.r;
    }
  }
  if (!r || r.biff < 12) {
    while (a.c >= 256) {
      a.c -= 256;
    }
    while (a.r >= 65536) {
      a.r -= 65536;
    }
  }
  return a;
}
function g0(e, t, r) {
  var a = pr(e);
  a.s = Zt(a.s, t.s, r);
  a.e = Zt(a.e, t.s, r);
  return a;
}
function Jt(e, t) {
  if (e.cRel && e.c < 0) {
    for (e = pr(e); e.c < 0;) {
      e.c += t > 8 ? 16384 : 256;
    }
  }
  if (e.rRel && e.r < 0) {
    for (e = pr(e); e.r < 0;) {
      e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
    }
  }
  var r = Ge(e);
  if (!e.cRel && e.cRel != null) {
    r = zf(r);
  }
  if (!e.rRel && e.rRel != null) {
    r = Vf(r);
  }
  return r;
}
function on(e, t) {
  if (e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel) {
    return (e.s.cRel ? "" : "$") + Ie(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Ie(e.e.c);
  } else if (e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel) {
    return (e.s.rRel ? "" : "$") + Ne(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Ne(e.e.r);
  } else {
    return Jt(e.s, t.biff) + ":" + Jt(e.e, t.biff);
  }
}
function bn(e) {
  return parseInt($f(e), 10) - 1;
}
function Ne(e) {
  return "" + (e + 1);
}
function Vf(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function $f(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function Un(e) {
  for (var t = Kf(e), r = 0, a = 0; a !== t.length; ++a) {
    r = r * 26 + t.charCodeAt(a) - 64;
  }
  return r - 1;
}
function Ie(e) {
  if (e < 0) {
    throw new Error("invalid column " + e);
  }
  var t = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) {
    t = String.fromCharCode((e - 1) % 26 + 65) + t;
  }
  return t;
}
function zf(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function Kf(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function Yf(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function We(e) {
  var t = 0;
  var r = 0;
  for (var a = 0; a < e.length; ++a) {
    var n = e.charCodeAt(a);
    if (n >= 48 && n <= 57) {
      t = t * 10 + (n - 48);
    } else if (n >= 65 && n <= 90) {
      r = r * 26 + (n - 64);
    }
  }
  return {
    c: r - 1,
    r: t - 1
  };
}
function Ge(e) {
  for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0) {
    r = String.fromCharCode((t - 1) % 26 + 65) + r;
  }
  return r + (e.r + 1);
}
function sr(e) {
  var t = e.indexOf(":");
  if (t == -1) {
    return {
      s: We(e),
      e: We(e)
    };
  } else {
    return {
      s: We(e.slice(0, t)),
      e: We(e.slice(t + 1))
    };
  }
}
function Je(e, t) {
  if (typeof t === "undefined" || typeof t == "number") {
    return Je(e.s, e.e);
  } else {
    if (typeof e != "string") {
      e = Ge(e);
    }
    if (typeof t != "string") {
      t = Ge(t);
    }
    if (e == t) {
      return e;
    } else {
      return e + ":" + t;
    }
  }
}
function ta(e) {
  var t = sr(e);
  return "$" + Ie(t.s.c) + "$" + Ne(t.s.r) + ":$" + Ie(t.e.c) + "$" + Ne(t.e.r);
}
function aa(e, t) {
  if (!e && (!t || !(t.biff <= 5) || !(t.biff >= 2))) {
    throw new Error("empty sheet name");
  }
  if (/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)) {
    return "'" + e.replace(/'/g, "''") + "'";
  } else {
    return e;
  }
}
function Be(e) {
  var t = {
    s: {
      c: 0,
      r: 0
    },
    e: {
      c: 0,
      r: 0
    }
  };
  var r = 0;
  var a = 0;
  var n = 0;
  var s = e.length;
  for (r = 0; a < s && !((n = e.charCodeAt(a) - 64) < 1) && !(n > 26); ++a) {
    r = r * 26 + n;
  }
  t.s.c = --r;
  r = 0;
  for (; a < s && !((n = e.charCodeAt(a) - 48) < 0) && !(n > 9); ++a) {
    r = r * 10 + n;
  }
  t.s.r = --r;
  if (a === s || n != 10) {
    t.e.c = t.s.c;
    t.e.r = t.s.r;
    return t;
  }
  ++a;
  r = 0;
  for (; a != s && !((n = e.charCodeAt(a) - 64) < 1) && !(n > 26); ++a) {
    r = r * 26 + n;
  }
  t.e.c = --r;
  r = 0;
  for (; a != s && !((n = e.charCodeAt(a) - 48) < 0) && !(n > 9); ++a) {
    r = r * 10 + n;
  }
  t.e.r = --r;
  return t;
}
function w0(e, t) {
  var r = e.t == "d" && t instanceof Date;
  if (e.z != null) {
    try {
      return e.w = et(e.z, r ? fr(t) : t);
    } catch { }
  }
  try {
    return e.w = et((e.XF || {}).numFmtId || (r ? 14 : 0), r ? fr(t) : t);
  } catch {
    return "" + t;
  }
}
function rt(e, t, r) {
  if (e == null || e.t == null || e.t == "z") {
    return "";
  } else if (e.w !== undefined) {
    return e.w;
  } else {
    if (e.t == "d" && !e.z && r && r.dateNF) {
      e.z = r.dateNF;
    }
    if (e.t == "e") {
      return Er[e.v] || e.v;
    } else if (t == null) {
      return w0(e, e.v);
    } else {
      return w0(e, t);
    }
  }
}
function bt(e, t) {
  var r = t && t.sheet ? t.sheet : "Sheet1";
  var a = {
    [r]: e
  };
  return {
    SheetNames: [r],
    Sheets: a
  };
}
function jf(e) {
  var t = {};
  var r = e || {};
  if (r.dense) {
    t["!data"] = [];
  }
  return t;
}
function _i(e, t, r) {
  var a = r || {};
  var n = e ? e["!data"] != null : a.dense;
  var s = e || (n ? {
    "!data": []
  } : {});
  if (n && !s["!data"]) {
    s["!data"] = [];
  }
  var i = 0;
  var f = 0;
  if (s && a.origin != null) {
    if (typeof a.origin == "number") {
      i = a.origin;
    } else {
      var o = typeof a.origin == "string" ? We(a.origin) : a.origin;
      i = o.r;
      f = o.c;
    }
  }
  var l = {
    s: {
      c: 10000000,
      r: 10000000
    },
    e: {
      c: 0,
      r: 0
    }
  };
  if (s["!ref"]) {
    var c = Be(s["!ref"]);
    l.s.c = c.s.c;
    l.s.r = c.s.r;
    l.e.c = Math.max(l.e.c, c.e.c);
    l.e.r = Math.max(l.e.r, c.e.r);
    if (i == -1) {
      l.e.r = i = s["!ref"] ? c.e.r + 1 : 0;
    }
  } else {
    l.s.c = l.e.c = l.s.r = l.e.r = 0;
  }
  var x = [];
  var h = false;
  for (var u = 0; u != t.length; ++u) {
    if (t[u]) {
      if (!Array.isArray(t[u])) {
        throw new Error("aoa_to_sheet expects an array of arrays");
      }
      var p = i + u;
      if (n) {
        s["!data"][p] ||= [];
        x = s["!data"][p];
      }
      for (var g = t[u], m = 0; m != g.length; ++m) {
        if (typeof g[m] !== "undefined") {
          var v = {
            v: g[m],
            t: ""
          };
          var C = f + m;
          if (l.s.r > p) {
            l.s.r = p;
          }
          if (l.s.c > C) {
            l.s.c = C;
          }
          if (l.e.r < p) {
            l.e.r = p;
          }
          if (l.e.c < C) {
            l.e.c = C;
          }
          h = true;
          if (g[m] && typeof g[m] == "object" && !Array.isArray(g[m]) && !(g[m] instanceof Date)) {
            v = g[m];
          } else {
            if (Array.isArray(v.v)) {
              v.f = g[m][1];
              v.v = v.v[0];
            }
            if (v.v === null) {
              if (v.f) {
                v.t = "n";
              } else if (a.nullError) {
                v.t = "e";
                v.v = 0;
              } else if (a.sheetStubs) {
                v.t = "z";
              } else {
                continue;
              }
            } else if (typeof v.v == "number") {
              if (isFinite(v.v)) {
                v.t = "n";
              } else if (isNaN(v.v)) {
                v.t = "e";
                v.v = 15;
              } else {
                v.t = "e";
                v.v = 7;
              }
            } else if (typeof v.v == "boolean") {
              v.t = "b";
            } else if (v.v instanceof Date) {
              v.z = a.dateNF || Me[14];
              if (!a.UTC) {
                v.v = Ya(v.v);
              }
              if (a.cellDates) {
                v.t = "d";
                v.w = et(v.z, fr(v.v, a.date1904));
              } else {
                v.t = "n";
                v.v = fr(v.v, a.date1904);
                v.w = et(v.z, v.v);
              }
            } else {
              v.t = "s";
            }
          }
          if (n) {
            if (x[C] && x[C].z) {
              v.z = x[C].z;
            }
            x[C] = v;
          } else {
            var F = Ie(C) + (p + 1);
            if (s[F] && s[F].z) {
              v.z = s[F].z;
            }
            s[F] = v;
          }
        }
      }
    }
  }
  if (h && l.s.c < 10400000) {
    s["!ref"] = Je(l);
  }
  return s;
}
function Ut(e, t) {
  return _i(null, e, t);
}
function Zf(e) {
  return e.read_shift(4, "i");
}
function br(e, t) {
  t ||= I(4);
  t.write_shift(4, e);
  return t;
}
function dr(e) {
  var t = e.read_shift(4);
  if (t === 0) {
    return "";
  } else {
    return e.read_shift(t, "dbcs");
  }
}
function er(e, t) {
  var r = false;
  if (t == null) {
    r = true;
    t = I(4 + e.length * 2);
  }
  t.write_shift(4, e.length);
  if (e.length > 0) {
    t.write_shift(0, e, "dbcs");
  }
  if (r) {
    return t.slice(0, t.l);
  } else {
    return t;
  }
}
function Jf(e) {
  return {
    ich: e.read_shift(2),
    ifnt: e.read_shift(2)
  };
}
function qf(e, t) {
  t ||= I(4);
  t.write_shift(2, 0);
  t.write_shift(2, 0);
  return t;
}
function Wn(e, t) {
  var r = e.l;
  var a = e.read_shift(1);
  var n = dr(e);
  var s = [];
  var i = {
    t: n,
    h: n
  };
  if ((a & 1) !== 0) {
    for (var f = e.read_shift(4), o = 0; o != f; ++o) {
      s.push(Jf(e));
    }
    i.r = s;
  } else {
    i.r = [{
      ich: 0,
      ifnt: 0
    }];
  }
  e.l = r + t;
  return i;
}
function Qf(e, t) {
  var r = false;
  if (t == null) {
    r = true;
    t = I(15 + e.t.length * 4);
  }
  t.write_shift(1, 0);
  er(e.t, t);
  if (r) {
    return t.slice(0, t.l);
  } else {
    return t;
  }
}
var eo = Wn;
function ro(e, t) {
  var r = false;
  if (t == null) {
    r = true;
    t = I(23 + e.t.length * 4);
  }
  t.write_shift(1, 1);
  er(e.t, t);
  t.write_shift(4, 1);
  qf({}, t);
  if (r) {
    return t.slice(0, t.l);
  } else {
    return t;
  }
}
function Lr(e) {
  var t = e.read_shift(4);
  var r = e.read_shift(2);
  r += e.read_shift(1) << 16;
  e.l++;
  return {
    c: t,
    iStyleRef: r
  };
}
function wt(e, t) {
  if (t == null) {
    t = I(8);
  }
  t.write_shift(-4, e.c);
  t.write_shift(3, e.iStyleRef || e.s);
  t.write_shift(1, 0);
  return t;
}
function Tt(e) {
  var t = e.read_shift(2);
  t += e.read_shift(1) << 16;
  e.l++;
  return {
    c: -1,
    iStyleRef: t
  };
}
function Et(e, t) {
  if (t == null) {
    t = I(4);
  }
  t.write_shift(3, e.iStyleRef || e.s);
  t.write_shift(1, 0);
  return t;
}
var to = dr;
var gi = er;
function ja(e) {
  var t = e.read_shift(4);
  if (t === 0 || t === 4294967295) {
    return "";
  } else {
    return e.read_shift(t, "dbcs");
  }
}
function na(e, t) {
  var r = false;
  if (t == null) {
    r = true;
    t = I(127);
  }
  t.write_shift(4, e.length > 0 ? e.length : 4294967295);
  if (e.length > 0) {
    t.write_shift(0, e, "dbcs");
  }
  if (r) {
    return t.slice(0, t.l);
  } else {
    return t;
  }
}
var ao = dr;
var En = ja;
var Hn = na;
function Gn(e) {
  var t = e.slice(e.l, e.l + 4);
  var r = t[0] & 1;
  var a = t[0] & 2;
  e.l += 4;
  var n = a === 0 ? Na([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : xt(t, 0) >> 2;
  if (r) {
    return n / 100;
  } else {
    return n;
  }
}
function wi(e, t) {
  if (t == null) {
    t = I(4);
  }
  var r = 0;
  var a = 0;
  var n = e * 100;
  if (e == (e | 0) && e >= -536870912 && e < 536870912) {
    a = 1;
  } else if (n == (n | 0) && n >= -536870912 && n < 536870912) {
    a = 1;
    r = 1;
  }
  if (a) {
    t.write_shift(-4, ((r ? n : e) << 2) + (r + 2));
  } else {
    throw new Error("unsupported RkNumber " + e);
  }
}
function Ti(e) {
  var t = {
    s: {},
    e: {}
  };
  t.s.r = e.read_shift(4);
  t.e.r = e.read_shift(4);
  t.s.c = e.read_shift(4);
  t.e.c = e.read_shift(4);
  return t;
}
function no(e, t) {
  t ||= I(16);
  t.write_shift(4, e.s.r);
  t.write_shift(4, e.e.r);
  t.write_shift(4, e.s.c);
  t.write_shift(4, e.e.c);
  return t;
}
var St = Ti;
var Wt = no;
function Ht(e) {
  if (e.length - e.l < 8) {
    throw "XLS Xnum Buffer underflow";
  }
  return e.read_shift(8, "f");
}
function _t(e, t) {
  return (t || I(8)).write_shift(8, e, "f");
}
function io(e) {
  var t = {};
  var r = e.read_shift(1);
  var a = r >>> 1;
  var n = e.read_shift(1);
  var s = e.read_shift(2, "i");
  var i = e.read_shift(1);
  var f = e.read_shift(1);
  var o = e.read_shift(1);
  e.l++;
  switch (a) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = n;
      var l = po[n];
      if (l) {
        t.rgb = I0(l);
      }
      break;
    case 2:
      t.rgb = I0([i, f, o]);
      break;
    case 3:
      t.theme = n;
      break;
  }
  if (s != 0) {
    t.tint = s > 0 ? s / 32767 : s / 32768;
  }
  return t;
}
function Pa(e, t) {
  t ||= I(8);
  if (!e || e.auto) {
    t.write_shift(4, 0);
    t.write_shift(4, 0);
    return t;
  }
  if (e.index != null) {
    t.write_shift(1, 2);
    t.write_shift(1, e.index);
  } else if (e.theme != null) {
    t.write_shift(1, 6);
    t.write_shift(1, e.theme);
  } else {
    t.write_shift(1, 5);
    t.write_shift(1, 0);
  }
  var r = e.tint || 0;
  if (r > 0) {
    r *= 32767;
  } else if (r < 0) {
    r *= 32768;
  }
  t.write_shift(2, r);
  if (!e.rgb || e.theme != null) {
    t.write_shift(2, 0);
    t.write_shift(1, 0);
    t.write_shift(1, 0);
  } else {
    var a = e.rgb || "FFFFFF";
    if (typeof a == "number") {
      a = ("000000" + a.toString(16)).slice(-6);
    }
    t.write_shift(1, parseInt(a.slice(0, 2), 16));
    t.write_shift(1, parseInt(a.slice(2, 4), 16));
    t.write_shift(1, parseInt(a.slice(4, 6), 16));
    t.write_shift(1, 255);
  }
  return t;
}
function so(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128
  };
  return r;
}
function fo(e, t) {
  t ||= I(2);
  var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  t.write_shift(1, r);
  t.write_shift(1, 0);
  return t;
}
var Ei = 2;
var Cr = 3;
var _a = 11;
var La = 19;
var ga = 64;
var oo = 65;
var lo = 71;
var co = 4108;
var ho = 4126;
var nr = 80;
var T0 = {
  1: {
    n: "CodePage",
    t: Ei
  },
  2: {
    n: "Category",
    t: nr
  },
  3: {
    n: "PresentationFormat",
    t: nr
  },
  4: {
    n: "ByteCount",
    t: Cr
  },
  5: {
    n: "LineCount",
    t: Cr
  },
  6: {
    n: "ParagraphCount",
    t: Cr
  },
  7: {
    n: "SlideCount",
    t: Cr
  },
  8: {
    n: "NoteCount",
    t: Cr
  },
  9: {
    n: "HiddenCount",
    t: Cr
  },
  10: {
    n: "MultimediaClipCount",
    t: Cr
  },
  11: {
    n: "ScaleCrop",
    t: _a
  },
  12: {
    n: "HeadingPairs",
    t: co
  },
  13: {
    n: "TitlesOfParts",
    t: ho
  },
  14: {
    n: "Manager",
    t: nr
  },
  15: {
    n: "Company",
    t: nr
  },
  16: {
    n: "LinksUpToDate",
    t: _a
  },
  17: {
    n: "CharacterCount",
    t: Cr
  },
  19: {
    n: "SharedDoc",
    t: _a
  },
  22: {
    n: "HyperlinksChanged",
    t: _a
  },
  23: {
    n: "AppVersion",
    t: Cr,
    p: "version"
  },
  24: {
    n: "DigSig",
    t: oo
  },
  26: {
    n: "ContentType",
    t: nr
  },
  27: {
    n: "ContentStatus",
    t: nr
  },
  28: {
    n: "Language",
    t: nr
  },
  29: {
    n: "Version",
    t: nr
  },
  255: {},
  2147483648: {
    n: "Locale",
    t: La
  },
  2147483651: {
    n: "Behavior",
    t: La
  },
  1919054434: {}
};
var E0 = {
  1: {
    n: "CodePage",
    t: Ei
  },
  2: {
    n: "Title",
    t: nr
  },
  3: {
    n: "Subject",
    t: nr
  },
  4: {
    n: "Author",
    t: nr
  },
  5: {
    n: "Keywords",
    t: nr
  },
  6: {
    n: "Comments",
    t: nr
  },
  7: {
    n: "Template",
    t: nr
  },
  8: {
    n: "LastAuthor",
    t: nr
  },
  9: {
    n: "RevNumber",
    t: nr
  },
  10: {
    n: "EditTime",
    t: ga
  },
  11: {
    n: "LastPrinted",
    t: ga
  },
  12: {
    n: "CreatedDate",
    t: ga
  },
  13: {
    n: "ModifiedDate",
    t: ga
  },
  14: {
    n: "PageCount",
    t: Cr
  },
  15: {
    n: "WordCount",
    t: Cr
  },
  16: {
    n: "CharCount",
    t: Cr
  },
  17: {
    n: "Thumbnail",
    t: lo
  },
  18: {
    n: "Application",
    t: nr
  },
  19: {
    n: "DocSecurity",
    t: Cr
  },
  255: {},
  2147483648: {
    n: "Locale",
    t: La
  },
  2147483651: {
    n: "Behavior",
    t: La
  },
  1919054434: {}
};
function uo(e) {
  return e.map(function (t) {
    return [t >> 16 & 255, t >> 8 & 255, t & 255];
  });
}
var xo = uo([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 0, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
var po = pr(xo);
var Er = {
  0: "#NULL!",
  7: "#DIV/0!",
  15: "#VALUE!",
  23: "#REF!",
  29: "#NAME?",
  36: "#NUM!",
  42: "#N/A",
  43: "#GETTING_DATA",
  255: "#WTF?"
};
var Vr = {
  "#NULL!": 0,
  "#DIV/0!": 7,
  "#VALUE!": 15,
  "#REF!": 23,
  "#NAME?": 29,
  "#NUM!": 36,
  "#N/A": 42,
  "#GETTING_DATA": 43,
  "#WTF?": 255
};
var mo = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"];
var vo = {
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  "application/vnd.ms-office.chartex+xml": "TODO",
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  "application/vnd.ms-excel.wsSortMap": "TODO",
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  "application/vnd.ms-excel.Survey+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  "image/png": "TODO",
  sheet: "js"
};
var wa = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function Si() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function Ai(e, t, r) {
  var a = vf(vo);
  var n = [];
  var s;
  n[n.length] = qe;
  n[n.length] = J("Types", null, {
    xmlns: ar.CT,
    "xmlns:xsd": ar.xsd,
    "xmlns:xsi": ar.xsi
  });
  n = n.concat([["xml", "application/xml"], ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"], ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"], ["data", "application/vnd.openxmlformats-officedocument.model+data"], ["bmp", "image/bmp"], ["png", "image/png"], ["gif", "image/gif"], ["emf", "image/x-emf"], ["wmf", "image/x-wmf"], ["jpg", "image/jpeg"], ["jpeg", "image/jpeg"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["pdf", "application/pdf"], ["rels", "application/vnd.openxmlformats-package.relationships+xml"]].map(function (l) {
    return J("Default", null, {
      Extension: l[0],
      ContentType: l[1]
    });
  }));
  function i(l) {
    if (e[l] && e[l].length > 0) {
      s = e[l][0];
      n[n.length] = J("Override", null, {
        PartName: (s[0] == "/" ? "" : "/") + s,
        ContentType: wa[l][t.bookType] || wa[l].xlsx
      });
    }
  }
  function f(l) {
    (e[l] || []).forEach(function (c) {
      n[n.length] = J("Override", null, {
        PartName: (c[0] == "/" ? "" : "/") + c,
        ContentType: wa[l][t.bookType] || wa[l].xlsx
      });
    });
  }
  function o(l) {
    (e[l] || []).forEach(function (c) {
      n[n.length] = J("Override", null, {
        PartName: (c[0] == "/" ? "" : "/") + c,
        ContentType: a[l][0]
      });
    });
  }
  i("workbooks");
  f("sheets");
  f("charts");
  o("themes");
  ["strs", "styles"].forEach(i);
  ["coreprops", "extprops", "custprops"].forEach(o);
  o("vba");
  o("comments");
  o("threadedcomments");
  o("drawings");
  f("metadata");
  o("people");
  if (n.length > 2) {
    n[n.length] = "</Types>";
    n[1] = n[1].replace("/>", ">");
  }
  return n.join("");
}
var Ae = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function Fi(e) {
  var t = e.lastIndexOf("/");
  return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
}
function Rt(e) {
  var t = [qe, J("Relationships", null, {
    xmlns: ar.RELS
  })];
  Ze(e["!id"]).forEach(function (r) {
    t[t.length] = J("Relationship", null, e["!id"][r]);
  });
  if (t.length > 2) {
    t[t.length] = "</Relationships>";
    t[1] = t[1].replace("/>", ">");
  }
  return t.join("");
}
function ke(e, t, r, a, n, s) {
  n ||= {};
  e["!id"] ||= {};
  e["!idx"] ||= 1;
  if (t < 0) {
    for (t = e["!idx"]; e["!id"]["rId" + t]; ++t);
  }
  e["!idx"] = t + 1;
  n.Id = "rId" + t;
  n.Type = a;
  n.Target = r;
  if ([Ae.HLINK, Ae.XPATH, Ae.XMISS].indexOf(n.Type) > -1) {
    n.TargetMode = "External";
  }
  if (e["!id"][n.Id]) {
    throw new Error("Cannot rewrite rId " + t);
  }
  e["!id"][n.Id] = n;
  e[("/" + n.Target).replace("//", "/")] = n;
  return t;
}
function _o(e) {
  var t = [qe];
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`);
  t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var r = 0; r < e.length; ++r) {
    t.push(`${"  <manifest:file-entry manifest:full-path=\"" + e[r][0] + "\" manifest:media-type=\"" + e[r][1]}"/>
`);
  }
  t.push("</manifest:manifest>");
  return t.join("");
}
function S0(e, t, r) {
  return [`${"  <rdf:Description rdf:about=\"" + e}">
`, `${"    <rdf:type rdf:resource=\"http://docs.oasis-open.org/ns/office/1.2/meta/" + (r || "odf") + "#" + t}"/>
`, `  </rdf:Description>
`].join("");
}
function go(e, t) {
  return [`${"  <rdf:Description rdf:about=\"" + e}">
`, `${"    <ns0:hasPart xmlns:ns0=\"http://docs.oasis-open.org/ns/office/1.2/meta/pkg#\" rdf:resource=\"" + t}"/>
`, `  </rdf:Description>
`].join("");
}
function wo(e) {
  var t = [qe];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r) {
    t.push(S0(e[r][0], e[r][1]));
    t.push(go("", e[r][0]));
  }
  t.push(S0("", "Document", "pkg"));
  t.push("</rdf:RDF>");
  return t.join("");
}
function yi(e, t) {
  return "<office:document-meta xmlns:office=\"urn:oasis:names:tc:opendocument:xmlns:office:1.0\" xmlns:meta=\"urn:oasis:names:tc:opendocument:xmlns:meta:1.0\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" office:version=\"1.2\"><office:meta><meta:generator>SheetJS " + Fa.version + "</meta:generator></office:meta></office:document-meta>";
}
var dt = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]];
function ln(e, t, r, a, n) {
  if (n[e] == null && t != null && t !== "") {
    n[e] = t;
    t = me(t);
    a[a.length] = r ? J(e, t, r) : ir(e, t);
  }
}
function Ci(e, t) {
  var r = t || {};
  var a = [qe, J("cp:coreProperties", null, {
    "xmlns:cp": ar.CORE_PROPS,
    "xmlns:dc": ar.dc,
    "xmlns:dcterms": ar.dcterms,
    "xmlns:dcmitype": ar.dcmitype,
    "xmlns:xsi": ar.xsi
  })];
  var n = {};
  if (!e && !r.Props) {
    return a.join("");
  }
  if (e) {
    if (e.CreatedDate != null) {
      ln("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : Tn(e.CreatedDate, r.WTF), {
        "xsi:type": "dcterms:W3CDTF"
      }, a, n);
    }
    if (e.ModifiedDate != null) {
      ln("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : Tn(e.ModifiedDate, r.WTF), {
        "xsi:type": "dcterms:W3CDTF"
      }, a, n);
    }
  }
  for (var s = 0; s != dt.length; ++s) {
    var i = dt[s];
    var f = r.Props && r.Props[i[1]] != null ? r.Props[i[1]] : e ? e[i[1]] : null;
    if (f === true) {
      f = "1";
    } else if (f === false) {
      f = "0";
    } else if (typeof f == "number") {
      f = String(f);
    }
    if (f != null) {
      ln(i[0], f, null, a, n);
    }
  }
  if (a.length > 2) {
    a[a.length] = "</cp:coreProperties>";
    a[1] = a[1].replace("/>", ">");
  }
  return a.join("");
}
var It = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]];
var ki = ["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"];
function Oi(e) {
  var t = [];
  var r = J;
  e ||= {};
  e.Application = "SheetJS";
  t[t.length] = qe;
  t[t.length] = J("Properties", null, {
    xmlns: ar.EXT_PROPS,
    "xmlns:vt": ar.vt
  });
  It.forEach(function (a) {
    if (e[a[1]] !== undefined) {
      var n;
      switch (a[2]) {
        case "string":
          n = me(String(e[a[1]]));
          break;
        case "bool":
          n = e[a[1]] ? "true" : "false";
          break;
      }
      if (n !== undefined) {
        t[t.length] = r(a[0], n);
      }
    }
  });
  t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), {
    size: 2,
    baseType: "variant"
  }));
  t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map(function (a) {
    return "<vt:lpstr>" + me(a) + "</vt:lpstr>";
  }).join(""), {
    size: e.Worksheets,
    baseType: "lpstr"
  }));
  if (t.length > 2) {
    t[t.length] = "</Properties>";
    t[1] = t[1].replace("/>", ">");
  }
  return t.join("");
}
function Di(e) {
  var t = [qe, J("Properties", null, {
    xmlns: ar.CUST_PROPS,
    "xmlns:vt": ar.vt
  })];
  if (!e) {
    return t.join("");
  }
  var r = 1;
  Ze(e).forEach(function (n) {
    ++r;
    t[t.length] = J("property", Lf(e[n]), {
      fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      pid: r,
      name: me(n)
    });
  });
  if (t.length > 2) {
    t[t.length] = "</Properties>";
    t[1] = t[1].replace("/>", ">");
  }
  return t.join("");
}
var A0 = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  Category: "Category",
  Manager: "Manager",
  Company: "Company",
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  Identifier: "Identifier",
  Language: "Language"
};
function To(e, t) {
  var r = [];
  Ze(A0).map(function (a) {
    for (var n = 0; n < dt.length; ++n) {
      if (dt[n][1] == a) {
        return dt[n];
      }
    }
    for (n = 0; n < It.length; ++n) {
      if (It[n][1] == a) {
        return It[n];
      }
    }
    throw a;
  }).forEach(function (a) {
    if (e[a[1]] != null) {
      var n = t && t.Props && t.Props[a[1]] != null ? t.Props[a[1]] : e[a[1]];
      switch (a[2]) {
        case "date":
          n = new Date(n).toISOString().replace(/\.\d*Z/, "Z");
          break;
      }
      if (typeof n == "number") {
        n = String(n);
      } else if (n === true || n === false) {
        n = n ? "1" : "0";
      } else if (n instanceof Date) {
        n = new Date(n).toISOString().replace(/\.\d*Z/, "");
      }
      r.push(ir(A0[a[1]] || a[1], n));
    }
  });
  return J("DocumentProperties", r.join(""), {
    xmlns: Or.o
  });
}
function Eo(e, t) {
  var r = ["Worksheets", "SheetNames"];
  var a = "CustomDocumentProperties";
  var n = [];
  if (e) {
    Ze(e).forEach(function (s) {
      if (Object.prototype.hasOwnProperty.call(e, s)) {
        for (var i = 0; i < dt.length; ++i) {
          if (s == dt[i][1]) {
            return;
          }
        }
        for (i = 0; i < It.length; ++i) {
          if (s == It[i][1]) {
            return;
          }
        }
        for (i = 0; i < r.length; ++i) {
          if (s == r[i]) {
            return;
          }
        }
        var f = e[s];
        var o = "string";
        if (typeof f == "number") {
          o = "float";
          f = String(f);
        } else if (f === true || f === false) {
          o = "boolean";
          f = f ? "1" : "0";
        } else {
          f = String(f);
        }
        n.push(J(h0(s), f, {
          "dt:dt": o
        }));
      }
    });
  }
  if (t) {
    Ze(t).forEach(function (s) {
      if (Object.prototype.hasOwnProperty.call(t, s) && (!e || !Object.prototype.hasOwnProperty.call(e, s))) {
        var i = t[s];
        var f = "string";
        if (typeof i == "number") {
          f = "float";
          i = String(i);
        } else if (i === true || i === false) {
          f = "boolean";
          i = i ? "1" : "0";
        } else if (i instanceof Date) {
          f = "dateTime.tz";
          i = i.toISOString();
        } else {
          i = String(i);
        }
        n.push(J(h0(s), i, {
          "dt:dt": f
        }));
      }
    });
  }
  return "<" + a + " xmlns=\"" + Or.o + "\">" + n.join("") + "</" + a + ">";
}
function So(e) {
  var t = typeof e == "string" ? new Date(Date.parse(e)) : e;
  var r = t.getTime() / 1000 + 11644473600;
  var a = r % Math.pow(2, 32);
  var n = (r - a) / Math.pow(2, 32);
  a *= 10000000;
  n *= 10000000;
  var s = a / Math.pow(2, 32) | 0;
  if (s > 0) {
    a = a % Math.pow(2, 32);
    n += s;
  }
  var i = I(8);
  i.write_shift(4, a);
  i.write_shift(4, n);
  return i;
}
function F0(e, t) {
  var r = I(4);
  var a = I(4);
  r.write_shift(4, e == 80 ? 31 : e);
  switch (e) {
    case 3:
      a.write_shift(-4, t);
      break;
    case 5:
      a = I(8);
      a.write_shift(8, t, "f");
      break;
    case 11:
      a.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      a = So(t);
      break;
    case 31:
    case 80:
      a = I(4 + (t.length + 1) * 2 + (t.length % 2 ? 0 : 2));
      a.write_shift(4, t.length + 1);
      a.write_shift(0, t, "dbcs");
      while (a.l != a.length) {
        a.write_shift(1, 0);
      }
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + t);
  }
  return je([r, a]);
}
var Ri = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function Ao(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      if ((e | 0) == e) {
        return 3;
      } else {
        return 5;
      }
    case "string":
      return 31;
    case "object":
      if (e instanceof Date) {
        return 64;
      }
      break;
  }
  return -1;
}
function y0(e, t, r) {
  var a = I(8);
  var n = [];
  var s = [];
  var i = 8;
  var f = 0;
  var o = I(8);
  var l = I(8);
  o.write_shift(4, 2);
  o.write_shift(4, 1200);
  l.write_shift(4, 1);
  s.push(o);
  n.push(l);
  i += 8 + o.length;
  if (!t) {
    l = I(8);
    l.write_shift(4, 0);
    n.unshift(l);
    var c = [I(4)];
    c[0].write_shift(4, e.length);
    f = 0;
    for (; f < e.length; ++f) {
      var x = e[f][0];
      o = I(8 + (x.length + 1) * 2 + (x.length % 2 ? 0 : 2));
      o.write_shift(4, f + 2);
      o.write_shift(4, x.length + 1);
      o.write_shift(0, x, "dbcs");
      while (o.l != o.length) {
        o.write_shift(1, 0);
      }
      c.push(o);
    }
    o = je(c);
    s.unshift(o);
    i += 8 + o.length;
  }
  for (f = 0; f < e.length; ++f) {
    if ((!t || !!t[e[f][0]]) && !(Ri.indexOf(e[f][0]) > -1) && !(ki.indexOf(e[f][0]) > -1) && e[f][1] != null) {
      var h = e[f][1];
      var u = 0;
      if (t) {
        u = +t[e[f][0]];
        var p = r[u];
        if (p.p == "version" && typeof h == "string") {
          var g = h.split(".");
          h = (+g[0] << 16) + (+g[1] || 0);
        }
        o = F0(p.t, h);
      } else {
        var m = Ao(h);
        if (m == -1) {
          m = 31;
          h = String(h);
        }
        o = F0(m, h);
      }
      s.push(o);
      l = I(8);
      l.write_shift(4, t ? u : 2 + f);
      n.push(l);
      i += 8 + o.length;
    }
  }
  var v = (s.length + 1) * 8;
  for (f = 0; f < s.length; ++f) {
    n[f].write_shift(4, v);
    v += s[f].length;
  }
  a.write_shift(4, i);
  a.write_shift(4, s.length);
  return je([a].concat(n).concat(s));
}
function C0(e, t, r, a, n, s) {
  var i = I(n ? 68 : 48);
  var f = [i];
  i.write_shift(2, 65534);
  i.write_shift(2, 0);
  i.write_shift(4, 842412599);
  i.write_shift(16, Pe.utils.consts.HEADER_CLSID, "hex");
  i.write_shift(4, n ? 2 : 1);
  i.write_shift(16, t, "hex");
  i.write_shift(4, n ? 68 : 48);
  var o = y0(e, r, a);
  f.push(o);
  if (n) {
    var l = y0(n, null, null);
    i.write_shift(16, s, "hex");
    i.write_shift(4, 68 + o.length);
    f.push(l);
  }
  return je(f);
}
function Fo(e, t) {
  t ||= I(e);
  for (var r = 0; r < e; ++r) {
    t.write_shift(1, 0);
  }
  return t;
}
function yo(e, t) {
  return e.read_shift(t) === 1;
}
function hr(e, t) {
  t ||= I(2);
  t.write_shift(2, +!!e);
  return t;
}
function Sa(e) {
  return e.read_shift(2, "u");
}
function Pr(e, t) {
  t ||= I(2);
  t.write_shift(2, e);
  return t;
}
function Ii(e, t, r) {
  r ||= I(2);
  r.write_shift(1, t == "e" ? +e : +!!e);
  r.write_shift(1, t == "e" ? 1 : 0);
  return r;
}
function Ni(e, t, r) {
  var a = e.read_shift(r && r.biff >= 12 ? 2 : 1);
  var n = "sbcs-cont";
  var s = Zr;
  if (r && r.biff >= 8) {
    Zr = 1200;
  }
  if (!r || r.biff == 8) {
    var i = e.read_shift(1);
    if (i) {
      n = "dbcs-cont";
    }
  } else if (r.biff == 12) {
    n = "wstr";
  }
  if (r.biff >= 2 && r.biff <= 5) {
    n = "cpstr";
  }
  var f = a ? e.read_shift(a, n) : "";
  Zr = s;
  return f;
}
function Co(e) {
  var t = e.t || "";
  var r = I(3);
  r.write_shift(2, t.length);
  r.write_shift(1, 1);
  var a = I(t.length * 2);
  a.write_shift(t.length * 2, t, "utf16le");
  var n = [r, a];
  return je(n);
}
function ko(e, t, r) {
  var a;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) {
      return e.read_shift(t, "cpstr");
    }
    if (r.biff >= 12) {
      return e.read_shift(t, "dbcs-cont");
    }
  }
  var n = e.read_shift(1);
  if (n === 0) {
    a = e.read_shift(t, "sbcs-cont");
  } else {
    a = e.read_shift(t, "dbcs-cont");
  }
  return a;
}
function Oo(e, t, r) {
  var a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  if (a === 0) {
    e.l++;
    return "";
  } else {
    return ko(e, a, r);
  }
}
function Do(e, t, r) {
  if (r.biff > 5) {
    return Oo(e, t, r);
  }
  var a = e.read_shift(1);
  if (a === 0) {
    e.l++;
    return "";
  } else {
    return e.read_shift(a, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
  }
}
function Pi(e, t, r) {
  r ||= I(3 + e.length * 2);
  r.write_shift(2, e.length);
  r.write_shift(1, 1);
  r.write_shift(31, e, "utf16le");
  return r;
}
function k0(e, t) {
  t ||= I(6 + e.length * 2);
  t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r) {
    t.write_shift(2, e.charCodeAt(r));
  }
  t.write_shift(2, 0);
  return t;
}
function Ro(e) {
  var t = I(512);
  var r = 0;
  var a = e.Target;
  if (a.slice(0, 7) == "file://") {
    a = a.slice(7);
  }
  var n = a.indexOf("#");
  var s = n > -1 ? 31 : 23;
  switch (a.charAt(0)) {
    case "#":
      s = 28;
      break;
    case ".":
      s &= -3;
      break;
  }
  t.write_shift(4, 2);
  t.write_shift(4, s);
  var i = [8, 6815827, 6619237, 4849780, 83];
  for (r = 0; r < i.length; ++r) {
    t.write_shift(4, i[r]);
  }
  if (s == 28) {
    a = a.slice(1);
    k0(a, t);
  } else if (s & 2) {
    i = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" ");
    r = 0;
    for (; r < i.length; ++r) {
      t.write_shift(1, parseInt(i[r], 16));
    }
    var f = n > -1 ? a.slice(0, n) : a;
    t.write_shift(4, (f.length + 1) * 2);
    r = 0;
    for (; r < f.length; ++r) {
      t.write_shift(2, f.charCodeAt(r));
    }
    t.write_shift(2, 0);
    if (s & 8) {
      k0(n > -1 ? a.slice(n + 1) : "", t);
    }
  } else {
    i = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" ");
    r = 0;
    for (; r < i.length; ++r) {
      t.write_shift(1, parseInt(i[r], 16));
    }
    for (var o = 0; a.slice(o * 3, o * 3 + 3) == "../" || a.slice(o * 3, o * 3 + 3) == "..\\";) {
      ++o;
    }
    t.write_shift(2, o);
    t.write_shift(4, a.length - o * 3 + 1);
    r = 0;
    for (; r < a.length - o * 3; ++r) {
      t.write_shift(1, a.charCodeAt(r + o * 3) & 255);
    }
    t.write_shift(1, 0);
    t.write_shift(2, 65535);
    t.write_shift(2, 57005);
    r = 0;
    for (; r < 6; ++r) {
      t.write_shift(4, 0);
    }
  }
  return t.slice(0, t.l);
}
function gt(e, t, r, a) {
  a ||= I(6);
  a.write_shift(2, e);
  a.write_shift(2, t);
  a.write_shift(2, r || 0);
  return a;
}
function Io(e, t, r) {
  var a = r.biff > 8 ? 4 : 2;
  var n = e.read_shift(a);
  var s = e.read_shift(a, "i");
  var i = e.read_shift(a, "i");
  return [n, s, i];
}
function No(e) {
  var t = e.read_shift(2);
  var r = e.read_shift(2);
  var a = e.read_shift(2);
  var n = e.read_shift(2);
  return {
    s: {
      c: a,
      r: t
    },
    e: {
      c: n,
      r
    }
  };
}
function Li(e, t) {
  t ||= I(8);
  t.write_shift(2, e.s.r);
  t.write_shift(2, e.e.r);
  t.write_shift(2, e.s.c);
  t.write_shift(2, e.e.c);
  return t;
}
function Xn(e, t, r) {
  var a = 1536;
  var n = 16;
  switch (r.bookType) {
    case "biff8":
      break;
    case "biff5":
      a = 1280;
      n = 8;
      break;
    case "biff4":
      a = 4;
      n = 6;
      break;
    case "biff3":
      a = 3;
      n = 6;
      break;
    case "biff2":
      a = 2;
      n = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var s = I(n);
  s.write_shift(2, a);
  s.write_shift(2, t);
  if (n > 4) {
    s.write_shift(2, 29282);
  }
  if (n > 6) {
    s.write_shift(2, 1997);
  }
  if (n > 8) {
    s.write_shift(2, 49161);
    s.write_shift(2, 1);
    s.write_shift(2, 1798);
    s.write_shift(2, 0);
  }
  return s;
}
function Po(e, t) {
  var r = !t || t.biff == 8;
  var a = I(r ? 112 : 54);
  a.write_shift(t.biff == 8 ? 2 : 1, 7);
  if (r) {
    a.write_shift(1, 0);
  }
  a.write_shift(4, 859007059);
  a.write_shift(4, (r ? 0 : 536870912) | 5458548);
  while (a.l < a.length) {
    a.write_shift(1, r ? 0 : 32);
  }
  return a;
}
function Lo(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1;
  var a = I(8 + r * e.name.length);
  a.write_shift(4, e.pos);
  a.write_shift(1, e.hs || 0);
  a.write_shift(1, e.dt);
  a.write_shift(1, e.name.length);
  if (t.biff >= 8) {
    a.write_shift(1, 1);
  }
  a.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
  var n = a.slice(0, a.l);
  n.l = a.l;
  return n;
}
function Mo(e, t) {
  var r = I(8);
  r.write_shift(4, e.Count);
  r.write_shift(4, e.Unique);
  var a = [];
  for (var n = 0; n < e.length; ++n) {
    a[n] = Co(e[n]);
  }
  var s = je([r].concat(a));
  s.parts = [r.length].concat(a.map(function (i) {
    return i.length;
  }));
  return s;
}
function Bo() {
  var e = I(18);
  e.write_shift(2, 0);
  e.write_shift(2, 0);
  e.write_shift(2, 29280);
  e.write_shift(2, 17600);
  e.write_shift(2, 56);
  e.write_shift(2, 0);
  e.write_shift(2, 0);
  e.write_shift(2, 1);
  e.write_shift(2, 500);
  return e;
}
function bo(e) {
  var t = I(18);
  var r = 1718;
  if (e && e.RTL) {
    r |= 64;
  }
  t.write_shift(2, r);
  t.write_shift(4, 0);
  t.write_shift(4, 64);
  t.write_shift(4, 0);
  t.write_shift(4, 0);
  return t;
}
function Uo(e, t) {
  var r = e.name || "Arial";
  var a = t && t.biff == 5;
  var n = a ? 15 + r.length : 16 + r.length * 2;
  var s = I(n);
  s.write_shift(2, e.sz * 20);
  s.write_shift(4, 0);
  s.write_shift(2, 400);
  s.write_shift(4, 0);
  s.write_shift(2, 0);
  s.write_shift(1, r.length);
  if (!a) {
    s.write_shift(1, 1);
  }
  s.write_shift((a ? 1 : 2) * r.length, r, a ? "sbcs" : "utf16le");
  return s;
}
function Wo(e, t, r, a) {
  var n = I(10);
  gt(e, t, a, n);
  n.write_shift(4, r);
  return n;
}
function Ho(e, t, r, a, n) {
  var s = !n || n.biff == 8;
  var i = I(8 + +s + (1 + s) * r.length);
  gt(e, t, a, i);
  i.write_shift(2, r.length);
  if (s) {
    i.write_shift(1, 1);
  }
  i.write_shift((1 + s) * r.length, r, s ? "utf16le" : "sbcs");
  return i;
}
function Go(e, t, r, a) {
  var n = r && r.biff == 5;
  a ||= I(n ? 3 + t.length : 5 + t.length * 2);
  a.write_shift(2, e);
  a.write_shift(n ? 1 : 2, t.length);
  if (!n) {
    a.write_shift(1, 1);
  }
  a.write_shift((n ? 1 : 2) * t.length, t, n ? "sbcs" : "utf16le");
  var s = a.length > a.l ? a.slice(0, a.l) : a;
  if (s.l == null) {
    s.l = s.length;
  }
  return s;
}
function Xo(e) {
  var t = I(1 + e.length);
  t.write_shift(1, e.length);
  t.write_shift(e.length, e, "sbcs");
  return t;
}
function Vo(e) {
  var t = I(3 + e.length);
  t.l += 2;
  t.write_shift(1, e.length);
  t.write_shift(e.length, e, "sbcs");
  return t;
}
function $o(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2;
  var a = I(r * 2 + 6);
  a.write_shift(r, e.s.r);
  a.write_shift(r, e.e.r + 1);
  a.write_shift(2, e.s.c);
  a.write_shift(2, e.e.c + 1);
  a.write_shift(2, 0);
  return a;
}
function O0(e, t, r, a) {
  var n = r && r.biff == 5;
  a ||= I(n ? 16 : 20);
  a.write_shift(2, 0);
  if (e.style) {
    a.write_shift(2, e.numFmtId || 0);
    a.write_shift(2, 65524);
  } else {
    a.write_shift(2, e.numFmtId || 0);
    a.write_shift(2, t << 4);
  }
  var s = 0;
  if (e.numFmtId > 0 && n) {
    s |= 1024;
  }
  a.write_shift(4, s);
  a.write_shift(4, 0);
  if (!n) {
    a.write_shift(4, 0);
  }
  a.write_shift(2, 0);
  return a;
}
function zo(e) {
  var t = I(4);
  t.l += 2;
  t.write_shift(1, e.numFmtId);
  t.l++;
  return t;
}
function Mi(e) {
  var t = I(12);
  t.l++;
  t.write_shift(1, e.numFmtId);
  t.l += 10;
  return t;
}
var Ko = Mi;
function Yo(e) {
  var t = I(8);
  t.write_shift(4, 0);
  t.write_shift(2, 0);
  t.write_shift(2, 0);
  return t;
}
function cn(e, t, r, a, n, s) {
  var i = I(8);
  gt(e, t, a, i);
  Ii(r, s, i);
  return i;
}
function jo(e, t, r, a) {
  var n = I(14);
  gt(e, t, a, n);
  _t(r, n);
  return n;
}
function Zo(e, t, r) {
  if (r.biff < 8 || !(r.biff > 8) && t == e[e.l] + (e[e.l + 1] == 3 ? 1 : 0) + 1) {
    return D0(e, t, r);
  }
  var a = [];
  var n = e.l + t;
  for (var s = e.read_shift(r.biff > 8 ? 4 : 2); s-- !== 0;) {
    a.push(Io(e, r.biff > 8 ? 12 : 6, r));
  }
  if (e.l != n) {
    throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  }
  return a;
}
function D0(e, t, r) {
  if (e[e.l + 1] == 3) {
    e[e.l]++;
  }
  var a = Ni(e, t, r);
  if (a.charCodeAt(0) == 3) {
    return a.slice(1);
  } else {
    return a;
  }
}
function hn(e, t, r, a) {
  var n = I(6 + (a || e.length));
  n.write_shift(2, t);
  n.write_shift(2, r);
  n.write_shift(2, a || e.length);
  n.write_shift(e.length, e, "sbcs");
  return n;
}
function Jo(e) {
  var t = I(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r) {
    Li(e[r], t);
  }
  return t;
}
function qo(e) {
  var t = I(24);
  var r = We(e[0]);
  t.write_shift(2, r.r);
  t.write_shift(2, r.r);
  t.write_shift(2, r.c);
  t.write_shift(2, r.c);
  var a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" ");
  for (var n = 0; n < 16; ++n) {
    t.write_shift(1, parseInt(a[n], 16));
  }
  return je([t, Ro(e[1])]);
}
function Qo(e) {
  var t = e[1].Tooltip;
  var r = I(10 + (t.length + 1) * 2);
  r.write_shift(2, 2048);
  var a = We(e[0]);
  r.write_shift(2, a.r);
  r.write_shift(2, a.r);
  r.write_shift(2, a.c);
  r.write_shift(2, a.c);
  for (var n = 0; n < t.length; ++n) {
    r.write_shift(2, t.charCodeAt(n));
  }
  r.write_shift(2, 0);
  return r;
}
function el(e) {
  e ||= I(4);
  e.write_shift(2, 1);
  e.write_shift(2, 1);
  return e;
}
function rl(e, t, r) {
  if (!r.cellStyles) {
    return $r(e, t);
  }
  var a = r && r.biff >= 12 ? 4 : 2;
  var n = e.read_shift(a);
  var s = e.read_shift(a);
  var i = e.read_shift(a);
  var f = e.read_shift(a);
  var o = e.read_shift(2);
  if (a == 2) {
    e.l += 2;
  }
  var l = {
    s: n,
    e: s,
    w: i,
    ixfe: f,
    flags: o
  };
  if (r.biff >= 5 || !r.biff) {
    l.level = o >> 8 & 7;
  }
  return l;
}
function tl(e, t) {
  var r = I(12);
  r.write_shift(2, t);
  r.write_shift(2, t);
  r.write_shift(2, e.width * 256);
  r.write_shift(2, 0);
  var a = 0;
  if (e.hidden) {
    a |= 1;
  }
  r.write_shift(1, a);
  a = e.level || 0;
  r.write_shift(1, a);
  r.write_shift(2, 0);
  return r;
}
function al(e) {
  var t = I(e * 2);
  for (var r = 0; r < e; ++r) {
    t.write_shift(2, r + 1);
  }
  return t;
}
function ca(e, t, r, a, n) {
  e ||= I(7);
  e.write_shift(2, t);
  e.write_shift(2, r);
  e.write_shift(1, a || 0);
  e.write_shift(1, n || 0);
  e.write_shift(1, 0);
  return e;
}
function nl(e, t, r, a, n) {
  var s = I(15);
  ca(s, e, t, a || 0, n || 0);
  s.write_shift(8, r, "f");
  return s;
}
function il(e, t, r, a, n) {
  var s = I(9);
  ca(s, e, t, a || 0, n || 0);
  s.write_shift(2, r);
  return s;
}
var sl = function () {
  var e = {
    1: 437,
    2: 850,
    3: 1252,
    4: 10000,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    0: 20127,
    8: 865,
    9: 437,
    10: 850,
    11: 437,
    13: 437,
    14: 850,
    15: 437,
    16: 850,
    17: 437,
    18: 850,
    19: 932,
    20: 850,
    21: 437,
    22: 850,
    23: 865,
    24: 437,
    25: 437,
    26: 850,
    27: 437,
    28: 863,
    29: 850,
    31: 852,
    34: 852,
    35: 852,
    36: 860,
    37: 850,
    38: 866,
    55: 850,
    64: 852,
    77: 936,
    78: 949,
    79: 950,
    80: 874,
    87: 1252,
    88: 1252,
    89: 1252,
    108: 863,
    134: 737,
    135: 852,
    136: 857,
    204: 1257,
    255: 16969
  };
  var t = Rn({
    1: 437,
    2: 850,
    3: 1252,
    4: 10000,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    0: 20127
  });
  function r(f, o) {
    var l = [];
    var c = pt(1);
    switch (o.type) {
      case "base64":
        c = kr(it(f));
        break;
      case "binary":
        c = kr(f);
        break;
      case "buffer":
      case "array":
        c = f;
        break;
    }
    wr(c, 0);
    var x = c.read_shift(1);
    var h = !!(x & 136);
    var u = false;
    var p = false;
    switch (x) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        u = true;
        h = true;
        break;
      case 49:
        u = true;
        h = true;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        p = true;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + x.toString(16));
    }
    var g = 0;
    var m = 521;
    if (x == 2) {
      g = c.read_shift(2);
    }
    c.l += 3;
    if (x != 2) {
      g = c.read_shift(4);
    }
    if (g > 1048576) {
      g = 1000000;
    }
    if (x != 2) {
      m = c.read_shift(2);
    }
    var v = c.read_shift(2);
    o.codepage;
    if (x != 2) {
      c.l += 16;
      c.read_shift(1);
      if (c[c.l] !== 0) {
        e[c[c.l]];
      }
      c.l += 1;
      c.l += 2;
    }
    if (p) {
      c.l += 36;
    }
    var C = [];
    var F = {};
    for (var U = Math.min(c.length, x == 2 ? 521 : m - 10 - (u ? 264 : 0)), H = p ? 32 : 11; c.l < U && c[c.l] != 13;) {
      F = {};
      F.name = mt(c.slice(c.l, c.l + H)).replace(/[\u0000\r\n][\S\s]*$/g, "");
      c.l += H;
      F.type = String.fromCharCode(c.read_shift(1));
      if (x != 2 && !p) {
        F.offset = c.read_shift(4);
      }
      F.len = c.read_shift(1);
      if (x == 2) {
        F.offset = c.read_shift(2);
      }
      F.dec = c.read_shift(1);
      if (F.name.length) {
        C.push(F);
      }
      if (x != 2) {
        c.l += p ? 13 : 14;
      }
      switch (F.type) {
        case "B":
          if ((!u || F.len != 8) && o.WTF) {
            console.log("Skipping " + F.name + ":" + F.type);
          }
          break;
        case "G":
        case "P":
          if (o.WTF) {
            console.log("Skipping " + F.name + ":" + F.type);
          }
          break;
        case "+":
        case "0":
        case "@":
        case "C":
        case "D":
        case "F":
        case "I":
        case "L":
        case "M":
        case "N":
        case "O":
        case "T":
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + F.type);
      }
    }
    if (c[c.l] !== 13) {
      c.l = m - 1;
    }
    if (c.read_shift(1) !== 13) {
      throw new Error("DBF Terminator not found " + c.l + " " + c[c.l]);
    }
    c.l = m;
    var V = 0;
    var y = 0;
    l[0] = [];
    y = 0;
    for (; y != C.length; ++y) {
      l[0][y] = C[y].name;
    }
    while (g-- > 0) {
      if (c[c.l] === 42) {
        c.l += v;
        continue;
      }
      ++c.l;
      l[++V] = [];
      y = 0;
      y = 0;
      for (; y != C.length; ++y) {
        var N = c.slice(c.l, c.l + C[y].len);
        c.l += C[y].len;
        wr(N, 0);
        var D = mt(N);
        switch (C[y].type) {
          case "C":
            if (D.trim().length) {
              l[V][y] = D.replace(/([^\s])\s+$/, "$1");
            }
            break;
          case "D":
            if (D.length === 8) {
              l[V][y] = new Date(Date.UTC(+D.slice(0, 4), +D.slice(4, 6) - 1, +D.slice(6, 8), 0, 0, 0, 0));
              if (!o || !o.UTC) {
                l[V][y] = Lt(l[V][y]);
              }
            } else {
              l[V][y] = D;
            }
            break;
          case "F":
            l[V][y] = parseFloat(D.trim());
            break;
          case "+":
          case "I":
            l[V][y] = p ? N.read_shift(-4, "i") ^ 2147483648 : N.read_shift(4, "i");
            break;
          case "L":
            switch (D.trim().toUpperCase()) {
              case "Y":
              case "T":
                l[V][y] = true;
                break;
              case "N":
              case "F":
                l[V][y] = false;
                break;
              case "":
              case "\0":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + D + "|");
            }
            break;
          case "M":
            if (!h) {
              throw new Error("DBF Unexpected MEMO for type " + x.toString(16));
            }
            l[V][y] = "##MEMO##" + (p ? parseInt(D.trim(), 10) : N.read_shift(4));
            break;
          case "N":
            D = D.replace(/\u0000/g, "").trim();
            if (D && D != ".") {
              l[V][y] = +D || 0;
            }
            break;
          case "@":
            l[V][y] = new Date(N.read_shift(-8, "f") - 62135683200000);
            break;
          case "T":
            {
              var X = N.read_shift(4);
              var b = N.read_shift(4);
              if (X == 0 && b == 0) {
                break;
              }
              l[V][y] = new Date((X - 2440588) * 86400000 + b);
              if (!o || !o.UTC) {
                l[V][y] = Lt(l[V][y]);
              }
            }
            break;
          case "Y":
            l[V][y] = N.read_shift(4, "i") / 10000 + N.read_shift(4, "i") / 10000 * Math.pow(2, 32);
            break;
          case "O":
            l[V][y] = -N.read_shift(-8, "f");
            break;
          case "B":
            if (u && C[y].len == 8) {
              l[V][y] = N.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            N.l += C[y].len;
            break;
          case "0":
            if (C[y].name === "_NullFlags") {
              break;
            }
          default:
            throw new Error("DBF Unsupported data type " + C[y].type);
        }
      }
    }
    if (x != 2 && c.l < c.length && c[c.l++] != 26) {
      throw new Error("DBF EOF Marker missing " + (c.l - 1) + " of " + c.length + " " + c[c.l - 1].toString(16));
    }
    if (o && o.sheetRows) {
      l = l.slice(0, o.sheetRows);
    }
    o.DBF = C;
    return l;
  }
  function a(f, o) {
    var l = o || {};
    l.dateNF ||= "yyyymmdd";
    var c = Ut(r(f, l), l);
    c["!cols"] = l.DBF.map(function (x) {
      return {
        wch: x.len,
        DBF: x
      };
    });
    delete l.DBF;
    return c;
  }
  function n(f, o) {
    try {
      var l = bt(a(f, o), o);
      l.bookType = "dbf";
      return l;
    } catch (c) {
      if (o && o.WTF) {
        throw c;
      }
    }
    return {
      SheetNames: [],
      Sheets: {}
    };
  }
  var s = {
    B: 8,
    C: 250,
    L: 1,
    D: 8,
    "?": 0,
    "": 0
  };
  function i(f, o) {
    if (!f["!ref"]) {
      throw new Error("Cannot export empty sheet to DBF");
    }
    var l = o || {};
    var c = Zr;
    if (+l.codepage >= 0) {
      Qt(+l.codepage);
    }
    if (l.type == "string") {
      throw new Error("Cannot write DBF to JS string");
    }
    var x = xr();
    var h = yn(f, {
      header: 1,
      raw: true,
      cellDates: true
    });
    var u = h[0];
    var p = h.slice(1);
    var g = f["!cols"] || [];
    var m = 0;
    var v = 0;
    var C = 0;
    var F = 1;
    for (m = 0; m < u.length; ++m) {
      if (((g[m] || {}).DBF || {}).name) {
        u[m] = g[m].DBF.name;
        ++C;
        continue;
      }
      if (u[m] != null) {
        ++C;
        if (typeof u[m] == "number") {
          u[m] = u[m].toString(10);
        }
        if (typeof u[m] != "string") {
          throw new Error("DBF Invalid column name " + u[m] + " |" + typeof u[m] + "|");
        }
        if (u.indexOf(u[m]) !== m) {
          for (v = 0; v < 1024; ++v) {
            if (u.indexOf(u[m] + "_" + v) == -1) {
              u[m] += "_" + v;
              break;
            }
          }
        }
      }
    }
    var U = Be(f["!ref"]);
    var H = [];
    var V = [];
    var y = [];
    for (m = 0; m <= U.e.c - U.s.c; ++m) {
      var N = "";
      var D = "";
      var X = 0;
      var b = [];
      for (v = 0; v < p.length; ++v) {
        if (p[v][m] != null) {
          b.push(p[v][m]);
        }
      }
      if (b.length == 0 || u[m] == null) {
        H[m] = "?";
        continue;
      }
      for (v = 0; v < b.length; ++v) {
        switch (typeof b[v]) {
          case "number":
            D = "B";
            break;
          case "string":
            D = "C";
            break;
          case "boolean":
            D = "L";
            break;
          case "object":
            D = b[v] instanceof Date ? "D" : "C";
            break;
          default:
            D = "C";
        }
        X = Math.max(X, String(b[v]).length);
        N = N && N != D ? "C" : D;
      }
      if (X > 250) {
        X = 250;
      }
      D = ((g[m] || {}).DBF || {}).type;
      if (D == "C" && g[m].DBF.len > X) {
        X = g[m].DBF.len;
      }
      if (N == "B" && D == "N") {
        N = "N";
        y[m] = g[m].DBF.dec;
        X = g[m].DBF.len;
      }
      V[m] = N == "C" || D == "N" ? X : s[N] || 0;
      F += V[m];
      H[m] = N;
    }
    var Y = x.next(32);
    Y.write_shift(4, 318902576);
    Y.write_shift(4, p.length);
    Y.write_shift(2, 296 + C * 32);
    Y.write_shift(2, F);
    m = 0;
    for (; m < 4; ++m) {
      Y.write_shift(4, 0);
    }
    var le = +t[Zr] || 3;
    Y.write_shift(4, le << 8 | 0);
    if (e[le] != +l.codepage) {
      if (l.codepage) {
        console.error("DBF Unsupported codepage " + Zr + ", using 1252");
      }
      Zr = 1252;
    }
    m = 0;
    v = 0;
    for (; m < u.length; ++m) {
      if (u[m] != null) {
        var _e = x.next(32);
        var ce = (u[m].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        _e.write_shift(1, ce, "sbcs");
        _e.write_shift(1, H[m] == "?" ? "C" : H[m], "sbcs");
        _e.write_shift(4, v);
        _e.write_shift(1, V[m] || s[H[m]] || 0);
        _e.write_shift(1, y[m] || 0);
        _e.write_shift(1, 2);
        _e.write_shift(4, 0);
        _e.write_shift(1, 0);
        _e.write_shift(4, 0);
        _e.write_shift(4, 0);
        v += V[m] || s[H[m]] || 0;
      }
    }
    var rr = x.next(264);
    rr.write_shift(4, 13);
    m = 0;
    for (; m < 65; ++m) {
      rr.write_shift(4, 0);
    }
    for (m = 0; m < p.length; ++m) {
      var he = x.next(F);
      he.write_shift(1, 0);
      v = 0;
      for (; v < u.length; ++v) {
        if (u[v] != null) {
          switch (H[v]) {
            case "L":
              he.write_shift(1, p[m][v] == null ? 63 : p[m][v] ? 84 : 70);
              break;
            case "B":
              he.write_shift(8, p[m][v] || 0, "f");
              break;
            case "N":
              var Qe = "0";
              if (typeof p[m][v] == "number") {
                Qe = p[m][v].toFixed(y[v] || 0);
              }
              if (Qe.length > V[v]) {
                Qe = Qe.slice(0, V[v]);
              }
              C = 0;
              for (; C < V[v] - Qe.length; ++C) {
                he.write_shift(1, 32);
              }
              he.write_shift(1, Qe, "sbcs");
              break;
            case "D":
              if (p[m][v]) {
                he.write_shift(4, ("0000" + p[m][v].getFullYear()).slice(-4), "sbcs");
                he.write_shift(2, ("00" + (p[m][v].getMonth() + 1)).slice(-2), "sbcs");
                he.write_shift(2, ("00" + p[m][v].getDate()).slice(-2), "sbcs");
              } else {
                he.write_shift(8, "00000000", "sbcs");
              }
              break;
            case "C":
              var Xe = he.l;
              var mr = String(p[m][v] ?? "").slice(0, V[v]);
              he.write_shift(1, mr, "cpstr");
              Xe += V[v] - he.l;
              C = 0;
              for (; C < Xe; ++C) {
                he.write_shift(1, 32);
              }
              break;
          }
        }
      }
    }
    Zr = c;
    x.next(1).write_shift(1, 26);
    return x.end();
  }
  return {
    to_workbook: n,
    to_sheet: a,
    from_sheet: i
  };
}();
var fl = function () {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    0: 176,
    1: 177,
    2: 178,
    3: 179,
    5: 181,
    6: 182,
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    "\"": 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  };
  var t = new RegExp("N(" + Ze(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1").replace("{", "\\{") + "|\\|)", "gm");
  try {
    t = new RegExp("N(" + Ze(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
  } catch { }
  function r(u, p) {
    var g = e[p];
    if (typeof g == "number") {
      return Qn(g);
    } else {
      return g;
    }
  }
  function a(u, p, g) {
    var m = p.charCodeAt(0) - 32 << 4 | g.charCodeAt(0) - 48;
    if (m == 59) {
      return u;
    } else {
      return Qn(m);
    }
  }
  e["|"] = 254;
  function n(u) {
    return u.replace(/\n/g, " :").replace(/\r/g, " =");
  }
  function s(u, p) {
    switch (p.type) {
      case "base64":
        return i(it(u), p);
      case "binary":
        return i(u, p);
      case "buffer":
        return i(Oe && Buffer.isBuffer(u) ? u.toString("binary") : mt(u), p);
      case "array":
        return i(In(u), p);
    }
    throw new Error("Unrecognized type " + p.type);
  }
  function i(u, p) {
    var g = u.split(/[\n\r]+/);
    var m = -1;
    var v = -1;
    var C = 0;
    var F = 0;
    var U = [];
    var H = [];
    var V = null;
    var y = {};
    var N = [];
    var D = [];
    var X = [];
    var b = 0;
    var Y;
    var le = {
      Workbook: {
        WBProps: {},
        Names: []
      }
    };
    for (+p.codepage >= 0 && Qt(+p.codepage); C !== g.length; ++C) {
      b = 0;
      var _e = g[C].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(t, r);
      var ce = _e.replace(/;;/g, "\0").split(";").map(function (k) {
        return k.replace(/\u0000/g, ";");
      });
      var rr = ce[0];
      var he;
      if (_e.length > 0) {
        switch (rr) {
          case "ID":
            break;
          case "E":
            break;
          case "B":
            break;
          case "O":
            for (F = 1; F < ce.length; ++F) {
              switch (ce[F].charAt(0)) {
                case "V":
                  {
                    var Qe = parseInt(ce[F].slice(1), 10);
                    if (Qe >= 1 && Qe <= 4) {
                      le.Workbook.WBProps.date1904 = true;
                    }
                  }
                  break;
              }
            }
            break;
          case "W":
            break;
          case "P":
            switch (ce[1].charAt(0)) {
              case "P":
                H.push(_e.slice(3).replace(/;;/g, ";"));
                break;
            }
            break;
          case "NN":
            {
              var Xe = {
                Sheet: 0
              };
              for (F = 1; F < ce.length; ++F) {
                switch (ce[F].charAt(0)) {
                  case "N":
                    Xe.Name = ce[F].slice(1);
                    break;
                  case "E":
                    Xe.Ref = (p && p.sheet || "Sheet1") + "!" + L0(ce[F].slice(1));
                    break;
                }
              }
              le.Workbook.Names.push(Xe);
            }
            break;
          case "C":
            var mr = false;
            var yr = false;
            var ve = false;
            var ge = false;
            var Te = -1;
            var Fe = -1;
            var ye = "";
            var Ee = "z";
            var A = "";
            for (F = 1; F < ce.length; ++F) {
              switch (ce[F].charAt(0)) {
                case "A":
                  A = ce[F].slice(1);
                  break;
                case "X":
                  v = parseInt(ce[F].slice(1), 10) - 1;
                  yr = true;
                  break;
                case "Y":
                  m = parseInt(ce[F].slice(1), 10) - 1;
                  if (!yr) {
                    v = 0;
                  }
                  Y = U.length;
                  for (; Y <= m; ++Y) {
                    U[Y] = [];
                  }
                  break;
                case "K":
                  he = ce[F].slice(1);
                  if (he.charAt(0) === "\"") {
                    he = he.slice(1, he.length - 1);
                    Ee = "s";
                  } else if (he === "TRUE" || he === "FALSE") {
                    he = he === "TRUE";
                    Ee = "b";
                  } else if (he.charAt(0) == "#" && Vr[he] != null) {
                    Ee = "e";
                    he = Vr[he];
                  } else if (!isNaN(qr(he))) {
                    he = qr(he);
                    Ee = "n";
                    if (V !== null && vt(V) && p.cellDates) {
                      he = Ot(le.Workbook.WBProps.date1904 ? he + 1462 : he);
                      Ee = typeof he == "number" ? "n" : "d";
                    }
                  }
                  mr = true;
                  break;
                case "E":
                  ge = true;
                  ye = L0(ce[F].slice(1), {
                    r: m,
                    c: v
                  });
                  break;
                case "S":
                  ve = true;
                  break;
                case "G":
                  break;
                case "R":
                  Te = parseInt(ce[F].slice(1), 10) - 1;
                  break;
                case "C":
                  Fe = parseInt(ce[F].slice(1), 10) - 1;
                  break;
                default:
                  if (p && p.WTF) {
                    throw new Error("SYLK bad record " + _e);
                  }
              }
            }
            if (mr) {
              if (U[m][v]) {
                U[m][v].t = Ee;
                U[m][v].v = he;
              } else {
                U[m][v] = {
                  t: Ee,
                  v: he
                };
              }
              if (V) {
                U[m][v].z = V;
              }
              if (p.cellText !== false && V) {
                U[m][v].w = et(U[m][v].z, U[m][v].v, {
                  date1904: le.Workbook.WBProps.date1904
                });
              }
              V = null;
            }
            if (ve) {
              if (ge) {
                throw new Error("SYLK shared formula cannot have own formula");
              }
              var B = Te > -1 && U[Te][Fe];
              if (!B || !B[1]) {
                throw new Error("SYLK shared formula cannot find base");
              }
              ye = oc(B[1], {
                r: m - Te,
                c: v - Fe
              });
            }
            if (ye) {
              if (U[m][v]) {
                U[m][v].f = ye;
              } else {
                U[m][v] = {
                  t: "n",
                  f: ye
                };
              }
            }
            if (A) {
              U[m][v] ||= {
                t: "z"
              };
              U[m][v].c = [{
                a: "SheetJSYLK",
                t: A
              }];
            }
            break;
          case "F":
            var O = 0;
            for (F = 1; F < ce.length; ++F) {
              switch (ce[F].charAt(0)) {
                case "X":
                  v = parseInt(ce[F].slice(1), 10) - 1;
                  ++O;
                  break;
                case "Y":
                  m = parseInt(ce[F].slice(1), 10) - 1;
                  Y = U.length;
                  for (; Y <= m; ++Y) {
                    U[Y] = [];
                  }
                  break;
                case "M":
                  b = parseInt(ce[F].slice(1), 10) / 20;
                  break;
                case "F":
                  break;
                case "G":
                  break;
                case "P":
                  V = H[parseInt(ce[F].slice(1), 10)];
                  break;
                case "S":
                  break;
                case "D":
                  break;
                case "N":
                  break;
                case "W":
                  X = ce[F].slice(1).split(" ");
                  Y = parseInt(X[0], 10);
                  for (; Y <= parseInt(X[1], 10); ++Y) {
                    b = parseInt(X[2], 10);
                    D[Y - 1] = b === 0 ? {
                      hidden: true
                    } : {
                      wch: b
                    };
                  }
                  break;
                case "C":
                  v = parseInt(ce[F].slice(1), 10) - 1;
                  D[v] ||= {};
                  break;
                case "R":
                  m = parseInt(ce[F].slice(1), 10) - 1;
                  N[m] ||= {};
                  if (b > 0) {
                    N[m].hpt = b;
                    N[m].hpx = Wi(b);
                  } else if (b === 0) {
                    N[m].hidden = true;
                  }
                  break;
                default:
                  if (p && p.WTF) {
                    throw new Error("SYLK bad record " + _e);
                  }
              }
            }
            if (O < 1) {
              V = null;
            }
            break;
          default:
            if (p && p.WTF) {
              throw new Error("SYLK bad record " + _e);
            }
        }
      }
    }
    if (N.length > 0) {
      y["!rows"] = N;
    }
    if (D.length > 0) {
      y["!cols"] = D;
    }
    D.forEach(function (k) {
      Vn(k);
    });
    if (p && p.sheetRows) {
      U = U.slice(0, p.sheetRows);
    }
    return [U, y, le];
  }
  function f(u, p) {
    var g = s(u, p);
    var m = g[0];
    var v = g[1];
    var C = g[2];
    var F = pr(p);
    F.date1904 = (((C || {}).Workbook || {}).WBProps || {}).date1904;
    var U = Ut(m, F);
    Ze(v).forEach(function (V) {
      U[V] = v[V];
    });
    var H = bt(U, p);
    Ze(C).forEach(function (V) {
      H[V] = C[V];
    });
    H.bookType = "sylk";
    return H;
  }
  function o(u, p, g, m, v, C) {
    var F = "C;Y" + (g + 1) + ";X" + (m + 1) + ";K";
    switch (u.t) {
      case "n":
        F += isFinite(u.v) ? u.v || 0 : Er[isNaN(u.v) ? 36 : 7];
        if (u.f && !u.F) {
          F += ";E" + Ja(u.f, {
            r: g,
            c: m
          });
        }
        break;
      case "b":
        F += u.v ? "TRUE" : "FALSE";
        break;
      case "e":
        F += u.w || Er[u.v] || u.v;
        break;
      case "d":
        F += fr(Fr(u.v, C), C);
        break;
      case "s":
        F += "\"" + (u.v == null ? "" : String(u.v)).replace(/"/g, "").replace(/;/g, ";;") + "\"";
        break;
    }
    return F;
  }
  function l(u, p, g) {
    var m = "C;Y" + (p + 1) + ";X" + (g + 1) + ";A";
    m += n(u.map(function (v) {
      return v.t;
    }).join(""));
    return m;
  }
  function c(u, p) {
    p.forEach(function (g, m) {
      var v = "F;W" + (m + 1) + " " + (m + 1) + " ";
      if (g.hidden) {
        v += "0";
      } else {
        if (typeof g.width == "number" && !g.wpx) {
          g.wpx = Ma(g.width);
        }
        if (typeof g.wpx == "number" && !g.wch) {
          g.wch = Ba(g.wpx);
        }
        if (typeof g.wch == "number") {
          v += Math.round(g.wch);
        }
      }
      if (v.charAt(v.length - 1) != " ") {
        u.push(v);
      }
    });
  }
  function x(u, p) {
    p.forEach(function (g, m) {
      var v = "F;";
      if (g.hidden) {
        v += "M0;";
      } else if (g.hpt) {
        v += "M" + g.hpt * 20 + ";";
      } else if (g.hpx) {
        v += "M" + ba(g.hpx) * 20 + ";";
      }
      if (v.length > 2) {
        u.push(v + "R" + (m + 1));
      }
    });
  }
  function h(u, p, g) {
    p ||= {};
    p._formats = ["General"];
    var m = ["ID;PSheetJS;N;E"];
    var v = [];
    var C = Be(u["!ref"] || "A1");
    var F;
    var U = u["!data"] != null;
    var H = `\r
`;
    var V = (((g || {}).Workbook || {}).WBProps || {}).date1904;
    var y = "General";
    m.push("P;PGeneral");
    var N = C.s.r;
    var D = C.s.c;
    var X = [];
    if (u["!ref"]) {
      for (N = C.s.r; N <= C.e.r; ++N) {
        if (!U || !!u["!data"][N]) {
          X = [];
          D = C.s.c;
          for (; D <= C.e.c; ++D) {
            F = U ? u["!data"][N][D] : u[Ie(D) + Ne(N)];
            if (!!F && !!F.c) {
              X.push(l(F.c, N, D));
            }
          }
          if (X.length) {
            v.push(X.join(H));
          }
        }
      }
    }
    if (u["!ref"]) {
      for (N = C.s.r; N <= C.e.r; ++N) {
        if (!U || !!u["!data"][N]) {
          X = [];
          D = C.s.c;
          for (; D <= C.e.c; ++D) {
            F = U ? u["!data"][N][D] : u[Ie(D) + Ne(N)];
            if (!!F && (F.v != null || !!F.f && !F.F)) {
              if ((F.z || (F.t == "d" ? Me[14] : "General")) != y) {
                var b = p._formats.indexOf(F.z);
                if (b == -1) {
                  p._formats.push(F.z);
                  b = p._formats.length - 1;
                  m.push("P;P" + F.z.replace(/;/g, ";;"));
                }
                X.push("F;P" + b + ";Y" + (N + 1) + ";X" + (D + 1));
              }
              X.push(o(F, u, N, D, p, V));
            }
          }
          v.push(X.join(H));
        }
      }
    }
    m.push("F;P0;DG0G8;M255");
    if (u["!cols"]) {
      c(m, u["!cols"]);
    }
    if (u["!rows"]) {
      x(m, u["!rows"]);
    }
    if (u["!ref"]) {
      m.push("B;Y" + (C.e.r - C.s.r + 1) + ";X" + (C.e.c - C.s.c + 1) + ";D" + [C.s.c, C.s.r, C.e.c, C.e.r].join(" "));
    }
    m.push("O;L;D;B" + (V ? ";V4" : "") + ";K47;G100 0.001");
    delete p._formats;
    return m.join(H) + H + v.join(H) + H + "E" + H;
  }
  return {
    to_workbook: f,
    from_sheet: h
  };
}();
var ol = function () {
  function e(f, o) {
    switch (o.type) {
      case "base64":
        return t(it(f), o);
      case "binary":
        return t(f, o);
      case "buffer":
        return t(Oe && Buffer.isBuffer(f) ? f.toString("binary") : mt(f), o);
      case "array":
        return t(In(f), o);
    }
    throw new Error("Unrecognized type " + o.type);
  }
  function t(f, o) {
    for (var l = f.split(`
`), c = -1, x = -1, h = 0, u = []; h !== l.length; ++h) {
      if (l[h].trim() === "BOT") {
        u[++c] = [];
        x = 0;
        continue;
      }
      if (!(c < 0)) {
        var p = l[h].trim().split(",");
        var g = p[0];
        var m = p[1];
        ++h;
        for (var v = l[h] || ""; (v.match(/["]/g) || []).length & 1 && h < l.length - 1;) {
          v += `
${l[++h]}`;
        }
        v = v.trim();
        switch (+g) {
          case -1:
            if (v === "BOT") {
              u[++c] = [];
              x = 0;
              continue;
            } else if (v !== "EOD") {
              throw new Error("Unrecognized DIF special command " + v);
            }
            break;
          case 0:
            if (v === "TRUE") {
              u[c][x] = true;
            } else if (v === "FALSE") {
              u[c][x] = false;
            } else if (isNaN(qr(m))) {
              if (isNaN(Ia(m).getDate())) {
                u[c][x] = m;
              } else {
                u[c][x] = Fr(m);
                if (!o || !o.UTC) {
                  u[c][x] = Lt(u[c][x]);
                }
              }
            } else {
              u[c][x] = qr(m);
            }
            ++x;
            break;
          case 1:
            v = v.slice(1, v.length - 1);
            v = v.replace(/""/g, "\"");
            if (v && v.match(/^=".*"$/)) {
              v = v.slice(2, -1);
            }
            u[c][x++] = v !== "" ? v : null;
            break;
        }
        if (v === "EOD") {
          break;
        }
      }
    }
    if (o && o.sheetRows) {
      u = u.slice(0, o.sheetRows);
    }
    return u;
  }
  function r(f, o) {
    return Ut(e(f, o), o);
  }
  function a(f, o) {
    var l = bt(r(f, o), o);
    l.bookType = "dif";
    return l;
  }
  function n(f, o) {
    return `${"0," + String(f)}\r
${o}`;
  }
  function s(f) {
    return `1,0\r
"${f.replace(/"/g, "\"\"")}"`;
  }
  function i(f) {
    if (!f["!ref"]) {
      throw new Error("Cannot export empty sheet to DIF");
    }
    for (var o = Be(f["!ref"]), l = f["!data"] != null, c = [`TABLE\r
0,1\r
"sheetjs"\r
`, `VECTORS\r
0,${o.e.r - o.s.r + 1}\r
""\r
`, `TUPLES\r
0,${o.e.c - o.s.c + 1}\r
""\r
`, `DATA\r
0,0\r
""\r
`], x = o.s.r; x <= o.e.r; ++x) {
      var h = l ? f["!data"][x] : [];
      var u = `-1,0\r
BOT\r
`;
      for (var p = o.s.c; p <= o.e.c; ++p) {
        var g = l ? h && h[p] : f[Ge({
          r: x,
          c: p
        })];
        if (g == null) {
          u += `1,0\r
""\r
`;
          continue;
        }
        switch (g.t) {
          case "n":
            if (g.w != null) {
              u += `${"0," + g.w}\r
V`;
            } else if (g.v != null) {
              u += n(g.v, "V");
            } else if (g.f != null && !g.F) {
              u += s("=" + g.f);
            } else {
              u += `1,0\r
""`;
            }
            break;
          case "b":
            u += g.v ? n(1, "TRUE") : n(0, "FALSE");
            break;
          case "s":
            u += s(isNaN(+g.v) ? g.v : "=\"" + g.v + "\"");
            break;
          case "d":
            g.w ||= et(g.z || Me[14], fr(Fr(g.v)));
            u += n(g.w, "V");
            break;
          default:
            u += `1,0\r
""`;
        }
        u += `\r
`;
      }
      c.push(u);
    }
    return `${c.join("")}-1,0\r
EOD`;
  }
  return {
    to_workbook: a,
    to_sheet: r,
    from_sheet: i
  };
}();
var Bi = function () {
  function e(x) {
    return x.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function t(x) {
    return x.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(x, h) {
    for (var u = x.split(`
`), p = -1, g = -1, m = 0, v = []; m !== u.length; ++m) {
      var C = u[m].trim().split(":");
      if (C[0] === "cell") {
        var F = We(C[1]);
        if (v.length <= F.r) {
          for (p = v.length; p <= F.r; ++p) {
            v[p] ||= [];
          }
        }
        p = F.r;
        g = F.c;
        switch (C[2]) {
          case "t":
            v[p][g] = e(C[3]);
            break;
          case "v":
            v[p][g] = +C[3];
            break;
          case "vtf":
            var U = C[C.length - 1];
          case "vtc":
            switch (C[3]) {
              case "nl":
                v[p][g] = !!+C[4];
                break;
              default:
                v[p][g] = C[C.length - 1].charAt(0) == "#" ? {
                  t: "e",
                  v: Vr[C[C.length - 1]]
                } : +C[4];
                break;
            }
            if (C[2] == "vtf") {
              v[p][g] = [v[p][g], U];
            }
        }
      }
    }
    if (h && h.sheetRows) {
      v = v.slice(0, h.sheetRows);
    }
    return v;
  }
  function a(x, h) {
    return Ut(r(x, h), h);
  }
  function n(x, h) {
    return bt(a(x, h), h);
  }
  var s = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`);
  var i = `${["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join(`
`)}
`;
  var f = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`);
  var o = "--SocialCalcSpreadsheetControlSave--";
  function l(x) {
    if (!x || !x["!ref"]) {
      return "";
    }
    var h = [];
    var u = [];
    var p;
    var g = "";
    for (var m = sr(x["!ref"]), v = x["!data"] != null, C = m.s.r; C <= m.e.r; ++C) {
      for (var F = m.s.c; F <= m.e.c; ++F) {
        g = Ge({
          r: C,
          c: F
        });
        p = v ? (x["!data"][C] || [])[F] : x[g];
        if (!!p && p.v != null && p.t !== "z") {
          u = ["cell", g, "t"];
          switch (p.t) {
            case "s":
              u.push(t(p.v));
              break;
            case "b":
              u[2] = "vt" + (p.f ? "f" : "c");
              u[3] = "nl";
              u[4] = p.v ? "1" : "0";
              u[5] = t(p.f || (p.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var U = fr(Fr(p.v));
              u[2] = "vtc";
              u[3] = "nd";
              u[4] = "" + U;
              u[5] = p.w || et(p.z || Me[14], U);
              break;
            case "n":
              if (isFinite(p.v)) {
                if (p.f) {
                  u[2] = "vtf";
                  u[3] = "n";
                  u[4] = p.v;
                  u[5] = t(p.f);
                } else {
                  u[2] = "v";
                  u[3] = p.v;
                }
              } else {
                u[2] = "vt" + (p.f ? "f" : "c");
                u[3] = "e" + Er[isNaN(p.v) ? 36 : 7];
                u[4] = "0";
                u[5] = p.f || u[3].slice(1);
                u[6] = "e";
                u[7] = u[3].slice(1);
              }
              break;
            case "e":
              continue;
          }
          h.push(u.join(":"));
        }
      }
    }
    h.push("sheet:c:" + (m.e.c - m.s.c + 1) + ":r:" + (m.e.r - m.s.r + 1) + ":tvf:1");
    h.push("valueformat:1:text-wiki");
    return h.join(`
`);
  }
  function c(x) {
    return [s, i, f, i, l(x), o].join(`
`);
  }
  return {
    to_workbook: n,
    to_sheet: a,
    from_sheet: c
  };
}();
var ll = function () {
  function e(c, x, h, u, p) {
    if (p.raw) {
      x[h][u] = c;
    } else if (c !== "") {
      if (c === "TRUE") {
        x[h][u] = true;
      } else if (c === "FALSE") {
        x[h][u] = false;
      } else if (isNaN(qr(c))) {
        if (isNaN(Ia(c).getDate())) {
          if (c.charCodeAt(0) == 35 && Vr[c] != null) {
            x[h][u] = {
              t: "e",
              v: Vr[c],
              w: c
            };
          } else {
            x[h][u] = c;
          }
        } else {
          x[h][u] = Fr(c);
        }
      } else {
        x[h][u] = qr(c);
      }
    }
  }
  function t(c, x) {
    var h = x || {};
    var u = [];
    if (!c || c.length === 0) {
      return u;
    }
    for (var p = c.split(/[\r\n]/), g = p.length - 1; g >= 0 && p[g].length === 0;) {
      --g;
    }
    var m = 10;
    var v = 0;
    for (var C = 0; C <= g; ++C) {
      v = p[C].indexOf(" ");
      if (v == -1) {
        v = p[C].length;
      } else {
        v++;
      }
      m = Math.max(m, v);
    }
    for (C = 0; C <= g; ++C) {
      u[C] = [];
      var F = 0;
      e(p[C].slice(0, m).trim(), u, C, F, h);
      F = 1;
      for (; F <= (p[C].length - m) / 10 + 1; ++F) {
        e(p[C].slice(m + (F - 1) * 10, m + F * 10).trim(), u, C, F, h);
      }
    }
    if (h.sheetRows) {
      u = u.slice(0, h.sheetRows);
    }
    return u;
  }
  var r = {
    44: ",",
    9: "\t",
    59: ";",
    124: "|"
  };
  var a = {
    44: 3,
    9: 2,
    59: 1,
    124: 0
  };
  function n(c) {
    var x = {};
    var h = false;
    for (var u = 0, p = 0; u < c.length; ++u) {
      if ((p = c.charCodeAt(u)) == 34) {
        h = !h;
      } else if (!h && p in r) {
        x[p] = (x[p] || 0) + 1;
      }
    }
    p = [];
    for (u in x) {
      if (Object.prototype.hasOwnProperty.call(x, u)) {
        p.push([x[u], u]);
      }
    }
    if (!p.length) {
      x = a;
      for (u in x) {
        if (Object.prototype.hasOwnProperty.call(x, u)) {
          p.push([x[u], u]);
        }
      }
    }
    p.sort(function (g, m) {
      return g[0] - m[0] || a[g[1]] - a[m[1]];
    });
    return r[p.pop()[1]] || 44;
  }
  function s(c, x) {
    var h = x || {};
    var u = "";
    var p = {};
    if (h.dense) {
      p["!data"] = [];
    }
    var g = {
      s: {
        c: 0,
        r: 0
      },
      e: {
        c: 0,
        r: 0
      }
    };
    if (c.slice(0, 4) == "sep=") {
      if (c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10) {
        u = c.charAt(4);
        c = c.slice(7);
      } else if (c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10) {
        u = c.charAt(4);
        c = c.slice(6);
      } else {
        u = n(c.slice(0, 1024));
      }
    } else if (h && h.FS) {
      u = h.FS;
    } else {
      u = n(c.slice(0, 1024));
    }
    var m = 0;
    var v = 0;
    var C = 0;
    var F = 0;
    var U = 0;
    var H = u.charCodeAt(0);
    var V = false;
    var y = 0;
    var N = c.charCodeAt(0);
    var D = h.dateNF != null ? uf(h.dateNF) : null;
    function X() {
      var b = c.slice(F, U);
      if (b.slice(-1) == "\r") {
        b = b.slice(0, -1);
      }
      var Y = {};
      if (b.charAt(0) == "\"" && b.charAt(b.length - 1) == "\"") {
        b = b.slice(1, -1).replace(/""/g, "\"");
      }
      if (h.cellText !== false) {
        Y.w = b;
      }
      if (b.length === 0) {
        Y.t = "z";
      } else if (h.raw) {
        Y.t = "s";
        Y.v = b;
      } else if (b.trim().length === 0) {
        Y.t = "s";
        Y.v = b;
      } else if (b.charCodeAt(0) == 61) {
        if (b.charCodeAt(1) == 34 && b.charCodeAt(b.length - 1) == 34) {
          Y.t = "s";
          Y.v = b.slice(2, -1).replace(/""/g, "\"");
        } else if (lc(b)) {
          Y.t = "s";
          Y.f = b.slice(1);
          Y.v = b;
        } else {
          Y.t = "s";
          Y.v = b;
        }
      } else if (b == "TRUE") {
        Y.t = "b";
        Y.v = true;
      } else if (b == "FALSE") {
        Y.t = "b";
        Y.v = false;
      } else if (!isNaN(C = qr(b))) {
        Y.t = "n";
        Y.v = C;
      } else if (!isNaN((C = Ia(b)).getDate()) || D && b.match(D)) {
        Y.z = h.dateNF || Me[14];
        if (D && b.match(D)) {
          var le = xf(b, h.dateNF, b.match(D) || []);
          C = Fr(le);
          if (h && h.UTC === false) {
            C = Lt(C);
          }
        } else if (h && h.UTC === false) {
          C = Lt(C);
        } else if (h.cellText !== false && h.dateNF) {
          Y.w = et(Y.z, C);
        }
        if (h.cellDates) {
          Y.t = "d";
          Y.v = C;
        } else {
          Y.t = "n";
          Y.v = fr(C);
        }
        if (!h.cellNF) {
          delete Y.z;
        }
      } else if (b.charCodeAt(0) == 35 && Vr[b] != null) {
        Y.t = "e";
        Y.w = b;
        Y.v = Vr[b];
      } else {
        Y.t = "s";
        Y.v = b;
      }
      if (Y.t != "z") {
        if (h.dense) {
          p["!data"][m] ||= [];
          p["!data"][m][v] = Y;
        } else {
          p[Ge({
            c: v,
            r: m
          })] = Y;
        }
      }
      F = U + 1;
      N = c.charCodeAt(F);
      if (g.e.c < v) {
        g.e.c = v;
      }
      if (g.e.r < m) {
        g.e.r = m;
      }
      if (y == H) {
        ++v;
      } else {
        v = 0;
        ++m;
        if (h.sheetRows && h.sheetRows <= m) {
          return true;
        }
      }
    }
    e: for (; U < c.length; ++U) {
      switch (y = c.charCodeAt(U)) {
        case 34:
          if (N === 34) {
            V = !V;
          }
          break;
        case 13:
          if (V) {
            break;
          }
          if (c.charCodeAt(U + 1) == 10) {
            ++U;
          }
        case H:
        case 10:
          if (!V && X()) {
            break e;
          }
          break;
      }
    }
    if (U - F > 0) {
      X();
    }
    p["!ref"] = Je(g);
    return p;
  }
  function i(c, x) {
    if (!x || !x.PRN || x.FS || c.slice(0, 4) == "sep=" || c.indexOf("\t") >= 0 || c.indexOf(",") >= 0 || c.indexOf(";") >= 0) {
      return s(c, x);
    } else {
      return Ut(t(c, x), x);
    }
  }
  function f(c, x) {
    var h = "";
    var u = x.type == "string" ? [0, 0, 0, 0] : Mx(c, x);
    switch (x.type) {
      case "base64":
        h = it(c);
        break;
      case "binary":
        h = c;
        break;
      case "buffer":
        if (x.codepage == 65001) {
          h = c.toString("utf8");
        } else {
          x.codepage;
          h = Oe && Buffer.isBuffer(c) ? c.toString("binary") : mt(c);
        }
        break;
      case "array":
        h = In(c);
        break;
      case "string":
        h = c;
        break;
      default:
        throw new Error("Unrecognized type " + x.type);
    }
    if (u[0] == 239 && u[1] == 187 && u[2] == 191) {
      h = Dt(h.slice(3));
    } else if (x.type != "string" && x.type != "buffer" && x.codepage == 65001) {
      h = Dt(h);
    } else {
      x.type == "binary";
    }
    if (h.slice(0, 19) == "socialcalc:version:") {
      return Bi.to_sheet(x.type == "string" ? h : Dt(h), x);
    } else {
      return i(h, x);
    }
  }
  function o(c, x) {
    return bt(f(c, x), x);
  }
  function l(c) {
    var x = [];
    if (!c["!ref"]) {
      return "";
    }
    for (var h = Be(c["!ref"]), u, p = c["!data"] != null, g = h.s.r; g <= h.e.r; ++g) {
      var m = [];
      for (var v = h.s.c; v <= h.e.c; ++v) {
        var C = Ge({
          r: g,
          c: v
        });
        u = p ? (c["!data"][g] || [])[v] : c[C];
        if (!u || u.v == null) {
          m.push("          ");
          continue;
        }
        for (var F = (u.w || (rt(u), u.w) || "").slice(0, 10); F.length < 10;) {
          F += " ";
        }
        m.push(F + (v === 0 ? " " : ""));
      }
      x.push(m.join(""));
    }
    return x.join(`
`);
  }
  return {
    to_workbook: o,
    to_sheet: f,
    from_sheet: l
  };
}();
var R0 = function () {
  function e(A, B, O) {
    if (A) {
      wr(A, A.l || 0);
      var k = O.Enum || ge;
      for (; A.l < A.length;) {
        var z = A.read_shift(2);
        var ne = k[z] || k[65535];
        var re = A.read_shift(2);
        var xe = A.l + re;
        var te = ne.f && ne.f(A, re, O);
        A.l = xe;
        if (B(te, ne, z)) {
          return;
        }
      }
    }
  }
  function t(A, B) {
    switch (B.type) {
      case "base64":
        return a(kr(it(A)), B);
      case "binary":
        return a(kr(A), B);
      case "buffer":
      case "array":
        return a(A, B);
    }
    throw "Unsupported type " + B.type;
  }
  var r = ["mmmm", "dd-mmm-yyyy", "dd-mmm", "mmm-yyyy", "@", "mm/dd", "hh:mm:ss AM/PM", "hh:mm AM/PM", "mm/dd/yyyy", "mm/dd", "hh:mm:ss", "hh:mm"];
  function a(A, B) {
    if (!A) {
      return A;
    }
    var O = B || {};
    var k = {};
    var z = "Sheet1";
    var ne = "";
    var re = 0;
    var xe = {};
    var te = [];
    var we = [];
    var ue = [];
    if (O.dense) {
      ue = k["!data"] = [];
    }
    var Se = {
      s: {
        r: 0,
        c: 0
      },
      e: {
        r: 0,
        c: 0
      }
    };
    var Le = O.sheetRows || 0;
    var $e = {};
    if (A[4] == 81 && A[5] == 80 && A[6] == 87) {
      return Ee(A, B);
    }
    if (A[2] == 0 && (A[3] == 8 || A[3] == 9) && A.length >= 16 && A[14] == 5 && A[15] === 108) {
      throw new Error("Unsupported Works 3 for Mac file");
    }
    if (A[2] == 2) {
      O.Enum = ge;
      e(A, function (ee, at, Ur) {
        switch (Ur) {
          case 0:
            O.vers = ee;
            if (ee >= 4096) {
              O.qpro = true;
            }
            break;
          case 255:
            O.vers = ee;
            O.works = true;
            break;
          case 6:
            Se = ee;
            break;
          case 204:
            if (ee) {
              ne = ee;
            }
            break;
          case 222:
            ne = ee;
            break;
          case 15:
          case 51:
            if ((!O.qpro && !O.works || Ur == 51) && ee[1].v.charCodeAt(0) < 48) {
              ee[1].v = ee[1].v.slice(1);
            }
            if (O.works || O.works2) {
              ee[1].v = ee[1].v.replace(/\r\n/g, `
`);
            }
          case 13:
          case 14:
          case 16:
            if ((ee[2] & 112) == 112 && (ee[2] & 15) > 1 && (ee[2] & 15) < 15) {
              ee[1].z = O.dateNF || r[(ee[2] & 15) - 1] || Me[14];
              if (O.cellDates) {
                ee[1].v = Ot(ee[1].v);
                ee[1].t = typeof ee[1].v == "number" ? "n" : "d";
              }
            }
            if (O.qpro && ee[3] > re) {
              k["!ref"] = Je(Se);
              xe[z] = k;
              te.push(z);
              k = {};
              if (O.dense) {
                ue = k["!data"] = [];
              }
              Se = {
                s: {
                  r: 0,
                  c: 0
                },
                e: {
                  r: 0,
                  c: 0
                }
              };
              re = ee[3];
              z = ne || "Sheet" + (re + 1);
              ne = "";
            }
            var Ve = O.dense ? (ue[ee[0].r] || [])[ee[0].c] : k[Ge(ee[0])];
            if (Ve) {
              Ve.t = ee[1].t;
              Ve.v = ee[1].v;
              if (ee[1].z != null) {
                Ve.z = ee[1].z;
              }
              if (ee[1].f != null) {
                Ve.f = ee[1].f;
              }
              $e = Ve;
              break;
            }
            if (O.dense) {
              ue[ee[0].r] ||= [];
              ue[ee[0].r][ee[0].c] = ee[1];
            } else {
              k[Ge(ee[0])] = ee[1];
            }
            $e = ee[1];
            break;
          case 21509:
            O.works2 = true;
            break;
          case 21506:
            if (ee == 5281) {
              $e.z = "hh:mm:ss";
              if (O.cellDates && $e.t == "n") {
                $e.v = Ot($e.v);
                $e.t = typeof $e.v == "number" ? "n" : "d";
              }
            }
            break;
        }
      }, O);
    } else if (A[2] == 26 || A[2] == 14) {
      O.Enum = Te;
      if (A[2] == 14) {
        O.qpro = true;
        A.l = 0;
      }
      e(A, function (ee, at, Ur) {
        switch (Ur) {
          case 204:
            z = ee;
            break;
          case 22:
            if (ee[1].v.charCodeAt(0) < 48) {
              ee[1].v = ee[1].v.slice(1);
            }
            ee[1].v = ee[1].v.replace(/\x0F./g, function (Ve) {
              return String.fromCharCode(Ve.charCodeAt(1) - 32);
            }).replace(/\r\n/g, `
`);
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (ee[3] > re) {
              k["!ref"] = Je(Se);
              xe[z] = k;
              te.push(z);
              k = {};
              if (O.dense) {
                ue = k["!data"] = [];
              }
              Se = {
                s: {
                  r: 0,
                  c: 0
                },
                e: {
                  r: 0,
                  c: 0
                }
              };
              re = ee[3];
              z = "Sheet" + (re + 1);
            }
            if (Le > 0 && ee[0].r >= Le) {
              break;
            }
            if (O.dense) {
              ue[ee[0].r] ||= [];
              ue[ee[0].r][ee[0].c] = ee[1];
            } else {
              k[Ge(ee[0])] = ee[1];
            }
            if (Se.e.c < ee[0].c) {
              Se.e.c = ee[0].c;
            }
            if (Se.e.r < ee[0].r) {
              Se.e.r = ee[0].r;
            }
            break;
          case 27:
            if (ee[14000]) {
              we[ee[14000][0]] = ee[14000][1];
            }
            break;
          case 1537:
            we[ee[0]] = ee[1];
            if (ee[0] == re) {
              z = ee[1];
            }
            break;
        }
      }, O);
    } else {
      throw new Error("Unrecognized LOTUS BOF " + A[2]);
    }
    k["!ref"] = Je(Se);
    xe[ne || z] = k;
    te.push(ne || z);
    if (!we.length) {
      return {
        SheetNames: te,
        Sheets: xe
      };
    }
    var tr = {};
    var ie = [];
    for (var De = 0; De < we.length; ++De) {
      if (xe[te[De]]) {
        ie.push(we[De] || te[De]);
        tr[we[De]] = xe[we[De]] || xe[te[De]];
      } else {
        ie.push(we[De]);
        tr[we[De]] = {
          "!ref": "A1"
        };
      }
    }
    return {
      SheetNames: ie,
      Sheets: tr
    };
  }
  function n(A, B) {
    var O = B || {};
    if (+O.codepage >= 0) {
      Qt(+O.codepage);
    }
    if (O.type == "string") {
      throw new Error("Cannot write WK1 to JS string");
    }
    var k = xr();
    if (!A["!ref"]) {
      throw new Error("Cannot export empty sheet to WK1");
    }
    var z = Be(A["!ref"]);
    var ne = A["!data"] != null;
    var re = [];
    K(k, 0, i(1030));
    K(k, 6, l(z));
    var xe = Math.min(z.e.r, 8191);
    for (var te = z.s.c; te <= z.e.c; ++te) {
      re[te] = Ie(te);
    }
    for (var we = z.s.r; we <= xe; ++we) {
      var ue = Ne(we);
      for (te = z.s.c; te <= z.e.c; ++te) {
        var Se = ne ? (A["!data"][we] || [])[te] : A[re[te] + ue];
        if (!!Se && Se.t != "z") {
          switch (Se.t) {
            case "n":
              if ((Se.v | 0) == Se.v && Se.v >= -32768 && Se.v <= 32767) {
                K(k, 13, m(we, te, Se));
              } else {
                K(k, 14, C(we, te, Se));
              }
              break;
            case "d":
              var Le = fr(Se.v);
              if ((Le | 0) == Le && Le >= -32768 && Le <= 32767) {
                K(k, 13, m(we, te, {
                  v: Le,
                  z: Se.z || Me[14]
                }));
              } else {
                K(k, 14, C(we, te, {
                  v: Le,
                  z: Se.z || Me[14]
                }));
              }
              break;
            default:
              var $e = rt(Se);
              K(k, 15, u(we, te, $e.slice(0, 239)));
          }
        }
      }
    }
    K(k, 1);
    return k.end();
  }
  function s(A, B) {
    var O = B || {};
    if (+O.codepage >= 0) {
      Qt(+O.codepage);
    }
    if (O.type == "string") {
      throw new Error("Cannot write WK3 to JS string");
    }
    var k = xr();
    K(k, 0, f(A));
    for (var z = 0, ne = 0; z < A.SheetNames.length; ++z) {
      if ((A.Sheets[A.SheetNames[z]] || {})["!ref"]) {
        K(k, 27, ve(A.SheetNames[z], ne++));
      }
    }
    var re = 0;
    for (z = 0; z < A.SheetNames.length; ++z) {
      var xe = A.Sheets[A.SheetNames[z]];
      if (!!xe && !!xe["!ref"]) {
        var te = Be(xe["!ref"]);
        var we = xe["!data"] != null;
        var ue = [];
        for (var Se = Math.min(te.e.r, 8191), Le = te.s.r; Le <= Se; ++Le) {
          var $e = Ne(Le);
          for (var tr = te.s.c; tr <= te.e.c; ++tr) {
            if (Le === te.s.r) {
              ue[tr] = Ie(tr);
            }
            var ie = ue[tr] + $e;
            var De = we ? (xe["!data"][Le] || [])[tr] : xe[ie];
            if (!!De && De.t != "z") {
              if (De.t == "n") {
                K(k, 23, le(Le, tr, re, De.v));
              } else {
                var ee = rt(De);
                K(k, 22, X(Le, tr, re, ee.slice(0, 239)));
              }
            }
          }
        }
        ++re;
      }
    }
    K(k, 1);
    return k.end();
  }
  function i(A) {
    var B = I(2);
    B.write_shift(2, A);
    return B;
  }
  function f(A) {
    var B = I(26);
    B.write_shift(2, 4096);
    B.write_shift(2, 4);
    B.write_shift(4, 0);
    var O = 0;
    var k = 0;
    var z = 0;
    for (var ne = 0; ne < A.SheetNames.length; ++ne) {
      var re = A.SheetNames[ne];
      var xe = A.Sheets[re];
      if (!!xe && !!xe["!ref"]) {
        ++z;
        var te = sr(xe["!ref"]);
        if (O < te.e.r) {
          O = te.e.r;
        }
        if (k < te.e.c) {
          k = te.e.c;
        }
      }
    }
    if (O > 8191) {
      O = 8191;
    }
    B.write_shift(2, O);
    B.write_shift(1, z);
    B.write_shift(1, k);
    B.write_shift(2, 0);
    B.write_shift(2, 0);
    B.write_shift(1, 1);
    B.write_shift(1, 2);
    B.write_shift(4, 0);
    B.write_shift(4, 0);
    return B;
  }
  function o(A, B, O) {
    var k = {
      s: {
        c: 0,
        r: 0
      },
      e: {
        c: 0,
        r: 0
      }
    };
    if (B == 8 && O.qpro) {
      k.s.c = A.read_shift(1);
      A.l++;
      k.s.r = A.read_shift(2);
      k.e.c = A.read_shift(1);
      A.l++;
      k.e.r = A.read_shift(2);
      return k;
    } else {
      k.s.c = A.read_shift(2);
      k.s.r = A.read_shift(2);
      if (B == 12 && O.qpro) {
        A.l += 2;
      }
      k.e.c = A.read_shift(2);
      k.e.r = A.read_shift(2);
      if (B == 12 && O.qpro) {
        A.l += 2;
      }
      if (k.s.c == 65535) {
        k.s.c = k.e.c = k.s.r = k.e.r = 0;
      }
      return k;
    }
  }
  function l(A) {
    var B = I(8);
    B.write_shift(2, A.s.c);
    B.write_shift(2, A.s.r);
    B.write_shift(2, A.e.c);
    B.write_shift(2, A.e.r);
    return B;
  }
  function c(A, B, O) {
    var k = [{
      c: 0,
      r: 0
    }, {
      t: "n",
      v: 0
    }, 0, 0];
    if (O.qpro && O.vers != 20768) {
      k[0].c = A.read_shift(1);
      k[3] = A.read_shift(1);
      k[0].r = A.read_shift(2);
      A.l += 2;
    } else if (O.works) {
      k[0].c = A.read_shift(2);
      k[0].r = A.read_shift(2);
      k[2] = A.read_shift(2);
    } else {
      k[2] = A.read_shift(1);
      k[0].c = A.read_shift(2);
      k[0].r = A.read_shift(2);
    }
    return k;
  }
  function x(A) {
    if (A.z && vt(A.z)) {
      return (r.indexOf(A.z) + 1 || 2) | 240;
    } else {
      return 255;
    }
  }
  function h(A, B, O) {
    var k = A.l + B;
    var z = c(A, B, O);
    z[1].t = "s";
    if ((O.vers & 65534) == 20768) {
      A.l++;
      var ne = A.read_shift(1);
      z[1].v = A.read_shift(ne, "utf8");
      return z;
    }
    if (O.qpro) {
      A.l++;
    }
    z[1].v = A.read_shift(k - A.l, "cstr");
    return z;
  }
  function u(A, B, O) {
    var k = I(7 + O.length);
    k.write_shift(1, 255);
    k.write_shift(2, B);
    k.write_shift(2, A);
    k.write_shift(1, 39);
    for (var z = 0; z < k.length; ++z) {
      var ne = O.charCodeAt(z);
      k.write_shift(1, ne >= 128 ? 95 : ne);
    }
    k.write_shift(1, 0);
    return k;
  }
  function p(A, B, O) {
    var k = A.l + B;
    var z = c(A, B, O);
    z[1].t = "s";
    if (O.vers == 20768) {
      var ne = A.read_shift(1);
      z[1].v = A.read_shift(ne, "utf8");
      return z;
    }
    z[1].v = A.read_shift(k - A.l, "cstr");
    return z;
  }
  function g(A, B, O) {
    var k = c(A, B, O);
    k[1].v = A.read_shift(2, "i");
    return k;
  }
  function m(A, B, O) {
    var k = I(7);
    k.write_shift(1, x(O));
    k.write_shift(2, B);
    k.write_shift(2, A);
    k.write_shift(2, O.v, "i");
    return k;
  }
  function v(A, B, O) {
    var k = c(A, B, O);
    k[1].v = A.read_shift(8, "f");
    return k;
  }
  function C(A, B, O) {
    var k = I(13);
    k.write_shift(1, x(O));
    k.write_shift(2, B);
    k.write_shift(2, A);
    k.write_shift(8, O.v, "f");
    return k;
  }
  function F(A, B, O) {
    var k = A.l + B;
    var z = c(A, B, O);
    z[1].v = A.read_shift(8, "f");
    if (O.qpro) {
      A.l = k;
    } else {
      var ne = A.read_shift(2);
      y(A.slice(A.l, A.l + ne), z);
      A.l += ne;
    }
    return z;
  }
  function U(A, B, O) {
    var k = B & 32768;
    B &= -32769;
    B = (k ? A : 0) + (B >= 8192 ? B - 16384 : B);
    return (k ? "" : "$") + (O ? Ie(B) : Ne(B));
  }
  var H = {
    31: ["NA", 0],
    33: ["ABS", 1],
    34: ["TRUNC", 1],
    35: ["SQRT", 1],
    36: ["LOG", 1],
    37: ["LN", 1],
    38: ["PI", 0],
    39: ["SIN", 1],
    40: ["COS", 1],
    41: ["TAN", 1],
    42: ["ATAN2", 2],
    43: ["ATAN", 1],
    44: ["ASIN", 1],
    45: ["ACOS", 1],
    46: ["EXP", 1],
    47: ["MOD", 2],
    49: ["ISNA", 1],
    50: ["ISERR", 1],
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    53: ["RAND", 0],
    54: ["DATE", 3],
    63: ["ROUND", 2],
    64: ["TIME", 3],
    68: ["ISNUMBER", 1],
    69: ["ISTEXT", 1],
    70: ["LEN", 1],
    71: ["VALUE", 1],
    73: ["MID", 3],
    74: ["CHAR", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    102: ["UPPER", 1],
    103: ["LOWER", 1],
    107: ["PROPER", 1],
    109: ["TRIM", 1],
    111: ["T", 1]
  };
  var V = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];
  function y(A, B) {
    wr(A, 0);
    var O = [];
    var k = 0;
    var z = "";
    var ne = "";
    var re = "";
    var xe = "";
    for (; A.l < A.length;) {
      var te = A[A.l++];
      switch (te) {
        case 0:
          O.push(A.read_shift(8, "f"));
          break;
        case 1:
          ne = U(B[0].c, A.read_shift(2), true);
          z = U(B[0].r, A.read_shift(2), false);
          O.push(ne + z);
          break;
        case 2:
          {
            var we = U(B[0].c, A.read_shift(2), true);
            var ue = U(B[0].r, A.read_shift(2), false);
            ne = U(B[0].c, A.read_shift(2), true);
            z = U(B[0].r, A.read_shift(2), false);
            O.push(we + ue + ":" + ne + z);
          }
          break;
        case 3:
          if (A.l < A.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          O.push("(" + O.pop() + ")");
          break;
        case 5:
          O.push(A.read_shift(2));
          break;
        case 6:
          {
            var Se = "";
            for (; te = A[A.l++];) {
              Se += String.fromCharCode(te);
            }
            O.push("\"" + Se.replace(/"/g, "\"\"") + "\"");
          }
          break;
        case 8:
          O.push("-" + O.pop());
          break;
        case 23:
          O.push("+" + O.pop());
          break;
        case 22:
          O.push("NOT(" + O.pop() + ")");
          break;
        case 20:
        case 21:
          xe = O.pop();
          re = O.pop();
          O.push(["AND", "OR"][te - 20] + "(" + re + "," + xe + ")");
          break;
        default:
          if (te < 32 && V[te]) {
            xe = O.pop();
            re = O.pop();
            O.push(re + V[te] + xe);
          } else if (H[te]) {
            k = H[te][1];
            if (k == 69) {
              k = A[A.l++];
            }
            if (k > O.length) {
              console.error("WK1 bad formula parse 0x" + te.toString(16) + ":|" + O.join("|") + "|");
              return;
            }
            var Le = O.slice(-k);
            O.length -= k;
            O.push(H[te][0] + "(" + Le.join(",") + ")");
          } else if (te <= 7) {
            return console.error("WK1 invalid opcode " + te.toString(16));
          } else if (te <= 24) {
            return console.error("WK1 unsupported op " + te.toString(16));
          } else if (te <= 30) {
            return console.error("WK1 invalid opcode " + te.toString(16));
          } else if (te <= 115) {
            return console.error("WK1 unsupported function opcode " + te.toString(16));
          } else {
            return console.error("WK1 unrecognized opcode " + te.toString(16));
          }
      }
    }
    if (O.length == 1) {
      B[1].f = "" + O[0];
    } else {
      console.error("WK1 bad formula parse |" + O.join("|") + "|");
    }
  }
  function N(A) {
    var B = [{
      c: 0,
      r: 0
    }, {
      t: "n",
      v: 0
    }, 0];
    B[0].r = A.read_shift(2);
    B[3] = A[A.l++];
    B[0].c = A[A.l++];
    return B;
  }
  function D(A, B) {
    var O = N(A);
    O[1].t = "s";
    O[1].v = A.read_shift(B - 4, "cstr");
    return O;
  }
  function X(A, B, O, k) {
    var z = I(6 + k.length);
    z.write_shift(2, A);
    z.write_shift(1, O);
    z.write_shift(1, B);
    z.write_shift(1, 39);
    for (var ne = 0; ne < k.length; ++ne) {
      var re = k.charCodeAt(ne);
      z.write_shift(1, re >= 128 ? 95 : re);
    }
    z.write_shift(1, 0);
    return z;
  }
  function b(A, B) {
    var O = N(A);
    O[1].v = A.read_shift(2);
    var k = O[1].v >> 1;
    if (O[1].v & 1) {
      switch (k & 7) {
        case 0:
          k = (k >> 3) * 5000;
          break;
        case 1:
          k = (k >> 3) * 500;
          break;
        case 2:
          k = (k >> 3) / 20;
          break;
        case 3:
          k = (k >> 3) / 200;
          break;
        case 4:
          k = (k >> 3) / 2000;
          break;
        case 5:
          k = (k >> 3) / 20000;
          break;
        case 6:
          k = (k >> 3) / 16;
          break;
        case 7:
          k = (k >> 3) / 64;
          break;
      }
    }
    O[1].v = k;
    return O;
  }
  function Y(A, B) {
    var O = N(A);
    var k = A.read_shift(4);
    var z = A.read_shift(4);
    var ne = A.read_shift(2);
    if (ne == 65535) {
      if (k === 0 && z === 3221225472) {
        O[1].t = "e";
        O[1].v = 15;
      } else if (k === 0 && z === 3489660928) {
        O[1].t = "e";
        O[1].v = 42;
      } else {
        O[1].v = 0;
      }
      return O;
    }
    var re = ne & 32768;
    ne = (ne & 32767) - 16446;
    O[1].v = (1 - re * 2) * (z * Math.pow(2, ne + 32) + k * Math.pow(2, ne));
    return O;
  }
  function le(A, B, O, k) {
    var z = I(14);
    z.write_shift(2, A);
    z.write_shift(1, O);
    z.write_shift(1, B);
    if (k == 0) {
      z.write_shift(4, 0);
      z.write_shift(4, 0);
      z.write_shift(2, 65535);
      return z;
    }
    var ne = 0;
    var re = 0;
    var xe = 0;
    var te = 0;
    if (k < 0) {
      ne = 1;
      k = -k;
    }
    re = Math.log2(k) | 0;
    k /= Math.pow(2, re - 31);
    te = k >>> 0;
    if ((te & 2147483648) == 0) {
      k /= 2;
      ++re;
      te = k >>> 0;
    }
    k -= te;
    te |= 2147483648;
    te >>>= 0;
    k *= Math.pow(2, 32);
    xe = k >>> 0;
    z.write_shift(4, xe);
    z.write_shift(4, te);
    re += 16383 + (ne ? 32768 : 0);
    z.write_shift(2, re);
    return z;
  }
  function _e(A, B) {
    var O = Y(A);
    A.l += B - 14;
    return O;
  }
  function ce(A, B) {
    var O = N(A);
    var k = A.read_shift(4);
    O[1].v = k >> 6;
    return O;
  }
  function rr(A, B) {
    var O = N(A);
    var k = A.read_shift(8, "f");
    O[1].v = k;
    return O;
  }
  function he(A, B) {
    var O = rr(A);
    A.l += B - 12;
    return O;
  }
  function Qe(A, B) {
    if (A[A.l + B - 1] == 0) {
      return A.read_shift(B, "cstr");
    } else {
      return "";
    }
  }
  function Xe(A, B) {
    var O = A[A.l++];
    if (O > B - 1) {
      O = B - 1;
    }
    for (var k = ""; k.length < O;) {
      k += String.fromCharCode(A[A.l++]);
    }
    return k;
  }
  function mr(A, B, O) {
    if (!!O.qpro && !(B < 21)) {
      var k = A.read_shift(1);
      A.l += 17;
      A.l += 1;
      A.l += 2;
      var z = A.read_shift(B - 21, "cstr");
      return [k, z];
    }
  }
  function yr(A, B) {
    var O = {};
    for (var k = A.l + B; A.l < k;) {
      var z = A.read_shift(2);
      if (z == 14000) {
        O[z] = [0, ""];
        O[z][0] = A.read_shift(2);
        while (A[A.l]) {
          O[z][1] += String.fromCharCode(A[A.l]);
          A.l++;
        }
        A.l++;
      }
    }
    return O;
  }
  function ve(A, B) {
    var O = I(5 + A.length);
    O.write_shift(2, 14000);
    O.write_shift(2, B);
    for (var k = 0; k < A.length; ++k) {
      var z = A.charCodeAt(k);
      O[O.l++] = z > 127 ? 95 : z;
    }
    O[O.l++] = 0;
    return O;
  }
  var ge = {
    0: {
      n: "BOF",
      f: Sa
    },
    1: {
      n: "EOF"
    },
    2: {
      n: "CALCMODE"
    },
    3: {
      n: "CALCORDER"
    },
    4: {
      n: "SPLIT"
    },
    5: {
      n: "SYNC"
    },
    6: {
      n: "RANGE",
      f: o
    },
    7: {
      n: "WINDOW1"
    },
    8: {
      n: "COLW1"
    },
    9: {
      n: "WINTWO"
    },
    10: {
      n: "COLW2"
    },
    11: {
      n: "NAME"
    },
    12: {
      n: "BLANK"
    },
    13: {
      n: "INTEGER",
      f: g
    },
    14: {
      n: "NUMBER",
      f: v
    },
    15: {
      n: "LABEL",
      f: h
    },
    16: {
      n: "FORMULA",
      f: F
    },
    24: {
      n: "TABLE"
    },
    25: {
      n: "ORANGE"
    },
    26: {
      n: "PRANGE"
    },
    27: {
      n: "SRANGE"
    },
    28: {
      n: "FRANGE"
    },
    29: {
      n: "KRANGE1"
    },
    32: {
      n: "HRANGE"
    },
    35: {
      n: "KRANGE2"
    },
    36: {
      n: "PROTEC"
    },
    37: {
      n: "FOOTER"
    },
    38: {
      n: "HEADER"
    },
    39: {
      n: "SETUP"
    },
    40: {
      n: "MARGINS"
    },
    41: {
      n: "LABELFMT"
    },
    42: {
      n: "TITLES"
    },
    43: {
      n: "SHEETJS"
    },
    45: {
      n: "GRAPH"
    },
    46: {
      n: "NGRAPH"
    },
    47: {
      n: "CALCCOUNT"
    },
    48: {
      n: "UNFORMATTED"
    },
    49: {
      n: "CURSORW12"
    },
    50: {
      n: "WINDOW"
    },
    51: {
      n: "STRING",
      f: p
    },
    55: {
      n: "PASSWORD"
    },
    56: {
      n: "LOCKED"
    },
    60: {
      n: "QUERY"
    },
    61: {
      n: "QUERYNAME"
    },
    62: {
      n: "PRINT"
    },
    63: {
      n: "PRINTNAME"
    },
    64: {
      n: "GRAPH2"
    },
    65: {
      n: "GRAPHNAME"
    },
    66: {
      n: "ZOOM"
    },
    67: {
      n: "SYMSPLIT"
    },
    68: {
      n: "NSROWS"
    },
    69: {
      n: "NSCOLS"
    },
    70: {
      n: "RULER"
    },
    71: {
      n: "NNAME"
    },
    72: {
      n: "ACOMM"
    },
    73: {
      n: "AMACRO"
    },
    74: {
      n: "PARSE"
    },
    102: {
      n: "PRANGES??"
    },
    103: {
      n: "RRANGES??"
    },
    104: {
      n: "FNAME??"
    },
    105: {
      n: "MRANGES??"
    },
    204: {
      n: "SHEETNAMECS",
      f: Qe
    },
    222: {
      n: "SHEETNAMELP",
      f: Xe
    },
    255: {
      n: "BOF",
      f: Sa
    },
    21506: {
      n: "WKSNF",
      f: Sa
    },
    65535: {
      n: ""
    }
  };
  var Te = {
    0: {
      n: "BOF"
    },
    1: {
      n: "EOF"
    },
    2: {
      n: "PASSWORD"
    },
    3: {
      n: "CALCSET"
    },
    4: {
      n: "WINDOWSET"
    },
    5: {
      n: "SHEETCELLPTR"
    },
    6: {
      n: "SHEETLAYOUT"
    },
    7: {
      n: "COLUMNWIDTH"
    },
    8: {
      n: "HIDDENCOLUMN"
    },
    9: {
      n: "USERRANGE"
    },
    10: {
      n: "SYSTEMRANGE"
    },
    11: {
      n: "ZEROFORCE"
    },
    12: {
      n: "SORTKEYDIR"
    },
    13: {
      n: "FILESEAL"
    },
    14: {
      n: "DATAFILLNUMS"
    },
    15: {
      n: "PRINTMAIN"
    },
    16: {
      n: "PRINTSTRING"
    },
    17: {
      n: "GRAPHMAIN"
    },
    18: {
      n: "GRAPHSTRING"
    },
    19: {
      n: "??"
    },
    20: {
      n: "ERRCELL"
    },
    21: {
      n: "NACELL"
    },
    22: {
      n: "LABEL16",
      f: D
    },
    23: {
      n: "NUMBER17",
      f: Y
    },
    24: {
      n: "NUMBER18",
      f: b
    },
    25: {
      n: "FORMULA19",
      f: _e
    },
    26: {
      n: "FORMULA1A"
    },
    27: {
      n: "XFORMAT",
      f: yr
    },
    28: {
      n: "DTLABELMISC"
    },
    29: {
      n: "DTLABELCELL"
    },
    30: {
      n: "GRAPHWINDOW"
    },
    31: {
      n: "CPA"
    },
    32: {
      n: "LPLAUTO"
    },
    33: {
      n: "QUERY"
    },
    34: {
      n: "HIDDENSHEET"
    },
    35: {
      n: "??"
    },
    37: {
      n: "NUMBER25",
      f: ce
    },
    38: {
      n: "??"
    },
    39: {
      n: "NUMBER27",
      f: rr
    },
    40: {
      n: "FORMULA28",
      f: he
    },
    142: {
      n: "??"
    },
    147: {
      n: "??"
    },
    150: {
      n: "??"
    },
    151: {
      n: "??"
    },
    152: {
      n: "??"
    },
    153: {
      n: "??"
    },
    154: {
      n: "??"
    },
    155: {
      n: "??"
    },
    156: {
      n: "??"
    },
    163: {
      n: "??"
    },
    174: {
      n: "??"
    },
    175: {
      n: "??"
    },
    176: {
      n: "??"
    },
    177: {
      n: "??"
    },
    184: {
      n: "??"
    },
    185: {
      n: "??"
    },
    186: {
      n: "??"
    },
    187: {
      n: "??"
    },
    188: {
      n: "??"
    },
    195: {
      n: "??"
    },
    201: {
      n: "??"
    },
    204: {
      n: "SHEETNAMECS",
      f: Qe
    },
    205: {
      n: "??"
    },
    206: {
      n: "??"
    },
    207: {
      n: "??"
    },
    208: {
      n: "??"
    },
    256: {
      n: "??"
    },
    259: {
      n: "??"
    },
    260: {
      n: "??"
    },
    261: {
      n: "??"
    },
    262: {
      n: "??"
    },
    263: {
      n: "??"
    },
    265: {
      n: "??"
    },
    266: {
      n: "??"
    },
    267: {
      n: "??"
    },
    268: {
      n: "??"
    },
    270: {
      n: "??"
    },
    271: {
      n: "??"
    },
    384: {
      n: "??"
    },
    389: {
      n: "??"
    },
    390: {
      n: "??"
    },
    393: {
      n: "??"
    },
    396: {
      n: "??"
    },
    512: {
      n: "??"
    },
    514: {
      n: "??"
    },
    513: {
      n: "??"
    },
    516: {
      n: "??"
    },
    517: {
      n: "??"
    },
    640: {
      n: "??"
    },
    641: {
      n: "??"
    },
    642: {
      n: "??"
    },
    643: {
      n: "??"
    },
    644: {
      n: "??"
    },
    645: {
      n: "??"
    },
    646: {
      n: "??"
    },
    647: {
      n: "??"
    },
    648: {
      n: "??"
    },
    658: {
      n: "??"
    },
    659: {
      n: "??"
    },
    660: {
      n: "??"
    },
    661: {
      n: "??"
    },
    662: {
      n: "??"
    },
    665: {
      n: "??"
    },
    666: {
      n: "??"
    },
    768: {
      n: "??"
    },
    772: {
      n: "??"
    },
    1537: {
      n: "SHEETINFOQP",
      f: mr
    },
    1600: {
      n: "??"
    },
    1602: {
      n: "??"
    },
    1793: {
      n: "??"
    },
    1794: {
      n: "??"
    },
    1795: {
      n: "??"
    },
    1796: {
      n: "??"
    },
    1920: {
      n: "??"
    },
    2048: {
      n: "??"
    },
    2049: {
      n: "??"
    },
    2052: {
      n: "??"
    },
    2688: {
      n: "??"
    },
    10998: {
      n: "??"
    },
    12849: {
      n: "??"
    },
    28233: {
      n: "??"
    },
    28484: {
      n: "??"
    },
    65535: {
      n: ""
    }
  };
  var Fe = {
    5: "dd-mmm-yy",
    6: "dd-mmm",
    7: "mmm-yy",
    8: "mm/dd/yy",
    10: "hh:mm:ss AM/PM",
    11: "hh:mm AM/PM",
    14: "dd-mmm-yyyy",
    15: "mmm-yyyy",
    34: "0.00",
    50: "0.00;[Red]0.00",
    66: "0.00;(0.00)",
    82: "0.00;[Red](0.00)",
    162: "\"$\"#,##0.00;\\(\"$\"#,##0.00\\)",
    288: "0%",
    304: "0E+00",
    320: "# ?/?"
  };
  function ye(A) {
    var B = A.read_shift(2);
    var O = A.read_shift(1);
    if (O != 0) {
      throw "unsupported QPW string type " + O.toString(16);
    }
    return A.read_shift(B, "sbcs-cont");
  }
  function Ee(A, B) {
    wr(A, 0);
    var O = B || {};
    var k = {};
    if (O.dense) {
      k["!data"] = [];
    }
    var z = [];
    var ne = "";
    var re = {
      s: {
        r: -1,
        c: -1
      },
      e: {
        r: -1,
        c: -1
      }
    };
    var xe = 0;
    var te = 0;
    var we = 0;
    var ue = 0;
    var Se = {
      SheetNames: [],
      Sheets: {}
    };
    var Le = [];
    e: while (A.l < A.length) {
      var $e = A.read_shift(2);
      var tr = A.read_shift(2);
      var ie = A.slice(A.l, A.l + tr);
      wr(ie, 0);
      switch ($e) {
        case 1:
          if (ie.read_shift(4) != 962023505) {
            throw "Bad QPW9 BOF!";
          }
          break;
        case 2:
          break e;
        case 8:
          break;
        case 10:
          for (var De = ie.read_shift(4), ee = (ie.length - ie.l) / De | 0, at = 0; at < De; ++at) {
            var Ur = ie.l + ee;
            var Ve = {};
            ie.l += 2;
            Ve.numFmtId = ie.read_shift(2);
            if (Fe[Ve.numFmtId]) {
              Ve.z = Fe[Ve.numFmtId];
            }
            ie.l = Ur;
            Le.push(Ve);
          }
          break;
        case 1025:
          break;
        case 1026:
          break;
        case 1031:
          for (ie.l += 12; ie.l < ie.length;) {
            xe = ie.read_shift(2);
            te = ie.read_shift(1);
            z.push(ie.read_shift(xe, "cstr"));
          }
          break;
        case 1032:
          break;
        case 1537:
          {
            var rn = ie.read_shift(2);
            k = {};
            if (O.dense) {
              k["!data"] = [];
            }
            re.s.c = ie.read_shift(2);
            re.e.c = ie.read_shift(2);
            re.s.r = ie.read_shift(4);
            re.e.r = ie.read_shift(4);
            ie.l += 4;
            if (ie.l + 2 < ie.length) {
              xe = ie.read_shift(2);
              te = ie.read_shift(1);
              ne = xe == 0 ? "" : ie.read_shift(xe, "cstr");
            }
            ne ||= Ie(rn);
          }
          break;
        case 1538:
          {
            if (re.s.c > 255 || re.s.r > 999999) {
              break;
            }
            if (re.e.c < re.s.c) {
              re.e.c = re.s.c;
            }
            if (re.e.r < re.s.r) {
              re.e.r = re.s.r;
            }
            k["!ref"] = Je(re);
            jn(Se, k, ne);
          }
          break;
        case 2561:
          we = ie.read_shift(2);
          if (re.e.c < we) {
            re.e.c = we;
          }
          if (re.s.c > we) {
            re.s.c = we;
          }
          ue = ie.read_shift(4);
          if (re.s.r > ue) {
            re.s.r = ue;
          }
          ue = ie.read_shift(4);
          if (re.e.r < ue) {
            re.e.r = ue;
          }
          break;
        case 3073:
          {
            ue = ie.read_shift(4);
            xe = ie.read_shift(4);
            if (re.s.r > ue) {
              re.s.r = ue;
            }
            if (re.e.r < ue + xe - 1) {
              re.e.r = ue + xe - 1;
            }
            var Gt = Ie(we);
            while (ie.l < ie.length) {
              var Ce = {
                t: "z"
              };
              var vr = ie.read_shift(1);
              var lt = -1;
              if (vr & 128) {
                lt = ie.read_shift(2);
              }
              var ua = vr & 64 ? ie.read_shift(2) - 1 : 0;
              switch (vr & 31) {
                case 0:
                  break;
                case 1:
                  break;
                case 2:
                  Ce = {
                    t: "n",
                    v: ie.read_shift(2)
                  };
                  break;
                case 3:
                  Ce = {
                    t: "n",
                    v: ie.read_shift(2, "i")
                  };
                  break;
                case 4:
                  Ce = {
                    t: "n",
                    v: Gn(ie)
                  };
                  break;
                case 5:
                  Ce = {
                    t: "n",
                    v: ie.read_shift(8, "f")
                  };
                  break;
                case 7:
                  Ce = {
                    t: "s",
                    v: z[te = ie.read_shift(4) - 1]
                  };
                  break;
                case 8:
                  Ce = {
                    t: "n",
                    v: ie.read_shift(8, "f")
                  };
                  ie.l += 2;
                  ie.l += 4;
                  if (isNaN(Ce.v)) {
                    Ce = {
                      t: "e",
                      v: 15
                    };
                  }
                  break;
                default:
                  throw "Unrecognized QPW cell type " + (vr & 31);
              }
              if (lt != -1 && (Le[lt - 1] || {}).z) {
                Ce.z = Le[lt - 1].z;
              }
              var Kr = 0;
              if (vr & 32) {
                switch (vr & 31) {
                  case 2:
                    Kr = ie.read_shift(2);
                    break;
                  case 3:
                    Kr = ie.read_shift(2, "i");
                    break;
                  case 7:
                    Kr = ie.read_shift(2);
                    break;
                  default:
                    throw "Unsupported delta for QPW cell type " + (vr & 31);
                }
              }
              if (!!O.sheetStubs || Ce.t != "z") {
                var ct = pr(Ce);
                if (Ce.t == "n" && Ce.z && vt(Ce.z) && O.cellDates) {
                  ct.v = Ot(Ce.v);
                  ct.t = typeof ct.v == "number" ? "n" : "d";
                }
                if (k["!data"] != null) {
                  k["!data"][ue] ||= [];
                  k["!data"][ue][we] = ct;
                } else {
                  k[Gt + Ne(ue)] = ct;
                }
              }
              ++ue;
              --xe;
              while (ua-- > 0 && xe >= 0) {
                if (vr & 32) {
                  switch (vr & 31) {
                    case 2:
                      Ce = {
                        t: "n",
                        v: Ce.v + Kr & 65535
                      };
                      break;
                    case 3:
                      Ce = {
                        t: "n",
                        v: Ce.v + Kr & 65535
                      };
                      if (Ce.v > 32767) {
                        Ce.v -= 65536;
                      }
                      break;
                    case 7:
                      Ce = {
                        t: "s",
                        v: z[te = te + Kr >>> 0]
                      };
                      break;
                    default:
                      throw "Cannot apply delta for QPW cell type " + (vr & 31);
                  }
                } else {
                  switch (vr & 31) {
                    case 1:
                      Ce = {
                        t: "z"
                      };
                      break;
                    case 2:
                      Ce = {
                        t: "n",
                        v: ie.read_shift(2)
                      };
                      break;
                    case 7:
                      Ce = {
                        t: "s",
                        v: z[te = ie.read_shift(4) - 1]
                      };
                      break;
                    default:
                      throw "Cannot apply repeat for QPW cell type " + (vr & 31);
                  }
                }
                if (!!O.sheetStubs || Ce.t != "z") {
                  if (k["!data"] != null) {
                    k["!data"][ue] ||= [];
                    k["!data"][ue][we] = Ce;
                  } else {
                    k[Gt + Ne(ue)] = Ce;
                  }
                }
                ++ue;
                --xe;
              }
            }
          }
          break;
        case 3074:
          {
            we = ie.read_shift(2);
            ue = ie.read_shift(4);
            var xa = ye(ie);
            if (k["!data"] != null) {
              k["!data"][ue] ||= [];
              k["!data"][ue][we] = {
                t: "s",
                v: xa
              };
            } else {
              k[Ie(we) + Ne(ue)] = {
                t: "s",
                v: xa
              };
            }
          }
          break;
      }
      A.l += tr;
    }
    return Se;
  }
  return {
    sheet_to_wk1: n,
    book_to_wk3: s,
    to_workbook: t
  };
}();
var cl = /^\s|\s$|[\t\n\r]/;
function hl(e, t) {
  if (!t.bookSST) {
    return "";
  }
  var r = [qe];
  r[r.length] = J("sst", null, {
    xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    count: e.Count,
    uniqueCount: e.Unique
  });
  for (var a = 0; a != e.length; ++a) {
    if (e[a] != null) {
      var n = e[a];
      var s = "<si>";
      if (n.r) {
        s += n.r;
      } else {
        s += "<t";
        n.t ||= "";
        if (typeof n.t != "string") {
          n.t = String(n.t);
        }
        if (n.t.match(cl)) {
          s += " xml:space=\"preserve\"";
        }
        s += ">" + me(n.t) + "</t>";
      }
      s += "</si>";
      r[r.length] = s;
    }
  }
  if (r.length > 2) {
    r[r.length] = "</sst>";
    r[1] = r[1].replace("/>", ">");
  }
  return r.join("");
}
function ul(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function xl(e, t) {
  t ||= I(8);
  t.write_shift(4, e.Count);
  t.write_shift(4, e.Unique);
  return t;
}
var dl = Qf;
function pl(e) {
  var t = xr();
  G(t, 159, xl(e));
  for (var r = 0; r < e.length; ++r) {
    G(t, 19, dl(e[r]));
  }
  G(t, 160);
  return t.end();
}
function ml(e) {
  var t = [];
  for (var r = e.split(""), a = 0; a < r.length; ++a) {
    t[a] = r[a].charCodeAt(0);
  }
  return t;
}
function bi(e) {
  var t = 0;
  var r;
  var a = ml(e);
  var n = a.length + 1;
  var s;
  var i;
  var f;
  var o;
  var l;
  r = pt(n);
  r[0] = a.length;
  s = 1;
  for (; s != n; ++s) {
    r[s] = a[s - 1];
  }
  for (s = n - 1; s >= 0; --s) {
    i = r[s];
    f = (t & 16384) === 0 ? 0 : 1;
    o = t << 1 & 32767;
    l = f | o;
    t = l ^ i;
  }
  return t ^ 52811;
}
function vl(e, t) {
  var r = ["{\\rtf1\\ansi"];
  if (!e["!ref"]) {
    return r[0] + "}";
  }
  for (var a = Be(e["!ref"]), n, s = e["!data"] != null, i = [], f = a.s.r; f <= a.e.r; ++f) {
    r.push("\\trowd\\trautofit1");
    for (var o = a.s.c; o <= a.e.c; ++o) {
      r.push("\\cellx" + (o + 1));
    }
    r.push("\\pard\\intbl");
    if (s) {
      i = e["!data"][f] || [];
    }
    o = a.s.c;
    for (; o <= a.e.c; ++o) {
      var l = Ge({
        r: f,
        c: o
      });
      n = s ? i[o] : e[l];
      if (!n || n.v == null && (!n.f || n.F)) {
        r.push(" \\cell");
        continue;
      }
      r.push(" " + (n.w || (rt(n), n.w) || "").replace(/[\r\n]/g, "\\par "));
      r.push("\\cell");
    }
    r.push("\\pard\\intbl\\row");
  }
  return r.join("") + "}";
}
function I0(e) {
  for (var t = 0, r = 1; t != 3; ++t) {
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  }
  return r.toString(16).toUpperCase().slice(1);
}
var _l = 6;
var Qr = _l;
function Ma(e) {
  return Math.floor((e + Math.round(128 / Qr) / 256) * Qr);
}
function Ba(e) {
  return Math.floor((e - 5) / Qr * 100 + 0.5) / 100;
}
function Sn(e) {
  return Math.round((e * Qr + 5) / Qr * 256) / 256;
}
function Vn(e) {
  if (e.width) {
    e.wpx = Ma(e.width);
    e.wch = Ba(e.wpx);
    e.MDW = Qr;
  } else if (e.wpx) {
    e.wch = Ba(e.wpx);
    e.width = Sn(e.wch);
    e.MDW = Qr;
  } else if (typeof e.wch == "number") {
    e.width = Sn(e.wch);
    e.wpx = Ma(e.width);
    e.MDW = Qr;
  }
  if (e.customWidth) {
    delete e.customWidth;
  }
}
var gl = 96;
var Ui = gl;
function ba(e) {
  return e * 96 / Ui;
}
function Wi(e) {
  return e * Ui / 96;
}
function wl(e) {
  var t = ["<numFmts>"];
  [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (r) {
    for (var a = r[0]; a <= r[1]; ++a) {
      if (e[a] != null) {
        t[t.length] = J("numFmt", null, {
          numFmtId: a,
          formatCode: me(e[a])
        });
      }
    }
  });
  if (t.length === 1) {
    return "";
  } else {
    t[t.length] = "</numFmts>";
    t[0] = J("numFmts", null, {
      count: t.length - 2
    }).replace("/>", ">");
    return t.join("");
  }
}
function Tl(e) {
  var t = [];
  t[t.length] = J("cellXfs", null);
  e.forEach(function (r) {
    t[t.length] = J("xf", null, r);
  });
  t[t.length] = "</cellXfs>";
  if (t.length === 2) {
    return "";
  } else {
    t[0] = J("cellXfs", null, {
      count: t.length - 2
    }).replace("/>", ">");
    return t.join("");
  }
}
function El(e, t) {
  var r = [qe, J("styleSheet", null, {
    xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "xmlns:vt": ar.vt
  })];
  var a;
  if (e.SSF && (a = wl(e.SSF)) != null) {
    r[r.length] = a;
  }
  r[r.length] = "<fonts count=\"1\"><font><sz val=\"12\"/><color theme=\"1\"/><name val=\"Calibri\"/><family val=\"2\"/><scheme val=\"minor\"/></font></fonts>";
  r[r.length] = "<fills count=\"2\"><fill><patternFill patternType=\"none\"/></fill><fill><patternFill patternType=\"gray125\"/></fill></fills>";
  r[r.length] = "<borders count=\"1\"><border><left/><right/><top/><bottom/><diagonal/></border></borders>";
  r[r.length] = "<cellStyleXfs count=\"1\"><xf numFmtId=\"0\" fontId=\"0\" fillId=\"0\" borderId=\"0\"/></cellStyleXfs>";
  if (a = Tl(t.cellXfs)) {
    r[r.length] = a;
  }
  r[r.length] = "<cellStyles count=\"1\"><cellStyle name=\"Normal\" xfId=\"0\" builtinId=\"0\"/></cellStyles>";
  r[r.length] = "<dxfs count=\"0\"/>";
  r[r.length] = "<tableStyles count=\"0\" defaultTableStyle=\"TableStyleMedium9\" defaultPivotStyle=\"PivotStyleMedium4\"/>";
  if (r.length > 2) {
    r[r.length] = "</styleSheet>";
    r[1] = r[1].replace("/>", ">");
  }
  return r.join("");
}
function Sl(e, t) {
  var r = e.read_shift(2);
  var a = dr(e);
  return [r, a];
}
function Al(e, t, r) {
  r ||= I(6 + t.length * 4);
  r.write_shift(2, e);
  er(t, r);
  var a = r.length > r.l ? r.slice(0, r.l) : r;
  if (r.l == null) {
    r.l = r.length;
  }
  return a;
}
function Fl(e, t, r) {
  var a = {};
  a.sz = e.read_shift(2) / 20;
  var n = so(e);
  if (n.fItalic) {
    a.italic = 1;
  }
  if (n.fCondense) {
    a.condense = 1;
  }
  if (n.fExtend) {
    a.extend = 1;
  }
  if (n.fShadow) {
    a.shadow = 1;
  }
  if (n.fOutline) {
    a.outline = 1;
  }
  if (n.fStrikeout) {
    a.strike = 1;
  }
  var s = e.read_shift(2);
  if (s === 700) {
    a.bold = 1;
  }
  switch (e.read_shift(2)) {
    case 1:
      a.vertAlign = "superscript";
      break;
    case 2:
      a.vertAlign = "subscript";
      break;
  }
  var i = e.read_shift(1);
  if (i != 0) {
    a.underline = i;
  }
  var f = e.read_shift(1);
  if (f > 0) {
    a.family = f;
  }
  var o = e.read_shift(1);
  if (o > 0) {
    a.charset = o;
  }
  e.l++;
  a.color = io(e);
  switch (e.read_shift(1)) {
    case 1:
      a.scheme = "major";
      break;
    case 2:
      a.scheme = "minor";
      break;
  }
  a.name = dr(e);
  return a;
}
function yl(e, t) {
  t ||= I(153);
  t.write_shift(2, e.sz * 20);
  fo(e, t);
  t.write_shift(2, e.bold ? 700 : 400);
  var r = 0;
  if (e.vertAlign == "superscript") {
    r = 1;
  } else if (e.vertAlign == "subscript") {
    r = 2;
  }
  t.write_shift(2, r);
  t.write_shift(1, e.underline || 0);
  t.write_shift(1, e.family || 0);
  t.write_shift(1, e.charset || 0);
  t.write_shift(1, 0);
  Pa(e.color, t);
  var a = 0;
  a = 2;
  t.write_shift(1, a);
  er(e.name, t);
  if (t.length > t.l) {
    return t.slice(0, t.l);
  } else {
    return t;
  }
}
var Cl = ["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
var un;
var kl = $r;
function N0(e, t) {
  t ||= I(84);
  un ||= Rn(Cl);
  var r = un[e.patternType];
  if (r == null) {
    r = 40;
  }
  t.write_shift(4, r);
  var a = 0;
  if (r != 40) {
    Pa({
      auto: 1
    }, t);
    Pa({
      auto: 1
    }, t);
    for (; a < 12; ++a) {
      t.write_shift(4, 0);
    }
  } else {
    for (; a < 4; ++a) {
      t.write_shift(4, 0);
    }
    for (; a < 12; ++a) {
      t.write_shift(4, 0);
    }
  }
  if (t.length > t.l) {
    return t.slice(0, t.l);
  } else {
    return t;
  }
}
function Ol(e, t) {
  var r = e.l + t;
  var a = e.read_shift(2);
  var n = e.read_shift(2);
  e.l = r;
  return {
    ixfe: a,
    numFmtId: n
  };
}
function Hi(e, t, r) {
  r ||= I(16);
  r.write_shift(2, t || 0);
  r.write_shift(2, e.numFmtId || 0);
  r.write_shift(2, 0);
  r.write_shift(2, 0);
  r.write_shift(2, 0);
  r.write_shift(1, 0);
  r.write_shift(1, 0);
  var a = 0;
  r.write_shift(1, a);
  r.write_shift(1, 0);
  r.write_shift(1, 0);
  r.write_shift(1, 0);
  return r;
}
function zt(e, t) {
  t ||= I(10);
  t.write_shift(1, 0);
  t.write_shift(1, 0);
  t.write_shift(4, 0);
  t.write_shift(4, 0);
  return t;
}
var Dl = $r;
function Rl(e, t) {
  t ||= I(51);
  t.write_shift(1, 0);
  zt(null, t);
  zt(null, t);
  zt(null, t);
  zt(null, t);
  zt(null, t);
  if (t.length > t.l) {
    return t.slice(0, t.l);
  } else {
    return t;
  }
}
function Il(e, t) {
  t ||= I(52);
  t.write_shift(4, e.xfId);
  t.write_shift(2, 1);
  t.write_shift(1, 0);
  t.write_shift(1, 0);
  na(e.name || "", t);
  if (t.length > t.l) {
    return t.slice(0, t.l);
  } else {
    return t;
  }
}
function Nl(e, t, r) {
  var a = I(2052);
  a.write_shift(4, e);
  na(t, a);
  na(r, a);
  if (a.length > a.l) {
    return a.slice(0, a.l);
  } else {
    return a;
  }
}
function Pl(e, t) {
  if (t) {
    var r = 0;
    [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (a) {
      for (var n = a[0]; n <= a[1]; ++n) {
        if (t[n] != null) {
          ++r;
        }
      }
    });
    if (r != 0) {
      G(e, 615, br(r));
      [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (a) {
        for (var n = a[0]; n <= a[1]; ++n) {
          if (t[n] != null) {
            G(e, 44, Al(n, t[n]));
          }
        }
      });
      G(e, 616);
    }
  }
}
function Ll(e) {
  var t = 1;
  G(e, 611, br(t));
  G(e, 43, yl({
    sz: 12,
    color: {
      theme: 1
    },
    name: "Calibri",
    family: 2
  }));
  G(e, 612);
}
function Ml(e) {
  var t = 2;
  G(e, 603, br(t));
  G(e, 45, N0({
    patternType: "none"
  }));
  G(e, 45, N0({
    patternType: "gray125"
  }));
  G(e, 604);
}
function Bl(e) {
  var t = 1;
  G(e, 613, br(t));
  G(e, 46, Rl());
  G(e, 614);
}
function bl(e) {
  var t = 1;
  G(e, 626, br(t));
  G(e, 47, Hi({
    numFmtId: 0
  }, 65535));
  G(e, 627);
}
function Ul(e, t) {
  G(e, 617, br(t.length));
  t.forEach(function (r) {
    G(e, 47, Hi(r, 0));
  });
  G(e, 618);
}
function Wl(e) {
  var t = 1;
  G(e, 619, br(t));
  G(e, 48, Il({
    xfId: 0,
    name: "Normal"
  }));
  G(e, 620);
}
function Hl(e) {
  var t = 0;
  G(e, 505, br(t));
  G(e, 506);
}
function Gl(e) {
  var t = 0;
  G(e, 508, Nl(t, "TableStyleMedium9", "PivotStyleMedium4"));
  G(e, 509);
}
function Xl(e, t) {
  var r = xr();
  G(r, 278);
  Pl(r, e.SSF);
  Ll(r);
  Ml(r);
  Bl(r);
  bl(r);
  Ul(r, t.cellXfs);
  Wl(r);
  Hl(r);
  Gl(r);
  G(r, 279);
  return r.end();
}
function Gi(e, t) {
  if (t && t.themeXLSX) {
    return t.themeXLSX;
  }
  if (e && typeof e.raw == "string") {
    return e.raw;
  }
  var r = [qe];
  r[r.length] = "<a:theme xmlns:a=\"http://schemas.openxmlformats.org/drawingml/2006/main\" name=\"Office Theme\">";
  r[r.length] = "<a:themeElements>";
  r[r.length] = "<a:clrScheme name=\"Office\">";
  r[r.length] = "<a:dk1><a:sysClr val=\"windowText\" lastClr=\"000000\"/></a:dk1>";
  r[r.length] = "<a:lt1><a:sysClr val=\"window\" lastClr=\"FFFFFF\"/></a:lt1>";
  r[r.length] = "<a:dk2><a:srgbClr val=\"1F497D\"/></a:dk2>";
  r[r.length] = "<a:lt2><a:srgbClr val=\"EEECE1\"/></a:lt2>";
  r[r.length] = "<a:accent1><a:srgbClr val=\"4F81BD\"/></a:accent1>";
  r[r.length] = "<a:accent2><a:srgbClr val=\"C0504D\"/></a:accent2>";
  r[r.length] = "<a:accent3><a:srgbClr val=\"9BBB59\"/></a:accent3>";
  r[r.length] = "<a:accent4><a:srgbClr val=\"8064A2\"/></a:accent4>";
  r[r.length] = "<a:accent5><a:srgbClr val=\"4BACC6\"/></a:accent5>";
  r[r.length] = "<a:accent6><a:srgbClr val=\"F79646\"/></a:accent6>";
  r[r.length] = "<a:hlink><a:srgbClr val=\"0000FF\"/></a:hlink>";
  r[r.length] = "<a:folHlink><a:srgbClr val=\"800080\"/></a:folHlink>";
  r[r.length] = "</a:clrScheme>";
  r[r.length] = "<a:fontScheme name=\"Office\">";
  r[r.length] = "<a:majorFont>";
  r[r.length] = "<a:latin typeface=\"Cambria\"/>";
  r[r.length] = "<a:ea typeface=\"\"/>";
  r[r.length] = "<a:cs typeface=\"\"/>";
  r[r.length] = "<a:font script=\"Jpan\" typeface=\"ＭＳ Ｐゴシック\"/>";
  r[r.length] = "<a:font script=\"Hang\" typeface=\"맑은 고딕\"/>";
  r[r.length] = "<a:font script=\"Hans\" typeface=\"宋体\"/>";
  r[r.length] = "<a:font script=\"Hant\" typeface=\"新細明體\"/>";
  r[r.length] = "<a:font script=\"Arab\" typeface=\"Times New Roman\"/>";
  r[r.length] = "<a:font script=\"Hebr\" typeface=\"Times New Roman\"/>";
  r[r.length] = "<a:font script=\"Thai\" typeface=\"Tahoma\"/>";
  r[r.length] = "<a:font script=\"Ethi\" typeface=\"Nyala\"/>";
  r[r.length] = "<a:font script=\"Beng\" typeface=\"Vrinda\"/>";
  r[r.length] = "<a:font script=\"Gujr\" typeface=\"Shruti\"/>";
  r[r.length] = "<a:font script=\"Khmr\" typeface=\"MoolBoran\"/>";
  r[r.length] = "<a:font script=\"Knda\" typeface=\"Tunga\"/>";
  r[r.length] = "<a:font script=\"Guru\" typeface=\"Raavi\"/>";
  r[r.length] = "<a:font script=\"Cans\" typeface=\"Euphemia\"/>";
  r[r.length] = "<a:font script=\"Cher\" typeface=\"Plantagenet Cherokee\"/>";
  r[r.length] = "<a:font script=\"Yiii\" typeface=\"Microsoft Yi Baiti\"/>";
  r[r.length] = "<a:font script=\"Tibt\" typeface=\"Microsoft Himalaya\"/>";
  r[r.length] = "<a:font script=\"Thaa\" typeface=\"MV Boli\"/>";
  r[r.length] = "<a:font script=\"Deva\" typeface=\"Mangal\"/>";
  r[r.length] = "<a:font script=\"Telu\" typeface=\"Gautami\"/>";
  r[r.length] = "<a:font script=\"Taml\" typeface=\"Latha\"/>";
  r[r.length] = "<a:font script=\"Syrc\" typeface=\"Estrangelo Edessa\"/>";
  r[r.length] = "<a:font script=\"Orya\" typeface=\"Kalinga\"/>";
  r[r.length] = "<a:font script=\"Mlym\" typeface=\"Kartika\"/>";
  r[r.length] = "<a:font script=\"Laoo\" typeface=\"DokChampa\"/>";
  r[r.length] = "<a:font script=\"Sinh\" typeface=\"Iskoola Pota\"/>";
  r[r.length] = "<a:font script=\"Mong\" typeface=\"Mongolian Baiti\"/>";
  r[r.length] = "<a:font script=\"Viet\" typeface=\"Times New Roman\"/>";
  r[r.length] = "<a:font script=\"Uigh\" typeface=\"Microsoft Uighur\"/>";
  r[r.length] = "<a:font script=\"Geor\" typeface=\"Sylfaen\"/>";
  r[r.length] = "</a:majorFont>";
  r[r.length] = "<a:minorFont>";
  r[r.length] = "<a:latin typeface=\"Calibri\"/>";
  r[r.length] = "<a:ea typeface=\"\"/>";
  r[r.length] = "<a:cs typeface=\"\"/>";
  r[r.length] = "<a:font script=\"Jpan\" typeface=\"ＭＳ Ｐゴシック\"/>";
  r[r.length] = "<a:font script=\"Hang\" typeface=\"맑은 고딕\"/>";
  r[r.length] = "<a:font script=\"Hans\" typeface=\"宋体\"/>";
  r[r.length] = "<a:font script=\"Hant\" typeface=\"新細明體\"/>";
  r[r.length] = "<a:font script=\"Arab\" typeface=\"Arial\"/>";
  r[r.length] = "<a:font script=\"Hebr\" typeface=\"Arial\"/>";
  r[r.length] = "<a:font script=\"Thai\" typeface=\"Tahoma\"/>";
  r[r.length] = "<a:font script=\"Ethi\" typeface=\"Nyala\"/>";
  r[r.length] = "<a:font script=\"Beng\" typeface=\"Vrinda\"/>";
  r[r.length] = "<a:font script=\"Gujr\" typeface=\"Shruti\"/>";
  r[r.length] = "<a:font script=\"Khmr\" typeface=\"DaunPenh\"/>";
  r[r.length] = "<a:font script=\"Knda\" typeface=\"Tunga\"/>";
  r[r.length] = "<a:font script=\"Guru\" typeface=\"Raavi\"/>";
  r[r.length] = "<a:font script=\"Cans\" typeface=\"Euphemia\"/>";
  r[r.length] = "<a:font script=\"Cher\" typeface=\"Plantagenet Cherokee\"/>";
  r[r.length] = "<a:font script=\"Yiii\" typeface=\"Microsoft Yi Baiti\"/>";
  r[r.length] = "<a:font script=\"Tibt\" typeface=\"Microsoft Himalaya\"/>";
  r[r.length] = "<a:font script=\"Thaa\" typeface=\"MV Boli\"/>";
  r[r.length] = "<a:font script=\"Deva\" typeface=\"Mangal\"/>";
  r[r.length] = "<a:font script=\"Telu\" typeface=\"Gautami\"/>";
  r[r.length] = "<a:font script=\"Taml\" typeface=\"Latha\"/>";
  r[r.length] = "<a:font script=\"Syrc\" typeface=\"Estrangelo Edessa\"/>";
  r[r.length] = "<a:font script=\"Orya\" typeface=\"Kalinga\"/>";
  r[r.length] = "<a:font script=\"Mlym\" typeface=\"Kartika\"/>";
  r[r.length] = "<a:font script=\"Laoo\" typeface=\"DokChampa\"/>";
  r[r.length] = "<a:font script=\"Sinh\" typeface=\"Iskoola Pota\"/>";
  r[r.length] = "<a:font script=\"Mong\" typeface=\"Mongolian Baiti\"/>";
  r[r.length] = "<a:font script=\"Viet\" typeface=\"Arial\"/>";
  r[r.length] = "<a:font script=\"Uigh\" typeface=\"Microsoft Uighur\"/>";
  r[r.length] = "<a:font script=\"Geor\" typeface=\"Sylfaen\"/>";
  r[r.length] = "</a:minorFont>";
  r[r.length] = "</a:fontScheme>";
  r[r.length] = "<a:fmtScheme name=\"Office\">";
  r[r.length] = "<a:fillStyleLst>";
  r[r.length] = "<a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill>";
  r[r.length] = "<a:gradFill rotWithShape=\"1\">";
  r[r.length] = "<a:gsLst>";
  r[r.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"50000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>";
  r[r.length] = "<a:gs pos=\"35000\"><a:schemeClr val=\"phClr\"><a:tint val=\"37000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>";
  r[r.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:tint val=\"15000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
  r[r.length] = "</a:gsLst>";
  r[r.length] = "<a:lin ang=\"16200000\" scaled=\"1\"/>";
  r[r.length] = "</a:gradFill>";
  r[r.length] = "<a:gradFill rotWithShape=\"1\">";
  r[r.length] = "<a:gsLst>";
  r[r.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"100000\"/><a:shade val=\"100000\"/><a:satMod val=\"130000\"/></a:schemeClr></a:gs>";
  r[r.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:tint val=\"50000\"/><a:shade val=\"100000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
  r[r.length] = "</a:gsLst>";
  r[r.length] = "<a:lin ang=\"16200000\" scaled=\"0\"/>";
  r[r.length] = "</a:gradFill>";
  r[r.length] = "</a:fillStyleLst>";
  r[r.length] = "<a:lnStyleLst>";
  r[r.length] = "<a:ln w=\"9525\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"><a:shade val=\"95000\"/><a:satMod val=\"105000\"/></a:schemeClr></a:solidFill><a:prstDash val=\"solid\"/></a:ln>";
  r[r.length] = "<a:ln w=\"25400\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:prstDash val=\"solid\"/></a:ln>";
  r[r.length] = "<a:ln w=\"38100\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:prstDash val=\"solid\"/></a:ln>";
  r[r.length] = "</a:lnStyleLst>";
  r[r.length] = "<a:effectStyleLst>";
  r[r.length] = "<a:effectStyle>";
  r[r.length] = "<a:effectLst>";
  r[r.length] = "<a:outerShdw blurRad=\"40000\" dist=\"20000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"38000\"/></a:srgbClr></a:outerShdw>";
  r[r.length] = "</a:effectLst>";
  r[r.length] = "</a:effectStyle>";
  r[r.length] = "<a:effectStyle>";
  r[r.length] = "<a:effectLst>";
  r[r.length] = "<a:outerShdw blurRad=\"40000\" dist=\"23000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"35000\"/></a:srgbClr></a:outerShdw>";
  r[r.length] = "</a:effectLst>";
  r[r.length] = "</a:effectStyle>";
  r[r.length] = "<a:effectStyle>";
  r[r.length] = "<a:effectLst>";
  r[r.length] = "<a:outerShdw blurRad=\"40000\" dist=\"23000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"35000\"/></a:srgbClr></a:outerShdw>";
  r[r.length] = "</a:effectLst>";
  r[r.length] = "<a:scene3d><a:camera prst=\"orthographicFront\"><a:rot lat=\"0\" lon=\"0\" rev=\"0\"/></a:camera><a:lightRig rig=\"threePt\" dir=\"t\"><a:rot lat=\"0\" lon=\"0\" rev=\"1200000\"/></a:lightRig></a:scene3d>";
  r[r.length] = "<a:sp3d><a:bevelT w=\"63500\" h=\"25400\"/></a:sp3d>";
  r[r.length] = "</a:effectStyle>";
  r[r.length] = "</a:effectStyleLst>";
  r[r.length] = "<a:bgFillStyleLst>";
  r[r.length] = "<a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill>";
  r[r.length] = "<a:gradFill rotWithShape=\"1\">";
  r[r.length] = "<a:gsLst>";
  r[r.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"40000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
  r[r.length] = "<a:gs pos=\"40000\"><a:schemeClr val=\"phClr\"><a:tint val=\"45000\"/><a:shade val=\"99000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>";
  r[r.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:shade val=\"20000\"/><a:satMod val=\"255000\"/></a:schemeClr></a:gs>";
  r[r.length] = "</a:gsLst>";
  r[r.length] = "<a:path path=\"circle\"><a:fillToRect l=\"50000\" t=\"-80000\" r=\"50000\" b=\"180000\"/></a:path>";
  r[r.length] = "</a:gradFill>";
  r[r.length] = "<a:gradFill rotWithShape=\"1\">";
  r[r.length] = "<a:gsLst>";
  r[r.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"80000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>";
  r[r.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:shade val=\"30000\"/><a:satMod val=\"200000\"/></a:schemeClr></a:gs>";
  r[r.length] = "</a:gsLst>";
  r[r.length] = "<a:path path=\"circle\"><a:fillToRect l=\"50000\" t=\"50000\" r=\"50000\" b=\"50000\"/></a:path>";
  r[r.length] = "</a:gradFill>";
  r[r.length] = "</a:bgFillStyleLst>";
  r[r.length] = "</a:fmtScheme>";
  r[r.length] = "</a:themeElements>";
  r[r.length] = "<a:objectDefaults>";
  r[r.length] = "<a:spDef>";
  r[r.length] = "<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx=\"1\"><a:schemeClr val=\"accent1\"/></a:lnRef><a:fillRef idx=\"3\"><a:schemeClr val=\"accent1\"/></a:fillRef><a:effectRef idx=\"2\"><a:schemeClr val=\"accent1\"/></a:effectRef><a:fontRef idx=\"minor\"><a:schemeClr val=\"lt1\"/></a:fontRef></a:style>";
  r[r.length] = "</a:spDef>";
  r[r.length] = "<a:lnDef>";
  r[r.length] = "<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx=\"2\"><a:schemeClr val=\"accent1\"/></a:lnRef><a:fillRef idx=\"0\"><a:schemeClr val=\"accent1\"/></a:fillRef><a:effectRef idx=\"1\"><a:schemeClr val=\"accent1\"/></a:effectRef><a:fontRef idx=\"minor\"><a:schemeClr val=\"tx1\"/></a:fontRef></a:style>";
  r[r.length] = "</a:lnDef>";
  r[r.length] = "</a:objectDefaults>";
  r[r.length] = "<a:extraClrSchemeLst/>";
  r[r.length] = "</a:theme>";
  return r.join("");
}
function Vl(e, t) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: dr(e)
  };
}
function $l(e) {
  var t = I(12 + e.name.length * 2);
  t.write_shift(4, e.flags);
  t.write_shift(4, e.version);
  er(e.name, t);
  return t.slice(0, t.l);
}
function zl(e) {
  var t = [];
  for (var r = e.read_shift(4); r-- > 0;) {
    t.push([e.read_shift(4), e.read_shift(4)]);
  }
  return t;
}
function Kl(e) {
  var t = I(4 + e.length * 8);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r) {
    t.write_shift(4, e[r][0]);
    t.write_shift(4, e[r][1]);
  }
  return t;
}
function Yl(e, t) {
  var r = I(8 + t.length * 2);
  r.write_shift(4, e);
  er(t, r);
  return r.slice(0, r.l);
}
function jl(e) {
  e.l += 4;
  return e.read_shift(4) != 0;
}
function Zl(e, t) {
  var r = I(8);
  r.write_shift(4, e);
  r.write_shift(4, 1);
  return r;
}
function Jl() {
  var e = xr();
  G(e, 332);
  G(e, 334, br(1));
  G(e, 335, $l({
    name: "XLDAPR",
    version: 120000,
    flags: 3496657072
  }));
  G(e, 336);
  G(e, 339, Yl(1, "XLDAPR"));
  G(e, 52);
  G(e, 35, br(514));
  G(e, 4096, br(0));
  G(e, 4097, Pr(1));
  G(e, 36);
  G(e, 53);
  G(e, 340);
  G(e, 337, Zl(1));
  G(e, 51, Kl([[1, 0]]));
  G(e, 338);
  G(e, 333);
  return e.end();
}
function ql() {
  var e = [qe];
  e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`);
  return e.join("");
}
function Ql(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4);
  r.c = e.read_shift(4);
  t.r = Ge(r);
  var a = e.read_shift(1);
  if (a & 2) {
    t.l = "1";
  }
  if (a & 8) {
    t.a = "1";
  }
  return t;
}
function Xi(e, t, r) {
  var a = [21600, 21600];
  var n = ["m0,0l0", a[1], a[0], a[1], a[0], "0xe"].join(",");
  var s = [J("xml", null, {
    "xmlns:v": Or.v,
    "xmlns:o": Or.o,
    "xmlns:x": Or.x,
    "xmlns:mv": Or.mv
  }).replace(/\/>/, ">"), J("o:shapelayout", J("o:idmap", null, {
    "v:ext": "edit",
    data: e
  }), {
    "v:ext": "edit"
  })];
  var i = e * 65536;
  var f = t || [];
  if (f.length > 0) {
    s.push(J("v:shapetype", [J("v:stroke", null, {
      joinstyle: "miter"
    }), J("v:path", null, {
      gradientshapeok: "t",
      "o:connecttype": "rect"
    })].join(""), {
      id: "_x0000_t202",
      coordsize: a.join(","),
      "o:spt": 202,
      path: n
    }));
  }
  f.forEach(function (o) {
    ++i;
    s.push(ec(o, i));
  });
  s.push("</xml>");
  return s.join("");
}
function ec(e, t, r) {
  var a = We(e[0]);
  var n = {
    color2: "#BEFF82",
    type: "gradient"
  };
  if (n.type == "gradient") {
    n.angle = "-180";
  }
  var s = n.type == "gradient" ? J("o:fill", null, {
    type: "gradientUnscaled",
    "v:ext": "view"
  }) : null;
  var i = J("v:fill", s, n);
  var f = {
    on: "t",
    obscured: "t"
  };
  return ["<v:shape" + ra({
    id: "_x0000_s" + t,
    type: "#_x0000_t202",
    style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""),
    fillcolor: "#ECFAD4",
    strokecolor: "#edeaa1"
  }) + ">", i, J("v:shadow", null, f), J("v:path", null, {
    "o:connecttype": "none"
  }), "<v:textbox><div style=\"text-align:left\"></div></v:textbox>", "<x:ClientData ObjectType=\"Note\">", "<x:MoveWithCells/>", "<x:SizeWithCells/>", ir("x:Anchor", [a.c + 1, 0, a.r + 1, 0, a.c + 3, 20, a.r + 5, 20].join(",")), ir("x:AutoFill", "False"), ir("x:Row", String(a.r)), ir("x:Column", String(a.c)), e[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"].join("");
}
function rc(e) {
  var t = [qe, J("comments", null, {
    xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  })];
  var r = [];
  t.push("<authors>");
  e.forEach(function (a) {
    a[1].forEach(function (n) {
      var s = me(n.a);
      if (r.indexOf(s) == -1) {
        r.push(s);
        t.push("<author>" + s + "</author>");
      }
      if (n.T && n.ID && r.indexOf("tc=" + n.ID) == -1) {
        r.push("tc=" + n.ID);
        t.push("<author>tc=" + n.ID + "</author>");
      }
    });
  });
  if (r.length == 0) {
    r.push("SheetJ5");
    t.push("<author>SheetJ5</author>");
  }
  t.push("</authors>");
  t.push("<commentList>");
  e.forEach(function (a) {
    var n = 0;
    var s = [];
    var i = 0;
    if (a[1][0] && a[1][0].T && a[1][0].ID) {
      n = r.indexOf("tc=" + a[1][0].ID);
    }
    a[1].forEach(function (l) {
      if (l.a) {
        n = r.indexOf(me(l.a));
      }
      if (l.T) {
        ++i;
      }
      s.push(l.t == null ? "" : me(l.t));
    });
    if (i === 0) {
      a[1].forEach(function (l) {
        t.push("<comment ref=\"" + a[0] + "\" authorId=\"" + r.indexOf(me(l.a)) + "\"><text>");
        t.push(ir("t", l.t == null ? "" : me(l.t)));
        t.push("</text></comment>");
      });
    } else {
      if (a[1][0] && a[1][0].T && a[1][0].ID) {
        n = r.indexOf("tc=" + a[1][0].ID);
      }
      t.push("<comment ref=\"" + a[0] + "\" authorId=\"" + n + "\"><text>");
      var f = `Comment:
    ${s[0]}
`;
      for (var o = 1; o < s.length; ++o) {
        f += `Reply:
    ${s[o]}
`;
      }
      t.push(ir("t", me(f)));
      t.push("</text></comment>");
    }
  });
  t.push("</commentList>");
  if (t.length > 2) {
    t[t.length] = "</comments>";
    t[1] = t[1].replace("/>", ">");
  }
  return t.join("");
}
function Vi(e, t, r) {
  var a = [qe, J("ThreadedComments", null, {
    xmlns: ar.TCMNT
  }).replace(/[\/]>/, ">")];
  e.forEach(function (n) {
    var s = "";
    (n[1] || []).forEach(function (i, f) {
      if (!i.T) {
        delete i.ID;
        return;
      }
      if (i.a && t.indexOf(i.a) == -1) {
        t.push(i.a);
      }
      var o = {
        ref: n[0],
        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + r.tcid++).slice(-12) + "}"
      };
      if (f == 0) {
        s = o.id;
      } else {
        o.parentId = s;
      }
      i.ID = o.id;
      if (i.a) {
        o.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + t.indexOf(i.a)).slice(-12) + "}";
      }
      a.push(J("threadedComment", ir("text", i.t || ""), o));
    });
  });
  a.push("</ThreadedComments>");
  return a.join("");
}
function $i(e) {
  var t = [qe, J("personList", null, {
    xmlns: ar.TCMNT,
    "xmlns:x": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  }).replace(/[\/]>/, ">")];
  e.forEach(function (r, a) {
    t.push(J("person", null, {
      displayName: r,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + a).slice(-12) + "}",
      userId: r,
      providerId: "None"
    }));
  });
  t.push("</personList>");
  return t.join("");
}
function tc(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = St(e);
  t.rfx = r.s;
  t.ref = Ge(r.s);
  e.l += 16;
  return t;
}
function ac(e, t) {
  if (t == null) {
    t = I(36);
  }
  t.write_shift(4, e[1].iauthor);
  Wt(e[0], t);
  t.write_shift(4, 0);
  t.write_shift(4, 0);
  t.write_shift(4, 0);
  t.write_shift(4, 0);
  return t;
}
var nc = dr;
function P0(e) {
  return er(e.slice(0, 54));
}
function ic(e) {
  var t = xr();
  var r = [];
  G(t, 628);
  G(t, 630);
  e.forEach(function (a) {
    a[1].forEach(function (n) {
      if (!(r.indexOf(n.a) > -1)) {
        r.push(n.a.slice(0, 54));
        G(t, 632, P0(n.a));
        if (n.T && n.ID && r.indexOf("tc=" + n.ID) == -1) {
          r.push("tc=" + n.ID);
          G(t, 632, P0("tc=" + n.ID));
        }
      }
    });
  });
  G(t, 631);
  G(t, 633);
  e.forEach(function (a) {
    a[1].forEach(function (n) {
      var s = -1;
      if (n.ID) {
        s = r.indexOf("tc=" + n.ID);
      }
      if (s == -1 && a[1][0].T && a[1][0].ID) {
        s = r.indexOf("tc=" + a[1][0].ID);
      }
      if (s == -1) {
        s = r.indexOf(n.a);
      }
      n.iauthor = s;
      var i = {
        s: We(a[0]),
        e: We(a[0])
      };
      G(t, 635, ac([i, n]));
      if (n.t && n.t.length > 0) {
        G(t, 637, ro(n));
      }
      G(t, 636);
      delete n.iauthor;
    });
  });
  G(t, 634);
  G(t, 629);
  return t.end();
}
function sc(e, t) {
  t.FullPaths.forEach(function (r, a) {
    if (a != 0) {
      var n = r.replace(/^[\/]*[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      if (n.slice(-1) !== "/") {
        Pe.utils.cfb_add(e, n, t.FileIndex[a].content);
      }
    }
  });
}
var fc = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
var L0 = function () {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g;
  var t = {
    r: 0,
    c: 0
  };
  function r(a, n, s, i) {
    var f = false;
    var o = false;
    if (s.length == 0) {
      o = true;
    } else if (s.charAt(0) == "[") {
      o = true;
      s = s.slice(1, -1);
    }
    if (i.length == 0) {
      f = true;
    } else if (i.charAt(0) == "[") {
      f = true;
      i = i.slice(1, -1);
    }
    var l = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    var c = i.length > 0 ? parseInt(i, 10) | 0 : 0;
    if (f) {
      c += t.c;
    } else {
      --c;
    }
    if (o) {
      l += t.r;
    } else {
      --l;
    }
    return n + (f ? "" : "$") + Ie(c) + (o ? "" : "$") + Ne(l);
  }
  return function (n, s) {
    t = s;
    return n.replace(e, r);
  };
}();
var Za = /(^|[^._A-Z0-9])(\$?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])(\$?)(\d{1,7})(?![_.\(A-Za-z0-9])/g;
try {
  Za = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
} catch { }
var Ja = function () {
  return function (t, r) {
    return t.replace(Za, function (a, n, s, i, f, o) {
      var l = Un(i) - (s ? 0 : r.c);
      var c = bn(o) - (f ? 0 : r.r);
      var x = f == "$" ? c + 1 : c == 0 ? "" : "[" + c + "]";
      var h = s == "$" ? l + 1 : l == 0 ? "" : "[" + l + "]";
      return n + "R" + x + "C" + h;
    });
  };
}();
function oc(e, t) {
  return e.replace(Za, function (r, a, n, s, i, f) {
    return a + (n == "$" ? n + s : Ie(Un(s) + t.c)) + (i == "$" ? i + f : Ne(bn(f) + t.r));
  });
}
function lc(e) {
  return e.length != 1;
}
function Ke(e) {
  e.l += 1;
}
function st(e, t) {
  var r = e.read_shift(2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function zi(e, t, r) {
  var a = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) {
      return Ki(e);
    }
    if (r.biff == 12) {
      a = 4;
    }
  }
  var n = e.read_shift(a);
  var s = e.read_shift(a);
  var i = st(e);
  var f = st(e);
  return {
    s: {
      r: n,
      c: i[0],
      cRel: i[1],
      rRel: i[2]
    },
    e: {
      r: s,
      c: f[0],
      cRel: f[1],
      rRel: f[2]
    }
  };
}
function Ki(e) {
  var t = st(e);
  var r = st(e);
  var a = e.read_shift(1);
  var n = e.read_shift(1);
  return {
    s: {
      r: t[0],
      c: a,
      cRel: t[1],
      rRel: t[2]
    },
    e: {
      r: r[0],
      c: n,
      cRel: r[1],
      rRel: r[2]
    }
  };
}
function cc(e, t, r) {
  if (r.biff < 8) {
    return Ki(e);
  }
  var a = e.read_shift(r.biff == 12 ? 4 : 2);
  var n = e.read_shift(r.biff == 12 ? 4 : 2);
  var s = st(e);
  var i = st(e);
  return {
    s: {
      r: a,
      c: s[0],
      cRel: s[1],
      rRel: s[2]
    },
    e: {
      r: n,
      c: i[0],
      cRel: i[1],
      rRel: i[2]
    }
  };
}
function Yi(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5) {
    return hc(e);
  }
  var a = e.read_shift(r && r.biff == 12 ? 4 : 2);
  var n = st(e);
  return {
    r: a,
    c: n[0],
    cRel: n[1],
    rRel: n[2]
  };
}
function hc(e) {
  var t = st(e);
  var r = e.read_shift(1);
  return {
    r: t[0],
    c: r,
    cRel: t[1],
    rRel: t[2]
  };
}
function uc(e) {
  var t = e.read_shift(2);
  var r = e.read_shift(2);
  return {
    r: t,
    c: r & 255,
    fQuoted: !!(r & 16384),
    cRel: r >> 15,
    rRel: r >> 15
  };
}
function xc(e, t, r) {
  var a = r && r.biff ? r.biff : 8;
  if (a >= 2 && a <= 5) {
    return dc(e);
  }
  var n = e.read_shift(a >= 12 ? 4 : 2);
  var s = e.read_shift(2);
  var i = (s & 16384) >> 14;
  var f = (s & 32768) >> 15;
  s &= 16383;
  if (f == 1) {
    while (n > 524287) {
      n -= 1048576;
    }
  }
  if (i == 1) {
    while (s > 8191) {
      s = s - 16384;
    }
  }
  return {
    r: n,
    c: s,
    cRel: i,
    rRel: f
  };
}
function dc(e) {
  var t = e.read_shift(2);
  var r = e.read_shift(1);
  var a = (t & 32768) >> 15;
  var n = (t & 16384) >> 14;
  t &= 16383;
  if (a == 1 && t >= 8192) {
    t = t - 16384;
  }
  if (n == 1 && r >= 128) {
    r = r - 256;
  }
  return {
    r: t,
    c: r,
    cRel: n,
    rRel: a
  };
}
function pc(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  var n = zi(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [a, n];
}
function mc(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  var n = e.read_shift(2, "i");
  var s = 8;
  if (r) {
    switch (r.biff) {
      case 5:
        e.l += 12;
        s = 6;
        break;
      case 12:
        s = 12;
        break;
    }
  }
  var i = zi(e, s, r);
  return [a, n, i];
}
function vc(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8;
  return [a];
}
function _c(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  var n = e.read_shift(2);
  var s = 8;
  if (r) {
    switch (r.biff) {
      case 5:
        e.l += 12;
        s = 6;
        break;
      case 12:
        s = 12;
        break;
    }
  }
  e.l += s;
  return [a, n];
}
function gc(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  var n = cc(e, t - 1, r);
  return [a, n];
}
function wc(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7;
  return [a];
}
function M0(e) {
  var t = e[e.l + 1] & 1;
  var r = 1;
  e.l += 4;
  return [t, r];
}
function Tc(e, t, r) {
  e.l += 2;
  for (var a = e.read_shift(r && r.biff == 2 ? 1 : 2), n = [], s = 0; s <= a; ++s) {
    n.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  }
  return n;
}
function Ec(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  e.l += 2;
  return [a, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function Sc(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  e.l += 2;
  return [a, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function Ac(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  e.l += 2;
  return [t, e.read_shift(2)];
}
function Fc(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  e.l += r && r.biff == 2 ? 3 : 4;
  return [a];
}
function ji(e) {
  var t = e.read_shift(1);
  var r = e.read_shift(1);
  return [t, r];
}
function yc(e) {
  e.read_shift(2);
  return ji(e);
}
function Cc(e) {
  e.read_shift(2);
  return ji(e);
}
function kc(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = Yi(e, 0, r);
  return [a, n];
}
function Oc(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = xc(e, 0, r);
  return [a, n];
}
function Dc(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  if (r && r.biff == 5) {
    e.l += 12;
  }
  var s = Yi(e, 0, r);
  return [a, n, s];
}
function Rc(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [G1[n], qi[n], a];
}
function Ic(e, t, r) {
  var a = e[e.l++];
  var n = e.read_shift(1);
  var s = r && r.biff <= 3 ? [a == 88 ? -1 : 0, e.read_shift(1)] : Nc(e);
  return [n, (s[0] === 0 ? qi : H1)[s[1]]];
}
function Nc(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function Pc(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function Lc(e, t, r) {
  e.l++;
  if (r && r.biff == 12) {
    return [e.read_shift(4, "i"), 0];
  }
  var a = e.read_shift(2);
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function Mc(e) {
  e.l++;
  return Er[e.read_shift(1)];
}
function Bc(e) {
  e.l++;
  return e.read_shift(2);
}
function bc(e) {
  e.l++;
  return e.read_shift(1) !== 0;
}
function Uc(e) {
  e.l++;
  return Ht(e);
}
function Wc(e, t, r) {
  e.l++;
  return Ni(e, t - 1, r);
}
function Hc(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12) {
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  }
  switch (r[0]) {
    case 4:
      r[1] = yo(e, 1) ? "TRUE" : "FALSE";
      if (t != 12) {
        e.l += 7;
      }
      break;
    case 37:
    case 16:
      r[1] = Er[e[e.l]];
      e.l += t == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = Ht(e);
      break;
    case 2:
      r[1] = Do(e, 0, {
        biff: t > 0 && t < 8 ? 2 : t
      });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function Gc(e, t, r) {
  for (var a = e.read_shift(r.biff == 12 ? 4 : 2), n = [], s = 0; s != a; ++s) {
    n.push((r.biff == 12 ? St : No)(e));
  }
  return n;
}
function Xc(e, t, r) {
  var a = 0;
  var n = 0;
  if (r.biff == 12) {
    a = e.read_shift(4);
    n = e.read_shift(4);
  } else {
    n = 1 + e.read_shift(1);
    a = 1 + e.read_shift(2);
  }
  if (r.biff >= 2 && r.biff < 8) {
    --a;
    if (--n == 0) {
      n = 256;
    }
  }
  for (var s = 0, i = []; s != a && (i[s] = []); ++s) {
    for (var f = 0; f != n; ++f) {
      i[s][f] = Hc(e, r.biff);
    }
  }
  return i;
}
function Vc(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3;
  var n = !r || r.biff >= 8 ? 4 : 2;
  var s = e.read_shift(n);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [a, 0, s];
}
function $c(e, t, r) {
  if (r.biff == 5) {
    return zc(e);
  }
  var a = e.read_shift(1) >>> 5 & 3;
  var n = e.read_shift(2);
  var s = e.read_shift(4);
  return [a, n, s];
}
function zc(e) {
  var t = e.read_shift(1) >>> 5 & 3;
  var r = e.read_shift(2, "i");
  e.l += 8;
  var a = e.read_shift(2);
  e.l += 12;
  return [t, r, a];
}
function Kc(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function Yc(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3;
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function jc(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3;
  e.l += 4;
  if (r.biff < 8) {
    e.l--;
  }
  if (r.biff == 12) {
    e.l += 2;
  }
  return [a];
}
function Zc(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  var n = e.read_shift(2);
  var s = 4;
  if (r) {
    switch (r.biff) {
      case 5:
        s = 15;
        break;
      case 12:
        s = 6;
        break;
    }
  }
  e.l += s;
  return [a, n];
}
var Jc = $r;
var qc = $r;
var Qc = $r;
function ha(e, t, r) {
  e.l += 2;
  return [uc(e)];
}
function $n(e) {
  e.l += 6;
  return [];
}
var e1 = ha;
var r1 = $n;
var t1 = $n;
var a1 = ha;
function Zi(e) {
  e.l += 2;
  return [Sa(e), e.read_shift(2) & 1];
}
var n1 = ha;
var i1 = Zi;
var s1 = $n;
var f1 = ha;
var o1 = ha;
var l1 = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
function c1(e) {
  e.l += 2;
  var t = e.read_shift(2);
  var r = e.read_shift(2);
  var a = e.read_shift(4);
  var n = e.read_shift(2);
  var s = e.read_shift(2);
  var i = l1[r >> 2 & 31];
  return {
    ixti: t,
    coltype: r & 3,
    rt: i,
    idx: a,
    c: n,
    C: s
  };
}
function h1(e) {
  e.l += 2;
  return [e.read_shift(4)];
}
function u1(e, t, r) {
  e.l += 5;
  e.l += 2;
  e.l += r.biff == 2 ? 1 : 4;
  return ["PTGSHEET"];
}
function x1(e, t, r) {
  e.l += r.biff == 2 ? 4 : 5;
  return ["PTGENDSHEET"];
}
function d1(e) {
  var t = e.read_shift(1) >>> 5 & 3;
  var r = e.read_shift(2);
  return [t, r];
}
function p1(e) {
  var t = e.read_shift(1) >>> 5 & 3;
  var r = e.read_shift(2);
  return [t, r];
}
function m1(e) {
  e.l += 4;
  return [0, 0];
}
var B0 = {
  1: {
    n: "PtgExp",
    f: Lc
  },
  2: {
    n: "PtgTbl",
    f: Qc
  },
  3: {
    n: "PtgAdd",
    f: Ke
  },
  4: {
    n: "PtgSub",
    f: Ke
  },
  5: {
    n: "PtgMul",
    f: Ke
  },
  6: {
    n: "PtgDiv",
    f: Ke
  },
  7: {
    n: "PtgPower",
    f: Ke
  },
  8: {
    n: "PtgConcat",
    f: Ke
  },
  9: {
    n: "PtgLt",
    f: Ke
  },
  10: {
    n: "PtgLe",
    f: Ke
  },
  11: {
    n: "PtgEq",
    f: Ke
  },
  12: {
    n: "PtgGe",
    f: Ke
  },
  13: {
    n: "PtgGt",
    f: Ke
  },
  14: {
    n: "PtgNe",
    f: Ke
  },
  15: {
    n: "PtgIsect",
    f: Ke
  },
  16: {
    n: "PtgUnion",
    f: Ke
  },
  17: {
    n: "PtgRange",
    f: Ke
  },
  18: {
    n: "PtgUplus",
    f: Ke
  },
  19: {
    n: "PtgUminus",
    f: Ke
  },
  20: {
    n: "PtgPercent",
    f: Ke
  },
  21: {
    n: "PtgParen",
    f: Ke
  },
  22: {
    n: "PtgMissArg",
    f: Ke
  },
  23: {
    n: "PtgStr",
    f: Wc
  },
  26: {
    n: "PtgSheet",
    f: u1
  },
  27: {
    n: "PtgEndSheet",
    f: x1
  },
  28: {
    n: "PtgErr",
    f: Mc
  },
  29: {
    n: "PtgBool",
    f: bc
  },
  30: {
    n: "PtgInt",
    f: Bc
  },
  31: {
    n: "PtgNum",
    f: Uc
  },
  32: {
    n: "PtgArray",
    f: wc
  },
  33: {
    n: "PtgFunc",
    f: Rc
  },
  34: {
    n: "PtgFuncVar",
    f: Ic
  },
  35: {
    n: "PtgName",
    f: Vc
  },
  36: {
    n: "PtgRef",
    f: kc
  },
  37: {
    n: "PtgArea",
    f: pc
  },
  38: {
    n: "PtgMemArea",
    f: Kc
  },
  39: {
    n: "PtgMemErr",
    f: Jc
  },
  40: {
    n: "PtgMemNoMem",
    f: qc
  },
  41: {
    n: "PtgMemFunc",
    f: Yc
  },
  42: {
    n: "PtgRefErr",
    f: jc
  },
  43: {
    n: "PtgAreaErr",
    f: vc
  },
  44: {
    n: "PtgRefN",
    f: Oc
  },
  45: {
    n: "PtgAreaN",
    f: gc
  },
  46: {
    n: "PtgMemAreaN",
    f: d1
  },
  47: {
    n: "PtgMemNoMemN",
    f: p1
  },
  57: {
    n: "PtgNameX",
    f: $c
  },
  58: {
    n: "PtgRef3d",
    f: Dc
  },
  59: {
    n: "PtgArea3d",
    f: mc
  },
  60: {
    n: "PtgRefErr3d",
    f: Zc
  },
  61: {
    n: "PtgAreaErr3d",
    f: _c
  },
  255: {}
};
var v1 = {
  64: 32,
  96: 32,
  65: 33,
  97: 33,
  66: 34,
  98: 34,
  67: 35,
  99: 35,
  68: 36,
  100: 36,
  69: 37,
  101: 37,
  70: 38,
  102: 38,
  71: 39,
  103: 39,
  72: 40,
  104: 40,
  73: 41,
  105: 41,
  74: 42,
  106: 42,
  75: 43,
  107: 43,
  76: 44,
  108: 44,
  77: 45,
  109: 45,
  78: 46,
  110: 46,
  79: 47,
  111: 47,
  88: 34,
  120: 34,
  89: 57,
  121: 57,
  90: 58,
  122: 58,
  91: 59,
  123: 59,
  92: 60,
  124: 60,
  93: 61,
  125: 61
};
var _1 = {
  1: {
    n: "PtgElfLel",
    f: Zi
  },
  2: {
    n: "PtgElfRw",
    f: f1
  },
  3: {
    n: "PtgElfCol",
    f: e1
  },
  6: {
    n: "PtgElfRwV",
    f: o1
  },
  7: {
    n: "PtgElfColV",
    f: a1
  },
  10: {
    n: "PtgElfRadical",
    f: n1
  },
  11: {
    n: "PtgElfRadicalS",
    f: s1
  },
  13: {
    n: "PtgElfColS",
    f: r1
  },
  15: {
    n: "PtgElfColSV",
    f: t1
  },
  16: {
    n: "PtgElfRadicalLel",
    f: i1
  },
  25: {
    n: "PtgList",
    f: c1
  },
  29: {
    n: "PtgSxName",
    f: h1
  },
  255: {}
};
var g1 = {
  0: {
    n: "PtgAttrNoop",
    f: m1
  },
  1: {
    n: "PtgAttrSemi",
    f: Fc
  },
  2: {
    n: "PtgAttrIf",
    f: Sc
  },
  4: {
    n: "PtgAttrChoose",
    f: Tc
  },
  8: {
    n: "PtgAttrGoto",
    f: Ec
  },
  16: {
    n: "PtgAttrSum",
    f: Pc
  },
  32: {
    n: "PtgAttrBaxcel",
    f: M0
  },
  33: {
    n: "PtgAttrBaxcel",
    f: M0
  },
  64: {
    n: "PtgAttrSpace",
    f: yc
  },
  65: {
    n: "PtgAttrSpaceSemi",
    f: Cc
  },
  128: {
    n: "PtgAttrIfError",
    f: Ac
  },
  255: {}
};
function w1(e, t, r, a) {
  if (a.biff < 8) {
    return $r(e, t);
  }
  var n = e.l + t;
  var s = [];
  for (var i = 0; i !== r.length; ++i) {
    switch (r[i][0]) {
      case "PtgArray":
        r[i][1] = Xc(e, 0, a);
        s.push(r[i][1]);
        break;
      case "PtgMemArea":
        r[i][2] = Gc(e, r[i][1], a);
        s.push(r[i][2]);
        break;
      case "PtgExp":
        if (a && a.biff == 12) {
          r[i][1][1] = e.read_shift(4);
          s.push(r[i][1]);
        }
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[i][0];
    }
  }
  t = n - e.l;
  if (t !== 0) {
    s.push($r(e, t));
  }
  return s;
}
function T1(e, t, r) {
  for (var a = e.l + t, n, s, i = []; a != e.l;) {
    t = a - e.l;
    s = e[e.l];
    n = B0[s] || B0[v1[s]];
    if (s === 24 || s === 25) {
      n = (s === 24 ? _1 : g1)[e[e.l + 1]];
    }
    if (!n || !n.f) {
      $r(e, t);
    } else {
      i.push([n.n, n.f(e, t, r)]);
    }
  }
  return i;
}
function E1(e) {
  var t = [];
  for (var r = 0; r < e.length; ++r) {
    for (var a = e[r], n = [], s = 0; s < a.length; ++s) {
      var i = a[s];
      if (i) {
        switch (i[0]) {
          case 2:
            n.push("\"" + i[1].replace(/"/g, "\"\"") + "\"");
            break;
          default:
            n.push(i[1]);
        }
      } else {
        n.push("");
      }
    }
    t.push(n.join(","));
  }
  return t.join(";");
}
var S1 = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function A1(e, t) {
  var r = e.lastIndexOf("!");
  var a = t.lastIndexOf("!");
  if (r == -1 && a == -1) {
    return e + ":" + t;
  } else if (r > 0 && a > 0 && e.slice(0, r).toLowerCase() == t.slice(0, a).toLowerCase()) {
    return e + ":" + t.slice(a + 1);
  } else {
    console.error("Cannot hydrate range", e, t);
    return e + ":" + t;
  }
}
function Ji(e, t, r) {
  if (!e) {
    return "SH33TJSERR0";
  }
  if (r.biff > 8 && (!e.XTI || !e.XTI[t])) {
    return e.SheetNames[t];
  }
  if (!e.XTI) {
    return "SH33TJSERR6";
  }
  var a = e.XTI[t];
  if (r.biff < 8) {
    if (t > 10000) {
      t -= 65536;
    }
    if (t < 0) {
      t = -t;
    }
    if (t == 0) {
      return "";
    } else {
      return e.XTI[t - 1];
    }
  }
  if (!a) {
    return "SH33TJSERR1";
  }
  var n = "";
  if (r.biff > 8) {
    switch (e[a[0]][0]) {
      case 357:
        n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]];
        if (a[1] == a[2]) {
          return n;
        } else {
          return n + ":" + e.SheetNames[a[2]];
        }
      case 358:
        if (r.SID != null) {
          return e.SheetNames[r.SID];
        } else {
          return "SH33TJSSAME" + e[a[0]][0];
        }
      case 355:
      default:
        return "SH33TJSSRC" + e[a[0]][0];
    }
  }
  switch (e[a[0]][0][0]) {
    case 1025:
      n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3";
      if (a[1] == a[2]) {
        return n;
      } else {
        return n + ":" + e.SheetNames[a[2]];
      }
    case 14849:
      return e[a[0]].slice(1).map(function (s) {
        return s.Name;
      }).join(";;");
    default:
      if (e[a[0]][0][3]) {
        n = a[1] == -1 ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4";
        if (a[1] == a[2]) {
          return n;
        } else {
          return n + ":" + e[a[0]][0][3][a[2]];
        }
      } else {
        return "SH33TJSERR2";
      }
  }
}
function b0(e, t, r) {
  var a = Ji(e, t, r);
  if (a == "#REF") {
    return a;
  } else {
    return aa(a, r);
  }
}
function Mt(e, t, r, a, n) {
  var s = n && n.biff || 8;
  var i = {
    s: {
      c: 0,
      r: 0
    }
  };
  var f = [];
  var o;
  var l;
  var c;
  var x = 0;
  var h = 0;
  var u;
  var p = "";
  if (!e[0] || !e[0][0]) {
    return "";
  }
  var g = -1;
  var m = "";
  for (var v = 0, C = e[0].length; v < C; ++v) {
    var F = e[0][v];
    switch (F[0]) {
      case "PtgUminus":
        f.push("-" + f.pop());
        break;
      case "PtgUplus":
        f.push("+" + f.pop());
        break;
      case "PtgPercent":
        f.push(f.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        o = f.pop();
        l = f.pop();
        if (g >= 0) {
          switch (e[0][g][1][0]) {
            case 0:
              m = Ue(" ", e[0][g][1][1]);
              break;
            case 1:
              m = Ue("\r", e[0][g][1][1]);
              break;
            default:
              m = "";
              if (n.WTF) {
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][g][1][0]);
              }
          }
          l = l + m;
          g = -1;
        }
        f.push(l + S1[F[0]] + o);
        break;
      case "PtgIsect":
        o = f.pop();
        l = f.pop();
        f.push(l + " " + o);
        break;
      case "PtgUnion":
        o = f.pop();
        l = f.pop();
        f.push(l + "," + o);
        break;
      case "PtgRange":
        o = f.pop();
        l = f.pop();
        f.push(A1(l, o));
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        c = Zt(F[1][1], i, n);
        f.push(Jt(c, s));
        break;
      case "PtgRefN":
        c = r ? Zt(F[1][1], r, n) : F[1][1];
        f.push(Jt(c, s));
        break;
      case "PtgRef3d":
        x = F[1][1];
        c = Zt(F[1][2], i, n);
        p = b0(a, x, n);
        f.push(p + "!" + Jt(c, s));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var U = F[1][0];
        var H = F[1][1];
        U ||= 0;
        U &= 127;
        var V = U == 0 ? [] : f.slice(-U);
        f.length -= U;
        if (H === "User") {
          H = V.shift();
        }
        f.push(H + "(" + V.join(",") + ")");
        break;
      case "PtgBool":
        f.push(F[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        f.push(F[1]);
        break;
      case "PtgNum":
        f.push(String(F[1]));
        break;
      case "PtgStr":
        f.push("\"" + F[1].replace(/"/g, "\"\"") + "\"");
        break;
      case "PtgErr":
        f.push(F[1]);
        break;
      case "PtgAreaN":
        u = g0(F[1][1], r ? {
          s: r
        } : i, n);
        f.push(on(u, n));
        break;
      case "PtgArea":
        u = g0(F[1][1], i, n);
        f.push(on(u, n));
        break;
      case "PtgArea3d":
        x = F[1][1];
        u = F[1][2];
        p = b0(a, x, n);
        f.push(p + "!" + on(u, n));
        break;
      case "PtgAttrSum":
        f.push("SUM(" + f.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        h = F[1][2];
        var y = (a.names || [])[h - 1] || (a[0] || [])[h];
        var N = y ? y.Name : "SH33TJSNAME" + String(h);
        if (N && N.slice(0, 6) == "_xlfn." && !n.xlfn) {
          N = N.slice(6);
        }
        f.push(N);
        break;
      case "PtgNameX":
        var D = F[1][1];
        h = F[1][2];
        var X;
        if (n.biff <= 5) {
          if (D < 0) {
            D = -D;
          }
          if (a[D]) {
            X = a[D][h];
          }
        } else {
          var b = "";
          if (((a[D] || [])[0] || [])[0] != 14849) {
            if (((a[D] || [])[0] || [])[0] == 1025) {
              if (a[D][h] && a[D][h].itab > 0) {
                b = a.SheetNames[a[D][h].itab - 1] + "!";
              }
            } else {
              b = a.SheetNames[h - 1] + "!";
            }
          }
          if (a[D] && a[D][h]) {
            b += a[D][h].Name;
          } else if (a[0] && a[0][h]) {
            b += a[0][h].Name;
          } else {
            var Y = (Ji(a, D, n) || "").split(";;");
            if (Y[h - 1]) {
              b = Y[h - 1];
            } else {
              b += "SH33TJSERRX";
            }
          }
          f.push(b);
          break;
        }
        X ||= {
          Name: "SH33TJSERRY"
        };
        f.push(X.Name);
        break;
      case "PtgParen":
        var le = "(";
        var _e = ")";
        if (g >= 0) {
          m = "";
          switch (e[0][g][1][0]) {
            case 2:
              le = Ue(" ", e[0][g][1][1]) + le;
              break;
            case 3:
              le = Ue("\r", e[0][g][1][1]) + le;
              break;
            case 4:
              _e = Ue(" ", e[0][g][1][1]) + _e;
              break;
            case 5:
              _e = Ue("\r", e[0][g][1][1]) + _e;
              break;
            default:
              if (n.WTF) {
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][g][1][0]);
              }
          }
          g = -1;
        }
        f.push(le + f.pop() + _e);
        break;
      case "PtgRefErr":
        f.push("#REF!");
        break;
      case "PtgRefErr3d":
        f.push("#REF!");
        break;
      case "PtgExp":
        c = {
          c: F[1][1],
          r: F[1][0]
        };
        var ce = {
          c: r.c,
          r: r.r
        };
        if (a.sharedf[Ge(c)]) {
          var rr = a.sharedf[Ge(c)];
          f.push(Mt(rr, i, ce, a, n));
        } else {
          var he = false;
          for (o = 0; o != a.arrayf.length; ++o) {
            l = a.arrayf[o];
            if (!(c.c < l[0].s.c) && !(c.c > l[0].e.c) && !(c.r < l[0].s.r) && !(c.r > l[0].e.r)) {
              f.push(Mt(l[1], i, ce, a, n));
              he = true;
              break;
            }
          }
          if (!he) {
            f.push(F[1]);
          }
        }
        break;
      case "PtgArray":
        f.push("{" + E1(F[1]) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        g = v;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        f.push("");
        break;
      case "PtgAreaErr":
        f.push("#REF!");
        break;
      case "PtgAreaErr3d":
        f.push("#REF!");
        break;
      case "PtgList":
        f.push("Table" + F[1].idx + "[#" + F[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(F));
      default:
        throw new Error("Unrecognized Formula Token: " + String(F));
    }
    var Qe = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (n.biff != 3 && g >= 0 && Qe.indexOf(e[0][v][0]) == -1) {
      F = e[0][g];
      var Xe = true;
      switch (F[1][0]) {
        case 4:
          Xe = false;
        case 0:
          m = Ue(" ", F[1][1]);
          break;
        case 5:
          Xe = false;
        case 1:
          m = Ue("\r", F[1][1]);
          break;
        default:
          m = "";
          if (n.WTF) {
            throw new Error("Unexpected PtgAttrSpaceType " + F[1][0]);
          }
      }
      f.push((Xe ? m : "") + f.pop() + (Xe ? "" : m));
      g = -1;
    }
  }
  if (f.length > 1 && n.WTF) {
    throw new Error("bad formula stack");
  }
  if (f[0] == "TRUE") {
    return true;
  } else if (f[0] == "FALSE") {
    return false;
  } else {
    return f[0];
  }
}
function F1(e) {
  if (e == null) {
    var t = I(8);
    t.write_shift(1, 3);
    t.write_shift(1, 0);
    t.write_shift(2, 0);
    t.write_shift(2, 0);
    t.write_shift(2, 65535);
    return t;
  } else if (typeof e == "number") {
    return _t(e);
  }
  return _t(0);
}
function y1(e, t, r, a, n) {
  var s = gt(t, r, n);
  var i = F1(e.v);
  var f = I(6);
  var o = 33;
  f.write_shift(2, o);
  f.write_shift(4, 0);
  var l = I(e.bf.length);
  for (var c = 0; c < e.bf.length; ++c) {
    l[c] = e.bf[c];
  }
  var x = je([s, i, f, l]);
  return x;
}
function qa(e, t, r) {
  var a = e.read_shift(4);
  var n = T1(e, a, r);
  var s = e.read_shift(4);
  var i = s > 0 ? w1(e, s, n, r) : null;
  return [n, i];
}
var C1 = qa;
var Qa = qa;
var k1 = qa;
var O1 = qa;
function U0(e) {
  if ((e | 0) == e && e < Math.pow(2, 16) && e >= 0) {
    var t = I(11);
    t.write_shift(4, 3);
    t.write_shift(1, 30);
    t.write_shift(2, e);
    t.write_shift(4, 0);
    return t;
  }
  var r = I(17);
  r.write_shift(4, 11);
  r.write_shift(1, 31);
  r.write_shift(8, e);
  r.write_shift(4, 0);
  return r;
}
function D1(e) {
  var t = I(10);
  t.write_shift(4, 2);
  t.write_shift(1, 28);
  t.write_shift(1, e);
  t.write_shift(4, 0);
  return t;
}
function R1(e) {
  var t = I(10);
  t.write_shift(4, 2);
  t.write_shift(1, 29);
  t.write_shift(1, e ? 1 : 0);
  t.write_shift(4, 0);
  return t;
}
function I1(e) {
  var t = I(7);
  t.write_shift(4, 3 + e.length * 2);
  t.write_shift(1, 23);
  t.write_shift(2, e.length);
  var r = I(e.length * 2);
  r.write_shift(e.length * 2, e, "utf16le");
  var a = I(4);
  a.write_shift(4, 0);
  return je([t, r, a]);
}
function N1(e) {
  var t = We(e);
  var r = I(15);
  r.write_shift(4, 7);
  r.write_shift(1, 36);
  r.write_shift(4, t.r);
  r.write_shift(2, t.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15);
  r.write_shift(4, 0);
  return r;
}
function P1(e, t) {
  var r = e.lastIndexOf("!");
  var a = e.slice(0, r);
  e = e.slice(r + 1);
  var n = We(e);
  if (a.charAt(0) == "'") {
    a = a.slice(1, -1).replace(/''/g, "'");
  }
  var s = I(17);
  s.write_shift(4, 9);
  s.write_shift(1, 58);
  s.write_shift(2, 2 + t.SheetNames.map(function (i) {
    return i.toLowerCase();
  }).indexOf(a.toLowerCase()));
  s.write_shift(4, n.r);
  s.write_shift(2, n.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15);
  s.write_shift(4, 0);
  return s;
}
function L1(e, t) {
  var r = e.lastIndexOf("!");
  var a = e.slice(0, r);
  e = e.slice(r + 1);
  if (a.charAt(0) == "'") {
    a = a.slice(1, -1).replace(/''/g, "'");
  }
  var n = I(17);
  n.write_shift(4, 9);
  n.write_shift(1, 60);
  n.write_shift(2, 2 + t.SheetNames.map(function (s) {
    return s.toLowerCase();
  }).indexOf(a.toLowerCase()));
  n.write_shift(4, 0);
  n.write_shift(2, 0);
  n.write_shift(4, 0);
  return n;
}
function M1(e) {
  var t = e.split(":");
  var r = t[0];
  var a = I(23);
  a.write_shift(4, 15);
  r = t[0];
  var n = We(r);
  a.write_shift(1, 36);
  a.write_shift(4, n.r);
  a.write_shift(2, n.c | (r.charAt(0) == "$" ? 0 : 1) << 14 | (r.match(/\$\d/) ? 0 : 1) << 15);
  a.write_shift(4, 0);
  r = t[1];
  n = We(r);
  a.write_shift(1, 36);
  a.write_shift(4, n.r);
  a.write_shift(2, n.c | (r.charAt(0) == "$" ? 0 : 1) << 14 | (r.match(/\$\d/) ? 0 : 1) << 15);
  a.write_shift(4, 0);
  a.write_shift(1, 17);
  a.write_shift(4, 0);
  return a;
}
function B1(e, t) {
  var r = e.lastIndexOf("!");
  var a = e.slice(0, r);
  e = e.slice(r + 1);
  if (a.charAt(0) == "'") {
    a = a.slice(1, -1).replace(/''/g, "'");
  }
  var n = e.split(":");
  var s = I(27);
  s.write_shift(4, 19);
  var i = n[0];
  var f = We(i);
  s.write_shift(1, 58);
  s.write_shift(2, 2 + t.SheetNames.map(function (o) {
    return o.toLowerCase();
  }).indexOf(a.toLowerCase()));
  s.write_shift(4, f.r);
  s.write_shift(2, f.c | (i.charAt(0) == "$" ? 0 : 1) << 14 | (i.match(/\$\d/) ? 0 : 1) << 15);
  i = n[1];
  f = We(i);
  s.write_shift(1, 58);
  s.write_shift(2, 2 + t.SheetNames.map(function (o) {
    return o.toLowerCase();
  }).indexOf(a.toLowerCase()));
  s.write_shift(4, f.r);
  s.write_shift(2, f.c | (i.charAt(0) == "$" ? 0 : 1) << 14 | (i.match(/\$\d/) ? 0 : 1) << 15);
  s.write_shift(1, 17);
  s.write_shift(4, 0);
  return s;
}
function b1(e, t) {
  var r = e.lastIndexOf("!");
  var a = e.slice(0, r);
  e = e.slice(r + 1);
  if (a.charAt(0) == "'") {
    a = a.slice(1, -1).replace(/''/g, "'");
  }
  var n = sr(e);
  var s = I(23);
  s.write_shift(4, 15);
  s.write_shift(1, 59);
  s.write_shift(2, 2 + t.SheetNames.map(function (i) {
    return i.toLowerCase();
  }).indexOf(a.toLowerCase()));
  s.write_shift(4, n.s.r);
  s.write_shift(4, n.e.r);
  s.write_shift(2, n.s.c);
  s.write_shift(2, n.e.c);
  s.write_shift(4, 0);
  return s;
}
function U1(e, t) {
  if (typeof e == "number") {
    return U0(e);
  }
  if (typeof e == "boolean") {
    return R1(e);
  }
  if (/^#(DIV\/0!|GETTING_DATA|N\/A|NAME\?|NULL!|NUM!|REF!|VALUE!)$/.test(e)) {
    return D1(+Vr[e]);
  }
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) {
    return N1(e);
  }
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) {
    return M1(e);
  }
  if (e.match(/^#REF!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) {
    return b1(e, t);
  }
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) {
    return P1(e, t);
  }
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) {
    return B1(e, t);
  }
  if (/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!#REF!$/.test(e)) {
    return L1(e, t);
  }
  if (/^".*"$/.test(e)) {
    return I1(e);
  }
  if (/^[+-]\d+$/.test(e)) {
    return U0(parseInt(e, 10));
  }
  throw "Formula |" + e + "| not supported for XLSB";
}
var W1 = U1;
var H1 = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
};
var qi = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
};
var G1 = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function X1(e) {
  var t = "of:=" + e.replace(Za, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return t.replace(/;/g, "|").replace(/,/g, ";");
}
function Qi(e) {
  return e.replace(/!/, ".").replace(/:/, ":.");
}
var qt = typeof Map !== "undefined";
function zn(e, t, r) {
  var a = 0;
  var n = e.length;
  if (r) {
    if (qt ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var s = qt ? r.get(t) : r[t]; a < s.length; ++a) {
        if (e[s[a]].t === t) {
          e.Count++;
          return s[a];
        }
      }
    }
  } else {
    for (; a < n; ++a) {
      if (e[a].t === t) {
        e.Count++;
        return a;
      }
    }
  }
  e[n] = {
    t
  };
  e.Count++;
  e.Unique++;
  if (r) {
    if (qt) {
      if (!r.has(t)) {
        r.set(t, []);
      }
      r.get(t).push(n);
    } else {
      if (!Object.prototype.hasOwnProperty.call(r, t)) {
        r[t] = [];
      }
      r[t].push(n);
    }
  }
  return n;
}
function en(e, t) {
  var r = {
    min: e + 1,
    max: e + 1
  };
  var a = -1;
  if (t.MDW) {
    Qr = t.MDW;
  }
  if (t.width != null) {
    r.customWidth = 1;
  } else if (t.wpx != null) {
    a = Ba(t.wpx);
  } else if (t.wch != null) {
    a = t.wch;
  }
  if (a > -1) {
    r.width = Sn(a);
    r.customWidth = 1;
  } else if (t.width != null) {
    r.width = t.width;
  }
  if (t.hidden) {
    r.hidden = true;
  }
  if (t.level != null) {
    r.outlineLevel = r.level = t.level;
  }
  return r;
}
function es(e, t) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    if (e.left == null) {
      e.left = r[0];
    }
    if (e.right == null) {
      e.right = r[1];
    }
    if (e.top == null) {
      e.top = r[2];
    }
    if (e.bottom == null) {
      e.bottom = r[3];
    }
    if (e.header == null) {
      e.header = r[4];
    }
    if (e.footer == null) {
      e.footer = r[5];
    }
  }
}
function ot(e, t, r) {
  var a = r.revssf[t.z ?? "General"];
  var n = 60;
  var s = e.length;
  if (a == null && r.ssf) {
    for (; n < 392; ++n) {
      if (r.ssf[n] == null) {
        pf(t.z, n);
        r.ssf[n] = t.z;
        r.revssf[t.z] = a = n;
        break;
      }
    }
  }
  for (n = 0; n != s; ++n) {
    if (e[n].numFmtId === a) {
      return n;
    }
  }
  e[s] = {
    numFmtId: a,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  };
  return s;
}
function V1(e, t, r) {
  if (e && e["!ref"]) {
    var a = Be(e["!ref"]);
    if (a.e.c < a.s.c || a.e.r < a.s.r) {
      throw new Error("Bad range (" + r + "): " + e["!ref"]);
    }
  }
}
function $1(e) {
  if (e.length === 0) {
    return "";
  }
  var t = "<mergeCells count=\"" + e.length + "\">";
  for (var r = 0; r != e.length; ++r) {
    t += "<mergeCell ref=\"" + Je(e[r]) + "\"/>";
  }
  return t + "</mergeCells>";
}
function z1(e, t, r, a, n) {
  var s = false;
  var i = {};
  var f = null;
  if (a.bookType !== "xlsx" && t.vbaraw) {
    var o = t.SheetNames[r];
    try {
      if (t.Workbook) {
        o = t.Workbook.Sheets[r].CodeName || o;
      }
    } catch { }
    s = true;
    i.codeName = ea(me(o));
  }
  if (e && e["!outline"]) {
    var l = {
      summaryBelow: 1,
      summaryRight: 1
    };
    if (e["!outline"].above) {
      l.summaryBelow = 0;
    }
    if (e["!outline"].left) {
      l.summaryRight = 0;
    }
    f = (f || "") + J("outlinePr", null, l);
  }
  if (!!s || !!f) {
    n[n.length] = J("sheetPr", f, i);
  }
}
var K1 = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"];
var Y1 = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];
function j1(e) {
  var t = {
    sheet: 1
  };
  K1.forEach(function (r) {
    if (e[r] != null && e[r]) {
      t[r] = "1";
    }
  });
  Y1.forEach(function (r) {
    if (e[r] != null && !e[r]) {
      t[r] = "0";
    }
  });
  if (e.password) {
    t.password = bi(e.password).toString(16).toUpperCase();
  }
  return J("sheetProtection", null, t);
}
function Z1(e) {
  es(e);
  return J("pageMargins", null, e);
}
function J1(e, t) {
  var r = ["<cols>"];
  var a;
  for (var n = 0; n != t.length; ++n) {
    if (a = t[n]) {
      r[r.length] = J("col", null, en(n, a));
    }
  }
  r[r.length] = "</cols>";
  return r.join("");
}
function q1(e, t, r, a) {
  var n = typeof e.ref == "string" ? e.ref : Je(e.ref);
  r.Workbook ||= {
    Sheets: []
  };
  r.Workbook.Names ||= [];
  var s = r.Workbook.Names;
  var i = sr(n);
  if (i.s.r == i.e.r) {
    i.e.r = sr(t["!ref"]).e.r;
    n = Je(i);
  }
  for (var f = 0; f < s.length; ++f) {
    var o = s[f];
    if (o.Name == "_xlnm._FilterDatabase" && o.Sheet == a) {
      o.Ref = aa(r.SheetNames[a]) + "!" + ta(n);
      break;
    }
  }
  if (f == s.length) {
    s.push({
      Name: "_xlnm._FilterDatabase",
      Sheet: a,
      Ref: "'" + r.SheetNames[a] + "'!" + n
    });
  }
  return J("autoFilter", null, {
    ref: n
  });
}
function Q1(e, t, r, a) {
  var n = {
    workbookViewId: "0"
  };
  if ((((a || {}).Workbook || {}).Views || [])[0]) {
    n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0";
  }
  return J("sheetViews", J("sheetView", null, n), {});
}
function eh(e, t, r, a, n, s, i) {
  if (e.c) {
    r["!comments"].push([t, e.c]);
  }
  if ((e.v === undefined || e.t === "z" && !(a || {}).sheetStubs) && typeof e.f != "string" && typeof e.z === "undefined") {
    return "";
  }
  var f = "";
  var o = e.t;
  var l = e.v;
  if (e.t !== "z") {
    switch (e.t) {
      case "b":
        f = e.v ? "1" : "0";
        break;
      case "n":
        if (isNaN(e.v)) {
          e.t = "e";
          f = Er[e.v = 36];
        } else if (isFinite(e.v)) {
          f = "" + e.v;
        } else {
          e.t = "e";
          f = Er[e.v = 7];
        }
        break;
      case "e":
        f = Er[e.v];
        break;
      case "d":
        if (a && a.cellDates) {
          var c = Fr(e.v, i);
          f = c.toISOString();
          if (c.getUTCFullYear() < 1900) {
            f = f.slice(f.indexOf("T") + 1).replace("Z", "");
          }
        } else {
          e = pr(e);
          e.t = "n";
          f = "" + (e.v = fr(Fr(e.v, i), i));
        }
        if (typeof e.z === "undefined") {
          e.z = Me[14];
        }
        break;
      default:
        f = e.v;
        break;
    }
  }
  var x = e.t == "z" || e.v == null ? "" : ir("v", me(f));
  var h = {
    r: t
  };
  var u = ot(a.cellXfs, e, a);
  if (u !== 0) {
    h.s = u;
  }
  switch (e.t) {
    case "n":
      break;
    case "d":
      h.t = "d";
      break;
    case "b":
      h.t = "b";
      break;
    case "e":
      h.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767) {
        throw new Error("Text length must not exceed 32767 characters");
      }
      if (a && a.bookSST) {
        x = ir("v", "" + zn(a.Strings, e.v, a.revStrings));
        h.t = "s";
        break;
      } else {
        h.t = "str";
      }
      break;
  }
  if (e.t != o) {
    e.t = o;
    e.v = l;
  }
  if (typeof e.f == "string" && e.f) {
    var p = e.F && e.F.slice(0, t.length) == t ? {
      t: "array",
      ref: e.F
    } : null;
    x = J("f", me(e.f), p) + (e.v != null ? x : "");
  }
  if (e.l) {
    e.l.display = me(f);
    r["!links"].push([t, e.l]);
  }
  if (e.D) {
    h.cm = 1;
  }
  return J("c", x, h);
}
function rh(e, t, r, a) {
  var n = [];
  var s = [];
  var i = Be(e["!ref"]);
  var f = "";
  var o;
  var l = "";
  var c = [];
  var x = 0;
  var h = 0;
  var u = e["!rows"];
  var p = e["!data"] != null;
  var g = p ? e["!data"] : [];
  var m = {
    r: l
  };
  var v;
  var C = -1;
  var F = (((a || {}).Workbook || {}).WBProps || {}).date1904;
  for (h = i.s.c; h <= i.e.c; ++h) {
    c[h] = Ie(h);
  }
  for (x = i.s.r; x <= i.e.r; ++x) {
    s = [];
    l = Ne(x);
    var U = p ? g[x] : [];
    for (h = i.s.c; h <= i.e.c; ++h) {
      o = c[h] + l;
      var H = p ? U[h] : e[o];
      if (H !== undefined && (f = eh(H, o, e, t, r, a, F)) != null) {
        s.push(f);
      }
    }
    if (s.length > 0 || u && u[x]) {
      m = {
        r: l
      };
      if (u && u[x]) {
        v = u[x];
        if (v.hidden) {
          m.hidden = 1;
        }
        C = -1;
        if (v.hpx) {
          C = ba(v.hpx);
        } else if (v.hpt) {
          C = v.hpt;
        }
        if (C > -1) {
          m.ht = C;
          m.customHeight = 1;
        }
        if (v.level) {
          m.outlineLevel = v.level;
        }
      }
      n[n.length] = J("row", s.join(""), m);
    }
  }
  if (u) {
    for (; x < u.length; ++x) {
      if (u && u[x]) {
        m = {
          r: x + 1
        };
        v = u[x];
        if (v.hidden) {
          m.hidden = 1;
        }
        C = -1;
        if (v.hpx) {
          C = ba(v.hpx);
        } else if (v.hpt) {
          C = v.hpt;
        }
        if (C > -1) {
          m.ht = C;
          m.customHeight = 1;
        }
        if (v.level) {
          m.outlineLevel = v.level;
        }
        n[n.length] = J("row", "", m);
      }
    }
  }
  return n.join("");
}
function th(e, t, r, a) {
  var n = [qe, J("worksheet", null, {
    xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "xmlns:r": ar.r
  })];
  var s = r.SheetNames[e];
  var i = 0;
  var f = "";
  var o = r.Sheets[s];
  if (o == null) {
    o = {};
  }
  var l = o["!ref"] || "A1";
  var c = Be(l);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF) {
      throw new Error("Range " + l + " exceeds format limit A1:XFD1048576");
    }
    c.e.c = Math.min(c.e.c, 16383);
    c.e.r = Math.min(c.e.c, 1048575);
    l = Je(c);
  }
  a ||= {};
  o["!comments"] = [];
  var x = [];
  z1(o, r, e, t, n);
  n[n.length] = J("dimension", null, {
    ref: l
  });
  n[n.length] = Q1(o, t, e, r);
  if (t.sheetFormat) {
    n[n.length] = J("sheetFormatPr", null, {
      defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
      baseColWidth: t.sheetFormat.baseColWidth || "10",
      outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
    });
  }
  if (o["!cols"] != null && o["!cols"].length > 0) {
    n[n.length] = J1(o, o["!cols"]);
  }
  n[i = n.length] = "<sheetData/>";
  o["!links"] = [];
  if (o["!ref"] != null) {
    f = rh(o, t, e, r);
    if (f.length > 0) {
      n[n.length] = f;
    }
  }
  if (n.length > i + 1) {
    n[n.length] = "</sheetData>";
    n[i] = n[i].replace("/>", ">");
  }
  if (o["!protect"]) {
    n[n.length] = j1(o["!protect"]);
  }
  if (o["!autofilter"] != null) {
    n[n.length] = q1(o["!autofilter"], o, r, e);
  }
  if (o["!merges"] != null && o["!merges"].length > 0) {
    n[n.length] = $1(o["!merges"]);
  }
  var h = -1;
  var u;
  var p = -1;
  if (o["!links"].length > 0) {
    n[n.length] = "<hyperlinks>";
    o["!links"].forEach(function (g) {
      if (g[1].Target) {
        u = {
          ref: g[0]
        };
        if (g[1].Target.charAt(0) != "#") {
          p = ke(a, -1, me(g[1].Target).replace(/#[\s\S]*$/, ""), Ae.HLINK);
          u["r:id"] = "rId" + p;
        }
        if ((h = g[1].Target.indexOf("#")) > -1) {
          u.location = me(g[1].Target.slice(h + 1));
        }
        if (g[1].Tooltip) {
          u.tooltip = me(g[1].Tooltip);
        }
        u.display = g[1].display;
        n[n.length] = J("hyperlink", null, u);
      }
    });
    n[n.length] = "</hyperlinks>";
  }
  delete o["!links"];
  if (o["!margins"] != null) {
    n[n.length] = Z1(o["!margins"]);
  }
  if (!t || t.ignoreEC || t.ignoreEC == null) {
    n[n.length] = ir("ignoredErrors", J("ignoredError", null, {
      numberStoredAsText: 1,
      sqref: l
    }));
  }
  if (x.length > 0) {
    p = ke(a, -1, "../drawings/drawing" + (e + 1) + ".xml", Ae.DRAW);
    n[n.length] = J("drawing", null, {
      "r:id": "rId" + p
    });
    o["!drawing"] = x;
  }
  if (o["!comments"].length > 0) {
    p = ke(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Ae.VML);
    n[n.length] = J("legacyDrawing", null, {
      "r:id": "rId" + p
    });
    o["!legacy"] = p;
  }
  if (n.length > 1) {
    n[n.length] = "</worksheet>";
    n[1] = n[1].replace("/>", ">");
  }
  return n.join("");
}
function ah(e, t) {
  var r = {};
  var a = e.l + t;
  r.r = e.read_shift(4);
  e.l += 4;
  var n = e.read_shift(2);
  e.l += 1;
  var s = e.read_shift(1);
  e.l = a;
  if (s & 7) {
    r.level = s & 7;
  }
  if (s & 16) {
    r.hidden = true;
  }
  if (s & 32) {
    r.hpt = n / 20;
  }
  return r;
}
function nh(e, t, r) {
  var a = I(145);
  var n = (r["!rows"] || [])[e] || {};
  a.write_shift(4, e);
  a.write_shift(4, 0);
  var s = 320;
  if (n.hpx) {
    s = ba(n.hpx) * 20;
  } else if (n.hpt) {
    s = n.hpt * 20;
  }
  a.write_shift(2, s);
  a.write_shift(1, 0);
  var i = 0;
  if (n.level) {
    i |= n.level;
  }
  if (n.hidden) {
    i |= 16;
  }
  if (n.hpx || n.hpt) {
    i |= 32;
  }
  a.write_shift(1, i);
  a.write_shift(1, 0);
  var f = 0;
  var o = a.l;
  a.l += 4;
  var l = {
    r: e,
    c: 0
  };
  var c = r["!data"] != null;
  for (var x = 0; x < 16; ++x) {
    if (!(t.s.c > x + 1 << 10) && !(t.e.c < x << 10)) {
      var h = -1;
      var u = -1;
      for (var p = x << 10; p < x + 1 << 10; ++p) {
        l.c = p;
        var g = c ? (r["!data"][l.r] || [])[l.c] : r[Ge(l)];
        if (g) {
          if (h < 0) {
            h = p;
          }
          u = p;
        }
      }
      if (!(h < 0)) {
        ++f;
        a.write_shift(4, h);
        a.write_shift(4, u);
      }
    }
  }
  var m = a.l;
  a.l = o;
  a.write_shift(4, f);
  a.l = m;
  if (a.length > a.l) {
    return a.slice(0, a.l);
  } else {
    return a;
  }
}
function ih(e, t, r, a) {
  var n = nh(a, r, t);
  if (n.length > 17 || (t["!rows"] || [])[a]) {
    G(e, 0, n);
  }
}
var sh = St;
var fh = Wt;
function oh() { }
function lh(e, t) {
  var r = {};
  var a = e[e.l];
  ++e.l;
  r.above = !(a & 64);
  r.left = !(a & 128);
  e.l += 18;
  r.name = to(e);
  return r;
}
function ch(e, t, r) {
  if (r == null) {
    r = I(84 + e.length * 4);
  }
  var a = 192;
  if (t) {
    if (t.above) {
      a &= -65;
    }
    if (t.left) {
      a &= -129;
    }
  }
  r.write_shift(1, a);
  for (var n = 1; n < 3; ++n) {
    r.write_shift(1, 0);
  }
  Pa({
    auto: 1
  }, r);
  r.write_shift(-4, -1);
  r.write_shift(-4, -1);
  gi(e, r);
  return r.slice(0, r.l);
}
function hh(e) {
  var t = Lr(e);
  return [t];
}
function uh(e, t, r) {
  if (r == null) {
    r = I(8);
  }
  return wt(t, r);
}
function xh(e) {
  var t = Tt(e);
  return [t];
}
function dh(e, t, r) {
  if (r == null) {
    r = I(4);
  }
  return Et(t, r);
}
function ph(e) {
  var t = Lr(e);
  var r = e.read_shift(1);
  return [t, r, "b"];
}
function mh(e, t, r) {
  if (r == null) {
    r = I(9);
  }
  wt(t, r);
  r.write_shift(1, e.v ? 1 : 0);
  return r;
}
function vh(e) {
  var t = Tt(e);
  var r = e.read_shift(1);
  return [t, r, "b"];
}
function _h(e, t, r) {
  if (r == null) {
    r = I(5);
  }
  Et(t, r);
  r.write_shift(1, e.v ? 1 : 0);
  return r;
}
function gh(e) {
  var t = Lr(e);
  var r = e.read_shift(1);
  return [t, r, "e"];
}
function xn(e, t, r) {
  if (r == null) {
    r = I(9);
  }
  wt(t, r);
  r.write_shift(1, e.v);
  return r;
}
function wh(e) {
  var t = Tt(e);
  var r = e.read_shift(1);
  return [t, r, "e"];
}
function dn(e, t, r) {
  if (r == null) {
    r = I(8);
  }
  Et(t, r);
  r.write_shift(1, e.v);
  r.write_shift(2, 0);
  r.write_shift(1, 0);
  return r;
}
function Th(e) {
  var t = Lr(e);
  var r = e.read_shift(4);
  return [t, r, "s"];
}
function Eh(e, t, r) {
  if (r == null) {
    r = I(12);
  }
  wt(t, r);
  r.write_shift(4, t.v);
  return r;
}
function Sh(e) {
  var t = Tt(e);
  var r = e.read_shift(4);
  return [t, r, "s"];
}
function Ah(e, t, r) {
  if (r == null) {
    r = I(8);
  }
  Et(t, r);
  r.write_shift(4, t.v);
  return r;
}
function Fh(e) {
  var t = Lr(e);
  var r = Ht(e);
  return [t, r, "n"];
}
function yh(e, t, r) {
  if (r == null) {
    r = I(16);
  }
  wt(t, r);
  _t(e.v, r);
  return r;
}
function Ch(e) {
  var t = Tt(e);
  var r = Ht(e);
  return [t, r, "n"];
}
function kh(e, t, r) {
  if (r == null) {
    r = I(12);
  }
  Et(t, r);
  _t(e.v, r);
  return r;
}
function Oh(e) {
  var t = Lr(e);
  var r = Gn(e);
  return [t, r, "n"];
}
function Dh(e, t, r) {
  if (r == null) {
    r = I(12);
  }
  wt(t, r);
  wi(e.v, r);
  return r;
}
function Rh(e) {
  var t = Tt(e);
  var r = Gn(e);
  return [t, r, "n"];
}
function Ih(e, t, r) {
  if (r == null) {
    r = I(8);
  }
  Et(t, r);
  wi(e.v, r);
  return r;
}
function Nh(e) {
  var t = Lr(e);
  var r = Wn(e);
  return [t, r, "is"];
}
function Ph(e) {
  var t = Lr(e);
  var r = dr(e);
  return [t, r, "str"];
}
function Lh(e, t, r) {
  var a = e.v == null ? "" : String(e.v);
  if (r == null) {
    r = I(12 + e.v.length * 4);
  }
  wt(t, r);
  er(a, r);
  if (r.length > r.l) {
    return r.slice(0, r.l);
  } else {
    return r;
  }
}
function Mh(e) {
  var t = Tt(e);
  var r = dr(e);
  return [t, r, "str"];
}
function Bh(e, t, r) {
  var a = e.v == null ? "" : String(e.v);
  if (r == null) {
    r = I(8 + a.length * 4);
  }
  Et(t, r);
  er(a, r);
  if (r.length > r.l) {
    return r.slice(0, r.l);
  } else {
    return r;
  }
}
function bh(e, t, r) {
  var a = e.l + t;
  var n = Lr(e);
  n.r = r["!row"];
  var s = e.read_shift(1);
  var i = [n, s, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var f = Qa(e, a - e.l, r);
    i[3] = Mt(f, null, n, r.supbooks, r);
  } else {
    e.l = a;
  }
  return i;
}
function Uh(e, t, r) {
  var a = e.l + t;
  var n = Lr(e);
  n.r = r["!row"];
  var s = e.read_shift(1);
  var i = [n, s, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var f = Qa(e, a - e.l, r);
    i[3] = Mt(f, null, n, r.supbooks, r);
  } else {
    e.l = a;
  }
  return i;
}
function Wh(e, t, r) {
  var a = e.l + t;
  var n = Lr(e);
  n.r = r["!row"];
  var s = Ht(e);
  var i = [n, s, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var f = Qa(e, a - e.l, r);
    i[3] = Mt(f, null, n, r.supbooks, r);
  } else {
    e.l = a;
  }
  return i;
}
function Hh(e, t, r) {
  var a = e.l + t;
  var n = Lr(e);
  n.r = r["!row"];
  var s = dr(e);
  var i = [n, s, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var f = Qa(e, a - e.l, r);
    i[3] = Mt(f, null, n, r.supbooks, r);
  } else {
    e.l = a;
  }
  return i;
}
var Gh = St;
var Xh = Wt;
function Vh(e, t) {
  if (t == null) {
    t = I(4);
  }
  t.write_shift(4, e);
  return t;
}
function $h(e, t) {
  var r = e.l + t;
  var a = St(e);
  var n = ja(e);
  var s = dr(e);
  var i = dr(e);
  var f = dr(e);
  e.l = r;
  var o = {
    rfx: a,
    relId: n,
    loc: s,
    display: f
  };
  if (i) {
    o.Tooltip = i;
  }
  return o;
}
function zh(e, t) {
  var r = I(50 + (e[1].Target.length + (e[1].Tooltip || "").length) * 4);
  Wt({
    s: We(e[0]),
    e: We(e[0])
  }, r);
  Hn("rId" + t, r);
  var a = e[1].Target.indexOf("#");
  var n = a == -1 ? "" : e[1].Target.slice(a + 1);
  er(n || "", r);
  er(e[1].Tooltip || "", r);
  er("", r);
  return r.slice(0, r.l);
}
function Kh() { }
function Yh(e, t, r) {
  var a = e.l + t;
  var n = Ti(e);
  var s = e.read_shift(1);
  var i = [n];
  i[2] = s;
  if (r.cellFormula) {
    var f = C1(e, a - e.l, r);
    i[1] = f;
  } else {
    e.l = a;
  }
  return i;
}
function jh(e, t, r) {
  var a = e.l + t;
  var n = St(e);
  var s = [n];
  if (r.cellFormula) {
    var i = O1(e, a - e.l, r);
    s[1] = i;
    e.l = a;
  } else {
    e.l = a;
  }
  return s;
}
function Zh(e, t, r) {
  if (r == null) {
    r = I(18);
  }
  var a = en(e, t);
  r.write_shift(-4, e);
  r.write_shift(-4, e);
  r.write_shift(4, (a.width || 10) * 256);
  r.write_shift(4, 0);
  var n = 0;
  if (t.hidden) {
    n |= 1;
  }
  if (typeof a.width == "number") {
    n |= 2;
  }
  if (t.level) {
    n |= t.level << 8;
  }
  r.write_shift(2, n);
  return r;
}
var rs = ["left", "right", "top", "bottom", "header", "footer"];
function Jh(e) {
  var t = {};
  rs.forEach(function (r) {
    t[r] = Ht(e);
  });
  return t;
}
function qh(e, t) {
  if (t == null) {
    t = I(48);
  }
  es(e);
  rs.forEach(function (r) {
    _t(e[r], t);
  });
  return t;
}
function Qh(e) {
  var t = e.read_shift(2);
  e.l += 28;
  return {
    RTL: t & 32
  };
}
function eu(e, t, r) {
  if (r == null) {
    r = I(30);
  }
  var a = 924;
  if ((((t || {}).Views || [])[0] || {}).RTL) {
    a |= 32;
  }
  r.write_shift(2, a);
  r.write_shift(4, 0);
  r.write_shift(4, 0);
  r.write_shift(4, 0);
  r.write_shift(1, 0);
  r.write_shift(1, 0);
  r.write_shift(2, 0);
  r.write_shift(2, 100);
  r.write_shift(2, 0);
  r.write_shift(2, 0);
  r.write_shift(2, 0);
  r.write_shift(4, 0);
  return r;
}
function ru(e) {
  var t = I(24);
  t.write_shift(4, 4);
  t.write_shift(4, 1);
  Wt(e, t);
  return t;
}
function tu(e, t) {
  if (t == null) {
    t = I(66);
  }
  t.write_shift(2, e.password ? bi(e.password) : 0);
  t.write_shift(4, 1);
  [["objects", false], ["scenarios", false], ["formatCells", true], ["formatColumns", true], ["formatRows", true], ["insertColumns", true], ["insertRows", true], ["insertHyperlinks", true], ["deleteColumns", true], ["deleteRows", true], ["selectLockedCells", false], ["sort", true], ["autoFilter", true], ["pivotTables", true], ["selectUnlockedCells", false]].forEach(function (r) {
    if (r[1]) {
      t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0);
    } else {
      t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
    }
  });
  return t;
}
function au() { }
function nu() { }
function iu(e, t, r, a, n, s, i, f) {
  var o = {
    r,
    c: a
  };
  if (t.c) {
    s["!comments"].push([Ge(o), t.c]);
  }
  if (t.v === undefined) {
    return false;
  }
  var l = "";
  switch (t.t) {
    case "b":
      l = t.v ? "1" : "0";
      break;
    case "d":
      t = pr(t);
      t.z = t.z || Me[14];
      t.v = fr(Fr(t.v, f), f);
      t.t = "n";
      break;
    case "n":
    case "e":
      l = "" + t.v;
      break;
    default:
      l = t.v;
      break;
  }
  o.s = ot(n.cellXfs, t, n);
  if (t.l) {
    s["!links"].push([Ge(o), t.l]);
  }
  switch (t.t) {
    case "s":
    case "str":
      if (n.bookSST) {
        l = zn(n.Strings, t.v == null ? "" : String(t.v), n.revStrings);
        o.t = "s";
        o.v = l;
        if (i) {
          G(e, 18, Ah(t, o));
        } else {
          G(e, 7, Eh(t, o));
        }
      } else {
        o.t = "str";
        if (i) {
          G(e, 17, Bh(t, o));
        } else {
          G(e, 6, Lh(t, o));
        }
      }
      return true;
    case "n":
      if (t.v == (t.v | 0) && t.v > -1000 && t.v < 1000) {
        if (i) {
          G(e, 13, Ih(t, o));
        } else {
          G(e, 2, Dh(t, o));
        }
      } else if (isFinite(t.v)) {
        if (i) {
          G(e, 16, kh(t, o));
        } else {
          G(e, 5, yh(t, o));
        }
      } else {
        o.t = "e";
        if (isNaN(t.v)) {
          if (i) {
            G(e, 14, dn({
              v: 36
            }, o));
          } else {
            G(e, 3, xn({
              v: 36
            }, o));
          }
        } else if (i) {
          G(e, 14, dn({
            v: 7
          }, o));
        } else {
          G(e, 3, xn({
            v: 7
          }, o));
        }
      }
      return true;
    case "b":
      o.t = "b";
      if (i) {
        G(e, 15, _h(t, o));
      } else {
        G(e, 4, mh(t, o));
      }
      return true;
    case "e":
      o.t = "e";
      if (i) {
        G(e, 14, dn(t, o));
      } else {
        G(e, 3, xn(t, o));
      }
      return true;
  }
  if (i) {
    G(e, 12, dh(t, o));
  } else {
    G(e, 1, uh(t, o));
  }
  return true;
}
function su(e, t, r, a, n) {
  var s = Be(t["!ref"] || "A1");
  var i = "";
  var f = [];
  var o = (((n || {}).Workbook || {}).WBProps || {}).date1904;
  G(e, 145);
  var l = t["!data"] != null;
  var c = l ? t["!data"][s.s.r] : [];
  var x = s.e.r;
  if (t["!rows"]) {
    x = Math.max(s.e.r, t["!rows"].length - 1);
  }
  for (var h = s.s.r; h <= x; ++h) {
    i = Ne(h);
    if (l) {
      c = t["!data"][h];
    }
    ih(e, t, s, h);
    if (!l || !!c) {
      var u = false;
      if (h <= s.e.r) {
        for (var p = s.s.c; p <= s.e.c; ++p) {
          if (h === s.s.r) {
            f[p] = Ie(p);
          }
          var g = l ? c[p] : t[f[p] + i];
          if (!g) {
            u = false;
            continue;
          }
          u = iu(e, g, h, p, a, t, u, o);
        }
      }
    }
  }
  G(e, 146);
}
function fu(e, t) {
  if (!!t && !!t["!merges"]) {
    G(e, 177, Vh(t["!merges"].length));
    t["!merges"].forEach(function (r) {
      G(e, 176, Xh(r));
    });
    G(e, 178);
  }
}
function ou(e, t) {
  if (!!t && !!t["!cols"]) {
    G(e, 390);
    t["!cols"].forEach(function (r, a) {
      if (r) {
        G(e, 60, Zh(a, r));
      }
    });
    G(e, 391);
  }
}
function lu(e, t) {
  if (!!t && !!t["!ref"]) {
    G(e, 648);
    G(e, 649, ru(Be(t["!ref"])));
    G(e, 650);
  }
}
function cu(e, t, r) {
  t["!links"].forEach(function (a) {
    if (a[1].Target) {
      var n = ke(r, -1, a[1].Target.replace(/#[\s\S]*$/, ""), Ae.HLINK);
      G(e, 494, zh(a, n));
    }
  });
  delete t["!links"];
}
function hu(e, t, r, a) {
  if (t["!comments"].length > 0) {
    var n = ke(a, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", Ae.VML);
    G(e, 551, Hn("rId" + n));
    t["!legacy"] = n;
  }
}
function uu(e, t, r, a) {
  if (t["!autofilter"]) {
    var n = t["!autofilter"];
    var s = typeof n.ref == "string" ? n.ref : Je(n.ref);
    r.Workbook ||= {
      Sheets: []
    };
    r.Workbook.Names ||= [];
    var i = r.Workbook.Names;
    var f = sr(s);
    if (f.s.r == f.e.r) {
      f.e.r = sr(t["!ref"]).e.r;
      s = Je(f);
    }
    for (var o = 0; o < i.length; ++o) {
      var l = i[o];
      if (l.Name == "_xlnm._FilterDatabase" && l.Sheet == a) {
        l.Ref = aa(r.SheetNames[a]) + "!" + ta(s);
        break;
      }
    }
    if (o == i.length) {
      i.push({
        Name: "_xlnm._FilterDatabase",
        Sheet: a,
        Ref: aa(r.SheetNames[a]) + "!" + ta(s)
      });
    }
    G(e, 161, Wt(Be(s)));
    G(e, 162);
  }
}
function xu(e, t, r) {
  G(e, 133);
  G(e, 137, eu(t, r));
  G(e, 138);
  G(e, 134);
}
function du(e, t) {
  if (t["!protect"]) {
    G(e, 535, tu(t["!protect"]));
  }
}
function pu(e, t, r, a) {
  var n = xr();
  var s = r.SheetNames[e];
  var i = r.Sheets[s] || {};
  var f = s;
  try {
    if (r && r.Workbook) {
      f = r.Workbook.Sheets[e].CodeName || f;
    }
  } catch { }
  var o = Be(i["!ref"] || "A1");
  if (o.e.c > 16383 || o.e.r > 1048575) {
    if (t.WTF) {
      throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    }
    o.e.c = Math.min(o.e.c, 16383);
    o.e.r = Math.min(o.e.c, 1048575);
  }
  i["!links"] = [];
  i["!comments"] = [];
  G(n, 129);
  if (r.vbaraw || i["!outline"]) {
    G(n, 147, ch(f, i["!outline"]));
  }
  G(n, 148, fh(o));
  xu(n, i, r.Workbook);
  ou(n, i);
  su(n, i, e, t, r);
  du(n, i);
  uu(n, i, r, e);
  fu(n, i);
  cu(n, i, a);
  if (i["!margins"]) {
    G(n, 476, qh(i["!margins"]));
  }
  if (!t || t.ignoreEC || t.ignoreEC == null) {
    lu(n, i);
  }
  hu(n, i, e, a);
  G(n, 130);
  return n.end();
}
function mu(e, t) {
  e.l += 10;
  var r = dr(e);
  return {
    name: r
  };
}
var vu = [["allowRefreshQuery", false, "bool"], ["autoCompressPictures", true, "bool"], ["backupFile", false, "bool"], ["checkCompatibility", false, "bool"], ["CodeName", ""], ["date1904", false, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", false, "bool"], ["hidePivotFieldList", false, "bool"], ["promptedSolutions", false, "bool"], ["publishItems", false, "bool"], ["refreshAllConnections", false, "bool"], ["saveExternalLinkValues", true, "bool"], ["showBorderUnselectedTables", true, "bool"], ["showInkAnnotation", true, "bool"], ["showObjects", "all"], ["showPivotChartFilter", false, "bool"], ["updateLinks", "userSet"]];
function _u(e) {
  if (!e.Workbook || !e.Workbook.WBProps) {
    return "false";
  } else if (Nf(e.Workbook.WBProps.date1904)) {
    return "true";
  } else {
    return "false";
  }
}
var gu = ":][*?/\\".split("");
function ts(e, t) {
  try {
    if (e == "") {
      throw new Error("Sheet name cannot be blank");
    }
    if (e.length > 31) {
      throw new Error("Sheet name cannot exceed 31 chars");
    }
    if (e.charCodeAt(0) == 39 || e.charCodeAt(e.length - 1) == 39) {
      throw new Error("Sheet name cannot start or end with apostrophe (')");
    }
    if (e.toLowerCase() == "history") {
      throw new Error("Sheet name cannot be 'History'");
    }
    gu.forEach(function (r) {
      if (e.indexOf(r) != -1) {
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
      }
    });
  } catch (r) {
    throw r;
  }
  return true;
}
function wu(e, t, r) {
  e.forEach(function (a, n) {
    ts(a);
    for (var s = 0; s < n; ++s) {
      if (a == e[s]) {
        throw new Error("Duplicate Sheet Name: " + a);
      }
    }
    if (r) {
      var i = t && t[n] && t[n].CodeName || a;
      if (i.charCodeAt(0) == 95 && i.length > 22) {
        throw new Error("Bad Code Name: Worksheet" + i);
      }
    }
  });
}
function Tu(e) {
  if (!e || !e.SheetNames || !e.Sheets) {
    throw new Error("Invalid Workbook");
  }
  if (!e.SheetNames.length) {
    throw new Error("Workbook is empty");
  }
  var t = e.Workbook && e.Workbook.Sheets || [];
  wu(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r) {
    V1(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
  }
  e.SheetNames.forEach(function (a, n) {
    var s = e.Sheets[a];
    if (!!s && !!s["!autofilter"]) {
      var i;
      e.Workbook ||= {};
      e.Workbook.Names ||= [];
      e.Workbook.Names.forEach(function (o) {
        if (o.Name == "_xlnm._FilterDatabase" && o.Sheet == n) {
          i = o;
        }
      });
      var f = aa(a) + "!" + ta(s["!autofilter"].ref);
      if (i) {
        i.Ref = f;
      } else {
        e.Workbook.Names.push({
          Name: "_xlnm._FilterDatabase",
          Sheet: n,
          Ref: f
        });
      }
    }
  });
}
function Eu(e) {
  var t = [qe];
  t[t.length] = J("workbook", null, {
    xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "xmlns:r": ar.r
  });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0;
  var a = {
    codeName: "ThisWorkbook"
  };
  if (e.Workbook && e.Workbook.WBProps) {
    vu.forEach(function (f) {
      if (e.Workbook.WBProps[f[0]] != null && e.Workbook.WBProps[f[0]] != f[1]) {
        a[f[0]] = e.Workbook.WBProps[f[0]];
      }
    });
    if (e.Workbook.WBProps.CodeName) {
      a.codeName = e.Workbook.WBProps.CodeName;
      delete a.CodeName;
    }
  }
  t[t.length] = J("workbookPr", null, a);
  var n = e.Workbook && e.Workbook.Sheets || [];
  var s = 0;
  if (n && n[0] && n[0].Hidden) {
    t[t.length] = "<bookViews>";
    s = 0;
    for (; s != e.SheetNames.length && !!n[s] && !!n[s].Hidden; ++s);
    if (s == e.SheetNames.length) {
      s = 0;
    }
    t[t.length] = "<workbookView firstSheet=\"" + s + "\" activeTab=\"" + s + "\"/>";
    t[t.length] = "</bookViews>";
  }
  t[t.length] = "<sheets>";
  s = 0;
  for (; s != e.SheetNames.length; ++s) {
    var i = {
      name: me(e.SheetNames[s].slice(0, 31))
    };
    i.sheetId = "" + (s + 1);
    i["r:id"] = "rId" + (s + 1);
    if (n[s]) {
      switch (n[s].Hidden) {
        case 1:
          i.state = "hidden";
          break;
        case 2:
          i.state = "veryHidden";
          break;
      }
    }
    t[t.length] = J("sheet", null, i);
  }
  t[t.length] = "</sheets>";
  if (r) {
    t[t.length] = "<definedNames>";
    if (e.Workbook && e.Workbook.Names) {
      e.Workbook.Names.forEach(function (f) {
        var o = {
          name: f.Name
        };
        if (f.Comment) {
          o.comment = f.Comment;
        }
        if (f.Sheet != null) {
          o.localSheetId = "" + f.Sheet;
        }
        if (f.Hidden) {
          o.hidden = "1";
        }
        if (f.Ref) {
          t[t.length] = J("definedName", me(f.Ref), o);
        }
      });
    }
    t[t.length] = "</definedNames>";
  }
  if (t.length > 2) {
    t[t.length] = "</workbook>";
    t[1] = t[1].replace("/>", ">");
  }
  return t.join("");
}
function Su(e, t) {
  var r = {};
  r.Hidden = e.read_shift(4);
  r.iTabID = e.read_shift(4);
  r.strRelID = En(e);
  r.name = dr(e);
  return r;
}
function Au(e, t) {
  t ||= I(127);
  t.write_shift(4, e.Hidden);
  t.write_shift(4, e.iTabID);
  Hn(e.strRelID, t);
  er(e.name.slice(0, 31), t);
  if (t.length > t.l) {
    return t.slice(0, t.l);
  } else {
    return t;
  }
}
function Fu(e, t) {
  var r = {};
  var a = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var n = t > 8 ? dr(e) : "";
  if (n.length > 0) {
    r.CodeName = n;
  }
  r.autoCompressPictures = !!(a & 65536);
  r.backupFile = !!(a & 64);
  r.checkCompatibility = !!(a & 4096);
  r.date1904 = !!(a & 1);
  r.filterPrivacy = !!(a & 8);
  r.hidePivotFieldList = !!(a & 1024);
  r.promptedSolutions = !!(a & 16);
  r.publishItems = !!(a & 2048);
  r.refreshAllConnections = !!(a & 262144);
  r.saveExternalLinkValues = !!(a & 128);
  r.showBorderUnselectedTables = !!(a & 4);
  r.showInkAnnotation = !!(a & 32);
  r.showObjects = ["all", "placeholders", "none"][a >> 13 & 3];
  r.showPivotChartFilter = !!(a & 32768);
  r.updateLinks = ["userSet", "never", "always"][a >> 8 & 3];
  return r;
}
function yu(e, t) {
  t ||= I(72);
  var r = 0;
  if (e) {
    if (e.date1904) {
      r |= 1;
    }
    if (e.filterPrivacy) {
      r |= 8;
    }
  }
  t.write_shift(4, r);
  t.write_shift(4, 0);
  gi(e && e.CodeName || "ThisWorkbook", t);
  return t.slice(0, t.l);
}
function Cu(e, t, r) {
  var a = e.l + t;
  var n = e.read_shift(4);
  e.l += 1;
  var s = e.read_shift(4);
  var i = ao(e);
  var f;
  var o = "";
  try {
    f = k1(e, 0, r);
    try {
      o = ja(e);
    } catch { }
  } catch {
    console.error("Could not parse defined name " + i);
  }
  if (n & 32) {
    i = "_xlnm." + i;
  }
  e.l = a;
  var l = {
    Name: i,
    Ptg: f,
    Flags: n
  };
  if (s < 268435455) {
    l.Sheet = s;
  }
  if (o) {
    l.Comment = o;
  }
  return l;
}
function ku(e, t) {
  var r = I(9);
  var a = 0;
  var n = e.Name;
  if (mo.indexOf(n) > -1) {
    a |= 32;
    n = n.slice(6);
  }
  r.write_shift(4, a);
  r.write_shift(1, 0);
  r.write_shift(4, e.Sheet == null ? 4294967295 : e.Sheet);
  var s = [r, er(n), W1(e.Ref, t)];
  if (e.Comment) {
    s.push(na(e.Comment));
  } else {
    var i = I(4);
    i.write_shift(4, 4294967295);
    s.push(i);
  }
  return je(s);
}
function Ou(e, t) {
  G(e, 143);
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var a = t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0;
    var n = {
      Hidden: a,
      iTabID: r + 1,
      strRelID: "rId" + (r + 1),
      name: t.SheetNames[r]
    };
    G(e, 156, Au(n));
  }
  G(e, 144);
}
function Du(e, t) {
  t ||= I(127);
  for (var r = 0; r != 4; ++r) {
    t.write_shift(4, 0);
  }
  er("SheetJS", t);
  er(Fa.version, t);
  er(Fa.version, t);
  er("7262", t);
  if (t.length > t.l) {
    return t.slice(0, t.l);
  } else {
    return t;
  }
}
function Ru(e, t) {
  t ||= I(29);
  t.write_shift(-4, 0);
  t.write_shift(-4, 460);
  t.write_shift(4, 28800);
  t.write_shift(4, 17600);
  t.write_shift(4, 500);
  t.write_shift(4, e);
  t.write_shift(4, e);
  var r = 120;
  t.write_shift(1, r);
  if (t.length > t.l) {
    return t.slice(0, t.l);
  } else {
    return t;
  }
}
function Iu(e, t) {
  if (!!t.Workbook && !!t.Workbook.Sheets) {
    for (var r = t.Workbook.Sheets, a = 0, n = -1, s = -1; a < r.length; ++a) {
      if (!r[a] || !r[a].Hidden && n == -1) {
        n = a;
      } else if (r[a].Hidden == 1 && s == -1) {
        s = a;
      }
    }
    if (!(s > n)) {
      G(e, 135);
      G(e, 158, Ru(n));
      G(e, 136);
    }
  }
}
function Nu(e, t) {
  if (!!t.Workbook && !!t.Workbook.Names) {
    t.Workbook.Names.forEach(function (r) {
      try {
        if (r.Flags & 14) {
          return;
        }
        G(e, 39, ku(r, t));
      } catch {
        console.error("Could not serialize defined name " + JSON.stringify(r));
      }
    });
  }
}
function Pu(e) {
  var t = e.SheetNames.length;
  var r = I(t * 12 + 28);
  r.write_shift(4, t + 2);
  r.write_shift(4, 0);
  r.write_shift(4, -2);
  r.write_shift(4, -2);
  r.write_shift(4, 0);
  r.write_shift(4, -1);
  r.write_shift(4, -1);
  for (var a = 0; a < t; ++a) {
    r.write_shift(4, 0);
    r.write_shift(4, a);
    r.write_shift(4, a);
  }
  return r;
}
function Lu(e, t) {
  G(e, 353);
  G(e, 357);
  G(e, 362, Pu(t));
  G(e, 354);
}
function Mu(e, t) {
  var r = xr();
  G(r, 131);
  G(r, 128, Du());
  G(r, 153, yu(e.Workbook && e.Workbook.WBProps || null));
  Iu(r, e);
  Ou(r, e);
  Lu(r, e);
  if ((e.Workbook || {}).Names) {
    Nu(r, e);
  }
  G(r, 132);
  return r.end();
}
function Bu(e, t) {
  var r = [];
  if (e.Props) {
    r.push(To(e.Props, t));
  }
  if (e.Custprops) {
    r.push(Eo(e.Props, e.Custprops));
  }
  return r.join("");
}
function bu(e) {
  if ((((e || {}).Workbook || {}).WBProps || {}).date1904) {
    return "<ExcelWorkbook xmlns=\"urn:schemas-microsoft-com:office:excel\"><Date1904/></ExcelWorkbook>";
  } else {
    return "";
  }
}
function Uu(e, t) {
  var r = ["<Style ss:ID=\"Default\" ss:Name=\"Normal\"><NumberFormat/></Style>"];
  t.cellXfs.forEach(function (a, n) {
    var s = [];
    s.push(J("NumberFormat", null, {
      "ss:Format": me(Me[a.numFmtId])
    }));
    var i = {
      "ss:ID": "s" + (21 + n)
    };
    r.push(J("Style", s.join(""), i));
  });
  return J("Styles", r.join(""));
}
function as(e) {
  return J("NamedRange", null, {
    "ss:Name": e.Name.slice(0, 6) == "_xlnm." ? e.Name.slice(6) : e.Name,
    "ss:RefersTo": "=" + Ja(e.Ref, {
      r: 0,
      c: 0
    })
  });
}
function Wu(e) {
  if (!((e || {}).Workbook || {}).Names) {
    return "";
  }
  for (var t = e.Workbook.Names, r = [], a = 0; a < t.length; ++a) {
    var n = t[a];
    if (n.Sheet == null) {
      if (!n.Name.match(/^_xlfn\./)) {
        r.push(as(n));
      }
    }
  }
  return J("Names", r.join(""));
}
function Hu(e, t, r, a) {
  if (!e || !((a || {}).Workbook || {}).Names) {
    return "";
  }
  for (var n = a.Workbook.Names, s = [], i = 0; i < n.length; ++i) {
    var f = n[i];
    if (f.Sheet == r) {
      if (!f.Name.match(/^_xlfn\./)) {
        s.push(as(f));
      }
    }
  }
  return s.join("");
}
function Gu(e, t, r, a) {
  if (!e) {
    return "";
  }
  var n = [];
  if (e["!margins"]) {
    n.push("<PageSetup>");
    if (e["!margins"].header) {
      n.push(J("Header", null, {
        "x:Margin": e["!margins"].header
      }));
    }
    if (e["!margins"].footer) {
      n.push(J("Footer", null, {
        "x:Margin": e["!margins"].footer
      }));
    }
    n.push(J("PageMargins", null, {
      "x:Bottom": e["!margins"].bottom || "0.75",
      "x:Left": e["!margins"].left || "0.7",
      "x:Right": e["!margins"].right || "0.7",
      "x:Top": e["!margins"].top || "0.75"
    }));
    n.push("</PageSetup>");
  }
  if (a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[r]) {
    if (a.Workbook.Sheets[r].Hidden) {
      n.push(J("Visible", a.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
    } else {
      for (var s = 0; s < r && (!a.Workbook.Sheets[s] || !!a.Workbook.Sheets[s].Hidden); ++s);
      if (s == r) {
        n.push("<Selected/>");
      }
    }
  }
  if (((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL) {
    n.push("<DisplayRightToLeft/>");
  }
  if (e["!protect"]) {
    n.push(ir("ProtectContents", "True"));
    if (e["!protect"].objects) {
      n.push(ir("ProtectObjects", "True"));
    }
    if (e["!protect"].scenarios) {
      n.push(ir("ProtectScenarios", "True"));
    }
    if (e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells) {
      n.push(ir("EnableSelection", "NoSelection"));
    } else if (e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells) {
      n.push(ir("EnableSelection", "UnlockedCells"));
    }
    [["formatCells", "AllowFormatCells"], ["formatColumns", "AllowSizeCols"], ["formatRows", "AllowSizeRows"], ["insertColumns", "AllowInsertCols"], ["insertRows", "AllowInsertRows"], ["insertHyperlinks", "AllowInsertHyperlinks"], ["deleteColumns", "AllowDeleteCols"], ["deleteRows", "AllowDeleteRows"], ["sort", "AllowSort"], ["autoFilter", "AllowFilter"], ["pivotTables", "AllowUsePivotTables"]].forEach(function (i) {
      if (e["!protect"][i[0]]) {
        n.push("<" + i[1] + "/>");
      }
    });
  }
  if (n.length == 0) {
    return "";
  } else {
    return J("WorksheetOptions", n.join(""), {
      xmlns: Or.x
    });
  }
}
function Xu(e) {
  return e.map(function (t) {
    var r = If(t.t || "");
    var a = J("ss:Data", r, {
      xmlns: "http://www.w3.org/TR/REC-html40"
    });
    var n = {};
    if (t.a) {
      n["ss:Author"] = t.a;
    }
    if (!e.hidden) {
      n["ss:ShowAlways"] = "1";
    }
    return J("Comment", a, n);
  }).join("");
}
function Vu(e, t, r, a, n, s, i) {
  if (!e || e.v == null && e.f == null) {
    return "";
  }
  var f = {};
  if (e.f) {
    f["ss:Formula"] = "=" + me(Ja(e.f, i));
  }
  if (e.F && e.F.slice(0, t.length) == t) {
    var o = We(e.F.slice(t.length + 1));
    f["ss:ArrayRange"] = "RC:R" + (o.r == i.r ? "" : "[" + (o.r - i.r) + "]") + "C" + (o.c == i.c ? "" : "[" + (o.c - i.c) + "]");
  }
  if (e.l && e.l.Target) {
    f["ss:HRef"] = me(e.l.Target);
    if (e.l.Tooltip) {
      f["x:HRefScreenTip"] = me(e.l.Tooltip);
    }
  }
  if (r["!merges"]) {
    for (var l = r["!merges"], c = 0; c != l.length; ++c) {
      if (l[c].s.c == i.c && l[c].s.r == i.r) {
        if (l[c].e.c > l[c].s.c) {
          f["ss:MergeAcross"] = l[c].e.c - l[c].s.c;
        }
        if (l[c].e.r > l[c].s.r) {
          f["ss:MergeDown"] = l[c].e.r - l[c].s.r;
        }
      }
    }
  }
  var x = "";
  var h = "";
  switch (e.t) {
    case "z":
      if (!a.sheetStubs) {
        return "";
      }
      break;
    case "n":
      if (isFinite(e.v)) {
        x = "Number";
        h = String(e.v);
      } else {
        x = "Error";
        h = Er[isNaN(e.v) ? 36 : 7];
      }
      break;
    case "b":
      x = "Boolean";
      h = e.v ? "1" : "0";
      break;
    case "e":
      x = "Error";
      h = Er[e.v];
      break;
    case "d":
      x = "DateTime";
      h = new Date(e.v).toISOString();
      if (e.z == null) {
        e.z = e.z || Me[14];
      }
      break;
    case "s":
      x = "String";
      h = Rf(e.v || "");
      break;
  }
  var u = ot(a.cellXfs, e, a);
  f["ss:StyleID"] = "s" + (21 + u);
  f["ss:Index"] = i.c + 1;
  var p = e.v != null ? h : "";
  var g = e.t == "z" ? "" : "<Data ss:Type=\"" + x + "\">" + p + "</Data>";
  if ((e.c || []).length > 0) {
    g += Xu(e.c);
  }
  return J("Cell", g, f);
}
function $u(e, t) {
  var r = "<Row ss:Index=\"" + (e + 1) + "\"";
  if (t) {
    if (t.hpt && !t.hpx) {
      t.hpx = Wi(t.hpt);
    }
    if (t.hpx) {
      r += " ss:AutoFitHeight=\"0\" ss:Height=\"" + t.hpx + "\"";
    }
    if (t.hidden) {
      r += " ss:Hidden=\"1\"";
    }
  }
  return r + ">";
}
function zu(e, t, r, a) {
  if (!e["!ref"]) {
    return "";
  }
  var n = Be(e["!ref"]);
  var s = e["!merges"] || [];
  var i = 0;
  var f = [];
  if (e["!cols"]) {
    e["!cols"].forEach(function (m, v) {
      Vn(m);
      var C = !!m.width;
      var F = en(v, m);
      var U = {
        "ss:Index": v + 1
      };
      if (C) {
        U["ss:Width"] = Ma(F.width);
      }
      if (m.hidden) {
        U["ss:Hidden"] = "1";
      }
      f.push(J("Column", null, U));
    });
  }
  var o = e["!data"] != null;
  var l = {
    r: 0,
    c: 0
  };
  for (var c = n.s.r; c <= n.e.r; ++c) {
    var x = [$u(c, (e["!rows"] || [])[c])];
    l.r = c;
    for (var h = n.s.c; h <= n.e.c; ++h) {
      l.c = h;
      var u = false;
      for (i = 0; i != s.length; ++i) {
        if (!(s[i].s.c > h) && !(s[i].s.r > c) && !(s[i].e.c < h) && !(s[i].e.r < c)) {
          if (s[i].s.c != h || s[i].s.r != c) {
            u = true;
          }
          break;
        }
      }
      if (!u) {
        var p = Ie(h) + Ne(c);
        var g = o ? (e["!data"][c] || [])[h] : e[p];
        x.push(Vu(g, p, e, t, r, a, l));
      }
    }
    x.push("</Row>");
    if (x.length > 2) {
      f.push(x.join(""));
    }
  }
  return f.join("");
}
function Ku(e, t, r) {
  var a = [];
  var n = r.SheetNames[e];
  var s = r.Sheets[n];
  var i = s ? Hu(s, t, e, r) : "";
  if (i.length > 0) {
    a.push("<Names>" + i + "</Names>");
  }
  i = s ? zu(s, t, e, r) : "";
  if (i.length > 0) {
    a.push("<Table>" + i + "</Table>");
  }
  a.push(Gu(s, t, e, r));
  if (s && s["!autofilter"]) {
    a.push("<AutoFilter x:Range=\"" + Ja(ta(s["!autofilter"].ref), {
      r: 0,
      c: 0
    }) + "\" xmlns=\"urn:schemas-microsoft-com:office:excel\"></AutoFilter>");
  }
  return a.join("");
}
function Yu(e, t) {
  t ||= {};
  e.SSF ||= pr(Me);
  if (e.SSF) {
    za();
    $a(e.SSF);
    t.revssf = Ka(e.SSF);
    t.revssf[e.SSF[65535]] = 0;
    t.ssf = e.SSF;
    t.cellXfs = [];
    ot(t.cellXfs, {}, {
      revssf: {
        General: 0
      }
    });
  }
  var r = [];
  r.push(Bu(e, t));
  r.push(bu(e));
  r.push("");
  r.push(Wu(e));
  for (var a = 0; a < e.SheetNames.length; ++a) {
    r.push(J("Worksheet", Ku(a, t, e), {
      "ss:Name": me(e.SheetNames[a])
    }));
  }
  r[2] = Uu(e, t);
  return qe + J("Workbook", r.join(""), {
    xmlns: Or.ss,
    "xmlns:o": Or.o,
    "xmlns:x": Or.x,
    "xmlns:ss": Or.ss,
    "xmlns:dt": Or.dt,
    "xmlns:html": Or.html
  });
}
var pn = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function ju(e, t) {
  var r = [];
  var a = [];
  var n = [];
  var s = 0;
  var i;
  var f = c0(T0, "n");
  var o = c0(E0, "n");
  if (e.Props) {
    i = Ze(e.Props);
    s = 0;
    for (; s < i.length; ++s) {
      (Object.prototype.hasOwnProperty.call(f, i[s]) ? r : Object.prototype.hasOwnProperty.call(o, i[s]) ? a : n).push([i[s], e.Props[i[s]]]);
    }
  }
  if (e.Custprops) {
    i = Ze(e.Custprops);
    s = 0;
    for (; s < i.length; ++s) {
      if (!Object.prototype.hasOwnProperty.call(e.Props || {}, i[s])) {
        (Object.prototype.hasOwnProperty.call(f, i[s]) ? r : Object.prototype.hasOwnProperty.call(o, i[s]) ? a : n).push([i[s], e.Custprops[i[s]]]);
      }
    }
  }
  var l = [];
  for (s = 0; s < n.length; ++s) {
    if (!(Ri.indexOf(n[s][0]) > -1) && !(ki.indexOf(n[s][0]) > -1)) {
      if (n[s][1] != null) {
        l.push(n[s]);
      }
    }
  }
  if (a.length) {
    Pe.utils.cfb_add(t, "/SummaryInformation", C0(a, pn.SI, o, E0));
  }
  if (r.length || l.length) {
    Pe.utils.cfb_add(t, "/DocumentSummaryInformation", C0(r, pn.DSI, f, T0, l.length ? l : null, pn.UDI));
  }
}
function Zu(e, t) {
  var r = t || {};
  var a = Pe.utils.cfb_new({
    root: "R"
  });
  var n = "/Workbook";
  switch (r.bookType || "xls") {
    case "xls":
      r.bookType = "biff8";
    case "xla":
      r.bookType ||= "xla";
    case "biff8":
      n = "/Workbook";
      r.biff = 8;
      break;
    case "biff5":
      n = "/Book";
      r.biff = 5;
      break;
    default:
      throw new Error("invalid type " + r.bookType + " for XLS CFB");
  }
  Pe.utils.cfb_add(a, n, is(e, r));
  if (r.biff == 8 && (e.Props || e.Custprops)) {
    ju(e, a);
  }
  if (r.biff == 8 && e.vbaraw) {
    sc(a, Pe.read(e.vbaraw, {
      type: typeof e.vbaraw == "string" ? "binary" : "buffer"
    }));
  }
  return a;
}
var Ju = {
  0: {
    f: ah
  },
  1: {
    f: hh
  },
  2: {
    f: Oh
  },
  3: {
    f: gh
  },
  4: {
    f: ph
  },
  5: {
    f: Fh
  },
  6: {
    f: Ph
  },
  7: {
    f: Th
  },
  8: {
    f: Hh
  },
  9: {
    f: Wh
  },
  10: {
    f: bh
  },
  11: {
    f: Uh
  },
  12: {
    f: xh
  },
  13: {
    f: Rh
  },
  14: {
    f: wh
  },
  15: {
    f: vh
  },
  16: {
    f: Ch
  },
  17: {
    f: Mh
  },
  18: {
    f: Sh
  },
  19: {
    f: Wn
  },
  20: {},
  21: {},
  22: {},
  23: {},
  24: {},
  25: {},
  26: {},
  27: {},
  28: {},
  29: {},
  30: {},
  31: {},
  32: {},
  33: {},
  34: {},
  35: {
    T: 1
  },
  36: {
    T: -1
  },
  37: {
    T: 1
  },
  38: {
    T: -1
  },
  39: {
    f: Cu
  },
  40: {},
  42: {},
  43: {
    f: Fl
  },
  44: {
    f: Sl
  },
  45: {
    f: kl
  },
  46: {
    f: Dl
  },
  47: {
    f: Ol
  },
  48: {},
  49: {
    f: Zf
  },
  50: {},
  51: {
    f: zl
  },
  52: {
    T: 1
  },
  53: {
    T: -1
  },
  54: {
    T: 1
  },
  55: {
    T: -1
  },
  56: {
    T: 1
  },
  57: {
    T: -1
  },
  58: {},
  59: {},
  60: {
    f: rl
  },
  62: {
    f: Nh
  },
  63: {
    f: Ql
  },
  64: {
    f: au
  },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: {
    T: 1
  },
  130: {
    T: -1
  },
  131: {
    T: 1,
    f: $r,
    p: 0
  },
  132: {
    T: -1
  },
  133: {
    T: 1
  },
  134: {
    T: -1
  },
  135: {
    T: 1
  },
  136: {
    T: -1
  },
  137: {
    T: 1,
    f: Qh
  },
  138: {
    T: -1
  },
  139: {
    T: 1
  },
  140: {
    T: -1
  },
  141: {
    T: 1
  },
  142: {
    T: -1
  },
  143: {
    T: 1
  },
  144: {
    T: -1
  },
  145: {
    T: 1
  },
  146: {
    T: -1
  },
  147: {
    f: lh
  },
  148: {
    f: sh,
    p: 16
  },
  151: {
    f: Kh
  },
  152: {},
  153: {
    f: Fu
  },
  154: {},
  155: {},
  156: {
    f: Su
  },
  157: {},
  158: {},
  159: {
    T: 1,
    f: ul
  },
  160: {
    T: -1
  },
  161: {
    T: 1,
    f: St
  },
  162: {
    T: -1
  },
  163: {
    T: 1
  },
  164: {
    T: -1
  },
  165: {
    T: 1
  },
  166: {
    T: -1
  },
  167: {},
  168: {},
  169: {},
  170: {},
  171: {},
  172: {
    T: 1
  },
  173: {
    T: -1
  },
  174: {},
  175: {},
  176: {
    f: Gh
  },
  177: {
    T: 1
  },
  178: {
    T: -1
  },
  179: {
    T: 1
  },
  180: {
    T: -1
  },
  181: {
    T: 1
  },
  182: {
    T: -1
  },
  183: {
    T: 1
  },
  184: {
    T: -1
  },
  185: {
    T: 1
  },
  186: {
    T: -1
  },
  187: {
    T: 1
  },
  188: {
    T: -1
  },
  189: {
    T: 1
  },
  190: {
    T: -1
  },
  191: {
    T: 1
  },
  192: {
    T: -1
  },
  193: {
    T: 1
  },
  194: {
    T: -1
  },
  195: {
    T: 1
  },
  196: {
    T: -1
  },
  197: {
    T: 1
  },
  198: {
    T: -1
  },
  199: {
    T: 1
  },
  200: {
    T: -1
  },
  201: {
    T: 1
  },
  202: {
    T: -1
  },
  203: {
    T: 1
  },
  204: {
    T: -1
  },
  205: {
    T: 1
  },
  206: {
    T: -1
  },
  207: {
    T: 1
  },
  208: {
    T: -1
  },
  209: {
    T: 1
  },
  210: {
    T: -1
  },
  211: {
    T: 1
  },
  212: {
    T: -1
  },
  213: {
    T: 1
  },
  214: {
    T: -1
  },
  215: {
    T: 1
  },
  216: {
    T: -1
  },
  217: {
    T: 1
  },
  218: {
    T: -1
  },
  219: {
    T: 1
  },
  220: {
    T: -1
  },
  221: {
    T: 1
  },
  222: {
    T: -1
  },
  223: {
    T: 1
  },
  224: {
    T: -1
  },
  225: {
    T: 1
  },
  226: {
    T: -1
  },
  227: {
    T: 1
  },
  228: {
    T: -1
  },
  229: {
    T: 1
  },
  230: {
    T: -1
  },
  231: {
    T: 1
  },
  232: {
    T: -1
  },
  233: {
    T: 1
  },
  234: {
    T: -1
  },
  235: {
    T: 1
  },
  236: {
    T: -1
  },
  237: {
    T: 1
  },
  238: {
    T: -1
  },
  239: {
    T: 1
  },
  240: {
    T: -1
  },
  241: {
    T: 1
  },
  242: {
    T: -1
  },
  243: {
    T: 1
  },
  244: {
    T: -1
  },
  245: {
    T: 1
  },
  246: {
    T: -1
  },
  247: {
    T: 1
  },
  248: {
    T: -1
  },
  249: {
    T: 1
  },
  250: {
    T: -1
  },
  251: {
    T: 1
  },
  252: {
    T: -1
  },
  253: {
    T: 1
  },
  254: {
    T: -1
  },
  255: {
    T: 1
  },
  256: {
    T: -1
  },
  257: {
    T: 1
  },
  258: {
    T: -1
  },
  259: {
    T: 1
  },
  260: {
    T: -1
  },
  261: {
    T: 1
  },
  262: {
    T: -1
  },
  263: {
    T: 1
  },
  264: {
    T: -1
  },
  265: {
    T: 1
  },
  266: {
    T: -1
  },
  267: {
    T: 1
  },
  268: {
    T: -1
  },
  269: {
    T: 1
  },
  270: {
    T: -1
  },
  271: {
    T: 1
  },
  272: {
    T: -1
  },
  273: {
    T: 1
  },
  274: {
    T: -1
  },
  275: {
    T: 1
  },
  276: {
    T: -1
  },
  277: {},
  278: {
    T: 1
  },
  279: {
    T: -1
  },
  280: {
    T: 1
  },
  281: {
    T: -1
  },
  282: {
    T: 1
  },
  283: {
    T: 1
  },
  284: {
    T: -1
  },
  285: {
    T: 1
  },
  286: {
    T: -1
  },
  287: {
    T: 1
  },
  288: {
    T: -1
  },
  289: {
    T: 1
  },
  290: {
    T: -1
  },
  291: {
    T: 1
  },
  292: {
    T: -1
  },
  293: {
    T: 1
  },
  294: {
    T: -1
  },
  295: {
    T: 1
  },
  296: {
    T: -1
  },
  297: {
    T: 1
  },
  298: {
    T: -1
  },
  299: {
    T: 1
  },
  300: {
    T: -1
  },
  301: {
    T: 1
  },
  302: {
    T: -1
  },
  303: {
    T: 1
  },
  304: {
    T: -1
  },
  305: {
    T: 1
  },
  306: {
    T: -1
  },
  307: {
    T: 1
  },
  308: {
    T: -1
  },
  309: {
    T: 1
  },
  310: {
    T: -1
  },
  311: {
    T: 1
  },
  312: {
    T: -1
  },
  313: {
    T: -1
  },
  314: {
    T: 1
  },
  315: {
    T: -1
  },
  316: {
    T: 1
  },
  317: {
    T: -1
  },
  318: {
    T: 1
  },
  319: {
    T: -1
  },
  320: {
    T: 1
  },
  321: {
    T: -1
  },
  322: {
    T: 1
  },
  323: {
    T: -1
  },
  324: {
    T: 1
  },
  325: {
    T: -1
  },
  326: {
    T: 1
  },
  327: {
    T: -1
  },
  328: {
    T: 1
  },
  329: {
    T: -1
  },
  330: {
    T: 1
  },
  331: {
    T: -1
  },
  332: {
    T: 1
  },
  333: {
    T: -1
  },
  334: {
    T: 1
  },
  335: {
    f: Vl
  },
  336: {
    T: -1
  },
  337: {
    f: jl,
    T: 1
  },
  338: {
    T: -1
  },
  339: {
    T: 1
  },
  340: {
    T: -1
  },
  341: {
    T: 1
  },
  342: {
    T: -1
  },
  343: {
    T: 1
  },
  344: {
    T: -1
  },
  345: {
    T: 1
  },
  346: {
    T: -1
  },
  347: {
    T: 1
  },
  348: {
    T: -1
  },
  349: {
    T: 1
  },
  350: {
    T: -1
  },
  351: {},
  352: {},
  353: {
    T: 1
  },
  354: {
    T: -1
  },
  355: {
    f: En
  },
  357: {},
  358: {},
  359: {},
  360: {
    T: 1
  },
  361: {},
  362: {
    f: Zo
  },
  363: {},
  364: {},
  366: {},
  367: {},
  368: {},
  369: {},
  370: {},
  371: {},
  372: {
    T: 1
  },
  373: {
    T: -1
  },
  374: {
    T: 1
  },
  375: {
    T: -1
  },
  376: {
    T: 1
  },
  377: {
    T: -1
  },
  378: {
    T: 1
  },
  379: {
    T: -1
  },
  380: {
    T: 1
  },
  381: {
    T: -1
  },
  382: {
    T: 1
  },
  383: {
    T: -1
  },
  384: {
    T: 1
  },
  385: {
    T: -1
  },
  386: {
    T: 1
  },
  387: {
    T: -1
  },
  388: {
    T: 1
  },
  389: {
    T: -1
  },
  390: {
    T: 1
  },
  391: {
    T: -1
  },
  392: {
    T: 1
  },
  393: {
    T: -1
  },
  394: {
    T: 1
  },
  395: {
    T: -1
  },
  396: {},
  397: {},
  398: {},
  399: {},
  400: {},
  401: {
    T: 1
  },
  403: {},
  404: {},
  405: {},
  406: {},
  407: {},
  408: {},
  409: {},
  410: {},
  411: {},
  412: {},
  413: {},
  414: {},
  415: {},
  416: {},
  417: {},
  418: {},
  419: {},
  420: {},
  421: {},
  422: {
    T: 1
  },
  423: {
    T: 1
  },
  424: {
    T: -1
  },
  425: {
    T: -1
  },
  426: {
    f: Yh
  },
  427: {
    f: jh
  },
  428: {},
  429: {
    T: 1
  },
  430: {
    T: -1
  },
  431: {
    T: 1
  },
  432: {
    T: -1
  },
  433: {
    T: 1
  },
  434: {
    T: -1
  },
  435: {
    T: 1
  },
  436: {
    T: -1
  },
  437: {
    T: 1
  },
  438: {
    T: -1
  },
  439: {
    T: 1
  },
  440: {
    T: -1
  },
  441: {
    T: 1
  },
  442: {
    T: -1
  },
  443: {
    T: 1
  },
  444: {
    T: -1
  },
  445: {
    T: 1
  },
  446: {
    T: -1
  },
  447: {
    T: 1
  },
  448: {
    T: -1
  },
  449: {
    T: 1
  },
  450: {
    T: -1
  },
  451: {
    T: 1
  },
  452: {
    T: -1
  },
  453: {
    T: 1
  },
  454: {
    T: -1
  },
  455: {
    T: 1
  },
  456: {
    T: -1
  },
  457: {
    T: 1
  },
  458: {
    T: -1
  },
  459: {
    T: 1
  },
  460: {
    T: -1
  },
  461: {
    T: 1
  },
  462: {
    T: -1
  },
  463: {
    T: 1
  },
  464: {
    T: -1
  },
  465: {
    T: 1
  },
  466: {
    T: -1
  },
  467: {
    T: 1
  },
  468: {
    T: -1
  },
  469: {
    T: 1
  },
  470: {
    T: -1
  },
  471: {},
  472: {},
  473: {
    T: 1
  },
  474: {
    T: -1
  },
  475: {},
  476: {
    f: Jh
  },
  477: {},
  478: {},
  479: {
    T: 1
  },
  480: {
    T: -1
  },
  481: {
    T: 1
  },
  482: {
    T: -1
  },
  483: {
    T: 1
  },
  484: {
    T: -1
  },
  485: {
    f: oh
  },
  486: {
    T: 1
  },
  487: {
    T: -1
  },
  488: {
    T: 1
  },
  489: {
    T: -1
  },
  490: {
    T: 1
  },
  491: {
    T: -1
  },
  492: {
    T: 1
  },
  493: {
    T: -1
  },
  494: {
    f: $h
  },
  495: {
    T: 1
  },
  496: {
    T: -1
  },
  497: {
    T: 1
  },
  498: {
    T: -1
  },
  499: {},
  500: {
    T: 1
  },
  501: {
    T: -1
  },
  502: {
    T: 1
  },
  503: {
    T: -1
  },
  504: {},
  505: {
    T: 1
  },
  506: {
    T: -1
  },
  507: {},
  508: {
    T: 1
  },
  509: {
    T: -1
  },
  510: {
    T: 1
  },
  511: {
    T: -1
  },
  512: {},
  513: {},
  514: {
    T: 1
  },
  515: {
    T: -1
  },
  516: {
    T: 1
  },
  517: {
    T: -1
  },
  518: {
    T: 1
  },
  519: {
    T: -1
  },
  520: {
    T: 1
  },
  521: {
    T: -1
  },
  522: {},
  523: {},
  524: {},
  525: {},
  526: {},
  527: {},
  528: {
    T: 1
  },
  529: {
    T: -1
  },
  530: {
    T: 1
  },
  531: {
    T: -1
  },
  532: {
    T: 1
  },
  533: {
    T: -1
  },
  534: {},
  535: {},
  536: {},
  537: {},
  538: {
    T: 1
  },
  539: {
    T: -1
  },
  540: {
    T: 1
  },
  541: {
    T: -1
  },
  542: {
    T: 1
  },
  548: {},
  549: {},
  550: {
    f: En
  },
  551: {
    f: ja
  },
  552: {},
  553: {},
  554: {
    T: 1
  },
  555: {
    T: -1
  },
  556: {
    T: 1
  },
  557: {
    T: -1
  },
  558: {
    T: 1
  },
  559: {
    T: -1
  },
  560: {
    T: 1
  },
  561: {
    T: -1
  },
  562: {},
  564: {},
  565: {
    T: 1
  },
  566: {
    T: -1
  },
  569: {
    T: 1
  },
  570: {
    T: -1
  },
  572: {},
  573: {
    T: 1
  },
  574: {
    T: -1
  },
  577: {},
  578: {},
  579: {},
  580: {},
  581: {},
  582: {},
  583: {},
  584: {},
  585: {},
  586: {},
  587: {},
  588: {
    T: -1
  },
  589: {},
  590: {
    T: 1
  },
  591: {
    T: -1
  },
  592: {
    T: 1
  },
  593: {
    T: -1
  },
  594: {
    T: 1
  },
  595: {
    T: -1
  },
  596: {},
  597: {
    T: 1
  },
  598: {
    T: -1
  },
  599: {
    T: 1
  },
  600: {
    T: -1
  },
  601: {
    T: 1
  },
  602: {
    T: -1
  },
  603: {
    T: 1
  },
  604: {
    T: -1
  },
  605: {
    T: 1
  },
  606: {
    T: -1
  },
  607: {},
  608: {
    T: 1
  },
  609: {
    T: -1
  },
  610: {},
  611: {
    T: 1
  },
  612: {
    T: -1
  },
  613: {
    T: 1
  },
  614: {
    T: -1
  },
  615: {
    T: 1
  },
  616: {
    T: -1
  },
  617: {
    T: 1
  },
  618: {
    T: -1
  },
  619: {
    T: 1
  },
  620: {
    T: -1
  },
  625: {},
  626: {
    T: 1
  },
  627: {
    T: -1
  },
  628: {
    T: 1
  },
  629: {
    T: -1
  },
  630: {
    T: 1
  },
  631: {
    T: -1
  },
  632: {
    f: nc
  },
  633: {
    T: 1
  },
  634: {
    T: -1
  },
  635: {
    T: 1,
    f: tc
  },
  636: {
    T: -1
  },
  637: {
    f: eo
  },
  638: {
    T: 1
  },
  639: {},
  640: {
    T: -1
  },
  641: {
    T: 1
  },
  642: {
    T: -1
  },
  643: {
    T: 1
  },
  644: {},
  645: {
    T: -1
  },
  646: {
    T: 1
  },
  648: {
    T: 1
  },
  649: {},
  650: {
    T: -1
  },
  651: {
    f: mu
  },
  652: {},
  653: {
    T: 1
  },
  654: {
    T: -1
  },
  655: {
    T: 1
  },
  656: {
    T: -1
  },
  657: {
    T: 1
  },
  658: {
    T: -1
  },
  659: {},
  660: {
    T: 1
  },
  661: {},
  662: {
    T: -1
  },
  663: {},
  664: {
    T: 1
  },
  665: {},
  666: {
    T: -1
  },
  667: {},
  668: {},
  669: {},
  671: {
    T: 1
  },
  672: {
    T: -1
  },
  673: {
    T: 1
  },
  674: {
    T: -1
  },
  675: {},
  676: {},
  677: {},
  678: {},
  679: {},
  680: {},
  681: {},
  1024: {},
  1025: {},
  1026: {
    T: 1
  },
  1027: {
    T: -1
  },
  1028: {
    T: 1
  },
  1029: {
    T: -1
  },
  1030: {},
  1031: {
    T: 1
  },
  1032: {
    T: -1
  },
  1033: {
    T: 1
  },
  1034: {
    T: -1
  },
  1035: {},
  1036: {},
  1037: {},
  1038: {
    T: 1
  },
  1039: {
    T: -1
  },
  1040: {},
  1041: {
    T: 1
  },
  1042: {
    T: -1
  },
  1043: {},
  1044: {},
  1045: {},
  1046: {
    T: 1
  },
  1047: {
    T: -1
  },
  1048: {
    T: 1
  },
  1049: {
    T: -1
  },
  1050: {},
  1051: {
    T: 1
  },
  1052: {
    T: 1
  },
  1053: {
    f: nu
  },
  1054: {
    T: 1
  },
  1055: {},
  1056: {
    T: 1
  },
  1057: {
    T: -1
  },
  1058: {
    T: 1
  },
  1059: {
    T: -1
  },
  1061: {},
  1062: {
    T: 1
  },
  1063: {
    T: -1
  },
  1064: {
    T: 1
  },
  1065: {
    T: -1
  },
  1066: {
    T: 1
  },
  1067: {
    T: -1
  },
  1068: {
    T: 1
  },
  1069: {
    T: -1
  },
  1070: {
    T: 1
  },
  1071: {
    T: -1
  },
  1072: {
    T: 1
  },
  1073: {
    T: -1
  },
  1075: {
    T: 1
  },
  1076: {
    T: -1
  },
  1077: {
    T: 1
  },
  1078: {
    T: -1
  },
  1079: {
    T: 1
  },
  1080: {
    T: -1
  },
  1081: {
    T: 1
  },
  1082: {
    T: -1
  },
  1083: {
    T: 1
  },
  1084: {
    T: -1
  },
  1085: {},
  1086: {
    T: 1
  },
  1087: {
    T: -1
  },
  1088: {
    T: 1
  },
  1089: {
    T: -1
  },
  1090: {
    T: 1
  },
  1091: {
    T: -1
  },
  1092: {
    T: 1
  },
  1093: {
    T: -1
  },
  1094: {
    T: 1
  },
  1095: {
    T: -1
  },
  1096: {},
  1097: {
    T: 1
  },
  1098: {},
  1099: {
    T: -1
  },
  1100: {
    T: 1
  },
  1101: {
    T: -1
  },
  1102: {},
  1103: {},
  1104: {},
  1105: {},
  1111: {},
  1112: {},
  1113: {
    T: 1
  },
  1114: {
    T: -1
  },
  1115: {
    T: 1
  },
  1116: {
    T: -1
  },
  1117: {},
  1118: {
    T: 1
  },
  1119: {
    T: -1
  },
  1120: {
    T: 1
  },
  1121: {
    T: -1
  },
  1122: {
    T: 1
  },
  1123: {
    T: -1
  },
  1124: {
    T: 1
  },
  1125: {
    T: -1
  },
  1126: {},
  1128: {
    T: 1
  },
  1129: {
    T: -1
  },
  1130: {},
  1131: {
    T: 1
  },
  1132: {
    T: -1
  },
  1133: {
    T: 1
  },
  1134: {
    T: -1
  },
  1135: {
    T: 1
  },
  1136: {
    T: -1
  },
  1137: {
    T: 1
  },
  1138: {
    T: -1
  },
  1139: {
    T: 1
  },
  1140: {
    T: -1
  },
  1141: {},
  1142: {
    T: 1
  },
  1143: {
    T: -1
  },
  1144: {
    T: 1
  },
  1145: {
    T: -1
  },
  1146: {},
  1147: {
    T: 1
  },
  1148: {
    T: -1
  },
  1149: {
    T: 1
  },
  1150: {
    T: -1
  },
  1152: {
    T: 1
  },
  1153: {
    T: -1
  },
  1154: {
    T: -1
  },
  1155: {
    T: -1
  },
  1156: {
    T: -1
  },
  1157: {
    T: 1
  },
  1158: {
    T: -1
  },
  1159: {
    T: 1
  },
  1160: {
    T: -1
  },
  1161: {
    T: 1
  },
  1162: {
    T: -1
  },
  1163: {
    T: 1
  },
  1164: {
    T: -1
  },
  1165: {
    T: 1
  },
  1166: {
    T: -1
  },
  1167: {
    T: 1
  },
  1168: {
    T: -1
  },
  1169: {
    T: 1
  },
  1170: {
    T: -1
  },
  1171: {},
  1172: {
    T: 1
  },
  1173: {
    T: -1
  },
  1177: {},
  1178: {
    T: 1
  },
  1180: {},
  1181: {},
  1182: {},
  2048: {
    T: 1
  },
  2049: {
    T: -1
  },
  2050: {},
  2051: {
    T: 1
  },
  2052: {
    T: -1
  },
  2053: {},
  2054: {},
  2055: {
    T: 1
  },
  2056: {
    T: -1
  },
  2057: {
    T: 1
  },
  2058: {
    T: -1
  },
  2060: {},
  2067: {},
  2068: {
    T: 1
  },
  2069: {
    T: -1
  },
  2070: {},
  2071: {},
  2072: {
    T: 1
  },
  2073: {
    T: -1
  },
  2075: {},
  2076: {},
  2077: {
    T: 1
  },
  2078: {
    T: -1
  },
  2079: {},
  2080: {
    T: 1
  },
  2081: {
    T: -1
  },
  2082: {},
  2083: {
    T: 1
  },
  2084: {
    T: -1
  },
  2085: {
    T: 1
  },
  2086: {
    T: -1
  },
  2087: {
    T: 1
  },
  2088: {
    T: -1
  },
  2089: {
    T: 1
  },
  2090: {
    T: -1
  },
  2091: {},
  2092: {},
  2093: {
    T: 1
  },
  2094: {
    T: -1
  },
  2095: {},
  2096: {
    T: 1
  },
  2097: {
    T: -1
  },
  2098: {
    T: 1
  },
  2099: {
    T: -1
  },
  2100: {
    T: 1
  },
  2101: {
    T: -1
  },
  2102: {},
  2103: {
    T: 1
  },
  2104: {
    T: -1
  },
  2105: {},
  2106: {
    T: 1
  },
  2107: {
    T: -1
  },
  2108: {},
  2109: {
    T: 1
  },
  2110: {
    T: -1
  },
  2111: {
    T: 1
  },
  2112: {
    T: -1
  },
  2113: {
    T: 1
  },
  2114: {
    T: -1
  },
  2115: {},
  2116: {},
  2117: {},
  2118: {
    T: 1
  },
  2119: {
    T: -1
  },
  2120: {},
  2121: {
    T: 1
  },
  2122: {
    T: -1
  },
  2123: {
    T: 1
  },
  2124: {
    T: -1
  },
  2125: {},
  2126: {
    T: 1
  },
  2127: {
    T: -1
  },
  2128: {},
  2129: {
    T: 1
  },
  2130: {
    T: -1
  },
  2131: {
    T: 1
  },
  2132: {
    T: -1
  },
  2133: {
    T: 1
  },
  2134: {},
  2135: {},
  2136: {},
  2137: {
    T: 1
  },
  2138: {
    T: -1
  },
  2139: {
    T: 1
  },
  2140: {
    T: -1
  },
  2141: {},
  3072: {},
  3073: {},
  4096: {
    T: 1
  },
  4097: {
    T: -1
  },
  5002: {
    T: 1
  },
  5003: {
    T: -1
  },
  5081: {
    T: 1
  },
  5082: {
    T: -1
  },
  5083: {},
  5084: {
    T: 1
  },
  5085: {
    T: -1
  },
  5086: {
    T: 1
  },
  5087: {
    T: -1
  },
  5088: {},
  5089: {},
  5090: {},
  5092: {
    T: 1
  },
  5093: {
    T: -1
  },
  5094: {},
  5095: {
    T: 1
  },
  5096: {
    T: -1
  },
  5097: {},
  5099: {},
  65535: {
    n: ""
  }
};
function K(e, t, r, a) {
  var n = t;
  if (!isNaN(n)) {
    var s = a || (r || []).length || 0;
    var i = e.next(4);
    i.write_shift(2, n);
    i.write_shift(2, s);
    if (s > 0 && Bn(r)) {
      e.push(r);
    }
  }
}
function qu(e, t, r, a) {
  var n = (r || []).length || 0;
  if (n <= 8224) {
    return K(e, t, r, n);
  }
  var s = t;
  if (!isNaN(s)) {
    for (var i = r.parts || [], f = 0, o = 0, l = 0; l + (i[f] || 8224) <= 8224;) {
      l += i[f] || 8224;
      f++;
    }
    var c = e.next(4);
    c.write_shift(2, s);
    c.write_shift(2, l);
    e.push(r.slice(o, o + l));
    o += l;
    while (o < n) {
      c = e.next(4);
      c.write_shift(2, 60);
      l = 0;
      while (l + (i[f] || 8224) <= 8224) {
        l += i[f] || 8224;
        f++;
      }
      c.write_shift(2, l);
      e.push(r.slice(o, o + l));
      o += l;
    }
  }
}
function mn(e, t, r, a) {
  var n = I(9);
  ca(n, e, t);
  Ii(r, a || "b", n);
  return n;
}
function Qu(e, t, r) {
  var a = I(8 + r.length * 2);
  ca(a, e, t);
  a.write_shift(1, r.length);
  a.write_shift(r.length, r, "sbcs");
  if (a.l < a.length) {
    return a.slice(0, a.l);
  } else {
    return a;
  }
}
function ns(e, t) {
  t.forEach(function (r) {
    var a = r[0].map(function (s) {
      return s.t;
    }).join("");
    if (a.length <= 2048) {
      return K(e, 28, hn(a, r[1], r[2]));
    }
    K(e, 28, hn(a.slice(0, 2048), r[1], r[2], a.length));
    for (var n = 2048; n < a.length; n += 2048) {
      K(e, 28, hn(a.slice(n, Math.min(n + 2048, a.length)), -1, -1, Math.min(2048, a.length - n)));
    }
  });
}
function ex(e, t, r, a, n, s) {
  var i = 0;
  if (t.z != null) {
    i = n._BIFF2FmtTable.indexOf(t.z);
    if (i == -1) {
      n._BIFF2FmtTable.push(t.z);
      i = n._BIFF2FmtTable.length - 1;
    }
  }
  var f = 0;
  if (t.z != null) {
    for (; f < n.cellXfs.length && n.cellXfs[f].numFmtId != i; ++f);
    if (f == n.cellXfs.length) {
      n.cellXfs.push({
        numFmtId: i
      });
    }
  }
  if (t.v != null) {
    switch (t.t) {
      case "d":
      case "n":
        var o = t.t == "d" ? fr(Fr(t.v, s), s) : t.v;
        if (n.biff == 2 && o == (o | 0) && o >= 0 && o < 65536) {
          K(e, 2, il(r, a, o, f, i));
        } else if (isNaN(o)) {
          K(e, 5, mn(r, a, 36, "e"));
        } else if (isFinite(o)) {
          K(e, 3, nl(r, a, o, f, i));
        } else {
          K(e, 5, mn(r, a, 7, "e"));
        }
        return;
      case "b":
      case "e":
        K(e, 5, mn(r, a, t.v, t.t));
        return;
      case "s":
      case "str":
        K(e, 4, Qu(r, a, t.v == null ? "" : String(t.v).slice(0, 255)));
        return;
    }
  }
  K(e, 1, ca(null, r, a));
}
function rx(e, t, r, a, n) {
  var s = t["!data"] != null;
  var i = Be(t["!ref"] || "A1");
  var f = "";
  var o = [];
  if (i.e.c > 255 || i.e.r > 16383) {
    if (a.WTF) {
      throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    }
    i.e.c = Math.min(i.e.c, 255);
    i.e.r = Math.min(i.e.r, 16383);
  }
  var l = (((n || {}).Workbook || {}).WBProps || {}).date1904;
  var c = [];
  var x = [];
  for (var h = i.s.c; h <= i.e.c; ++h) {
    o[h] = Ie(h);
  }
  for (var u = i.s.r; u <= i.e.r; ++u) {
    if (s) {
      c = t["!data"][u] || [];
    }
    f = Ne(u);
    h = i.s.c;
    for (; h <= i.e.c; ++h) {
      var p = s ? c[h] : t[o[h] + f];
      if (p) {
        ex(e, p, u, h, a, l);
        if (p.c) {
          x.push([p.c, u, h]);
        }
      }
    }
  }
  ns(e, x);
}
function tx(e, t) {
  var r = t || {};
  var a = xr();
  var n = 0;
  for (var s = 0; s < e.SheetNames.length; ++s) {
    if (e.SheetNames[s] == r.sheet) {
      n = s;
    }
  }
  if (n == 0 && r.sheet && e.SheetNames[0] != r.sheet) {
    throw new Error("Sheet not found: " + r.sheet);
  }
  K(a, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, Xn(e, 16, r));
  if (((e.Workbook || {}).WBProps || {}).date1904) {
    K(a, 34, hr(true));
  }
  r.cellXfs = [{
    numFmtId: 0
  }];
  r._BIFF2FmtTable = ["General"];
  r._Fonts = [];
  var i = xr();
  rx(i, e.Sheets[e.SheetNames[n]], n, r, e);
  r._BIFF2FmtTable.forEach(function (f) {
    if (r.biff <= 3) {
      K(a, 30, Xo(f));
    } else {
      K(a, 1054, Vo(f));
    }
  });
  r.cellXfs.forEach(function (f) {
    switch (r.biff) {
      case 2:
        K(a, 67, zo(f));
        break;
      case 3:
        K(a, 579, Mi(f));
        break;
      case 4:
        K(a, 1091, Ko(f));
        break;
    }
  });
  delete r._BIFF2FmtTable;
  delete r.cellXfs;
  delete r._Fonts;
  a.push(i.end());
  K(a, 10);
  return a.end();
}
var Mr = 1;
var Nr = [];
function ax() {
  var e = I(82 + Nr.length * 8);
  e.write_shift(2, 15);
  e.write_shift(2, 61440);
  e.write_shift(4, 74 + Nr.length * 8);
  {
    e.write_shift(2, 0);
    e.write_shift(2, 61446);
    e.write_shift(4, 16 + Nr.length * 8);
    {
      e.write_shift(4, Mr);
      e.write_shift(4, Nr.length + 1);
      var t = 0;
      for (var r = 0; r < Nr.length; ++r) {
        t += Nr[r] && Nr[r][1] || 0;
      }
      e.write_shift(4, t);
      e.write_shift(4, Nr.length);
    }
    Nr.forEach(function (a) {
      e.write_shift(4, a[0]);
      e.write_shift(4, a[2]);
    });
  }
  e.write_shift(2, 51);
  e.write_shift(2, 61451);
  e.write_shift(4, 18);
  e.write_shift(2, 191);
  e.write_shift(4, 524296);
  e.write_shift(2, 385);
  e.write_shift(4, 134217793);
  e.write_shift(2, 448);
  e.write_shift(4, 134217792);
  e.write_shift(2, 64);
  e.write_shift(2, 61726);
  e.write_shift(4, 16);
  e.write_shift(4, 134217741);
  e.write_shift(4, 134217740);
  e.write_shift(4, 134217751);
  e.write_shift(4, 268435703);
  return e;
}
function nx(e, t) {
  var r = [];
  var a = 0;
  var n = xr();
  var s = Mr;
  var i;
  t.forEach(function (o, l) {
    var c = "";
    var x = o[0].map(function (F) {
      if (F.a && !c) {
        c = F.a;
      }
      return F.t;
    }).join("");
    ++Mr;
    {
      var h = I(150);
      h.write_shift(2, 15);
      h.write_shift(2, 61444);
      h.write_shift(4, 150);
      h.write_shift(2, 3234);
      h.write_shift(2, 61450);
      h.write_shift(4, 8);
      h.write_shift(4, Mr);
      h.write_shift(4, 2560);
      h.write_shift(2, 227);
      h.write_shift(2, 61451);
      h.write_shift(4, 84);
      h.write_shift(2, 128);
      h.write_shift(4, 0);
      h.write_shift(2, 139);
      h.write_shift(4, 2);
      h.write_shift(2, 191);
      h.write_shift(4, 524296);
      h.write_shift(2, 344);
      h.l += 4;
      h.write_shift(2, 385);
      h.write_shift(4, 134217808);
      h.write_shift(2, 387);
      h.write_shift(4, 134217808);
      h.write_shift(2, 389);
      h.write_shift(4, 268435700);
      h.write_shift(2, 447);
      h.write_shift(4, 1048592);
      h.write_shift(2, 448);
      h.write_shift(4, 134217809);
      h.write_shift(2, 451);
      h.write_shift(4, 268435700);
      h.write_shift(2, 513);
      h.write_shift(4, 134217809);
      h.write_shift(2, 515);
      h.write_shift(4, 268435700);
      h.write_shift(2, 575);
      h.write_shift(4, 196609);
      h.write_shift(2, 959);
      h.write_shift(4, (o[0].hidden ? 2 : 0) | 131072);
      h.l += 2;
      h.write_shift(2, 61456);
      h.write_shift(4, 18);
      h.write_shift(2, 3);
      h.write_shift(2, o[2] + 2);
      h.l += 2;
      h.write_shift(2, o[1] + 1);
      h.l += 2;
      h.write_shift(2, o[2] + 4);
      h.l += 2;
      h.write_shift(2, o[1] + 5);
      h.l += 2;
      h.l += 2;
      h.write_shift(2, 61457);
      h.l += 4;
      h.l = 150;
      if (l == 0) {
        i = h;
      } else {
        K(n, 236, h);
      }
    }
    a += 150;
    {
      var u = I(52);
      u.write_shift(2, 21);
      u.write_shift(2, 18);
      u.write_shift(2, 25);
      u.write_shift(2, Mr);
      u.write_shift(2, 0);
      u.l = 22;
      u.write_shift(2, 13);
      u.write_shift(2, 22);
      u.write_shift(4, 1651663474);
      u.write_shift(4, 2503426821);
      u.write_shift(4, 2150634280);
      u.write_shift(4, 1768515844 + Mr * 256);
      u.write_shift(2, 0);
      u.write_shift(4, 0);
      u.l += 4;
      K(n, 93, u);
    }
    {
      var p = I(8);
      p.l += 2;
      p.write_shift(2, 61453);
      p.l += 4;
      K(n, 236, p);
    }
    a += 8;
    {
      var g = I(18);
      g.write_shift(2, 18);
      g.l += 8;
      g.write_shift(2, x.length);
      g.write_shift(2, 16);
      g.l += 4;
      K(n, 438, g);
      {
        var m = I(1 + x.length);
        m.write_shift(1, 0);
        m.write_shift(x.length, x, "sbcs");
        K(n, 60, m);
      }
      {
        var v = I(16);
        v.l += 8;
        v.write_shift(2, x.length);
        v.l += 6;
        K(n, 60, v);
      }
    }
    {
      var C = I(12 + c.length);
      C.write_shift(2, o[1]);
      C.write_shift(2, o[2]);
      C.write_shift(2, (o[0].hidden ? 0 : 2) | 0);
      C.write_shift(2, Mr);
      C.write_shift(2, c.length);
      C.write_shift(1, 0);
      C.write_shift(c.length, c, "sbcs");
      C.l++;
      r.push(C);
    }
  });
  {
    var f = I(80);
    f.write_shift(2, 15);
    f.write_shift(2, 61442);
    f.write_shift(4, a + f.length - 8);
    f.write_shift(2, 16);
    f.write_shift(2, 61448);
    f.write_shift(4, 8);
    f.write_shift(4, t.length + 1);
    f.write_shift(4, Mr);
    f.write_shift(2, 15);
    f.write_shift(2, 61443);
    f.write_shift(4, a + 48);
    f.write_shift(2, 15);
    f.write_shift(2, 61444);
    f.write_shift(4, 40);
    f.write_shift(2, 1);
    f.write_shift(2, 61449);
    f.write_shift(4, 16);
    f.l += 16;
    f.write_shift(2, 2);
    f.write_shift(2, 61450);
    f.write_shift(4, 8);
    f.write_shift(4, s);
    f.write_shift(4, 5);
    K(e, 236, i ? je([f, i]) : f);
  }
  e.push(n.end());
  r.forEach(function (o) {
    K(e, 28, o);
  });
  Nr.push([s, t.length + 1, Mr]);
  ++Mr;
}
function ix(e, t, r) {
  K(e, 49, Uo({
    sz: 12,
    name: "Arial"
  }, r));
}
function sx(e, t, r) {
  if (t) {
    [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (a) {
      for (var n = a[0]; n <= a[1]; ++n) {
        if (t[n] != null) {
          K(e, 1054, Go(n, t[n], r));
        }
      }
    });
  }
}
function fx(e, t) {
  var r = I(19);
  r.write_shift(4, 2151);
  r.write_shift(4, 0);
  r.write_shift(4, 0);
  r.write_shift(2, 3);
  r.write_shift(1, 1);
  r.write_shift(4, 0);
  K(e, 2151, r);
  r = I(39);
  r.write_shift(4, 2152);
  r.write_shift(4, 0);
  r.write_shift(4, 0);
  r.write_shift(2, 3);
  r.write_shift(1, 0);
  r.write_shift(4, 0);
  r.write_shift(2, 1);
  r.write_shift(4, 4);
  r.write_shift(2, 0);
  Li(Be(t["!ref"] || "A1"), r);
  r.write_shift(4, 4);
  K(e, 2152, r);
}
function ox(e, t) {
  for (var r = 0; r < 16; ++r) {
    K(e, 224, O0({
      numFmtId: 0,
      style: true
    }, 0, t));
  }
  t.cellXfs.forEach(function (a) {
    K(e, 224, O0(a, 0, t));
  });
}
function lx(e, t) {
  for (var r = 0; r < t["!links"].length; ++r) {
    var a = t["!links"][r];
    K(e, 440, qo(a));
    if (a[1].Tooltip) {
      K(e, 2048, Qo(a));
    }
  }
  delete t["!links"];
}
function cx(e, t) {
  if (t) {
    var r = 0;
    t.forEach(function (a, n) {
      if (++r <= 256 && a) {
        K(e, 125, tl(en(n, a), n));
      }
    });
  }
}
function hx(e, t, r, a, n, s) {
  var i = 16 + ot(n.cellXfs, t, n);
  if (t.v == null && !t.bf) {
    K(e, 513, gt(r, a, i));
    return;
  }
  if (t.bf) {
    K(e, 6, y1(t, r, a, n, i));
  } else {
    switch (t.t) {
      case "d":
      case "n":
        var f = t.t == "d" ? fr(Fr(t.v, s), s) : t.v;
        if (isNaN(f)) {
          K(e, 517, cn(r, a, 36, i, n, "e"));
        } else if (isFinite(f)) {
          K(e, 515, jo(r, a, f, i));
        } else {
          K(e, 517, cn(r, a, 7, i, n, "e"));
        }
        break;
      case "b":
      case "e":
        K(e, 517, cn(r, a, t.v, i, n, t.t));
        break;
      case "s":
      case "str":
        if (n.bookSST) {
          var o = zn(n.Strings, t.v == null ? "" : String(t.v), n.revStrings);
          K(e, 253, Wo(r, a, o, i));
        } else {
          K(e, 516, Ho(r, a, (t.v == null ? "" : String(t.v)).slice(0, 255), i, n));
        }
        break;
      default:
        K(e, 513, gt(r, a, i));
    }
  }
}
function ux(e, t, r) {
  var a = xr();
  var n = r.SheetNames[e];
  var s = r.Sheets[n] || {};
  var i = (r || {}).Workbook || {};
  var f = (i.Sheets || [])[e] || {};
  var o = s["!data"] != null;
  var l = t.biff == 8;
  var c = "";
  var x = [];
  var h = Be(s["!ref"] || "A1");
  var u = l ? 65536 : 16384;
  if (h.e.c > 255 || h.e.r >= u) {
    if (t.WTF) {
      throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:IV" + u);
    }
    h.e.c = Math.min(h.e.c, 255);
    h.e.r = Math.min(h.e.r, u - 1);
  }
  K(a, 2057, Xn(r, 16, t));
  K(a, 13, Pr(1));
  K(a, 12, Pr(100));
  K(a, 15, hr(true));
  K(a, 17, hr(false));
  K(a, 16, _t(0.001));
  K(a, 95, hr(true));
  K(a, 42, hr(false));
  K(a, 43, hr(false));
  K(a, 130, Pr(1));
  K(a, 128, Yo());
  K(a, 131, hr(false));
  K(a, 132, hr(false));
  if (l) {
    cx(a, s["!cols"]);
  }
  K(a, 512, $o(h, t));
  var p = (((r || {}).Workbook || {}).WBProps || {}).date1904;
  if (l) {
    s["!links"] = [];
  }
  for (var g = h.s.c; g <= h.e.c; ++g) {
    x[g] = Ie(g);
  }
  var m = [];
  var v = [];
  for (var C = h.s.r; C <= h.e.r; ++C) {
    if (o) {
      v = s["!data"][C] || [];
    }
    c = Ne(C);
    g = h.s.c;
    for (; g <= h.e.c; ++g) {
      var F = o ? v[g] : s[x[g] + c];
      if (F) {
        hx(a, F, C, g, t, p);
        if (l && F.l) {
          s["!links"].push([x[g] + c, F.l]);
        }
        if (F.c) {
          m.push([F.c, C, g]);
        }
      }
    }
  }
  var U = f.CodeName || f.name || n;
  if (l) {
    nx(a, m);
  } else {
    ns(a, m);
  }
  if (l) {
    K(a, 574, bo((i.Views || [])[0]));
  }
  if (l && (s["!merges"] || []).length) {
    K(a, 229, Jo(s["!merges"]));
  }
  if (l) {
    lx(a, s);
  }
  K(a, 442, Pi(U));
  if (l) {
    fx(a, s);
  }
  K(a, 10);
  return a.end();
}
function xx(e, t, r) {
  var a = xr();
  var n = (e || {}).Workbook || {};
  var s = n.Sheets || [];
  var i = n.WBProps || {};
  var f = r.biff == 8;
  var o = r.biff == 5;
  K(a, 2057, Xn(e, 5, r));
  if (r.bookType == "xla") {
    K(a, 135);
  }
  K(a, 225, f ? Pr(1200) : null);
  K(a, 193, Fo(2));
  if (o) {
    K(a, 191);
  }
  if (o) {
    K(a, 192);
  }
  K(a, 226);
  K(a, 92, Po("SheetJS", r));
  K(a, 66, Pr(f ? 1200 : 1252));
  if (f) {
    K(a, 353, Pr(0));
  }
  if (f) {
    K(a, 448);
  }
  K(a, 317, al(e.SheetNames.length));
  if (f && e.vbaraw) {
    K(a, 211);
  }
  if (f && e.vbaraw) {
    var l = i.CodeName || "ThisWorkbook";
    K(a, 442, Pi(l));
  }
  K(a, 156, Pr(17));
  K(a, 25, hr(false));
  K(a, 18, hr(false));
  K(a, 19, Pr(0));
  if (f) {
    K(a, 431, hr(false));
  }
  if (f) {
    K(a, 444, Pr(0));
  }
  K(a, 61, Bo());
  K(a, 64, hr(false));
  K(a, 141, Pr(0));
  K(a, 34, hr(_u(e) == "true"));
  K(a, 14, hr(true));
  if (f) {
    K(a, 439, hr(false));
  }
  K(a, 218, Pr(0));
  ix(a, e, r);
  sx(a, e.SSF, r);
  ox(a, r);
  if (f) {
    K(a, 352, hr(false));
  }
  var c = a.end();
  var x = xr();
  if (f) {
    K(x, 140, el());
  }
  if (f && Nr.length) {
    K(x, 235, ax());
  }
  if (f && r.Strings) {
    qu(x, 252, Mo(r.Strings));
  }
  K(x, 10);
  var h = x.end();
  var u = xr();
  var p = 0;
  var g = 0;
  for (g = 0; g < e.SheetNames.length; ++g) {
    p += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[g].length;
  }
  var m = c.length + p + h.length;
  for (g = 0; g < e.SheetNames.length; ++g) {
    var v = s[g] || {};
    K(u, 133, Lo({
      pos: m,
      hs: v.Hidden || 0,
      dt: 0,
      name: e.SheetNames[g]
    }, r));
    m += t[g].length;
  }
  var C = u.end();
  if (p != C.length) {
    throw new Error("BS8 " + p + " != " + C.length);
  }
  var F = [];
  if (c.length) {
    F.push(c);
  }
  if (C.length) {
    F.push(C);
  }
  if (h.length) {
    F.push(h);
  }
  return je(F);
}
function dx(e, t) {
  var r = t || {};
  var a = [];
  if (e && !e.SSF) {
    e.SSF = pr(Me);
  }
  if (e && e.SSF) {
    za();
    $a(e.SSF);
    r.revssf = Ka(e.SSF);
    r.revssf[e.SSF[65535]] = 0;
    r.ssf = e.SSF;
  }
  Mr = 1;
  Nr = [];
  r.Strings = [];
  r.Strings.Count = 0;
  r.Strings.Unique = 0;
  Kn(r);
  r.cellXfs = [];
  ot(r.cellXfs, {}, {
    revssf: {
      General: 0
    }
  });
  e.Props ||= {};
  for (var n = 0; n < e.SheetNames.length; ++n) {
    a[a.length] = ux(n, r, e);
  }
  a.unshift(xx(e, a, r));
  return je(a);
}
function is(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var a = e.Sheets[e.SheetNames[r]];
    if (!!a && !!a["!ref"]) {
      var n = sr(a["!ref"]);
      if (n.e.c > 255 && typeof console !== "undefined" && console.error) {
        console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost.");
      }
      if (n.e.r > 65535 && typeof console !== "undefined" && console.error) {
        console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond row 65536.  Data may be lost.");
      }
    }
  }
  var s = t || {};
  switch (s.biff || 2) {
    case 8:
    case 5:
      return dx(e, t);
    case 4:
    case 3:
    case 2:
      return tx(e, t);
  }
  throw new Error("invalid type " + s.bookType + " for BIFF");
}
function px(e, t, r, a) {
  var n = e["!merges"] || [];
  var s = [];
  var i = {};
  var f = e["!data"] != null;
  for (var o = t.s.c; o <= t.e.c; ++o) {
    var l = 0;
    var c = 0;
    for (var x = 0; x < n.length; ++x) {
      if (!(n[x].s.r > r) && !(n[x].s.c > o) && !(n[x].e.r < r) && !(n[x].e.c < o)) {
        if (n[x].s.r < r || n[x].s.c < o) {
          l = -1;
          break;
        }
        l = n[x].e.r - n[x].s.r + 1;
        c = n[x].e.c - n[x].s.c + 1;
        break;
      }
    }
    if (!(l < 0)) {
      var h = Ie(o) + Ne(r);
      var u = f ? (e["!data"][r] || [])[o] : e[h];
      if (u && u.t == "n" && u.v != null && !isFinite(u.v)) {
        if (isNaN(u.v)) {
          u = {
            t: "e",
            v: 36,
            w: Er[36]
          };
        } else {
          u = {
            t: "e",
            v: 7,
            w: Er[7]
          };
        }
      }
      var p = u && u.v != null && (u.h || sn(u.w || (rt(u), u.w) || "")) || "";
      i = {};
      if (l > 1) {
        i.rowspan = l;
      }
      if (c > 1) {
        i.colspan = c;
      }
      if (a.editable) {
        p = "<span contenteditable=\"true\">" + p + "</span>";
      } else if (u) {
        i["data-t"] = u && u.t || "z";
        if (u.v != null) {
          i["data-v"] = sn(u.v instanceof Date ? u.v.toISOString() : u.v);
        }
        if (u.z != null) {
          i["data-z"] = u.z;
        }
        if (u.l && (u.l.Target || "#").charAt(0) != "#") {
          p = "<a href=\"" + sn(u.l.Target) + "\">" + p + "</a>";
        }
      }
      i.id = (a.id || "sjs") + "-" + h;
      s.push(J("td", p, i));
    }
  }
  var g = "<tr>";
  return g + s.join("") + "</tr>";
}
var mx = "<html><head><meta charset=\"utf-8\"/><title>SheetJS Table Export</title></head><body>";
var vx = "</body></html>";
function _x(e, t, r) {
  var a = [];
  return a.join("") + "<table" + (r && r.id ? " id=\"" + r.id + "\"" : "") + ">";
}
function ss(e, t) {
  var r = t || {};
  var a = r.header ?? mx;
  var n = r.footer ?? vx;
  var s = [a];
  var i = sr(e["!ref"] || "A1");
  s.push(_x(e, i, r));
  if (e["!ref"]) {
    for (var f = i.s.r; f <= i.e.r; ++f) {
      s.push(px(e, i, f, r));
    }
  }
  s.push("</table>" + n);
  return s.join("");
}
function fs(e, t, r) {
  var a = t.rows;
  if (!a) {
    throw "Unsupported origin when " + t.tagName + " is not a TABLE";
  }
  var n = r || {};
  var s = e["!data"] != null;
  var i = 0;
  var f = 0;
  if (n.origin != null) {
    if (typeof n.origin == "number") {
      i = n.origin;
    } else {
      var o = typeof n.origin == "string" ? We(n.origin) : n.origin;
      i = o.r;
      f = o.c;
    }
  }
  var l = Math.min(n.sheetRows || 10000000, a.length);
  var c = {
    s: {
      r: 0,
      c: 0
    },
    e: {
      r: i,
      c: f
    }
  };
  if (e["!ref"]) {
    var x = sr(e["!ref"]);
    c.s.r = Math.min(c.s.r, x.s.r);
    c.s.c = Math.min(c.s.c, x.s.c);
    c.e.r = Math.max(c.e.r, x.e.r);
    c.e.c = Math.max(c.e.c, x.e.c);
    if (i == -1) {
      c.e.r = i = x.e.r + 1;
    }
  }
  var h = [];
  var u = 0;
  var p = e["!rows"] ||= [];
  var g = 0;
  var m = 0;
  var v = 0;
  var C = 0;
  var F = 0;
  var U = 0;
  for (e["!cols"] ||= []; g < a.length && m < l; ++g) {
    var H = a[g];
    if (W0(H)) {
      if (n.display) {
        continue;
      }
      p[m] = {
        hidden: true
      };
    }
    var V = H.cells;
    for (v = C = 0; v < V.length; ++v) {
      var y = V[v];
      if (!n.display || !W0(y)) {
        var N = y.hasAttribute("data-v") ? y.getAttribute("data-v") : y.hasAttribute("v") ? y.getAttribute("v") : Pf(y.innerHTML);
        var D = y.getAttribute("data-z") || y.getAttribute("z");
        for (u = 0; u < h.length; ++u) {
          var X = h[u];
          if (X.s.c == C + f && X.s.r < m + i && m + i <= X.e.r) {
            C = X.e.c + 1 - f;
            u = -1;
          }
        }
        U = +y.getAttribute("colspan") || 1;
        if ((F = +y.getAttribute("rowspan") || 1) > 1 || U > 1) {
          h.push({
            s: {
              r: m + i,
              c: C + f
            },
            e: {
              r: m + i + (F || 1) - 1,
              c: C + f + (U || 1) - 1
            }
          });
        }
        var b = {
          t: "s",
          v: N
        };
        var Y = y.getAttribute("data-t") || y.getAttribute("t") || "";
        if (N != null) {
          if (N.length == 0) {
            b.t = Y || "z";
          } else if (!n.raw && N.trim().length != 0 && Y != "s") {
            if (Y == "e" && Er[+N]) {
              b = {
                t: "e",
                v: +N,
                w: Er[+N]
              };
            } else if (N === "TRUE") {
              b = {
                t: "b",
                v: true
              };
            } else if (N === "FALSE") {
              b = {
                t: "b",
                v: false
              };
            } else if (isNaN(qr(N))) {
              if (isNaN(Ia(N).getDate())) {
                if (N.charCodeAt(0) == 35 && Vr[N] != null) {
                  b = {
                    t: "e",
                    v: Vr[N],
                    w: N
                  };
                }
              } else {
                b = {
                  t: "d",
                  v: Fr(N)
                };
                if (n.UTC) {
                  b.v = Ya(b.v);
                }
                if (!n.cellDates) {
                  b = {
                    t: "n",
                    v: fr(b.v)
                  };
                }
                b.z = n.dateNF || Me[14];
              }
            } else {
              b = {
                t: "n",
                v: qr(N)
              };
            }
          }
        }
        if (b.z === undefined && D != null) {
          b.z = D;
        }
        var le = "";
        var _e = y.getElementsByTagName("A");
        if (_e && _e.length) {
          for (var ce = 0; ce < _e.length && (!_e[ce].hasAttribute("href") || !(le = _e[ce].getAttribute("href"), le.charAt(0) != "#")); ++ce);
        }
        if (le && le.charAt(0) != "#" && le.slice(0, 11).toLowerCase() != "javascript:") {
          b.l = {
            Target: le
          };
        }
        if (s) {
          e["!data"][m + i] ||= [];
          e["!data"][m + i][C + f] = b;
        } else {
          e[Ge({
            c: C + f,
            r: m + i
          })] = b;
        }
        if (c.e.c < C + f) {
          c.e.c = C + f;
        }
        C += U;
      }
    }
    ++m;
  }
  if (h.length) {
    e["!merges"] = (e["!merges"] || []).concat(h);
  }
  c.e.r = Math.max(c.e.r, m - 1 + i);
  e["!ref"] = Je(c);
  if (m >= l) {
    e["!fullref"] = Je((c.e.r = a.length - g + m - 1 + i, c));
  }
  return e;
}
function os(e, t) {
  var r = t || {};
  var a = {};
  if (r.dense) {
    a["!data"] = [];
  }
  return fs(a, e, t);
}
function gx(e, t) {
  var r = bt(os(e, t), t);
  return r;
}
function W0(e) {
  var t = "";
  var r = wx(e);
  if (r) {
    t = r(e).getPropertyValue("display");
  }
  t ||= e.style && e.style.display;
  return t === "none";
}
function wx(e) {
  if (e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function") {
    return e.ownerDocument.defaultView.getComputedStyle;
  } else if (typeof getComputedStyle == "function") {
    return getComputedStyle;
  } else {
    return null;
  }
}
var Tx = function () {
  var e = ["<office:master-styles>", "<style:master-page style:name=\"mp1\" style:page-layout-name=\"mp1\">", "<style:header/>", "<style:header-left style:display=\"false\"/>", "<style:footer/>", "<style:footer-left style:display=\"false\"/>", "</style:master-page>", "</office:master-styles>"].join("");
  var t = "<office:document-styles " + ra({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + e + "</office:document-styles>";
  return function () {
    return qe + t;
  };
}();
function Ex(e, t) {
  var r = "number";
  var a = "";
  var n = {
    "style:name": t
  };
  var s = "";
  var i = 0;
  e = e.replace(/"[$]"/g, "$");
  e: {
    if (e.indexOf(";") > -1) {
      console.error("Unsupported ODS Style Map exported.  Using first branch of " + e);
      e = e.slice(0, e.indexOf(";"));
    }
    if (e == "@") {
      r = "text";
      a = "<number:text-content/>";
      break e;
    }
    if (e.indexOf(/\$/) > -1) {
      r = "currency";
    }
    if (e[i] == "\"") {
      for (s = ""; e[++i] != "\"" || e[++i] == "\"";) {
        s += e[i];
      }
      --i;
      if (e[i + 1] == "*") {
        i++;
        a += "<number:fill-character>" + me(s.replace(/""/g, "\"")) + "</number:fill-character>";
      } else {
        a += "<number:text>" + me(s.replace(/""/g, "\"")) + "</number:text>";
      }
      e = e.slice(i + 1);
      i = 0;
    }
    var f = e.match(/# (\?+)\/(\?+)/);
    if (f) {
      a += J("number:fraction", null, {
        "number:min-integer-digits": 0,
        "number:min-numerator-digits": f[1].length,
        "number:max-denominator-value": Math.max(+f[1].replace(/./g, "9"), +f[2].replace(/./g, "9"))
      });
      break e;
    }
    if (f = e.match(/# (\?+)\/(\d+)/)) {
      a += J("number:fraction", null, {
        "number:min-integer-digits": 0,
        "number:min-numerator-digits": f[1].length,
        "number:denominator-value": +f[2]
      });
      break e;
    }
    if (f = e.match(/\b(\d+)(|\.\d+)%/)) {
      r = "percentage";
      a += J("number:number", null, {
        "number:decimal-places": f[2] && f.length - 1 || 0,
        "number:min-decimal-places": f[2] && f.length - 1 || 0,
        "number:min-integer-digits": f[1].length
      }) + "<number:text>%</number:text>";
      break e;
    }
    var o = false;
    if (["y", "m", "d"].indexOf(e[0]) > -1) {
      r = "date";
      r: for (; i < e.length; ++i) {
        switch (s = e[i].toLowerCase()) {
          case "h":
          case "s":
            o = true;
            --i;
            break r;
          case "m":
            t: for (var l = i + 1; l < e.length; ++l) {
              switch (e[l]) {
                case "y":
                case "d":
                  break t;
                case "h":
                case "s":
                  o = true;
                  --i;
                  break r;
              }
            }
          case "y":
          case "d":
            while ((e[++i] || "").toLowerCase() == s[0]) {
              s += s[0];
            }
            --i;
            switch (s) {
              case "y":
              case "yy":
                a += "<number:year/>";
                break;
              case "yyy":
              case "yyyy":
                a += "<number:year number:style=\"long\"/>";
                break;
              case "mmmmm":
                console.error("ODS has no equivalent of format |mmmmm|");
              case "m":
              case "mm":
              case "mmm":
              case "mmmm":
                a += "<number:month number:style=\"" + (s.length % 2 ? "short" : "long") + "\" number:textual=\"" + (s.length >= 3 ? "true" : "false") + "\"/>";
                break;
              case "d":
              case "dd":
                a += "<number:day number:style=\"" + (s.length % 2 ? "short" : "long") + "\"/>";
                break;
              case "ddd":
              case "dddd":
                a += "<number:day-of-week number:style=\"" + (s.length % 2 ? "short" : "long") + "\"/>";
                break;
            }
            break;
          case "\"":
            while (e[++i] != "\"" || e[++i] == "\"") {
              s += e[i];
            }
            --i;
            a += "<number:text>" + me(s.slice(1).replace(/""/g, "\"")) + "</number:text>";
            break;
          case "\\":
            s = e[++i];
            a += "<number:text>" + me(s) + "</number:text>";
            break;
          case "/":
          case ":":
            a += "<number:text>" + me(s) + "</number:text>";
            break;
          default:
            console.error("unrecognized character " + s + " in ODF format " + e);
        }
      }
      if (!o) {
        break e;
      }
      e = e.slice(i + 1);
      i = 0;
    }
    if (e.match(/^\[?[hms]/)) {
      if (r == "number") {
        r = "time";
      }
      if (e.match(/\[/)) {
        e = e.replace(/[\[\]]/g, "");
        n["number:truncate-on-overflow"] = "false";
      }
      for (; i < e.length; ++i) {
        switch (s = e[i].toLowerCase()) {
          case "h":
          case "m":
          case "s":
            while ((e[++i] || "").toLowerCase() == s[0]) {
              s += s[0];
            }
            --i;
            switch (s) {
              case "h":
              case "hh":
                a += "<number:hours number:style=\"" + (s.length % 2 ? "short" : "long") + "\"/>";
                break;
              case "m":
              case "mm":
                a += "<number:minutes number:style=\"" + (s.length % 2 ? "short" : "long") + "\"/>";
                break;
              case "s":
              case "ss":
                if (e[i + 1] == ".") {
                  do {
                    s += e[i + 1];
                    ++i;
                  } while (e[i + 1] == "0");
                }
                a += "<number:seconds number:style=\"" + (s.match("ss") ? "long" : "short") + "\"" + (s.match(/\./) ? " number:decimal-places=\"" + (s.match(/0+/) || [""])[0].length + "\"" : "") + "/>";
                break;
            }
            break;
          case "\"":
            while (e[++i] != "\"" || e[++i] == "\"") {
              s += e[i];
            }
            --i;
            a += "<number:text>" + me(s.slice(1).replace(/""/g, "\"")) + "</number:text>";
            break;
          case "/":
          case ":":
            a += "<number:text>" + me(s) + "</number:text>";
            break;
          case "a":
            if (e.slice(i, i + 3).toLowerCase() == "a/p") {
              a += "<number:am-pm/>";
              i += 2;
              break;
            }
            if (e.slice(i, i + 5).toLowerCase() == "am/pm") {
              a += "<number:am-pm/>";
              i += 4;
              break;
            }
          default:
            console.error("unrecognized character " + s + " in ODF format " + e);
        }
      }
      break e;
    }
    if (e.indexOf(/\$/) > -1) {
      r = "currency";
    }
    if (e[0] == "$") {
      a += "<number:currency-symbol number:language=\"en\" number:country=\"US\">$</number:currency-symbol>";
      e = e.slice(1);
      i = 0;
    }
    i = 0;
    if (e[i] == "\"") {
      while (e[++i] != "\"" || e[++i] == "\"") {
        s += e[i];
      }
      --i;
      if (e[i + 1] == "*") {
        i++;
        a += "<number:fill-character>" + me(s.replace(/""/g, "\"")) + "</number:fill-character>";
      } else {
        a += "<number:text>" + me(s.replace(/""/g, "\"")) + "</number:text>";
      }
      e = e.slice(i + 1);
      i = 0;
    }
    var c = e.match(/([#0][0#,]*)(\.[0#]*|)(E[+]?0*|)/i);
    if (!c || !c[0]) {
      console.error("Could not find numeric part of " + e);
    } else {
      var x = c[1].replace(/,/g, "");
      a += "<number:" + (c[3] ? "scientific-" : "") + "number number:min-integer-digits=\"" + (x.indexOf("0") == -1 ? "0" : x.length - x.indexOf("0")) + "\"" + (c[0].indexOf(",") > -1 ? " number:grouping=\"true\"" : "") + (c[2] && " number:decimal-places=\"" + (c[2].length - 1) + "\"" || " number:decimal-places=\"0\"") + (c[3] && c[3].indexOf("+") > -1 ? " number:forced-exponent-sign=\"true\"" : "") + (c[3] ? " number:min-exponent-digits=\"" + c[3].match(/0+/)[0].length + "\"" : "") + "></number:" + (c[3] ? "scientific-" : "") + "number>";
      i = c.index + c[0].length;
    }
    if (e[i] == "\"") {
      for (s = ""; e[++i] != "\"" || e[++i] == "\"";) {
        s += e[i];
      }
      --i;
      a += "<number:text>" + me(s.replace(/""/g, "\"")) + "</number:text>";
    }
  }
  if (a) {
    return J("number:" + r + "-style", a, n);
  } else {
    console.error("Could not generate ODS number format for |" + e + "|");
    return "";
  }
}
function H0(e, t, r) {
  var a = [];
  for (var n = 0; n < e.length; ++n) {
    var s = e[n];
    if (s && s.Sheet == (r == -1 ? null : r)) {
      a.push(s);
    }
  }
  if (a.length) {
    return `      <table:named-expressions>
${a.map(function (i) {
      var f = (r == -1 ? "$" : "") + Qi(i.Ref);
      return "        " + J("table:named-range", null, {
        "table:name": i.Name,
        "table:cell-range-address": f,
        "table:base-cell-address": f.replace(/[\.][^\.]*$/, ".$A$1")
      });
    }).join(`
`)}
      </table:named-expressions>
`;
  } else {
    return "";
  }
}
var G0 = function () {
  function e(n, s) {
    return me(n).replace(/  +/g, function (i) {
      return "<text:s text:c=\"" + i.length + "\"/>";
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }
  var t = `          <table:table-cell />
`;
  function r(n, s, i, f, o, l) {
    var c = [];
    c.push(`${"      <table:table table:name=\"" + me(s.SheetNames[i])}" table:style-name="ta1">
`);
    var x = 0;
    var h = 0;
    var u = sr(n["!ref"] || "A1");
    var p = n["!merges"] || [];
    var g = 0;
    var m = n["!data"] != null;
    if (n["!cols"]) {
      for (h = 0; h <= u.e.c; ++h) {
        c.push(`${"        <table:table-column" + (n["!cols"][h] ? " table:style-name=\"co" + n["!cols"][h].ods + "\"" : "")}></table:table-column>
`);
      }
    }
    var v = "";
    var C = n["!rows"] || [];
    for (x = 0; x < u.s.r; ++x) {
      v = C[x] ? " table:style-name=\"ro" + C[x].ods + "\"" : "";
      c.push(`${"        <table:table-row" + v}></table:table-row>
`);
    }
    for (; x <= u.e.r; ++x) {
      v = C[x] ? " table:style-name=\"ro" + C[x].ods + "\"" : "";
      c.push(`${"        <table:table-row" + v}>
`);
      h = 0;
      for (; h < u.s.c; ++h) {
        c.push(t);
      }
      for (; h <= u.e.c; ++h) {
        var F = false;
        var U = {};
        var H = "";
        for (g = 0; g != p.length; ++g) {
          if (!(p[g].s.c > h) && !(p[g].s.r > x) && !(p[g].e.c < h) && !(p[g].e.r < x)) {
            if (p[g].s.c != h || p[g].s.r != x) {
              F = true;
            }
            U["table:number-columns-spanned"] = p[g].e.c - p[g].s.c + 1;
            U["table:number-rows-spanned"] = p[g].e.r - p[g].s.r + 1;
            break;
          }
        }
        if (F) {
          c.push(`          <table:covered-table-cell/>
`);
          continue;
        }
        var V = Ge({
          r: x,
          c: h
        });
        var y = m ? (n["!data"][x] || [])[h] : n[V];
        if (y && y.f && (U["table:formula"] = me(X1(y.f)), y.F && y.F.slice(0, V.length) == V)) {
          var N = sr(y.F);
          U["table:number-matrix-columns-spanned"] = N.e.c - N.s.c + 1;
          U["table:number-matrix-rows-spanned"] = N.e.r - N.s.r + 1;
        }
        if (!y) {
          c.push(t);
          continue;
        }
        switch (y.t) {
          case "b":
            H = y.v ? "TRUE" : "FALSE";
            U["office:value-type"] = "boolean";
            U["office:boolean-value"] = y.v ? "true" : "false";
            break;
          case "n":
            if (isFinite(y.v)) {
              H = y.w || String(y.v || 0);
              U["office:value-type"] = "float";
              U["office:value"] = y.v || 0;
            } else {
              if (isNaN(y.v)) {
                H = "#NUM!";
                U["table:formula"] = "of:=#NUM!";
              } else {
                H = "#DIV/0!";
                U["table:formula"] = "of:=" + (y.v < 0 ? "-" : "") + "1/0";
              }
              U["office:string-value"] = "";
              U["office:value-type"] = "string";
              U["calcext:value-type"] = "error";
            }
            break;
          case "s":
          case "str":
            H = y.v == null ? "" : y.v;
            U["office:value-type"] = "string";
            break;
          case "d":
            H = y.w || Fr(y.v, l).toISOString();
            U["office:value-type"] = "date";
            U["office:date-value"] = Fr(y.v, l).toISOString();
            U["table:style-name"] = "ce1";
            break;
          default:
            c.push(t);
            continue;
        }
        var D = e(H);
        if (y.l && y.l.Target) {
          var X = y.l.Target;
          X = X.charAt(0) == "#" ? "#" + Qi(X.slice(1)) : X;
          if (X.charAt(0) != "#" && !X.match(/^\w+:/)) {
            X = "../" + X;
          }
          D = J("text:a", D, {
            "xlink:href": X.replace(/&/g, "&amp;")
          });
        }
        if (o[y.z]) {
          U["table:style-name"] = "ce" + o[y.z].slice(1);
        }
        var b = J("text:p", D, {});
        if (y.c) {
          var Y = "";
          var le = "";
          var _e = {};
          for (var ce = 0; ce < y.c.length; ++ce) {
            if (!Y && y.c[ce].a) {
              Y = y.c[ce].a;
            }
            le += "<text:p>" + e(y.c[ce].t) + "</text:p>";
          }
          if (!y.c.hidden) {
            _e["office:display"] = true;
          }
          b = J("office:annotation", le, _e) + b;
        }
        c.push(`${"          " + J("table:table-cell", b, U)}
`);
      }
      c.push(`        </table:table-row>
`);
    }
    if ((s.Workbook || {}).Names) {
      c.push(H0(s.Workbook.Names, s.SheetNames, i));
    }
    c.push(`      </table:table>
`);
    return c.join("");
  }
  function a(n, s) {
    n.push(` <office:automatic-styles>
`);
    var i = 0;
    s.SheetNames.map(function (c) {
      return s.Sheets[c];
    }).forEach(function (c) {
      if (c && c["!cols"]) {
        for (var x = 0; x < c["!cols"].length; ++x) {
          if (c["!cols"][x]) {
            var h = c["!cols"][x];
            if (h.width == null && h.wpx == null && h.wch == null) {
              continue;
            }
            Vn(h);
            h.ods = i;
            var u = c["!cols"][x].wpx + "px";
            n.push(`${"  <style:style style:name=\"co" + i}" style:family="table-column">
`);
            n.push(`${"   <style:table-column-properties fo:break-before=\"auto\" style:column-width=\"" + u}"/>
`);
            n.push(`  </style:style>
`);
            ++i;
          }
        }
      }
    });
    var f = 0;
    s.SheetNames.map(function (c) {
      return s.Sheets[c];
    }).forEach(function (c) {
      if (c && c["!rows"]) {
        for (var x = 0; x < c["!rows"].length; ++x) {
          if (c["!rows"][x]) {
            c["!rows"][x].ods = f;
            var h = c["!rows"][x].hpx + "px";
            n.push(`${"  <style:style style:name=\"ro" + f}" style:family="table-row">
`);
            n.push(`${"   <style:table-row-properties fo:break-before=\"auto\" style:row-height=\"" + h}"/>
`);
            n.push(`  </style:style>
`);
            ++f;
          }
        }
      }
    });
    n.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`);
    n.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`);
    n.push(`  </style:style>
`);
    n.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`);
    n.push(`   <number:month number:style="long"/>
`);
    n.push(`   <number:text>/</number:text>
`);
    n.push(`   <number:day number:style="long"/>
`);
    n.push(`   <number:text>/</number:text>
`);
    n.push(`   <number:year/>
`);
    n.push(`  </number:date-style>
`);
    var o = {};
    var l = 69;
    s.SheetNames.map(function (c) {
      return s.Sheets[c];
    }).forEach(function (c) {
      if (c) {
        var x = c["!data"] != null;
        if (c["!ref"]) {
          for (var h = sr(c["!ref"]), u = 0; u <= h.e.r; ++u) {
            for (var p = 0; p <= h.e.c; ++p) {
              var g = x ? (c["!data"][u] || [])[p] : c[Ge({
                r: u,
                c: p
              })];
              if (!!g && !!g.z && g.z.toLowerCase() != "general" && !o[g.z]) {
                var m = Ex(g.z, "N" + l);
                if (m) {
                  o[g.z] = "N" + l;
                  ++l;
                  n.push(`${m}
`);
                }
              }
            }
          }
        }
      }
    });
    n.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`);
    Ze(o).forEach(function (c) {
      n.push(`${"<style:style style:name=\"ce" + o[c].slice(1) + "\" style:family=\"table-cell\" style:parent-style-name=\"Default\" style:data-style-name=\"" + o[c]}"/>
`);
    });
    n.push(` </office:automatic-styles>
`);
    return o;
  }
  return function (s, i) {
    var f = [qe];
    var o = ra({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    });
    var l = ra({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    if (i.bookType == "fods") {
      f.push(`${"<office:document" + o + l}>
`);
      f.push(`${yi().replace(/<office:document-meta[^<>]*?>/, "").replace(/<\/office:document-meta>/, "")}
`);
    } else {
      f.push(`${"<office:document-content" + o}>
`);
    }
    var c = a(f, s);
    f.push(`  <office:body>
`);
    f.push(`    <office:spreadsheet>
`);
    if (((s.Workbook || {}).WBProps || {}).date1904) {
      f.push(`      <table:calculation-settings table:case-sensitive="false" table:search-criteria-must-apply-to-whole-cell="true" table:use-wildcards="true" table:use-regular-expressions="false" table:automatic-find-labels="false">
        <table:null-date table:date-value="1904-01-01"/>
      </table:calculation-settings>
`);
    }
    for (var x = 0; x != s.SheetNames.length; ++x) {
      f.push(r(s.Sheets[s.SheetNames[x]], s, x, i, c, ((s.Workbook || {}).WBProps || {}).date1904));
    }
    if ((s.Workbook || {}).Names) {
      f.push(H0(s.Workbook.Names, s.SheetNames, -1));
    }
    f.push(`    </office:spreadsheet>
`);
    f.push(`  </office:body>
`);
    if (i.bookType == "fods") {
      f.push("</office:document>");
    } else {
      f.push("</office:document-content>");
    }
    return f.join("");
  };
}();
function ls(e, t) {
  if (t.bookType == "fods") {
    return G0(e, t);
  }
  var r = Nn();
  var a = "";
  var n = [];
  var s = [];
  a = "mimetype";
  pe(r, a, "application/vnd.oasis.opendocument.spreadsheet");
  a = "content.xml";
  pe(r, a, G0(e, t));
  n.push([a, "text/xml"]);
  s.push([a, "ContentFile"]);
  a = "styles.xml";
  pe(r, a, Tx(e, t));
  n.push([a, "text/xml"]);
  s.push([a, "StylesFile"]);
  a = "meta.xml";
  pe(r, a, qe + yi());
  n.push([a, "text/xml"]);
  s.push([a, "MetadataFile"]);
  a = "manifest.rdf";
  pe(r, a, wo(s));
  n.push([a, "application/rdf+xml"]);
  a = "META-INF/manifest.xml";
  pe(r, a, _o(n));
  return r;
} /*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
var Tr = function () {
  try {
    if (typeof Uint8Array === "undefined" || typeof Uint8Array.prototype.subarray === "undefined") {
      return "slice";
    } else if (typeof Buffer !== "undefined") {
      if (typeof Buffer.prototype.subarray === "undefined") {
        return "slice";
      } else if ((typeof Buffer.from == "function" ? Buffer.from([72, 62]) : new Buffer([72, 62])) instanceof Uint8Array) {
        return "subarray";
      } else {
        return "slice";
      }
    } else {
      return "subarray";
    }
  } catch {
    return "slice";
  }
}();
function Ua(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function ia(e) {
  if (typeof TextDecoder !== "undefined") {
    return new TextDecoder().decode(e);
  } else {
    return Dt(mt(e));
  }
}
function _r(e) {
  if (typeof TextEncoder !== "undefined") {
    return new TextEncoder().encode(e);
  } else {
    return kr(ea(e));
  }
}
function ft(e) {
  var t = 0;
  for (var r = 0; r < e.length; ++r) {
    t += e[r].length;
  }
  var a = new Uint8Array(t);
  var n = 0;
  for (r = 0; r < e.length; ++r) {
    var s = e[r];
    var i = s.length;
    if (i < 250) {
      for (var f = 0; f < i; ++f) {
        a[n++] = s[f];
      }
    } else {
      a.set(s, n);
      n += i;
    }
  }
  return a;
}
function Sx(e, t, r) {
  var a = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 16;
  var n = r / Math.pow(10, a - 6176);
  e[t + 15] |= a >> 7;
  e[t + 14] |= (a & 127) << 1;
  for (var s = 0; n >= 1; ++s, n /= 256) {
    e[t + s] = n & 255;
  }
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function sa(e, t) {
  var r = t.l;
  var a = e[r] & 127;
  e: if (e[r++] >= 128 && (a |= (e[r] & 127) << 7, e[r++] < 128 || (a |= (e[r] & 127) << 14, e[r++] < 128) || (a |= (e[r] & 127) << 21, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128))) {
    break e;
  }
  t.l = r;
  return a;
}
function se(e) {
  var t = new Uint8Array(7);
  t[0] = e & 127;
  var r = 1;
  e: if (e > 127) {
    t[r - 1] |= 128;
    t[r] = e >> 7 & 127;
    ++r;
    if (e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103)) {
      break e;
    }
    t[r - 1] |= 128;
    t[r] = e / 16777216 >>> 21 & 127;
    ++r;
  }
  return t[Tr](0, r);
}
function cs(e) {
  for (var t = {
    l: 0
  }, r = []; t.l < e.length;) {
    r.push(sa(e, t));
  }
  return r;
}
function hs(e) {
  return ft(e.map(function (t) {
    return se(t);
  }));
}
function Rr(e) {
  var t = 0;
  var r = e[t] & 127;
  if (!(e[t++] < 128) && !(r |= (e[t] & 127) << 7, e[t++] < 128) && !(r |= (e[t] & 127) << 14, e[t++] < 128) && !(r |= (e[t] & 127) << 21, e[t++] < 128)) {
    r |= (e[t] & 15) << 28;
  }
  return r;
}
function oe(e) {
  var t = [];
  for (var r = {
    l: 0
  }; r.l < e.length;) {
    var a = r.l;
    var n = sa(e, r);
    var s = n & 7;
    n = n / 8 | 0;
    var i;
    var f = r.l;
    switch (s) {
      case 0:
        {
          while (e[f++] >= 128);
          i = e[Tr](r.l, f);
          r.l = f;
        }
        break;
      case 1:
        i = e[Tr](f, f + 8);
        r.l = f + 8;
        break;
      case 2:
        {
          var o = sa(e, r);
          i = e[Tr](r.l, r.l + o);
          r.l += o;
        }
        break;
      case 5:
        i = e[Tr](f, f + 4);
        r.l = f + 4;
        break;
      default:
        throw new Error(`PB Type ${s} for Field ${n} at offset ${a}`);
    }
    var l = {
      data: i,
      type: s
    };
    if (t[n] == null) {
      t[n] = [];
    }
    t[n].push(l);
  }
  return t;
}
function fe(e) {
  var t = [];
  e.forEach(function (r, a) {
    if (a != 0) {
      r.forEach(function (n) {
        if (n.data) {
          t.push(se(a * 8 + n.type));
          if (n.type == 2) {
            t.push(se(n.data.length));
          }
          t.push(n.data);
        }
      });
    }
  });
  return ft(t);
}
function Wa(e, t) {
  return (e == null ? undefined : e.map(function (r) {
    return t(r.data);
  })) || [];
}
function Ha(e) {
  var t;
  var r = [];
  for (var a = {
    l: 0
  }; a.l < e.length;) {
    var n = sa(e, a);
    var s = oe(e[Tr](a.l, a.l + n));
    a.l += n;
    var i = {
      id: Rr(s[1][0].data),
      messages: []
    };
    s[2].forEach(function (f) {
      var o = oe(f.data);
      var l = Rr(o[3][0].data);
      i.messages.push({
        meta: o,
        data: e[Tr](a.l, a.l + l)
      });
      a.l += l;
    });
    if ((t = s[3]) != null && t[0]) {
      i.merge = Rr(s[3][0].data) >>> 0 > 0;
    }
    r.push(i);
  }
  return r;
}
function Nt(e) {
  var t = [];
  e.forEach(function (r) {
    var a = [[], [{
      data: se(r.id),
      type: 0
    }], []];
    if (r.merge != null) {
      a[3] = [{
        data: se(+!!r.merge),
        type: 0
      }];
    }
    var n = [];
    r.messages.forEach(function (i) {
      n.push(i.data);
      i.meta[3] = [{
        type: 0,
        data: se(i.data.length)
      }];
      a[2].push({
        data: fe(i.meta),
        type: 2
      });
    });
    var s = fe(a);
    t.push(se(s.length));
    t.push(s);
    n.forEach(function (i) {
      return t.push(i);
    });
  });
  return ft(t);
}
function Ax(e, t) {
  if (e != 0) {
    throw new Error(`Unexpected Snappy chunk type ${e}`);
  }
  var r = {
    l: 0
  };
  var a = sa(t, r);
  var n = [];
  for (var s = r.l; s < t.length;) {
    var i = t[s] & 3;
    if (i == 0) {
      var f = t[s++] >> 2;
      if (f < 60) {
        ++f;
      } else {
        var o = f - 59;
        f = t[s];
        if (o > 1) {
          f |= t[s + 1] << 8;
        }
        if (o > 2) {
          f |= t[s + 2] << 16;
        }
        if (o > 3) {
          f |= t[s + 3] << 24;
        }
        f >>>= 0;
        f++;
        s += o;
      }
      n.push(t[Tr](s, s + f));
      s += f;
      continue;
    } else {
      var l = 0;
      var c = 0;
      if (i == 1) {
        c = (t[s] >> 2 & 7) + 4;
        l = (t[s++] & 224) << 3;
        l |= t[s++];
      } else {
        c = (t[s++] >> 2) + 1;
        if (i == 2) {
          l = t[s] | t[s + 1] << 8;
          s += 2;
        } else {
          l = (t[s] | t[s + 1] << 8 | t[s + 2] << 16 | t[s + 3] << 24) >>> 0;
          s += 4;
        }
      }
      if (l == 0) {
        throw new Error("Invalid offset 0");
      }
      for (var x = n.length - 1, h = l; x >= 0 && h >= n[x].length;) {
        h -= n[x].length;
        --x;
      }
      if (x < 0) {
        if (h == 0) {
          h = n[x = 0].length;
        } else {
          throw new Error("Invalid offset beyond length");
        }
      }
      if (c < h) {
        n.push(n[x][Tr](n[x].length - h, n[x].length - h + c));
      } else {
        if (h > 0) {
          n.push(n[x][Tr](n[x].length - h));
          c -= h;
        }
        ++x;
        while (c >= n[x].length) {
          n.push(n[x]);
          c -= n[x].length;
          ++x;
        }
        if (c) {
          n.push(n[x][Tr](0, c));
        }
      }
      if (n.length > 25) {
        n = [ft(n)];
      }
    }
  }
  var u = 0;
  for (var p = 0; p < n.length; ++p) {
    u += n[p].length;
  }
  if (u != a) {
    throw new Error(`Unexpected length: ${u} != ${a}`);
  }
  return n;
}
function Ga(e) {
  if (Array.isArray(e)) {
    e = new Uint8Array(e);
  }
  var t = [];
  for (var r = 0; r < e.length;) {
    var a = e[r++];
    var n = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3;
    t.push.apply(t, Ax(a, e[Tr](r, r + n)));
    r += n;
  }
  if (r !== e.length) {
    throw new Error("data is not a valid framed stream!");
  }
  if (t.length == 1) {
    return t[0];
  } else {
    return ft(t);
  }
}
function Pt(e) {
  var t = [];
  for (var r = 0; r < e.length;) {
    var a = Math.min(e.length - r, 268435455);
    var n = new Uint8Array(4);
    t.push(n);
    var s = se(a);
    var i = s.length;
    t.push(s);
    if (a <= 60) {
      i++;
      t.push(new Uint8Array([a - 1 << 2]));
    } else if (a <= 256) {
      i += 2;
      t.push(new Uint8Array([240, a - 1 & 255]));
    } else if (a <= 65536) {
      i += 3;
      t.push(new Uint8Array([244, a - 1 & 255, a - 1 >> 8 & 255]));
    } else if (a <= 16777216) {
      i += 4;
      t.push(new Uint8Array([248, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255]));
    } else if (a <= 4294967296) {
      i += 5;
      t.push(new Uint8Array([252, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255, a - 1 >>> 24 & 255]));
    }
    t.push(e[Tr](r, r + a));
    i += a;
    n[0] = 0;
    n[1] = i & 255;
    n[2] = i >> 8 & 255;
    n[3] = i >> 16 & 255;
    r += a;
  }
  return ft(t);
}
function vn(e, t) {
  var r = new Uint8Array(32);
  var a = Ua(r);
  var n = 12;
  var s = 0;
  r[0] = 5;
  switch (e.t) {
    case "n":
      if (e.z && vt(e.z)) {
        r[1] = 5;
        a.setFloat64(n, (Ot(e.v + 1462).getTime() - Date.UTC(2001, 0, 1)) / 1000, true);
        s |= 4;
        n += 8;
        break;
      } else {
        r[1] = 2;
        Sx(r, n, e.v);
        s |= 1;
        n += 16;
      }
      break;
    case "b":
      r[1] = 6;
      a.setFloat64(n, e.v ? 1 : 0, true);
      s |= 2;
      n += 8;
      break;
    case "s":
      {
        var i = e.v == null ? "" : String(e.v);
        if (e.l) {
          var f = t.rsst.findIndex(function (l) {
            var c;
            return l.v == i && l.l == ((c = e.l) == null ? undefined : c.Target);
          });
          if (f == -1) {
            t.rsst[f = t.rsst.length] = {
              v: i,
              l: e.l.Target
            };
          }
          r[1] = 9;
          a.setUint32(n, f, true);
          s |= 16;
          n += 4;
        } else {
          var o = t.sst.indexOf(i);
          if (o == -1) {
            t.sst[o = t.sst.length] = i;
          }
          r[1] = 3;
          a.setUint32(n, o, true);
          s |= 8;
          n += 4;
        }
      }
      break;
    case "d":
      r[1] = 5;
      a.setFloat64(n, (e.v.getTime() - Date.UTC(2001, 0, 1)) / 1000, true);
      s |= 4;
      n += 8;
      break;
    case "z":
      r[1] = 0;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  if (e.c) {
    t.cmnt.push(Fx(e.c));
    a.setUint32(n, t.cmnt.length - 1, true);
    s |= 524288;
    n += 4;
  }
  a.setUint32(8, s, true);
  return r[Tr](0, n);
}
function _n(e, t) {
  var r = new Uint8Array(32);
  var a = Ua(r);
  var n = 12;
  var s = 0;
  var i = "";
  r[0] = 4;
  switch (e.t) {
    case "n":
      break;
    case "b":
      break;
    case "s":
      i = e.v == null ? "" : String(e.v);
      if (e.l) {
        var f = t.rsst.findIndex(function (l) {
          var c;
          return l.v == i && l.l == ((c = e.l) == null ? undefined : c.Target);
        });
        if (f == -1) {
          t.rsst[f = t.rsst.length] = {
            v: i,
            l: e.l.Target
          };
        }
        r[1] = 9;
        a.setUint32(n, f, true);
        s |= 512;
        n += 4;
      }
      break;
    case "d":
      break;
    case "e":
      break;
    case "z":
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  if (e.c) {
    a.setUint32(n, t.cmnt.length - 1, true);
    s |= 4096;
    n += 4;
  }
  switch (e.t) {
    case "n":
      r[1] = 2;
      a.setFloat64(n, e.v, true);
      s |= 32;
      n += 8;
      break;
    case "b":
      r[1] = 6;
      a.setFloat64(n, e.v ? 1 : 0, true);
      s |= 32;
      n += 8;
      break;
    case "s":
      i = e.v == null ? "" : String(e.v);
      if (!e.l) {
        var o = t.sst.indexOf(i);
        if (o == -1) {
          t.sst[o = t.sst.length] = i;
        }
        r[1] = 3;
        a.setUint32(n, o, true);
        s |= 16;
        n += 4;
      }
      break;
    case "d":
      r[1] = 5;
      a.setFloat64(n, (e.v.getTime() - Date.UTC(2001, 0, 1)) / 1000, true);
      s |= 64;
      n += 8;
      break;
    case "z":
      r[1] = 0;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  a.setUint32(8, s, true);
  return r[Tr](0, n);
}
function Ye(e) {
  var t = oe(e);
  return Rr(t[1][0].data);
}
function cr(e) {
  return fe([[], [{
    type: 0,
    data: se(e)
  }]]);
}
function lr(e, t) {
  var r;
  var a = (r = e.messages[0].meta[5]) != null && r[0] ? cs(e.messages[0].meta[5][0].data) : [];
  var n = a.indexOf(t);
  if (n == -1) {
    a.push(t);
    e.messages[0].meta[5] = [{
      type: 2,
      data: hs(a)
    }];
  }
}
function jr(e, t) {
  var r;
  var a = (r = e.messages[0].meta[5]) != null && r[0] ? cs(e.messages[0].meta[5][0].data) : [];
  e.messages[0].meta[5] = [{
    type: 2,
    data: hs(a.filter(function (n) {
      return n != t;
    }))
  }];
}
function Fx(e) {
  var t = {
    a: "",
    t: "",
    replies: []
  };
  for (var r = 0; r < e.length; ++r) {
    if (r == 0) {
      t.a = e[r].a;
      t.t = e[r].t;
    } else {
      t.replies.push({
        a: e[r].a,
        t: e[r].t
      });
    }
  }
  return t;
}
function yx(e, t, r) {
  var a;
  var n;
  var s;
  var i = [[], [{
    type: 0,
    data: se(0)
  }], [{
    type: 0,
    data: se(0)
  }], [{
    type: 2,
    data: new Uint8Array([])
  }], [{
    type: 2,
    data: new Uint8Array(Array.from({
      length: 510
    }, function () {
      return 255;
    }))
  }], [{
    type: 0,
    data: se(5)
  }], [{
    type: 2,
    data: new Uint8Array([])
  }], [{
    type: 2,
    data: new Uint8Array(Array.from({
      length: 510
    }, function () {
      return 255;
    }))
  }], [{
    type: 0,
    data: se(1)
  }]];
  if ((a = i[6]) == null || !a[0] || (n = i[7]) == null || !n[0]) {
    throw "Mutation only works on post-BNC storages!";
  }
  var f = 0;
  if (i[7][0].data.length < e.length * 2) {
    var o = new Uint8Array(e.length * 2);
    o.set(i[7][0].data);
    i[7][0].data = o;
  }
  if (i[4][0].data.length < e.length * 2) {
    var l = new Uint8Array(e.length * 2);
    l.set(i[4][0].data);
    i[4][0].data = l;
  }
  var c = Ua(i[7][0].data);
  var x = 0;
  var h = [];
  var u = Ua(i[4][0].data);
  var p = 0;
  var g = [];
  var m = 4;
  for (var v = 0; v < e.length; ++v) {
    if (e[v] == null || e[v].t == "z" && ((s = e[v].c) == null || !s.length) || e[v].t == "e") {
      c.setUint16(v * 2, 65535, true);
      u.setUint16(v * 2, 65535);
      continue;
    }
    c.setUint16(v * 2, x / m, true);
    u.setUint16(v * 2, p / m, true);
    var C;
    var F;
    switch (e[v].t) {
      case "d":
        if (e[v].v instanceof Date) {
          C = vn(e[v], t);
          F = _n(e[v], t);
          break;
        }
        C = vn(e[v], t);
        F = _n(e[v], t);
        break;
      case "s":
      case "n":
      case "b":
      case "z":
        C = vn(e[v], t);
        F = _n(e[v], t);
        break;
      default:
        throw new Error("Unsupported value " + e[v]);
    }
    h.push(C);
    x += C.length;
    g.push(F);
    p += F.length;
    ++f;
  }
  i[2][0].data = se(f);
  i[5][0].data = se(5);
  for (; v < i[7][0].data.length / 2; ++v) {
    c.setUint16(v * 2, 65535, true);
    u.setUint16(v * 2, 65535, true);
  }
  i[6][0].data = ft(h);
  i[3][0].data = ft(g);
  i[8] = [{
    type: 0,
    data: se(1)
  }];
  return i;
}
function An(e, t) {
  return {
    meta: [[], [{
      type: 0,
      data: se(e)
    }]],
    data: t
  };
}
function Gr(e, t) {
  t.last ||= 927262;
  for (var r = t.last; r < 2000000; ++r) {
    if (!t[r]) {
      t[t.last = r] = e;
      return r;
    }
  }
  throw new Error("Too many messages");
}
function Cx(e) {
  var t = {};
  var r = [];
  e.FileIndex.map(function (a, n) {
    return [a, e.FullPaths[n]];
  }).forEach(function (a) {
    var n = a[0];
    var s = a[1];
    if (n.type == 2 && n.name.match(/\.iwa/) && n.content[0] == 0) {
      Ha(Ga(n.content)).forEach(function (i) {
        r.push(i.id);
        t[i.id] = {
          deps: [],
          location: s,
          type: Rr(i.messages[0].meta[1][0].data)
        };
      });
    }
  });
  e.FileIndex.forEach(function (a) {
    if (a.name.match(/\.iwa/) && a.content[0] == 0) {
      Ha(Ga(a.content)).forEach(function (n) {
        n.messages.forEach(function (s) {
          [5, 6].forEach(function (i) {
            if (s.meta[i]) {
              s.meta[i].forEach(function (f) {
                t[n.id].deps.push(Rr(f.data));
              });
            }
          });
        });
      });
    }
  });
  return t;
}
function Ta(e, t, r) {
  return fe([[], [{
    type: 0,
    data: se(1)
  }], [], [{
    type: 5,
    data: new Uint8Array(Float32Array.from([e / 255]).buffer)
  }], [{
    type: 5,
    data: new Uint8Array(Float32Array.from([t / 255]).buffer)
  }], [{
    type: 5,
    data: new Uint8Array(Float32Array.from([r / 255]).buffer)
  }], [{
    type: 5,
    data: new Uint8Array(Float32Array.from([1]).buffer)
  }], [], [], [], [], [], [{
    type: 0,
    data: se(1)
  }]]);
}
function X0(e) {
  switch (e) {
    case 0:
      return Ta(99, 222, 171);
    case 1:
      return Ta(162, 197, 240);
    case 2:
      return Ta(255, 189, 189);
  }
  return Ta(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}
function kx(e, t) {
  if (!t || !t.numbers) {
    throw new Error("Must pass a `numbers` option -- check the README");
  }
  var r = Pe.read(t.numbers, {
    type: "base64"
  });
  var a = Cx(r);
  var n = Xr(r, a, 1);
  if (n == null) {
    throw `Could not find message ${1} in Numbers template`;
  }
  var s = Wa(oe(n.messages[0].data)[1], Ye);
  if (s.length > 1) {
    throw new Error("Template NUMBERS file must have exactly one sheet");
  }
  e.SheetNames.forEach(function (i, f) {
    if (f >= 1) {
      Dx(r, a, f + 1);
      n = Xr(r, a, 1);
      s = Wa(oe(n.messages[0].data)[1], Ye);
    }
    Rx(r, a, e.Sheets[i], i, f, s[f]);
  });
  return r;
}
function Re(e, t, r, a) {
  var n = Pe.find(e, t[r].location);
  if (!n) {
    throw `Could not find ${t[r].location} in Numbers template`;
  }
  var s = Ha(Ga(n.content));
  var i = s.find(function (f) {
    return f.id == r;
  });
  a(i, s);
  n.content = Pt(Nt(s));
  n.size = n.content.length;
}
function Xr(e, t, r) {
  var a = Pe.find(e, t[r].location);
  if (!a) {
    throw `Could not find ${t[r].location} in Numbers template`;
  }
  var n = Ha(Ga(a.content));
  var s = n.find(function (i) {
    return i.id == r;
  });
  return s;
}
function Fn(e, t, r) {
  e[3].push({
    type: 2,
    data: fe([[], [{
      type: 0,
      data: se(t)
    }], [{
      type: 2,
      data: _r(r.replace(/-[\s\S]*$/, ""))
    }], [{
      type: 2,
      data: _r(r)
    }], [{
      type: 2,
      data: new Uint8Array([2, 0, 0])
    }], [{
      type: 2,
      data: new Uint8Array([2, 0, 0])
    }], [], [], [], [], [{
      type: 0,
      data: se(0)
    }], [], [{
      type: 0,
      data: se(0)
    }]])
  });
  e[1] = [{
    type: 0,
    data: se(Math.max(t + 1, Rr(e[1][0].data)))
  }];
}
function ut(e, t, r, a, n, s) {
  s ||= Gr({
    deps: [],
    location: "",
    type: t
  }, n);
  var i = `${a}-${s}.iwa`;
  n[s].location = "Root Entry" + i;
  Pe.utils.cfb_add(e, i, Pt(Nt([{
    id: s,
    messages: [An(t, fe(r))]
  }])));
  var f = i.replace(/^[\/]/, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  Re(e, n, 2, function (o) {
    var l = oe(o.messages[0].data);
    Fn(l, s || 0, f);
    o.messages[0].data = fe(l);
  });
  return s;
}
function Ar(e, t, r, a) {
  var n = t[r].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  var s = e[3].findIndex(function (f) {
    var o;
    var l;
    var c = oe(f.data);
    if ((o = c[3]) != null && o[0]) {
      return ia(c[3][0].data) == n;
    } else {
      return (l = c[2]) != null && !!l[0] && ia(c[2][0].data) == n;
    }
  });
  var i = oe(e[3][s].data);
  i[6] ||= [];
  (Array.isArray(a) ? a : [a]).forEach(function (f) {
    i[6].push({
      type: 2,
      data: fe([[], [{
        type: 0,
        data: se(f)
      }]])
    });
  });
  e[3][s].data = fe(i);
}
function Ox(e, t, r, a) {
  var n = t[r].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  var s = e[3].findIndex(function (f) {
    var o;
    var l;
    var c = oe(f.data);
    if ((o = c[3]) != null && o[0]) {
      return ia(c[3][0].data) == n;
    } else {
      return (l = c[2]) != null && !!l[0] && ia(c[2][0].data) == n;
    }
  });
  var i = oe(e[3][s].data);
  i[6] ||= [];
  i[6] = i[6].filter(function (f) {
    return Rr(oe(f.data)[1][0].data) != a;
  });
  e[3][s].data = fe(i);
}
function Dx(e, t, r) {
  var a = -1;
  var n = -1;
  var s = {};
  Re(e, t, 1, function (o, l) {
    var c = oe(o.messages[0].data);
    a = Ye(oe(o.messages[0].data)[1][0].data);
    n = Gr({
      deps: [1],
      location: t[a].location,
      type: 2
    }, t);
    s[a] = n;
    lr(o, n);
    c[1].push({
      type: 2,
      data: cr(n)
    });
    var x = Xr(e, t, a);
    x.id = n;
    if (t[1].location == t[n].location) {
      l.push(x);
    } else {
      Re(e, t, n, function (h, u) {
        return u.push(x);
      });
    }
    o.messages[0].data = fe(c);
  });
  var i = -1;
  Re(e, t, n, function (o, l) {
    var c = oe(o.messages[0].data);
    for (var x = 3; x <= 69; ++x) {
      delete c[x];
    }
    var h = Wa(c[2], Ye);
    h.forEach(function (p) {
      return jr(o, p);
    });
    i = Gr({
      deps: [n],
      location: t[h[0]].location,
      type: t[h[0]].type
    }, t);
    lr(o, i);
    s[h[0]] = i;
    c[2] = [{
      type: 2,
      data: cr(i)
    }];
    var u = Xr(e, t, h[0]);
    u.id = i;
    if (t[h[0]].location == t[n].location) {
      l.push(u);
    } else {
      Re(e, t, 2, function (p) {
        var g = oe(p.messages[0].data);
        Ar(g, t, n, i);
        p.messages[0].data = fe(g);
      });
      Re(e, t, i, function (p, g) {
        return g.push(u);
      });
    }
    o.messages[0].data = fe(c);
  });
  var f = -1;
  Re(e, t, i, function (o, l) {
    var c = oe(o.messages[0].data);
    var x = oe(c[1][0].data);
    for (var h = 3; h <= 69; ++h) {
      delete x[h];
    }
    var u = Ye(x[2][0].data);
    x[2][0].data = cr(s[u]);
    c[1][0].data = fe(x);
    var p = Ye(c[2][0].data);
    jr(o, p);
    f = Gr({
      deps: [i],
      location: t[p].location,
      type: t[p].type
    }, t);
    lr(o, f);
    s[p] = f;
    c[2][0].data = cr(f);
    var g = Xr(e, t, p);
    g.id = f;
    if (t[i].location == t[f].location) {
      l.push(g);
    } else {
      Re(e, t, f, function (m, v) {
        return v.push(g);
      });
    }
    o.messages[0].data = fe(c);
  });
  Re(e, t, f, function (o, l) {
    var c;
    var x;
    var h = oe(o.messages[0].data);
    var u = ia(h[1][0].data);
    var p = u.replace(/-[A-Z0-9]*/, `-${("0000" + r.toString(16)).slice(-4)}`);
    h[1][0].data = _r(p);
    [12, 13, 29, 31, 32, 33, 39, 44, 47, 81, 82, 84].forEach(function (H) {
      return delete h[H];
    });
    if (h[45]) {
      var g = oe(h[45][0].data);
      var m = Ye(g[1][0].data);
      jr(o, m);
      delete h[45];
    }
    if (h[70]) {
      var v = oe(h[70][0].data);
      if ((c = v[2]) != null) {
        c.forEach(function (H) {
          var V = oe(H.data);
          [2, 3].map(function (y) {
            return V[y][0];
          }).forEach(function (y) {
            var N = oe(y.data);
            if (N[8]) {
              var D = Ye(N[8][0].data);
              jr(o, D);
            }
          });
        });
      }
      delete h[70];
    }
    [46, 30, 34, 35, 36, 38, 48, 49, 60, 61, 62, 63, 64, 71, 72, 73, 74, 75, 85, 86, 87, 88, 89].forEach(function (H) {
      if (h[H]) {
        var V = Ye(h[H][0].data);
        delete h[H];
        jr(o, V);
      }
    });
    var C = oe(h[4][0].data);
    {
      [2, 4, 5, 6, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22].forEach(function (H) {
        var V;
        if ((V = C[H]) != null && V[0]) {
          var y = Ye(C[H][0].data);
          var N = Gr({
            deps: [f],
            location: t[y].location,
            type: t[y].type
          }, t);
          jr(o, y);
          lr(o, N);
          s[y] = N;
          var D = Xr(e, t, y);
          D.id = N;
          if (t[y].location == t[f].location) {
            l.push(D);
          } else {
            t[N].location = t[y].location.replace(y.toString(), N.toString());
            if (t[N].location == t[y].location) {
              t[N].location = t[N].location.replace(/\.iwa/, `-${N}.iwa`);
            }
            Pe.utils.cfb_add(e, t[N].location, Pt(Nt([D])));
            var X = t[N].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
            Re(e, t, 2, function (b) {
              var Y = oe(b.messages[0].data);
              Fn(Y, N, X);
              Ar(Y, t, f, N);
              b.messages[0].data = fe(Y);
            });
          }
          C[H][0].data = cr(N);
        }
      });
      var F = oe(C[1][0].data);
      if ((x = F[2]) != null) {
        x.forEach(function (H) {
          var V = Ye(H.data);
          var y = Gr({
            deps: [f],
            location: t[V].location,
            type: t[V].type
          }, t);
          jr(o, V);
          lr(o, y);
          s[V] = y;
          var N = Xr(e, t, V);
          N.id = y;
          if (t[V].location == t[f].location) {
            l.push(N);
          } else {
            t[y].location = t[V].location.replace(V.toString(), y.toString());
            if (t[y].location == t[V].location) {
              t[y].location = t[y].location.replace(/\.iwa/, `-${y}.iwa`);
            }
            Pe.utils.cfb_add(e, t[y].location, Pt(Nt([N])));
            var D = t[y].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
            Re(e, t, 2, function (X) {
              var b = oe(X.messages[0].data);
              Fn(b, y, D);
              Ar(b, t, f, y);
              X.messages[0].data = fe(b);
            });
          }
          H.data = cr(y);
        });
      }
      C[1][0].data = fe(F);
      var U = oe(C[3][0].data);
      U[1].forEach(function (H) {
        var V = oe(H.data);
        var y = Ye(V[2][0].data);
        var N = s[y];
        if (!s[y]) {
          N = Gr({
            deps: [f],
            location: "",
            type: t[y].type
          }, t);
          t[N].location = `Root Entry/Index/Tables/Tile-${N}.iwa`;
          s[y] = N;
          var D = Xr(e, t, y);
          D.id = N;
          jr(o, y);
          lr(o, N);
          Pe.utils.cfb_add(e, `/Index/Tables/Tile-${N}.iwa`, Pt(Nt([D])));
          Re(e, t, 2, function (X) {
            var b = oe(X.messages[0].data);
            b[3].push({
              type: 2,
              data: fe([[], [{
                type: 0,
                data: se(N)
              }], [{
                type: 2,
                data: _r("Tables/Tile")
              }], [{
                type: 2,
                data: _r(`Tables/Tile-${N}`)
              }], [{
                type: 2,
                data: new Uint8Array([2, 0, 0])
              }], [{
                type: 2,
                data: new Uint8Array([2, 0, 0])
              }], [], [], [], [], [{
                type: 0,
                data: se(0)
              }], [], [{
                type: 0,
                data: se(0)
              }]])
            });
            b[1] = [{
              type: 0,
              data: se(Math.max(N + 1, Rr(b[1][0].data)))
            }];
            Ar(b, t, f, N);
            X.messages[0].data = fe(b);
          });
        }
        V[2][0].data = cr(N);
        H.data = fe(V);
      });
      C[3][0].data = fe(U);
    }
    h[4][0].data = fe(C);
    o.messages[0].data = fe(h);
  });
}
function Rx(e, t, r, a, n, s) {
  var i = [];
  Re(e, t, s, function (l) {
    var c = oe(l.messages[0].data);
    c[1] = [{
      type: 2,
      data: _r(a)
    }];
    i = Wa(c[2], Ye);
    l.messages[0].data = fe(c);
  });
  var f = Xr(e, t, i[0]);
  var o = Ye(oe(f.messages[0].data)[2][0].data);
  Re(e, t, o, function (l, c) {
    return Ix(e, t, r, l, c, o);
  });
}
function Ix(e, t, r, a, n, s) {
  if (!r["!ref"]) {
    throw new Error("Cannot export empty sheet to NUMBERS");
  }
  var i = sr(r["!ref"]);
  i.s.r = i.s.c = 0;
  var f = false;
  if (i.e.c > 999) {
    f = true;
    i.e.c = 999;
  }
  if (i.e.r > 999999) {
    f = true;
    i.e.r = 999999;
  }
  if (f) {
    console.error(`Truncating to ${Je(i)}`);
  }
  var o = [];
  if (r["!data"]) {
    o = r["!data"];
  } else {
    var l = [];
    for (var c = 0; c <= i.e.c; ++c) {
      l[c] = Ie(c);
    }
    for (var x = 0; x <= i.e.r; ++x) {
      o[x] = [];
      var h = "" + (x + 1);
      for (c = 0; c <= i.e.c; ++c) {
        var u = r[l[c] + h];
        if (u) {
          o[x][c] = u;
        }
      }
    }
  }
  var p = {
    cmnt: [{
      a: "~54ee77S~",
      t: "... the people who are crazy enough to think they can change the world, are the ones who do."
    }],
    rsst: [{
      v: "~54ee77S~",
      l: "https://sheetjs.com/"
    }],
    sst: ["~Sh33tJ5~"]
  };
  var g = oe(a.messages[0].data);
  {
    g[6][0].data = se(i.e.r + 1);
    g[7][0].data = se(i.e.c + 1);
    delete g[46];
    var m = oe(g[4][0].data);
    {
      var v = Ye(oe(m[1][0].data)[2][0].data);
      Re(e, t, v, function (ve, ge) {
        var Te;
        var Fe = oe(ve.messages[0].data);
        if ((Te = Fe == null ? undefined : Fe[2]) != null && Te[0]) {
          for (var ye = 0; ye < o.length; ++ye) {
            var Ee = oe(Fe[2][0].data);
            Ee[1][0].data = se(ye);
            Ee[4][0].data = se(o[ye].length);
            Fe[2][ye] = {
              type: Fe[2][0].type,
              data: fe(Ee)
            };
          }
        }
        ve.messages[0].data = fe(Fe);
      });
      var C = Ye(m[2][0].data);
      Re(e, t, C, function (ve, ge) {
        var Te = oe(ve.messages[0].data);
        for (var Fe = 0; Fe <= i.e.c; ++Fe) {
          var ye = oe(Te[2][0].data);
          ye[1][0].data = se(Fe);
          ye[4][0].data = se(i.e.r + 1);
          Te[2][Fe] = {
            type: Te[2][0].type,
            data: fe(ye)
          };
        }
        ve.messages[0].data = fe(Te);
      });
      var F = oe(m[9][0].data);
      F[1] = [];
      var U = oe(m[3][0].data);
      {
        var H = 256;
        U[2] = [{
          type: 0,
          data: se(H)
        }];
        var V = Ye(oe(U[1][0].data)[2][0].data);
        var y = function () {
          var ve = Xr(e, t, 2);
          var ge = oe(ve.messages[0].data);
          var Te = ge[3].filter(function (Fe) {
            return Rr(oe(Fe.data)[1][0].data) == V;
          });
          if (Te != null && Te.length) {
            return Rr(oe(Te[0].data)[12][0].data);
          } else {
            return 0;
          }
        }();
        Pe.utils.cfb_del(e, t[V].location);
        Re(e, t, 2, function (ve) {
          var ge = oe(ve.messages[0].data);
          ge[3] = ge[3].filter(function (Te) {
            return Rr(oe(Te.data)[1][0].data) != V;
          });
          Ox(ge, t, s, V);
          ve.messages[0].data = fe(ge);
        });
        jr(a, V);
        U[1] = [];
        for (var N = Math.ceil((i.e.r + 1) / H), D = 0; D < N; ++D) {
          var X = Gr({
            deps: [],
            location: "",
            type: 6002
          }, t);
          t[X].location = `Root Entry/Index/Tables/Tile-${X}.iwa`;
          var b = [[], [{
            type: 0,
            data: se(0)
          }], [{
            type: 0,
            data: se(Math.min(i.e.r + 1, (D + 1) * H))
          }], [{
            type: 0,
            data: se(0)
          }], [{
            type: 0,
            data: se(Math.min((D + 1) * H, i.e.r + 1) - D * H)
          }], [], [{
            type: 0,
            data: se(5)
          }], [{
            type: 0,
            data: se(1)
          }], [{
            type: 0,
            data: se(1)
          }]];
          for (var Y = D * H; Y <= Math.min(i.e.r, (D + 1) * H - 1); ++Y) {
            var le = yx(o[Y], p);
            le[1][0].data = se(Y - D * H);
            b[5].push({
              data: fe(le),
              type: 2
            });
          }
          U[1].push({
            type: 2,
            data: fe([[], [{
              type: 0,
              data: se(D)
            }], [{
              type: 2,
              data: cr(X)
            }]])
          });
          var _e = {
            id: X,
            messages: [An(6002, fe(b))]
          };
          var ce = Pt(Nt([_e]));
          Pe.utils.cfb_add(e, `/Index/Tables/Tile-${X}.iwa`, ce);
          Re(e, t, 2, function (ve) {
            var ge = oe(ve.messages[0].data);
            ge[3].push({
              type: 2,
              data: fe([[], [{
                type: 0,
                data: se(X)
              }], [{
                type: 2,
                data: _r("Tables/Tile")
              }], [{
                type: 2,
                data: _r(`Tables/Tile-${X}`)
              }], [{
                type: 2,
                data: new Uint8Array([2, 0, 0])
              }], [{
                type: 2,
                data: new Uint8Array([2, 0, 0])
              }], [], [], [], [], [{
                type: 0,
                data: se(0)
              }], [], [{
                type: 0,
                data: se(y)
              }]])
            });
            ge[1] = [{
              type: 0,
              data: se(Math.max(X + 1, Rr(ge[1][0].data)))
            }];
            Ar(ge, t, s, X);
            ve.messages[0].data = fe(ge);
          });
          lr(a, X);
          F[1].push({
            type: 2,
            data: fe([[], [{
              type: 0,
              data: se(D * H)
            }], [{
              type: 0,
              data: se(D)
            }]])
          });
        }
      }
      m[3][0].data = fe(U);
      m[9][0].data = fe(F);
      m[10] = [{
        type: 2,
        data: new Uint8Array([])
      }];
      if (r["!merges"]) {
        var rr = Gr({
          type: 6144,
          deps: [s],
          location: t[s].location
        }, t);
        n.push({
          id: rr,
          messages: [An(6144, fe([[], r["!merges"].map(function (ve) {
            return {
              type: 2,
              data: fe([[], [{
                type: 2,
                data: fe([[], [{
                  type: 5,
                  data: new Uint8Array(new Uint16Array([ve.s.r, ve.s.c]).buffer)
                }]])
              }], [{
                type: 2,
                data: fe([[], [{
                  type: 5,
                  data: new Uint8Array(new Uint16Array([ve.e.r - ve.s.r + 1, ve.e.c - ve.s.c + 1]).buffer)
                }]])
              }]])
            };
          })]))]
        });
        m[13] = [{
          type: 2,
          data: cr(rr)
        }];
        Re(e, t, 2, function (ve) {
          var ge = oe(ve.messages[0].data);
          Ar(ge, t, s, rr);
          ve.messages[0].data = fe(ge);
        });
        lr(a, rr);
      } else {
        delete m[13];
      }
      var he = Ye(m[4][0].data);
      Re(e, t, he, function (ve) {
        var ge = oe(ve.messages[0].data);
        ge[3] = [];
        p.sst.forEach(function (Te, Fe) {
          if (Fe != 0) {
            ge[3].push({
              type: 2,
              data: fe([[], [{
                type: 0,
                data: se(Fe)
              }], [{
                type: 0,
                data: se(1)
              }], [{
                type: 2,
                data: _r(Te)
              }]])
            });
          }
        });
        ve.messages[0].data = fe(ge);
      });
      var Qe = Ye(m[17][0].data);
      Re(e, t, Qe, function (ve) {
        var ge = oe(ve.messages[0].data);
        ge[3] = [];
        var Te = [904980, 903835, 903815, 903845];
        p.rsst.forEach(function (Fe, ye) {
          if (ye != 0) {
            var Ee = [[], [{
              type: 0,
              data: new Uint8Array([5])
            }], [], [{
              type: 2,
              data: _r(Fe.v)
            }]];
            Ee[10] = [{
              type: 0,
              data: new Uint8Array([1])
            }];
            Ee[19] = [{
              type: 2,
              data: new Uint8Array([10, 6, 8, 0, 18, 2, 101, 110])
            }];
            Ee[5] = [{
              type: 2,
              data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 155, 149, 55])
            }];
            Ee[2] = [{
              type: 2,
              data: new Uint8Array([8, 148, 158, 55])
            }];
            Ee[6] = [{
              type: 2,
              data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0])
            }];
            Ee[7] = [{
              type: 2,
              data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 135, 149, 55])
            }];
            Ee[8] = [{
              type: 2,
              data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 165, 149, 55])
            }];
            Ee[14] = [{
              type: 2,
              data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0])
            }];
            Ee[24] = [{
              type: 2,
              data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0])
            }];
            var A = Gr({
              deps: [],
              location: "",
              type: 2001
            }, t);
            var B = [];
            if (Fe.l) {
              var O = ut(e, 2032, [[], [], [{
                type: 2,
                data: _r(Fe.l)
              }]], "/Index/Tables/DataList", t);
              Ee[11] = [];
              var k = [[], []];
              k[1] ||= [];
              k[1].push({
                type: 2,
                data: fe([[], [{
                  type: 0,
                  data: se(0)
                }], [{
                  type: 2,
                  data: cr(O)
                }]])
              });
              Ee[11][0] = {
                type: 2,
                data: fe(k)
              };
              B.push(O);
            }
            ut(e, 2001, Ee, "/Index/Tables/DataList", t, A);
            Re(e, t, A, function (ne) {
              Te.forEach(function (re) {
                return lr(ne, re);
              });
              B.forEach(function (re) {
                return lr(ne, re);
              });
            });
            var z = ut(e, 6218, [[], [{
              type: 2,
              data: cr(A)
            }], [], [{
              type: 2,
              data: new Uint8Array([13, 255, 255, 255, 0, 18, 10, 16, 255, 255, 1, 24, 255, 255, 255, 255, 7])
            }]], "/Index/Tables/DataList", t);
            Re(e, t, z, function (ne) {
              return lr(ne, A);
            });
            ge[3].push({
              type: 2,
              data: fe([[], [{
                type: 0,
                data: se(ye)
              }], [{
                type: 0,
                data: se(1)
              }], [], [], [], [], [], [], [{
                type: 2,
                data: cr(z)
              }]])
            });
            lr(ve, z);
            Re(e, t, 2, function (ne) {
              var re = oe(ne.messages[0].data);
              Ar(re, t, Qe, z);
              Ar(re, t, z, A);
              Ar(re, t, A, B);
              Ar(re, t, A, Te);
              ne.messages[0].data = fe(re);
            });
          }
        });
        ve.messages[0].data = fe(ge);
      });
      if (p.cmnt.length > 1) {
        var Xe = Ye(m[19][0].data);
        var mr = {};
        var yr = 0;
        Re(e, t, Xe, function (ve) {
          var ge = oe(ve.messages[0].data);
          ge[3] = [];
          p.cmnt.forEach(function (Te, Fe) {
            if (Fe != 0) {
              var ye = [];
              if (Te.replies) {
                Te.replies.forEach(function (B) {
                  mr[B.a || ""] ||= ut(e, 212, [[], [{
                    type: 2,
                    data: _r(B.a || "")
                  }], [{
                    type: 2,
                    data: X0(++yr)
                  }], [], [{
                    type: 0,
                    data: se(0)
                  }]], "/Index/Tables/DataList", t);
                  var O = mr[B.a || ""];
                  var k = ut(e, 3056, [[], [{
                    type: 2,
                    data: _r(B.t || "")
                  }], [{
                    type: 2,
                    data: fe([[], [{
                      type: 1,
                      data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65])
                    }]])
                  }], [{
                    type: 2,
                    data: cr(O)
                  }]], "/Index/Tables/DataList", t);
                  Re(e, t, k, function (z) {
                    return lr(z, O);
                  });
                  ye.push(k);
                  Re(e, t, 2, function (z) {
                    var ne = oe(z.messages[0].data);
                    Ar(ne, t, k, O);
                    z.messages[0].data = fe(ne);
                  });
                });
              }
              mr[Te.a || ""] ||= ut(e, 212, [[], [{
                type: 2,
                data: _r(Te.a || "")
              }], [{
                type: 2,
                data: X0(++yr)
              }], [], [{
                type: 0,
                data: se(0)
              }]], "/Index/Tables/DataList", t);
              var Ee = mr[Te.a || ""];
              var A = ut(e, 3056, [[], [{
                type: 2,
                data: _r(Te.t || "")
              }], [{
                type: 2,
                data: fe([[], [{
                  type: 1,
                  data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65])
                }]])
              }], [{
                type: 2,
                data: cr(Ee)
              }], ye.map(function (B) {
                return {
                  type: 2,
                  data: cr(B)
                };
              }), [{
                type: 2,
                data: fe([[], [{
                  type: 0,
                  data: se(Fe)
                }], [{
                  type: 0,
                  data: se(0)
                }]])
              }]], "/Index/Tables/DataList", t);
              Re(e, t, A, function (B) {
                lr(B, Ee);
                ye.forEach(function (O) {
                  return lr(B, O);
                });
              });
              ge[3].push({
                type: 2,
                data: fe([[], [{
                  type: 0,
                  data: se(Fe)
                }], [{
                  type: 0,
                  data: se(1)
                }], [], [], [], [], [], [], [], [{
                  type: 2,
                  data: cr(A)
                }]])
              });
              lr(ve, A);
              Re(e, t, 2, function (B) {
                var O = oe(B.messages[0].data);
                Ar(O, t, Xe, A);
                Ar(O, t, A, Ee);
                if (ye.length) {
                  Ar(O, t, A, ye);
                }
                B.messages[0].data = fe(O);
              });
            }
          });
          ge[2][0].data = se(p.cmnt.length + 1);
          ve.messages[0].data = fe(ge);
        });
      }
    }
    g[4][0].data = fe(m);
  }
  a.messages[0].data = fe(g);
}
function Nx(e) {
  return function (r) {
    for (var a = 0; a != e.length; ++a) {
      var n = e[a];
      if (r[n[0]] === undefined) {
        r[n[0]] = n[1];
      }
      if (n[2] === "n") {
        r[n[0]] = Number(r[n[0]]);
      }
    }
  };
}
function Kn(e) {
  Nx([["cellDates", false], ["bookSST", false], ["bookType", "xlsx"], ["compression", false], ["WTF", false]])(e);
}
function Px(e, t) {
  if (e && !e.SSF) {
    e.SSF = pr(Me);
  }
  if (e && e.SSF) {
    za();
    $a(e.SSF);
    t.revssf = Ka(e.SSF);
    t.revssf[e.SSF[65535]] = 0;
    t.ssf = e.SSF;
  }
  t.rels = {};
  t.wbrels = {};
  t.Strings = [];
  t.Strings.Count = 0;
  t.Strings.Unique = 0;
  if (qt) {
    t.revStrings = new Map();
  } else {
    t.revStrings = {};
    t.revStrings.foo = [];
    delete t.revStrings.foo;
  }
  var r = "bin";
  var a = true;
  var n = Si();
  Kn(t = t || {});
  var s = Nn();
  var i = "";
  var f = 0;
  t.cellXfs = [];
  ot(t.cellXfs, {}, {
    revssf: {
      General: 0
    }
  });
  e.Props ||= {};
  i = "docProps/core.xml";
  pe(s, i, Ci(e.Props, t));
  n.coreprops.push(i);
  ke(t.rels, 2, i, Ae.CORE_PROPS);
  i = "docProps/app.xml";
  if (!e.Props || !e.Props.SheetNames) {
    if (!e.Workbook || !e.Workbook.Sheets) {
      e.Props.SheetNames = e.SheetNames;
    } else {
      var o = [];
      for (var l = 0; l < e.SheetNames.length; ++l) {
        if ((e.Workbook.Sheets[l] || {}).Hidden != 2) {
          o.push(e.SheetNames[l]);
        }
      }
      e.Props.SheetNames = o;
    }
  }
  e.Props.Worksheets = e.Props.SheetNames.length;
  pe(s, i, Oi(e.Props));
  n.extprops.push(i);
  ke(t.rels, 3, i, Ae.EXT_PROPS);
  if (e.Custprops !== e.Props && Ze(e.Custprops || {}).length > 0) {
    i = "docProps/custom.xml";
    pe(s, i, Di(e.Custprops));
    n.custprops.push(i);
    ke(t.rels, 4, i, Ae.CUST_PROPS);
  }
  var c = ["SheetJ5"];
  t.tcid = 0;
  f = 1;
  for (; f <= e.SheetNames.length; ++f) {
    var x = {
      "!id": {}
    };
    var h = e.Sheets[e.SheetNames[f - 1]];
    var u = (h || {})["!type"] || "sheet";
    switch (u) {
      case "chart":
      default:
        i = "xl/worksheets/sheet" + f + "." + r;
        pe(s, i, pu(f - 1, t, e, x));
        n.sheets.push(i);
        ke(t.wbrels, -1, "worksheets/sheet" + f + "." + r, Ae.WS[0]);
    }
    if (h) {
      var p = h["!comments"];
      var g = false;
      var m = "";
      if (p && p.length > 0) {
        var v = false;
        p.forEach(function (F) {
          F[1].forEach(function (U) {
            if (U.T == true) {
              v = true;
            }
          });
        });
        if (v) {
          m = "xl/threadedComments/threadedComment" + f + ".xml";
          pe(s, m, Vi(p, c, t));
          n.threadedcomments.push(m);
          ke(x, -1, "../threadedComments/threadedComment" + f + ".xml", Ae.TCMNT);
        }
        m = "xl/comments" + f + "." + r;
        pe(s, m, ic(p));
        n.comments.push(m);
        ke(x, -1, "../comments" + f + "." + r, Ae.CMNT);
        g = true;
      }
      if (h["!legacy"] && g) {
        pe(s, "xl/drawings/vmlDrawing" + f + ".vml", Xi(f, h["!comments"]));
      }
      delete h["!comments"];
      delete h["!legacy"];
    }
    if (x["!id"].rId1) {
      pe(s, Fi(i), Rt(x));
    }
  }
  if (t.Strings != null && t.Strings.length > 0) {
    i = "xl/sharedStrings." + r;
    pe(s, i, pl(t.Strings));
    n.strs.push(i);
    ke(t.wbrels, -1, "sharedStrings." + r, Ae.SST);
  }
  i = "xl/workbook." + r;
  pe(s, i, Mu(e));
  n.workbooks.push(i);
  ke(t.rels, 1, i, Ae.WB);
  i = "xl/theme/theme1.xml";
  var C = Gi(e.Themes, t);
  pe(s, i, C);
  n.themes.push(i);
  ke(t.wbrels, -1, "theme/theme1.xml", Ae.THEME);
  i = "xl/styles." + r;
  pe(s, i, Xl(e, t));
  n.styles.push(i);
  ke(t.wbrels, -1, "styles." + r, Ae.STY);
  if (e.vbaraw && a) {
    i = "xl/vbaProject.bin";
    pe(s, i, e.vbaraw);
    n.vba.push(i);
    ke(t.wbrels, -1, "vbaProject.bin", Ae.VBA);
  }
  i = "xl/metadata." + r;
  pe(s, i, Jl());
  n.metadata.push(i);
  ke(t.wbrels, -1, "metadata." + r, Ae.XLMETA);
  if (c.length > 1) {
    i = "xl/persons/person.xml";
    pe(s, i, $i(c));
    n.people.push(i);
    ke(t.wbrels, -1, "persons/person.xml", Ae.PEOPLE);
  }
  pe(s, "[Content_Types].xml", Ai(n, t));
  pe(s, "_rels/.rels", Rt(t.rels));
  pe(s, "xl/_rels/workbook." + r + ".rels", Rt(t.wbrels));
  delete t.revssf;
  delete t.ssf;
  return s;
}
function Lx(e, t) {
  if (e && !e.SSF) {
    e.SSF = pr(Me);
  }
  if (e && e.SSF) {
    za();
    $a(e.SSF);
    t.revssf = Ka(e.SSF);
    t.revssf[e.SSF[65535]] = 0;
    t.ssf = e.SSF;
  }
  t.rels = {};
  t.wbrels = {};
  t.Strings = [];
  t.Strings.Count = 0;
  t.Strings.Unique = 0;
  if (qt) {
    t.revStrings = new Map();
  } else {
    t.revStrings = {};
    t.revStrings.foo = [];
    delete t.revStrings.foo;
  }
  var r = "xml";
  var a = fc.indexOf(t.bookType) > -1;
  var n = Si();
  Kn(t = t || {});
  var s = Nn();
  var i = "";
  var f = 0;
  t.cellXfs = [];
  ot(t.cellXfs, {}, {
    revssf: {
      General: 0
    }
  });
  e.Props ||= {};
  i = "docProps/core.xml";
  pe(s, i, Ci(e.Props, t));
  n.coreprops.push(i);
  ke(t.rels, 2, i, Ae.CORE_PROPS);
  i = "docProps/app.xml";
  if (!e.Props || !e.Props.SheetNames) {
    if (!e.Workbook || !e.Workbook.Sheets) {
      e.Props.SheetNames = e.SheetNames;
    } else {
      var o = [];
      for (var l = 0; l < e.SheetNames.length; ++l) {
        if ((e.Workbook.Sheets[l] || {}).Hidden != 2) {
          o.push(e.SheetNames[l]);
        }
      }
      e.Props.SheetNames = o;
    }
  }
  e.Props.Worksheets = e.Props.SheetNames.length;
  pe(s, i, Oi(e.Props));
  n.extprops.push(i);
  ke(t.rels, 3, i, Ae.EXT_PROPS);
  if (e.Custprops !== e.Props && Ze(e.Custprops || {}).length > 0) {
    i = "docProps/custom.xml";
    pe(s, i, Di(e.Custprops));
    n.custprops.push(i);
    ke(t.rels, 4, i, Ae.CUST_PROPS);
  }
  var c = ["SheetJ5"];
  t.tcid = 0;
  f = 1;
  for (; f <= e.SheetNames.length; ++f) {
    var x = {
      "!id": {}
    };
    var h = e.Sheets[e.SheetNames[f - 1]];
    var u = (h || {})["!type"] || "sheet";
    switch (u) {
      case "chart":
      default:
        i = "xl/worksheets/sheet" + f + "." + r;
        pe(s, i, th(f - 1, t, e, x));
        n.sheets.push(i);
        ke(t.wbrels, -1, "worksheets/sheet" + f + "." + r, Ae.WS[0]);
    }
    if (h) {
      var p = h["!comments"];
      var g = false;
      var m = "";
      if (p && p.length > 0) {
        var v = false;
        p.forEach(function (C) {
          C[1].forEach(function (F) {
            if (F.T == true) {
              v = true;
            }
          });
        });
        if (v) {
          m = "xl/threadedComments/threadedComment" + f + ".xml";
          pe(s, m, Vi(p, c, t));
          n.threadedcomments.push(m);
          ke(x, -1, "../threadedComments/threadedComment" + f + ".xml", Ae.TCMNT);
        }
        m = "xl/comments" + f + "." + r;
        pe(s, m, rc(p));
        n.comments.push(m);
        ke(x, -1, "../comments" + f + "." + r, Ae.CMNT);
        g = true;
      }
      if (h["!legacy"] && g) {
        pe(s, "xl/drawings/vmlDrawing" + f + ".vml", Xi(f, h["!comments"]));
      }
      delete h["!comments"];
      delete h["!legacy"];
    }
    if (x["!id"].rId1) {
      pe(s, Fi(i), Rt(x));
    }
  }
  if (t.Strings != null && t.Strings.length > 0) {
    i = "xl/sharedStrings." + r;
    pe(s, i, hl(t.Strings, t));
    n.strs.push(i);
    ke(t.wbrels, -1, "sharedStrings." + r, Ae.SST);
  }
  i = "xl/workbook." + r;
  pe(s, i, Eu(e));
  n.workbooks.push(i);
  ke(t.rels, 1, i, Ae.WB);
  i = "xl/theme/theme1.xml";
  pe(s, i, Gi(e.Themes, t));
  n.themes.push(i);
  ke(t.wbrels, -1, "theme/theme1.xml", Ae.THEME);
  i = "xl/styles." + r;
  pe(s, i, El(e, t));
  n.styles.push(i);
  ke(t.wbrels, -1, "styles." + r, Ae.STY);
  if (e.vbaraw && a) {
    i = "xl/vbaProject.bin";
    pe(s, i, e.vbaraw);
    n.vba.push(i);
    ke(t.wbrels, -1, "vbaProject.bin", Ae.VBA);
  }
  i = "xl/metadata." + r;
  pe(s, i, ql());
  n.metadata.push(i);
  ke(t.wbrels, -1, "metadata." + r, Ae.XLMETA);
  if (c.length > 1) {
    i = "xl/persons/person.xml";
    pe(s, i, $i(c));
    n.people.push(i);
    ke(t.wbrels, -1, "persons/person.xml", Ae.PEOPLE);
  }
  pe(s, "[Content_Types].xml", Ai(n, t));
  pe(s, "_rels/.rels", Rt(t.rels));
  pe(s, "xl/_rels/workbook." + r + ".rels", Rt(t.wbrels));
  delete t.revssf;
  delete t.ssf;
  return s;
}
function Mx(e, t) {
  var r = "";
  switch ((t || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = it(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (t && t.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function us(e, t) {
  switch (t.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      t.type = "";
      break;
    case "file":
      return oa(t.file, Pe.write(e, {
        type: Oe ? "buffer" : ""
      }));
    case "string":
      throw new Error("'string' output type invalid for '" + t.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return Pe.write(e, t);
}
function Bx(e, t) {
  switch (t.bookType) {
    case "ods":
      return ls(e, t);
    case "numbers":
      return kx(e, t);
    case "xlsb":
      return Px(e, t);
    default:
      return Lx(e, t);
  }
}
function bx(e, t) {
  var r = pr(t || {});
  var a = Bx(e, r);
  return Ux(a, r);
}
function Ux(e, t) {
  var r = {};
  var a = Oe ? "nodebuffer" : typeof Uint8Array !== "undefined" ? "array" : "string";
  if (t.compression) {
    r.compression = "DEFLATE";
  }
  if (t.password) {
    r.type = a;
  } else {
    switch (t.type) {
      case "base64":
        r.type = "base64";
        break;
      case "binary":
        r.type = "string";
        break;
      case "string":
        throw new Error("'string' output type invalid for '" + t.bookType + "' files");
      case "buffer":
      case "file":
        r.type = a;
        break;
      default:
        throw new Error("Unrecognized type " + t.type);
    }
  }
  var n = e.FullPaths ? Pe.write(e, {
    fileType: "zip",
    type: {
      nodebuffer: "buffer",
      string: "binary"
    }[r.type] || r.type,
    compression: !!t.compression
  }) : e.generate(r);
  if (typeof Deno !== "undefined" && typeof n == "string") {
    if (t.type == "binary" || t.type == "base64") {
      return n;
    }
    n = new Uint8Array(Va(n));
  }
  if (t.password && typeof encrypt_agile !== "undefined") {
    return us(encrypt_agile(n, t.password), t);
  } else if (t.type === "file") {
    return oa(t.file, n);
  } else if (t.type == "string") {
    return Dt(n);
  } else {
    return n;
  }
}
function Wx(e, t) {
  var r = t || {};
  var a = Zu(e, r);
  return us(a, r);
}
function Hr(e, t, r) {
  r ||= "";
  var a = r + e;
  switch (t.type) {
    case "base64":
      return ya(ea(a));
    case "binary":
      return ea(a);
    case "string":
      return e;
    case "file":
      return oa(t.file, a, "utf8");
    case "buffer":
      if (Oe) {
        return zr(a, "utf8");
      } else if (typeof TextEncoder !== "undefined") {
        return new TextEncoder().encode(a);
      } else {
        return Hr(a, {
          type: "binary"
        }).split("").map(function (n) {
          return n.charCodeAt(0);
        });
      }
  }
  throw new Error("Unrecognized type " + t.type);
}
function Hx(e, t) {
  switch (t.type) {
    case "base64":
      return Us(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return oa(t.file, e, "binary");
    case "buffer":
      if (Oe) {
        return zr(e, "binary");
      } else {
        return e.split("").map(function (r) {
          return r.charCodeAt(0);
        });
      }
  }
  throw new Error("Unrecognized type " + t.type);
}
function Ea(e, t) {
  switch (t.type) {
    case "string":
    case "base64":
    case "binary":
      var r = "";
      for (var a = 0; a < e.length; ++a) {
        r += String.fromCharCode(e[a]);
      }
      if (t.type == "base64") {
        return ya(r);
      } else if (t.type == "string") {
        return Dt(r);
      } else {
        return r;
      }
    case "file":
      return oa(t.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
}
function xs(e, t) {
  bs();
  Tu(e);
  var r = pr(t || {});
  if (r.cellStyles) {
    r.cellNF = true;
    r.sheetStubs = true;
  }
  if (r.type == "array") {
    r.type = "binary";
    var a = xs(e, r);
    r.type = "array";
    return Va(a);
  }
  var n = 0;
  if (r.sheet && (typeof r.sheet == "number" ? n = r.sheet : n = e.SheetNames.indexOf(r.sheet), !e.SheetNames[n])) {
    throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
  }
  switch (r.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return Hr(Yu(e, r), r);
    case "slk":
    case "sylk":
      return Hr(fl.from_sheet(e.Sheets[e.SheetNames[n]], r, e), r);
    case "htm":
    case "html":
      return Hr(ss(e.Sheets[e.SheetNames[n]], r), r);
    case "txt":
      return Hx(ds(e.Sheets[e.SheetNames[n]], r), r);
    case "csv":
      return Hr(Yn(e.Sheets[e.SheetNames[n]], r), r, "﻿");
    case "dif":
      return Hr(ol.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "dbf":
      return Ea(sl.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "prn":
      return Hr(ll.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "rtf":
      return Hr(vl(e.Sheets[e.SheetNames[n]]), r);
    case "eth":
      return Hr(Bi.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "fods":
      return Hr(ls(e, r), r);
    case "wk1":
      return Ea(R0.sheet_to_wk1(e.Sheets[e.SheetNames[n]], r), r);
    case "wk3":
      return Ea(R0.book_to_wk3(e, r), r);
    case "biff2":
      r.biff ||= 2;
    case "biff3":
      r.biff ||= 3;
    case "biff4":
      r.biff ||= 4;
      return Ea(is(e, r), r);
    case "biff5":
      r.biff ||= 5;
    case "biff8":
    case "xla":
    case "xls":
      r.biff ||= 8;
      return Wx(e, r);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return bx(e, r);
    default:
      throw new Error("Unrecognized bookType |" + r.bookType + "|");
  }
}
function Gx(e, t, r, a, n, s, i) {
  var f = Ne(r);
  var o = i.defval;
  var l = i.raw || !Object.prototype.hasOwnProperty.call(i, "raw");
  var c = true;
  var x = e["!data"] != null;
  var h = n === 1 ? [] : {};
  if (n !== 1) {
    if (Object.defineProperty) {
      try {
        Object.defineProperty(h, "__rowNum__", {
          value: r,
          enumerable: false
        });
      } catch {
        h.__rowNum__ = r;
      }
    } else {
      h.__rowNum__ = r;
    }
  }
  if (!x || e["!data"][r]) {
    for (var u = t.s.c; u <= t.e.c; ++u) {
      var p = x ? (e["!data"][r] || [])[u] : e[a[u] + f];
      if (p == null || p.t === undefined) {
        if (o === undefined) {
          continue;
        }
        if (s[u] != null) {
          h[s[u]] = o;
        }
        continue;
      }
      var g = p.v;
      switch (p.t) {
        case "z":
          if (g == null) {
            break;
          }
          continue;
        case "e":
          g = g == 0 ? null : undefined;
          break;
        case "s":
        case "b":
        case "n":
          if (!p.z || !vt(p.z) || (g = Ot(g), typeof g == "number")) {
            break;
          }
        case "d":
          if (!i || !i.UTC && i.raw !== false) {
            g = Lt(new Date(g));
          }
          break;
        default:
          throw new Error("unrecognized type " + p.t);
      }
      if (s[u] != null) {
        if (g == null) {
          if (p.t == "e" && g === null) {
            h[s[u]] = null;
          } else if (o !== undefined) {
            h[s[u]] = o;
          } else if (l && g === null) {
            h[s[u]] = null;
          } else {
            continue;
          }
        } else {
          h[s[u]] = (p.t === "n" && typeof i.rawNumbers == "boolean" ? i.rawNumbers : l) ? g : rt(p, g, i);
        }
        if (g != null) {
          c = false;
        }
      }
    }
  }
  return {
    row: h,
    isempty: c
  };
}
function yn(e, t) {
  if (e == null || e["!ref"] == null) {
    return [];
  }
  var r = {
    t: "n",
    v: 0
  };
  var a = 0;
  var n = 1;
  var s = [];
  var i = 0;
  var f = "";
  var o = {
    s: {
      r: 0,
      c: 0
    },
    e: {
      r: 0,
      c: 0
    }
  };
  var l = t || {};
  var c = l.range ?? e["!ref"];
  if (l.header === 1) {
    a = 1;
  } else if (l.header === "A") {
    a = 2;
  } else if (Array.isArray(l.header)) {
    a = 3;
  } else if (l.header == null) {
    a = 0;
  }
  switch (typeof c) {
    case "string":
      o = Be(c);
      break;
    case "number":
      o = Be(e["!ref"]);
      o.s.r = c;
      break;
    default:
      o = c;
  }
  if (a > 0) {
    n = 0;
  }
  var x = Ne(o.s.r);
  var h = [];
  var u = [];
  var p = 0;
  var g = 0;
  var m = e["!data"] != null;
  var v = o.s.r;
  var C = 0;
  var F = {};
  if (m && !e["!data"][v]) {
    e["!data"][v] = [];
  }
  var U = l.skipHidden && e["!cols"] || [];
  var H = l.skipHidden && e["!rows"] || [];
  for (C = o.s.c; C <= o.e.c; ++C) {
    if (!(U[C] || {}).hidden) {
      h[C] = Ie(C);
      r = m ? e["!data"][v][C] : e[h[C] + x];
      switch (a) {
        case 1:
          s[C] = C - o.s.c;
          break;
        case 2:
          s[C] = h[C];
          break;
        case 3:
          s[C] = l.header[C - o.s.c];
          break;
        default:
          if (r == null) {
            r = {
              w: "__EMPTY",
              t: "s"
            };
          }
          f = i = rt(r, null, l);
          g = F[i] || 0;
          if (!g) {
            F[i] = 1;
          } else {
            do {
              f = i + "_" + g++;
            } while (F[f]);
            F[i] = g;
            F[f] = 1;
          }
          s[C] = f;
      }
    }
  }
  for (v = o.s.r + n; v <= o.e.r; ++v) {
    if (!(H[v] || {}).hidden) {
      var V = Gx(e, o, v, h, a, s, l);
      if (V.isempty === false || (a === 1 ? l.blankrows !== false : l.blankrows)) {
        u[p++] = V.row;
      }
    }
  }
  u.length = p;
  return u;
}
var V0 = /"/g;
function Xx(e, t, r, a, n, s, i, f, o) {
  var l = true;
  var c = [];
  var x = "";
  var h = Ne(r);
  var u = e["!data"] != null;
  var p = u && e["!data"][r] || [];
  for (var g = t.s.c; g <= t.e.c; ++g) {
    if (a[g]) {
      var m = u ? p[g] : e[a[g] + h];
      if (m == null) {
        x = "";
      } else if (m.v != null) {
        l = false;
        x = "" + (o.rawNumbers && m.t == "n" ? m.v : rt(m, null, o));
        for (var v = 0, C = 0; v !== x.length; ++v) {
          if ((C = x.charCodeAt(v)) === n || C === s || C === 34 || o.forceQuotes) {
            x = "\"" + x.replace(V0, "\"\"") + "\"";
            break;
          }
        }
        if (x == "ID" && f == 0 && c.length == 0) {
          x = "\"ID\"";
        }
      } else if (m.f != null && !m.F) {
        l = false;
        x = "=" + m.f;
        if (x.indexOf(",") >= 0) {
          x = "\"" + x.replace(V0, "\"\"") + "\"";
        }
      } else {
        x = "";
      }
      c.push(x);
    }
  }
  if (o.strip) {
    while (c[c.length - 1] === "") {
      --c.length;
    }
  }
  if (o.blankrows === false && l) {
    return null;
  } else {
    return c.join(i);
  }
}
function Yn(e, t) {
  var r = [];
  var a = t ?? {};
  if (e == null || e["!ref"] == null) {
    return "";
  }
  for (var n = Be(e["!ref"]), s = a.FS !== undefined ? a.FS : ",", i = s.charCodeAt(0), f = a.RS !== undefined ? a.RS : `
`, o = f.charCodeAt(0), l = "", c = [], x = a.skipHidden && e["!cols"] || [], h = a.skipHidden && e["!rows"] || [], u = n.s.c; u <= n.e.c; ++u) {
    if (!(x[u] || {}).hidden) {
      c[u] = Ie(u);
    }
  }
  var p = 0;
  for (var g = n.s.r; g <= n.e.r; ++g) {
    if (!(h[g] || {}).hidden) {
      l = Xx(e, n, g, c, i, o, s, p, a);
      if (l != null && (l || a.blankrows !== false)) {
        r.push((p++ ? f : "") + l);
      }
    }
  }
  return r.join("");
}
function ds(e, t) {
  t ||= {};
  t.FS = "\t";
  t.RS = `
`;
  var r = Yn(e, t);
  return r;
}
function Vx(e, t) {
  var r = "";
  var a;
  var n = "";
  if (e == null || e["!ref"] == null) {
    return [];
  }
  var s = Be(e["!ref"]);
  var i = "";
  var f = [];
  var o;
  var l = [];
  var c = e["!data"] != null;
  for (o = s.s.c; o <= s.e.c; ++o) {
    f[o] = Ie(o);
  }
  for (var x = s.s.r; x <= s.e.r; ++x) {
    i = Ne(x);
    o = s.s.c;
    for (; o <= s.e.c; ++o) {
      r = f[o] + i;
      a = c ? (e["!data"][x] || [])[o] : e[r];
      n = "";
      if (a !== undefined) {
        if (a.F != null) {
          r = a.F;
          if (!a.f) {
            continue;
          }
          n = a.f;
          if (r.indexOf(":") == -1) {
            r = r + ":" + r;
          }
        }
        if (a.f != null) {
          n = a.f;
        } else {
          if (t && t.values === false) {
            continue;
          }
          if (a.t == "z") {
            continue;
          }
          if (a.t == "n" && a.v != null) {
            n = "" + a.v;
          } else if (a.t == "b") {
            n = a.v ? "TRUE" : "FALSE";
          } else if (a.w !== undefined) {
            n = "'" + a.w;
          } else {
            if (a.v === undefined) {
              continue;
            }
            if (a.t == "s") {
              n = "'" + a.v;
            } else {
              n = "" + a.v;
            }
          }
        }
        l[l.length] = r + "=" + n;
      }
    }
  }
  return l;
}
function ps(e, t, r) {
  var a = r || {};
  var n = e ? e["!data"] != null : a.dense;
  var s = +!a.skipHeader;
  var i = e || {};
  if (!e && n) {
    i["!data"] = [];
  }
  var f = 0;
  var o = 0;
  if (i && a.origin != null) {
    if (typeof a.origin == "number") {
      f = a.origin;
    } else {
      var l = typeof a.origin == "string" ? We(a.origin) : a.origin;
      f = l.r;
      o = l.c;
    }
  }
  var c = {
    s: {
      c: 0,
      r: 0
    },
    e: {
      c: o,
      r: f + t.length - 1 + s
    }
  };
  if (i["!ref"]) {
    var x = Be(i["!ref"]);
    c.e.c = Math.max(c.e.c, x.e.c);
    c.e.r = Math.max(c.e.r, x.e.r);
    if (f == -1) {
      f = x.e.r + 1;
      c.e.r = f + t.length - 1 + s;
    }
  } else if (f == -1) {
    f = 0;
    c.e.r = t.length - 1 + s;
  }
  var h = a.header || [];
  var u = 0;
  var p = [];
  t.forEach(function (m, v) {
    if (n && !i["!data"][f + v + s]) {
      i["!data"][f + v + s] = [];
    }
    if (n) {
      p = i["!data"][f + v + s];
    }
    Ze(m).forEach(function (C) {
      if ((u = h.indexOf(C)) == -1) {
        h[u = h.length] = C;
      }
      var F = m[C];
      var U = "z";
      var H = "";
      var V = n ? "" : Ie(o + u) + Ne(f + v + s);
      var y = n ? p[o + u] : i[V];
      if (F && typeof F == "object" && !(F instanceof Date)) {
        if (n) {
          p[o + u] = F;
        } else {
          i[V] = F;
        }
      } else {
        if (typeof F == "number") {
          U = "n";
        } else if (typeof F == "boolean") {
          U = "b";
        } else if (typeof F == "string") {
          U = "s";
        } else if (F instanceof Date) {
          U = "d";
          if (!a.UTC) {
            F = Ya(F);
          }
          if (!a.cellDates) {
            U = "n";
            F = fr(F);
          }
          H = y != null && y.z && vt(y.z) ? y.z : a.dateNF || Me[14];
        } else if (F === null && a.nullError) {
          U = "e";
          F = 0;
        }
        if (y) {
          y.t = U;
          y.v = F;
          delete y.w;
          delete y.R;
          if (H) {
            y.z = H;
          }
        } else if (n) {
          p[o + u] = y = {
            t: U,
            v: F
          };
        } else {
          i[V] = y = {
            t: U,
            v: F
          };
        }
        if (H) {
          y.z = H;
        }
      }
    });
  });
  c.e.c = Math.max(c.e.c, o + h.length - 1);
  var g = Ne(f);
  if (n && !i["!data"][f]) {
    i["!data"][f] = [];
  }
  if (s) {
    for (u = 0; u < h.length; ++u) {
      if (n) {
        i["!data"][f][u + o] = {
          t: "s",
          v: h[u]
        };
      } else {
        i[Ie(u + o) + g] = {
          t: "s",
          v: h[u]
        };
      }
    }
  }
  i["!ref"] = Je(c);
  return i;
}
function $x(e, t) {
  return ps(null, e, t);
}
function Xa(e, t, r) {
  if (typeof t == "string") {
    if (e["!data"] != null) {
      var a = We(t);
      e["!data"][a.r] ||= [];
      return e["!data"][a.r][a.c] ||= {
        t: "z"
      };
    }
    return e[t] ||= {
      t: "z"
    };
  }
  if (typeof t != "number") {
    return Xa(e, Ge(t));
  } else {
    return Xa(e, Ie(r || 0) + Ne(t));
  }
}
function zx(e, t) {
  if (typeof t == "number") {
    if (t >= 0 && e.SheetNames.length > t) {
      return t;
    }
    throw new Error("Cannot find sheet # " + t);
  } else if (typeof t == "string") {
    var r = e.SheetNames.indexOf(t);
    if (r > -1) {
      return r;
    }
    throw new Error("Cannot find sheet name |" + t + "|");
  } else {
    throw new Error("Cannot find sheet |" + t + "|");
  }
}
function Kx(e, t) {
  var r = {
    SheetNames: [],
    Sheets: {}
  };
  if (e) {
    jn(r, e, t || "Sheet1");
  }
  return r;
}
function jn(e, t, r, a) {
  var n = 1;
  if (!r) {
    for (; n <= 65535 && e.SheetNames.indexOf(r = "Sheet" + n) != -1; r = undefined) {
      ++n;
    }
  }
  if (!r || e.SheetNames.length >= 65535) {
    throw new Error("Too many worksheets");
  }
  if (a && e.SheetNames.indexOf(r) >= 0 && r.length < 32) {
    var s = r.match(/\d+$/);
    n = s && +s[0] || 0;
    var i = s && r.slice(0, s.index) || r;
    for (++n; n <= 65535 && e.SheetNames.indexOf(r = i + n) != -1; ++n);
  }
  ts(r);
  if (e.SheetNames.indexOf(r) >= 0) {
    throw new Error("Worksheet with name |" + r + "| already exists!");
  }
  e.SheetNames.push(r);
  e.Sheets[r] = t;
  return r;
}
function Yx(e, t, r) {
  e.Workbook ||= {};
  e.Workbook.Sheets ||= [];
  var a = zx(e, t);
  e.Workbook.Sheets[a] ||= {};
  switch (r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[a].Hidden = r;
}
function jx(e, t) {
  e.z = t;
  return e;
}
function ms(e, t, r) {
  if (t) {
    e.l = {
      Target: t
    };
    if (r) {
      e.l.Tooltip = r;
    }
  } else {
    delete e.l;
  }
  return e;
}
function Zx(e, t, r) {
  return ms(e, "#" + t, r);
}
function Jx(e, t, r) {
  e.c ||= [];
  e.c.push({
    t,
    a: r || "SheetJS"
  });
}
function qx(e, t, r, a) {
  for (var n = typeof t != "string" ? t : Be(t), s = typeof t == "string" ? t : Je(t), i = n.s.r; i <= n.e.r; ++i) {
    for (var f = n.s.c; f <= n.e.c; ++f) {
      var o = Xa(e, i, f);
      o.t = "n";
      o.F = s;
      delete o.v;
      if (i == n.s.r && f == n.s.c) {
        o.f = r;
        if (a) {
          o.D = true;
        }
      }
    }
  }
  var l = sr(e["!ref"]);
  if (l.s.r > n.s.r) {
    l.s.r = n.s.r;
  }
  if (l.s.c > n.s.c) {
    l.s.c = n.s.c;
  }
  if (l.e.r < n.e.r) {
    l.e.r = n.e.r;
  }
  if (l.e.c < n.e.c) {
    l.e.c = n.e.c;
  }
  e["!ref"] = Je(l);
  return e;
}
var gn = {
  encode_col: Ie,
  encode_row: Ne,
  encode_cell: Ge,
  encode_range: Je,
  decode_col: Un,
  decode_row: bn,
  split_cell: Yf,
  decode_cell: We,
  decode_range: sr,
  format_cell: rt,
  sheet_new: jf,
  sheet_add_aoa: _i,
  sheet_add_json: ps,
  sheet_add_dom: fs,
  aoa_to_sheet: Ut,
  json_to_sheet: $x,
  table_to_sheet: os,
  table_to_book: gx,
  sheet_to_csv: Yn,
  sheet_to_txt: ds,
  sheet_to_json: yn,
  sheet_to_html: ss,
  sheet_to_formulae: Vx,
  sheet_to_row_object_array: yn,
  sheet_get_cell: Xa,
  book_new: Kx,
  book_append_sheet: jn,
  book_set_sheet_visibility: Yx,
  cell_set_number_format: jx,
  cell_set_hyperlink: ms,
  cell_set_internal_link: Zx,
  cell_add_comment: Jx,
  sheet_set_array_formula: qx,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
};
function Qx(e, t) {
  const r = s => s.includes("\"") || s.includes(",") || s.includes(`
`) || s.includes("\r") ? `"${s.replace(/"/g, "\"\"")}"` : s;
  const a = t.map(r).join(",");
  const n = e.map(s => t.map(i => r(s[i] || "")).join(","));
  return [a, ...n].join(`\r
`);
}
async function e2(e, t, r) {
  const a = gn.json_to_sheet(e, {
    header: t
  });
  const n = gn.book_new();
  gn.book_append_sheet(n, a, "Scraped Data");
  const s = xs(n, {
    bookType: "xlsx",
    type: "base64"
  });
  await chrome.downloads.download({
    url: `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${s}`,
    filename: `${vs(r)}.xlsx`,
    saveAs: true
  });
}
async function r2(e, t, r) {
  const a = Qx(e, t);
  const n = btoa(unescape(encodeURIComponent(a)));
  await chrome.downloads.download({
    url: `data:text/csv;base64,${n}`,
    filename: `${vs(r)}.csv`,
    saveAs: true
  });
}
function vs(e) {
  return e.replace(/[^a-zA-Z0-9_\-. ]/g, "_").substring(0, 100);
}
const t2 = {
  TAB_LOAD_TIMEOUT_MS: 30000
};
function fa(e) {
  return new Promise((t, r) => {
    const a = setTimeout(() => {
      chrome.tabs.onUpdated.removeListener(n);
      r(new Error("Tab load timeout"));
    }, t2.TAB_LOAD_TIMEOUT_MS);
    const n = (s, i) => {
      if (s === e && i.status === "complete") {
        clearTimeout(a);
        chrome.tabs.onUpdated.removeListener(n);
        setTimeout(t, 500);
      }
    };
    chrome.tabs.onUpdated.addListener(n);
  });
}
async function validateTabId(e) {
  try {
    return !!(await chrome.tabs.sendMessage(e, {
      action: "GET_PAGE_INFO"
    }));
  } catch {
    try {
      await chrome.scripting.executeScript({
        target: {
          tabId: e
        },
        files: ["content.js"]
      });
      return true;
    } catch (t) {
      console.error("[NCWS] Failed to inject content script:", t);
      return false;
    }
  }
}
let Sr = false;
let ze = false;
async function a2(e, t) {
  if (Sr || !e.pagination) {
    return;
  }
  Sr = true;
  ze = false;
  const r = [];
  const a = e.pagination.maxPages;
  try {
    for (let n = 1; n <= a && !ze; n++) {
      chrome.runtime.sendMessage({
        action: "SCRAPE_PROGRESS",
        payload: {
          currentPage: n,
          totalPages: a,
          rowsSoFar: r.length
        }
      });
      await validateTabId(t);
      const s = await new Promise(i => {
        chrome.tabs.sendMessage(t, {
          action: "SCRAPE_PAGE",
          payload: {
            fields: e.fields
          }
        }, f => i(f || {
          data: []
        }));
      });
      if (s.data) {
        r.push(...s.data);
      }
      if (n < a && !ze) {
        if (!(await l2(e, t, n))) {
          break;
        }
        await At(e.pagination.delayMs);
      }
    }
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length
      }
    });
  } catch (n) {
    console.error("[NCWS] Multi-scrape error:", n);
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length
      }
    });
  } finally {
    Sr = false;
    ze = false;
  }
}
async function n2(e, t) {
  if (Sr || !e.pagination) {
    return;
  }
  Sr = true;
  ze = false;
  const r = [];
  const a = new Set();
  const n = e.pagination.maxPages;
  const s = e.pagination.delayMs;
  const i = f => {
    for (const o of f) {
      const l = Object.values(o).join("||");
      if (l.trim() && !a.has(l)) {
        a.add(l);
        r.push(o);
      }
    }
  };
  try {
    await validateTabId(t);
    let f = 0;
    for (let o = 1; o <= n && !ze; o++) {
      chrome.runtime.sendMessage({
        action: "SCRAPE_PROGRESS",
        payload: {
          currentPage: o,
          totalPages: n,
          rowsSoFar: r.length,
          mode: "scroll"
        }
      });
      const l = r.length;
      const c = await new Promise(h => {
        chrome.tabs.sendMessage(t, {
          action: "SCRAPE_PAGE",
          payload: {
            fields: e.fields
          }
        }, u => h(u || {
          data: []
        }));
      });
      if (c.data) {
        i(c.data);
      }
      const x = await new Promise(h => {
        chrome.tabs.sendMessage(t, {
          action: "SCROLL_PAGE"
        }, u => h(u || {
          scrolled: false,
          heightChanged: false
        }));
      });
      if (r.length === l && !x.heightChanged) {
        f++;
        if (f >= 2) {
          break;
        }
      } else {
        f = 0;
      }
      await At(s);
    }
    if (!ze) {
      const o = await new Promise(l => {
        chrome.tabs.sendMessage(t, {
          action: "SCRAPE_PAGE",
          payload: {
            fields: e.fields
          }
        }, c => l(c || {
          data: []
        }));
      });
      if (o.data) {
        i(o.data);
      }
    }
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length
      }
    });
  } catch (f) {
    console.error("[NCWS] Scroll-scrape error:", f);
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length
      }
    });
  } finally {
    Sr = false;
    ze = false;
  }
}
async function i2(e, t, r) {
  if (Sr) {
    return;
  }
  Sr = true;
  ze = false;
  const a = [];
  try {
    for (let n = 0; n < t.length && !ze; n++) {
      const s = t[n];
      chrome.runtime.sendMessage({
        action: "SCRAPE_PROGRESS",
        payload: {
          currentPage: n + 1,
          totalPages: t.length,
          mode: "page-detail"
        }
      });
      await chrome.tabs.update(r, {
        url: s
      });
      await fa(r);
      await validateTabId(r);
      const i = await new Promise(f => {
        chrome.tabs.sendMessage(r, {
          action: "SCRAPE_PAGE_DETAIL",
          payload: {
            fields: e
          }
        }, o => f(o || {
          row: {}
        }));
      });
      if (i.row) {
        a.push({
          ...i.row,
          URL: s
        });
      }
      if (n < t.length - 1 && !ze) {
        await At(1000);
      }
    }
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: a,
        pageUrl: "",
        rowCount: a.length
      }
    });
  } catch (n) {
    console.error("[NCWS] Page details scrape error:", n);
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: a,
        pageUrl: "",
        rowCount: a.length
      }
    });
  } finally {
    Sr = false;
    ze = false;
  }
}
async function s2(e, t) {
  if (Sr) {
    return;
  }
  Sr = true;
  ze = false;
  const r = [];
  const a = new Set();
  const n = s => {
    for (const i of s) {
      const f = i["Image URL"];
      if (f && !a.has(f)) {
        a.add(f);
        r.push(i);
      }
    }
  };
  try {
    for (let s = 1; s <= e.maxPages && !ze; s++) {
      chrome.runtime.sendMessage({
        action: "SCRAPE_PROGRESS",
        payload: {
          currentPage: s,
          totalPages: e.maxPages,
          rowsSoFar: r.length
        }
      });
      await validateTabId(t);
      const i = await new Promise(f => {
        chrome.tabs.sendMessage(t, {
          action: "EXTRACT_IMAGES"
        }, o => f(o || {
          data: []
        }));
      });
      if (i.data) {
        n(i.data);
      }
      if (s < e.maxPages && !ze) {
        if (!(await c2(e, t, s))) {
          break;
        }
        await At(e.delayMs);
      }
    }
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length,
        isImageScrape: true
      }
    });
  } catch (s) {
    console.error("[NCWS] Paginated image scrape error:", s);
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length,
        isImageScrape: true
      }
    });
  } finally {
    Sr = false;
    ze = false;
  }
}
async function f2(e, t, r) {
  if (Sr) {
    return;
  }
  Sr = true;
  ze = false;
  const a = [];
  const n = new Set();
  const s = i => {
    for (const f of i) {
      const o = f["Image URL"];
      if (o && !n.has(o)) {
        n.add(o);
        a.push(f);
      }
    }
  };
  try {
    await validateTabId(r);
    let i = 0;
    for (let f = 1; f <= e && !ze; f++) {
      chrome.runtime.sendMessage({
        action: "SCRAPE_PROGRESS",
        payload: {
          currentPage: f,
          totalPages: e,
          rowsSoFar: a.length,
          mode: "scroll"
        }
      });
      const o = a.length;
      const l = await new Promise(x => {
        chrome.tabs.sendMessage(r, {
          action: "EXTRACT_IMAGES"
        }, h => x(h || {
          data: []
        }));
      });
      if (l.data) {
        s(l.data);
      }
      const c = await new Promise(x => {
        chrome.tabs.sendMessage(r, {
          action: "SCROLL_PAGE"
        }, h => x(h || {
          scrolled: false,
          heightChanged: false
        }));
      });
      if (a.length === o && !c.heightChanged) {
        i++;
        if (i >= 2) {
          break;
        }
      } else {
        i = 0;
      }
      await At(t);
    }
    if (!ze) {
      const f = await new Promise(o => {
        chrome.tabs.sendMessage(r, {
          action: "EXTRACT_IMAGES"
        }, l => o(l || {
          data: []
        }));
      });
      if (f.data) {
        s(f.data);
      }
    }
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: a,
        pageUrl: "",
        rowCount: a.length,
        isImageScrape: true
      }
    });
  } catch (i) {
    console.error("[NCWS] Scroll image scrape error:", i);
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: a,
        pageUrl: "",
        rowCount: a.length,
        isImageScrape: true
      }
    });
  } finally {
    Sr = false;
    ze = false;
  }
}
function o2() {
  ze = true;
}
async function l2(e, t, r) {
  if (!e.pagination) {
    return false;
  }
  if (e.pagination.type === "click-next" && e.pagination.nextButtonSelector) {
    if ((await new Promise(n => {
      chrome.tabs.sendMessage(t, {
        action: "CLICK_ELEMENT",
        payload: {
          selector: e.pagination.nextButtonSelector
        }
      }, s => n(s || {
        success: false
      }));
    })).success) {
      try {
        await Promise.race([fa(t), At(3000)]);
      } catch { }
      await validateTabId(t);
      return true;
    }
    return false;
  }
  if (e.pagination.type === "url-pattern" && e.pagination.urlTemplate) {
    const a = (e.pagination.startPage || 1) + r;
    const n = e.pagination.urlTemplate.replace("{page}", String(a));
    await chrome.tabs.update(t, {
      url: n
    });
    await fa(t);
    return true;
  }
  return false;
}
async function c2(e, t, r) {
  if (e.type === "click-next" && e.nextButtonSelector) {
    if ((await new Promise(n => {
      chrome.tabs.sendMessage(t, {
        action: "CLICK_ELEMENT",
        payload: {
          selector: e.nextButtonSelector
        }
      }, s => n(s || {
        success: false
      }));
    })).success) {
      try {
        await Promise.race([fa(t), At(3000)]);
      } catch { }
      await validateTabId(t);
      return true;
    }
    return false;
  }
  if (e.type === "url-pattern" && e.urlTemplate) {
    const a = (e.startPage || 1) + r;
    const n = e.urlTemplate.replace("{page}", String(a));
    await chrome.tabs.update(t, {
      url: n
    });
    await fa(t);
    await validateTabId(t);
    return true;
  }
  return false;
}
function At(e) {
  return new Promise(t => setTimeout(t, e));
}
const Cn = [{
  id: "prebuilt-amazon-search",
  name: "Amazon Search Results",
  description: "Scrape product listings from Amazon search pages",
  icon: "🛒",
  urlPattern: "amazon\\.com/s\\?",
  isPrebuilt: true,
  createdAt: 0,
  updatedAt: 0,
  fields: [{
    id: "f1",
    name: "Product Name",
    selector: "h2 a span",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f2",
    name: "Price",
    selector: ".a-price .a-offscreen",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f3",
    name: "Rating",
    selector: ".a-icon-alt",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f4",
    name: "Image",
    selector: ".s-image",
    attribute: "src",
    type: "image"
  }, {
    id: "f5",
    name: "URL",
    selector: "h2 a",
    attribute: "href",
    type: "link"
  }],
  pagination: {
    type: "click-next",
    nextButtonSelector: ".s-pagination-next",
    maxPages: 5,
    delayMs: 2000
  }
}, {
  id: "prebuilt-google-search",
  name: "Google Search Results",
  description: "Scrape search results from Google",
  icon: "🔍",
  urlPattern: "google\\.com/search",
  isPrebuilt: true,
  createdAt: 0,
  updatedAt: 0,
  fields: [{
    id: "f1",
    name: "Title",
    selector: "h3",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f2",
    name: "URL",
    selector: "a[jsname] h3",
    attribute: "href",
    type: "link"
  }, {
    id: "f3",
    name: "Snippet",
    selector: "[data-sncf] span",
    attribute: "textContent",
    type: "text"
  }],
  pagination: {
    type: "click-next",
    nextButtonSelector: "#pnnext",
    maxPages: 5,
    delayMs: 2000
  }
}, {
  id: "prebuilt-youtube-search",
  name: "YouTube Search Results",
  description: "Scrape video listings from YouTube search",
  icon: "🎥",
  urlPattern: "youtube\\.com/results",
  isPrebuilt: true,
  createdAt: 0,
  updatedAt: 0,
  fields: [{
    id: "f1",
    name: "Title",
    selector: "#video-title",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f2",
    name: "Channel",
    selector: "#channel-name a",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f3",
    name: "Views",
    selector: "#metadata-line span:first-child",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f4",
    name: "URL",
    selector: "#video-title",
    attribute: "href",
    type: "link"
  }],
  pagination: null
}, {
  id: "prebuilt-hackernews",
  name: "Hacker News",
  description: "Scrape stories from Hacker News front page",
  icon: "📰",
  urlPattern: "news\\.ycombinator\\.com",
  isPrebuilt: true,
  createdAt: 0,
  updatedAt: 0,
  fields: [{
    id: "f1",
    name: "Title",
    selector: ".titleline a",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f2",
    name: "URL",
    selector: ".titleline a",
    attribute: "href",
    type: "link"
  }, {
    id: "f3",
    name: "Points",
    selector: ".score",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f4",
    name: "Author",
    selector: ".hnuser",
    attribute: "textContent",
    type: "text"
  }],
  pagination: {
    type: "click-next",
    nextButtonSelector: ".morelink",
    maxPages: 5,
    delayMs: 2000
  }
}, {
  id: "prebuilt-github-repos",
  name: "GitHub Repositories",
  description: "Scrape repository listings from GitHub search",
  icon: "💻",
  urlPattern: "github\\.com/search",
  isPrebuilt: true,
  createdAt: 0,
  updatedAt: 0,
  fields: [{
    id: "f1",
    name: "Repository",
    selector: ".search-title a",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f2",
    name: "URL",
    selector: ".search-title a",
    attribute: "href",
    type: "link"
  }, {
    id: "f3",
    name: "Description",
    selector: ".search-match",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f4",
    name: "Language",
    selector: "[itemprop=\"programmingLanguage\"]",
    attribute: "textContent",
    type: "text"
  }],
  pagination: {
    type: "click-next",
    nextButtonSelector: ".next_page",
    maxPages: 5,
    delayMs: 2000
  }
}];
function detectPrebuiltRecipe(e) {
  return Cn.find(t => {
    try {
      return new RegExp(t.urlPattern).test(e);
    } catch {
      return false;
    }
  });
}
async function handleMessage(e, t, r) {
  try {
    switch (e.action) {
      case "OPEN_SIDE_PANEL":
        {
          const a = e.payload;
          await chrome.sidePanel.open({
            tabId: a.tabId
          });
          if (a.recipeId) {
            const s = (await getRecipes()).find(i => i.id === a.recipeId);
            if (s) {
              setTimeout(() => {
                chrome.runtime.sendMessage({
                  action: "LOAD_RECIPE",
                  payload: {
                    recipe: s
                  }
                });
              }, 500);
            }
          } else if (a.prebuiltId) {
            const n = Cn.find(s => s.id === a.prebuiltId);
            if (n) {
              setTimeout(() => {
                chrome.runtime.sendMessage({
                  action: "LOAD_RECIPE",
                  payload: {
                    recipe: n
                  }
                });
              }, 500);
            }
          }
          r({
            success: true
          });
          break;
        }
      case "GET_RECIPES":
        {
          const a = await getRecipes();
          r({
            recipes: a
          });
          break;
        }
      case "SAVE_RECIPE":
        {
          const {
            recipe: a
          } = e.payload;
          await saveRecipe(a);
          r({
            success: true
          });
          break;
        }
      case "DELETE_RECIPE":
        {
          const {
            id: a
          } = e.payload;
          await deleteRecipe(a);
          r({
            success: true
          });
          break;
        }
      case "EXPORT_DATA":
        {
          const a = e.payload;
          if (a.format === "xlsx") {
            await e2(a.data, a.fields, a.filename);
          } else {
            await r2(a.data, a.fields, a.filename);
          }
          r({
            success: true
          });
          break;
        }
      case "START_MULTI_SCRAPE":
        {
          const a = e.payload;
          a2(a.recipe, a.tabId);
          r({
            success: true
          });
          break;
        }
      case "START_SCROLL_SCRAPE":
        {
          const a = e.payload;
          n2(a.recipe, a.tabId);
          r({
            success: true
          });
          break;
        }
      case "STOP_SCRAPE":
        {
          o2();
          r({
            success: true
          });
          break;
        }
      case "START_PAGE_DETAILS_SCRAPE":
        {
          const a = e.payload;
          i2(a.fields, a.urls, a.tabId);
          r({
            success: true
          });
          break;
        }
      case "START_PAGINATED_IMAGE_SCRAPE":
        {
          const a = e.payload;
          s2(a.pagination, a.tabId);
          r({
            success: true
          });
          break;
        }
      case "START_SCROLL_IMAGE_SCRAPE":
        {
          const a = e.payload;
          f2(a.maxScrolls, a.delayMs, a.tabId);
          r({
            success: true
          });
          break;
        }
      case "DOWNLOAD_IMAGE":
        {
          const a = e.payload;
          chrome.downloads.download({
            url: a.url,
            filename: a.filename
          });
          r({
            success: true
          });
          break;
        }
      case "START_AUTO_DETECT_PICKER":
        {
          const a = e.payload;
          await validateTabId(a.tabId);
          chrome.tabs.sendMessage(a.tabId, {
            action: "START_AUTO_DETECT_PICKER"
          });
          r({
            success: true
          });
          break;
        }
      case "DETECT_PREBUILT":
        {
          const {
            url: a
          } = e.payload;
          const n = detectPrebuiltRecipe(a);
          r({
            recipe: n || null
          });
          break;
        }
      case "GET_PREBUILT_RECIPES":
        {
          r({
            recipes: Cn
          });
          break;
        }
      case "GET_LICENCE_STATE":
        {
          const a = await Ps();
          r(a);
          break;
        }
      case "VALIDATE_LICENCE":
        {
          const {
            licenceKey: a
          } = e.payload;
          const n = await Ns(a);
          r(n);
          break;
        }
      case "DEACTIVATE_LICENCE":
        {
          await Is();
          r({
            success: true
          });
          break;
        }
      default:
        {
          const [a] = await chrome.tabs.query({
            active: true,
            currentWindow: true
          });
          if (a != null && a.id) {
            chrome.tabs.sendMessage(a.id, e, n => {
              r(n);
            });
          } else {
            r({
              error: "No active tab found"
            });
          }
        }
    }
  } catch (a) {
    console.error("[NCWS] Message handler error:", a);
    r({
      error: String(a)
    });
  }
}
chrome.runtime.onInstalled.addListener(async () => {
  console.log("[NCWS] Extension installed");
  await Ls();
});
chrome.runtime.onMessage.addListener((e, t, r) => {
  (async () => {
    try {
      await handleMessage(e, t, r);
    } catch (a) {
      console.error("[NCWS] Top-level message error:", a);
      r({
        error: String(a)
      });
    }
  })();
  return true;
});
chrome.action.onClicked.addListener(e => {
  if (e.id) {
    chrome.sidePanel.open({
      tabId: e.id
    });
  }
});