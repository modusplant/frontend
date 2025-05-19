import { a as _e, c as wt } from "./className-BoCCXcUU.js";
import { r as K, I as Mt, b as Ot, a as St, c as qt } from "./image-context-aGUn3YWz.js";
import { r as Tt } from "./index-CWNAz4Fr.js";
import { b as J, r as ge, g as jt, R as ye } from "./index-DWtqY3O_.js";
import { r as xt } from "./jsx-runtime-Bw5QeaCk.js";
import { j as G } from "./jsx-runtime-DoEZbXM1.js";

import { c as wt, a as _e } from "./className-BoCCXcUU.js";
import { b as J, g as jt, R as ye, r as ge } from "./index-DWtqY3O_.js";
import { r as K, a as St, b as Ot, c as qt, I as Mt } from "./image-context-aGUn3YWz.js";
import { r as xt } from "./jsx-runtime-Bw5QeaCk.js";
import { r as Tt } from "./index-CWNAz4Fr.js";
var ve = {},
  be = {},
  we = {},
  Ae;
function Oe() {
  return (
    Ae ||
      ((Ae = 1),
      (function (o) {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          Object.defineProperty(o, "warnOnce", {
            enumerable: !0,
            get: function () {
              return e;
            },
          });
        let e = u => {};
      })(we)),
    we
  );
}
var Se = {},
  Le;
function zt() {
  return (
    Le ||
      ((Le = 1),
      (function (o) {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          Object.defineProperty(o, "getImageBlurSvg", {
            enumerable: !0,
            get: function () {
              return e;
            },
          });
        function e(u) {
          let {
            widthInt: l,
            heightInt: d,
            blurWidth: s,
            blurHeight: r,
            blurDataURL: t,
            objectFit: y,
          } = u;
          const g = 20,
            n = s ? s * 40 : l,
            c = r ? r * 40 : d,
            i = n && c ? "viewBox='0 0 " + n + " " + c + "'" : "",
            R = i
              ? "none"
              : y === "contain"
                ? "xMidYMid"
                : y === "cover"
                  ? "xMidYMid slice"
                  : "none";
          return (
            "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
            i +
            "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" +
            g +
            "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" +
            g +
            "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
            R +
            "' style='filter: url(%23b);' href='" +
            t +
            "'/%3E%3C/svg%3E"
          );
        }
      })(Se)),
    Se
  );
}
var xe = {},
  ke;
