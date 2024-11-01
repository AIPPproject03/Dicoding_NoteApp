/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      597: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, r(o.key), o);
          }
        }
        function r(e) {
          var r = (function (e) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != t(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(r) ? r : r + "";
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
              }
              function r() {
                return (function (t, e, r) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var n = [null];
                  n.push.apply(n, e);
                  var a = new (t.bind.apply(t, n))();
                  return r && i(a, r.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (r.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(r, t)
              );
            }),
            n(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (r) {
          function n() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              (e = (function (e, r, n) {
                return (
                  (r = a(r)),
                  (function (e, r) {
                    if (r && ("object" == t(r) || "function" == typeof r))
                      return r;
                    if (void 0 !== r)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return t;
                    })(e);
                  })(
                    e,
                    o()
                      ? Reflect.construct(r, n || [], a(e).constructor)
                      : r.apply(e, n)
                  )
                );
              })(this, n)).attachShadow({ mode: "open" }),
              e.render(),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(n, r),
            (c = n),
            (u = [
              {
                key: "render",
                value: function () {
                  this.shadowRoot.innerHTML =
                    '\n        <form id="noteForm">\n          <input type="text" id="noteTitle" placeholder="Note Title" required />\n          <textarea id="noteBody" placeholder="Note Body" required></textarea>\n          <button type="submit">Add Note</button>\n        </form>\n      ';
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(n(HTMLElement));
        customElements.define("note-form", c);
      },
      919: (t, e, r) => {
        "use strict";
        r.d(e, { A: () => c });
        var n = r(601),
          o = r.n(n),
          i = r(314),
          a = r.n(i)()(o());
        a.push([t.id, "", ""]);
        const c = a;
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = "",
                  n = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (r += t(e)),
                  n && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (t, r, n, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (n)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var f = [].concat(t[s]);
                (n && a[f[0]]) ||
                  (void 0 !== i &&
                    (void 0 === f[5] ||
                      (f[1] = "@layer"
                        .concat(f[5].length > 0 ? " ".concat(f[5]) : "", " {")
                        .concat(f[1], "}")),
                    (f[5] = i)),
                  r &&
                    (f[2]
                      ? ((f[1] = "@media "
                          .concat(f[2], " {")
                          .concat(f[1], "}")),
                        (f[2] = r))
                      : (f[2] = r)),
                  o &&
                    (f[4]
                      ? ((f[1] = "@supports ("
                          .concat(f[4], ") {")
                          .concat(f[1], "}")),
                        (f[4] = o))
                      : (f[4] = "".concat(o))),
                  e.push(f));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function r(t) {
          for (var r = -1, n = 0; n < e.length; n++)
            if (e[n].identifier === t) {
              r = n;
              break;
            }
          return r;
        }
        function n(t, n) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var u = t[c],
              s = n.base ? u[0] + n.base : u[0],
              f = i[s] || 0,
              l = "".concat(s, " ").concat(f);
            i[s] = f + 1;
            var p = r(l),
              h = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(h);
            else {
              var y = o(h, n);
              (n.byIndex = c),
                e.splice(c, 0, { identifier: l, updater: y, references: 1 });
            }
            a.push(l);
          }
          return a;
        }
        function o(t, e) {
          var r = e.domAPI(e);
          return (
            r.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                r.update((t = e));
              } else r.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = n((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = r(i[a]);
              e[c].references--;
            }
            for (var u = n(t, o), s = 0; s < i.length; s++) {
              var f = r(i[s]);
              0 === e[f].references && (e[f].updater(), e.splice(f, 1));
            }
            i = u;
          };
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, r) {
          var n = (function (t) {
            if (void 0 === e[t]) {
              var r = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (t) {
                  r = null;
                }
              e[t] = r;
            }
            return e[t];
          })(t);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, r) => {
        "use strict";
        t.exports = function (t) {
          var e = r.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (r) {
              !(function (t, e, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                  r.media && (n += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (n += r.css),
                  o && (n += "}"),
                  r.media && (n += "}"),
                  r.supports && (n += "}");
                var i = r.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(n, t, e.options);
              })(e, t, r);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = (e[n] = { id: n, exports: {} });
    return t[n](i, i.exports, r), i.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.nc = void 0),
    (() => {
      "use strict";
      var t = r(72),
        e = r.n(t),
        n = r(825),
        o = r.n(n),
        i = r(659),
        a = r.n(i),
        c = r(56),
        u = r.n(c),
        s = r(540),
        f = r.n(s),
        l = r(113),
        p = r.n(l),
        h = r(919),
        y = {};
      function d(t) {
        return (
          (d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          d(t)
        );
      }
      function v() {
        v = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function s(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (t) {
          s = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function f(t, e, r, n) {
          var i = e && e.prototype instanceof g ? e : g,
            a = Object.create(i.prototype),
            c = new N(n || []);
          return o(a, "_invoke", { value: T(t, r, c) }), a;
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = f;
        var p = "suspendedStart",
          h = "suspendedYield",
          y = "executing",
          m = "completed",
          b = {};
        function g() {}
        function w() {}
        function x() {}
        var E = {};
        s(E, a, function () {
          return this;
        });
        var O = Object.getPrototypeOf,
          L = O && O(O(M([])));
        L && L !== r && n.call(L, a) && (E = L);
        var j = (x.prototype = g.prototype = Object.create(E));
        function S(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function _(t, e) {
          function r(o, i, a, c) {
            var u = l(t[o], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == d(f) && n.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      r("next", t, a, c);
                    },
                    function (t) {
                      r("throw", t, a, c);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return r("throw", t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function T(e, r, n) {
          var o = p;
          return function (i, a) {
            if (o === y) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = P(c, n);
                if (u) {
                  if (u === b) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === p) throw ((o = m), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var s = l(e, r, n);
              if ("normal" === s.type) {
                if (((o = n.done ? m : h), s.arg === b)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((o = m), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function P(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                P(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              b
            );
          var i = l(o, e.iterator, r.arg);
          if ("throw" === i.type)
            return (
              (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), b
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                b)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              b);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function A(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function N(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function M(e) {
          if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(d(e) + " is not iterable");
        }
        return (
          (w.prototype = x),
          o(j, "constructor", { value: x, configurable: !0 }),
          o(x, "constructor", { value: w, configurable: !0 }),
          (w.displayName = s(x, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, x)
                : ((t.__proto__ = x), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          S(_.prototype),
          s(_.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = _),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new _(f(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          S(j),
          s(j, u, "Generator"),
          s(j, a, function () {
            return this;
          }),
          s(j, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = M),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), b)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                b
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), A(r), b;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    A(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: M(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                b
              );
            },
          }),
          e
        );
      }
      function m(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void r(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      (y.styleTagTransform = p()),
        (y.setAttributes = u()),
        (y.insert = a().bind(null, "head")),
        (y.domAPI = o()),
        (y.insertStyleElement = f()),
        e()(h.A, y),
        h.A && h.A.locals && h.A.locals,
        r(597);
      var b = (function () {
        var t,
          e =
            ((t = v().mark(function t() {
              var e, r;
              return v().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          fetch(
                            "".concat(
                              "https://notes-api.dicoding.dev/v2",
                              "/notes"
                            ),
                            {
                              method: "GET",
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer YOUR_API_KEY",
                              },
                            }
                          )
                        );
                      case 3:
                        if ((e = t.sent).ok) {
                          t.next = 6;
                          break;
                        }
                        throw new Error("Error fetching notes");
                      case 6:
                        return (t.next = 8), e.json();
                      case 8:
                        (r = t.sent), console.log(r), (t.next = 16);
                        break;
                      case 12:
                        (t.prev = 12),
                          (t.t0 = t.catch(0)),
                          console.error(t.t0),
                          alert("Failed to fetch notes");
                      case 16:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 12]]
              );
            })),
            function () {
              var e = this,
                r = arguments;
              return new Promise(function (n, o) {
                var i = t.apply(e, r);
                function a(t) {
                  m(i, n, o, a, c, "next", t);
                }
                function c(t) {
                  m(i, n, o, a, c, "throw", t);
                }
                a(void 0);
              });
            });
        return function () {
          return e.apply(this, arguments);
        };
      })();
      document.addEventListener("DOMContentLoaded", function () {
        b();
      });
    })();
})();
