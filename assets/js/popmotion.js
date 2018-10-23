!(function(t) {
  function e(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var r = {};
  (e.m = t),
    (e.c = r),
    (e.d = function(t, r, n) {
      e.o(t, r) ||
        Object.defineProperty(t, r, {
          configurable: !1,
          enumerable: !0,
          get: n
        });
    }),
    (e.n = function(t) {
      var r =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(r, "a", r), r;
    }),
    (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 48));
})([
  function(t, e, r) {
    "use strict";
    var n =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            };
          return function(e, r) {
            function n() {
              this.constructor = e;
            }
            t(e, r),
              (e.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
      o =
        (this && this.__assign) ||
        Object.assign ||
        function(t) {
          for (var e, r = 1, n = arguments.length; r < n; r++) {
            e = arguments[r];
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          }
          return t;
        },
      u =
        (this && this.__rest) ||
        function(t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (r[n] = t[n]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, n = Object.getOwnPropertySymbols(t);
              o < n.length;
              o++
            )
              e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]]);
          return r;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(13),
      i = r(14),
      s = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          n(e, t),
          (e.prototype.create = function(t) {
            return new e(t);
          }),
          (e.prototype.start = function(t) {
            void 0 === t && (t = {});
            var e = !1,
              r = { stop: function() {} },
              n = this.props,
              a = n.init,
              s = u(n, ["init"]),
              c = i.default(t, s, function() {
                (e = !0), r.stop();
              }),
              f = a(c);
            return (
              (r = f ? o({}, r, f) : r),
              t.registerParent && t.registerParent(r),
              e && r.stop(),
              r
            );
          }),
          e
        );
      })(a.default);
    (e.Action = s),
      (e.default = function(t) {
        return new s({ init: t });
      });
  },
  function(t, e, r) {
    "use strict";
    function n() {
      s || ((s = !0), (l = !0), u.default(o));
    }
    function o(t) {
      (s = !1),
        (d = l ? f : Math.max(Math.min(t - p, c), 1)),
        l || (f = d),
        (p = t),
        v.process(),
        h.process(),
        m.process(),
        y.process(),
        s && (l = !1);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = r(32),
      a = r(33),
      i = "undefined" != typeof performance && void 0 !== performance.now;
    e.currentTime = i
      ? function() {
          return performance.now();
        }
      : function() {
          return Date.now();
        };
    var s = !1,
      c = 40,
      f = 16.7,
      l = !0,
      p = 0,
      d = 0,
      v = a.default(n),
      h = a.default(n),
      m = a.default(n),
      y = a.default(n);
    (e.onFrameStart = v.schedule),
      (e.onFrameUpdate = h.schedule),
      (e.onFrameRender = m.schedule),
      (e.onFrameEnd = y.schedule),
      (e.cancelOnFrameStart = v.cancel),
      (e.cancelOnFrameUpdate = h.cancel),
      (e.cancelOnFrameRender = m.cancel),
      (e.cancelOnFrameEnd = y.cancel),
      (e.timeSinceLastFrame = function() {
        return d;
      }),
      (e.currentFrameTime = function() {
        return p;
      });
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = function(t) {
      return "number" == typeof t;
    };
    (e.isPoint = function(t) {
      return void 0 !== t.x && void 0 !== t.y;
    }),
      (e.isPoint3D = function(t) {
        return void 0 !== t.z;
      });
    var o = function(t, e) {
        return (
          void 0 === e && (e = 2), (e = Math.pow(10, e)), Math.round(t * e) / e
        );
      },
      u = { x: 0, y: 0, z: 0 },
      a = function(t, e) {
        return Math.abs(t - e);
      };
    (e.angle = function(t, r) {
      return (
        void 0 === r && (r = u),
        e.radiansToDegrees(Math.atan2(r.y - t.y, r.x - t.x))
      );
    }),
      (e.degreesToRadians = function(t) {
        return (t * Math.PI) / 180;
      }),
      (e.dilate = function(t, e, r) {
        return t + (e - t) * r;
      }),
      (e.distance = function(t, r) {
        if ((void 0 === r && (r = u), n(t) && n(r))) return a(t, r);
        if (e.isPoint(t) && e.isPoint(r)) {
          var o = a(t.x, r.x),
            i = a(t.y, r.y),
            s = e.isPoint3D(t) && e.isPoint3D(r) ? a(t.z, r.z) : 0;
          return Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2) + Math.pow(s, 2));
        }
        return 0;
      }),
      (e.getProgressFromValue = function(t, e, r) {
        var n = e - t;
        return 0 === n ? 1 : (r - t) / n;
      }),
      (e.getValueFromProgress = function(t, e, r) {
        return -r * t + r * e + t;
      }),
      (e.pointFromAngleAndDistance = function(t, r, n) {
        return (
          (r = e.degreesToRadians(r)),
          { x: n * Math.cos(r) + t.x, y: n * Math.sin(r) + t.y }
        );
      }),
      (e.radiansToDegrees = function(t) {
        return (180 * t) / Math.PI;
      }),
      (e.smooth = function(t, e, r, n) {
        return void 0 === n && (n = 0), o(e + (r * (t - e)) / Math.max(n, r));
      }),
      (e.speedPerFrame = function(t, e) {
        return n(t) ? t / (1e3 / e) : 0;
      }),
      (e.speedPerSecond = function(t, e) {
        return e ? t * (1e3 / e) : 0;
      }),
      (e.stepProgress = function(t, e) {
        var r = 1 / (t - 1),
          n = 1 - 1 / t,
          o = Math.min(e / n, 1);
        return Math.floor(o / r) * r;
      });
  },
  function(t, e, r) {
    "use strict";
    function n(t) {
      var r = t.length;
      return function(n) {
        for (
          var o = {},
            u = e.splitCommaDelimited(e.getValueFromFunctionString(n)),
            a = 0;
          a < r;
          a++
        )
          o[t[a]] = void 0 !== u[a] ? parseFloat(u[a]) : 1;
        return o;
      };
    }
    var o =
      (this && this.__assign) ||
      Object.assign ||
      function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
          e = arguments[r];
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
        return t;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = function(t, e) {
        return function(r) {
          return Math.max(Math.min(r, e), t);
        };
      },
      a = function(t) {
        return function(e) {
          return "string" == typeof e && -1 !== e.indexOf(t);
        };
      },
      i = function(t) {
        return {
          test: a(t),
          parse: parseFloat,
          transform: function(e) {
            return "" + e + t;
          }
        };
      },
      s = function(t) {
        return function(e) {
          return "string" == typeof e && 0 === e.indexOf(t);
        };
      };
    (e.getValueFromFunctionString = function(t) {
      return t.substring(t.indexOf("(") + 1, t.lastIndexOf(")"));
    }),
      (e.splitCommaDelimited = function(t) {
        return "string" == typeof t ? t.split(/,\s*/) : [t];
      }),
      (e.splitColorValues = n),
      (e.number = {
        test: function(t) {
          return "number" == typeof t;
        },
        parse: parseFloat,
        transform: function(t) {
          return t;
        }
      }),
      (e.alpha = o({}, e.number, { transform: u(0, 1) })),
      (e.degrees = i("deg")),
      (e.percent = i("%")),
      (e.px = i("px")),
      (e.scale = o({}, e.number, { default: 1 }));
    var c = /(-)?(\d[\d\.]*)/g,
      f = function(t) {
        return "${" + t + "}";
      };
    e.complex = {
      test: function(t) {
        var e = t.match && t.match(c);
        return void 0 !== e && e.constructor === Array && e.length > 1;
      },
      parse: function(t) {
        var e = {};
        return (
          t.match(c).forEach(function(t, r) {
            return (e[r] = parseFloat(t));
          }),
          e
        );
      },
      createTransformer: function(t) {
        var e = 0,
          r = t.replace(c, function() {
            return f("" + e++);
          });
        return function(t) {
          var e = r;
          for (var n in t)
            t.hasOwnProperty(n) && (e = e.replace(f(n), t[n].toString()));
          return e;
        };
      }
    };
    var l = u(0, 255);
    e.rgbUnit = o({}, e.number, {
      transform: function(t) {
        return Math.round(l(t));
      }
    });
    var p = function(t) {
      var e = t.red,
        r = t.green,
        n = t.blue,
        o = t.alpha;
      return (
        "rgba(" + e + ", " + r + ", " + n + ", " + (void 0 === o ? 1 : o) + ")"
      );
    };
    e.rgba = {
      test: s("rgb"),
      parse: n(["red", "green", "blue", "alpha"]),
      transform: function(t) {
        var r = t.red,
          n = t.green,
          o = t.blue,
          u = t.alpha;
        return p({
          red: e.rgbUnit.transform(r),
          green: e.rgbUnit.transform(n),
          blue: e.rgbUnit.transform(o),
          alpha: u
        });
      }
    };
    var d = function(t) {
      var e = t.hue,
        r = t.saturation,
        n = t.lightness,
        o = t.alpha;
      return (
        "hsla(" + e + ", " + r + ", " + n + ", " + (void 0 === o ? 1 : o) + ")"
      );
    };
    (e.hsla = {
      test: s("hsl"),
      parse: n(["hue", "saturation", "lightness", "alpha"]),
      transform: function(t) {
        var r = t.hue,
          n = t.saturation,
          o = t.lightness,
          u = t.alpha;
        return d({
          hue: Math.round(r),
          saturation: e.percent.transform(n),
          lightness: e.percent.transform(o),
          alpha: u
        });
      }
    }),
      (e.hex = o({}, e.rgba, {
        test: s("#"),
        parse: function(t) {
          var e, r, n;
          return (
            t.length > 4
              ? ((e = t.substr(1, 2)),
                (r = t.substr(3, 2)),
                (n = t.substr(5, 2)))
              : ((e = t.substr(1, 1)),
                (r = t.substr(2, 1)),
                (n = t.substr(3, 1)),
                (e += e),
                (r += r),
                (n += n)),
            {
              red: parseInt(e, 16),
              green: parseInt(r, 16),
              blue: parseInt(n, 16),
              alpha: 1
            }
          );
        }
      }));
    var v = function(t) {
        return void 0 !== t.red;
      },
      h = function(t) {
        return void 0 !== t.hue;
      };
    e.color = {
      test: function(t) {
        return e.rgba.test(t) || e.hsla.test(t) || e.hex.test(t);
      },
      parse: function(t) {
        return e.rgba.test(t)
          ? e.rgba.parse(t)
          : e.hsla.test(t)
            ? e.hsla.parse(t)
            : e.hex.test(t)
              ? e.hex.parse(t)
              : t;
      },
      transform: function(t) {
        return v(t) ? e.rgba.transform(t) : h(t) ? e.hsla.transform(t) : t;
      }
    };
  },
  function(t, e, r) {
    "use strict";
    var n =
      (this && this.__assign) ||
      Object.assign ||
      function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
          e = arguments[r];
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
        return t;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(1),
      u = r(3),
      a = r(2),
      i = function(t) {
        return t;
      };
    (e.appendUnit = function(t) {
      return function(e) {
        return "" + e + t;
      };
    }),
      (e.applyOffset = function(t, e) {
        var r = !0;
        void 0 === e && ((e = t), (r = !1));
        var n = function(e) {
            return e - t;
          },
          o = function(t) {
            return t + e;
          };
        return function(u) {
          return r ? o(n(u)) : ((t = u), (r = !0), e);
        };
      });
    var s = function(t, e, r) {
      var n = t * t,
        o = e * e;
      return Math.sqrt(r * (o - n) + n);
    };
    (e.blendColor = function(t, e) {
      var r = "string" == typeof t ? u.color.parse(t) : t,
        o = "string" == typeof e ? u.color.parse(e) : e,
        i = n({}, r),
        c =
          void 0 !== t.hue || ("string" == typeof t && u.hsla.test(t))
            ? a.getValueFromProgress
            : s;
      return function(t) {
        i = n({}, i);
        for (var e in i)
          "alpha" !== e && i.hasOwnProperty(e) && (i[e] = c(r[e], o[e], t));
        return (i.alpha = a.getValueFromProgress(r.alpha, o.alpha, t)), i;
      };
    }),
      (e.clamp = function(t, e) {
        return function(r) {
          return Math.min(Math.max(r, t), e);
        };
      });
    var c = function(t, e) {
      return function(r) {
        return e(t(r));
      };
    };
    (e.pipe = function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return t.reduce(c);
    }),
      (e.conditional = function(t, e) {
        return function(r) {
          return t(r) ? e(r) : r;
        };
      });
    var f = function(t, e, r, n) {
        var o = r - 1;
        return (
          t[0] > t[o] && (t.reverse(), e.reverse()),
          function(u) {
            if (u <= t[0]) return e[0];
            if (u >= t[o]) return e[o];
            for (var i = 1; i < r && !(t[i] > u || i === o); i++);
            var s = a.getProgressFromValue(t[i - 1], t[i], u),
              c = n ? n[i - 1](s) : s;
            return a.getValueFromProgress(e[i - 1], e[i], c);
          }
        );
      },
      l = function(t, e, r, n) {
        return function(o) {
          return ((o - t) * (n - r)) / (e - t) + r;
        };
      };
    (e.interpolate = function(t, e, r) {
      var n = t.length;
      return 2 !== n ? f(t, e, n, r) : l(t[0], t[1], e[0], e[1]);
    }),
      (e.generateStaticSpring = function(t) {
        return (
          void 0 === t && (t = i),
          function(e, r) {
            return function(n) {
              var o = r - n,
                u = -e * (0 - t(Math.abs(o)));
              return o <= 0 ? r + u : r - u;
            };
          }
        );
      }),
      (e.linearSpring = e.generateStaticSpring()),
      (e.nonlinearSpring = e.generateStaticSpring(Math.sqrt)),
      (e.wrap = function(t, e) {
        return function(r) {
          var n = e - t;
          return ((((r - t) % n) + n) % n) + t;
        };
      }),
      (e.smooth = function(t) {
        void 0 === t && (t = 50);
        var e = 0,
          r = 0;
        return function(n) {
          var u = o.currentFrameTime(),
            i = u !== r ? u - r : 0,
            s = i ? a.smooth(n, e, i, t) : e;
          return (r = u), (e = s), s;
        };
      }),
      (e.snap = function(t) {
        if ("number" == typeof t)
          return function(e) {
            return Math.round(e / t) * t;
          };
        var e = 0,
          r = t.length;
        return function(n) {
          var o = Math.abs(t[0] - n);
          for (e = 1; e < r; e++) {
            var u = t[e],
              a = Math.abs(u - n);
            if (0 === a) return u;
            if (a > o) return t[e - 1];
            if (e === r - 1) return u;
            o = a;
          }
        };
      }),
      (e.steps = function(t, e, r) {
        return (
          void 0 === e && (e = 0),
          void 0 === r && (r = 1),
          function(n) {
            var o = a.getProgressFromValue(e, r, n);
            return a.getValueFromProgress(e, r, a.stepProgress(t, o));
          }
        );
      }),
      (e.transformMap = function(t) {
        return function(e) {
          var r = n({}, e);
          for (var o in t)
            if (t.hasOwnProperty(o)) {
              var u = t[o];
              r[o] = u(e[o]);
            }
          return r;
        };
      });
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = r(0),
      u = function() {
        return o.default(function(t) {
          var e = t.update,
            r = !0,
            o = n.currentTime(),
            u = function() {
              r &&
                (e(Math.max(n.currentFrameTime() - o, 0)), n.onFrameUpdate(u));
            };
          return (
            n.onFrameUpdate(u),
            {
              stop: function() {
                return (r = !1);
              }
            }
          );
        });
      };
    e.default = u;
  },
  function(t, e, r) {
    "use strict";
    function n(t, e, r, n) {
      var l = f ? new Float32Array(s) : new Array(s),
        p = !1,
        d = function(e, n, o) {
          var u,
            s,
            c = 0;
          do {
            (s = n + (o - n) / 2),
              (u = h(s, t, r) - e),
              u > 0 ? (o = s) : (n = s);
          } while (Math.abs(u) > a && ++c < i);
          return s;
        },
        m = function(e, n) {
          for (var u, a = 0, i = 0; a < o; ++a) {
            if (0 === (i = v(n, t, r))) return n;
            (u = h(n, t, r) - e), (n -= u / i);
          }
          return n;
        },
        y = function() {
          for (var e = 0; e < s; ++e) l[e] = h(e * c, t, r);
        },
        g = function(e) {
          for (
            var n = 0, o = 1, a = s - 1, i = 0, f = 0, p = 0;
            o != a && l[o] <= e;
            ++o
          )
            n += c;
          return (
            --o,
            (i = (e - l[o]) / (l[o + 1] - l[o])),
            (f = n + i * c),
            (p = v(f, t, r)),
            p >= u ? m(e, f) : 0 === p ? f : d(e, n, n + c)
          );
        },
        b = function() {
          (p = !0), (t == e && r == n) || y();
        };
      return function(o) {
        return (
          p || b(),
          t === e && r === n ? o : 0 === o ? 0 : 1 === o ? 1 : h(g(o), e, n)
        );
      };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    (e.createReversedEasing = function(t) {
      return function(e) {
        return 1 - t(1 - e);
      };
    }),
      (e.createMirroredEasing = function(t) {
        return function(e) {
          return e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
        };
      }),
      (e.linear = function(t) {
        return t;
      }),
      (e.createExpoIn = function(t) {
        return function(e) {
          return Math.pow(e, t);
        };
      }),
      (e.easeIn = e.createExpoIn(2)),
      (e.easeOut = e.createReversedEasing(e.easeIn)),
      (e.easeInOut = e.createMirroredEasing(e.easeIn)),
      (e.circIn = function(t) {
        return 1 - Math.sin(Math.acos(t));
      }),
      (e.circOut = e.createReversedEasing(e.circIn)),
      (e.circInOut = e.createMirroredEasing(e.circOut)),
      (e.createBackIn = function(t) {
        return function(e) {
          return e * e * ((t + 1) * e - t);
        };
      }),
      (e.backIn = e.createBackIn(1.525)),
      (e.backOut = e.createReversedEasing(e.backIn)),
      (e.backInOut = e.createMirroredEasing(e.backIn)),
      (e.createAnticipateEasing = function(t) {
        var r = e.createBackIn(t);
        return function(t) {
          return (t *= 2) < 1
            ? 0.5 * r(t)
            : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        };
      }),
      (e.anticipate = e.createAnticipateEasing(1.525));
    var o = 8,
      u = 0.001,
      a = 1e-7,
      i = 10,
      s = 11,
      c = 1 / (s - 1),
      f = "undefined" != typeof Float32Array,
      l = function(t, e) {
        return 1 - 3 * e + 3 * t;
      },
      p = function(t, e) {
        return 3 * e - 6 * t;
      },
      d = function(t) {
        return 3 * t;
      },
      v = function(t, e, r) {
        return 3 * l(e, r) * t * t + 2 * p(e, r) * t + d(e);
      },
      h = function(t, e, r) {
        return ((l(e, r) * t + p(e, r)) * t + d(e)) * t;
      };
    e.cubicBezier = n;
  },
  function(t, e, r) {
    "use strict";
    var n =
      (this && this.__assign) ||
      Object.assign ||
      function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
          e = arguments[r];
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
        return t;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(3),
      u = r(10),
      a = r(8),
      i = r(4),
      s = o.color.test,
      c = function(t, e) {
        return "string" == typeof e.from &&
          s(e.from) &&
          "string" == typeof e.to &&
          s(e.to)
          ? t(n({}, e, { from: 0, to: 1 })).pipe(
              i.blendColor(e.from, e.to),
              o.color.transform
            )
          : t(e);
      },
      f = function(t) {
        var e = Object.keys(t);
        return {
          getVectorKeys: function(r) {
            return e.reduce(function(e, n) {
              return void 0 === r[n] || t[n](r[n]) || e.push(n), e;
            }, []);
          },
          test: function(r) {
            return (
              r &&
              e.reduce(function(e, n) {
                return e || (void 0 !== r[n] && !t[n](r[n]));
              }, !1)
            );
          }
        };
      },
      l = function(t) {
        return function(e, r) {
          return (e[r] = e[r][t]), e;
        };
      },
      p = function(t, e, r) {
        var o = r[0],
          u = e[o].map(function(o, u) {
            return c(t, r.reduce(l(u), n({}, e)));
          });
        return a.default.apply(void 0, u);
      },
      d = function(t) {
        return function(e, r) {
          return (e[r] = e[r][t]), e;
        };
      },
      v = function(t, e, r) {
        var o = r[0],
          a = Object.keys(e[o]).reduce(function(o, u) {
            return (o[u] = c(t, r.reduce(d(u), n({}, e)))), o;
          }, {});
        return u.default(a);
      },
      h = function(t, e) {
        return c(t, e);
      },
      m = function(t, e) {
        var r = f(e),
          n = r.test,
          o = r.getVectorKeys;
        return function(e) {
          if (!n(e)) return t(e);
          var r = o(e),
            u = r[0],
            a = e[u];
          return Array.isArray(a)
            ? p(t, e, r)
            : "string" == typeof a && s(a)
              ? h(t, e)
              : v(t, e, r);
        };
      };
    e.default = m;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(16),
      o = n.default({
        getOutput: function() {
          return [];
        },
        getCount: function(t) {
          return t.length;
        },
        getFirst: function(t) {
          return t[0];
        },
        mapApi: function(t, e) {
          return function() {
            for (var r = [], n = 0; n < arguments.length; n++)
              r[n] = arguments[n];
            return t.map(function(t, n) {
              if (t[e])
                return Array.isArray(r[0]) ? t[e](r[0][n]) : t[e].apply(t, r);
            });
          };
        },
        setProp: function(t, e, r) {
          return (t[e] = r);
        },
        startActions: function(t, e) {
          return t.map(function(t, r) {
            return e(t, r);
          });
        }
      });
    e.default = function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return o(t);
    };
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = ["", "X", "Y", "Z"],
      o = ["translate", "scale", "rotate", "skew", "transformPerspective"],
      u = o.reduce(
        function(t, e) {
          return n.reduce(function(t, r) {
            return t.push(e + r), t;
          }, t);
        },
        ["x", "y", "z"]
      ),
      a = u.reduce(function(t, e) {
        return (t[e] = !0), t;
      }, {});
    (e.isTransformProp = function(t) {
      return !0 === a[t];
    }),
      (e.sortTransformProps = function(t, e) {
        return u.indexOf(t) - u.indexOf(e);
      });
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(16),
      o = n.default({
        getOutput: function() {
          return {};
        },
        getCount: function(t) {
          return Object.keys(t).length;
        },
        getFirst: function(t) {
          return t[Object.keys(t)[0]];
        },
        mapApi: function(t, e) {
          return function() {
            for (var r = [], n = 0; n < arguments.length; n++)
              r[n] = arguments[n];
            return Object.keys(t).reduce(function(n, o) {
              return (
                t[o][e] &&
                  (r[0] && void 0 !== r[0][o]
                    ? (n[o] = t[o][e](r[0][o]))
                    : (n[o] = (u = t[o])[e].apply(u, r))),
                n
              );
              var u;
            }, {});
          };
        },
        setProp: function(t, e, r) {
          return (t[e] = r);
        },
        startActions: function(t, e) {
          return Object.keys(t).reduce(function(r, n) {
            return (r[n] = e(t[n], n)), r;
          }, {});
        }
      });
    e.default = o;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      o = function(t, e, r) {
        return n.default(function(n) {
          var o = n.update,
            u = e.split(" ").map(function(e) {
              return t.addEventListener(e, o, r), e;
            });
          return {
            stop: function() {
              return u.forEach(function(e) {
                return t.removeEventListener(e, o, r);
              });
            }
          };
        });
      };
    e.default = o;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = /([a-z])([A-Z])/g;
    (e.camelToDash = function(t) {
      return t.replace(n, "$1-$2").toLowerCase();
    }),
      (e.setDomAttrs = function(t, e) {
        for (var r in e) e.hasOwnProperty(r) && t.setAttribute(r, e[r]);
      });
  },
  function(t, e, r) {
    "use strict";
    var n =
      (this && this.__assign) ||
      Object.assign ||
      function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
          e = arguments[r];
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
        return t;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(4),
      u = (function() {
        function t(t) {
          void 0 === t && (t = {}), (this.props = t);
        }
        return (
          (t.prototype.applyMiddleware = function(t) {
            return this.create(
              n({}, this.props, {
                middleware: this.props.middleware
                  ? [t].concat(this.props.middleware)
                  : [t]
              })
            );
          }),
          (t.prototype.pipe = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var r = 1 === t.length ? t[0] : o.pipe.apply(void 0, t);
            return this.applyMiddleware(function(t) {
              return function(e) {
                return t(r(e));
              };
            });
          }),
          (t.prototype.while = function(t) {
            return this.applyMiddleware(function(e, r) {
              return function(n) {
                return t(n) ? e(n) : r();
              };
            });
          }),
          (t.prototype.filter = function(t) {
            return this.applyMiddleware(function(e, r) {
              return function(r) {
                return t(r) && e(r);
              };
            });
          }),
          t
        );
      })();
    e.default = u;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function() {
      function t(t, e) {
        var r = t.middleware,
          n = t.onComplete,
          o = this;
        (this.isActive = !0),
          (this.update = function(t) {
            o.observer.update && o.updateObserver(t);
          }),
          (this.complete = function() {
            o.observer.complete && o.isActive && o.observer.complete(),
              o.onComplete && o.onComplete(),
              (o.isActive = !1);
          }),
          (this.error = function(t) {
            o.observer.error && o.isActive && o.observer.error(t),
              (o.isActive = !1);
          }),
          (this.observer = e),
          (this.updateObserver = function(t) {
            return e.update(t);
          }),
          (this.onComplete = n),
          e.update &&
            r &&
            r.length &&
            r.forEach(function(t) {
              return (o.updateObserver = t(o.updateObserver, o.complete));
            });
      }
      return t;
    })();
    (e.Observer = n),
      (e.default = function(t, e, r) {
        var o = e.middleware;
        return "function" == typeof t
          ? new n({ middleware: o, onComplete: r }, { update: t })
          : new n({ middleware: o, onComplete: r }, t);
      });
  },
  function(t, e, r) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function() {
        var t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          };
        return function(e, r) {
          function n() {
            this.constructor = e;
          }
          t(e, r),
            (e.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(13),
      u = r(14),
      a = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.subscribers = []), e;
        }
        return (
          n(e, t),
          (e.prototype.complete = function() {
            this.subscribers.forEach(function(t) {
              return t.complete();
            });
          }),
          (e.prototype.error = function(t) {
            this.subscribers.forEach(function(e) {
              return e.error(t);
            });
          }),
          (e.prototype.update = function(t) {
            for (var e = 0; e < this.subscribers.length; e++)
              this.subscribers[e].update(t);
          }),
          (e.prototype.subscribe = function(t) {
            var e = this,
              r = u.default(t, this.props);
            return (
              this.subscribers.push(r),
              {
                unsubscribe: function() {
                  var t = e.subscribers.indexOf(r);
                  -1 !== t && e.subscribers.splice(t, 1);
                }
              }
            );
          }),
          (e.prototype.stop = function() {
            this.parent && this.parent.stop();
          }),
          (e.prototype.registerParent = function(t) {
            this.stop(), (this.parent = t);
          }),
          e
        );
      })(o.default);
    e.BaseMulticast = a;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = r(0),
      u = function(t) {
        var e = t.getCount,
          r = t.getFirst,
          u = t.getOutput,
          a = t.mapApi,
          i = t.setProp,
          s = t.startActions;
        return function(t) {
          return o.default(function(o) {
            var c = o.update,
              f = o.complete,
              l = o.error,
              p = e(t),
              d = u(),
              v = function() {
                return c(d);
              },
              h = 0,
              m = s(t, function(t, e) {
                var r = !1;
                return t.start({
                  complete: function() {
                    r || ((r = !0), ++h === p && n.onFrameUpdate(f));
                  },
                  error: l,
                  update: function(t) {
                    i(d, e, t), n.onFrameUpdate(v, !0);
                  }
                });
              });
            return Object.keys(r(m)).reduce(function(t, e) {
              return (t[e] = a(m, e)), t;
            }, {});
          });
        };
      };
    e.default = u;
  },
  function(t, e, r) {
    "use strict";
    var n =
        (this && this.__assign) ||
        Object.assign ||
        function(t) {
          for (var e, r = 1, n = arguments.length; r < n; r++) {
            e = arguments[r];
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          }
          return t;
        },
      o =
        (this && this.__rest) ||
        function(t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (r[n] = t[n]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, n = Object.getOwnPropertySymbols(t);
              o < n.length;
              o++
            )
              e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]]);
          return r;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = r(2),
      a = r(6),
      i = r(4),
      s = r(18),
      c = r(19),
      f = i.clamp(0, 1),
      l = function(t, e) {
        return t
          .map(function() {
            return e || a.easeOut;
          })
          .splice(0, t.length - 1);
      },
      p = function(t) {
        var e = t.length;
        return t.map(function(t, r) {
          return 0 !== r ? r / (e - 1) : 0;
        });
      },
      d = function(t, e, r) {
        var n = t.length,
          o = n - 1,
          a = o - 1,
          i = e.map(function(t) {
            return t.start(r);
          });
        return function(e) {
          e <= t[0] && i[0].seek(0), e >= t[o] && i[a].seek(1);
          for (var r = 1; r < n && !(t[r] > e || r === o); r++);
          var s = u.getProgressFromValue(t[r - 1], t[r], e);
          i[r - 1].seek(f(s));
        };
      },
      v = function(t) {
        var e = t.easings,
          r = t.ease,
          u = void 0 === r ? a.linear : r,
          i = t.times,
          f = t.values,
          v = o(t, ["easings", "ease", "times", "values"]);
        (e = Array.isArray(e) ? e : l(f, e)), (i = i || p(f));
        var h = e.map(function(t, e) {
          return c.default({ from: f[e], to: f[e + 1], ease: t });
        });
        return s.default(n({}, v, { ease: u })).applyMiddleware(function(t) {
          return d(i, h, t);
        });
      };
    e.default = v;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = r(0),
      u = r(2),
      a = r(6),
      i = r(4),
      s = r(5),
      c = r(19),
      f = i.clamp(0, 1),
      l = function(t) {
        return (
          void 0 === t && (t = {}),
          o.default(function(e) {
            var r,
              o = e.update,
              l = e.complete,
              p = t.duration,
              d = void 0 === p ? 300 : p,
              v = t.ease,
              h = void 0 === v ? a.easeOut : v,
              m = t.flip,
              y = void 0 === m ? 0 : m,
              g = t.loop,
              b = void 0 === g ? 0 : g,
              O = t.yoyo,
              _ = void 0 === O ? 0 : O,
              P = t.from,
              M = void 0 === P ? 0 : P,
              w = t.to,
              j = void 0 === w ? 1 : w,
              x = t.elapsed,
              F = void 0 === x ? 0 : x,
              S = t.playDirection,
              k = void 0 === S ? 1 : S,
              A = t.flipCount,
              C = void 0 === A ? 0 : A,
              T = t.yoyoCount,
              V = void 0 === T ? 0 : T,
              E = t.loopCount,
              D = void 0 === E ? 0 : E,
              I = c.default({ from: M, to: j, ease: h }).start(o),
              Y = 0,
              X = !1,
              U = function() {
                return (k *= -1);
              },
              L = function() {
                var t = 1 === k ? X && F >= d : X && F <= 0;
                if (!t) return !1;
                if (t && !b && !y && !_) return !0;
                var e = !1;
                return (
                  b && D < b
                    ? ((F = 0), D++, (e = !0))
                    : y && C < y
                      ? ((F = d - F),
                        (r = [j, M]),
                        (M = r[0]),
                        (j = r[1]),
                        (I = c.default({ from: M, to: j, ease: h }).start(o)),
                        C++,
                        (e = !0))
                      : _ && V < _ && (U(), V++, (e = !0)),
                  !e
                );
                var r;
              },
              R = function() {
                (Y = f(u.getProgressFromValue(0, d, F))), I.seek(Y);
              },
              B = function() {
                (X = !0),
                  (r = s.default().start(function() {
                    (F += n.timeSinceLastFrame() * k),
                      R(),
                      L() && l && (r.stop(), n.onFrameUpdate(l, !0));
                  }));
              },
              q = function() {
                (X = !1), r && r.stop();
              };
            return (
              B(),
              {
                isActive: function() {
                  return X;
                },
                getElapsed: function() {
                  return i.clamp(0, d)(F);
                },
                getProgress: function() {
                  return Y;
                },
                stop: function() {
                  q();
                },
                pause: function() {
                  return q(), this;
                },
                resume: function() {
                  return B(), this;
                },
                seek: function(t) {
                  return (
                    (F = u.getValueFromProgress(0, d, t)),
                    n.onFrameUpdate(R, !0),
                    this
                  );
                },
                reverse: function() {
                  return U(), this;
                }
              }
            );
          })
        );
      };
    e.default = l;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(3),
      o = r(0),
      u = r(7),
      a = r(2),
      i = r(6),
      s = function(t) {
        var e = t.from,
          r = void 0 === e ? 0 : e,
          n = t.to,
          u = void 0 === n ? 1 : n,
          s = t.ease,
          c = void 0 === s ? i.linear : s;
        return o
          .default(function(t) {
            var e = t.update;
            return {
              seek: function(t) {
                return e(t);
              }
            };
          })
          .pipe(
            c,
            function(t) {
              return a.getValueFromProgress(r, u, t);
            }
          );
      };
    e.default = u.default(s, {
      ease: function(t) {
        return "function" == typeof t;
      },
      from: n.number.test,
      to: n.number.test
    });
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = r(0),
      u = r(2),
      a = r(11),
      i = r(21),
      s = [i.defaultPointerPos()],
      c = !1;
    if ("undefined" != typeof document) {
      var f = function(t) {
        var e = t.touches;
        c = !0;
        var r = e.length;
        s.length = 0;
        for (var n = 0; n < r; n++) {
          var o = e[n];
          s.push(i.eventToPoint(o));
        }
      };
      a.default(document, "touchstart touchmove", !0).start(f);
    }
    var l = function(t) {
      var e = void 0 === t ? {} : t,
        r = e.preventDefault,
        i = void 0 === r || r,
        f = e.scale,
        l = void 0 === f ? 1 : f,
        p = e.rotate,
        d = void 0 === p ? 0 : p;
      return o.default(function(t) {
        var e = t.update,
          r = { touches: s, scale: l, rotate: d },
          o = 0,
          f = 0,
          p = s.length > 1;
        if (p) {
          var v = s[0],
            h = s[1];
          (o = u.distance(v, h)), (f = u.angle(v, h));
        }
        var m = function() {
            if (p) {
              var t = s[0],
                n = s[1],
                a = u.distance(t, n),
                i = u.angle(t, n);
              (r.scale = l * (a / o)), (r.rotate = d + (i - f));
            }
            e(r);
          },
          y = function(t) {
            (i || t.touches.length > 1) && t.preventDefault(),
              n.onFrameUpdate(m);
          },
          g = a.default(document, "touchmove", { passive: !i }).start(y);
        return (
          c && n.onFrameUpdate(m),
          {
            stop: function() {
              n.cancelOnFrameUpdate(m), g.stop();
            }
          }
        );
      });
    };
    (e.default = l),
      (e.getIsTouchDevice = function() {
        return c;
      });
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.defaultPointerPos = function() {
        return { clientX: 0, clientY: 0, pageX: 0, pageY: 0, x: 0, y: 0 };
      }),
      (e.eventToPoint = function(t, r) {
        return (
          void 0 === r && (r = e.defaultPointerPos()),
          (r.clientX = r.x = t.clientX),
          (r.clientY = r.y = t.clientY),
          (r.pageX = t.pageX),
          (r.pageY = t.pageY),
          r
        );
      });
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = r(0),
      u = r(11),
      a = r(21),
      i = a.defaultPointerPos(),
      s = !1;
    if ("undefined" != typeof document) {
      var c = function(t) {
        (s = !0), a.eventToPoint(t, i);
      };
      u.default(document, "mousedown mousemove", !0).start(c);
    }
    var f = function(t) {
      var e = (void 0 === t ? {} : t).preventDefault,
        r = void 0 === e || e;
      return o.default(function(t) {
        var e = t.update,
          o = function() {
            return e(i);
          },
          a = function(t) {
            r && t.preventDefault(), n.onFrameUpdate(o);
          },
          c = u.default(document, "mousemove").start(a);
        return (
          s && n.onFrameUpdate(o),
          {
            stop: function() {
              n.cancelOnFrameUpdate(o), c.stop();
            }
          }
        );
      });
    };
    e.default = f;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      o = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return n.default(function(e) {
          var r,
            n = e.update,
            o = e.complete,
            u = 0,
            a = function() {
              r = t[u].start({
                complete: function() {
                  u++, u >= t.length ? o() : a();
                },
                update: n
              });
            };
          return (
            a(),
            {
              stop: function() {
                return r && r.stop();
              }
            }
          );
        });
      };
    e.default = o;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      o = function(t) {
        return n.default(function(e) {
          var r = e.complete,
            n = setTimeout(r, t);
          return {
            stop: function() {
              return clearTimeout(n);
            }
          };
        });
      };
    e.default = o;
  },
  function(t, e, r) {
    "use strict";
    var n =
      (this && this.__assign) ||
      Object.assign ||
      function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
          e = arguments[r];
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
        return t;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(26),
      u = r(27),
      a = r(28),
      i = r(9),
      s = r(29),
      c = o.default({
        onRead: function(t, e) {
          var r = e.element,
            n = e.preparseOutput,
            o = s.default(t);
          if (i.isTransformProp(t)) return o ? o.default || 0 : 0;
          var a =
            window
              .getComputedStyle(r, null)
              .getPropertyValue(u.default(t, !0)) || 0;
          return n && o && o.parse ? o.parse(a) : a;
        },
        onRender: function(t, e, r) {
          var n = e.element,
            o = e.enableHardwareAcceleration;
          n.style.cssText += a.default(t, r, o);
        },
        aliasMap: {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          originX: "transformOriginX",
          originY: "transformOriginY"
        }
      });
    e.default = function(t, e) {
      return c(
        n({ element: t, enableHardwareAcceleration: !0, preparseOutput: !0 }, e)
      );
    };
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = function(t) {
        var e = t.onRead,
          r = t.onRender,
          o = t.aliasMap,
          u = void 0 === o ? {} : o,
          a = t.useCache,
          i = void 0 === a || a;
        return function(t) {
          var o = {},
            a = [],
            s = !1,
            c = function(t, e) {
              var r = u[t] || t,
                i = o[r];
              (o[r] = e),
                o[r] !== i &&
                  (-1 === a.indexOf(r) && a.push(r),
                  s || ((s = !0), n.onFrameRender(f)));
            },
            f = function() {
              r(o, t, a), (s = !1), (a.length = 0);
            };
          return {
            get: function(r) {
              var n = u[r] || r;
              return n ? (i && void 0 !== o[n] ? o[n] : e(n, t)) : o;
            },
            set: function(t, e) {
              if ("string" == typeof t) {
                if (void 0 === e)
                  return function(e) {
                    return c(t, e);
                  };
                c(t, e);
              } else for (var r in t) t.hasOwnProperty(r) && c(r, t[r]);
              return this;
            },
            render: function(t) {
              return void 0 === t && (t = !1), (t || s) && f(), this;
            }
          };
        };
      };
    e.default = o;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n,
      o = r(12),
      u = new Map(),
      a = new Map(),
      i = ["Webkit", "Moz", "O", "ms", ""],
      s = i.length,
      c = function(t) {
        n = n || document.createElement("div");
        for (var e = 0; e < s; e++) {
          var r = i[e],
            c = "" === r,
            f = c ? t : r + t.charAt(0).toUpperCase() + t.slice(1);
          f in n.style &&
            (u.set(t, f), a.set(t, (c ? "" : "-") + o.camelToDash(f)));
        }
      };
    e.default = function(t, e) {
      void 0 === e && (e = !1);
      var r = e ? a : u;
      return r.has(t) || c(t), r.get(t);
    };
  },
  function(t, e, r) {
    "use strict";
    function n(t, e, r) {
      void 0 === e && (e = !0), void 0 === r && (r = !0);
      for (
        var n = !0 === e ? Object.keys(t) : e,
          i = "",
          s = "",
          c = !1,
          f = !1,
          l = n.length,
          p = 0;
        p < l;
        p++
      ) {
        var d = n[p];
        if (o.isTransformProp(d)) {
          c = !0;
          for (var v in t)
            o.isTransformProp(v) && -1 === n.indexOf(v) && n.push(v);
          break;
        }
      }
      n.sort(o.sortTransformProps);
      for (var h = n.length, p = 0; p < h; p++) {
        var d = n[p],
          m = t[d],
          y = a.default(d);
        y &&
          ("number" == typeof m || "object" == typeof m) &&
          y.transform &&
          (m = y.transform(m)),
          o.isTransformProp(d)
            ? ((s += d + "(" + m + ") "), (f = "translateZ" === d || f))
            : (i += ";" + u.default(d, !0) + ":" + m);
      }
      return (
        c &&
          (!f && r && (s += "translateZ(0)"),
          (i += ";" + u.default("transform", !0) + ":" + s)),
        i
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(9),
      u = r(27),
      a = r(29);
    e.default = n;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(3),
      o = {
        color: n.color,
        backgroundColor: n.color,
        outlineColor: n.color,
        fill: n.color,
        stroke: n.color,
        borderColor: n.color,
        borderTopColor: n.color,
        borderRightColor: n.color,
        borderBottomColor: n.color,
        borderLeftColor: n.color,
        borderRadius: n.px,
        width: n.px,
        maxWidth: n.px,
        height: n.px,
        maxHeight: n.px,
        top: n.px,
        left: n.px,
        bottom: n.px,
        right: n.px,
        rotate: n.degrees,
        rotateX: n.degrees,
        rotateY: n.degrees,
        rotateZ: n.degrees,
        scale: n.scale,
        scaleX: n.scale,
        scaleY: n.scale,
        scaleZ: n.scale,
        skewX: n.degrees,
        skewY: n.degrees,
        distance: n.px,
        translateX: n.px,
        translateY: n.px,
        translateZ: n.px,
        perspective: n.px,
        opacity: n.alpha,
        transformOriginX: n.percent,
        transformOriginY: n.percent
      };
    e.default = function(t) {
      return o[t];
    };
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(9),
      o = r(26),
      u = r(12),
      a = r(46),
      i = r(47),
      s = o.default({
        onRead: function(t, e) {
          var r = e.element;
          if (n.isTransformProp(t)) {
            var o = i.default(t);
            return o ? o.default : 0;
          }
          return r.getAttribute(t);
        },
        onRender: function(t, e, r) {
          var n = e.dimensions,
            o = e.element,
            i = e.isPath,
            s = e.pathLength;
          u.setDomAttrs(o, a.default(t, n, i, s));
        },
        aliasMap: { x: "translateX", y: "translateY", background: "fill" }
      });
    e.default = function(t) {
      var e = t.getBBox(),
        r = e.x,
        n = e.y,
        o = e.width,
        u = e.height,
        a = {
          element: t,
          dimensions: { x: r, y: n, width: o, height: u },
          isPath: !1
        };
      return (
        "path" === t.tagName &&
          ((a.isPath = !0), (a.pathLength = t.getTotalLength())),
        s(a)
      );
    };
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0);
    e.action = n.default;
    var o = r(34);
    e.multicast = o.default;
    var u = r(35);
    e.value = u.default;
    var a = r(36);
    e.decay = a.default;
    var i = r(5);
    e.everyFrame = i.default;
    var s = r(17);
    e.keyframes = s.default;
    var c = r(37);
    e.physics = c.default;
    var f = r(38);
    e.spring = f.default;
    var l = r(39);
    e.timeline = l.default;
    var p = r(18);
    e.tween = p.default;
    var d = r(11);
    e.listen = d.default;
    var v = r(20);
    e.multitouch = v.default;
    var h = r(40);
    e.pointer = h.default;
    var m = r(22);
    e.mouse = m.default;
    var y = r(23);
    e.chain = y.default;
    var g = r(10);
    e.composite = g.default;
    var b = r(41);
    e.crossfade = b.default;
    var O = r(24);
    e.delay = O.default;
    var _ = r(42);
    e.merge = _.default;
    var P = r(8);
    e.parallel = P.default;
    var M = r(43);
    e.schedule = M.default;
    var w = r(44);
    e.stagger = w.default;
    var j = r(2);
    e.calc = j;
    var x = r(6);
    e.easing = x;
    var F = r(4);
    e.transform = F;
    var S = r(45);
    e.styler = S.default;
    var k = r(25);
    e.css = k.default;
    var A = r(30);
    e.svg = A.default;
    var C = r(3);
    e.valueTypes = C;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n =
        "undefined" != typeof window && void 0 !== window.requestAnimationFrame,
      o = 0,
      u = n
        ? function(t) {
            return window.requestAnimationFrame(t);
          }
        : function(t) {
            var e = Date.now(),
              r = Math.max(0, 16.7 - (e - o));
            (o = e + r),
              setTimeout(function() {
                return t(o);
              }, r);
          };
    e.default = u;
  },
  function(t, e, r) {
    "use strict";
    function n(t) {
      var e = [],
        r = [],
        n = 0,
        o = !1,
        u = 0;
      return {
        cancel: function(t) {
          var e = r.indexOf(t);
          -1 !== e && r.splice(e, 1);
        },
        process: function() {
          for (
            o = !0,
              t = [r, e],
              e = t[0],
              r = t[1],
              r.length = 0,
              n = e.length,
              u = 0;
            u < n;
            u++
          )
            e[u]();
          o = !1;
          var t;
        },
        schedule: function(u, a) {
          void 0 === a && (a = !1), t();
          var i = a && o,
            s = i ? e : r;
          -1 === s.indexOf(u) && (s.push(u), i && (n = e.length));
        }
      };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n);
  },
  function(t, e, r) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function() {
        var t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          };
        return function(e, r) {
          function n() {
            this.constructor = e;
          }
          t(e, r),
            (e.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(15),
      u = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          n(e, t),
          (e.prototype.create = function(t) {
            return new e(t);
          }),
          e
        );
      })(o.BaseMulticast);
    (e.Multicast = u),
      (e.default = function() {
        return new u();
      });
  },
  function(t, e, r) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function() {
        var t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          };
        return function(e, r) {
          function n() {
            this.constructor = e;
          }
          t(e, r),
            (e.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(1),
      u = r(2),
      a = r(15),
      i = function(t) {
        return Array.isArray(t);
      },
      s = function(t) {
        var e = typeof t;
        return "string" === e || "number" === e;
      },
      c = (function(t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.scheduleVelocityCheck = function() {
              return o.onFrameEnd(r.velocityCheck);
            }),
            (r.velocityCheck = function() {
              o.currentFrameTime() !== r.lastUpdated && (r.prev = r.current);
            }),
            (r.prev = r.current = e.value || 0),
            s(r.current)
              ? ((r.updateCurrent = function(t) {
                  return (r.current = t);
                }),
                (r.getVelocityOfCurrent = function() {
                  return r.getSingleVelocity(r.current, r.prev);
                }))
              : i(r.current)
                ? ((r.updateCurrent = function(t) {
                    return (r.current = t.slice());
                  }),
                  (r.getVelocityOfCurrent = function() {
                    return r.getListVelocity();
                  }))
                : ((r.updateCurrent = function(t) {
                    r.current = {};
                    for (var e in t)
                      t.hasOwnProperty(e) && (r.current[e] = t[e]);
                  }),
                  (r.getVelocityOfCurrent = function() {
                    return r.getMapVelocity();
                  })),
            e.initialSubscription && r.subscribe(e.initialSubscription),
            r
          );
        }
        return (
          n(e, t),
          (e.prototype.create = function(t) {
            return new e(t);
          }),
          (e.prototype.get = function() {
            return this.current;
          }),
          (e.prototype.getVelocity = function() {
            return this.getVelocityOfCurrent();
          }),
          (e.prototype.update = function(e) {
            t.prototype.update.call(this, e),
              (this.prev = this.current),
              this.updateCurrent(e),
              (this.timeDelta = o.timeSinceLastFrame()),
              (this.lastUpdated = o.currentFrameTime()),
              o.onFrameEnd(this.scheduleVelocityCheck);
          }),
          (e.prototype.subscribe = function(e) {
            var r = t.prototype.subscribe.call(this, e);
            return this.update(this.current), r;
          }),
          (e.prototype.getSingleVelocity = function(t, e) {
            return "number" == typeof t && "number" == typeof e
              ? u.speedPerSecond(t - e, this.timeDelta)
              : u.speedPerSecond(
                  parseFloat(t) - parseFloat(e),
                  this.timeDelta
                ) || 0;
          }),
          (e.prototype.getListVelocity = function() {
            var t = this;
            return this.current.map(function(e, r) {
              return t.getSingleVelocity(e, t.prev[r]);
            });
          }),
          (e.prototype.getMapVelocity = function() {
            var t = {};
            for (var e in this.current)
              this.current.hasOwnProperty(e) &&
                (t[e] = this.getSingleVelocity(this.current[e], this.prev[e]));
            return t;
          }),
          e
        );
      })(a.BaseMulticast);
    (e.ValueReaction = c),
      (e.default = function(t, e) {
        return new c({ value: t, initialSubscription: e });
      });
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = r(3),
      u = r(0),
      a = r(7),
      i = r(5),
      s = function(t) {
        return (
          void 0 === t && (t = {}),
          u.default(function(e) {
            var r = e.complete,
              o = e.update,
              u = t.velocity,
              a = void 0 === u ? 0 : u,
              s = t.from,
              c = void 0 === s ? 0 : s,
              f = t.power,
              l = void 0 === f ? 0.8 : f,
              p = t.timeConstant,
              d = void 0 === p ? 350 : p,
              v = t.restDelta,
              h = void 0 === v ? 0.5 : v,
              m = t.modifyTarget,
              y = 0,
              g = l * a,
              b = Math.round(c + g),
              O = void 0 === m ? b : m(b),
              _ = i.default().start(function() {
                y += n.timeSinceLastFrame();
                var t = -g * Math.exp(-y / d),
                  e = t > h || t < -h;
                o(e ? O + t : O), e || (_.stop(), r());
              });
            return {
              stop: function() {
                return _.stop();
              }
            };
          })
        );
      };
    e.default = a.default(s, {
      from: o.number.test,
      modifyTarget: function(t) {
        return "function" == typeof t;
      },
      velocity: o.number.test
    });
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = r(3),
      u = r(0),
      a = r(7),
      i = r(2),
      s = r(5),
      c = function(t) {
        return (
          void 0 === t && (t = {}),
          u.default(function(e) {
            var r = e.complete,
              o = e.update,
              u = t.acceleration,
              a = void 0 === u ? 0 : u,
              c = t.friction,
              f = void 0 === c ? 0 : c,
              l = t.velocity,
              p = void 0 === l ? 0 : l,
              d = t.springStrength,
              v = t.to,
              h = t.restSpeed,
              m = void 0 === h ? 0.001 : h,
              y = t.from,
              g = void 0 === y ? 0 : y,
              b = g,
              O = s.default().start(function() {
                var t = Math.max(n.timeSinceLastFrame(), 16);
                if (
                  (a && (p += i.speedPerFrame(a, t)),
                  f && (p *= Math.pow(1 - f, t / 100)),
                  void 0 !== d && void 0 !== v)
                ) {
                  p += (v - b) * i.speedPerFrame(d, t);
                }
                (b += i.speedPerFrame(p, t)),
                  o(b),
                  !1 !== m && (!p || Math.abs(p) <= m) && (O.stop(), r());
              });
            return {
              set: function(t) {
                return (b = t), this;
              },
              setAcceleration: function(t) {
                return (a = t), this;
              },
              setFriction: function(t) {
                return (f = t), this;
              },
              setSpringStrength: function(t) {
                return (d = t), this;
              },
              setSpringTarget: function(t) {
                return (v = t), this;
              },
              setVelocity: function(t) {
                return (p = t), this;
              },
              stop: function() {
                return O.stop();
              }
            };
          })
        );
      };
    e.default = a.default(c, {
      acceleration: o.number.test,
      friction: o.number.test,
      velocity: o.number.test,
      from: o.number.test,
      to: o.number.test,
      springStrength: o.number.test
    });
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = r(3),
      u = r(0),
      a = r(7),
      i = r(2),
      s = r(5),
      c = function(t) {
        return (
          void 0 === t && (t = {}),
          u.default(function(e) {
            var r = e.update,
              o = e.complete,
              u = t.velocity,
              a = void 0 === u ? 0 : u,
              c = t.from,
              f = void 0 === c ? 0 : c,
              l = t.to,
              p = void 0 === l ? 0 : l,
              d = t.stiffness,
              v = void 0 === d ? 100 : d,
              h = t.damping,
              m = void 0 === h ? 10 : h,
              y = t.mass,
              g = void 0 === y ? 1 : y,
              b = t.restSpeed,
              O = void 0 === b ? 0.01 : b,
              _ = t.restDelta,
              P = void 0 === _ ? 0.01 : _,
              M = a ? -a / 1e3 : 0,
              w = 0,
              j = p - f,
              x = f,
              F = x,
              S = s.default().start(function() {
                var t = n.timeSinceLastFrame();
                w += t;
                var e = m / (2 * Math.sqrt(v * g)),
                  u = Math.sqrt(v / g) / 1e3;
                if (((F = x), e < 1)) {
                  var s = Math.exp(-e * u * w),
                    c = u * Math.sqrt(1 - e * e);
                  x =
                    p -
                    s *
                      (((M + e * u * j) / c) * Math.sin(c * w) +
                        j * Math.cos(c * w));
                } else {
                  var s = Math.exp(-u * w);
                  x = p - s * (j + (M + u * j) * w);
                }
                a = i.speedPerSecond(x - F, t);
                var f = Math.abs(a) <= O,
                  l = Math.abs(p - x) <= P;
                f && l ? ((x = p), r(x), S.stop(), o()) : r(x);
              });
            return {
              stop: function() {
                return S.stop();
              }
            };
          })
        );
      };
    e.default = a.default(c, {
      from: o.number.test,
      to: o.number.test,
      stiffness: o.number.test,
      damping: o.number.test,
      mass: o.number.test,
      velocity: o.number.test
    });
  },
  function(t, e, r) {
    "use strict";
    var n =
      (this && this.__assign) ||
      Object.assign ||
      function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
          e = arguments[r];
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
        return t;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(17),
      u = r(6),
      a = r(10),
      i = function(t) {
        var e = [],
          r = t[t.length - 1],
          n = "number" == typeof r,
          o = n ? r : 0,
          u = n ? t.slice(0, -1) : t,
          a = u.length,
          i = 0;
        return (
          u.forEach(function(t, r) {
            if ((e.push(t), r !== a - 1)) {
              var n = t.duration || 300;
              (i += o), e.push("-" + (n - i));
            }
          }),
          e
        );
      },
      s = function(t, e) {
        return Array.isArray(e) ? t.push.apply(t, i(e)) : t.push(e), t;
      },
      c = function(t, e, r) {
        var n = t.duration,
          o = t.easings,
          a = t.times,
          i = t.values,
          s = i.length,
          c = a[s - 1],
          f = 0 === e.at ? 0 : e.at / n,
          l = (e.at + e.duration) / n;
        if (0 === r) i.push(e.from), a.push(f);
        else if (c !== f) {
          void 0 !== e.from && (i.push(i[s - 1]), a.push(f), o.push(u.linear));
          var p = void 0 !== e.from ? e.from : i[s - 1];
          i.push(p), a.push(f), o.push(u.linear);
        } else
          void 0 !== e.from && (i.push(e.from), a.push(f), o.push(u.linear));
        return i.push(e.to), a.push(l), o.push(e.ease || u.easeInOut), t;
      },
      f = function(t, e) {
        var r = void 0 === e ? {} : e,
          u = r.duration,
          i = r.elapsed,
          f = r.ease,
          l = r.loop,
          p = r.flip,
          d = r.yoyo,
          v = 0,
          h = 0,
          m = t.reduce(s, []),
          y = [];
        m.forEach(function(t) {
          if ("string" == typeof t) v += parseFloat(t);
          else if ("number" == typeof t) v = t;
          else {
            var e = n({}, t, { at: v });
            (e.duration = void 0 === e.duration ? 300 : e.duration),
              y.push(e),
              (v += e.duration),
              (h = Math.max(h, e.at + e.duration));
          }
        });
        for (var g = {}, b = y.length, O = 0; O < b; O++) {
          var _ = y[O],
            P = _.track;
          if (void 0 === P) throw new Error("No track defined");
          g.hasOwnProperty(P) || (g[P] = []), g[P].push(_);
        }
        var M = {};
        for (var w in g)
          if (g.hasOwnProperty(w)) {
            var j = g[w].reduce(c, {
              duration: h,
              easings: [],
              times: [],
              values: []
            });
            M[w] = o.default(
              n({}, j, {
                duration: u || h,
                ease: f,
                elapsed: i,
                loop: l,
                yoyo: d,
                flip: p
              })
            );
          }
        return a.default(M);
      };
    e.default = f;
  },
  function(t, e, r) {
    "use strict";
    var n =
      (this && this.__rest) ||
      function(t, e) {
        var r = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            e.indexOf(n) < 0 &&
            (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, n = Object.getOwnPropertySymbols(t);
            o < n.length;
            o++
          )
            e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]]);
        return r;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(4),
      u = r(20),
      a = r(22),
      i = function(t) {
        return t[0];
      },
      s = function(t) {
        return (
          void 0 === t && (t = {}),
          u.getIsTouchDevice()
            ? u.default(t).pipe(
                function(t) {
                  return t.touches;
                },
                i
              )
            : a.default(t)
        );
      };
    e.default = function(t) {
      void 0 === t && (t = {});
      var e = t.x,
        r = t.y,
        u = n(t, ["x", "y"]);
      if (void 0 !== e || void 0 !== r) {
        var a = o.applyOffset(e || 0),
          i = o.applyOffset(r || 0),
          c = { x: 0, y: 0 };
        return s(u).pipe(function(t) {
          return (c.x = a(t.x)), (c.y = i(t.y)), c;
        });
      }
      return s(u);
    };
  },
  function(t, e, r) {
    "use strict";
    var n =
      (this && this.__assign) ||
      Object.assign ||
      function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
          e = arguments[r];
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
        return t;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(0),
      u = r(2),
      a = r(8),
      i = function(t, e) {
        return o.default(function(r) {
          var o = 0,
            i = a.default(t, e).start(
              n({}, r, {
                update: function(t) {
                  var e = t[0],
                    n = t[1];
                  r.update(u.getValueFromProgress(e, n, o));
                }
              })
            );
          return {
            setBalance: function(t) {
              return (o = t);
            },
            stop: function() {
              return i.stop();
            }
          };
        });
      };
    e.default = i;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      o = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return n.default(function(e) {
          var r = t.map(function(t) {
            return t.start(e);
          });
          return {
            stop: function() {
              return r.forEach(function(t) {
                return t.stop();
              });
            }
          };
        });
      };
    e.default = o;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      o = function(t, e) {
        return n.default(function(r) {
          var n,
            o = r.update,
            u = r.complete,
            a = t.start({
              update: function() {
                return void 0 !== n && o(n);
              },
              complete: u
            }),
            i = e.start({
              update: function(t) {
                return (n = t);
              },
              complete: u
            });
          return {
            stop: function() {
              a.stop(), i.stop();
            }
          };
        });
      };
    e.default = o;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(23),
      o = r(24),
      u = r(8),
      a = function(t, e) {
        var r = "number" == typeof e,
          a = t.map(function(t, u) {
            var a = r ? e * u : e(u);
            return n.default(o.default(a), t);
          });
        return u.default.apply(void 0, a);
      };
    e.default = a;
  },
  function(t, e, r) {
    "use strict";
    function n(t, e) {
      var r = "string" == typeof t ? document.querySelector(t) : t;
      return c(r, e);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(25),
      u = r(28);
    e.buildStyles = u.default;
    var a = r(30),
      i = new WeakMap(),
      s = function(t, e) {
        var r = t instanceof SVGElement ? a.default(t) : o.default(t, e);
        return i.set(t, r), r;
      };
    e.createStyler = s;
    var c = function(t, e) {
      return i.has(t) ? i.get(t) : s(t, e);
    };
    e.default = n;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(12),
      o = r(9),
      u = function(t, e) {
        return (t / 100) * e + "px";
      },
      a = function(t, e, r, a) {
        var i = !1,
          s = !1,
          c = {},
          f = r ? { pathLength: "0", pathSpacing: "" + a } : void 0,
          l = void 0 !== t.scale ? t.scale || 1e-7 : t.scaleX || 1,
          p = void 0 !== t.scaleY ? t.scaleY || 1e-7 : l || 1,
          d = e.width * ((t.originX || 50) / 100) + e.x,
          v = e.height * ((t.originY || 50) / 100) + e.y,
          h = 1 * l * -d,
          m = 1 * p * -v,
          y = d / l,
          g = v / p,
          b = {
            translate: "translate(" + t.translateX + ", " + t.translateY + ") ",
            scale:
              "translate(" +
              h +
              ", " +
              m +
              ") scale(" +
              l +
              ", " +
              p +
              ") translate(" +
              y +
              ", " +
              g +
              ") ",
            rotate: "rotate(" + t.rotate + ", " + d + ", " + v + ") ",
            skewX: "skewX(" + t.skewX + ") ",
            skewY: "skewY(" + t.skewY + ") "
          };
        for (var O in t)
          if (t.hasOwnProperty(O)) {
            var _ = t[O];
            o.isTransformProp(O)
              ? (i = !0)
              : !r ||
                ("pathLength" !== O && "pathSpacing" !== O) ||
                "number" != typeof _
                ? r && "pathOffset" === O
                  ? (c["stroke-dashoffset"] = u(-_, a))
                  : (c[n.camelToDash(O)] = _)
                : ((s = !0), (f[O] = u(_, a)));
          }
        if (
          (s && (c["stroke-dasharray"] = f.pathLength + " " + f.pathSpacing), i)
        ) {
          c.transform = "";
          for (var O in b)
            if (b.hasOwnProperty(O)) {
              var P = "scale" === O ? "1" : "0";
              c.transform += b[O].replace(/undefined/g, P);
            }
        }
        return c;
      };
    e.default = a;
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(3),
      o = {
        fill: n.color,
        stroke: n.color,
        scale: n.scale,
        scaleX: n.scale,
        scaleY: n.scale,
        opacity: n.alpha,
        fillOpacity: n.alpha,
        strokeOpacity: n.alpha
      };
    e.default = function(t) {
      return o[t];
    };
  },
  function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(31);
    window.popmotion = n;
  }
]);