function qe() {
  return (
    ke ||
      ((ke = 1),
      (function (o) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        function e(d, s) {
          for (var r in s) Object.defineProperty(d, r, { enumerable: !0, get: s[r] });
        }
        e(o, {
          VALID_LOADERS: function () {
            return u;
          },
          imageConfigDefault: function () {
            return l;
          },
        });
        const u = ["default", "imgix", "cloudinary", "akamai", "custom"],
          l = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: void 0,
            unoptimized: !1,
          };
      })(xe)),
    xe
  );
}
var Be;
function Ct() {
  return (
    Be ||
      ((Be = 1),
      (function (o) {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          Object.defineProperty(o, "getImgProps", {
            enumerable: !0,
            get: function () {
              return g;
            },
          }),
          Oe();
        const e = zt(),
          u = qe();
        function l(n) {
          return n.default !== void 0;
        }
        function d(n) {
          return n.src !== void 0;
        }
        function s(n) {
          return !!n && typeof n == "object" && (l(n) || d(n));
        }
        function r(n) {
          return typeof n > "u"
            ? n
            : typeof n == "number"
              ? Number.isFinite(n)
                ? n
                : NaN
              : typeof n == "string" && /^[0-9]+$/.test(n)
                ? parseInt(n, 10)
                : NaN;
        }
        function t(n, c, i) {
          let { deviceSizes: R, allSizes: v } = n;
          if (i) {
            const C = /(^|\s)(1?\d?\d)vw/g,
              P = [];
            for (let j; (j = C.exec(i)); j) P.push(parseInt(j[2]));
            if (P.length) {
              const j = Math.min(...P) * 0.01;
              return { widths: v.filter(m => m >= R[0] * j), kind: "w" };
            }
            return { widths: v, kind: "w" };
          }
          return typeof c != "number"
            ? { widths: R, kind: "w" }
            : {
                widths: [...new Set([c, c * 2].map(C => v.find(P => P >= C) || v[v.length - 1]))],
                kind: "x",
              };
        }
        function y(n) {
          let { config: c, src: i, unoptimized: R, width: v, quality: O, sizes: C, loader: P } = n;
          if (R) return { src: i, srcSet: void 0, sizes: void 0 };
          const { widths: j, kind: m } = t(c, v, C),
            h = j.length - 1;
          return {
            sizes: !C && m === "w" ? "100vw" : C,
            srcSet: j
              .map(
                (a, p) =>
                  P({ config: c, src: i, quality: O, width: a }) +
                  " " +
                  (m === "w" ? a : p + 1) +
                  m,
              )
              .join(", "),
            src: P({ config: c, src: i, quality: O, width: j[h] }),
          };
        }
        function g(n, c) {
          let {
            src: i,
            sizes: R,
            unoptimized: v = !1,
            priority: O = !1,
            loading: C,
            className: P,
            quality: j,
            width: m,
            height: h,
            fill: a = !1,
            style: p,
            overrideSrc: f,
            onLoad: b,
            onLoadingComplete: I,
            placeholder: E = "empty",
            blurDataURL: M,
            fetchPriority: w,
            decoding: N = "async",
            layout: S,
            objectFit: V,
            objectPosition: D,
            lazyBoundary: Z,
            lazyRoot: ee,
            ...U
          } = n;
          const { imgConf: A, showAltText: H, blurComplete: T, defaultLoader: $ } = c;
          let L,
            k = A || u.imageConfigDefault;
          if ("allSizes" in k) L = k;
          else {
            var q;
            const _ = [...k.deviceSizes, ...k.imageSizes].sort((F, Q) => F - Q),
              W = k.deviceSizes.sort((F, Q) => F - Q),
              Y = (q = k.qualities) == null ? void 0 : q.sort((F, Q) => F - Q);
            L = { ...k, allSizes: _, deviceSizes: W, qualities: Y };
          }
          if (typeof $ > "u")
            throw Object.defineProperty(
              new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`),
              "__NEXT_ERROR_CODE",
              { value: "E163", enumerable: !1, configurable: !0 },
            );
          let z = U.loader || $;
          delete U.loader, delete U.srcSet;
          const te = "__next_img_default" in z;
          if (te) {
            if (L.loader === "custom")
              throw Object.defineProperty(
                new Error(
                  'Image with src "' +
                    i +
                    `" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`,
                ),
                "__NEXT_ERROR_CODE",
                { value: "E252", enumerable: !1, configurable: !0 },
              );
          } else {
            const _ = z;
            z = W => {
              const { config: Y, ...F } = W;
              return _(F);
            };
          }
          if (S) {
            S === "fill" && (a = !0);
            const _ = {
                intrinsic: { maxWidth: "100%", height: "auto" },
                responsive: { width: "100%", height: "auto" },
              },
              W = { responsive: "100vw", fill: "100vw" },
              Y = _[S];
            Y && (p = { ...p, ...Y });
            const F = W[S];
            F && !R && (R = F);
          }
          let re = "",
            x = r(m),
            B = r(h),
            Te,
            ze;
          if (s(i)) {
            const _ = l(i) ? i.default : i;
            if (!_.src)
              throw Object.defineProperty(
                new Error(
                  "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                    JSON.stringify(_),
                ),
                "__NEXT_ERROR_CODE",
                { value: "E460", enumerable: !1, configurable: !0 },
              );
            if (!_.height || !_.width)
              throw Object.defineProperty(
                new Error(
                  "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                    JSON.stringify(_),
                ),
                "__NEXT_ERROR_CODE",
                { value: "E48", enumerable: !1, configurable: !0 },
              );
            if (
              ((Te = _.blurWidth), (ze = _.blurHeight), (M = M || _.blurDataURL), (re = _.src), !a)
            ) {
              if (!x && !B) (x = _.width), (B = _.height);
              else if (x && !B) {
                const W = x / _.width;
                B = Math.round(_.height * W);
              } else if (!x && B) {
                const W = B / _.height;
                x = Math.round(_.width * W);
              }
            }
          }
          i = typeof i == "string" ? i : re;
          let De = !O && (C === "lazy" || typeof C > "u");
          (!i || i.startsWith("data:") || i.startsWith("blob:")) && ((v = !0), (De = !1)),
            L.unoptimized && (v = !0),
            te && !L.dangerouslyAllowSVG && i.split("?", 1)[0].endsWith(".svg") && (v = !0);
          const Et = r(j),
            ne = Object.assign(
              a
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: V,
                    objectPosition: D,
                  }
                : {},
              H ? {} : { color: "transparent" },
              p,
            ),
            Ne =
              !T && E !== "empty"
                ? E === "blur"
                  ? 'url("data:image/svg+xml;charset=utf-8,' +
                    (0, e.getImageBlurSvg)({
                      widthInt: x,
                      heightInt: B,
                      blurWidth: Te,
                      blurHeight: ze,
                      blurDataURL: M || "",
                      objectFit: ne.objectFit,
                    }) +
                    '")'
                  : 'url("' + E + '")'
                : null;
          let Pt = Ne
            ? {
                backgroundSize: ne.objectFit || "cover",
                backgroundPosition: ne.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Ne,
              }
            : {};
          const he = y({
            config: L,
            src: i,
            unoptimized: v,
            width: x,
            quality: Et,
            sizes: R,
            loader: z,
          });
          return {
            props: {
              ...U,
              loading: De ? "lazy" : C,
              fetchPriority: w,
              width: x,
              height: B,
              decoding: N,
              className: P,
              style: { ...ne, ...Pt },
              sizes: he.sizes,
              srcSet: he.srcSet,
              src: f || he.src,
            },
            meta: { unoptimized: v, priority: O, placeholder: E, fill: a },
          };
        }
      })(be)),
    be
  );
}
var oe = { exports: {} },
  ae = { exports: {} },
  Ce = {},
  Fe;
