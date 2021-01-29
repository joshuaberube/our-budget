var Plaid = (function (t) {
  var r = {};
  function __webpack_require__(o) {
    if (r[o]) return r[o].exports;
    var i = (r[o] = { i: o, l: !1, exports: {} });
    return (
      t[o].call(i.exports, i, i.exports, __webpack_require__),
      (i.l = !0),
      i.exports
    );
  }
  return (
    (__webpack_require__.m = t),
    (__webpack_require__.c = r),
    (__webpack_require__.d = function (t, r, o) {
      __webpack_require__.o(t, r) ||
        Object.defineProperty(t, r, { enumerable: !0, get: o });
    }),
    (__webpack_require__.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (__webpack_require__.t = function (t, r) {
      if ((1 & r && (t = __webpack_require__(t)), 8 & r)) return t;
      if (4 & r && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (__webpack_require__.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & r && "string" != typeof t)
      )
        for (var i in t)
          __webpack_require__.d(
            o,
            i,
            function (r) {
              return t[r];
            }.bind(null, i)
          );
      return o;
    }),
    (__webpack_require__.n = function (t) {
      var r =
        t && t.__esModule
          ? function getDefault() {
              return t.default;
            }
          : function getModuleExports() {
              return t;
            };
      return __webpack_require__.d(r, "a", r), r;
    }),
    (__webpack_require__.o = function (t, r) {
      return Object.prototype.hasOwnProperty.call(t, r);
    }),
    (__webpack_require__.p = "https://cdn.plaid.com/link/2.0.860/"),
    __webpack_require__((__webpack_require__.s = 968))
  );
})([
  ,
  function (t, r) {
    t.exports = function _interopRequireDefault(t) {
      return t && t.__esModule ? t : { default: t };
    };
  },
  ,
  ,
  ,
  function (t, r, o) {
    "use strict";
    var i = o(85),
      u = {};
    (u[o(7)("toStringTag")] = "z"),
      u + "" != "[object z]" &&
        o(22)(
          Object.prototype,
          "toString",
          function toString() {
            return "[object " + i(this) + "]";
          },
          !0
        );
  },
  ,
  function (t, r, o) {
    var i = o(76)("wks"),
      u = o(42),
      c = o(8).Symbol,
      a = "function" == typeof c;
    (t.exports = function (t) {
      return i[t] || (i[t] = (a && c[t]) || (a ? c : u)("Symbol." + t));
    }).store = i;
  },
  function (t, r) {
    var o = (t.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = o);
  },
  function (t, r, o) {
    "use strict";
    var i = o(75),
      u = o(143),
      c = o(43),
      a = o(27);
    (t.exports = o(98)(
      Array,
      "Array",
      function (t, r) {
        (this._t = a(t)), (this._i = 0), (this._k = r);
      },
      function () {
        var t = this._t,
          r = this._k,
          o = this._i++;
        return !t || o >= t.length
          ? ((this._t = void 0), u(1))
          : u(0, "keys" == r ? o : "values" == r ? t[o] : [o, t[o]]);
      },
      "values"
    )),
      (c.Arguments = c.Array),
      i("keys"),
      i("values"),
      i("entries");
  },
  function (t, r, o) {
    for (
      var i = o(9),
        u = o(31),
        c = o(22),
        a = o(8),
        l = o(24),
        p = o(43),
        d = o(7),
        v = d("iterator"),
        y = d("toStringTag"),
        h = p.Array,
        g = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1,
        },
        m = u(g),
        _ = 0;
      _ < m.length;
      _++
    ) {
      var b,
        S = m[_],
        w = g[S],
        O = a[S],
        x = O && O.prototype;
      if (x && (x[v] || l(x, v, h), x[y] || l(x, y, S), (p[S] = h), w))
        for (b in i) x[b] || c(x, b, i[b], !0);
    }
  },
  function (t, r) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, r, o) {
    var i = o(8),
      u = o(38),
      c = o(24),
      a = o(22),
      l = o(37),
      $export = function (t, r, o) {
        var p,
          d,
          v,
          y,
          h = t & $export.F,
          g = t & $export.G,
          m = t & $export.S,
          _ = t & $export.P,
          b = t & $export.B,
          S = g ? i : m ? i[r] || (i[r] = {}) : (i[r] || {}).prototype,
          w = g ? u : u[r] || (u[r] = {}),
          O = w.prototype || (w.prototype = {});
        for (p in (g && (o = r), o))
          (v = ((d = !h && S && void 0 !== S[p]) ? S : o)[p]),
            (y =
              b && d
                ? l(v, i)
                : _ && "function" == typeof v
                ? l(Function.call, v)
                : v),
            S && a(S, p, v, t & $export.U),
            w[p] != v && c(w, p, y),
            _ && O[p] != v && (O[p] = v);
      };
    (i.core = u),
      ($export.F = 1),
      ($export.G = 2),
      ($export.S = 4),
      ($export.P = 8),
      ($export.B = 16),
      ($export.W = 32),
      ($export.U = 64),
      ($export.R = 128),
      (t.exports = $export);
  },
  function (t, r, o) {
    var i = o(33),
      u = o(31);
    o(166)("keys", function () {
      return function keys(t) {
        return u(i(t));
      };
    });
  },
  function (t, r, o) {
    "use strict";
    var i = o(8),
      u = o(23),
      c = o(17),
      a = o(12),
      l = o(22),
      p = o(122).KEY,
      d = o(11),
      v = o(76),
      y = o(56),
      h = o(42),
      g = o(7),
      m = o(105),
      _ = o(104),
      b = o(154),
      S = o(129),
      w = o(20),
      O = o(19),
      x = o(27),
      E = o(55),
      I = o(41),
      A = o(58),
      T = o(156),
      k = o(61),
      P = o(16),
      N = o(31),
      L = k.f,
      j = P.f,
      M = T.f,
      R = i.Symbol,
      C = i.JSON,
      U = C && C.stringify,
      V = g("_hidden"),
      D = g("toPrimitive"),
      W = {}.propertyIsEnumerable,
      q = v("symbol-registry"),
      z = v("symbols"),
      H = v("op-symbols"),
      K = Object.prototype,
      G = "function" == typeof R,
      B = i.QObject,
      J = !B || !B.prototype || !B.prototype.findChild,
      X =
        c &&
        d(function () {
          return (
            7 !=
            A(
              j({}, "a", {
                get: function () {
                  return j(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, r, o) {
              var i = L(K, r);
              i && delete K[r], j(t, r, o), i && t !== K && j(K, r, i);
            }
          : j,
      wrap = function (t) {
        var r = (z[t] = A(R.prototype));
        return (r._k = t), r;
      },
      Y =
        G && "symbol" == typeof R.iterator
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              return t instanceof R;
            },
      $ = function defineProperty(t, r, o) {
        return (
          t === K && $(H, r, o),
          w(t),
          (r = E(r, !0)),
          w(o),
          u(z, r)
            ? (o.enumerable
                ? (u(t, V) && t[V][r] && (t[V][r] = !1),
                  (o = A(o, { enumerable: I(0, !1) })))
                : (u(t, V) || j(t, V, I(1, {})), (t[V][r] = !0)),
              X(t, r, o))
            : j(t, r, o)
        );
      },
      Q = function defineProperties(t, r) {
        w(t);
        for (var o, i = b((r = x(r))), u = 0, c = i.length; c > u; )
          $(t, (o = i[u++]), r[o]);
        return t;
      },
      Z = function propertyIsEnumerable(t) {
        var r = W.call(this, (t = E(t, !0)));
        return (
          !(this === K && u(z, t) && !u(H, t)) &&
          (!(r || !u(this, t) || !u(z, t) || (u(this, V) && this[V][t])) || r)
        );
      },
      tt = function getOwnPropertyDescriptor(t, r) {
        if (((t = x(t)), (r = E(r, !0)), t !== K || !u(z, r) || u(H, r))) {
          var o = L(t, r);
          return (
            !o || !u(z, r) || (u(t, V) && t[V][r]) || (o.enumerable = !0), o
          );
        }
      },
      et = function getOwnPropertyNames(t) {
        for (var r, o = M(x(t)), i = [], c = 0; o.length > c; )
          u(z, (r = o[c++])) || r == V || r == p || i.push(r);
        return i;
      },
      nt = function getOwnPropertySymbols(t) {
        for (
          var r, o = t === K, i = M(o ? H : x(t)), c = [], a = 0;
          i.length > a;

        )
          !u(z, (r = i[a++])) || (o && !u(K, r)) || c.push(z[r]);
        return c;
      };
    G ||
      (l(
        (R = function Symbol() {
          if (this instanceof R)
            throw TypeError("Symbol is not a constructor!");
          var t = h(arguments.length > 0 ? arguments[0] : void 0),
            $set = function (r) {
              this === K && $set.call(H, r),
                u(this, V) && u(this[V], t) && (this[V][t] = !1),
                X(this, t, I(1, r));
            };
          return c && J && X(K, t, { configurable: !0, set: $set }), wrap(t);
        }).prototype,
        "toString",
        function toString() {
          return this._k;
        }
      ),
      (k.f = tt),
      (P.f = $),
      (o(48).f = T.f = et),
      (o(52).f = Z),
      (o(60).f = nt),
      c && !o(59) && l(K, "propertyIsEnumerable", Z, !0),
      (m.f = function (t) {
        return wrap(g(t));
      })),
      a(a.G + a.W + a.F * !G, { Symbol: R });
    for (
      var rt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
          ","
        ),
        ot = 0;
      rt.length > ot;

    )
      g(rt[ot++]);
    for (var it = N(g.store), ut = 0; it.length > ut; ) _(it[ut++]);
    a(a.S + a.F * !G, "Symbol", {
      for: function (t) {
        return u(q, (t += "")) ? q[t] : (q[t] = R(t));
      },
      keyFor: function keyFor(t) {
        if (!Y(t)) throw TypeError(t + " is not a symbol!");
        for (var r in q) if (q[r] === t) return r;
      },
      useSetter: function () {
        J = !0;
      },
      useSimple: function () {
        J = !1;
      },
    }),
      a(a.S + a.F * !G, "Object", {
        create: function create(t, r) {
          return void 0 === r ? A(t) : Q(A(t), r);
        },
        defineProperty: $,
        defineProperties: Q,
        getOwnPropertyDescriptor: tt,
        getOwnPropertyNames: et,
        getOwnPropertySymbols: nt,
      }),
      C &&
        a(
          a.S +
            a.F *
              (!G ||
                d(function () {
                  var t = R();
                  return (
                    "[null]" != U([t]) ||
                    "{}" != U({ a: t }) ||
                    "{}" != U(Object(t))
                  );
                })),
          "JSON",
          {
            stringify: function stringify(t) {
              for (var r, o, i = [t], u = 1; arguments.length > u; )
                i.push(arguments[u++]);
              if (((o = r = i[1]), (O(r) || void 0 !== t) && !Y(t)))
                return (
                  S(r) ||
                    (r = function (t, r) {
                      if (
                        ("function" == typeof o && (r = o.call(this, t, r)),
                        !Y(r))
                      )
                        return r;
                    }),
                  (i[1] = r),
                  U.apply(C, i)
                );
            },
          }
        ),
      R.prototype[D] || o(24)(R.prototype, D, R.prototype.valueOf),
      y(R, "Symbol"),
      y(Math, "Math", !0),
      y(i.JSON, "JSON", !0);
  },
  ,
  function (t, r, o) {
    var i = o(20),
      u = o(103),
      c = o(55),
      a = Object.defineProperty;
    r.f = o(17)
      ? Object.defineProperty
      : function defineProperty(t, r, o) {
          if ((i(t), (r = c(r, !0)), i(o), u))
            try {
              return a(t, r, o);
            } catch (t) {}
          if ("get" in o || "set" in o)
            throw TypeError("Accessors not supported!");
          return "value" in o && (t[r] = o.value), t;
        };
  },
  function (t, r, o) {
    t.exports = !o(11)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  ,
  function (t, r) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, r, o) {
    var i = o(19);
    t.exports = function (t) {
      if (!i(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  },
  ,
  function (t, r, o) {
    var i = o(8),
      u = o(24),
      c = o(23),
      a = o(42)("src"),
      l = "toString",
      p = Function.toString,
      d = ("" + p).split(l);
    (o(38).inspectSource = function (t) {
      return p.call(t);
    }),
      (t.exports = function (t, r, o, l) {
        var p = "function" == typeof o;
        p && (c(o, "name") || u(o, "name", r)),
          t[r] !== o &&
            (p && (c(o, a) || u(o, a, t[r] ? "" + t[r] : d.join(String(r)))),
            t === i
              ? (t[r] = o)
              : l
              ? t[r]
                ? (t[r] = o)
                : u(t, r, o)
              : (delete t[r], u(t, r, o)));
      })(Function.prototype, l, function toString() {
        return ("function" == typeof this && this[a]) || p.call(this);
      });
  },
  function (t, r) {
    var o = {}.hasOwnProperty;
    t.exports = function (t, r) {
      return o.call(t, r);
    };
  },
  function (t, r, o) {
    var i = o(16),
      u = o(41);
    t.exports = o(17)
      ? function (t, r, o) {
          return i.f(t, r, u(1, o));
        }
      : function (t, r, o) {
          return (t[r] = o), t;
        };
  },
  function (t, r, o) {
    var i = o(16).f,
      u = Function.prototype,
      c = /^\s*function ([^ (]*)/,
      a = "name";
    a in u ||
      (o(17) &&
        i(u, a, {
          configurable: !0,
          get: function () {
            try {
              return ("" + this).match(c)[1];
            } catch (t) {
              return "";
            }
          },
        }));
  },
  ,
  function (t, r, o) {
    var i = o(89),
      u = o(34);
    t.exports = function (t) {
      return i(u(t));
    };
  },
  ,
  function (t, r, o) {
    "use strict";
    o(160);
    var i = o(20),
      u = o(81),
      c = o(17),
      a = "toString",
      l = /./.toString,
      define = function (t) {
        o(22)(RegExp.prototype, a, t, !0);
      };
    o(11)(function () {
      return "/a/b" != l.call({ source: "a", flags: "b" });
    })
      ? define(function toString() {
          var t = i(this);
          return "/".concat(
            t.source,
            "/",
            "flags" in t
              ? t.flags
              : !c && t instanceof RegExp
              ? u.call(t)
              : void 0
          );
        })
      : l.name != a &&
        define(function toString() {
          return l.call(this);
        });
  },
  function (t, r) {
    var o = {}.toString;
    t.exports = function (t) {
      return o.call(t).slice(8, -1);
    };
  },
  function (t, r, o) {
    var i = o(106),
      u = o(78);
    t.exports =
      Object.keys ||
      function keys(t) {
        return i(t, u);
      };
  },
  ,
  function (t, r, o) {
    var i = o(34);
    t.exports = function (t) {
      return Object(i(t));
    };
  },
  function (t, r) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  ,
  function (t, r, o) {
    o(68)("replace", 2, function (t, r, o) {
      return [
        function replace(i, u) {
          "use strict";
          var c = t(this),
            a = null == i ? void 0 : i[r];
          return void 0 !== a ? a.call(i, c, u) : o.call(String(c), i, u);
        },
        o,
      ];
    });
  },
  function (t, r, o) {
    var i = o(39);
    t.exports = function (t, r, o) {
      if ((i(t), void 0 === r)) return t;
      switch (o) {
        case 1:
          return function (o) {
            return t.call(r, o);
          };
        case 2:
          return function (o, i) {
            return t.call(r, o, i);
          };
        case 3:
          return function (o, i, u) {
            return t.call(r, o, i, u);
          };
      }
      return function () {
        return t.apply(r, arguments);
      };
    };
  },
  function (t, r) {
    var o = (t.exports = { version: "2.5.5" });
    "number" == typeof __e && (__e = o);
  },
  function (t, r) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  },
  ,
  function (t, r) {
    t.exports = function (t, r) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: r,
      };
    };
  },
  function (t, r) {
    var o = 0,
      i = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(
        void 0 === t ? "" : t,
        ")_",
        (++o + i).toString(36)
      );
    };
  },
  function (t, r) {
    t.exports = {};
  },
  function (t, r, o) {
    var i = o(161),
      u = o(162),
      c = o(163);
    t.exports = function _slicedToArray(t, r) {
      return i(t) || u(t, r) || c();
    };
  },
  ,
  ,
  ,
  function (t, r, o) {
    var i = o(106),
      u = o(78).concat("length", "prototype");
    r.f =
      Object.getOwnPropertyNames ||
      function getOwnPropertyNames(t) {
        return i(t, u);
      };
  },
  function (t, r, o) {
    var i = o(73),
      u = Math.min;
    t.exports = function (t) {
      return t > 0 ? u(i(t), 9007199254740991) : 0;
    };
  },
  ,
  function (t, r) {
    function _typeof2(t) {
      return (_typeof2 =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function _typeof2(t) {
              return typeof t;
            }
          : function _typeof2(t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function _typeof(r) {
      return (
        "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator)
          ? (t.exports = _typeof = function _typeof(t) {
              return _typeof2(t);
            })
          : (t.exports = _typeof = function _typeof(t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : _typeof2(t);
            }),
        _typeof(r)
      );
    }
    t.exports = _typeof;
  },
  function (t, r) {
    r.f = {}.propertyIsEnumerable;
  },
  ,
  ,
  function (t, r, o) {
    var i = o(19);
    t.exports = function (t, r) {
      if (!i(t)) return t;
      var o, u;
      if (r && "function" == typeof (o = t.toString) && !i((u = o.call(t))))
        return u;
      if ("function" == typeof (o = t.valueOf) && !i((u = o.call(t)))) return u;
      if (!r && "function" == typeof (o = t.toString) && !i((u = o.call(t))))
        return u;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, r, o) {
    var i = o(16).f,
      u = o(23),
      c = o(7)("toStringTag");
    t.exports = function (t, r, o) {
      t &&
        !u((t = o ? t : t.prototype), c) &&
        i(t, c, { configurable: !0, value: r });
    };
  },
  ,
  function (t, r, o) {
    var i = o(20),
      u = o(155),
      c = o(78),
      a = o(77)("IE_PROTO"),
      Empty = function () {},
      createDict = function () {
        var t,
          r = o(84)("iframe"),
          i = c.length;
        for (
          r.style.display = "none",
            o(115).appendChild(r),
            r.src = "javascript:",
            (t = r.contentWindow.document).open(),
            t.write("<script>document.F=Object</script>"),
            t.close(),
            createDict = t.F;
          i--;

        )
          delete createDict.prototype[c[i]];
        return createDict();
      };
    t.exports =
      Object.create ||
      function create(t, r) {
        var o;
        return (
          null !== t
            ? ((Empty.prototype = i(t)),
              (o = new Empty()),
              (Empty.prototype = null),
              (o[a] = t))
            : (o = createDict()),
          void 0 === r ? o : u(o, r)
        );
      };
  },
  function (t, r) {
    t.exports = !1;
  },
  function (t, r) {
    r.f = Object.getOwnPropertySymbols;
  },
  function (t, r, o) {
    var i = o(52),
      u = o(41),
      c = o(27),
      a = o(55),
      l = o(23),
      p = o(103),
      d = Object.getOwnPropertyDescriptor;
    r.f = o(17)
      ? d
      : function getOwnPropertyDescriptor(t, r) {
          if (((t = c(t)), (r = a(r, !0)), p))
            try {
              return d(t, r);
            } catch (t) {}
          if (l(t, r)) return u(!i.f.call(t, r), t[r]);
        };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r, o) {
    "use strict";
    var i = o(24),
      u = o(22),
      c = o(11),
      a = o(34),
      l = o(7);
    t.exports = function (t, r, o) {
      var p = l(t),
        d = o(a, p, ""[t]),
        v = d[0],
        y = d[1];
      c(function () {
        var r = {};
        return (
          (r[p] = function () {
            return 7;
          }),
          7 != ""[t](r)
        );
      }) &&
        (u(String.prototype, t, v),
        i(
          RegExp.prototype,
          p,
          2 == r
            ? function (t, r) {
                return y.call(t, this, r);
              }
            : function (t) {
                return y.call(t, this);
              }
        ));
    };
  },
  ,
  ,
  function (t, r, o) {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.FLEXIBLE_INPUT_OVERWRITE_STATUSES = r.CREATE_PARAMETERS = r.VERSION = r.DEFAULT_LANGUAGE = r.I18N_SUPPORTED_LANGUAGES = r.PRODUCTS_API_V2_BETA = r.PRODUCTS_API_V2 = r.PRODUCTS_API_V2_ONLY = r.PRODUCTS_API_V1 = r.PLAID_WEBVIEW_NAMESPACE = r.PLAID_INTERNAL_NAMESPACE = r.PLAID_LINK_BUTTON_ID = r.LINK_CLIENT_URL = r.ENVIRONMENTS_TO_DOMAIN = r.INTERNAL_ENVIRONMENTS_API_V2 = r.EXTERNAL_ENVIRONMENTS_API_V2 = r.INTERNAL_ENVIRONMENTS_API_V1 = r.EXTERNAL_ENVIRONMENTS_API_V1 = r.API_VERSIONS = void 0);
    r.API_VERSIONS = ["v1", "v2"];
    r.EXTERNAL_ENVIRONMENTS_API_V1 = ["tartan", "production"];
    r.INTERNAL_ENVIRONMENTS_API_V1 = ["testing", "tartan", "production"];
    r.EXTERNAL_ENVIRONMENTS_API_V2 = ["sandbox", "development", "production"];
    r.INTERNAL_ENVIRONMENTS_API_V2 = [
      "end2end",
      "devenv",
      "testing",
      "sandbox",
      "development",
      "production",
    ];
    r.ENVIRONMENTS_TO_DOMAIN = {
      devenv: "http://localhost:8082",
      testing: "https://api-v2-testing.plaid.com",
      tartan: "https://development.plaid.com",
      development: "https://development.plaid.com",
      sandbox: "https://sandbox.plaid.com",
      production: "https://production.plaid.com",
    };
    r.LINK_CLIENT_URL = "https://cdn.plaid.com/link/2.0.860";
    r.PLAID_LINK_BUTTON_ID = "plaid-link-button";
    r.PLAID_INTERNAL_NAMESPACE = "plaid_link";
    r.PLAID_WEBVIEW_NAMESPACE = "plaidlink";
    r.PRODUCTS_API_V1 = ["auth", "connect", "income", "info"];
    r.PRODUCTS_API_V2_ONLY = [
      "account_verify",
      "assets",
      "bank_transfer",
      "ddta",
      "deposit_switch",
      "holdings",
      "income_verification",
      "investments_auth",
      "investments",
      "liabilities",
      "payment_initiation",
      "sba_verification",
      "liabilities_report",
    ];
    r.PRODUCTS_API_V2 = [
      "account_verify",
      "assets",
      "auth",
      "bank_transfer",
      "ddta",
      "deposit_switch",
      "holdings",
      "identity",
      "income",
      "income_verification",
      "investments_auth",
      "investments",
      "liabilities",
      "payment_initiation",
      "transactions",
      "sba_verification",
      "liabilities_report",
    ];
    r.PRODUCTS_API_V2_BETA = [
      "account_verify",
      "bank_transfer",
      "holdings",
      "investments_auth",
      "ddta",
      "payment_initiation",
      "deposit_switch",
      "sba_verification",
      "liabilities_report",
      "income_verification",
    ];
    r.I18N_SUPPORTED_LANGUAGES = ["en", "es", "fr"];
    r.DEFAULT_LANGUAGE = "en";
    r.VERSION = "2.0.860";
    r.CREATE_PARAMETERS = [
      "apiVersion",
      "clientName",
      "configUserId",
      "configUserTags",
      "countryCodes",
      "customizations",
      "depositSwitchToken",
      "enableThreadsDemo",
      "env",
      "experimentVariants",
      "forceIframe",
      "isEmbedded",
      "isSimpleIntegration",
      "key",
      "language",
      "linkCustomizationName",
      "longtail",
      "longTail",
      "oauthNonce",
      "oauthStateId",
      "oauthRedirectUri",
      "onEvent",
      "onExit",
      "onLoad",
      "onSuccess",
      "paymentToken",
      "plaidTrustedAuthToken",
      "product",
      "receivedRedirectUri",
      "accountSubtypes",
      "selectAccount",
      "token",
      "useMobileWindow",
      "user",
      "userLegalName",
      "userEmailAddress",
      "userPhoneNumber",
      "webhook",
      "workflowVersionOverride",
    ];
    r.FLEXIBLE_INPUT_OVERWRITE_STATUSES = ["choose_device"];
  },
  function (t, r, o) {
    "use strict";
    var i = o(157)(!0);
    o(98)(
      String,
      "String",
      function (t) {
        (this._t = String(t)), (this._i = 0);
      },
      function () {
        var t,
          r = this._t,
          o = this._i;
        return o >= r.length
          ? { value: void 0, done: !0 }
          : ((t = i(r, o)), (this._i += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, r) {
    var o = Math.ceil,
      i = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? i : o)(t);
    };
  },
  function (t, r, o) {
    o(68)("split", 2, function (t, r, i) {
      "use strict";
      var u = o(87),
        c = i,
        a = [].push;
      if (
        "c" == "abbc".split(/(b)*/)[1] ||
        4 != "test".split(/(?:)/, -1).length ||
        2 != "ab".split(/(?:ab)*/).length ||
        4 != ".".split(/(.?)(.?)/).length ||
        ".".split(/()()/).length > 1 ||
        "".split(/.?/).length
      ) {
        var l = void 0 === /()??/.exec("")[1];
        i = function (t, r) {
          var o = String(this);
          if (void 0 === t && 0 === r) return [];
          if (!u(t)) return c.call(o, t, r);
          var i,
            p,
            d,
            v,
            y,
            h = [],
            g =
              (t.ignoreCase ? "i" : "") +
              (t.multiline ? "m" : "") +
              (t.unicode ? "u" : "") +
              (t.sticky ? "y" : ""),
            m = 0,
            _ = void 0 === r ? 4294967295 : r >>> 0,
            b = new RegExp(t.source, g + "g");
          for (
            l || (i = new RegExp("^" + b.source + "$(?!\\s)", g));
            (p = b.exec(o)) &&
            !(
              (d = p.index + p[0].length) > m &&
              (h.push(o.slice(m, p.index)),
              !l &&
                p.length > 1 &&
                p[0].replace(i, function () {
                  for (y = 1; y < arguments.length - 2; y++)
                    void 0 === arguments[y] && (p[y] = void 0);
                }),
              p.length > 1 && p.index < o.length && a.apply(h, p.slice(1)),
              (v = p[0].length),
              (m = d),
              h.length >= _)
            );

          )
            b.lastIndex === p.index && b.lastIndex++;
          return (
            m === o.length
              ? (!v && b.test("")) || h.push("")
              : h.push(o.slice(m)),
            h.length > _ ? h.slice(0, _) : h
          );
        };
      } else
        "0".split(void 0, 0).length &&
          (i = function (t, r) {
            return void 0 === t && 0 === r ? [] : c.call(this, t, r);
          });
      return [
        function split(o, u) {
          var c = t(this),
            a = null == o ? void 0 : o[r];
          return void 0 !== a ? a.call(o, c, u) : i.call(String(c), o, u);
        },
        i,
      ];
    });
  },
  function (t, r, o) {
    var i = o(7)("unscopables"),
      u = Array.prototype;
    null == u[i] && o(24)(u, i, {}),
      (t.exports = function (t) {
        u[i][t] = !0;
      });
  },
  function (t, r, o) {
    var i = o(8),
      u = "__core-js_shared__",
      c = i[u] || (i[u] = {});
    t.exports = function (t) {
      return c[t] || (c[t] = {});
    };
  },
  function (t, r, o) {
    var i = o(76)("keys"),
      u = o(42);
    t.exports = function (t) {
      return i[t] || (i[t] = u(t));
    };
  },
  function (t, r) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    );
  },
  ,
  ,
  function (t, r, o) {
    "use strict";
    var i = o(20);
    t.exports = function () {
      var t = i(this),
        r = "";
      return (
        t.global && (r += "g"),
        t.ignoreCase && (r += "i"),
        t.multiline && (r += "m"),
        t.unicode && (r += "u"),
        t.sticky && (r += "y"),
        r
      );
    };
  },
  ,
  ,
  function (t, r, o) {
    var i = o(19),
      u = o(8).document,
      c = i(u) && i(u.createElement);
    t.exports = function (t) {
      return c ? u.createElement(t) : {};
    };
  },
  function (t, r, o) {
    var i = o(30),
      u = o(7)("toStringTag"),
      c =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })()
        );
    t.exports = function (t) {
      var r, o, a;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" ==
          typeof (o = (function (t, r) {
            try {
              return t[r];
            } catch (t) {}
          })((r = Object(t)), u))
        ? o
        : c
        ? i(r)
        : "Object" == (a = i(r)) && "function" == typeof r.callee
        ? "Arguments"
        : a;
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(37),
      u = o(12),
      c = o(33),
      a = o(116),
      l = o(117),
      p = o(49),
      d = o(118),
      v = o(119);
    u(
      u.S +
        u.F *
          !o(109)(function (t) {
            Array.from(t);
          }),
      "Array",
      {
        from: function from(t) {
          var r,
            o,
            u,
            y,
            h = c(t),
            g = "function" == typeof this ? this : Array,
            m = arguments.length,
            _ = m > 1 ? arguments[1] : void 0,
            b = void 0 !== _,
            S = 0,
            w = v(h);
          if (
            (b && (_ = i(_, m > 2 ? arguments[2] : void 0, 2)),
            null == w || (g == Array && l(w)))
          )
            for (o = new g((r = p(h.length))); r > S; S++)
              d(o, S, b ? _(h[S], S) : h[S]);
          else
            for (y = w.call(h), o = new g(); !(u = y.next()).done; S++)
              d(o, S, b ? a(y, _, [u.value, S], !0) : u.value);
          return (o.length = S), o;
        },
      }
    );
  },
  function (t, r, o) {
    var i = o(19),
      u = o(30),
      c = o(7)("match");
    t.exports = function (t) {
      var r;
      return i(t) && (void 0 !== (r = t[c]) ? !!r : "RegExp" == u(t));
    };
  },
  ,
  function (t, r, o) {
    var i = o(30);
    t.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (t) {
          return "String" == i(t) ? t.split("") : Object(t);
        };
  },
  ,
  ,
  function (t, r, o) {
    "use strict";
    var i = o(12),
      u = o(39),
      c = o(33),
      a = o(11),
      l = [].sort,
      p = [1, 2, 3];
    i(
      i.P +
        i.F *
          (a(function () {
            p.sort(void 0);
          }) ||
            !a(function () {
              p.sort(null);
            }) ||
            !o(167)(l)),
      "Array",
      {
        sort: function sort(t) {
          return void 0 === t ? l.call(c(this)) : l.call(c(this), u(t));
        },
      }
    );
  },
  ,
  ,
  function (t, r, o) {
    o(104)("asyncIterator");
  },
  function (t, r, o) {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.parseEnvFromLinkToken = r.isLinkToken = r.isDepositSwitchToken = r.isPublicToken = void 0),
      o(101);
    var i = "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}",
      u = new RegExp("public-([a-z]+)-".concat(i)),
      c = new RegExp("deposit-switch-([a-z]+)-".concat(i)),
      a = new RegExp("link-([a-z]+)-".concat(i));
    r.isPublicToken = function isPublicToken(t) {
      return null != t && u.test(t);
    };
    r.isDepositSwitchToken = function isDepositSwitchToken(t) {
      return null != t && c.test(t);
    };
    r.isLinkToken = function isLinkToken(t) {
      return null != t && a.test(t);
    };
    r.parseEnvFromLinkToken = function parseEnvFromLinkToken(t) {
      var r = a.exec(t);
      if (null != r) return r[1];
    };
  },
  ,
  function (t, r, o) {
    "use strict";
    var i = o(59),
      u = o(12),
      c = o(22),
      a = o(24),
      l = o(43),
      p = o(158),
      d = o(56),
      v = o(159),
      y = o(7)("iterator"),
      h = !([].keys && "next" in [].keys()),
      g = "keys",
      m = "values",
      returnThis = function () {
        return this;
      };
    t.exports = function (t, r, o, _, b, S, w) {
      p(o, r, _);
      var O,
        x,
        E,
        getMethod = function (t) {
          if (!h && t in k) return k[t];
          switch (t) {
            case g:
              return function keys() {
                return new o(this, t);
              };
            case m:
              return function values() {
                return new o(this, t);
              };
          }
          return function entries() {
            return new o(this, t);
          };
        },
        I = r + " Iterator",
        A = b == m,
        T = !1,
        k = t.prototype,
        P = k[y] || k["@@iterator"] || (b && k[b]),
        N = P || getMethod(b),
        L = b ? (A ? getMethod("entries") : N) : void 0,
        j = ("Array" == r && k.entries) || P;
      if (
        (j &&
          (E = v(j.call(new t()))) !== Object.prototype &&
          E.next &&
          (d(E, I, !0), i || "function" == typeof E[y] || a(E, y, returnThis)),
        A &&
          P &&
          P.name !== m &&
          ((T = !0),
          (N = function values() {
            return P.call(this);
          })),
        (i && !w) || (!h && !T && k[y]) || a(k, y, N),
        (l[r] = N),
        (l[I] = returnThis),
        b)
      )
        if (
          ((O = {
            values: A ? N : getMethod(m),
            keys: S ? N : getMethod(g),
            entries: L,
          }),
          w)
        )
          for (x in O) x in k || c(k, x, O[x]);
        else u(u.P + u.F * (h || T), r, O);
      return O;
    };
  },
  ,
  function (t, r, o) {
    "use strict";
    var i = o(1);
    o(95), o(14), o(72), o(86), o(25), o(29);
    var u = i(o(44));
    o(74), o(111), o(113), o(10), o(9), o(5), o(13);
    var c = i(o(51));
    function _createForOfIteratorHelper(t, r) {
      var o;
      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (
          Array.isArray(t) ||
          (o = (function _unsupportedIterableToArray(t, r) {
            if (!t) return;
            if ("string" == typeof t) return _arrayLikeToArray(t, r);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === o && t.constructor && (o = t.constructor.name);
            if ("Map" === o || "Set" === o) return Array.from(t);
            if (
              "Arguments" === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            )
              return _arrayLikeToArray(t, r);
          })(t)) ||
          (r && t && "number" == typeof t.length)
        ) {
          o && (t = o);
          var i = 0,
            u = function F() {};
          return {
            s: u,
            n: function n() {
              return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
            },
            e: function e(t) {
              throw t;
            },
            f: u,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var c,
        a = !0,
        l = !1;
      return {
        s: function s() {
          o = t[Symbol.iterator]();
        },
        n: function n() {
          var t = o.next();
          return (a = t.done), t;
        },
        e: function e(t) {
          (l = !0), (c = t);
        },
        f: function f() {
          try {
            a || null == o.return || o.return();
          } finally {
            if (l) throw c;
          }
        },
      };
    }
    function _arrayLikeToArray(t, r) {
      (null == r || r > t.length) && (r = t.length);
      for (var o = 0, i = new Array(r); o < r; o++) i[o] = t[o];
      return i;
    }
    o(92), o(36);
    var a = o(168),
      l = o(169);
    function encode(t, r) {
      return r.encode ? (r.strict ? a(t) : encodeURIComponent(t)) : t;
    }
    function decode(t, r) {
      return r.decode ? l(t) : t;
    }
    function keysSorter(t) {
      return Array.isArray(t)
        ? t.sort()
        : "object" === (0, c.default)(t)
        ? keysSorter(Object.keys(t))
            .sort(function (t, r) {
              return Number(t) - Number(r);
            })
            .map(function (r) {
              return t[r];
            })
        : t;
    }
    function extract(t) {
      var r = t.indexOf("?");
      return -1 === r ? "" : t.slice(r + 1);
    }
    function parse(t, r) {
      var o = (function parserForArrayFormat(t) {
          var r;
          switch (t.arrayFormat) {
            case "index":
              return function (t, o, i) {
                (r = /\[(\d*)\]$/.exec(t)),
                  (t = t.replace(/\[\d*\]$/, "")),
                  r
                    ? (void 0 === i[t] && (i[t] = {}), (i[t][r[1]] = o))
                    : (i[t] = o);
              };
            case "bracket":
              return function (t, o, i) {
                (r = /(\[\])$/.exec(t)),
                  (t = t.replace(/\[\]$/, "")),
                  r
                    ? void 0 !== i[t]
                      ? (i[t] = [].concat(i[t], o))
                      : (i[t] = [o])
                    : (i[t] = o);
              };
            default:
              return function (t, r, o) {
                void 0 !== o[t] ? (o[t] = [].concat(o[t], r)) : (o[t] = r);
              };
          }
        })((r = Object.assign({ decode: !0, arrayFormat: "none" }, r))),
        i = Object.create(null);
      if ("string" != typeof t) return i;
      if (!(t = t.trim().replace(/^[?#&]/, ""))) return i;
      var a,
        l = _createForOfIteratorHelper(t.split("&"));
      try {
        for (l.s(); !(a = l.n()).done; ) {
          var p = a.value.replace(/\+/g, " ").split("="),
            d = (0, u.default)(p, 2),
            v = d[0],
            y = d[1];
          (y = void 0 === y ? null : decode(y, r)), o(decode(v, r), y, i);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
      return Object.keys(i)
        .sort()
        .reduce(function (t, r) {
          var o = i[r];
          return (
            Boolean(o) && "object" === (0, c.default)(o) && !Array.isArray(o)
              ? (t[r] = keysSorter(o))
              : (t[r] = o),
            t
          );
        }, Object.create(null));
    }
    (r.extract = extract),
      (r.parse = parse),
      (r.stringify = function (t, r) {
        if (!t) return "";
        var o = (function encoderForArrayFormat(t) {
            switch (t.arrayFormat) {
              case "index":
                return function (r, o, i) {
                  return null === o
                    ? [encode(r, t), "[", i, "]"].join("")
                    : [
                        encode(r, t),
                        "[",
                        encode(i, t),
                        "]=",
                        encode(o, t),
                      ].join("");
                };
              case "bracket":
                return function (r, o) {
                  return null === o
                    ? [encode(r, t), "[]"].join("")
                    : [encode(r, t), "[]=", encode(o, t)].join("");
                };
              default:
                return function (r, o) {
                  return null === o
                    ? encode(r, t)
                    : [encode(r, t), "=", encode(o, t)].join("");
                };
            }
          })(
            (r = Object.assign(
              { encode: !0, strict: !0, arrayFormat: "none" },
              r
            ))
          ),
          i = Object.keys(t);
        return (
          !1 !== r.sort && i.sort(r.sort),
          i
            .map(function (i) {
              var u = t[i];
              if (void 0 === u) return "";
              if (null === u) return encode(i, r);
              if (Array.isArray(u)) {
                var c,
                  a = [],
                  l = _createForOfIteratorHelper(u.slice());
                try {
                  for (l.s(); !(c = l.n()).done; ) {
                    var p = c.value;
                    void 0 !== p && a.push(o(i, p, a.length));
                  }
                } catch (t) {
                  l.e(t);
                } finally {
                  l.f();
                }
                return a.join("&");
              }
              return encode(i, r) + "=" + encode(u, r);
            })
            .filter(function (t) {
              return t.length > 0;
            })
            .join("&")
        );
      }),
      (r.parseUrl = function (t, r) {
        var o = t.indexOf("#");
        return (
          -1 !== o && (t = t.slice(0, o)),
          { url: t.split("?")[0] || "", query: parse(extract(t), r) }
        );
      });
  },
  function (t, r, o) {
    var i = o(8),
      u = o(102),
      c = o(16).f,
      a = o(48).f,
      l = o(87),
      p = o(81),
      d = i.RegExp,
      v = d,
      y = d.prototype,
      h = /a/g,
      g = /a/g,
      m = new d(h) !== h;
    if (
      o(17) &&
      (!m ||
        o(11)(function () {
          return (
            (g[o(7)("match")] = !1),
            d(h) != h || d(g) == g || "/a/i" != d(h, "i")
          );
        }))
    ) {
      d = function RegExp(t, r) {
        var o = this instanceof d,
          i = l(t),
          c = void 0 === r;
        return !o && i && t.constructor === d && c
          ? t
          : u(
              m
                ? new v(i && !c ? t.source : t, r)
                : v(
                    (i = t instanceof d) ? t.source : t,
                    i && c ? p.call(t) : r
                  ),
              o ? this : y,
              d
            );
      };
      for (
        var proxy = function (t) {
            (t in d) ||
              c(d, t, {
                configurable: !0,
                get: function () {
                  return v[t];
                },
                set: function (r) {
                  v[t] = r;
                },
              });
          },
          _ = a(v),
          b = 0;
        _.length > b;

      )
        proxy(_[b++]);
      (y.constructor = d), (d.prototype = y), o(22)(i, "RegExp", d);
    }
    o(125)("RegExp");
  },
  function (t, r, o) {
    var i = o(19),
      u = o(164).set;
    t.exports = function (t, r, o) {
      var c,
        a = r.constructor;
      return (
        a !== o &&
          "function" == typeof a &&
          (c = a.prototype) !== o.prototype &&
          i(c) &&
          u &&
          u(t, c),
        t
      );
    };
  },
  function (t, r, o) {
    t.exports =
      !o(17) &&
      !o(11)(function () {
        return (
          7 !=
          Object.defineProperty(o(84)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, r, o) {
    var i = o(8),
      u = o(38),
      c = o(59),
      a = o(105),
      l = o(16).f;
    t.exports = function (t) {
      var r = u.Symbol || (u.Symbol = c ? {} : i.Symbol || {});
      "_" == t.charAt(0) || t in r || l(r, t, { value: a.f(t) });
    };
  },
  function (t, r, o) {
    r.f = o(7);
  },
  function (t, r, o) {
    var i = o(23),
      u = o(27),
      c = o(114)(!1),
      a = o(77)("IE_PROTO");
    t.exports = function (t, r) {
      var o,
        l = u(t),
        p = 0,
        d = [];
      for (o in l) o != a && i(l, o) && d.push(o);
      for (; r.length > p; ) i(l, (o = r[p++])) && (~c(d, o) || d.push(o));
      return d;
    };
  },
  ,
  ,
  function (t, r, o) {
    var i = o(7)("iterator"),
      u = !1;
    try {
      var c = [7][i]();
      (c.return = function () {
        u = !0;
      }),
        Array.from(c, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, r) {
      if (!r && !u) return !1;
      var o = !1;
      try {
        var c = [7],
          a = c[i]();
        (a.next = function () {
          return { done: (o = !0) };
        }),
          (c[i] = function () {
            return a;
          }),
          t(c);
      } catch (t) {}
      return o;
    };
  },
  ,
  function (t, r, o) {
    var i = o(12);
    i(i.S + i.F, "Object", { assign: o(142) });
  },
  ,
  function (t, r, o) {
    "use strict";
    var i = o(8),
      u = o(23),
      c = o(30),
      a = o(102),
      l = o(55),
      p = o(11),
      d = o(48).f,
      v = o(61).f,
      y = o(16).f,
      h = o(124).trim,
      g = "Number",
      m = i.Number,
      _ = m,
      b = m.prototype,
      S = c(o(58)(b)) == g,
      w = "trim" in String.prototype,
      toNumber = function (t) {
        var r = l(t, !1);
        if ("string" == typeof r && r.length > 2) {
          var o,
            i,
            u,
            c = (r = w ? r.trim() : h(r, 3)).charCodeAt(0);
          if (43 === c || 45 === c) {
            if (88 === (o = r.charCodeAt(2)) || 120 === o) return NaN;
          } else if (48 === c) {
            switch (r.charCodeAt(1)) {
              case 66:
              case 98:
                (i = 2), (u = 49);
                break;
              case 79:
              case 111:
                (i = 8), (u = 55);
                break;
              default:
                return +r;
            }
            for (var a, p = r.slice(2), d = 0, v = p.length; d < v; d++)
              if ((a = p.charCodeAt(d)) < 48 || a > u) return NaN;
            return parseInt(p, i);
          }
        }
        return +r;
      };
    if (!m(" 0o1") || !m("0b1") || m("+0x1")) {
      m = function Number(t) {
        var r = arguments.length < 1 ? 0 : t,
          o = this;
        return o instanceof m &&
          (S
            ? p(function () {
                b.valueOf.call(o);
              })
            : c(o) != g)
          ? a(new _(toNumber(r)), o, m)
          : toNumber(r);
      };
      for (
        var O,
          x = o(17)
            ? d(_)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          E = 0;
        x.length > E;
        E++
      )
        u(_, (O = x[E])) && !u(m, O) && y(m, O, v(_, O));
      (m.prototype = b), (b.constructor = m), o(22)(i, g, m);
    }
  },
  function (t, r, o) {
    var i = o(27),
      u = o(49),
      c = o(123);
    t.exports = function (t) {
      return function (r, o, a) {
        var l,
          p = i(r),
          d = u(p.length),
          v = c(a, d);
        if (t && o != o) {
          for (; d > v; ) if ((l = p[v++]) != l) return !0;
        } else
          for (; d > v; v++)
            if ((t || v in p) && p[v] === o) return t || v || 0;
        return !t && -1;
      };
    };
  },
  function (t, r, o) {
    var i = o(8).document;
    t.exports = i && i.documentElement;
  },
  function (t, r, o) {
    var i = o(20);
    t.exports = function (t, r, o, u) {
      try {
        return u ? r(i(o)[0], o[1]) : r(o);
      } catch (r) {
        var c = t.return;
        throw (void 0 !== c && i(c.call(t)), r);
      }
    };
  },
  function (t, r, o) {
    var i = o(43),
      u = o(7)("iterator"),
      c = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (i.Array === t || c[u] === t);
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(16),
      u = o(41);
    t.exports = function (t, r, o) {
      r in t ? i.f(t, r, u(0, o)) : (t[r] = o);
    };
  },
  function (t, r, o) {
    var i = o(85),
      u = o(7)("iterator"),
      c = o(43);
    t.exports = o(38).getIteratorMethod = function (t) {
      if (null != t) return t[u] || t["@@iterator"] || c[i(t)];
    };
  },
  ,
  ,
  function (t, r, o) {
    var i = o(42)("meta"),
      u = o(19),
      c = o(23),
      a = o(16).f,
      l = 0,
      p =
        Object.isExtensible ||
        function () {
          return !0;
        },
      d = !o(11)(function () {
        return p(Object.preventExtensions({}));
      }),
      setMeta = function (t) {
        a(t, i, { value: { i: "O" + ++l, w: {} } });
      },
      v = (t.exports = {
        KEY: i,
        NEED: !1,
        fastKey: function (t, r) {
          if (!u(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!c(t, i)) {
            if (!p(t)) return "F";
            if (!r) return "E";
            setMeta(t);
          }
          return t[i].i;
        },
        getWeak: function (t, r) {
          if (!c(t, i)) {
            if (!p(t)) return !0;
            if (!r) return !1;
            setMeta(t);
          }
          return t[i].w;
        },
        onFreeze: function (t) {
          return d && v.NEED && p(t) && !c(t, i) && setMeta(t), t;
        },
      });
  },
  function (t, r, o) {
    var i = o(73),
      u = Math.max,
      c = Math.min;
    t.exports = function (t, r) {
      return (t = i(t)) < 0 ? u(t + r, 0) : c(t, r);
    };
  },
  function (t, r, o) {
    var i = o(12),
      u = o(34),
      c = o(11),
      a = o(165),
      l = "[" + a + "]",
      p = RegExp("^" + l + l + "*"),
      d = RegExp(l + l + "*$"),
      exporter = function (t, r, o) {
        var u = {},
          l = c(function () {
            return !!a[t]() || "​" != "​"[t]();
          }),
          p = (u[t] = l ? r(v) : a[t]);
        o && (u[o] = p), i(i.P + i.F * l, "String", u);
      },
      v = (exporter.trim = function (t, r) {
        return (
          (t = String(u(t))),
          1 & r && (t = t.replace(p, "")),
          2 & r && (t = t.replace(d, "")),
          t
        );
      });
    t.exports = exporter;
  },
  function (t, r, o) {
    "use strict";
    var i = o(8),
      u = o(16),
      c = o(17),
      a = o(7)("species");
    t.exports = function (t) {
      var r = i[t];
      c &&
        r &&
        !r[a] &&
        u.f(r, a, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  ,
  ,
  ,
  function (t, r, o) {
    var i = o(30);
    t.exports =
      Array.isArray ||
      function isArray(t) {
        return "Array" == i(t);
      };
  },
  function (t, r) {
    var o = (t.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = o);
  },
  ,
  ,
  ,
  ,
  function (t, r, o) {
    "use strict";
    var i = o(12),
      u = o(202)(5),
      c = "find",
      a = !0;
    c in [] &&
      Array(1).find(function () {
        a = !1;
      }),
      i(i.P + i.F * a, "Array", {
        find: function find(t) {
          return u(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
      o(75)(c);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r, o) {
    "use strict";
    var i = o(31),
      u = o(60),
      c = o(52),
      a = o(33),
      l = o(89),
      p = Object.assign;
    t.exports =
      !p ||
      o(11)(function () {
        var t = {},
          r = {},
          o = Symbol(),
          i = "abcdefghijklmnopqrst";
        return (
          (t[o] = 7),
          i.split("").forEach(function (t) {
            r[t] = t;
          }),
          7 != p({}, t)[o] || Object.keys(p({}, r)).join("") != i
        );
      })
        ? function assign(t, r) {
            for (
              var o = a(t), p = arguments.length, d = 1, v = u.f, y = c.f;
              p > d;

            )
              for (
                var h,
                  g = l(arguments[d++]),
                  m = v ? i(g).concat(v(g)) : i(g),
                  _ = m.length,
                  b = 0;
                _ > b;

              )
                y.call(g, (h = m[b++])) && (o[h] = g[h]);
            return o;
          }
        : p;
  },
  function (t, r) {
    t.exports = function (t, r) {
      return { value: r, done: !!t };
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r, o) {
    var i = o(31),
      u = o(60),
      c = o(52);
    t.exports = function (t) {
      var r = i(t),
        o = u.f;
      if (o)
        for (var a, l = o(t), p = c.f, d = 0; l.length > d; )
          p.call(t, (a = l[d++])) && r.push(a);
      return r;
    };
  },
  function (t, r, o) {
    var i = o(16),
      u = o(20),
      c = o(31);
    t.exports = o(17)
      ? Object.defineProperties
      : function defineProperties(t, r) {
          u(t);
          for (var o, a = c(r), l = a.length, p = 0; l > p; )
            i.f(t, (o = a[p++]), r[o]);
          return t;
        };
  },
  function (t, r, o) {
    var i = o(27),
      u = o(48).f,
      c = {}.toString,
      a =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function getOwnPropertyNames(t) {
      return a && "[object Window]" == c.call(t)
        ? (function (t) {
            try {
              return u(t);
            } catch (t) {
              return a.slice();
            }
          })(t)
        : u(i(t));
    };
  },
  function (t, r, o) {
    var i = o(73),
      u = o(34);
    t.exports = function (t) {
      return function (r, o) {
        var c,
          a,
          l = String(u(r)),
          p = i(o),
          d = l.length;
        return p < 0 || p >= d
          ? t
            ? ""
            : void 0
          : (c = l.charCodeAt(p)) < 55296 ||
            c > 56319 ||
            p + 1 === d ||
            (a = l.charCodeAt(p + 1)) < 56320 ||
            a > 57343
          ? t
            ? l.charAt(p)
            : c
          : t
          ? l.slice(p, p + 2)
          : a - 56320 + ((c - 55296) << 10) + 65536;
      };
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(58),
      u = o(41),
      c = o(56),
      a = {};
    o(24)(a, o(7)("iterator"), function () {
      return this;
    }),
      (t.exports = function (t, r, o) {
        (t.prototype = i(a, { next: u(1, o) })), c(t, r + " Iterator");
      });
  },
  function (t, r, o) {
    var i = o(23),
      u = o(33),
      c = o(77)("IE_PROTO"),
      a = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function (t) {
        return (
          (t = u(t)),
          i(t, c)
            ? t[c]
            : "function" == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? a
            : null
        );
      };
  },
  function (t, r, o) {
    o(17) &&
      "g" != /./g.flags &&
      o(16).f(RegExp.prototype, "flags", { configurable: !0, get: o(81) });
  },
  function (t, r) {
    t.exports = function _arrayWithHoles(t) {
      if (Array.isArray(t)) return t;
    };
  },
  function (t, r) {
    t.exports = function _iterableToArrayLimit(t, r) {
      var o = [],
        i = !0,
        u = !1,
        c = void 0;
      try {
        for (
          var a, l = t[Symbol.iterator]();
          !(i = (a = l.next()).done) && (o.push(a.value), !r || o.length !== r);
          i = !0
        );
      } catch (t) {
        (u = !0), (c = t);
      } finally {
        try {
          i || null == l.return || l.return();
        } finally {
          if (u) throw c;
        }
      }
      return o;
    };
  },
  function (t, r) {
    t.exports = function _nonIterableRest() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  },
  function (t, r, o) {
    var i = o(19),
      u = o(20),
      check = function (t, r) {
        if ((u(t), !i(r) && null !== r))
          throw TypeError(r + ": can't set as prototype!");
      };
    t.exports = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function (t, r, i) {
              try {
                (i = o(37)(
                  Function.call,
                  o(61).f(Object.prototype, "__proto__").set,
                  2
                ))(t, []),
                  (r = !(t instanceof Array));
              } catch (t) {
                r = !0;
              }
              return function setPrototypeOf(t, o) {
                return check(t, o), r ? (t.__proto__ = o) : i(t, o), t;
              };
            })({}, !1)
          : void 0),
      check: check,
    };
  },
  function (t, r) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  },
  function (t, r, o) {
    var i = o(12),
      u = o(38),
      c = o(11);
    t.exports = function (t, r) {
      var o = (u.Object || {})[t] || Object[t],
        a = {};
      (a[t] = r(o)),
        i(
          i.S +
            i.F *
              c(function () {
                o(1);
              }),
          "Object",
          a
        );
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(11);
    t.exports = function (t, r) {
      return (
        !!t &&
        i(function () {
          r ? t.call(null, function () {}, 1) : t.call(null);
        })
      );
    };
  },
  function (t, r, o) {
    "use strict";
    o(29),
      o(5),
      o(36),
      (t.exports = function (t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, function (t) {
          return "%".concat(t.charCodeAt(0).toString(16).toUpperCase());
        });
      });
  },
  function (t, r, o) {
    "use strict";
    var i = "%[a-f0-9]{2}",
      u = new RegExp(i, "gi"),
      c = new RegExp("(" + i + ")+", "gi");
    function decodeComponents(t, r) {
      try {
        return decodeURIComponent(t.join(""));
      } catch (t) {}
      if (1 === t.length) return t;
      r = r || 1;
      var o = t.slice(0, r),
        i = t.slice(r);
      return Array.prototype.concat.call(
        [],
        decodeComponents(o),
        decodeComponents(i)
      );
    }
    function decode(t) {
      try {
        return decodeURIComponent(t);
      } catch (i) {
        for (var r = t.match(u), o = 1; o < r.length; o++)
          r = (t = decodeComponents(r, o).join("")).match(u);
        return t;
      }
    }
    t.exports = function (t) {
      if ("string" != typeof t)
        throw new TypeError(
          "Expected `encodedURI` to be of type `string`, got `" + typeof t + "`"
        );
      try {
        return (t = t.replace(/\+/g, " ")), decodeURIComponent(t);
      } catch (r) {
        return (function customDecodeURIComponent(t) {
          for (var r = { "%FE%FF": "��", "%FF%FE": "��" }, o = c.exec(t); o; ) {
            try {
              r[o[0]] = decodeURIComponent(o[0]);
            } catch (t) {
              var i = decode(o[0]);
              i !== o[0] && (r[o[0]] = i);
            }
            o = c.exec(t);
          }
          r["%C2"] = "�";
          for (var u = Object.keys(r), a = 0; a < u.length; a++) {
            var l = u[a];
            t = t.replace(new RegExp(l, "g"), r[l]);
          }
          return t;
        })(t);
      }
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r) {
    var o = (t.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = o);
  },
  function (t, r, o) {
    var i = o(189),
      u = o(130),
      c = o(417),
      a = o(233),
      l = o(232),
      $export = function (t, r, o) {
        var p,
          d,
          v,
          y = t & $export.F,
          h = t & $export.G,
          g = t & $export.S,
          m = t & $export.P,
          _ = t & $export.B,
          b = t & $export.W,
          S = h ? u : u[r] || (u[r] = {}),
          w = S.prototype,
          O = h ? i : g ? i[r] : (i[r] || {}).prototype;
        for (p in (h && (o = r), o))
          ((d = !y && O && void 0 !== O[p]) && l(S, p)) ||
            ((v = d ? O[p] : o[p]),
            (S[p] =
              h && "function" != typeof O[p]
                ? o[p]
                : _ && d
                ? c(v, i)
                : b && O[p] == v
                ? (function (t) {
                    var F = function (r, o, i) {
                      if (this instanceof t) {
                        switch (arguments.length) {
                          case 0:
                            return new t();
                          case 1:
                            return new t(r);
                          case 2:
                            return new t(r, o);
                        }
                        return new t(r, o, i);
                      }
                      return t.apply(this, arguments);
                    };
                    return (F.prototype = t.prototype), F;
                  })(v)
                : m && "function" == typeof v
                ? c(Function.call, v)
                : v),
            m &&
              (((S.virtual || (S.virtual = {}))[p] = v),
              t & $export.R && w && !w[p] && a(w, p, v)));
      };
    ($export.F = 1),
      ($export.G = 2),
      ($export.S = 4),
      ($export.P = 8),
      ($export.B = 16),
      ($export.W = 32),
      ($export.U = 64),
      ($export.R = 128),
      (t.exports = $export);
  },
  ,
  ,
  ,
  ,
  function (t, r) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, r, o) {
    t.exports = !o(317)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, r, o) {
    t.exports = o(972);
  },
  function (t, r, o) {
    var i = o(576)("wks"),
      u = o(420),
      c = o(189).Symbol,
      a = "function" == typeof c;
    (t.exports = function (t) {
      return i[t] || (i[t] = (a && c[t]) || (a ? c : u)("Symbol." + t));
    }).store = i;
  },
  ,
  ,
  ,
  function (t, r, o) {
    var i = o(37),
      u = o(89),
      c = o(33),
      a = o(49),
      l = o(351);
    t.exports = function (t, r) {
      var o = 1 == t,
        p = 2 == t,
        d = 3 == t,
        v = 4 == t,
        y = 6 == t,
        h = 5 == t || y,
        g = r || l;
      return function (r, l, m) {
        for (
          var _,
            b,
            S = c(r),
            w = u(S),
            O = i(l, m, 3),
            x = a(w.length),
            E = 0,
            I = o ? g(r, x) : p ? g(r, 0) : void 0;
          x > E;
          E++
        )
          if ((h || E in w) && ((b = O((_ = w[E]), E, S)), t))
            if (o) I[E] = b;
            else if (b)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return _;
                case 6:
                  return E;
                case 2:
                  I.push(_);
              }
            else if (v) return !1;
        return y ? -1 : d || v ? v : I;
      };
    };
  },
  ,
  ,
  ,
  ,
  ,
  function (t, r, o) {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
    var i = function getApiUrl(t) {
      switch (t) {
        case "end2end":
          return "http://api_v2:80";
        case "devenv":
          return "http://localhost:8082";
        case "testing":
          return "https://api-v2-testing.plaid.com";
        case "sandbox":
          return "https://sandbox.plaid.com";
        case "development":
          return "https://development.plaid.com";
        case "production":
          return "https://production.plaid.com";
        default:
          throw new Error("Invalid environment: ".concat(t));
      }
    };
    r.default = i;
  },
  function (t, r, o) {
    var i = o(234),
      u = o(678),
      c = o(571),
      a = Object.defineProperty;
    r.f = o(196)
      ? Object.defineProperty
      : function defineProperty(t, r, o) {
          if ((i(t), (r = c(r, !0)), i(o), u))
            try {
              return a(t, r, o);
            } catch (t) {}
          if ("get" in o || "set" in o)
            throw TypeError("Accessors not supported!");
          return "value" in o && (t[r] = o.value), t;
        };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r, o) {
    var i = o(567),
      u = o(569);
    t.exports = function (t) {
      return i(u(t));
    };
  },
  function (t, r) {
    var o = {}.hasOwnProperty;
    t.exports = function (t, r) {
      return o.call(t, r);
    };
  },
  function (t, r, o) {
    var i = o(209),
      u = o(381);
    t.exports = o(196)
      ? function (t, r, o) {
          return i.f(t, r, u(1, o));
        }
      : function (t, r, o) {
          return (t[r] = o), t;
        };
  },
  function (t, r, o) {
    var i = o(195);
    t.exports = function (t) {
      if (!i(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r, o) {
    var i = o(352);
    t.exports = function (t, r) {
      return new (i(t))(r);
    };
  },
  function (t, r, o) {
    var i = o(19),
      u = o(129),
      c = o(7)("species");
    t.exports = function (t) {
      var r;
      return (
        u(t) &&
          ("function" != typeof (r = t.constructor) ||
            (r !== Array && !u(r.prototype)) ||
            (r = void 0),
          i(r) && null === (r = r[c]) && (r = void 0)),
        void 0 === r ? Array : r
      );
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r) {
    t.exports = function (t, r) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: r,
      };
    };
  },
  function (t, r) {
    t.exports = {};
  },
  function (t, r, o) {
    var i = o(685),
      u = o(577);
    t.exports =
      Object.keys ||
      function keys(t) {
        return i(t, u);
      };
  },
  function (t, r, o) {
    var i = o(569);
    t.exports = function (t) {
      return Object(i(t));
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r, o) {
    var i = o(677),
      u = o(197),
      c = o(418),
      a = o(992);
    function _getRequireWildcardCache() {
      if ("function" != typeof a) return null;
      var t = new a();
      return (
        (_getRequireWildcardCache = function _getRequireWildcardCache() {
          return t;
        }),
        t
      );
    }
    t.exports = function _interopRequireWildcard(t) {
      if (t && t.__esModule) return t;
      if (null === t || ("object" !== c(t) && "function" != typeof t))
        return { default: t };
      var r = _getRequireWildcardCache();
      if (r && r.has(t)) return r.get(t);
      var o = {},
        a = u && i;
      for (var l in t)
        if (Object.prototype.hasOwnProperty.call(t, l)) {
          var p = a ? i(t, l) : null;
          p && (p.get || p.set) ? u(o, l, p) : (o[l] = t[l]);
        }
      return (o.default = t), r && r.set(t, o), o;
    };
  },
  function (t, r) {
    r.f = {}.propertyIsEnumerable;
  },
  function (t, r, o) {
    var i = o(681);
    t.exports = function (t, r, o) {
      if ((i(t), void 0 === r)) return t;
      switch (o) {
        case 1:
          return function (o) {
            return t.call(r, o);
          };
        case 2:
          return function (o, i) {
            return t.call(r, o, i);
          };
        case 3:
          return function (o, i, u) {
            return t.call(r, o, i, u);
          };
      }
      return function () {
        return t.apply(r, arguments);
      };
    };
  },
  function (t, r, o) {
    var i = o(974),
      u = o(986);
    function _typeof(r) {
      return (
        (t.exports = _typeof =
          "function" == typeof u && "symbol" == typeof i
            ? function _typeof(t) {
                return typeof t;
              }
            : function _typeof(t) {
                return t &&
                  "function" == typeof u &&
                  t.constructor === u &&
                  t !== u.prototype
                  ? "symbol"
                  : typeof t;
              }),
        _typeof(r)
      );
    }
    t.exports = _typeof;
  },
  function (t, r) {
    t.exports = !0;
  },
  function (t, r) {
    var o = 0,
      i = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(
        void 0 === t ? "" : t,
        ")_",
        (++o + i).toString(36)
      );
    };
  },
  function (t, r, o) {
    var i = o(209).f,
      u = o(232),
      c = o(198)("toStringTag");
    t.exports = function (t, r, o) {
      t &&
        !u((t = o ? t : t.prototype), c) &&
        i(t, c, { configurable: !0, value: r });
    };
  },
  function (t, r, o) {
    var i = o(420)("meta"),
      u = o(195),
      c = o(232),
      a = o(209).f,
      l = 0,
      p =
        Object.isExtensible ||
        function () {
          return !0;
        },
      d = !o(317)(function () {
        return p(Object.preventExtensions({}));
      }),
      setMeta = function (t) {
        a(t, i, { value: { i: "O" + ++l, w: {} } });
      },
      v = (t.exports = {
        KEY: i,
        NEED: !1,
        fastKey: function (t, r) {
          if (!u(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!c(t, i)) {
            if (!p(t)) return "F";
            if (!r) return "E";
            setMeta(t);
          }
          return t[i].i;
        },
        getWeak: function (t, r) {
          if (!c(t, i)) {
            if (!p(t)) return !0;
            if (!r) return !1;
            setMeta(t);
          }
          return t[i].w;
        },
        onFreeze: function (t) {
          return d && v.NEED && p(t) && !c(t, i) && setMeta(t), t;
        },
      });
  },
  function (t, r) {
    r.f = Object.getOwnPropertySymbols;
  },
  function (t, r) {
    t.exports = function _interopRequireDefault(t) {
      return t && t.__esModule ? t : { default: t };
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r, o) {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
    r.default = function _default() {
      if (null == window.navigator)
        return {
          browserLanguage: "",
          isAndroid: !1,
          isIE: !1,
          isIOS: !1,
          isIOSChrome: !1,
          isMobile: !1,
        };
      var t = window.navigator,
        r = (function () {
          if (null != t.language && "" !== t.language) return t.language;
          var r = t.userLanguage;
          return null != r ? r : "";
        })(),
        o = /windows phone/i.test(t.userAgent),
        i = /android|silk/i.test(t.userAgent) && !o,
        u = /MSIE |Trident/i.test(t.userAgent),
        c = /iPad|iPhone|iPod/.test(t.userAgent) && !window.MSStream && !o;
      return {
        browserLanguage: r,
        isAndroid: i,
        isIE: u,
        isIOS: c,
        isIOSChrome: /CriOS/.test(t.userAgent),
        isMobile: c || i || o || /Mobi/i.test(t.userAgent),
      };
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r, o) {
    var i = o(568);
    t.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (t) {
          return "String" == i(t) ? t.split("") : Object(t);
        };
  },
  function (t, r) {
    var o = {}.toString;
    t.exports = function (t) {
      return o.call(t).slice(8, -1);
    };
  },
  function (t, r) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  function (t, r, o) {
    var i = o(416),
      u = o(381),
      c = o(231),
      a = o(571),
      l = o(232),
      p = o(678),
      d = Object.getOwnPropertyDescriptor;
    r.f = o(196)
      ? d
      : function getOwnPropertyDescriptor(t, r) {
          if (((t = c(t)), (r = a(r, !0)), p))
            try {
              return d(t, r);
            } catch (t) {}
          if (l(t, r)) return u(!i.f.call(t, r), t[r]);
        };
  },
  function (t, r, o) {
    var i = o(195);
    t.exports = function (t, r) {
      if (!i(t)) return t;
      var o, u;
      if (r && "function" == typeof (o = t.toString) && !i((u = o.call(t))))
        return u;
      if ("function" == typeof (o = t.valueOf) && !i((u = o.call(t)))) return u;
      if (!r && "function" == typeof (o = t.toString) && !i((u = o.call(t))))
        return u;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, r) {
    var o = Math.ceil,
      i = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? i : o)(t);
    };
  },
  function (t, r, o) {
    t.exports = o(233);
  },
  function (t, r, o) {
    var i = o(572),
      u = Math.min;
    t.exports = function (t) {
      return t > 0 ? u(i(t), 9007199254740991) : 0;
    };
  },
  function (t, r, o) {
    var i = o(576)("keys"),
      u = o(420);
    t.exports = function (t) {
      return i[t] || (i[t] = u(t));
    };
  },
  function (t, r, o) {
    var i = o(130),
      u = o(189),
      c = "__core-js_shared__",
      a = u[c] || (u[c] = {});
    (t.exports = function (t, r) {
      return a[t] || (a[t] = void 0 !== r ? r : {});
    })("versions", []).push({
      version: i.version,
      mode: o(419) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, r) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    );
  },
  function (t, r, o) {
    r.f = o(198);
  },
  function (t, r, o) {
    var i = o(189),
      u = o(130),
      c = o(419),
      a = o(578),
      l = o(209).f;
    t.exports = function (t) {
      var r = u.Symbol || (u.Symbol = c ? {} : i.Symbol || {});
      "_" == t.charAt(0) || t in r || l(r, t, { value: a.f(t) });
    };
  },
  function (t, r, o) {
    var i = o(685),
      u = o(577).concat("length", "prototype");
    r.f =
      Object.getOwnPropertyNames ||
      function getOwnPropertyNames(t) {
        return i(t, u);
      };
  },
  function (t, r, o) {
    var i = o(417),
      u = o(567),
      c = o(384),
      a = o(574),
      l = o(995);
    t.exports = function (t, r) {
      var o = 1 == t,
        p = 2 == t,
        d = 3 == t,
        v = 4 == t,
        y = 6 == t,
        h = 5 == t || y,
        g = r || l;
      return function (r, l, m) {
        for (
          var _,
            b,
            S = c(r),
            w = u(S),
            O = i(l, m, 3),
            x = a(w.length),
            E = 0,
            I = o ? g(r, x) : p ? g(r, 0) : void 0;
          x > E;
          E++
        )
          if ((h || E in w) && ((b = O((_ = w[E]), E, S)), t))
            if (o) I[E] = b;
            else if (b)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return _;
                case 6:
                  return E;
                case 2:
                  I.push(_);
              }
            else if (v) return !1;
        return y ? -1 : d || v ? v : I;
      };
    };
  },
  function (t, r, o) {
    var i = o(417),
      u = o(998),
      c = o(999),
      a = o(234),
      l = o(574),
      p = o(1e3),
      d = {},
      v = {};
    ((r = t.exports = function (t, r, o, y, h) {
      var g,
        m,
        _,
        b,
        S = h
          ? function () {
              return t;
            }
          : p(t),
        w = i(o, y, r ? 2 : 1),
        O = 0;
      if ("function" != typeof S) throw TypeError(t + " is not iterable!");
      if (c(S)) {
        for (g = l(t.length); g > O; O++)
          if ((b = r ? w(a((m = t[O]))[0], m[1]) : w(t[O])) === d || b === v)
            return b;
      } else
        for (_ = S.call(t); !(m = _.next()).done; )
          if ((b = u(_, w, m.value, r)) === d || b === v) return b;
    }).BREAK = d),
      (r.RETURN = v);
  },
  function (t, r, o) {
    var i = o(195);
    t.exports = function (t, r) {
      if (!i(t) || t._t !== r)
        throw TypeError("Incompatible receiver, " + r + " required!");
      return t;
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(415),
      u = o(424),
      c = o(197);
    o(135),
      c(r, "__esModule", { value: !0 }),
      (r.getMetaViewport = r.writeLocalStorage = r.readLocalStorage = r.createMessageHandler = r.sendMessage = r.getWindowOrigin = r.getUniqueId = r.findScriptTag = r.find = r.buildLinkUrl = void 0);
    var a = u(o(418)),
      l = u(o(693)),
      p = u(o(1028)),
      d = u(o(100)),
      v = i(o(1031)),
      y = o(71);
    r.buildLinkUrl = function buildLinkUrl(t, r) {
      var o =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v,
        i =
          o.LINK_CLIENT_STABLE_URL.length > 0
            ? o.LINK_CLIENT_STABLE_URL
            : o.LINK_CLIENT_URL,
        u = r ? o.FLEX_LINK_HTML_PATH : o.LINK_HTML_PATH,
        c = d.default.stringify(t);
      return "".concat(i).concat(u, "?").concat(c);
    };
    r.find = function find(t, r) {
      var o,
        i = t.length;
      for (o = 0; o < i; o += 1) if (r(t[o])) return t[o];
    };
    r.findScriptTag = function findScriptTag() {
      for (
        var t = document.getElementsByTagName("script"), r = 0, o = t.length;
        r < o;
        r += 1
      )
        if (/link-initialize(\..*?)?\.js$/.test(t[r].src)) return t[r];
      throw new Error("Failed to find script");
    };
    var h,
      g =
        ((h = 0),
        function () {
          return (h += 1), String(h);
        });
    r.getUniqueId = g;
    r.getWindowOrigin = function getWindowOrigin() {
      return null != window.location.origin
        ? window.location.origin
        : window.location.protocol +
            "//" +
            window.location.hostname +
            (window.location.port ? ":" + window.location.port : "");
    };
    r.sendMessage = function sendMessage(t) {
      return function (r) {
        var o = (0, p.default)({}, r, {
          action: "".concat(y.PLAID_INTERNAL_NAMESPACE, "::").concat(r.action),
        });
        t.postMessage((0, l.default)(o), "https://cdn.plaid.com");
      };
    };
    r.createMessageHandler = function createMessageHandler(t, r) {
      return function (o) {
        var i = (function parseJSON(t) {
          try {
            return JSON.parse(t);
          } catch (t) {
            return {};
          }
        })(o.data);
        for (var u in r)
          if (
            i.action ===
            "".concat(y.PLAID_INTERNAL_NAMESPACE, "-").concat(t, "::").concat(u)
          )
            return r[u](i);
      };
    };
    var m = "plaid-link";
    r.readLocalStorage = function readLocalStorage() {
      try {
        var t = window.localStorage.getItem(m);
        if (null == t) return null;
        var r = JSON.parse(t);
        return "object" !== (0, a.default)(r) ? null : r;
      } catch (t) {
        return null;
      }
    };
    r.writeLocalStorage = function writeLocalStorage(t) {
      try {
        window.localStorage.setItem(m, (0, l.default)(t));
      } catch (t) {
        return;
      }
    };
    r.getMetaViewport = function getMetaViewport() {
      var t = document.querySelectorAll('meta[name="viewport"]');
      if (0 === t.length) return "";
      var r = t[t.length - 1].getAttribute("content");
      return String(r);
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r, o) {
    t.exports = o(970);
  },
  function (t, r, o) {
    t.exports =
      !o(196) &&
      !o(317)(function () {
        return (
          7 !=
          Object.defineProperty(o(679)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, r, o) {
    var i = o(195),
      u = o(189).document,
      c = i(u) && i(u.createElement);
    t.exports = function (t) {
      return c ? u.createElement(t) : {};
    };
  },
  function (t, r, o) {
    var i = o(190),
      u = o(130),
      c = o(317);
    t.exports = function (t, r) {
      var o = (u.Object || {})[t] || Object[t],
        a = {};
      (a[t] = r(o)),
        i(
          i.S +
            i.F *
              c(function () {
                o(1);
              }),
          "Object",
          a
        );
    };
  },
  function (t, r) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(419),
      u = o(190),
      c = o(573),
      a = o(233),
      l = o(382),
      p = o(978),
      d = o(421),
      v = o(982),
      y = o(198)("iterator"),
      h = !([].keys && "next" in [].keys()),
      g = "keys",
      m = "values",
      returnThis = function () {
        return this;
      };
    t.exports = function (t, r, o, _, b, S, w) {
      p(o, r, _);
      var O,
        x,
        E,
        getMethod = function (t) {
          if (!h && t in k) return k[t];
          switch (t) {
            case g:
              return function keys() {
                return new o(this, t);
              };
            case m:
              return function values() {
                return new o(this, t);
              };
          }
          return function entries() {
            return new o(this, t);
          };
        },
        I = r + " Iterator",
        A = b == m,
        T = !1,
        k = t.prototype,
        P = k[y] || k["@@iterator"] || (b && k[b]),
        N = P || getMethod(b),
        L = b ? (A ? getMethod("entries") : N) : void 0,
        j = ("Array" == r && k.entries) || P;
      if (
        (j &&
          (E = v(j.call(new t()))) !== Object.prototype &&
          E.next &&
          (d(E, I, !0), i || "function" == typeof E[y] || a(E, y, returnThis)),
        A &&
          P &&
          P.name !== m &&
          ((T = !0),
          (N = function values() {
            return P.call(this);
          })),
        (i && !w) || (!h && !T && k[y]) || a(k, y, N),
        (l[r] = N),
        (l[I] = returnThis),
        b)
      )
        if (
          ((O = {
            values: A ? N : getMethod(m),
            keys: S ? N : getMethod(g),
            entries: L,
          }),
          w)
        )
          for (x in O) x in k || c(k, x, O[x]);
        else u(u.P + u.F * (h || T), r, O);
      return O;
    };
  },
  function (t, r, o) {
    var i = o(234),
      u = o(684),
      c = o(577),
      a = o(575)("IE_PROTO"),
      Empty = function () {},
      createDict = function () {
        var t,
          r = o(679)("iframe"),
          i = c.length;
        for (
          r.style.display = "none",
            o(981).appendChild(r),
            r.src = "javascript:",
            (t = r.contentWindow.document).open(),
            t.write("<script>document.F=Object</script>"),
            t.close(),
            createDict = t.F;
          i--;

        )
          delete createDict.prototype[c[i]];
        return createDict();
      };
    t.exports =
      Object.create ||
      function create(t, r) {
        var o;
        return (
          null !== t
            ? ((Empty.prototype = i(t)),
              (o = new Empty()),
              (Empty.prototype = null),
              (o[a] = t))
            : (o = createDict()),
          void 0 === r ? o : u(o, r)
        );
      };
  },
  function (t, r, o) {
    var i = o(209),
      u = o(234),
      c = o(383);
    t.exports = o(196)
      ? Object.defineProperties
      : function defineProperties(t, r) {
          u(t);
          for (var o, a = c(r), l = a.length, p = 0; l > p; )
            i.f(t, (o = a[p++]), r[o]);
          return t;
        };
  },
  function (t, r, o) {
    var i = o(232),
      u = o(231),
      c = o(979)(!1),
      a = o(575)("IE_PROTO");
    t.exports = function (t, r) {
      var o,
        l = u(t),
        p = 0,
        d = [];
      for (o in l) o != a && i(l, o) && d.push(o);
      for (; r.length > p; ) i(l, (o = r[p++])) && (~c(d, o) || d.push(o));
      return d;
    };
  },
  function (t, r, o) {
    o(983);
    for (
      var i = o(189),
        u = o(233),
        c = o(382),
        a = o(198)("toStringTag"),
        l = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
          ","
        ),
        p = 0;
      p < l.length;
      p++
    ) {
      var d = l[p],
        v = i[d],
        y = v && v.prototype;
      y && !y[a] && u(y, a, d), (c[d] = c.Array);
    }
  },
  function (t, r, o) {
    "use strict";
    var i = o(189),
      u = o(232),
      c = o(196),
      a = o(190),
      l = o(573),
      p = o(422).KEY,
      d = o(317),
      v = o(576),
      y = o(421),
      h = o(420),
      g = o(198),
      m = o(578),
      _ = o(579),
      b = o(988),
      S = o(688),
      w = o(234),
      O = o(195),
      x = o(384),
      E = o(231),
      I = o(571),
      A = o(381),
      T = o(683),
      k = o(989),
      P = o(570),
      N = o(423),
      L = o(209),
      j = o(383),
      M = P.f,
      R = L.f,
      C = k.f,
      U = i.Symbol,
      V = i.JSON,
      D = V && V.stringify,
      W = g("_hidden"),
      q = g("toPrimitive"),
      z = {}.propertyIsEnumerable,
      H = v("symbol-registry"),
      K = v("symbols"),
      G = v("op-symbols"),
      B = Object.prototype,
      J = "function" == typeof U && !!N.f,
      X = i.QObject,
      Y = !X || !X.prototype || !X.prototype.findChild,
      $ =
        c &&
        d(function () {
          return (
            7 !=
            T(
              R({}, "a", {
                get: function () {
                  return R(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, r, o) {
              var i = M(B, r);
              i && delete B[r], R(t, r, o), i && t !== B && R(B, r, i);
            }
          : R,
      wrap = function (t) {
        var r = (K[t] = T(U.prototype));
        return (r._k = t), r;
      },
      Q =
        J && "symbol" == typeof U.iterator
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              return t instanceof U;
            },
      Z = function defineProperty(t, r, o) {
        return (
          t === B && Z(G, r, o),
          w(t),
          (r = I(r, !0)),
          w(o),
          u(K, r)
            ? (o.enumerable
                ? (u(t, W) && t[W][r] && (t[W][r] = !1),
                  (o = T(o, { enumerable: A(0, !1) })))
                : (u(t, W) || R(t, W, A(1, {})), (t[W][r] = !0)),
              $(t, r, o))
            : R(t, r, o)
        );
      },
      tt = function defineProperties(t, r) {
        w(t);
        for (var o, i = b((r = E(r))), u = 0, c = i.length; c > u; )
          Z(t, (o = i[u++]), r[o]);
        return t;
      },
      et = function propertyIsEnumerable(t) {
        var r = z.call(this, (t = I(t, !0)));
        return (
          !(this === B && u(K, t) && !u(G, t)) &&
          (!(r || !u(this, t) || !u(K, t) || (u(this, W) && this[W][t])) || r)
        );
      },
      nt = function getOwnPropertyDescriptor(t, r) {
        if (((t = E(t)), (r = I(r, !0)), t !== B || !u(K, r) || u(G, r))) {
          var o = M(t, r);
          return (
            !o || !u(K, r) || (u(t, W) && t[W][r]) || (o.enumerable = !0), o
          );
        }
      },
      rt = function getOwnPropertyNames(t) {
        for (var r, o = C(E(t)), i = [], c = 0; o.length > c; )
          u(K, (r = o[c++])) || r == W || r == p || i.push(r);
        return i;
      },
      ot = function getOwnPropertySymbols(t) {
        for (
          var r, o = t === B, i = C(o ? G : E(t)), c = [], a = 0;
          i.length > a;

        )
          !u(K, (r = i[a++])) || (o && !u(B, r)) || c.push(K[r]);
        return c;
      };
    J ||
      (l(
        (U = function Symbol() {
          if (this instanceof U)
            throw TypeError("Symbol is not a constructor!");
          var t = h(arguments.length > 0 ? arguments[0] : void 0),
            $set = function (r) {
              this === B && $set.call(G, r),
                u(this, W) && u(this[W], t) && (this[W][t] = !1),
                $(this, t, A(1, r));
            };
          return c && Y && $(B, t, { configurable: !0, set: $set }), wrap(t);
        }).prototype,
        "toString",
        function toString() {
          return this._k;
        }
      ),
      (P.f = nt),
      (L.f = Z),
      (o(580).f = k.f = rt),
      (o(416).f = et),
      (N.f = ot),
      c && !o(419) && l(B, "propertyIsEnumerable", et, !0),
      (m.f = function (t) {
        return wrap(g(t));
      })),
      a(a.G + a.W + a.F * !J, { Symbol: U });
    for (
      var it = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
          ","
        ),
        ut = 0;
      it.length > ut;

    )
      g(it[ut++]);
    for (var ct = j(g.store), at = 0; ct.length > at; ) _(ct[at++]);
    a(a.S + a.F * !J, "Symbol", {
      for: function (t) {
        return u(H, (t += "")) ? H[t] : (H[t] = U(t));
      },
      keyFor: function keyFor(t) {
        if (!Q(t)) throw TypeError(t + " is not a symbol!");
        for (var r in H) if (H[r] === t) return r;
      },
      useSetter: function () {
        Y = !0;
      },
      useSimple: function () {
        Y = !1;
      },
    }),
      a(a.S + a.F * !J, "Object", {
        create: function create(t, r) {
          return void 0 === r ? T(t) : tt(T(t), r);
        },
        defineProperty: Z,
        defineProperties: tt,
        getOwnPropertyDescriptor: nt,
        getOwnPropertyNames: rt,
        getOwnPropertySymbols: ot,
      });
    var st = d(function () {
      N.f(1);
    });
    a(a.S + a.F * st, "Object", {
      getOwnPropertySymbols: function getOwnPropertySymbols(t) {
        return N.f(x(t));
      },
    }),
      V &&
        a(
          a.S +
            a.F *
              (!J ||
                d(function () {
                  var t = U();
                  return (
                    "[null]" != D([t]) ||
                    "{}" != D({ a: t }) ||
                    "{}" != D(Object(t))
                  );
                })),
          "JSON",
          {
            stringify: function stringify(t) {
              for (var r, o, i = [t], u = 1; arguments.length > u; )
                i.push(arguments[u++]);
              if (((o = r = i[1]), (O(r) || void 0 !== t) && !Q(t)))
                return (
                  S(r) ||
                    (r = function (t, r) {
                      if (
                        ("function" == typeof o && (r = o.call(this, t, r)),
                        !Q(r))
                      )
                        return r;
                    }),
                  (i[1] = r),
                  D.apply(V, i)
                );
            },
          }
        ),
      U.prototype[q] || o(233)(U.prototype, q, U.prototype.valueOf),
      y(U, "Symbol"),
      y(Math, "Math", !0),
      y(i.JSON, "JSON", !0);
  },
  function (t, r, o) {
    var i = o(568);
    t.exports =
      Array.isArray ||
      function isArray(t) {
        return "Array" == i(t);
      };
  },
  function (t, r) {},
  function (t, r, o) {
    "use strict";
    var i = o(196),
      u = o(383),
      c = o(423),
      a = o(416),
      l = o(384),
      p = o(567),
      d = Object.assign;
    t.exports =
      !d ||
      o(317)(function () {
        var t = {},
          r = {},
          o = Symbol(),
          i = "abcdefghijklmnopqrst";
        return (
          (t[o] = 7),
          i.split("").forEach(function (t) {
            r[t] = t;
          }),
          7 != d({}, t)[o] || Object.keys(d({}, r)).join("") != i
        );
      })
        ? function assign(t, r) {
            for (
              var o = l(t), d = arguments.length, v = 1, y = c.f, h = a.f;
              d > v;

            )
              for (
                var g,
                  m = p(arguments[v++]),
                  _ = y ? u(m).concat(y(m)) : u(m),
                  b = _.length,
                  S = 0;
                b > S;

              )
                (g = _[S++]), (i && !h.call(m, g)) || (o[g] = m[g]);
            return o;
          }
        : d;
  },
  function (t, r, o) {
    var i = o(233);
    t.exports = function (t, r, o) {
      for (var u in r) o && t[u] ? (t[u] = r[u]) : i(t, u, r[u]);
      return t;
    };
  },
  function (t, r) {
    t.exports = function (t, r, o, i) {
      if (!(t instanceof r) || (void 0 !== i && i in t))
        throw TypeError(o + ": incorrect invocation!");
      return t;
    };
  },
  function (t, r, o) {
    t.exports = o(1021);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, r, o) {
    t.exports = o(969);
  },
  function (t, r, o) {
    "use strict";
    var i = o(415),
      u = o(1007),
      c = i(o(1033)),
      a = i(o(584)),
      l = o(71);
    void 0 !== window.Plaid &&
      console.warn(
        "Warning: The Plaid link-initialize.js script was embedded more than once. This is an unsupported configuration and may lead to unpredictable behavior. Please ensure Plaid Link is embedded only once per page."
      );
    var p = { version: l.VERSION, create: u.create };
    window.Plaid = p;
    var d = a.findScriptTag();
    c.setUp(p, d), (t.exports = p);
    var v = document.createElement("link");
    (v.href = l.LINK_CLIENT_URL + "/link-dynamic-loader.js"),
      (v.rel = "prefetch"),
      (v.as = "script"),
      document.head.appendChild(v);
  },
  function (t, r, o) {
    o(971);
    var i = o(130).Object;
    t.exports = function getOwnPropertyDescriptor(t, r) {
      return i.getOwnPropertyDescriptor(t, r);
    };
  },
  function (t, r, o) {
    var i = o(231),
      u = o(570).f;
    o(680)("getOwnPropertyDescriptor", function () {
      return function getOwnPropertyDescriptor(t, r) {
        return u(i(t), r);
      };
    });
  },
  function (t, r, o) {
    o(973);
    var i = o(130).Object;
    t.exports = function defineProperty(t, r, o) {
      return i.defineProperty(t, r, o);
    };
  },
  function (t, r, o) {
    var i = o(190);
    i(i.S + i.F * !o(196), "Object", { defineProperty: o(209).f });
  },
  function (t, r, o) {
    t.exports = o(975);
  },
  function (t, r, o) {
    o(976), o(686), (t.exports = o(578).f("iterator"));
  },
  function (t, r, o) {
    "use strict";
    var i = o(977)(!0);
    o(682)(
      String,
      "String",
      function (t) {
        (this._t = String(t)), (this._i = 0);
      },
      function () {
        var t,
          r = this._t,
          o = this._i;
        return o >= r.length
          ? { value: void 0, done: !0 }
          : ((t = i(r, o)), (this._i += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, r, o) {
    var i = o(572),
      u = o(569);
    t.exports = function (t) {
      return function (r, o) {
        var c,
          a,
          l = String(u(r)),
          p = i(o),
          d = l.length;
        return p < 0 || p >= d
          ? t
            ? ""
            : void 0
          : (c = l.charCodeAt(p)) < 55296 ||
            c > 56319 ||
            p + 1 === d ||
            (a = l.charCodeAt(p + 1)) < 56320 ||
            a > 57343
          ? t
            ? l.charAt(p)
            : c
          : t
          ? l.slice(p, p + 2)
          : a - 56320 + ((c - 55296) << 10) + 65536;
      };
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(683),
      u = o(381),
      c = o(421),
      a = {};
    o(233)(a, o(198)("iterator"), function () {
      return this;
    }),
      (t.exports = function (t, r, o) {
        (t.prototype = i(a, { next: u(1, o) })), c(t, r + " Iterator");
      });
  },
  function (t, r, o) {
    var i = o(231),
      u = o(574),
      c = o(980);
    t.exports = function (t) {
      return function (r, o, a) {
        var l,
          p = i(r),
          d = u(p.length),
          v = c(a, d);
        if (t && o != o) {
          for (; d > v; ) if ((l = p[v++]) != l) return !0;
        } else
          for (; d > v; v++)
            if ((t || v in p) && p[v] === o) return t || v || 0;
        return !t && -1;
      };
    };
  },
  function (t, r, o) {
    var i = o(572),
      u = Math.max,
      c = Math.min;
    t.exports = function (t, r) {
      return (t = i(t)) < 0 ? u(t + r, 0) : c(t, r);
    };
  },
  function (t, r, o) {
    var i = o(189).document;
    t.exports = i && i.documentElement;
  },
  function (t, r, o) {
    var i = o(232),
      u = o(384),
      c = o(575)("IE_PROTO"),
      a = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function (t) {
        return (
          (t = u(t)),
          i(t, c)
            ? t[c]
            : "function" == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? a
            : null
        );
      };
  },
  function (t, r, o) {
    "use strict";
    var i = o(984),
      u = o(985),
      c = o(382),
      a = o(231);
    (t.exports = o(682)(
      Array,
      "Array",
      function (t, r) {
        (this._t = a(t)), (this._i = 0), (this._k = r);
      },
      function () {
        var t = this._t,
          r = this._k,
          o = this._i++;
        return !t || o >= t.length
          ? ((this._t = void 0), u(1))
          : u(0, "keys" == r ? o : "values" == r ? t[o] : [o, t[o]]);
      },
      "values"
    )),
      (c.Arguments = c.Array),
      i("keys"),
      i("values"),
      i("entries");
  },
  function (t, r) {
    t.exports = function () {};
  },
  function (t, r) {
    t.exports = function (t, r) {
      return { value: r, done: !!t };
    };
  },
  function (t, r, o) {
    t.exports = o(987);
  },
  function (t, r, o) {
    o(687), o(689), o(990), o(991), (t.exports = o(130).Symbol);
  },
  function (t, r, o) {
    var i = o(383),
      u = o(423),
      c = o(416);
    t.exports = function (t) {
      var r = i(t),
        o = u.f;
      if (o)
        for (var a, l = o(t), p = c.f, d = 0; l.length > d; )
          p.call(t, (a = l[d++])) && r.push(a);
      return r;
    };
  },
  function (t, r, o) {
    var i = o(231),
      u = o(580).f,
      c = {}.toString,
      a =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function getOwnPropertyNames(t) {
      return a && "[object Window]" == c.call(t)
        ? (function (t) {
            try {
              return u(t);
            } catch (t) {
              return a.slice();
            }
          })(t)
        : u(i(t));
    };
  },
  function (t, r, o) {
    o(579)("asyncIterator");
  },
  function (t, r, o) {
    o(579)("observable");
  },
  function (t, r, o) {
    t.exports = o(993);
  },
  function (t, r, o) {
    o(689), o(686), o(994), o(1003), o(1005), (t.exports = o(130).WeakMap);
  },
  function (t, r, o) {
    "use strict";
    var i,
      u = o(189),
      c = o(581)(0),
      a = o(573),
      l = o(422),
      p = o(690),
      d = o(997),
      v = o(195),
      y = o(583),
      h = o(583),
      g = !u.ActiveXObject && "ActiveXObject" in u,
      m = "WeakMap",
      _ = l.getWeak,
      b = Object.isExtensible,
      S = d.ufstore,
      wrapper = function (t) {
        return function WeakMap() {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      w = {
        get: function get(t) {
          if (v(t)) {
            var r = _(t);
            return !0 === r ? S(y(this, m)).get(t) : r ? r[this._i] : void 0;
          }
        },
        set: function set(t, r) {
          return d.def(y(this, m), t, r);
        },
      },
      O = (t.exports = o(1002)(m, wrapper, w, d, !0, !0));
    h &&
      g &&
      (p((i = d.getConstructor(wrapper, m)).prototype, w),
      (l.NEED = !0),
      c(["delete", "has", "get", "set"], function (t) {
        var r = O.prototype,
          o = r[t];
        a(r, t, function (r, u) {
          if (v(r) && !b(r)) {
            this._f || (this._f = new i());
            var c = this._f[t](r, u);
            return "set" == t ? this : c;
          }
          return o.call(this, r, u);
        });
      }));
  },
  function (t, r, o) {
    var i = o(996);
    t.exports = function (t, r) {
      return new (i(t))(r);
    };
  },
  function (t, r, o) {
    var i = o(195),
      u = o(688),
      c = o(198)("species");
    t.exports = function (t) {
      var r;
      return (
        u(t) &&
          ("function" != typeof (r = t.constructor) ||
            (r !== Array && !u(r.prototype)) ||
            (r = void 0),
          i(r) && null === (r = r[c]) && (r = void 0)),
        void 0 === r ? Array : r
      );
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(691),
      u = o(422).getWeak,
      c = o(234),
      a = o(195),
      l = o(692),
      p = o(582),
      d = o(581),
      v = o(232),
      y = o(583),
      h = d(5),
      g = d(6),
      m = 0,
      uncaughtFrozenStore = function (t) {
        return t._l || (t._l = new UncaughtFrozenStore());
      },
      UncaughtFrozenStore = function () {
        this.a = [];
      },
      findUncaughtFrozen = function (t, r) {
        return h(t.a, function (t) {
          return t[0] === r;
        });
      };
    (UncaughtFrozenStore.prototype = {
      get: function (t) {
        var r = findUncaughtFrozen(this, t);
        if (r) return r[1];
      },
      has: function (t) {
        return !!findUncaughtFrozen(this, t);
      },
      set: function (t, r) {
        var o = findUncaughtFrozen(this, t);
        o ? (o[1] = r) : this.a.push([t, r]);
      },
      delete: function (t) {
        var r = g(this.a, function (r) {
          return r[0] === t;
        });
        return ~r && this.a.splice(r, 1), !!~r;
      },
    }),
      (t.exports = {
        getConstructor: function (t, r, o, c) {
          var d = t(function (t, i) {
            l(t, d, r, "_i"),
              (t._t = r),
              (t._i = m++),
              (t._l = void 0),
              null != i && p(i, o, t[c], t);
          });
          return (
            i(d.prototype, {
              delete: function (t) {
                if (!a(t)) return !1;
                var o = u(t);
                return !0 === o
                  ? uncaughtFrozenStore(y(this, r)).delete(t)
                  : o && v(o, this._i) && delete o[this._i];
              },
              has: function has(t) {
                if (!a(t)) return !1;
                var o = u(t);
                return !0 === o
                  ? uncaughtFrozenStore(y(this, r)).has(t)
                  : o && v(o, this._i);
              },
            }),
            d
          );
        },
        def: function (t, r, o) {
          var i = u(c(r), !0);
          return !0 === i ? uncaughtFrozenStore(t).set(r, o) : (i[t._i] = o), t;
        },
        ufstore: uncaughtFrozenStore,
      });
  },
  function (t, r, o) {
    var i = o(234);
    t.exports = function (t, r, o, u) {
      try {
        return u ? r(i(o)[0], o[1]) : r(o);
      } catch (r) {
        var c = t.return;
        throw (void 0 !== c && i(c.call(t)), r);
      }
    };
  },
  function (t, r, o) {
    var i = o(382),
      u = o(198)("iterator"),
      c = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (i.Array === t || c[u] === t);
    };
  },
  function (t, r, o) {
    var i = o(1001),
      u = o(198)("iterator"),
      c = o(382);
    t.exports = o(130).getIteratorMethod = function (t) {
      if (null != t) return t[u] || t["@@iterator"] || c[i(t)];
    };
  },
  function (t, r, o) {
    var i = o(568),
      u = o(198)("toStringTag"),
      c =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })()
        );
    t.exports = function (t) {
      var r, o, a;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" ==
          typeof (o = (function (t, r) {
            try {
              return t[r];
            } catch (t) {}
          })((r = Object(t)), u))
        ? o
        : c
        ? i(r)
        : "Object" == (a = i(r)) && "function" == typeof r.callee
        ? "Arguments"
        : a;
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(189),
      u = o(190),
      c = o(422),
      a = o(317),
      l = o(233),
      p = o(691),
      d = o(582),
      v = o(692),
      y = o(195),
      h = o(421),
      g = o(209).f,
      m = o(581)(0),
      _ = o(196);
    t.exports = function (t, r, o, b, S, w) {
      var O = i[t],
        x = O,
        E = S ? "set" : "add",
        I = x && x.prototype,
        A = {};
      return (
        _ &&
        "function" == typeof x &&
        (w ||
          (I.forEach &&
            !a(function () {
              new x().entries().next();
            })))
          ? ((x = r(function (r, o) {
              v(r, x, t, "_c"), (r._c = new O()), null != o && d(o, S, r[E], r);
            })),
            m(
              "add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(
                ","
              ),
              function (t) {
                var r = "add" == t || "set" == t;
                !(t in I) ||
                  (w && "clear" == t) ||
                  l(x.prototype, t, function (o, i) {
                    if ((v(this, x, t), !r && w && !y(o)))
                      return "get" == t && void 0;
                    var u = this._c[t](0 === o ? 0 : o, i);
                    return r ? this : u;
                  });
              }
            ),
            w ||
              g(x.prototype, "size", {
                get: function () {
                  return this._c.size;
                },
              }))
          : ((x = b.getConstructor(r, t, S, E)),
            p(x.prototype, o),
            (c.NEED = !0)),
        h(x, t),
        (A[t] = x),
        u(u.G + u.W + u.F, A),
        w || b.setStrong(x, t, S),
        x
      );
    };
  },
  function (t, r, o) {
    o(1004)("WeakMap");
  },
  function (t, r, o) {
    "use strict";
    var i = o(190);
    t.exports = function (t) {
      i(i.S, t, {
        of: function of() {
          for (var t = arguments.length, r = new Array(t); t--; )
            r[t] = arguments[t];
          return new this(r);
        },
      });
    };
  },
  function (t, r, o) {
    o(1006)("WeakMap");
  },
  function (t, r, o) {
    "use strict";
    var i = o(190),
      u = o(681),
      c = o(417),
      a = o(582);
    t.exports = function (t) {
      i(i.S, t, {
        from: function from(t) {
          var r,
            o,
            i,
            l,
            p = arguments[1];
          return (
            u(this),
            (r = void 0 !== p) && u(p),
            null == t
              ? new this()
              : ((o = []),
                r
                  ? ((i = 0),
                    (l = c(p, arguments[2], 2)),
                    a(t, !1, function (t) {
                      o.push(l(t, i++));
                    }))
                  : a(t, !1, o.push, o),
                new this(o))
          );
        },
      });
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(415),
      u = o(424);
    o(197)(r, "__esModule", { value: !0 }), (r.create = void 0);
    var c = u(o(197)),
      a = u(o(1008)),
      l = u(o(1011)),
      p = u(o(677)),
      d = u(o(1016)),
      v = u(o(1018)),
      y = u(o(693)),
      h = u(o(1022)),
      g = u(o(1023)),
      m = i(o(1026)),
      _ = i(o(1027)),
      b = i(o(584)),
      S = u(o(539)),
      w = u(o(208));
    function ownKeys(t, r) {
      var o = (0, v.default)(t);
      if (d.default) {
        var i = (0, d.default)(t);
        r &&
          (i = i.filter(function (r) {
            return (0, p.default)(t, r).enumerable;
          })),
          o.push.apply(o, i);
      }
      return o;
    }
    function _objectSpread(t) {
      for (var r = 1; r < arguments.length; r++) {
        var o = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? ownKeys(Object(o), !0).forEach(function (r) {
              (0, h.default)(t, r, o[r]);
            })
          : l.default
          ? (0, a.default)(t, (0, l.default)(o))
          : ownKeys(Object(o)).forEach(function (r) {
              (0, c.default)(t, r, (0, p.default)(o, r));
            });
      }
      return t;
    }
    var O = o(71),
      x = O.PLAID_LINK_BUTTON_ID,
      E = O.VERSION,
      I = o(1032),
      A = I.validateCreateOptions,
      T = I.validateExitOptions;
    r.create = function create(t) {
      var r =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      A(t);
      var o = (0, g.default)(),
        i = !0 === r.forceDesktop,
        u = !0 === r.forceMobile,
        c = !0 === r.logInternalAnalytics,
        a = !0 === r.isPrivacyPortalItemAdd,
        l = r.institutionContactMessagingInstitutions,
        p = (!i && (0, S.default)().isMobile) || u,
        d = b.getUniqueId(),
        v = (p ? _ : m).create(),
        h = P(
          _objectSpread(
            _objectSpread({}, t),
            {},
            {
              enableThreadsDemo: t.enableThreadsDemo,
              uiOverride: r.uiOverride,
              isPrivacyPortalItemAdd: a,
              isMobile: p,
              logInternalAnalytics: c,
              uniqueId: d,
              institutionContactMessagingInstitutions: l,
              workflowVersionOverride: r.workflowVersionOverride,
            }
          )
        ),
        O = k(h),
        E = b.buildLinkUrl(O, r.enableFlexLink),
        I = function performOpen(t) {
          var r = t.institutionId,
            o = t.openStartedAt,
            i = t.createToOnLoadInterval,
            u = t.createToOpenInterval;
          b.sendMessage(v)({
            action: "open",
            institution: r,
            openStartedAt: o,
            createToOnLoadInterval: i,
            createToOpenInterval: u,
          });
        },
        N = function sendHeartBeat() {
          try {
            var t,
              r = new XMLHttpRequest(),
              o = (0, w.default)(null !== (t = h.env) && void 0 !== t ? t : "");
            (r.onerror = function () {}),
              r.open("POST", o + "/link/heartbeat", !0),
              r.setRequestHeader("Content-Type", "application/json"),
              r.send((0, y.default)({ a: !0, b: !0 }));
          } catch (t) {}
        },
        L = b.createMessageHandler(d, {
          exit: function exit(r) {
            "function" == typeof t.onExit && t.onExit(r.error, r.metadata),
              v.hide();
          },
          event: function event(r) {
            "function" == typeof t.onEvent &&
              t.onEvent(r.eventName, r.metadata);
          },
          close: function close() {
            v.hide();
          },
          connected: function connected(r) {
            t.onSuccess(r.metadata.public_token, r.metadata), v.hide();
          },
          "early-handoff": function earlyHandoff(r) {
            t.onSuccess(r.metadata.public_token, r.metadata);
          },
          acknowledged: function acknowledged() {
            var t = document.getElementById(x);
            null != t && (t.disabled = !1);
          },
          "ready-for-configure": function readyForConfigure() {
            b.sendMessage(v)({ action: "configure", config: h });
          },
          ready: function ready() {
            (R = !0),
              (U = (0, g.default)() - o),
              C(),
              "function" == typeof t.onLoad && t.onLoad();
          },
          "tracking-ready": function trackingReady() {
            (V = !0), D();
          },
          resize: function resize(t) {
            null != t.height && null != v.resize && v.resize(t.height);
          },
        }),
        j = function exit(r) {
          v.isOpen() &&
            (T(t, r), b.sendMessage(v)({ action: "exit", config: r }));
        };
      window.addEventListener("message", L, !1);
      var M = !1,
        R = !1,
        C = function onReady() {},
        U = null,
        V = !1,
        D = function onTrackingReady() {};
      v.initialize(E, d);
      var W = function open() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          if (M)
            throw new Error(
              "Cannot call open() on Link handler that is already destroyed"
            );
          V
            ? b.sendMessage(v)({ action: "track_open" })
            : (D = function onTrackingReady() {
                return b.sendMessage(v)({ action: "track_open" });
              }),
            N(),
            v.show();
          var r = (0, g.default)(),
            i = (0, g.default)() - o;
          R
            ? I({
                institutionId: t,
                openStartedAt: r,
                createToOnLoadInterval: U,
                createToOpenInterval: i,
              })
            : (C = function onReady() {
                I({
                  institutionId: t,
                  openStartedAt: r,
                  createToOnLoadInterval: U,
                  createToOpenInterval: i,
                });
              });
        },
        q = function destroy() {
          (M = !0), v.destroy(), window.removeEventListener("message", L);
        };
      return { exit: j, open: W, destroy: q };
    };
    var k = function getQueryParameters(t) {
        var r = t.countryCodes,
          o = t.env,
          i = t.experimentVariants,
          u = t.key,
          c = t.token,
          a = t.language,
          l = t.linkCustomizationName,
          p = t.origin,
          d = t.product,
          v = t.accountSubtypes,
          h = t.uniqueId,
          g = t.oauthStateId;
        return {
          countryCodes: r,
          env: o,
          experimentVariants: null == i ? void 0 : (0, y.default)(i),
          isLinkInitialize: !0,
          key: u,
          token: c,
          language: a,
          linkCustomizationName: l,
          origin: p,
          product: d,
          accountSubtypes: (0, y.default)(v),
          uniqueId: h,
          version: E,
          oauthStateId: g,
        };
      },
      P = function getConfig(t) {
        var r = t.apiVersion,
          o = t.clientName,
          i = t.configUserId,
          u = t.configUserTags,
          c = t.countryCodes,
          a = t.customizations,
          l = t.depositSwitchToken,
          p = t.enableThreadsDemo,
          d = t.env,
          v = t.experimentVariants,
          y = t.institutionContactMessagingInstitutions,
          h = t.isEmbedded,
          g = t.isMobile,
          m = t.isPrivacyPortalItemAdd,
          S = t.isSimpleIntegration,
          w = t.key,
          O = t.language,
          x = t.linkCustomizationName,
          I = t.logInternalAnalytics,
          A = t.oauthNonce,
          T = t.oauthRedirectUri,
          k = t.oauthStateId,
          P = t.onEvent,
          N = t.onExit,
          L = t.onLoad,
          j = t.paymentToken,
          M = t.plaidTrustedAuthToken,
          R = t.product,
          C = t.receivedRedirectUri,
          U = t.accountSubtypes,
          V = t.selectAccount,
          D = t.token,
          W = t.uiOverride,
          q = t.uniqueId,
          z = t.user,
          H = t.userLegalName,
          K = t.userEmailAddress,
          G = t.userPhoneNumber,
          B = t.webhook,
          J = t.workflowVersionOverride;
        return {
          apiVersion: r,
          clientName: o,
          configUserId: i,
          configUserTags: u,
          countryCodes: c,
          customizations: a,
          depositSwitchToken: l,
          enableThreadsDemo: p,
          env: d,
          experimentVariants: v,
          forceIframe: !0,
          institutionContactMessagingInstitutions: y,
          isPrivacyPortalItemAdd: m,
          isEmbedded: h,
          isMobile: g,
          isParentInlineStylesheetSupported: _.isInlineStylesheetSupported(),
          isParentMetaViewportSet: _.isMetaViewportSet(),
          isSimpleIntegration: !0 === S,
          isUsingOnEventCallback: "function" == typeof P,
          isUsingOnExitCallback: "function" == typeof N,
          isUsingOnLoadCallback: "function" == typeof L,
          key: w,
          language: O,
          linkCustomizationName: x,
          logInternalAnalytics: !0 === I,
          oauthNonce: A,
          oauthRedirectUri: T,
          oauthStateId: k,
          origin: b.getWindowOrigin(),
          parentMetaViewport: b.getMetaViewport(),
          paymentToken: j,
          plaidTrustedAuthToken: M,
          product: R,
          receivedRedirectUri: C,
          accountSubtypes: U,
          selectAccount: !0 === V,
          token: D,
          uniqueId: q,
          uiOverride: W,
          user: z,
          userLegalName: H,
          userEmailAddress: K,
          userPhoneNumber: G,
          version: E,
          webhook: B,
          workflowVersionOverride: J,
        };
      };
  },
  function (t, r, o) {
    t.exports = o(1009);
  },
  function (t, r, o) {
    o(1010);
    var i = o(130).Object;
    t.exports = function defineProperties(t, r) {
      return i.defineProperties(t, r);
    };
  },
  function (t, r, o) {
    var i = o(190);
    i(i.S + i.F * !o(196), "Object", { defineProperties: o(684) });
  },
  function (t, r, o) {
    t.exports = o(1012);
  },
  function (t, r, o) {
    o(1013), (t.exports = o(130).Object.getOwnPropertyDescriptors);
  },
  function (t, r, o) {
    var i = o(190),
      u = o(1014),
      c = o(231),
      a = o(570),
      l = o(1015);
    i(i.S, "Object", {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
        for (
          var r, o, i = c(t), p = a.f, d = u(i), v = {}, y = 0;
          d.length > y;

        )
          void 0 !== (o = p(i, (r = d[y++]))) && l(v, r, o);
        return v;
      },
    });
  },
  function (t, r, o) {
    var i = o(580),
      u = o(423),
      c = o(234),
      a = o(189).Reflect;
    t.exports =
      (a && a.ownKeys) ||
      function ownKeys(t) {
        var r = i.f(c(t)),
          o = u.f;
        return o ? r.concat(o(t)) : r;
      };
  },
  function (t, r, o) {
    "use strict";
    var i = o(209),
      u = o(381);
    t.exports = function (t, r, o) {
      r in t ? i.f(t, r, u(0, o)) : (t[r] = o);
    };
  },
  function (t, r, o) {
    t.exports = o(1017);
  },
  function (t, r, o) {
    o(687), (t.exports = o(130).Object.getOwnPropertySymbols);
  },
  function (t, r, o) {
    t.exports = o(1019);
  },
  function (t, r, o) {
    o(1020), (t.exports = o(130).Object.keys);
  },
  function (t, r, o) {
    var i = o(384),
      u = o(383);
    o(680)("keys", function () {
      return function keys(t) {
        return u(i(t));
      };
    });
  },
  function (t, r, o) {
    var i = o(130),
      u = i.JSON || (i.JSON = { stringify: JSON.stringify });
    t.exports = function stringify(t) {
      return u.stringify.apply(u, arguments);
    };
  },
  function (t, r, o) {
    var i = o(197);
    t.exports = function _defineProperty(t, r, o) {
      return (
        r in t
          ? i(t, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[r] = o),
        t
      );
    };
  },
  function (t, r, o) {
    t.exports = o(1024);
  },
  function (t, r, o) {
    o(1025), (t.exports = o(130).Date.now);
  },
  function (t, r, o) {
    var i = o(190);
    i(i.S, "Date", {
      now: function () {
        return new Date().getTime();
      },
    });
  },
  function (t, r, o) {
    "use strict";
    o(197)(r, "__esModule", { value: !0 }), (r.create = void 0);
    r.create = function create() {
      var t = document.body.style.overflow,
        r = null,
        o = !1,
        i = function hide() {
          (o = !1),
            null != r && (r.style.display = "none"),
            (document.body.style.overflow = t),
            window.parent.focus();
        };
      return {
        initialize: function initialize(t, o) {
          ((r = document.createElement(
            "iframe"
          )).id = "plaid-link-iframe-".concat(o)),
            (r.title = "Plaid Link"),
            (r.src = t),
            (r.width = "100%"),
            (r.height = "100%"),
            (r.style.position = "fixed"),
            (r.style.top = "0"),
            (r.style.left = "0"),
            (r.style.right = "0"),
            (r.style.bottom = "0"),
            (r.style.zIndex = "9999999999"),
            (r.style.borderWidth = "0"),
            (r.style.display = "none"),
            (r.style.overflowX = "hidden"),
            (r.style.overflowY = "auto"),
            document.body.appendChild(r);
        },
        show: function show() {
          (o = !0),
            (t = document.body.style.overflow),
            (document.body.style.overflow = "hidden"),
            null != r &&
              ((r.style.display = "block"),
              null != r.contentWindow && r.contentWindow.focus());
        },
        hide: i,
        postMessage: function postMessage(t, o) {
          null != r &&
            null != r.contentWindow &&
            r.contentWindow.postMessage(t, o);
        },
        isOpen: function isOpen() {
          return !0 === o;
        },
        resize: function resize() {},
        destroy: function destroy() {
          var t;
          (i(), null != r) &&
            (null === (t = r.parentElement) || void 0 === t || t.removeChild(r),
            (r = null));
        },
      };
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(415);
    o(197)(r, "__esModule", { value: !0 }),
      (r.isSupported = r.isMetaViewportSet = r.isInlineStylesheetSupported = r.create = void 0);
    var u = i(o(584)),
      c = "plaid-link-temporary-id",
      a = "plaid-link-iframe",
      l = "plaid-link-stylesheet",
      p = "html" + Array(9).join("#".concat(c)),
      d = "\n  "
        .concat(p, ",\n  ")
        .concat(
          p,
          " > body {\n    border: 0 !important;\n    height: 100% !important;\n    margin: 0 !important;\n    max-height: auto !important;\n    max-width: auto !important;\n    min-height: 0 !important;\n    min-width: 0 !important;\n    padding: 0 !important;\n    position: static !important;\n    width: auto !important;\n  }\n  "
        )
        .concat(p, " > body > * {\n    display: none !important;\n  }\n  ")
        .concat(p, " > body > .")
        .concat(
          a,
          " {\n    border: 0 !important;\n    height: auto !important;\n    min-height: 100% !important;\n    width: 100% !important;\n  }\n"
        );
    r.create = function create() {
      var t = null,
        r = !1,
        o = "",
        i = "",
        u = "",
        p = { x: 0, y: 0 },
        v = function hide() {
          (r = !1),
            t && t.style.setProperty("display", "none", "important"),
            (function restoreAllElements() {
              var t = document.getElementById(l);
              t && t.parentNode && t.parentNode.removeChild(t),
                (document.documentElement.id = o),
                document.documentElement.style.setProperty(i, u);
            })(),
            (function restoreScroll() {
              window.scrollTo(p.x, p.y);
            })(),
            window.parent.focus();
        };
      return {
        hide: v,
        initialize: function initialize(r, o) {
          ((t = document.createElement("iframe")).className = a),
            (t.title = "Plaid Link"),
            (t.id = "plaid-link-iframe-".concat(o)),
            (t.src = r),
            t.style.setProperty("display", "none", "important"),
            document.body.appendChild(t);
        },
        isOpen: function isOpen() {
          return !0 === r;
        },
        postMessage: function postMessage(r, o) {
          null != t &&
            null != t.contentWindow &&
            t.contentWindow.postMessage(r, o);
        },
        resize: function resize(t) {
          document.documentElement.style.setProperty("height", t, "important");
        },
        show: function show() {
          r ||
            ((r = !0),
            (function saveScroll() {
              p = {
                x: document.documentElement.scrollLeft,
                y: document.documentElement.scrollTop,
              };
            })(),
            (function hideAllElements() {
              (o = document.documentElement.id),
                (i = document.documentElement.style.getPropertyValue("height")),
                (u = document.documentElement.style.getPropertyPriority(
                  "height"
                ));
              var t = document.createElement("style");
              (t.id = l), (t.textContent = d);
              var r = document.querySelector("head");
              null != r && r.appendChild(t), (document.documentElement.id = c);
            })(),
            window.scrollTo(0, 0),
            t &&
              (t.style.setProperty("display", "block", "important"),
              t.contentWindow && t.contentWindow.focus()));
        },
        destroy: function destroy() {
          var r;
          (v(), null != t) &&
            (null === (r = t.parentElement) || void 0 === r || r.removeChild(t),
            (t = null));
        },
      };
    };
    var v = function isInlineStylesheetSupported() {
      try {
        var t = "link-stylesheet-test-".concat(Math.floor(100 * Math.random())),
          r = document.createElement("div");
        r.id = t;
        var o = document.createElement("style");
        o.textContent = "#".concat(t, " { width: 100px; height: 100px; }");
        var i = document.body;
        i.appendChild(r), i.appendChild(o);
        var u = 100 === r.offsetWidth;
        return i.removeChild(r), i.removeChild(o), u;
      } catch (t) {
        return !1;
      }
    };
    r.isInlineStylesheetSupported = v;
    var y = function isMetaViewportSet() {
      return /device-width/.test(u.getMetaViewport());
    };
    r.isMetaViewportSet = y;
    r.isSupported = function isSupported() {
      return v() && y();
    };
  },
  function (t, r, o) {
    t.exports = o(1029);
  },
  function (t, r, o) {
    o(1030), (t.exports = o(130).Object.assign);
  },
  function (t, r, o) {
    var i = o(190);
    i(i.S + i.F, "Object", { assign: o(690) });
  },
  function (t, r, o) {
    "use strict";
    o(197)(r, "__esModule", { value: !0 }),
      (r.FLEX_LINK_HTML_PATH = r.LINK_HTML_PATH = r.LINK_CLIENT_STABLE_URL = r.LINK_CLIENT_URL = void 0);
    var i = String("https://cdn.plaid.com/link/2.0.860");
    r.LINK_CLIENT_URL = i;
    var u = String("https://cdn.plaid.com/link/v2/stable");
    r.LINK_CLIENT_STABLE_URL = u;
    r.LINK_HTML_PATH = "/link.html";
    r.FLEX_LINK_HTML_PATH = "/flink.html";
  },
  function (t, r, o) {
    "use strict";
    var i = o(424);
    o(197)(r, "__esModule", { value: !0 }),
      (r.validateExitOptions = r.validateCreateOptions = void 0);
    var u = i(o(418)),
      c = o(71),
      a = function getValidationHandlers(t) {
        var r = t.env;
        return {
          error: function error(t) {
            if ("production" !== r) throw new Error(t);
          },
          warn: function warn(t) {
            "production" !== r && console.warn(t);
          },
        };
      };
    r.validateCreateOptions = function validateCreateOptions(t) {
      var r = a(t),
        o = r.error,
        i = r.warn;
      !(function validateCreateKeys(t) {
        var r = a(t).warn;
        for (var o in t)
          c.CREATE_PARAMETERS.indexOf(o) < 0 &&
            r(
              "Invalid Link parameter: ".concat(
                o,
                " is not a valid Plaid.create() parameter"
              )
            );
      })(t),
        "function" != typeof t.onSuccess && o("Invalid onSuccess function"),
        void 0 !== t.forceIframe &&
          i(
            "The forceIframe option has been deprecated. Link will use an iframe by default when possible."
          ),
        null == t.key &&
          null == t.token &&
          o(
            "Missing Link parameter. Link requires a key or token to be provided."
          );
    };
    r.validateExitOptions = function validateExitOptions(t, r) {
      var o = a(t).error;
      return (
        null == r ||
          ("object" !== (0, u.default)(r) &&
            o("Invalid exit parameter, must be an Object")),
        null
      );
    };
  },
  function (t, r, o) {
    "use strict";
    var i = o(424);
    o(197)(r, "__esModule", { value: !0 }), (r.setUp = void 0);
    var u = i(o(418));
    o(25);
    var c = o(71),
      a = o(96),
      l = function traverse(t, r) {
        var o = function _loop(o) {
          "object" === (0, u.default)(t[o])
            ? traverse(t[o], function (t, i) {
                r([o].concat(t), i);
              })
            : r([o], t[o]);
        };
        for (var i in t) o(i);
      };
    r.setUp = function setUp(t, r) {
      var o = r.getAttribute("data-form-id");
      if (null != o) {
        var i = document.getElementById(o);
        if (null == i)
          throw new Error("Uncaught Error: Specify a valid data-form-id");
        var u = r.getAttribute("data-api-version"),
          p = r.getAttribute("data-client-name"),
          d = r.getAttribute("data-product"),
          v = r.getAttribute("data-key"),
          y = r.getAttribute("data-env"),
          h = "true" === r.getAttribute("data-select-account"),
          g = r.getAttribute("data-token"),
          m = r.getAttribute("data-webhook"),
          _ = r.getAttribute("data-ui-override"),
          b =
            null != r.getAttribute("data-longtail") ||
            null != r.getAttribute("data-long-tail") ||
            null,
          S = t.create(
            {
              apiVersion: u,
              clientName: p,
              env: y,
              isSimpleIntegration: !0,
              key: v,
              longtail: b,
              onSuccess: function onSuccess(t, r) {
                l(r, function (t, r) {
                  var o =
                    t[0] +
                    t
                      .slice(1)
                      .map(function (t) {
                        return "[".concat(t, "]");
                      })
                      .join("");
                  i.appendChild(
                    (function createHiddenInput(t, r) {
                      var o = document.createElement("input");
                      return (
                        (o.type = "hidden"), (o.name = t), (o.value = r), o
                      );
                    })(o, r)
                  );
                }),
                  i.submit();
              },
              product: d,
              selectAccount: h,
              token: g,
              webhook: m,
            },
            { uiOverride: _ }
          ),
          w = document.createElement("button");
        (w.id = c.PLAID_LINK_BUTTON_ID),
          (w.textContent = (0, a.isPublicToken)(g)
            ? "Link your bank account"
            : "Relink your bank account"),
          (w.onclick = function (t) {
            t.preventDefault(), S.open();
          }),
          i.appendChild(w);
      }
    };
  },
]);
