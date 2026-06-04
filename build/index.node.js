import { createRequire as Fa } from "module";
import { readFile as Pa } from "fs/promises";
import Ua, { basename as Na } from "path";
const In = Fa(import.meta.url);
function ra(a, e) {
  return function() {
    return a.apply(e, arguments);
  };
}
const { toString: Da } = Object.prototype, { getPrototypeOf: de } = Object, { iterator: me, toStringTag: pa } = Symbol, xe = /* @__PURE__ */ ((a) => (e) => {
  const i = Da.call(e);
  return a[i] || (a[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), q = (a) => (a = a.toLowerCase(), (e) => xe(e) === a), fe = (a) => (e) => typeof e === a, { isArray: K } = Array, W = fe("undefined");
function Z(a) {
  return a !== null && !W(a) && a.constructor !== null && !W(a.constructor) && T(a.constructor.isBuffer) && a.constructor.isBuffer(a);
}
const la = q("ArrayBuffer");
function La(a) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(a) : e = a && a.buffer && la(a.buffer), e;
}
const Ba = fe("string"), T = fe("function"), ua = fe("number"), ee = (a) => a !== null && typeof a == "object", Ia = (a) => a === !0 || a === !1, re = (a) => {
  if (xe(a) !== "object")
    return !1;
  const e = de(a);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(pa in a) && !(me in a);
}, Ma = (a) => {
  if (!ee(a) || Z(a))
    return !1;
  try {
    return Object.keys(a).length === 0 && Object.getPrototypeOf(a) === Object.prototype;
  } catch {
    return !1;
  }
}, Ha = q("Date"), $a = q("File"), Va = (a) => !!(a && typeof a.uri < "u"), Ja = (a) => a && typeof a.getParts < "u", Wa = q("Blob"), Ka = q("FileList"), Xa = (a) => ee(a) && T(a.pipe);
function Ga() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const $e = Ga(), Ve = typeof $e.FormData < "u" ? $e.FormData : void 0, Ya = (a) => {
  if (!a) return !1;
  if (Ve && a instanceof Ve) return !0;
  const e = de(a);
  if (!e || e === Object.prototype || !T(a.append)) return !1;
  const i = xe(a);
  return i === "formdata" || // detect form-data instance
  i === "object" && T(a.toString) && a.toString() === "[object FormData]";
}, Qa = q("URLSearchParams"), [Za, ei, ai, ii] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(q), ni = (a) => a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ae(a, e, { allOwnKeys: i = !1 } = {}) {
  if (a === null || typeof a > "u")
    return;
  let n, s;
  if (typeof a != "object" && (a = [a]), K(a))
    for (n = 0, s = a.length; n < s; n++)
      e.call(null, a[n], n, a);
  else {
    if (Z(a))
      return;
    const o = i ? Object.getOwnPropertyNames(a) : Object.keys(a), t = o.length;
    let r;
    for (n = 0; n < t; n++)
      r = o[n], e.call(null, a[r], r, a);
  }
}
function da(a, e) {
  if (Z(a))
    return null;
  e = e.toLowerCase();
  const i = Object.keys(a);
  let n = i.length, s;
  for (; n-- > 0; )
    if (s = i[n], e === s.toLowerCase())
      return s;
  return null;
}
const M = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ma = (a) => !W(a) && a !== M;
function Ae(...a) {
  const { caseless: e, skipUndefined: i } = ma(this) && this || {}, n = {}, s = (o, t) => {
    if (t === "__proto__" || t === "constructor" || t === "prototype")
      return;
    const r = e && da(n, t) || t, p = Te(n, r) ? n[r] : void 0;
    re(p) && re(o) ? n[r] = Ae(p, o) : re(o) ? n[r] = Ae({}, o) : K(o) ? n[r] = o.slice() : (!i || !W(o)) && (n[r] = o);
  };
  for (let o = 0, t = a.length; o < t; o++)
    a[o] && ae(a[o], s);
  return n;
}
const si = (a, e, i, { allOwnKeys: n } = {}) => (ae(
  e,
  (s, o) => {
    i && T(s) ? Object.defineProperty(a, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: ra(s, i),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(a, o, {
      __proto__: null,
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: n }
), a), oi = (a) => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a), ti = (a, e, i, n) => {
  a.prototype = Object.create(e.prototype, n), Object.defineProperty(a.prototype, "constructor", {
    __proto__: null,
    value: a,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(a, "super", {
    __proto__: null,
    value: e.prototype
  }), i && Object.assign(a.prototype, i);
}, ci = (a, e, i, n) => {
  let s, o, t;
  const r = {};
  if (e = e || {}, a == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(a), o = s.length; o-- > 0; )
      t = s[o], (!n || n(t, a, e)) && !r[t] && (e[t] = a[t], r[t] = !0);
    a = i !== !1 && de(a);
  } while (a && (!i || i(a, e)) && a !== Object.prototype);
  return e;
}, ri = (a, e, i) => {
  a = String(a), (i === void 0 || i > a.length) && (i = a.length), i -= e.length;
  const n = a.indexOf(e, i);
  return n !== -1 && n === i;
}, pi = (a) => {
  if (!a) return null;
  if (K(a)) return a;
  let e = a.length;
  if (!ua(e)) return null;
  const i = new Array(e);
  for (; e-- > 0; )
    i[e] = a[e];
  return i;
}, li = /* @__PURE__ */ ((a) => (e) => a && e instanceof a)(typeof Uint8Array < "u" && de(Uint8Array)), ui = (a, e) => {
  const n = (a && a[me]).call(a);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    e.call(a, o[0], o[1]);
  }
}, di = (a, e) => {
  let i;
  const n = [];
  for (; (i = a.exec(e)) !== null; )
    n.push(i);
  return n;
}, mi = q("HTMLFormElement"), xi = (a) => a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(i, n, s) {
  return n.toUpperCase() + s;
}), Te = (({ hasOwnProperty: a }) => (e, i) => a.call(e, i))(Object.prototype), fi = q("RegExp"), xa = (a, e) => {
  const i = Object.getOwnPropertyDescriptors(a), n = {};
  ae(i, (s, o) => {
    let t;
    (t = e(s, o, a)) !== !1 && (n[o] = t || s);
  }), Object.defineProperties(a, n);
}, vi = (a) => {
  xa(a, (e, i) => {
    if (T(a) && ["arguments", "caller", "callee"].includes(i))
      return !1;
    const n = a[i];
    if (T(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + i + "'");
      });
    }
  });
}, bi = (a, e) => {
  const i = {}, n = (s) => {
    s.forEach((o) => {
      i[o] = !0;
    });
  };
  return K(a) ? n(a) : n(String(a).split(e)), i;
}, hi = () => {
}, gi = (a, e) => a != null && Number.isFinite(a = +a) ? a : e;
function wi(a) {
  return !!(a && T(a.append) && a[pa] === "FormData" && a[me]);
}
const yi = (a) => {
  const e = /* @__PURE__ */ new WeakSet(), i = (n) => {
    if (ee(n)) {
      if (e.has(n))
        return;
      if (Z(n))
        return n;
      if (!("toJSON" in n)) {
        e.add(n);
        const s = K(n) ? [] : {};
        return ae(n, (o, t) => {
          const r = i(o);
          !W(r) && (s[t] = r);
        }), e.delete(n), s;
      }
    }
    return n;
  };
  return i(a);
}, ji = q("AsyncFunction"), ki = (a) => a && (ee(a) || T(a)) && T(a.then) && T(a.catch), fa = ((a, e) => a ? setImmediate : e ? ((i, n) => (M.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === M && o === i && n.length && n.shift()();
  },
  !1
), (s) => {
  n.push(s), M.postMessage(i, "*");
}))(`axios@${Math.random()}`, []) : (i) => setTimeout(i))(typeof setImmediate == "function", T(M.postMessage)), Ei = typeof queueMicrotask < "u" ? queueMicrotask.bind(M) : typeof process < "u" && process.nextTick || fa, Ri = (a) => a != null && T(a[me]), c = {
  isArray: K,
  isArrayBuffer: la,
  isBuffer: Z,
  isFormData: Ya,
  isArrayBufferView: La,
  isString: Ba,
  isNumber: ua,
  isBoolean: Ia,
  isObject: ee,
  isPlainObject: re,
  isEmptyObject: Ma,
  isReadableStream: Za,
  isRequest: ei,
  isResponse: ai,
  isHeaders: ii,
  isUndefined: W,
  isDate: Ha,
  isFile: $a,
  isReactNativeBlob: Va,
  isReactNative: Ja,
  isBlob: Wa,
  isRegExp: fi,
  isFunction: T,
  isStream: Xa,
  isURLSearchParams: Qa,
  isTypedArray: li,
  isFileList: Ka,
  forEach: ae,
  merge: Ae,
  extend: si,
  trim: ni,
  stripBOM: oi,
  inherits: ti,
  toFlatObject: ci,
  kindOf: xe,
  kindOfTest: q,
  endsWith: ri,
  toArray: pi,
  forEachEntry: ui,
  matchAll: di,
  isHTMLForm: mi,
  hasOwnProperty: Te,
  hasOwnProp: Te,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: xa,
  freezeMethods: vi,
  toObjectSet: bi,
  toCamelCase: xi,
  noop: hi,
  toFiniteNumber: gi,
  findKey: da,
  global: M,
  isContextDefined: ma,
  isSpecCompliantForm: wi,
  toJSONObject: yi,
  isAsyncFn: ji,
  isThenable: ki,
  setImmediate: fa,
  asap: Ei,
  isIterable: Ri
}, Si = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Oi = (a) => {
  const e = {};
  let i, n, s;
  return a && a.split(`
`).forEach(function(t) {
    s = t.indexOf(":"), i = t.substring(0, s).trim().toLowerCase(), n = t.substring(s + 1).trim(), !(!i || e[i] && Si[i]) && (i === "set-cookie" ? e[i] ? e[i].push(n) : e[i] = [n] : e[i] = e[i] ? e[i] + ", " + n : n);
  }), e;
};
function Ai(a) {
  let e = 0, i = a.length;
  for (; e < i; ) {
    const n = a.charCodeAt(e);
    if (n !== 9 && n !== 32)
      break;
    e += 1;
  }
  for (; i > e; ) {
    const n = a.charCodeAt(i - 1);
    if (n !== 9 && n !== 32)
      break;
    i -= 1;
  }
  return e === 0 && i === a.length ? a : a.slice(e, i);
}
const Ti = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), _i = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Ce(a, e) {
  return c.isArray(a) ? a.map((i) => Ce(i, e)) : Ai(String(a).replace(e, ""));
}
const zi = (a) => Ce(a, Ti), qi = (a) => Ce(a, _i);
function va(a) {
  const e = /* @__PURE__ */ Object.create(null);
  return c.forEach(a.toJSON(), (i, n) => {
    e[n] = qi(i);
  }), e;
}
const Je = /* @__PURE__ */ Symbol("internals");
function Q(a) {
  return a && String(a).trim().toLowerCase();
}
function pe(a) {
  return a === !1 || a == null ? a : c.isArray(a) ? a.map(pe) : zi(String(a));
}
function Ci(a) {
  const e = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = i.exec(a); )
    e[n[1]] = n[2];
  return e;
}
const Fi = (a) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function ye(a, e, i, n, s) {
  if (c.isFunction(n))
    return n.call(this, e, i);
  if (s && (e = i), !!c.isString(e)) {
    if (c.isString(n))
      return e.indexOf(n) !== -1;
    if (c.isRegExp(n))
      return n.test(e);
  }
}
function Pi(a) {
  return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, i, n) => i.toUpperCase() + n);
}
function Ui(a, e) {
  const i = c.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(a, n + i, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(s, o, t) {
        return this[n].call(this, e, s, o, t);
      },
      configurable: !0
    });
  });
}
let A = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, i, n) {
    const s = this;
    function o(r, p, u) {
      const l = Q(p);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = c.findKey(s, l);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || p] = pe(r));
    }
    const t = (r, p) => c.forEach(r, (u, l) => o(u, l, p));
    if (c.isPlainObject(e) || e instanceof this.constructor)
      t(e, i);
    else if (c.isString(e) && (e = e.trim()) && !Fi(e))
      t(Oi(e), i);
    else if (c.isObject(e) && c.isIterable(e)) {
      let r = {}, p, u;
      for (const l of e) {
        if (!c.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        r[u = l[0]] = (p = r[u]) ? c.isArray(p) ? [...p, l[1]] : [p, l[1]] : l[1];
      }
      t(r, i);
    } else
      e != null && o(i, e, n);
    return this;
  }
  get(e, i) {
    if (e = Q(e), e) {
      const n = c.findKey(this, e);
      if (n) {
        const s = this[n];
        if (!i)
          return s;
        if (i === !0)
          return Ci(s);
        if (c.isFunction(i))
          return i.call(this, s, n);
        if (c.isRegExp(i))
          return i.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, i) {
    if (e = Q(e), e) {
      const n = c.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!i || ye(this, this[n], n, i)));
    }
    return !1;
  }
  delete(e, i) {
    const n = this;
    let s = !1;
    function o(t) {
      if (t = Q(t), t) {
        const r = c.findKey(n, t);
        r && (!i || ye(n, n[r], r, i)) && (delete n[r], s = !0);
      }
    }
    return c.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const i = Object.keys(this);
    let n = i.length, s = !1;
    for (; n--; ) {
      const o = i[n];
      (!e || ye(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const i = this, n = {};
    return c.forEach(this, (s, o) => {
      const t = c.findKey(n, o);
      if (t) {
        i[t] = pe(s), delete i[o];
        return;
      }
      const r = e ? Pi(o) : String(o).trim();
      r !== o && delete i[o], i[r] = pe(s), n[r] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const i = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (n, s) => {
      n != null && n !== !1 && (i[s] = e && c.isArray(n) ? n.join(", ") : n);
    }), i;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, i]) => e + ": " + i).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...i) {
    const n = new this(e);
    return i.forEach((s) => n.set(s)), n;
  }
  static accessor(e) {
    const n = (this[Je] = this[Je] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(t) {
      const r = Q(t);
      n[r] || (Ui(s, t), n[r] = !0);
    }
    return c.isArray(e) ? e.forEach(o) : o(e), this;
  }
};
A.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
c.reduceDescriptors(A.prototype, ({ value: a }, e) => {
  let i = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => a,
    set(n) {
      this[i] = n;
    }
  };
});
c.freezeMethods(A);
const Ni = "[REDACTED ****]";
function Di(a) {
  if (c.hasOwnProp(a, "toJSON"))
    return !0;
  let e = Object.getPrototypeOf(a);
  for (; e && e !== Object.prototype; ) {
    if (c.hasOwnProp(e, "toJSON"))
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
}
function Li(a, e) {
  const i = new Set(e.map((o) => String(o).toLowerCase())), n = [], s = (o) => {
    if (o === null || typeof o != "object" || c.isBuffer(o)) return o;
    if (n.indexOf(o) !== -1) return;
    o instanceof A && (o = o.toJSON()), n.push(o);
    let t;
    if (c.isArray(o))
      t = [], o.forEach((r, p) => {
        const u = s(r);
        c.isUndefined(u) || (t[p] = u);
      });
    else {
      if (!c.isPlainObject(o) && Di(o))
        return n.pop(), o;
      t = /* @__PURE__ */ Object.create(null);
      for (const [r, p] of Object.entries(o)) {
        const u = i.has(r.toLowerCase()) ? Ni : s(p);
        c.isUndefined(u) || (t[r] = u);
      }
    }
    return n.pop(), t;
  };
  return s(a);
}
let v = class ba extends Error {
  static from(e, i, n, s, o, t) {
    const r = new ba(e.message, i || e.code, n, s, o);
    return r.cause = e, r.name = e.name, e.status != null && r.status == null && (r.status = e.status), t && Object.assign(r, t), r;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(e, i, n, s, o) {
    super(e), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: e,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, i && (this.code = i), n && (this.config = n), s && (this.request = s), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
    const e = this.config, i = e && c.hasOwnProp(e, "redact") ? e.redact : void 0, n = c.isArray(i) && i.length > 0 ? Li(e, i) : c.toJSONObject(e);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: n,
      code: this.code,
      status: this.status
    };
  }
};
v.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
v.ERR_BAD_OPTION = "ERR_BAD_OPTION";
v.ECONNABORTED = "ECONNABORTED";
v.ETIMEDOUT = "ETIMEDOUT";
v.ECONNREFUSED = "ECONNREFUSED";
v.ERR_NETWORK = "ERR_NETWORK";
v.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
v.ERR_DEPRECATED = "ERR_DEPRECATED";
v.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
v.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
v.ERR_CANCELED = "ERR_CANCELED";
v.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
v.ERR_INVALID_URL = "ERR_INVALID_URL";
v.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const Bi = null;
function _e(a) {
  return c.isPlainObject(a) || c.isArray(a);
}
function ha(a) {
  return c.endsWith(a, "[]") ? a.slice(0, -2) : a;
}
function je(a, e, i) {
  return a ? a.concat(e).map(function(s, o) {
    return s = ha(s), !i && o ? "[" + s + "]" : s;
  }).join(i ? "." : "") : e;
}
function Ii(a) {
  return c.isArray(a) && !a.some(_e);
}
const Mi = c.toFlatObject(c, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ve(a, e, i) {
  if (!c.isObject(a))
    throw new TypeError("target must be an object");
  e = e || new FormData(), i = c.toFlatObject(
    i,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(m, f) {
      return !c.isUndefined(f[m]);
    }
  );
  const n = i.metaTokens, s = i.visitor || h, o = i.dots, t = i.indexes, r = i.Blob || typeof Blob < "u" && Blob, p = i.maxDepth === void 0 ? 100 : i.maxDepth, u = r && c.isSpecCompliantForm(e);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(d) {
    if (d === null) return "";
    if (c.isDate(d))
      return d.toISOString();
    if (c.isBoolean(d))
      return d.toString();
    if (!u && c.isBlob(d))
      throw new v("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(d) || c.isTypedArray(d) ? u && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function h(d, m, f) {
    let y = d;
    if (c.isReactNative(e) && c.isReactNativeBlob(d))
      return e.append(je(f, m, o), l(d)), !1;
    if (d && !f && typeof d == "object") {
      if (c.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (c.isArray(d) && Ii(d) || (c.isFileList(d) || c.endsWith(m, "[]")) && (y = c.toArray(d)))
        return m = ha(m), y.forEach(function(g, O) {
          !(c.isUndefined(g) || g === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            t === !0 ? je([m], O, o) : t === null ? m : m + "[]",
            l(g)
          );
        }), !1;
    }
    return _e(d) ? !0 : (e.append(je(f, m, o), l(d)), !1);
  }
  const w = [], b = Object.assign(Mi, {
    defaultVisitor: h,
    convertValue: l,
    isVisitable: _e
  });
  function x(d, m, f = 0) {
    if (!c.isUndefined(d)) {
      if (f > p)
        throw new v(
          "Object is too deeply nested (" + f + " levels). Max depth: " + p,
          v.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (w.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      w.push(d), c.forEach(d, function(j, g) {
        (!(c.isUndefined(j) || j === null) && s.call(e, j, c.isString(g) ? g.trim() : g, m, b)) === !0 && x(j, m ? m.concat(g) : [g], f + 1);
      }), w.pop();
    }
  }
  if (!c.isObject(a))
    throw new TypeError("data must be an object");
  return x(a), e;
}
function We(a) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(a).replace(/[!'()~]|%20/g, function(n) {
    return e[n];
  });
}
function Fe(a, e) {
  this._pairs = [], a && ve(a, this, e);
}
const ga = Fe.prototype;
ga.append = function(e, i) {
  this._pairs.push([e, i]);
};
ga.toString = function(e) {
  const i = e ? function(n) {
    return e.call(this, n, We);
  } : We;
  return this._pairs.map(function(s) {
    return i(s[0]) + "=" + i(s[1]);
  }, "").join("&");
};
function Hi(a) {
  return encodeURIComponent(a).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function wa(a, e, i) {
  if (!e)
    return a;
  const n = i && i.encode || Hi, s = c.isFunction(i) ? {
    serialize: i
  } : i, o = s && s.serialize;
  let t;
  if (o ? t = o(e, s) : t = c.isURLSearchParams(e) ? e.toString() : new Fe(e, s).toString(n), t) {
    const r = a.indexOf("#");
    r !== -1 && (a = a.slice(0, r)), a += (a.indexOf("?") === -1 ? "?" : "&") + t;
  }
  return a;
}
class Ke {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, i, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: i,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    c.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Pe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, $i = typeof URLSearchParams < "u" ? URLSearchParams : Fe, Vi = typeof FormData < "u" ? FormData : null, Ji = typeof Blob < "u" ? Blob : null, Wi = {
  isBrowser: !0,
  classes: {
    URLSearchParams: $i,
    FormData: Vi,
    Blob: Ji
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ue = typeof window < "u" && typeof document < "u", ze = typeof navigator == "object" && navigator || void 0, Ki = Ue && (!ze || ["ReactNative", "NativeScript", "NS"].indexOf(ze.product) < 0), Xi = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Gi = Ue && window.location.href || "http://localhost", Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ue,
  hasStandardBrowserEnv: Ki,
  hasStandardBrowserWebWorkerEnv: Xi,
  navigator: ze,
  origin: Gi
}, Symbol.toStringTag, { value: "Module" })), S = {
  ...Yi,
  ...Wi
};
function Qi(a, e) {
  return ve(a, new S.classes.URLSearchParams(), {
    visitor: function(i, n, s, o) {
      return S.isNode && c.isBuffer(i) ? (this.append(n, i.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function Zi(a) {
  return c.matchAll(/\w+|\[(\w*)]/g, a).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function en(a) {
  const e = {}, i = Object.keys(a);
  let n;
  const s = i.length;
  let o;
  for (n = 0; n < s; n++)
    o = i[n], e[o] = a[o];
  return e;
}
function ya(a) {
  function e(i, n, s, o) {
    let t = i[o++];
    if (t === "__proto__") return !0;
    const r = Number.isFinite(+t), p = o >= i.length;
    return t = !t && c.isArray(s) ? s.length : t, p ? (c.hasOwnProp(s, t) ? s[t] = c.isArray(s[t]) ? s[t].concat(n) : [s[t], n] : s[t] = n, !r) : ((!c.hasOwnProp(s, t) || !c.isObject(s[t])) && (s[t] = []), e(i, n, s[t], o) && c.isArray(s[t]) && (s[t] = en(s[t])), !r);
  }
  if (c.isFormData(a) && c.isFunction(a.entries)) {
    const i = {};
    return c.forEachEntry(a, (n, s) => {
      e(Zi(n), s, i, 0);
    }), i;
  }
  return null;
}
const J = (a, e) => a != null && c.hasOwnProp(a, e) ? a[e] : void 0;
function an(a, e, i) {
  if (c.isString(a))
    try {
      return (e || JSON.parse)(a), c.trim(a);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (i || JSON.stringify)(a);
}
const ie = {
  transitional: Pe,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(e, i) {
      const n = i.getContentType() || "", s = n.indexOf("application/json") > -1, o = c.isObject(e);
      if (o && c.isHTMLForm(e) && (e = new FormData(e)), c.isFormData(e))
        return s ? JSON.stringify(ya(e)) : e;
      if (c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e) || c.isReadableStream(e))
        return e;
      if (c.isArrayBufferView(e))
        return e.buffer;
      if (c.isURLSearchParams(e))
        return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
      let r;
      if (o) {
        const p = J(this, "formSerializer");
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return Qi(e, p).toString();
        if ((r = c.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
          const u = J(this, "env"), l = u && u.FormData;
          return ve(
            r ? { "files[]": e } : e,
            l && new l(),
            p
          );
        }
      }
      return o || s ? (i.setContentType("application/json", !1), an(e)) : e;
    }
  ],
  transformResponse: [
    function(e) {
      const i = J(this, "transitional") || ie.transitional, n = i && i.forcedJSONParsing, s = J(this, "responseType"), o = s === "json";
      if (c.isResponse(e) || c.isReadableStream(e))
        return e;
      if (e && c.isString(e) && (n && !s || o)) {
        const r = !(i && i.silentJSONParsing) && o;
        try {
          return JSON.parse(e, J(this, "parseReviver"));
        } catch (p) {
          if (r)
            throw p.name === "SyntaxError" ? v.from(p, v.ERR_BAD_RESPONSE, this, null, J(this, "response")) : p;
        }
      }
      return e;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: S.classes.FormData,
    Blob: S.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (a) => {
  ie.headers[a] = {};
});
function ke(a, e) {
  const i = this || ie, n = e || i, s = A.from(n.headers);
  let o = n.data;
  return c.forEach(a, function(r) {
    o = r.call(i, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function ja(a) {
  return !!(a && a.__CANCEL__);
}
let ne = class extends v {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, i, n) {
    super(e ?? "canceled", v.ERR_CANCELED, i, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function ka(a, e, i) {
  const n = i.config.validateStatus;
  !i.status || !n || n(i.status) ? a(i) : e(new v(
    "Request failed with status code " + i.status,
    i.status >= 400 && i.status < 500 ? v.ERR_BAD_REQUEST : v.ERR_BAD_RESPONSE,
    i.config,
    i.request,
    i
  ));
}
function nn(a) {
  const e = /^([-+\w]{1,25}):(?:\/\/)?/.exec(a);
  return e && e[1] || "";
}
function sn(a, e) {
  a = a || 10;
  const i = new Array(a), n = new Array(a);
  let s = 0, o = 0, t;
  return e = e !== void 0 ? e : 1e3, function(p) {
    const u = Date.now(), l = n[o];
    t || (t = u), i[s] = p, n[s] = u;
    let h = o, w = 0;
    for (; h !== s; )
      w += i[h++], h = h % a;
    if (s = (s + 1) % a, s === o && (o = (o + 1) % a), u - t < e)
      return;
    const b = l && u - l;
    return b ? Math.round(w * 1e3 / b) : void 0;
  };
}
function on(a, e) {
  let i = 0, n = 1e3 / e, s, o;
  const t = (u, l = Date.now()) => {
    i = l, s = null, o && (clearTimeout(o), o = null), a(...u);
  };
  return [(...u) => {
    const l = Date.now(), h = l - i;
    h >= n ? t(u, l) : (s = u, o || (o = setTimeout(() => {
      o = null, t(s);
    }, n - h)));
  }, () => s && t(s)];
}
const ue = (a, e, i = 3) => {
  let n = 0;
  const s = sn(50, 250);
  return on((o) => {
    if (!o || typeof o.loaded != "number")
      return;
    const t = o.loaded, r = o.lengthComputable ? o.total : void 0, p = r != null ? Math.min(t, r) : t, u = Math.max(0, p - n), l = s(u);
    n = Math.max(n, p);
    const h = {
      loaded: p,
      total: r,
      progress: r ? p / r : void 0,
      bytes: u,
      rate: l || void 0,
      estimated: l && r ? (r - p) / l : void 0,
      event: o,
      lengthComputable: r != null,
      [e ? "download" : "upload"]: !0
    };
    a(h);
  }, i);
}, Xe = (a, e) => {
  const i = a != null;
  return [
    (n) => e[0]({
      lengthComputable: i,
      total: a,
      loaded: n
    }),
    e[1]
  ];
}, Ge = (a) => (...e) => c.asap(() => a(...e)), tn = S.hasStandardBrowserEnv ? /* @__PURE__ */ ((a, e) => (i) => (i = new URL(i, S.origin), a.protocol === i.protocol && a.host === i.host && (e || a.port === i.port)))(
  new URL(S.origin),
  S.navigator && /(msie|trident)/i.test(S.navigator.userAgent)
) : () => !0, cn = S.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(a, e, i, n, s, o, t) {
      if (typeof document > "u") return;
      const r = [`${a}=${encodeURIComponent(e)}`];
      c.isNumber(i) && r.push(`expires=${new Date(i).toUTCString()}`), c.isString(n) && r.push(`path=${n}`), c.isString(s) && r.push(`domain=${s}`), o === !0 && r.push("secure"), c.isString(t) && r.push(`SameSite=${t}`), document.cookie = r.join("; ");
    },
    read(a) {
      if (typeof document > "u") return null;
      const e = document.cookie.split(";");
      for (let i = 0; i < e.length; i++) {
        const n = e[i].replace(/^\s+/, ""), s = n.indexOf("=");
        if (s !== -1 && n.slice(0, s) === a)
          return decodeURIComponent(n.slice(s + 1));
      }
      return null;
    },
    remove(a) {
      this.write(a, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function rn(a) {
  return typeof a != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}
function pn(a, e) {
  return e ? a.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : a;
}
function Ea(a, e, i) {
  let n = !rn(e);
  return a && (n || i === !1) ? pn(a, e) : e;
}
const Ye = (a) => a instanceof A ? { ...a } : a;
function $(a, e) {
  e = e || {};
  const i = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(i, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function n(u, l, h, w) {
    return c.isPlainObject(u) && c.isPlainObject(l) ? c.merge.call({ caseless: w }, u, l) : c.isPlainObject(l) ? c.merge({}, l) : c.isArray(l) ? l.slice() : l;
  }
  function s(u, l, h, w) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined(u))
        return n(void 0, u, h, w);
    } else return n(u, l, h, w);
  }
  function o(u, l) {
    if (!c.isUndefined(l))
      return n(void 0, l);
  }
  function t(u, l) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, l);
  }
  function r(u, l, h) {
    if (c.hasOwnProp(e, h))
      return n(u, l);
    if (c.hasOwnProp(a, h))
      return n(void 0, u);
  }
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: t,
    transformRequest: t,
    transformResponse: t,
    paramsSerializer: t,
    timeout: t,
    timeoutMessage: t,
    withCredentials: t,
    withXSRFToken: t,
    adapter: t,
    responseType: t,
    xsrfCookieName: t,
    xsrfHeaderName: t,
    onUploadProgress: t,
    onDownloadProgress: t,
    decompress: t,
    maxContentLength: t,
    maxBodyLength: t,
    beforeRedirect: t,
    transport: t,
    httpAgent: t,
    httpsAgent: t,
    cancelToken: t,
    socketPath: t,
    allowedSocketPaths: t,
    responseEncoding: t,
    validateStatus: r,
    headers: (u, l, h) => s(Ye(u), Ye(l), h, !0)
  };
  return c.forEach(Object.keys({ ...a, ...e }), function(l) {
    if (l === "__proto__" || l === "constructor" || l === "prototype") return;
    const h = c.hasOwnProp(p, l) ? p[l] : s, w = c.hasOwnProp(a, l) ? a[l] : void 0, b = c.hasOwnProp(e, l) ? e[l] : void 0, x = h(w, b, l);
    c.isUndefined(x) && h !== r || (i[l] = x);
  }), i;
}
const ln = ["content-type", "content-length"];
function un(a, e, i) {
  if (i !== "content-only") {
    a.set(e);
    return;
  }
  Object.entries(e).forEach(([n, s]) => {
    ln.includes(n.toLowerCase()) && a.set(n, s);
  });
}
const dn = (a) => encodeURIComponent(a).replace(
  /%([0-9A-F]{2})/gi,
  (e, i) => String.fromCharCode(parseInt(i, 16))
), Ra = (a) => {
  const e = $({}, a), i = (w) => c.hasOwnProp(e, w) ? e[w] : void 0, n = i("data");
  let s = i("withXSRFToken");
  const o = i("xsrfHeaderName"), t = i("xsrfCookieName");
  let r = i("headers");
  const p = i("auth"), u = i("baseURL"), l = i("allowAbsoluteUrls"), h = i("url");
  if (e.headers = r = A.from(r), e.url = wa(
    Ea(u, h, l),
    a.params,
    a.paramsSerializer
  ), p && r.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? dn(p.password) : ""))
  ), c.isFormData(n) && (S.hasStandardBrowserEnv || S.hasStandardBrowserWebWorkerEnv ? r.setContentType(void 0) : c.isFunction(n.getHeaders) && un(r, n.getHeaders(), i("formDataHeaderPolicy"))), S.hasStandardBrowserEnv && (c.isFunction(s) && (s = s(e)), s === !0 || s == null && tn(e.url))) {
    const b = o && t && cn.read(t);
    b && r.set(o, b);
  }
  return e;
}, mn = typeof XMLHttpRequest < "u", xn = mn && function(a) {
  return new Promise(function(i, n) {
    const s = Ra(a);
    let o = s.data;
    const t = A.from(s.headers).normalize();
    let { responseType: r, onUploadProgress: p, onDownloadProgress: u } = s, l, h, w, b, x;
    function d() {
      b && b(), x && x(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function f() {
      if (!m)
        return;
      const j = A.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), O = {
        data: !r || r === "text" || r === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: j,
        config: a,
        request: m
      };
      ka(
        function(X) {
          i(X), d();
        },
        function(X) {
          n(X), d();
        },
        O
      ), m = null;
    }
    "onloadend" in m ? m.onloadend = f : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.startsWith("file:")) || setTimeout(f);
    }, m.onabort = function() {
      m && (n(new v("Request aborted", v.ECONNABORTED, a, m)), d(), m = null);
    }, m.onerror = function(g) {
      const O = g && g.message ? g.message : "Network Error", L = new v(O, v.ERR_NETWORK, a, m);
      L.event = g || null, n(L), d(), m = null;
    }, m.ontimeout = function() {
      let g = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const O = s.transitional || Pe;
      s.timeoutErrorMessage && (g = s.timeoutErrorMessage), n(
        new v(
          g,
          O.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
          a,
          m
        )
      ), d(), m = null;
    }, o === void 0 && t.setContentType(null), "setRequestHeader" in m && c.forEach(va(t), function(g, O) {
      m.setRequestHeader(O, g);
    }), c.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), r && r !== "json" && (m.responseType = s.responseType), u && ([w, x] = ue(u, !0), m.addEventListener("progress", w)), p && m.upload && ([h, b] = ue(p), m.upload.addEventListener("progress", h), m.upload.addEventListener("loadend", b)), (s.cancelToken || s.signal) && (l = (j) => {
      m && (n(!j || j.type ? new ne(null, a, m) : j), m.abort(), d(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const y = nn(s.url);
    if (y && !S.protocols.includes(y)) {
      n(
        new v(
          "Unsupported protocol " + y + ":",
          v.ERR_BAD_REQUEST,
          a
        )
      );
      return;
    }
    m.send(o || null);
  });
}, fn = (a, e) => {
  if (a = a ? a.filter(Boolean) : [], !e && !a.length)
    return;
  const i = new AbortController();
  let n = !1;
  const s = function(p) {
    if (!n) {
      n = !0, t();
      const u = p instanceof Error ? p : this.reason;
      i.abort(
        u instanceof v ? u : new ne(u instanceof Error ? u.message : u)
      );
    }
  };
  let o = e && setTimeout(() => {
    o = null, s(new v(`timeout of ${e}ms exceeded`, v.ETIMEDOUT));
  }, e);
  const t = () => {
    a && (o && clearTimeout(o), o = null, a.forEach((p) => {
      p.unsubscribe ? p.unsubscribe(s) : p.removeEventListener("abort", s);
    }), a = null);
  };
  a.forEach((p) => p.addEventListener("abort", s));
  const { signal: r } = i;
  return r.unsubscribe = () => c.asap(t), r;
}, vn = function* (a, e) {
  let i = a.byteLength;
  if (i < e) {
    yield a;
    return;
  }
  let n = 0, s;
  for (; n < i; )
    s = n + e, yield a.slice(n, s), n = s;
}, bn = async function* (a, e) {
  for await (const i of hn(a))
    yield* vn(i, e);
}, hn = async function* (a) {
  if (a[Symbol.asyncIterator]) {
    yield* a;
    return;
  }
  const e = a.getReader();
  try {
    for (; ; ) {
      const { done: i, value: n } = await e.read();
      if (i)
        break;
      yield n;
    }
  } finally {
    await e.cancel();
  }
}, Qe = (a, e, i, n) => {
  const s = bn(a, e);
  let o = 0, t, r = (p) => {
    t || (t = !0, n && n(p));
  };
  return new ReadableStream(
    {
      async pull(p) {
        try {
          const { done: u, value: l } = await s.next();
          if (u) {
            r(), p.close();
            return;
          }
          let h = l.byteLength;
          if (i) {
            let w = o += h;
            i(w);
          }
          p.enqueue(new Uint8Array(l));
        } catch (u) {
          throw r(u), u;
        }
      },
      cancel(p) {
        return r(p), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
};
function gn(a) {
  if (!a || typeof a != "string" || !a.startsWith("data:")) return 0;
  const e = a.indexOf(",");
  if (e < 0) return 0;
  const i = a.slice(5, e), n = a.slice(e + 1);
  if (/;base64/i.test(i)) {
    let t = n.length;
    const r = n.length;
    for (let b = 0; b < r; b++)
      if (n.charCodeAt(b) === 37 && b + 2 < r) {
        const x = n.charCodeAt(b + 1), d = n.charCodeAt(b + 2);
        (x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102) && (d >= 48 && d <= 57 || d >= 65 && d <= 70 || d >= 97 && d <= 102) && (t -= 2, b += 2);
      }
    let p = 0, u = r - 1;
    const l = (b) => b >= 2 && n.charCodeAt(b - 2) === 37 && // '%'
    n.charCodeAt(b - 1) === 51 && // '3'
    (n.charCodeAt(b) === 68 || n.charCodeAt(b) === 100);
    u >= 0 && (n.charCodeAt(u) === 61 ? (p++, u--) : l(u) && (p++, u -= 3)), p === 1 && u >= 0 && (n.charCodeAt(u) === 61 || l(u)) && p++;
    const w = Math.floor(t / 4) * 3 - (p || 0);
    return w > 0 ? w : 0;
  }
  if (typeof Buffer < "u" && typeof Buffer.byteLength == "function")
    return Buffer.byteLength(n, "utf8");
  let o = 0;
  for (let t = 0, r = n.length; t < r; t++) {
    const p = n.charCodeAt(t);
    if (p < 128)
      o += 1;
    else if (p < 2048)
      o += 2;
    else if (p >= 55296 && p <= 56319 && t + 1 < r) {
      const u = n.charCodeAt(t + 1);
      u >= 56320 && u <= 57343 ? (o += 4, t++) : o += 3;
    } else
      o += 3;
  }
  return o;
}
const Ne = "1.16.1", Ze = 64 * 1024, { isFunction: ce } = c, ea = (a, ...e) => {
  try {
    return !!a(...e);
  } catch {
    return !1;
  }
}, wn = (a) => {
  const e = c.global !== void 0 && c.global !== null ? c.global : globalThis, { ReadableStream: i, TextEncoder: n } = e;
  a = c.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: e.Request,
      Response: e.Response
    },
    a
  );
  const { fetch: s, Request: o, Response: t } = a, r = s ? ce(s) : typeof fetch == "function", p = ce(o), u = ce(t);
  if (!r)
    return !1;
  const l = r && ce(i), h = r && (typeof n == "function" ? /* @__PURE__ */ ((f) => (y) => f.encode(y))(new n()) : async (f) => new Uint8Array(await new o(f).arrayBuffer())), w = p && l && ea(() => {
    let f = !1;
    const y = new o(S.origin, {
      body: new i(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }), j = y.headers.has("Content-Type");
    return y.body != null && y.body.cancel(), f && !j;
  }), b = u && l && ea(() => c.isReadableStream(new t("").body)), x = {
    stream: b && ((f) => f.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !x[f] && (x[f] = (y, j) => {
      let g = y && y[f];
      if (g)
        return g.call(y);
      throw new v(
        `Response type '${f}' is not supported`,
        v.ERR_NOT_SUPPORT,
        j
      );
    });
  });
  const d = async (f) => {
    if (f == null)
      return 0;
    if (c.isBlob(f))
      return f.size;
    if (c.isSpecCompliantForm(f))
      return (await new o(S.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (c.isArrayBufferView(f) || c.isArrayBuffer(f))
      return f.byteLength;
    if (c.isURLSearchParams(f) && (f = f + ""), c.isString(f))
      return (await h(f)).byteLength;
  }, m = async (f, y) => {
    const j = c.toFiniteNumber(f.getContentLength());
    return j ?? d(y);
  };
  return async (f) => {
    let {
      url: y,
      method: j,
      data: g,
      signal: O,
      cancelToken: L,
      timeout: X,
      onDownloadProgress: he,
      onUploadProgress: Le,
      responseType: U,
      headers: B,
      withCredentials: se = "same-origin",
      fetchOptions: Be,
      maxContentLength: C,
      maxBodyLength: ge
    } = Ra(f);
    const G = c.isNumber(C) && C > -1, qa = c.isNumber(ge) && ge > -1;
    let Ie = s || fetch;
    U = U ? (U + "").toLowerCase() : "text";
    let N = fn(
      [O, L && L.toAbortSignal()],
      X
    ), _ = null;
    const I = N && N.unsubscribe && (() => {
      N.unsubscribe();
    });
    let Me;
    try {
      if (G && typeof y == "string" && y.startsWith("data:") && gn(y) > C)
        throw new v(
          "maxContentLength size of " + C + " exceeded",
          v.ERR_BAD_RESPONSE,
          f,
          _
        );
      if (qa && j !== "get" && j !== "head") {
        const k = await m(B, g);
        if (typeof k == "number" && isFinite(k) && k > ge)
          throw new v(
            "Request body larger than maxBodyLength limit",
            v.ERR_BAD_REQUEST,
            f,
            _
          );
      }
      if (Le && w && j !== "get" && j !== "head" && (Me = await m(B, g)) !== 0) {
        let k = new o(y, {
          method: "POST",
          body: g,
          duplex: "half"
        }), V;
        if (c.isFormData(g) && (V = k.headers.get("content-type")) && B.setContentType(V), k.body) {
          const [oe, te] = Xe(
            Me,
            ue(Ge(Le))
          );
          g = Qe(k.body, Ze, oe, te);
        }
      }
      c.isString(se) || (se = se ? "include" : "omit");
      const R = p && "credentials" in o.prototype;
      if (c.isFormData(g)) {
        const k = B.getContentType();
        k && /^multipart\/form-data/i.test(k) && !/boundary=/i.test(k) && B.delete("content-type");
      }
      B.set("User-Agent", "axios/" + Ne, !1);
      const D = {
        ...Be,
        signal: N,
        method: j.toUpperCase(),
        headers: va(B.normalize()),
        body: g,
        duplex: "half",
        credentials: R ? se : void 0
      };
      _ = p && new o(y, D);
      let F = await (p ? Ie(_, Be) : Ie(y, D));
      if (G) {
        const k = c.toFiniteNumber(F.headers.get("content-length"));
        if (k != null && k > C)
          throw new v(
            "maxContentLength size of " + C + " exceeded",
            v.ERR_BAD_RESPONSE,
            f,
            _
          );
      }
      const we = b && (U === "stream" || U === "response");
      if (b && F.body && (he || G || we && I)) {
        const k = {};
        ["status", "statusText", "headers"].forEach((Y) => {
          k[Y] = F[Y];
        });
        const V = c.toFiniteNumber(F.headers.get("content-length")), [oe, te] = he && Xe(
          V,
          ue(Ge(he), !0)
        ) || [];
        let He = 0;
        const Ca = (Y) => {
          if (G && (He = Y, He > C))
            throw new v(
              "maxContentLength size of " + C + " exceeded",
              v.ERR_BAD_RESPONSE,
              f,
              _
            );
          oe && oe(Y);
        };
        F = new t(
          Qe(F.body, Ze, Ca, () => {
            te && te(), I && I();
          }),
          k
        );
      }
      U = U || "text";
      let P = await x[c.findKey(x, U) || "text"](
        F,
        f
      );
      if (G && !b && !we) {
        let k;
        if (P != null && (typeof P.byteLength == "number" ? k = P.byteLength : typeof P.size == "number" ? k = P.size : typeof P == "string" && (k = typeof n == "function" ? new n().encode(P).byteLength : P.length)), typeof k == "number" && k > C)
          throw new v(
            "maxContentLength size of " + C + " exceeded",
            v.ERR_BAD_RESPONSE,
            f,
            _
          );
      }
      return !we && I && I(), await new Promise((k, V) => {
        ka(k, V, {
          data: P,
          headers: A.from(F.headers),
          status: F.status,
          statusText: F.statusText,
          config: f,
          request: _
        });
      });
    } catch (R) {
      if (I && I(), N && N.aborted && N.reason instanceof v) {
        const D = N.reason;
        throw D.config = f, _ && (D.request = _), R !== D && (D.cause = R), D;
      }
      throw R && R.name === "TypeError" && /Load failed|fetch/i.test(R.message) ? Object.assign(
        new v(
          "Network Error",
          v.ERR_NETWORK,
          f,
          _,
          R && R.response
        ),
        {
          cause: R.cause || R
        }
      ) : v.from(R, R && R.code, f, _, R && R.response);
    }
  };
}, yn = /* @__PURE__ */ new Map(), Sa = (a) => {
  let e = a && a.env || {};
  const { fetch: i, Request: n, Response: s } = e, o = [n, s, i];
  let t = o.length, r = t, p, u, l = yn;
  for (; r--; )
    p = o[r], u = l.get(p), u === void 0 && l.set(p, u = r ? /* @__PURE__ */ new Map() : wn(e)), l = u;
  return u;
};
Sa();
const De = {
  http: Bi,
  xhr: xn,
  fetch: {
    get: Sa
  }
};
c.forEach(De, (a, e) => {
  if (a) {
    try {
      Object.defineProperty(a, "name", { __proto__: null, value: e });
    } catch {
    }
    Object.defineProperty(a, "adapterName", { __proto__: null, value: e });
  }
});
const aa = (a) => `- ${a}`, jn = (a) => c.isFunction(a) || a === null || a === !1;
function kn(a, e) {
  a = c.isArray(a) ? a : [a];
  const { length: i } = a;
  let n, s;
  const o = {};
  for (let t = 0; t < i; t++) {
    n = a[t];
    let r;
    if (s = n, !jn(n) && (s = De[(r = String(n)).toLowerCase()], s === void 0))
      throw new v(`Unknown adapter '${r}'`);
    if (s && (c.isFunction(s) || (s = s.get(e))))
      break;
    o[r || "#" + t] = s;
  }
  if (!s) {
    const t = Object.entries(o).map(
      ([p, u]) => `adapter ${p} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let r = i ? t.length > 1 ? `since :
` + t.map(aa).join(`
`) : " " + aa(t[0]) : "as no adapter specified";
    throw new v(
      "There is no suitable adapter to dispatch the request " + r,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Oa = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: kn,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: De
};
function Ee(a) {
  if (a.cancelToken && a.cancelToken.throwIfRequested(), a.signal && a.signal.aborted)
    throw new ne(null, a);
}
function ia(a) {
  return Ee(a), a.headers = A.from(a.headers), a.data = ke.call(a, a.transformRequest), ["post", "put", "patch"].indexOf(a.method) !== -1 && a.headers.setContentType("application/x-www-form-urlencoded", !1), Oa.getAdapter(a.adapter || ie.adapter, a)(a).then(
    function(n) {
      Ee(a), a.response = n;
      try {
        n.data = ke.call(a, a.transformResponse, n);
      } finally {
        delete a.response;
      }
      return n.headers = A.from(n.headers), n;
    },
    function(n) {
      if (!ja(n) && (Ee(a), n && n.response)) {
        a.response = n.response;
        try {
          n.response.data = ke.call(
            a,
            a.transformResponse,
            n.response
          );
        } finally {
          delete a.response;
        }
        n.response.headers = A.from(n.response.headers);
      }
      return Promise.reject(n);
    }
  );
}
const be = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((a, e) => {
  be[a] = function(n) {
    return typeof n === a || "a" + (e < 1 ? "n " : " ") + a;
  };
});
const na = {};
be.transitional = function(e, i, n) {
  function s(o, t) {
    return "[Axios v" + Ne + "] Transitional option '" + o + "'" + t + (n ? ". " + n : "");
  }
  return (o, t, r) => {
    if (e === !1)
      throw new v(
        s(t, " has been removed" + (i ? " in " + i : "")),
        v.ERR_DEPRECATED
      );
    return i && !na[t] && (na[t] = !0, console.warn(
      s(
        t,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), e ? e(o, t, r) : !0;
  };
};
be.spelling = function(e) {
  return (i, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function En(a, e, i) {
  if (typeof a != "object")
    throw new v("options must be an object", v.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(a);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], t = Object.prototype.hasOwnProperty.call(e, o) ? e[o] : void 0;
    if (t) {
      const r = a[o], p = r === void 0 || t(r, o, a);
      if (p !== !0)
        throw new v(
          "option " + o + " must be " + p,
          v.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (i !== !0)
      throw new v("Unknown option " + o, v.ERR_BAD_OPTION);
  }
}
const le = {
  assertOptions: En,
  validators: be
}, z = le.validators;
let H = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Ke(),
      response: new Ke()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, i) {
    try {
      return await this._request(e, i);
    } catch (n) {
      if (n instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = (() => {
          if (!s.stack)
            return "";
          const t = s.stack.indexOf(`
`);
          return t === -1 ? "" : s.stack.slice(t + 1);
        })();
        try {
          if (!n.stack)
            n.stack = o;
          else if (o) {
            const t = o.indexOf(`
`), r = t === -1 ? -1 : o.indexOf(`
`, t + 1), p = r === -1 ? "" : o.slice(r + 1);
            String(n.stack).endsWith(p) || (n.stack += `
` + o);
          }
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, i) {
    typeof e == "string" ? (i = i || {}, i.url = e) : i = e || {}, i = $(this.defaults, i);
    const { transitional: n, paramsSerializer: s, headers: o } = i;
    n !== void 0 && le.assertOptions(
      n,
      {
        silentJSONParsing: z.transitional(z.boolean),
        forcedJSONParsing: z.transitional(z.boolean),
        clarifyTimeoutError: z.transitional(z.boolean),
        legacyInterceptorReqResOrdering: z.transitional(z.boolean)
      },
      !1
    ), s != null && (c.isFunction(s) ? i.paramsSerializer = {
      serialize: s
    } : le.assertOptions(
      s,
      {
        encode: z.function,
        serialize: z.function
      },
      !0
    )), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), le.assertOptions(
      i,
      {
        baseUrl: z.spelling("baseURL"),
        withXsrfToken: z.spelling("withXSRFToken")
      },
      !0
    ), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let t = o && c.merge(o.common, o[i.method]);
    o && c.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (x) => {
      delete o[x];
    }), i.headers = A.concat(t, o);
    const r = [];
    let p = !0;
    this.interceptors.request.forEach(function(d) {
      if (typeof d.runWhen == "function" && d.runWhen(i) === !1)
        return;
      p = p && d.synchronous;
      const m = i.transitional || Pe;
      m && m.legacyInterceptorReqResOrdering ? r.unshift(d.fulfilled, d.rejected) : r.push(d.fulfilled, d.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(d) {
      u.push(d.fulfilled, d.rejected);
    });
    let l, h = 0, w;
    if (!p) {
      const x = [ia.bind(this), void 0];
      for (x.unshift(...r), x.push(...u), w = x.length, l = Promise.resolve(i); h < w; )
        l = l.then(x[h++], x[h++]);
      return l;
    }
    w = r.length;
    let b = i;
    for (; h < w; ) {
      const x = r[h++], d = r[h++];
      try {
        b = x(b);
      } catch (m) {
        d.call(this, m);
        break;
      }
    }
    try {
      l = ia.call(this, b);
    } catch (x) {
      return Promise.reject(x);
    }
    for (h = 0, w = u.length; h < w; )
      l = l.then(u[h++], u[h++]);
    return l;
  }
  getUri(e) {
    e = $(this.defaults, e);
    const i = Ea(e.baseURL, e.url, e.allowAbsoluteUrls);
    return wa(i, e.params, e.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function(e) {
  H.prototype[e] = function(i, n) {
    return this.request(
      $(n || {}, {
        method: e,
        url: i,
        data: (n || {}).data
      })
    );
  };
});
c.forEach(["post", "put", "patch", "query"], function(e) {
  function i(n) {
    return function(o, t, r) {
      return this.request(
        $(r || {}, {
          method: e,
          headers: n ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: t
        })
      );
    };
  }
  H.prototype[e] = i(), e !== "query" && (H.prototype[e + "Form"] = i(!0));
});
let Rn = class Aa {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function(o) {
      i = o;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const t = new Promise((r) => {
        n.subscribe(r), o = r;
      }).then(s);
      return t.cancel = function() {
        n.unsubscribe(o);
      }, t;
    }, e(function(o, t, r) {
      n.reason || (n.reason = new ne(o, t, r), i(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const i = this._listeners.indexOf(e);
    i !== -1 && this._listeners.splice(i, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), i = (n) => {
      e.abort(n);
    };
    return this.subscribe(i), e.signal.unsubscribe = () => this.unsubscribe(i), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Aa(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function Sn(a) {
  return function(i) {
    return a.apply(null, i);
  };
}
function On(a) {
  return c.isObject(a) && a.isAxiosError === !0;
}
const qe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(qe).forEach(([a, e]) => {
  qe[e] = a;
});
function Ta(a) {
  const e = new H(a), i = ra(H.prototype.request, e);
  return c.extend(i, H.prototype, e, { allOwnKeys: !0 }), c.extend(i, e, null, { allOwnKeys: !0 }), i.create = function(s) {
    return Ta($(a, s));
  }, i;
}
const E = Ta(ie);
E.Axios = H;
E.CanceledError = ne;
E.CancelToken = Rn;
E.isCancel = ja;
E.VERSION = Ne;
E.toFormData = ve;
E.AxiosError = v;
E.Cancel = E.CanceledError;
E.all = function(e) {
  return Promise.all(e);
};
E.spread = Sn;
E.isAxiosError = On;
E.mergeConfig = $;
E.AxiosHeaders = A;
E.formToJSON = (a) => ya(c.isHTMLForm(a) ? new FormData(a) : a);
E.getAdapter = Oa.getAdapter;
E.HttpStatusCode = qe;
E.default = E;
const {
  Axios: Wn,
  AxiosError: Kn,
  CanceledError: Xn,
  isCancel: Gn,
  CancelToken: Yn,
  VERSION: Qn,
  all: Zn,
  Cancel: es,
  isAxiosError: An,
  spread: as,
  toFormData: is,
  AxiosHeaders: ns,
  HttpStatusCode: ss,
  formToJSON: os,
  getAdapter: ts,
  mergeConfig: cs,
  create: rs
} = E, Tn = "1.0.0", _n = {
  version: Tn
};
class sa extends Error {
  constructor(e, i, n) {
    super(e), this.name = "SMTP2GOError", this.status = i, this.response = n;
  }
}
class zn {
  constructor(e) {
    this.apiUrl = "https://api.smtp2go.com/v3/", this.headers = {}, this.apiKey = e;
  }
  setApiKey(e) {
    this.apiKey = e;
  }
  setHeaders(e) {
    this.headers = e;
  }
  getHeaders() {
    const e = {
      "Content-Type": "application/json",
      "X-Smtp2go-Api": "smtp2go-nodejs",
      "X-Smtp2go-Api-Version": _n?.version
    };
    return { ...this.headers, ...e };
  }
  async consume(e) {
    const i = await e.buildRequestBody();
    i.api_key = this.apiKey;
    try {
      const { data: n } = await E({
        method: e.getMethod(),
        url: this.apiUrl + e.getEndpoint(),
        headers: this.getHeaders(),
        data: i
      });
      return n;
    } catch (n) {
      throw An(n) ? new sa(
        n.message,
        n.response?.status,
        n.response?.data
      ) : new sa(n instanceof Error ? n.message : "An unknown error occurred");
    }
  }
}
class _a {
  constructor(e, i, n) {
    this.endpoint = e, this.requestBody = i || /* @__PURE__ */ new Map(), this.method = n || "POST";
  }
  getMethod() {
    return this.method;
  }
  setMethod(e) {
    this.method = e;
  }
  getEndpoint() {
    return this.endpoint;
  }
  async buildRequestBody() {
    return await Promise.resolve(Object.fromEntries(this.requestBody ?? /* @__PURE__ */ new Map()));
  }
}
var Re = {};
const qn = {
  "application/1d-interleaved-parityfec": { source: "iana" },
  "application/3gpdash-qoe-report+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/3gpp-ims+xml": { source: "iana", compressible: !0 },
  "application/3gpphal+json": { source: "iana", compressible: !0 },
  "application/3gpphalforms+json": { source: "iana", compressible: !0 },
  "application/a2l": { source: "iana" },
  "application/ace+cbor": { source: "iana" },
  "application/ace+json": { source: "iana", compressible: !0 },
  "application/ace-groupcomm+cbor": { source: "iana" },
  "application/ace-trl+cbor": { source: "iana" },
  "application/activemessage": { source: "iana" },
  "application/activity+json": { source: "iana", compressible: !0 },
  "application/aif+cbor": { source: "iana" },
  "application/aif+json": { source: "iana", compressible: !0 },
  "application/alto-cdni+json": { source: "iana", compressible: !0 },
  "application/alto-cdnifilter+json": { source: "iana", compressible: !0 },
  "application/alto-costmap+json": { source: "iana", compressible: !0 },
  "application/alto-costmapfilter+json": { source: "iana", compressible: !0 },
  "application/alto-directory+json": { source: "iana", compressible: !0 },
  "application/alto-endpointcost+json": { source: "iana", compressible: !0 },
  "application/alto-endpointcostparams+json": { source: "iana", compressible: !0 },
  "application/alto-endpointprop+json": { source: "iana", compressible: !0 },
  "application/alto-endpointpropparams+json": { source: "iana", compressible: !0 },
  "application/alto-error+json": { source: "iana", compressible: !0 },
  "application/alto-networkmap+json": { source: "iana", compressible: !0 },
  "application/alto-networkmapfilter+json": { source: "iana", compressible: !0 },
  "application/alto-propmap+json": { source: "iana", compressible: !0 },
  "application/alto-propmapparams+json": { source: "iana", compressible: !0 },
  "application/alto-tips+json": { source: "iana", compressible: !0 },
  "application/alto-tipsparams+json": { source: "iana", compressible: !0 },
  "application/alto-updatestreamcontrol+json": { source: "iana", compressible: !0 },
  "application/alto-updatestreamparams+json": { source: "iana", compressible: !0 },
  "application/aml": { source: "iana" },
  "application/andrew-inset": { source: "iana", extensions: ["ez"] },
  "application/appinstaller": { compressible: !1, extensions: ["appinstaller"] },
  "application/applefile": { source: "iana" },
  "application/applixware": { source: "apache", extensions: ["aw"] },
  "application/appx": { compressible: !1, extensions: ["appx"] },
  "application/appxbundle": { compressible: !1, extensions: ["appxbundle"] },
  "application/at+jwt": { source: "iana" },
  "application/atf": { source: "iana" },
  "application/atfx": { source: "iana" },
  "application/atom+xml": { source: "iana", compressible: !0, extensions: ["atom"] },
  "application/atomcat+xml": { source: "iana", compressible: !0, extensions: ["atomcat"] },
  "application/atomdeleted+xml": { source: "iana", compressible: !0, extensions: ["atomdeleted"] },
  "application/atomicmail": { source: "iana" },
  "application/atomsvc+xml": { source: "iana", compressible: !0, extensions: ["atomsvc"] },
  "application/atsc-dwd+xml": { source: "iana", compressible: !0, extensions: ["dwd"] },
  "application/atsc-dynamic-event-message": { source: "iana" },
  "application/atsc-held+xml": { source: "iana", compressible: !0, extensions: ["held"] },
  "application/atsc-rdt+json": { source: "iana", compressible: !0 },
  "application/atsc-rsat+xml": { source: "iana", compressible: !0, extensions: ["rsat"] },
  "application/atxml": { source: "iana" },
  "application/auth-policy+xml": { source: "iana", compressible: !0 },
  "application/automationml-aml+xml": { source: "iana", compressible: !0, extensions: ["aml"] },
  "application/automationml-amlx+zip": { source: "iana", compressible: !1, extensions: ["amlx"] },
  "application/bacnet-xdd+zip": { source: "iana", compressible: !1 },
  "application/batch-smtp": { source: "iana" },
  "application/bdoc": { compressible: !1, extensions: ["bdoc"] },
  "application/beep+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/bufr": { source: "iana" },
  "application/c2pa": { source: "iana" },
  "application/calendar+json": { source: "iana", compressible: !0 },
  "application/calendar+xml": { source: "iana", compressible: !0, extensions: ["xcs"] },
  "application/call-completion": { source: "iana" },
  "application/cals-1840": { source: "iana" },
  "application/captive+json": { source: "iana", compressible: !0 },
  "application/cbor": { source: "iana" },
  "application/cbor-seq": { source: "iana" },
  "application/cccex": { source: "iana" },
  "application/ccmp+xml": { source: "iana", compressible: !0 },
  "application/ccxml+xml": { source: "iana", compressible: !0, extensions: ["ccxml"] },
  "application/cda+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/cdfx+xml": { source: "iana", compressible: !0, extensions: ["cdfx"] },
  "application/cdmi-capability": { source: "iana", extensions: ["cdmia"] },
  "application/cdmi-container": { source: "iana", extensions: ["cdmic"] },
  "application/cdmi-domain": { source: "iana", extensions: ["cdmid"] },
  "application/cdmi-object": { source: "iana", extensions: ["cdmio"] },
  "application/cdmi-queue": { source: "iana", extensions: ["cdmiq"] },
  "application/cdni": { source: "iana" },
  "application/ce+cbor": { source: "iana" },
  "application/cea": { source: "iana" },
  "application/cea-2018+xml": { source: "iana", compressible: !0 },
  "application/cellml+xml": { source: "iana", compressible: !0 },
  "application/cfw": { source: "iana" },
  "application/cid-edhoc+cbor-seq": { source: "iana" },
  "application/city+json": { source: "iana", compressible: !0 },
  "application/city+json-seq": { source: "iana" },
  "application/clr": { source: "iana" },
  "application/clue+xml": { source: "iana", compressible: !0 },
  "application/clue_info+xml": { source: "iana", compressible: !0 },
  "application/cms": { source: "iana" },
  "application/cnrp+xml": { source: "iana", compressible: !0 },
  "application/coap-eap": { source: "iana" },
  "application/coap-group+json": { source: "iana", compressible: !0 },
  "application/coap-payload": { source: "iana" },
  "application/commonground": { source: "iana" },
  "application/concise-problem-details+cbor": { source: "iana" },
  "application/conference-info+xml": { source: "iana", compressible: !0 },
  "application/cose": { source: "iana" },
  "application/cose-key": { source: "iana" },
  "application/cose-key-set": { source: "iana" },
  "application/cose-x509": { source: "iana" },
  "application/cpl+xml": { source: "iana", compressible: !0, extensions: ["cpl"] },
  "application/csrattrs": { source: "iana" },
  "application/csta+xml": { source: "iana", compressible: !0 },
  "application/cstadata+xml": { source: "iana", compressible: !0 },
  "application/csvm+json": { source: "iana", compressible: !0 },
  "application/cu-seeme": { source: "apache", extensions: ["cu"] },
  "application/cwl": { source: "iana", extensions: ["cwl"] },
  "application/cwl+json": { source: "iana", compressible: !0 },
  "application/cwl+yaml": { source: "iana" },
  "application/cwt": { source: "iana" },
  "application/cybercash": { source: "iana" },
  "application/dart": { compressible: !0 },
  "application/dash+xml": { source: "iana", compressible: !0, extensions: ["mpd"] },
  "application/dash-patch+xml": { source: "iana", compressible: !0, extensions: ["mpp"] },
  "application/dashdelta": { source: "iana" },
  "application/davmount+xml": { source: "iana", compressible: !0, extensions: ["davmount"] },
  "application/dca-rft": { source: "iana" },
  "application/dcd": { source: "iana" },
  "application/dec-dx": { source: "iana" },
  "application/dialog-info+xml": { source: "iana", compressible: !0 },
  "application/dicom": { source: "iana", extensions: ["dcm"] },
  "application/dicom+json": { source: "iana", compressible: !0 },
  "application/dicom+xml": { source: "iana", compressible: !0 },
  "application/dii": { source: "iana" },
  "application/dit": { source: "iana" },
  "application/dns": { source: "iana" },
  "application/dns+json": { source: "iana", compressible: !0 },
  "application/dns-message": { source: "iana" },
  "application/docbook+xml": { source: "apache", compressible: !0, extensions: ["dbk"] },
  "application/dots+cbor": { source: "iana" },
  "application/dpop+jwt": { source: "iana" },
  "application/dskpp+xml": { source: "iana", compressible: !0 },
  "application/dssc+der": { source: "iana", extensions: ["dssc"] },
  "application/dssc+xml": { source: "iana", compressible: !0, extensions: ["xdssc"] },
  "application/dvcs": { source: "iana" },
  "application/eat+cwt": { source: "iana" },
  "application/eat+jwt": { source: "iana" },
  "application/eat-bun+cbor": { source: "iana" },
  "application/eat-bun+json": { source: "iana", compressible: !0 },
  "application/eat-ucs+cbor": { source: "iana" },
  "application/eat-ucs+json": { source: "iana", compressible: !0 },
  "application/ecmascript": { source: "apache", compressible: !0, extensions: ["ecma"] },
  "application/edhoc+cbor-seq": { source: "iana" },
  "application/edi-consent": { source: "iana" },
  "application/edi-x12": { source: "iana", compressible: !1 },
  "application/edifact": { source: "iana", compressible: !1 },
  "application/efi": { source: "iana" },
  "application/elm+json": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/elm+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.cap+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/emergencycalldata.comment+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.control+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.deviceinfo+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.ecall.msd": { source: "iana" },
  "application/emergencycalldata.legacyesn+json": { source: "iana", compressible: !0 },
  "application/emergencycalldata.providerinfo+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.serviceinfo+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.subscriberinfo+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.veds+xml": { source: "iana", compressible: !0 },
  "application/emma+xml": { source: "iana", compressible: !0, extensions: ["emma"] },
  "application/emotionml+xml": { source: "iana", compressible: !0, extensions: ["emotionml"] },
  "application/encaprtp": { source: "iana" },
  "application/entity-statement+jwt": { source: "iana" },
  "application/epp+xml": { source: "iana", compressible: !0 },
  "application/epub+zip": { source: "iana", compressible: !1, extensions: ["epub"] },
  "application/eshop": { source: "iana" },
  "application/exi": { source: "iana", extensions: ["exi"] },
  "application/expect-ct-report+json": { source: "iana", compressible: !0 },
  "application/express": { source: "iana", extensions: ["exp"] },
  "application/fastinfoset": { source: "iana" },
  "application/fastsoap": { source: "iana" },
  "application/fdf": { source: "iana", extensions: ["fdf"] },
  "application/fdt+xml": { source: "iana", compressible: !0, extensions: ["fdt"] },
  "application/fhir+json": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/fhir+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/fido.trusted-apps+json": { compressible: !0 },
  "application/fits": { source: "iana" },
  "application/flexfec": { source: "iana" },
  "application/font-sfnt": { source: "iana" },
  "application/font-tdpfr": { source: "iana", extensions: ["pfr"] },
  "application/font-woff": { source: "iana", compressible: !1 },
  "application/framework-attributes+xml": { source: "iana", compressible: !0 },
  "application/geo+json": { source: "iana", compressible: !0, extensions: ["geojson"] },
  "application/geo+json-seq": { source: "iana" },
  "application/geopackage+sqlite3": { source: "iana" },
  "application/geopose+json": { source: "iana", compressible: !0 },
  "application/geoxacml+json": { source: "iana", compressible: !0 },
  "application/geoxacml+xml": { source: "iana", compressible: !0 },
  "application/gltf-buffer": { source: "iana" },
  "application/gml+xml": { source: "iana", compressible: !0, extensions: ["gml"] },
  "application/gnap-binding-jws": { source: "iana" },
  "application/gnap-binding-jwsd": { source: "iana" },
  "application/gnap-binding-rotation-jws": { source: "iana" },
  "application/gnap-binding-rotation-jwsd": { source: "iana" },
  "application/gpx+xml": { source: "apache", compressible: !0, extensions: ["gpx"] },
  "application/grib": { source: "iana" },
  "application/gxf": { source: "apache", extensions: ["gxf"] },
  "application/gzip": { source: "iana", compressible: !1, extensions: ["gz"] },
  "application/h224": { source: "iana" },
  "application/held+xml": { source: "iana", compressible: !0 },
  "application/hjson": { extensions: ["hjson"] },
  "application/hl7v2+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/http": { source: "iana" },
  "application/hyperstudio": { source: "iana", extensions: ["stk"] },
  "application/ibe-key-request+xml": { source: "iana", compressible: !0 },
  "application/ibe-pkg-reply+xml": { source: "iana", compressible: !0 },
  "application/ibe-pp-data": { source: "iana" },
  "application/iges": { source: "iana" },
  "application/im-iscomposing+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/index": { source: "iana" },
  "application/index.cmd": { source: "iana" },
  "application/index.obj": { source: "iana" },
  "application/index.response": { source: "iana" },
  "application/index.vnd": { source: "iana" },
  "application/inkml+xml": { source: "iana", compressible: !0, extensions: ["ink", "inkml"] },
  "application/iotp": { source: "iana" },
  "application/ipfix": { source: "iana", extensions: ["ipfix"] },
  "application/ipp": { source: "iana" },
  "application/isup": { source: "iana" },
  "application/its+xml": { source: "iana", compressible: !0, extensions: ["its"] },
  "application/java-archive": { source: "iana", compressible: !1, extensions: ["jar", "war", "ear"] },
  "application/java-serialized-object": { source: "apache", compressible: !1, extensions: ["ser"] },
  "application/java-vm": { source: "apache", compressible: !1, extensions: ["class"] },
  "application/javascript": { source: "apache", charset: "UTF-8", compressible: !0, extensions: ["js"] },
  "application/jf2feed+json": { source: "iana", compressible: !0 },
  "application/jose": { source: "iana" },
  "application/jose+json": { source: "iana", compressible: !0 },
  "application/jrd+json": { source: "iana", compressible: !0 },
  "application/jscalendar+json": { source: "iana", compressible: !0 },
  "application/jscontact+json": { source: "iana", compressible: !0 },
  "application/json": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["json", "map"] },
  "application/json-patch+json": { source: "iana", compressible: !0 },
  "application/json-seq": { source: "iana" },
  "application/json5": { extensions: ["json5"] },
  "application/jsonml+json": { source: "apache", compressible: !0, extensions: ["jsonml"] },
  "application/jsonpath": { source: "iana" },
  "application/jwk+json": { source: "iana", compressible: !0 },
  "application/jwk-set+json": { source: "iana", compressible: !0 },
  "application/jwk-set+jwt": { source: "iana" },
  "application/jwt": { source: "iana" },
  "application/kpml-request+xml": { source: "iana", compressible: !0 },
  "application/kpml-response+xml": { source: "iana", compressible: !0 },
  "application/ld+json": { source: "iana", compressible: !0, extensions: ["jsonld"] },
  "application/lgr+xml": { source: "iana", compressible: !0, extensions: ["lgr"] },
  "application/link-format": { source: "iana" },
  "application/linkset": { source: "iana" },
  "application/linkset+json": { source: "iana", compressible: !0 },
  "application/load-control+xml": { source: "iana", compressible: !0 },
  "application/logout+jwt": { source: "iana" },
  "application/lost+xml": { source: "iana", compressible: !0, extensions: ["lostxml"] },
  "application/lostsync+xml": { source: "iana", compressible: !0 },
  "application/lpf+zip": { source: "iana", compressible: !1 },
  "application/lxf": { source: "iana" },
  "application/mac-binhex40": { source: "iana", extensions: ["hqx"] },
  "application/mac-compactpro": { source: "apache", extensions: ["cpt"] },
  "application/macwriteii": { source: "iana" },
  "application/mads+xml": { source: "iana", compressible: !0, extensions: ["mads"] },
  "application/manifest+json": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["webmanifest"] },
  "application/marc": { source: "iana", extensions: ["mrc"] },
  "application/marcxml+xml": { source: "iana", compressible: !0, extensions: ["mrcx"] },
  "application/mathematica": { source: "iana", extensions: ["ma", "nb", "mb"] },
  "application/mathml+xml": { source: "iana", compressible: !0, extensions: ["mathml"] },
  "application/mathml-content+xml": { source: "iana", compressible: !0 },
  "application/mathml-presentation+xml": { source: "iana", compressible: !0 },
  "application/mbms-associated-procedure-description+xml": { source: "iana", compressible: !0 },
  "application/mbms-deregister+xml": { source: "iana", compressible: !0 },
  "application/mbms-envelope+xml": { source: "iana", compressible: !0 },
  "application/mbms-msk+xml": { source: "iana", compressible: !0 },
  "application/mbms-msk-response+xml": { source: "iana", compressible: !0 },
  "application/mbms-protection-description+xml": { source: "iana", compressible: !0 },
  "application/mbms-reception-report+xml": { source: "iana", compressible: !0 },
  "application/mbms-register+xml": { source: "iana", compressible: !0 },
  "application/mbms-register-response+xml": { source: "iana", compressible: !0 },
  "application/mbms-schedule+xml": { source: "iana", compressible: !0 },
  "application/mbms-user-service-description+xml": { source: "iana", compressible: !0 },
  "application/mbox": { source: "iana", extensions: ["mbox"] },
  "application/media-policy-dataset+xml": { source: "iana", compressible: !0, extensions: ["mpf"] },
  "application/media_control+xml": { source: "iana", compressible: !0 },
  "application/mediaservercontrol+xml": { source: "iana", compressible: !0, extensions: ["mscml"] },
  "application/merge-patch+json": { source: "iana", compressible: !0 },
  "application/metalink+xml": { source: "apache", compressible: !0, extensions: ["metalink"] },
  "application/metalink4+xml": { source: "iana", compressible: !0, extensions: ["meta4"] },
  "application/mets+xml": { source: "iana", compressible: !0, extensions: ["mets"] },
  "application/mf4": { source: "iana" },
  "application/mikey": { source: "iana" },
  "application/mipc": { source: "iana" },
  "application/missing-blocks+cbor-seq": { source: "iana" },
  "application/mmt-aei+xml": { source: "iana", compressible: !0, extensions: ["maei"] },
  "application/mmt-usd+xml": { source: "iana", compressible: !0, extensions: ["musd"] },
  "application/mods+xml": { source: "iana", compressible: !0, extensions: ["mods"] },
  "application/moss-keys": { source: "iana" },
  "application/moss-signature": { source: "iana" },
  "application/mosskey-data": { source: "iana" },
  "application/mosskey-request": { source: "iana" },
  "application/mp21": { source: "iana", extensions: ["m21", "mp21"] },
  "application/mp4": { source: "iana", extensions: ["mp4", "mpg4", "mp4s", "m4p"] },
  "application/mpeg4-generic": { source: "iana" },
  "application/mpeg4-iod": { source: "iana" },
  "application/mpeg4-iod-xmt": { source: "iana" },
  "application/mrb-consumer+xml": { source: "iana", compressible: !0 },
  "application/mrb-publish+xml": { source: "iana", compressible: !0 },
  "application/msc-ivr+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/msc-mixer+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/msix": { compressible: !1, extensions: ["msix"] },
  "application/msixbundle": { compressible: !1, extensions: ["msixbundle"] },
  "application/msword": { source: "iana", compressible: !1, extensions: ["doc", "dot"] },
  "application/mud+json": { source: "iana", compressible: !0 },
  "application/multipart-core": { source: "iana" },
  "application/mxf": { source: "iana", extensions: ["mxf"] },
  "application/n-quads": { source: "iana", extensions: ["nq"] },
  "application/n-triples": { source: "iana", extensions: ["nt"] },
  "application/nasdata": { source: "iana" },
  "application/news-checkgroups": { source: "iana", charset: "US-ASCII" },
  "application/news-groupinfo": { source: "iana", charset: "US-ASCII" },
  "application/news-transmission": { source: "iana" },
  "application/nlsml+xml": { source: "iana", compressible: !0 },
  "application/node": { source: "iana", extensions: ["cjs"] },
  "application/nss": { source: "iana" },
  "application/oauth-authz-req+jwt": { source: "iana" },
  "application/oblivious-dns-message": { source: "iana" },
  "application/ocsp-request": { source: "iana" },
  "application/ocsp-response": { source: "iana" },
  "application/octet-stream": { source: "iana", compressible: !0, extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"] },
  "application/oda": { source: "iana", extensions: ["oda"] },
  "application/odm+xml": { source: "iana", compressible: !0 },
  "application/odx": { source: "iana" },
  "application/oebps-package+xml": { source: "iana", compressible: !0, extensions: ["opf"] },
  "application/ogg": { source: "iana", compressible: !1, extensions: ["ogx"] },
  "application/ohttp-keys": { source: "iana" },
  "application/omdoc+xml": { source: "apache", compressible: !0, extensions: ["omdoc"] },
  "application/onenote": { source: "apache", extensions: ["onetoc", "onetoc2", "onetmp", "onepkg", "one", "onea"] },
  "application/opc-nodeset+xml": { source: "iana", compressible: !0 },
  "application/oscore": { source: "iana" },
  "application/oxps": { source: "iana", extensions: ["oxps"] },
  "application/p21": { source: "iana" },
  "application/p21+zip": { source: "iana", compressible: !1 },
  "application/p2p-overlay+xml": { source: "iana", compressible: !0, extensions: ["relo"] },
  "application/parityfec": { source: "iana" },
  "application/passport": { source: "iana" },
  "application/patch-ops-error+xml": { source: "iana", compressible: !0, extensions: ["xer"] },
  "application/pdf": { source: "iana", compressible: !1, extensions: ["pdf"] },
  "application/pdx": { source: "iana" },
  "application/pem-certificate-chain": { source: "iana" },
  "application/pgp-encrypted": { source: "iana", compressible: !1, extensions: ["pgp"] },
  "application/pgp-keys": { source: "iana", extensions: ["asc"] },
  "application/pgp-signature": { source: "iana", extensions: ["sig", "asc"] },
  "application/pics-rules": { source: "apache", extensions: ["prf"] },
  "application/pidf+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/pidf-diff+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/pkcs10": { source: "iana", extensions: ["p10"] },
  "application/pkcs12": { source: "iana" },
  "application/pkcs7-mime": { source: "iana", extensions: ["p7m", "p7c"] },
  "application/pkcs7-signature": { source: "iana", extensions: ["p7s"] },
  "application/pkcs8": { source: "iana", extensions: ["p8"] },
  "application/pkcs8-encrypted": { source: "iana" },
  "application/pkix-attr-cert": { source: "iana", extensions: ["ac"] },
  "application/pkix-cert": { source: "iana", extensions: ["cer"] },
  "application/pkix-crl": { source: "iana", extensions: ["crl"] },
  "application/pkix-pkipath": { source: "iana", extensions: ["pkipath"] },
  "application/pkixcmp": { source: "iana", extensions: ["pki"] },
  "application/pls+xml": { source: "iana", compressible: !0, extensions: ["pls"] },
  "application/poc-settings+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/postscript": { source: "iana", compressible: !0, extensions: ["ai", "eps", "ps"] },
  "application/ppsp-tracker+json": { source: "iana", compressible: !0 },
  "application/private-token-issuer-directory": { source: "iana" },
  "application/private-token-request": { source: "iana" },
  "application/private-token-response": { source: "iana" },
  "application/problem+json": { source: "iana", compressible: !0 },
  "application/problem+xml": { source: "iana", compressible: !0 },
  "application/provenance+xml": { source: "iana", compressible: !0, extensions: ["provx"] },
  "application/provided-claims+jwt": { source: "iana" },
  "application/prs.alvestrand.titrax-sheet": { source: "iana" },
  "application/prs.cww": { source: "iana", extensions: ["cww"] },
  "application/prs.cyn": { source: "iana", charset: "7-BIT" },
  "application/prs.hpub+zip": { source: "iana", compressible: !1 },
  "application/prs.implied-document+xml": { source: "iana", compressible: !0 },
  "application/prs.implied-executable": { source: "iana" },
  "application/prs.implied-object+json": { source: "iana", compressible: !0 },
  "application/prs.implied-object+json-seq": { source: "iana" },
  "application/prs.implied-object+yaml": { source: "iana" },
  "application/prs.implied-structure": { source: "iana" },
  "application/prs.mayfile": { source: "iana" },
  "application/prs.nprend": { source: "iana" },
  "application/prs.plucker": { source: "iana" },
  "application/prs.rdf-xml-crypt": { source: "iana" },
  "application/prs.vcfbzip2": { source: "iana" },
  "application/prs.xsf+xml": { source: "iana", compressible: !0, extensions: ["xsf"] },
  "application/pskc+xml": { source: "iana", compressible: !0, extensions: ["pskcxml"] },
  "application/pvd+json": { source: "iana", compressible: !0 },
  "application/qsig": { source: "iana" },
  "application/raml+yaml": { compressible: !0, extensions: ["raml"] },
  "application/raptorfec": { source: "iana" },
  "application/rdap+json": { source: "iana", compressible: !0 },
  "application/rdf+xml": { source: "iana", compressible: !0, extensions: ["rdf", "owl"] },
  "application/reginfo+xml": { source: "iana", compressible: !0, extensions: ["rif"] },
  "application/relax-ng-compact-syntax": { source: "iana", extensions: ["rnc"] },
  "application/remote-printing": { source: "apache" },
  "application/reputon+json": { source: "iana", compressible: !0 },
  "application/resolve-response+jwt": { source: "iana" },
  "application/resource-lists+xml": { source: "iana", compressible: !0, extensions: ["rl"] },
  "application/resource-lists-diff+xml": { source: "iana", compressible: !0, extensions: ["rld"] },
  "application/rfc+xml": { source: "iana", compressible: !0 },
  "application/riscos": { source: "iana" },
  "application/rlmi+xml": { source: "iana", compressible: !0 },
  "application/rls-services+xml": { source: "iana", compressible: !0, extensions: ["rs"] },
  "application/route-apd+xml": { source: "iana", compressible: !0, extensions: ["rapd"] },
  "application/route-s-tsid+xml": { source: "iana", compressible: !0, extensions: ["sls"] },
  "application/route-usd+xml": { source: "iana", compressible: !0, extensions: ["rusd"] },
  "application/rpki-checklist": { source: "iana" },
  "application/rpki-ghostbusters": { source: "iana", extensions: ["gbr"] },
  "application/rpki-manifest": { source: "iana", extensions: ["mft"] },
  "application/rpki-publication": { source: "iana" },
  "application/rpki-roa": { source: "iana", extensions: ["roa"] },
  "application/rpki-signed-tal": { source: "iana" },
  "application/rpki-updown": { source: "iana" },
  "application/rsd+xml": { source: "apache", compressible: !0, extensions: ["rsd"] },
  "application/rss+xml": { source: "apache", compressible: !0, extensions: ["rss"] },
  "application/rtf": { source: "iana", compressible: !0, extensions: ["rtf"] },
  "application/rtploopback": { source: "iana" },
  "application/rtx": { source: "iana" },
  "application/samlassertion+xml": { source: "iana", compressible: !0 },
  "application/samlmetadata+xml": { source: "iana", compressible: !0 },
  "application/sarif+json": { source: "iana", compressible: !0 },
  "application/sarif-external-properties+json": { source: "iana", compressible: !0 },
  "application/sbe": { source: "iana" },
  "application/sbml+xml": { source: "iana", compressible: !0, extensions: ["sbml"] },
  "application/scaip+xml": { source: "iana", compressible: !0 },
  "application/scim+json": { source: "iana", compressible: !0 },
  "application/scvp-cv-request": { source: "iana", extensions: ["scq"] },
  "application/scvp-cv-response": { source: "iana", extensions: ["scs"] },
  "application/scvp-vp-request": { source: "iana", extensions: ["spq"] },
  "application/scvp-vp-response": { source: "iana", extensions: ["spp"] },
  "application/sdp": { source: "iana", extensions: ["sdp"] },
  "application/secevent+jwt": { source: "iana" },
  "application/senml+cbor": { source: "iana" },
  "application/senml+json": { source: "iana", compressible: !0 },
  "application/senml+xml": { source: "iana", compressible: !0, extensions: ["senmlx"] },
  "application/senml-etch+cbor": { source: "iana" },
  "application/senml-etch+json": { source: "iana", compressible: !0 },
  "application/senml-exi": { source: "iana" },
  "application/sensml+cbor": { source: "iana" },
  "application/sensml+json": { source: "iana", compressible: !0 },
  "application/sensml+xml": { source: "iana", compressible: !0, extensions: ["sensmlx"] },
  "application/sensml-exi": { source: "iana" },
  "application/sep+xml": { source: "iana", compressible: !0 },
  "application/sep-exi": { source: "iana" },
  "application/session-info": { source: "iana" },
  "application/set-payment": { source: "iana" },
  "application/set-payment-initiation": { source: "iana", extensions: ["setpay"] },
  "application/set-registration": { source: "iana" },
  "application/set-registration-initiation": { source: "iana", extensions: ["setreg"] },
  "application/sgml": { source: "iana" },
  "application/sgml-open-catalog": { source: "iana" },
  "application/shf+xml": { source: "iana", compressible: !0, extensions: ["shf"] },
  "application/sieve": { source: "iana", extensions: ["siv", "sieve"] },
  "application/simple-filter+xml": { source: "iana", compressible: !0 },
  "application/simple-message-summary": { source: "iana" },
  "application/simplesymbolcontainer": { source: "iana" },
  "application/sipc": { source: "iana" },
  "application/slate": { source: "iana" },
  "application/smil": { source: "apache" },
  "application/smil+xml": { source: "iana", compressible: !0, extensions: ["smi", "smil"] },
  "application/smpte336m": { source: "iana" },
  "application/soap+fastinfoset": { source: "iana" },
  "application/soap+xml": { source: "iana", compressible: !0 },
  "application/sparql-query": { source: "iana", extensions: ["rq"] },
  "application/sparql-results+xml": { source: "iana", compressible: !0, extensions: ["srx"] },
  "application/spdx+json": { source: "iana", compressible: !0 },
  "application/spirits-event+xml": { source: "iana", compressible: !0 },
  "application/sql": { source: "iana", extensions: ["sql"] },
  "application/srgs": { source: "iana", extensions: ["gram"] },
  "application/srgs+xml": { source: "iana", compressible: !0, extensions: ["grxml"] },
  "application/sru+xml": { source: "iana", compressible: !0, extensions: ["sru"] },
  "application/ssdl+xml": { source: "apache", compressible: !0, extensions: ["ssdl"] },
  "application/sslkeylogfile": { source: "iana" },
  "application/ssml+xml": { source: "iana", compressible: !0, extensions: ["ssml"] },
  "application/st2110-41": { source: "iana" },
  "application/stix+json": { source: "iana", compressible: !0 },
  "application/stratum": { source: "iana" },
  "application/swid+cbor": { source: "iana" },
  "application/swid+xml": { source: "iana", compressible: !0, extensions: ["swidtag"] },
  "application/tamp-apex-update": { source: "iana" },
  "application/tamp-apex-update-confirm": { source: "iana" },
  "application/tamp-community-update": { source: "iana" },
  "application/tamp-community-update-confirm": { source: "iana" },
  "application/tamp-error": { source: "iana" },
  "application/tamp-sequence-adjust": { source: "iana" },
  "application/tamp-sequence-adjust-confirm": { source: "iana" },
  "application/tamp-status-query": { source: "iana" },
  "application/tamp-status-response": { source: "iana" },
  "application/tamp-update": { source: "iana" },
  "application/tamp-update-confirm": { source: "iana" },
  "application/tar": { compressible: !0 },
  "application/taxii+json": { source: "iana", compressible: !0 },
  "application/td+json": { source: "iana", compressible: !0 },
  "application/tei+xml": { source: "iana", compressible: !0, extensions: ["tei", "teicorpus"] },
  "application/tetra_isi": { source: "iana" },
  "application/thraud+xml": { source: "iana", compressible: !0, extensions: ["tfi"] },
  "application/timestamp-query": { source: "iana" },
  "application/timestamp-reply": { source: "iana" },
  "application/timestamped-data": { source: "iana", extensions: ["tsd"] },
  "application/tlsrpt+gzip": { source: "iana" },
  "application/tlsrpt+json": { source: "iana", compressible: !0 },
  "application/tm+json": { source: "iana", compressible: !0 },
  "application/tnauthlist": { source: "iana" },
  "application/toc+cbor": { source: "iana" },
  "application/token-introspection+jwt": { source: "iana" },
  "application/toml": { source: "iana", compressible: !0, extensions: ["toml"] },
  "application/trickle-ice-sdpfrag": { source: "iana" },
  "application/trig": { source: "iana", extensions: ["trig"] },
  "application/trust-chain+json": { source: "iana", compressible: !0 },
  "application/trust-mark+jwt": { source: "iana" },
  "application/trust-mark-delegation+jwt": { source: "iana" },
  "application/ttml+xml": { source: "iana", compressible: !0, extensions: ["ttml"] },
  "application/tve-trigger": { source: "iana" },
  "application/tzif": { source: "iana" },
  "application/tzif-leap": { source: "iana" },
  "application/ubjson": { compressible: !1, extensions: ["ubj"] },
  "application/uccs+cbor": { source: "iana" },
  "application/ujcs+json": { source: "iana", compressible: !0 },
  "application/ulpfec": { source: "iana" },
  "application/urc-grpsheet+xml": { source: "iana", compressible: !0 },
  "application/urc-ressheet+xml": { source: "iana", compressible: !0, extensions: ["rsheet"] },
  "application/urc-targetdesc+xml": { source: "iana", compressible: !0, extensions: ["td"] },
  "application/urc-uisocketdesc+xml": { source: "iana", compressible: !0 },
  "application/vc": { source: "iana" },
  "application/vc+cose": { source: "iana" },
  "application/vc+jwt": { source: "iana" },
  "application/vcard+json": { source: "iana", compressible: !0 },
  "application/vcard+xml": { source: "iana", compressible: !0 },
  "application/vemmi": { source: "iana" },
  "application/vividence.scriptfile": { source: "apache" },
  "application/vnd.1000minds.decision-model+xml": { source: "iana", compressible: !0, extensions: ["1km"] },
  "application/vnd.1ob": { source: "iana" },
  "application/vnd.3gpp-prose+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp-prose-pc3a+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp-prose-pc3ach+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp-prose-pc3ch+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp-prose-pc8+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp-v2x-local-service-information": { source: "iana" },
  "application/vnd.3gpp.5gnas": { source: "iana" },
  "application/vnd.3gpp.5gsa2x": { source: "iana" },
  "application/vnd.3gpp.5gsa2x-local-service-information": { source: "iana" },
  "application/vnd.3gpp.5gsv2x": { source: "iana" },
  "application/vnd.3gpp.5gsv2x-local-service-information": { source: "iana" },
  "application/vnd.3gpp.access-transfer-events+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.bsf+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.crs+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.current-location-discovery+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.gmop+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.gtpc": { source: "iana" },
  "application/vnd.3gpp.interworking-data": { source: "iana" },
  "application/vnd.3gpp.lpp": { source: "iana" },
  "application/vnd.3gpp.mc-signalling-ear": { source: "iana" },
  "application/vnd.3gpp.mcdata-affiliation-command+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcdata-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcdata-msgstore-ctrl-request+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcdata-payload": { source: "iana" },
  "application/vnd.3gpp.mcdata-regroup+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcdata-service-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcdata-signalling": { source: "iana" },
  "application/vnd.3gpp.mcdata-ue-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcdata-user-profile+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-affiliation-command+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-floor-request+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-location-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-mbms-usage-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-regroup+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-service-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-signed+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-ue-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-ue-init-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-user-profile+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-affiliation-command+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-location-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-regroup+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-service-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-transmission-request+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-ue-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-user-profile+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mid-call+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.ngap": { source: "iana" },
  "application/vnd.3gpp.pfcp": { source: "iana" },
  "application/vnd.3gpp.pic-bw-large": { source: "iana", extensions: ["plb"] },
  "application/vnd.3gpp.pic-bw-small": { source: "iana", extensions: ["psb"] },
  "application/vnd.3gpp.pic-bw-var": { source: "iana", extensions: ["pvb"] },
  "application/vnd.3gpp.pinapp-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.s1ap": { source: "iana" },
  "application/vnd.3gpp.seal-group-doc+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.seal-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.seal-location-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.seal-mbms-usage-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.seal-network-qos-management-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.seal-ue-config-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.seal-unicast-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.seal-user-profile-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.sms": { source: "iana" },
  "application/vnd.3gpp.sms+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.srvcc-ext+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.srvcc-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.state-and-event-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.ussd+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.v2x": { source: "iana" },
  "application/vnd.3gpp.vae-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp2.bcmcsinfo+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp2.sms": { source: "iana" },
  "application/vnd.3gpp2.tcap": { source: "iana", extensions: ["tcap"] },
  "application/vnd.3lightssoftware.imagescal": { source: "iana" },
  "application/vnd.3m.post-it-notes": { source: "iana", extensions: ["pwn"] },
  "application/vnd.accpac.simply.aso": { source: "iana", extensions: ["aso"] },
  "application/vnd.accpac.simply.imp": { source: "iana", extensions: ["imp"] },
  "application/vnd.acm.addressxfer+json": { source: "iana", compressible: !0 },
  "application/vnd.acm.chatbot+json": { source: "iana", compressible: !0 },
  "application/vnd.acucobol": { source: "iana", extensions: ["acu"] },
  "application/vnd.acucorp": { source: "iana", extensions: ["atc", "acutc"] },
  "application/vnd.adobe.air-application-installer-package+zip": { source: "apache", compressible: !1, extensions: ["air"] },
  "application/vnd.adobe.flash.movie": { source: "iana" },
  "application/vnd.adobe.formscentral.fcdt": { source: "iana", extensions: ["fcdt"] },
  "application/vnd.adobe.fxp": { source: "iana", extensions: ["fxp", "fxpl"] },
  "application/vnd.adobe.partial-upload": { source: "iana" },
  "application/vnd.adobe.xdp+xml": { source: "iana", compressible: !0, extensions: ["xdp"] },
  "application/vnd.adobe.xfdf": { source: "apache", extensions: ["xfdf"] },
  "application/vnd.aether.imp": { source: "iana" },
  "application/vnd.afpc.afplinedata": { source: "iana" },
  "application/vnd.afpc.afplinedata-pagedef": { source: "iana" },
  "application/vnd.afpc.cmoca-cmresource": { source: "iana" },
  "application/vnd.afpc.foca-charset": { source: "iana" },
  "application/vnd.afpc.foca-codedfont": { source: "iana" },
  "application/vnd.afpc.foca-codepage": { source: "iana" },
  "application/vnd.afpc.modca": { source: "iana" },
  "application/vnd.afpc.modca-cmtable": { source: "iana" },
  "application/vnd.afpc.modca-formdef": { source: "iana" },
  "application/vnd.afpc.modca-mediummap": { source: "iana" },
  "application/vnd.afpc.modca-objectcontainer": { source: "iana" },
  "application/vnd.afpc.modca-overlay": { source: "iana" },
  "application/vnd.afpc.modca-pagesegment": { source: "iana" },
  "application/vnd.age": { source: "iana", extensions: ["age"] },
  "application/vnd.ah-barcode": { source: "apache" },
  "application/vnd.ahead.space": { source: "iana", extensions: ["ahead"] },
  "application/vnd.airzip.filesecure.azf": { source: "iana", extensions: ["azf"] },
  "application/vnd.airzip.filesecure.azs": { source: "iana", extensions: ["azs"] },
  "application/vnd.amadeus+json": { source: "iana", compressible: !0 },
  "application/vnd.amazon.ebook": { source: "apache", extensions: ["azw"] },
  "application/vnd.amazon.mobi8-ebook": { source: "iana" },
  "application/vnd.americandynamics.acc": { source: "iana", extensions: ["acc"] },
  "application/vnd.amiga.ami": { source: "iana", extensions: ["ami"] },
  "application/vnd.amundsen.maze+xml": { source: "iana", compressible: !0 },
  "application/vnd.android.ota": { source: "iana" },
  "application/vnd.android.package-archive": { source: "apache", compressible: !1, extensions: ["apk"] },
  "application/vnd.anki": { source: "iana" },
  "application/vnd.anser-web-certificate-issue-initiation": { source: "iana", extensions: ["cii"] },
  "application/vnd.anser-web-funds-transfer-initiation": { source: "apache", extensions: ["fti"] },
  "application/vnd.antix.game-component": { source: "iana", extensions: ["atx"] },
  "application/vnd.apache.arrow.file": { source: "iana" },
  "application/vnd.apache.arrow.stream": { source: "iana" },
  "application/vnd.apache.parquet": { source: "iana" },
  "application/vnd.apache.thrift.binary": { source: "iana" },
  "application/vnd.apache.thrift.compact": { source: "iana" },
  "application/vnd.apache.thrift.json": { source: "iana" },
  "application/vnd.apexlang": { source: "iana" },
  "application/vnd.api+json": { source: "iana", compressible: !0 },
  "application/vnd.aplextor.warrp+json": { source: "iana", compressible: !0 },
  "application/vnd.apothekende.reservation+json": { source: "iana", compressible: !0 },
  "application/vnd.apple.installer+xml": { source: "iana", compressible: !0, extensions: ["mpkg"] },
  "application/vnd.apple.keynote": { source: "iana", extensions: ["key"] },
  "application/vnd.apple.mpegurl": { source: "iana", extensions: ["m3u8"] },
  "application/vnd.apple.numbers": { source: "iana", extensions: ["numbers"] },
  "application/vnd.apple.pages": { source: "iana", extensions: ["pages"] },
  "application/vnd.apple.pkpass": { compressible: !1, extensions: ["pkpass"] },
  "application/vnd.arastra.swi": { source: "apache" },
  "application/vnd.aristanetworks.swi": { source: "iana", extensions: ["swi"] },
  "application/vnd.artisan+json": { source: "iana", compressible: !0 },
  "application/vnd.artsquare": { source: "iana" },
  "application/vnd.astraea-software.iota": { source: "iana", extensions: ["iota"] },
  "application/vnd.audiograph": { source: "iana", extensions: ["aep"] },
  "application/vnd.autodesk.fbx": { extensions: ["fbx"] },
  "application/vnd.autopackage": { source: "iana" },
  "application/vnd.avalon+json": { source: "iana", compressible: !0 },
  "application/vnd.avistar+xml": { source: "iana", compressible: !0 },
  "application/vnd.balsamiq.bmml+xml": { source: "iana", compressible: !0, extensions: ["bmml"] },
  "application/vnd.balsamiq.bmpr": { source: "iana" },
  "application/vnd.banana-accounting": { source: "iana" },
  "application/vnd.bbf.usp.error": { source: "iana" },
  "application/vnd.bbf.usp.msg": { source: "iana" },
  "application/vnd.bbf.usp.msg+json": { source: "iana", compressible: !0 },
  "application/vnd.bekitzur-stech+json": { source: "iana", compressible: !0 },
  "application/vnd.belightsoft.lhzd+zip": { source: "iana", compressible: !1 },
  "application/vnd.belightsoft.lhzl+zip": { source: "iana", compressible: !1 },
  "application/vnd.bint.med-content": { source: "iana" },
  "application/vnd.biopax.rdf+xml": { source: "iana", compressible: !0 },
  "application/vnd.blink-idb-value-wrapper": { source: "iana" },
  "application/vnd.blueice.multipass": { source: "iana", extensions: ["mpm"] },
  "application/vnd.bluetooth.ep.oob": { source: "iana" },
  "application/vnd.bluetooth.le.oob": { source: "iana" },
  "application/vnd.bmi": { source: "iana", extensions: ["bmi"] },
  "application/vnd.bpf": { source: "iana" },
  "application/vnd.bpf3": { source: "iana" },
  "application/vnd.businessobjects": { source: "iana", extensions: ["rep"] },
  "application/vnd.byu.uapi+json": { source: "iana", compressible: !0 },
  "application/vnd.bzip3": { source: "iana" },
  "application/vnd.c3voc.schedule+xml": { source: "iana", compressible: !0 },
  "application/vnd.cab-jscript": { source: "iana" },
  "application/vnd.canon-cpdl": { source: "iana" },
  "application/vnd.canon-lips": { source: "iana" },
  "application/vnd.capasystems-pg+json": { source: "iana", compressible: !0 },
  "application/vnd.cendio.thinlinc.clientconf": { source: "iana" },
  "application/vnd.century-systems.tcp_stream": { source: "iana" },
  "application/vnd.chemdraw+xml": { source: "iana", compressible: !0, extensions: ["cdxml"] },
  "application/vnd.chess-pgn": { source: "iana" },
  "application/vnd.chipnuts.karaoke-mmd": { source: "iana", extensions: ["mmd"] },
  "application/vnd.ciedi": { source: "iana" },
  "application/vnd.cinderella": { source: "iana", extensions: ["cdy"] },
  "application/vnd.cirpack.isdn-ext": { source: "iana" },
  "application/vnd.citationstyles.style+xml": { source: "iana", compressible: !0, extensions: ["csl"] },
  "application/vnd.claymore": { source: "iana", extensions: ["cla"] },
  "application/vnd.cloanto.rp9": { source: "iana", extensions: ["rp9"] },
  "application/vnd.clonk.c4group": { source: "iana", extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"] },
  "application/vnd.cluetrust.cartomobile-config": { source: "iana", extensions: ["c11amc"] },
  "application/vnd.cluetrust.cartomobile-config-pkg": { source: "iana", extensions: ["c11amz"] },
  "application/vnd.cncf.helm.chart.content.v1.tar+gzip": { source: "iana" },
  "application/vnd.cncf.helm.chart.provenance.v1.prov": { source: "iana" },
  "application/vnd.cncf.helm.config.v1+json": { source: "iana", compressible: !0 },
  "application/vnd.coffeescript": { source: "iana" },
  "application/vnd.collabio.xodocuments.document": { source: "iana" },
  "application/vnd.collabio.xodocuments.document-template": { source: "iana" },
  "application/vnd.collabio.xodocuments.presentation": { source: "iana" },
  "application/vnd.collabio.xodocuments.presentation-template": { source: "iana" },
  "application/vnd.collabio.xodocuments.spreadsheet": { source: "iana" },
  "application/vnd.collabio.xodocuments.spreadsheet-template": { source: "iana" },
  "application/vnd.collection+json": { source: "iana", compressible: !0 },
  "application/vnd.collection.doc+json": { source: "iana", compressible: !0 },
  "application/vnd.collection.next+json": { source: "iana", compressible: !0 },
  "application/vnd.comicbook+zip": { source: "iana", compressible: !1 },
  "application/vnd.comicbook-rar": { source: "iana" },
  "application/vnd.commerce-battelle": { source: "iana" },
  "application/vnd.commonspace": { source: "iana", extensions: ["csp"] },
  "application/vnd.contact.cmsg": { source: "iana", extensions: ["cdbcmsg"] },
  "application/vnd.coreos.ignition+json": { source: "iana", compressible: !0 },
  "application/vnd.cosmocaller": { source: "iana", extensions: ["cmc"] },
  "application/vnd.crick.clicker": { source: "iana", extensions: ["clkx"] },
  "application/vnd.crick.clicker.keyboard": { source: "iana", extensions: ["clkk"] },
  "application/vnd.crick.clicker.palette": { source: "iana", extensions: ["clkp"] },
  "application/vnd.crick.clicker.template": { source: "iana", extensions: ["clkt"] },
  "application/vnd.crick.clicker.wordbank": { source: "iana", extensions: ["clkw"] },
  "application/vnd.criticaltools.wbs+xml": { source: "iana", compressible: !0, extensions: ["wbs"] },
  "application/vnd.cryptii.pipe+json": { source: "iana", compressible: !0 },
  "application/vnd.crypto-shade-file": { source: "iana" },
  "application/vnd.cryptomator.encrypted": { source: "iana" },
  "application/vnd.cryptomator.vault": { source: "iana" },
  "application/vnd.ctc-posml": { source: "iana", extensions: ["pml"] },
  "application/vnd.ctct.ws+xml": { source: "iana", compressible: !0 },
  "application/vnd.cups-pdf": { source: "iana" },
  "application/vnd.cups-postscript": { source: "iana" },
  "application/vnd.cups-ppd": { source: "iana", extensions: ["ppd"] },
  "application/vnd.cups-raster": { source: "iana" },
  "application/vnd.cups-raw": { source: "iana" },
  "application/vnd.curl": { source: "iana" },
  "application/vnd.curl.car": { source: "apache", extensions: ["car"] },
  "application/vnd.curl.pcurl": { source: "apache", extensions: ["pcurl"] },
  "application/vnd.cyan.dean.root+xml": { source: "iana", compressible: !0 },
  "application/vnd.cybank": { source: "iana" },
  "application/vnd.cyclonedx+json": { source: "iana", compressible: !0 },
  "application/vnd.cyclonedx+xml": { source: "iana", compressible: !0 },
  "application/vnd.d2l.coursepackage1p0+zip": { source: "iana", compressible: !1 },
  "application/vnd.d3m-dataset": { source: "iana" },
  "application/vnd.d3m-problem": { source: "iana" },
  "application/vnd.dart": { source: "iana", compressible: !0, extensions: ["dart"] },
  "application/vnd.data-vision.rdz": { source: "iana", extensions: ["rdz"] },
  "application/vnd.datalog": { source: "iana" },
  "application/vnd.datapackage+json": { source: "iana", compressible: !0 },
  "application/vnd.dataresource+json": { source: "iana", compressible: !0 },
  "application/vnd.dbf": { source: "iana", extensions: ["dbf"] },
  "application/vnd.dcmp+xml": { source: "iana", compressible: !0, extensions: ["dcmp"] },
  "application/vnd.debian.binary-package": { source: "iana" },
  "application/vnd.dece.data": { source: "iana", extensions: ["uvf", "uvvf", "uvd", "uvvd"] },
  "application/vnd.dece.ttml+xml": { source: "iana", compressible: !0, extensions: ["uvt", "uvvt"] },
  "application/vnd.dece.unspecified": { source: "iana", extensions: ["uvx", "uvvx"] },
  "application/vnd.dece.zip": { source: "iana", extensions: ["uvz", "uvvz"] },
  "application/vnd.denovo.fcselayout-link": { source: "iana", extensions: ["fe_launch"] },
  "application/vnd.desmume.movie": { source: "iana" },
  "application/vnd.dir-bi.plate-dl-nosuffix": { source: "iana" },
  "application/vnd.dm.delegation+xml": { source: "iana", compressible: !0 },
  "application/vnd.dna": { source: "iana", extensions: ["dna"] },
  "application/vnd.document+json": { source: "iana", compressible: !0 },
  "application/vnd.dolby.mlp": { source: "apache", extensions: ["mlp"] },
  "application/vnd.dolby.mobile.1": { source: "iana" },
  "application/vnd.dolby.mobile.2": { source: "iana" },
  "application/vnd.doremir.scorecloud-binary-document": { source: "iana" },
  "application/vnd.dpgraph": { source: "iana", extensions: ["dpg"] },
  "application/vnd.dreamfactory": { source: "iana", extensions: ["dfac"] },
  "application/vnd.drive+json": { source: "iana", compressible: !0 },
  "application/vnd.ds-keypoint": { source: "apache", extensions: ["kpxx"] },
  "application/vnd.dtg.local": { source: "iana" },
  "application/vnd.dtg.local.flash": { source: "iana" },
  "application/vnd.dtg.local.html": { source: "iana" },
  "application/vnd.dvb.ait": { source: "iana", extensions: ["ait"] },
  "application/vnd.dvb.dvbisl+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.dvbj": { source: "iana" },
  "application/vnd.dvb.esgcontainer": { source: "iana" },
  "application/vnd.dvb.ipdcdftnotifaccess": { source: "iana" },
  "application/vnd.dvb.ipdcesgaccess": { source: "iana" },
  "application/vnd.dvb.ipdcesgaccess2": { source: "iana" },
  "application/vnd.dvb.ipdcesgpdd": { source: "iana" },
  "application/vnd.dvb.ipdcroaming": { source: "iana" },
  "application/vnd.dvb.iptv.alfec-base": { source: "iana" },
  "application/vnd.dvb.iptv.alfec-enhancement": { source: "iana" },
  "application/vnd.dvb.notif-aggregate-root+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-container+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-generic+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-ia-msglist+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-ia-registration-request+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-ia-registration-response+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-init+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.pfr": { source: "iana" },
  "application/vnd.dvb.service": { source: "iana", extensions: ["svc"] },
  "application/vnd.dxr": { source: "iana" },
  "application/vnd.dynageo": { source: "iana", extensions: ["geo"] },
  "application/vnd.dzr": { source: "iana" },
  "application/vnd.easykaraoke.cdgdownload": { source: "iana" },
  "application/vnd.ecdis-update": { source: "iana" },
  "application/vnd.ecip.rlp": { source: "iana" },
  "application/vnd.eclipse.ditto+json": { source: "iana", compressible: !0 },
  "application/vnd.ecowin.chart": { source: "iana", extensions: ["mag"] },
  "application/vnd.ecowin.filerequest": { source: "iana" },
  "application/vnd.ecowin.fileupdate": { source: "iana" },
  "application/vnd.ecowin.series": { source: "iana" },
  "application/vnd.ecowin.seriesrequest": { source: "iana" },
  "application/vnd.ecowin.seriesupdate": { source: "iana" },
  "application/vnd.efi.img": { source: "iana" },
  "application/vnd.efi.iso": { source: "iana" },
  "application/vnd.eln+zip": { source: "iana", compressible: !1 },
  "application/vnd.emclient.accessrequest+xml": { source: "iana", compressible: !0 },
  "application/vnd.enliven": { source: "iana", extensions: ["nml"] },
  "application/vnd.enphase.envoy": { source: "iana" },
  "application/vnd.eprints.data+xml": { source: "iana", compressible: !0 },
  "application/vnd.epson.esf": { source: "iana", extensions: ["esf"] },
  "application/vnd.epson.msf": { source: "iana", extensions: ["msf"] },
  "application/vnd.epson.quickanime": { source: "iana", extensions: ["qam"] },
  "application/vnd.epson.salt": { source: "iana", extensions: ["slt"] },
  "application/vnd.epson.ssf": { source: "iana", extensions: ["ssf"] },
  "application/vnd.ericsson.quickcall": { source: "iana" },
  "application/vnd.erofs": { source: "iana" },
  "application/vnd.espass-espass+zip": { source: "iana", compressible: !1 },
  "application/vnd.eszigno3+xml": { source: "iana", compressible: !0, extensions: ["es3", "et3"] },
  "application/vnd.etsi.aoc+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.asic-e+zip": { source: "iana", compressible: !1 },
  "application/vnd.etsi.asic-s+zip": { source: "iana", compressible: !1 },
  "application/vnd.etsi.cug+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvcommand+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvdiscovery+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvprofile+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvsad-bc+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvsad-cod+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvsad-npvr+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvservice+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvsync+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvueprofile+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.mcid+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.mheg5": { source: "iana" },
  "application/vnd.etsi.overload-control-policy-dataset+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.pstn+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.sci+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.simservs+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.timestamp-token": { source: "iana" },
  "application/vnd.etsi.tsl+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.tsl.der": { source: "iana" },
  "application/vnd.eu.kasparian.car+json": { source: "iana", compressible: !0 },
  "application/vnd.eudora.data": { source: "iana" },
  "application/vnd.evolv.ecig.profile": { source: "iana" },
  "application/vnd.evolv.ecig.settings": { source: "iana" },
  "application/vnd.evolv.ecig.theme": { source: "iana" },
  "application/vnd.exstream-empower+zip": { source: "iana", compressible: !1 },
  "application/vnd.exstream-package": { source: "iana" },
  "application/vnd.ezpix-album": { source: "iana", extensions: ["ez2"] },
  "application/vnd.ezpix-package": { source: "iana", extensions: ["ez3"] },
  "application/vnd.f-secure.mobile": { source: "iana" },
  "application/vnd.familysearch.gedcom+zip": { source: "iana", compressible: !1 },
  "application/vnd.fastcopy-disk-image": { source: "iana" },
  "application/vnd.fdf": { source: "apache", extensions: ["fdf"] },
  "application/vnd.fdsn.mseed": { source: "iana", extensions: ["mseed"] },
  "application/vnd.fdsn.seed": { source: "iana", extensions: ["seed", "dataless"] },
  "application/vnd.fdsn.stationxml+xml": { source: "iana", charset: "XML-BASED", compressible: !0 },
  "application/vnd.ffsns": { source: "iana" },
  "application/vnd.ficlab.flb+zip": { source: "iana", compressible: !1 },
  "application/vnd.filmit.zfc": { source: "iana" },
  "application/vnd.fints": { source: "iana" },
  "application/vnd.firemonkeys.cloudcell": { source: "iana" },
  "application/vnd.flographit": { source: "iana", extensions: ["gph"] },
  "application/vnd.fluxtime.clip": { source: "iana", extensions: ["ftc"] },
  "application/vnd.font-fontforge-sfd": { source: "iana" },
  "application/vnd.framemaker": { source: "iana", extensions: ["fm", "frame", "maker", "book"] },
  "application/vnd.freelog.comic": { source: "iana" },
  "application/vnd.frogans.fnc": { source: "apache", extensions: ["fnc"] },
  "application/vnd.frogans.ltf": { source: "apache", extensions: ["ltf"] },
  "application/vnd.fsc.weblaunch": { source: "iana", extensions: ["fsc"] },
  "application/vnd.fujifilm.fb.docuworks": { source: "iana" },
  "application/vnd.fujifilm.fb.docuworks.binder": { source: "iana" },
  "application/vnd.fujifilm.fb.docuworks.container": { source: "iana" },
  "application/vnd.fujifilm.fb.jfi+xml": { source: "iana", compressible: !0 },
  "application/vnd.fujitsu.oasys": { source: "iana", extensions: ["oas"] },
  "application/vnd.fujitsu.oasys2": { source: "iana", extensions: ["oa2"] },
  "application/vnd.fujitsu.oasys3": { source: "iana", extensions: ["oa3"] },
  "application/vnd.fujitsu.oasysgp": { source: "iana", extensions: ["fg5"] },
  "application/vnd.fujitsu.oasysprs": { source: "iana", extensions: ["bh2"] },
  "application/vnd.fujixerox.art-ex": { source: "iana" },
  "application/vnd.fujixerox.art4": { source: "iana" },
  "application/vnd.fujixerox.ddd": { source: "iana", extensions: ["ddd"] },
  "application/vnd.fujixerox.docuworks": { source: "iana", extensions: ["xdw"] },
  "application/vnd.fujixerox.docuworks.binder": { source: "iana", extensions: ["xbd"] },
  "application/vnd.fujixerox.docuworks.container": { source: "iana" },
  "application/vnd.fujixerox.hbpl": { source: "iana" },
  "application/vnd.fut-misnet": { source: "iana" },
  "application/vnd.futoin+cbor": { source: "iana" },
  "application/vnd.futoin+json": { source: "iana", compressible: !0 },
  "application/vnd.fuzzysheet": { source: "iana", extensions: ["fzs"] },
  "application/vnd.ga4gh.passport+jwt": { source: "iana" },
  "application/vnd.genomatix.tuxedo": { source: "iana", extensions: ["txd"] },
  "application/vnd.genozip": { source: "iana" },
  "application/vnd.gentics.grd+json": { source: "iana", compressible: !0 },
  "application/vnd.gentoo.catmetadata+xml": { source: "iana", compressible: !0 },
  "application/vnd.gentoo.ebuild": { source: "iana" },
  "application/vnd.gentoo.eclass": { source: "iana" },
  "application/vnd.gentoo.gpkg": { source: "iana" },
  "application/vnd.gentoo.manifest": { source: "iana" },
  "application/vnd.gentoo.pkgmetadata+xml": { source: "iana", compressible: !0 },
  "application/vnd.gentoo.xpak": { source: "iana" },
  "application/vnd.geo+json": { source: "apache", compressible: !0 },
  "application/vnd.geocube+xml": { source: "apache", compressible: !0 },
  "application/vnd.geogebra.file": { source: "iana", extensions: ["ggb"] },
  "application/vnd.geogebra.pinboard": { source: "iana" },
  "application/vnd.geogebra.slides": { source: "iana", extensions: ["ggs"] },
  "application/vnd.geogebra.tool": { source: "iana", extensions: ["ggt"] },
  "application/vnd.geometry-explorer": { source: "iana", extensions: ["gex", "gre"] },
  "application/vnd.geonext": { source: "iana", extensions: ["gxt"] },
  "application/vnd.geoplan": { source: "iana", extensions: ["g2w"] },
  "application/vnd.geospace": { source: "iana", extensions: ["g3w"] },
  "application/vnd.gerber": { source: "iana" },
  "application/vnd.globalplatform.card-content-mgt": { source: "iana" },
  "application/vnd.globalplatform.card-content-mgt-response": { source: "iana" },
  "application/vnd.gmx": { source: "iana", extensions: ["gmx"] },
  "application/vnd.gnu.taler.exchange+json": { source: "iana", compressible: !0 },
  "application/vnd.gnu.taler.merchant+json": { source: "iana", compressible: !0 },
  "application/vnd.google-apps.audio": {},
  "application/vnd.google-apps.document": { compressible: !1, extensions: ["gdoc"] },
  "application/vnd.google-apps.drawing": { compressible: !1, extensions: ["gdraw"] },
  "application/vnd.google-apps.drive-sdk": { compressible: !1 },
  "application/vnd.google-apps.file": {},
  "application/vnd.google-apps.folder": { compressible: !1 },
  "application/vnd.google-apps.form": { compressible: !1, extensions: ["gform"] },
  "application/vnd.google-apps.fusiontable": {},
  "application/vnd.google-apps.jam": { compressible: !1, extensions: ["gjam"] },
  "application/vnd.google-apps.mail-layout": {},
  "application/vnd.google-apps.map": { compressible: !1, extensions: ["gmap"] },
  "application/vnd.google-apps.photo": {},
  "application/vnd.google-apps.presentation": { compressible: !1, extensions: ["gslides"] },
  "application/vnd.google-apps.script": { compressible: !1, extensions: ["gscript"] },
  "application/vnd.google-apps.shortcut": {},
  "application/vnd.google-apps.site": { compressible: !1, extensions: ["gsite"] },
  "application/vnd.google-apps.spreadsheet": { compressible: !1, extensions: ["gsheet"] },
  "application/vnd.google-apps.unknown": {},
  "application/vnd.google-apps.video": {},
  "application/vnd.google-earth.kml+xml": { source: "iana", compressible: !0, extensions: ["kml"] },
  "application/vnd.google-earth.kmz": { source: "iana", compressible: !1, extensions: ["kmz"] },
  "application/vnd.gov.sk.e-form+xml": { source: "apache", compressible: !0 },
  "application/vnd.gov.sk.e-form+zip": { source: "iana", compressible: !1 },
  "application/vnd.gov.sk.xmldatacontainer+xml": { source: "iana", compressible: !0, extensions: ["xdcf"] },
  "application/vnd.gpxsee.map+xml": { source: "iana", compressible: !0 },
  "application/vnd.grafeq": { source: "iana", extensions: ["gqf", "gqs"] },
  "application/vnd.gridmp": { source: "iana" },
  "application/vnd.groove-account": { source: "iana", extensions: ["gac"] },
  "application/vnd.groove-help": { source: "iana", extensions: ["ghf"] },
  "application/vnd.groove-identity-message": { source: "iana", extensions: ["gim"] },
  "application/vnd.groove-injector": { source: "iana", extensions: ["grv"] },
  "application/vnd.groove-tool-message": { source: "iana", extensions: ["gtm"] },
  "application/vnd.groove-tool-template": { source: "iana", extensions: ["tpl"] },
  "application/vnd.groove-vcard": { source: "iana", extensions: ["vcg"] },
  "application/vnd.hal+json": { source: "iana", compressible: !0 },
  "application/vnd.hal+xml": { source: "iana", compressible: !0, extensions: ["hal"] },
  "application/vnd.handheld-entertainment+xml": { source: "iana", compressible: !0, extensions: ["zmm"] },
  "application/vnd.hbci": { source: "iana", extensions: ["hbci"] },
  "application/vnd.hc+json": { source: "iana", compressible: !0 },
  "application/vnd.hcl-bireports": { source: "iana" },
  "application/vnd.hdt": { source: "iana" },
  "application/vnd.heroku+json": { source: "iana", compressible: !0 },
  "application/vnd.hhe.lesson-player": { source: "iana", extensions: ["les"] },
  "application/vnd.hp-hpgl": { source: "iana", extensions: ["hpgl"] },
  "application/vnd.hp-hpid": { source: "iana", extensions: ["hpid"] },
  "application/vnd.hp-hps": { source: "iana", extensions: ["hps"] },
  "application/vnd.hp-jlyt": { source: "iana", extensions: ["jlt"] },
  "application/vnd.hp-pcl": { source: "iana", extensions: ["pcl"] },
  "application/vnd.hp-pclxl": { source: "iana", extensions: ["pclxl"] },
  "application/vnd.hsl": { source: "iana" },
  "application/vnd.httphone": { source: "iana" },
  "application/vnd.hydrostatix.sof-data": { source: "iana", extensions: ["sfd-hdstx"] },
  "application/vnd.hyper+json": { source: "iana", compressible: !0 },
  "application/vnd.hyper-item+json": { source: "iana", compressible: !0 },
  "application/vnd.hyperdrive+json": { source: "iana", compressible: !0 },
  "application/vnd.hzn-3d-crossword": { source: "iana" },
  "application/vnd.ibm.afplinedata": { source: "apache" },
  "application/vnd.ibm.electronic-media": { source: "iana" },
  "application/vnd.ibm.minipay": { source: "iana", extensions: ["mpy"] },
  "application/vnd.ibm.modcap": { source: "apache", extensions: ["afp", "listafp", "list3820"] },
  "application/vnd.ibm.rights-management": { source: "iana", extensions: ["irm"] },
  "application/vnd.ibm.secure-container": { source: "iana", extensions: ["sc"] },
  "application/vnd.iccprofile": { source: "iana", extensions: ["icc", "icm"] },
  "application/vnd.ieee.1905": { source: "iana" },
  "application/vnd.igloader": { source: "iana", extensions: ["igl"] },
  "application/vnd.imagemeter.folder+zip": { source: "iana", compressible: !1 },
  "application/vnd.imagemeter.image+zip": { source: "iana", compressible: !1 },
  "application/vnd.immervision-ivp": { source: "iana", extensions: ["ivp"] },
  "application/vnd.immervision-ivu": { source: "iana", extensions: ["ivu"] },
  "application/vnd.ims.imsccv1p1": { source: "iana" },
  "application/vnd.ims.imsccv1p2": { source: "iana" },
  "application/vnd.ims.imsccv1p3": { source: "iana" },
  "application/vnd.ims.lis.v2.result+json": { source: "iana", compressible: !0 },
  "application/vnd.ims.lti.v2.toolconsumerprofile+json": { source: "iana", compressible: !0 },
  "application/vnd.ims.lti.v2.toolproxy+json": { source: "iana", compressible: !0 },
  "application/vnd.ims.lti.v2.toolproxy.id+json": { source: "iana", compressible: !0 },
  "application/vnd.ims.lti.v2.toolsettings+json": { source: "iana", compressible: !0 },
  "application/vnd.ims.lti.v2.toolsettings.simple+json": { source: "iana", compressible: !0 },
  "application/vnd.informedcontrol.rms+xml": { source: "iana", compressible: !0 },
  "application/vnd.informix-visionary": { source: "apache" },
  "application/vnd.infotech.project": { source: "iana" },
  "application/vnd.infotech.project+xml": { source: "iana", compressible: !0 },
  "application/vnd.innopath.wamp.notification": { source: "iana" },
  "application/vnd.insors.igm": { source: "iana", extensions: ["igm"] },
  "application/vnd.intercon.formnet": { source: "iana", extensions: ["xpw", "xpx"] },
  "application/vnd.intergeo": { source: "iana", extensions: ["i2g"] },
  "application/vnd.intertrust.digibox": { source: "iana" },
  "application/vnd.intertrust.nncp": { source: "iana" },
  "application/vnd.intu.qbo": { source: "iana", extensions: ["qbo"] },
  "application/vnd.intu.qfx": { source: "iana", extensions: ["qfx"] },
  "application/vnd.ipfs.ipns-record": { source: "iana" },
  "application/vnd.ipld.car": { source: "iana" },
  "application/vnd.ipld.dag-cbor": { source: "iana" },
  "application/vnd.ipld.dag-json": { source: "iana" },
  "application/vnd.ipld.raw": { source: "iana" },
  "application/vnd.iptc.g2.catalogitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.conceptitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.knowledgeitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.newsitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.newsmessage+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.packageitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.planningitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.ipunplugged.rcprofile": { source: "iana", extensions: ["rcprofile"] },
  "application/vnd.irepository.package+xml": { source: "iana", compressible: !0, extensions: ["irp"] },
  "application/vnd.is-xpr": { source: "iana", extensions: ["xpr"] },
  "application/vnd.isac.fcs": { source: "iana", extensions: ["fcs"] },
  "application/vnd.iso11783-10+zip": { source: "iana", compressible: !1 },
  "application/vnd.jam": { source: "iana", extensions: ["jam"] },
  "application/vnd.japannet-directory-service": { source: "iana" },
  "application/vnd.japannet-jpnstore-wakeup": { source: "iana" },
  "application/vnd.japannet-payment-wakeup": { source: "iana" },
  "application/vnd.japannet-registration": { source: "iana" },
  "application/vnd.japannet-registration-wakeup": { source: "iana" },
  "application/vnd.japannet-setstore-wakeup": { source: "iana" },
  "application/vnd.japannet-verification": { source: "iana" },
  "application/vnd.japannet-verification-wakeup": { source: "iana" },
  "application/vnd.jcp.javame.midlet-rms": { source: "iana", extensions: ["rms"] },
  "application/vnd.jisp": { source: "iana", extensions: ["jisp"] },
  "application/vnd.joost.joda-archive": { source: "iana", extensions: ["joda"] },
  "application/vnd.jsk.isdn-ngn": { source: "iana" },
  "application/vnd.kahootz": { source: "iana", extensions: ["ktz", "ktr"] },
  "application/vnd.kde.karbon": { source: "iana", extensions: ["karbon"] },
  "application/vnd.kde.kchart": { source: "iana", extensions: ["chrt"] },
  "application/vnd.kde.kformula": { source: "iana", extensions: ["kfo"] },
  "application/vnd.kde.kivio": { source: "iana", extensions: ["flw"] },
  "application/vnd.kde.kontour": { source: "iana", extensions: ["kon"] },
  "application/vnd.kde.kpresenter": { source: "iana", extensions: ["kpr", "kpt"] },
  "application/vnd.kde.kspread": { source: "iana", extensions: ["ksp"] },
  "application/vnd.kde.kword": { source: "iana", extensions: ["kwd", "kwt"] },
  "application/vnd.kdl": { source: "iana" },
  "application/vnd.kenameaapp": { source: "iana", extensions: ["htke"] },
  "application/vnd.keyman.kmp+zip": { source: "iana", compressible: !1 },
  "application/vnd.keyman.kmx": { source: "iana" },
  "application/vnd.kidspiration": { source: "iana", extensions: ["kia"] },
  "application/vnd.kinar": { source: "iana", extensions: ["kne", "knp"] },
  "application/vnd.koan": { source: "iana", extensions: ["skp", "skd", "skt", "skm"] },
  "application/vnd.kodak-descriptor": { source: "iana", extensions: ["sse"] },
  "application/vnd.las": { source: "iana" },
  "application/vnd.las.las+json": { source: "iana", compressible: !0 },
  "application/vnd.las.las+xml": { source: "iana", compressible: !0, extensions: ["lasxml"] },
  "application/vnd.laszip": { source: "iana" },
  "application/vnd.ldev.productlicensing": { source: "iana" },
  "application/vnd.leap+json": { source: "iana", compressible: !0 },
  "application/vnd.liberty-request+xml": { source: "iana", compressible: !0 },
  "application/vnd.llamagraphics.life-balance.desktop": { source: "iana", extensions: ["lbd"] },
  "application/vnd.llamagraphics.life-balance.exchange+xml": { source: "iana", compressible: !0, extensions: ["lbe"] },
  "application/vnd.logipipe.circuit+zip": { source: "iana", compressible: !1 },
  "application/vnd.loom": { source: "iana" },
  "application/vnd.lotus-1-2-3": { source: "iana", extensions: ["123"] },
  "application/vnd.lotus-approach": { source: "iana", extensions: ["apr"] },
  "application/vnd.lotus-freelance": { source: "iana", extensions: ["pre"] },
  "application/vnd.lotus-notes": { source: "iana", extensions: ["nsf"] },
  "application/vnd.lotus-organizer": { source: "iana", extensions: ["org"] },
  "application/vnd.lotus-screencam": { source: "iana", extensions: ["scm"] },
  "application/vnd.lotus-wordpro": { source: "iana", extensions: ["lwp"] },
  "application/vnd.macports.portpkg": { source: "iana", extensions: ["portpkg"] },
  "application/vnd.mapbox-vector-tile": { source: "iana", extensions: ["mvt"] },
  "application/vnd.marlin.drm.actiontoken+xml": { source: "iana", compressible: !0 },
  "application/vnd.marlin.drm.conftoken+xml": { source: "iana", compressible: !0 },
  "application/vnd.marlin.drm.license+xml": { source: "iana", compressible: !0 },
  "application/vnd.marlin.drm.mdcf": { source: "iana" },
  "application/vnd.mason+json": { source: "iana", compressible: !0 },
  "application/vnd.maxar.archive.3tz+zip": { source: "iana", compressible: !1 },
  "application/vnd.maxmind.maxmind-db": { source: "iana" },
  "application/vnd.mcd": { source: "iana", extensions: ["mcd"] },
  "application/vnd.mdl": { source: "iana" },
  "application/vnd.mdl-mbsdf": { source: "iana" },
  "application/vnd.medcalcdata": { source: "iana", extensions: ["mc1"] },
  "application/vnd.mediastation.cdkey": { source: "iana", extensions: ["cdkey"] },
  "application/vnd.medicalholodeck.recordxr": { source: "iana" },
  "application/vnd.meridian-slingshot": { source: "iana" },
  "application/vnd.mermaid": { source: "iana" },
  "application/vnd.mfer": { source: "iana", extensions: ["mwf"] },
  "application/vnd.mfmp": { source: "iana", extensions: ["mfm"] },
  "application/vnd.micro+json": { source: "iana", compressible: !0 },
  "application/vnd.micrografx.flo": { source: "iana", extensions: ["flo"] },
  "application/vnd.micrografx.igx": { source: "iana", extensions: ["igx"] },
  "application/vnd.microsoft.portable-executable": { source: "iana" },
  "application/vnd.microsoft.windows.thumbnail-cache": { source: "iana" },
  "application/vnd.miele+json": { source: "iana", compressible: !0 },
  "application/vnd.mif": { source: "iana", extensions: ["mif"] },
  "application/vnd.minisoft-hp3000-save": { source: "iana" },
  "application/vnd.mitsubishi.misty-guard.trustweb": { source: "iana" },
  "application/vnd.mobius.daf": { source: "iana", extensions: ["daf"] },
  "application/vnd.mobius.dis": { source: "iana", extensions: ["dis"] },
  "application/vnd.mobius.mbk": { source: "iana", extensions: ["mbk"] },
  "application/vnd.mobius.mqy": { source: "iana", extensions: ["mqy"] },
  "application/vnd.mobius.msl": { source: "iana", extensions: ["msl"] },
  "application/vnd.mobius.plc": { source: "iana", extensions: ["plc"] },
  "application/vnd.mobius.txf": { source: "iana", extensions: ["txf"] },
  "application/vnd.modl": { source: "iana" },
  "application/vnd.mophun.application": { source: "iana", extensions: ["mpn"] },
  "application/vnd.mophun.certificate": { source: "iana", extensions: ["mpc"] },
  "application/vnd.motorola.flexsuite": { source: "iana" },
  "application/vnd.motorola.flexsuite.adsi": { source: "iana" },
  "application/vnd.motorola.flexsuite.fis": { source: "iana" },
  "application/vnd.motorola.flexsuite.gotap": { source: "iana" },
  "application/vnd.motorola.flexsuite.kmr": { source: "iana" },
  "application/vnd.motorola.flexsuite.ttc": { source: "iana" },
  "application/vnd.motorola.flexsuite.wem": { source: "iana" },
  "application/vnd.motorola.iprm": { source: "iana" },
  "application/vnd.mozilla.xul+xml": { source: "iana", compressible: !0, extensions: ["xul"] },
  "application/vnd.ms-3mfdocument": { source: "iana" },
  "application/vnd.ms-artgalry": { source: "iana", extensions: ["cil"] },
  "application/vnd.ms-asf": { source: "iana" },
  "application/vnd.ms-cab-compressed": { source: "iana", extensions: ["cab"] },
  "application/vnd.ms-color.iccprofile": { source: "apache" },
  "application/vnd.ms-excel": { source: "iana", compressible: !1, extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"] },
  "application/vnd.ms-excel.addin.macroenabled.12": { source: "iana", extensions: ["xlam"] },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": { source: "iana", extensions: ["xlsb"] },
  "application/vnd.ms-excel.sheet.macroenabled.12": { source: "iana", extensions: ["xlsm"] },
  "application/vnd.ms-excel.template.macroenabled.12": { source: "iana", extensions: ["xltm"] },
  "application/vnd.ms-fontobject": { source: "iana", compressible: !0, extensions: ["eot"] },
  "application/vnd.ms-htmlhelp": { source: "iana", extensions: ["chm"] },
  "application/vnd.ms-ims": { source: "iana", extensions: ["ims"] },
  "application/vnd.ms-lrm": { source: "iana", extensions: ["lrm"] },
  "application/vnd.ms-office.activex+xml": { source: "iana", compressible: !0 },
  "application/vnd.ms-officetheme": { source: "iana", extensions: ["thmx"] },
  "application/vnd.ms-opentype": { source: "apache", compressible: !0 },
  "application/vnd.ms-outlook": { compressible: !1, extensions: ["msg"] },
  "application/vnd.ms-package.obfuscated-opentype": { source: "apache" },
  "application/vnd.ms-pki.seccat": { source: "apache", extensions: ["cat"] },
  "application/vnd.ms-pki.stl": { source: "apache", extensions: ["stl"] },
  "application/vnd.ms-playready.initiator+xml": { source: "iana", compressible: !0 },
  "application/vnd.ms-powerpoint": { source: "iana", compressible: !1, extensions: ["ppt", "pps", "pot"] },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": { source: "iana", extensions: ["ppam"] },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": { source: "iana", extensions: ["pptm"] },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": { source: "iana", extensions: ["sldm"] },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": { source: "iana", extensions: ["ppsm"] },
  "application/vnd.ms-powerpoint.template.macroenabled.12": { source: "iana", extensions: ["potm"] },
  "application/vnd.ms-printdevicecapabilities+xml": { source: "iana", compressible: !0 },
  "application/vnd.ms-printing.printticket+xml": { source: "apache", compressible: !0 },
  "application/vnd.ms-printschematicket+xml": { source: "iana", compressible: !0 },
  "application/vnd.ms-project": { source: "iana", extensions: ["mpp", "mpt"] },
  "application/vnd.ms-tnef": { source: "iana" },
  "application/vnd.ms-visio.viewer": { extensions: ["vdx"] },
  "application/vnd.ms-windows.devicepairing": { source: "iana" },
  "application/vnd.ms-windows.nwprinting.oob": { source: "iana" },
  "application/vnd.ms-windows.printerpairing": { source: "iana" },
  "application/vnd.ms-windows.wsd.oob": { source: "iana" },
  "application/vnd.ms-wmdrm.lic-chlg-req": { source: "iana" },
  "application/vnd.ms-wmdrm.lic-resp": { source: "iana" },
  "application/vnd.ms-wmdrm.meter-chlg-req": { source: "iana" },
  "application/vnd.ms-wmdrm.meter-resp": { source: "iana" },
  "application/vnd.ms-word.document.macroenabled.12": { source: "iana", extensions: ["docm"] },
  "application/vnd.ms-word.template.macroenabled.12": { source: "iana", extensions: ["dotm"] },
  "application/vnd.ms-works": { source: "iana", extensions: ["wps", "wks", "wcm", "wdb"] },
  "application/vnd.ms-wpl": { source: "iana", extensions: ["wpl"] },
  "application/vnd.ms-xpsdocument": { source: "iana", compressible: !1, extensions: ["xps"] },
  "application/vnd.msa-disk-image": { source: "iana" },
  "application/vnd.mseq": { source: "iana", extensions: ["mseq"] },
  "application/vnd.msgpack": { source: "iana" },
  "application/vnd.msign": { source: "iana" },
  "application/vnd.multiad.creator": { source: "iana" },
  "application/vnd.multiad.creator.cif": { source: "iana" },
  "application/vnd.music-niff": { source: "iana" },
  "application/vnd.musician": { source: "iana", extensions: ["mus"] },
  "application/vnd.muvee.style": { source: "iana", extensions: ["msty"] },
  "application/vnd.mynfc": { source: "iana", extensions: ["taglet"] },
  "application/vnd.nacamar.ybrid+json": { source: "iana", compressible: !0 },
  "application/vnd.nato.bindingdataobject+cbor": { source: "iana" },
  "application/vnd.nato.bindingdataobject+json": { source: "iana", compressible: !0 },
  "application/vnd.nato.bindingdataobject+xml": { source: "iana", compressible: !0, extensions: ["bdo"] },
  "application/vnd.nato.openxmlformats-package.iepd+zip": { source: "iana", compressible: !1 },
  "application/vnd.ncd.control": { source: "iana" },
  "application/vnd.ncd.reference": { source: "iana" },
  "application/vnd.nearst.inv+json": { source: "iana", compressible: !0 },
  "application/vnd.nebumind.line": { source: "iana" },
  "application/vnd.nervana": { source: "iana" },
  "application/vnd.netfpx": { source: "iana" },
  "application/vnd.neurolanguage.nlu": { source: "iana", extensions: ["nlu"] },
  "application/vnd.nimn": { source: "iana" },
  "application/vnd.nintendo.nitro.rom": { source: "iana" },
  "application/vnd.nintendo.snes.rom": { source: "iana" },
  "application/vnd.nitf": { source: "iana", extensions: ["ntf", "nitf"] },
  "application/vnd.noblenet-directory": { source: "iana", extensions: ["nnd"] },
  "application/vnd.noblenet-sealer": { source: "iana", extensions: ["nns"] },
  "application/vnd.noblenet-web": { source: "iana", extensions: ["nnw"] },
  "application/vnd.nokia.catalogs": { source: "iana" },
  "application/vnd.nokia.conml+wbxml": { source: "iana" },
  "application/vnd.nokia.conml+xml": { source: "iana", compressible: !0 },
  "application/vnd.nokia.iptv.config+xml": { source: "iana", compressible: !0 },
  "application/vnd.nokia.isds-radio-presets": { source: "iana" },
  "application/vnd.nokia.landmark+wbxml": { source: "iana" },
  "application/vnd.nokia.landmark+xml": { source: "iana", compressible: !0 },
  "application/vnd.nokia.landmarkcollection+xml": { source: "iana", compressible: !0 },
  "application/vnd.nokia.n-gage.ac+xml": { source: "iana", compressible: !0, extensions: ["ac"] },
  "application/vnd.nokia.n-gage.data": { source: "iana", extensions: ["ngdat"] },
  "application/vnd.nokia.n-gage.symbian.install": { source: "apache", extensions: ["n-gage"] },
  "application/vnd.nokia.ncd": { source: "iana" },
  "application/vnd.nokia.pcd+wbxml": { source: "iana" },
  "application/vnd.nokia.pcd+xml": { source: "iana", compressible: !0 },
  "application/vnd.nokia.radio-preset": { source: "iana", extensions: ["rpst"] },
  "application/vnd.nokia.radio-presets": { source: "iana", extensions: ["rpss"] },
  "application/vnd.novadigm.edm": { source: "iana", extensions: ["edm"] },
  "application/vnd.novadigm.edx": { source: "iana", extensions: ["edx"] },
  "application/vnd.novadigm.ext": { source: "iana", extensions: ["ext"] },
  "application/vnd.ntt-local.content-share": { source: "iana" },
  "application/vnd.ntt-local.file-transfer": { source: "iana" },
  "application/vnd.ntt-local.ogw_remote-access": { source: "iana" },
  "application/vnd.ntt-local.sip-ta_remote": { source: "iana" },
  "application/vnd.ntt-local.sip-ta_tcp_stream": { source: "iana" },
  "application/vnd.oai.workflows": { source: "iana" },
  "application/vnd.oai.workflows+json": { source: "iana", compressible: !0 },
  "application/vnd.oai.workflows+yaml": { source: "iana" },
  "application/vnd.oasis.opendocument.base": { source: "iana" },
  "application/vnd.oasis.opendocument.chart": { source: "iana", extensions: ["odc"] },
  "application/vnd.oasis.opendocument.chart-template": { source: "iana", extensions: ["otc"] },
  "application/vnd.oasis.opendocument.database": { source: "apache", extensions: ["odb"] },
  "application/vnd.oasis.opendocument.formula": { source: "iana", extensions: ["odf"] },
  "application/vnd.oasis.opendocument.formula-template": { source: "iana", extensions: ["odft"] },
  "application/vnd.oasis.opendocument.graphics": { source: "iana", compressible: !1, extensions: ["odg"] },
  "application/vnd.oasis.opendocument.graphics-template": { source: "iana", extensions: ["otg"] },
  "application/vnd.oasis.opendocument.image": { source: "iana", extensions: ["odi"] },
  "application/vnd.oasis.opendocument.image-template": { source: "iana", extensions: ["oti"] },
  "application/vnd.oasis.opendocument.presentation": { source: "iana", compressible: !1, extensions: ["odp"] },
  "application/vnd.oasis.opendocument.presentation-template": { source: "iana", extensions: ["otp"] },
  "application/vnd.oasis.opendocument.spreadsheet": { source: "iana", compressible: !1, extensions: ["ods"] },
  "application/vnd.oasis.opendocument.spreadsheet-template": { source: "iana", extensions: ["ots"] },
  "application/vnd.oasis.opendocument.text": { source: "iana", compressible: !1, extensions: ["odt"] },
  "application/vnd.oasis.opendocument.text-master": { source: "iana", extensions: ["odm"] },
  "application/vnd.oasis.opendocument.text-master-template": { source: "iana" },
  "application/vnd.oasis.opendocument.text-template": { source: "iana", extensions: ["ott"] },
  "application/vnd.oasis.opendocument.text-web": { source: "iana", extensions: ["oth"] },
  "application/vnd.obn": { source: "iana" },
  "application/vnd.ocf+cbor": { source: "iana" },
  "application/vnd.oci.image.manifest.v1+json": { source: "iana", compressible: !0 },
  "application/vnd.oftn.l10n+json": { source: "iana", compressible: !0 },
  "application/vnd.oipf.contentaccessdownload+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.contentaccessstreaming+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.cspg-hexbinary": { source: "iana" },
  "application/vnd.oipf.dae.svg+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.dae.xhtml+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.mippvcontrolmessage+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.pae.gem": { source: "iana" },
  "application/vnd.oipf.spdiscovery+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.spdlist+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.ueprofile+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.userprofile+xml": { source: "iana", compressible: !0 },
  "application/vnd.olpc-sugar": { source: "iana", extensions: ["xo"] },
  "application/vnd.oma-scws-config": { source: "iana" },
  "application/vnd.oma-scws-http-request": { source: "iana" },
  "application/vnd.oma-scws-http-response": { source: "iana" },
  "application/vnd.oma.bcast.associated-procedure-parameter+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.drm-trigger+xml": { source: "apache", compressible: !0 },
  "application/vnd.oma.bcast.imd+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.ltkm": { source: "iana" },
  "application/vnd.oma.bcast.notification+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.provisioningtrigger": { source: "iana" },
  "application/vnd.oma.bcast.sgboot": { source: "iana" },
  "application/vnd.oma.bcast.sgdd+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.sgdu": { source: "iana" },
  "application/vnd.oma.bcast.simple-symbol-container": { source: "iana" },
  "application/vnd.oma.bcast.smartcard-trigger+xml": { source: "apache", compressible: !0 },
  "application/vnd.oma.bcast.sprov+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.stkm": { source: "iana" },
  "application/vnd.oma.cab-address-book+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.cab-feature-handler+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.cab-pcc+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.cab-subs-invite+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.cab-user-prefs+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.dcd": { source: "iana" },
  "application/vnd.oma.dcdc": { source: "iana" },
  "application/vnd.oma.dd2+xml": { source: "iana", compressible: !0, extensions: ["dd2"] },
  "application/vnd.oma.drm.risd+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.group-usage-list+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.lwm2m+cbor": { source: "iana" },
  "application/vnd.oma.lwm2m+json": { source: "iana", compressible: !0 },
  "application/vnd.oma.lwm2m+tlv": { source: "iana" },
  "application/vnd.oma.pal+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.poc.detailed-progress-report+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.poc.final-report+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.poc.groups+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.poc.invocation-descriptor+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.poc.optimized-progress-report+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.push": { source: "iana" },
  "application/vnd.oma.scidm.messages+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.xcap-directory+xml": { source: "iana", compressible: !0 },
  "application/vnd.omads-email+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/vnd.omads-file+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/vnd.omads-folder+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/vnd.omaloc-supl-init": { source: "iana" },
  "application/vnd.onepager": { source: "iana" },
  "application/vnd.onepagertamp": { source: "iana" },
  "application/vnd.onepagertamx": { source: "iana" },
  "application/vnd.onepagertat": { source: "iana" },
  "application/vnd.onepagertatp": { source: "iana" },
  "application/vnd.onepagertatx": { source: "iana" },
  "application/vnd.onvif.metadata": { source: "iana" },
  "application/vnd.openblox.game+xml": { source: "iana", compressible: !0, extensions: ["obgx"] },
  "application/vnd.openblox.game-binary": { source: "iana" },
  "application/vnd.openeye.oeb": { source: "iana" },
  "application/vnd.openofficeorg.extension": { source: "apache", extensions: ["oxt"] },
  "application/vnd.openstreetmap.data+xml": { source: "iana", compressible: !0, extensions: ["osm"] },
  "application/vnd.opentimestamps.ots": { source: "iana" },
  "application/vnd.openvpi.dspx+json": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawing+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": { source: "iana", compressible: !1, extensions: ["pptx"] },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": { source: "iana", extensions: ["sldx"] },
  "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": { source: "iana", extensions: ["ppsx"] },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.template": { source: "iana", extensions: ["potx"] },
  "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { source: "iana", compressible: !1, extensions: ["xlsx"] },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": { source: "iana", extensions: ["xltx"] },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.theme+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.themeoverride+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.vmldrawing": { source: "iana" },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { source: "iana", compressible: !1, extensions: ["docx"] },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": { source: "iana", extensions: ["dotx"] },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-package.core-properties+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-package.relationships+xml": { source: "iana", compressible: !0 },
  "application/vnd.oracle.resource+json": { source: "iana", compressible: !0 },
  "application/vnd.orange.indata": { source: "iana" },
  "application/vnd.osa.netdeploy": { source: "iana" },
  "application/vnd.osgeo.mapguide.package": { source: "iana", extensions: ["mgp"] },
  "application/vnd.osgi.bundle": { source: "iana" },
  "application/vnd.osgi.dp": { source: "iana", extensions: ["dp"] },
  "application/vnd.osgi.subsystem": { source: "iana", extensions: ["esa"] },
  "application/vnd.otps.ct-kip+xml": { source: "iana", compressible: !0 },
  "application/vnd.oxli.countgraph": { source: "iana" },
  "application/vnd.pagerduty+json": { source: "iana", compressible: !0 },
  "application/vnd.palm": { source: "iana", extensions: ["pdb", "pqa", "oprc"] },
  "application/vnd.panoply": { source: "iana" },
  "application/vnd.paos.xml": { source: "iana" },
  "application/vnd.patentdive": { source: "iana" },
  "application/vnd.patientecommsdoc": { source: "iana" },
  "application/vnd.pawaafile": { source: "iana", extensions: ["paw"] },
  "application/vnd.pcos": { source: "iana" },
  "application/vnd.pg.format": { source: "iana", extensions: ["str"] },
  "application/vnd.pg.osasli": { source: "iana", extensions: ["ei6"] },
  "application/vnd.piaccess.application-licence": { source: "iana" },
  "application/vnd.picsel": { source: "iana", extensions: ["efif"] },
  "application/vnd.pmi.widget": { source: "iana", extensions: ["wg"] },
  "application/vnd.poc.group-advertisement+xml": { source: "iana", compressible: !0 },
  "application/vnd.pocketlearn": { source: "iana", extensions: ["plf"] },
  "application/vnd.powerbuilder6": { source: "iana", extensions: ["pbd"] },
  "application/vnd.powerbuilder6-s": { source: "iana" },
  "application/vnd.powerbuilder7": { source: "iana" },
  "application/vnd.powerbuilder7-s": { source: "iana" },
  "application/vnd.powerbuilder75": { source: "iana" },
  "application/vnd.powerbuilder75-s": { source: "iana" },
  "application/vnd.preminet": { source: "iana" },
  "application/vnd.previewsystems.box": { source: "iana", extensions: ["box"] },
  "application/vnd.procrate.brushset": { extensions: ["brushset"] },
  "application/vnd.procreate.brush": { extensions: ["brush"] },
  "application/vnd.procreate.dream": { extensions: ["drm"] },
  "application/vnd.proteus.magazine": { source: "iana", extensions: ["mgz"] },
  "application/vnd.psfs": { source: "iana" },
  "application/vnd.pt.mundusmundi": { source: "iana" },
  "application/vnd.publishare-delta-tree": { source: "iana", extensions: ["qps"] },
  "application/vnd.pvi.ptid1": { source: "iana", extensions: ["ptid"] },
  "application/vnd.pwg-multiplexed": { source: "iana" },
  "application/vnd.pwg-xhtml-print+xml": { source: "iana", compressible: !0, extensions: ["xhtm"] },
  "application/vnd.qualcomm.brew-app-res": { source: "iana" },
  "application/vnd.quarantainenet": { source: "iana" },
  "application/vnd.quark.quarkxpress": { source: "iana", extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"] },
  "application/vnd.quobject-quoxdocument": { source: "iana" },
  "application/vnd.radisys.moml+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-audit+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-audit-conf+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-audit-conn+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-audit-dialog+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-audit-stream+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-conf+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-base+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-fax-detect+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-group+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-speech+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-transform+xml": { source: "iana", compressible: !0 },
  "application/vnd.rainstor.data": { source: "iana" },
  "application/vnd.rapid": { source: "iana" },
  "application/vnd.rar": { source: "iana", extensions: ["rar"] },
  "application/vnd.realvnc.bed": { source: "iana", extensions: ["bed"] },
  "application/vnd.recordare.musicxml": { source: "iana", extensions: ["mxl"] },
  "application/vnd.recordare.musicxml+xml": { source: "iana", compressible: !0, extensions: ["musicxml"] },
  "application/vnd.relpipe": { source: "iana" },
  "application/vnd.renlearn.rlprint": { source: "iana" },
  "application/vnd.resilient.logic": { source: "iana" },
  "application/vnd.restful+json": { source: "iana", compressible: !0 },
  "application/vnd.rig.cryptonote": { source: "iana", extensions: ["cryptonote"] },
  "application/vnd.rim.cod": { source: "apache", extensions: ["cod"] },
  "application/vnd.rn-realmedia": { source: "apache", extensions: ["rm"] },
  "application/vnd.rn-realmedia-vbr": { source: "apache", extensions: ["rmvb"] },
  "application/vnd.route66.link66+xml": { source: "iana", compressible: !0, extensions: ["link66"] },
  "application/vnd.rs-274x": { source: "iana" },
  "application/vnd.ruckus.download": { source: "iana" },
  "application/vnd.s3sms": { source: "iana" },
  "application/vnd.sailingtracker.track": { source: "iana", extensions: ["st"] },
  "application/vnd.sar": { source: "iana" },
  "application/vnd.sbm.cid": { source: "iana" },
  "application/vnd.sbm.mid2": { source: "iana" },
  "application/vnd.scribus": { source: "iana" },
  "application/vnd.sealed.3df": { source: "iana" },
  "application/vnd.sealed.csf": { source: "iana" },
  "application/vnd.sealed.doc": { source: "iana" },
  "application/vnd.sealed.eml": { source: "iana" },
  "application/vnd.sealed.mht": { source: "iana" },
  "application/vnd.sealed.net": { source: "iana" },
  "application/vnd.sealed.ppt": { source: "iana" },
  "application/vnd.sealed.tiff": { source: "iana" },
  "application/vnd.sealed.xls": { source: "iana" },
  "application/vnd.sealedmedia.softseal.html": { source: "iana" },
  "application/vnd.sealedmedia.softseal.pdf": { source: "iana" },
  "application/vnd.seemail": { source: "iana", extensions: ["see"] },
  "application/vnd.seis+json": { source: "iana", compressible: !0 },
  "application/vnd.sema": { source: "iana", extensions: ["sema"] },
  "application/vnd.semd": { source: "iana", extensions: ["semd"] },
  "application/vnd.semf": { source: "iana", extensions: ["semf"] },
  "application/vnd.shade-save-file": { source: "iana" },
  "application/vnd.shana.informed.formdata": { source: "iana", extensions: ["ifm"] },
  "application/vnd.shana.informed.formtemplate": { source: "iana", extensions: ["itp"] },
  "application/vnd.shana.informed.interchange": { source: "iana", extensions: ["iif"] },
  "application/vnd.shana.informed.package": { source: "iana", extensions: ["ipk"] },
  "application/vnd.shootproof+json": { source: "iana", compressible: !0 },
  "application/vnd.shopkick+json": { source: "iana", compressible: !0 },
  "application/vnd.shp": { source: "iana" },
  "application/vnd.shx": { source: "iana" },
  "application/vnd.sigrok.session": { source: "iana" },
  "application/vnd.simtech-mindmapper": { source: "iana", extensions: ["twd", "twds"] },
  "application/vnd.siren+json": { source: "iana", compressible: !0 },
  "application/vnd.sketchometry": { source: "iana" },
  "application/vnd.smaf": { source: "iana", extensions: ["mmf"] },
  "application/vnd.smart.notebook": { source: "iana" },
  "application/vnd.smart.teacher": { source: "iana", extensions: ["teacher"] },
  "application/vnd.smintio.portals.archive": { source: "iana" },
  "application/vnd.snesdev-page-table": { source: "iana" },
  "application/vnd.software602.filler.form+xml": { source: "iana", compressible: !0, extensions: ["fo"] },
  "application/vnd.software602.filler.form-xml-zip": { source: "iana" },
  "application/vnd.solent.sdkm+xml": { source: "iana", compressible: !0, extensions: ["sdkm", "sdkd"] },
  "application/vnd.spotfire.dxp": { source: "iana", extensions: ["dxp"] },
  "application/vnd.spotfire.sfs": { source: "iana", extensions: ["sfs"] },
  "application/vnd.sqlite3": { source: "iana" },
  "application/vnd.sss-cod": { source: "iana" },
  "application/vnd.sss-dtf": { source: "iana" },
  "application/vnd.sss-ntf": { source: "iana" },
  "application/vnd.stardivision.calc": { source: "apache", extensions: ["sdc"] },
  "application/vnd.stardivision.draw": { source: "apache", extensions: ["sda"] },
  "application/vnd.stardivision.impress": { source: "apache", extensions: ["sdd"] },
  "application/vnd.stardivision.math": { source: "apache", extensions: ["smf"] },
  "application/vnd.stardivision.writer": { source: "apache", extensions: ["sdw", "vor"] },
  "application/vnd.stardivision.writer-global": { source: "apache", extensions: ["sgl"] },
  "application/vnd.stepmania.package": { source: "iana", extensions: ["smzip"] },
  "application/vnd.stepmania.stepchart": { source: "iana", extensions: ["sm"] },
  "application/vnd.street-stream": { source: "iana" },
  "application/vnd.sun.wadl+xml": { source: "iana", compressible: !0, extensions: ["wadl"] },
  "application/vnd.sun.xml.calc": { source: "apache", extensions: ["sxc"] },
  "application/vnd.sun.xml.calc.template": { source: "apache", extensions: ["stc"] },
  "application/vnd.sun.xml.draw": { source: "apache", extensions: ["sxd"] },
  "application/vnd.sun.xml.draw.template": { source: "apache", extensions: ["std"] },
  "application/vnd.sun.xml.impress": { source: "apache", extensions: ["sxi"] },
  "application/vnd.sun.xml.impress.template": { source: "apache", extensions: ["sti"] },
  "application/vnd.sun.xml.math": { source: "apache", extensions: ["sxm"] },
  "application/vnd.sun.xml.writer": { source: "apache", extensions: ["sxw"] },
  "application/vnd.sun.xml.writer.global": { source: "apache", extensions: ["sxg"] },
  "application/vnd.sun.xml.writer.template": { source: "apache", extensions: ["stw"] },
  "application/vnd.sus-calendar": { source: "iana", extensions: ["sus", "susp"] },
  "application/vnd.svd": { source: "iana", extensions: ["svd"] },
  "application/vnd.swiftview-ics": { source: "iana" },
  "application/vnd.sybyl.mol2": { source: "iana" },
  "application/vnd.sycle+xml": { source: "iana", compressible: !0 },
  "application/vnd.syft+json": { source: "iana", compressible: !0 },
  "application/vnd.symbian.install": { source: "apache", extensions: ["sis", "sisx"] },
  "application/vnd.syncml+xml": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["xsm"] },
  "application/vnd.syncml.dm+wbxml": { source: "iana", charset: "UTF-8", extensions: ["bdm"] },
  "application/vnd.syncml.dm+xml": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["xdm"] },
  "application/vnd.syncml.dm.notification": { source: "iana" },
  "application/vnd.syncml.dmddf+wbxml": { source: "iana" },
  "application/vnd.syncml.dmddf+xml": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["ddf"] },
  "application/vnd.syncml.dmtnds+wbxml": { source: "iana" },
  "application/vnd.syncml.dmtnds+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/vnd.syncml.ds.notification": { source: "iana" },
  "application/vnd.tableschema+json": { source: "iana", compressible: !0 },
  "application/vnd.tao.intent-module-archive": { source: "iana", extensions: ["tao"] },
  "application/vnd.tcpdump.pcap": { source: "iana", extensions: ["pcap", "cap", "dmp"] },
  "application/vnd.think-cell.ppttc+json": { source: "iana", compressible: !0 },
  "application/vnd.tmd.mediaflex.api+xml": { source: "iana", compressible: !0 },
  "application/vnd.tml": { source: "iana" },
  "application/vnd.tmobile-livetv": { source: "iana", extensions: ["tmo"] },
  "application/vnd.tri.onesource": { source: "iana" },
  "application/vnd.trid.tpt": { source: "iana", extensions: ["tpt"] },
  "application/vnd.triscape.mxs": { source: "iana", extensions: ["mxs"] },
  "application/vnd.trueapp": { source: "iana", extensions: ["tra"] },
  "application/vnd.truedoc": { source: "iana" },
  "application/vnd.ubisoft.webplayer": { source: "iana" },
  "application/vnd.ufdl": { source: "iana", extensions: ["ufd", "ufdl"] },
  "application/vnd.uic.osdm+json": { source: "iana", compressible: !0 },
  "application/vnd.uiq.theme": { source: "iana", extensions: ["utz"] },
  "application/vnd.umajin": { source: "iana", extensions: ["umj"] },
  "application/vnd.unity": { source: "iana", extensions: ["unityweb"] },
  "application/vnd.uoml+xml": { source: "iana", compressible: !0, extensions: ["uoml", "uo"] },
  "application/vnd.uplanet.alert": { source: "iana" },
  "application/vnd.uplanet.alert-wbxml": { source: "iana" },
  "application/vnd.uplanet.bearer-choice": { source: "iana" },
  "application/vnd.uplanet.bearer-choice-wbxml": { source: "iana" },
  "application/vnd.uplanet.cacheop": { source: "iana" },
  "application/vnd.uplanet.cacheop-wbxml": { source: "iana" },
  "application/vnd.uplanet.channel": { source: "iana" },
  "application/vnd.uplanet.channel-wbxml": { source: "iana" },
  "application/vnd.uplanet.list": { source: "iana" },
  "application/vnd.uplanet.list-wbxml": { source: "iana" },
  "application/vnd.uplanet.listcmd": { source: "iana" },
  "application/vnd.uplanet.listcmd-wbxml": { source: "iana" },
  "application/vnd.uplanet.signal": { source: "iana" },
  "application/vnd.uri-map": { source: "iana" },
  "application/vnd.valve.source.material": { source: "iana" },
  "application/vnd.vcx": { source: "iana", extensions: ["vcx"] },
  "application/vnd.vd-study": { source: "iana" },
  "application/vnd.vectorworks": { source: "iana" },
  "application/vnd.vel+json": { source: "iana", compressible: !0 },
  "application/vnd.veraison.tsm-report+cbor": { source: "iana" },
  "application/vnd.veraison.tsm-report+json": { source: "iana", compressible: !0 },
  "application/vnd.verimatrix.vcas": { source: "iana" },
  "application/vnd.veritone.aion+json": { source: "iana", compressible: !0 },
  "application/vnd.veryant.thin": { source: "iana" },
  "application/vnd.ves.encrypted": { source: "iana" },
  "application/vnd.vidsoft.vidconference": { source: "iana" },
  "application/vnd.visio": { source: "iana", extensions: ["vsd", "vst", "vss", "vsw", "vsdx", "vtx"] },
  "application/vnd.visionary": { source: "iana", extensions: ["vis"] },
  "application/vnd.vividence.scriptfile": { source: "iana" },
  "application/vnd.vocalshaper.vsp4": { source: "iana" },
  "application/vnd.vsf": { source: "iana", extensions: ["vsf"] },
  "application/vnd.wap.sic": { source: "iana" },
  "application/vnd.wap.slc": { source: "iana" },
  "application/vnd.wap.wbxml": { source: "iana", charset: "UTF-8", extensions: ["wbxml"] },
  "application/vnd.wap.wmlc": { source: "iana", extensions: ["wmlc"] },
  "application/vnd.wap.wmlscriptc": { source: "iana", extensions: ["wmlsc"] },
  "application/vnd.wasmflow.wafl": { source: "iana" },
  "application/vnd.webturbo": { source: "iana", extensions: ["wtb"] },
  "application/vnd.wfa.dpp": { source: "iana" },
  "application/vnd.wfa.p2p": { source: "iana" },
  "application/vnd.wfa.wsc": { source: "iana" },
  "application/vnd.windows.devicepairing": { source: "iana" },
  "application/vnd.wmc": { source: "iana" },
  "application/vnd.wmf.bootstrap": { source: "iana" },
  "application/vnd.wolfram.mathematica": { source: "iana" },
  "application/vnd.wolfram.mathematica.package": { source: "iana" },
  "application/vnd.wolfram.player": { source: "iana", extensions: ["nbp"] },
  "application/vnd.wordlift": { source: "iana" },
  "application/vnd.wordperfect": { source: "iana", extensions: ["wpd"] },
  "application/vnd.wqd": { source: "iana", extensions: ["wqd"] },
  "application/vnd.wrq-hp3000-labelled": { source: "iana" },
  "application/vnd.wt.stf": { source: "iana", extensions: ["stf"] },
  "application/vnd.wv.csp+wbxml": { source: "iana" },
  "application/vnd.wv.csp+xml": { source: "iana", compressible: !0 },
  "application/vnd.wv.ssp+xml": { source: "iana", compressible: !0 },
  "application/vnd.xacml+json": { source: "iana", compressible: !0 },
  "application/vnd.xara": { source: "iana", extensions: ["xar"] },
  "application/vnd.xarin.cpj": { source: "iana" },
  "application/vnd.xecrets-encrypted": { source: "iana" },
  "application/vnd.xfdl": { source: "iana", extensions: ["xfdl"] },
  "application/vnd.xfdl.webform": { source: "iana" },
  "application/vnd.xmi+xml": { source: "iana", compressible: !0 },
  "application/vnd.xmpie.cpkg": { source: "iana" },
  "application/vnd.xmpie.dpkg": { source: "iana" },
  "application/vnd.xmpie.plan": { source: "iana" },
  "application/vnd.xmpie.ppkg": { source: "iana" },
  "application/vnd.xmpie.xlim": { source: "iana" },
  "application/vnd.yamaha.hv-dic": { source: "iana", extensions: ["hvd"] },
  "application/vnd.yamaha.hv-script": { source: "iana", extensions: ["hvs"] },
  "application/vnd.yamaha.hv-voice": { source: "iana", extensions: ["hvp"] },
  "application/vnd.yamaha.openscoreformat": { source: "iana", extensions: ["osf"] },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": { source: "iana", compressible: !0, extensions: ["osfpvg"] },
  "application/vnd.yamaha.remote-setup": { source: "iana" },
  "application/vnd.yamaha.smaf-audio": { source: "iana", extensions: ["saf"] },
  "application/vnd.yamaha.smaf-phrase": { source: "iana", extensions: ["spf"] },
  "application/vnd.yamaha.through-ngn": { source: "iana" },
  "application/vnd.yamaha.tunnel-udpencap": { source: "iana" },
  "application/vnd.yaoweme": { source: "iana" },
  "application/vnd.yellowriver-custom-menu": { source: "iana", extensions: ["cmp"] },
  "application/vnd.zul": { source: "iana", extensions: ["zir", "zirz"] },
  "application/vnd.zzazz.deck+xml": { source: "iana", compressible: !0, extensions: ["zaz"] },
  "application/voicexml+xml": { source: "iana", compressible: !0, extensions: ["vxml"] },
  "application/voucher-cms+json": { source: "iana", compressible: !0 },
  "application/voucher-jws+json": { source: "iana", compressible: !0 },
  "application/vp": { source: "iana" },
  "application/vp+cose": { source: "iana" },
  "application/vp+jwt": { source: "iana" },
  "application/vq-rtcpxr": { source: "iana" },
  "application/wasm": { source: "iana", compressible: !0, extensions: ["wasm"] },
  "application/watcherinfo+xml": { source: "iana", compressible: !0, extensions: ["wif"] },
  "application/webpush-options+json": { source: "iana", compressible: !0 },
  "application/whoispp-query": { source: "iana" },
  "application/whoispp-response": { source: "iana" },
  "application/widget": { source: "iana", extensions: ["wgt"] },
  "application/winhlp": { source: "apache", extensions: ["hlp"] },
  "application/wita": { source: "iana" },
  "application/wordperfect5.1": { source: "iana" },
  "application/wsdl+xml": { source: "iana", compressible: !0, extensions: ["wsdl"] },
  "application/wspolicy+xml": { source: "iana", compressible: !0, extensions: ["wspolicy"] },
  "application/x-7z-compressed": { source: "apache", compressible: !1, extensions: ["7z"] },
  "application/x-abiword": { source: "apache", extensions: ["abw"] },
  "application/x-ace-compressed": { source: "apache", extensions: ["ace"] },
  "application/x-amf": { source: "apache" },
  "application/x-apple-diskimage": { source: "apache", extensions: ["dmg"] },
  "application/x-arj": { compressible: !1, extensions: ["arj"] },
  "application/x-authorware-bin": { source: "apache", extensions: ["aab", "x32", "u32", "vox"] },
  "application/x-authorware-map": { source: "apache", extensions: ["aam"] },
  "application/x-authorware-seg": { source: "apache", extensions: ["aas"] },
  "application/x-bcpio": { source: "apache", extensions: ["bcpio"] },
  "application/x-bdoc": { compressible: !1, extensions: ["bdoc"] },
  "application/x-bittorrent": { source: "apache", extensions: ["torrent"] },
  "application/x-blender": { extensions: ["blend"] },
  "application/x-blorb": { source: "apache", extensions: ["blb", "blorb"] },
  "application/x-bzip": { source: "apache", compressible: !1, extensions: ["bz"] },
  "application/x-bzip2": { source: "apache", compressible: !1, extensions: ["bz2", "boz"] },
  "application/x-cbr": { source: "apache", extensions: ["cbr", "cba", "cbt", "cbz", "cb7"] },
  "application/x-cdlink": { source: "apache", extensions: ["vcd"] },
  "application/x-cfs-compressed": { source: "apache", extensions: ["cfs"] },
  "application/x-chat": { source: "apache", extensions: ["chat"] },
  "application/x-chess-pgn": { source: "apache", extensions: ["pgn"] },
  "application/x-chrome-extension": { extensions: ["crx"] },
  "application/x-cocoa": { source: "nginx", extensions: ["cco"] },
  "application/x-compress": { source: "apache" },
  "application/x-compressed": { extensions: ["rar"] },
  "application/x-conference": { source: "apache", extensions: ["nsc"] },
  "application/x-cpio": { source: "apache", extensions: ["cpio"] },
  "application/x-csh": { source: "apache", extensions: ["csh"] },
  "application/x-deb": { compressible: !1 },
  "application/x-debian-package": { source: "apache", extensions: ["deb", "udeb"] },
  "application/x-dgc-compressed": { source: "apache", extensions: ["dgc"] },
  "application/x-director": { source: "apache", extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"] },
  "application/x-doom": { source: "apache", extensions: ["wad"] },
  "application/x-dtbncx+xml": { source: "apache", compressible: !0, extensions: ["ncx"] },
  "application/x-dtbook+xml": { source: "apache", compressible: !0, extensions: ["dtb"] },
  "application/x-dtbresource+xml": { source: "apache", compressible: !0, extensions: ["res"] },
  "application/x-dvi": { source: "apache", compressible: !1, extensions: ["dvi"] },
  "application/x-envoy": { source: "apache", extensions: ["evy"] },
  "application/x-eva": { source: "apache", extensions: ["eva"] },
  "application/x-font-bdf": { source: "apache", extensions: ["bdf"] },
  "application/x-font-dos": { source: "apache" },
  "application/x-font-framemaker": { source: "apache" },
  "application/x-font-ghostscript": { source: "apache", extensions: ["gsf"] },
  "application/x-font-libgrx": { source: "apache" },
  "application/x-font-linux-psf": { source: "apache", extensions: ["psf"] },
  "application/x-font-pcf": { source: "apache", extensions: ["pcf"] },
  "application/x-font-snf": { source: "apache", extensions: ["snf"] },
  "application/x-font-speedo": { source: "apache" },
  "application/x-font-sunos-news": { source: "apache" },
  "application/x-font-type1": { source: "apache", extensions: ["pfa", "pfb", "pfm", "afm"] },
  "application/x-font-vfont": { source: "apache" },
  "application/x-freearc": { source: "apache", extensions: ["arc"] },
  "application/x-futuresplash": { source: "apache", extensions: ["spl"] },
  "application/x-gca-compressed": { source: "apache", extensions: ["gca"] },
  "application/x-glulx": { source: "apache", extensions: ["ulx"] },
  "application/x-gnumeric": { source: "apache", extensions: ["gnumeric"] },
  "application/x-gramps-xml": { source: "apache", extensions: ["gramps"] },
  "application/x-gtar": { source: "apache", extensions: ["gtar"] },
  "application/x-gzip": { source: "apache" },
  "application/x-hdf": { source: "apache", extensions: ["hdf"] },
  "application/x-httpd-php": { compressible: !0, extensions: ["php"] },
  "application/x-install-instructions": { source: "apache", extensions: ["install"] },
  "application/x-ipynb+json": { compressible: !0, extensions: ["ipynb"] },
  "application/x-iso9660-image": { source: "apache", extensions: ["iso"] },
  "application/x-iwork-keynote-sffkey": { extensions: ["key"] },
  "application/x-iwork-numbers-sffnumbers": { extensions: ["numbers"] },
  "application/x-iwork-pages-sffpages": { extensions: ["pages"] },
  "application/x-java-archive-diff": { source: "nginx", extensions: ["jardiff"] },
  "application/x-java-jnlp-file": { source: "apache", compressible: !1, extensions: ["jnlp"] },
  "application/x-javascript": { compressible: !0 },
  "application/x-keepass2": { extensions: ["kdbx"] },
  "application/x-latex": { source: "apache", compressible: !1, extensions: ["latex"] },
  "application/x-lua-bytecode": { extensions: ["luac"] },
  "application/x-lzh-compressed": { source: "apache", extensions: ["lzh", "lha"] },
  "application/x-makeself": { source: "nginx", extensions: ["run"] },
  "application/x-mie": { source: "apache", extensions: ["mie"] },
  "application/x-mobipocket-ebook": { source: "apache", extensions: ["prc", "mobi"] },
  "application/x-mpegurl": { compressible: !1 },
  "application/x-ms-application": { source: "apache", extensions: ["application"] },
  "application/x-ms-shortcut": { source: "apache", extensions: ["lnk"] },
  "application/x-ms-wmd": { source: "apache", extensions: ["wmd"] },
  "application/x-ms-wmz": { source: "apache", extensions: ["wmz"] },
  "application/x-ms-xbap": { source: "apache", extensions: ["xbap"] },
  "application/x-msaccess": { source: "apache", extensions: ["mdb"] },
  "application/x-msbinder": { source: "apache", extensions: ["obd"] },
  "application/x-mscardfile": { source: "apache", extensions: ["crd"] },
  "application/x-msclip": { source: "apache", extensions: ["clp"] },
  "application/x-msdos-program": { extensions: ["exe"] },
  "application/x-msdownload": { source: "apache", extensions: ["exe", "dll", "com", "bat", "msi"] },
  "application/x-msmediaview": { source: "apache", extensions: ["mvb", "m13", "m14"] },
  "application/x-msmetafile": { source: "apache", extensions: ["wmf", "wmz", "emf", "emz"] },
  "application/x-msmoney": { source: "apache", extensions: ["mny"] },
  "application/x-mspublisher": { source: "apache", extensions: ["pub"] },
  "application/x-msschedule": { source: "apache", extensions: ["scd"] },
  "application/x-msterminal": { source: "apache", extensions: ["trm"] },
  "application/x-mswrite": { source: "apache", extensions: ["wri"] },
  "application/x-netcdf": { source: "apache", extensions: ["nc", "cdf"] },
  "application/x-ns-proxy-autoconfig": { compressible: !0, extensions: ["pac"] },
  "application/x-nzb": { source: "apache", extensions: ["nzb"] },
  "application/x-perl": { source: "nginx", extensions: ["pl", "pm"] },
  "application/x-pilot": { source: "nginx", extensions: ["prc", "pdb"] },
  "application/x-pkcs12": { source: "apache", compressible: !1, extensions: ["p12", "pfx"] },
  "application/x-pkcs7-certificates": { source: "apache", extensions: ["p7b", "spc"] },
  "application/x-pkcs7-certreqresp": { source: "apache", extensions: ["p7r"] },
  "application/x-pki-message": { source: "iana" },
  "application/x-rar-compressed": { source: "apache", compressible: !1, extensions: ["rar"] },
  "application/x-redhat-package-manager": { source: "nginx", extensions: ["rpm"] },
  "application/x-research-info-systems": { source: "apache", extensions: ["ris"] },
  "application/x-sea": { source: "nginx", extensions: ["sea"] },
  "application/x-sh": { source: "apache", compressible: !0, extensions: ["sh"] },
  "application/x-shar": { source: "apache", extensions: ["shar"] },
  "application/x-shockwave-flash": { source: "apache", compressible: !1, extensions: ["swf"] },
  "application/x-silverlight-app": { source: "apache", extensions: ["xap"] },
  "application/x-sql": { source: "apache", extensions: ["sql"] },
  "application/x-stuffit": { source: "apache", compressible: !1, extensions: ["sit"] },
  "application/x-stuffitx": { source: "apache", extensions: ["sitx"] },
  "application/x-subrip": { source: "apache", extensions: ["srt"] },
  "application/x-sv4cpio": { source: "apache", extensions: ["sv4cpio"] },
  "application/x-sv4crc": { source: "apache", extensions: ["sv4crc"] },
  "application/x-t3vm-image": { source: "apache", extensions: ["t3"] },
  "application/x-tads": { source: "apache", extensions: ["gam"] },
  "application/x-tar": { source: "apache", compressible: !0, extensions: ["tar"] },
  "application/x-tcl": { source: "apache", extensions: ["tcl", "tk"] },
  "application/x-tex": { source: "apache", extensions: ["tex"] },
  "application/x-tex-tfm": { source: "apache", extensions: ["tfm"] },
  "application/x-texinfo": { source: "apache", extensions: ["texinfo", "texi"] },
  "application/x-tgif": { source: "apache", extensions: ["obj"] },
  "application/x-ustar": { source: "apache", extensions: ["ustar"] },
  "application/x-virtualbox-hdd": { compressible: !0, extensions: ["hdd"] },
  "application/x-virtualbox-ova": { compressible: !0, extensions: ["ova"] },
  "application/x-virtualbox-ovf": { compressible: !0, extensions: ["ovf"] },
  "application/x-virtualbox-vbox": { compressible: !0, extensions: ["vbox"] },
  "application/x-virtualbox-vbox-extpack": { compressible: !1, extensions: ["vbox-extpack"] },
  "application/x-virtualbox-vdi": { compressible: !0, extensions: ["vdi"] },
  "application/x-virtualbox-vhd": { compressible: !0, extensions: ["vhd"] },
  "application/x-virtualbox-vmdk": { compressible: !0, extensions: ["vmdk"] },
  "application/x-wais-source": { source: "apache", extensions: ["src"] },
  "application/x-web-app-manifest+json": { compressible: !0, extensions: ["webapp"] },
  "application/x-www-form-urlencoded": { source: "iana", compressible: !0 },
  "application/x-x509-ca-cert": { source: "iana", extensions: ["der", "crt", "pem"] },
  "application/x-x509-ca-ra-cert": { source: "iana" },
  "application/x-x509-next-ca-cert": { source: "iana" },
  "application/x-xfig": { source: "apache", extensions: ["fig"] },
  "application/x-xliff+xml": { source: "apache", compressible: !0, extensions: ["xlf"] },
  "application/x-xpinstall": { source: "apache", compressible: !1, extensions: ["xpi"] },
  "application/x-xz": { source: "apache", extensions: ["xz"] },
  "application/x-zip-compressed": { extensions: ["zip"] },
  "application/x-zmachine": { source: "apache", extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"] },
  "application/x400-bp": { source: "iana" },
  "application/xacml+xml": { source: "iana", compressible: !0 },
  "application/xaml+xml": { source: "apache", compressible: !0, extensions: ["xaml"] },
  "application/xcap-att+xml": { source: "iana", compressible: !0, extensions: ["xav"] },
  "application/xcap-caps+xml": { source: "iana", compressible: !0, extensions: ["xca"] },
  "application/xcap-diff+xml": { source: "iana", compressible: !0, extensions: ["xdf"] },
  "application/xcap-el+xml": { source: "iana", compressible: !0, extensions: ["xel"] },
  "application/xcap-error+xml": { source: "iana", compressible: !0 },
  "application/xcap-ns+xml": { source: "iana", compressible: !0, extensions: ["xns"] },
  "application/xcon-conference-info+xml": { source: "iana", compressible: !0 },
  "application/xcon-conference-info-diff+xml": { source: "iana", compressible: !0 },
  "application/xenc+xml": { source: "iana", compressible: !0, extensions: ["xenc"] },
  "application/xfdf": { source: "iana", extensions: ["xfdf"] },
  "application/xhtml+xml": { source: "iana", compressible: !0, extensions: ["xhtml", "xht"] },
  "application/xhtml-voice+xml": { source: "apache", compressible: !0 },
  "application/xliff+xml": { source: "iana", compressible: !0, extensions: ["xlf"] },
  "application/xml": { source: "iana", compressible: !0, extensions: ["xml", "xsl", "xsd", "rng"] },
  "application/xml-dtd": { source: "iana", compressible: !0, extensions: ["dtd"] },
  "application/xml-external-parsed-entity": { source: "iana" },
  "application/xml-patch+xml": { source: "iana", compressible: !0 },
  "application/xmpp+xml": { source: "iana", compressible: !0 },
  "application/xop+xml": { source: "iana", compressible: !0, extensions: ["xop"] },
  "application/xproc+xml": { source: "apache", compressible: !0, extensions: ["xpl"] },
  "application/xslt+xml": { source: "iana", compressible: !0, extensions: ["xsl", "xslt"] },
  "application/xspf+xml": { source: "apache", compressible: !0, extensions: ["xspf"] },
  "application/xv+xml": { source: "iana", compressible: !0, extensions: ["mxml", "xhvml", "xvml", "xvm"] },
  "application/yaml": { source: "iana" },
  "application/yang": { source: "iana", extensions: ["yang"] },
  "application/yang-data+cbor": { source: "iana" },
  "application/yang-data+json": { source: "iana", compressible: !0 },
  "application/yang-data+xml": { source: "iana", compressible: !0 },
  "application/yang-patch+json": { source: "iana", compressible: !0 },
  "application/yang-patch+xml": { source: "iana", compressible: !0 },
  "application/yang-sid+json": { source: "iana", compressible: !0 },
  "application/yin+xml": { source: "iana", compressible: !0, extensions: ["yin"] },
  "application/zip": { source: "iana", compressible: !1, extensions: ["zip"] },
  "application/zip+dotlottie": { extensions: ["lottie"] },
  "application/zlib": { source: "iana" },
  "application/zstd": { source: "iana" },
  "audio/1d-interleaved-parityfec": { source: "iana" },
  "audio/32kadpcm": { source: "iana" },
  "audio/3gpp": { source: "iana", compressible: !1, extensions: ["3gpp"] },
  "audio/3gpp2": { source: "iana" },
  "audio/aac": { source: "iana", extensions: ["adts", "aac"] },
  "audio/ac3": { source: "iana" },
  "audio/adpcm": { source: "apache", extensions: ["adp"] },
  "audio/amr": { source: "iana", extensions: ["amr"] },
  "audio/amr-wb": { source: "iana" },
  "audio/amr-wb+": { source: "iana" },
  "audio/aptx": { source: "iana" },
  "audio/asc": { source: "iana" },
  "audio/atrac-advanced-lossless": { source: "iana" },
  "audio/atrac-x": { source: "iana" },
  "audio/atrac3": { source: "iana" },
  "audio/basic": { source: "iana", compressible: !1, extensions: ["au", "snd"] },
  "audio/bv16": { source: "iana" },
  "audio/bv32": { source: "iana" },
  "audio/clearmode": { source: "iana" },
  "audio/cn": { source: "iana" },
  "audio/dat12": { source: "iana" },
  "audio/dls": { source: "iana" },
  "audio/dsr-es201108": { source: "iana" },
  "audio/dsr-es202050": { source: "iana" },
  "audio/dsr-es202211": { source: "iana" },
  "audio/dsr-es202212": { source: "iana" },
  "audio/dv": { source: "iana" },
  "audio/dvi4": { source: "iana" },
  "audio/eac3": { source: "iana" },
  "audio/encaprtp": { source: "iana" },
  "audio/evrc": { source: "iana" },
  "audio/evrc-qcp": { source: "iana" },
  "audio/evrc0": { source: "iana" },
  "audio/evrc1": { source: "iana" },
  "audio/evrcb": { source: "iana" },
  "audio/evrcb0": { source: "iana" },
  "audio/evrcb1": { source: "iana" },
  "audio/evrcnw": { source: "iana" },
  "audio/evrcnw0": { source: "iana" },
  "audio/evrcnw1": { source: "iana" },
  "audio/evrcwb": { source: "iana" },
  "audio/evrcwb0": { source: "iana" },
  "audio/evrcwb1": { source: "iana" },
  "audio/evs": { source: "iana" },
  "audio/flac": { source: "iana" },
  "audio/flexfec": { source: "iana" },
  "audio/fwdred": { source: "iana" },
  "audio/g711-0": { source: "iana" },
  "audio/g719": { source: "iana" },
  "audio/g722": { source: "iana" },
  "audio/g7221": { source: "iana" },
  "audio/g723": { source: "iana" },
  "audio/g726-16": { source: "iana" },
  "audio/g726-24": { source: "iana" },
  "audio/g726-32": { source: "iana" },
  "audio/g726-40": { source: "iana" },
  "audio/g728": { source: "iana" },
  "audio/g729": { source: "iana" },
  "audio/g7291": { source: "iana" },
  "audio/g729d": { source: "iana" },
  "audio/g729e": { source: "iana" },
  "audio/gsm": { source: "iana" },
  "audio/gsm-efr": { source: "iana" },
  "audio/gsm-hr-08": { source: "iana" },
  "audio/ilbc": { source: "iana" },
  "audio/ip-mr_v2.5": { source: "iana" },
  "audio/isac": { source: "apache" },
  "audio/l16": { source: "iana" },
  "audio/l20": { source: "iana" },
  "audio/l24": { source: "iana", compressible: !1 },
  "audio/l8": { source: "iana" },
  "audio/lpc": { source: "iana" },
  "audio/matroska": { source: "iana" },
  "audio/melp": { source: "iana" },
  "audio/melp1200": { source: "iana" },
  "audio/melp2400": { source: "iana" },
  "audio/melp600": { source: "iana" },
  "audio/mhas": { source: "iana" },
  "audio/midi": { source: "apache", extensions: ["mid", "midi", "kar", "rmi"] },
  "audio/midi-clip": { source: "iana" },
  "audio/mobile-xmf": { source: "iana", extensions: ["mxmf"] },
  "audio/mp3": { compressible: !1, extensions: ["mp3"] },
  "audio/mp4": { source: "iana", compressible: !1, extensions: ["m4a", "mp4a", "m4b"] },
  "audio/mp4a-latm": { source: "iana" },
  "audio/mpa": { source: "iana" },
  "audio/mpa-robust": { source: "iana" },
  "audio/mpeg": { source: "iana", compressible: !1, extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"] },
  "audio/mpeg4-generic": { source: "iana" },
  "audio/musepack": { source: "apache" },
  "audio/ogg": { source: "iana", compressible: !1, extensions: ["oga", "ogg", "spx", "opus"] },
  "audio/opus": { source: "iana" },
  "audio/parityfec": { source: "iana" },
  "audio/pcma": { source: "iana" },
  "audio/pcma-wb": { source: "iana" },
  "audio/pcmu": { source: "iana" },
  "audio/pcmu-wb": { source: "iana" },
  "audio/prs.sid": { source: "iana" },
  "audio/qcelp": { source: "iana" },
  "audio/raptorfec": { source: "iana" },
  "audio/red": { source: "iana" },
  "audio/rtp-enc-aescm128": { source: "iana" },
  "audio/rtp-midi": { source: "iana" },
  "audio/rtploopback": { source: "iana" },
  "audio/rtx": { source: "iana" },
  "audio/s3m": { source: "apache", extensions: ["s3m"] },
  "audio/scip": { source: "iana" },
  "audio/silk": { source: "apache", extensions: ["sil"] },
  "audio/smv": { source: "iana" },
  "audio/smv-qcp": { source: "iana" },
  "audio/smv0": { source: "iana" },
  "audio/sofa": { source: "iana" },
  "audio/sp-midi": { source: "iana" },
  "audio/speex": { source: "iana" },
  "audio/t140c": { source: "iana" },
  "audio/t38": { source: "iana" },
  "audio/telephone-event": { source: "iana" },
  "audio/tetra_acelp": { source: "iana" },
  "audio/tetra_acelp_bb": { source: "iana" },
  "audio/tone": { source: "iana" },
  "audio/tsvcis": { source: "iana" },
  "audio/uemclip": { source: "iana" },
  "audio/ulpfec": { source: "iana" },
  "audio/usac": { source: "iana" },
  "audio/vdvi": { source: "iana" },
  "audio/vmr-wb": { source: "iana" },
  "audio/vnd.3gpp.iufp": { source: "iana" },
  "audio/vnd.4sb": { source: "iana" },
  "audio/vnd.audiokoz": { source: "iana" },
  "audio/vnd.celp": { source: "iana" },
  "audio/vnd.cisco.nse": { source: "iana" },
  "audio/vnd.cmles.radio-events": { source: "iana" },
  "audio/vnd.cns.anp1": { source: "iana" },
  "audio/vnd.cns.inf1": { source: "iana" },
  "audio/vnd.dece.audio": { source: "iana", extensions: ["uva", "uvva"] },
  "audio/vnd.digital-winds": { source: "iana", extensions: ["eol"] },
  "audio/vnd.dlna.adts": { source: "iana" },
  "audio/vnd.dolby.heaac.1": { source: "iana" },
  "audio/vnd.dolby.heaac.2": { source: "iana" },
  "audio/vnd.dolby.mlp": { source: "iana" },
  "audio/vnd.dolby.mps": { source: "iana" },
  "audio/vnd.dolby.pl2": { source: "iana" },
  "audio/vnd.dolby.pl2x": { source: "iana" },
  "audio/vnd.dolby.pl2z": { source: "iana" },
  "audio/vnd.dolby.pulse.1": { source: "iana" },
  "audio/vnd.dra": { source: "iana", extensions: ["dra"] },
  "audio/vnd.dts": { source: "iana", extensions: ["dts"] },
  "audio/vnd.dts.hd": { source: "iana", extensions: ["dtshd"] },
  "audio/vnd.dts.uhd": { source: "iana" },
  "audio/vnd.dvb.file": { source: "iana" },
  "audio/vnd.everad.plj": { source: "iana" },
  "audio/vnd.hns.audio": { source: "iana" },
  "audio/vnd.lucent.voice": { source: "iana", extensions: ["lvp"] },
  "audio/vnd.ms-playready.media.pya": { source: "iana", extensions: ["pya"] },
  "audio/vnd.nokia.mobile-xmf": { source: "iana" },
  "audio/vnd.nortel.vbk": { source: "iana" },
  "audio/vnd.nuera.ecelp4800": { source: "iana", extensions: ["ecelp4800"] },
  "audio/vnd.nuera.ecelp7470": { source: "iana", extensions: ["ecelp7470"] },
  "audio/vnd.nuera.ecelp9600": { source: "iana", extensions: ["ecelp9600"] },
  "audio/vnd.octel.sbc": { source: "iana" },
  "audio/vnd.presonus.multitrack": { source: "iana" },
  "audio/vnd.qcelp": { source: "apache" },
  "audio/vnd.rhetorex.32kadpcm": { source: "iana" },
  "audio/vnd.rip": { source: "iana", extensions: ["rip"] },
  "audio/vnd.rn-realaudio": { compressible: !1 },
  "audio/vnd.sealedmedia.softseal.mpeg": { source: "iana" },
  "audio/vnd.vmx.cvsd": { source: "iana" },
  "audio/vnd.wave": { compressible: !1 },
  "audio/vorbis": { source: "iana", compressible: !1 },
  "audio/vorbis-config": { source: "iana" },
  "audio/wav": { compressible: !1, extensions: ["wav"] },
  "audio/wave": { compressible: !1, extensions: ["wav"] },
  "audio/webm": { source: "apache", compressible: !1, extensions: ["weba"] },
  "audio/x-aac": { source: "apache", compressible: !1, extensions: ["aac"] },
  "audio/x-aiff": { source: "apache", extensions: ["aif", "aiff", "aifc"] },
  "audio/x-caf": { source: "apache", compressible: !1, extensions: ["caf"] },
  "audio/x-flac": { source: "apache", extensions: ["flac"] },
  "audio/x-m4a": { source: "nginx", extensions: ["m4a"] },
  "audio/x-matroska": { source: "apache", extensions: ["mka"] },
  "audio/x-mpegurl": { source: "apache", extensions: ["m3u"] },
  "audio/x-ms-wax": { source: "apache", extensions: ["wax"] },
  "audio/x-ms-wma": { source: "apache", extensions: ["wma"] },
  "audio/x-pn-realaudio": { source: "apache", extensions: ["ram", "ra"] },
  "audio/x-pn-realaudio-plugin": { source: "apache", extensions: ["rmp"] },
  "audio/x-realaudio": { source: "nginx", extensions: ["ra"] },
  "audio/x-tta": { source: "apache" },
  "audio/x-wav": { source: "apache", extensions: ["wav"] },
  "audio/xm": { source: "apache", extensions: ["xm"] },
  "chemical/x-cdx": { source: "apache", extensions: ["cdx"] },
  "chemical/x-cif": { source: "apache", extensions: ["cif"] },
  "chemical/x-cmdf": { source: "apache", extensions: ["cmdf"] },
  "chemical/x-cml": { source: "apache", extensions: ["cml"] },
  "chemical/x-csml": { source: "apache", extensions: ["csml"] },
  "chemical/x-pdb": { source: "apache" },
  "chemical/x-xyz": { source: "apache", extensions: ["xyz"] },
  "font/collection": { source: "iana", extensions: ["ttc"] },
  "font/otf": { source: "iana", compressible: !0, extensions: ["otf"] },
  "font/sfnt": { source: "iana" },
  "font/ttf": { source: "iana", compressible: !0, extensions: ["ttf"] },
  "font/woff": { source: "iana", extensions: ["woff"] },
  "font/woff2": { source: "iana", extensions: ["woff2"] },
  "image/aces": { source: "iana", extensions: ["exr"] },
  "image/apng": { source: "iana", compressible: !1, extensions: ["apng"] },
  "image/avci": { source: "iana", extensions: ["avci"] },
  "image/avcs": { source: "iana", extensions: ["avcs"] },
  "image/avif": { source: "iana", compressible: !1, extensions: ["avif"] },
  "image/bmp": { source: "iana", compressible: !0, extensions: ["bmp", "dib"] },
  "image/cgm": { source: "iana", extensions: ["cgm"] },
  "image/dicom-rle": { source: "iana", extensions: ["drle"] },
  "image/dpx": { source: "iana", extensions: ["dpx"] },
  "image/emf": { source: "iana", extensions: ["emf"] },
  "image/fits": { source: "iana", extensions: ["fits"] },
  "image/g3fax": { source: "iana", extensions: ["g3"] },
  "image/gif": { source: "iana", compressible: !1, extensions: ["gif"] },
  "image/heic": { source: "iana", extensions: ["heic"] },
  "image/heic-sequence": { source: "iana", extensions: ["heics"] },
  "image/heif": { source: "iana", extensions: ["heif"] },
  "image/heif-sequence": { source: "iana", extensions: ["heifs"] },
  "image/hej2k": { source: "iana", extensions: ["hej2"] },
  "image/ief": { source: "iana", extensions: ["ief"] },
  "image/j2c": { source: "iana" },
  "image/jaii": { source: "iana", extensions: ["jaii"] },
  "image/jais": { source: "iana", extensions: ["jais"] },
  "image/jls": { source: "iana", extensions: ["jls"] },
  "image/jp2": { source: "iana", compressible: !1, extensions: ["jp2", "jpg2"] },
  "image/jpeg": { source: "iana", compressible: !1, extensions: ["jpg", "jpeg", "jpe"] },
  "image/jph": { source: "iana", extensions: ["jph"] },
  "image/jphc": { source: "iana", extensions: ["jhc"] },
  "image/jpm": { source: "iana", compressible: !1, extensions: ["jpm", "jpgm"] },
  "image/jpx": { source: "iana", compressible: !1, extensions: ["jpx", "jpf"] },
  "image/jxl": { source: "iana", extensions: ["jxl"] },
  "image/jxr": { source: "iana", extensions: ["jxr"] },
  "image/jxra": { source: "iana", extensions: ["jxra"] },
  "image/jxrs": { source: "iana", extensions: ["jxrs"] },
  "image/jxs": { source: "iana", extensions: ["jxs"] },
  "image/jxsc": { source: "iana", extensions: ["jxsc"] },
  "image/jxsi": { source: "iana", extensions: ["jxsi"] },
  "image/jxss": { source: "iana", extensions: ["jxss"] },
  "image/ktx": { source: "iana", extensions: ["ktx"] },
  "image/ktx2": { source: "iana", extensions: ["ktx2"] },
  "image/naplps": { source: "iana" },
  "image/pjpeg": { compressible: !1, extensions: ["jfif"] },
  "image/png": { source: "iana", compressible: !1, extensions: ["png"] },
  "image/prs.btif": { source: "iana", extensions: ["btif", "btf"] },
  "image/prs.pti": { source: "iana", extensions: ["pti"] },
  "image/pwg-raster": { source: "iana" },
  "image/sgi": { source: "apache", extensions: ["sgi"] },
  "image/svg+xml": { source: "iana", compressible: !0, extensions: ["svg", "svgz"] },
  "image/t38": { source: "iana", extensions: ["t38"] },
  "image/tiff": { source: "iana", compressible: !1, extensions: ["tif", "tiff"] },
  "image/tiff-fx": { source: "iana", extensions: ["tfx"] },
  "image/vnd.adobe.photoshop": { source: "iana", compressible: !0, extensions: ["psd"] },
  "image/vnd.airzip.accelerator.azv": { source: "iana", extensions: ["azv"] },
  "image/vnd.clip": { source: "iana" },
  "image/vnd.cns.inf2": { source: "iana" },
  "image/vnd.dece.graphic": { source: "iana", extensions: ["uvi", "uvvi", "uvg", "uvvg"] },
  "image/vnd.djvu": { source: "iana", extensions: ["djvu", "djv"] },
  "image/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
  "image/vnd.dwg": { source: "iana", extensions: ["dwg"] },
  "image/vnd.dxf": { source: "iana", extensions: ["dxf"] },
  "image/vnd.fastbidsheet": { source: "iana", extensions: ["fbs"] },
  "image/vnd.fpx": { source: "iana", extensions: ["fpx"] },
  "image/vnd.fst": { source: "iana", extensions: ["fst"] },
  "image/vnd.fujixerox.edmics-mmr": { source: "iana", extensions: ["mmr"] },
  "image/vnd.fujixerox.edmics-rlc": { source: "iana", extensions: ["rlc"] },
  "image/vnd.globalgraphics.pgb": { source: "iana" },
  "image/vnd.microsoft.icon": { source: "iana", compressible: !0, extensions: ["ico"] },
  "image/vnd.mix": { source: "iana" },
  "image/vnd.mozilla.apng": { source: "iana" },
  "image/vnd.ms-dds": { compressible: !0, extensions: ["dds"] },
  "image/vnd.ms-modi": { source: "iana", extensions: ["mdi"] },
  "image/vnd.ms-photo": { source: "apache", extensions: ["wdp"] },
  "image/vnd.net-fpx": { source: "iana", extensions: ["npx"] },
  "image/vnd.pco.b16": { source: "iana", extensions: ["b16"] },
  "image/vnd.radiance": { source: "iana" },
  "image/vnd.sealed.png": { source: "iana" },
  "image/vnd.sealedmedia.softseal.gif": { source: "iana" },
  "image/vnd.sealedmedia.softseal.jpg": { source: "iana" },
  "image/vnd.svf": { source: "iana" },
  "image/vnd.tencent.tap": { source: "iana", extensions: ["tap"] },
  "image/vnd.valve.source.texture": { source: "iana", extensions: ["vtf"] },
  "image/vnd.wap.wbmp": { source: "iana", extensions: ["wbmp"] },
  "image/vnd.xiff": { source: "iana", extensions: ["xif"] },
  "image/vnd.zbrush.pcx": { source: "iana", extensions: ["pcx"] },
  "image/webp": { source: "iana", extensions: ["webp"] },
  "image/wmf": { source: "iana", extensions: ["wmf"] },
  "image/x-3ds": { source: "apache", extensions: ["3ds"] },
  "image/x-adobe-dng": { extensions: ["dng"] },
  "image/x-cmu-raster": { source: "apache", extensions: ["ras"] },
  "image/x-cmx": { source: "apache", extensions: ["cmx"] },
  "image/x-emf": { source: "iana" },
  "image/x-freehand": { source: "apache", extensions: ["fh", "fhc", "fh4", "fh5", "fh7"] },
  "image/x-icon": { source: "apache", compressible: !0, extensions: ["ico"] },
  "image/x-jng": { source: "nginx", extensions: ["jng"] },
  "image/x-mrsid-image": { source: "apache", extensions: ["sid"] },
  "image/x-ms-bmp": { source: "nginx", compressible: !0, extensions: ["bmp"] },
  "image/x-pcx": { source: "apache", extensions: ["pcx"] },
  "image/x-pict": { source: "apache", extensions: ["pic", "pct"] },
  "image/x-portable-anymap": { source: "apache", extensions: ["pnm"] },
  "image/x-portable-bitmap": { source: "apache", extensions: ["pbm"] },
  "image/x-portable-graymap": { source: "apache", extensions: ["pgm"] },
  "image/x-portable-pixmap": { source: "apache", extensions: ["ppm"] },
  "image/x-rgb": { source: "apache", extensions: ["rgb"] },
  "image/x-tga": { source: "apache", extensions: ["tga"] },
  "image/x-wmf": { source: "iana" },
  "image/x-xbitmap": { source: "apache", extensions: ["xbm"] },
  "image/x-xcf": { compressible: !1 },
  "image/x-xpixmap": { source: "apache", extensions: ["xpm"] },
  "image/x-xwindowdump": { source: "apache", extensions: ["xwd"] },
  "message/bhttp": { source: "iana" },
  "message/cpim": { source: "iana" },
  "message/delivery-status": { source: "iana" },
  "message/disposition-notification": { source: "iana", extensions: ["disposition-notification"] },
  "message/external-body": { source: "iana" },
  "message/feedback-report": { source: "iana" },
  "message/global": { source: "iana", extensions: ["u8msg"] },
  "message/global-delivery-status": { source: "iana", extensions: ["u8dsn"] },
  "message/global-disposition-notification": { source: "iana", extensions: ["u8mdn"] },
  "message/global-headers": { source: "iana", extensions: ["u8hdr"] },
  "message/http": { source: "iana", compressible: !1 },
  "message/imdn+xml": { source: "iana", compressible: !0 },
  "message/mls": { source: "iana" },
  "message/news": { source: "apache" },
  "message/ohttp-req": { source: "iana" },
  "message/ohttp-res": { source: "iana" },
  "message/partial": { source: "iana", compressible: !1 },
  "message/rfc822": { source: "iana", compressible: !0, extensions: ["eml", "mime", "mht", "mhtml"] },
  "message/s-http": { source: "apache" },
  "message/sip": { source: "iana" },
  "message/sipfrag": { source: "iana" },
  "message/tracking-status": { source: "iana" },
  "message/vnd.si.simp": { source: "apache" },
  "message/vnd.wfa.wsc": { source: "iana", extensions: ["wsc"] },
  "model/3mf": { source: "iana", extensions: ["3mf"] },
  "model/e57": { source: "iana" },
  "model/gltf+json": { source: "iana", compressible: !0, extensions: ["gltf"] },
  "model/gltf-binary": { source: "iana", compressible: !0, extensions: ["glb"] },
  "model/iges": { source: "iana", compressible: !1, extensions: ["igs", "iges"] },
  "model/jt": { source: "iana", extensions: ["jt"] },
  "model/mesh": { source: "iana", compressible: !1, extensions: ["msh", "mesh", "silo"] },
  "model/mtl": { source: "iana", extensions: ["mtl"] },
  "model/obj": { source: "iana", extensions: ["obj"] },
  "model/prc": { source: "iana", extensions: ["prc"] },
  "model/step": { source: "iana", extensions: ["step", "stp", "stpnc", "p21", "210"] },
  "model/step+xml": { source: "iana", compressible: !0, extensions: ["stpx"] },
  "model/step+zip": { source: "iana", compressible: !1, extensions: ["stpz"] },
  "model/step-xml+zip": { source: "iana", compressible: !1, extensions: ["stpxz"] },
  "model/stl": { source: "iana", extensions: ["stl"] },
  "model/u3d": { source: "iana", extensions: ["u3d"] },
  "model/vnd.bary": { source: "iana", extensions: ["bary"] },
  "model/vnd.cld": { source: "iana", extensions: ["cld"] },
  "model/vnd.collada+xml": { source: "iana", compressible: !0, extensions: ["dae"] },
  "model/vnd.dwf": { source: "iana", extensions: ["dwf"] },
  "model/vnd.flatland.3dml": { source: "iana" },
  "model/vnd.gdl": { source: "iana", extensions: ["gdl"] },
  "model/vnd.gs-gdl": { source: "apache" },
  "model/vnd.gs.gdl": { source: "iana" },
  "model/vnd.gtw": { source: "iana", extensions: ["gtw"] },
  "model/vnd.moml+xml": { source: "iana", compressible: !0 },
  "model/vnd.mts": { source: "iana", extensions: ["mts"] },
  "model/vnd.opengex": { source: "iana", extensions: ["ogex"] },
  "model/vnd.parasolid.transmit.binary": { source: "iana", extensions: ["x_b"] },
  "model/vnd.parasolid.transmit.text": { source: "iana", extensions: ["x_t"] },
  "model/vnd.pytha.pyox": { source: "iana", extensions: ["pyo", "pyox"] },
  "model/vnd.rosette.annotated-data-model": { source: "iana" },
  "model/vnd.sap.vds": { source: "iana", extensions: ["vds"] },
  "model/vnd.usda": { source: "iana", extensions: ["usda"] },
  "model/vnd.usdz+zip": { source: "iana", compressible: !1, extensions: ["usdz"] },
  "model/vnd.valve.source.compiled-map": { source: "iana", extensions: ["bsp"] },
  "model/vnd.vtu": { source: "iana", extensions: ["vtu"] },
  "model/vrml": { source: "iana", compressible: !1, extensions: ["wrl", "vrml"] },
  "model/x3d+binary": { source: "apache", compressible: !1, extensions: ["x3db", "x3dbz"] },
  "model/x3d+fastinfoset": { source: "iana", extensions: ["x3db"] },
  "model/x3d+vrml": { source: "apache", compressible: !1, extensions: ["x3dv", "x3dvz"] },
  "model/x3d+xml": { source: "iana", compressible: !0, extensions: ["x3d", "x3dz"] },
  "model/x3d-vrml": { source: "iana", extensions: ["x3dv"] },
  "multipart/alternative": { source: "iana", compressible: !1 },
  "multipart/appledouble": { source: "iana" },
  "multipart/byteranges": { source: "iana" },
  "multipart/digest": { source: "iana" },
  "multipart/encrypted": { source: "iana", compressible: !1 },
  "multipart/form-data": { source: "iana", compressible: !1 },
  "multipart/header-set": { source: "iana" },
  "multipart/mixed": { source: "iana" },
  "multipart/multilingual": { source: "iana" },
  "multipart/parallel": { source: "iana" },
  "multipart/related": { source: "iana", compressible: !1 },
  "multipart/report": { source: "iana" },
  "multipart/signed": { source: "iana", compressible: !1 },
  "multipart/vnd.bint.med-plus": { source: "iana" },
  "multipart/voice-message": { source: "iana" },
  "multipart/x-mixed-replace": { source: "iana" },
  "text/1d-interleaved-parityfec": { source: "iana" },
  "text/cache-manifest": { source: "iana", compressible: !0, extensions: ["appcache", "manifest"] },
  "text/calendar": { source: "iana", extensions: ["ics", "ifb"] },
  "text/calender": { compressible: !0 },
  "text/cmd": { compressible: !0 },
  "text/coffeescript": { extensions: ["coffee", "litcoffee"] },
  "text/cql": { source: "iana" },
  "text/cql-expression": { source: "iana" },
  "text/cql-identifier": { source: "iana" },
  "text/css": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["css"] },
  "text/csv": { source: "iana", compressible: !0, extensions: ["csv"] },
  "text/csv-schema": { source: "iana" },
  "text/directory": { source: "iana" },
  "text/dns": { source: "iana" },
  "text/ecmascript": { source: "apache" },
  "text/encaprtp": { source: "iana" },
  "text/enriched": { source: "iana" },
  "text/fhirpath": { source: "iana" },
  "text/flexfec": { source: "iana" },
  "text/fwdred": { source: "iana" },
  "text/gff3": { source: "iana" },
  "text/grammar-ref-list": { source: "iana" },
  "text/hl7v2": { source: "iana" },
  "text/html": { source: "iana", compressible: !0, extensions: ["html", "htm", "shtml"] },
  "text/jade": { extensions: ["jade"] },
  "text/javascript": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["js", "mjs"] },
  "text/jcr-cnd": { source: "iana" },
  "text/jsx": { compressible: !0, extensions: ["jsx"] },
  "text/less": { compressible: !0, extensions: ["less"] },
  "text/markdown": { source: "iana", compressible: !0, extensions: ["md", "markdown"] },
  "text/mathml": { source: "nginx", extensions: ["mml"] },
  "text/mdx": { compressible: !0, extensions: ["mdx"] },
  "text/mizar": { source: "iana" },
  "text/n3": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["n3"] },
  "text/parameters": { source: "iana", charset: "UTF-8" },
  "text/parityfec": { source: "iana" },
  "text/plain": { source: "iana", compressible: !0, extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"] },
  "text/provenance-notation": { source: "iana", charset: "UTF-8" },
  "text/prs.fallenstein.rst": { source: "iana" },
  "text/prs.lines.tag": { source: "iana", extensions: ["dsc"] },
  "text/prs.prop.logic": { source: "iana" },
  "text/prs.texi": { source: "iana" },
  "text/raptorfec": { source: "iana" },
  "text/red": { source: "iana" },
  "text/rfc822-headers": { source: "iana" },
  "text/richtext": { source: "iana", compressible: !0, extensions: ["rtx"] },
  "text/rtf": { source: "iana", compressible: !0, extensions: ["rtf"] },
  "text/rtp-enc-aescm128": { source: "iana" },
  "text/rtploopback": { source: "iana" },
  "text/rtx": { source: "iana" },
  "text/sgml": { source: "iana", extensions: ["sgml", "sgm"] },
  "text/shaclc": { source: "iana" },
  "text/shex": { source: "iana", extensions: ["shex"] },
  "text/slim": { extensions: ["slim", "slm"] },
  "text/spdx": { source: "iana", extensions: ["spdx"] },
  "text/strings": { source: "iana" },
  "text/stylus": { extensions: ["stylus", "styl"] },
  "text/t140": { source: "iana" },
  "text/tab-separated-values": { source: "iana", compressible: !0, extensions: ["tsv"] },
  "text/troff": { source: "iana", extensions: ["t", "tr", "roff", "man", "me", "ms"] },
  "text/turtle": { source: "iana", charset: "UTF-8", extensions: ["ttl"] },
  "text/ulpfec": { source: "iana" },
  "text/uri-list": { source: "iana", compressible: !0, extensions: ["uri", "uris", "urls"] },
  "text/vcard": { source: "iana", compressible: !0, extensions: ["vcard"] },
  "text/vnd.a": { source: "iana" },
  "text/vnd.abc": { source: "iana" },
  "text/vnd.ascii-art": { source: "iana" },
  "text/vnd.curl": { source: "iana", extensions: ["curl"] },
  "text/vnd.curl.dcurl": { source: "apache", extensions: ["dcurl"] },
  "text/vnd.curl.mcurl": { source: "apache", extensions: ["mcurl"] },
  "text/vnd.curl.scurl": { source: "apache", extensions: ["scurl"] },
  "text/vnd.debian.copyright": { source: "iana", charset: "UTF-8" },
  "text/vnd.dmclientscript": { source: "iana" },
  "text/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
  "text/vnd.esmertec.theme-descriptor": { source: "iana", charset: "UTF-8" },
  "text/vnd.exchangeable": { source: "iana" },
  "text/vnd.familysearch.gedcom": { source: "iana", extensions: ["ged"] },
  "text/vnd.ficlab.flt": { source: "iana" },
  "text/vnd.fly": { source: "iana", extensions: ["fly"] },
  "text/vnd.fmi.flexstor": { source: "iana", extensions: ["flx"] },
  "text/vnd.gml": { source: "iana" },
  "text/vnd.graphviz": { source: "iana", extensions: ["gv"] },
  "text/vnd.hans": { source: "iana" },
  "text/vnd.hgl": { source: "iana" },
  "text/vnd.in3d.3dml": { source: "iana", extensions: ["3dml"] },
  "text/vnd.in3d.spot": { source: "iana", extensions: ["spot"] },
  "text/vnd.iptc.newsml": { source: "iana" },
  "text/vnd.iptc.nitf": { source: "iana" },
  "text/vnd.latex-z": { source: "iana" },
  "text/vnd.motorola.reflex": { source: "iana" },
  "text/vnd.ms-mediapackage": { source: "iana" },
  "text/vnd.net2phone.commcenter.command": { source: "iana" },
  "text/vnd.radisys.msml-basic-layout": { source: "iana" },
  "text/vnd.senx.warpscript": { source: "iana" },
  "text/vnd.si.uricatalogue": { source: "apache" },
  "text/vnd.sosi": { source: "iana" },
  "text/vnd.sun.j2me.app-descriptor": { source: "iana", charset: "UTF-8", extensions: ["jad"] },
  "text/vnd.trolltech.linguist": { source: "iana", charset: "UTF-8" },
  "text/vnd.vcf": { source: "iana" },
  "text/vnd.wap.si": { source: "iana" },
  "text/vnd.wap.sl": { source: "iana" },
  "text/vnd.wap.wml": { source: "iana", extensions: ["wml"] },
  "text/vnd.wap.wmlscript": { source: "iana", extensions: ["wmls"] },
  "text/vnd.zoo.kcl": { source: "iana" },
  "text/vtt": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["vtt"] },
  "text/wgsl": { source: "iana", extensions: ["wgsl"] },
  "text/x-asm": { source: "apache", extensions: ["s", "asm"] },
  "text/x-c": { source: "apache", extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"] },
  "text/x-component": { source: "nginx", extensions: ["htc"] },
  "text/x-fortran": { source: "apache", extensions: ["f", "for", "f77", "f90"] },
  "text/x-gwt-rpc": { compressible: !0 },
  "text/x-handlebars-template": { extensions: ["hbs"] },
  "text/x-java-source": { source: "apache", extensions: ["java"] },
  "text/x-jquery-tmpl": { compressible: !0 },
  "text/x-lua": { extensions: ["lua"] },
  "text/x-markdown": { compressible: !0, extensions: ["mkd"] },
  "text/x-nfo": { source: "apache", extensions: ["nfo"] },
  "text/x-opml": { source: "apache", extensions: ["opml"] },
  "text/x-org": { compressible: !0, extensions: ["org"] },
  "text/x-pascal": { source: "apache", extensions: ["p", "pas"] },
  "text/x-processing": { compressible: !0, extensions: ["pde"] },
  "text/x-sass": { extensions: ["sass"] },
  "text/x-scss": { extensions: ["scss"] },
  "text/x-setext": { source: "apache", extensions: ["etx"] },
  "text/x-sfv": { source: "apache", extensions: ["sfv"] },
  "text/x-suse-ymp": { compressible: !0, extensions: ["ymp"] },
  "text/x-uuencode": { source: "apache", extensions: ["uu"] },
  "text/x-vcalendar": { source: "apache", extensions: ["vcs"] },
  "text/x-vcard": { source: "apache", extensions: ["vcf"] },
  "text/xml": { source: "iana", compressible: !0, extensions: ["xml"] },
  "text/xml-external-parsed-entity": { source: "iana" },
  "text/yaml": { compressible: !0, extensions: ["yaml", "yml"] },
  "video/1d-interleaved-parityfec": { source: "iana" },
  "video/3gpp": { source: "iana", extensions: ["3gp", "3gpp"] },
  "video/3gpp-tt": { source: "iana" },
  "video/3gpp2": { source: "iana", extensions: ["3g2"] },
  "video/av1": { source: "iana" },
  "video/bmpeg": { source: "iana" },
  "video/bt656": { source: "iana" },
  "video/celb": { source: "iana" },
  "video/dv": { source: "iana" },
  "video/encaprtp": { source: "iana" },
  "video/evc": { source: "iana" },
  "video/ffv1": { source: "iana" },
  "video/flexfec": { source: "iana" },
  "video/h261": { source: "iana", extensions: ["h261"] },
  "video/h263": { source: "iana", extensions: ["h263"] },
  "video/h263-1998": { source: "iana" },
  "video/h263-2000": { source: "iana" },
  "video/h264": { source: "iana", extensions: ["h264"] },
  "video/h264-rcdo": { source: "iana" },
  "video/h264-svc": { source: "iana" },
  "video/h265": { source: "iana" },
  "video/h266": { source: "iana" },
  "video/iso.segment": { source: "iana", extensions: ["m4s"] },
  "video/jpeg": { source: "iana", extensions: ["jpgv"] },
  "video/jpeg2000": { source: "iana" },
  "video/jpm": { source: "apache", extensions: ["jpm", "jpgm"] },
  "video/jxsv": { source: "iana" },
  "video/lottie+json": { source: "iana", compressible: !0 },
  "video/matroska": { source: "iana" },
  "video/matroska-3d": { source: "iana" },
  "video/mj2": { source: "iana", extensions: ["mj2", "mjp2"] },
  "video/mp1s": { source: "iana" },
  "video/mp2p": { source: "iana" },
  "video/mp2t": { source: "iana", extensions: ["ts", "m2t", "m2ts", "mts"] },
  "video/mp4": { source: "iana", compressible: !1, extensions: ["mp4", "mp4v", "mpg4"] },
  "video/mp4v-es": { source: "iana" },
  "video/mpeg": { source: "iana", compressible: !1, extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"] },
  "video/mpeg4-generic": { source: "iana" },
  "video/mpv": { source: "iana" },
  "video/nv": { source: "iana" },
  "video/ogg": { source: "iana", compressible: !1, extensions: ["ogv"] },
  "video/parityfec": { source: "iana" },
  "video/pointer": { source: "iana" },
  "video/quicktime": { source: "iana", compressible: !1, extensions: ["qt", "mov"] },
  "video/raptorfec": { source: "iana" },
  "video/raw": { source: "iana" },
  "video/rtp-enc-aescm128": { source: "iana" },
  "video/rtploopback": { source: "iana" },
  "video/rtx": { source: "iana" },
  "video/scip": { source: "iana" },
  "video/smpte291": { source: "iana" },
  "video/smpte292m": { source: "iana" },
  "video/ulpfec": { source: "iana" },
  "video/vc1": { source: "iana" },
  "video/vc2": { source: "iana" },
  "video/vnd.cctv": { source: "iana" },
  "video/vnd.dece.hd": { source: "iana", extensions: ["uvh", "uvvh"] },
  "video/vnd.dece.mobile": { source: "iana", extensions: ["uvm", "uvvm"] },
  "video/vnd.dece.mp4": { source: "iana" },
  "video/vnd.dece.pd": { source: "iana", extensions: ["uvp", "uvvp"] },
  "video/vnd.dece.sd": { source: "iana", extensions: ["uvs", "uvvs"] },
  "video/vnd.dece.video": { source: "iana", extensions: ["uvv", "uvvv"] },
  "video/vnd.directv.mpeg": { source: "iana" },
  "video/vnd.directv.mpeg-tts": { source: "iana" },
  "video/vnd.dlna.mpeg-tts": { source: "iana" },
  "video/vnd.dvb.file": { source: "iana", extensions: ["dvb"] },
  "video/vnd.fvt": { source: "iana", extensions: ["fvt"] },
  "video/vnd.hns.video": { source: "iana" },
  "video/vnd.iptvforum.1dparityfec-1010": { source: "iana" },
  "video/vnd.iptvforum.1dparityfec-2005": { source: "iana" },
  "video/vnd.iptvforum.2dparityfec-1010": { source: "iana" },
  "video/vnd.iptvforum.2dparityfec-2005": { source: "iana" },
  "video/vnd.iptvforum.ttsavc": { source: "iana" },
  "video/vnd.iptvforum.ttsmpeg2": { source: "iana" },
  "video/vnd.motorola.video": { source: "iana" },
  "video/vnd.motorola.videop": { source: "iana" },
  "video/vnd.mpegurl": { source: "iana", extensions: ["mxu", "m4u"] },
  "video/vnd.ms-playready.media.pyv": { source: "iana", extensions: ["pyv"] },
  "video/vnd.nokia.interleaved-multimedia": { source: "iana" },
  "video/vnd.nokia.mp4vr": { source: "iana" },
  "video/vnd.nokia.videovoip": { source: "iana" },
  "video/vnd.objectvideo": { source: "iana" },
  "video/vnd.planar": { source: "iana" },
  "video/vnd.radgamettools.bink": { source: "iana" },
  "video/vnd.radgamettools.smacker": { source: "apache" },
  "video/vnd.sealed.mpeg1": { source: "iana" },
  "video/vnd.sealed.mpeg4": { source: "iana" },
  "video/vnd.sealed.swf": { source: "iana" },
  "video/vnd.sealedmedia.softseal.mov": { source: "iana" },
  "video/vnd.uvvu.mp4": { source: "iana", extensions: ["uvu", "uvvu"] },
  "video/vnd.vivo": { source: "iana", extensions: ["viv"] },
  "video/vnd.youtube.yt": { source: "iana" },
  "video/vp8": { source: "iana" },
  "video/vp9": { source: "iana" },
  "video/webm": { source: "apache", compressible: !1, extensions: ["webm"] },
  "video/x-f4v": { source: "apache", extensions: ["f4v"] },
  "video/x-fli": { source: "apache", extensions: ["fli"] },
  "video/x-flv": { source: "apache", compressible: !1, extensions: ["flv"] },
  "video/x-m4v": { source: "apache", extensions: ["m4v"] },
  "video/x-matroska": { source: "apache", compressible: !1, extensions: ["mkv", "mk3d", "mks"] },
  "video/x-mng": { source: "apache", extensions: ["mng"] },
  "video/x-ms-asf": { source: "apache", extensions: ["asf", "asx"] },
  "video/x-ms-vob": { source: "apache", extensions: ["vob"] },
  "video/x-ms-wm": { source: "apache", extensions: ["wm"] },
  "video/x-ms-wmv": { source: "apache", compressible: !1, extensions: ["wmv"] },
  "video/x-ms-wmx": { source: "apache", extensions: ["wmx"] },
  "video/x-ms-wvx": { source: "apache", extensions: ["wvx"] },
  "video/x-msvideo": { source: "apache", extensions: ["avi"] },
  "video/x-sgi-movie": { source: "apache", extensions: ["movie"] },
  "video/x-smv": { source: "apache", extensions: ["smv"] },
  "x-conference/x-cooltalk": { source: "apache", extensions: ["ice"] },
  "x-shader/x-fragment": { compressible: !0 },
  "x-shader/x-vertex": { compressible: !0 }
};
var Se, oa;
function Cn() {
  return oa || (oa = 1, Se = qn), Se;
}
var Oe, ta;
function Fn() {
  if (ta) return Oe;
  ta = 1;
  var a = {
    "prs.": 100,
    "x-": 200,
    "x.": 300,
    "vnd.": 400,
    default: 900
  }, e = {
    nginx: 10,
    apache: 20,
    iana: 40,
    default: 30
    // definitions added by `jshttp/mime-db` project?
  }, i = {
    // prefer application/xml over text/xml
    // prefer application/rtf over text/rtf
    application: 1,
    // prefer font/woff over application/font-woff
    font: 2,
    // prefer video/mp4 over audio/mp4 over application/mp4
    // See https://www.rfc-editor.org/rfc/rfc4337.html#section-2
    audio: 2,
    video: 3,
    default: 0
  };
  return Oe = function(s, o = "default") {
    if (s === "application/octet-stream")
      return 0;
    const [t, r] = s.split("/"), p = r.replace(/(\.|x-).*/, "$1"), u = a[p] || a.default, l = e[o] || e.default, h = i[t] || i.default, w = 1 - s.length / 100;
    return u + l + h + w;
  }, Oe;
}
var ca;
function Pn() {
  return ca || (ca = 1, (function(a) {
    var e = Cn(), i = Ua.extname, n = Fn(), s = /^\s*([^;\s]*)(?:;|\s|$)/, o = /^text\//i;
    a.charset = t, a.charsets = { lookup: t }, a.contentType = r, a.extension = p, a.extensions = /* @__PURE__ */ Object.create(null), a.lookup = u, a.types = /* @__PURE__ */ Object.create(null), a._extensionConflicts = [], l(a.extensions, a.types);
    function t(b) {
      if (!b || typeof b != "string")
        return !1;
      var x = s.exec(b), d = x && e[x[1].toLowerCase()];
      return d && d.charset ? d.charset : x && o.test(x[1]) ? "UTF-8" : !1;
    }
    function r(b) {
      if (!b || typeof b != "string")
        return !1;
      var x = b.indexOf("/") === -1 ? a.lookup(b) : b;
      if (!x)
        return !1;
      if (x.indexOf("charset") === -1) {
        var d = a.charset(x);
        d && (x += "; charset=" + d.toLowerCase());
      }
      return x;
    }
    function p(b) {
      if (!b || typeof b != "string")
        return !1;
      var x = s.exec(b), d = x && a.extensions[x[1].toLowerCase()];
      return !d || !d.length ? !1 : d[0];
    }
    function u(b) {
      if (!b || typeof b != "string")
        return !1;
      var x = i("x." + b).toLowerCase().slice(1);
      return x && a.types[x] || !1;
    }
    function l(b, x) {
      Object.keys(e).forEach(function(m) {
        var f = e[m], y = f.extensions;
        if (!(!y || !y.length)) {
          b[m] = y;
          for (var j = 0; j < y.length; j++) {
            var g = y[j];
            x[g] = h(g, x[g], m);
            const O = w(
              g,
              x[g],
              m
            );
            O !== x[g] && a._extensionConflicts.push([g, O, x[g]]);
          }
        }
      });
    }
    function h(b, x, d) {
      var m = x ? n(x, e[x].source) : 0, f = d ? n(d, e[d].source) : 0;
      return m > f ? x : d;
    }
    function w(b, x, d) {
      var m = ["nginx", "apache", void 0, "iana"], f = x ? m.indexOf(e[x].source) : 0, y = d ? m.indexOf(e[d].source) : 0;
      return a.types[p] !== "application/octet-stream" && (f > y || f === y && a.types[p]?.slice(0, 12) === "application/") || f > y ? x : d;
    }
  })(Re)), Re;
}
var Un = Pn();
class za {
  constructor(e) {
    this.filepath = e;
    const i = Un.lookup(this.filepath);
    this.mimetype = typeof i == "string" ? i : "application/octet-stream", this.filename = Na(this.filepath), this.fileblob = "";
  }
  setFileBlob(e) {
    return this.fileblob = e, this;
  }
  /**
   * Get the base64 encoded file content
   * @returns Promise<string>
   */
  async readFileBlob() {
    return this.fileblob != "" ? this : (this.fileblob = await Pa(this.filepath, { encoding: "base64" }).catch((e) => {
      throw e;
    }), this);
  }
  forSend() {
    return {
      filename: this.filename,
      fileblob: this.fileblob,
      mimetype: this.mimetype
    };
  }
}
class Nn extends za {
  constructor(e, i) {
    super(i), this.filename = e;
  }
}
class Dn extends _a {
  constructor() {
    super("email/send"), this.toAddress = [], this.ccAddress = [], this.bccAddress = [], this.customHeaders = [], this.attachments = [], this.inlines = [];
  }
  addAddress(e, i) {
    switch (i) {
      case "cc":
        this.ccAddress.push(e);
        break;
      case "bcc":
        this.bccAddress.push(e);
        break;
      default:
        this.toAddress.push(e);
        break;
    }
    return this;
  }
  html(e) {
    return this.htmlBody = e, this;
  }
  text(e) {
    return this.textBody = e, this;
  }
  from(e) {
    return this.fromAddress = e, this;
  }
  template(e, i) {
    return this.templateId = e, this.templateData = i, this;
  }
  to(e) {
    return this._addAddressOfType(e, "to"), this;
  }
  cc(e) {
    return this._addAddressOfType(e, "cc"), this;
  }
  bcc(e) {
    return this._addAddressOfType(e, "bcc"), this;
  }
  _addAddressOfType(e, i) {
    return Array.isArray(e) ? e.forEach((n) => this.addAddress(n, i)) : this.addAddress(e, i), this;
  }
  headers(e) {
    return Array.isArray(e) ? this.customHeaders.push(...e) : this.customHeaders.push(e), this;
  }
  subject(e) {
    return this.subjectLine = e, this;
  }
  getFormattedAddresses(e) {
    return this[e + "Address"].map(this.formatAddress);
  }
  formatAddress(e) {
    return e?.name ? `${e.name} <${e.email}>`.trim() : `<${e.email}>`.trim();
  }
  async buildRequestBody() {
    const e = /* @__PURE__ */ new Map();
    if (this.requestBody = e, e.set("html_body", this.htmlBody), this.textBody && e.set("text_body", this.textBody || ""), this.toAddress.length)
      e.set("to", this.getFormattedAddresses("to"));
    else
      throw Error('At least one "to" address is required.');
    if (this.ccAddress.length && e.set("cc", this.getFormattedAddresses("cc")), this.bccAddress.length && e.set("bcc", this.getFormattedAddresses("bcc")), this.fromAddress?.email)
      e.set("sender", this.formatAddress(this.fromAddress));
    else
      throw Error("A from email address is required.");
    if (e.set("subject", this.subjectLine), this.customHeaders.length && e.set("custom_headers", this.customHeaders), this.templateId && e.set("template_id", this.templateId), this.templateData && this.templateData.size > 0 && e.set("template_data", Object.fromEntries(this.templateData)), this.attachments.length || this.inlines.length) {
      const i = [];
      ["attachments", "inlines"].forEach((n) => {
        this[n].forEach((s) => {
          i.push(s.readFileBlob());
        });
      }), await Promise.all(i).then(() => {
        ["attachments", "inlines"].forEach((n) => {
          this[n].length && e.set(
            n,
            this[n].map(
              (s) => s.forSend()
            )
          );
        });
      });
    }
    return await super.buildRequestBody();
  }
}
class Ln extends Dn {
  constructor() {
    super();
  }
  attach(e) {
    return typeof e == "string" ? this.attachments.push(new za(e)) : Array.isArray(e) ? e.map((i) => this.attach(i)) : "filename" in e && "readFileBlob" in e && this.attachments.push(e), this;
  }
  inline(e, i) {
    const n = new Nn(e, i);
    return n.filename = e, this.inlines.push(n), this;
  }
}
function ps(a) {
  return {
    service: function(e, i = void 0, n = "POST") {
      return new _a(e, i, n);
    },
    mail: function() {
      return new Ln();
    },
    client: function() {
      return new zn(a);
    }
  };
}
export {
  zn as ApiClient,
  Nn as InlineAttachment,
  za as MailAttachment,
  Ln as NodeMailService,
  sa as SMTP2GOError,
  _a as Service,
  ps as default
};
//# sourceMappingURL=index.node.js.map