function Dt() {
  return (
    Fe ||
      ((Fe = 1),
      (function (o) {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          Object.defineProperty(o, "default", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        const e = J(),
          u = typeof window > "u",
          l = u ? () => {} : e.useLayoutEffect,
          d = u ? () => {} : e.useEffect;
        function s(r) {
          const { headManager: t, reduceComponentsToState: y } = r;
          function g() {
            if (t && t.mountedInstances) {
              const c = e.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
              t.updateHead(y(c, r));
            }
          }
          if (u) {
            var n;
            t == null || (n = t.mountedInstances) == null || n.add(r.children), g();
          }
          return (
            l(() => {
              var c;
              return (
                t == null || (c = t.mountedInstances) == null || c.add(r.children),
                () => {
                  var i;
                  t == null || (i = t.mountedInstances) == null || i.delete(r.children);
                }
              );
            }),
            l(
              () => (
                t && (t._pendingUpdate = g),
                () => {
                  t && (t._pendingUpdate = g);
                }
              ),
            ),
            d(
              () => (
                t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
                () => {
                  t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
                }
              ),
            ),
            null
          );
        }
      })(Ce)),
    Ce
  );
}
var Ie = {},
  Ue;
function Nt() {
  return (
    Ue ||
      ((Ue = 1),
      (function (o) {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          Object.defineProperty(o, "AmpStateContext", {
            enumerable: !0,
            get: function () {
              return l;
            },
          });
        const l = K()._(J()).default.createContext({});
      })(Ie)),
    Ie
  );
}
var Re = {},
  We;
function At() {
  return (
    We ||
      ((We = 1),
      (function (o) {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          Object.defineProperty(o, "isInAmpMode", {
            enumerable: !0,
            get: function () {
              return e;
            },
          });
        function e(u) {
          let { ampFirst: l = !1, hybrid: d = !1, hasQuery: s = !1 } = u === void 0 ? {} : u;
          return l || (d && s);
        }
      })(Re)),
    Re
  );
}
var Ve;
function Lt() {
  return (
    Ve ||
      ((Ve = 1),
      (function (o, e) {
        "use client";
        var u = {};
        Object.defineProperty(e, "__esModule", { value: !0 });
        function l(m, h) {
          for (var a in h) Object.defineProperty(m, a, { enumerable: !0, get: h[a] });
        }
        l(e, {
          default: function () {
            return j;
          },
          defaultHead: function () {
            return i;
          },
        });
        const d = K(),
          s = St(),
          r = xt(),
          t = s._(J()),
          y = d._(Dt()),
          g = Nt(),
          n = Ot(),
          c = At();
        Oe();
        function i(m) {
          m === void 0 && (m = !1);
          const h = [(0, r.jsx)("meta", { charSet: "utf-8" }, "charset")];
          return (
            m ||
              h.push(
                (0, r.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport"),
              ),
            h
          );
        }
        function R(m, h) {
          return typeof h == "string" || typeof h == "number"
            ? m
            : h.type === t.default.Fragment
              ? m.concat(
                  t.default.Children.toArray(h.props.children).reduce(
                    (a, p) => (typeof p == "string" || typeof p == "number" ? a : a.concat(p)),
                    [],
                  ),
                )
              : m.concat(h);
        }
        const v = ["name", "httpEquiv", "charSet", "itemProp"];
        function O() {
          const m = new Set(),
            h = new Set(),
            a = new Set(),
            p = {};
          return f => {
            let b = !0,
              I = !1;
            if (f.key && typeof f.key != "number" && f.key.indexOf("$") > 0) {
              I = !0;
              const E = f.key.slice(f.key.indexOf("$") + 1);
              m.has(E) ? (b = !1) : m.add(E);
            }
            switch (f.type) {
              case "title":
              case "base":
                h.has(f.type) ? (b = !1) : h.add(f.type);
                break;
              case "meta":
                for (let E = 0, M = v.length; E < M; E++) {
                  const w = v[E];
                  if (f.props.hasOwnProperty(w))
                    if (w === "charSet") a.has(w) ? (b = !1) : a.add(w);
                    else {
                      const N = f.props[w],
                        S = p[w] || new Set();
                      (w !== "name" || !I) && S.has(N) ? (b = !1) : (S.add(N), (p[w] = S));
                    }
                }
                break;
            }
            return b;
          };
        }
        function C(m, h) {
          const { inAmpMode: a } = h;
          return m
            .reduce(R, [])
            .reverse()
            .concat(i(a).reverse())
            .filter(O())
            .reverse()
            .map((p, f) => {
              const b = p.key || f;
              if (
                u.__NEXT_OPTIMIZE_FONTS &&
                !a &&
                p.type === "link" &&
                p.props.href &&
                ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(I =>
                  p.props.href.startsWith(I),
                )
              ) {
                const I = { ...(p.props || {}) };
                return (
                  (I["data-href"] = I.href),
                  (I.href = void 0),
                  (I["data-optimized-fonts"] = !0),
                  t.default.cloneElement(p, I)
                );
              }
              return t.default.cloneElement(p, { key: b });
            });
        }
        function P(m) {
          let { children: h } = m;
          const a = (0, t.useContext)(g.AmpStateContext),
            p = (0, t.useContext)(n.HeadManagerContext);
          return (0, r.jsx)(y.default, {
            reduceComponentsToState: C,
            headManager: p,
            inAmpMode: (0, c.isInAmpMode)(a),
            children: h,
          });
        }
        const j = P;
        (typeof e.default == "function" || (typeof e.default == "object" && e.default !== null)) &&
          typeof e.default.__esModule > "u" &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (o.exports = e.default));
      })(ae, ae.exports)),
    ae.exports
  );
}
var Ee = {},
  He;
function kt() {
  return (
    He ||
      ((He = 1),
      (function (o) {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          Object.defineProperty(o, "ImageConfigContext", {
            enumerable: !0,
            get: function () {
              return d;
            },
          });
        const u = K()._(J()),
          l = qe(),
          d = u.default.createContext(l.imageConfigDefault);
      })(Ee)),
    Ee
  );
}
var Pe = {},
  Ge;
function It() {
  return (
    Ge ||
      ((Ge = 1),
      (function (o) {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          Object.defineProperty(o, "default", {
            enumerable: !0,
            get: function () {
              return l;
            },
          });
        const e = 75;
        function u(d) {
          let { config: s, src: r, width: t, quality: y } = d;
          var g;
          const n =
            y ||
            ((g = s.qualities) == null
              ? void 0
              : g.reduce((c, i) => (Math.abs(i - e) < Math.abs(c - e) ? i : c))) ||
            e;
          return (
            s.path +
            "?url=" +
            encodeURIComponent(r) +
            "&w=" +
            t +
            "&q=" +
            n +
            (r.startsWith("/_next/static/media/"), "")
          );
        }
        u.__next_img_default = !0;
        const l = u;
      })(Pe)),
    Pe
  );
}
var se = { exports: {} },
  Xe;
function Bt() {
  return (
    Xe ||
      ((Xe = 1),
      (function (o, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "useMergedRef", {
            enumerable: !0,
            get: function () {
              return l;
            },
          });
        const u = J();
        function l(s, r) {
          const t = (0, u.useRef)(null),
            y = (0, u.useRef)(null);
          return (0, u.useCallback)(
            g => {
              if (g === null) {
                const n = t.current;
                n && ((t.current = null), n());
                const c = y.current;
                c && ((y.current = null), c());
              } else s && (t.current = d(s, g)), r && (y.current = d(r, g));
            },
            [s, r],
          );
        }
        function d(s, r) {
          if (typeof s == "function") {
            const t = s(r);
            return typeof t == "function" ? t : () => s(null);
          } else
            return (
              (s.current = r),
              () => {
                s.current = null;
              }
            );
        }
        (typeof e.default == "function" || (typeof e.default == "object" && e.default !== null)) &&
          typeof e.default.__esModule > "u" &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (o.exports = e.default));
      })(se, se.exports)),
    se.exports
  );
}
var $e;
function Ft() {
  return (
    $e ||
      (($e = 1),
      (function (o, e) {
        "use client";
        var u = {};
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "Image", {
            enumerable: !0,
            get: function () {
              return h;
            },
          });
        const l = K(),
          d = St(),
          s = xt(),
          r = d._(J()),
          t = l._(Tt()),
          y = l._(Lt()),
          g = Ct(),
          n = qe(),
          c = kt();
        Oe();
        const i = qt(),
          R = l._(It()),
          v = Bt(),
          O = u.__NEXT_IMAGE_OPTS;
        typeof window > "u" && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        function C(a, p, f, b, I, E, M) {
          const w = a == null ? void 0 : a.src;
          if (!a || a["data-loaded-src"] === w) return;
          (a["data-loaded-src"] = w),
            ("decode" in a ? a.decode() : Promise.resolve())
              .catch(() => {})
              .then(() => {
                if (!(!a.parentElement || !a.isConnected)) {
                  if ((p !== "empty" && I(!0), f != null && f.current)) {
                    const S = new Event("load");
                    Object.defineProperty(S, "target", { writable: !1, value: a });
                    let V = !1,
                      D = !1;
                    f.current({
                      ...S,
                      nativeEvent: S,
                      currentTarget: a,
                      target: a,
                      isDefaultPrevented: () => V,
                      isPropagationStopped: () => D,
                      persist: () => {},
                      preventDefault: () => {
                        (V = !0), S.preventDefault();
                      },
                      stopPropagation: () => {
                        (D = !0), S.stopPropagation();
                      },
                    });
                  }
                  b != null && b.current && b.current(a);
                }
              });
        }
        function P(a) {
          return r.use ? { fetchPriority: a } : { fetchpriority: a };
        }
        const j = (0, r.forwardRef)((a, p) => {
          let {
            src: f,
            srcSet: b,
            sizes: I,
            height: E,
            width: M,
            decoding: w,
            className: N,
            style: S,
            fetchPriority: V,
            placeholder: D,
            loading: Z,
            unoptimized: ee,
            fill: U,
            onLoadRef: A,
            onLoadingCompleteRef: H,
            setBlurComplete: T,
            setShowAltText: $,
            sizesInput: L,
            onLoad: k,
            onError: q,
            ...z
          } = a;
          const te = (0, r.useCallback)(
              x => {
                x && (q && (x.src = x.src), x.complete && C(x, D, A, H, T));
              },
              [f, D, A, H, T, q, ee, L],
            ),
            re = (0, v.useMergedRef)(p, te);
          return (0, s.jsx)("img", {
            ...z,
            ...P(V),
            loading: Z,
            width: M,
            height: E,
            decoding: w,
            "data-nimg": U ? "fill" : "1",
            className: N,
            style: S,
            sizes: I,
            srcSet: b,
            src: f,
            ref: re,
            onLoad: x => {
              const B = x.currentTarget;
              C(B, D, A, H, T);
            },
            onError: x => {
              $(!0), D !== "empty" && T(!0), q && q(x);
            },
          });
        });
        function m(a) {
          let { isAppRouter: p, imgAttributes: f } = a;
          const b = {
            as: "image",
            imageSrcSet: f.srcSet,
            imageSizes: f.sizes,
            crossOrigin: f.crossOrigin,
            referrerPolicy: f.referrerPolicy,
            ...P(f.fetchPriority),
          };
          return p && t.default.preload
            ? (t.default.preload(f.src, b), null)
            : (0, s.jsx)(y.default, {
                children: (0, s.jsx)(
                  "link",
                  { rel: "preload", href: f.srcSet ? void 0 : f.src, ...b },
                  "__nimg-" + f.src + f.srcSet + f.sizes,
                ),
              });
        }
        const h = (0, r.forwardRef)((a, p) => {
          const b = !(0, r.useContext)(i.RouterContext),
            I = (0, r.useContext)(c.ImageConfigContext),
            E = (0, r.useMemo)(() => {
              var H;
              const T = O || I || n.imageConfigDefault,
                $ = [...T.deviceSizes, ...T.imageSizes].sort((q, z) => q - z),
                L = T.deviceSizes.sort((q, z) => q - z),
                k = (H = T.qualities) == null ? void 0 : H.sort((q, z) => q - z);
              return { ...T, allSizes: $, deviceSizes: L, qualities: k };
            }, [I]),
            { onLoad: M, onLoadingComplete: w } = a,
            N = (0, r.useRef)(M);
          (0, r.useEffect)(() => {
            N.current = M;
          }, [M]);
          const S = (0, r.useRef)(w);
          (0, r.useEffect)(() => {
            S.current = w;
          }, [w]);
          const [V, D] = (0, r.useState)(!1),
            [Z, ee] = (0, r.useState)(!1),
            { props: U, meta: A } = (0, g.getImgProps)(a, {
              defaultLoader: R.default,
              imgConf: E,
              blurComplete: V,
              showAltText: Z,
            });
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(j, {
                ...U,
                unoptimized: A.unoptimized,
                placeholder: A.placeholder,
                fill: A.fill,
                onLoadRef: N,
                onLoadingCompleteRef: S,
                setBlurComplete: D,
                setShowAltText: ee,
                sizesInput: a.sizes,
                ref: p,
              }),
              A.priority ? (0, s.jsx)(m, { isAppRouter: b, imgAttributes: U }) : null,
            ],
          });
        });
        (typeof e.default == "function" || (typeof e.default == "object" && e.default !== null)) &&
          typeof e.default.__esModule > "u" &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (o.exports = e.default));
      })(oe, oe.exports)),
    oe.exports
  );
}
var Je;
function Ut() {
  return (
    Je ||
      ((Je = 1),
      (function (o) {
        var e = {};
        Object.defineProperty(o, "__esModule", { value: !0 });
        function u(g, n) {
          for (var c in n) Object.defineProperty(g, c, { enumerable: !0, get: n[c] });
        }
        u(o, {
          default: function () {
            return y;
          },
          getImageProps: function () {
            return t;
          },
        });
        const l = K(),
          d = Ct(),
          s = Ft(),
          r = l._(It());
        function t(g) {
          const { props: n } = (0, d.getImgProps)(g, {
            defaultLoader: r.default,
            imgConf: e.__NEXT_IMAGE_OPTS,
          });
          for (const [c, i] of Object.entries(n)) i === void 0 && delete n[c];
          return { props: n };
        }
        const y = s.Image;
      })(ve)),
    ve
  );
}
var je, Ye;
function Wt() {
  return Ye || ((Ye = 1), (je = Ut())), je;
}
var Vt = Wt();
const Ht = jt(Vt);
var Gt = ({ src: o, width: e, quality: u = 75 }) => {
    const l = [];
    if ((o || l.push("src"), e || l.push("width"), l.length > 0))
      throw new Error(
        `Next Image Optimization requires ${l.join(", ")} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({ src: o, width: e, quality: u })}`,
      );
    const d = new URL(o, window.location.href);
    return (
      !d.searchParams.has("w") &&
        !d.searchParams.has("q") &&
        (d.searchParams.set("w", e.toString()), d.searchParams.set("q", u.toString())),
      !o.startsWith("http://") && !o.startsWith("https://")
        ? d.toString().slice(d.origin.length)
        : d.toString()
    );
  },
  Xt = Ht,
  Rt = ye.forwardRef(({ loader: o, ...e }, u) => {
    const l = ye.useContext(Mt);
    return ye.createElement(Xt, { ref: u, ...l, ...e, loader: o ?? Gt });
  });
