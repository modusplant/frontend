function pe(e) {
  var o,
    r,
    t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (o = 0; o < l; o++) e[o] && (r = pe(e[o])) && (t && (t += " "), (t += r));
    } else for (r in e) e[r] && (t && (t += " "), (t += r));
  return t;
}
function be() {
  for (var e, o, r = 0, t = "", l = arguments.length; r < l; r++)
    (e = arguments[r]) && (o = pe(e)) && (t && (t += " "), (t += o));
  return t;
}
const ie = e => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  ae = be,
  cr = (e, o) => r => {
    var t;
    if ((o == null ? void 0 : o.variants) == null)
      return ae(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const { variants: l, defaultVariants: c } = o,
      a = Object.keys(l).map(b => {
        const g = r == null ? void 0 : r[b],
          x = c == null ? void 0 : c[b];
        if (g === null) return null;
        const k = ie(g) || ie(x);
        return l[b][k];
      }),
      p =
        r &&
        Object.entries(r).reduce((b, g) => {
          let [x, k] = g;
          return k === void 0 || (b[x] = k), b;
        }, {}),
      d =
        o == null || (t = o.compoundVariants) === null || t === void 0
          ? void 0
          : t.reduce((b, g) => {
              let { class: x, className: k, ...I } = g;
              return Object.entries(I).every(w => {
                let [y, C] = w;
                return Array.isArray(C) ? C.includes({ ...c, ...p }[y]) : { ...c, ...p }[y] === C;
              })
                ? [...b, x, k]
                : b;
            }, []);
    return ae(e, a, d, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  },
  Z = "-",
  ke = e => {
    const o = Ce(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: t } = e;
    return {
      getClassGroupId: a => {
        const p = a.split(Z);
        return p[0] === "" && p.length !== 1 && p.shift(), fe(p, o) || ze(a);
      },
      getConflictingClassGroupIds: (a, p) => {
        const d = r[a] || [];
        return p && t[a] ? [...d, ...t[a]] : d;
      },
    };
  },
  fe = (e, o) => {
    var a;
    if (e.length === 0) return o.classGroupId;
    const r = e[0],
      t = o.nextPart.get(r),
      l = t ? fe(e.slice(1), t) : void 0;
    if (l) return l;
    if (o.validators.length === 0) return;
    const c = e.join(Z);
    return (a = o.validators.find(({ validator: p }) => p(c))) == null ? void 0 : a.classGroupId;
  },
  ce = /^\[(.+)\]$/,
  ze = e => {
    if (ce.test(e)) {
      const o = ce.exec(e)[1],
        r = o == null ? void 0 : o.substring(0, o.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  Ce = e => {
    const { theme: o, classGroups: r } = e,
      t = { nextPart: new Map(), validators: [] };
    for (const l in r) D(r[l], t, l, o);
    return t;
  },
  D = (e, o, r, t) => {
    e.forEach(l => {
      if (typeof l == "string") {
        const c = l === "" ? o : de(o, l);
        c.classGroupId = r;
        return;
      }
      if (typeof l == "function") {
        if (Se(l)) {
          D(l(t), o, r, t);
          return;
        }
        o.validators.push({ validator: l, classGroupId: r });
        return;
      }
      Object.entries(l).forEach(([c, a]) => {
        D(a, de(o, c), r, t);
      });
    });
  },
  de = (e, o) => {
    let r = e;
    return (
      o.split(Z).forEach(t => {
        r.nextPart.has(t) || r.nextPart.set(t, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(t));
      }),
      r
    );
  },
  Se = e => e.isThemeGetter,
  Ae = e => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      r = new Map(),
      t = new Map();
    const l = (c, a) => {
      r.set(c, a), o++, o > e && ((o = 0), (t = r), (r = new Map()));
    };
    return {
      get(c) {
        let a = r.get(c);
        if (a !== void 0) return a;
        if ((a = t.get(c)) !== void 0) return l(c, a), a;
      },
      set(c, a) {
        r.has(c) ? r.set(c, a) : l(c, a);
      },
    };
  },
  Q = "!",
  Y = ":",
  Me = Y.length,
  Ie = e => {
    const { prefix: o, experimentalParseClassName: r } = e;
    let t = l => {
      const c = [];
      let a = 0,
        p = 0,
        d = 0,
        b;
      for (let w = 0; w < l.length; w++) {
        let y = l[w];
        if (a === 0 && p === 0) {
          if (y === Y) {
            c.push(l.slice(d, w)), (d = w + Me);
            continue;
          }
          if (y === "/") {
            b = w;
            continue;
          }
        }
        y === "[" ? a++ : y === "]" ? a-- : y === "(" ? p++ : y === ")" && p--;
      }
      const g = c.length === 0 ? l : l.substring(d),
        x = Re(g),
        k = x !== g,
        I = b && b > d ? b - d : void 0;
      return {
        modifiers: c,
        hasImportantModifier: k,
        baseClassName: x,
        maybePostfixModifierPosition: I,
      };
    };
    if (o) {
      const l = o + Y,
        c = t;
      t = a =>
        a.startsWith(l)
          ? c(a.substring(l.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: a,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (r) {
      const l = t;
      t = c => r({ className: c, parseClassName: l });
    }
    return t;
  },
  Re = e => (e.endsWith(Q) ? e.substring(0, e.length - 1) : e.startsWith(Q) ? e.substring(1) : e),
  Pe = e => {
    const o = Object.fromEntries(e.orderSensitiveModifiers.map(t => [t, !0]));
    return t => {
      if (t.length <= 1) return t;
      const l = [];
      let c = [];
      return (
        t.forEach(a => {
          a[0] === "[" || o[a] ? (l.push(...c.sort(), a), (c = [])) : c.push(a);
        }),
        l.push(...c.sort()),
        l
      );
    };
  },
  Ge = e => ({ cache: Ae(e.cacheSize), parseClassName: Ie(e), sortModifiers: Pe(e), ...ke(e) }),
  Te = /\s+/,
  Ne = (e, o) => {
    const {
        parseClassName: r,
        getClassGroupId: t,
        getConflictingClassGroupIds: l,
        sortModifiers: c,
      } = o,
      a = [],
      p = e.trim().split(Te);
    let d = "";
    for (let b = p.length - 1; b >= 0; b -= 1) {
      const g = p[b],
        {
          isExternal: x,
          modifiers: k,
          hasImportantModifier: I,
          baseClassName: w,
          maybePostfixModifierPosition: y,
        } = r(g);
      if (x) {
        d = g + (d.length > 0 ? " " + d : d);
        continue;
      }
      let C = !!y,
        R = t(C ? w.substring(0, y) : w);
      if (!R) {
        if (!C) {
          d = g + (d.length > 0 ? " " + d : d);
          continue;
        }
        if (((R = t(w)), !R)) {
          d = g + (d.length > 0 ? " " + d : d);
          continue;
        }
        C = !1;
      }
      const O = c(k).join(":"),
        _ = I ? O + Q : O,
        T = _ + R;
      if (a.includes(T)) continue;
      a.push(T);
      const N = l(R, C);
      for (let i = 0; i < N.length; ++i) {
        const z = N[i];
        a.push(_ + z);
      }
      d = g + (d.length > 0 ? " " + d : d);
    }
    return d;
  };
function Ve() {
  let e = 0,
    o,
    r,
    t = "";
  for (; e < arguments.length; ) (o = arguments[e++]) && (r = ge(o)) && (t && (t += " "), (t += r));
  return t;
}
const ge = e => {
  if (typeof e == "string") return e;
  let o,
    r = "";
  for (let t = 0; t < e.length; t++) e[t] && (o = ge(e[t])) && (r && (r += " "), (r += o));
  return r;
};
function Ee(e, ...o) {
  let r,
    t,
    l,
    c = a;
  function a(d) {
    const b = o.reduce((g, x) => x(g), e());
    return (r = Ge(b)), (t = r.cache.get), (l = r.cache.set), (c = p), p(d);
  }
  function p(d) {
    const b = t(d);
    if (b) return b;
    const g = Ne(d, r);
    return l(d, g), g;
  }
  return function () {
    return c(Ve.apply(null, arguments));
  };
}
const m = e => {
    const o = r => r[e] || [];
    return (o.isThemeGetter = !0), o;
  },
  me = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  he = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Le = /^\d+\/\d+$/,
  je = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Oe =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  _e = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Fe = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  $e =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  E = e => Le.test(e),
  u = e => !!e && !Number.isNaN(Number(e)),
  A = e => !!e && Number.isInteger(Number(e)),
  ue = e => e.endsWith("%") && u(e.slice(0, -1)),
  M = e => je.test(e),
  Be = () => !0,
  We = e => Oe.test(e) && !_e.test(e),
  ee = () => !1,
  Ue = e => Fe.test(e),
  qe = e => $e.test(e),
  He = e => !n(e) && !s(e),
  Je = e => L(e, ye, ee),
  n = e => me.test(e),
  G = e => L(e, ve, We),
  X = e => L(e, nr, u),
  Ke = e => L(e, xe, ee),
  Xe = e => L(e, we, qe),
  De = e => L(e, ee, Ue),
  s = e => he.test(e),
  F = e => j(e, ve),
  Qe = e => j(e, sr),
  Ye = e => j(e, xe),
  Ze = e => j(e, ye),
  er = e => j(e, we),
  rr = e => j(e, lr, !0),
  L = (e, o, r) => {
    const t = me.exec(e);
    return t ? (t[1] ? o(t[1]) : r(t[2])) : !1;
  },
  j = (e, o, r = !1) => {
    const t = he.exec(e);
    return t ? (t[1] ? o(t[1]) : r) : !1;
  },
  xe = e => e === "position",
  tr = new Set(["image", "url"]),
  we = e => tr.has(e),
  or = new Set(["length", "size", "percentage"]),
  ye = e => or.has(e),
  ve = e => e === "length",
  nr = e => e === "number",
  sr = e => e === "family-name",
  lr = e => e === "shadow",
  ir = () => {
    const e = m("color"),
      o = m("font"),
      r = m("text"),
      t = m("font-weight"),
      l = m("tracking"),
      c = m("leading"),
      a = m("breakpoint"),
      p = m("container"),
      d = m("spacing"),
      b = m("radius"),
      g = m("shadow"),
      x = m("inset-shadow"),
      k = m("drop-shadow"),
      I = m("blur"),
      w = m("perspective"),
      y = m("aspect"),
      C = m("ease"),
      R = m("animate"),
      O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      _ = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      T = () => ["auto", "hidden", "clip", "visible", "scroll"],
      N = () => ["auto", "contain", "none"],
      i = () => [s, n, d],
      z = () => [E, "full", "auto", ...i()],
      re = () => [A, "none", "subgrid", s, n],
      te = () => ["auto", { span: ["full", A, s, n] }, A, s, n],
      $ = () => [A, "auto", s, n],
      oe = () => ["auto", "min", "max", "fr", s, n],
      H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"],
      V = () => ["start", "end", "center", "stretch"],
      S = () => ["auto", ...i()],
      P = () => [
        E,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...i(),
      ],
      f = () => [e, s, n],
      J = () => [ue, F, G],
      h = () => ["", "none", "full", b, s, n],
      v = () => ["", u, F, G],
      B = () => ["solid", "dashed", "dotted", "double"],
      ne = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      se = () => ["", "none", I, s, n],
      le = () => [
        "center",
        "top",
        "top-right",
        "right",
        "bottom-right",
        "bottom",
        "bottom-left",
        "left",
        "top-left",
        s,
        n,
      ],
      W = () => ["none", u, s, n],
      U = () => ["none", u, s, n],
      K = () => [u, s, n],
      q = () => [E, "full", ...i()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [M],
        breakpoint: [M],
        color: [Be],
        container: [M],
        "drop-shadow": [M],
        ease: ["in", "out", "in-out"],
        font: [He],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [M],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [M],
        shadow: [M],
        spacing: ["px", u],
        text: [M],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", E, n, s, y] }],
        container: ["container"],
        columns: [{ columns: [u, n, s, p] }],
        "break-after": [{ "break-after": O() }],
        "break-before": [{ "break-before": O() }],
        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
        "object-position": [{ object: [..._(), n, s] }],
        overflow: [{ overflow: T() }],
        "overflow-x": [{ "overflow-x": T() }],
        "overflow-y": [{ "overflow-y": T() }],
        overscroll: [{ overscroll: N() }],
        "overscroll-x": [{ "overscroll-x": N() }],
        "overscroll-y": [{ "overscroll-y": N() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: z() }],
        "inset-x": [{ "inset-x": z() }],
        "inset-y": [{ "inset-y": z() }],
        start: [{ start: z() }],
        end: [{ end: z() }],
        top: [{ top: z() }],
        right: [{ right: z() }],
        bottom: [{ bottom: z() }],
        left: [{ left: z() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [A, "auto", s, n] }],
        basis: [{ basis: [E, "full", "auto", p, ...i()] }],
        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [u, E, "auto", "initial", "none", n] }],
        grow: [{ grow: ["", u, s, n] }],
        shrink: [{ shrink: ["", u, s, n] }],
        order: [{ order: [A, "first", "last", "none", s, n] }],
        "grid-cols": [{ "grid-cols": re() }],
        "col-start-end": [{ col: te() }],
        "col-start": [{ "col-start": $() }],
        "col-end": [{ "col-end": $() }],
        "grid-rows": [{ "grid-rows": re() }],
        "row-start-end": [{ row: te() }],
        "row-start": [{ "row-start": $() }],
        "row-end": [{ "row-end": $() }],
        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
        "auto-cols": [{ "auto-cols": oe() }],
        "auto-rows": [{ "auto-rows": oe() }],
        gap: [{ gap: i() }],
        "gap-x": [{ "gap-x": i() }],
        "gap-y": [{ "gap-y": i() }],
        "justify-content": [{ justify: [...H(), "normal"] }],
        "justify-items": [{ "justify-items": [...V(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...V()] }],
        "align-content": [{ content: ["normal", ...H()] }],
        "align-items": [{ items: [...V(), "baseline"] }],
        "align-self": [{ self: ["auto", ...V(), "baseline"] }],
        "place-content": [{ "place-content": H() }],
        "place-items": [{ "place-items": [...V(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...V()] }],
        p: [{ p: i() }],
        px: [{ px: i() }],
        py: [{ py: i() }],
        ps: [{ ps: i() }],
        pe: [{ pe: i() }],
        pt: [{ pt: i() }],
        pr: [{ pr: i() }],
        pb: [{ pb: i() }],
        pl: [{ pl: i() }],
        m: [{ m: S() }],
        mx: [{ mx: S() }],
        my: [{ my: S() }],
        ms: [{ ms: S() }],
        me: [{ me: S() }],
        mt: [{ mt: S() }],
        mr: [{ mr: S() }],
        mb: [{ mb: S() }],
        ml: [{ ml: S() }],
        "space-x": [{ "space-x": i() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": i() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: P() }],
        w: [{ w: [p, "screen", ...P()] }],
        "min-w": [{ "min-w": [p, "screen", "none", ...P()] }],
        "max-w": [{ "max-w": [p, "screen", "none", "prose", { screen: [a] }, ...P()] }],
        h: [{ h: ["screen", ...P()] }],
        "min-h": [{ "min-h": ["screen", "none", ...P()] }],
        "max-h": [{ "max-h": ["screen", ...P()] }],
        "font-size": [{ text: ["base", r, F, G] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [t, s, X] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              ue,
              n,
            ],
          },
        ],
        "font-family": [{ font: [Qe, n, o] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [l, s, n] }],
        "line-clamp": [{ "line-clamp": [u, "none", s, X] }],
        leading: [{ leading: [c, ...i()] }],
        "list-image": [{ "list-image": ["none", s, n] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", s, n] }],
        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
        "placeholder-color": [{ placeholder: f() }],
        "text-color": [{ text: f() }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
        "text-decoration-thickness": [{ decoration: [u, "from-font", "auto", s, G] }],
        "text-decoration-color": [{ decoration: f() }],
        "underline-offset": [{ "underline-offset": [u, "auto", s, n] }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: i() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              s,
              n,
            ],
          },
        ],
        whitespace: [
          { whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", s, n] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [..._(), Ye, Ke] }],
        "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }] }],
        "bg-size": [{ bg: ["auto", "cover", "contain", Ze, Je] }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, A, s, n],
                radial: ["", s, n],
                conic: [A, s, n],
              },
              er,
              Xe,
            ],
          },
        ],
        "bg-color": [{ bg: f() }],
        "gradient-from-pos": [{ from: J() }],
        "gradient-via-pos": [{ via: J() }],
        "gradient-to-pos": [{ to: J() }],
        "gradient-from": [{ from: f() }],
        "gradient-via": [{ via: f() }],
        "gradient-to": [{ to: f() }],
        rounded: [{ rounded: h() }],
        "rounded-s": [{ "rounded-s": h() }],
        "rounded-e": [{ "rounded-e": h() }],
        "rounded-t": [{ "rounded-t": h() }],
        "rounded-r": [{ "rounded-r": h() }],
        "rounded-b": [{ "rounded-b": h() }],
        "rounded-l": [{ "rounded-l": h() }],
        "rounded-ss": [{ "rounded-ss": h() }],
        "rounded-se": [{ "rounded-se": h() }],
        "rounded-ee": [{ "rounded-ee": h() }],
        "rounded-es": [{ "rounded-es": h() }],
        "rounded-tl": [{ "rounded-tl": h() }],
        "rounded-tr": [{ "rounded-tr": h() }],
        "rounded-br": [{ "rounded-br": h() }],
        "rounded-bl": [{ "rounded-bl": h() }],
        "border-w": [{ border: v() }],
        "border-w-x": [{ "border-x": v() }],
        "border-w-y": [{ "border-y": v() }],
        "border-w-s": [{ "border-s": v() }],
        "border-w-e": [{ "border-e": v() }],
        "border-w-t": [{ "border-t": v() }],
        "border-w-r": [{ "border-r": v() }],
        "border-w-b": [{ "border-b": v() }],
        "border-w-l": [{ "border-l": v() }],
        "divide-x": [{ "divide-x": v() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": v() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...B(), "hidden", "none"] }],
        "divide-style": [{ divide: [...B(), "hidden", "none"] }],
        "border-color": [{ border: f() }],
        "border-color-x": [{ "border-x": f() }],
        "border-color-y": [{ "border-y": f() }],
        "border-color-s": [{ "border-s": f() }],
        "border-color-e": [{ "border-e": f() }],
        "border-color-t": [{ "border-t": f() }],
        "border-color-r": [{ "border-r": f() }],
        "border-color-b": [{ "border-b": f() }],
        "border-color-l": [{ "border-l": f() }],
        "divide-color": [{ divide: f() }],
        "outline-style": [{ outline: [...B(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [u, s, n] }],
        "outline-w": [{ outline: ["", u, F, G] }],
        "outline-color": [{ outline: [e] }],
        shadow: [{ shadow: ["", "none", g, rr, De] }],
        "shadow-color": [{ shadow: f() }],
        "inset-shadow": [{ "inset-shadow": ["none", s, n, x] }],
        "inset-shadow-color": [{ "inset-shadow": f() }],
        "ring-w": [{ ring: v() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: f() }],
        "ring-offset-w": [{ "ring-offset": [u, G] }],
        "ring-offset-color": [{ "ring-offset": f() }],
        "inset-ring-w": [{ "inset-ring": v() }],
        "inset-ring-color": [{ "inset-ring": f() }],
        opacity: [{ opacity: [u, s, n] }],
        "mix-blend": [{ "mix-blend": [...ne(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": ne() }],
        filter: [{ filter: ["", "none", s, n] }],
        blur: [{ blur: se() }],
        brightness: [{ brightness: [u, s, n] }],
        contrast: [{ contrast: [u, s, n] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", k, s, n] }],
        grayscale: [{ grayscale: ["", u, s, n] }],
        "hue-rotate": [{ "hue-rotate": [u, s, n] }],
        invert: [{ invert: ["", u, s, n] }],
        saturate: [{ saturate: [u, s, n] }],
        sepia: [{ sepia: ["", u, s, n] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", s, n] }],
        "backdrop-blur": [{ "backdrop-blur": se() }],
        "backdrop-brightness": [{ "backdrop-brightness": [u, s, n] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u, s, n] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", u, s, n] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u, s, n] }],
        "backdrop-invert": [{ "backdrop-invert": ["", u, s, n] }],
        "backdrop-opacity": [{ "backdrop-opacity": [u, s, n] }],
        "backdrop-saturate": [{ "backdrop-saturate": [u, s, n] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", u, s, n] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": i() }],
        "border-spacing-x": [{ "border-spacing-x": i() }],
        "border-spacing-y": [{ "border-spacing-y": i() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          { transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", s, n] },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [u, "initial", s, n] }],
        ease: [{ ease: ["linear", "initial", C, s, n] }],
        delay: [{ delay: [u, s, n] }],
        animate: [{ animate: ["none", R, s, n] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [w, s, n] }],
        "perspective-origin": [{ "perspective-origin": le() }],
        rotate: [{ rotate: W() }],
        "rotate-x": [{ "rotate-x": W() }],
        "rotate-y": [{ "rotate-y": W() }],
        "rotate-z": [{ "rotate-z": W() }],
        scale: [{ scale: U() }],
        "scale-x": [{ "scale-x": U() }],
        "scale-y": [{ "scale-y": U() }],
        "scale-z": [{ "scale-z": U() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: K() }],
        "skew-x": [{ "skew-x": K() }],
        "skew-y": [{ "skew-y": K() }],
        transform: [{ transform: [s, n, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: le() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: q() }],
        "translate-x": [{ "translate-x": q() }],
        "translate-y": [{ "translate-y": q() }],
        "translate-z": [{ "translate-z": q() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: f() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: f() }],
        "color-scheme": [
          { scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              s,
              n,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": i() }],
        "scroll-mx": [{ "scroll-mx": i() }],
        "scroll-my": [{ "scroll-my": i() }],
        "scroll-ms": [{ "scroll-ms": i() }],
        "scroll-me": [{ "scroll-me": i() }],
        "scroll-mt": [{ "scroll-mt": i() }],
        "scroll-mr": [{ "scroll-mr": i() }],
        "scroll-mb": [{ "scroll-mb": i() }],
        "scroll-ml": [{ "scroll-ml": i() }],
        "scroll-p": [{ "scroll-p": i() }],
        "scroll-px": [{ "scroll-px": i() }],
        "scroll-py": [{ "scroll-py": i() }],
        "scroll-ps": [{ "scroll-ps": i() }],
        "scroll-pe": [{ "scroll-pe": i() }],
        "scroll-pt": [{ "scroll-pt": i() }],
        "scroll-pr": [{ "scroll-pr": i() }],
        "scroll-pb": [{ "scroll-pb": i() }],
        "scroll-pl": [{ "scroll-pl": i() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", s, n] }],
        fill: [{ fill: ["none", ...f()] }],
        "stroke-w": [{ stroke: [u, F, G, X] }],
        stroke: [{ stroke: ["none", ...f()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "before",
        "after",
        "placeholder",
        "file",
        "marker",
        "selection",
        "first-line",
        "first-letter",
        "backdrop",
        "*",
        "**",
      ],
    };
  },
  ar = Ee(ir),
  dr = (...e) => ar(be(e));
export { dr as a, cr as c };