Rt.displayName = "NextImage";
var $t = Rt;
const Jt = wt(
    "w-full h-[60px] px-[10px] py-[18px] text-[16px] border rounded-[7px] text-left outline-none transition-all",
    {
      variants: {
        status: {
          regular: "border-neutral-500 text-black hover:border-opacity-60",
          focus: "border-primary-500 hover:border-opacity-60",
          error: "border-interaction-error text-interaction-error hover:border-opacity-60",
          warning: "border-interaction-warning text-interaction-warning hover:border-opacity-60",
          success: "border-interaction-success text-interaction-success hover:border-opacity-60",
          disabled: "border-neutral-600 text-neutral-600 bg-background cursor-not-allowed",
        },
        layout: {
          full: "rounded-[7px]",
          noneTop: "rounded-b-[7px] rounded-t-none",
          noneBottom: "border border-b-0 rounded-t-[7px] rounded-b-none",
        },
      },
      defaultVariants: { status: "regular", layout: "full" },
    },
  ),
  Yt = wt("", {
    variants: {
      status: {
        regular: "text-neutral-600",
        focus: "text-primary-500",
        error: "text-interaction-error",
        warning: "text-interaction-warning",
        success: "text-interaction-success",
        disabled: "text-neutral-400",
      },
    },
    defaultVariants: { status: "regular" },
  }),
  Me = ge.forwardRef(function (
    {
      layout: e = "full",
      status: u,
      className: l,
      type: d,
      disabled: s,
      label: r,
      message: t,
      ...y
    },
    g,
  ) {
    const [n, c] = ge.useState(!1),
      [i, R] = ge.useState(!1),
      v = d === "password" ? (i ? "text" : "password") : d,
      O = s ? "disabled" : (u ?? (n ? "focus" : "regular"));
    return G.jsxs("div", {
      className: _e("flex w-full flex-col gap-3"),
      children: [
        r && G.jsx("label", { htmlFor: r, className: "label_field -mb-[2px]", children: r }),
        G.jsxs("div", {
          className: "relative",
          children: [
            G.jsx("input", {
              ref: g,
              type: v,
              className: _e(Jt({ status: O, layout: e }), l),
              disabled: s,
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              ...y,
            }),
            d === "password" &&
              G.jsx("button", {
                className: "absolute right-4 top-1/2 -translate-y-1/2",
                type: "button",
                onClick: () => R(C => !C),
                children: G.jsx($t, {
                  width: 24,
                  height: 24,
                  src: i ? "/icons/visibility_on.svg" : "/icons/visibility_off.svg",
                  alt: "비밀번호 보기 토글 아이콘",
                }),
              }),
          ],
        }),
        t && G.jsx("p", { className: _e("text-sm", Yt({ status: O })), children: t }),
      ],
    });
  });
Me.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Input",
  props: {
    layout: {
      required: !1,
      tsType: { name: 'VariantProps["layout"]', raw: 'InputVariantsProps["layout"]' },
      description: "",
      defaultValue: { value: '"full"', computed: !1 },
    },
    status: {
      required: !1,
      tsType: {
        name: "union",
        raw: '"error" | "warning" | "success" | undefined',
        elements: [
          { name: "literal", value: '"error"' },
          { name: "literal", value: '"warning"' },
          { name: "literal", value: '"success"' },
          { name: "undefined" },
        ],
      },
      description: "",
    },
    label: { required: !1, tsType: { name: "string" }, description: "" },
    message: { required: !1, tsType: { name: "string" }, description: "" },
  },
};
const ar = {
    title: "Components/Input",
    component: Me,
    tags: ["autodocs"],
    argTypes: {
      status: { control: "select", options: ["regular", "focus", "error", "success", "disabled"] },
      layout: { control: "select", options: ["full", "noneTop", "noneBottom"] },
      type: { control: "select", options: ["text", "password", "email"] },
      placeholder: { control: "text" },
      label: { control: "text" },
      message: { control: "text" },
      disabled: { control: "boolean" },
    },
  },
  X = o => {
    const [e, u] = ge.useState("");
    return G.jsx(Me, { ...o, value: e, onChange: l => u(l.target.value) });
  },
  ie = { render: X, args: { label: "이메일", placeholder: "이메일을 입력해주세요." } },
  ue = {
    render: X,
    args: {
      label: "이메일",
      placeholder: "이메일을 입력해주세요.",
      status: "error",
      message: "올바른 이메일 형식이 아닙니다.",
    },
  },
  le = {
    render: X,
    args: {
      label: "닉네임",
      placeholder: "닉네임을 입력해주세요.",
      status: "warning",
      message: "warning 상태입니다.",
    },
  },
  ce = {
    render: X,
    args: {
      label: "이메일",
      placeholder: "입력 성공",
      status: "success",
      message: "인증이 성공했습니다.",
    },
  },
  de = { render: X, args: { label: "이메일", placeholder: "입력 비활성화", disabled: !0 } },
  fe = {
    render: X,
    args: { label: "비밀번호", placeholder: "비밀번호를 입력해주세요.", type: "password" },
  },
  pe = { render: X, args: { placeholder: "위쪽 라운드 없음", layout: "noneTop" } },
  me = { render: X, args: { placeholder: "아래쪽 라운드 없음", layout: "noneBottom" } };
var Qe, Ke, Ze;
ie.parameters = {
  ...ie.parameters,
  docs: {
    ...((Qe = ie.parameters) == null ? void 0 : Qe.docs),
    source: {
      originalSource: `{
  render: ControlledTemplate,
  args: {
    label: "이메일",
    placeholder: "이메일을 입력해주세요."
  }
}`,
      ...((Ze = (Ke = ie.parameters) == null ? void 0 : Ke.docs) == null ? void 0 : Ze.source),
    },
  },
};
var et, tt, rt;
ue.parameters = {
  ...ue.parameters,
  docs: {
    ...((et = ue.parameters) == null ? void 0 : et.docs),
    source: {
      originalSource: `{
  render: ControlledTemplate,
  args: {
    label: "이메일",
    placeholder: "이메일을 입력해주세요.",
    status: "error",
    message: "올바른 이메일 형식이 아닙니다."
  }
}`,
      ...((rt = (tt = ue.parameters) == null ? void 0 : tt.docs) == null ? void 0 : rt.source),
    },
  },
};
var nt, ot, at;
le.parameters = {
  ...le.parameters,
  docs: {
    ...((nt = le.parameters) == null ? void 0 : nt.docs),
    source: {
      originalSource: `{
  render: ControlledTemplate,
  args: {
    label: "닉네임",
    placeholder: "닉네임을 입력해주세요.",
    status: "warning",
    message: "warning 상태입니다."
  }
}`,
      ...((at = (ot = le.parameters) == null ? void 0 : ot.docs) == null ? void 0 : at.source),
    },
  },
};
var st, it, ut;
ce.parameters = {
  ...ce.parameters,
  docs: {
    ...((st = ce.parameters) == null ? void 0 : st.docs),
    source: {
      originalSource: `{
  render: ControlledTemplate,
  args: {
    label: "이메일",
    placeholder: "입력 성공",
    status: "success",
    message: "인증이 성공했습니다."
  }
}`,
      ...((ut = (it = ce.parameters) == null ? void 0 : it.docs) == null ? void 0 : ut.source),
    },
  },
};
var lt, ct, dt;
de.parameters = {
  ...de.parameters,
  docs: {
    ...((lt = de.parameters) == null ? void 0 : lt.docs),
    source: {
      originalSource: `{
  render: ControlledTemplate,
  args: {
    label: "이메일",
    placeholder: "입력 비활성화",
    disabled: true
  }
}`,
      ...((dt = (ct = de.parameters) == null ? void 0 : ct.docs) == null ? void 0 : dt.source),
    },
  },
};
var ft, pt, mt;
fe.parameters = {
  ...fe.parameters,
  docs: {
    ...((ft = fe.parameters) == null ? void 0 : ft.docs),
    source: {
      originalSource: `{
  render: ControlledTemplate,
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요.",
    type: "password"
  }
}`,
      ...((mt = (pt = fe.parameters) == null ? void 0 : pt.docs) == null ? void 0 : mt.source),
    },
  },
};
var gt, ht, _t;
pe.parameters = {
  ...pe.parameters,
  docs: {
    ...((gt = pe.parameters) == null ? void 0 : gt.docs),
    source: {
      originalSource: `{
  render: ControlledTemplate,
  args: {
    placeholder: "위쪽 라운드 없음",
    layout: "noneTop"
  }
}`,
      ...((_t = (ht = pe.parameters) == null ? void 0 : ht.docs) == null ? void 0 : _t.source),
    },
  },
};
var yt, vt, bt;
me.parameters = {
  ...me.parameters,
  docs: {
    ...((yt = me.parameters) == null ? void 0 : yt.docs),
    source: {
      originalSource: `{
  render: ControlledTemplate,
  args: {
    placeholder: "아래쪽 라운드 없음",
    layout: "noneBottom"
  }
}`,
      ...((bt = (vt = me.parameters) == null ? void 0 : vt.docs) == null ? void 0 : bt.source),
    },
  },
};
const sr = [
  "Default",
  "Error",
  "Warning",
  "Success",
  "Disabled",
  "Password",
  "LayoutNoneTop",
  "LayoutNoneBottom",
];
export {
  ie as Default,
  de as Disabled,
  ue as Error,
  me as LayoutNoneBottom,
  pe as LayoutNoneTop,
  fe as Password,
  ce as Success,
  le as Warning,
  sr as __namedExportsOrder,
  ar as default,
};
