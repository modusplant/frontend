try {
  (() => {
    var lc = Object.create;
    var Wr = Object.defineProperty;
    var oc = Object.getOwnPropertyDescriptor;
    var sc = Object.getOwnPropertyNames;
    var cc = Object.getPrototypeOf,
      dc = Object.prototype.hasOwnProperty;
    var Dt = (e =>
      typeof require < "u"
        ? require
        : typeof Proxy < "u"
          ? new Proxy(e, { get: (t, n) => (typeof require < "u" ? require : t)[n] })
          : e)(function (e) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var Gr = (e, t) => () => (e && (t = e((e = 0))), t);
    var qr = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      uc = (e, t) => {
        for (var n in t) Wr(e, n, { get: t[n], enumerable: !0 });
      },
      mc = (e, t, n, r) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let i of sc(t))
            !dc.call(e, i) &&
              i !== n &&
              Wr(e, i, { get: () => t[i], enumerable: !(r = oc(t, i)) || r.enumerable });
        return e;
      };
    var Gl = (e, t, n) => (
      (n = e != null ? lc(cc(e)) : {}),
      mc(t || !e || !e.__esModule ? Wr(n, "default", { value: e, enumerable: !0 }) : n, e)
    );
    var ne = Gr(() => {});
    var Se,
      ae = Gr(() => {
        Se = {
          NODE_ENV: "production",
          NODE_PATH: [
            "C:\\Users\\you04\\OneDrive\\\u8ADB\uBDC0\uAE62 ?\uBDBE\u3203\\frontend\\node_modules\\.pnpm\\storybook@8.6.11_prettier@3.5.3\\node_modules\\storybook\\bin\\node_modules",
            "C:\\Users\\you04\\OneDrive\\\u8ADB\uBDC0\uAE62 ?\uBDBE\u3203\\frontend\\node_modules\\.pnpm\\storybook@8.6.11_prettier@3.5.3\\node_modules\\storybook\\node_modules",
            "C:\\Users\\you04\\OneDrive\\\u8ADB\uBDC0\uAE62 ?\uBDBE\u3203\\frontend\\node_modules\\.pnpm\\storybook@8.6.11_prettier@3.5.3\\node_modules",
            "C:\\Users\\you04\\OneDrive\\\u8ADB\uBDC0\uAE62 ?\uBDBE\u3203\\frontend\\node_modules\\.pnpm\\node_modules",
          ],
          STORYBOOK: "true",
          PUBLIC_URL: ".",
        };
      });
    var re = Gr(() => {});
    var po = qr(Fa => {
      "use strict";
      ne();
      ae();
      re();
      var Hd = Symbol.for("react.transitional.element"),
        jd = Symbol.for("react.fragment");
      function mo(e, t, n) {
        var r = null;
        if ((n !== void 0 && (r = "" + n), t.key !== void 0 && (r = "" + t.key), "key" in t)) {
          n = {};
          for (var i in t) i !== "key" && (n[i] = t[i]);
        } else n = t;
        return (
          (t = n.ref), { $$typeof: Hd, type: e, key: r, ref: t !== void 0 ? t : null, props: n }
        );
      }
      Fa.Fragment = jd;
      Fa.jsx = mo;
      Fa.jsxs = mo;
    });
    var fo = qr((gv, ho) => {
      "use strict";
      ne();
      ae();
      re();
      ho.exports = po();
    });
    var vo = qr((bv, go) => {
      "use strict";
      ne();
      ae();
      re();
      var Oa = {
        linear: function (e, t, n, r) {
          var i = n - t;
          return (i * e) / r + t;
        },
        easeInQuad: function (e, t, n, r) {
          var i = n - t;
          return i * (e /= r) * e + t;
        },
        easeOutQuad: function (e, t, n, r) {
          var i = n - t;
          return -i * (e /= r) * (e - 2) + t;
        },
        easeInOutQuad: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1 ? (i / 2) * e * e + t : (-i / 2) * (--e * (e - 2) - 1) + t;
        },
        easeInCubic: function (e, t, n, r) {
          var i = n - t;
          return i * (e /= r) * e * e + t;
        },
        easeOutCubic: function (e, t, n, r) {
          var i = n - t;
          return i * ((e = e / r - 1) * e * e + 1) + t;
        },
        easeInOutCubic: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1 ? (i / 2) * e * e * e + t : (i / 2) * ((e -= 2) * e * e + 2) + t;
        },
        easeInQuart: function (e, t, n, r) {
          var i = n - t;
          return i * (e /= r) * e * e * e + t;
        },
        easeOutQuart: function (e, t, n, r) {
          var i = n - t;
          return -i * ((e = e / r - 1) * e * e * e - 1) + t;
        },
        easeInOutQuart: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e * e * e + t
            : (-i / 2) * ((e -= 2) * e * e * e - 2) + t;
        },
        easeInQuint: function (e, t, n, r) {
          var i = n - t;
          return i * (e /= r) * e * e * e * e + t;
        },
        easeOutQuint: function (e, t, n, r) {
          var i = n - t;
          return i * ((e = e / r - 1) * e * e * e * e + 1) + t;
        },
        easeInOutQuint: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e * e * e * e + t
            : (i / 2) * ((e -= 2) * e * e * e * e + 2) + t;
        },
        easeInSine: function (e, t, n, r) {
          var i = n - t;
          return -i * Math.cos((e / r) * (Math.PI / 2)) + i + t;
        },
        easeOutSine: function (e, t, n, r) {
          var i = n - t;
          return i * Math.sin((e / r) * (Math.PI / 2)) + t;
        },
        easeInOutSine: function (e, t, n, r) {
          var i = n - t;
          return (-i / 2) * (Math.cos((Math.PI * e) / r) - 1) + t;
        },
        easeInExpo: function (e, t, n, r) {
          var i = n - t;
          return e == 0 ? t : i * Math.pow(2, 10 * (e / r - 1)) + t;
        },
        easeOutExpo: function (e, t, n, r) {
          var i = n - t;
          return e == r ? t + i : i * (-Math.pow(2, (-10 * e) / r) + 1) + t;
        },
        easeInOutExpo: function (e, t, n, r) {
          var i = n - t;
          return e === 0
            ? t
            : e === r
              ? t + i
              : (e /= r / 2) < 1
                ? (i / 2) * Math.pow(2, 10 * (e - 1)) + t
                : (i / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
        },
        easeInCirc: function (e, t, n, r) {
          var i = n - t;
          return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + t;
        },
        easeOutCirc: function (e, t, n, r) {
          var i = n - t;
          return i * Math.sqrt(1 - (e = e / r - 1) * e) + t;
        },
        easeInOutCirc: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (-i / 2) * (Math.sqrt(1 - e * e) - 1) + t
            : (i / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
        },
        easeInElastic: function (e, t, n, r) {
          var i = n - t,
            l,
            o,
            s;
          return (
            (s = 1.70158),
            (o = 0),
            (l = i),
            e === 0
              ? t
              : (e /= r) === 1
                ? t + i
                : (o || (o = r * 0.3),
                  l < Math.abs(i)
                    ? ((l = i), (s = o / 4))
                    : (s = (o / (2 * Math.PI)) * Math.asin(i / l)),
                  -(l * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * r - s) * (2 * Math.PI)) / o)) +
                    t)
          );
        },
        easeOutElastic: function (e, t, n, r) {
          var i = n - t,
            l,
            o,
            s;
          return (
            (s = 1.70158),
            (o = 0),
            (l = i),
            e === 0
              ? t
              : (e /= r) === 1
                ? t + i
                : (o || (o = r * 0.3),
                  l < Math.abs(i)
                    ? ((l = i), (s = o / 4))
                    : (s = (o / (2 * Math.PI)) * Math.asin(i / l)),
                  l * Math.pow(2, -10 * e) * Math.sin(((e * r - s) * (2 * Math.PI)) / o) + i + t)
          );
        },
        easeInOutElastic: function (e, t, n, r) {
          var i = n - t,
            l,
            o,
            s;
          return (
            (s = 1.70158),
            (o = 0),
            (l = i),
            e === 0
              ? t
              : (e /= r / 2) === 2
                ? t + i
                : (o || (o = r * 0.44999999999999996),
                  l < Math.abs(i)
                    ? ((l = i), (s = o / 4))
                    : (s = (o / (2 * Math.PI)) * Math.asin(i / l)),
                  e < 1
                    ? -0.5 *
                        (l *
                          Math.pow(2, 10 * (e -= 1)) *
                          Math.sin(((e * r - s) * (2 * Math.PI)) / o)) +
                      t
                    : l *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((e * r - s) * (2 * Math.PI)) / o) *
                        0.5 +
                      i +
                      t)
          );
        },
        easeInBack: function (e, t, n, r, i) {
          var l = n - t;
          return i === void 0 && (i = 1.70158), l * (e /= r) * e * ((i + 1) * e - i) + t;
        },
        easeOutBack: function (e, t, n, r, i) {
          var l = n - t;
          return (
            i === void 0 && (i = 1.70158), l * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t
          );
        },
        easeInOutBack: function (e, t, n, r, i) {
          var l = n - t;
          return (
            i === void 0 && (i = 1.70158),
            (e /= r / 2) < 1
              ? (l / 2) * (e * e * (((i *= 1.525) + 1) * e - i)) + t
              : (l / 2) * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
          );
        },
        easeInBounce: function (e, t, n, r) {
          var i = n - t,
            l;
          return (l = Oa.easeOutBounce(r - e, 0, i, r)), i - l + t;
        },
        easeOutBounce: function (e, t, n, r) {
          var i = n - t;
          return (e /= r) < 0.36363636363636365
            ? i * (7.5625 * e * e) + t
            : e < 0.7272727272727273
              ? i * (7.5625 * (e -= 0.5454545454545454) * e + 0.75) + t
              : e < 0.9090909090909091
                ? i * (7.5625 * (e -= 0.8181818181818182) * e + 0.9375) + t
                : i * (7.5625 * (e -= 0.9545454545454546) * e + 0.984375) + t;
        },
        easeInOutBounce: function (e, t, n, r) {
          var i = n - t,
            l;
          return e < r / 2
            ? ((l = Oa.easeInBounce(e * 2, 0, i, r)), l * 0.5 + t)
            : ((l = Oa.easeOutBounce(e * 2 - r, 0, i, r)), l * 0.5 + i * 0.5 + t);
        },
      };
      go.exports = Oa;
    });
    ne();
    ae();
    re();
    ne();
    ae();
    re();
    ne();
    ae();
    re();
    var r8 = __STORYBOOK_API__,
      {
        ActiveTabs: i8,
        Consumer: l8,
        ManagerContext: o8,
        Provider: s8,
        RequestResponseError: c8,
        addons: sn,
        combineParameters: d8,
        controlOrMetaKey: u8,
        controlOrMetaSymbol: m8,
        eventMatchesShortcut: p8,
        eventToShortcut: h8,
        experimental_MockUniversalStore: f8,
        experimental_UniversalStore: g8,
        experimental_requestResponse: v8,
        experimental_useUniversalStore: y8,
        isMacLike: E8,
        isShortcutTaken: b8,
        keyToSymbol: k8,
        merge: w8,
        mockChannel: C8,
        optionOrAltSymbol: S8,
        shortcutMatchesShortcut: x8,
        shortcutToHumanString: N8,
        types: M8,
        useAddonState: ql,
        useArgTypes: A8,
        useArgs: _8,
        useChannel: Ln,
        useGlobalTypes: Yl,
        useGlobals: Ql,
        useParameter: Kl,
        useSharedState: T8,
        useStoryPrepared: F8,
        useStorybookApi: cn,
        useStorybookState: Ht,
      } = __STORYBOOK_API__;
    ne();
    ae();
    re();
    var Z8 = __STORYBOOK_TYPES__,
      { Addon_TypesEnum: Ta } = __STORYBOOK_TYPES__;
    ne();
    ae();
    re();
    var a = __REACT__,
      {
        Children: H8,
        Component: jt,
        Fragment: j8,
        Profiler: z8,
        PureComponent: U8,
        StrictMode: $8,
        Suspense: W8,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: G8,
        cloneElement: q8,
        createContext: qe,
        createElement: S,
        createFactory: Y8,
        createRef: Q8,
        forwardRef: W,
        isValidElement: Jl,
        lazy: K8,
        memo: J8,
        startTransition: X8,
        unstable_act: e9,
        useCallback: H,
        useContext: zt,
        useDebugValue: t9,
        useDeferredValue: n9,
        useEffect: X,
        useId: a9,
        useImperativeHandle: r9,
        useInsertionEffect: i9,
        useLayoutEffect: l9,
        useMemo: wt,
        useReducer: Xl,
        useRef: Ne,
        useState: Me,
        useSyncExternalStore: o9,
        useTransition: s9,
        version: c9,
      } = __REACT__;
    ne();
    ae();
    re();
    var p9 = __STORYBOOK_THEMING__,
      {
        CacheProvider: h9,
        ClassNames: f9,
        Global: g9,
        ThemeProvider: v9,
        background: y9,
        color: ct,
        convert: E9,
        create: b9,
        createCache: k9,
        createGlobal: w9,
        createReset: C9,
        css: ue,
        darken: S9,
        ensure: x9,
        ignoreSsrWarning: N9,
        isPropValid: M9,
        jsx: A9,
        keyframes: Ft,
        lighten: _9,
        styled: w,
        themes: T9,
        typography: F9,
        useTheme: Ut,
        withTheme: O9,
      } = __STORYBOOK_THEMING__;
    var Yr = {};
    uc(Yr, {
      ARGTYPES_INFO_REQUEST: () => gc,
      ARGTYPES_INFO_RESPONSE: () => vc,
      CHANNEL_CREATED: () => yc,
      CHANNEL_WS_DISCONNECT: () => Ec,
      CONFIG_ERROR: () => bc,
      CREATE_NEW_STORYFILE_REQUEST: () => kc,
      CREATE_NEW_STORYFILE_RESPONSE: () => wc,
      CURRENT_STORY_WAS_SET: () => Cc,
      DOCS_PREPARED: () => Sc,
      DOCS_RENDERED: () => xc,
      FILE_COMPONENT_SEARCH_REQUEST: () => Nc,
      FILE_COMPONENT_SEARCH_RESPONSE: () => Mc,
      FORCE_REMOUNT: () => Ac,
      FORCE_RE_RENDER: () => _c,
      GLOBALS_UPDATED: () => Tc,
      NAVIGATE_URL: () => Fc,
      PLAY_FUNCTION_THREW_EXCEPTION: () => Oc,
      PRELOAD_ENTRIES: () => Lc,
      PREVIEW_BUILDER_PROGRESS: () => Rc,
      PREVIEW_KEYDOWN: () => Ic,
      REGISTER_SUBSCRIPTION: () => Zc,
      REQUEST_WHATS_NEW_DATA: () => Bc,
      RESET_STORY_ARGS: () => Pc,
      RESULT_WHATS_NEW_DATA: () => Vc,
      SAVE_STORY_REQUEST: () => Dc,
      SAVE_STORY_RESPONSE: () => Hc,
      SELECT_STORY: () => jc,
      SET_CONFIG: () => zc,
      SET_CURRENT_STORY: () => Uc,
      SET_FILTER: () => $c,
      SET_GLOBALS: () => Wc,
      SET_INDEX: () => Gc,
      SET_STORIES: () => qc,
      SET_WHATS_NEW_CACHE: () => Yc,
      SHARED_STATE_CHANGED: () => Qc,
      SHARED_STATE_SET: () => Kc,
      STORIES_COLLAPSE_ALL: () => Jc,
      STORIES_EXPAND_ALL: () => Xc,
      STORY_ARGS_UPDATED: () => ed,
      STORY_CHANGED: () => td,
      STORY_ERRORED: () => nd,
      STORY_FINISHED: () => ad,
      STORY_INDEX_INVALIDATED: () => rd,
      STORY_MISSING: () => id,
      STORY_PREPARED: () => ld,
      STORY_RENDERED: () => od,
      STORY_RENDER_PHASE_CHANGED: () => sd,
      STORY_SPECIFIED: () => cd,
      STORY_THREW_EXCEPTION: () => dd,
      STORY_UNCHANGED: () => ud,
      TELEMETRY_ERROR: () => md,
      TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: () => pd,
      TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: () => hd,
      TESTING_MODULE_CRASH_REPORT: () => fd,
      TESTING_MODULE_PROGRESS_REPORT: () => gd,
      TESTING_MODULE_RUN_ALL_REQUEST: () => vd,
      TESTING_MODULE_RUN_REQUEST: () => yd,
      TOGGLE_WHATS_NEW_NOTIFICATIONS: () => Ed,
      UNHANDLED_ERRORS_WHILE_PLAYING: () => bd,
      UPDATE_GLOBALS: () => kd,
      UPDATE_QUERY_PARAMS: () => wd,
      UPDATE_STORY_ARGS: () => Cd,
      default: () => fc,
    });
    ne();
    ae();
    re();
    var fc = __STORYBOOK_CORE_EVENTS__,
      {
        ARGTYPES_INFO_REQUEST: gc,
        ARGTYPES_INFO_RESPONSE: vc,
        CHANNEL_CREATED: yc,
        CHANNEL_WS_DISCONNECT: Ec,
        CONFIG_ERROR: bc,
        CREATE_NEW_STORYFILE_REQUEST: kc,
        CREATE_NEW_STORYFILE_RESPONSE: wc,
        CURRENT_STORY_WAS_SET: Cc,
        DOCS_PREPARED: Sc,
        DOCS_RENDERED: xc,
        FILE_COMPONENT_SEARCH_REQUEST: Nc,
        FILE_COMPONENT_SEARCH_RESPONSE: Mc,
        FORCE_REMOUNT: Ac,
        FORCE_RE_RENDER: _c,
        GLOBALS_UPDATED: Tc,
        NAVIGATE_URL: Fc,
        PLAY_FUNCTION_THREW_EXCEPTION: Oc,
        PRELOAD_ENTRIES: Lc,
        PREVIEW_BUILDER_PROGRESS: Rc,
        PREVIEW_KEYDOWN: Ic,
        REGISTER_SUBSCRIPTION: Zc,
        REQUEST_WHATS_NEW_DATA: Bc,
        RESET_STORY_ARGS: Pc,
        RESULT_WHATS_NEW_DATA: Vc,
        SAVE_STORY_REQUEST: Dc,
        SAVE_STORY_RESPONSE: Hc,
        SELECT_STORY: jc,
        SET_CONFIG: zc,
        SET_CURRENT_STORY: Uc,
        SET_FILTER: $c,
        SET_GLOBALS: Wc,
        SET_INDEX: Gc,
        SET_STORIES: qc,
        SET_WHATS_NEW_CACHE: Yc,
        SHARED_STATE_CHANGED: Qc,
        SHARED_STATE_SET: Kc,
        STORIES_COLLAPSE_ALL: Jc,
        STORIES_EXPAND_ALL: Xc,
        STORY_ARGS_UPDATED: ed,
        STORY_CHANGED: td,
        STORY_ERRORED: nd,
        STORY_FINISHED: ad,
        STORY_INDEX_INVALIDATED: rd,
        STORY_MISSING: id,
        STORY_PREPARED: ld,
        STORY_RENDERED: od,
        STORY_RENDER_PHASE_CHANGED: sd,
        STORY_SPECIFIED: cd,
        STORY_THREW_EXCEPTION: dd,
        STORY_UNCHANGED: ud,
        TELEMETRY_ERROR: md,
        TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: pd,
        TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: hd,
        TESTING_MODULE_CRASH_REPORT: fd,
        TESTING_MODULE_PROGRESS_REPORT: gd,
        TESTING_MODULE_RUN_ALL_REQUEST: vd,
        TESTING_MODULE_RUN_REQUEST: yd,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: Ed,
        UNHANDLED_ERRORS_WHILE_PLAYING: bd,
        UPDATE_GLOBALS: kd,
        UPDATE_QUERY_PARAMS: wd,
        UPDATE_STORY_ARGS: Cd,
      } = __STORYBOOK_CORE_EVENTS__;
    ne();
    ae();
    re();
    var D9 = __STORYBOOK_COMPONENTS__,
      {
        A: H9,
        ActionBar: j9,
        AddonPanel: z9,
        Badge: Qr,
        Bar: U9,
        Blockquote: $9,
        Button: Kr,
        ClipboardCode: W9,
        Code: eo,
        DL: G9,
        Div: q9,
        DocumentWrapper: Y9,
        EmptyTabContent: Q9,
        ErrorFormatter: K9,
        FlexBar: J9,
        Form: X9,
        H1: eg,
        H2: tg,
        H3: ng,
        H4: ag,
        H5: rg,
        H6: ig,
        HR: lg,
        IconButton: to,
        IconButtonSkeleton: og,
        Icons: sg,
        Img: cg,
        LI: dg,
        Link: $t,
        ListItem: ug,
        Loader: Jr,
        Modal: mg,
        OL: pg,
        P: hg,
        Placeholder: fg,
        Pre: gg,
        ProgressSpinner: vg,
        ResetWrapper: yg,
        ScrollArea: Eg,
        Separator: bg,
        Spaced: kg,
        Span: wg,
        StorybookIcon: Cg,
        StorybookLogo: Sg,
        Symbols: xg,
        SyntaxHighlighter: Ng,
        TT: Mg,
        TabBar: Ag,
        TabButton: _g,
        TabWrapper: Tg,
        Table: Fg,
        Tabs: Og,
        TabsState: Lg,
        TooltipLinkList: no,
        TooltipMessage: ao,
        TooltipNote: ro,
        UL: Rg,
        WithTooltip: we,
        WithTooltipPure: Ig,
        Zoom: Zg,
        codeCommon: Bg,
        components: Pg,
        createCopyToClipboardFunction: Vg,
        getStoryHref: Dg,
        icons: Hg,
        interleaveSeparators: jg,
        nameSpaceClassNames: zg,
        resetComponents: Ug,
        withReset: $g,
      } = __STORYBOOK_COMPONENTS__;
    ne();
    ae();
    re();
    var Sd = "array",
      xd = "bit",
      io = "bits",
      Nd = "byte",
      lo = "bytes",
      dn = "",
      Md = "exponent",
      Ad = "function",
      oo = "iec",
      _d = "Invalid number",
      Td = "Invalid rounding method",
      Xr = "jedec",
      Fd = "object",
      so = ".",
      Od = "round",
      Ld = "s",
      Rd = "si",
      Id = "kbit",
      Zd = "kB",
      Bd = " ",
      Pd = "string",
      Vd = "0",
      ei = {
        symbol: {
          iec: {
            bits: ["bit", "Kibit", "Mibit", "Gibit", "Tibit", "Pibit", "Eibit", "Zibit", "Yibit"],
            bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
          },
          jedec: {
            bits: ["bit", "Kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"],
            bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
          },
        },
        fullform: {
          iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
          jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"],
        },
      };
    function ti(
      e,
      {
        bits: t = !1,
        pad: n = !1,
        base: r = -1,
        round: i = 2,
        locale: l = dn,
        localeOptions: o = {},
        separator: s = dn,
        spacer: c = Bd,
        symbols: d = {},
        standard: m = dn,
        output: u = Pd,
        fullform: p = !1,
        fullforms: f = [],
        exponent: g = -1,
        roundingMethod: y = Od,
        precision: k = 0,
      } = {},
    ) {
      let E = g,
        h = Number(e),
        v = [],
        b = 0,
        C = dn;
      m === Rd
        ? ((r = 10), (m = Xr))
        : m === oo || m === Xr
          ? (r = 2)
          : r === 2
            ? (m = oo)
            : ((r = 10), (m = Xr));
      let O = r === 10 ? 1e3 : 1024,
        I = p === !0,
        U = h < 0,
        G = Math[y];
      if (typeof e != "bigint" && isNaN(e)) throw new TypeError(_d);
      if (typeof G !== Ad) throw new TypeError(Td);
      if (
        (U && (h = -h),
        (E === -1 || isNaN(E)) && ((E = Math.floor(Math.log(h) / Math.log(O))), E < 0 && (E = 0)),
        E > 8 && (k > 0 && (k += 8 - E), (E = 8)),
        u === Md)
      )
        return E;
      if (h === 0) (v[0] = 0), (C = v[1] = ei.symbol[m][t ? io : lo][E]);
      else {
        (b = h / (r === 2 ? Math.pow(2, E * 10) : Math.pow(1e3, E))),
          t && ((b = b * 8), b >= O && E < 8 && ((b = b / O), E++));
        let oe = Math.pow(10, E > 0 ? i : 0);
        (v[0] = G(b * oe) / oe),
          v[0] === O && E < 8 && g === -1 && ((v[0] = 1), E++),
          (C = v[1] = r === 10 && E === 1 ? (t ? Id : Zd) : ei.symbol[m][t ? io : lo][E]);
      }
      if (
        (U && (v[0] = -v[0]),
        k > 0 && (v[0] = v[0].toPrecision(k)),
        (v[1] = d[v[1]] || v[1]),
        l === !0
          ? (v[0] = v[0].toLocaleString())
          : l.length > 0
            ? (v[0] = v[0].toLocaleString(l, o))
            : s.length > 0 && (v[0] = v[0].toString().replace(so, s)),
        n && i > 0)
      ) {
        let oe = v[0].toString(),
          ee = s || (oe.match(/(\D)/g) || []).pop() || so,
          ke = oe.toString().split(ee),
          ye = ke[1] || dn,
          pe = ye.length,
          ie = i - pe;
        v[0] = `${ke[0]}${ee}${ye.padEnd(pe + ie, Vd)}`;
      }
      return (
        I && (v[1] = f[E] ? f[E] : ei.fullform[m][E] + (t ? xd : Nd) + (v[0] === 1 ? dn : Ld)),
        u === Sd ? v : u === Fd ? { value: v[0], symbol: v[1], exponent: E, unit: C } : v.join(c)
      );
    }
    ne();
    ae();
    re();
    var Rn = __REACT_DOM__,
      {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ev,
        createPortal: In,
        createRoot: tv,
        findDOMNode: nv,
        flushSync: av,
        hydrate: rv,
        hydrateRoot: iv,
        render: lv,
        unmountComponentAtNode: co,
        unstable_batchedUpdates: ov,
        unstable_renderSubtreeIntoContainer: uo,
        version: sv,
      } = __REACT_DOM__;
    ne();
    ae();
    re();
    var li = Gl(fo(), 1);
    var yo = Gl(vo(), 1);
    function zd(e) {
      return (e * Math.PI) / 180;
    }
    function je(e, t) {
      return e + Math.random() * (t - e);
    }
    function Ud(e, t) {
      return Math.floor(e + Math.random() * (t - e + 1));
    }
    var Zn;
    (function (e) {
      (e[(e.Circle = 0)] = "Circle"), (e[(e.Square = 1)] = "Square"), (e[(e.Strip = 2)] = "Strip");
    })(Zn || (Zn = {}));
    var Ot;
    (function (e) {
      (e[(e.Positive = 1)] = "Positive"), (e[(e.Negative = -1)] = "Negative");
    })(Ot || (Ot = {}));
    var $d = 1e3 / 60,
      ai = class {
        constructor(t, n, r, i) {
          this.getOptions = n;
          let { colors: l, initialVelocityX: o, initialVelocityY: s } = this.getOptions();
          (this.context = t),
            (this.x = r),
            (this.y = i),
            (this.w = je(5, 20)),
            (this.h = je(5, 20)),
            (this.radius = je(5, 10)),
            (this.vx = typeof o == "number" ? je(-o, o) : je(o.min, o.max)),
            (this.vy = typeof s == "number" ? je(-s, 0) : je(s.min, s.max)),
            (this.shape = Ud(0, 2)),
            (this.angle = zd(je(0, 360))),
            (this.angularSpin = je(-0.2, 0.2)),
            (this.color = l[Math.floor(Math.random() * l.length)]),
            (this.rotateY = je(0, 1)),
            (this.rotationDirection = je(0, 1) ? Ot.Positive : Ot.Negative);
        }
        update(t) {
          let { gravity: n, wind: r, friction: i, opacity: l, drawShape: o } = this.getOptions(),
            s = t / $d;
          (this.x += this.vx * s),
            (this.y += this.vy * s),
            (this.vy += n * s),
            (this.vx += r * s),
            (this.vx *= i ** s),
            (this.vy *= i ** s),
            this.rotateY >= 1 && this.rotationDirection === Ot.Positive
              ? (this.rotationDirection = Ot.Negative)
              : this.rotateY <= -1 &&
                this.rotationDirection === Ot.Negative &&
                (this.rotationDirection = Ot.Positive);
          let c = 0.1 * this.rotationDirection * s;
          if (
            ((this.rotateY += c),
            (this.angle += this.angularSpin),
            this.context.save(),
            this.context.translate(this.x, this.y),
            this.context.rotate(this.angle),
            this.context.scale(1, this.rotateY),
            this.context.rotate(this.angle),
            this.context.beginPath(),
            (this.context.fillStyle = this.color),
            (this.context.strokeStyle = this.color),
            (this.context.globalAlpha = l),
            (this.context.lineCap = "round"),
            (this.context.lineWidth = 2),
            o && typeof o == "function")
          )
            o.call(this, this.context);
          else
            switch (this.shape) {
              case Zn.Circle: {
                this.context.beginPath(),
                  this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                  this.context.fill();
                break;
              }
              case Zn.Square: {
                this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                break;
              }
              case Zn.Strip: {
                this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h);
                break;
              }
            }
          this.context.closePath(), this.context.restore();
        }
      },
      ri = class {
        constructor(t, n) {
          (this.x = 0),
            (this.y = 0),
            (this.w = 0),
            (this.h = 0),
            (this.lastNumberOfPieces = 0),
            (this.tweenProgress = 0),
            (this.tweenFrom = 0),
            (this.particles = []),
            (this.particlesGenerated = 0),
            (this.removeParticleAt = i => {
              this.particles.splice(i, 1);
            }),
            (this.getParticle = () => {
              let i = je(this.x, this.w + this.x),
                l = je(this.y, this.h + this.y);
              return new ai(this.context, this.getOptions, i, l);
            }),
            (this.animate = i => {
              let { canvas: l, context: o, particlesGenerated: s, lastNumberOfPieces: c } = this,
                {
                  run: d,
                  recycle: m,
                  numberOfPieces: u,
                  debug: p,
                  tweenFunction: f,
                  tweenDuration: g,
                } = this.getOptions();
              if (!d) return !1;
              let y = this.particles.length,
                k = m ? y : s;
              if (k < u) {
                c !== u &&
                  ((this.tweenProgress = 0), (this.tweenFrom = k), (this.lastNumberOfPieces = u)),
                  (this.tweenProgress = Math.min(g, Math.max(0, this.tweenProgress + i)));
                let E = f(this.tweenProgress, this.tweenFrom, u, g),
                  h = Math.round(E - k);
                for (let v = 0; v < h; v++) this.particles.push(this.getParticle());
                this.particlesGenerated += h;
              }
              p &&
                ((o.font = "12px sans-serif"),
                (o.fillStyle = "#333"),
                (o.textAlign = "right"),
                o.fillText(`Particles: ${y}`, l.width - 10, l.height - 20));
              for (let E = this.particles.length - 1; E >= 0; E--) {
                let h = this.particles[E];
                h.update(i),
                  (h.y > l.height || h.y < -100 || h.x > l.width + 100 || h.x < -100) &&
                    (m && k <= u
                      ? (this.particles[E] = this.getParticle())
                      : this.removeParticleAt(E));
              }
              return y > 0 || k < u;
            }),
            (this.canvas = t);
          let r = this.canvas.getContext("2d");
          if (!r) throw new Error("Could not get canvas context");
          (this.context = r), (this.getOptions = n);
        }
      },
      oi = {
        width: typeof window < "u" ? window.innerWidth : 300,
        height: typeof window < "u" ? window.innerHeight : 200,
        numberOfPieces: 200,
        friction: 0.99,
        wind: 0,
        gravity: 0.1,
        initialVelocityX: 4,
        initialVelocityY: 10,
        colors: [
          "#f44336",
          "#e91e63",
          "#9c27b0",
          "#673ab7",
          "#3f51b5",
          "#2196f3",
          "#03a9f4",
          "#00bcd4",
          "#009688",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFEB3B",
          "#FFC107",
          "#FF9800",
          "#FF5722",
          "#795548",
        ],
        opacity: 1,
        debug: !1,
        tweenFunction: yo.easeInOutQuad,
        tweenDuration: 5e3,
        recycle: !0,
        run: !0,
      },
      ii = class {
        constructor(t, n) {
          (this.lastFrameTime = 0),
            (this.setOptionsWithDefaults = i => {
              let l = { confettiSource: { x: 0, y: 0, w: this.canvas.width, h: 0 } };
              (this._options = { ...l, ...oi, ...i }), Object.assign(this, i.confettiSource);
            }),
            (this.update = (i = 0) => {
              let {
                  options: { run: l, onConfettiComplete: o, frameRate: s },
                  canvas: c,
                  context: d,
                } = this,
                m = Math.min(i - this.lastFrameTime, 50);
              if (s && m < 1e3 / s) {
                this.rafId = requestAnimationFrame(this.update);
                return;
              }
              (this.lastFrameTime = i - (s ? m % s : 0)),
                l && ((d.fillStyle = "white"), d.clearRect(0, 0, c.width, c.height)),
                this.generator.animate(m)
                  ? (this.rafId = requestAnimationFrame(this.update))
                  : (o &&
                      typeof o == "function" &&
                      this.generator.particlesGenerated > 0 &&
                      o.call(this, this),
                    (this._options.run = !1));
            }),
            (this.reset = () => {
              this.generator &&
                this.generator.particlesGenerated > 0 &&
                ((this.generator.particlesGenerated = 0),
                (this.generator.particles = []),
                (this.generator.lastNumberOfPieces = 0));
            }),
            (this.stop = () => {
              (this.options = { run: !1 }),
                this.rafId && (cancelAnimationFrame(this.rafId), (this.rafId = void 0));
            }),
            (this.canvas = t);
          let r = this.canvas.getContext("2d");
          if (!r) throw new Error("Could not get canvas context");
          (this.context = r),
            (this.generator = new ri(this.canvas, () => this.options)),
            (this.options = n),
            this.update();
        }
        get options() {
          return this._options;
        }
        set options(t) {
          let n = this._options?.run,
            r = this._options?.recycle;
          this.setOptionsWithDefaults(t),
            this.generator &&
              (Object.assign(this.generator, this.options.confettiSource),
              typeof t.recycle == "boolean" &&
                t.recycle &&
                r === !1 &&
                (this.generator.lastNumberOfPieces = this.generator.particles.length)),
            typeof t.run == "boolean" && t.run && n === !1 && this.update();
        }
      },
      Wd = a.createRef(),
      Bn = class extends a.Component {
        constructor(t) {
          super(t), (this.canvas = a.createRef()), (this.canvas = t.canvasRef || Wd);
        }
        componentDidMount() {
          if (this.canvas.current) {
            let t = ni(this.props)[0];
            this.confetti = new ii(this.canvas.current, t);
          }
        }
        componentDidUpdate() {
          let t = ni(this.props)[0];
          this.confetti && (this.confetti.options = t);
        }
        componentWillUnmount() {
          this.confetti && this.confetti.stop(), (this.confetti = void 0);
        }
        render() {
          let [t, n] = ni(this.props),
            r = {
              zIndex: 2,
              position: "absolute",
              pointerEvents: "none",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              ...n.style,
            };
          return (0, li.jsx)("canvas", {
            width: t.width,
            height: t.height,
            ref: this.canvas,
            ...n,
            style: r,
          });
        }
      };
    Bn.defaultProps = { ...oi };
    Bn.displayName = "ReactConfetti";
    function ni(e) {
      let t = {},
        n = {},
        r = {},
        i = [...Object.keys(oi), "confettiSource", "drawShape", "onConfettiComplete", "frameRate"],
        l = ["canvasRef"];
      for (let o in e) {
        let s = e[o];
        i.includes(o) ? (t[o] = s) : l.includes(o) ? (l[o] = s) : (r[o] = s);
      }
      return [t, r, n];
    }
    var Eo = a.forwardRef((e, t) => (0, li.jsx)(Bn, { canvasRef: t, ...e }));
    ne();
    ae();
    re();
    ne();
    ae();
    re();
    function si({ onlyFirst: e = !1 } = {}) {
      let n = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))",
      ].join("|");
      return new RegExp(n, e ? void 0 : "g");
    }
    var Gd = si();
    function ci(e) {
      if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
      return e.replace(Gd, "");
    }
    var qd = Object.create,
      ts = Object.defineProperty,
      Yd = Object.getOwnPropertyDescriptor,
      Qd = Object.getOwnPropertyNames,
      Kd = Object.getPrototypeOf,
      Jd = Object.prototype.hasOwnProperty,
      Xd = (e =>
        typeof Dt < "u"
          ? Dt
          : typeof Proxy < "u"
            ? new Proxy(e, { get: (t, n) => (typeof Dt < "u" ? Dt : t)[n] })
            : e)(function (e) {
        if (typeof Dt < "u") return Dt.apply(this, arguments);
        throw new Error('Dynamic require of "' + e + '" is not supported');
      }),
      Vt = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      e5 = (e, t, n, r) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let i of Qd(t))
            !Jd.call(e, i) &&
              i !== n &&
              ts(e, i, { get: () => t[i], enumerable: !(r = Yd(t, i)) || r.enumerable });
        return e;
      },
      et = (e, t, n) => (
        (n = e != null ? qd(Kd(e)) : {}),
        e5(t || !e || !e.__esModule ? ts(n, "default", { value: e, enumerable: !0 }) : n, e)
      ),
      ya = Vt((e, t) => {
        (function (n, r) {
          typeof Xd == "function" && typeof e == "object" && typeof t == "object"
            ? (t.exports = r())
            : typeof define == "function" && define.amd
              ? define(function () {
                  return r();
                })
              : (n.pluralize = r());
        })(e, function () {
          var n = [],
            r = [],
            i = {},
            l = {},
            o = {};
          function s(y) {
            return typeof y == "string" ? new RegExp("^" + y + "$", "i") : y;
          }
          function c(y, k) {
            return y === k
              ? k
              : y === y.toLowerCase()
                ? k.toLowerCase()
                : y === y.toUpperCase()
                  ? k.toUpperCase()
                  : y[0] === y[0].toUpperCase()
                    ? k.charAt(0).toUpperCase() + k.substr(1).toLowerCase()
                    : k.toLowerCase();
          }
          function d(y, k) {
            return y.replace(/\$(\d{1,2})/g, function (E, h) {
              return k[h] || "";
            });
          }
          function m(y, k) {
            return y.replace(k[0], function (E, h) {
              var v = d(k[1], arguments);
              return c(E === "" ? y[h - 1] : E, v);
            });
          }
          function u(y, k, E) {
            if (!y.length || i.hasOwnProperty(y)) return k;
            for (var h = E.length; h--; ) {
              var v = E[h];
              if (v[0].test(k)) return m(k, v);
            }
            return k;
          }
          function p(y, k, E) {
            return function (h) {
              var v = h.toLowerCase();
              return k.hasOwnProperty(v) ? c(h, v) : y.hasOwnProperty(v) ? c(h, y[v]) : u(v, h, E);
            };
          }
          function f(y, k, E, h) {
            return function (v) {
              var b = v.toLowerCase();
              return k.hasOwnProperty(b) ? !0 : y.hasOwnProperty(b) ? !1 : u(b, b, E) === b;
            };
          }
          function g(y, k, E) {
            var h = k === 1 ? g.singular(y) : g.plural(y);
            return (E ? k + " " : "") + h;
          }
          return (
            (g.plural = p(o, l, n)),
            (g.isPlural = f(o, l, n)),
            (g.singular = p(l, o, r)),
            (g.isSingular = f(l, o, r)),
            (g.addPluralRule = function (y, k) {
              n.push([s(y), k]);
            }),
            (g.addSingularRule = function (y, k) {
              r.push([s(y), k]);
            }),
            (g.addUncountableRule = function (y) {
              if (typeof y == "string") {
                i[y.toLowerCase()] = !0;
                return;
              }
              g.addPluralRule(y, "$0"), g.addSingularRule(y, "$0");
            }),
            (g.addIrregularRule = function (y, k) {
              (k = k.toLowerCase()), (y = y.toLowerCase()), (o[y] = k), (l[k] = y);
            }),
            [
              ["I", "we"],
              ["me", "us"],
              ["he", "they"],
              ["she", "they"],
              ["them", "them"],
              ["myself", "ourselves"],
              ["yourself", "yourselves"],
              ["itself", "themselves"],
              ["herself", "themselves"],
              ["himself", "themselves"],
              ["themself", "themselves"],
              ["is", "are"],
              ["was", "were"],
              ["has", "have"],
              ["this", "these"],
              ["that", "those"],
              ["echo", "echoes"],
              ["dingo", "dingoes"],
              ["volcano", "volcanoes"],
              ["tornado", "tornadoes"],
              ["torpedo", "torpedoes"],
              ["genus", "genera"],
              ["viscus", "viscera"],
              ["stigma", "stigmata"],
              ["stoma", "stomata"],
              ["dogma", "dogmata"],
              ["lemma", "lemmata"],
              ["schema", "schemata"],
              ["anathema", "anathemata"],
              ["ox", "oxen"],
              ["axe", "axes"],
              ["die", "dice"],
              ["yes", "yeses"],
              ["foot", "feet"],
              ["eave", "eaves"],
              ["goose", "geese"],
              ["tooth", "teeth"],
              ["quiz", "quizzes"],
              ["human", "humans"],
              ["proof", "proofs"],
              ["carve", "carves"],
              ["valve", "valves"],
              ["looey", "looies"],
              ["thief", "thieves"],
              ["groove", "grooves"],
              ["pickaxe", "pickaxes"],
              ["passerby", "passersby"],
            ].forEach(function (y) {
              return g.addIrregularRule(y[0], y[1]);
            }),
            [
              [/s?$/i, "s"],
              [/[^\u0000-\u007F]$/i, "$0"],
              [/([^aeiou]ese)$/i, "$1"],
              [/(ax|test)is$/i, "$1es"],
              [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
              [/(e[mn]u)s?$/i, "$1s"],
              [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
              [
                /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
                "$1i",
              ],
              [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
              [/(seraph|cherub)(?:im)?$/i, "$1im"],
              [/(her|at|gr)o$/i, "$1oes"],
              [
                /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
                "$1a",
              ],
              [
                /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
                "$1a",
              ],
              [/sis$/i, "ses"],
              [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
              [/([^aeiouy]|qu)y$/i, "$1ies"],
              [/([^ch][ieo][ln])ey$/i, "$1ies"],
              [/(x|ch|ss|sh|zz)$/i, "$1es"],
              [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
              [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
              [/(pe)(?:rson|ople)$/i, "$1ople"],
              [/(child)(?:ren)?$/i, "$1ren"],
              [/eaux$/i, "$0"],
              [/m[ae]n$/i, "men"],
              ["thou", "you"],
            ].forEach(function (y) {
              return g.addPluralRule(y[0], y[1]);
            }),
            [
              [/s$/i, ""],
              [/(ss)$/i, "$1"],
              [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
              [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
              [/ies$/i, "y"],
              [
                /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
                "$1ie",
              ],
              [/\b(mon|smil)ies$/i, "$1ey"],
              [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
              [/(seraph|cherub)im$/i, "$1"],
              [
                /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
                "$1",
              ],
              [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
              [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
              [/(test)(?:is|es)$/i, "$1is"],
              [
                /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
                "$1us",
              ],
              [
                /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
                "$1um",
              ],
              [
                /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
                "$1on",
              ],
              [/(alumn|alg|vertebr)ae$/i, "$1a"],
              [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
              [/(matr|append)ices$/i, "$1ix"],
              [/(pe)(rson|ople)$/i, "$1rson"],
              [/(child)ren$/i, "$1"],
              [/(eau)x?$/i, "$1"],
              [/men$/i, "man"],
            ].forEach(function (y) {
              return g.addSingularRule(y[0], y[1]);
            }),
            [
              "adulthood",
              "advice",
              "agenda",
              "aid",
              "aircraft",
              "alcohol",
              "ammo",
              "analytics",
              "anime",
              "athletics",
              "audio",
              "bison",
              "blood",
              "bream",
              "buffalo",
              "butter",
              "carp",
              "cash",
              "chassis",
              "chess",
              "clothing",
              "cod",
              "commerce",
              "cooperation",
              "corps",
              "debris",
              "diabetes",
              "digestion",
              "elk",
              "energy",
              "equipment",
              "excretion",
              "expertise",
              "firmware",
              "flounder",
              "fun",
              "gallows",
              "garbage",
              "graffiti",
              "hardware",
              "headquarters",
              "health",
              "herpes",
              "highjinks",
              "homework",
              "housework",
              "information",
              "jeans",
              "justice",
              "kudos",
              "labour",
              "literature",
              "machinery",
              "mackerel",
              "mail",
              "media",
              "mews",
              "moose",
              "music",
              "mud",
              "manga",
              "news",
              "only",
              "personnel",
              "pike",
              "plankton",
              "pliers",
              "police",
              "pollution",
              "premises",
              "rain",
              "research",
              "rice",
              "salmon",
              "scissors",
              "series",
              "sewage",
              "shambles",
              "shrimp",
              "software",
              "species",
              "staff",
              "swine",
              "tennis",
              "traffic",
              "transportation",
              "trout",
              "tuna",
              "wealth",
              "welfare",
              "whiting",
              "wildebeest",
              "wildlife",
              "you",
              /pok[eé]mon$/i,
              /[^aeiou]ese$/i,
              /deer$/i,
              /fish$/i,
              /measles$/i,
              /o[iu]s$/i,
              /pox$/i,
              /sheep$/i,
            ].forEach(g.addUncountableRule),
            g
          );
        });
      }),
      t5 = Vt((e, t) => {
        var n = new Error("Element already at target scroll position"),
          r = new Error("Scroll cancelled"),
          i = Math.min,
          l = Date.now;
        t.exports = { left: o("scrollLeft"), top: o("scrollTop") };
        function o(d) {
          return function (m, u, p, f) {
            (p = p || {}),
              typeof p == "function" && ((f = p), (p = {})),
              typeof f != "function" && (f = c);
            var g = l(),
              y = m[d],
              k = p.ease || s,
              E = isNaN(p.duration) ? 350 : +p.duration,
              h = !1;
            return y === u ? f(n, m[d]) : requestAnimationFrame(b), v;
            function v() {
              h = !0;
            }
            function b(C) {
              if (h) return f(r, m[d]);
              var O = l(),
                I = i(1, (O - g) / E),
                U = k(I);
              (m[d] = U * (u - y) + y),
                I < 1
                  ? requestAnimationFrame(b)
                  : requestAnimationFrame(function () {
                      f(null, m[d]);
                    });
            }
          };
        }
        function s(d) {
          return 0.5 * (1 - Math.cos(Math.PI * d));
        }
        function c() {}
      }),
      n5 = Vt((e, t) => {
        (function (n, r) {
          typeof define == "function" && define.amd
            ? define([], r)
            : typeof t == "object" && t.exports
              ? (t.exports = r())
              : (n.Scrollparent = r());
        })(e, function () {
          function n(i) {
            var l = getComputedStyle(i, null).getPropertyValue("overflow");
            return l.indexOf("scroll") > -1 || l.indexOf("auto") > -1;
          }
          function r(i) {
            if (i instanceof HTMLElement || i instanceof SVGElement) {
              for (var l = i.parentNode; l.parentNode; ) {
                if (n(l)) return l;
                l = l.parentNode;
              }
              return document.scrollingElement || document.documentElement;
            }
          }
          return r;
        });
      }),
      dl = Vt((e, t) => {
        var n = function (v) {
          return r(v) && !i(v);
        };
        function r(v) {
          return !!v && typeof v == "object";
        }
        function i(v) {
          var b = Object.prototype.toString.call(v);
          return b === "[object RegExp]" || b === "[object Date]" || s(v);
        }
        var l = typeof Symbol == "function" && Symbol.for,
          o = l ? Symbol.for("react.element") : 60103;
        function s(v) {
          return v.$$typeof === o;
        }
        function c(v) {
          return Array.isArray(v) ? [] : {};
        }
        function d(v, b) {
          return b.clone !== !1 && b.isMergeableObject(v) ? E(c(v), v, b) : v;
        }
        function m(v, b, C) {
          return v.concat(b).map(function (O) {
            return d(O, C);
          });
        }
        function u(v, b) {
          if (!b.customMerge) return E;
          var C = b.customMerge(v);
          return typeof C == "function" ? C : E;
        }
        function p(v) {
          return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(v).filter(function (b) {
                return Object.propertyIsEnumerable.call(v, b);
              })
            : [];
        }
        function f(v) {
          return Object.keys(v).concat(p(v));
        }
        function g(v, b) {
          try {
            return b in v;
          } catch {
            return !1;
          }
        }
        function y(v, b) {
          return (
            g(v, b) && !(Object.hasOwnProperty.call(v, b) && Object.propertyIsEnumerable.call(v, b))
          );
        }
        function k(v, b, C) {
          var O = {};
          return (
            C.isMergeableObject(v) &&
              f(v).forEach(function (I) {
                O[I] = d(v[I], C);
              }),
            f(b).forEach(function (I) {
              y(v, I) ||
                (g(v, I) && C.isMergeableObject(b[I])
                  ? (O[I] = u(I, C)(v[I], b[I], C))
                  : (O[I] = d(b[I], C)));
            }),
            O
          );
        }
        function E(v, b, C) {
          (C = C || {}),
            (C.arrayMerge = C.arrayMerge || m),
            (C.isMergeableObject = C.isMergeableObject || n),
            (C.cloneUnlessOtherwiseSpecified = d);
          var O = Array.isArray(b),
            I = Array.isArray(v),
            U = O === I;
          return U ? (O ? C.arrayMerge(v, b, C) : k(v, b, C)) : d(b, C);
        }
        E.all = function (v, b) {
          if (!Array.isArray(v)) throw new Error("first argument should be an array");
          return v.reduce(function (C, O) {
            return E(C, O, b);
          }, {});
        };
        var h = E;
        t.exports = h;
      }),
      a5 = Vt((e, t) => {
        var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        t.exports = n;
      }),
      r5 = Vt((e, t) => {
        var n = a5();
        function r() {}
        function i() {}
        (i.resetWarningCache = r),
          (t.exports = function () {
            function l(c, d, m, u, p, f) {
              if (f !== n) {
                var g = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((g.name = "Invariant Violation"), g);
              }
            }
            l.isRequired = l;
            function o() {
              return l;
            }
            var s = {
              array: l,
              bigint: l,
              bool: l,
              func: l,
              number: l,
              object: l,
              string: l,
              symbol: l,
              any: l,
              arrayOf: o,
              element: l,
              elementType: l,
              instanceOf: o,
              node: l,
              objectOf: o,
              oneOf: o,
              oneOfType: o,
              shape: o,
              exact: o,
              checkPropTypes: i,
              resetWarningCache: r,
            };
            return (s.PropTypes = s), s;
          });
      }),
      i5 = Vt((e, t) => {
        t.exports = r5()();
      }),
      l5 = Vt((e, t) => {
        var n = function (l) {
            return Object.prototype.hasOwnProperty.call(l, "props");
          },
          r = function (l, o) {
            return l + i(o);
          },
          i = function (l) {
            return l === null || typeof l == "boolean" || typeof l > "u"
              ? ""
              : typeof l == "number"
                ? l.toString()
                : typeof l == "string"
                  ? l
                  : Array.isArray(l)
                    ? l.reduce(r, "")
                    : n(l) && Object.prototype.hasOwnProperty.call(l.props, "children")
                      ? i(l.props.children)
                      : "";
          };
        (i.default = i), (t.exports = i);
      }),
      {
        CHROMATIC_INDEX_URL: o5,
        CHROMATIC_BASE_URL: Mr = o5 || "https://www.chromatic.com",
        CHROMATIC_API_URL: s5 = `${Mr}/api`,
      } = Se,
      Z = "chromaui/addon-visual-tests",
      an = `${Z}/panel`,
      Wa = `${Z}/test-provider`,
      c5 = `${Z}/sidebarTop`,
      d5 = `${Z}/sidebarBottom`,
      Fi = `${Z}/access-token/${Mr}`,
      Ar = `${Z}/configInfo`,
      bo = `${Z}/configInfoDismissed`,
      u5 = `${Z}/gitInfo`,
      ul = `${Z}/gitInfoError`,
      ns = `${Z}/projectInfo`,
      ml = `${Z}/isOffline`,
      Qa = `${Z}/isOutdated`,
      m5 = `${Z}/startBuild`,
      p5 = `${Z}/stopBuild`,
      pl = `${Z}/localBuildProgress`,
      h5 = `${Z}/selectedModeName`,
      f5 = `${Z}/selectedBrowserId`,
      g5 = `${Z}/telemetry`,
      Oi = `${Z}/enableFilter`,
      as = `${Z}/removeAddon`,
      v5 = "chromatic",
      y5 = `${Z}/ChannelFetch/aborted`,
      E5 = `${Z}ChannelFetch/request`,
      b5 = `${Z}ChannelFetch/response`,
      {
        TESTING_MODULE_CRASH_REPORT: Gv = "testingModuleCrashReport",
        TESTING_MODULE_PROGRESS_REPORT: k5 = "testingModuleProgressReport",
        TESTING_MODULE_RUN_REQUEST: qv = "testingModuleRunRequest",
        TESTING_MODULE_RUN_ALL_REQUEST: w5 = "testingModuleRunAllRequest",
        TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: C5 = "testingModuleCancelTestRunRequest",
        TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: Yv = "testingModuleCancelTestRunResponse",
        TESTING_MODULE_WATCH_MODE_REQUEST: Qv = "testingModuleWatchModeRequest",
      } = Yr,
      S5 = {
        autoAcceptChanges: !1,
        exitOnceUploaded: !1,
        exitZeroOnChanges: !0,
        forceRebuild: !0,
        fromCI: !1,
        interactive: !1,
        isLocalBuild: !0,
        skip: !1,
        skipUpdateCheck: !0,
        storybookBuildDir: void 0,
      },
      rs = "https://www.chromatic.com/docs/visual-tests-addon",
      x5 = et(ya()),
      N5 = (e, t) =>
        (t &&
          { positive: { color: e.color.positiveText }, warning: { color: e.color.warningText } }[
            t
          ]) ||
        {},
      Je = w(to)(
        ({ active: e, variant: t, theme: n }) => ({
          display: "inline-flex",
          alignItems: "center",
          verticalAlign: "top",
          gap: 6,
          margin: 0,
          color: e || t === "outline" ? n.color.secondary : n.color.mediumdark,
          fontWeight: "normal",
          "& > svg": { width: "auto" },
        }),
        ({ active: e, status: t, theme: n }) => !e && N5(n, t),
        ({ active: e, theme: t }) => {
          let n = t.background.content === t.color.lightest,
            r = n ? "rgb(241,248,255)" : "rgb(28,37,45)",
            i = n ? "rgb(229,243,255)" : "rgb(29,44,56)";
          return {
            "--bg-color": e ? r : t.background.content,
            "&:hover": { "--bg-color": i, color: t.color.secondary },
          };
        },
      ),
      M5 = w(Qr)(({ theme: e }) => ({ padding: "4px 8px", fontSize: e.typography.size.s1 })),
      A5 = w(Je)(
        ({ theme: e }) => ({
          fontSize: e.typography.size.s2,
          "&:hover [data-badge][data-status=warning], [data-badge=true][data-status=warning]": {
            background: "#E3F3FF",
            borderColor: "rgba(2, 113, 182, 0.1)",
            color: "#0271B6",
          },
          "&:hover [data-badge][data-status=critical], [data-badge=true][data-status=critical]": {
            background: e.background.negative,
            boxShadow: "inset 0 0 0 1px rgba(182, 2, 2, 0.1)",
            color: e.color.negativeText,
          },
        }),
        ({ active: e, theme: t }) =>
          !e &&
          ue({ "&:hover": { color: t.base === "light" ? t.color.defaultText : t.color.light } }),
      ),
      _5 = w.span(({ theme: e }) => ({
        color: e.base === "light" ? e.color.defaultText : e.color.light,
      })),
      ko = ({ active: e, count: t, label: n, status: r, ...i }) =>
        a.createElement(
          A5,
          { active: e, ...i },
          a.createElement(M5, { status: r, "data-badge": e, "data-status": r }, t),
          a.createElement(_5, null, (0, x5.default)(n, t)),
        ),
      T5 = () => !0,
      F5 = ({ status: e }) => e?.[Z]?.status === "warn",
      O5 = ({ status: e }) => e?.[Z]?.status === "error",
      L5 = ({ status: e }) => e?.[Z]?.status === "warn" || e?.[Z]?.status === "error",
      R5 = (e = !1, t = !1) => (e && t ? L5 : e ? F5 : t ? O5 : T5),
      I5 = w.div({ display: "flex", gap: 5 }),
      Z5 = ({ api: e, status: t }) => {
        let [n, r] = a.useState(!1),
          [i, l] = a.useState(!1),
          o = Object.values(t).filter(p => p[Z]?.status === "warn"),
          s = Object.values(t).filter(p => p[Z]?.status === "error"),
          c = o.length > 0,
          d = s.length > 0,
          m = H(() => r(p => !p), []),
          u = H(() => l(p => !p), []);
        return (
          X(() => {
            let p = R5(c && n, d && i);
            e.experimental_setFilter(Z, p), e.emit(Oi, p);
          }, [e, c, d, n, i]),
          !c && !d
            ? null
            : a.createElement(
                I5,
                { id: "sidebar-bottom-wrapper" },
                c &&
                  a.createElement(ko, {
                    id: "warnings-found-filter",
                    active: n,
                    count: o.length,
                    label: "Change",
                    status: "warning",
                    onClick: m,
                  }),
                d &&
                  a.createElement(ko, {
                    id: "errors-found-filter",
                    active: i,
                    count: s.length,
                    label: "Error",
                    status: "critical",
                    onClick: u,
                  }),
              )
        );
      },
      B5 = e => {
        let { status: t } = Ht();
        return a.createElement(Z5, { ...e, status: t });
      },
      P5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.25 4.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13 1.504v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5zM2 9.297V2.004h10v5.293L9.854 5.15a.5.5 0 00-.708 0L6.5 7.797 5.354 6.65a.5.5 0 00-.708 0L2 9.297zM9.5 6.21l2.5 2.5v3.293H2V10.71l3-3 3.146 3.146a.5.5 0 00.708-.707L7.207 8.504 9.5 6.21z",
            fill: e,
          }),
        ),
      ),
      is = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm-1 0v6.5a.499.499 0 00.497.5H10v2H1v-9h2zm1-1h6.5a.499.499 0 01.5.5v6.5h2v-9H4v2zm6 7V7.71l-2.293 2.293H10zm0-3.707V4.71l-5.293 5.293h1.586L10 6.297zm-.707-2.293H7.707L4 7.71v1.586l5.293-5.293z",
            fill: e,
          }),
        ),
      ),
      V5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M4.5 4a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
            fill: e,
          }),
        ),
      ),
      Zt = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M12.813 7.425l-9.05 5.603A.5.5 0 013 12.603V1.398a.5.5 0 01.763-.425l9.05 5.602a.5.5 0 010 .85z",
            fill: e,
          }),
        ),
      ),
      D5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z",
            fill: e,
          }),
        ),
      ),
      ls = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
            fill: e,
          }),
        ),
      ),
      H5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M6 7a3 3 0 110-6h5.5a.5.5 0 010 1H10v10.5a.5.5 0 01-1 0V2H7v10.5a.5.5 0 01-1 0V7z",
            fill: e,
          }),
        ),
      ),
      j5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M5.586 5.586A2 2 0 018.862 7.73a.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 10-.365-.93 2 2 0 01-2.145-3.277z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M.939 6.527c.127.128.19.297.185.464a.635.635 0 01-.185.465L0 8.395a7.099 7.099 0 001.067 2.572h1.32c.182 0 .345.076.46.197a.635.635 0 01.198.46v1.317A7.097 7.097 0 005.602 14l.94-.94a.634.634 0 01.45-.186H7.021c.163 0 .326.061.45.186l.939.938a7.098 7.098 0 002.547-1.057V11.61c0-.181.075-.344.197-.46a.634.634 0 01.46-.197h1.33c.507-.76.871-1.622 1.056-2.55l-.946-.946a.635.635 0 01-.186-.465.635.635 0 01.186-.464l.943-.944a7.099 7.099 0 00-1.044-2.522h-1.34a.635.635 0 01-.46-.197.635.635 0 01-.196-.46V1.057A7.096 7.096 0 008.413.002l-.942.942a.634.634 0 01-.45.186H6.992a.634.634 0 01-.45-.186L5.598 0a7.097 7.097 0 00-2.553 1.058v1.33c0 .182-.076.345-.197.46a.635.635 0 01-.46.198h-1.33A7.098 7.098 0 00.003 5.591l.936.936zm.707 1.636c.324-.324.482-.752.479-1.172a1.634 1.634 0 00-.48-1.171l-.538-.539c.126-.433.299-.847.513-1.235h.768c.459 0 .873-.19 1.167-.49.3-.295.49-.708.49-1.167v-.77c.39-.215.807-.388 1.243-.515l.547.547c.32.32.742.48 1.157.48l.015-.001h.014c.415 0 .836-.158 1.157-.479l.545-.544c.433.126.846.299 1.234.512v.784c0 .46.19.874.49 1.168.294.3.708.49 1.167.49h.776c.209.382.378.788.502 1.213l-.545.546a1.635 1.635 0 00-.48 1.17c-.003.421.155.849.48 1.173l.549.55c-.126.434-.3.85-.513 1.239h-.77c-.458 0-.872.19-1.166.49-.3.294-.49.708-.49 1.167v.77a6.09 6.09 0 01-1.238.514l-.54-.54a1.636 1.636 0 00-1.158-.48H6.992c-.415 0-.837.159-1.157.48l-.543.543a6.091 6.091 0 01-1.247-.516v-.756c0-.459-.19-.873-.49-1.167-.294-.3-.708-.49-1.167-.49h-.761a6.094 6.094 0 01-.523-1.262l.542-.542z",
            fill: e,
          }),
        ),
      ),
      z5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M4 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
            fill: e,
          }),
        ),
      ),
      U5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M5.903.112a.107.107 0 01.194 0l.233.505.552.066c.091.01.128.123.06.185l-.408.377.109.546a.107.107 0 01-.158.114L6 1.634l-.485.271a.107.107 0 01-.158-.114l.108-.546-.408-.377a.107.107 0 01.06-.185L5.67.617l.233-.505zM2.194.224a.214.214 0 00-.389 0l-.466 1.01-1.104.131a.214.214 0 00-.12.37l.816.755-.217 1.091a.214.214 0 00.315.23L2 3.266l.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37L2.66 1.234 2.194.224zM12.194 8.224a.214.214 0 00-.389 0l-.466 1.01-1.104.13a.214.214 0 00-.12.371l.816.755-.217 1.091a.214.214 0 00.315.23l.97-.544.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37l-1.105-.131-.466-1.01z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.5 12.797l-1.293-1.293 6.758-6.758L9.258 6.04 2.5 12.797zm7.465-7.465l2.828-2.828L11.5 1.211 8.672 4.04l1.293 1.293zM.147 11.857a.5.5 0 010-.707l11-11a.5.5 0 01.706 0l2 2a.5.5 0 010 .708l-11 11a.5.5 0 01-.706 0l-2-2z",
            fill: e,
          }),
        ),
      ),
      hl = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z",
            fill: e,
          }),
        ),
      ),
      wo = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM9.3 2.6a.5.5 0 01.1.7l-5.995 7.993a.505.505 0 01-.37.206.5.5 0 01-.395-.152L.146 8.854a.5.5 0 11.708-.708l2.092 2.093L8.6 2.7a.5.5 0 01.7-.1zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
            fill: e,
          }),
        ),
      ),
      $5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
            fill: e,
          }),
        ),
      ),
      fl = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M9.854 4.146a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
            fill: e,
          }),
        ),
      ),
      Li = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zm3.854-9.354a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
            fill: e,
          }),
        ),
      ),
      W5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zM3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z",
            fill: e,
          }),
        ),
      ),
      xt = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zm2.854-9.854a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
            fill: e,
          }),
        ),
      ),
      os = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M8 8.004a1 1 0 01-.5.866v1.634a.5.5 0 01-1 0V8.87A1 1 0 118 8.004z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3 4.004a4 4 0 118 0v1h1.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3v-1zm7 1v-1a3 3 0 10-6 0v1h6zm2 1H2v7h10v-7z",
            fill: e,
          }),
        ),
      ),
      G5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
            fill: e,
          }),
        ),
      ),
      ss = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M5.25 5.25A1.75 1.75 0 117 7a.5.5 0 00-.5.5V9a.5.5 0 001 0V7.955A2.75 2.75 0 104.25 5.25a.5.5 0 001 0zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
            fill: e,
          }),
        ),
      ),
      q5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-3.524 4.89A5.972 5.972 0 017 13a5.972 5.972 0 01-3.477-1.11l1.445-1.444C5.564 10.798 6.258 11 7 11s1.436-.202 2.032-.554l1.444 1.445zm-.03-2.858l1.445 1.444A5.972 5.972 0 0013 7c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C10.798 5.564 11 6.258 11 7s-.202 1.436-.554 2.032zM9.032 3.554l1.444-1.445A5.972 5.972 0 007 1c-1.296 0-2.496.41-3.477 1.11l1.445 1.444A3.981 3.981 0 017 3c.742 0 1.436.202 2.032.554zM3.554 4.968L2.109 3.523A5.973 5.973 0 001 7c0 1.296.41 2.496 1.11 3.476l1.444-1.444A3.981 3.981 0 013 7c0-.742.202-1.436.554-2.032zM10 7a3 3 0 11-6 0 3 3 0 016 0z",
            fill: e,
          }),
        ),
      ),
      Y5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M7 4.5a.5.5 0 01.5.5v3.5a.5.5 0 11-1 0V5a.5.5 0 01.5-.5zM7.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.206 1.045a.498.498 0 01.23.209l6.494 10.992a.5.5 0 01-.438.754H.508a.497.497 0 01-.506-.452.498.498 0 01.072-.31l6.49-10.984a.497.497 0 01.642-.21zM7 2.483L1.376 12h11.248L7 2.483z",
            fill: e,
          }),
        ),
      ),
      cs = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z",
            fill: e,
          }),
          S("path", {
            d: "M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z",
            fill: e,
          }),
        ),
      ),
      Q5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S(
            "g",
            { clipPath: "url(#prefix__clip0_1449_588)" },
            S("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.414 1.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4zm.707-.707a3 3 0 00-4.242 0l-4 4a3 3 0 000 4.242l4 4a3 3 0 004.242 0l4-4a3 3 0 000-4.242l-4-4z",
              fill: e,
            }),
          ),
          S(
            "defs",
            null,
            S(
              "clipPath",
              { id: "prefix__clip0_1449_588" },
              S("path", { fill: "#fff", d: "M0 0h14v14H0z" }),
            ),
          ),
        ),
      ),
      ds = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z",
            fill: e,
          }),
        ),
      ),
      K5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M2.76 7.096a.498.498 0 00.136.258l5.5 5.5a.5.5 0 00.707-.708L3.958 7l5.147-5.146a.5.5 0 10-.708-.708l-5.5 5.5a.5.5 0 00-.137.45z",
            fill: e,
          }),
        ),
      ),
      J5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
            fill: e,
          }),
        ),
      ),
      X5 = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z",
            fill: e,
          }),
        ),
      ),
      eu = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M3.354.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7 3.793 3.354.146zM6.646 9.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L7 10.207l-3.646 3.647a.5.5 0 01-.708-.708l4-4z",
            fill: e,
          }),
        ),
      ),
      tu = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M10.646 2.646a.5.5 0 01.708 0l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708-.708L11.293 5H1.5a.5.5 0 010-1h9.793l-.647-.646a.5.5 0 010-.708zM3.354 8.354L2.707 9H12.5a.5.5 0 010 1H2.707l.647.646a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708z",
            fill: e,
          }),
        ),
      ),
      nu = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M1.146 3.854a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L2.707 3h6.295A4 4 0 019 11H3a.5.5 0 010-1h6a3 3 0 100-6H2.707l1.147 1.146a.5.5 0 11-.708.708l-2-2z",
            fill: e,
          }),
        ),
      ),
      us = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z",
            fill: e,
          }),
        ),
      ),
      au = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm6.5 3.5v2.48A6.001 6.001 0 011.02 7.5H3.5a.5.5 0 000-1H1.02A6.001 6.001 0 016.5 1.02V3.5a.5.5 0 001 0V1.02a6.001 6.001 0 015.48 5.48H10.5a.5.5 0 000 1h2.48a6.002 6.002 0 01-5.48 5.48V10.5a.5.5 0 00-1 0z",
            fill: e,
          }),
        ),
      ),
      ru = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", { d: "M7.5 4.5a.5.5 0 00-1 0v2.634a1 1 0 101 0V4.5z", fill: e }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.5.5A.5.5 0 016 0h2a.5.5 0 010 1h-.5v1.02a5.973 5.973 0 013.374 1.398l.772-.772a.5.5 0 01.708.708l-.772.772A6 6 0 116.5 2.02V1H6a.5.5 0 01-.5-.5zM7 3a5 5 0 100 10A5 5 0 007 3z",
            fill: e,
          }),
        ),
      ),
      iu = W(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM2.671 11.155c.696-1.006 2.602-1.816 3.194-1.91.226-.036.232-.658.232-.658s-.665-.658-.81-1.544c-.39 0-.63-.94-.241-1.272a2.578 2.578 0 00-.012-.13c-.066-.607-.28-2.606 1.965-2.606 2.246 0 2.031 2 1.966 2.606l-.012.13c.39.331.149 1.272-.24 1.272-.146.886-.81 1.544-.81 1.544s.004.622.23.658c.593.094 2.5.904 3.195 1.91a6 6 0 10-8.657 0z",
            fill: e,
          }),
        ),
      ),
      di = et(ya()),
      gl = () => {},
      $e = gl;
    function it(e) {
      return { tag: 0, 0: e };
    }
    function Ea(e) {
      return { tag: 1, 0: e };
    }
    var Co = () => (typeof Symbol == "function" && Symbol.asyncIterator) || "@@asyncIterator",
      lu = e => e;
    function Ve(e) {
      return t => n => {
        var r = $e;
        t(i => {
          i === 0 ? n(0) : i.tag === 0 ? ((r = i[0]), n(i)) : e(i[0]) ? n(i) : r(0);
        });
      };
    }
    function Ri(e) {
      return t => n =>
        t(r => {
          r === 0 || r.tag === 0 ? n(r) : n(Ea(e(r[0])));
        });
    }
    function Ka(e) {
      return t => n => {
        var r = [],
          i = $e,
          l = !1,
          o = !1;
        t(s => {
          o ||
            (s === 0
              ? ((o = !0), r.length || n(0))
              : s.tag === 0
                ? (i = s[0])
                : ((l = !1),
                  (function (c) {
                    var d = $e;
                    c(m => {
                      if (m === 0) {
                        if (r.length) {
                          var u = r.indexOf(d);
                          u > -1 && (r = r.slice()).splice(u, 1),
                            r.length || (o ? n(0) : l || ((l = !0), i(0)));
                        }
                      } else m.tag === 0 ? (r.push((d = m[0])), d(0)) : r.length && (n(m), d(0));
                    });
                  })(e(s[0])),
                  l || ((l = !0), i(0))));
        }),
          n(
            it(s => {
              if (s === 1) {
                o || ((o = !0), i(1));
                for (var c = 0, d = r, m = r.length; c < m; c++) d[c](1);
                r.length = 0;
              } else {
                !o && !l ? ((l = !0), i(0)) : (l = !1);
                for (var u = 0, p = r, f = r.length; u < f; u++) p[u](0);
              }
            }),
          );
      };
    }
    function ou(e) {
      return Ka(lu)(e);
    }
    function ta(e) {
      return ou(du(e));
    }
    function vl(e) {
      return t => n => {
        var r = !1;
        t(i => {
          if (!r)
            if (i === 0) (r = !0), n(0), e();
            else if (i.tag === 0) {
              var l = i[0];
              n(
                it(o => {
                  o === 1 ? ((r = !0), l(1), e()) : l(o);
                }),
              );
            } else n(i);
        });
      };
    }
    function Ja(e) {
      return t => n => {
        var r = !1;
        t(i => {
          if (!r)
            if (i === 0) (r = !0), n(0);
            else if (i.tag === 0) {
              var l = i[0];
              n(
                it(o => {
                  o === 1 && (r = !0), l(o);
                }),
              );
            } else e(i[0]), n(i);
        });
      };
    }
    function Ii(e) {
      return t => n =>
        t(r => {
          r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r);
        });
    }
    function na(e) {
      var t = [],
        n = $e,
        r = !1;
      return i => {
        t.push(i),
          t.length === 1 &&
            e(l => {
              if (l === 0) {
                for (var o = 0, s = t, c = t.length; o < c; o++) s[o](0);
                t.length = 0;
              } else if (l.tag === 0) n = l[0];
              else {
                r = !1;
                for (var d = 0, m = t, u = t.length; d < u; d++) m[d](l);
              }
            }),
          i(
            it(l => {
              if (l === 1) {
                var o = t.indexOf(i);
                o > -1 && (t = t.slice()).splice(o, 1), t.length || n(1);
              } else r || ((r = !0), n(0));
            }),
          );
      };
    }
    function So(e) {
      return t => n => {
        var r = $e,
          i = $e,
          l = !1,
          o = !1,
          s = !1,
          c = !1;
        t(d => {
          c ||
            (d === 0
              ? ((c = !0), s || n(0))
              : d.tag === 0
                ? (r = d[0])
                : (s && (i(1), (i = $e)),
                  l ? (l = !1) : ((l = !0), r(0)),
                  (function (m) {
                    (s = !0),
                      m(u => {
                        s &&
                          (u === 0
                            ? ((s = !1), c ? n(0) : l || ((l = !0), r(0)))
                            : u.tag === 0
                              ? ((o = !1), (i = u[0])(0))
                              : (n(u), o ? (o = !1) : i(0)));
                      });
                  })(e(d[0]))));
        }),
          n(
            it(d => {
              d === 1
                ? (c || ((c = !0), r(1)), s && ((s = !1), i(1)))
                : (!c && !l && ((l = !0), r(0)), s && !o && ((o = !0), i(0)));
            }),
          );
      };
    }
    function _r(e) {
      return t => n => {
        var r = $e,
          i = !1,
          l = 0;
        t(o => {
          i ||
            (o === 0
              ? ((i = !0), n(0))
              : o.tag === 0
                ? e <= 0
                  ? ((i = !0), n(0), o[0](1))
                  : (r = o[0])
                : l++ < e
                  ? (n(o), !i && l >= e && ((i = !0), n(0), r(1)))
                  : n(o));
        }),
          n(
            it(o => {
              o === 1 && !i ? ((i = !0), r(1)) : o === 0 && !i && l < e && r(0);
            }),
          );
      };
    }
    function ms(e) {
      return t => n => {
        var r = $e,
          i = $e,
          l = !1;
        t(o => {
          l ||
            (o === 0
              ? ((l = !0), i(1), n(0))
              : o.tag === 0
                ? ((r = o[0]),
                  e(s => {
                    s === 0 || (s.tag === 0 ? (i = s[0])(0) : ((l = !0), i(1), r(1), n(0)));
                  }))
                : n(o));
        }),
          n(
            it(o => {
              o === 1 && !l ? ((l = !0), r(1), i(1)) : l || r(0);
            }),
          );
      };
    }
    function ps(e, t) {
      return n => r => {
        var i = $e,
          l = !1;
        n(o => {
          l ||
            (o === 0
              ? ((l = !0), r(0))
              : o.tag === 0
                ? ((i = o[0]), r(o))
                : e(o[0])
                  ? r(o)
                  : ((l = !0), t && r(o), r(0), i(1)));
        });
      };
    }
    function su(e) {
      return t => e()(t);
    }
    function hs(e) {
      return t => {
        var n = (e[Co()] && e[Co()]()) || e,
          r = !1,
          i = !1,
          l = !1,
          o;
        t(
          it(async s => {
            if (s === 1) (r = !0), n.return && n.return();
            else if (i) l = !0;
            else {
              for (l = i = !0; l && !r; )
                if ((o = await n.next()).done) (r = !0), n.return && (await n.return()), t(0);
                else
                  try {
                    (l = !1), t(Ea(o.value));
                  } catch (c) {
                    if (n.throw) (r = !!(await n.throw(c)).done) && t(0);
                    else throw c;
                  }
              i = !1;
            }
          }),
        );
      };
    }
    function cu(e) {
      return e[Symbol.asyncIterator]
        ? hs(e)
        : t => {
            var n = e[Symbol.iterator](),
              r = !1,
              i = !1,
              l = !1,
              o;
            t(
              it(s => {
                if (s === 1) (r = !0), n.return && n.return();
                else if (i) l = !0;
                else {
                  for (l = i = !0; l && !r; )
                    if ((o = n.next()).done) (r = !0), n.return && n.return(), t(0);
                    else
                      try {
                        (l = !1), t(Ea(o.value));
                      } catch (c) {
                        if (n.throw) (r = !!n.throw(c).done) && t(0);
                        else throw c;
                      }
                  i = !1;
                }
              }),
            );
          };
    }
    var du = cu;
    function Kn(e) {
      return t => {
        var n = !1;
        t(
          it(r => {
            r === 1 ? (n = !0) : n || ((n = !0), t(Ea(e)), t(0));
          }),
        );
      };
    }
    function fs(e) {
      return t => {
        var n = !1,
          r = e({
            next(i) {
              n || t(Ea(i));
            },
            complete() {
              n || ((n = !0), t(0));
            },
          });
        t(
          it(i => {
            i === 1 && !n && ((n = !0), r());
          }),
        );
      };
    }
    function Zi() {
      var e, t;
      return {
        source: na(fs(n => ((e = n.next), (t = n.complete), gl))),
        next(n) {
          e && e(n);
        },
        complete() {
          t && t();
        },
      };
    }
    function xo(e) {
      return fs(
        t => (
          e.then(n => {
            Promise.resolve(n).then(() => {
              t.next(n), t.complete();
            });
          }),
          gl
        ),
      );
    }
    function En(e) {
      return t => {
        var n = $e,
          r = !1;
        return (
          t(i => {
            i === 0 ? (r = !0) : i.tag === 0 ? (n = i[0])(0) : r || (e(i[0]), n(0));
          }),
          {
            unsubscribe() {
              r || ((r = !0), n(1));
            },
          }
        );
      };
    }
    function uu(e) {
      En(t => {})(e);
    }
    function yl(e) {
      return new Promise(t => {
        var n = $e,
          r;
        e(i => {
          i === 0 ? Promise.resolve(r).then(t) : i.tag === 0 ? (n = i[0])(0) : ((r = i[0]), n(0));
        });
      });
    }
    var mu = {
        NAME: "Name",
        DOCUMENT: "Document",
        OPERATION_DEFINITION: "OperationDefinition",
        VARIABLE_DEFINITION: "VariableDefinition",
        SELECTION_SET: "SelectionSet",
        FIELD: "Field",
        ARGUMENT: "Argument",
        FRAGMENT_SPREAD: "FragmentSpread",
        INLINE_FRAGMENT: "InlineFragment",
        FRAGMENT_DEFINITION: "FragmentDefinition",
        VARIABLE: "Variable",
        INT: "IntValue",
        FLOAT: "FloatValue",
        STRING: "StringValue",
        BOOLEAN: "BooleanValue",
        NULL: "NullValue",
        ENUM: "EnumValue",
        LIST: "ListValue",
        OBJECT: "ObjectValue",
        OBJECT_FIELD: "ObjectField",
        DIRECTIVE: "Directive",
        NAMED_TYPE: "NamedType",
        LIST_TYPE: "ListType",
        NON_NULL_TYPE: "NonNullType",
      },
      Bi = class extends Error {
        constructor(e, t, n, r, i, l, o) {
          super(e),
            (this.name = "GraphQLError"),
            (this.message = e),
            i && (this.path = i),
            t && (this.nodes = Array.isArray(t) ? t : [t]),
            n && (this.source = n),
            r && (this.positions = r),
            l && (this.originalError = l);
          var s = o;
          if (!s && l) {
            var c = l.extensions;
            c && typeof c == "object" && (s = c);
          }
          this.extensions = s || {};
        }
        toJSON() {
          return { ...this, message: this.message };
        }
        toString() {
          return this.message;
        }
        get [Symbol.toStringTag]() {
          return "GraphQLError";
        }
      },
      fe,
      Y;
    function Ce(e) {
      return new Bi(`Syntax Error: Unexpected token at ${Y} in ${e}`);
    }
    function ze(e) {
      if (((e.lastIndex = Y), e.test(fe))) return fe.slice(Y, (Y = e.lastIndex));
    }
    var La = / +(?=[^\s])/y;
    function pu(e) {
      for (
        var t = e.split(`
`),
          n = "",
          r = 0,
          i = 0,
          l = t.length - 1,
          o = 0;
        o < t.length;
        o++
      )
        (La.lastIndex = 0),
          La.test(t[o]) &&
            (o && (!r || La.lastIndex < r) && (r = La.lastIndex), (i = i || o), (l = o));
      for (var s = i; s <= l; s++)
        s !== i &&
          (n += `
`),
          (n += t[s].slice(r).replace(/\\"""/g, '"""'));
      return n;
    }
    function J() {
      for (
        var e = 0 | fe.charCodeAt(Y++);
        e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279;
        e = 0 | fe.charCodeAt(Y++)
      )
        if (e === 35) for (; (e = fe.charCodeAt(Y++)) !== 10 && e !== 13; );
      Y--;
    }
    var gs = /[_A-Za-z]\w*/y;
    function vt() {
      var e;
      if ((e = ze(gs))) return { kind: "Name", value: e };
    }
    var hu = /(?:null|true|false)/y,
      vs = /\$[_A-Za-z]\w*/y,
      fu = /-?\d+/y,
      gu = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y,
      vu = /\\/g,
      yu = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y,
      Eu = /"(?:"|[^\r\n]*?[^\\]")/y;
    function Xa(e) {
      var t, n;
      if ((n = ze(hu)))
        t = n === "null" ? { kind: "NullValue" } : { kind: "BooleanValue", value: n === "true" };
      else if (!e && (n = ze(vs)))
        t = { kind: "Variable", name: { kind: "Name", value: n.slice(1) } };
      else if ((n = ze(fu))) {
        var r = n;
        (n = ze(gu))
          ? (t = { kind: "FloatValue", value: r + n })
          : (t = { kind: "IntValue", value: r });
      } else if ((n = ze(gs))) t = { kind: "EnumValue", value: n };
      else if ((n = ze(yu))) t = { kind: "StringValue", value: pu(n.slice(3, -3)), block: !0 };
      else if ((n = ze(Eu)))
        t = { kind: "StringValue", value: vu.test(n) ? JSON.parse(n) : n.slice(1, -1), block: !1 };
      else if (
        (t =
          (function (i) {
            var l;
            if (fe.charCodeAt(Y) === 91) {
              Y++, J();
              for (var o = []; (l = Xa(i)); ) o.push(l);
              if (fe.charCodeAt(Y++) !== 93) throw Ce("ListValue");
              return J(), { kind: "ListValue", values: o };
            }
          })(e) ||
          (function (i) {
            if (fe.charCodeAt(Y) === 123) {
              Y++, J();
              for (var l = [], o; (o = vt()); ) {
                if ((J(), fe.charCodeAt(Y++) !== 58)) throw Ce("ObjectField");
                J();
                var s = Xa(i);
                if (!s) throw Ce("ObjectField");
                l.push({ kind: "ObjectField", name: o, value: s });
              }
              if (fe.charCodeAt(Y++) !== 125) throw Ce("ObjectValue");
              return J(), { kind: "ObjectValue", fields: l };
            }
          })(e))
      )
        return t;
      return J(), t;
    }
    function ys(e) {
      var t = [];
      if ((J(), fe.charCodeAt(Y) === 40)) {
        Y++, J();
        for (var n; (n = vt()); ) {
          if ((J(), fe.charCodeAt(Y++) !== 58)) throw Ce("Argument");
          J();
          var r = Xa(e);
          if (!r) throw Ce("Argument");
          t.push({ kind: "Argument", name: n, value: r });
        }
        if (!t.length || fe.charCodeAt(Y++) !== 41) throw Ce("Argument");
        J();
      }
      return t;
    }
    function bn(e) {
      var t = [];
      for (J(); fe.charCodeAt(Y) === 64; ) {
        Y++;
        var n = vt();
        if (!n) throw Ce("Directive");
        J(), t.push({ kind: "Directive", name: n, arguments: ys(e) });
      }
      return t;
    }
    function bu() {
      var e = vt();
      if (e) {
        J();
        var t;
        if (fe.charCodeAt(Y) === 58) {
          if ((Y++, J(), (t = e), !(e = vt()))) throw Ce("Field");
          J();
        }
        return {
          kind: "Field",
          alias: t,
          name: e,
          arguments: ys(!1),
          directives: bn(!1),
          selectionSet: Tr(),
        };
      }
    }
    function Es() {
      var e;
      if ((J(), fe.charCodeAt(Y) === 91)) {
        Y++, J();
        var t = Es();
        if (!t || fe.charCodeAt(Y++) !== 93) throw Ce("ListType");
        e = { kind: "ListType", type: t };
      } else if ((e = vt())) e = { kind: "NamedType", name: e };
      else throw Ce("NamedType");
      return J(), fe.charCodeAt(Y) === 33 ? (Y++, J(), { kind: "NonNullType", type: e }) : e;
    }
    var ku = /on/y;
    function bs() {
      if (ze(ku)) {
        J();
        var e = vt();
        if (!e) throw Ce("NamedType");
        return J(), { kind: "NamedType", name: e };
      }
    }
    var wu = /\.\.\./y;
    function Cu() {
      if (ze(wu)) {
        J();
        var e = Y,
          t;
        if ((t = vt()) && t.value !== "on")
          return { kind: "FragmentSpread", name: t, directives: bn(!1) };
        Y = e;
        var n = bs(),
          r = bn(!1),
          i = Tr();
        if (!i) throw Ce("InlineFragment");
        return { kind: "InlineFragment", typeCondition: n, directives: r, selectionSet: i };
      }
    }
    function Tr() {
      var e;
      if ((J(), fe.charCodeAt(Y) === 123)) {
        Y++, J();
        for (var t = []; (e = Cu() || bu()); ) t.push(e);
        if (!t.length || fe.charCodeAt(Y++) !== 125) throw Ce("SelectionSet");
        return J(), { kind: "SelectionSet", selections: t };
      }
    }
    var Su = /fragment/y;
    function xu() {
      if (ze(Su)) {
        J();
        var e = vt();
        if (!e) throw Ce("FragmentDefinition");
        J();
        var t = bs();
        if (!t) throw Ce("FragmentDefinition");
        var n = bn(!1),
          r = Tr();
        if (!r) throw Ce("FragmentDefinition");
        return {
          kind: "FragmentDefinition",
          name: e,
          typeCondition: t,
          directives: n,
          selectionSet: r,
        };
      }
    }
    var Nu = /(?:query|mutation|subscription)/y;
    function Mu() {
      var e,
        t,
        n = [],
        r = [];
      (e = ze(Nu)) &&
        (J(),
        (t = vt()),
        (n = (function () {
          var l,
            o = [];
          if ((J(), fe.charCodeAt(Y) === 40)) {
            for (Y++, J(); (l = ze(vs)); ) {
              if ((J(), fe.charCodeAt(Y++) !== 58)) throw Ce("VariableDefinition");
              var s = Es(),
                c = void 0;
              if (fe.charCodeAt(Y) === 61 && (Y++, J(), !(c = Xa(!0))))
                throw Ce("VariableDefinition");
              J(),
                o.push({
                  kind: "VariableDefinition",
                  variable: { kind: "Variable", name: { kind: "Name", value: l.slice(1) } },
                  type: s,
                  defaultValue: c,
                  directives: bn(!0),
                });
            }
            if (fe.charCodeAt(Y++) !== 41) throw Ce("VariableDefinition");
            J();
          }
          return o;
        })()),
        (r = bn(!1)));
      var i = Tr();
      if (i)
        return {
          kind: "OperationDefinition",
          operation: e || "query",
          name: t,
          variableDefinitions: n,
          directives: r,
          selectionSet: i,
        };
    }
    function Au(e, t) {
      return (
        (fe = typeof e.body == "string" ? e.body : e),
        (Y = 0),
        (function () {
          var n;
          J();
          for (var r = []; (n = xu() || Mu()); ) r.push(n);
          return { kind: "Document", definitions: r };
        })()
      );
    }
    function _u(e) {
      return JSON.stringify(e);
    }
    function Tu(e) {
      return (
        `"""
` +
        e.replace(/"""/g, '\\"""') +
        `
"""`
      );
    }
    var Ye = e => !(!e || !e.length),
      Ae = {
        OperationDefinition(e) {
          if (e.operation === "query" && !e.name && !Ye(e.variableDefinitions) && !Ye(e.directives))
            return Ae.SelectionSet(e.selectionSet);
          var t = e.operation;
          return (
            e.name && (t += " " + e.name.value),
            Ye(e.variableDefinitions) &&
              (e.name || (t += " "),
              (t += "(" + e.variableDefinitions.map(Ae.VariableDefinition).join(", ") + ")")),
            Ye(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")),
            t + " " + Ae.SelectionSet(e.selectionSet)
          );
        },
        VariableDefinition(e) {
          var t = Ae.Variable(e.variable) + ": " + Qe(e.type);
          return (
            e.defaultValue && (t += " = " + Qe(e.defaultValue)),
            Ye(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")),
            t
          );
        },
        Field(e) {
          var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
          if (Ye(e.arguments)) {
            var n = e.arguments.map(Ae.Argument),
              r = t + "(" + n.join(", ") + ")";
            t =
              r.length > 80
                ? t +
                  `(
  ` +
                  n
                    .join(
                      `
`,
                    )
                    .replace(
                      /\n/g,
                      `
  `,
                    ) +
                  `
)`
                : r;
          }
          return (
            Ye(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")),
            e.selectionSet ? t + " " + Ae.SelectionSet(e.selectionSet) : t
          );
        },
        StringValue: e => (e.block ? Tu(e.value) : _u(e.value)),
        BooleanValue: e => "" + e.value,
        NullValue: e => "null",
        IntValue: e => e.value,
        FloatValue: e => e.value,
        EnumValue: e => e.value,
        Name: e => e.value,
        Variable: e => "$" + e.name.value,
        ListValue: e => "[" + e.values.map(Qe).join(", ") + "]",
        ObjectValue: e => "{" + e.fields.map(Ae.ObjectField).join(", ") + "}",
        ObjectField: e => e.name.value + ": " + Qe(e.value),
        Document: e =>
          Ye(e.definitions)
            ? e.definitions.map(Qe).join(`

`)
            : "",
        SelectionSet: e =>
          `{
  ` +
          e.selections
            .map(Qe)
            .join(
              `
`,
            )
            .replace(
              /\n/g,
              `
  `,
            ) +
          `
}`,
        Argument: e => e.name.value + ": " + Qe(e.value),
        FragmentSpread(e) {
          var t = "..." + e.name.value;
          return Ye(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")), t;
        },
        InlineFragment(e) {
          var t = "...";
          return (
            e.typeCondition && (t += " on " + e.typeCondition.name.value),
            Ye(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")),
            t + " " + Qe(e.selectionSet)
          );
        },
        FragmentDefinition(e) {
          var t = "fragment " + e.name.value;
          return (
            (t += " on " + e.typeCondition.name.value),
            Ye(e.directives) && (t += " " + e.directives.map(Ae.Directive).join(" ")),
            t + " " + Qe(e.selectionSet)
          );
        },
        Directive(e) {
          var t = "@" + e.name.value;
          return Ye(e.arguments) && (t += "(" + e.arguments.map(Ae.Argument).join(", ") + ")"), t;
        },
        NamedType: e => e.name.value,
        ListType: e => "[" + Qe(e.type) + "]",
        NonNullType: e => Qe(e.type) + "!",
      };
    function Qe(e) {
      return Ae[e.kind] ? Ae[e.kind](e) : "";
    }
    var Fu = e =>
        e && e.message && (e.extensions || e.name === "GraphQLError")
          ? e
          : typeof e == "object" && e.message
            ? new Bi(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {})
            : new Bi(e),
      El = class extends Error {
        constructor(e) {
          var t = (e.graphQLErrors || []).map(Fu),
            n = ((r, i) => {
              var l = "";
              if (r) return `[Network] ${r.message}`;
              if (i)
                for (var o of i)
                  l &&
                    (l += `
`),
                    (l += `[GraphQL] ${o.message}`);
              return l;
            })(e.networkError, t);
          super(n),
            (this.name = "CombinedError"),
            (this.message = n),
            (this.graphQLErrors = t),
            (this.networkError = e.networkError),
            (this.response = e.response);
        }
        toString() {
          return this.message;
        }
      },
      Pi = (e, t) => {
        for (var n = 0 | (t || 5381), r = 0, i = 0 | e.length; r < i; r++)
          n = (n << 5) + n + e.charCodeAt(r);
        return n;
      },
      Qt = new Set(),
      No = new WeakMap(),
      pn = e => {
        if (e === null || Qt.has(e)) return "null";
        if (typeof e != "object") return JSON.stringify(e) || "";
        if (e.toJSON) return pn(e.toJSON());
        if (Array.isArray(e)) {
          var t = "[";
          for (var n of e) t.length > 1 && (t += ","), (t += pn(n) || "null");
          return (t += "]");
        } else if ((tr !== kn && e instanceof tr) || (nr !== kn && e instanceof nr)) return "null";
        var r = Object.keys(e).sort();
        if (
          !r.length &&
          e.constructor &&
          Object.getPrototypeOf(e).constructor !== Object.prototype.constructor
        ) {
          var i = No.get(e) || Math.random().toString(36).slice(2);
          return No.set(e, i), pn({ __key: i });
        }
        Qt.add(e);
        var l = "{";
        for (var o of r) {
          var s = pn(e[o]);
          s && (l.length > 1 && (l += ","), (l += pn(o) + ":" + s));
        }
        return Qt.delete(e), (l += "}");
      },
      Vi = (e, t, n) => {
        if (!(n == null || typeof n != "object" || n.toJSON || Qt.has(n)))
          if (Array.isArray(n)) for (var r = 0, i = n.length; r < i; r++) Vi(e, `${t}.${r}`, n[r]);
          else if (n instanceof tr || n instanceof nr) e.set(t, n);
          else {
            Qt.add(n);
            for (var l of Object.keys(n)) Vi(e, `${t}.${l}`, n[l]);
          }
      },
      er = e => (Qt.clear(), pn(e)),
      kn = class {},
      tr = typeof File < "u" ? File : kn,
      nr = typeof Blob < "u" ? Blob : kn,
      Ou = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,
      Lu = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g,
      Ru = (e, t) =>
        t % 2 == 0
          ? e.replace(
              Lu,
              `
`,
            )
          : e,
      Mo = e => e.split(Ou).map(Ru).join("").trim(),
      Ao = new Map(),
      Ga = new Map(),
      bl = e => {
        var t;
        return (
          typeof e == "string"
            ? (t = Mo(e))
            : e.loc && Ga.get(e.__key) === e
              ? (t = e.loc.source.body)
              : ((t = Ao.get(e) || Mo(Qe(e))), Ao.set(e, t)),
          typeof e != "string" &&
            !e.loc &&
            (e.loc = {
              start: 0,
              end: t.length,
              source: { body: t, name: "gql", locationOffset: { line: 1, column: 1 } },
            }),
          t
        );
      },
      _o = e => {
        var t = Pi(bl(e));
        if (e.definitions) {
          var n = ks(e);
          n &&
            (t = Pi(
              `
# ${n}`,
              t,
            ));
        }
        return t;
      },
      Iu = e => {
        var t, n;
        return (
          typeof e == "string"
            ? ((t = _o(e)), (n = Ga.get(t) || Au(e)))
            : ((t = e.__key || _o(e)), (n = Ga.get(t) || e)),
          n.loc || bl(n),
          (n.__key = t),
          Ga.set(t, n),
          n
        );
      },
      vn = (e, t, n) => {
        var r = t || {},
          i = Iu(e),
          l = er(r),
          o = i.__key;
        return l !== "{}" && (o = Pi(l, o)), { key: o, query: i, variables: r, extensions: n };
      },
      ks = e => {
        for (var t of e.definitions)
          if (t.kind === mu.OPERATION_DEFINITION) return t.name ? t.name.value : void 0;
      },
      To = (e, t, n) => {
        if (!("data" in t || ("errors" in t && Array.isArray(t.errors))))
          throw new Error("No Content");
        var r = e.kind === "subscription";
        return {
          operation: e,
          data: t.data,
          error: Array.isArray(t.errors)
            ? new El({ graphQLErrors: t.errors, response: n })
            : void 0,
          extensions: t.extensions ? { ...t.extensions } : void 0,
          hasNext: t.hasNext == null ? r : t.hasNext,
          stale: !1,
        };
      },
      Di = (e, t) => {
        if (
          typeof e == "object" &&
          e != null &&
          (!e.constructor || e.constructor === Object || Array.isArray(e))
        ) {
          e = Array.isArray(e) ? [...e] : { ...e };
          for (var n of Object.keys(t)) e[n] = Di(e[n], t[n]);
          return e;
        }
        return t;
      },
      Zu = (e, t, n, r) => {
        var i = e.error ? e.error.graphQLErrors : [],
          l = !!e.extensions || !!t.extensions,
          o = { ...e.extensions, ...t.extensions },
          s = t.incremental;
        "path" in t && (s = [t]);
        var c = { data: e.data };
        if (s) {
          var d = function (u) {
            Array.isArray(u.errors) && i.push(...u.errors),
              u.extensions && (Object.assign(o, u.extensions), (l = !0));
            var p = "data",
              f = c,
              g = [];
            if (u.path) g = u.path;
            else if (r) {
              var y = r.find(C => C.id === u.id);
              u.subPath ? (g = [...y.path, ...u.subPath]) : (g = y.path);
            }
            for (var k = 0, E = g.length; k < E; p = g[k++])
              f = f[p] = Array.isArray(f[p]) ? [...f[p]] : { ...f[p] };
            if (u.items)
              for (var h = +p >= 0 ? p : 0, v = 0, b = u.items.length; v < b; v++)
                f[h + v] = Di(f[h + v], u.items[v]);
            else u.data !== void 0 && (f[p] = Di(f[p], u.data));
          };
          for (var m of s) d(m);
        } else (c.data = t.data || e.data), (i = t.errors || i);
        return {
          operation: e.operation,
          data: c.data,
          error: i.length ? new El({ graphQLErrors: i, response: n }) : void 0,
          extensions: l ? o : void 0,
          hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
          stale: !1,
        };
      },
      ws = (e, t, n) => ({
        operation: e,
        data: void 0,
        error: new El({ networkError: t, response: n }),
        extensions: void 0,
        hasNext: !1,
        stale: !1,
      });
    function Bu(e) {
      return {
        query:
          e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss
            ? void 0
            : bl(e.query),
        operationName: ks(e.query),
        variables: e.variables || void 0,
        extensions: e.extensions,
      };
    }
    var Pu = (e, t) => {
        var n = e.kind === "query" && e.context.preferGetMethod;
        if (!n || !t) return e.context.url;
        var r = new URL(e.context.url);
        for (var i in t) {
          var l = t[i];
          l && r.searchParams.set(i, typeof l == "object" ? er(l) : l);
        }
        var o = r.toString();
        return o.length > 2047 && n !== "force"
          ? ((e.context.preferGetMethod = !1), e.context.url)
          : o;
      },
      Vu = (e, t) => {
        if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
          var n = er(t),
            r = (s => {
              var c = new Map();
              return (tr !== kn || nr !== kn) && (Qt.clear(), Vi(c, "variables", s)), c;
            })(t.variables);
          if (r.size) {
            var i = new FormData();
            i.append("operations", n), i.append("map", er({ ...[...r.keys()].map(s => [s]) }));
            var l = 0;
            for (var o of r.values()) i.append("" + l++, o);
            return i;
          }
          return n;
        }
      },
      Du = (e, t) => {
        var n = {
            accept:
              e.kind === "subscription"
                ? "text/event-stream, multipart/mixed"
                : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed",
          },
          r =
            (typeof e.context.fetchOptions == "function"
              ? e.context.fetchOptions()
              : e.context.fetchOptions) || {};
        if (r.headers) for (var i in r.headers) n[i.toLowerCase()] = r.headers[i];
        var l = Vu(e, t);
        return (
          typeof l == "string" && !n["content-type"] && (n["content-type"] = "application/json"),
          { ...r, method: l ? "POST" : "GET", body: l, headers: n }
        );
      },
      Hu = typeof TextDecoder < "u" ? new TextDecoder() : null,
      ju = /boundary="?([^=";]+)"?/i,
      zu = /data: ?([^\n]+)/,
      Fo = e => (e.constructor.name === "Buffer" ? e.toString() : Hu.decode(e));
    async function* Oo(e) {
      if (e.body[Symbol.asyncIterator]) for await (var t of e.body) yield Fo(t);
      else {
        var n = e.body.getReader(),
          r;
        try {
          for (; !(r = await n.read()).done; ) yield Fo(r.value);
        } finally {
          n.cancel();
        }
      }
    }
    async function* Lo(e, t) {
      var n = "",
        r;
      for await (var i of e)
        for (n += i; (r = n.indexOf(t)) > -1; ) yield n.slice(0, r), (n = n.slice(r + t.length));
    }
    async function* Uu(e, t, n) {
      var r = !0,
        i = null,
        l;
      try {
        yield await Promise.resolve();
        var o = (l = await (e.context.fetch || fetch)(t, n)).headers.get("Content-Type") || "",
          s;
        /multipart\/mixed/i.test(o)
          ? (s = (async function* (m, u) {
              var p = m.match(ju),
                f = "--" + (p ? p[1] : "-"),
                g = !0,
                y;
              for await (var k of Lo(
                Oo(u),
                `\r
` + f,
              )) {
                if (g) {
                  g = !1;
                  var E = k.indexOf(f);
                  if (E > -1) k = k.slice(E + f.length);
                  else continue;
                }
                try {
                  yield (y = JSON.parse(
                    k.slice(
                      k.indexOf(`\r
\r
`) + 4,
                    ),
                  ));
                } catch (h) {
                  if (!y) throw h;
                }
                if (y && y.hasNext === !1) break;
              }
              y && y.hasNext !== !1 && (yield { hasNext: !1 });
            })(o, l))
          : /text\/event-stream/i.test(o)
            ? (s = (async function* (m) {
                var u;
                for await (var p of Lo(
                  Oo(m),
                  `

`,
                )) {
                  var f = p.match(zu);
                  if (f) {
                    var g = f[1];
                    try {
                      yield (u = JSON.parse(g));
                    } catch (y) {
                      if (!u) throw y;
                    }
                    if (u && u.hasNext === !1) break;
                  }
                }
                u && u.hasNext !== !1 && (yield { hasNext: !1 });
              })(l))
            : /text\//i.test(o)
              ? (s = (async function* (m) {
                  var u = await m.text();
                  try {
                    var p = JSON.parse(u);
                    yield p;
                  } catch {
                    throw new Error(u);
                  }
                })(l))
              : (s = (async function* (m) {
                  yield JSON.parse(await m.text());
                })(l));
        var c;
        for await (var d of s)
          d.pending && !i ? (c = d.pending) : d.pending && (c = [...c, ...d.pending]),
            (i = i ? Zu(i, d, l, c) : To(e, d, l)),
            (r = !1),
            yield i,
            (r = !0);
        i || (yield (i = To(e, {}, l)));
      } catch (m) {
        if (!r) throw m;
        yield ws(
          e,
          l && (l.status < 200 || l.status >= 300) && l.statusText ? new Error(l.statusText) : m,
          l,
        );
      }
    }
    function $u(e, t, n) {
      var r;
      return (
        typeof AbortController < "u" && (n.signal = (r = new AbortController()).signal),
        vl(() => {
          r && r.abort();
        })(Ve(i => !!i)(hs(Uu(e, t, n))))
      );
    }
    var Hi = (e, t) => {
      if (!e || typeof e != "object") return e;
      if (Array.isArray(e)) return e.map(i => Hi(i));
      if (e && typeof e == "object" && (t || "__typename" in e)) {
        var n = {};
        for (var r in e)
          r === "__typename"
            ? Object.defineProperty(n, "__typename", { enumerable: !1, value: e.__typename })
            : (n[r] = Hi(e[r]));
        return n;
      } else return e;
    };
    function Ro(e) {
      var t = n => e(n);
      return (
        (t.toPromise = () => yl(_r(1)(Ve(n => !n.stale && !n.hasNext)(t)))),
        (t.then = (n, r) => t.toPromise().then(n, r)),
        (t.subscribe = n => En(n)(t)),
        t
      );
    }
    function ar(e, t, n) {
      return { ...t, kind: e, context: t.context ? { ...t.context, ...n } : n || t.context };
    }
    var Wu = () => {},
      Gu =
        ({ forward: e, dispatchDebug: t }) =>
        n => {
          var r = Ka(l => {
              var o = Bu(l),
                s = Pu(l, o),
                c = Du(l, o),
                d = ms(Ve(m => m.kind === "teardown" && m.key === l.key)(n))($u(l, s, c));
              return d;
            })(
              Ve(
                l =>
                  l.kind !== "teardown" &&
                  (l.kind !== "subscription" || !!l.context.fetchSubscriptions),
              )(n),
            ),
            i = e(
              Ve(
                l =>
                  l.kind === "teardown" ||
                  (l.kind === "subscription" && !l.context.fetchSubscriptions),
              )(n),
            );
          return ta([r, i]);
        },
      qu =
        e =>
        ({ client: t, forward: n, dispatchDebug: r }) =>
          e.reduceRight(
            (i, l) =>
              l({
                client: t,
                forward(o) {
                  return na(i(na(o)));
                },
                dispatchDebug(o) {},
              }),
            n,
          ),
      Yu =
        ({ onOperation: e, onResult: t, onError: n }) =>
        ({ forward: r }) =>
        i =>
          Ka(l => {
            n && l.error && n(l.error, l.operation);
            var o = (t && t(l)) || l;
            return "then" in o ? xo(o) : Kn(o);
          })(
            r(
              Ka(l => {
                var o = (e && e(l)) || l;
                return "then" in o ? xo(o) : Kn(o);
              })(i),
            ),
          ),
      Qu =
        ({ dispatchDebug: e }) =>
        t =>
          Ve(n => !1)(t),
      Ku = function e(t) {
        var n = 0,
          r = new Map(),
          i = new Map(),
          l = new Set(),
          o = [],
          s = {
            url: t.url,
            fetchSubscriptions: t.fetchSubscriptions,
            fetchOptions: t.fetchOptions,
            fetch: t.fetch,
            preferGetMethod: t.preferGetMethod,
            requestPolicy: t.requestPolicy || "cache-first",
          },
          c = Zi();
        function d(h) {
          (h.kind === "mutation" || h.kind === "teardown" || !l.has(h.key)) &&
            (h.kind === "teardown" ? l.delete(h.key) : h.kind !== "mutation" && l.add(h.key),
            c.next(h));
        }
        var m = !1;
        function u(h) {
          if ((h && d(h), !m)) {
            for (m = !0; m && (h = o.shift()); ) d(h);
            m = !1;
          }
        }
        var p = h => {
            var v = ms(Ve(b => b.kind === "teardown" && b.key === h.key)(c.source))(
              Ve(
                b =>
                  b.operation.kind === h.kind &&
                  b.operation.key === h.key &&
                  (!b.operation.context._instance ||
                    b.operation.context._instance === h.context._instance),
              )(E),
            );
            return (
              t.maskTypename && (v = Ri(b => ({ ...b, data: Hi(b.data, !0) }))(v)),
              h.kind !== "query"
                ? (v = ps(b => !!b.hasNext, !0)(v))
                : (v = So(b => {
                    var C = Kn(b);
                    return b.stale || b.hasNext
                      ? C
                      : ta([
                          C,
                          Ri(() => ((b.stale = !0), b))(_r(1)(Ve(O => O.key === h.key)(c.source))),
                        ]);
                  })(v)),
              h.kind !== "mutation"
                ? (v = vl(() => {
                    l.delete(h.key), r.delete(h.key), i.delete(h.key), (m = !1);
                    for (var b = o.length - 1; b >= 0; b--) o[b].key === h.key && o.splice(b, 1);
                    d(ar("teardown", h, h.context));
                  })(
                    Ja(b => {
                      if (b.stale) {
                        for (var C of o)
                          if (C.key === b.operation.key) {
                            l.delete(C.key);
                            break;
                          }
                      } else b.hasNext || l.delete(h.key);
                      r.set(h.key, b);
                    })(v),
                  ))
                : (v = Ii(() => {
                    d(h);
                  })(v)),
              na(v)
            );
          },
          f = this instanceof e ? this : Object.create(e.prototype),
          g = Object.assign(f, {
            suspense: !!t.suspense,
            operations$: c.source,
            reexecuteOperation(h) {
              if (h.kind === "teardown") u(h);
              else if (h.kind === "mutation" || i.has(h.key)) {
                for (var v = !1, b = 0; b < o.length; b++) v = v || o[b].key === h.key;
                v || l.delete(h.key), o.push(h), Promise.resolve().then(u);
              }
            },
            createRequestOperation(h, v, b) {
              return (
                b || (b = {}),
                ar(h, v, {
                  _instance: h === "mutation" ? (n = (n + 1) | 0) : void 0,
                  ...s,
                  ...b,
                  requestPolicy: b.requestPolicy || s.requestPolicy,
                  suspense: b.suspense || (b.suspense !== !1 && g.suspense),
                })
              );
            },
            executeRequestOperation(h) {
              return h.kind === "mutation"
                ? Ro(p(h))
                : Ro(
                    su(() => {
                      var v = i.get(h.key);
                      v || i.set(h.key, (v = p(h))),
                        (v = Ii(() => {
                          u(h);
                        })(v));
                      var b = r.get(h.key);
                      return h.kind === "query" && b && (b.stale || b.hasNext)
                        ? So(Kn)(ta([v, Ve(C => C === r.get(h.key))(Kn(b))]))
                        : v;
                    }),
                  );
            },
            executeQuery(h, v) {
              var b = g.createRequestOperation("query", h, v);
              return g.executeRequestOperation(b);
            },
            executeSubscription(h, v) {
              var b = g.createRequestOperation("subscription", h, v);
              return g.executeRequestOperation(b);
            },
            executeMutation(h, v) {
              var b = g.createRequestOperation("mutation", h, v);
              return g.executeRequestOperation(b);
            },
            readQuery(h, v, b) {
              var C = null;
              return (
                En(O => {
                  C = O;
                })(g.query(h, v, b)).unsubscribe(),
                C
              );
            },
            query: (h, v, b) => g.executeQuery(vn(h, v), b),
            subscription: (h, v, b) => g.executeSubscription(vn(h, v), b),
            mutation: (h, v, b) => g.executeMutation(vn(h, v), b),
          }),
          y = Wu,
          k = qu(t.exchanges),
          E = na(k({ client: g, dispatchDebug: y, forward: Qu({ dispatchDebug: y }) })(c.source));
        return uu(E), g;
      },
      ui = (e, t) => ar(e.kind, e, { ...e.context, authAttempt: t });
    function Ju(e) {
      return ({ client: t, forward: n }) => {
        var r = new Set(),
          i = Zi(),
          l = Zi(),
          o = new Map();
        function s() {
          d = void 0;
          var u = o;
          (o = new Map()), u.forEach(i.next);
        }
        function c(u) {
          d = void 0;
          var p = o;
          (o = new Map()),
            p.forEach(f => {
              l.next(ws(f, u));
            });
        }
        var d,
          m = null;
        return u => {
          function p() {
            d = Promise.resolve()
              .then(() =>
                e({
                  mutate(E, h, v) {
                    var b = t.createRequestOperation("mutation", vn(E, h), v);
                    return yl(
                      _r(1)(
                        Ve(
                          C =>
                            C.operation.key === b.key &&
                            b.context._instance === C.operation.context._instance,
                        )(
                          Ii(() => {
                            var C = g(b);
                            r.add(C.context._instance), i.next(C);
                          })(k),
                        ),
                      ),
                    );
                  },
                  appendHeaders(E, h) {
                    var v =
                      typeof E.context.fetchOptions == "function"
                        ? E.context.fetchOptions()
                        : E.context.fetchOptions || {};
                    return ar(E.kind, E, {
                      ...E.context,
                      fetchOptions: { ...v, headers: { ...v.headers, ...h } },
                    });
                  },
                }),
              )
              .then(E => {
                E && (m = E), s();
              })
              .catch(E => {
                c(E);
              });
          }
          p();
          function f(E) {
            o.set(E.key, ui(E, !0)), m && !d && (d = m.refreshAuth().then(s).catch(c));
          }
          function g(E) {
            return m ? m.addAuthToOperation(E) : E;
          }
          var y = Ve(Boolean)(
              Ri(E =>
                E.kind === "teardown"
                  ? (o.delete(E.key), E)
                  : E.context._instance && r.has(E.context._instance)
                    ? E
                    : E.context.authAttempt
                      ? g(E)
                      : d || !m
                        ? (d || p(), o.has(E.key) || o.set(E.key, ui(E, !1)), null)
                        : (function (h) {
                              return (
                                !h.context.authAttempt && m && m.willAuthError && m.willAuthError(h)
                              );
                            })(E)
                          ? (f(E), null)
                          : g(ui(E, !1)),
              )(ta([i.source, u])),
            ),
            k = n(y);
          return ta([
            l.source,
            Ve(E =>
              !r.has(E.operation.context._instance) &&
              E.error &&
              (function (h) {
                return m && m.didAuthError && m.didAuthError(h.error, h.operation);
              })(E) &&
              !E.operation.context.authAttempt
                ? (f(E.operation), !1)
                : (r.has(E.operation.context._instance) && r.delete(E.operation.context._instance),
                  !0),
            )(k),
          ]);
        };
      };
    }
    var Xu = {},
      Fr = qe(Xu),
      e2 = Fr.Provider;
    Fr.Consumer;
    Fr.displayName = "UrqlContext";
    var kl = () => {
        var e = zt(Fr);
        return e;
      },
      ji = {
        fetching: !1,
        stale: !1,
        error: void 0,
        data: void 0,
        extensions: void 0,
        operation: void 0,
      },
      t2 = (e, t) => e === t || !(!e || !t || e.key !== t.key),
      mi = (e, t) => {
        var n = {
          ...e,
          ...t,
          data: t.data !== void 0 || t.error ? t.data : e.data,
          fetching: !!t.fetching,
          stale: !!t.stale,
        };
        return ((r, i) => {
          for (var l in r) if (!(l in i)) return !0;
          for (var o in i) if (o === "operation" ? !t2(r[o], i[o]) : r[o] !== i[o]) return !0;
          return !1;
        })(e, n)
          ? n
          : e;
      },
      n2 = (e, t) => {
        for (var n = 0, r = t.length; n < r; n++) if (e[n] !== t[n]) return !0;
        return !1;
      };
    function rr(e, t) {
      e(t);
    }
    function Cs(e) {
      var t = Ne(!0),
        n = kl(),
        [r, i] = Me(ji),
        l = H(
          (o, s) => (
            rr(i, { ...ji, fetching: !0 }),
            yl(
              _r(1)(
                Ve(c => !c.hasNext)(
                  Ja(c => {
                    t.current &&
                      rr(i, {
                        fetching: !1,
                        stale: c.stale,
                        data: c.data,
                        error: c.error,
                        extensions: c.extensions,
                        operation: c.operation,
                      });
                  })(n.executeMutation(vn(e, o), s || {})),
                ),
              ),
            )
          ),
          [n, e, i],
        );
      return (
        X(
          () => (
            (t.current = !0),
            () => {
              t.current = !1;
            }
          ),
          [],
        ),
        [r, l]
      );
    }
    function a2(e, t) {
      var n = Ne(void 0);
      return wt(() => {
        var r = vn(e, t);
        return n.current !== void 0 && n.current.key === r.key ? n.current : ((n.current = r), r);
      }, [e, t]);
    }
    var r2 = e => {
        if (!e._react) {
          var t = new Set(),
            n = new Map();
          e.operations$ &&
            En(r => {
              r.kind === "teardown" && t.has(r.key) && (t.delete(r.key), n.delete(r.key));
            })(e.operations$),
            (e._react = {
              get: r => n.get(r),
              set(r, i) {
                t.delete(r), n.set(r, i);
              },
              dispose(r) {
                t.add(r);
              },
            });
        }
        return e._react;
      },
      i2 = (e, t) => (t && t.suspense !== void 0 ? !!t.suspense : e.suspense);
    function wl(e) {
      var t = kl(),
        n = r2(t),
        r = i2(t, e.context),
        i = a2(e.query, e.variables),
        l = wt(() => {
          if (e.pause) return null;
          var p = t.executeQuery(i, { requestPolicy: e.requestPolicy, ...e.context });
          return r
            ? Ja(f => {
                n.set(i.key, f);
              })(p)
            : p;
        }, [n, t, i, r, e.pause, e.requestPolicy, e.context]),
        o = H(
          (p, f) => {
            if (!p) return { fetching: !1 };
            var g = n.get(i.key);
            if (g) {
              if (f && g != null && "then" in g) throw g;
            } else {
              var y,
                k = En(h => {
                  (g = h), y && y(g);
                })(ps(() => (f && !y) || !g)(p));
              if (g == null && f) {
                var E = new Promise(h => {
                  y = h;
                });
                throw (n.set(i.key, E), E);
              } else k.unsubscribe();
            }
            return g || { fetching: !0 };
          },
          [n, i],
        ),
        s = [t, i, e.requestPolicy, e.context, e.pause],
        [c, d] = Me(() => [l, mi(ji, o(l, r)), s]),
        m = c[1];
      l !== c[0] && n2(c[2], s) && d([l, (m = mi(c[1], o(l, r))), s]),
        X(() => {
          var p = c[0],
            f = c[2][1],
            g = !1,
            y = E => {
              (g = !0),
                rr(d, h => {
                  var v = mi(h[1], E);
                  return h[1] !== v ? [h[0], v, h[2]] : h;
                });
            };
          if (p) {
            var k = En(y)(
              vl(() => {
                y({ fetching: !1 });
              })(p),
            );
            return (
              g || y({ fetching: !0 }),
              () => {
                n.dispose(f.key), k.unsubscribe();
              }
            );
          } else y({ fetching: !1 });
        }, [n, c[0], c[2][1]]);
      var u = H(
        p => {
          var f = { requestPolicy: e.requestPolicy, ...e.context, ...p };
          rr(d, g => [
            r
              ? Ja(y => {
                  n.set(i.key, y);
                })(t.executeQuery(i, f))
              : t.executeQuery(i, f),
            g[1],
            s,
          ]);
        },
        [t, n, i, r, e.requestPolicy, e.context, e.pause],
      );
      return [m, u];
    }
    var Ra,
      l2 = new Uint8Array(16);
    function o2() {
      if (
        !Ra &&
        ((Ra =
          typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
        !Ra)
      )
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
        );
      return Ra(l2);
    }
    var xe = [];
    for (let e = 0; e < 256; ++e) xe.push((e + 256).toString(16).slice(1));
    function s2(e, t = 0) {
      return (
        xe[e[t + 0]] +
        xe[e[t + 1]] +
        xe[e[t + 2]] +
        xe[e[t + 3]] +
        "-" +
        xe[e[t + 4]] +
        xe[e[t + 5]] +
        "-" +
        xe[e[t + 6]] +
        xe[e[t + 7]] +
        "-" +
        xe[e[t + 8]] +
        xe[e[t + 9]] +
        "-" +
        xe[e[t + 10]] +
        xe[e[t + 11]] +
        xe[e[t + 12]] +
        xe[e[t + 13]] +
        xe[e[t + 14]] +
        xe[e[t + 15]]
      );
    }
    var c2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      Io = { randomUUID: c2 };
    function d2(e, t, n) {
      if (Io.randomUUID && !t && !e) return Io.randomUUID();
      e = e || {};
      let r = e.random || (e.rng || o2)();
      if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
        n = n || 0;
        for (let i = 0; i < 16; ++i) t[n + i] = r[i];
        return t;
      }
      return s2(r);
    }
    var u2 = d2,
      ut,
      Jn,
      ir = e => {
        try {
          let { exp: t } = e ? JSON.parse(atob(e.split(".")[1])) : { exp: null };
          (ut = e), (Jn = t);
        } catch {
          (ut = null), (Jn = null);
        }
        ut ? localStorage.setItem(Fi, ut) : localStorage.removeItem(Fi);
      };
    ir(localStorage.getItem(Fi));
    var Cl = () => {
        let [{ token: e }, t] = ql(`${Z}/accessToken`, { token: ut }),
          n = a.useCallback(
            r => {
              ir(r), t({ token: ut });
            },
            [t],
          );
        return [e, n];
      },
      m2 = u2(),
      Ss = e => ({
        headers: {
          Accept: "*/*",
          ...(e && { Authorization: `Bearer ${e}` }),
          "X-Chromatic-Session-ID": m2,
        },
      }),
      xs = e =>
        new Ku({
          url: s5,
          exchanges: [
            Yu({
              onResult(t) {
                t.data?.viewer === null && ir(null);
              },
            }),
            Ju(async t => ({
              addAuthToOperation(n) {
                return ut ? t.appendHeaders(n, { Authorization: `Bearer ${ut}` }) : n;
              },
              didAuthError: n =>
                n.response?.status === 401 ||
                n.graphQLErrors.some(r => r.message.includes("Must login")),
              async refreshAuth() {
                ir(null);
              },
              willAuthError() {
                if (!ut) return !0;
                try {
                  if (!Jn) {
                    let { exp: n } = JSON.parse(atob(ut.split(".")[1]));
                    Jn = n;
                  }
                  return Date.now() / 1e3 > (Jn || 0);
                } catch {
                  return !0;
                }
              },
            })),
            Gu,
          ],
          fetchOptions: Ss(),
          ...e,
        }),
      p2 = ({ children: e, value: t = xs() }) => a.createElement(e2, { value: t }, e),
      bt = (e, t) => {
        let n = zt(e);
        if (n == null) throw new Error(`Missing context value for ${t}`);
        return n;
      },
      ba = qe(null),
      h2 = ({ children: e, value: t }) => a.createElement(ba.Provider, { value: t }, e),
      We = (e, t) => {
        let n = bt(ba, "Telemetry");
        X(() => n({ location: e, screen: t }), [e, t, n]);
      },
      Pn = new Map(),
      zi = (e, t, n, r = !0) => {
        let i = () => {
            window.clearTimeout(Pn.get(e)), Pn.delete(e);
          },
          l = (...o) => {
            Pn.has(e) ? i() : r && t(...o),
              Pn.set(
                e,
                window.setTimeout(() => Pn.delete(e) && t(...o), n),
              );
          };
        return (l.cancel = i), l;
      },
      Sl = ({ localBuildProgress: e, accessToken: t }) => {
        let n = Ln({}),
          r = zt(ba),
          [i, l] = Me(!1),
          [o, s] = Me(!1),
          c = e ? ["initialize", "build", "upload"].includes(e?.currentStep) : !1,
          d = e ? !["aborted", "complete", "error", "limited"].includes(e.currentStep) : i,
          m = wt(
            () =>
              zi(
                "startBuild",
                () => {
                  s(!1), l(!0), n(m5, { accessToken: t }), r?.({ action: "startBuild" });
                },
                1e3,
                !1,
              ),
            [t, n, r],
          ),
          u = wt(
            () =>
              zi(
                "startBuild",
                () => {
                  c ? (l(!1), n(p5), r?.({ action: "stopBuild" })) : s(!0);
                },
                1e3,
                !1,
              ),
            [c, n, r],
          );
        return (
          X(() => {
            let p = i && setTimeout(() => l(!1), 5e3);
            return () => {
              p && clearTimeout(p);
            };
          }, [i]),
          { isDisallowed: o, isRunning: d, startBuild: m, stopBuild: u }
        );
      },
      Zo = "experimental_useSharedState_getValue",
      Ia = "experimental_useSharedState_setValue",
      pi = new Map(),
      Ns = class {
        constructor(e) {
          (this.channel = e),
            (this.listeners = []),
            (this.state = {}),
            this.channel.on(Ia, (t, n, r) => {
              this.state?.[t]?.index >= r || (this.state[t] = { index: r, value: n });
            }),
            this.channel.on(Zo, t => {
              let n = this.state[t]?.index ?? 0,
                r = this.state[t]?.value;
              this.channel.emit(Ia, t, r, n);
            });
        }
        get(e) {
          return this.state[e] || this.channel.emit(Zo, e), this.state[e]?.value;
        }
        set(e, t) {
          let n = (this.state[e]?.index ?? 0) + 1;
          (this.state[e] = { index: n, value: t }), this.channel.emit(Ia, e, t, n);
        }
        static subscribe(e, t) {
          let n = pi.get(e) || new Ns(t);
          return (
            pi.has(e) ||
              (pi.set(e, n),
              n.channel.on(Ia, (r, i) => {
                r === e && n.listeners.forEach(l => l(i));
              })),
            {
              get value() {
                return n.get(e);
              },
              set value(r) {
                n.set(e, r);
              },
              on(r, i) {
                if (r !== "change") throw new Error("unsupported event");
                n.listeners.push(i);
              },
              off(r, i) {
                if (r !== "change") throw new Error("unsupported event");
                let l = n.listeners.indexOf(i);
                l >= 0 && n.listeners.splice(l, 1);
              },
            }
          );
        }
      };
    function Ee(e) {
      let t = cn().getChannel();
      if (!t) throw new Error("Channel not available");
      let n = Ne(Ns.subscribe(e, t)),
        [r, i] = Me(n.current.value);
      return (
        X(() => {
          let l = n.current;
          return l.on("change", i), () => l.off("change", i);
        }, [n]),
        [
          r,
          H(l => {
            i(l), (n.current.value = l);
          }, []),
        ]
      );
    }
    var xl = () => {
        let [e, t] = Ee(ns),
          { projectId: n, written: r, dismissed: i, configFile: l } = e || {};
        return {
          loading: !e,
          projectId: n,
          configFile: l,
          updateProject: H(o => t({ ...e, projectId: o, dismissed: !1 }), [e, t]),
          projectUpdatingFailed: !i && r === !1,
          projectIdUpdated: !i && r === !0,
          clearProjectIdUpdated: H(() => t({ ...e, dismissed: !0 }), [e, t]),
        };
      },
      Ui = ["initialize", "build", "upload", "verify", "snapshot"],
      Nl = {
        initialize: {
          key: "initialize",
          emoji: "\u{1F680}",
          renderName: () => "Initialize build",
          renderProgress: () => "Initializing build...",
          renderComplete: () => "Initialized",
          estimateDuration: 2e3,
        },
        build: {
          key: "build",
          emoji: "\u{1F3D7}",
          renderName: () => "Build Storybook",
          renderProgress: () => "Building your Storybook...",
          renderComplete: () => "Storybook built",
          estimateDuration: 2e4,
        },
        upload: {
          key: "upload",
          emoji: "\u{1F4E1}",
          renderName: () => "Publish your Storybook",
          renderProgress: ({ stepProgress: e }) => {
            let { numerator: t, denominator: n } = e.upload;
            if (!n || !t) return "Uploading files...";
            let { value: r, exponent: i } = ti(n, { output: "object", round: 1 }),
              { value: l, symbol: o } = ti(t, { exponent: i, output: "object", round: 1 });
            return `Uploading files... ${l}/${r} ${o}`;
          },
          renderComplete: () => "Publish complete",
          estimateDuration: 2e4,
        },
        verify: {
          key: "verify",
          emoji: "\u{1F50D}",
          renderName: () => "Verify your Storybook",
          renderProgress: () => "Verifying contents...",
          renderComplete: () => "Storybook verified",
          estimateDuration: 2e4,
        },
        snapshot: {
          key: "snapshot",
          emoji: "\u{1F4F8}",
          renderName: () => "Run visual tests",
          renderProgress: ({ stepProgress: e }) => {
            let { numerator: t, denominator: n } = e.snapshot;
            return n ? `Running visual tests... ${t}/${n}` : "Running visual tests...";
          },
          renderComplete: () => "Tested your stories",
          estimateDuration: 9e4,
        },
        aborted: {
          key: "aborted",
          emoji: "\u270B",
          renderName: () => "Build canceled",
          renderProgress: () => "Build canceled",
          renderComplete: () => "Build canceled",
          estimateDuration: 0,
        },
        complete: {
          key: "complete",
          emoji: "\u{1F389}",
          renderName: () => "Visual tests completed!",
          renderProgress: () => "Visual tests completed!",
          renderComplete: () => "Visual tests completed!",
          estimateDuration: 0,
        },
        error: {
          key: "error",
          emoji: "\u{1F6A8}",
          renderName: () => "Build failed",
          renderProgress: () => "Build failed",
          renderComplete: () => "Build failed",
          estimateDuration: 0,
        },
        limited: {
          key: "error",
          emoji: "\u{1F6A8}",
          renderName: () => "Build limited",
          renderProgress: () => "Build limited",
          renderComplete: () => "Build limited",
          estimateDuration: 0,
        },
      },
      f2 = {
        buildProgressPercentage: 0,
        currentStep: Ui[0],
        stepProgress: Object.fromEntries(Ui.map(e => [e, {}])),
      };
    JSON.stringify(f2);
    var j = w.div(
        ({ center: e, small: t, block: n, theme: r }) => ({
          display: n ? "block" : "inline-block",
          color: r.color.defaultText,
          fontSize: t ? r.typography.size.s1 : r.typography.size.s2,
          lineHeight: t ? "18px" : "20px",
          textAlign: e ? "center" : "left",
          textWrap: "balance",
        }),
        ({ muted: e, theme: t }) => e && { color: t.base === "light" ? t.color.dark : "#C9CDCF" },
        ({ theme: e }) => ({
          b: { color: e.color.defaultText },
          code: {
            fontSize: e.typography.size.s1,
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: 3,
            padding: 2,
          },
          small: { fontSize: e.typography.size.s1 },
          span: { whiteSpace: "nowrap" },
          svg: { verticalAlign: "top" },
        }),
      ),
      Ml = ({ localBuildProgress: e, withEmoji: t = !1, ...n }) => {
        let { emoji: r, renderProgress: i } = Nl[e.currentStep],
          l = i(e);
        return a.createElement(j, { ...n }, t && r, " ", l);
      };
    function lr() {
      return (
        (lr = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        lr.apply(this, arguments)
      );
    }
    function g2(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function aa(e, t) {
      return (
        (aa = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n;
            }),
        aa(e, t)
      );
    }
    function v2(e, t) {
      (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), aa(e, t);
    }
    function $i(e) {
      return (
        ($i = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        $i(e)
      );
    }
    function y2(e) {
      try {
        return Function.toString.call(e).indexOf("[native code]") !== -1;
      } catch {
        return typeof e == "function";
      }
    }
    function Ms() {
      try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      } catch {}
      return (Ms = function () {
        return !!e;
      })();
    }
    function E2(e, t, n) {
      if (Ms()) return Reflect.construct.apply(null, arguments);
      var r = [null];
      r.push.apply(r, t);
      var i = new (e.bind.apply(e, r))();
      return n && aa(i, n.prototype), i;
    }
    function Wi(e) {
      var t = typeof Map == "function" ? new Map() : void 0;
      return (
        (Wi = function (n) {
          if (n === null || !y2(n)) return n;
          if (typeof n != "function")
            throw new TypeError("Super expression must either be null or a function");
          if (typeof t < "u") {
            if (t.has(n)) return t.get(n);
            t.set(n, r);
          }
          function r() {
            return E2(n, arguments, $i(this).constructor);
          }
          return (
            (r.prototype = Object.create(n.prototype, {
              constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
            })),
            aa(r, n)
          );
        }),
        Wi(e)
      );
    }
    var mt = (function (e) {
      v2(t, e);
      function t(n) {
        var r;
        return (
          (r =
            e.call(
              this,
              "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
                n +
                " for more information.",
            ) || this),
          g2(r)
        );
      }
      return t;
    })(Wi(Error));
    function hi(e) {
      return Math.round(e * 255);
    }
    function b2(e, t, n) {
      return hi(e) + "," + hi(t) + "," + hi(n);
    }
    function ra(e, t, n, r) {
      if ((r === void 0 && (r = b2), t === 0)) return r(n, n, n);
      var i = (((e % 360) + 360) % 360) / 60,
        l = (1 - Math.abs(2 * n - 1)) * t,
        o = l * (1 - Math.abs((i % 2) - 1)),
        s = 0,
        c = 0,
        d = 0;
      i >= 0 && i < 1
        ? ((s = l), (c = o))
        : i >= 1 && i < 2
          ? ((s = o), (c = l))
          : i >= 2 && i < 3
            ? ((c = l), (d = o))
            : i >= 3 && i < 4
              ? ((c = o), (d = l))
              : i >= 4 && i < 5
                ? ((s = o), (d = l))
                : i >= 5 && i < 6 && ((s = l), (d = o));
      var m = n - l / 2,
        u = s + m,
        p = c + m,
        f = d + m;
      return r(u, p, f);
    }
    var Bo = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "639",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32",
    };
    function k2(e) {
      if (typeof e != "string") return e;
      var t = e.toLowerCase();
      return Bo[t] ? "#" + Bo[t] : e;
    }
    var w2 = /^#[a-fA-F0-9]{6}$/,
      C2 = /^#[a-fA-F0-9]{8}$/,
      S2 = /^#[a-fA-F0-9]{3}$/,
      x2 = /^#[a-fA-F0-9]{4}$/,
      fi = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      N2 =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      M2 =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      A2 =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
    function As(e) {
      if (typeof e != "string") throw new mt(3);
      var t = k2(e);
      if (t.match(w2))
        return {
          red: parseInt("" + t[1] + t[2], 16),
          green: parseInt("" + t[3] + t[4], 16),
          blue: parseInt("" + t[5] + t[6], 16),
        };
      if (t.match(C2)) {
        var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
        return {
          red: parseInt("" + t[1] + t[2], 16),
          green: parseInt("" + t[3] + t[4], 16),
          blue: parseInt("" + t[5] + t[6], 16),
          alpha: n,
        };
      }
      if (t.match(S2))
        return {
          red: parseInt("" + t[1] + t[1], 16),
          green: parseInt("" + t[2] + t[2], 16),
          blue: parseInt("" + t[3] + t[3], 16),
        };
      if (t.match(x2)) {
        var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
        return {
          red: parseInt("" + t[1] + t[1], 16),
          green: parseInt("" + t[2] + t[2], 16),
          blue: parseInt("" + t[3] + t[3], 16),
          alpha: r,
        };
      }
      var i = fi.exec(t);
      if (i)
        return {
          red: parseInt("" + i[1], 10),
          green: parseInt("" + i[2], 10),
          blue: parseInt("" + i[3], 10),
        };
      var l = N2.exec(t.substring(0, 50));
      if (l)
        return {
          red: parseInt("" + l[1], 10),
          green: parseInt("" + l[2], 10),
          blue: parseInt("" + l[3], 10),
          alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4]),
        };
      var o = M2.exec(t);
      if (o) {
        var s = parseInt("" + o[1], 10),
          c = parseInt("" + o[2], 10) / 100,
          d = parseInt("" + o[3], 10) / 100,
          m = "rgb(" + ra(s, c, d) + ")",
          u = fi.exec(m);
        if (!u) throw new mt(4, t, m);
        return {
          red: parseInt("" + u[1], 10),
          green: parseInt("" + u[2], 10),
          blue: parseInt("" + u[3], 10),
        };
      }
      var p = A2.exec(t.substring(0, 50));
      if (p) {
        var f = parseInt("" + p[1], 10),
          g = parseInt("" + p[2], 10) / 100,
          y = parseInt("" + p[3], 10) / 100,
          k = "rgb(" + ra(f, g, y) + ")",
          E = fi.exec(k);
        if (!E) throw new mt(4, t, k);
        return {
          red: parseInt("" + E[1], 10),
          green: parseInt("" + E[2], 10),
          blue: parseInt("" + E[3], 10),
          alpha: parseFloat("" + p[4]) > 1 ? parseFloat("" + p[4]) / 100 : parseFloat("" + p[4]),
        };
      }
      throw new mt(5);
    }
    function _2(e) {
      var t = e.red / 255,
        n = e.green / 255,
        r = e.blue / 255,
        i = Math.max(t, n, r),
        l = Math.min(t, n, r),
        o = (i + l) / 2;
      if (i === l)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: o, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: o };
      var s,
        c = i - l,
        d = o > 0.5 ? c / (2 - i - l) : c / (i + l);
      switch (i) {
        case t:
          s = (n - r) / c + (n < r ? 6 : 0);
          break;
        case n:
          s = (r - t) / c + 2;
          break;
        default:
          s = (t - n) / c + 4;
          break;
      }
      return (
        (s *= 60),
        e.alpha !== void 0
          ? { hue: s, saturation: d, lightness: o, alpha: e.alpha }
          : { hue: s, saturation: d, lightness: o }
      );
    }
    function _s(e) {
      return _2(As(e));
    }
    var T2 = function (e) {
        return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
          ? "#" + e[1] + e[3] + e[5]
          : e;
      },
      Gi = T2;
    function Wt(e) {
      var t = e.toString(16);
      return t.length === 1 ? "0" + t : t;
    }
    function gi(e) {
      return Wt(Math.round(e * 255));
    }
    function F2(e, t, n) {
      return Gi("#" + gi(e) + gi(t) + gi(n));
    }
    function or(e, t, n) {
      return ra(e, t, n, F2);
    }
    function O2(e, t, n) {
      if (typeof e == "number" && typeof t == "number" && typeof n == "number") return or(e, t, n);
      if (typeof e == "object" && t === void 0 && n === void 0)
        return or(e.hue, e.saturation, e.lightness);
      throw new mt(1);
    }
    function L2(e, t, n, r) {
      if (
        typeof e == "number" &&
        typeof t == "number" &&
        typeof n == "number" &&
        typeof r == "number"
      )
        return r >= 1 ? or(e, t, n) : "rgba(" + ra(e, t, n) + "," + r + ")";
      if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
        return e.alpha >= 1
          ? or(e.hue, e.saturation, e.lightness)
          : "rgba(" + ra(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
      throw new mt(2);
    }
    function qi(e, t, n) {
      if (typeof e == "number" && typeof t == "number" && typeof n == "number")
        return Gi("#" + Wt(e) + Wt(t) + Wt(n));
      if (typeof e == "object" && t === void 0 && n === void 0)
        return Gi("#" + Wt(e.red) + Wt(e.green) + Wt(e.blue));
      throw new mt(6);
    }
    function Yi(e, t, n, r) {
      if (typeof e == "string" && typeof t == "number") {
        var i = As(e);
        return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + t + ")";
      } else {
        if (
          typeof e == "number" &&
          typeof t == "number" &&
          typeof n == "number" &&
          typeof r == "number"
        )
          return r >= 1 ? qi(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
        if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
          return e.alpha >= 1
            ? qi(e.red, e.green, e.blue)
            : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
      }
      throw new mt(7);
    }
    var R2 = function (e) {
        return (
          typeof e.red == "number" &&
          typeof e.green == "number" &&
          typeof e.blue == "number" &&
          (typeof e.alpha != "number" || typeof e.alpha > "u")
        );
      },
      I2 = function (e) {
        return (
          typeof e.red == "number" &&
          typeof e.green == "number" &&
          typeof e.blue == "number" &&
          typeof e.alpha == "number"
        );
      },
      Z2 = function (e) {
        return (
          typeof e.hue == "number" &&
          typeof e.saturation == "number" &&
          typeof e.lightness == "number" &&
          (typeof e.alpha != "number" || typeof e.alpha > "u")
        );
      },
      B2 = function (e) {
        return (
          typeof e.hue == "number" &&
          typeof e.saturation == "number" &&
          typeof e.lightness == "number" &&
          typeof e.alpha == "number"
        );
      };
    function Ts(e) {
      if (typeof e != "object") throw new mt(8);
      if (I2(e)) return Yi(e);
      if (R2(e)) return qi(e);
      if (B2(e)) return L2(e);
      if (Z2(e)) return O2(e);
      throw new mt(8);
    }
    function Fs(e, t, n) {
      return function () {
        var r = n.concat(Array.prototype.slice.call(arguments));
        return r.length >= t ? e.apply(this, r) : Fs(e, t, r);
      };
    }
    function Os(e) {
      return Fs(e, e.length, []);
    }
    function Ls(e, t, n) {
      return Math.max(e, Math.min(t, n));
    }
    function P2(e, t) {
      if (t === "transparent") return t;
      var n = _s(t);
      return Ts(lr({}, n, { lightness: Ls(0, 1, n.lightness - parseFloat(e)) }));
    }
    var V2 = Os(P2),
      Gt = V2;
    function D2(e, t) {
      if (t === "transparent") return t;
      var n = _s(t);
      return Ts(lr({}, n, { lightness: Ls(0, 1, n.lightness + parseFloat(e)) }));
    }
    var H2 = Os(D2),
      qa = H2,
      V = {
        primary: "#FF4785",
        secondary: "#029CFD",
        tertiary: "#E3E6E8",
        orange: "#FC521F",
        gold: "#FFAE00",
        green: "#66BF3C",
        seafoam: "#37D5D3",
        purple: "#6F2CAC",
        ultraviolet: "#2A0481",
        red: "#ff4400",
        bluelight: "#E3F3FF",
        bluelighter: "#F5FBFF",
        lightest: "#FFFFFF",
        lighter: "#F7FAFC",
        light: "#EEF3F6",
        mediumlight: "#ECF4F9",
        medium: "#D9E8F2",
        mediumdark: "#73828C",
        dark: "#5C6870",
        darker: "#454E54",
        darkest: "#2E3438",
        tr10: "rgba(0, 0, 0, 0.1)",
        tr5: "rgba(0, 0, 0, 0.05)",
        border: "hsla(203, 50%, 30%, 0.15)",
        positive: "#448028",
        negative: "#D43900",
        warning: "#A15C20",
        selected: "#0271B6",
      },
      Al = {
        padding: { small: 10, medium: 20, large: 30 },
        borderRadius: { small: 5, default: 10 },
      },
      P = {
        type: {
          primary:
            'var(--nunito-sans, "Nunito Sans"), "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
        },
        weight: { regular: "400", bold: "700", extrabold: "800" },
        size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 },
      },
      Za = 600,
      Ba = 5.55555;
    ue({
      padding: `0 ${Al.padding.medium}px`,
      [`@media (min-width: ${Za * 1}px)`]: { margin: `0 ${Ba * 1}%` },
      [`@media (min-width: ${Za * 2}px)`]: { margin: `0 ${Ba * 2}%` },
      [`@media (min-width: ${Za * 3}px)`]: { margin: `0 ${Ba * 3}%` },
      [`@media (min-width: ${Za * 4}px)`]: { margin: `0 ${Ba * 4}%` },
    });
    ue({
      border: `1px solid ${V.border}`,
      borderRadius: `${Al.borderRadius.small}px`,
      transition: "background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out",
      "&:hover, &.__hover": {
        borderColor: `${Yi(V.secondary, 0.5)}`,
        transform: "translate3d(0, -3px, 0)",
        boxShadow: "rgba(0, 0, 0, 0.08) 0 3px 10px 0",
      },
      "&:active, &.__active": {
        borderColor: `${Yi(V.secondary, 1)}`,
        transform: "translate3d(0, 0, 0)",
      },
    });
    ue({ fontSize: P.size.l3, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.l2, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.l1, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.m3, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.m2, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.m1, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.s3, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.s2, fontWeight: P.weight.bold });
    ue({
      fontSize: 14,
      fontWeight: P.weight.extrabold,
      lineHeight: "18px",
      letterSpacing: "0.38em",
    }),
      ue({
        fontSize: 11,
        fontWeight: P.weight.extrabold,
        lineHeight: "16px",
        letterSpacing: "0.38em",
      });
    ue({ fontSize: 14, fontWeight: P.weight.bold, lineHeight: "18px" }),
      ue({ fontSize: 14, fontWeight: P.weight.regular, lineHeight: "18px" }),
      ue({ fontSize: P.size.s3, fontWeight: P.weight.bold, lineHeight: "24px" }),
      ue({ fontSize: P.size.s1, fontWeight: P.weight.regular, lineHeight: "18px" }),
      ue({ fontSize: P.size.s2, fontWeight: P.weight.bold, lineHeight: "20px" }),
      ue({ fontSize: P.size.s1, fontWeight: P.weight.bold, lineHeight: "18px" }),
      ue({ fontSize: P.size.s3, fontWeight: P.weight.regular, lineHeight: "24px" }),
      ue({ fontSize: P.size.s2, fontWeight: P.weight.regular, lineHeight: "20px" });
    ue({
      fontFamily: P.type.code,
      fontSize: P.size.s2,
      fontWeight: P.weight.regular,
      lineHeight: "17px",
    }),
      ue({
        fontFamily: P.type.code,
        fontSize: P.size.s1,
        fontWeight: P.weight.regular,
        lineHeight: "14px",
      });
    var Rs = Ft({ from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }),
      Is = Ft({ "0%, 100%": { opacity: 1 }, "50%": { opacity: 0.4 } });
    Ft({
      "0%": { transform: "translateY(1px)" },
      "25%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-3px)" },
      "100%": { transform: "translateY(1px)" },
    });
    var Zs = Ft({
      "0%, 100%": { transform: "translate3d(0,0,0)" },
      "12.5%, 62.5%": { transform: "translate3d(-4px,0,0)" },
      "37.5%, 87.5%": { transform: "translate3d(4px,0,0)" },
    });
    Ft({
      "0%": { transform: "rotate(-3deg)" },
      "1.68421%": { transform: "rotate(3deg)" },
      "2.10526%": { transform: "rotate(6deg)" },
      "3.78947%": { transform: "rotate(-6deg)" },
      "4.21053%": { transform: "rotate(-6deg)" },
      "5.89474%": { transform: "rotate(6deg)" },
      "6.31579%": { transform: "rotate(6deg)" },
      "8%": { transform: "rotate(-6deg)" },
      "8.42105%": { transform: "rotate(-6deg)" },
      "10.10526%": { transform: "rotate(6deg)" },
      "10.52632%": { transform: "rotate(6deg)" },
      "12.21053%": { transform: "rotate(-6deg)" },
      "12.63158%": { transform: "rotate(-6deg)" },
      "14.31579%": { transform: "rotate(6deg)" },
      "15.78947%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(0deg)" },
    });
    var j2 = ue({
        animation: `${Is} 1.5s ease-in-out infinite`,
        background: V.tr5,
        color: "transparent",
        cursor: "progress",
      }),
      z2 = {
        kind: "Document",
        definitions: [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StatusTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "storyId" } }],
                  },
                },
              ],
            },
          },
        ],
      },
      U2 = {
        kind: "Document",
        definitions: [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
              ],
            },
          },
        ],
      },
      $2 = {
        kind: "Document",
        definitions: [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "LastBuildOnBranchBuildFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Build" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "committedAt" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StartedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStatus" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "first" },
                            value: { kind: "IntValue", value: "1000" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "statuses" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "testStatuses" },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StatusTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CompletedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "result" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStatus" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "first" },
                            value: { kind: "IntValue", value: "1000" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "statuses" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "testStatuses" },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StatusTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StatusTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "storyId" } }],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
              ],
            },
          },
        ],
      },
      W2 = {
        kind: "Document",
        definitions: [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StoryTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "comparisons" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "result" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "browser" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "version" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "captureDiff" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "diffImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "focusImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "headCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "backgroundColor" },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                  { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureError" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "kind" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: {
                                        kind: "Name",
                                        value: "CaptureErrorInteractionFailure",
                                      },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorJSError" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorFailedJS" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "baseCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mode" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "globals" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "storyId" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "component" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      G2 = {
        kind: "Document",
        definitions: [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "SelectedBuildFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Build" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "branch" } },
                { kind: "Field", name: { kind: "Name", value: "commit" } },
                { kind: "Field", name: { kind: "Name", value: "committedAt" } },
                { kind: "Field", name: { kind: "Name", value: "uncommittedHash" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StartedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "startedAt" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StoryTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CompletedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "startedAt" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StoryTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StoryTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "comparisons" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "result" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "browser" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "version" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "captureDiff" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "diffImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "focusImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "headCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "backgroundColor" },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                  { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureError" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "kind" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: {
                                        kind: "Name",
                                        value: "CaptureErrorInteractionFailure",
                                      },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorJSError" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorFailedJS" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "baseCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mode" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "globals" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "storyId" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "component" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      q2 = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "VisualTestsProjectCountQuery" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "viewer" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "projectCount" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "accounts" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "newProjectUrl" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      Y2 = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "SelectProjectsQuery" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "viewer" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "accounts" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "avatarUrl" } },
                            { kind: "Field", name: { kind: "Name", value: "newProjectUrl" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "projects" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "lastBuild" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "branch" } },
                                        { kind: "Field", name: { kind: "Name", value: "number" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      Q2 = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "ProjectQuery" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "project" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastBuild" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "branch" } },
                            { kind: "Field", name: { kind: "Name", value: "number" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      K2 = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateUserPreferences" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
                type: {
                  kind: "NonNullType",
                  type: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "UserPreferencesInput" },
                  },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updateUserPreferences" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "input" },
                      value: { kind: "Variable", name: { kind: "Name", value: "input" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedPreferences" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "vtaOnboarding" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      J2 = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "AddonVisualTestsBuild" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
                },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "branch" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
                },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "gitUserEmailHash" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
                },
              },
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "repositoryOwnerName" },
                },
                type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
                },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "testStatuses" } },
                type: {
                  kind: "NonNullType",
                  type: {
                    kind: "ListType",
                    type: {
                      kind: "NonNullType",
                      type: { kind: "NamedType", name: { kind: "Name", value: "TestStatus" } },
                    },
                  },
                },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "selectedBuildId" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
                },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "hasSelectedBuildId" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "project" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "manageUrl" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "billingUrl" } },
                            { kind: "Field", name: { kind: "Name", value: "suspensionReason" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "features" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "uiTests" } }],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "lastBuildOnBranch" },
                        name: { kind: "Name", value: "lastBuild" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "branches" },
                            value: {
                              kind: "ListValue",
                              values: [
                                { kind: "Variable", name: { kind: "Name", value: "branch" } },
                              ],
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "repositoryOwnerName" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "repositoryOwnerName" },
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "localBuilds" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "localBuildEmailHash" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "gitUserEmailHash" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "LastBuildOnBranchBuildFields" },
                            },
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "SelectedBuildFields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "skip" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "hasSelectedBuildId" },
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastBuild" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "slug" } },
                            { kind: "Field", name: { kind: "Name", value: "branch" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "selectedBuild" },
                  name: { kind: "Name", value: "build" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "Variable", name: { kind: "Name", value: "selectedBuildId" } },
                    },
                  ],
                  directives: [
                    {
                      kind: "Directive",
                      name: { kind: "Name", value: "include" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "if" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "hasSelectedBuildId" },
                          },
                        },
                      ],
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "SelectedBuildFields" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "viewer" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "preferences" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "vtaOnboarding" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "projectMembership" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "projectId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "userCanReview" },
                              name: { kind: "Name", value: "meetsAccessLevel" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "minimumAccessLevel" },
                                  value: { kind: "EnumValue", value: "REVIEWER" },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StatusTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "storyId" } }],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StoryTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "comparisons" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "result" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "browser" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "version" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "captureDiff" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "diffImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "focusImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "headCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "backgroundColor" },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                  { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureError" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "kind" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: {
                                        kind: "Name",
                                        value: "CaptureErrorInteractionFailure",
                                      },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorJSError" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorFailedJS" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "baseCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mode" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "globals" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "storyId" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "component" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "LastBuildOnBranchBuildFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Build" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "committedAt" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StartedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStatus" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "first" },
                            value: { kind: "IntValue", value: "1000" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "statuses" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "testStatuses" },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StatusTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CompletedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "result" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStatus" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "first" },
                            value: { kind: "IntValue", value: "1000" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "statuses" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "testStatuses" },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StatusTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "SelectedBuildFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Build" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "branch" } },
                { kind: "Field", name: { kind: "Name", value: "commit" } },
                { kind: "Field", name: { kind: "Name", value: "committedAt" } },
                { kind: "Field", name: { kind: "Name", value: "uncommittedHash" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StartedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "startedAt" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StoryTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CompletedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "startedAt" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StoryTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      X2 = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "ReviewTest" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "ReviewTestInput" } },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "reviewTest" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "input" },
                      value: { kind: "Variable", name: { kind: "Name", value: "input" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedTests" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userErrors" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "UserError" },
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                  { kind: "Field", name: { kind: "Name", value: "message" } },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "BuildSupersededError" },
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "build" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "TestUnreviewableError" },
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "test" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      Bs = w.div(
        ({ status: e, theme: t }) => ({
          display: "inline-block",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background:
            e &&
            {
              IN_PROGRESS: "transparent",
              PASSED: t.color.positive,
              PENDING: t.color.gold,
              ACCEPTED: t.color.positive,
              DENIED: t.color.positive,
              BROKEN: t.color.negative,
              FAILED: t.color.negative,
              EQUAL: t.color.positive,
              FIXED: t.color.positive,
              ADDED: t.color.gold,
              CHANGED: t.color.gold,
              REMOVED: t.color.gold,
              CAPTURE_ERROR: t.color.negative,
              SYSTEM_ERROR: t.color.negative,
              positive: t.color.positive,
              negative: t.color.negative,
              warning: t.color.gold,
              notification: t.color.secondary,
            }[e],
        }),
        ({ overlay: e, theme: t }) =>
          e &&
          ue({
            position: "absolute",
            top: -1,
            right: -2,
            width: 7,
            height: 7,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: `0 0 0 2px var(--bg-color, ${t.background.bar})`,
            boxSizing: "border-box",
          }),
      ),
      Ps = ({ status: e }) => a.createElement(Bs, { status: e }),
      em = w.div({
        position: "relative",
        display: "inline-flex",
        justifyContent: "center",
        "img, svg": { verticalAlign: "top" },
      }),
      sr = ({ status: e, children: t }) =>
        a.createElement(em, null, t, a.createElement(Bs, { overlay: !0, status: e })),
      _e = w(ro)(({ theme: e }) => ({ marginBottom: "-4px", marginTop: "-4px", left: -8 })),
      tm = w.div(({ theme: e }) => ({
        width: 220,
        padding: 3,
        color: e.base === "light" ? e.color.defaultText : e.color.light,
        "& > div": { margin: 7 },
      })),
      _l = w.div(({ theme: e }) => ({
        height: 5,
        background: e.background.hoverable,
        borderRadius: 5,
        overflow: "hidden",
      })),
      Vs = w(_l)(({ theme: e }) => ({
        background: e.color.secondary,
        transition: "width 3s ease-out",
      })),
      nm = Ft({ "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } }),
      vi = w.svg(
        ({ progress: e, theme: t }) => ({
          position: "absolute",
          width: "24px!important",
          height: "24px!important",
          transform: "rotate(-90deg)",
          color: t.color.secondary,
          circle: {
            r: "10",
            cx: "12",
            cy: "12",
            fill: "transparent",
            stroke: e ? "currentColor" : t.background.hoverable,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeDasharray: Math.PI * 20,
          },
        }),
        ({ spinner: e, theme: t }) =>
          e && {
            animation: `${nm} 1s linear infinite`,
            circle: { stroke: `${t.color.secondary}33` },
          },
      ),
      am = w.div(({ theme: e }) => ({ color: e.color.warningText, "&&": { marginTop: 10 } })),
      Vn = w(Je)(({ isDisallowed: e, theme: t }) => ({
        position: "relative",
        overflow: "visible",
        color: t.textMutedColor,
        marginTop: 0,
        zIndex: 1,
        marginRight: 4,
        ...(e && { animation: `${Zs} 700ms ease-out` }),
      })),
      rm = ({
        isDisabled: e = !1,
        isDisallowed: t = !1,
        isOutdated: n = !1,
        isRunning: r = !1,
        localBuildProgress: i,
        warning: l,
        clickWarning: o,
        startBuild: s,
        stopBuild: c,
      }) => {
        if (e)
          return l
            ? a.createElement(
                we,
                { tooltip: a.createElement(_e, { note: l }), trigger: "hover", hasChrome: !1 },
                a.createElement(
                  Vn,
                  {
                    id: "button-run-tests",
                    "aria-label": "Visual tests locked",
                    disabled: !o,
                    onClick: o,
                  },
                  a.createElement(sr, { status: "warning" }, a.createElement(Zt, null)),
                ),
              )
            : a.createElement(
                Vn,
                { id: "button-run-tests", "aria-label": "Visual tests locked", disabled: !0 },
                a.createElement(Zt, null),
              );
        if (r && i) {
          let { buildProgressPercentage: d } = i;
          return a.createElement(
            we,
            {
              trigger: "hover",
              tooltip: a.createElement(
                tm,
                null,
                a.createElement(
                  "div",
                  null,
                  a.createElement(Ml, { localBuildProgress: i, small: !0, withEmoji: !0 }),
                ),
                a.createElement(
                  _l,
                  null,
                  typeof d == "number" && a.createElement(Vs, { style: { width: `${d}%` } }),
                ),
                t &&
                  a.createElement(
                    am,
                    null,
                    "This job has already reached the capture cloud and cannot be stopped locally.",
                  ),
              ),
            },
            a.createElement(
              Vn,
              { "aria-label": "Stop tests", isDisallowed: t, onClick: () => c() },
              a.createElement(D5, { style: { width: 10, margin: 2 } }),
              a.createElement(
                vi,
                { xmlns: "http://www.w3.org/2000/svg" },
                a.createElement("circle", null),
              ),
              a.createElement(
                vi,
                { xmlns: "http://www.w3.org/2000/svg", spinner: !0 },
                a.createElement("circle", { strokeDashoffset: Math.PI * 20 * (1 - d / 100) }),
              ),
              typeof d == "number" &&
                a.createElement(
                  vi,
                  { xmlns: "http://www.w3.org/2000/svg", progress: !0 },
                  a.createElement("circle", { strokeDashoffset: Math.PI * 20 * (1 - d / 100) }),
                ),
            ),
          );
        }
        return n
          ? a.createElement(
              we,
              {
                tooltip: a.createElement(_e, { note: "Code changes detected; click to run tests" }),
                trigger: "hover",
                hasChrome: !1,
              },
              a.createElement(
                Vn,
                { id: "button-run-tests", "aria-label": "Run tests", onClick: () => s() },
                a.createElement(sr, { status: "notification" }, a.createElement(Zt, null)),
              ),
            )
          : a.createElement(
              we,
              {
                trigger: "hover",
                hasChrome: !1,
                tooltip: a.createElement(_e, {
                  note: "No code changes detected. Rerun tests to take new snapshots.",
                }),
              },
              a.createElement(
                Vn,
                { id: "button-run-tests", "aria-label": "Run tests", onClick: () => s() },
                a.createElement(Zt, null),
              ),
            );
      },
      im = ({ api: e }) => {
        let {
            addNotification: t,
            clearNotification: n,
            selectStory: r,
            setOptions: i,
            togglePanel: l,
          } = e,
          o = zt(ba),
          { projectId: s } = xl(),
          [c] = Cl(),
          d = !!c,
          [m, u] = Ee(ml),
          [p] = Ee(Qa),
          [f] = Ee(pl),
          [g] = Ee(Ar),
          y = Object.keys(g?.problems || {}).length > 0,
          [k] = Ee(ul),
          E = Ne(f?.currentStep),
          { index: h, status: v, storyId: b, viewMode: C } = Ht(),
          O = Object.values(v).filter(ie => ie[Z]?.status === "warn"),
          I = H(
            ie => {
              if ((i({ selectedPanel: an }), l(!0), h && C !== "story")) {
                let Ge = Object.keys(h).indexOf(b),
                  kt = Object.entries(h).slice(Ge > 0 ? Ge : 0),
                  [_t] = kt.find(([, { type: Pe }]) => Pe === "story") || [];
                _t && r(_t);
              }
              ie && o?.({ action: "openWarning", warning: ie });
            },
            [i, l, o, h, r, b, C],
          ),
          U = H(
            ({ onDismiss: ie }) => {
              ie(), I();
            },
            [I],
          );
        X(() => {
          let ie = () => u(!0),
            Ge = () => u(!1);
          return (
            window.addEventListener("offline", ie),
            window.addEventListener("online", Ge),
            () => {
              window.removeEventListener("offline", ie), window.removeEventListener("online", Ge);
            }
          );
        }, [u]),
          X(() => {
            if (f?.currentStep !== E.current) {
              if (((E.current = f?.currentStep), f?.currentStep === "initialize")) {
                let ie = `${Z}/build-initialize/${Date.now()}`;
                t({
                  id: ie,
                  content: {
                    headline: "Build started",
                    subHeadline: "Check the visual test addon to see the progress of your build.",
                  },
                  icon: a.createElement(Li, { color: ct.positive }),
                  duration: 8e3,
                  onClick: U,
                }),
                  setTimeout(() => n(ie), 8e3);
              }
              if (f?.currentStep === "aborted") {
                let ie = `${Z}/build-aborted/${Date.now()}`;
                t({
                  id: ie,
                  content: { headline: "Build canceled", subHeadline: "Aborted by user." },
                  icon: a.createElement(xt, { color: ct.negative }),
                  duration: 8e3,
                  onClick: U,
                }),
                  setTimeout(() => n(ie), 8e3);
              }
              if (f?.currentStep === "complete") {
                let ie = `${Z}/build-complete/${Date.now()}`;
                t({
                  id: ie,
                  content: {
                    headline: "Build complete",
                    subHeadline: f.errorCount
                      ? `Encountered ${(0, di.default)("component error", f.errorCount, !0)}`
                      : O.length
                        ? `Found ${(0, di.default)("story", O.length, !0)} with ${(0, di.default)("change", O.length)}`
                        : "No visual changes detected",
                  },
                  icon: a.createElement(Li, { color: ct.positive }),
                  duration: 8e3,
                  onClick: U,
                }),
                  setTimeout(() => n(ie), 8e3);
              }
              f?.currentStep === "error" &&
                t({
                  id: `${Z}/build-error/${Date.now()}`,
                  content: {
                    headline: "Build error",
                    subHeadline:
                      "Check the Storybook process on the command line for more details.",
                  },
                  icon: a.createElement(xt, { color: ct.negative }),
                  onClick: U,
                }),
                f?.currentStep === "limited" &&
                  t({
                    id: `${Z}/build-limited/${Date.now()}`,
                    content: {
                      headline: "Build limited",
                      subHeadline:
                        "Your account has insufficient snapshots remaining to run this build. Visit your billing page to find out more.",
                    },
                    icon: a.createElement(xt, { color: ct.negative }),
                    onClick: U,
                  });
            }
          }, [t, n, U, f?.currentStep, f?.errorCount, f?.changeCount, O.length]);
        let {
            isDisallowed: G,
            isRunning: oe,
            startBuild: ee,
            stopBuild: ke,
          } = Sl({ localBuildProgress: f, accessToken: c }),
          ye;
        s || (ye = "Visual tests locked until a project is selected."),
          d || (ye = "Visual tests locked until you are logged in."),
          k && (ye = "Visual tests locked due to Git synchronization problem."),
          y && (ye = "Visual tests locked due to configuration problem."),
          m && (ye = "Visual tests locked while offline.");
        let pe = H(() => I(ye), [I, ye]);
        return globalThis.CONFIG_TYPE !== "DEVELOPMENT"
          ? null
          : a.createElement(rm, {
              isDisabled: !!ye,
              isDisallowed: G,
              isOutdated: p,
              isRunning: oe,
              localBuildProgress: f,
              warning: ye,
              clickWarning: pe,
              startBuild: ee,
              stopBuild: ke,
            });
      },
      Ds = qe(null),
      lm = ({ children: e, value: t }) => a.createElement(Ds.Provider, { value: t }, e),
      Tl = () => bt(Ds, "AuthState"),
      om = {
        user: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z",
          }),
        ),
        useralt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z",
          }),
        ),
        useradd: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z",
          }),
        ),
        users: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z",
          }),
          a.createElement("path", {
            d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z",
          }),
        ),
        profile: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z",
          }),
        ),
        facehappy: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          }),
        ),
        faceneutral: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          }),
        ),
        facesad: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          }),
        ),
        accessibility: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z",
          }),
          a.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
          }),
        ),
        accessibilityalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z",
          }),
        ),
        arrowup: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z",
          }),
        ),
        arrowdown: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z",
          }),
        ),
        arrowleft: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z",
          }),
        ),
        arrowright: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z",
          }),
        ),
        arrowupalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z",
          }),
        ),
        arrowdownalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z",
          }),
        ),
        arrowleftalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z",
          }),
        ),
        arrowrightalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z",
          }),
        ),
        expandalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z",
          }),
        ),
        collapse: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z",
          }),
        ),
        expand: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z",
          }),
        ),
        unfold: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z",
          }),
          a.createElement("path", {
            d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z",
          }),
          a.createElement("path", {
            d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z",
          }),
        ),
        transfer: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z",
          }),
        ),
        redirect: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z",
          }),
        ),
        undo: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z",
          }),
        ),
        reply: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z",
          }),
        ),
        sync: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z",
          }),
        ),
        upload: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          }),
        ),
        download: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z",
          }),
        ),
        back: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z",
          }),
        ),
        proceed: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z",
          }),
        ),
        refresh: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z",
          }),
        ),
        globe: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z",
          }),
        ),
        compass: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          }),
        ),
        location: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z",
          }),
        ),
        pin: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z",
          }),
        ),
        time: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
          }),
        ),
        dashboard: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z",
          }),
        ),
        timer: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z",
          }),
        ),
        home: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z",
          }),
        ),
        admin: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z",
          }),
          a.createElement("path", {
            d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z",
          }),
        ),
        info: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
          }),
        ),
        question: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          }),
        ),
        support: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
          }),
        ),
        alert: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z",
          }),
        ),
        email: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z",
          }),
        ),
        phone: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z",
          }),
        ),
        link: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z",
          }),
          a.createElement("path", {
            d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z",
          }),
        ),
        unlink: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
          }),
        ),
        bell: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z",
          }),
        ),
        rss: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
          }),
        ),
        sharealt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z",
          }),
          a.createElement("path", {
            d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z",
          }),
        ),
        share: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z",
          }),
          a.createElement("path", {
            d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z",
          }),
        ),
        circlehollow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z",
          }),
        ),
        circle: a.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z" }),
        bookmarkhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z",
          }),
        ),
        bookmark: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z",
          }),
        ),
        diamond: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M8.41 1.59a2 2 0 0 0-2.82 0l-4 4a2 2 0 0 0 0 2.82l4 4a2 2 0 0 0 2.82 0l4-4a2 2 0 0 0 0-2.82l-4-4Zm.71-.71a3 3 0 0 0-4.24 0l-4 4a3 3 0 0 0 0 4.24l4 4a3 3 0 0 0 4.24 0l4-4a3 3 0 0 0 0-4.24l-4-4Z",
          }),
        ),
        hearthollow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2",
          }),
        ),
        heart: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z",
          }),
        ),
        starhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z",
          }),
        ),
        star: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z",
          }),
        ),
        certificate: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z",
          }),
        ),
        verified: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z",
          }),
        ),
        thumbsup: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
          }),
        ),
        shield: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z",
          }),
        ),
        basket: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z" }),
          a.createElement("path", {
            d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z",
          }),
          a.createElement("path", {
            d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z",
          }),
        ),
        beaker: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z",
          }),
        ),
        hourglass: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z",
          }),
        ),
        flag: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z",
          }),
        ),
        cloudhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z",
          }),
        ),
        cloud: a.createElement("path", {
          d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z",
        }),
        edit: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z",
          }),
        ),
        cog: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z",
            fill: "#333",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z",
          }),
        ),
        nut: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z",
          }),
        ),
        wrench: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
          }),
        ),
        ellipsis: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
          }),
        ),
        check: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z",
          }),
        ),
        form: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z",
          }),
          a.createElement("path", {
            d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z",
          }),
        ),
        batchdeny: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
          }),
        ),
        batchaccept: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
          }),
        ),
        controls: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z",
          }),
        ),
        plus: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z",
          }),
        ),
        closeAlt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z",
          }),
        ),
        cross: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z",
          }),
        ),
        trash: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z",
          }),
        ),
        pinalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z",
          }),
        ),
        unpin: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
          }),
        ),
        add: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
          }),
        ),
        subtract: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          }),
        ),
        close: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
          }),
        ),
        delete: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z",
          }),
        ),
        passed: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z",
          }),
        ),
        changed: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
          }),
        ),
        failed: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z",
          }),
        ),
        clear: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z",
          }),
        ),
        comment: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z",
          }),
        ),
        commentadd: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z",
          }),
        ),
        requestchange: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z",
          }),
        ),
        comments: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z",
          }),
        ),
        lock: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z",
          }),
        ),
        unlock: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z",
          }),
        ),
        key: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z",
          }),
        ),
        outbox: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z",
          }),
          a.createElement("path", {
            d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z",
          }),
        ),
        credit: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z",
          }),
        ),
        button: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z",
          }),
          a.createElement("path", {
            d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z",
          }),
        ),
        type: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z",
          }),
        ),
        pointerdefault: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z",
          }),
        ),
        pointerhand: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z",
          }),
        ),
        browser: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
          }),
        ),
        tablet: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z",
          }),
        ),
        mobile: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z",
          }),
        ),
        watch: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            key: "watch",
            fillRule: "evenodd",
            d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
          }),
        ),
        sidebar: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z",
          }),
        ),
        sidebaralt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z",
          }),
        ),
        sidebaralttoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z",
          }),
        ),
        sidebartoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z",
          }),
        ),
        bottombar: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z",
          }),
        ),
        bottombartoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z",
          }),
        ),
        cpu: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z",
          }),
        ),
        database: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z",
          }),
        ),
        memory: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z",
          }),
        ),
        structure: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z",
          }),
        ),
        box: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z",
          }),
        ),
        power: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z" }),
          a.createElement("path", {
            d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z",
          }),
        ),
        photo: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z",
          }),
        ),
        component: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z",
          }),
        ),
        grid: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z",
          }),
        ),
        outline: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          }),
        ),
        photodrag: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z",
          }),
          a.createElement("path", {
            d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z",
          }),
        ),
        search: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
          }),
        ),
        zoom: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
          }),
        ),
        zoomout: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z",
          }),
        ),
        zoomreset: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z",
          }),
        ),
        eye: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z",
          }),
        ),
        eyeclose: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z",
          }),
          a.createElement("path", {
            d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z",
          }),
        ),
        lightning: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z",
          }),
        ),
        lightningoff: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
          }),
        ),
        contrast: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z",
          }),
        ),
        switchalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z",
          }),
        ),
        mirror: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z",
          }),
        ),
        grow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z",
          }),
          a.createElement("path", {
            d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z",
          }),
        ),
        paintbrush: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z",
          }),
        ),
        ruler: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z",
          }),
        ),
        stop: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          }),
        ),
        camera: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z",
          }),
        ),
        video: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z",
          }),
        ),
        speaker: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z",
          }),
          a.createElement("path", {
            d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z",
          }),
          a.createElement("path", {
            d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z",
          }),
        ),
        play: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z",
          }),
        ),
        playback: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z",
          }),
        ),
        playnext: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z",
          }),
        ),
        rewind: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z",
          }),
        ),
        fastforward: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z",
          }),
        ),
        stopalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z",
          }),
        ),
        sidebyside: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z",
          }),
        ),
        stacked: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z",
          }),
        ),
        sun: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
          }),
          a.createElement("path", {
            d: "M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z",
          }),
        ),
        moon: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z",
          }),
        ),
        book: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z",
          }),
        ),
        document: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z",
          }),
        ),
        copy: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z",
          }),
        ),
        category: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z",
          }),
        ),
        folder: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z",
          }),
        ),
        print: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z",
          }),
        ),
        graphline: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z",
          }),
        ),
        calendar: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z",
          }),
        ),
        graphbar: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z",
          }),
        ),
        menu: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z",
          }),
        ),
        menualt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z",
          }),
        ),
        filter: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
          }),
        ),
        docchart: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z",
          }),
        ),
        doclist: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z",
          }),
        ),
        markup: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z",
          }),
        ),
        bold: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z",
          }),
        ),
        italic: a.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z" }),
        paperclip: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z",
          }),
        ),
        listordered: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z",
          }),
        ),
        listunordered: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
          }),
        ),
        paragraph: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z",
          }),
        ),
        markdown: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z",
          }),
        ),
        repository: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z",
          }),
          a.createElement("path", {
            d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z",
          }),
          a.createElement("path", {
            d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z",
          }),
        ),
        commit: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
          }),
        ),
        branch: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
          }),
        ),
        pullrequest: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
          }),
        ),
        merge: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
          }),
        ),
        apple: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z",
          }),
        ),
        linux: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z",
          }),
        ),
        ubuntu: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z",
          }),
        ),
        windows: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z",
          }),
        ),
        storybook: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z",
          }),
        ),
        azuredevops: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z",
          }),
        ),
        bitbucket: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z",
          }),
        ),
        chrome: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z",
          }),
        ),
        chromatic: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z",
          }),
        ),
        componentdriven: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z",
          }),
        ),
        discord: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z",
          }),
        ),
        facebook: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z",
          }),
        ),
        figma: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z",
          }),
        ),
        gdrive: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z",
          }),
        ),
        github: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z",
          }),
        ),
        gitlab: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z",
          }),
        ),
        google: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z",
          }),
        ),
        graphql: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z",
          }),
        ),
        medium: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z",
          }),
        ),
        redux: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z",
          }),
        ),
        twitter: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z",
          }),
        ),
        youtube: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z",
          }),
        ),
        linkedin: a.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.6667 13H2.33333C1.59695 13 1 12.403 1 11.6667V2.33333C1 1.59695 1.59695 1 2.33333 1H11.6667C12.403 1 13 1.59695 13 2.33333V11.6667C13 12.403 12.403 13 11.6667 13ZM9.55293 11.3333H11.3337V7.67516C11.3337 6.12737 10.4563 5.379 9.23075 5.379C8.00467 5.379 7.48867 6.33378 7.48867 6.33378V5.55552H5.77255V11.3333H7.48867V8.30031C7.48867 7.48764 7.86276 7.00405 8.57878 7.00405C9.23696 7.00405 9.55293 7.46875 9.55293 8.30031V11.3333ZM2.66699 3.73279C2.66699 4.32157 3.14067 4.79896 3.72522 4.79896C4.30977 4.79896 4.78316 4.32157 4.78316 3.73279C4.78316 3.14402 4.30977 2.66663 3.72522 2.66663C3.14067 2.66663 2.66699 3.14402 2.66699 3.73279ZM4.62856 11.3333H2.83908V5.55552H4.62856V11.3333Z",
          fill: "#1EA7FD",
        }),
        vscode: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z",
          }),
        ),
      },
      sm = w.svg({
        display: "inline-block",
        shapeRendering: "inherit",
        transform: "translate3d(0, 0, 0)",
        verticalAlign: "middle",
        path: { fill: "currentColor" },
      }),
      Fl = ({ icon: e, ...t }) =>
        a.createElement(
          sm,
          { viewBox: "0 0 14 14", width: "14px", height: "14px", ...t },
          a.createElement(a.Fragment, null, om[e]),
        ),
      qt = { large: 40, medium: 28, small: 20, tiny: 16 },
      cm = w.div(
        {
          background: "transparent",
          display: "inline-block",
          verticalAlign: "top",
          overflow: "hidden",
          textTransform: "uppercase",
          img: { width: "100%", height: "auto", display: "block" },
        },
        e => ({
          borderRadius: e.type === "user" ? "50%" : 5,
          height: `${qt[e.size || "medium"]}px`,
          width: `${qt[e.size || "medium"]}px`,
          lineHeight: `${qt[e.size || "medium"]}px`,
          ...(e.isLoading && { background: V.light, filter: "grayscale(1)" }),
          ...(!e.src && !e.isLoading && { background: "#37D5D3" }),
        }),
      ),
      dm = w(Fl)(
        {
          position: "relative",
          margin: "0 auto",
          display: "block",
          verticalAlign: "top",
          path: { fill: V.medium, animation: `${Is} 1.5s ease-in-out infinite` },
        },
        e => ({
          bottom: `${e.type === "user" ? -2 : -4}px`,
          height: `${e.type === "user" ? 100 : 70}%`,
          width: `${e.type === "user" ? 100 : 70}%`,
        }),
      ),
      um = w.div(
        { color: V.lightest, textAlign: "center" },
        e =>
          ({
            tiny: { fontSize: `${P.size.s1 - 2}px`, lineHeight: `${qt.tiny}px` },
            small: { fontSize: `${P.size.s1}px`, lineHeight: `${qt.small}px` },
            medium: { fontSize: `${P.size.s2}px`, lineHeight: `${qt.medium}px` },
            large: { fontSize: `${P.size.s3}px`, lineHeight: `${qt.large}px` },
          })[e.size || "medium"],
      ),
      mm = ({
        isLoading: e = !1,
        username: t = "loading",
        src: n = void 0,
        size: r = "medium",
        type: i = "user",
        ...l
      }) => {
        let o = a.createElement(dm, { icon: i === "user" ? "useralt" : "repository", type: i }),
          s = {};
        return (
          e
            ? ((s["aria-busy"] = !0), (s["aria-label"] = "Loading avatar ..."))
            : n
              ? (o = a.createElement("img", { src: n, alt: t }))
              : ((s["aria-label"] = t),
                (o = a.createElement(um, { size: r, "aria-hidden": "true" }, t.substring(0, 1)))),
          a.createElement(cm, { size: r, isLoading: e, src: n, type: i, ...s, ...l }, o)
        );
      },
      pm = w.span(
        e =>
          e.withArrow && {
            "> svg:last-of-type": {
              height: "0.65em",
              width: "0.65em",
              marginRight: 0,
              marginLeft: "0.25em",
              bottom: "auto",
              verticalAlign: "inherit",
            },
          },
      ),
      hm = w.a(
        {
          display: "inline-block",
          transition: "transform 150ms ease-out, color 150ms ease-out",
          textDecoration: "none",
          color: V.secondary,
          "&:hover, &:focus-visible": {
            cursor: "pointer",
            transform: "translateY(-1px)",
            color: Gt(0.07, V.secondary),
          },
          "&:active": { transform: "translateY(0)", color: Gt(0.1, V.secondary) },
          svg: {
            display: "inline-block",
            height: "1em",
            width: "1em",
            verticalAlign: "text-top",
            position: "relative",
            bottom: "-0.125em",
            marginRight: "0.4em",
          },
        },
        e => ({
          ...(e.secondary && {
            color: e.theme.base === "light" ? V.mediumdark : V.medium,
            "&:hover": { color: e.theme.base === "light" ? V.dark : V.light },
            "&:active": { color: e.theme.base === "light" ? V.darker : V.lighter },
          }),
          ...(e.tertiary && {
            color: V.dark,
            "&:hover": { color: V.darkest },
            "&:active": { color: V.mediumdark },
          }),
          ...(e.nochrome && {
            color: "inherit",
            "&:hover, &:active": { color: "inherit", textDecoration: "underline" },
          }),
          ...(e.inverse && {
            color: V.lightest,
            "&:hover": { color: V.lighter },
            "&:active": { color: V.light },
          }),
        }),
      ),
      fm = w.a({}),
      gm = w.button({
        background: "none",
        border: "none",
        padding: "0",
        font: "inherit",
        cursor: "pointer",
      }),
      Hs = W(
        (
          { inverse: e, isButton: t, LinkWrapper: n, nochrome: r, secondary: i, tertiary: l, ...o },
          s,
        ) =>
          t
            ? a.createElement(gm, { ...o, ref: s })
            : n
              ? a.createElement(n, { ...o, ref: s })
              : a.createElement(fm, { ...o, ref: s }),
      );
    Hs.displayName = "LinkComponentPicker";
    var Ie = W(({ children: e, withArrow: t, ...n }, r) => {
      let i = a.createElement(
        a.Fragment,
        null,
        a.createElement(
          pm,
          { withArrow: !!t },
          e,
          t && a.createElement(Fl, { icon: "arrowright" }),
        ),
      );
      return a.createElement(hm, { as: Hs, ref: r, ...n }, i);
    });
    Ie.displayName = "Link";
    Ie.defaultProps = {
      withArrow: !1,
      isButton: !1,
      secondary: !1,
      tertiary: !1,
      nochrome: !1,
      inverse: !1,
    };
    var vm = w.label(e => ({
        ...(e.appearance !== "code" && { fontWeight: P.weight.bold }),
        ...(e.appearance === "code"
          ? { fontFamily: P.type.code, fontSize: `${P.size.s1 - 1}px`, lineHeight: "16px" }
          : { fontSize: `${P.size.s2}px`, lineHeight: "20px" }),
      })),
      ym = w.div([
        { marginBottom: 8 },
        e =>
          e.hideLabel && {
            border: "0px !important",
            clip: "rect(0 0 0 0) !important",
            WebkitClipPath: "inset(100%) !important",
            clipPath: "inset(100%) !important",
            height: "1px !important",
            overflow: "hidden !important",
            padding: "0px !important",
            position: "absolute !important",
            whiteSpace: "nowrap !important",
            width: "1px !important",
          },
      ]),
      Em = w.input({
        "&::placeholder": { color: V.mediumdark },
        appearance: "none",
        border: "none",
        boxSizing: "border-box",
        display: "block",
        outline: "none",
        width: "100%",
        margin: "0",
        "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
        "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${V.lightest} inset` },
      }),
      bm = e => {
        let t = { position: "relative", ...(e.error && { zIndex: 1 }), "&:focus": { zIndex: 2 } };
        switch (e.stackLevel) {
          case "top":
            return {
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              ...t,
            };
          case "middle":
            return { borderRadius: 0, marginTop: -1, ...t };
          case "bottom":
            return {
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              marginTop: -1,
              ...t,
            };
          default:
            return { borderRadius: "4px" };
        }
      },
      km = w.div(e => ({
        display: "inline-block",
        position: "relative",
        verticalAlign: "top",
        width: "100%",
        ".sbds-input-el": {
          position: "relative",
          ...bm(e),
          background: V.lightest,
          color: V.darkest,
          fontSize: `${P.size.s2}px`,
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: `${V.border} 0 0 0 1px inset`,
          "&:focus": { boxShadow: `${V.secondary} 0 0 0 1px inset` },
          ...(e.appearance === "pill" && {
            fontSize: `${P.size.s1}px`,
            lineHeight: "16px",
            padding: "6px 12px",
            borderRadius: "3em",
            background: "transparent",
          }),
          ...(e.appearance === "code" && {
            fontSize: `${P.size.s1 - 1}px`,
            lineHeight: "16px",
            fontFamily: P.type.code,
            borderRadius: `${Al.borderRadius.small}px`,
            background: V.lightest,
            padding: "8px 10px",
          }),
          ...(e.startingType === "password" && { paddingRight: 52 }),
          ...(e.icon && {
            paddingLeft: 40,
            ...((e.appearance === "pill" || e.appearance === "code") && { paddingLeft: 30 }),
            "&:focus + svg path": { fill: V.darker },
          }),
          ...(e.error && {
            boxShadow: `${V.red} 0 0 0 1px inset`,
            "&:focus": { boxShadow: `${V.red} 0 0 0 1px inset !important` },
          }),
        },
        "> svg": {
          ...(e.icon && {
            transition: "all 150ms ease-out",
            position: "absolute",
            top: "50%",
            zIndex: 3,
            background: "transparent",
            ...(e.appearance === "pill" || e.appearance === "code"
              ? { fontSize: `${P.size.s1}px`, height: 12, marginTop: -6, width: 12, left: 10 }
              : {
                  fontSize: `${P.size.s2}px`,
                  height: 14,
                  marginTop: -7,
                  width: 14,
                  left: e.appearance === "tertiary" ? 0 : 15,
                }),
            path: { transition: "all 150ms ease-out", fill: V.mediumdark },
          }),
          ...(e.error && { animation: `${Zs} 700ms ease-out`, path: { fill: V.red } }),
        },
      })),
      wm = w.div(
        e =>
          e.orientation === "horizontal" && {
            display: "table-row",
            ".sbds-input-label-wrapper, .sbds-input-input-wrapper": { display: "table-cell" },
            ".sbds-input-label-wrapper": { width: 1, paddingRight: 20, verticalAlign: "middle" },
            ".sbds-input-input-wrapper": { width: "auto" },
          },
      ),
      Cm = w(we)({ width: "100%" }),
      Sm = w(ao)({ width: 170 }),
      xm = w.div({
        position: "absolute",
        right: "0",
        minWidth: 45,
        top: "50%",
        transform: "translateY(-50%)",
        fontWeight: "bold",
        fontSize: 11,
        zIndex: 2,
      }),
      Po = ({ error: e, value: t, lastErrorValue: n }) => {
        let r = typeof e == "function" ? e(t) : e;
        return n && t !== n && (r = null), r;
      },
      js = W(
        (
          {
            id: e,
            appearance: t = "default",
            className: n = void 0,
            error: r = null,
            errorTooltipPlacement: i = "right",
            hideLabel: l = !1,
            icon: o = void 0,
            label: s,
            lastErrorValue: c = void 0,
            onActionClick: d = void 0,
            orientation: m = "vertical",
            stackLevel: u = void 0,
            startingType: p = "text",
            suppressErrorMessage: f = !1,
            type: g = "text",
            value: y = "",
            ...k
          },
          E,
        ) => {
          let [h, v] = Me(Po({ error: r, value: y, lastErrorValue: c })),
            b = `${e}-error`;
          X(() => {
            v(Po({ error: r, value: y, lastErrorValue: c }));
          }, [y, r, c]);
          let C = a.createElement(Em, {
            className: "sbds-input-el",
            id: e,
            ref: E,
            value: y,
            type: g,
            "aria-describedby": b,
            "aria-invalid": !!r,
            ...k,
          });
          return a.createElement(
            wm,
            { orientation: m, className: n },
            a.createElement(
              ym,
              { className: "sbds-input-label-wrapper", hideLabel: l },
              a.createElement(vm, { htmlFor: e, appearance: t }, s),
            ),
            a.createElement(
              km,
              {
                className: "sbds-input-input-wrapper",
                error: h,
                "data-error": h,
                icon: o,
                appearance: t,
                stackLevel: u,
                startingType: p,
              },
              o && a.createElement(Fl, { icon: o, "aria-hidden": !0 }),
              a.createElement(
                Cm,
                {
                  tabIndex: -1,
                  placement: i,
                  startOpen: !0,
                  hasChrome: !!h && !f,
                  tooltip: h && !f && a.createElement(Sm, { desc: h }),
                  role: "none",
                },
                C,
              ),
              p === "password" &&
                a.createElement(
                  xm,
                  null,
                  a.createElement(
                    Ie,
                    { isButton: !0, tertiary: !0, onClick: d, type: "button" },
                    g === "password" ? "Show" : "Hide",
                  ),
                ),
            ),
          );
        },
      );
    js.displayName = "PureInput";
    var zs = W(({ type: e, startFocused: t, ...n }, r) => {
      let [i, l] = Me(e),
        o = H(
          m => {
            if ((m.preventDefault(), m.stopPropagation(), i === "password")) {
              l("text");
              return;
            }
            l("password");
          },
          [i, l],
        ),
        s = Ne(),
        c = r || s,
        d = Ne(!1);
      return (
        X(() => {
          c.current && t && !d.current && (c.current.focus(), (d.current = !0));
        }, [c, t, d]),
        a.createElement(js, { ref: c, startingType: e, type: i, onActionClick: o, ...n })
      );
    });
    zs.displayName = "Input";
    var Nm = w.div(
        {
          borderRadius: "3em",
          cursor: "progress",
          display: "inline-block",
          overflow: "hidden",
          position: ["relative", "absolute"],
          transition: "all 200ms ease-out",
          verticalAlign: "top",
          top: "50%",
          left: "50%",
          marginTop: -16,
          marginLeft: -16,
          height: 32,
          width: 32,
          animation: `${Rs} 0.7s linear infinite`,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.03)",
          borderTopColor: "rgba(0, 0, 0, 0.15)",
        },
        e => ({
          ...(e.inverse && {
            borderColor: "rgba(255, 255, 255, 0.2)",
            borderTopColor: "rgba(255, 255, 255, 0.4)",
          }),
          ...(e.inForm && {
            marginTop: -6,
            marginLeft: -6,
            height: 12,
            width: 12,
            border: `1px solid ${V.secondary}`,
            borderBottomColor: "transparent",
          }),
          ...(e.inline && {
            position: "relative",
            top: "initial",
            left: "initial",
            marginTop: "initial",
            marginLeft: "initial",
            verticalAlign: "middle",
            height: 8,
            width: 8,
            border: "1px solid",
            borderTopColor: V.secondary,
            borderLeftColor: V.secondary,
            borderRightColor: V.secondary,
            borderBottomColor: "transparent",
            ...(e.positive && {
              borderTopColor: V.positive,
              borderLeftColor: V.positive,
              borderRightColor: V.positive,
            }),
            ...(e.negative && {
              borderTopColor: V.red,
              borderLeftColor: V.red,
              borderRightColor: V.red,
            }),
            ...(e.neutral && {
              borderTopColor: V.dark,
              borderLeftColor: V.dark,
              borderRightColor: V.dark,
            }),
            ...(e.inverse && {
              borderTopColor: V.lightest,
              borderLeftColor: V.lightest,
              borderRightColor: V.lightest,
            }),
          }),
        }),
      ),
      Qi = e =>
        a.createElement(Nm, {
          "aria-label": "Content is loading ...",
          "aria-live": "polite",
          role: "status",
          ...e,
        }),
      Mm = function (e) {
        var t = new WeakMap();
        return function (n) {
          if (t.has(n)) return t.get(n);
          var r = e(n);
          return t.set(n, r), r;
        };
      },
      Am = w.span({}),
      _m = w.span(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      })),
      Tm = w.span({}),
      Fm = w.span({}),
      Vo = w.li(({ theme: e }) => ({
        listStyle: "none",
        "&:not(:first-of-type)": { borderTop: `1px solid ${e.appBorderColor}` },
      })),
      Om = w.span({
        lineHeight: "18px",
        padding: "7px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ".sbds-list-item-title": { display: "block", flex: "0 1 auto", marginRight: "auto" },
        ".sbds-list-item-left, .sbds-list-item-center, .sbds-list-item-right": {
          display: "inline-flex",
        },
        ".sbds-list-item-center": { flex: "0 1 auto", marginLeft: "auto", marginRight: "auto" },
        ".sbds-list-item-left, .sbds-list-item-right": { flex: "0 1 auto" },
        ".sbds-list-item-right": { flex: "none", textAlign: "right", marginLeft: 10 },
      }),
      Ol = ({ active: e, activeColor: t, disabled: n, isLoading: r, theme: i }) => ({
        fontSize: `${i.typography.size.s1}px`,
        transition: "all 150ms ease-out",
        color: i.color.mediumdark,
        textDecoration: "none",
        display: "block",
        ".sbds-list-item-title": { color: i.base === "light" ? i.color.darker : i.color.lighter },
        ".sbds-list-item-right svg": {
          transition: "all 200ms ease-out",
          opacity: 0,
          height: 12,
          width: 12,
          margin: "3px 0",
          verticalAlign: "top",
          path: { fill: i.color.mediumdark },
        },
        "&:hover": {
          background: i.background.hoverable,
          cursor: "pointer",
          ".sbds-list-item-right svg": { opacity: 1 },
        },
        ...(e && {
          ".sbds-list-item-title": { fontWeight: i.typography.weight.bold },
          ".sbds-list-item-title, .sbds-list-item-center": { color: t },
          ".sbds-list-item-right svg": { opacity: 1, path: { fill: t } },
        }),
        ...(r && { ".sbds-list-item-title": { ...j2, flex: "0 1 auto", display: "inline-block" } }),
        ...(n && {
          cursor: "not-allowed !important",
          ".sbds-list-item-title, .sbds-list-item-center": { color: i.color.mediumdark },
        }),
      }),
      Lm = w(({ active: e, activeColor: t, isLoading: n, ...r }) => a.createElement("a", { ...r }))(
        Ol,
      ),
      Rm = w.span(Ol),
      Im = Mm(e =>
        w(({ active: t, isLoading: n, activeColor: r, ...i }) => a.createElement(e, { ...i }))(Ol),
      ),
      tt = ({
        appearance: e = "primary",
        left: t,
        title: n = a.createElement("span", null, "Loading"),
        center: r,
        right: i,
        onClick: l,
        LinkWrapper: o,
        isLink: s = !0,
        ...c
      }) => {
        let d = Ut().color[e],
          m = a.createElement(
            Om,
            { onClick: l, role: "presentation" },
            t && a.createElement(Am, { className: "sbds-list-item-left" }, t),
            n && a.createElement(_m, { className: "sbds-list-item-title" }, n),
            r && a.createElement(Tm, { className: "sbds-list-item-center" }, r),
            i && a.createElement(Fm, { className: "sbds-list-item-right" }, i),
          );
        if (o) {
          let u = Im(o);
          return a.createElement(Vo, null, a.createElement(u, { activeColor: d, ...c }, m));
        }
        return a.createElement(Vo, null, a.createElement(s ? Lm : Rm, { activeColor: d, ...c }, m));
      };
    function Yn(e) {
      function t(O, I) {
        return (O >>> I) | (O << (32 - I));
      }
      for (
        var n,
          r,
          i = Math.pow,
          l = i(2, 32),
          o = "",
          s = [],
          c = 8 * e.length,
          d = (Yn.h = Yn.h || []),
          m = (Yn.k = Yn.k || []),
          u = m.length,
          p = {},
          f = 2;
        u < 64;
        f++
      )
        if (!p[f]) {
          for (n = 0; n < 313; n += f) p[n] = f;
          (d[u] = (i(f, 0.5) * l) | 0), (m[u++] = (i(f, 1 / 3) * l) | 0);
        }
      for (e += "\x80"; (e.length % 64) - 56; ) e += "\0";
      for (n = 0; n < e.length; n++) {
        if ((r = e.charCodeAt(n)) >> 8) return;
        s[n >> 2] |= r << (((3 - n) % 4) * 8);
      }
      for (s[s.length] = (c / l) | 0, s[s.length] = c, r = 0; r < s.length; ) {
        var g = s.slice(r, (r += 16)),
          y = d;
        for (d = d.slice(0, 8), n = 0; n < 64; n++) {
          var k = g[n - 15],
            E = g[n - 2],
            h = d[0],
            v = d[4],
            b =
              d[7] +
              (t(v, 6) ^ t(v, 11) ^ t(v, 25)) +
              ((v & d[5]) ^ (~v & d[6])) +
              m[n] +
              (g[n] =
                n < 16
                  ? g[n]
                  : (g[n - 16] +
                      (t(k, 7) ^ t(k, 18) ^ (k >>> 3)) +
                      g[n - 7] +
                      (t(E, 17) ^ t(E, 19) ^ (E >>> 10))) |
                    0);
          (d = [
            (b + ((t(h, 2) ^ t(h, 13) ^ t(h, 22)) + ((h & d[1]) ^ (h & d[2]) ^ (d[1] & d[2])))) | 0,
          ].concat(d))[4] = (d[4] + b) | 0;
        }
        for (n = 0; n < 8; n++) d[n] = (d[n] + y[n]) | 0;
      }
      for (n = 0; n < 8; n++)
        for (r = 3; r + 1; r--) {
          var C = (d[n] >> (8 * r)) & 255;
          o += (C < 16 ? 0 : "") + C.toString(16);
        }
      return o;
    }
    var Zm = e => new Uint8Array(e).reduce((t, n) => t + String.fromCharCode(n), ""),
      Bm = e => window.btoa(Array.isArray(e) ? Zm(e) : e),
      Do = e => Bm(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""),
      Pm = e => Array.from(e.match(/.{1,2}/g) ?? [], t => parseInt(t, 16)),
      Vm = () =>
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10),
      Us = e =>
        Object.entries(e)
          .map(([t, n]) => `${encodeURIComponent(t)}=${encodeURIComponent(n)}`)
          .join("&"),
      Dm = ({ error: e }) => e === "authorization_pending",
      Hm = ({ error_description: e }) => e === "Not OAuth beta user",
      jm = async e => {
        let t = Do(Vm()),
          n = Do(Pm(Yn(t))),
          r = await fetch(`${Mr}/authorize`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
            body: Us({ client_id: "chromaui:addon-visual-tests", code_challenge: n }),
          }),
          {
            device_code: i,
            user_code: l,
            verification_uri_complete: o,
            expires_in: s,
            interval: c,
          } = await r.json(),
          d = e ? o.replace("https://www", `https://${e}`) : o;
        return {
          expires: Date.now() + s * 1e3,
          interval: c * 1e3,
          user_code: l,
          device_code: i,
          verifier: t,
          verificationUrl: d,
        };
      },
      zm = async ({ expires: e, device_code: t, verifier: n }) => {
        if (Date.now() >= e) throw new Error("Token exchange expired, please restart sign in.");
        try {
          let r = await (
            await fetch(`${Mr}/token`, {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
              body: Us({
                client_id: "chromaui:addon-visual-tests",
                grant_type: "urn:ietf:params:oauth:grant-type:device_code",
                device_code: t,
                code_verifier: n,
                scope: "user:read account:read project:read project:write",
              }),
            })
          ).json();
          if (Dm(r))
            throw new Error(
              "You have not authorized the Visual Tests addon for Chromatic, please try again",
            );
          if (r.access_token) return r.access_token;
          if (Hm(r)) return alert("You must be a beta user to use this addon at this time."), null;
          throw new Error();
        } catch (r) {
          throw (console.warn(r), r);
        }
      };
    function $s() {
      let e = cn(),
        { addNotification: t, setOptions: n, togglePanel: r } = e,
        i = H(
          ({ onDismiss: l }) => {
            l(), n({ selectedPanel: an }), r(!0);
          },
          [n, r],
        );
      return H(
        (l, o) => {
          t({
            id: `${Z}/error/${Date.now()}`,
            content: { headline: l, subHeadline: o.toString() },
            icon: a.createElement(xt, { color: ct.negative }),
            onClick: i,
          });
        },
        [t, i],
      );
    }
    function Ue(e, t) {
      let n = H(() => {
          try {
            let s = sessionStorage.getItem(`${Z}/state/${e}`);
            if (s != null) return JSON.parse(s);
          } catch {}
          return typeof t == "function" ? t() : t;
        }, [e, t]),
        [r, i] = Me(n),
        l = wt(
          () =>
            zi(
              e,
              s => {
                let c = new Set(sessionStorage.getItem(`${Z}/state`)?.split(";"));
                s == null
                  ? (sessionStorage.removeItem(`${Z}/state/${e}`), c.delete(e))
                  : (sessionStorage.setItem(`${Z}/state/${e}`, JSON.stringify(s)), c.add(e)),
                  sessionStorage.setItem(`${Z}/state`, Array.from(c).join(";")),
                  window.dispatchEvent(new StorageEvent("session-storage", { key: e }));
              },
              1e3,
            ),
          [e],
        );
      X(() => l.cancel, [l]);
      let o = H(
        s => {
          let c = s;
          (!c.key || c.key === e) && i(n());
        },
        [e, n],
      );
      return (
        X(
          () => (
            window.addEventListener("storage", o),
            window.addEventListener("session-storage", o),
            () => {
              window.removeEventListener("storage", o),
                window.removeEventListener("session-storage", o);
            }
          ),
          [o],
        ),
        [
          r,
          H(
            s =>
              i(c => {
                let d = typeof s == "function" ? s(c) : s;
                return l(d), d;
              }),
            [l],
          ),
        ]
      );
    }
    function Um(...e) {
      let t = sessionStorage.getItem(`${Z}/state`)?.split(";") || [];
      e.length
        ? (e.forEach(n => sessionStorage.removeItem(`${Z}/state/${n}`)),
          sessionStorage.setItem(`${Z}/state`, t.filter(n => !e.includes(n)).join(";")))
        : (t.forEach(n => sessionStorage.removeItem(`${Z}/state/${n}`)),
          sessionStorage.removeItem(`${Z}/state`));
    }
    var Ws = qe(void 0),
      $m = ({ children: e, addonUninstalled: t, setAddonUninstalled: n }) => {
        let r = cn().getChannel();
        if (!r) throw new Error("Channel not available");
        let i = () => {
          r.emit(as), n(!0);
        };
        return a.createElement(
          Ws.Provider,
          { value: { addonUninstalled: t, uninstallAddon: i } },
          e,
        );
      },
      Ll = () => bt(Ws, "Uninstall Addon"),
      he = w.div({
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }),
      me = w.h1(({ theme: e }) => ({
        marginTop: 0,
        marginBottom: 4,
        fontSize: "1em",
        fontWeight: "bold",
        color: e.base === "light" ? e.color.defaultText : e.color.lightest,
      })),
      Gs = e =>
        a.createElement(
          "svg",
          {
            width: "58",
            height: "53",
            viewBox: "0 0 58 53",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement(
            "g",
            { filter: "url(#filter0_dd_304_317890)" },
            a.createElement("rect", {
              x: "6",
              y: "2",
              width: "40",
              height: "40",
              rx: "8",
              fill: "#FF4785",
              shapeRendering: "crispEdges",
            }),
            a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M17.5005 11.0555C16.8471 11.0963 16.3455 11.6508 16.37 12.3051L17.1135 32.1151C17.137 32.7426 17.6379 33.2471 18.2651 33.2753L34.3716 33.9987C34.3896 33.9995 34.4077 33.9999 34.4257 33.9999C35.0921 33.9999 35.6324 33.4597 35.6324 32.7932V11.2067C35.6324 11.1816 35.6316 11.1565 35.63 11.1314C35.5885 10.4663 35.0156 9.96082 34.3505 10.0024L33.0259 10.0853L33.1227 12.8548C33.1261 12.9541 33.0484 13.0375 32.949 13.041C32.9065 13.0424 32.8648 13.0288 32.8314 13.0025L31.939 12.2995L30.8825 13.1009C30.8033 13.161 30.6904 13.1455 30.6303 13.0663C30.605 13.033 30.5921 12.9919 30.5939 12.9501L30.707 10.2302L17.5005 11.0555ZM31.221 19.1936C30.7965 19.5234 27.6343 19.7484 27.6343 19.2789C27.7011 17.4876 26.8991 17.409 26.4536 17.409C26.0303 17.409 25.3174 17.537 25.3174 18.4966C25.3174 19.4746 26.3592 20.0267 27.582 20.6747C29.3191 21.5952 31.4215 22.7093 31.4215 25.5128C31.4215 28.1998 29.2383 29.6842 26.4536 29.6842C23.5797 29.6842 21.0683 28.5215 21.352 24.4904C21.4633 24.0171 25.1169 24.1296 25.1169 24.4904C25.0723 26.1538 25.4511 26.6431 26.409 26.6431C27.1442 26.6431 27.4783 26.2379 27.4783 25.5554C27.4783 24.5227 26.3929 23.9133 25.1442 23.2122C23.4534 22.2629 21.4633 21.1456 21.4633 18.5819C21.4633 16.0229 23.2233 14.3168 26.3645 14.3168C29.5056 14.3168 31.221 15.9967 31.221 19.1936Z",
              fill: "white",
            }),
          ),
          a.createElement("circle", {
            cx: "46",
            cy: "22",
            r: "2.5",
            fill: "white",
            stroke: "#FF4785",
          }),
          a.createElement("path", {
            d: "M57.8536 22.3536C58.0488 22.1583 58.0488 21.8417 57.8536 21.6464L54.6716 18.4645C54.4763 18.2692 54.1597 18.2692 53.9645 18.4645C53.7692 18.6597 53.7692 18.9763 53.9645 19.1716L56.7929 22L53.9645 24.8284C53.7692 25.0237 53.7692 25.3403 53.9645 25.5355C54.1597 25.7308 54.4763 25.7308 54.6716 25.5355L57.8536 22.3536ZM48.5 22.5H57.5V21.5H48.5V22.5Z",
            fill: "#FF4785",
          }),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "filter",
              {
                id: "filter0_dd_304_317890",
                x: "0",
                y: "0",
                width: "52",
                height: "53",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
              },
              a.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              a.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              a.createElement("feOffset", { dy: "5" }),
              a.createElement("feGaussianBlur", { stdDeviation: "3" }),
              a.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_304_317890",
              }),
              a.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              a.createElement("feOffset", { dy: "1" }),
              a.createElement("feGaussianBlur", { stdDeviation: "1.5" }),
              a.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
              a.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in2: "effect1_dropShadow_304_317890",
                result: "effect2_dropShadow_304_317890",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect2_dropShadow_304_317890",
                result: "shape",
              }),
            ),
          ),
        ),
      rn = e =>
        a.createElement(
          "svg",
          {
            width: "52",
            height: "53",
            viewBox: "0 0 52 53",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement(
            "g",
            { filter: "url(#filter0_dd_304_317945)" },
            a.createElement(
              "g",
              { clipPath: "url(#clip0_304_317945)" },
              a.createElement("rect", {
                x: "6",
                y: "2",
                width: "40",
                height: "40",
                rx: "8",
                fill: "#288041",
              }),
              a.createElement(
                "g",
                { clipPath: "url(#clip1_304_317945)" },
                a.createElement("rect", {
                  x: "14.75",
                  y: "10.75",
                  width: "22.5",
                  height: "22.5",
                  rx: "2",
                  fill: "#215D31",
                }),
                a.createElement("rect", {
                  x: "20.6104",
                  y: "20.1591",
                  width: "20.1485",
                  height: "20.1485",
                  transform: "rotate(45 20.6104 20.1591)",
                  fill: "#93D4A5",
                }),
                a.createElement("rect", {
                  x: "30.9502",
                  y: "16.59",
                  width: "20.1485",
                  height: "20.1485",
                  transform: "rotate(45 30.9502 16.59)",
                  fill: "#93D4A5",
                }),
                a.createElement("circle", {
                  cx: "20.435",
                  cy: "16.2246",
                  r: "2.45455",
                  fill: "#93D4A5",
                }),
              ),
              a.createElement("rect", {
                x: "7.05469",
                y: "3",
                width: "53.75",
                height: "32.25",
                transform: "rotate(45 7.05469 3)",
                fill: "#67B47C",
              }),
              a.createElement(
                "g",
                { clipPath: "url(#clip2_304_317945)" },
                a.createElement(
                  "g",
                  { clipPath: "url(#clip3_304_317945)" },
                  a.createElement("rect", {
                    x: "14.75",
                    y: "10.75",
                    width: "22.5",
                    height: "22.5",
                    rx: "2",
                    fill: "#2B733F",
                  }),
                  a.createElement("rect", {
                    x: "21.3604",
                    y: "21.6592",
                    width: "20.1485",
                    height: "20.1485",
                    transform: "rotate(45 21.3604 21.6592)",
                    fill: "#A9E0B8",
                  }),
                  a.createElement("rect", {
                    x: "32.2012",
                    y: "18.5908",
                    width: "20.1485",
                    height: "20.1485",
                    transform: "rotate(45 32.2012 18.5908)",
                    fill: "#A9E0B8",
                  }),
                  a.createElement("circle", {
                    cx: "21.685",
                    cy: "17.9746",
                    r: "2.45455",
                    fill: "#A9E0B8",
                  }),
                ),
              ),
            ),
          ),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "filter",
              {
                id: "filter0_dd_304_317945",
                x: "0",
                y: "0",
                width: "52",
                height: "53",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
              },
              a.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              a.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              a.createElement("feOffset", { dy: "5" }),
              a.createElement("feGaussianBlur", { stdDeviation: "3" }),
              a.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
              a.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_304_317945",
              }),
              a.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              a.createElement("feOffset", { dy: "1" }),
              a.createElement("feGaussianBlur", { stdDeviation: "1.5" }),
              a.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
              a.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in2: "effect1_dropShadow_304_317945",
                result: "effect2_dropShadow_304_317945",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect2_dropShadow_304_317945",
                result: "shape",
              }),
            ),
            a.createElement(
              "clipPath",
              { id: "clip0_304_317945" },
              a.createElement("rect", {
                x: "6",
                y: "2",
                width: "40",
                height: "40",
                rx: "8",
                fill: "white",
              }),
            ),
            a.createElement(
              "clipPath",
              { id: "clip1_304_317945" },
              a.createElement("rect", {
                x: "14.75",
                y: "10.75",
                width: "22.5",
                height: "22.5",
                rx: "2",
                fill: "white",
              }),
            ),
            a.createElement(
              "clipPath",
              { id: "clip2_304_317945" },
              a.createElement("rect", {
                width: "60.7428",
                height: "29.9046",
                fill: "white",
                transform: "translate(7.20801 3.17212) rotate(45)",
              }),
            ),
            a.createElement(
              "clipPath",
              { id: "clip3_304_317945" },
              a.createElement("rect", {
                x: "14.75",
                y: "10.75",
                width: "22.5",
                height: "22.5",
                rx: "2",
                fill: "white",
              }),
            ),
          ),
        ),
      Wm = et(ya()),
      qs = w.div({ display: "flex", flexDirection: "column" }),
      Ki = w.div(({ theme: e }) => ({
        padding: 15,
        lineHeight: "18px",
        borderBottom: `1px solid ${e.appBorderColor}`,
        p: { margin: "10px 0", "&:last-of-type": { marginBottom: 0 } },
        dl: { display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, margin: "10px 0 0 0" },
        dt: { color: e.color.mediumdark, fontWeight: 700 },
        dd: { marginLeft: 0 },
        "button + button": { marginLeft: 10 },
      })),
      cr = w.div({ display: "flex", fontWeight: "bold", marginBottom: 15 }),
      Ho = w(G5)(({ theme: e }) => ({
        width: 12,
        height: 12,
        margin: "3px 6px",
        verticalAlign: "top",
        color: e.color.mediumdark,
      })),
      Or = { width: 14, height: 14, margin: "2px 6px 2px 0", verticalAlign: "top" },
      Gm = w(ru)(Or),
      qm = w(V5)(Or),
      Ym = w(is)(Or),
      Qm = w(H5)(Or),
      Rl = w(fl)({ marginLeft: "auto" }),
      Il = w(Je)({ margin: -5, marginLeft: "auto" }),
      ce = w(Kr)(
        {
          "&&": {
            display: "inline-flex",
            borderRadius: 4,
            fontSize: 13,
            lineHeight: "14px",
            padding: "9px 12px",
            alignItems: "center",
            "@container (min-width: 800px)": { padding: "8px 10px" },
          },
        },
        ({ link: e, theme: t }) =>
          e &&
          ue({
            "&&": {
              background: "none",
              boxShadow: "none",
              padding: 2,
              fontWeight: "normal",
              color: t.base === "light" ? t.color.dark : "#C9CDCF",
              opacity: 0.8,
              transition: "opacity 150ms ease-out",
              "&:hover, &:focus": { opacity: 1 },
              "&:focus:not(:active)": { outline: `1px solid ${t.color.secondary}` },
            },
          }),
        ({ tertiary: e }) => e && ue({ "&&:hover": { boxShadow: "none" } }),
        ({ belowText: e }) => e && { marginTop: 7 },
      ),
      Fe = w(eo)(({ theme: e }) => ({
        color: e.base === "light" ? e.color.darker : e.color.lighter,
        border: `1px solid ${e.appBorderColor}`,
        fontSize: "12px",
        padding: "2px 3px",
      })),
      Km = {
        autoAcceptChanges: {
          description: "Automatically accept visual changes - usually for a specific branch name.",
          type: "true or branch name",
        },
        buildScriptName: {
          description: "The package.json script that builds your Storybook.",
          type: "string",
        },
        cypress: {
          description: "Run build against `@chromatic-com/cypress` test archives.",
          type: "boolean",
        },
        debug: { description: "Output verbose logs and debug information.", type: "boolean" },
        diagnosticsFile: {
          description: "Write process information to a JSON file.",
          type: "string or boolean",
        },
        exitOnceUploaded: {
          description: "Exit the process as soon as your Storybook is published.",
          type: "string or boolean",
        },
        exitZeroOnChanges: {
          description: "Exit the process succesfully even when visual changes are found.",
          type: "string or boolean",
        },
        externals: {
          description:
            "Disable TurboSnap when any of these files have changed since the baseline build.",
          type: "string: ['public/**']",
        },
        fileHashing: {
          description: "Apply file hashing to skip uploading unchanged files - default: true",
          type: "boolean",
        },
        ignoreLastBuildOnBranch: {
          description:
            "Do not use the last build on this branch as a baseline if it is no longer in history (i.e. branch was rebased).",
          type: "string",
        },
        junitReport: {
          description: "Write build results to a JUnit XML file.",
          type: "string or boolean",
        },
        logFile: { description: "Write Chromatic CLI logs to a file.", type: "string or boolean" },
        onlyChanged: {
          description:
            "Enables TurboSnap to only run stories affected by files changed since the baseline build.",
          type: "true or string (branch name)",
          glob: !0,
        },
        onlyStoryFiles: {
          description: "Only run a single story or a subset of stories by their filename(s).",
          type: "string[]",
        },
        onlyStoryNames: {
          description: "Only run a single story or a subset of stories by their name(s).",
          type: "string[]",
        },
        outputDir: {
          description:
            "Relative path to target directory for building your Storybook, in case you want to preserve it.",
          type: "string",
        },
        playwright: {
          description: "Run build against `@chromatic-com/playwright` test archives.",
          type: "boolean",
        },
        projectId: { description: "Unique identifier for your project. ", type: "string" },
        projectToken: {
          description:
            "Secret token for your project. Preferably configured through CHROMATIC_PROJECT_TOKEN.",
          type: "string",
        },
        skip: {
          description:
            "Skip Chromatic tests, but mark the commit as passing. Avoids blocking PRs due to required merge checks.",
          type: "string or boolean",
        },
        storybookBaseDir: {
          description: "Relative path from repository root to Storybook project root.",
          type: "string",
        },
        storybookBuildDir: {
          description: "Path to the directory of an already built Storybook.",
          type: "string",
        },
        storybookConfigDir: {
          description:
            "Relative path from where you run Chromatic to your Storybook config directory.",
          type: "string",
        },
        storybookLogFile: {
          description: "Write Storybook build logs to a file.",
          type: "string or boolean",
        },
        untraced: {
          description:
            "Disregard these files and their dependencies when tracing dependent stories for TurboSnap.",
          type: "string[]",
        },
        uploadMetadata: {
          description: "Upload Chromatic metadata files as part of the published Storybook.",
          type: "boolean",
        },
        zip: {
          description:
            "Publish your Storybook to Chromatic as a single zip file instead of individual content files.",
          type: "boolean",
        },
      },
      Jm = w(Il)({ position: "absolute", right: 16, top: 10 }),
      Xm = w.div(({ theme: e }) => ({
        backgroundColor: e.background.content,
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        overflowY: "auto",
        padding: 20,
        position: "relative",
      })),
      e4 = w.div({ margin: "0 auto", maxWidth: 600, width: "100%" }),
      jo = w.div(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        marginBottom: 20,
        paddingBottom: 20,
        code: { fontSize: "90%" },
      })),
      t4 = w(cr)({ marginBottom: 10 }),
      n4 = w.div({ display: "flex", flexDirection: "column", gap: 20 }),
      zo = w.div(({ theme: e }) => ({
        alignItems: "center",
        borderRadius: e.appBorderRadius,
        display: "flex",
        flexWrap: "wrap",
        "> div": { width: "100%" },
      })),
      Uo = w.div(({ theme: e }) => ({
        display: "flex",
        flexGrow: 1,
        flexWrap: "wrap",
        gap: "5px 10px",
      })),
      $o = w.div(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        div: { marginLeft: 5, position: "relative", top: 2 },
      })),
      Wo = w.div({ marginTop: 10 }),
      a4 = w.div(({ hideBorderRadius: e, theme: t }) => ({
        background: t.base === "dark" ? t.color.darkest : t.color.lighter,
        border: `1px solid ${t.appBorderColor}`,
        borderRadius: t.appBorderRadius,
        borderBottomLeftRadius: e ? 0 : t.appBorderRadius,
        borderBottomRightRadius: e ? 0 : t.appBorderRadius,
        color: t.base === "dark" ? t.color.medium : t.color.dark,
        fontFamily: t.typography.fonts.mono,
        fontSize: 13,
        lineHeight: "20px",
        padding: "5px 10px",
        wordWrap: "break-word",
      })),
      r4 = w.div(({ theme: e }) => ({ color: e.color.warningText })),
      Go = w.div(({ theme: e }) => ({
        color: e.base === "dark" ? e.color.medium : e.color.dark,
        marginTop: 2,
      })),
      qo = w.div(({ warning: e, theme: t }) => ({
        alignItems: "center",
        display: "flex",
        backgroundColor: e
          ? t.base === "dark"
            ? "#342E1A"
            : t.background.warning
          : t.background.hoverable,
        border: `1px solid ${t.appBorderColor}`,
        borderRadius: 3,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTop: 0,
        fontSize: t.typography.size.s1,
        gap: 5,
        lineHeight: "20px",
        padding: 5,
        svg: {
          color: e
            ? t.base === "dark"
              ? t.color.warning
              : t.color.warningText
            : t.color.secondary,
          flexShrink: 0,
        },
        code: { fontSize: "85%" },
      })),
      i4 = w.div(({ theme: e }) => ({
        "&:nth-last-of-type(2)": {
          borderBottom: `1px solid ${e.appBorderColor}`,
          paddingBottom: 30,
        },
      })),
      Ys = { height: 12, margin: 2, verticalAlign: "top", width: 12 },
      l4 = w(Y5)(Ys),
      o4 = w(U5)(Ys),
      s4 = ({ onClose: e }) => {
        let { uninstallAddon: t } = Ll(),
          [n] = Ee(Ar),
          { configuration: r = {}, problems: i = {}, suggestions: l = {} } = n || {},
          { configFile: o, ...s } = r,
          c = Object.keys({ ...s, ...i, ...l })
            .sort()
            .map(d => ({ key: d, value: d in s ? s[d] : void 0, problem: i[d], suggestion: l[d] }));
        return a.createElement(
          Xm,
          null,
          a.createElement(
            Jm,
            { onClick: e, style: { marginRight: -8 } },
            a.createElement(Rl, { "aria-label": "Close" }),
          ),
          a.createElement(
            e4,
            null,
            a.createElement(t4, null, "Configuration"),
            o
              ? a.createElement(
                  jo,
                  null,
                  "This is a read-only representation of the Chromatic configuration options found in",
                  " ",
                  a.createElement(Fe, null, o),
                  ". Changes to the config file will be reflected here.",
                  " ",
                  a.createElement(
                    $t,
                    {
                      href: "https://www.chromatic.com/docs/configure/",
                      target: "_blank",
                      withArrow: !0,
                    },
                    "Learn more",
                  ),
                )
              : a.createElement(
                  jo,
                  null,
                  "To configure this addon, create ",
                  a.createElement(Fe, null, "chromatic.config.json"),
                  " in your project's root directory.",
                  " ",
                  a.createElement(
                    $t,
                    {
                      href: "https://www.chromatic.com/docs/cli#chromatic-config-file",
                      target: "_blank",
                      withArrow: !0,
                    },
                    "Learn more",
                  ),
                ),
            c &&
              a.createElement(
                n4,
                null,
                c.map(({ key: d, value: m, problem: u, suggestion: p }) =>
                  a.createElement(
                    i4,
                    { key: d, id: `${d}-option` },
                    a.createElement(
                      zo,
                      null,
                      a.createElement(
                        Uo,
                        null,
                        a.createElement($o, null, d, " "),
                        d in S5 && a.createElement(r4, null, "*Disabled for local builds"),
                      ),
                      a.createElement(Go, null, Km[d]?.description),
                      a.createElement(
                        Wo,
                        null,
                        a.createElement(
                          a4,
                          { hideBorderRadius: !!(u || p) },
                          m === void 0 ? "undefined" : JSON.stringify(m),
                        ),
                      ),
                    ),
                    u !== void 0 &&
                      a.createElement(
                        qo,
                        { warning: !0 },
                        a.createElement(l4, null),
                        u === null
                          ? a.createElement(
                              "span",
                              null,
                              a.createElement("strong", null, "Warning: "),
                              "This should be removed.",
                            )
                          : a.createElement(
                              "span",
                              null,
                              a.createElement("strong", null, "Warning: "),
                              "This should be: ",
                              a.createElement(Fe, null, JSON.stringify(u)),
                            ),
                      ),
                    p !== void 0 &&
                      a.createElement(
                        qo,
                        null,
                        a.createElement(o4, null),
                        a.createElement(
                          "span",
                          null,
                          a.createElement("strong", null, "Hint: "),
                          "Try setting as ",
                          a.createElement(Fe, null, JSON.stringify(p)),
                        ),
                      ),
                  ),
                ),
                a.createElement(
                  "div",
                  null,
                  a.createElement(
                    zo,
                    null,
                    a.createElement(Uo, null, a.createElement($o, null, "Uninstall addon")),
                    a.createElement(
                      Go,
                      null,
                      "Removing the addon updates your Storybook configuration and uninstalls the dependency.",
                    ),
                    a.createElement(Wo, null, a.createElement(ce, { onClick: t }, "Uninstall")),
                  ),
                ),
              ),
          ),
        );
      },
      Qs = {
        configVisible: !1,
        settingsVisible: !1,
        warningsVisible: !1,
        baselineImageVisible: !1,
        focusVisible: !1,
        diffVisible: !1,
      },
      un = e => (t, n) => ({ ...t, [e]: typeof n == "boolean" ? n : !t[e] }),
      c4 = {
        toggleDiff: un("diffVisible"),
        toggleFocus: un("focusVisible"),
        toggleConfig: un("configVisible"),
        toggleSettings: un("settingsVisible"),
        toggleWarnings: un("warningsVisible"),
        toggleBaselineImage: un("baselineImageVisible"),
      },
      d4 = (e, t) => c4[t.type](e, t.payload),
      Ks = qe(Qs),
      Js = qe(() => {}),
      Lr = () => bt(Ks, "Controls"),
      _n = () => {
        let e = bt(Js, "ControlsDispatch");
        return wt(
          () => ({
            toggleDiff: t => e({ type: "toggleDiff", payload: t }),
            toggleFocus: t => e({ type: "toggleFocus", payload: t }),
            toggleConfig: t => e({ type: "toggleConfig", payload: t }),
            toggleSettings: t => e({ type: "toggleSettings", payload: t }),
            toggleWarnings: t => e({ type: "toggleWarnings", payload: t }),
            toggleBaselineImage: t => e({ type: "toggleBaselineImage", payload: t }),
          }),
          [e],
        );
      },
      u4 = ({ children: e, initialState: t = Qs }) => {
        let [n, r] = Xl(d4, t);
        return a.createElement(
          Ks.Provider,
          { value: n },
          a.createElement(Js.Provider, { value: r }, e),
        );
      },
      m4 = w.div({ "& > div": { minWidth: 120 } }),
      ia = ({ children: e, links: t, note: n, ...r }) => {
        let [i, l] = a.useState(!1),
          o = a.createElement(
            we,
            {
              closeOnOutsideClick: !0,
              closeOnTriggerHidden: !0,
              onVisibleChange: s => l(s),
              tooltip: ({ onHide: s }) =>
                a.createElement(
                  m4,
                  null,
                  a.createElement(no, {
                    links: t.map(c => ({ ...c, onClick: (...d) => (s(), c.onClick?.(...d)) })),
                  }),
                ),
              trigger: "click",
              ...r,
            },
            typeof e == "function" ? e(i) : a.createElement(Je, { active: i }, e),
          );
        return n
          ? a.createElement(
              we,
              { tooltip: a.createElement(_e, { note: n }), trigger: "hover", hasChrome: !1 },
              o,
            )
          : o;
      },
      Rr = () => {
        let { accessToken: e, setAccessToken: t, subdomain: n } = Tl(),
          { toggleConfig: r } = _n(),
          [i] = Ee(ns),
          { projectId: l } = i || {},
          o = [
            {
              id: "learn",
              title: "About this addon",
              icon: a.createElement(ss, { "aria-hidden": !0 }),
              href: "https://www.chromatic.com/docs/visual-testing-addon",
              target: "_blank",
            },
            {
              id: "configuration",
              title: "Configuration",
              icon: a.createElement(j5, { "aria-hidden": !0 }),
              onClick: () => r(),
            },
            ...(l
              ? [
                  {
                    id: "visit",
                    title: "View project on Chromatic",
                    icon: a.createElement(cs, { "aria-hidden": !0 }),
                    href: l
                      ? `https://${n}.chromatic.com/builds?appId=${l?.split(":")[1]}`
                      : `https://${n}.chromatic.com/start`,
                    target: "_blank",
                  },
                ]
              : []),
            ...(e
              ? [
                  {
                    id: "logout",
                    title: "Log out",
                    icon: a.createElement(iu, { "aria-hidden": !0 }),
                    onClick: () => t(null),
                  },
                ]
              : []),
          ];
        return a.createElement(ia, { placement: "top", links: o }, a.createElement(z5, null));
      };
    w.div(({ hidden: e, theme: t }) => ({
      background: t.background.app,
      containerType: "size",
      display: e ? "none" : "flex",
      flexDirection: "column",
      height: "100%",
    }));
    var p4 = w.div(
        { display: "flex", flexDirection: "column", flexGrow: 1 },
        ({ hidden: e }) => e && { display: "none" },
      ),
      Xn = w.div(({ grow: e }) => e && { flexGrow: e ? 1 : "auto" }),
      Qn = w.div(
        { display: "flex", flexDirection: "row", margin: 15 },
        ({ header: e, theme: t }) =>
          e && {
            margin: 0,
            padding: 15,
            borderBottom: `1px solid ${t.appBorderColor}`,
            "@container (min-width: 800px)": {
              height: 40,
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px 15px",
            },
          },
      ),
      h4 = w(Qn)({ alignItems: "center", height: 40, margin: "0 10px" }),
      Xe = w.div(
        { display: "flex", flexDirection: "column", alignItems: "center" },
        ({ push: e }) => e && { marginLeft: "auto" },
      ),
      Yo = w.div(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        display: "flex",
        alignItems: "center",
        minHeight: 40,
        lineHeight: "20px",
        padding: "5px 15px",
      })),
      f4 = w(Xn)(({ theme: e }) => ({
        background: e.background.warning,
        color: e.color.warningText,
      })),
      g4 = w(Xn)(({ theme: e }) => ({
        background: e.background.hoverable,
        color: e.color.defaultText,
      })),
      v4 = ({ hidden: e, ignoreConfig: t, ignoreSuggestions: n, onOpen: r }) => {
        let [i] = Ee(Ar),
          l = Object.keys(i?.problems || {}),
          o = Object.keys(i?.suggestions || {}),
          [s, c] = Me(() => !!localStorage.getItem(bo)),
          d = H(() => {
            c(!0), localStorage.setItem(bo, "true");
          }, []),
          m = a.createElement(
            Ie,
            { isButton: !0, onClick: () => r(l[0] || o[0]), withArrow: !0 },
            "Show details",
          );
        return l.length > 0 && !t
          ? a.createElement(
              f4,
              { hidden: e },
              a.createElement(
                Yo,
                null,
                a.createElement(
                  Xe,
                  null,
                  a.createElement(
                    "span",
                    null,
                    "Visual tests locked due to configuration ",
                    (0, Wm.default)("problem", l.length),
                    ".",
                    " ",
                    m,
                  ),
                ),
              ),
            )
          : o.length > 0 && !s && !t && !n
            ? a.createElement(
                g4,
                { hidden: e },
                a.createElement(
                  Yo,
                  null,
                  a.createElement(
                    Xe,
                    null,
                    a.createElement("span", null, "Configuration could be improved. ", m),
                  ),
                  a.createElement(
                    Xe,
                    { push: !0 },
                    a.createElement(Je, { onClick: d }, a.createElement(fl, null)),
                  ),
                ),
              )
            : null;
      },
      y4 = w.div({ display: "flex", flexDirection: "column", height: "100%" }),
      Qo = w.div(({ hidden: e, theme: t }) => ({
        background: t.background.app,
        display: e ? "none" : "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
        overflowY: "auto",
      })),
      Ir = w.div(({ theme: e }) => ({
        background: e.background.bar,
        borderTop: `1px solid ${e.appBorderColor}`,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 39,
        flexShrink: 0,
        padding: "0 10px",
      })),
      ve = ({
        children: e,
        footer: t = a.createElement(
          Ir,
          null,
          a.createElement(Xe, { push: !0 }),
          a.createElement(Xe, null, a.createElement(Rr, null)),
        ),
        ignoreConfig: n = !1,
        ignoreSuggestions: r = !t,
      }) => {
        let { configVisible: i } = Lr(),
          { toggleConfig: l } = _n(),
          o = H(
            s => {
              l(!0),
                s &&
                  setTimeout(() => {
                    document
                      .getElementById(`${s}-option`)
                      ?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
                  }, 200);
            },
            [l],
          );
        return a.createElement(
          y4,
          null,
          a.createElement(v4, { onOpen: o, hidden: i, ignoreConfig: n, ignoreSuggestions: r }),
          a.createElement(Qo, { hidden: i }, e),
          a.createElement(Qo, { hidden: !i }, a.createElement(s4, { onClose: () => l(!1) })),
          t,
        );
      },
      E4 = w.div(({ theme: e }) => ({
        position: "relative",
        "&& input": {
          color: e.input.color || "inherit",
          background: e.input.background,
          boxShadow: `${e.input.border} 0 0 0 1px inset`,
          fontSize: e.typography.size.s2,
          lineHeight: "20px",
        },
      })),
      b4 = w.div(({ theme: e }) => ({
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: 40,
        right: 0,
        zIndex: 2,
        overflow: "hidden",
        height: 40,
        display: "flex",
        alignItems: "center",
        lineHeight: "20px",
        color: e.input.color || "inherit",
        fontSize: e.typography.size.s2,
        span: { opacity: 0 },
      })),
      k4 = ({ value: e, placeholder: t, suffix: n }) =>
        a.createElement(
          b4,
          null,
          a.createElement("span", null, e || t),
          a.createElement("b", null, n),
        ),
      w4 = ({ id: e, value: t, placeholder: n, suffix: r, ...i }) =>
        a.createElement(
          E4,
          null,
          a.createElement(zs, {
            id: e,
            hideLabel: !0,
            label: "",
            value: t,
            placeholder: n,
            crossOrigin: void 0,
            enterKeyHint: void 0,
            ...i,
          }),
          a.createElement(k4, { value: t, placeholder: n, suffix: r }),
        ),
      Ko = w(Je)(({ theme: e }) => ({
        color: e.base === "light" ? "currentColor" : e.color.medium,
        fontSize: e.typography.size.s2,
        fontWeight: e.typography.weight.bold,
      })),
      Zr = ({ onBack: e }) =>
        a.createElement(
          h4,
          null,
          e &&
            a.createElement(
              Xe,
              null,
              a.createElement(Ko, { onClick: e }, a.createElement(K5, null), "Back"),
            ),
          a.createElement(
            Xe,
            { push: !0 },
            a.createElement(
              we,
              {
                as: "div",
                hasChrome: !1,
                trigger: "hover",
                tooltip: a.createElement(_e, { note: "Learn about visual tests" }),
              },
              a.createElement(
                Ko,
                {
                  as: "a",
                  href: "https://www.chromatic.com/features/visual-test",
                  target: "_blank",
                },
                a.createElement(ss, null),
              ),
            ),
          ),
        ),
      C4 = w.form({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 300,
        margin: 10,
      }),
      S4 = w(Kr)({
        "&&": {
          fontSize: 13,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        },
      }),
      x4 = ({ onBack: e, onSignIn: t }) => {
        let [n, r] = Me(""),
          [i, l] = Me(null),
          o = H(c => {
            let d = c.target.value.replace(/[^a-z0-9-]/g, "");
            r(d), l(null);
          }, []),
          s = H(
            c => {
              c.preventDefault(), n ? t(n) : l("Please enter a subdomain");
            },
            [n, t],
          );
        return a.createElement(
          ve,
          { footer: null, ignoreConfig: !0 },
          a.createElement(Zr, { onBack: e }),
          a.createElement(
            he,
            null,
            a.createElement("div", null, a.createElement(Gs, null), a.createElement(rn, null)),
            a.createElement(me, null, "Sign in with SSO"),
            a.createElement(j, { muted: !0 }, "Enter your team's Chromatic URL."),
            a.createElement(
              C4,
              { onSubmit: s },
              a.createElement(w4, {
                autoFocus: !0,
                icon: "users",
                value: n,
                placeholder: "yourteam",
                suffix: ".chromatic.com",
                onChange: o,
                id: "subdomain-input",
                stackLevel: "top",
                error: i,
                errorTooltipPlacement: "top",
              }),
              a.createElement(S4, { type: "submit", variant: "solid", size: "medium" }, "Continue"),
            ),
          ),
        );
      },
      yt = w.div(() => ({
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        textAlign: "center",
      })),
      se = w.div(e => ({
        display: "flex",
        flexDirection: "column",
        gap: 15,
        alignItems: e.alignItems ?? "center",
        textAlign: e.textAlign ?? "center",
      })),
      N4 = ({ onBack: e, onSignIn: t, onSignInWithSSO: n }) =>
        a.createElement(
          ve,
          { footer: null, ignoreConfig: !0 },
          a.createElement(Zr, { onBack: e }),
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              { alignItems: "center", textAlign: "center" },
              a.createElement(
                "div",
                null,
                a.createElement(Gs, null),
                a.createElement(rn, null),
                a.createElement(me, null, "Sign in to begin visual testing"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Pinpoint bugs instantly by connecting with cloud browsers that run visual tests in parallel.",
                ),
              ),
              a.createElement(
                yt,
                null,
                a.createElement(
                  ce,
                  { variant: "solid", size: "medium", onClick: () => t() },
                  "Sign in with Chromatic",
                ),
                a.createElement(ce, { link: !0, onClick: () => n() }, "Sign in with SSO"),
              ),
            ),
          ),
        );
    function yn(e, t) {
      return t;
    }
    var M4 = {
      "\n  query VisualTestsProjectCountQuery {\n    viewer {\n      projectCount\n      accounts {\n        newProjectUrl\n      }\n    }\n  }\n":
        q2,
      "\n  query SelectProjectsQuery {\n    viewer {\n      accounts {\n        id\n        name\n        avatarUrl\n        newProjectUrl\n        projects {\n          id\n          name\n          webUrl\n          lastBuild {\n            branch\n            number\n          }\n        }\n      }\n    }\n  }\n":
        Y2,
      "\n  query ProjectQuery($projectId: ID!) {\n    project(id: $projectId) {\n      id\n      name\n      webUrl\n      lastBuild {\n        branch\n        number\n      }\n    }\n  }\n":
        Q2,
      "\n  mutation UpdateUserPreferences($input: UserPreferencesInput!) {\n    updateUserPreferences(input: $input) {\n      updatedPreferences {\n        vtaOnboarding\n      }\n    }\n  }\n":
        K2,
      "\n  query AddonVisualTestsBuild(\n    $projectId: ID!\n    $branch: String!\n    $gitUserEmailHash: String!\n    $repositoryOwnerName: String\n    $storyId: String!\n    $testStatuses: [TestStatus!]!\n    $selectedBuildId: ID!\n    $hasSelectedBuildId: Boolean!\n  ) {\n    project(id: $projectId) {\n      name\n      manageUrl\n      account {\n        billingUrl\n        suspensionReason\n      }\n      features {\n        uiTests\n      }\n      lastBuildOnBranch: lastBuild(\n        branches: [$branch]\n        repositoryOwnerName: $repositoryOwnerName\n        localBuilds: { localBuildEmailHash: $gitUserEmailHash }\n      ) {\n        ...LastBuildOnBranchBuildFields\n        ...SelectedBuildFields @skip(if: $hasSelectedBuildId)\n      }\n      lastBuild {\n        id\n        slug\n        branch\n      }\n    }\n    selectedBuild: build(id: $selectedBuildId) @include(if: $hasSelectedBuildId) {\n      ...SelectedBuildFields\n    }\n    viewer {\n      preferences {\n        vtaOnboarding\n      }\n      projectMembership(projectId: $projectId) {\n        userCanReview: meetsAccessLevel(minimumAccessLevel: REVIEWER)\n      }\n    }\n  }\n":
        J2,
      "\n  fragment LastBuildOnBranchBuildFields on Build {\n    __typename\n    id\n    status\n    committedAt\n    ... on StartedBuild {\n      testsForStatus: tests(first: 1000, statuses: $testStatuses) {\n        nodes {\n          ...StatusTestFields\n        }\n      }\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...LastBuildOnBranchTestFields\n        }\n      }\n    }\n    ... on CompletedBuild {\n      result\n      testsForStatus: tests(first: 1000, statuses: $testStatuses) {\n        nodes {\n          ...StatusTestFields\n        }\n      }\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...LastBuildOnBranchTestFields\n        }\n      }\n    }\n  }\n":
        $2,
      "\n  fragment SelectedBuildFields on Build {\n    __typename\n    id\n    number\n    branch\n    commit\n    committedAt\n    uncommittedHash\n    status\n    ... on StartedBuild {\n      startedAt\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...StoryTestFields\n        }\n      }\n    }\n    ... on CompletedBuild {\n      startedAt\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...StoryTestFields\n        }\n      }\n    }\n  }\n":
        G2,
      "\n  fragment StatusTestFields on Test {\n    id\n    status\n    result\n    story {\n      storyId\n    }\n  }\n":
        z2,
      "\n  fragment LastBuildOnBranchTestFields on Test {\n    status\n    result\n  }\n": U2,
      "\n  fragment StoryTestFields on Test {\n    id\n    status\n    result\n    webUrl\n    comparisons {\n      id\n      result\n      browser {\n        id\n        key\n        name\n        version\n      }\n      captureDiff {\n        diffImage(signed: true) {\n          imageUrl\n          imageWidth\n        }\n        focusImage(signed: true) {\n          imageUrl\n          imageWidth\n        }\n      }\n      headCapture {\n        captureImage(signed: true) {\n          backgroundColor\n          imageUrl\n          imageWidth\n          imageHeight\n          thumbnailUrl\n        }\n        captureError {\n          kind\n          ... on CaptureErrorInteractionFailure {\n            error\n          }\n          ... on CaptureErrorJSError {\n            error\n          }\n          ... on CaptureErrorFailedJS {\n            error\n          }\n        }\n      }\n      baseCapture {\n        captureImage(signed: true) {\n          imageUrl\n          imageWidth\n          imageHeight\n        }\n      }\n    }\n    mode {\n      name\n      globals\n    }\n    story {\n      storyId\n      name\n      component {\n        name\n      }\n    }\n  }\n":
        W2,
      "\n  mutation ReviewTest($input: ReviewTestInput!) {\n    reviewTest(input: $input) {\n      updatedTests {\n        id\n        status\n      }\n      userErrors {\n        ... on UserError {\n          __typename\n          message\n        }\n        ... on BuildSupersededError {\n          build {\n            id\n          }\n        }\n        ... on TestUnreviewableError {\n          test {\n            id\n          }\n        }\n      }\n    }\n  }\n":
        X2,
    };
    function lt(e) {
      return M4[e] ?? {};
    }
    var le;
    (function (e) {
      e.assertEqual = i => i;
      function t(i) {}
      e.assertIs = t;
      function n(i) {
        throw new Error();
      }
      (e.assertNever = n),
        (e.arrayToEnum = i => {
          let l = {};
          for (let o of i) l[o] = o;
          return l;
        }),
        (e.getValidEnumValues = i => {
          let l = e.objectKeys(i).filter(s => typeof i[i[s]] != "number"),
            o = {};
          for (let s of l) o[s] = i[s];
          return e.objectValues(o);
        }),
        (e.objectValues = i =>
          e.objectKeys(i).map(function (l) {
            return i[l];
          })),
        (e.objectKeys =
          typeof Object.keys == "function"
            ? i => Object.keys(i)
            : i => {
                let l = [];
                for (let o in i) Object.prototype.hasOwnProperty.call(i, o) && l.push(o);
                return l;
              }),
        (e.find = (i, l) => {
          for (let o of i) if (l(o)) return o;
        }),
        (e.isInteger =
          typeof Number.isInteger == "function"
            ? i => Number.isInteger(i)
            : i => typeof i == "number" && isFinite(i) && Math.floor(i) === i);
      function r(i, l = " | ") {
        return i.map(o => (typeof o == "string" ? `'${o}'` : o)).join(l);
      }
      (e.joinValues = r),
        (e.jsonStringifyReplacer = (i, l) => (typeof l == "bigint" ? l.toString() : l));
    })(le || (le = {}));
    var Ji;
    (function (e) {
      e.mergeShapes = (t, n) => ({ ...t, ...n });
    })(Ji || (Ji = {}));
    var M = le.arrayToEnum([
        "string",
        "nan",
        "number",
        "integer",
        "float",
        "boolean",
        "date",
        "bigint",
        "symbol",
        "function",
        "undefined",
        "null",
        "array",
        "object",
        "unknown",
        "promise",
        "void",
        "never",
        "map",
        "set",
      ]),
      Lt = e => {
        switch (typeof e) {
          case "undefined":
            return M.undefined;
          case "string":
            return M.string;
          case "number":
            return isNaN(e) ? M.nan : M.number;
          case "boolean":
            return M.boolean;
          case "function":
            return M.function;
          case "bigint":
            return M.bigint;
          case "symbol":
            return M.symbol;
          case "object":
            return Array.isArray(e)
              ? M.array
              : e === null
                ? M.null
                : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function"
                  ? M.promise
                  : typeof Map < "u" && e instanceof Map
                    ? M.map
                    : typeof Set < "u" && e instanceof Set
                      ? M.set
                      : typeof Date < "u" && e instanceof Date
                        ? M.date
                        : M.object;
          default:
            return M.unknown;
        }
      },
      x = le.arrayToEnum([
        "invalid_type",
        "invalid_literal",
        "custom",
        "invalid_union",
        "invalid_union_discriminator",
        "invalid_enum_value",
        "unrecognized_keys",
        "invalid_arguments",
        "invalid_return_type",
        "invalid_date",
        "invalid_string",
        "too_small",
        "too_big",
        "invalid_intersection_types",
        "not_multiple_of",
        "not_finite",
      ]),
      A4 = e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
      at = class extends Error {
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = n => {
              this.issues = [...this.issues, n];
            }),
            (this.addIssues = (n = []) => {
              this.issues = [...this.issues, ...n];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t),
            (this.name = "ZodError"),
            (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          let t =
              e ||
              function (i) {
                return i.message;
              },
            n = { _errors: [] },
            r = i => {
              for (let l of i.issues)
                if (l.code === "invalid_union") l.unionErrors.map(r);
                else if (l.code === "invalid_return_type") r(l.returnTypeError);
                else if (l.code === "invalid_arguments") r(l.argumentsError);
                else if (l.path.length === 0) n._errors.push(t(l));
                else {
                  let o = n,
                    s = 0;
                  for (; s < l.path.length; ) {
                    let c = l.path[s];
                    s === l.path.length - 1
                      ? ((o[c] = o[c] || { _errors: [] }), o[c]._errors.push(t(l)))
                      : (o[c] = o[c] || { _errors: [] }),
                      (o = o[c]),
                      s++;
                  }
                }
            };
          return r(this), n;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, le.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return this.issues.length === 0;
        }
        flatten(e = t => t.message) {
          let t = {},
            n = [];
          for (let r of this.issues)
            r.path.length > 0
              ? ((t[r.path[0]] = t[r.path[0]] || []), t[r.path[0]].push(e(r)))
              : n.push(e(r));
          return { formErrors: n, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      };
    at.create = e => new at(e);
    var la = (e, t) => {
        let n;
        switch (e.code) {
          case x.invalid_type:
            e.received === M.undefined
              ? (n = "Required")
              : (n = `Expected ${e.expected}, received ${e.received}`);
            break;
          case x.invalid_literal:
            n = `Invalid literal value, expected ${JSON.stringify(e.expected, le.jsonStringifyReplacer)}`;
            break;
          case x.unrecognized_keys:
            n = `Unrecognized key(s) in object: ${le.joinValues(e.keys, ", ")}`;
            break;
          case x.invalid_union:
            n = "Invalid input";
            break;
          case x.invalid_union_discriminator:
            n = `Invalid discriminator value. Expected ${le.joinValues(e.options)}`;
            break;
          case x.invalid_enum_value:
            n = `Invalid enum value. Expected ${le.joinValues(e.options)}, received '${e.received}'`;
            break;
          case x.invalid_arguments:
            n = "Invalid function arguments";
            break;
          case x.invalid_return_type:
            n = "Invalid function return type";
            break;
          case x.invalid_date:
            n = "Invalid date";
            break;
          case x.invalid_string:
            typeof e.validation == "object"
              ? "includes" in e.validation
                ? ((n = `Invalid input: must include "${e.validation.includes}"`),
                  typeof e.validation.position == "number" &&
                    (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
                : "startsWith" in e.validation
                  ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
                  : "endsWith" in e.validation
                    ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                    : le.assertNever(e.validation)
              : e.validation !== "regex"
                ? (n = `Invalid ${e.validation}`)
                : (n = "Invalid");
            break;
          case x.too_small:
            e.type === "array"
              ? (n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`)
              : e.type === "string"
                ? (n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`)
                : e.type === "number"
                  ? (n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`)
                  : e.type === "date"
                    ? (n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`)
                    : (n = "Invalid input");
            break;
          case x.too_big:
            e.type === "array"
              ? (n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`)
              : e.type === "string"
                ? (n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`)
                : e.type === "number"
                  ? (n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
                  : e.type === "bigint"
                    ? (n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
                    : e.type === "date"
                      ? (n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`)
                      : (n = "Invalid input");
            break;
          case x.custom:
            n = "Invalid input";
            break;
          case x.invalid_intersection_types:
            n = "Intersection results could not be merged";
            break;
          case x.not_multiple_of:
            n = `Number must be a multiple of ${e.multipleOf}`;
            break;
          case x.not_finite:
            n = "Number must be finite";
            break;
          default:
            (n = t.defaultError), le.assertNever(e);
        }
        return { message: n };
      },
      Xs = la;
    function _4(e) {
      Xs = e;
    }
    function dr() {
      return Xs;
    }
    var ur = e => {
        let { data: t, path: n, errorMaps: r, issueData: i } = e,
          l = [...n, ...(i.path || [])],
          o = { ...i, path: l },
          s = "",
          c = r
            .filter(d => !!d)
            .slice()
            .reverse();
        for (let d of c) s = d(o, { data: t, defaultError: s }).message;
        return { ...i, path: l, message: i.message || s };
      },
      T4 = [];
    function T(e, t) {
      let n = ur({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, dr(), la].filter(r => !!r),
      });
      e.common.issues.push(n);
    }
    var Ze = class {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          this.value === "valid" && (this.value = "dirty");
        }
        abort() {
          this.value !== "aborted" && (this.value = "aborted");
        }
        static mergeArray(e, t) {
          let n = [];
          for (let r of t) {
            if (r.status === "aborted") return z;
            r.status === "dirty" && e.dirty(), n.push(r.value);
          }
          return { status: e.value, value: n };
        }
        static async mergeObjectAsync(e, t) {
          let n = [];
          for (let r of t) n.push({ key: await r.key, value: await r.value });
          return Ze.mergeObjectSync(e, n);
        }
        static mergeObjectSync(e, t) {
          let n = {};
          for (let r of t) {
            let { key: i, value: l } = r;
            if (i.status === "aborted" || l.status === "aborted") return z;
            i.status === "dirty" && e.dirty(),
              l.status === "dirty" && e.dirty(),
              i.value !== "__proto__" &&
                (typeof l.value < "u" || r.alwaysSet) &&
                (n[i.value] = l.value);
          }
          return { status: e.value, value: n };
        }
      },
      z = Object.freeze({ status: "aborted" }),
      e0 = e => ({ status: "dirty", value: e }),
      Be = e => ({ status: "valid", value: e }),
      Xi = e => e.status === "aborted",
      el = e => e.status === "dirty",
      oa = e => e.status === "valid",
      mr = e => typeof Promise < "u" && e instanceof Promise,
      B;
    (function (e) {
      (e.errToObj = t => (typeof t == "string" ? { message: t } : t || {})),
        (e.toString = t => (typeof t == "string" ? t : t?.message));
    })(B || (B = {}));
    var Et = class {
        constructor(e, t, n, r) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = n),
            (this._key = r);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      },
      Jo = (e, t) => {
        if (oa(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let n = new at(e.common.issues);
            return (this._error = n), this._error;
          },
        };
      };
    function $(e) {
      if (!e) return {};
      let { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
      if (t && (n || r))
        throw new Error(
          `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
        );
      return t
        ? { errorMap: t, description: i }
        : {
            errorMap: (l, o) =>
              l.code !== "invalid_type"
                ? { message: o.defaultError }
                : typeof o.data > "u"
                  ? { message: r ?? o.defaultError }
                  : { message: n ?? o.defaultError },
            description: i,
          };
    }
    var Q = class {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return Lt(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: Lt(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new Ze(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: Lt(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (mr(t)) throw new Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          let t = this._parse(e);
          return Promise.resolve(t);
        }
        parse(e, t) {
          let n = this.safeParse(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        safeParse(e, t) {
          var n;
          let r = {
              common: {
                issues: [],
                async: (n = t?.async) !== null && n !== void 0 ? n : !1,
                contextualErrorMap: t?.errorMap,
              },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: Lt(e),
            },
            i = this._parseSync({ data: e, path: r.path, parent: r });
          return Jo(r, i);
        }
        async parseAsync(e, t) {
          let n = await this.safeParseAsync(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        async safeParseAsync(e, t) {
          let n = {
              common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: Lt(e),
            },
            r = this._parse({ data: e, path: n.path, parent: n }),
            i = await (mr(r) ? r : Promise.resolve(r));
          return Jo(n, i);
        }
        refine(e, t) {
          let n = r =>
            typeof t == "string" || typeof t > "u"
              ? { message: t }
              : typeof t == "function"
                ? t(r)
                : t;
          return this._refinement((r, i) => {
            let l = e(r),
              o = () => i.addIssue({ code: x.custom, ...n(r) });
            return typeof Promise < "u" && l instanceof Promise
              ? l.then(s => (s ? !0 : (o(), !1)))
              : l
                ? !0
                : (o(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement((n, r) =>
            e(n) ? !0 : (r.addIssue(typeof t == "function" ? t(n, r) : t), !1),
          );
        }
        _refinement(e) {
          return new rt({
            schema: this,
            typeName: D.ZodEffects,
            effect: { type: "refinement", refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return Nt.create(this, this._def);
        }
        nullable() {
          return tn.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return gt.create(this, this._def);
        }
        promise() {
          return xn.create(this, this._def);
        }
        or(e) {
          return ua.create([this, e], this._def);
        }
        and(e) {
          return ma.create(this, e, this._def);
        }
        transform(e) {
          return new rt({
            ...$(this._def),
            schema: this,
            typeName: D.ZodEffects,
            effect: { type: "transform", transform: e },
          });
        }
        default(e) {
          let t = typeof e == "function" ? e : () => e;
          return new ga({
            ...$(this._def),
            innerType: this,
            defaultValue: t,
            typeName: D.ZodDefault,
          });
        }
        brand() {
          return new n0({ typeName: D.ZodBranded, type: this, ...$(this._def) });
        }
        catch(e) {
          let t = typeof e == "function" ? e : () => e;
          return new vr({ ...$(this._def), innerType: this, catchValue: t, typeName: D.ZodCatch });
        }
        describe(e) {
          let t = this.constructor;
          return new t({ ...this._def, description: e });
        }
        pipe(e) {
          return Br.create(this, e);
        }
        readonly() {
          return Er.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      },
      F4 = /^c[^\s-]{8,}$/i,
      O4 = /^[a-z][a-z0-9]*$/,
      L4 = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      R4 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      I4 = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
      Z4 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
      yi,
      B4 =
        /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      P4 =
        /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
      V4 = e =>
        e.precision
          ? e.offset
            ? new RegExp(
                `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
              )
            : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`)
          : e.precision === 0
            ? e.offset
              ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$")
              : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
            : e.offset
              ? new RegExp(
                  "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$",
                )
              : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
    function D4(e, t) {
      return !!(((t === "v4" || !t) && B4.test(e)) || ((t === "v6" || !t) && P4.test(e)));
    }
    var pt = class extends Q {
      _parse(e) {
        if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== M.string)) {
          let r = this._getOrReturnCtx(e);
          return T(r, { code: x.invalid_type, expected: M.string, received: r.parsedType }), z;
        }
        let t = new Ze(),
          n;
        for (let r of this._def.checks)
          if (r.kind === "min")
            e.data.length < r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              T(n, {
                code: x.too_small,
                minimum: r.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === "max")
            e.data.length > r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              T(n, {
                code: x.too_big,
                maximum: r.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === "length") {
            let i = e.data.length > r.value,
              l = e.data.length < r.value;
            (i || l) &&
              ((n = this._getOrReturnCtx(e, n)),
              i
                ? T(n, {
                    code: x.too_big,
                    maximum: r.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: r.message,
                  })
                : l &&
                  T(n, {
                    code: x.too_small,
                    minimum: r.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: r.message,
                  }),
              t.dirty());
          } else if (r.kind === "email")
            I4.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              T(n, { validation: "email", code: x.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === "emoji")
            yi || (yi = new RegExp(Z4, "u")),
              yi.test(e.data) ||
                ((n = this._getOrReturnCtx(e, n)),
                T(n, { validation: "emoji", code: x.invalid_string, message: r.message }),
                t.dirty());
          else if (r.kind === "uuid")
            R4.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              T(n, { validation: "uuid", code: x.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === "cuid")
            F4.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              T(n, { validation: "cuid", code: x.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === "cuid2")
            O4.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              T(n, { validation: "cuid2", code: x.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === "ulid")
            L4.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              T(n, { validation: "ulid", code: x.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === "url")
            try {
              new URL(e.data);
            } catch {
              (n = this._getOrReturnCtx(e, n)),
                T(n, { validation: "url", code: x.invalid_string, message: r.message }),
                t.dirty();
            }
          else
            r.kind === "regex"
              ? ((r.regex.lastIndex = 0),
                r.regex.test(e.data) ||
                  ((n = this._getOrReturnCtx(e, n)),
                  T(n, { validation: "regex", code: x.invalid_string, message: r.message }),
                  t.dirty()))
              : r.kind === "trim"
                ? (e.data = e.data.trim())
                : r.kind === "includes"
                  ? e.data.includes(r.value, r.position) ||
                    ((n = this._getOrReturnCtx(e, n)),
                    T(n, {
                      code: x.invalid_string,
                      validation: { includes: r.value, position: r.position },
                      message: r.message,
                    }),
                    t.dirty())
                  : r.kind === "toLowerCase"
                    ? (e.data = e.data.toLowerCase())
                    : r.kind === "toUpperCase"
                      ? (e.data = e.data.toUpperCase())
                      : r.kind === "startsWith"
                        ? e.data.startsWith(r.value) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          T(n, {
                            code: x.invalid_string,
                            validation: { startsWith: r.value },
                            message: r.message,
                          }),
                          t.dirty())
                        : r.kind === "endsWith"
                          ? e.data.endsWith(r.value) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            T(n, {
                              code: x.invalid_string,
                              validation: { endsWith: r.value },
                              message: r.message,
                            }),
                            t.dirty())
                          : r.kind === "datetime"
                            ? V4(r).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              T(n, {
                                code: x.invalid_string,
                                validation: "datetime",
                                message: r.message,
                              }),
                              t.dirty())
                            : r.kind === "ip"
                              ? D4(e.data, r.version) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                T(n, {
                                  validation: "ip",
                                  code: x.invalid_string,
                                  message: r.message,
                                }),
                                t.dirty())
                              : le.assertNever(r);
        return { status: t.value, value: e.data };
      }
      _regex(e, t, n) {
        return this.refinement(r => e.test(r), {
          validation: t,
          code: x.invalid_string,
          ...B.errToObj(n),
        });
      }
      _addCheck(e) {
        return new pt({ ...this._def, checks: [...this._def.checks, e] });
      }
      email(e) {
        return this._addCheck({ kind: "email", ...B.errToObj(e) });
      }
      url(e) {
        return this._addCheck({ kind: "url", ...B.errToObj(e) });
      }
      emoji(e) {
        return this._addCheck({ kind: "emoji", ...B.errToObj(e) });
      }
      uuid(e) {
        return this._addCheck({ kind: "uuid", ...B.errToObj(e) });
      }
      cuid(e) {
        return this._addCheck({ kind: "cuid", ...B.errToObj(e) });
      }
      cuid2(e) {
        return this._addCheck({ kind: "cuid2", ...B.errToObj(e) });
      }
      ulid(e) {
        return this._addCheck({ kind: "ulid", ...B.errToObj(e) });
      }
      ip(e) {
        return this._addCheck({ kind: "ip", ...B.errToObj(e) });
      }
      datetime(e) {
        var t;
        return typeof e == "string"
          ? this._addCheck({ kind: "datetime", precision: null, offset: !1, message: e })
          : this._addCheck({
              kind: "datetime",
              precision: typeof e?.precision > "u" ? null : e?.precision,
              offset: (t = e?.offset) !== null && t !== void 0 ? t : !1,
              ...B.errToObj(e?.message),
            });
      }
      regex(e, t) {
        return this._addCheck({ kind: "regex", regex: e, ...B.errToObj(t) });
      }
      includes(e, t) {
        return this._addCheck({
          kind: "includes",
          value: e,
          position: t?.position,
          ...B.errToObj(t?.message),
        });
      }
      startsWith(e, t) {
        return this._addCheck({ kind: "startsWith", value: e, ...B.errToObj(t) });
      }
      endsWith(e, t) {
        return this._addCheck({ kind: "endsWith", value: e, ...B.errToObj(t) });
      }
      min(e, t) {
        return this._addCheck({ kind: "min", value: e, ...B.errToObj(t) });
      }
      max(e, t) {
        return this._addCheck({ kind: "max", value: e, ...B.errToObj(t) });
      }
      length(e, t) {
        return this._addCheck({ kind: "length", value: e, ...B.errToObj(t) });
      }
      nonempty(e) {
        return this.min(1, B.errToObj(e));
      }
      trim() {
        return new pt({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
      }
      toLowerCase() {
        return new pt({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
      }
      toUpperCase() {
        return new pt({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
      }
      get isDatetime() {
        return !!this._def.checks.find(e => e.kind === "datetime");
      }
      get isEmail() {
        return !!this._def.checks.find(e => e.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find(e => e.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find(e => e.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find(e => e.kind === "uuid");
      }
      get isCUID() {
        return !!this._def.checks.find(e => e.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find(e => e.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find(e => e.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find(e => e.kind === "ip");
      }
      get minLength() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxLength() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e;
      }
    };
    pt.create = e => {
      var t;
      return new pt({
        checks: [],
        typeName: D.ZodString,
        coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
        ...$(e),
      });
    };
    function H4(e, t) {
      let n = (e.toString().split(".")[1] || "").length,
        r = (t.toString().split(".")[1] || "").length,
        i = n > r ? n : r,
        l = parseInt(e.toFixed(i).replace(".", "")),
        o = parseInt(t.toFixed(i).replace(".", ""));
      return (l % o) / Math.pow(10, i);
    }
    var Jt = class extends Q {
      constructor() {
        super(...arguments),
          (this.min = this.gte),
          (this.max = this.lte),
          (this.step = this.multipleOf);
      }
      _parse(e) {
        if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== M.number)) {
          let r = this._getOrReturnCtx(e);
          return T(r, { code: x.invalid_type, expected: M.number, received: r.parsedType }), z;
        }
        let t,
          n = new Ze();
        for (let r of this._def.checks)
          r.kind === "int"
            ? le.isInteger(e.data) ||
              ((t = this._getOrReturnCtx(e, t)),
              T(t, {
                code: x.invalid_type,
                expected: "integer",
                received: "float",
                message: r.message,
              }),
              n.dirty())
            : r.kind === "min"
              ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                T(t, {
                  code: x.too_small,
                  minimum: r.value,
                  type: "number",
                  inclusive: r.inclusive,
                  exact: !1,
                  message: r.message,
                }),
                n.dirty())
              : r.kind === "max"
                ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
                  ((t = this._getOrReturnCtx(e, t)),
                  T(t, {
                    code: x.too_big,
                    maximum: r.value,
                    type: "number",
                    inclusive: r.inclusive,
                    exact: !1,
                    message: r.message,
                  }),
                  n.dirty())
                : r.kind === "multipleOf"
                  ? H4(e.data, r.value) !== 0 &&
                    ((t = this._getOrReturnCtx(e, t)),
                    T(t, { code: x.not_multiple_of, multipleOf: r.value, message: r.message }),
                    n.dirty())
                  : r.kind === "finite"
                    ? Number.isFinite(e.data) ||
                      ((t = this._getOrReturnCtx(e, t)),
                      T(t, { code: x.not_finite, message: r.message }),
                      n.dirty())
                    : le.assertNever(r);
        return { status: n.value, value: e.data };
      }
      gte(e, t) {
        return this.setLimit("min", e, !0, B.toString(t));
      }
      gt(e, t) {
        return this.setLimit("min", e, !1, B.toString(t));
      }
      lte(e, t) {
        return this.setLimit("max", e, !0, B.toString(t));
      }
      lt(e, t) {
        return this.setLimit("max", e, !1, B.toString(t));
      }
      setLimit(e, t, n, r) {
        return new Jt({
          ...this._def,
          checks: [
            ...this._def.checks,
            { kind: e, value: t, inclusive: n, message: B.toString(r) },
          ],
        });
      }
      _addCheck(e) {
        return new Jt({ ...this._def, checks: [...this._def.checks, e] });
      }
      int(e) {
        return this._addCheck({ kind: "int", message: B.toString(e) });
      }
      positive(e) {
        return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: B.toString(e) });
      }
      negative(e) {
        return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: B.toString(e) });
      }
      nonpositive(e) {
        return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: B.toString(e) });
      }
      nonnegative(e) {
        return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: B.toString(e) });
      }
      multipleOf(e, t) {
        return this._addCheck({ kind: "multipleOf", value: e, message: B.toString(t) });
      }
      finite(e) {
        return this._addCheck({ kind: "finite", message: B.toString(e) });
      }
      safe(e) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: B.toString(e),
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: B.toString(e),
        });
      }
      get minValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e;
      }
      get isInt() {
        return !!this._def.checks.find(
          e => e.kind === "int" || (e.kind === "multipleOf" && le.isInteger(e.value)),
        );
      }
      get isFinite() {
        let e = null,
          t = null;
        for (let n of this._def.checks) {
          if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") return !0;
          n.kind === "min"
            ? (t === null || n.value > t) && (t = n.value)
            : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        }
        return Number.isFinite(t) && Number.isFinite(e);
      }
    };
    Jt.create = e =>
      new Jt({ checks: [], typeName: D.ZodNumber, coerce: e?.coerce || !1, ...$(e) });
    var Xt = class extends Q {
      constructor() {
        super(...arguments), (this.min = this.gte), (this.max = this.lte);
      }
      _parse(e) {
        if ((this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== M.bigint)) {
          let r = this._getOrReturnCtx(e);
          return T(r, { code: x.invalid_type, expected: M.bigint, received: r.parsedType }), z;
        }
        let t,
          n = new Ze();
        for (let r of this._def.checks)
          r.kind === "min"
            ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              T(t, {
                code: x.too_small,
                type: "bigint",
                minimum: r.value,
                inclusive: r.inclusive,
                message: r.message,
              }),
              n.dirty())
            : r.kind === "max"
              ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                T(t, {
                  code: x.too_big,
                  type: "bigint",
                  maximum: r.value,
                  inclusive: r.inclusive,
                  message: r.message,
                }),
                n.dirty())
              : r.kind === "multipleOf"
                ? e.data % r.value !== BigInt(0) &&
                  ((t = this._getOrReturnCtx(e, t)),
                  T(t, { code: x.not_multiple_of, multipleOf: r.value, message: r.message }),
                  n.dirty())
                : le.assertNever(r);
        return { status: n.value, value: e.data };
      }
      gte(e, t) {
        return this.setLimit("min", e, !0, B.toString(t));
      }
      gt(e, t) {
        return this.setLimit("min", e, !1, B.toString(t));
      }
      lte(e, t) {
        return this.setLimit("max", e, !0, B.toString(t));
      }
      lt(e, t) {
        return this.setLimit("max", e, !1, B.toString(t));
      }
      setLimit(e, t, n, r) {
        return new Xt({
          ...this._def,
          checks: [
            ...this._def.checks,
            { kind: e, value: t, inclusive: n, message: B.toString(r) },
          ],
        });
      }
      _addCheck(e) {
        return new Xt({ ...this._def, checks: [...this._def.checks, e] });
      }
      positive(e) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: B.toString(e),
        });
      }
      negative(e) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: B.toString(e),
        });
      }
      nonpositive(e) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: B.toString(e),
        });
      }
      nonnegative(e) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: B.toString(e),
        });
      }
      multipleOf(e, t) {
        return this._addCheck({ kind: "multipleOf", value: e, message: B.toString(t) });
      }
      get minValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e;
      }
    };
    Xt.create = e => {
      var t;
      return new Xt({
        checks: [],
        typeName: D.ZodBigInt,
        coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
        ...$(e),
      });
    };
    var sa = class extends Q {
      _parse(e) {
        if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== M.boolean)) {
          let t = this._getOrReturnCtx(e);
          return T(t, { code: x.invalid_type, expected: M.boolean, received: t.parsedType }), z;
        }
        return Be(e.data);
      }
    };
    sa.create = e => new sa({ typeName: D.ZodBoolean, coerce: e?.coerce || !1, ...$(e) });
    var wn = class extends Q {
      _parse(e) {
        if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== M.date)) {
          let r = this._getOrReturnCtx(e);
          return T(r, { code: x.invalid_type, expected: M.date, received: r.parsedType }), z;
        }
        if (isNaN(e.data.getTime())) {
          let r = this._getOrReturnCtx(e);
          return T(r, { code: x.invalid_date }), z;
        }
        let t = new Ze(),
          n;
        for (let r of this._def.checks)
          r.kind === "min"
            ? e.data.getTime() < r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              T(n, {
                code: x.too_small,
                message: r.message,
                inclusive: !0,
                exact: !1,
                minimum: r.value,
                type: "date",
              }),
              t.dirty())
            : r.kind === "max"
              ? e.data.getTime() > r.value &&
                ((n = this._getOrReturnCtx(e, n)),
                T(n, {
                  code: x.too_big,
                  message: r.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: r.value,
                  type: "date",
                }),
                t.dirty())
              : le.assertNever(r);
        return { status: t.value, value: new Date(e.data.getTime()) };
      }
      _addCheck(e) {
        return new wn({ ...this._def, checks: [...this._def.checks, e] });
      }
      min(e, t) {
        return this._addCheck({ kind: "min", value: e.getTime(), message: B.toString(t) });
      }
      max(e, t) {
        return this._addCheck({ kind: "max", value: e.getTime(), message: B.toString(t) });
      }
      get minDate() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e != null ? new Date(e) : null;
      }
      get maxDate() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e != null ? new Date(e) : null;
      }
    };
    wn.create = e => new wn({ checks: [], coerce: e?.coerce || !1, typeName: D.ZodDate, ...$(e) });
    var pr = class extends Q {
      _parse(e) {
        if (this._getType(e) !== M.symbol) {
          let t = this._getOrReturnCtx(e);
          return T(t, { code: x.invalid_type, expected: M.symbol, received: t.parsedType }), z;
        }
        return Be(e.data);
      }
    };
    pr.create = e => new pr({ typeName: D.ZodSymbol, ...$(e) });
    var ca = class extends Q {
      _parse(e) {
        if (this._getType(e) !== M.undefined) {
          let t = this._getOrReturnCtx(e);
          return T(t, { code: x.invalid_type, expected: M.undefined, received: t.parsedType }), z;
        }
        return Be(e.data);
      }
    };
    ca.create = e => new ca({ typeName: D.ZodUndefined, ...$(e) });
    var da = class extends Q {
      _parse(e) {
        if (this._getType(e) !== M.null) {
          let t = this._getOrReturnCtx(e);
          return T(t, { code: x.invalid_type, expected: M.null, received: t.parsedType }), z;
        }
        return Be(e.data);
      }
    };
    da.create = e => new da({ typeName: D.ZodNull, ...$(e) });
    var Cn = class extends Q {
      constructor() {
        super(...arguments), (this._any = !0);
      }
      _parse(e) {
        return Be(e.data);
      }
    };
    Cn.create = e => new Cn({ typeName: D.ZodAny, ...$(e) });
    var Kt = class extends Q {
      constructor() {
        super(...arguments), (this._unknown = !0);
      }
      _parse(e) {
        return Be(e.data);
      }
    };
    Kt.create = e => new Kt({ typeName: D.ZodUnknown, ...$(e) });
    var Mt = class extends Q {
      _parse(e) {
        let t = this._getOrReturnCtx(e);
        return T(t, { code: x.invalid_type, expected: M.never, received: t.parsedType }), z;
      }
    };
    Mt.create = e => new Mt({ typeName: D.ZodNever, ...$(e) });
    var hr = class extends Q {
      _parse(e) {
        if (this._getType(e) !== M.undefined) {
          let t = this._getOrReturnCtx(e);
          return T(t, { code: x.invalid_type, expected: M.void, received: t.parsedType }), z;
        }
        return Be(e.data);
      }
    };
    hr.create = e => new hr({ typeName: D.ZodVoid, ...$(e) });
    var gt = class extends Q {
      _parse(e) {
        let { ctx: t, status: n } = this._processInputParams(e),
          r = this._def;
        if (t.parsedType !== M.array)
          return T(t, { code: x.invalid_type, expected: M.array, received: t.parsedType }), z;
        if (r.exactLength !== null) {
          let l = t.data.length > r.exactLength.value,
            o = t.data.length < r.exactLength.value;
          (l || o) &&
            (T(t, {
              code: l ? x.too_big : x.too_small,
              minimum: o ? r.exactLength.value : void 0,
              maximum: l ? r.exactLength.value : void 0,
              type: "array",
              inclusive: !0,
              exact: !0,
              message: r.exactLength.message,
            }),
            n.dirty());
        }
        if (
          (r.minLength !== null &&
            t.data.length < r.minLength.value &&
            (T(t, {
              code: x.too_small,
              minimum: r.minLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: r.minLength.message,
            }),
            n.dirty()),
          r.maxLength !== null &&
            t.data.length > r.maxLength.value &&
            (T(t, {
              code: x.too_big,
              maximum: r.maxLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: r.maxLength.message,
            }),
            n.dirty()),
          t.common.async)
        )
          return Promise.all(
            [...t.data].map((l, o) => r.type._parseAsync(new Et(t, l, t.path, o))),
          ).then(l => Ze.mergeArray(n, l));
        let i = [...t.data].map((l, o) => r.type._parseSync(new Et(t, l, t.path, o)));
        return Ze.mergeArray(n, i);
      }
      get element() {
        return this._def.type;
      }
      min(e, t) {
        return new gt({ ...this._def, minLength: { value: e, message: B.toString(t) } });
      }
      max(e, t) {
        return new gt({ ...this._def, maxLength: { value: e, message: B.toString(t) } });
      }
      length(e, t) {
        return new gt({ ...this._def, exactLength: { value: e, message: B.toString(t) } });
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    gt.create = (e, t) =>
      new gt({
        type: e,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: D.ZodArray,
        ...$(t),
      });
    function hn(e) {
      if (e instanceof be) {
        let t = {};
        for (let n in e.shape) {
          let r = e.shape[n];
          t[n] = Nt.create(hn(r));
        }
        return new be({ ...e._def, shape: () => t });
      } else
        return e instanceof gt
          ? new gt({ ...e._def, type: hn(e.element) })
          : e instanceof Nt
            ? Nt.create(hn(e.unwrap()))
            : e instanceof tn
              ? tn.create(hn(e.unwrap()))
              : e instanceof At
                ? At.create(e.items.map(t => hn(t)))
                : e;
    }
    var be = class extends Q {
      constructor() {
        super(...arguments),
          (this._cached = null),
          (this.nonstrict = this.passthrough),
          (this.augment = this.extend);
      }
      _getCached() {
        if (this._cached !== null) return this._cached;
        let e = this._def.shape(),
          t = le.objectKeys(e);
        return (this._cached = { shape: e, keys: t });
      }
      _parse(e) {
        if (this._getType(e) !== M.object) {
          let s = this._getOrReturnCtx(e);
          return T(s, { code: x.invalid_type, expected: M.object, received: s.parsedType }), z;
        }
        let { status: t, ctx: n } = this._processInputParams(e),
          { shape: r, keys: i } = this._getCached(),
          l = [];
        if (!(this._def.catchall instanceof Mt && this._def.unknownKeys === "strip"))
          for (let s in n.data) i.includes(s) || l.push(s);
        let o = [];
        for (let s of i) {
          let c = r[s],
            d = n.data[s];
          o.push({
            key: { status: "valid", value: s },
            value: c._parse(new Et(n, d, n.path, s)),
            alwaysSet: s in n.data,
          });
        }
        if (this._def.catchall instanceof Mt) {
          let s = this._def.unknownKeys;
          if (s === "passthrough")
            for (let c of l)
              o.push({
                key: { status: "valid", value: c },
                value: { status: "valid", value: n.data[c] },
              });
          else if (s === "strict")
            l.length > 0 && (T(n, { code: x.unrecognized_keys, keys: l }), t.dirty());
          else if (s !== "strip")
            throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          let s = this._def.catchall;
          for (let c of l) {
            let d = n.data[c];
            o.push({
              key: { status: "valid", value: c },
              value: s._parse(new Et(n, d, n.path, c)),
              alwaysSet: c in n.data,
            });
          }
        }
        return n.common.async
          ? Promise.resolve()
              .then(async () => {
                let s = [];
                for (let c of o) {
                  let d = await c.key;
                  s.push({ key: d, value: await c.value, alwaysSet: c.alwaysSet });
                }
                return s;
              })
              .then(s => Ze.mergeObjectSync(t, s))
          : Ze.mergeObjectSync(t, o);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e) {
        return (
          B.errToObj,
          new be({
            ...this._def,
            unknownKeys: "strict",
            ...(e !== void 0
              ? {
                  errorMap: (t, n) => {
                    var r, i, l, o;
                    let s =
                      (l =
                        (i = (r = this._def).errorMap) === null || i === void 0
                          ? void 0
                          : i.call(r, t, n).message) !== null && l !== void 0
                        ? l
                        : n.defaultError;
                    return t.code === "unrecognized_keys"
                      ? { message: (o = B.errToObj(e).message) !== null && o !== void 0 ? o : s }
                      : { message: s };
                  },
                }
              : {}),
          })
        );
      }
      strip() {
        return new be({ ...this._def, unknownKeys: "strip" });
      }
      passthrough() {
        return new be({ ...this._def, unknownKeys: "passthrough" });
      }
      extend(e) {
        return new be({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
      }
      merge(e) {
        return new be({
          unknownKeys: e._def.unknownKeys,
          catchall: e._def.catchall,
          shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
          typeName: D.ZodObject,
        });
      }
      setKey(e, t) {
        return this.augment({ [e]: t });
      }
      catchall(e) {
        return new be({ ...this._def, catchall: e });
      }
      pick(e) {
        let t = {};
        return (
          le.objectKeys(e).forEach(n => {
            e[n] && this.shape[n] && (t[n] = this.shape[n]);
          }),
          new be({ ...this._def, shape: () => t })
        );
      }
      omit(e) {
        let t = {};
        return (
          le.objectKeys(this.shape).forEach(n => {
            e[n] || (t[n] = this.shape[n]);
          }),
          new be({ ...this._def, shape: () => t })
        );
      }
      deepPartial() {
        return hn(this);
      }
      partial(e) {
        let t = {};
        return (
          le.objectKeys(this.shape).forEach(n => {
            let r = this.shape[n];
            e && !e[n] ? (t[n] = r) : (t[n] = r.optional());
          }),
          new be({ ...this._def, shape: () => t })
        );
      }
      required(e) {
        let t = {};
        return (
          le.objectKeys(this.shape).forEach(n => {
            if (e && !e[n]) t[n] = this.shape[n];
            else {
              let r = this.shape[n];
              for (; r instanceof Nt; ) r = r._def.innerType;
              t[n] = r;
            }
          }),
          new be({ ...this._def, shape: () => t })
        );
      }
      keyof() {
        return t0(le.objectKeys(this.shape));
      }
    };
    be.create = (e, t) =>
      new be({
        shape: () => e,
        unknownKeys: "strip",
        catchall: Mt.create(),
        typeName: D.ZodObject,
        ...$(t),
      });
    be.strictCreate = (e, t) =>
      new be({
        shape: () => e,
        unknownKeys: "strict",
        catchall: Mt.create(),
        typeName: D.ZodObject,
        ...$(t),
      });
    be.lazycreate = (e, t) =>
      new be({
        shape: e,
        unknownKeys: "strip",
        catchall: Mt.create(),
        typeName: D.ZodObject,
        ...$(t),
      });
    var ua = class extends Q {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = this._def.options;
        function r(i) {
          for (let o of i) if (o.result.status === "valid") return o.result;
          for (let o of i)
            if (o.result.status === "dirty")
              return t.common.issues.push(...o.ctx.common.issues), o.result;
          let l = i.map(o => new at(o.ctx.common.issues));
          return T(t, { code: x.invalid_union, unionErrors: l }), z;
        }
        if (t.common.async)
          return Promise.all(
            n.map(async i => {
              let l = { ...t, common: { ...t.common, issues: [] }, parent: null };
              return {
                result: await i._parseAsync({ data: t.data, path: t.path, parent: l }),
                ctx: l,
              };
            }),
          ).then(r);
        {
          let i,
            l = [];
          for (let s of n) {
            let c = { ...t, common: { ...t.common, issues: [] }, parent: null },
              d = s._parseSync({ data: t.data, path: t.path, parent: c });
            if (d.status === "valid") return d;
            d.status === "dirty" && !i && (i = { result: d, ctx: c }),
              c.common.issues.length && l.push(c.common.issues);
          }
          if (i) return t.common.issues.push(...i.ctx.common.issues), i.result;
          let o = l.map(s => new at(s));
          return T(t, { code: x.invalid_union, unionErrors: o }), z;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ua.create = (e, t) => new ua({ options: e, typeName: D.ZodUnion, ...$(t) });
    var Ya = e =>
        e instanceof pa
          ? Ya(e.schema)
          : e instanceof rt
            ? Ya(e.innerType())
            : e instanceof ha
              ? [e.value]
              : e instanceof en
                ? e.options
                : e instanceof fa
                  ? Object.keys(e.enum)
                  : e instanceof ga
                    ? Ya(e._def.innerType)
                    : e instanceof ca
                      ? [void 0]
                      : e instanceof da
                        ? [null]
                        : null,
      Zl = class extends Q {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== M.object)
            return T(t, { code: x.invalid_type, expected: M.object, received: t.parsedType }), z;
          let n = this.discriminator,
            r = t.data[n],
            i = this.optionsMap.get(r);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (T(t, {
                code: x.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [n],
              }),
              z);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, n) {
          let r = new Map();
          for (let i of t) {
            let l = Ya(i.shape[e]);
            if (!l)
              throw new Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
              );
            for (let o of l) {
              if (r.has(o))
                throw new Error(
                  `Discriminator property ${String(e)} has duplicate value ${String(o)}`,
                );
              r.set(o, i);
            }
          }
          return new Zl({
            typeName: D.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: r,
            ...$(n),
          });
        }
      };
    function tl(e, t) {
      let n = Lt(e),
        r = Lt(t);
      if (e === t) return { valid: !0, data: e };
      if (n === M.object && r === M.object) {
        let i = le.objectKeys(t),
          l = le.objectKeys(e).filter(s => i.indexOf(s) !== -1),
          o = { ...e, ...t };
        for (let s of l) {
          let c = tl(e[s], t[s]);
          if (!c.valid) return { valid: !1 };
          o[s] = c.data;
        }
        return { valid: !0, data: o };
      } else if (n === M.array && r === M.array) {
        if (e.length !== t.length) return { valid: !1 };
        let i = [];
        for (let l = 0; l < e.length; l++) {
          let o = e[l],
            s = t[l],
            c = tl(o, s);
          if (!c.valid) return { valid: !1 };
          i.push(c.data);
        }
        return { valid: !0, data: i };
      } else
        return n === M.date && r === M.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
    }
    var ma = class extends Q {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e),
          r = (i, l) => {
            if (Xi(i) || Xi(l)) return z;
            let o = tl(i.value, l.value);
            return o.valid
              ? ((el(i) || el(l)) && t.dirty(), { status: t.value, value: o.data })
              : (T(n, { code: x.invalid_intersection_types }), z);
          };
        return n.common.async
          ? Promise.all([
              this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
              this._def.right._parseAsync({ data: n.data, path: n.path, parent: n }),
            ]).then(([i, l]) => r(i, l))
          : r(
              this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
              this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
            );
      }
    };
    ma.create = (e, t, n) => new ma({ left: e, right: t, typeName: D.ZodIntersection, ...$(n) });
    var At = class extends Q {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== M.array)
          return T(n, { code: x.invalid_type, expected: M.array, received: n.parsedType }), z;
        if (n.data.length < this._def.items.length)
          return (
            T(n, {
              code: x.too_small,
              minimum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            z
          );
        !this._def.rest &&
          n.data.length > this._def.items.length &&
          (T(n, {
            code: x.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array",
          }),
          t.dirty());
        let r = [...n.data]
          .map((i, l) => {
            let o = this._def.items[l] || this._def.rest;
            return o ? o._parse(new Et(n, i, n.path, l)) : null;
          })
          .filter(i => !!i);
        return n.common.async ? Promise.all(r).then(i => Ze.mergeArray(t, i)) : Ze.mergeArray(t, r);
      }
      get items() {
        return this._def.items;
      }
      rest(e) {
        return new At({ ...this._def, rest: e });
      }
    };
    At.create = (e, t) => {
      if (!Array.isArray(e))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new At({ items: e, typeName: D.ZodTuple, rest: null, ...$(t) });
    };
    var fr = class extends Q {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== M.object)
            return T(n, { code: x.invalid_type, expected: M.object, received: n.parsedType }), z;
          let r = [],
            i = this._def.keyType,
            l = this._def.valueType;
          for (let o in n.data)
            r.push({
              key: i._parse(new Et(n, o, n.path, o)),
              value: l._parse(new Et(n, n.data[o], n.path, o)),
            });
          return n.common.async ? Ze.mergeObjectAsync(t, r) : Ze.mergeObjectSync(t, r);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, n) {
          return t instanceof Q
            ? new fr({ keyType: e, valueType: t, typeName: D.ZodRecord, ...$(n) })
            : new fr({ keyType: pt.create(), valueType: e, typeName: D.ZodRecord, ...$(t) });
        }
      },
      gr = class extends Q {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== M.map)
            return T(n, { code: x.invalid_type, expected: M.map, received: n.parsedType }), z;
          let r = this._def.keyType,
            i = this._def.valueType,
            l = [...n.data.entries()].map(([o, s], c) => ({
              key: r._parse(new Et(n, o, n.path, [c, "key"])),
              value: i._parse(new Et(n, s, n.path, [c, "value"])),
            }));
          if (n.common.async) {
            let o = new Map();
            return Promise.resolve().then(async () => {
              for (let s of l) {
                let c = await s.key,
                  d = await s.value;
                if (c.status === "aborted" || d.status === "aborted") return z;
                (c.status === "dirty" || d.status === "dirty") && t.dirty(),
                  o.set(c.value, d.value);
              }
              return { status: t.value, value: o };
            });
          } else {
            let o = new Map();
            for (let s of l) {
              let c = s.key,
                d = s.value;
              if (c.status === "aborted" || d.status === "aborted") return z;
              (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
            }
            return { status: t.value, value: o };
          }
        }
      };
    gr.create = (e, t, n) => new gr({ valueType: t, keyType: e, typeName: D.ZodMap, ...$(n) });
    var Sn = class extends Q {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== M.set)
          return T(n, { code: x.invalid_type, expected: M.set, received: n.parsedType }), z;
        let r = this._def;
        r.minSize !== null &&
          n.data.size < r.minSize.value &&
          (T(n, {
            code: x.too_small,
            minimum: r.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: r.minSize.message,
          }),
          t.dirty()),
          r.maxSize !== null &&
            n.data.size > r.maxSize.value &&
            (T(n, {
              code: x.too_big,
              maximum: r.maxSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: r.maxSize.message,
            }),
            t.dirty());
        let i = this._def.valueType;
        function l(s) {
          let c = new Set();
          for (let d of s) {
            if (d.status === "aborted") return z;
            d.status === "dirty" && t.dirty(), c.add(d.value);
          }
          return { status: t.value, value: c };
        }
        let o = [...n.data.values()].map((s, c) => i._parse(new Et(n, s, n.path, c)));
        return n.common.async ? Promise.all(o).then(s => l(s)) : l(o);
      }
      min(e, t) {
        return new Sn({ ...this._def, minSize: { value: e, message: B.toString(t) } });
      }
      max(e, t) {
        return new Sn({ ...this._def, maxSize: { value: e, message: B.toString(t) } });
      }
      size(e, t) {
        return this.min(e, t).max(e, t);
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    Sn.create = (e, t) =>
      new Sn({ valueType: e, minSize: null, maxSize: null, typeName: D.ZodSet, ...$(t) });
    var ea = class extends Q {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== M.function)
            return T(t, { code: x.invalid_type, expected: M.function, received: t.parsedType }), z;
          function n(o, s) {
            return ur({
              data: o,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, dr(), la].filter(c => !!c),
              issueData: { code: x.invalid_arguments, argumentsError: s },
            });
          }
          function r(o, s) {
            return ur({
              data: o,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, dr(), la].filter(c => !!c),
              issueData: { code: x.invalid_return_type, returnTypeError: s },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            l = t.data;
          if (this._def.returns instanceof xn) {
            let o = this;
            return Be(async function (...s) {
              let c = new at([]),
                d = await o._def.args.parseAsync(s, i).catch(u => {
                  throw (c.addIssue(n(s, u)), c);
                }),
                m = await Reflect.apply(l, this, d);
              return await o._def.returns._def.type.parseAsync(m, i).catch(u => {
                throw (c.addIssue(r(m, u)), c);
              });
            });
          } else {
            let o = this;
            return Be(function (...s) {
              let c = o._def.args.safeParse(s, i);
              if (!c.success) throw new at([n(s, c.error)]);
              let d = Reflect.apply(l, this, c.data),
                m = o._def.returns.safeParse(d, i);
              if (!m.success) throw new at([r(d, m.error)]);
              return m.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new ea({ ...this._def, args: At.create(e).rest(Kt.create()) });
        }
        returns(e) {
          return new ea({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, n) {
          return new ea({
            args: e || At.create([]).rest(Kt.create()),
            returns: t || Kt.create(),
            typeName: D.ZodFunction,
            ...$(n),
          });
        }
      },
      pa = class extends Q {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
        }
      };
    pa.create = (e, t) => new pa({ getter: e, typeName: D.ZodLazy, ...$(t) });
    var ha = class extends Q {
      _parse(e) {
        if (e.data !== this._def.value) {
          let t = this._getOrReturnCtx(e);
          return T(t, { received: t.data, code: x.invalid_literal, expected: this._def.value }), z;
        }
        return { status: "valid", value: e.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ha.create = (e, t) => new ha({ value: e, typeName: D.ZodLiteral, ...$(t) });
    function t0(e, t) {
      return new en({ values: e, typeName: D.ZodEnum, ...$(t) });
    }
    var en = class extends Q {
      _parse(e) {
        if (typeof e.data != "string") {
          let t = this._getOrReturnCtx(e),
            n = this._def.values;
          return (
            T(t, { expected: le.joinValues(n), received: t.parsedType, code: x.invalid_type }), z
          );
        }
        if (this._def.values.indexOf(e.data) === -1) {
          let t = this._getOrReturnCtx(e),
            n = this._def.values;
          return T(t, { received: t.data, code: x.invalid_enum_value, options: n }), z;
        }
        return Be(e.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      get Values() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      get Enum() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      extract(e) {
        return en.create(e);
      }
      exclude(e) {
        return en.create(this.options.filter(t => !e.includes(t)));
      }
    };
    en.create = t0;
    var fa = class extends Q {
      _parse(e) {
        let t = le.getValidEnumValues(this._def.values),
          n = this._getOrReturnCtx(e);
        if (n.parsedType !== M.string && n.parsedType !== M.number) {
          let r = le.objectValues(t);
          return (
            T(n, { expected: le.joinValues(r), received: n.parsedType, code: x.invalid_type }), z
          );
        }
        if (t.indexOf(e.data) === -1) {
          let r = le.objectValues(t);
          return T(n, { received: n.data, code: x.invalid_enum_value, options: r }), z;
        }
        return Be(e.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    fa.create = (e, t) => new fa({ values: e, typeName: D.ZodNativeEnum, ...$(t) });
    var xn = class extends Q {
      unwrap() {
        return this._def.type;
      }
      _parse(e) {
        let { ctx: t } = this._processInputParams(e);
        if (t.parsedType !== M.promise && t.common.async === !1)
          return T(t, { code: x.invalid_type, expected: M.promise, received: t.parsedType }), z;
        let n = t.parsedType === M.promise ? t.data : Promise.resolve(t.data);
        return Be(
          n.then(r =>
            this._def.type.parseAsync(r, { path: t.path, errorMap: t.common.contextualErrorMap }),
          ),
        );
      }
    };
    xn.create = (e, t) => new xn({ type: e, typeName: D.ZodPromise, ...$(t) });
    var rt = class extends Q {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === D.ZodEffects
          ? this._def.schema.sourceType()
          : this._def.schema;
      }
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e),
          r = this._def.effect || null,
          i = {
            addIssue: l => {
              T(n, l), l.fatal ? t.abort() : t.dirty();
            },
            get path() {
              return n.path;
            },
          };
        if (((i.addIssue = i.addIssue.bind(i)), r.type === "preprocess")) {
          let l = r.transform(n.data, i);
          return n.common.issues.length
            ? { status: "dirty", value: n.data }
            : n.common.async
              ? Promise.resolve(l).then(o =>
                  this._def.schema._parseAsync({ data: o, path: n.path, parent: n }),
                )
              : this._def.schema._parseSync({ data: l, path: n.path, parent: n });
        }
        if (r.type === "refinement") {
          let l = o => {
            let s = r.refinement(o, i);
            if (n.common.async) return Promise.resolve(s);
            if (s instanceof Promise)
              throw new Error(
                "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
              );
            return o;
          };
          if (n.common.async === !1) {
            let o = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
            return o.status === "aborted"
              ? z
              : (o.status === "dirty" && t.dirty(),
                l(o.value),
                { status: t.value, value: o.value });
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then(o =>
                o.status === "aborted"
                  ? z
                  : (o.status === "dirty" && t.dirty(),
                    l(o.value).then(() => ({ status: t.value, value: o.value }))),
              );
        }
        if (r.type === "transform")
          if (n.common.async === !1) {
            let l = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
            if (!oa(l)) return l;
            let o = r.transform(l.value, i);
            if (o instanceof Promise)
              throw new Error(
                "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
              );
            return { status: t.value, value: o };
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then(l =>
                oa(l)
                  ? Promise.resolve(r.transform(l.value, i)).then(o => ({
                      status: t.value,
                      value: o,
                    }))
                  : l,
              );
        le.assertNever(r);
      }
    };
    rt.create = (e, t, n) => new rt({ schema: e, typeName: D.ZodEffects, effect: t, ...$(n) });
    rt.createWithPreprocess = (e, t, n) =>
      new rt({
        schema: t,
        effect: { type: "preprocess", transform: e },
        typeName: D.ZodEffects,
        ...$(n),
      });
    var Nt = class extends Q {
      _parse(e) {
        return this._getType(e) === M.undefined ? Be(void 0) : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    Nt.create = (e, t) => new Nt({ innerType: e, typeName: D.ZodOptional, ...$(t) });
    var tn = class extends Q {
      _parse(e) {
        return this._getType(e) === M.null ? Be(null) : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    tn.create = (e, t) => new tn({ innerType: e, typeName: D.ZodNullable, ...$(t) });
    var ga = class extends Q {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = t.data;
        return (
          t.parsedType === M.undefined && (n = this._def.defaultValue()),
          this._def.innerType._parse({ data: n, path: t.path, parent: t })
        );
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ga.create = (e, t) =>
      new ga({
        innerType: e,
        typeName: D.ZodDefault,
        defaultValue: typeof t.default == "function" ? t.default : () => t.default,
        ...$(t),
      });
    var vr = class extends Q {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = { ...t, common: { ...t.common, issues: [] } },
          r = this._def.innerType._parse({ data: n.data, path: n.path, parent: { ...n } });
        return mr(r)
          ? r.then(i => ({
              status: "valid",
              value:
                i.status === "valid"
                  ? i.value
                  : this._def.catchValue({
                      get error() {
                        return new at(n.common.issues);
                      },
                      input: n.data,
                    }),
            }))
          : {
              status: "valid",
              value:
                r.status === "valid"
                  ? r.value
                  : this._def.catchValue({
                      get error() {
                        return new at(n.common.issues);
                      },
                      input: n.data,
                    }),
            };
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    vr.create = (e, t) =>
      new vr({
        innerType: e,
        typeName: D.ZodCatch,
        catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
        ...$(t),
      });
    var yr = class extends Q {
      _parse(e) {
        if (this._getType(e) !== M.nan) {
          let t = this._getOrReturnCtx(e);
          return T(t, { code: x.invalid_type, expected: M.nan, received: t.parsedType }), z;
        }
        return { status: "valid", value: e.data };
      }
    };
    yr.create = e => new yr({ typeName: D.ZodNaN, ...$(e) });
    var j4 = Symbol("zod_brand"),
      n0 = class extends Q {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = t.data;
          return this._def.type._parse({ data: n, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      },
      Br = class extends Q {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.common.async)
            return (async () => {
              let r = await this._def.in._parseAsync({ data: n.data, path: n.path, parent: n });
              return r.status === "aborted"
                ? z
                : r.status === "dirty"
                  ? (t.dirty(), e0(r.value))
                  : this._def.out._parseAsync({ data: r.value, path: n.path, parent: n });
            })();
          {
            let r = this._def.in._parseSync({ data: n.data, path: n.path, parent: n });
            return r.status === "aborted"
              ? z
              : r.status === "dirty"
                ? (t.dirty(), { status: "dirty", value: r.value })
                : this._def.out._parseSync({ data: r.value, path: n.path, parent: n });
          }
        }
        static create(e, t) {
          return new Br({ in: e, out: t, typeName: D.ZodPipeline });
        }
      },
      Er = class extends Q {
        _parse(e) {
          let t = this._def.innerType._parse(e);
          return oa(t) && (t.value = Object.freeze(t.value)), t;
        }
      };
    Er.create = (e, t) => new Er({ innerType: e, typeName: D.ZodReadonly, ...$(t) });
    var a0 = (e, t = {}, n) =>
        e
          ? Cn.create().superRefine((r, i) => {
              var l, o;
              if (!e(r)) {
                let s = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t,
                  c =
                    (o = (l = s.fatal) !== null && l !== void 0 ? l : n) !== null && o !== void 0
                      ? o
                      : !0,
                  d = typeof s == "string" ? { message: s } : s;
                i.addIssue({ code: "custom", ...d, fatal: c });
              }
            })
          : Cn.create(),
      z4 = { object: be.lazycreate },
      D;
    (function (e) {
      (e.ZodString = "ZodString"),
        (e.ZodNumber = "ZodNumber"),
        (e.ZodNaN = "ZodNaN"),
        (e.ZodBigInt = "ZodBigInt"),
        (e.ZodBoolean = "ZodBoolean"),
        (e.ZodDate = "ZodDate"),
        (e.ZodSymbol = "ZodSymbol"),
        (e.ZodUndefined = "ZodUndefined"),
        (e.ZodNull = "ZodNull"),
        (e.ZodAny = "ZodAny"),
        (e.ZodUnknown = "ZodUnknown"),
        (e.ZodNever = "ZodNever"),
        (e.ZodVoid = "ZodVoid"),
        (e.ZodArray = "ZodArray"),
        (e.ZodObject = "ZodObject"),
        (e.ZodUnion = "ZodUnion"),
        (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
        (e.ZodIntersection = "ZodIntersection"),
        (e.ZodTuple = "ZodTuple"),
        (e.ZodRecord = "ZodRecord"),
        (e.ZodMap = "ZodMap"),
        (e.ZodSet = "ZodSet"),
        (e.ZodFunction = "ZodFunction"),
        (e.ZodLazy = "ZodLazy"),
        (e.ZodLiteral = "ZodLiteral"),
        (e.ZodEnum = "ZodEnum"),
        (e.ZodEffects = "ZodEffects"),
        (e.ZodNativeEnum = "ZodNativeEnum"),
        (e.ZodOptional = "ZodOptional"),
        (e.ZodNullable = "ZodNullable"),
        (e.ZodDefault = "ZodDefault"),
        (e.ZodCatch = "ZodCatch"),
        (e.ZodPromise = "ZodPromise"),
        (e.ZodBranded = "ZodBranded"),
        (e.ZodPipeline = "ZodPipeline"),
        (e.ZodReadonly = "ZodReadonly");
    })(D || (D = {}));
    var U4 = (e, t = { message: `Input not instance of ${e.name}` }) => a0(n => n instanceof e, t),
      r0 = pt.create,
      i0 = Jt.create,
      $4 = yr.create,
      W4 = Xt.create,
      l0 = sa.create,
      G4 = wn.create,
      q4 = pr.create,
      Y4 = ca.create,
      Q4 = da.create,
      K4 = Cn.create,
      J4 = Kt.create,
      X4 = Mt.create,
      ep = hr.create,
      tp = gt.create,
      np = be.create,
      ap = be.strictCreate,
      rp = ua.create,
      ip = Zl.create,
      lp = ma.create,
      op = At.create,
      sp = fr.create,
      cp = gr.create,
      dp = Sn.create,
      up = ea.create,
      mp = pa.create,
      pp = ha.create,
      hp = en.create,
      fp = fa.create,
      gp = xn.create,
      Xo = rt.create,
      vp = Nt.create,
      yp = tn.create,
      Ep = rt.createWithPreprocess,
      bp = Br.create,
      kp = () => r0().optional(),
      wp = () => i0().optional(),
      Cp = () => l0().optional(),
      Sp = {
        string: e => pt.create({ ...e, coerce: !0 }),
        number: e => Jt.create({ ...e, coerce: !0 }),
        boolean: e => sa.create({ ...e, coerce: !0 }),
        bigint: e => Xt.create({ ...e, coerce: !0 }),
        date: e => wn.create({ ...e, coerce: !0 }),
      },
      xp = z,
      Ct = Object.freeze({
        __proto__: null,
        defaultErrorMap: la,
        setErrorMap: _4,
        getErrorMap: dr,
        makeIssue: ur,
        EMPTY_PATH: T4,
        addIssueToContext: T,
        ParseStatus: Ze,
        INVALID: z,
        DIRTY: e0,
        OK: Be,
        isAborted: Xi,
        isDirty: el,
        isValid: oa,
        isAsync: mr,
        get util() {
          return le;
        },
        get objectUtil() {
          return Ji;
        },
        ZodParsedType: M,
        getParsedType: Lt,
        ZodType: Q,
        ZodString: pt,
        ZodNumber: Jt,
        ZodBigInt: Xt,
        ZodBoolean: sa,
        ZodDate: wn,
        ZodSymbol: pr,
        ZodUndefined: ca,
        ZodNull: da,
        ZodAny: Cn,
        ZodUnknown: Kt,
        ZodNever: Mt,
        ZodVoid: hr,
        ZodArray: gt,
        ZodObject: be,
        ZodUnion: ua,
        ZodDiscriminatedUnion: Zl,
        ZodIntersection: ma,
        ZodTuple: At,
        ZodRecord: fr,
        ZodMap: gr,
        ZodSet: Sn,
        ZodFunction: ea,
        ZodLazy: pa,
        ZodLiteral: ha,
        ZodEnum: en,
        ZodNativeEnum: fa,
        ZodPromise: xn,
        ZodEffects: rt,
        ZodTransformer: rt,
        ZodOptional: Nt,
        ZodNullable: tn,
        ZodDefault: ga,
        ZodCatch: vr,
        ZodNaN: yr,
        BRAND: j4,
        ZodBranded: n0,
        ZodPipeline: Br,
        ZodReadonly: Er,
        custom: a0,
        Schema: Q,
        ZodSchema: Q,
        late: z4,
        get ZodFirstPartyTypeKind() {
          return D;
        },
        coerce: Sp,
        any: K4,
        array: tp,
        bigint: W4,
        boolean: l0,
        date: G4,
        discriminatedUnion: ip,
        effect: Xo,
        enum: hp,
        function: up,
        instanceof: U4,
        intersection: lp,
        lazy: mp,
        literal: pp,
        map: cp,
        nan: $4,
        nativeEnum: fp,
        never: X4,
        null: Q4,
        nullable: yp,
        number: i0,
        object: np,
        oboolean: Cp,
        onumber: wp,
        optional: vp,
        ostring: kp,
        pipeline: bp,
        preprocess: Ep,
        promise: gp,
        record: sp,
        set: dp,
        strictObject: ap,
        string: r0,
        symbol: q4,
        transformer: Xo,
        tuple: op,
        undefined: Y4,
        union: rp,
        unknown: J4,
        void: ep,
        NEVER: xp,
        ZodIssueCode: x,
        quotelessJson: A4,
        ZodError: at,
      }),
      Np = Ct.union([
        Ct.object({ message: Ct.literal("login") }),
        Ct.object({ message: Ct.literal("grant"), denied: Ct.boolean() }),
        Ct.object({ message: Ct.literal("createdProject"), projectId: Ct.string() }),
      ]),
      o0 = e => {
        let t = Ne(),
          n = Ne();
        return (
          X(() => {
            let r = ({ origin: i, data: l }) => {
              if (i === n.current) {
                let o;
                try {
                  o = Np.parse(l);
                } catch {
                  return;
                }
                e?.(o);
              }
            };
            return (
              window.addEventListener("message", r), () => window.removeEventListener("message", r)
            );
          }, [e]),
          [
            H(r => {
              if (window.innerWidth > 800 && window.innerHeight > 800) {
                let l = (window.innerWidth - 800) / 2 + window.screenLeft,
                  o = `scrollbars=yes,width=800,height=800,top=${(window.innerHeight - 800) / 2 + window.screenTop},left=${l}`;
                (t.current = window.open(r, "chromatic-dialog", o)), t.current?.focus();
              } else t.current = window.open(r, "_blank");
              let { origin: i } = new URL(r);
              n.current = i;
            }, []),
            H(() => t.current?.close(), []),
          ]
        );
      },
      Mp = w.ol(({ theme: e }) => ({
        display: "inline-flex",
        listStyle: "none",
        marginTop: 15,
        marginBottom: 5,
        padding: 0,
        gap: 5,
        "li:not(:empty)": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px dashed ${e.input.border}`,
          borderRadius: 4,
          width: 28,
          height: 32,
        },
      })),
      Ap = lt(`
  query VisualTestsProjectCountQuery {
    viewer {
      projectCount
      accounts {
        newProjectUrl
      }
    }
  }
`),
      _p = ({
        onBack: e,
        hasProjectId: t,
        setAccessToken: n,
        setCreatedProjectId: r,
        exchangeParameters: i,
      }) => {
        let l = kl(),
          o = $s(),
          { user_code: s, verificationUrl: c } = i,
          d = Ne(),
          m = Ne(),
          u = Ne(),
          p = H(
            async y => {
              if ((y.message === "login" && m.current?.(c), y.message === "grant"))
                try {
                  let k = await zm(i);
                  if (!k) throw new Error("Failed to fetch an access token");
                  d.current = k;
                  let E = Ss(k),
                    { data: h } = await l.query(Ap, {}, { fetchOptions: E });
                  if (!h?.viewer) throw new Error("Failed to fetch initial project list");
                  if (h.viewer.projectCount > 0 || t) n(d.current), u.current?.();
                  else {
                    if (!h.viewer.accounts[0]) throw new Error("User has no accounts!");
                    if (!h.viewer.accounts[0].newProjectUrl)
                      throw new Error("Unexpected missing project URL");
                    m.current?.(h.viewer.accounts[0].newProjectUrl);
                  }
                } catch (k) {
                  o("Login Error", k);
                }
              y.message === "createdProject" &&
                (d.current
                  ? (n(d.current), r(`Project:${y.projectId}`), u.current?.())
                  : o("Unexpected missing access token", new Error()));
            },
            [c, i, l, t, n, o, r],
          ),
          [f, g] = o0(p);
        return (
          (m.current = f),
          (u.current = g),
          a.createElement(
            ve,
            { footer: null, ignoreConfig: !0 },
            a.createElement(Zr, { onBack: e }),
            a.createElement(
              he,
              null,
              a.createElement(
                se,
                null,
                a.createElement(
                  "div",
                  null,
                  a.createElement(me, null, "Verify your account"),
                  a.createElement(
                    "div",
                    null,
                    a.createElement(
                      j,
                      { center: !0, muted: !0 },
                      "Check this verification code on Chromatic to grant access to your published Storybooks.",
                    ),
                  ),
                  a.createElement(
                    Mp,
                    null,
                    s
                      ?.split("")
                      .map((y, k) =>
                        a.createElement("li", { key: `${k}-${y}` }, y.replace(/[^A-Z0-9]/, "")),
                      ),
                  ),
                ),
                a.createElement(
                  ce,
                  { variant: "solid", size: "medium", onClick: () => f(c) },
                  "Go to Chromatic",
                ),
              ),
            ),
          )
        );
      },
      Tp = ({ onNext: e, onUninstall: t }) =>
        a.createElement(
          ve,
          { footer: null, ignoreConfig: !0 },
          a.createElement(Zr, null),
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(rn, null),
                a.createElement(me, null, "Visual tests"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Catch bugs in UI appearance automatically. Compare image snapshots to detect visual changes.",
                ),
              ),
              a.createElement(
                yt,
                null,
                a.createElement(ce, { variant: "solid", size: "medium", onClick: e }, "Enable"),
                a.createElement(ce, { link: !0, onClick: () => t() }, "Uninstall"),
              ),
            ),
          ),
        ),
      Fp = ({ setAccessToken: e, setCreatedProjectId: t, hasProjectId: n }) => {
        let [r, i] = Ue("authenticationScreen", n ? "signin" : "welcome"),
          [l, o] = Ue("exchangeParameters"),
          s = $s(),
          { uninstallAddon: c } = Ll(),
          { setSubdomain: d } = Tl();
        We("Authentication", r.charAt(0).toUpperCase() + r.slice(1));
        let m = H(
          async u => {
            try {
              d(u ?? "www"), o(await jm(u)), i("verify");
            } catch (p) {
              s("Sign in Error", p);
            }
          },
          [s, o, i, d],
        );
        if (r === "welcome" && !n)
          return a.createElement(Tp, { onNext: () => i("signin"), onUninstall: c });
        if (r === "signin" || (r === "welcome" && n))
          return a.createElement(N4, {
            ...(n ? {} : { onBack: () => i("welcome") }),
            onSignIn: m,
            onSignInWithSSO: () => i("subdomain"),
          });
        if (r === "subdomain")
          return a.createElement(x4, { onBack: () => i("signin"), onSignIn: m });
        if (r === "verify") {
          if (!l) throw new Error("Expected to have a `exchangeParameters` if at `verify` step");
          return a.createElement(_p, {
            onBack: () => i("signin"),
            hasProjectId: n,
            setAccessToken: e,
            setCreatedProjectId: t,
            exchangeParameters: l,
          });
        }
        return null;
      },
      s0 = w.div(
        ({ theme: e }) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: e.appBorderRadius,
          background: e.base === "light" ? e.color.lightest : e.color.darkest,
          border: `1px solid ${e.appBorderColor}`,
          padding: 15,
          flex: 1,
          gap: 14,
          maxWidth: "500px",
          width: "100%",
        }),
        ({ theme: e, warning: t }) =>
          t && { background: e.base === "dark" ? "#342e1a" : e.background.warning },
      ),
      Op = w.b(() => ({ display: "block", marginBottom: 2 })),
      Lp = () => {
        We("Errors", "GitNotFound");
        let { uninstallAddon: e } = Ll();
        return a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(rn, null),
                a.createElement(me, null, "Visual tests"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Catch bugs in UI appearance automatically. Compare image snapshots to detect visual changes.",
                ),
              ),
              a.createElement(
                s0,
                null,
                a.createElement(os, { style: { flexShrink: 0 } }),
                a.createElement(
                  j,
                  null,
                  a.createElement(Op, null, "Git not detected"),
                  "This addon requires Git to associate test results with commits and branches. Run",
                  " ",
                  a.createElement(Fe, null, "git init"),
                  " and make your first commit",
                  a.createElement(Fe, null, "git commit -m"),
                  " to get started!",
                ),
              ),
              a.createElement(
                Ie,
                {
                  target: "_blank",
                  href: "https://www.chromatic.com/docs/visual-tests-addon#git-addon",
                  withArrow: !0,
                  secondary: !0,
                },
                "Visual tests requirements",
              ),
              a.createElement(Ie, { withArrow: !0, onClick: () => e() }, "Uninstall"),
            ),
          ),
        );
      },
      Rp = w(hl)(({ theme: e }) => ({
        width: 40,
        height: 40,
        padding: 10,
        background: e.color.positive,
        borderRadius: "100%",
        color: "white",
      })),
      Ip = w(Ie)(() => ({ marginTop: 5 })),
      Zp = lt(`
  query ProjectQuery($projectId: ID!) {
    project(id: $projectId) {
      id
      name
      webUrl
      lastBuild {
        branch
        number
      }
    }
  }
`),
      Bp = ({ projectId: e, configFile: t, goToNext: n }) => {
        We("LinkProject", "LinkedProject");
        let [{ data: r, fetching: i, error: l }] = wl({ query: Zp, variables: { projectId: e } });
        return a.createElement(
          ve,
          {
            footer: a.createElement(
              Ir,
              null,
              a.createElement(
                Xe,
                null,
                r?.project?.lastBuild &&
                  a.createElement(
                    j,
                    { style: { marginLeft: 5 } },
                    "Last build: ",
                    r.project.lastBuild.number,
                    " on branch",
                    " ",
                    r.project.lastBuild.branch,
                  ),
              ),
              a.createElement(Xe, { push: !0 }, a.createElement(Rr, null)),
            ),
          },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              i && a.createElement("p", null, "Loading..."),
              l && a.createElement("p", null, l.message),
              r?.project &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(Rp, null),
                  a.createElement(
                    "div",
                    null,
                    a.createElement(me, null, "Project linked!"),
                    a.createElement(
                      j,
                      { center: !0, muted: !0, style: { maxWidth: 500 } },
                      "The ",
                      a.createElement(Fe, null, "projectId"),
                      " for ",
                      a.createElement("strong", null, r.project.name),
                      " was added in",
                      " ",
                      a.createElement(Fe, null, t),
                      " to sync tests with Chromatic. Please commit this change to continue using this addon.",
                    ),
                  ),
                  a.createElement(
                    yt,
                    null,
                    a.createElement(
                      ce,
                      { variant: "solid", size: "medium", onClick: () => n() },
                      "Catch a UI change",
                    ),
                    a.createElement(
                      Ip,
                      {
                        href: "https://www.chromatic.com/docs/cli",
                        target: "_blank",
                        withArrow: !0,
                        secondary: !0,
                      },
                      "What's a project ID?",
                    ),
                  ),
                ),
            ),
          ),
        );
      };
    function Pp(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      var r = Array.from(typeof e == "string" ? [e] : e);
      r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
      var i = r.reduce(function (s, c) {
        var d = c.match(/\n([\t ]+|(?!\s).)/g);
        return d
          ? s.concat(
              d.map(function (m) {
                var u, p;
                return (p =
                  (u = m.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null &&
                  p !== void 0
                  ? p
                  : 0;
              }),
            )
          : s;
      }, []);
      if (i.length) {
        var l = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, i) +
            "}",
          "g",
        );
        r = r.map(function (s) {
          return s.replace(
            l,
            `
`,
          );
        });
      }
      r[0] = r[0].replace(/^\r?\n/, "");
      var o = r[0];
      return (
        t.forEach(function (s, c) {
          var d = o.match(/(?:^|\n)( *)$/),
            m = d ? d[1] : "",
            u = s;
          typeof s == "string" &&
            s.includes(`
`) &&
            (u = String(s)
              .split(
                `
`,
              )
              .map(function (p, f) {
                return f === 0 ? p : "" + m + p;
              }).join(`
`)),
            (o += u + r[c + 1]);
        }),
        o
      );
    }
    var Vp = w.div(({ theme: e }) => ({
        "&& > *": { margin: 0 },
        "&& pre": {
          color: e.base === "light" ? e.color.darker : e.color.lighter,
          background: e.base === "light" ? e.color.lightest : e.color.darkest,
          fontSize: "12px",
          lineHeight: "16px",
          textAlign: "left",
          padding: "15px !important",
        },
      })),
      Dp = "https://www.chromatic.com/docs/visual-tests-addon/#configure";
    function Hp({ projectId: e, configFile: t }) {
      return (
        We("LinkProject", "LinkingProjectFailed"),
        a.createElement(
          ve,
          null,
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Add the project ID to your Chromatic config"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "The ",
                  a.createElement(Fe, null, "projectId"),
                  " will be used to sync tests with Chromatic. Please commit this change to continue using the addon. The file should be saved at",
                  " ",
                  a.createElement(Fe, null, t),
                  ".",
                ),
              ),
              a.createElement(
                Vp,
                null,
                a.createElement(
                  Fe,
                  null,
                  Pp`
                {
                  "projectId": "${e}",
                }
              `,
                ),
              ),
              a.createElement(
                Ie,
                { secondary: !0, withArrow: !0, target: "_blank", href: Dp },
                "What's this for?",
              ),
            ),
          ),
        )
      );
    }
    var jp = lt(`
  query SelectProjectsQuery {
    viewer {
      accounts {
        id
        name
        avatarUrl
        newProjectUrl
        projects {
          id
          name
          webUrl
          lastBuild {
            branch
            number
          }
        }
      }
    }
  }
`),
      zp = ({ createdProjectId: e, setCreatedProjectId: t, onUpdateProject: n }) => {
        let r = a.useCallback(
          async i => {
            await n(i);
          },
          [n],
        );
        return a.createElement(Wp, {
          createdProjectId: e,
          setCreatedProjectId: t,
          onSelectProjectId: r,
        });
      },
      Pa = w.div(({ theme: e }) => ({
        fontSize: `${e.typography.size.s1 - 1}px`,
        fontWeight: e.typography.weight.bold,
        color: e.base === "light" ? e.color.dark : e.color.light,
        backgroundColor: "inherit",
        padding: "7px 15px",
        borderBottom: `1px solid ${e.appBorderColor}`,
        lineHeight: "18px",
        letterSpacing: "0.38em",
        textTransform: "uppercase",
      })),
      e1 = w.div(({ theme: e }) => ({})),
      t1 = w.div(({ theme: e }) => ({
        background: e.base === "light" ? e.color.lighter : e.color.darker,
      })),
      n1 = w.div(({ theme: e }) => ({
        background: e.base === "light" ? e.color.lightest : e.color.darkest,
        borderRadius: 5,
        border: `1px solid ${e.appBorderColor}`,
        height: 260,
        maxWidth: 420,
        minWidth: 260,
        width: "100%",
        overflow: "hidden",
        textAlign: "left",
        position: "relative",
        display: "flex",
        "> *": { flex: 1, display: "flex", flexDirection: "column", width: "50%" },
      })),
      Va = w.div({ height: "100%", overflowY: "auto" }),
      Up = w(se)({ width: "100%" }),
      $p = w(mm)({ marginRight: 10 });
    function Wp({ createdProjectId: e, setCreatedProjectId: t, onSelectProjectId: n }) {
      let [{ data: r, fetching: i, error: l }, o] = wl({ query: jp });
      X(() => {
        let h = setInterval(o, 5e3);
        return () => clearInterval(h);
      }, [o]);
      let [s, c] = Ue("selectedAccountId"),
        d = r?.viewer?.accounts.find(h => h.id === s),
        m = H(h => c(h.id), [c]);
      X(() => {
        !s && r?.viewer?.accounts && m(r.viewer.accounts[0]);
      }, [r, s, m]);
      let [u, p] = Ue("isSelectingProject", !1),
        f = H(
          h => {
            p(!0), n(h.id);
            let v = setTimeout(() => {
              p(!1);
            }, 1e3);
            return () => clearTimeout(v);
          },
          [n, p],
        ),
        g = H(
          async h => {
            h.message === "createdProject" && (o(), t(h.projectId));
          },
          [o, t],
        ),
        [y, k] = o0(g),
        E = e && d?.projects?.find(h => h?.id.endsWith(e));
      return (
        X(() => {
          E && (k(), f(E));
        }, [E, f, k]),
        We("LinkProject", "LinkProject"),
        a.createElement(
          ve,
          null,
          a.createElement(
            he,
            null,
            a.createElement(
              Up,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Select a project"),
                a.createElement(j, { muted: !0 }, "Your tests will sync with this project."),
              ),
              l && a.createElement("p", null, l.message),
              !r &&
                i &&
                a.createElement(
                  n1,
                  null,
                  a.createElement(
                    e1,
                    null,
                    a.createElement(Pa, null, "Accounts"),
                    a.createElement(
                      Va,
                      null,
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                    ),
                  ),
                  a.createElement(
                    t1,
                    null,
                    a.createElement(Pa, null, "Projects"),
                    a.createElement(
                      Va,
                      { "data-testid": "right-list" },
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                    ),
                  ),
                ),
              r?.viewer?.accounts &&
                a.createElement(
                  n1,
                  null,
                  a.createElement(
                    e1,
                    null,
                    a.createElement(Pa, null, "Accounts"),
                    a.createElement(
                      Va,
                      { "data-testid": "left-list" },
                      r.viewer.accounts?.map(h =>
                        a.createElement(tt, {
                          key: h.id,
                          title: h.name,
                          appearance: "secondary",
                          left: a.createElement($p, { src: h.avatarUrl ?? void 0, size: "tiny" }),
                          onClick: () => m(h),
                          active: s === h.id,
                        }),
                      ),
                    ),
                  ),
                  a.createElement(
                    t1,
                    null,
                    a.createElement(Pa, null, "Projects"),
                    a.createElement(
                      Va,
                      { "data-testid": "right-list" },
                      d &&
                        a.createElement(tt, {
                          isLink: !1,
                          onClick: () => {
                            if (!d?.newProjectUrl)
                              throw new Error("Unexpected missing `newProjectUrl` on account");
                            y(d.newProjectUrl);
                          },
                          title: a.createElement(
                            Ie,
                            { isButton: !0, withArrow: !0 },
                            "Create new project",
                          ),
                        }),
                      d?.projects?.map(
                        h =>
                          h &&
                          a.createElement(tt, {
                            appearance: "secondary",
                            key: h.id,
                            title: h.name,
                            right: a.createElement($5, { "aria-label": h.name }),
                            onClick: () => f(h),
                            disabled: u,
                          }),
                      ),
                    ),
                  ),
                ),
            ),
          ),
        )
      );
    }
    var Gp = () =>
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(rn, null),
                a.createElement(me, null, "Visual tests"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Visual tests only runs locally. To test this Storybook, clone it to your machine and run ",
                  a.createElement(Fe, null, "npx storybook dev"),
                  ".",
                ),
              ),
            ),
          ),
        ),
      qp = ({ offline: e = !1 }) =>
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Can't connect to Chromatic"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  e
                    ? "You're offline. Double check your internet connection."
                    : "We're having trouble connecting to the Chromatic API.",
                ),
              ),
              !e &&
                a.createElement(
                  Ie,
                  {
                    href: "https://status.chromatic.com",
                    target: "_blank",
                    rel: "noreferrer",
                    withArrow: !0,
                  },
                  "Chromatic API status",
                ),
            ),
          ),
        ),
      Yp = () => (
        We("Uninstalled", "uninstalled"),
        a.createElement(
          ve,
          { footer: !1 },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(rn, null),
                a.createElement(me, null, "Uninstall complete"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Visual tests will vanish the next time you restart your Storybook.",
                ),
              ),
            ),
          ),
        )
      ),
      c0 = { isRunning: !1, startBuild: () => {}, stopBuild: () => {} },
      d0 = qe(c0),
      ka = () => bt(d0, "RunBuild"),
      Qp = ({ children: e, watchState: t = c0 }) => a.createElement(d0.Provider, { value: t }, e),
      u0 = { PENDING: "warn", FAILED: "error", DENIED: "error", BROKEN: "error" },
      Ei = [null, "unknown", "pending", "success", "warn", "error"];
    function Kp(e, t) {
      return Ei[Math.max(Ei.indexOf(e), Ei.indexOf(t))];
    }
    function Jp(e, t) {
      let n = {};
      t.forEach(i => {
        !i.story ||
          !i.status ||
          (n[i.story.storyId] = Kp(u0[i.status] || null, n[i.story.storyId]));
      });
      let r = () => {
        e.setSelectedPanel(an), e.togglePanel(!0);
      };
      return Object.fromEntries(
        Object.entries(n).map(([i, l]) => [
          i,
          l && {
            status: l,
            title: "Visual tests",
            description: "Chromatic Visual Tests",
            onClick: r,
          },
        ]),
      );
    }
    function Xp(e, { shouldSwitchToLastBuildOnBranch: t, lastBuildOnBranchId: n, storyId: r }) {
      if (!t) return e ? { ...e, storyId: r } : void 0;
      if (!n) throw new Error("Impossible state");
      return { buildId: n, storyId: r };
    }
    var a1 = {
        EXCEEDED_THRESHOLD: {
          heading: "Snapshot limit reached",
          message:
            "Your account has reached its monthly snapshot limit. Visual testing is disabled. Upgrade your plan to increase your quota.",
          action: "Upgrade plan",
        },
        PAYMENT_REQUIRED: {
          heading: "Payment required",
          message:
            "Your subscription payment is past due. Review or replace your payment method to continue using Chromatic.",
          action: "Review billing details",
        },
        OTHER: {
          heading: "Account suspended",
          message: "Your account has been suspended. Contact customer support for details.",
          action: "Billing details",
        },
      },
      m0 = ({ children: e, billingUrl: t, suspensionReason: n = "OTHER" }) => {
        We("Errors", "AccountSuspended");
        let { heading: r, message: i, action: l } = a1[n] || a1.OTHER;
        return a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, r),
                a.createElement(j, { center: !0, muted: !0 }, i),
              ),
              t &&
                a.createElement(
                  ce,
                  { asChild: !0, size: "medium", variant: "solid" },
                  a.createElement("a", { href: t, target: "_new" }, l),
                ),
              e,
            ),
          ),
        );
      },
      e3 = ({ children: e, manageUrl: t }) => (
        We("Errors", "VisualTestsDisabled"),
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Visual tests disabled for your project"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Update your project settings to enable visual testing.",
                ),
              ),
              a.createElement(
                ce,
                { asChild: !0, size: "medium", variant: "solid" },
                a.createElement("a", { href: t, target: "_new" }, "Manage project settings"),
              ),
              e,
            ),
          ),
        )
      );
    function p0(e) {
      return t => typeof t === e;
    }
    var t3 = p0("function"),
      n3 = e => e === null,
      r1 = e => Object.prototype.toString.call(e).slice(8, -1) === "RegExp",
      i1 = e => !a3(e) && !n3(e) && (t3(e) || typeof e == "object"),
      a3 = p0("undefined");
    function r3(e, t) {
      let { length: n } = e;
      if (n !== t.length) return !1;
      for (let r = n; r-- !== 0; ) if (!Re(e[r], t[r])) return !1;
      return !0;
    }
    function i3(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      let n = new DataView(e.buffer),
        r = new DataView(t.buffer),
        i = e.byteLength;
      for (; i--; ) if (n.getUint8(i) !== r.getUint8(i)) return !1;
      return !0;
    }
    function l3(e, t) {
      if (e.size !== t.size) return !1;
      for (let n of e.entries()) if (!t.has(n[0])) return !1;
      for (let n of e.entries()) if (!Re(n[1], t.get(n[0]))) return !1;
      return !0;
    }
    function o3(e, t) {
      if (e.size !== t.size) return !1;
      for (let n of e.entries()) if (!t.has(n[0])) return !1;
      return !0;
    }
    function Re(e, t) {
      if (e === t) return !0;
      if (e && i1(e) && t && i1(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return r3(e, t);
        if (e instanceof Map && t instanceof Map) return l3(e, t);
        if (e instanceof Set && t instanceof Set) return o3(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return i3(e, t);
        if (r1(e) && r1(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        let n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let i = n.length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
        for (let i = n.length; i-- !== 0; ) {
          let l = n[i];
          if (!(l === "_owner" && e.$$typeof) && !Re(e[l], t[l])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    var s3 = [
        "Array",
        "ArrayBuffer",
        "AsyncFunction",
        "AsyncGenerator",
        "AsyncGeneratorFunction",
        "Date",
        "Error",
        "Function",
        "Generator",
        "GeneratorFunction",
        "HTMLElement",
        "Map",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "WeakMap",
        "WeakSet",
      ],
      c3 = ["bigint", "boolean", "null", "number", "string", "symbol", "undefined"];
    function Pr(e) {
      let t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return "HTMLElement";
      if (d3(t)) return t;
    }
    function ot(e) {
      return t => Pr(t) === e;
    }
    function d3(e) {
      return s3.includes(e);
    }
    function Tn(e) {
      return t => typeof t === e;
    }
    function u3(e) {
      return c3.includes(e);
    }
    var m3 = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"];
    function A(e) {
      if (e === null) return "null";
      switch (typeof e) {
        case "bigint":
          return "bigint";
        case "boolean":
          return "boolean";
        case "number":
          return "number";
        case "string":
          return "string";
        case "symbol":
          return "symbol";
        case "undefined":
          return "undefined";
      }
      return A.array(e) ? "Array" : A.plainFunction(e) ? "Function" : Pr(e) || "Object";
    }
    A.array = Array.isArray;
    A.arrayOf = (e, t) => (!A.array(e) && !A.function(t) ? !1 : e.every(n => t(n)));
    A.asyncGeneratorFunction = e => Pr(e) === "AsyncGeneratorFunction";
    A.asyncFunction = ot("AsyncFunction");
    A.bigint = Tn("bigint");
    A.boolean = e => e === !0 || e === !1;
    A.date = ot("Date");
    A.defined = e => !A.undefined(e);
    A.domElement = e =>
      A.object(e) &&
      !A.plainObject(e) &&
      e.nodeType === 1 &&
      A.string(e.nodeName) &&
      m3.every(t => t in e);
    A.empty = e =>
      (A.string(e) && e.length === 0) ||
      (A.array(e) && e.length === 0) ||
      (A.object(e) && !A.map(e) && !A.set(e) && Object.keys(e).length === 0) ||
      (A.set(e) && e.size === 0) ||
      (A.map(e) && e.size === 0);
    A.error = ot("Error");
    A.function = Tn("function");
    A.generator = e => A.iterable(e) && A.function(e.next) && A.function(e.throw);
    A.generatorFunction = ot("GeneratorFunction");
    A.instanceOf = (e, t) => (!e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype);
    A.iterable = e => !A.nullOrUndefined(e) && A.function(e[Symbol.iterator]);
    A.map = ot("Map");
    A.nan = e => Number.isNaN(e);
    A.null = e => e === null;
    A.nullOrUndefined = e => A.null(e) || A.undefined(e);
    A.number = e => Tn("number")(e) && !A.nan(e);
    A.numericString = e => A.string(e) && e.length > 0 && !Number.isNaN(Number(e));
    A.object = e => !A.nullOrUndefined(e) && (A.function(e) || typeof e == "object");
    A.oneOf = (e, t) => (A.array(e) ? e.indexOf(t) > -1 : !1);
    A.plainFunction = ot("Function");
    A.plainObject = e => {
      if (Pr(e) !== "Object") return !1;
      let t = Object.getPrototypeOf(e);
      return t === null || t === Object.getPrototypeOf({});
    };
    A.primitive = e => A.null(e) || u3(typeof e);
    A.promise = ot("Promise");
    A.propertyOf = (e, t, n) => {
      if (!A.object(e) || !t) return !1;
      let r = e[t];
      return A.function(n) ? n(r) : A.defined(r);
    };
    A.regexp = ot("RegExp");
    A.set = ot("Set");
    A.string = Tn("string");
    A.symbol = Tn("symbol");
    A.undefined = Tn("undefined");
    A.weakMap = ot("WeakMap");
    A.weakSet = ot("WeakSet");
    var F = A;
    function p3(...e) {
      return e.every(t => F.string(t) || F.array(t) || F.plainObject(t));
    }
    function h3(e, t, n) {
      return h0(e, t)
        ? [e, t].every(F.array)
          ? !e.some(d1(n)) && t.some(d1(n))
          : [e, t].every(F.plainObject)
            ? !Object.entries(e).some(c1(n)) && Object.entries(t).some(c1(n))
            : t === n
        : !1;
    }
    function l1(e, t, n) {
      let { actual: r, key: i, previous: l, type: o } = n,
        s = ht(e, i),
        c = ht(t, i),
        d = [s, c].every(F.number) && (o === "increased" ? s < c : s > c);
      return F.undefined(r) || (d = d && c === r), F.undefined(l) || (d = d && s === l), d;
    }
    function o1(e, t, n) {
      let { key: r, type: i, value: l } = n,
        o = ht(e, r),
        s = ht(t, r),
        c = i === "added" ? o : s,
        d = i === "added" ? s : o;
      if (!F.nullOrUndefined(l)) {
        if (F.defined(c)) {
          if (F.array(c) || F.plainObject(c)) return h3(c, d, l);
        } else return Re(d, l);
        return !1;
      }
      return [o, s].every(F.array)
        ? !d.every(Bl(c))
        : [o, s].every(F.plainObject)
          ? f3(Object.keys(c), Object.keys(d))
          : ![o, s].every(m => F.primitive(m) && F.defined(m)) &&
            (i === "added" ? !F.defined(o) && F.defined(s) : F.defined(o) && !F.defined(s));
    }
    function s1(e, t, { key: n } = {}) {
      let r = ht(e, n),
        i = ht(t, n);
      if (!h0(r, i)) throw new TypeError("Inputs have different types");
      if (!p3(r, i)) throw new TypeError("Inputs don't have length");
      return [r, i].every(F.plainObject) && ((r = Object.keys(r)), (i = Object.keys(i))), [r, i];
    }
    function c1(e) {
      return ([t, n]) =>
        F.array(e)
          ? Re(e, n) || e.some(r => Re(r, n) || (F.array(n) && Bl(n)(r)))
          : F.plainObject(e) && e[t]
            ? !!e[t] && Re(e[t], n)
            : Re(e, n);
    }
    function f3(e, t) {
      return t.some(n => !e.includes(n));
    }
    function d1(e) {
      return t => (F.array(e) ? e.some(n => Re(n, t) || (F.array(t) && Bl(t)(n))) : Re(e, t));
    }
    function Dn(e, t) {
      return F.array(e) ? e.some(n => Re(n, t)) : Re(e, t);
    }
    function Bl(e) {
      return t => e.some(n => Re(n, t));
    }
    function h0(...e) {
      return e.every(F.array) || e.every(F.number) || e.every(F.plainObject) || e.every(F.string);
    }
    function ht(e, t) {
      return F.plainObject(e) || F.array(e)
        ? F.string(t)
          ? t.split(".").reduce((n, r) => n && n[r], e)
          : F.number(t)
            ? e[t]
            : e
        : e;
    }
    function br(e, t) {
      if ([e, t].some(F.nullOrUndefined)) throw new Error("Missing required parameters");
      if (![e, t].every(n => F.plainObject(n) || F.array(n)))
        throw new Error("Expected plain objects or array");
      return {
        added: (n, r) => {
          try {
            return o1(e, t, { key: n, type: "added", value: r });
          } catch {
            return !1;
          }
        },
        changed: (n, r, i) => {
          try {
            let l = ht(e, n),
              o = ht(t, n),
              s = F.defined(r),
              c = F.defined(i);
            if (s || c) {
              let d = c ? Dn(i, l) : !Dn(r, l),
                m = Dn(r, o);
              return d && m;
            }
            return [l, o].every(F.array) || [l, o].every(F.plainObject) ? !Re(l, o) : l !== o;
          } catch {
            return !1;
          }
        },
        changedFrom: (n, r, i) => {
          if (!F.defined(n)) return !1;
          try {
            let l = ht(e, n),
              o = ht(t, n),
              s = F.defined(i);
            return Dn(r, l) && (s ? Dn(i, o) : !s);
          } catch {
            return !1;
          }
        },
        decreased: (n, r, i) => {
          if (!F.defined(n)) return !1;
          try {
            return l1(e, t, { key: n, actual: r, previous: i, type: "decreased" });
          } catch {
            return !1;
          }
        },
        emptied: n => {
          try {
            let [r, i] = s1(e, t, { key: n });
            return !!r.length && !i.length;
          } catch {
            return !1;
          }
        },
        filled: n => {
          try {
            let [r, i] = s1(e, t, { key: n });
            return !r.length && !!i.length;
          } catch {
            return !1;
          }
        },
        increased: (n, r, i) => {
          if (!F.defined(n)) return !1;
          try {
            return l1(e, t, { key: n, actual: r, previous: i, type: "increased" });
          } catch {
            return !1;
          }
        },
        removed: (n, r) => {
          try {
            return o1(e, t, { key: n, type: "removed", value: r });
          } catch {
            return !1;
          }
        },
      };
    }
    var g3 = et(t5(), 1),
      f0 = et(n5(), 1);
    function v3(e, ...t) {
      if (!F.plainObject(e)) throw new TypeError("Expected an object");
      let n = {};
      for (let r in e) ({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]));
      return n;
    }
    function y3(e, ...t) {
      if (!F.plainObject(e)) throw new TypeError("Expected an object");
      if (!t.length) return e;
      let n = {};
      for (let r in e) ({}).hasOwnProperty.call(e, r) && t.includes(r) && (n[r] = e[r]);
      return n;
    }
    var Da = et(dl(), 1),
      bi = et(dl(), 1),
      N = et(i5()),
      wa = typeof window < "u" && typeof document < "u" && typeof navigator < "u",
      E3 = (function () {
        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
          if (wa && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
        return 0;
      })();
    function b3(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          window.Promise.resolve().then(function () {
            (t = !1), e();
          }));
      };
    }
    function k3(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          setTimeout(function () {
            (t = !1), e();
          }, E3));
      };
    }
    var w3 = wa && window.Promise,
      C3 = w3 ? b3 : k3;
    function g0(e) {
      var t = {};
      return e && t.toString.call(e) === "[object Function]";
    }
    function ln(e, t) {
      if (e.nodeType !== 1) return [];
      var n = e.ownerDocument.defaultView,
        r = n.getComputedStyle(e, null);
      return t ? r[t] : r;
    }
    function Pl(e) {
      return e.nodeName === "HTML" ? e : e.parentNode || e.host;
    }
    function Ca(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case "HTML":
        case "BODY":
          return e.ownerDocument.body;
        case "#document":
          return e.body;
      }
      var t = ln(e),
        n = t.overflow,
        r = t.overflowX,
        i = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + i + r) ? e : Ca(Pl(e));
    }
    function v0(e) {
      return e && e.referenceNode ? e.referenceNode : e;
    }
    var u1 = wa && !!(window.MSInputMethodContext && document.documentMode),
      m1 = wa && /MSIE 10/.test(navigator.userAgent);
    function Fn(e) {
      return e === 11 ? u1 : e === 10 ? m1 : u1 || m1;
    }
    function Nn(e) {
      if (!e) return document.documentElement;
      for (
        var t = Fn(10) ? document.body : null, n = e.offsetParent || null;
        n === t && e.nextElementSibling;

      )
        n = (e = e.nextElementSibling).offsetParent;
      var r = n && n.nodeName;
      return !r || r === "BODY" || r === "HTML"
        ? e
          ? e.ownerDocument.documentElement
          : document.documentElement
        : ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 && ln(n, "position") === "static"
          ? Nn(n)
          : n;
    }
    function S3(e) {
      var t = e.nodeName;
      return t === "BODY" ? !1 : t === "HTML" || Nn(e.firstElementChild) === e;
    }
    function nl(e) {
      return e.parentNode !== null ? nl(e.parentNode) : e;
    }
    function kr(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        r = n ? e : t,
        i = n ? t : e,
        l = document.createRange();
      l.setStart(r, 0), l.setEnd(i, 0);
      var o = l.commonAncestorContainer;
      if ((e !== o && t !== o) || r.contains(i)) return S3(o) ? o : Nn(o);
      var s = nl(e);
      return s.host ? kr(s.host, t) : kr(e, nl(t).host);
    }
    function Mn(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top",
        n = t === "top" ? "scrollTop" : "scrollLeft",
        r = e.nodeName;
      if (r === "BODY" || r === "HTML") {
        var i = e.ownerDocument.documentElement,
          l = e.ownerDocument.scrollingElement || i;
        return l[n];
      }
      return e[n];
    }
    function x3(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Mn(t, "top"),
        i = Mn(t, "left"),
        l = n ? -1 : 1;
      return (e.top += r * l), (e.bottom += r * l), (e.left += i * l), (e.right += i * l), e;
    }
    function p1(e, t) {
      var n = t === "x" ? "Left" : "Top",
        r = n === "Left" ? "Right" : "Bottom";
      return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"]);
    }
    function h1(e, t, n, r) {
      return Math.max(
        t["offset" + e],
        t["scroll" + e],
        n["client" + e],
        n["offset" + e],
        n["scroll" + e],
        Fn(10)
          ? parseInt(n["offset" + e]) +
              parseInt(r["margin" + (e === "Height" ? "Top" : "Left")]) +
              parseInt(r["margin" + (e === "Height" ? "Bottom" : "Right")])
          : 0,
      );
    }
    function y0(e) {
      var t = e.body,
        n = e.documentElement,
        r = Fn(10) && getComputedStyle(n);
      return { height: h1("Height", t, n, r), width: h1("Width", t, n, r) };
    }
    var N3 = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      },
      M3 = (function () {
        function e(t, n) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      An = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      },
      Ke =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
    function Pt(e) {
      return Ke({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function al(e) {
      var t = {};
      try {
        if (Fn(10)) {
          t = e.getBoundingClientRect();
          var n = Mn(e, "top"),
            r = Mn(e, "left");
          (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
        } else t = e.getBoundingClientRect();
      } catch {}
      var i = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        l = e.nodeName === "HTML" ? y0(e.ownerDocument) : {},
        o = l.width || e.clientWidth || i.width,
        s = l.height || e.clientHeight || i.height,
        c = e.offsetWidth - o,
        d = e.offsetHeight - s;
      if (c || d) {
        var m = ln(e);
        (c -= p1(m, "x")), (d -= p1(m, "y")), (i.width -= c), (i.height -= d);
      }
      return Pt(i);
    }
    function Vl(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Fn(10),
        i = t.nodeName === "HTML",
        l = al(e),
        o = al(t),
        s = Ca(e),
        c = ln(t),
        d = parseFloat(c.borderTopWidth),
        m = parseFloat(c.borderLeftWidth);
      n && i && ((o.top = Math.max(o.top, 0)), (o.left = Math.max(o.left, 0)));
      var u = Pt({
        top: l.top - o.top - d,
        left: l.left - o.left - m,
        width: l.width,
        height: l.height,
      });
      if (((u.marginTop = 0), (u.marginLeft = 0), !r && i)) {
        var p = parseFloat(c.marginTop),
          f = parseFloat(c.marginLeft);
        (u.top -= d - p),
          (u.bottom -= d - p),
          (u.left -= m - f),
          (u.right -= m - f),
          (u.marginTop = p),
          (u.marginLeft = f);
      }
      return (r && !n ? t.contains(s) : t === s && s.nodeName !== "BODY") && (u = x3(u, t)), u;
    }
    function A3(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = e.ownerDocument.documentElement,
        r = Vl(e, n),
        i = Math.max(n.clientWidth, window.innerWidth || 0),
        l = Math.max(n.clientHeight, window.innerHeight || 0),
        o = t ? 0 : Mn(n),
        s = t ? 0 : Mn(n, "left"),
        c = { top: o - r.top + r.marginTop, left: s - r.left + r.marginLeft, width: i, height: l };
      return Pt(c);
    }
    function E0(e) {
      var t = e.nodeName;
      if (t === "BODY" || t === "HTML") return !1;
      if (ln(e, "position") === "fixed") return !0;
      var n = Pl(e);
      return n ? E0(n) : !1;
    }
    function b0(e) {
      if (!e || !e.parentElement || Fn()) return document.documentElement;
      for (var t = e.parentElement; t && ln(t, "transform") === "none"; ) t = t.parentElement;
      return t || document.documentElement;
    }
    function Dl(e, t, n, r) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        l = { top: 0, left: 0 },
        o = i ? b0(e) : kr(e, v0(t));
      if (r === "viewport") l = A3(o, i);
      else {
        var s = void 0;
        r === "scrollParent"
          ? ((s = Ca(Pl(t))), s.nodeName === "BODY" && (s = e.ownerDocument.documentElement))
          : r === "window"
            ? (s = e.ownerDocument.documentElement)
            : (s = r);
        var c = Vl(s, o, i);
        if (s.nodeName === "HTML" && !E0(o)) {
          var d = y0(e.ownerDocument),
            m = d.height,
            u = d.width;
          (l.top += c.top - c.marginTop),
            (l.bottom = m + c.top),
            (l.left += c.left - c.marginLeft),
            (l.right = u + c.left);
        } else l = c;
      }
      n = n || 0;
      var p = typeof n == "number";
      return (
        (l.left += p ? n : n.left || 0),
        (l.top += p ? n : n.top || 0),
        (l.right -= p ? n : n.right || 0),
        (l.bottom -= p ? n : n.bottom || 0),
        l
      );
    }
    function _3(e) {
      var t = e.width,
        n = e.height;
      return t * n;
    }
    function k0(e, t, n, r, i) {
      var l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
      if (e.indexOf("auto") === -1) return e;
      var o = Dl(n, r, l, i),
        s = {
          top: { width: o.width, height: t.top - o.top },
          right: { width: o.right - t.right, height: o.height },
          bottom: { width: o.width, height: o.bottom - t.bottom },
          left: { width: t.left - o.left, height: o.height },
        },
        c = Object.keys(s)
          .map(function (p) {
            return Ke({ key: p }, s[p], { area: _3(s[p]) });
          })
          .sort(function (p, f) {
            return f.area - p.area;
          }),
        d = c.filter(function (p) {
          var f = p.width,
            g = p.height;
          return f >= n.clientWidth && g >= n.clientHeight;
        }),
        m = d.length > 0 ? d[0].key : c[0].key,
        u = e.split("-")[1];
      return m + (u ? "-" + u : "");
    }
    function w0(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
        i = r ? b0(t) : kr(t, v0(n));
      return Vl(n, i, r);
    }
    function C0(e) {
      var t = e.ownerDocument.defaultView,
        n = t.getComputedStyle(e),
        r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
        i = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
        l = { width: e.offsetWidth + i, height: e.offsetHeight + r };
      return l;
    }
    function wr(e) {
      var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return e.replace(/left|right|bottom|top/g, function (n) {
        return t[n];
      });
    }
    function S0(e, t, n) {
      n = n.split("-")[0];
      var r = C0(e),
        i = { width: r.width, height: r.height },
        l = ["right", "left"].indexOf(n) !== -1,
        o = l ? "top" : "left",
        s = l ? "left" : "top",
        c = l ? "height" : "width",
        d = l ? "width" : "height";
      return (
        (i[o] = t[o] + t[c] / 2 - r[c] / 2), n === s ? (i[s] = t[s] - r[d]) : (i[s] = t[wr(s)]), i
      );
    }
    function Sa(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function T3(e, t, n) {
      if (Array.prototype.findIndex)
        return e.findIndex(function (i) {
          return i[t] === n;
        });
      var r = Sa(e, function (i) {
        return i[t] === n;
      });
      return e.indexOf(r);
    }
    function x0(e, t, n) {
      var r = n === void 0 ? e : e.slice(0, T3(e, "name", n));
      return (
        r.forEach(function (i) {
          i.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var l = i.function || i.fn;
          i.enabled &&
            g0(l) &&
            ((t.offsets.popper = Pt(t.offsets.popper)),
            (t.offsets.reference = Pt(t.offsets.reference)),
            (t = l(t, i)));
        }),
        t
      );
    }
    function F3() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (e.offsets.reference = w0(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed,
        )),
          (e.placement = k0(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding,
          )),
          (e.originalPlacement = e.placement),
          (e.positionFixed = this.options.positionFixed),
          (e.offsets.popper = S0(this.popper, e.offsets.reference, e.placement)),
          (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
          (e = x0(this.modifiers, e)),
          this.state.isCreated
            ? this.options.onUpdate(e)
            : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function N0(e, t) {
      return e.some(function (n) {
        var r = n.name,
          i = n.enabled;
        return i && r === t;
      });
    }
    function Hl(e) {
      for (
        var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0;
        r < t.length;
        r++
      ) {
        var i = t[r],
          l = i ? "" + i + n : e;
        if (typeof document.body.style[l] < "u") return l;
      }
      return null;
    }
    function O3() {
      return (
        (this.state.isDestroyed = !0),
        N0(this.modifiers, "applyStyle") &&
          (this.popper.removeAttribute("x-placement"),
          (this.popper.style.position = ""),
          (this.popper.style.top = ""),
          (this.popper.style.left = ""),
          (this.popper.style.right = ""),
          (this.popper.style.bottom = ""),
          (this.popper.style.willChange = ""),
          (this.popper.style[Hl("transform")] = "")),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function M0(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function A0(e, t, n, r) {
      var i = e.nodeName === "BODY",
        l = i ? e.ownerDocument.defaultView : e;
      l.addEventListener(t, n, { passive: !0 }), i || A0(Ca(l.parentNode), t, n, r), r.push(l);
    }
    function L3(e, t, n, r) {
      (n.updateBound = r), M0(e).addEventListener("resize", n.updateBound, { passive: !0 });
      var i = Ca(e);
      return (
        A0(i, "scroll", n.updateBound, n.scrollParents),
        (n.scrollElement = i),
        (n.eventsEnabled = !0),
        n
      );
    }
    function R3() {
      this.state.eventsEnabled ||
        (this.state = L3(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function I3(e, t) {
      return (
        M0(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function (n) {
          n.removeEventListener("scroll", t.updateBound);
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t
      );
    }
    function Z3() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate), (this.state = I3(this.reference, this.state)));
    }
    function jl(e) {
      return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function rl(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = "";
        ["width", "height", "top", "right", "bottom", "left"].indexOf(n) !== -1 &&
          jl(t[n]) &&
          (r = "px"),
          (e.style[n] = t[n] + r);
      });
    }
    function B3(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = t[n];
        r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
      });
    }
    function P3(e) {
      return (
        rl(e.instance.popper, e.styles),
        B3(e.instance.popper, e.attributes),
        e.arrowElement && Object.keys(e.arrowStyles).length && rl(e.arrowElement, e.arrowStyles),
        e
      );
    }
    function V3(e, t, n, r, i) {
      var l = w0(i, t, e, n.positionFixed),
        o = k0(n.placement, l, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
      return (
        t.setAttribute("x-placement", o),
        rl(t, { position: n.positionFixed ? "fixed" : "absolute" }),
        n
      );
    }
    function D3(e, t) {
      var n = e.offsets,
        r = n.popper,
        i = n.reference,
        l = Math.round,
        o = Math.floor,
        s = function (k) {
          return k;
        },
        c = l(i.width),
        d = l(r.width),
        m = ["left", "right"].indexOf(e.placement) !== -1,
        u = e.placement.indexOf("-") !== -1,
        p = c % 2 === d % 2,
        f = c % 2 === 1 && d % 2 === 1,
        g = t ? (m || u || p ? l : o) : s,
        y = t ? l : s;
      return {
        left: g(f && !u && t ? r.left - 1 : r.left),
        top: y(r.top),
        bottom: y(r.bottom),
        right: g(r.right),
      };
    }
    var H3 = wa && /Firefox/i.test(navigator.userAgent);
    function j3(e, t) {
      var n = t.x,
        r = t.y,
        i = e.offsets.popper,
        l = Sa(e.instance.modifiers, function (v) {
          return v.name === "applyStyle";
        }).gpuAcceleration;
      l !== void 0 &&
        console.warn(
          "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!",
        );
      var o = l !== void 0 ? l : t.gpuAcceleration,
        s = Nn(e.instance.popper),
        c = al(s),
        d = { position: i.position },
        m = D3(e, window.devicePixelRatio < 2 || !H3),
        u = n === "bottom" ? "top" : "bottom",
        p = r === "right" ? "left" : "right",
        f = Hl("transform"),
        g = void 0,
        y = void 0;
      if (
        (u === "bottom"
          ? s.nodeName === "HTML"
            ? (y = -s.clientHeight + m.bottom)
            : (y = -c.height + m.bottom)
          : (y = m.top),
        p === "right"
          ? s.nodeName === "HTML"
            ? (g = -s.clientWidth + m.right)
            : (g = -c.width + m.right)
          : (g = m.left),
        o && f)
      )
        (d[f] = "translate3d(" + g + "px, " + y + "px, 0)"),
          (d[u] = 0),
          (d[p] = 0),
          (d.willChange = "transform");
      else {
        var k = u === "bottom" ? -1 : 1,
          E = p === "right" ? -1 : 1;
        (d[u] = y * k), (d[p] = g * E), (d.willChange = u + ", " + p);
      }
      var h = { "x-placement": e.placement };
      return (
        (e.attributes = Ke({}, h, e.attributes)),
        (e.styles = Ke({}, d, e.styles)),
        (e.arrowStyles = Ke({}, e.offsets.arrow, e.arrowStyles)),
        e
      );
    }
    function _0(e, t, n) {
      var r = Sa(e, function (s) {
          var c = s.name;
          return c === t;
        }),
        i =
          !!r &&
          e.some(function (s) {
            return s.name === n && s.enabled && s.order < r.order;
          });
      if (!i) {
        var l = "`" + t + "`",
          o = "`" + n + "`";
        console.warn(
          o +
            " modifier is required by " +
            l +
            " modifier in order to work, be sure to include it before " +
            l +
            "!",
        );
      }
      return i;
    }
    function z3(e, t) {
      var n;
      if (!_0(e.instance.modifiers, "arrow", "keepTogether")) return e;
      var r = t.element;
      if (typeof r == "string") {
        if (((r = e.instance.popper.querySelector(r)), !r)) return e;
      } else if (!e.instance.popper.contains(r))
        return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
      var i = e.placement.split("-")[0],
        l = e.offsets,
        o = l.popper,
        s = l.reference,
        c = ["left", "right"].indexOf(i) !== -1,
        d = c ? "height" : "width",
        m = c ? "Top" : "Left",
        u = m.toLowerCase(),
        p = c ? "left" : "top",
        f = c ? "bottom" : "right",
        g = C0(r)[d];
      s[f] - g < o[u] && (e.offsets.popper[u] -= o[u] - (s[f] - g)),
        s[u] + g > o[f] && (e.offsets.popper[u] += s[u] + g - o[f]),
        (e.offsets.popper = Pt(e.offsets.popper));
      var y = s[u] + s[d] / 2 - g / 2,
        k = ln(e.instance.popper),
        E = parseFloat(k["margin" + m]),
        h = parseFloat(k["border" + m + "Width"]),
        v = y - e.offsets.popper[u] - E - h;
      return (
        (v = Math.max(Math.min(o[d] - g, v), 0)),
        (e.arrowElement = r),
        (e.offsets.arrow = ((n = {}), An(n, u, Math.round(v)), An(n, p, ""), n)),
        e
      );
    }
    function U3(e) {
      return e === "end" ? "start" : e === "start" ? "end" : e;
    }
    var T0 = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],
      ki = T0.slice(3);
    function f1(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = ki.indexOf(e),
        r = ki.slice(n + 1).concat(ki.slice(0, n));
      return t ? r.reverse() : r;
    }
    var wi = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };
    function $3(e, t) {
      if (N0(e.instance.modifiers, "inner") || (e.flipped && e.placement === e.originalPlacement))
        return e;
      var n = Dl(
          e.instance.popper,
          e.instance.reference,
          t.padding,
          t.boundariesElement,
          e.positionFixed,
        ),
        r = e.placement.split("-")[0],
        i = wr(r),
        l = e.placement.split("-")[1] || "",
        o = [];
      switch (t.behavior) {
        case wi.FLIP:
          o = [r, i];
          break;
        case wi.CLOCKWISE:
          o = f1(r);
          break;
        case wi.COUNTERCLOCKWISE:
          o = f1(r, !0);
          break;
        default:
          o = t.behavior;
      }
      return (
        o.forEach(function (s, c) {
          if (r !== s || o.length === c + 1) return e;
          (r = e.placement.split("-")[0]), (i = wr(r));
          var d = e.offsets.popper,
            m = e.offsets.reference,
            u = Math.floor,
            p =
              (r === "left" && u(d.right) > u(m.left)) ||
              (r === "right" && u(d.left) < u(m.right)) ||
              (r === "top" && u(d.bottom) > u(m.top)) ||
              (r === "bottom" && u(d.top) < u(m.bottom)),
            f = u(d.left) < u(n.left),
            g = u(d.right) > u(n.right),
            y = u(d.top) < u(n.top),
            k = u(d.bottom) > u(n.bottom),
            E =
              (r === "left" && f) ||
              (r === "right" && g) ||
              (r === "top" && y) ||
              (r === "bottom" && k),
            h = ["top", "bottom"].indexOf(r) !== -1,
            v =
              !!t.flipVariations &&
              ((h && l === "start" && f) ||
                (h && l === "end" && g) ||
                (!h && l === "start" && y) ||
                (!h && l === "end" && k)),
            b =
              !!t.flipVariationsByContent &&
              ((h && l === "start" && g) ||
                (h && l === "end" && f) ||
                (!h && l === "start" && k) ||
                (!h && l === "end" && y)),
            C = v || b;
          (p || E || C) &&
            ((e.flipped = !0),
            (p || E) && (r = o[c + 1]),
            C && (l = U3(l)),
            (e.placement = r + (l ? "-" + l : "")),
            (e.offsets.popper = Ke(
              {},
              e.offsets.popper,
              S0(e.instance.popper, e.offsets.reference, e.placement),
            )),
            (e = x0(e.instance.modifiers, e, "flip")));
        }),
        e
      );
    }
    function W3(e) {
      var t = e.offsets,
        n = t.popper,
        r = t.reference,
        i = e.placement.split("-")[0],
        l = Math.floor,
        o = ["top", "bottom"].indexOf(i) !== -1,
        s = o ? "right" : "bottom",
        c = o ? "left" : "top",
        d = o ? "width" : "height";
      return (
        n[s] < l(r[c]) && (e.offsets.popper[c] = l(r[c]) - n[d]),
        n[c] > l(r[s]) && (e.offsets.popper[c] = l(r[s])),
        e
      );
    }
    function G3(e, t, n, r) {
      var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        l = +i[1],
        o = i[2];
      if (!l) return e;
      if (o.indexOf("%") === 0) {
        var s = void 0;
        switch (o) {
          case "%p":
            s = n;
            break;
          case "%":
          case "%r":
          default:
            s = r;
        }
        var c = Pt(s);
        return (c[t] / 100) * l;
      } else if (o === "vh" || o === "vw") {
        var d = void 0;
        return (
          o === "vh"
            ? (d = Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
            : (d = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)),
          (d / 100) * l
        );
      } else return l;
    }
    function q3(e, t, n, r) {
      var i = [0, 0],
        l = ["right", "left"].indexOf(r) !== -1,
        o = e.split(/(\+|\-)/).map(function (m) {
          return m.trim();
        }),
        s = o.indexOf(
          Sa(o, function (m) {
            return m.search(/,|\s/) !== -1;
          }),
        );
      o[s] &&
        o[s].indexOf(",") === -1 &&
        console.warn(
          "Offsets separated by white space(s) are deprecated, use a comma (,) instead.",
        );
      var c = /\s*,\s*|\s+/,
        d =
          s !== -1
            ? [o.slice(0, s).concat([o[s].split(c)[0]]), [o[s].split(c)[1]].concat(o.slice(s + 1))]
            : [o];
      return (
        (d = d.map(function (m, u) {
          var p = (u === 1 ? !l : l) ? "height" : "width",
            f = !1;
          return m
            .reduce(function (g, y) {
              return g[g.length - 1] === "" && ["+", "-"].indexOf(y) !== -1
                ? ((g[g.length - 1] = y), (f = !0), g)
                : f
                  ? ((g[g.length - 1] += y), (f = !1), g)
                  : g.concat(y);
            }, [])
            .map(function (g) {
              return G3(g, p, t, n);
            });
        })),
        d.forEach(function (m, u) {
          m.forEach(function (p, f) {
            jl(p) && (i[u] += p * (m[f - 1] === "-" ? -1 : 1));
          });
        }),
        i
      );
    }
    function Y3(e, t) {
      var n = t.offset,
        r = e.placement,
        i = e.offsets,
        l = i.popper,
        o = i.reference,
        s = r.split("-")[0],
        c = void 0;
      return (
        jl(+n) ? (c = [+n, 0]) : (c = q3(n, l, o, s)),
        s === "left"
          ? ((l.top += c[0]), (l.left -= c[1]))
          : s === "right"
            ? ((l.top += c[0]), (l.left += c[1]))
            : s === "top"
              ? ((l.left += c[0]), (l.top -= c[1]))
              : s === "bottom" && ((l.left += c[0]), (l.top += c[1])),
        (e.popper = l),
        e
      );
    }
    function Q3(e, t) {
      var n = t.boundariesElement || Nn(e.instance.popper);
      e.instance.reference === n && (n = Nn(n));
      var r = Hl("transform"),
        i = e.instance.popper.style,
        l = i.top,
        o = i.left,
        s = i[r];
      (i.top = ""), (i.left = ""), (i[r] = "");
      var c = Dl(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
      (i.top = l), (i.left = o), (i[r] = s), (t.boundaries = c);
      var d = t.priority,
        m = e.offsets.popper,
        u = {
          primary: function (p) {
            var f = m[p];
            return (
              m[p] < c[p] && !t.escapeWithReference && (f = Math.max(m[p], c[p])), An({}, p, f)
            );
          },
          secondary: function (p) {
            var f = p === "right" ? "left" : "top",
              g = m[f];
            return (
              m[p] > c[p] &&
                !t.escapeWithReference &&
                (g = Math.min(m[f], c[p] - (p === "right" ? m.width : m.height))),
              An({}, f, g)
            );
          },
        };
      return (
        d.forEach(function (p) {
          var f = ["left", "top"].indexOf(p) !== -1 ? "primary" : "secondary";
          m = Ke({}, m, u[f](p));
        }),
        (e.offsets.popper = m),
        e
      );
    }
    function K3(e) {
      var t = e.placement,
        n = t.split("-")[0],
        r = t.split("-")[1];
      if (r) {
        var i = e.offsets,
          l = i.reference,
          o = i.popper,
          s = ["bottom", "top"].indexOf(n) !== -1,
          c = s ? "left" : "top",
          d = s ? "width" : "height",
          m = { start: An({}, c, l[c]), end: An({}, c, l[c] + l[d] - o[d]) };
        e.offsets.popper = Ke({}, o, m[r]);
      }
      return e;
    }
    function J3(e) {
      if (!_0(e.instance.modifiers, "hide", "preventOverflow")) return e;
      var t = e.offsets.reference,
        n = Sa(e.instance.modifiers, function (r) {
          return r.name === "preventOverflow";
        }).boundaries;
      if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
        if (e.hide === !0) return e;
        (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
      } else {
        if (e.hide === !1) return e;
        (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
      }
      return e;
    }
    function X3(e) {
      var t = e.placement,
        n = t.split("-")[0],
        r = e.offsets,
        i = r.popper,
        l = r.reference,
        o = ["left", "right"].indexOf(n) !== -1,
        s = ["top", "left"].indexOf(n) === -1;
      return (
        (i[o ? "left" : "top"] = l[n] - (s ? i[o ? "width" : "height"] : 0)),
        (e.placement = wr(t)),
        (e.offsets.popper = Pt(i)),
        e
      );
    }
    var eh = {
        shift: { order: 100, enabled: !0, fn: K3 },
        offset: { order: 200, enabled: !0, fn: Y3, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: Q3,
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: { order: 400, enabled: !0, fn: W3 },
        arrow: { order: 500, enabled: !0, fn: z3, element: "[x-arrow]" },
        flip: {
          order: 600,
          enabled: !0,
          fn: $3,
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: { order: 700, enabled: !1, fn: X3 },
        hide: { order: 800, enabled: !0, fn: J3 },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: j3,
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: { order: 900, enabled: !0, fn: P3, onLoad: V3, gpuAcceleration: void 0 },
      },
      th = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: eh,
      },
      Vr = (function () {
        function e(t, n) {
          var r = this,
            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          N3(this, e),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(r.update);
            }),
            (this.update = C3(this.update.bind(this))),
            (this.options = Ke({}, e.Defaults, i)),
            (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
            (this.reference = t && t.jquery ? t[0] : t),
            (this.popper = n && n.jquery ? n[0] : n),
            (this.options.modifiers = {}),
            Object.keys(Ke({}, e.Defaults.modifiers, i.modifiers)).forEach(function (o) {
              r.options.modifiers[o] = Ke(
                {},
                e.Defaults.modifiers[o] || {},
                i.modifiers ? i.modifiers[o] : {},
              );
            }),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (o) {
                return Ke({ name: o }, r.options.modifiers[o]);
              })
              .sort(function (o, s) {
                return o.order - s.order;
              })),
            this.modifiers.forEach(function (o) {
              o.enabled && g0(o.onLoad) && o.onLoad(r.reference, r.popper, r.options, o, r.state);
            }),
            this.update();
          var l = this.options.eventsEnabled;
          l && this.enableEventListeners(), (this.state.eventsEnabled = l);
        }
        return (
          M3(e, [
            {
              key: "update",
              value: function () {
                return F3.call(this);
              },
            },
            {
              key: "destroy",
              value: function () {
                return O3.call(this);
              },
            },
            {
              key: "enableEventListeners",
              value: function () {
                return R3.call(this);
              },
            },
            {
              key: "disableEventListeners",
              value: function () {
                return Z3.call(this);
              },
            },
          ]),
          e
        );
      })();
    Vr.Utils = window.PopperUtils;
    Vr.placements = T0;
    Vr.Defaults = th;
    var g1 = Vr,
      il = et(dl()),
      nh = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"],
      ah = [
        "Array",
        "ArrayBuffer",
        "AsyncFunction",
        "AsyncGenerator",
        "AsyncGeneratorFunction",
        "Date",
        "Error",
        "Function",
        "Generator",
        "GeneratorFunction",
        "HTMLElement",
        "Map",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "WeakMap",
        "WeakSet",
      ],
      rh = ["bigint", "boolean", "null", "number", "string", "symbol", "undefined"];
    function Dr(e) {
      var t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return "HTMLElement";
      if (ih(t)) return t;
    }
    function st(e) {
      return function (t) {
        return Dr(t) === e;
      };
    }
    function ih(e) {
      return ah.includes(e);
    }
    function On(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    function lh(e) {
      return rh.includes(e);
    }
    function _(e) {
      if (e === null) return "null";
      switch (typeof e) {
        case "bigint":
          return "bigint";
        case "boolean":
          return "boolean";
        case "number":
          return "number";
        case "string":
          return "string";
        case "symbol":
          return "symbol";
        case "undefined":
          return "undefined";
      }
      if (_.array(e)) return "Array";
      if (_.plainFunction(e)) return "Function";
      var t = Dr(e);
      return t || "Object";
    }
    _.array = Array.isArray;
    _.arrayOf = function (e, t) {
      return !_.array(e) && !_.function(t)
        ? !1
        : e.every(function (n) {
            return t(n);
          });
    };
    _.asyncGeneratorFunction = function (e) {
      return Dr(e) === "AsyncGeneratorFunction";
    };
    _.asyncFunction = st("AsyncFunction");
    _.bigint = On("bigint");
    _.boolean = function (e) {
      return e === !0 || e === !1;
    };
    _.date = st("Date");
    _.defined = function (e) {
      return !_.undefined(e);
    };
    _.domElement = function (e) {
      return (
        _.object(e) &&
        !_.plainObject(e) &&
        e.nodeType === 1 &&
        _.string(e.nodeName) &&
        nh.every(function (t) {
          return t in e;
        })
      );
    };
    _.empty = function (e) {
      return (
        (_.string(e) && e.length === 0) ||
        (_.array(e) && e.length === 0) ||
        (_.object(e) && !_.map(e) && !_.set(e) && Object.keys(e).length === 0) ||
        (_.set(e) && e.size === 0) ||
        (_.map(e) && e.size === 0)
      );
    };
    _.error = st("Error");
    _.function = On("function");
    _.generator = function (e) {
      return _.iterable(e) && _.function(e.next) && _.function(e.throw);
    };
    _.generatorFunction = st("GeneratorFunction");
    _.instanceOf = function (e, t) {
      return !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
    };
    _.iterable = function (e) {
      return !_.nullOrUndefined(e) && _.function(e[Symbol.iterator]);
    };
    _.map = st("Map");
    _.nan = function (e) {
      return Number.isNaN(e);
    };
    _.null = function (e) {
      return e === null;
    };
    _.nullOrUndefined = function (e) {
      return _.null(e) || _.undefined(e);
    };
    _.number = function (e) {
      return On("number")(e) && !_.nan(e);
    };
    _.numericString = function (e) {
      return _.string(e) && e.length > 0 && !Number.isNaN(Number(e));
    };
    _.object = function (e) {
      return !_.nullOrUndefined(e) && (_.function(e) || typeof e == "object");
    };
    _.oneOf = function (e, t) {
      return _.array(e) ? e.indexOf(t) > -1 : !1;
    };
    _.plainFunction = st("Function");
    _.plainObject = function (e) {
      if (Dr(e) !== "Object") return !1;
      var t = Object.getPrototypeOf(e);
      return t === null || t === Object.getPrototypeOf({});
    };
    _.primitive = function (e) {
      return _.null(e) || lh(typeof e);
    };
    _.promise = st("Promise");
    _.propertyOf = function (e, t, n) {
      if (!_.object(e) || !t) return !1;
      var r = e[t];
      return _.function(n) ? n(r) : _.defined(r);
    };
    _.regexp = st("RegExp");
    _.set = st("Set");
    _.string = On("string");
    _.symbol = On("symbol");
    _.undefined = On("undefined");
    _.weakMap = st("WeakMap");
    _.weakSet = st("WeakSet");
    var R = _;
    function F0(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    var oh = F0("function"),
      sh = function (e) {
        return e === null;
      },
      v1 = function (e) {
        return Object.prototype.toString.call(e).slice(8, -1) === "RegExp";
      },
      y1 = function (e) {
        return !ch(e) && !sh(e) && (oh(e) || typeof e == "object");
      },
      ch = F0("undefined"),
      ll = function (e) {
        var t = typeof Symbol == "function" && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && typeof e.length == "number")
          return {
            next: function () {
              return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
            },
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
    function dh(e, t) {
      var n = e.length;
      if (n !== t.length) return !1;
      for (var r = n; r-- !== 0; ) if (!De(e[r], t[r])) return !1;
      return !0;
    }
    function uh(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      for (var n = new DataView(e.buffer), r = new DataView(t.buffer), i = e.byteLength; i--; )
        if (n.getUint8(i) !== r.getUint8(i)) return !1;
      return !0;
    }
    function mh(e, t) {
      var n, r, i, l;
      if (e.size !== t.size) return !1;
      try {
        for (var o = ll(e.entries()), s = o.next(); !s.done; s = o.next()) {
          var c = s.value;
          if (!t.has(c[0])) return !1;
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          s && !s.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var d = ll(e.entries()), m = d.next(); !m.done; m = d.next()) {
          var c = m.value;
          if (!De(c[1], t.get(c[0]))) return !1;
        }
      } catch (u) {
        i = { error: u };
      } finally {
        try {
          m && !m.done && (l = d.return) && l.call(d);
        } finally {
          if (i) throw i.error;
        }
      }
      return !0;
    }
    function ph(e, t) {
      var n, r;
      if (e.size !== t.size) return !1;
      try {
        for (var i = ll(e.entries()), l = i.next(); !l.done; l = i.next()) {
          var o = l.value;
          if (!t.has(o[0])) return !1;
        }
      } catch (s) {
        n = { error: s };
      } finally {
        try {
          l && !l.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      return !0;
    }
    function De(e, t) {
      if (e === t) return !0;
      if (e && y1(e) && t && y1(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return dh(e, t);
        if (e instanceof Map && t instanceof Map) return mh(e, t);
        if (e instanceof Set && t instanceof Set) return ph(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return uh(e, t);
        if (v1(e) && v1(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var i = n.length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
        for (var i = n.length; i-- !== 0; ) {
          var l = n[i];
          if (!(l === "_owner" && e.$$typeof) && !De(e[l], t[l])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    function hh() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every(function (n) {
        return R.string(n) || R.array(n) || R.plainObject(n);
      });
    }
    function fh(e, t, n) {
      return O0(e, t)
        ? [e, t].every(R.array)
          ? !e.some(C1(n)) && t.some(C1(n))
          : [e, t].every(R.plainObject)
            ? !Object.entries(e).some(w1(n)) && Object.entries(t).some(w1(n))
            : t === n
        : !1;
    }
    function E1(e, t, n) {
      var r = n.actual,
        i = n.key,
        l = n.previous,
        o = n.type,
        s = ft(e, i),
        c = ft(t, i),
        d = [s, c].every(R.number) && (o === "increased" ? s < c : s > c);
      return R.undefined(r) || (d = d && c === r), R.undefined(l) || (d = d && s === l), d;
    }
    function b1(e, t, n) {
      var r = n.key,
        i = n.type,
        l = n.value,
        o = ft(e, r),
        s = ft(t, r),
        c = i === "added" ? o : s,
        d = i === "added" ? s : o;
      if (!R.nullOrUndefined(l)) {
        if (R.defined(c)) {
          if (R.array(c) || R.plainObject(c)) return fh(c, d, l);
        } else return De(d, l);
        return !1;
      }
      return [o, s].every(R.array)
        ? !d.every(zl(c))
        : [o, s].every(R.plainObject)
          ? gh(Object.keys(c), Object.keys(d))
          : ![o, s].every(function (m) {
              return R.primitive(m) && R.defined(m);
            }) && (i === "added" ? !R.defined(o) && R.defined(s) : R.defined(o) && !R.defined(s));
    }
    function k1(e, t, n) {
      var r = n === void 0 ? {} : n,
        i = r.key,
        l = ft(e, i),
        o = ft(t, i);
      if (!O0(l, o)) throw new TypeError("Inputs have different types");
      if (!hh(l, o)) throw new TypeError("Inputs don't have length");
      return [l, o].every(R.plainObject) && ((l = Object.keys(l)), (o = Object.keys(o))), [l, o];
    }
    function w1(e) {
      return function (t) {
        var n = t[0],
          r = t[1];
        return R.array(e)
          ? De(e, r) ||
              e.some(function (i) {
                return De(i, r) || (R.array(r) && zl(r)(i));
              })
          : R.plainObject(e) && e[n]
            ? !!e[n] && De(e[n], r)
            : De(e, r);
      };
    }
    function gh(e, t) {
      return t.some(function (n) {
        return !e.includes(n);
      });
    }
    function C1(e) {
      return function (t) {
        return R.array(e)
          ? e.some(function (n) {
              return De(n, t) || (R.array(t) && zl(t)(n));
            })
          : De(e, t);
      };
    }
    function Hn(e, t) {
      return R.array(e)
        ? e.some(function (n) {
            return De(n, t);
          })
        : De(e, t);
    }
    function zl(e) {
      return function (t) {
        return e.some(function (n) {
          return De(n, t);
        });
      };
    }
    function O0() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every(R.array) || e.every(R.number) || e.every(R.plainObject) || e.every(R.string);
    }
    function ft(e, t) {
      if (R.plainObject(e) || R.array(e)) {
        if (R.string(t)) {
          var n = t.split(".");
          return n.reduce(function (r, i) {
            return r && r[i];
          }, e);
        }
        return R.number(t) ? e[t] : e;
      }
      return e;
    }
    function vh(e, t) {
      if ([e, t].some(R.nullOrUndefined)) throw new Error("Missing required parameters");
      if (
        ![e, t].every(function (u) {
          return R.plainObject(u) || R.array(u);
        })
      )
        throw new Error("Expected plain objects or array");
      var n = function (u, p) {
          try {
            return b1(e, t, { key: u, type: "added", value: p });
          } catch {
            return !1;
          }
        },
        r = function (u, p, f) {
          try {
            var g = ft(e, u),
              y = ft(t, u),
              k = R.defined(p),
              E = R.defined(f);
            if (k || E) {
              var h = E ? Hn(f, g) : !Hn(p, g),
                v = Hn(p, y);
              return h && v;
            }
            return [g, y].every(R.array) || [g, y].every(R.plainObject) ? !De(g, y) : g !== y;
          } catch {
            return !1;
          }
        },
        i = function (u, p, f) {
          if (!R.defined(u)) return !1;
          try {
            var g = ft(e, u),
              y = ft(t, u),
              k = R.defined(f);
            return Hn(p, g) && (k ? Hn(f, y) : !k);
          } catch {
            return !1;
          }
        },
        l = function (u, p) {
          return R.defined(u) ? r(u, p) : !1;
        },
        o = function (u, p, f) {
          if (!R.defined(u)) return !1;
          try {
            return E1(e, t, { key: u, actual: p, previous: f, type: "decreased" });
          } catch {
            return !1;
          }
        },
        s = function (u) {
          try {
            var p = k1(e, t, { key: u }),
              f = p[0],
              g = p[1];
            return !!f.length && !g.length;
          } catch {
            return !1;
          }
        },
        c = function (u) {
          try {
            var p = k1(e, t, { key: u }),
              f = p[0],
              g = p[1];
            return !f.length && !!g.length;
          } catch {
            return !1;
          }
        },
        d = function (u, p, f) {
          if (!R.defined(u)) return !1;
          try {
            return E1(e, t, { key: u, actual: p, previous: f, type: "increased" });
          } catch {
            return !1;
          }
        },
        m = function (u, p) {
          try {
            return b1(e, t, { key: u, type: "removed", value: p });
          } catch {
            return !1;
          }
        };
      return {
        added: n,
        changed: r,
        changedFrom: i,
        changedTo: l,
        decreased: o,
        emptied: s,
        filled: c,
        increased: d,
        removed: m,
      };
    }
    function S1(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ge(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? S1(Object(n), !0).forEach(function (r) {
              Te(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S1(Object(n)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
              });
      }
      return e;
    }
    function xa(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function x1(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, R0(r.key), r);
      }
    }
    function Na(e, t, n) {
      return (
        t && x1(e.prototype, t),
        n && x1(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function Te(e, t, n) {
      return (
        (t = R0(t)),
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Ma(e, t) {
      if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && ol(e, t);
    }
    function Cr(e) {
      return (
        (Cr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        Cr(e)
      );
    }
    function ol(e, t) {
      return (
        (ol = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n;
            }),
        ol(e, t)
      );
    }
    function yh() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch {
        return !1;
      }
    }
    function Eh(e, t) {
      if (e == null) return {};
      var n = {},
        r = Object.keys(e),
        i,
        l;
      for (l = 0; l < r.length; l++) (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
      return n;
    }
    function L0(e, t) {
      if (e == null) return {};
      var n = Eh(e, t),
        r,
        i;
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++)
          (r = l[i]),
            !(t.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (n[r] = e[r]);
      }
      return n;
    }
    function St(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function bh(e, t) {
      if (t && (typeof t == "object" || typeof t == "function")) return t;
      if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return St(e);
    }
    function Aa(e) {
      var t = yh();
      return function () {
        var n = Cr(e),
          r;
        if (t) {
          var i = Cr(this).constructor;
          r = Reflect.construct(n, arguments, i);
        } else r = n.apply(this, arguments);
        return bh(this, r);
      };
    }
    function kh(e, t) {
      if (typeof e != "object" || e === null) return e;
      var n = e[Symbol.toPrimitive];
      if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    function R0(e) {
      var t = kh(e, "string");
      return typeof t == "symbol" ? t : String(t);
    }
    var wh = { flip: { padding: 20 }, preventOverflow: { padding: 10 } },
      Ch =
        "The typeValidator argument must be a function with the signature function(props, propName, componentName).",
      Sh = "The error message is optional, but must be a string if provided.";
    function xh(e, t, n, r) {
      return typeof e == "boolean" ? e : typeof e == "function" ? e(t, n, r) : e ? !!e : !1;
    }
    function Nh(e, t) {
      return Object.hasOwnProperty.call(e, t);
    }
    function Mh(e, t, n, r) {
      return r
        ? new Error(r)
        : new Error(
            "Required ".concat(e[t], " `").concat(t, "` was not specified in `").concat(n, "`."),
          );
    }
    function Ah(e, t) {
      if (typeof e != "function") throw new TypeError(Ch);
      if (t && typeof t != "string") throw new TypeError(Sh);
    }
    function N1(e, t, n) {
      return (
        Ah(e, n),
        function (r, i, l) {
          for (var o = arguments.length, s = new Array(o > 3 ? o - 3 : 0), c = 3; c < o; c++)
            s[c - 3] = arguments[c];
          return xh(t, r, i, l)
            ? Nh(r, i)
              ? e.apply(void 0, [r, i, l].concat(s))
              : Mh(r, i, l, n)
            : e.apply(void 0, [r, i, l].concat(s));
        }
      );
    }
    var te = {
        INIT: "init",
        IDLE: "idle",
        OPENING: "opening",
        OPEN: "open",
        CLOSING: "closing",
        ERROR: "error",
      },
      jn = Rn.createPortal !== void 0;
    function dt() {
      return !!(typeof window < "u" && window.document && window.document.createElement);
    }
    function Ci() {
      return "ontouchstart" in window && /Mobi/.test(navigator.userAgent);
    }
    function Ha(e) {
      var t = e.title,
        n = e.data,
        r = e.warn,
        i = r === void 0 ? !1 : r,
        l = e.debug,
        o = l === void 0 ? !1 : l,
        s = i ? console.warn || console.error : console.log;
      o &&
        t &&
        n &&
        (console.groupCollapsed(
          "%creact-floater: ".concat(t),
          "color: #9b00ff; font-weight: bold; font-size: 12px;",
        ),
        Array.isArray(n)
          ? n.forEach(function (c) {
              R.plainObject(c) && c.key
                ? s.apply(console, [c.key, c.value])
                : s.apply(console, [c]);
            })
          : s.apply(console, [n]),
        console.groupEnd());
    }
    function _h(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.addEventListener(t, n, r);
    }
    function Th(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.removeEventListener(t, n, r);
    }
    function Fh(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
        i;
      (i = function (l) {
        n(l), Th(e, t, i);
      }),
        _h(e, t, i, r);
    }
    function M1() {}
    var I0 = (function (e) {
      Ma(n, e);
      var t = Aa(n);
      function n() {
        return xa(this, n), t.apply(this, arguments);
      }
      return (
        Na(n, [
          {
            key: "componentDidMount",
            value: function () {
              dt() && (this.node || this.appendNode(), jn || this.renderPortal());
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              dt() && (jn || this.renderPortal());
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              !dt() ||
                !this.node ||
                (jn || Rn.unmountComponentAtNode(this.node),
                this.node &&
                  this.node.parentNode === document.body &&
                  (document.body.removeChild(this.node), (this.node = void 0)));
            },
          },
          {
            key: "appendNode",
            value: function () {
              var r = this.props,
                i = r.id,
                l = r.zIndex;
              this.node ||
                ((this.node = document.createElement("div")),
                i && (this.node.id = i),
                l && (this.node.style.zIndex = l),
                document.body.appendChild(this.node));
            },
          },
          {
            key: "renderPortal",
            value: function () {
              if (!dt()) return null;
              var r = this.props,
                i = r.children,
                l = r.setRef;
              if ((this.node || this.appendNode(), jn)) return Rn.createPortal(i, this.node);
              var o = Rn.unstable_renderSubtreeIntoContainer(
                this,
                i.length > 1 ? a.createElement("div", null, i) : i[0],
                this.node,
              );
              return l(o), null;
            },
          },
          {
            key: "renderReact16",
            value: function () {
              var r = this.props,
                i = r.hasChildren,
                l = r.placement,
                o = r.target;
              return i ? this.renderPortal() : o || l === "center" ? this.renderPortal() : null;
            },
          },
          {
            key: "render",
            value: function () {
              return jn ? this.renderReact16() : null;
            },
          },
        ]),
        n
      );
    })(a.Component);
    Te(I0, "propTypes", {
      children: N.default.oneOfType([N.default.element, N.default.array]),
      hasChildren: N.default.bool,
      id: N.default.oneOfType([N.default.string, N.default.number]),
      placement: N.default.string,
      setRef: N.default.func.isRequired,
      target: N.default.oneOfType([N.default.object, N.default.string]),
      zIndex: N.default.number,
    });
    var Z0 = (function (e) {
      Ma(n, e);
      var t = Aa(n);
      function n() {
        return xa(this, n), t.apply(this, arguments);
      }
      return (
        Na(n, [
          {
            key: "parentStyle",
            get: function () {
              var r = this.props,
                i = r.placement,
                l = r.styles,
                o = l.arrow.length,
                s = { pointerEvents: "none", position: "absolute", width: "100%" };
              return (
                i.startsWith("top")
                  ? ((s.bottom = 0), (s.left = 0), (s.right = 0), (s.height = o))
                  : i.startsWith("bottom")
                    ? ((s.left = 0), (s.right = 0), (s.top = 0), (s.height = o))
                    : i.startsWith("left")
                      ? ((s.right = 0), (s.top = 0), (s.bottom = 0))
                      : i.startsWith("right") && ((s.left = 0), (s.top = 0)),
                s
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = r.placement,
                l = r.setArrowRef,
                o = r.styles,
                s = o.arrow,
                c = s.color,
                d = s.display,
                m = s.length,
                u = s.margin,
                p = s.position,
                f = s.spread,
                g = { display: d, position: p },
                y,
                k = f,
                E = m;
              return (
                i.startsWith("top")
                  ? ((y = "0,0 "
                      .concat(k / 2, ",")
                      .concat(E, " ")
                      .concat(k, ",0")),
                    (g.bottom = 0),
                    (g.marginLeft = u),
                    (g.marginRight = u))
                  : i.startsWith("bottom")
                    ? ((y = ""
                        .concat(k, ",")
                        .concat(E, " ")
                        .concat(k / 2, ",0 0,")
                        .concat(E)),
                      (g.top = 0),
                      (g.marginLeft = u),
                      (g.marginRight = u))
                    : i.startsWith("left")
                      ? ((E = f),
                        (k = m),
                        (y = "0,0 "
                          .concat(k, ",")
                          .concat(E / 2, " 0,")
                          .concat(E)),
                        (g.right = 0),
                        (g.marginTop = u),
                        (g.marginBottom = u))
                      : i.startsWith("right") &&
                        ((E = f),
                        (k = m),
                        (y = ""
                          .concat(k, ",")
                          .concat(E, " ")
                          .concat(k, ",0 0,")
                          .concat(E / 2)),
                        (g.left = 0),
                        (g.marginTop = u),
                        (g.marginBottom = u)),
                a.createElement(
                  "div",
                  { className: "__floater__arrow", style: this.parentStyle },
                  a.createElement(
                    "span",
                    { ref: l, style: g },
                    a.createElement(
                      "svg",
                      { width: k, height: E, version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                      a.createElement("polygon", { points: y, fill: c }),
                    ),
                  ),
                )
              );
            },
          },
        ]),
        n
      );
    })(a.Component);
    Te(Z0, "propTypes", {
      placement: N.default.string.isRequired,
      setArrowRef: N.default.func.isRequired,
      styles: N.default.object.isRequired,
    });
    var Oh = ["color", "height", "width"];
    function B0(e) {
      var t = e.handleClick,
        n = e.styles,
        r = n.color,
        i = n.height,
        l = n.width,
        o = L0(n, Oh);
      return a.createElement(
        "button",
        { "aria-label": "close", onClick: t, style: o, type: "button" },
        a.createElement(
          "svg",
          {
            width: "".concat(l, "px"),
            height: "".concat(i, "px"),
            viewBox: "0 0 18 18",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "xMidYMid",
          },
          a.createElement(
            "g",
            null,
            a.createElement("path", {
              d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
              fill: r,
            }),
          ),
        ),
      );
    }
    B0.propTypes = { handleClick: N.default.func.isRequired, styles: N.default.object.isRequired };
    function P0(e) {
      var t = e.content,
        n = e.footer,
        r = e.handleClick,
        i = e.open,
        l = e.positionWrapper,
        o = e.showCloseButton,
        s = e.title,
        c = e.styles,
        d = {
          content: a.isValidElement(t)
            ? t
            : a.createElement("div", { className: "__floater__content", style: c.content }, t),
        };
      return (
        s &&
          (d.title = a.isValidElement(s)
            ? s
            : a.createElement("div", { className: "__floater__title", style: c.title }, s)),
        n &&
          (d.footer = a.isValidElement(n)
            ? n
            : a.createElement("div", { className: "__floater__footer", style: c.footer }, n)),
        (o || l) &&
          !R.boolean(i) &&
          (d.close = a.createElement(B0, { styles: c.close, handleClick: r })),
        a.createElement(
          "div",
          { className: "__floater__container", style: c.container },
          d.close,
          d.title,
          d.content,
          d.footer,
        )
      );
    }
    P0.propTypes = {
      content: N.default.node.isRequired,
      footer: N.default.node,
      handleClick: N.default.func.isRequired,
      open: N.default.bool,
      positionWrapper: N.default.bool.isRequired,
      showCloseButton: N.default.bool.isRequired,
      styles: N.default.object.isRequired,
      title: N.default.node,
    };
    var V0 = (function (e) {
      Ma(n, e);
      var t = Aa(n);
      function n() {
        return xa(this, n), t.apply(this, arguments);
      }
      return (
        Na(n, [
          {
            key: "style",
            get: function () {
              var r = this.props,
                i = r.disableAnimation,
                l = r.component,
                o = r.placement,
                s = r.hideArrow,
                c = r.status,
                d = r.styles,
                m = d.arrow.length,
                u = d.floater,
                p = d.floaterCentered,
                f = d.floaterClosing,
                g = d.floaterOpening,
                y = d.floaterWithAnimation,
                k = d.floaterWithComponent,
                E = {};
              return (
                s ||
                  (o.startsWith("top")
                    ? (E.padding = "0 0 ".concat(m, "px"))
                    : o.startsWith("bottom")
                      ? (E.padding = "".concat(m, "px 0 0"))
                      : o.startsWith("left")
                        ? (E.padding = "0 ".concat(m, "px 0 0"))
                        : o.startsWith("right") && (E.padding = "0 0 0 ".concat(m, "px"))),
                [te.OPENING, te.OPEN].indexOf(c) !== -1 && (E = ge(ge({}, E), g)),
                c === te.CLOSING && (E = ge(ge({}, E), f)),
                c === te.OPEN && !i && (E = ge(ge({}, E), y)),
                o === "center" && (E = ge(ge({}, E), p)),
                l && (E = ge(ge({}, E), k)),
                ge(ge({}, u), E)
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = r.component,
                l = r.handleClick,
                o = r.hideArrow,
                s = r.setFloaterRef,
                c = r.status,
                d = {},
                m = ["__floater"];
              return (
                i
                  ? a.isValidElement(i)
                    ? (d.content = a.cloneElement(i, { closeFn: l }))
                    : (d.content = i({ closeFn: l }))
                  : (d.content = a.createElement(P0, this.props)),
                c === te.OPEN && m.push("__floater__open"),
                o || (d.arrow = a.createElement(Z0, this.props)),
                a.createElement(
                  "div",
                  { ref: s, className: m.join(" "), style: this.style },
                  a.createElement("div", { className: "__floater__body" }, d.content, d.arrow),
                )
              );
            },
          },
        ]),
        n
      );
    })(a.Component);
    Te(V0, "propTypes", {
      component: N.default.oneOfType([N.default.func, N.default.element]),
      content: N.default.node,
      disableAnimation: N.default.bool.isRequired,
      footer: N.default.node,
      handleClick: N.default.func.isRequired,
      hideArrow: N.default.bool.isRequired,
      open: N.default.bool,
      placement: N.default.string.isRequired,
      positionWrapper: N.default.bool.isRequired,
      setArrowRef: N.default.func.isRequired,
      setFloaterRef: N.default.func.isRequired,
      showCloseButton: N.default.bool,
      status: N.default.string.isRequired,
      styles: N.default.object.isRequired,
      title: N.default.node,
    });
    var D0 = (function (e) {
      Ma(n, e);
      var t = Aa(n);
      function n() {
        return xa(this, n), t.apply(this, arguments);
      }
      return (
        Na(n, [
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = r.children,
                l = r.handleClick,
                o = r.handleMouseEnter,
                s = r.handleMouseLeave,
                c = r.setChildRef,
                d = r.setWrapperRef,
                m = r.style,
                u = r.styles,
                p;
              if (i)
                if (a.Children.count(i) === 1)
                  if (!a.isValidElement(i)) p = a.createElement("span", null, i);
                  else {
                    var f = R.function(i.type) ? "innerRef" : "ref";
                    p = a.cloneElement(a.Children.only(i), Te({}, f, c));
                  }
                else p = i;
              return p
                ? a.createElement(
                    "span",
                    {
                      ref: d,
                      style: ge(ge({}, u), m),
                      onClick: l,
                      onMouseEnter: o,
                      onMouseLeave: s,
                    },
                    p,
                  )
                : null;
            },
          },
        ]),
        n
      );
    })(a.Component);
    Te(D0, "propTypes", {
      children: N.default.node,
      handleClick: N.default.func.isRequired,
      handleMouseEnter: N.default.func.isRequired,
      handleMouseLeave: N.default.func.isRequired,
      setChildRef: N.default.func.isRequired,
      setWrapperRef: N.default.func.isRequired,
      style: N.default.object,
      styles: N.default.object.isRequired,
    });
    var Lh = { zIndex: 100 };
    function Rh(e) {
      var t = (0, il.default)(Lh, e.options || {});
      return {
        wrapper: {
          cursor: "help",
          display: "inline-flex",
          flexDirection: "column",
          zIndex: t.zIndex,
        },
        wrapperPosition: { left: -1e3, position: "absolute", top: -1e3, visibility: "hidden" },
        floater: {
          display: "inline-block",
          filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
          maxWidth: 300,
          opacity: 0,
          position: "relative",
          transition: "opacity 0.3s",
          visibility: "hidden",
          zIndex: t.zIndex,
        },
        floaterOpening: { opacity: 1, visibility: "visible" },
        floaterWithAnimation: {
          opacity: 1,
          transition: "opacity 0.3s, transform 0.2s",
          visibility: "visible",
        },
        floaterWithComponent: { maxWidth: "100%" },
        floaterClosing: { opacity: 0, visibility: "visible" },
        floaterCentered: {
          left: "50%",
          position: "fixed",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
        container: {
          backgroundColor: "#fff",
          color: "#666",
          minHeight: 60,
          minWidth: 200,
          padding: 20,
          position: "relative",
          zIndex: 10,
        },
        title: {
          borderBottom: "1px solid #555",
          color: "#555",
          fontSize: 18,
          marginBottom: 5,
          paddingBottom: 6,
          paddingRight: 18,
        },
        content: { fontSize: 15 },
        close: {
          backgroundColor: "transparent",
          border: 0,
          borderRadius: 0,
          color: "#555",
          fontSize: 0,
          height: 15,
          outline: "none",
          padding: 10,
          position: "absolute",
          right: 0,
          top: 0,
          width: 15,
          WebkitAppearance: "none",
        },
        footer: { borderTop: "1px solid #ccc", fontSize: 13, marginTop: 10, paddingTop: 5 },
        arrow: {
          color: "#fff",
          display: "inline-flex",
          length: 16,
          margin: 8,
          position: "absolute",
          spread: 32,
        },
        options: t,
      };
    }
    var Ih = ["arrow", "flip", "offset"],
      Zh = ["position", "top", "right", "bottom", "left"],
      Ul = (function (e) {
        Ma(n, e);
        var t = Aa(n);
        function n(r) {
          var i;
          return (
            xa(this, n),
            (i = t.call(this, r)),
            Te(St(i), "setArrowRef", function (l) {
              i.arrowRef = l;
            }),
            Te(St(i), "setChildRef", function (l) {
              i.childRef = l;
            }),
            Te(St(i), "setFloaterRef", function (l) {
              i.floaterRef = l;
            }),
            Te(St(i), "setWrapperRef", function (l) {
              i.wrapperRef = l;
            }),
            Te(St(i), "handleTransitionEnd", function () {
              var l = i.state.status,
                o = i.props.callback;
              i.wrapperPopper && i.wrapperPopper.instance.update(),
                i.setState({ status: l === te.OPENING ? te.OPEN : te.IDLE }, function () {
                  var s = i.state.status;
                  o(s === te.OPEN ? "open" : "close", i.props);
                });
            }),
            Te(St(i), "handleClick", function () {
              var l = i.props,
                o = l.event,
                s = l.open;
              if (!R.boolean(s)) {
                var c = i.state,
                  d = c.positionWrapper,
                  m = c.status;
                (i.event === "click" || (i.event === "hover" && d)) &&
                  (Ha({
                    title: "click",
                    data: [{ event: o, status: m === te.OPEN ? "closing" : "opening" }],
                    debug: i.debug,
                  }),
                  i.toggle());
              }
            }),
            Te(St(i), "handleMouseEnter", function () {
              var l = i.props,
                o = l.event,
                s = l.open;
              if (!(R.boolean(s) || Ci())) {
                var c = i.state.status;
                i.event === "hover" &&
                  c === te.IDLE &&
                  (Ha({
                    title: "mouseEnter",
                    data: [{ key: "originalEvent", value: o }],
                    debug: i.debug,
                  }),
                  clearTimeout(i.eventDelayTimeout),
                  i.toggle());
              }
            }),
            Te(St(i), "handleMouseLeave", function () {
              var l = i.props,
                o = l.event,
                s = l.eventDelay,
                c = l.open;
              if (!(R.boolean(c) || Ci())) {
                var d = i.state,
                  m = d.status,
                  u = d.positionWrapper;
                i.event === "hover" &&
                  (Ha({
                    title: "mouseLeave",
                    data: [{ key: "originalEvent", value: o }],
                    debug: i.debug,
                  }),
                  s
                    ? [te.OPENING, te.OPEN].indexOf(m) !== -1 &&
                      !u &&
                      !i.eventDelayTimeout &&
                      (i.eventDelayTimeout = setTimeout(function () {
                        delete i.eventDelayTimeout, i.toggle();
                      }, s * 1e3))
                    : i.toggle(te.IDLE));
              }
            }),
            (i.state = {
              currentPlacement: r.placement,
              needsUpdate: !1,
              positionWrapper: r.wrapperOptions.position && !!r.target,
              status: te.INIT,
              statusWrapper: te.INIT,
            }),
            (i._isMounted = !1),
            (i.hasMounted = !1),
            dt() &&
              window.addEventListener("load", function () {
                i.popper && i.popper.instance.update(),
                  i.wrapperPopper && i.wrapperPopper.instance.update();
              }),
            i
          );
        }
        return (
          Na(n, [
            {
              key: "componentDidMount",
              value: function () {
                if (dt()) {
                  var r = this.state.positionWrapper,
                    i = this.props,
                    l = i.children,
                    o = i.open,
                    s = i.target;
                  (this._isMounted = !0),
                    Ha({
                      title: "init",
                      data: {
                        hasChildren: !!l,
                        hasTarget: !!s,
                        isControlled: R.boolean(o),
                        positionWrapper: r,
                        target: this.target,
                        floater: this.floaterRef,
                      },
                      debug: this.debug,
                    }),
                    this.hasMounted || (this.initPopper(), (this.hasMounted = !0)),
                    !l && s && R.boolean(o);
                }
              },
            },
            {
              key: "componentDidUpdate",
              value: function (r, i) {
                if (dt()) {
                  var l = this.props,
                    o = l.autoOpen,
                    s = l.open,
                    c = l.target,
                    d = l.wrapperOptions,
                    m = vh(i, this.state),
                    u = m.changedFrom,
                    p = m.changed;
                  if (r.open !== s) {
                    var f;
                    R.boolean(s) && (f = s ? te.OPENING : te.CLOSING), this.toggle(f);
                  }
                  (r.wrapperOptions.position !== d.position || r.target !== c) &&
                    this.changeWrapperPosition(this.props),
                    p("status", te.IDLE) && s
                      ? this.toggle(te.OPEN)
                      : u("status", te.INIT, te.IDLE) && o && this.toggle(te.OPEN),
                    this.popper && p("status", te.OPENING) && this.popper.instance.update(),
                    this.floaterRef &&
                      (p("status", te.OPENING) || p("status", te.CLOSING)) &&
                      Fh(this.floaterRef, "transitionend", this.handleTransitionEnd),
                    p("needsUpdate", !0) && this.rebuildPopper();
                }
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                dt() &&
                  ((this._isMounted = !1),
                  this.popper && this.popper.instance.destroy(),
                  this.wrapperPopper && this.wrapperPopper.instance.destroy());
              },
            },
            {
              key: "initPopper",
              value: function () {
                var r = this,
                  i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.target,
                  l = this.state.positionWrapper,
                  o = this.props,
                  s = o.disableFlip,
                  c = o.getPopper,
                  d = o.hideArrow,
                  m = o.offset,
                  u = o.placement,
                  p = o.wrapperOptions,
                  f =
                    u === "top" || u === "bottom"
                      ? "flip"
                      : ["right", "bottom-end", "top-end", "left", "top-start", "bottom-start"];
                if (u === "center") this.setState({ status: te.IDLE });
                else if (i && this.floaterRef) {
                  var g = this.options,
                    y = g.arrow,
                    k = g.flip,
                    E = g.offset,
                    h = L0(g, Ih);
                  new g1(i, this.floaterRef, {
                    placement: u,
                    modifiers: ge(
                      {
                        arrow: ge({ enabled: !d, element: this.arrowRef }, y),
                        flip: ge({ enabled: !s, behavior: f }, k),
                        offset: ge({ offset: "0, ".concat(m, "px") }, E),
                      },
                      h,
                    ),
                    onCreate: function (b) {
                      var C;
                      if (
                        ((r.popper = b),
                        !((C = r.floaterRef) !== null && C !== void 0 && C.isConnected))
                      ) {
                        r.setState({ needsUpdate: !0 });
                        return;
                      }
                      c(b, "floater"),
                        r._isMounted &&
                          r.setState({ currentPlacement: b.placement, status: te.IDLE }),
                        u !== b.placement &&
                          setTimeout(function () {
                            b.instance.update();
                          }, 1);
                    },
                    onUpdate: function (b) {
                      r.popper = b;
                      var C = r.state.currentPlacement;
                      r._isMounted &&
                        b.placement !== C &&
                        r.setState({ currentPlacement: b.placement });
                    },
                  });
                }
                if (l) {
                  var v = R.undefined(p.offset) ? 0 : p.offset;
                  new g1(this.target, this.wrapperRef, {
                    placement: p.placement || u,
                    modifiers: {
                      arrow: { enabled: !1 },
                      offset: { offset: "0, ".concat(v, "px") },
                      flip: { enabled: !1 },
                    },
                    onCreate: function (b) {
                      (r.wrapperPopper = b),
                        r._isMounted && r.setState({ statusWrapper: te.IDLE }),
                        c(b, "wrapper"),
                        u !== b.placement &&
                          setTimeout(function () {
                            b.instance.update();
                          }, 1);
                    },
                  });
                }
              },
            },
            {
              key: "rebuildPopper",
              value: function () {
                var r = this;
                this.floaterRefInterval = setInterval(function () {
                  var i;
                  (i = r.floaterRef) !== null &&
                    i !== void 0 &&
                    i.isConnected &&
                    (clearInterval(r.floaterRefInterval),
                    r.setState({ needsUpdate: !1 }),
                    r.initPopper());
                }, 50);
              },
            },
            {
              key: "changeWrapperPosition",
              value: function (r) {
                var i = r.target,
                  l = r.wrapperOptions;
                this.setState({ positionWrapper: l.position && !!i });
              },
            },
            {
              key: "toggle",
              value: function (r) {
                var i = this.state.status,
                  l = i === te.OPEN ? te.CLOSING : te.OPENING;
                R.undefined(r) || (l = r), this.setState({ status: l });
              },
            },
            {
              key: "debug",
              get: function () {
                var r = this.props.debug;
                return r || (dt() && "ReactFloaterDebug" in window && !!window.ReactFloaterDebug);
              },
            },
            {
              key: "event",
              get: function () {
                var r = this.props,
                  i = r.disableHoverToClick,
                  l = r.event;
                return l === "hover" && Ci() && !i ? "click" : l;
              },
            },
            {
              key: "options",
              get: function () {
                var r = this.props.options;
                return (0, il.default)(wh, r || {});
              },
            },
            {
              key: "styles",
              get: function () {
                var r = this,
                  i = this.state,
                  l = i.status,
                  o = i.positionWrapper,
                  s = i.statusWrapper,
                  c = this.props.styles,
                  d = (0, il.default)(Rh(c), c);
                if (o) {
                  var m;
                  [te.IDLE].indexOf(l) === -1 || [te.IDLE].indexOf(s) === -1
                    ? (m = d.wrapperPosition)
                    : (m = this.wrapperPopper.styles),
                    (d.wrapper = ge(ge({}, d.wrapper), m));
                }
                if (this.target) {
                  var u = window.getComputedStyle(this.target);
                  this.wrapperStyles
                    ? (d.wrapper = ge(ge({}, d.wrapper), this.wrapperStyles))
                    : ["relative", "static"].indexOf(u.position) === -1 &&
                      ((this.wrapperStyles = {}),
                      o ||
                        (Zh.forEach(function (p) {
                          r.wrapperStyles[p] = u[p];
                        }),
                        (d.wrapper = ge(ge({}, d.wrapper), this.wrapperStyles)),
                        (this.target.style.position = "relative"),
                        (this.target.style.top = "auto"),
                        (this.target.style.right = "auto"),
                        (this.target.style.bottom = "auto"),
                        (this.target.style.left = "auto")));
                }
                return d;
              },
            },
            {
              key: "target",
              get: function () {
                if (!dt()) return null;
                var r = this.props.target;
                return r
                  ? R.domElement(r)
                    ? r
                    : document.querySelector(r)
                  : this.childRef || this.wrapperRef;
              },
            },
            {
              key: "render",
              value: function () {
                var r = this.state,
                  i = r.currentPlacement,
                  l = r.positionWrapper,
                  o = r.status,
                  s = this.props,
                  c = s.children,
                  d = s.component,
                  m = s.content,
                  u = s.disableAnimation,
                  p = s.footer,
                  f = s.hideArrow,
                  g = s.id,
                  y = s.open,
                  k = s.showCloseButton,
                  E = s.style,
                  h = s.target,
                  v = s.title,
                  b = a.createElement(
                    D0,
                    {
                      handleClick: this.handleClick,
                      handleMouseEnter: this.handleMouseEnter,
                      handleMouseLeave: this.handleMouseLeave,
                      setChildRef: this.setChildRef,
                      setWrapperRef: this.setWrapperRef,
                      style: E,
                      styles: this.styles.wrapper,
                    },
                    c,
                  ),
                  C = {};
                return (
                  l ? (C.wrapperInPortal = b) : (C.wrapperAsChildren = b),
                  a.createElement(
                    "span",
                    null,
                    a.createElement(
                      I0,
                      {
                        hasChildren: !!c,
                        id: g,
                        placement: i,
                        setRef: this.setFloaterRef,
                        target: h,
                        zIndex: this.styles.options.zIndex,
                      },
                      a.createElement(V0, {
                        component: d,
                        content: m,
                        disableAnimation: u,
                        footer: p,
                        handleClick: this.handleClick,
                        hideArrow: f || i === "center",
                        open: y,
                        placement: i,
                        positionWrapper: l,
                        setArrowRef: this.setArrowRef,
                        setFloaterRef: this.setFloaterRef,
                        showCloseButton: k,
                        status: o,
                        styles: this.styles,
                        title: v,
                      }),
                      C.wrapperInPortal,
                    ),
                    C.wrapperAsChildren,
                  )
                );
              },
            },
          ]),
          n
        );
      })(a.Component);
    Te(Ul, "propTypes", {
      autoOpen: N.default.bool,
      callback: N.default.func,
      children: N.default.node,
      component: N1(N.default.oneOfType([N.default.func, N.default.element]), function (e) {
        return !e.content;
      }),
      content: N1(N.default.node, function (e) {
        return !e.component;
      }),
      debug: N.default.bool,
      disableAnimation: N.default.bool,
      disableFlip: N.default.bool,
      disableHoverToClick: N.default.bool,
      event: N.default.oneOf(["hover", "click"]),
      eventDelay: N.default.number,
      footer: N.default.node,
      getPopper: N.default.func,
      hideArrow: N.default.bool,
      id: N.default.oneOfType([N.default.string, N.default.number]),
      offset: N.default.number,
      open: N.default.bool,
      options: N.default.object,
      placement: N.default.oneOf([
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
        "auto",
        "center",
      ]),
      showCloseButton: N.default.bool,
      style: N.default.object,
      styles: N.default.object,
      target: N.default.oneOfType([N.default.object, N.default.string]),
      title: N.default.node,
      wrapperOptions: N.default.shape({
        offset: N.default.number,
        placement: N.default.oneOf([
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end",
          "auto",
        ]),
        position: N.default.bool,
      }),
    });
    Te(Ul, "defaultProps", {
      autoOpen: !1,
      callback: M1,
      debug: !1,
      disableAnimation: !1,
      disableFlip: !1,
      disableHoverToClick: !1,
      event: "click",
      eventDelay: 0.4,
      getPopper: M1,
      hideArrow: !1,
      offset: 15,
      placement: "bottom",
      showCloseButton: !1,
      styles: {},
      target: null,
      wrapperOptions: { position: !1 },
    });
    var Bh = et(l5(), 1),
      Ph = Object.defineProperty,
      Vh = (e, t, n) =>
        t in e
          ? Ph(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n),
      L = (e, t, n) => (Vh(e, typeof t != "symbol" ? t + "" : t, n), n),
      de = {
        INIT: "init",
        START: "start",
        STOP: "stop",
        RESET: "reset",
        PREV: "prev",
        NEXT: "next",
        GO: "go",
        CLOSE: "close",
        SKIP: "skip",
        UPDATE: "update",
      },
      nt = {
        TOUR_START: "tour:start",
        STEP_BEFORE: "step:before",
        BEACON: "beacon",
        TOOLTIP: "tooltip",
        STEP_AFTER: "step:after",
        TOUR_END: "tour:end",
        TOUR_STATUS: "tour:status",
        TARGET_NOT_FOUND: "error:target_not_found",
        ERROR: "error",
      },
      q = {
        INIT: "init",
        READY: "ready",
        BEACON: "beacon",
        TOOLTIP: "tooltip",
        COMPLETE: "complete",
        ERROR: "error",
      },
      K = {
        IDLE: "idle",
        READY: "ready",
        WAITING: "waiting",
        RUNNING: "running",
        PAUSED: "paused",
        SKIPPED: "skipped",
        FINISHED: "finished",
        ERROR: "error",
      };
    function Rt() {
      return !!(typeof window < "u" && window.document && window.document.createElement);
    }
    function H0(e) {
      return e ? e.getBoundingClientRect() : null;
    }
    function Dh() {
      let { body: e, documentElement: t } = document;
      return !e || !t
        ? 0
        : Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);
    }
    function Bt(e) {
      return typeof e == "string" ? document.querySelector(e) : e;
    }
    function Hh(e) {
      return !e || e.nodeType !== 1 ? null : getComputedStyle(e);
    }
    function Hr(e, t, n) {
      if (!e) return Yt();
      let r = (0, f0.default)(e);
      if (r) {
        if (r.isSameNode(Yt())) return n ? document : Yt();
        if (!(r.scrollHeight > r.offsetHeight) && !t) return (r.style.overflow = "initial"), Yt();
      }
      return r;
    }
    function jr(e, t) {
      if (!e) return !1;
      let n = Hr(e, t);
      return n ? !n.isSameNode(Yt()) : !1;
    }
    function jh(e) {
      return e.offsetParent !== document.body;
    }
    function va(e, t = "fixed") {
      if (!e || !(e instanceof HTMLElement)) return !1;
      let { nodeName: n } = e,
        r = Hh(e);
      return n === "BODY" || n === "HTML"
        ? !1
        : r && r.position === t
          ? !0
          : e.parentNode
            ? va(e.parentNode, t)
            : !1;
    }
    function zh(e) {
      var t;
      if (!e) return !1;
      let n = e;
      for (; n && n !== document.body; ) {
        if (n instanceof HTMLElement) {
          let { display: r, visibility: i } = getComputedStyle(n);
          if (r === "none" || i === "hidden") return !1;
        }
        n = (t = n.parentElement) != null ? t : null;
      }
      return !0;
    }
    function Uh(e, t, n) {
      var r;
      let i = H0(e),
        l = Hr(e, n),
        o = jr(e, n),
        s = 0,
        c = (r = i?.top) != null ? r : 0;
      return (
        l instanceof HTMLElement &&
          ((s = l.scrollTop),
          !o && !va(e) && (c += s),
          l.isSameNode(Yt()) || (c += Yt().scrollTop)),
        Math.floor(c - t)
      );
    }
    function $h(e, t, n) {
      var r;
      if (!e) return 0;
      let { offsetTop: i = 0, scrollTop: l = 0 } = (r = (0, f0.default)(e)) != null ? r : {},
        o = e.getBoundingClientRect().top + l;
      i && (jr(e, n) || jh(e)) && (o -= i);
      let s = Math.floor(o - t);
      return s < 0 ? 0 : s;
    }
    function Yt() {
      var e;
      return (e = document.scrollingElement) != null ? e : document.documentElement;
    }
    function Wh(e, t) {
      let { duration: n, element: r } = t;
      return new Promise((i, l) => {
        let { scrollTop: o } = r,
          s = e > o ? e - o : o - e;
        g3.default.top(r, e, { duration: s < 100 ? 50 : n }, c =>
          c && c.message !== "Element already at target scroll position" ? l(c) : i(),
        );
      });
    }
    var zn = In !== void 0;
    function j0(e = navigator.userAgent) {
      let t = e;
      return (
        typeof window > "u"
          ? (t = "node")
          : document.documentMode
            ? (t = "ie")
            : /Edge/.test(e)
              ? (t = "edge")
              : window.opera || e.includes(" OPR/")
                ? (t = "opera")
                : typeof window.InstallTrigger < "u"
                  ? (t = "firefox")
                  : window.chrome
                    ? (t = "chrome")
                    : /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(e) &&
                      (t = "safari"),
        t
      );
    }
    function It(e) {
      let t = [],
        n = r => {
          if (typeof r == "string" || typeof r == "number") t.push(r);
          else if (Array.isArray(r)) r.forEach(i => n(i));
          else if (Jl(r)) {
            let { children: i } = r.props;
            Array.isArray(i) ? i.forEach(l => n(l)) : n(i);
          }
        };
      return n(e), t.join(" ").trim();
    }
    function Gh(e, t) {
      return !F.plainObject(e) || !F.array(t) ? !1 : Object.keys(e).every(n => t.includes(n));
    }
    function qh(e) {
      let t = /^#?([\da-f])([\da-f])([\da-f])$/i,
        n = e.replace(t, (i, l, o, s) => l + l + o + o + s + s),
        r = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(n);
      return r ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)] : [];
    }
    function A1(e) {
      return e.disableBeacon || e.placement === "center";
    }
    function _1() {
      return !["chrome", "safari", "firefox", "opera"].includes(j0());
    }
    function nn({ data: e, debug: t = !1, title: n, warn: r = !1 }) {
      let i = r ? console.warn || console.error : console.log;
      t &&
        (n && e
          ? (console.groupCollapsed(
              `%creact-joyride: ${n}`,
              "color: #ff0044; font-weight: bold; font-size: 12px;",
            ),
            Array.isArray(e)
              ? e.forEach(l => {
                  F.plainObject(l) && l.key
                    ? i.apply(console, [l.key, l.value])
                    : i.apply(console, [l]);
                })
              : i.apply(console, [e]),
            console.groupEnd())
          : console.error("Missing title or data props"));
    }
    function Yh(e) {
      let {
        isFirstStep: t,
        lifecycle: n,
        previousLifecycle: r,
        scrollToFirstStep: i,
        step: l,
        target: o,
      } = e;
      return (
        !l.disableScrolling &&
        (!t || i || n === q.TOOLTIP) &&
        l.placement !== "center" &&
        (!l.isFixed || !va(o)) &&
        r !== n &&
        [q.BEACON, q.TOOLTIP].includes(n)
      );
    }
    var Qh = {
        options: { preventOverflow: { boundariesElement: "scrollParent" } },
        wrapperOptions: { offset: -18, position: !0 },
      },
      z0 = {
        back: "Back",
        close: "Close",
        last: "Last",
        next: "Next",
        open: "Open the dialog",
        skip: "Skip",
      },
      Kh = {
        event: "click",
        placement: "bottom",
        offset: 10,
        disableBeacon: !1,
        disableCloseOnEsc: !1,
        disableOverlay: !1,
        disableOverlayClose: !1,
        disableScrollParentFix: !1,
        disableScrolling: !1,
        hideBackButton: !1,
        hideCloseButton: !1,
        hideFooter: !1,
        isFixed: !1,
        locale: z0,
        showProgress: !1,
        showSkipButton: !1,
        spotlightClicks: !1,
        spotlightPadding: 10,
      },
      Jh = {
        continuous: !1,
        debug: !1,
        disableCloseOnEsc: !1,
        disableOverlay: !1,
        disableOverlayClose: !1,
        disableScrolling: !1,
        disableScrollParentFix: !1,
        getHelpers: void 0,
        hideBackButton: !1,
        run: !0,
        scrollOffset: 20,
        scrollDuration: 300,
        scrollToFirstStep: !1,
        showSkipButton: !1,
        showProgress: !1,
        spotlightClicks: !1,
        spotlightPadding: 10,
        steps: [],
      },
      Xh = {
        arrowColor: "#fff",
        backgroundColor: "#fff",
        beaconSize: 36,
        overlayColor: "rgba(0, 0, 0, 0.5)",
        primaryColor: "#f04",
        spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
        textColor: "#333",
        width: 380,
        zIndex: 100,
      },
      Un = {
        backgroundColor: "transparent",
        border: 0,
        borderRadius: 0,
        color: "#555",
        cursor: "pointer",
        fontSize: 16,
        lineHeight: 1,
        padding: 8,
        WebkitAppearance: "none",
      },
      T1 = { borderRadius: 4, position: "absolute" };
    function e7(e, t) {
      let n = (0, bi.default)(e ?? {}, t ?? {}),
        r = (0, bi.default)(Xh, n.options || {}),
        { width: i } = r;
      window.innerWidth > 480 && (i = 380),
        "width" in r &&
          (i =
            typeof r.width == "number" && window.innerWidth < r.width
              ? window.innerWidth - 30
              : r.width);
      let l = {
          bottom: 0,
          left: 0,
          overflow: "hidden",
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: r.zIndex,
        },
        o = {
          beacon: {
            ...Un,
            display: "inline-block",
            height: r.beaconSize,
            position: "relative",
            width: r.beaconSize,
            zIndex: r.zIndex,
          },
          beaconInner: {
            animation: "joyride-beacon-inner 1.2s infinite ease-in-out",
            backgroundColor: r.primaryColor,
            borderRadius: "50%",
            display: "block",
            height: "50%",
            left: "50%",
            opacity: 0.7,
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
          },
          beaconOuter: {
            animation: "joyride-beacon-outer 1.2s infinite ease-in-out",
            backgroundColor: `rgba(${qh(r.primaryColor).join(",")}, 0.2)`,
            border: `2px solid ${r.primaryColor}`,
            borderRadius: "50%",
            boxSizing: "border-box",
            display: "block",
            height: "100%",
            left: 0,
            opacity: 0.9,
            position: "absolute",
            top: 0,
            transformOrigin: "center",
            width: "100%",
          },
          tooltip: {
            backgroundColor: r.backgroundColor,
            borderRadius: 5,
            boxSizing: "border-box",
            color: r.textColor,
            fontSize: 16,
            maxWidth: "100%",
            padding: 15,
            position: "relative",
            width: i,
          },
          tooltipContainer: { lineHeight: 1.4, textAlign: "center" },
          tooltipTitle: { fontSize: 18, margin: 0 },
          tooltipContent: { padding: "20px 10px" },
          tooltipFooter: {
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 15,
          },
          tooltipFooterSpacer: { flex: 1 },
          buttonNext: { ...Un, backgroundColor: r.primaryColor, borderRadius: 4, color: "#fff" },
          buttonBack: { ...Un, color: r.primaryColor, marginLeft: "auto", marginRight: 5 },
          buttonClose: {
            ...Un,
            color: r.textColor,
            height: 14,
            padding: 15,
            position: "absolute",
            right: 0,
            top: 0,
            width: 14,
          },
          buttonSkip: { ...Un, color: r.textColor, fontSize: 14 },
          overlay: { ...l, backgroundColor: r.overlayColor, mixBlendMode: "hard-light" },
          overlayLegacy: { ...l },
          overlayLegacyCenter: { ...l, backgroundColor: r.overlayColor },
          spotlight: { ...T1, backgroundColor: "gray" },
          spotlightLegacy: {
            ...T1,
            boxShadow: `0 0 0 9999px ${r.overlayColor}, ${r.spotlightShadow}`,
          },
          floaterStyles: { arrow: { color: r.arrowColor }, options: { zIndex: r.zIndex + 100 } },
          options: r,
        };
      return (0, bi.default)(o, n);
    }
    function t7(e) {
      return y3(
        e,
        "beaconComponent",
        "disableCloseOnEsc",
        "disableOverlay",
        "disableOverlayClose",
        "disableScrolling",
        "disableScrollParentFix",
        "floaterProps",
        "hideBackButton",
        "hideCloseButton",
        "locale",
        "showProgress",
        "showSkipButton",
        "spotlightClicks",
        "spotlightPadding",
        "styles",
        "tooltipComponent",
      );
    }
    function $n(e, t) {
      var n, r, i, l, o, s;
      let c = e ?? {},
        d = Da.default.all([Kh, t7(t), c], { isMergeableObject: F.plainObject }),
        m = e7(t.styles, d.styles),
        u = jr(Bt(d.target), d.disableScrollParentFix),
        p = Da.default.all([
          Qh,
          (n = t.floaterProps) != null ? n : {},
          (r = d.floaterProps) != null ? r : {},
        ]);
      return (
        (p.offset = d.offset),
        (p.styles = (0, Da.default)((i = p.styles) != null ? i : {}, m.floaterStyles)),
        (p.offset +=
          (o = (l = t.spotlightPadding) != null ? l : d.spotlightPadding) != null ? o : 0),
        d.placementBeacon && p.wrapperOptions && (p.wrapperOptions.placement = d.placementBeacon),
        u && p.options.preventOverflow && (p.options.preventOverflow.boundariesElement = "window"),
        {
          ...d,
          locale: Da.default.all([z0, (s = t.locale) != null ? s : {}, d.locale || {}]),
          floaterProps: p,
          styles: v3(m, "floaterStyles"),
        }
      );
    }
    function U0(e, t = !1) {
      return F.plainObject(e)
        ? e.target
          ? !0
          : (nn({
              title: "validateStep",
              data: "target is missing from the step",
              warn: !0,
              debug: t,
            }),
            !1)
        : (nn({ title: "validateStep", data: "step must be an object", warn: !0, debug: t }), !1);
    }
    function F1(e, t = !1) {
      return F.array(e)
        ? e.every(n => U0(n, t))
        : (nn({ title: "validateSteps", data: "steps must be an array", warn: !0, debug: t }), !1);
    }
    var n7 = {
        action: "init",
        controlled: !1,
        index: 0,
        lifecycle: q.INIT,
        size: 0,
        status: K.IDLE,
      },
      O1 = ["action", "index", "lifecycle", "status"],
      a7 = class {
        constructor(e) {
          L(this, "beaconPopper"),
            L(this, "tooltipPopper"),
            L(this, "data", new Map()),
            L(this, "listener"),
            L(this, "store", new Map()),
            L(this, "addListener", i => {
              this.listener = i;
            }),
            L(this, "setSteps", i => {
              let { size: l, status: o } = this.getState(),
                s = { size: i.length, status: o };
              this.data.set("steps", i),
                o === K.WAITING && !l && i.length && (s.status = K.RUNNING),
                this.setState(s);
            }),
            L(this, "getPopper", i => (i === "beacon" ? this.beaconPopper : this.tooltipPopper)),
            L(this, "setPopper", (i, l) => {
              i === "beacon" ? (this.beaconPopper = l) : (this.tooltipPopper = l);
            }),
            L(this, "cleanupPoppers", () => {
              (this.beaconPopper = null), (this.tooltipPopper = null);
            }),
            L(this, "close", () => {
              let { index: i, status: l } = this.getState();
              l === K.RUNNING &&
                this.setState({ ...this.getNextState({ action: de.CLOSE, index: i + 1 }) });
            }),
            L(this, "go", i => {
              let { controlled: l, status: o } = this.getState();
              if (l || o !== K.RUNNING) return;
              let s = this.getSteps()[i];
              this.setState({
                ...this.getNextState({ action: de.GO, index: i }),
                status: s ? o : K.FINISHED,
              });
            }),
            L(this, "info", () => this.getState()),
            L(this, "next", () => {
              let { index: i, status: l } = this.getState();
              l === K.RUNNING &&
                this.setState(this.getNextState({ action: de.NEXT, index: i + 1 }));
            }),
            L(this, "open", () => {
              let { status: i } = this.getState();
              i === K.RUNNING &&
                this.setState({
                  ...this.getNextState({ action: de.UPDATE, lifecycle: q.TOOLTIP }),
                });
            }),
            L(this, "prev", () => {
              let { index: i, status: l } = this.getState();
              l === K.RUNNING &&
                this.setState({ ...this.getNextState({ action: de.PREV, index: i - 1 }) });
            }),
            L(this, "reset", (i = !1) => {
              let { controlled: l } = this.getState();
              l ||
                this.setState({
                  ...this.getNextState({ action: de.RESET, index: 0 }),
                  status: i ? K.RUNNING : K.READY,
                });
            }),
            L(this, "skip", () => {
              let { status: i } = this.getState();
              i === K.RUNNING &&
                this.setState({ action: de.SKIP, lifecycle: q.INIT, status: K.SKIPPED });
            }),
            L(this, "start", i => {
              let { index: l, size: o } = this.getState();
              this.setState({
                ...this.getNextState({ action: de.START, index: F.number(i) ? i : l }, !0),
                status: o ? K.RUNNING : K.WAITING,
              });
            }),
            L(this, "stop", (i = !1) => {
              let { index: l, status: o } = this.getState();
              [K.FINISHED, K.SKIPPED].includes(o) ||
                this.setState({
                  ...this.getNextState({ action: de.STOP, index: l + (i ? 1 : 0) }),
                  status: K.PAUSED,
                });
            }),
            L(this, "update", i => {
              var l;
              if (!Gh(i, O1)) throw new Error(`State is not valid. Valid keys: ${O1.join(", ")}`);
              this.setState({
                ...this.getNextState(
                  { ...this.getState(), ...i, action: (l = i.action) != null ? l : de.UPDATE },
                  !0,
                ),
              });
            });
          let { continuous: t = !1, stepIndex: n, steps: r = [] } = e ?? {};
          this.setState(
            {
              action: de.INIT,
              controlled: F.number(n),
              continuous: t,
              index: F.number(n) ? n : 0,
              lifecycle: q.INIT,
              status: r.length ? K.READY : K.IDLE,
            },
            !0,
          ),
            (this.beaconPopper = null),
            (this.tooltipPopper = null),
            (this.listener = null),
            this.setSteps(r);
        }
        getState() {
          return this.store.size
            ? {
                action: this.store.get("action") || "",
                controlled: this.store.get("controlled") || !1,
                index: parseInt(this.store.get("index"), 10),
                lifecycle: this.store.get("lifecycle") || "",
                size: this.store.get("size") || 0,
                status: this.store.get("status") || "",
              }
            : { ...n7 };
        }
        getNextState(e, t = !1) {
          var n, r, i, l;
          let { action: o, controlled: s, index: c, size: d, status: m } = this.getState(),
            u = F.number(e.index) ? e.index : c,
            p = s && !t ? c : Math.min(Math.max(u, 0), d);
          return {
            action: (n = e.action) != null ? n : o,
            controlled: s,
            index: p,
            lifecycle: (r = e.lifecycle) != null ? r : q.INIT,
            size: (i = e.size) != null ? i : d,
            status: p === d ? K.FINISHED : (l = e.status) != null ? l : m,
          };
        }
        getSteps() {
          let e = this.data.get("steps");
          return Array.isArray(e) ? e : [];
        }
        hasUpdatedState(e) {
          let t = JSON.stringify(e),
            n = JSON.stringify(this.getState());
          return t !== n;
        }
        setState(e, t = !1) {
          let n = this.getState(),
            { action: r, index: i, lifecycle: l, size: o, status: s } = { ...n, ...e };
          this.store.set("action", r),
            this.store.set("index", i),
            this.store.set("lifecycle", l),
            this.store.set("size", o),
            this.store.set("status", s),
            t &&
              (this.store.set("controlled", e.controlled),
              this.store.set("continuous", e.continuous)),
            this.listener && this.hasUpdatedState(n) && this.listener(this.getState());
        }
        getHelpers() {
          return {
            close: this.close,
            go: this.go,
            info: this.info,
            next: this.next,
            open: this.open,
            prev: this.prev,
            reset: this.reset,
            skip: this.skip,
          };
        }
      };
    function r7(e) {
      return new a7(e);
    }
    var i7 = class {
        constructor(e, t) {
          if (
            (L(this, "element"),
            L(this, "options"),
            L(this, "canBeTabbed", n => {
              let { tabIndex: r } = n;
              return r === null || r < 0 ? !1 : this.canHaveFocus(n);
            }),
            L(this, "canHaveFocus", n => {
              let r = /input|select|textarea|button|object/,
                i = n.nodeName.toLowerCase();
              return (
                ((r.test(i) && !n.getAttribute("disabled")) ||
                  (i === "a" && !!n.getAttribute("href"))) &&
                this.isVisible(n)
              );
            }),
            L(this, "findValidTabElements", () =>
              [].slice.call(this.element.querySelectorAll("*"), 0).filter(this.canBeTabbed),
            ),
            L(this, "handleKeyDown", n => {
              let { code: r = "Tab" } = this.options;
              n.code === r && this.interceptTab(n);
            }),
            L(this, "interceptTab", n => {
              n.preventDefault();
              let r = this.findValidTabElements(),
                { shiftKey: i } = n;
              if (!r.length) return;
              let l = document.activeElement ? r.indexOf(document.activeElement) : 0;
              l === -1 || (!i && l + 1 === r.length)
                ? (l = 0)
                : i && l === 0
                  ? (l = r.length - 1)
                  : (l += i ? -1 : 1),
                r[l].focus();
            }),
            L(this, "isHidden", n => {
              let r = n.offsetWidth <= 0 && n.offsetHeight <= 0,
                i = window.getComputedStyle(n);
              return r && !n.innerHTML
                ? !0
                : (r && i.getPropertyValue("overflow") !== "visible") ||
                    i.getPropertyValue("display") === "none";
            }),
            L(this, "isVisible", n => {
              let r = n;
              for (; r; )
                if (r instanceof HTMLElement) {
                  if (r === document.body) break;
                  if (this.isHidden(r)) return !1;
                  r = r.parentNode;
                }
              return !0;
            }),
            L(this, "removeScope", () => {
              window.removeEventListener("keydown", this.handleKeyDown);
            }),
            L(this, "checkFocus", n => {
              document.activeElement !== n &&
                (n.focus(), window.requestAnimationFrame(() => this.checkFocus(n)));
            }),
            L(this, "setFocus", () => {
              let { selector: n } = this.options;
              if (!n) return;
              let r = this.element.querySelector(n);
              r && window.requestAnimationFrame(() => this.checkFocus(r));
            }),
            !(e instanceof HTMLElement))
          )
            throw new TypeError("Invalid parameter: element must be an HTMLElement");
          (this.element = e),
            (this.options = t),
            window.addEventListener("keydown", this.handleKeyDown, !1),
            this.setFocus();
        }
      },
      l7 = class extends jt {
        constructor(e) {
          if (
            (super(e),
            L(this, "beacon", null),
            L(this, "setBeaconRef", i => {
              this.beacon = i;
            }),
            e.beaconComponent)
          )
            return;
          let t = document.head || document.getElementsByTagName("head")[0],
            n = document.createElement("style");
          (n.id = "joyride-beacon-animation"),
            e.nonce && n.setAttribute("nonce", e.nonce),
            n.appendChild(
              document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `),
            ),
            t.appendChild(n);
        }
        componentDidMount() {
          let { shouldFocus: e } = this.props;
          setTimeout(() => {
            F.domElement(this.beacon) && e && this.beacon.focus();
          }, 0);
        }
        componentWillUnmount() {
          let e = document.getElementById("joyride-beacon-animation");
          e?.parentNode && e.parentNode.removeChild(e);
        }
        render() {
          let {
              beaconComponent: e,
              continuous: t,
              index: n,
              isLastStep: r,
              locale: i,
              onClickOrHover: l,
              size: o,
              step: s,
              styles: c,
            } = this.props,
            d = F.string(i.open) ? i.open : (0, Bh.default)(i.open),
            m = { "aria-label": d, onClick: l, onMouseEnter: l, ref: this.setBeaconRef, title: d },
            u;
          return (
            e
              ? (u = S(e, { continuous: t, index: n, isLastStep: r, size: o, step: s, ...m }))
              : (u = S(
                  "button",
                  {
                    key: "JoyrideBeacon",
                    className: "react-joyride__beacon",
                    "data-test-id": "button-beacon",
                    style: c.beacon,
                    type: "button",
                    ...m,
                  },
                  S("span", { style: c.beaconInner }),
                  S("span", { style: c.beaconOuter }),
                )),
            u
          );
        }
      };
    function o7({ styles: e }) {
      return S("div", {
        key: "JoyrideSpotlight",
        className: "react-joyride__spotlight",
        "data-test-id": "spotlight",
        style: e,
      });
    }
    var s7 = o7,
      c7 = class extends jt {
        constructor() {
          super(...arguments),
            L(this, "isActive", !1),
            L(this, "resizeTimeout"),
            L(this, "scrollTimeout"),
            L(this, "scrollParent"),
            L(this, "state", { isScrolling: !1, mouseOverSpotlight: !1, showSpotlight: !0 }),
            L(this, "handleMouseMove", e => {
              let { mouseOverSpotlight: t } = this.state,
                { height: n, left: r, position: i, top: l, width: o } = this.spotlightStyles,
                s = i === "fixed" ? e.clientY : e.pageY,
                c = i === "fixed" ? e.clientX : e.pageX,
                d = s >= l && s <= l + n,
                m = c >= r && c <= r + o && d;
              m !== t && this.updateState({ mouseOverSpotlight: m });
            }),
            L(this, "handleScroll", () => {
              let { target: e } = this.props,
                t = Bt(e);
              if (this.scrollParent !== document) {
                let { isScrolling: n } = this.state;
                n || this.updateState({ isScrolling: !0, showSpotlight: !1 }),
                  clearTimeout(this.scrollTimeout),
                  (this.scrollTimeout = window.setTimeout(() => {
                    this.updateState({ isScrolling: !1, showSpotlight: !0 });
                  }, 50));
              } else va(t, "sticky") && this.updateState({});
            }),
            L(this, "handleResize", () => {
              clearTimeout(this.resizeTimeout),
                (this.resizeTimeout = window.setTimeout(() => {
                  this.isActive && this.forceUpdate();
                }, 100));
            });
        }
        componentDidMount() {
          let {
              debug: e,
              disableScrolling: t,
              disableScrollParentFix: n = !1,
              target: r,
            } = this.props,
            i = Bt(r);
          (this.scrollParent = Hr(i ?? document.body, n, !0)),
            (this.isActive = !0),
            window.addEventListener("resize", this.handleResize);
        }
        componentDidUpdate(e) {
          var t;
          let { lifecycle: n, spotlightClicks: r } = this.props,
            { changed: i } = br(e, this.props);
          i("lifecycle", q.TOOLTIP) &&
            ((t = this.scrollParent) == null ||
              t.addEventListener("scroll", this.handleScroll, { passive: !0 }),
            setTimeout(() => {
              let { isScrolling: l } = this.state;
              l || this.updateState({ showSpotlight: !0 });
            }, 100)),
            (i("spotlightClicks") || i("disableOverlay") || i("lifecycle")) &&
              (r && n === q.TOOLTIP
                ? window.addEventListener("mousemove", this.handleMouseMove, !1)
                : n !== q.TOOLTIP && window.removeEventListener("mousemove", this.handleMouseMove));
        }
        componentWillUnmount() {
          var e;
          (this.isActive = !1),
            window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("resize", this.handleResize),
            clearTimeout(this.resizeTimeout),
            clearTimeout(this.scrollTimeout),
            (e = this.scrollParent) == null || e.removeEventListener("scroll", this.handleScroll);
        }
        get spotlightStyles() {
          var e, t, n;
          let { showSpotlight: r } = this.state,
            {
              disableScrollParentFix: i = !1,
              spotlightClicks: l,
              spotlightPadding: o = 0,
              styles: s,
              target: c,
            } = this.props,
            d = Bt(c),
            m = H0(d),
            u = va(d),
            p = Uh(d, o, i);
          return {
            ...(_1() ? s.spotlightLegacy : s.spotlight),
            height: Math.round(((e = m?.height) != null ? e : 0) + o * 2),
            left: Math.round(((t = m?.left) != null ? t : 0) - o),
            opacity: r ? 1 : 0,
            pointerEvents: l ? "none" : "auto",
            position: u ? "fixed" : "absolute",
            top: p,
            transition: "opacity 0.2s",
            width: Math.round(((n = m?.width) != null ? n : 0) + o * 2),
          };
        }
        updateState(e) {
          this.isActive && this.setState(t => ({ ...t, ...e }));
        }
        render() {
          let { mouseOverSpotlight: e, showSpotlight: t } = this.state,
            {
              disableOverlay: n,
              disableOverlayClose: r,
              lifecycle: i,
              onClickOverlay: l,
              placement: o,
              styles: s,
            } = this.props;
          if (n || i !== q.TOOLTIP) return null;
          let c = s.overlay;
          _1() && (c = o === "center" ? s.overlayLegacyCenter : s.overlayLegacy);
          let d = {
              cursor: r ? "default" : "pointer",
              height: Dh(),
              pointerEvents: e ? "none" : "auto",
              ...c,
            },
            m = o !== "center" && t && S(s7, { styles: this.spotlightStyles });
          if (j0() === "safari") {
            let { mixBlendMode: u, zIndex: p, ...f } = d;
            (m = S("div", { style: { ...f } }, m)), delete d.backgroundColor;
          }
          return S(
            "div",
            {
              className: "react-joyride__overlay",
              "data-test-id": "overlay",
              onClick: l,
              role: "presentation",
              style: d,
            },
            m,
          );
        }
      },
      d7 = class extends jt {
        constructor() {
          super(...arguments), L(this, "node", null);
        }
        componentDidMount() {
          let { id: e } = this.props;
          Rt() &&
            ((this.node = document.createElement("div")),
            (this.node.id = e),
            document.body.appendChild(this.node),
            zn || this.renderReact15());
        }
        componentDidUpdate() {
          Rt() && (zn || this.renderReact15());
        }
        componentWillUnmount() {
          !Rt() ||
            !this.node ||
            (zn || co(this.node),
            this.node.parentNode === document.body &&
              (document.body.removeChild(this.node), (this.node = null)));
        }
        renderReact15() {
          if (!Rt()) return;
          let { children: e } = this.props;
          this.node && uo(this, e, this.node);
        }
        renderReact16() {
          if (!Rt() || !zn) return null;
          let { children: e } = this.props;
          return this.node ? In(e, this.node) : null;
        }
        render() {
          return zn ? this.renderReact16() : null;
        }
      };
    function u7({ styles: e, ...t }) {
      let { color: n, height: r, width: i, ...l } = e;
      return a.createElement(
        "button",
        { style: l, type: "button", ...t },
        a.createElement(
          "svg",
          {
            height: typeof r == "number" ? `${r}px` : r,
            preserveAspectRatio: "xMidYMid",
            version: "1.1",
            viewBox: "0 0 18 18",
            width: typeof i == "number" ? `${i}px` : i,
            xmlns: "http://www.w3.org/2000/svg",
          },
          a.createElement(
            "g",
            null,
            a.createElement("path", {
              d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
              fill: n,
            }),
          ),
        ),
      );
    }
    var m7 = u7;
    function p7(e) {
      let {
          backProps: t,
          closeProps: n,
          continuous: r,
          index: i,
          isLastStep: l,
          primaryProps: o,
          size: s,
          skipProps: c,
          step: d,
          tooltipProps: m,
        } = e,
        {
          content: u,
          hideBackButton: p,
          hideCloseButton: f,
          hideFooter: g,
          locale: y,
          showProgress: k,
          showSkipButton: E,
          styles: h,
          title: v,
        } = d,
        { back: b, close: C, last: O, next: I, skip: U } = y,
        G = { primary: C };
      return (
        r &&
          ((G.primary = l ? O : I),
          k && (G.primary = S("span", null, G.primary, " (", i + 1, "/", s, ")"))),
        E &&
          !l &&
          (G.skip = S(
            "button",
            {
              "aria-live": "off",
              "data-test-id": "button-skip",
              style: h.buttonSkip,
              type: "button",
              ...c,
            },
            U,
          )),
        !p &&
          i > 0 &&
          (G.back = S(
            "button",
            { "data-test-id": "button-back", style: h.buttonBack, type: "button", ...t },
            b,
          )),
        (G.close = !f && S(m7, { "data-test-id": "button-close", styles: h.buttonClose, ...n })),
        S(
          "div",
          {
            key: "JoyrideTooltip",
            "aria-label": It(v) || It(u),
            className: "react-joyride__tooltip",
            style: h.tooltip,
            ...m,
          },
          S(
            "div",
            { style: h.tooltipContainer },
            v && S("h1", { "aria-label": It(v), style: h.tooltipTitle }, v),
            S("div", { style: h.tooltipContent }, u),
          ),
          !g &&
            S(
              "div",
              { style: h.tooltipFooter },
              S("div", { style: h.tooltipFooterSpacer }, G.skip),
              G.back,
              S(
                "button",
                { "data-test-id": "button-primary", style: h.buttonNext, type: "button", ...o },
                G.primary,
              ),
            ),
          G.close,
        )
      );
    }
    var h7 = p7,
      f7 = class extends jt {
        constructor() {
          super(...arguments),
            L(this, "handleClickBack", e => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.prev();
            }),
            L(this, "handleClickClose", e => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.close();
            }),
            L(this, "handleClickPrimary", e => {
              e.preventDefault();
              let { continuous: t, helpers: n } = this.props;
              if (!t) {
                n.close();
                return;
              }
              n.next();
            }),
            L(this, "handleClickSkip", e => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.skip();
            }),
            L(this, "getElementsProps", () => {
              let { continuous: e, isLastStep: t, setTooltipRef: n, step: r } = this.props,
                i = It(r.locale.back),
                l = It(r.locale.close),
                o = It(r.locale.last),
                s = It(r.locale.next),
                c = It(r.locale.skip),
                d = e ? s : l;
              return (
                t && (d = o),
                {
                  backProps: {
                    "aria-label": i,
                    "data-action": "back",
                    onClick: this.handleClickBack,
                    role: "button",
                    title: i,
                  },
                  closeProps: {
                    "aria-label": l,
                    "data-action": "close",
                    onClick: this.handleClickClose,
                    role: "button",
                    title: l,
                  },
                  primaryProps: {
                    "aria-label": d,
                    "data-action": "primary",
                    onClick: this.handleClickPrimary,
                    role: "button",
                    title: d,
                  },
                  skipProps: {
                    "aria-label": c,
                    "data-action": "skip",
                    onClick: this.handleClickSkip,
                    role: "button",
                    title: c,
                  },
                  tooltipProps: { "aria-modal": !0, ref: n, role: "alertdialog" },
                }
              );
            });
        }
        render() {
          let {
              continuous: e,
              index: t,
              isLastStep: n,
              setTooltipRef: r,
              size: i,
              step: l,
            } = this.props,
            { beaconComponent: o, tooltipComponent: s, ...c } = l,
            d;
          if (s) {
            let m = {
              ...this.getElementsProps(),
              continuous: e,
              index: t,
              isLastStep: n,
              size: i,
              step: c,
              setTooltipRef: r,
            };
            d = S(s, { ...m });
          } else
            d = S(h7, {
              ...this.getElementsProps(),
              continuous: e,
              index: t,
              isLastStep: n,
              size: i,
              step: l,
            });
          return d;
        }
      },
      g7 = class extends jt {
        constructor() {
          super(...arguments),
            L(this, "scope", null),
            L(this, "tooltip", null),
            L(this, "handleClickHoverBeacon", e => {
              let { step: t, store: n } = this.props;
              (e.type === "mouseenter" && t.event !== "hover") ||
                n.update({ lifecycle: q.TOOLTIP });
            }),
            L(this, "handleClickOverlay", () => {
              let { helpers: e, step: t } = this.props;
              t.disableOverlayClose || e.close();
            }),
            L(this, "setTooltipRef", e => {
              this.tooltip = e;
            }),
            L(this, "setPopper", (e, t) => {
              var n;
              let { action: r, step: i, store: l } = this.props;
              t === "wrapper" ? l.setPopper("beacon", e) : l.setPopper("tooltip", e),
                l.getPopper("beacon") &&
                  l.getPopper("tooltip") &&
                  l.update({ action: r, lifecycle: q.READY }),
                (n = i.floaterProps) != null && n.getPopper && i.floaterProps.getPopper(e, t);
            }),
            L(this, "renderTooltip", e => {
              let { continuous: t, helpers: n, index: r, size: i, step: l } = this.props;
              return S(f7, {
                continuous: t,
                helpers: n,
                index: r,
                isLastStep: r + 1 === i,
                setTooltipRef: this.setTooltipRef,
                size: i,
                step: l,
                ...e,
              });
            });
        }
        componentDidMount() {
          let { debug: e, index: t } = this.props;
          nn({ title: `step:${t}`, data: [{ key: "props", value: this.props }], debug: e });
        }
        componentDidUpdate(e) {
          var t;
          let {
              action: n,
              callback: r,
              continuous: i,
              controlled: l,
              debug: o,
              index: s,
              lifecycle: c,
              size: d,
              status: m,
              step: u,
              store: p,
            } = this.props,
            { changed: f, changedFrom: g } = br(e, this.props),
            y = { action: n, controlled: l, index: s, lifecycle: c, size: d, status: m },
            k = i && n !== de.CLOSE && (s > 0 || n === de.PREV),
            E = f("action") || f("index") || f("lifecycle") || f("status"),
            h = g("lifecycle", [q.TOOLTIP, q.INIT], q.INIT),
            v = f("action", [de.NEXT, de.PREV, de.SKIP, de.CLOSE]),
            b = l && s === e.index;
          if (
            (v &&
              (h || b) &&
              r({ ...y, index: e.index, lifecycle: q.COMPLETE, step: e.step, type: nt.STEP_AFTER }),
            u.placement === "center" &&
              m === K.RUNNING &&
              f("index") &&
              n !== de.START &&
              c === q.INIT &&
              p.update({ lifecycle: q.READY }),
            E)
          ) {
            let C = Bt(u.target),
              O = !!C;
            O && zh(C)
              ? (g("status", K.READY, K.RUNNING) || g("lifecycle", q.INIT, q.READY)) &&
                r({ ...y, step: u, type: nt.STEP_BEFORE })
              : (console.warn(O ? "Target not visible" : "Target not mounted", u),
                r({ ...y, type: nt.TARGET_NOT_FOUND, step: u }),
                l || p.update({ index: s + (n === de.PREV ? -1 : 1) }));
          }
          g("lifecycle", q.INIT, q.READY) &&
            p.update({ lifecycle: A1(u) || k ? q.TOOLTIP : q.BEACON }),
            f("index") &&
              nn({ title: `step:${c}`, data: [{ key: "props", value: this.props }], debug: o }),
            f("lifecycle", q.BEACON) && r({ ...y, step: u, type: nt.BEACON }),
            f("lifecycle", q.TOOLTIP) &&
              (r({ ...y, step: u, type: nt.TOOLTIP }),
              this.tooltip &&
                ((this.scope = new i7(this.tooltip, { selector: "[data-action=primary]" })),
                this.scope.setFocus())),
            g("lifecycle", [q.TOOLTIP, q.INIT], q.INIT) &&
              ((t = this.scope) == null || t.removeScope(), p.cleanupPoppers());
        }
        componentWillUnmount() {
          var e;
          (e = this.scope) == null || e.removeScope();
        }
        get open() {
          let { lifecycle: e, step: t } = this.props;
          return A1(t) || e === q.TOOLTIP;
        }
        render() {
          let {
              continuous: e,
              debug: t,
              index: n,
              lifecycle: r,
              nonce: i,
              shouldScroll: l,
              size: o,
              step: s,
            } = this.props,
            c = Bt(s.target);
          return !U0(s) || !F.domElement(c)
            ? null
            : S(
                "div",
                { key: `JoyrideStep-${n}`, className: "react-joyride__step" },
                S(
                  d7,
                  { id: "react-joyride-portal" },
                  S(c7, { ...s, debug: t, lifecycle: r, onClickOverlay: this.handleClickOverlay }),
                ),
                S(
                  Ul,
                  {
                    ...s.floaterProps,
                    component: this.renderTooltip,
                    debug: t,
                    getPopper: this.setPopper,
                    id: `react-joyride-step-${n}`,
                    open: this.open,
                    placement: s.placement,
                    target: s.target,
                  },
                  S(l7, {
                    beaconComponent: s.beaconComponent,
                    continuous: e,
                    index: n,
                    isLastStep: n + 1 === o,
                    locale: s.locale,
                    nonce: i,
                    onClickOrHover: this.handleClickHoverBeacon,
                    shouldFocus: l,
                    size: o,
                    step: s,
                    styles: s.styles,
                  }),
                ),
              );
        }
      },
      $0 = class extends jt {
        constructor(e) {
          super(e),
            L(this, "helpers"),
            L(this, "store"),
            L(this, "callback", o => {
              let { callback: s } = this.props;
              F.function(s) && s(o);
            }),
            L(this, "handleKeyboard", o => {
              let { index: s, lifecycle: c } = this.state,
                { steps: d } = this.props,
                m = d[s];
              c === q.TOOLTIP &&
                o.code === "Escape" &&
                m &&
                !m.disableCloseOnEsc &&
                this.store.close();
            }),
            L(this, "syncState", o => {
              this.setState(o);
            });
          let { debug: t, getHelpers: n, run: r, stepIndex: i } = e;
          (this.store = r7({ ...e, controlled: r && F.number(i) })),
            (this.helpers = this.store.getHelpers());
          let { addListener: l } = this.store;
          nn({
            title: "init",
            data: [
              { key: "props", value: this.props },
              { key: "state", value: this.state },
            ],
            debug: t,
          }),
            l(this.syncState),
            n && n(this.helpers),
            (this.state = this.store.getState());
        }
        componentDidMount() {
          if (!Rt()) return;
          let { debug: e, disableCloseOnEsc: t, run: n, steps: r } = this.props,
            { start: i } = this.store;
          F1(r, e) && n && i(),
            t || document.body.addEventListener("keydown", this.handleKeyboard, { passive: !0 });
        }
        componentDidUpdate(e, t) {
          if (!Rt()) return;
          let { action: n, controlled: r, index: i, lifecycle: l, status: o } = this.state,
            { debug: s, run: c, stepIndex: d, steps: m } = this.props,
            { stepIndex: u, steps: p } = e,
            { reset: f, setSteps: g, start: y, stop: k, update: E } = this.store,
            { changed: h } = br(e, this.props),
            { changed: v, changedFrom: b } = br(t, this.state),
            C = $n(m[i], this.props),
            O = !Re(p, m),
            I = F.number(d) && h("stepIndex"),
            U = Bt(C.target);
          if (
            (O && (F1(m, s) ? g(m) : console.warn("Steps are not valid", m)),
            h("run") && (c ? y(d) : k()),
            I)
          ) {
            let oe = F.number(u) && u < d ? de.NEXT : de.PREV;
            n === de.STOP && (oe = de.START),
              [K.FINISHED, K.SKIPPED].includes(o) ||
                E({ action: n === de.CLOSE ? de.CLOSE : oe, index: d, lifecycle: q.INIT });
          }
          !r &&
            o === K.RUNNING &&
            i === 0 &&
            !U &&
            (this.store.update({ index: i + 1 }),
            this.callback({ ...this.state, type: nt.TARGET_NOT_FOUND, step: C }));
          let G = { ...this.state, index: i, step: C };
          if (v("action", [de.NEXT, de.PREV, de.SKIP, de.CLOSE]) && v("status", K.PAUSED)) {
            let oe = $n(m[t.index], this.props);
            this.callback({
              ...G,
              index: t.index,
              lifecycle: q.COMPLETE,
              step: oe,
              type: nt.STEP_AFTER,
            });
          }
          if (v("status", [K.FINISHED, K.SKIPPED])) {
            let oe = $n(m[t.index], this.props);
            r ||
              this.callback({
                ...G,
                index: t.index,
                lifecycle: q.COMPLETE,
                step: oe,
                type: nt.STEP_AFTER,
              }),
              this.callback({ ...G, type: nt.TOUR_END, step: oe, index: t.index }),
              f();
          } else
            b("status", [K.IDLE, K.READY], K.RUNNING)
              ? this.callback({ ...G, type: nt.TOUR_START })
              : (v("status") || v("action", de.RESET)) &&
                this.callback({ ...G, type: nt.TOUR_STATUS });
          this.scrollToStep(t),
            C.placement === "center" &&
              o === K.RUNNING &&
              l === q.INIT &&
              this.store.update({ lifecycle: q.READY });
        }
        componentWillUnmount() {
          let { disableCloseOnEsc: e } = this.props;
          e || document.body.removeEventListener("keydown", this.handleKeyboard);
        }
        scrollToStep(e) {
          let { index: t, lifecycle: n, status: r } = this.state,
            {
              debug: i,
              disableScrollParentFix: l = !1,
              scrollDuration: o,
              scrollOffset: s = 20,
              scrollToFirstStep: c = !1,
              steps: d,
            } = this.props,
            m = $n(d[t], this.props),
            u = Bt(m.target),
            p = Yh({
              isFirstStep: t === 0,
              lifecycle: n,
              previousLifecycle: e.lifecycle,
              scrollToFirstStep: c,
              step: m,
              target: u,
            });
          if (r === K.RUNNING && p) {
            let f = jr(u, l),
              g = Hr(u, l),
              y = Math.floor($h(u, s, l)) || 0;
            nn({
              title: "scrollToStep",
              data: [
                { key: "index", value: t },
                { key: "lifecycle", value: n },
                { key: "status", value: r },
              ],
              debug: i,
            });
            let k = this.store.getPopper("beacon"),
              E = this.store.getPopper("tooltip");
            if (n === q.BEACON && k) {
              let { offsets: h, placement: v } = k;
              !["bottom"].includes(v) && !f && (y = Math.floor(h.popper.top - s));
            } else if (n === q.TOOLTIP && E) {
              let { flipped: h, offsets: v, placement: b } = E;
              ["top", "right", "left"].includes(b) && !h && !f
                ? (y = Math.floor(v.popper.top - s))
                : (y -= m.spotlightPadding);
            }
            (y = y >= 0 ? y : 0),
              r === K.RUNNING &&
                Wh(y, { element: g, duration: o }).then(() => {
                  setTimeout(() => {
                    var h;
                    (h = this.store.getPopper("tooltip")) == null || h.instance.update();
                  }, 10);
                });
          }
        }
        render() {
          if (!Rt()) return null;
          let { index: e, status: t } = this.state,
            {
              continuous: n = !1,
              debug: r = !1,
              nonce: i,
              scrollToFirstStep: l = !1,
              steps: o,
            } = this.props,
            s;
          if (t === K.RUNNING && o[e]) {
            let c = $n(o[e], this.props);
            s = S(g7, {
              ...this.state,
              callback: this.callback,
              continuous: n,
              debug: r,
              helpers: this.helpers,
              nonce: i,
              shouldScroll: !c.disableScrolling && (e !== 0 || l),
              step: c,
              store: this.store,
            });
          }
          return S("div", { className: "react-joyride" }, s);
        }
      };
    L($0, "defaultProps", Jh);
    var v7 = $0,
      L1 = [
        void 0,
        "EQUAL",
        "FIXED",
        "ADDED",
        "CHANGED",
        "REMOVED",
        "CAPTURE_ERROR",
        "SYSTEM_ERROR",
      ],
      Sr = ([e, ...t]) => t.reduce((n, r) => (L1.indexOf(r) > L1.indexOf(n) ? r : n), e);
    function y7(e) {
      return (e.FAILED ?? 0) > 0
        ? "FAILED"
        : (e.IN_PROGRESS ?? 0) > 0
          ? "IN_PROGRESS"
          : (e.BROKEN ?? 0) > 0
            ? "BROKEN"
            : (e.DENIED ?? 0) > 0
              ? "DENIED"
              : (e.PENDING ?? 0) > 0
                ? "PENDING"
                : (e.ACCEPTED ?? 0) > 0
                  ? "ACCEPTED"
                  : "PASSED";
    }
    function $l(e) {
      let {
          statusCounts: t,
          isInProgress: n,
          changeCount: r,
          brokenCount: i,
          resultsByBrowser: l,
          resultsByMode: o,
          modesByName: s,
        } = e.reduce(
          (u, p) => (
            (u.statusCounts[p.status] = (u.statusCounts[p.status] || 0) + 1),
            p.status === "IN_PROGRESS" && (u.isInProgress = !0),
            p.result && ["CHANGED", "ADDED"].includes(p.result) && (u.changeCount += 1),
            p.result &&
              ["CAPTURE_ERROR", "SYSTEM_ERROR"].includes(p.result) &&
              (u.brokenCount += 1),
            p.comparisons?.forEach(({ browser: f, result: g }) => {
              u.resultsByBrowser[f.id] = Sr([g ?? void 0, u.resultsByBrowser[f.id]]);
            }),
            p.comparisons?.forEach(({ result: f }) => {
              u.resultsByMode[p.mode.name] = Sr([f ?? void 0, u.resultsByMode[p.mode.name]]);
            }),
            (u.modesByName[p.mode.name] = p.mode),
            u
          ),
          {
            statusCounts: {},
            isInProgress: !1,
            changeCount: 0,
            brokenCount: 0,
            resultsByBrowser: {},
            resultsByMode: {},
            modesByName: {},
          },
        ),
        c = e.length
          ? Object.fromEntries(e[0].comparisons.map(u => [u.browser.id, u.browser]))
          : {},
        d = Object.entries(l).map(([u, p]) => ({ browser: c[u], result: p })),
        m = Object.entries(o).map(([u, p]) => ({ mode: s[u], result: p }));
      return {
        status: y7(t),
        isInProgress: n,
        changeCount: r,
        brokenCount: i,
        browserResults: d,
        modeResults: m,
      };
    }
    var E7 = e => {
        try {
          return [Ql()[0][e], Yl()[e]];
        } catch {
          return [null, null];
        }
      },
      W0 = ({ result: e }) => e !== "EQUAL" && e !== "FIXED",
      b7 = (e, t) => {
        let n = e.filter(i => i.comparisons.some(W0)),
          r = n.length ? n : e;
        return r.find(i => i.mode.name === t) || r[0];
      },
      k7 = (e, t) => {
        let n = e.filter(W0),
          r = n.length ? n : e;
        return r.find(i => i.browser.id === t) || r[0];
      };
    function w7(e) {
      let [t, n] = Me(!0),
        r = E7("theme")[1],
        [i, l] = Ee(h5),
        [o, s] = Ee(f5),
        c,
        d;
      return (
        e.length &&
          ((c = t ? b7(e, i) : e.find(({ mode: m }) => m.name === i) || e[0]),
          (d = t
            ? k7(c.comparisons, o)
            : c?.comparisons.find(({ browser: m }) => m.id === o) || c?.comparisons[0]),
          t &&
            (i !== c?.mode.name && l(c?.mode.name),
            o !== d?.browser.id && s(d?.browser.id),
            n(!1))),
        {
          modeOrder: r?.toolbar?.items?.map(m => m.title),
          selectedTest: c,
          selectedComparison: d,
          onSelectBrowser: H(m => s(m.id), [s]),
          onSelectMode: H(m => l(m.name), [l]),
        }
      );
    }
    var C7 = lt(`
  query AddonVisualTestsBuild(
    $projectId: ID!
    $branch: String!
    $gitUserEmailHash: String!
    $repositoryOwnerName: String
    $storyId: String!
    $testStatuses: [TestStatus!]!
    $selectedBuildId: ID!
    $hasSelectedBuildId: Boolean!
  ) {
    project(id: $projectId) {
      name
      manageUrl
      account {
        billingUrl
        suspensionReason
      }
      features {
        uiTests
      }
      lastBuildOnBranch: lastBuild(
        branches: [$branch]
        repositoryOwnerName: $repositoryOwnerName
        localBuilds: { localBuildEmailHash: $gitUserEmailHash }
      ) {
        ...LastBuildOnBranchBuildFields
        ...SelectedBuildFields @skip(if: $hasSelectedBuildId)
      }
      lastBuild {
        id
        slug
        branch
      }
    }
    selectedBuild: build(id: $selectedBuildId) @include(if: $hasSelectedBuildId) {
      ...SelectedBuildFields
    }
    viewer {
      preferences {
        vtaOnboarding
      }
      projectMembership(projectId: $projectId) {
        userCanReview: meetsAccessLevel(minimumAccessLevel: REVIEWER)
      }
    }
  }
`),
      S7 = lt(`
  fragment LastBuildOnBranchBuildFields on Build {
    __typename
    id
    status
    committedAt
    ... on StartedBuild {
      testsForStatus: tests(first: 1000, statuses: $testStatuses) {
        nodes {
          ...StatusTestFields
        }
      }
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...LastBuildOnBranchTestFields
        }
      }
    }
    ... on CompletedBuild {
      result
      testsForStatus: tests(first: 1000, statuses: $testStatuses) {
        nodes {
          ...StatusTestFields
        }
      }
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...LastBuildOnBranchTestFields
        }
      }
    }
  }
`),
      x7 = lt(`
  fragment SelectedBuildFields on Build {
    __typename
    id
    number
    branch
    commit
    committedAt
    uncommittedHash
    status
    ... on StartedBuild {
      startedAt
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...StoryTestFields
        }
      }
    }
    ... on CompletedBuild {
      startedAt
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...StoryTestFields
        }
      }
    }
  }
`),
      G0 = lt(`
  fragment StatusTestFields on Test {
    id
    status
    result
    story {
      storyId
    }
  }
`),
      N7 = lt(`
  fragment LastBuildOnBranchTestFields on Test {
    status
    result
  }
`),
      M7 = lt(`
  fragment StoryTestFields on Test {
    id
    status
    result
    webUrl
    comparisons {
      id
      result
      browser {
        id
        key
        name
        version
      }
      captureDiff {
        diffImage(signed: true) {
          imageUrl
          imageWidth
        }
        focusImage(signed: true) {
          imageUrl
          imageWidth
        }
      }
      headCapture {
        captureImage(signed: true) {
          backgroundColor
          imageUrl
          imageWidth
          imageHeight
          thumbnailUrl
        }
        captureError {
          kind
          ... on CaptureErrorInteractionFailure {
            error
          }
          ... on CaptureErrorJSError {
            error
          }
          ... on CaptureErrorFailedJS {
            error
          }
        }
      }
      baseCapture {
        captureImage(signed: true) {
          imageUrl
          imageWidth
          imageHeight
        }
      }
    }
    mode {
      name
      globals
    }
    story {
      storyId
      name
      component {
        name
      }
    }
  }
`),
      A7 = lt(`
  mutation ReviewTest($input: ReviewTestInput!) {
    reviewTest(input: $input) {
      updatedTests {
        id
        status
      }
      userErrors {
        ... on UserError {
          __typename
          message
        }
        ... on BuildSupersededError {
          build {
            id
          }
        }
        ... on TestUnreviewableError {
          test {
            id
          }
        }
      }
    }
  }
`),
      _7 = ({ projectId: e, storyId: t, gitInfo: n, selectedBuildInfo: r }) => {
        let [{ data: i, error: l, operation: o }, s] = wl({
          query: C7,
          variables: {
            projectId: e,
            storyId: t,
            testStatuses: Object.keys(u0),
            branch: n.branch || "",
            ...(n.slug ? { repositoryOwnerName: n.slug.split("/", 1)[0] } : {}),
            gitUserEmailHash: n.userEmailHash,
            selectedBuildId: r?.buildId || "",
            hasSelectedBuildId: !!r,
          },
        });
        X(() => {
          let y = setInterval(s, 5e3);
          return () => clearInterval(y);
        }, [s]);
        let c = o && t && o.variables.storyId !== t,
          d = yn(S7, i?.project?.lastBuildOnBranch),
          m = [
            ...yn(N7, d && "testsForStory" in d && d.testsForStory ? d.testsForStory.nodes : []),
          ],
          u = d?.committedAt > n.committedAt,
          p = !!d && !u,
          f = !!d && m.every(y => y.status !== "IN_PROGRESS"),
          g = yn(x7, i?.selectedBuild ?? (f ? i?.project?.lastBuildOnBranch : void 0));
        return {
          account: i?.project?.account,
          features: i?.project?.features,
          manageUrl: i?.project?.manageUrl,
          hasData: !!i && !c,
          hasProject: !!i?.project,
          hasSelectedBuild: g?.branch.split(":").at(-1) === n.branch,
          lastBuildOnBranch: d,
          lastBuildOnBranchIsNewer: u,
          lastBuildOnBranchIsReady: f,
          lastBuildOnBranchIsSelectable: p,
          selectedBuild: g,
          selectedBuildMatchesGit:
            g?.branch.split(":").at(-1) === n.branch &&
            g?.commit === n.commit &&
            g?.uncommittedHash === n.uncommittedHash,
          rerunQuery: s,
          queryError: l,
          userCanReview: !!i?.viewer?.projectMembership?.userCanReview,
          vtaOnboarding: i?.viewer?.preferences?.vtaOnboarding,
        };
      },
      Wl = qe(null),
      q0 = qe(null),
      T7 = () => bt(Wl, "Build"),
      Y0 = () => {
        let { selectedBuild: e } = bt(Wl, "Build");
        if (!e) throw new Error("No selectedBuild on Build context");
        return e;
      },
      on = () => bt(q0, "Story"),
      Si = ({ children: e, watchState: t }) => {
        let n = !!t?.selectedBuild && "testsForStory" in t.selectedBuild,
          r =
            t?.selectedBuild &&
            "testsForStory" in t.selectedBuild &&
            t.selectedBuild.testsForStory?.nodes,
          i = [...yn(M7, r || [])],
          l = $l(i),
          { toggleDiff: o } = _n();
        return (
          X(() => o(l.changeCount > 0), [o, l.changeCount]),
          a.createElement(
            Wl.Provider,
            { value: wt(() => t, [JSON.stringify(t?.selectedBuild)]) },
            a.createElement(
              q0.Provider,
              { value: { hasTests: n, tests: i, summary: l, ...w7(i) } },
              e,
            ),
          )
        );
      },
      F7 = w.div(({ width: e, height: t, left: n, top: r }) => ({
        width: `${e}px`,
        height: `${t}px`,
        left: `${n}px`,
        top: `${r}px`,
        position: "relative",
        overflow: "hidden",
      }));
    function O7({
      top: e = 0,
      left: t = 0,
      width: n = window.innerWidth,
      height: r = window.innerHeight,
      colors: i = ["#CA90FF", "#FC521F", "#66BF3C", "#FF4785", "#FFAE00", "#1EA7FD"],
      ...l
    }) {
      let [o] = Me(() => {
        let s = document.createElement("div");
        return (
          s.setAttribute("id", "confetti-container"),
          s.setAttribute(
            "style",
            "position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;",
          ),
          s
        );
      });
      return (
        X(
          () => (
            document.body.appendChild(o),
            () => {
              document.body.removeChild(o);
            }
          ),
          [o],
        ),
        In(
          a.createElement(
            F7,
            { top: e, left: t, width: n, height: r },
            a.createElement(Eo, { colors: i, drawShape: R7, ...l }),
          ),
          o,
        )
      );
    }
    function L7(e, t) {
      return Math.floor(Math.random() * (t - e)) + e;
    }
    function R7(e) {
      let t = this;
      switch (((t.shape = t.shape || L7(1, 6)), t.shape)) {
        case 2: {
          let n = t.w / 2,
            r = t.h / 2;
          e.moveTo(-n + 2, -r),
            e.lineTo(n - 2, -r),
            e.arcTo(n, -r, n, -r + 2, 2),
            e.lineTo(n, r - 2),
            e.arcTo(n, r, n - 2, r, 2),
            e.lineTo(-n + 2, r),
            e.arcTo(-n, r, -n, r - 2, 2),
            e.lineTo(-n, -r + 2),
            e.arcTo(-n, -r, -n + 2, -r, 2);
          break;
        }
        case 3: {
          e.rect(-4, -4, 8, 16), e.rect(-12, -4, 24, 8);
          break;
        }
        case 4: {
          e.rect(-4, -4, 8, 16), e.rect(-4, -4, 24, 8);
          break;
        }
        case 1: {
          e.arc(0, 0, t.radius, 0, 2 * Math.PI);
          break;
        }
        case 5: {
          e.moveTo(16, 4), e.lineTo(4, 24), e.lineTo(24, 24);
          break;
        }
        case 6: {
          e.arc(4, -4, 4, -Math.PI / 2, 0), e.lineTo(4, 0);
          break;
        }
      }
      e.closePath(), e.fill();
    }
    var I7 = w.div(({ theme: e }) => ({
        background: e.base === "light" ? e.color.lightest : "#292A2C",
        width: 260,
        padding: 15,
        borderRadius: 5,
        boxShadow: "0px 0px 32px 0px #00000029",
      })),
      Z7 = w.div({ display: "flex", flexDirection: "column", alignItems: "flex-start" }),
      B7 = w.div(({ theme: e }) => ({
        fontSize: 13,
        lineHeight: "18px",
        fontWeight: 700,
        color: e.color.defaultText,
      })),
      P7 = w.div(({ theme: e }) => ({
        fontSize: 13,
        lineHeight: "18px",
        textAlign: "start",
        color: e.color.defaultText,
        margin: 0,
        marginTop: 5,
      })),
      V7 = w.div({ display: "flex", justifyContent: "flex-end", marginTop: 15 }),
      D7 = ({ isLastStep: e, step: t, primaryProps: n, tooltipProps: r }) =>
        a.createElement(
          I7,
          { ...r },
          a.createElement(
            Z7,
            null,
            t.title && a.createElement(B7, null, t.title),
            a.createElement(P7, null, t.content),
          ),
          (t.hideNextButton || t.hideBackButton) &&
            a.createElement(
              V7,
              { id: "buttonSkip" },
              !t.hideSkipButton &&
                !e &&
                a.createElement(
                  ce,
                  {
                    size: "medium",
                    onClick: t.onSkipWalkthroughButtonClick,
                    link: !0,
                    style: { paddingRight: 12, paddingLeft: 12, marginRight: 8 },
                  },
                  "Skip",
                ),
              !t.hideNextButton &&
                a.createElement(
                  ce,
                  {
                    ...n,
                    onClick: n.onClick,
                    variant: "solid",
                    ...(t.onNextButtonClick ? { onClick: t.onNextButtonClick } : {}),
                  },
                  t.nextButtonText || "Next",
                ),
            ),
        ),
      R1 = "setFilter",
      H7 = ({ managerApi: e, skipWalkthrough: t, startWalkthrough: n, completeWalkthrough: r }) => {
        let i = Ut(),
          l = on(),
          o = l?.selectedTest?.result === "CHANGED",
          s = l?.selectedTest?.status !== "ACCEPTED",
          c = JSON.stringify(Ht().layout),
          d = Ne(c);
        d.current !== c && (window.dispatchEvent(new Event("resize")), (d.current = c)),
          X(() => {
            n();
          }),
          X(() => {
            e.getCurrentStoryData()?.type !== "story" && e.jumpToStory(1),
              e.togglePanel(!0),
              e.togglePanelPosition("right"),
              e.setSelectedPanel(an);
          }, [e]);
        let [m, u] = Ue("showConfetti", !1),
          [p, f] = Ue("stepIndex", 0),
          g = () => f((y = 0) => y + 1);
        return (
          X(() => {
            let y = document.getElementById("storybook-explorer-tree"),
              k = Array.from(y instanceof HTMLElement ? y.children : [])
                .filter(E => E instanceof HTMLElement)
                .slice(1);
            return (
              k.forEach(E => (E.style.display = "none")),
              () => k.forEach(E => (E.style.display = ""))
            );
          }, []),
          X(() => {
            let y = () => {
              f(1),
                setTimeout(() => {
                  window.dispatchEvent(new Event("resize"));
                }, 100);
            };
            return (
              e.on(Oi, y),
              e.on(R1, y),
              () => {
                e.off(Oi, y), e.off(R1, y);
              }
            );
          }, [e, f]),
          X(() => {
            l?.selectedTest?.status === "ACCEPTED" && p === 5 && (u(!0), f(6));
          }, [l?.selectedTest?.status, m, u, p, f]),
          a.createElement(
            a.Fragment,
            null,
            m &&
              a.createElement(O7, {
                numberOfPieces: 800,
                recycle: !1,
                tweenDuration: 2e4,
                onConfettiComplete: y => {
                  y?.reset(), u(!1);
                },
              }),
            a.createElement(v7, {
              steps: [
                {
                  target: "#sidebar-bottom-wrapper",
                  title: "Changes found",
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "The visual tests addon will detect changes in all of your stories and allow you to review them before opening a pull request.",
                    a.createElement("br", null),
                    a.createElement("br", null),
                    "Click the number at the bottom-right to only show stories with visual changes.",
                  ),
                  floaterProps: {
                    target: "#warnings-found-filter",
                    options: { preventOverflow: { boundariesElement: "window" } },
                  },
                  placement: "top",
                  disableBeacon: !0,
                  hideNextButton: !0,
                  spotlightClicks: !0,
                  onSkipWalkthroughButtonClick: t,
                },
                o && s
                  ? {
                      target: "#storybook-explorer-tree > div",
                      title: "Stories with changes",
                      content: a.createElement(
                        a.Fragment,
                        null,
                        "Here you have a filtered list of only stories with changes.",
                      ),
                      placement: "right",
                      disableBeacon: !0,
                      spotlightClicks: !0,
                      onNextButtonClick: g,
                      onSkipWalkthroughButtonClick: t,
                    }
                  : {
                      target: "#storybook-explorer-tree > div",
                      title: "Stories with changes",
                      content: a.createElement(
                        a.Fragment,
                        null,
                        "Here you have a list of all stories in your Storybook.",
                        a.createElement("br", null),
                        a.createElement("br", null),
                        "Select a story with changes to see the exact pixels that changed.",
                      ),
                      placement: "right",
                      disableBeacon: !0,
                      spotlightClicks: !0,
                      hideNextButton: !0,
                      onSkipWalkthroughButtonClick: t,
                    },
                {
                  target: "#panel-tab-content",
                  title: "Inspect changes",
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "The results of the changes are shown here. The pixels that changed are highlighted in green.",
                  ),
                  disableBeacon: !0,
                  placement: "left",
                  onNextButtonClick: g,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: "#button-diff-visible",
                  title: "Toggle the diff",
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "This button shows or hides the visual diff. Use it to make the visual changes in your stories obvious. Try it out.",
                  ),
                  onNextButtonClick: g,
                  onSkipWalkthroughButtonClick: t,
                  spotlightClicks: !0,
                  disableBeacon: !0,
                  placement: "bottom",
                  disableOverlay: !0,
                },
                {
                  target: "#button-toggle-snapshot",
                  title: "This is the Switch button",
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "Switch between the baseline snapshot (old) and the latest snapshot. The info bar will let you know which version you're looking at.",
                  ),
                  onNextButtonClick: g,
                  onSkipWalkthroughButtonClick: t,
                  spotlightClicks: !0,
                  disableBeacon: !0,
                  placement: "bottom",
                  disableOverlay: !0,
                },
                {
                  target: "#button-toggle-accept-story",
                  title: "Accept changes",
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "If the visual changes are intentional, accept them to update the test baselines. The next time you run visual tests, future changes will be compared to these new baselines. This can be undone.",
                  ),
                  disableBeacon: !0,
                  spotlightClicks: !0,
                  onNextButtonClick: g,
                  hideNextButton: !0,
                  placement: "bottom",
                  disableOverlay: !0,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: "#button-toggle-accept-story",
                  title: "Perfection!",
                  placement: "bottom",
                  disableOverlay: !0,
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "You've got the basics down! You can always unaccept if you're not happy with the changes.",
                  ),
                  onNextButtonClick: g,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: "#button-run-tests",
                  title: "You are ready to test",
                  placement: "bottom",
                  disableOverlay: !0,
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "Any time you want to run tests, tap this button in the sidebar to see exactly what changed across your Storybook.",
                  ),
                  disableBeacon: !0,
                  nextButtonText: "Done",
                  onNextButtonClick: r,
                },
              ],
              continuous: !0,
              stepIndex: p,
              spotlightPadding: 0,
              hideBackButton: !0,
              disableCloseOnEsc: !0,
              disableOverlayClose: !0,
              disableScrolling: !0,
              hideCloseButton: !0,
              showSkipButton: !0,
              floaterProps: {
                options: { offset: { offset: "0, 6" } },
                styles: {
                  floater: {
                    padding: 0,
                    paddingLeft: 8,
                    paddingTop: 8,
                    filter:
                      i.base === "light"
                        ? "drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))"
                        : "drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)",
                  },
                },
              },
              tooltipComponent: D7,
              styles: {
                overlay: { mixBlendMode: "unset", backgroundColor: "none" },
                spotlight: {
                  backgroundColor: "none",
                  border: `solid 2px ${i.color.secondary}`,
                  boxShadow: "0px 0px 0px 9999px rgba(0,0,0,0.4)",
                },
                options: {
                  zIndex: 1e4,
                  primaryColor: i.color.secondary,
                  arrowColor: i.base === "light" ? i.color.lightest : "#292A2C",
                },
              },
            }),
          )
        );
      },
      j7 = ({ content: e }) => {
        let t = e.split(/\r?\n/);
        return a.createElement(
          a.Fragment,
          null,
          t.reduce(
            (n, r, i) => n.concat([i && a.createElement("br", null), r].filter(Boolean)),
            [],
          ),
        );
      },
      Q0 = ({ localBuildProgress: e, title: t }) =>
        a.createElement(
          s0,
          { warning: !0 },
          a.createElement(
            j,
            null,
            a.createElement(
              "span",
              null,
              t && a.createElement("b", null, t, ": "),
              a.createElement(j7, {
                content: ci(
                  Array.isArray(e.originalError)
                    ? e.originalError[0]?.message
                    : e.originalError?.message || "Unknown error",
                ),
              }),
            ),
            " ",
            a.createElement(
              Ie,
              {
                target: "_blank",
                href: e.errorDetailsUrl || `${rs}#troubleshooting`,
                withArrow: !0,
              },
              e.errorDetailsUrl ? "Details" : "Troubleshoot",
            ),
          ),
        ),
      z7 = ({ children: e, localBuildProgress: t }) => (
        We("Errors", "BuildError"),
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Build failed"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Check the Storybook process on the command line for more details.",
                ),
              ),
              a.createElement(Q0, { localBuildProgress: t }),
              e,
            ),
          ),
        )
      ),
      U7 = w(j)({ display: "flex", flexDirection: "column", gap: 10, width: 200, marginTop: 15 });
    function zr({ localBuildProgress: e }) {
      return a.createElement(
        U7,
        { center: !0, small: !0 },
        a.createElement(
          _l,
          null,
          typeof e.buildProgressPercentage == "number" &&
            a.createElement(Vs, { style: { width: `${e.buildProgressPercentage}%` } }),
        ),
        a.createElement(Ml, { center: !0, muted: !0, small: !0, localBuildProgress: e }),
      );
    }
    var $7 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB7ZfPTupAFMa/mbb0XkAk6r2516jRnXHlxr0+ib4J+iTqm7Bx5YaVcWPQECUoGiJCpX/mOKcxRo2DILa44Jc0Taad+b45mZkzR+CZaq2+CcsqAWIdoCKSowyFw5WFvwcvLRf1m1Kt0SSv51OkFCVJx+sRa1W1JmuLav16x5Zyf/7PDKQQSAM9RVzd3CH0aUsKEtsz0/nUxBnWmisWAItKkkCbWddF2mQcm1/rEmPiOeJF2/TD+f0pKo0jBKqHUcg5U1ib28ByYfXD78YInDSPRxZnOkE7nogJ2a/jd9FvImNbAz/GgHERZp08pjJ8OA3uMVIh2kELXvAwcB/j6HmnOJQ4Y0kbBW16GGS/wb7CsKYni9AYZ9f6haydhzCEVFGEbtiFH3kYBWMEfts5o3jcUVjIaYOjIvsJfIb4hhQ+WYQTAz/XgDXALuCz4D2ckN7Dt6KhDfzLLcGxMsaORApe2MFbQyrOhq9xpIu12Q3jOMaTcNqdjZ+k0REQLS4UxoXUZ1nFD0KkTffR51dZUhTuNVttpBkF1rq717cmFR3GDdXLxm6tcUudxx4lCRe+XACz1pnWZO2XbMJFKteJXKohMYTeIlRBFO2tLP4vc8sThEpu8pkDBW8AAAAASUVORK5CYII=",
      W7 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN0SURBVHgBvVdLTxNRFP7uUDpSC7Q8rFSLqWJEExOfC1/xHWPiQuPShS50Y/wP6F9wq1HZuTAxMXFlNGzUhWIQDWICLYhSC4XWlj5m2pnjvS20NNDhltB+i870zpnzffece8/cw7CI4FToDBoa+gB2ACAXaocBmOj3b9/yrDgyGZrtmwpHKK3pZJgm1RLJtEaCK8g5BTcLhmZu2RTlqbezDQpjqAf4FDE9O4+cTmcVRuxmW6uzbuQCgqvD1QI0UJ9CoDMOVUW9YW+0icsBG9YDLQNMjIAS0fxf1u4FvH5A3STtYjHiruoEcGL6/Bb07X3ZMImfZjfYnkNgR86jGsgL4LM1Xz3OXys9F+KQiIGdvQ5ZKLKGBefRte1+DoKG30MWcgKmg9zxF8iCBt8W1slGCaDgCKqCIA8FpEzlIjAXQrWgiNw70mugVpDaBczF9/nXvzy03NxmAo4sqEUrN2rls3YUPLIUkOnoQpOEb0sBWVPDp5l3SOqjuDjeVi5KzYG2x0E9KZi7eCVYVoNEXXgY2YpdvOaf38bgtlfmqJiCZDaO15P9CMS/I9xtILzDKDfg0WD7LwHnzpWRC3w0TiBGbgxGgEejhKiO6gW8+f0cC9l/JadXNCRdVDI42QtcPQrFcwHMubM4HCIv3hmlahjlmXoRIFQlQMx6ObnAQivhzY10SQQnLzrxFAh/GHvxJHsbGSoPSSABjFSoYauugV8LY6saCxEv76bgne5Ec5MCj65DIxMxeDBE9xDIeVEJIh373JICotoMrDDevQlz8fIIpRu5d4tch9IicivPHOuqA8Ts2CisKsBpa7F8yWbMrxgzcw2W77jtTF6Ax+GDFexmFIyyZeQ5zToqhzsgL6DXfQR2xfp006oPF++zKYelrShE/mbIC7ArKo51XYYVnLw6qkaYz1xFJu60tL3SzauhWoUAAd/mHpzedg3Oxsrr4ZQaxUGbu+JzMfM7vWzV7bcEy2+BEOHz9+QL01RiDLqZyadms70FPudueJoKa+V4J/AhzM8t6RJxF8/K4XZepdf43LHg9Gy0e2u7q559wRImQrP8dAwM6dkc6o1UJl+1BhQycg8isUS+XaoXBNd8fIHfGP35geCf8P2p8BwlMxrVEqLxFQ2w4BrnnIK7mHjRpIo+UbRqqBlYjBfyIRjGA7+va0CM/AdEDxpHNfo8owAAAABJRU5ErkJggg==",
      G7 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMJSURBVHgB7VfNblJBFD5z+5e0poXGNqnFRFxoUly0K+vCpG7aFyhrTRofwBcQ6974AIZo1/QFyorEBezsQkhqYqkBSoBaAcWW3+N8dxh+hFJI+Nn0S264d+65c77znXNmGEFVhCPxDRobcxGJVSK20ODgowrt2W2Ln2ojP+IpVyRxxhf5ApcrFR4kchd5hq+w9AnfIhxPvhg3jI93FubJEIKGARkinabOqVTgZ4Zg8Xx+7tbQnAPwddsySzTGLoOJN6anpmjYmJwYx8+qQSNCVXHLyAho3BAY78bo5WemFau6D/0i+vC0fx1zLYFQmmjTJshpV8+BpLrWF6kvuDYFB1GuOQfg+CDG1C90lQIgKKWH8EiFbZooWySanWi18yeRJjbfA7DZkgraZqh3Aoh+a1nl21uNesUqzAk9YaadB/VagMP3X5W9876okYvmVMoyxWZ7jY4pCKSoVnyNQDTZQvOY51g5QIq8kjjIvP2iSG8jhawKuGsCYL5iUYyhxJNFYV6IBkCEWmYAxYpv3EfwJejVI0Gv15RSAFQLprl7AoEknNYnR2S4/Ek1CWTWk5vPdkXWYVV23phKydxk55a9sgYiMprtGRWlzi8Qy9UVaJQUaYENfh0WVXTrUrHoH+qdACK2zYiaI9da+ygQtV4T3N+Y3j0WJlnUQzCtbPDssoreCCDnyCGwL2WO5JrfO+SEm8vKMaJGznW3uI/YJKbbTivXEwENFFVGRqDJaMBJtlhvNbzVXYGxjLyfnVRKOKyda6ClCHXFAyhEHVkjMKnOP2whc6ha4TsPhVknnmNl126xakSLAvsnaD82VzQosG1v/QjSY4PyV1sSZKAS5DadyujniqpjMIe2w73zv/lE+DTJ95YWqF8AGSiCGrhq+dU4iae63wu6RbuVsxNu/hFJAiKNg8LICMgmOywUSzRs/L00Fw6fweXS7ln6Nw1TBfg6z8pNolLeMwfCscSbSOIn5y7zPEjg4IsDMHx9lz7hu7bM4ZCKcyKOajQwCLlF8SGVy7v2u0s+jPwDEeUTfjDhTd4AAAAASUVORK5CYII=",
      q7 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALVSURBVHgBxZfLbtNAFIb/8TgJCbm2adNUIOiuYpUN+7JiySPAm5Q+CfQBeIcuWYDaVYWEUIQqCLmQpEmaJq7Hw5y4dpOOadwEh0+yZnx8OWfm/HNjuKZ6VtsD5/sAqwAyj+g4goPDnUeb733L91pz/6zekpdjSwrHkVFycTmW5KuqfJJvVq013piG8W57Yw0GY1gFqon42WzDtuQLg0n2ei2XXplzgnwV81mAy31DQu6lEgmsmnjMpKJi4D9x3eN58/YDabdUkmrAuboMDqTXgV4DSOWgkuZei9iEElzyCRDbmvGnBYDmZ6C4rWIr39i8ejy1uI0aN/gKVpgNQE9BtoDIeJDUTHoP2GPVAvfFL708jrtlCMmxCClu4Vm2gd1s1zUM2kBybgCWXz3tbSJtmlicxKQBfgCkiVvoKUiv+dWhiGNZZnpv1Nee683rNWcFeM2lfQzH/oi++IUcL6LvdJAziuiIunsvOsjwAobSQT7+Ui0ruwiD3gOp4HVI2J9UtBIFXlIf8Ylzwr9XQVCZZjE0Rx8C/4EH6RABkAgDGDkNhKXA/zKSSITzA7ACv02yhwgLpSWQ+4pwmgvZQ1i89GgEiFAPgEQYQIaFn6D6Tjv0u6FF2JdDhCXJy8EPlhHheuKVGmISV9LCQA1BKs+dltpdiUlJUO6lGium+TzwH0EivHMmnIbGdSHpjm2vHV7pza5bmMN9RWgygWVJ8aubm/vOhJV8Ta0HJTUlx7AIJnPUP+p3v6NZpkRIi4i/kPwLaGNyCz0FSmiR0dFnU60HWPwpZPdUaSHjqpaE4+WOhtEiNkdpKbMJtl6ZHwDiJbCNklv35D29iVjGFoBKAes6UXb7HAy1OT6xrmysmuFoMt8cGVLYB61uH6vsBfLV7g1IG4cTQ/VH/e1Z/be8GI1llNDBlw7A5Oub8km+/QMhHVLpnEhHNUQGU5OKPIEQBzuPy0dk+QPy8+sGXJtnqwAAAABJRU5ErkJggg==",
      Y7 = w.div(({ theme: e }) => ({
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: e.appBorderRadius,
        padding: "6px 10px",
        fontSize: 13,
        lineHeight: "18px",
      })),
      Q7 = w.div(({ theme: e }) => ({
        lineHeight: "18px",
        position: "relative",
        borderRadius: 5,
        display: "block",
        minWidth: "80%",
        color: e.color.warningText,
        background: e.background.warning,
        border: `1px solid ${qa(0.5, e.color.warningText)}`,
        padding: 15,
        margin: 0,
      })),
      K7 = w(j)(({ theme: e }) => ({ color: e.color.darkest })),
      J7 = ({ onSkip: e, runningSecondBuild: t }) =>
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Make a change to this story"),
                a.createElement(
                  j,
                  { center: !0, muted: !0, block: !0 },
                  "In your code, adjust the markup, styling, or assets to see how visual testing works. Don't worry, you can undo it later. Here are a few ideas to get you started.",
                ),
              ),
              a.createElement(
                se,
                {
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    margin: "10px 0",
                  },
                },
                a.createElement(
                  Qn,
                  { style: { margin: 0, alignItems: "center", gap: "10px" } },
                  a.createElement("img", {
                    src: W7,
                    alt: "Color Palette",
                    style: { width: 32, height: 32 },
                  }),
                  "Shift the color palette",
                ),
                a.createElement(
                  Qn,
                  { style: { margin: 0, alignItems: "center", gap: "10px" } },
                  a.createElement("img", {
                    src: G7,
                    alt: "Embiggen",
                    style: { width: 32, height: 32 },
                  }),
                  " ",
                  "Embiggen the type",
                ),
                a.createElement(
                  Qn,
                  { style: { margin: 0, alignItems: "center", gap: "10px" } },
                  a.createElement("img", {
                    src: q7,
                    alt: "Layout",
                    style: { width: 32, height: 32 },
                  }),
                  "Change the layout",
                ),
                a.createElement(
                  Qn,
                  { style: { margin: 0, alignItems: "center", gap: "10px" } },
                  a.createElement("img", {
                    src: $7,
                    alt: "Adjust",
                    style: { width: 32, height: 32 },
                  }),
                  "Adjust the size or scale",
                ),
              ),
              a.createElement(
                yt,
                null,
                t
                  ? a.createElement(
                      Q7,
                      null,
                      a.createElement(
                        K7,
                        null,
                        "No changes found in the Storybook you published. Make a UI tweak and try again to continue.",
                      ),
                    )
                  : a.createElement(Y7, null, "Awaiting changes..."),
                a.createElement(ce, { link: !0, onClick: e }, "Skip walkthrough"),
              ),
            ),
          ),
        ),
      X7 = ({
        isRunning: e,
        setRunningSecondBuild: t,
        startBuild: n,
        setInitialGitHash: r,
        uncommittedHash: i,
      }) =>
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Changes detected"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Time to run your first visual tests to pinpoint the exact changes made to this story.",
                ),
              ),
              a.createElement(
                ce,
                {
                  variant: "solid",
                  size: "medium",
                  disabled: e,
                  onClick: () => {
                    t(!0),
                      n(),
                      setTimeout(() => {
                        r(i);
                      }, 1e4);
                  },
                },
                a.createElement(Zt, null),
                "Run visual tests",
              ),
            ),
          ),
        ),
      e6 = ({ localBuildProgress: e }) =>
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Running your first test"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "A new snapshot is being created in a standardized cloud browser. Once complete, you'll be able to pinpoint exactly what changed.",
                ),
              ),
              a.createElement(zr, { localBuildProgress: e }),
            ),
          ),
        ),
      t6 = ({ isUnchanged: e, localBuildProgress: t, ...n }) => (
        We("Onboarding", "CatchAChange"),
        n.isRunning && t
          ? a.createElement(e6, { localBuildProgress: t })
          : e
            ? a.createElement(J7, { ...n })
            : a.createElement(X7, { ...n })
      ),
      n6 = w.div(({ status: e, theme: t }) => ({
        position: "relative",
        display: "inline-flex",
        border: `1px solid ${e === "positive" ? t.color.green : t.appBorderColor}`,
        borderRadius: 5,
        margin: "15px 15px 0",
        minHeight: 200,
        minWidth: 200,
        maxWidth: 500,
        img: { display: "block", maxWidth: "100%" },
        svg: {
          position: "absolute",
          top: -12,
          left: -12,
          width: 24,
          height: 24,
          padding: 5,
          color: t.color.lightest,
          borderRadius: "50%",
          backgroundColor: t.color.green,
        },
      })),
      a6 = w.div({
        width: "100%",
        margin: 2,
        background: "white",
        borderRadius: 3,
        overflow: "hidden",
        div: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        },
      }),
      sl = ({ backgroundColor: e, status: t, thumbnailUrl: n }) =>
        a.createElement(
          n6,
          { status: t },
          a.createElement(
            a6,
            null,
            a.createElement(
              "div",
              { style: e ? { backgroundColor: e } : {} },
              a.createElement("img", { alt: "Snapshot thumbnail", src: n }),
            ),
          ),
          t === "positive" && a.createElement(hl, null),
        ),
      I1 = w(j)({ marginBottom: 5 }),
      Z1 = ({ onComplete: e, onSkip: t, ranSecondBuild: n = !1 }) => {
        We("Onboarding", "CatchAChangeComplete");
        let r = on();
        return a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            { style: { overflowY: "auto" } },
            n
              ? a.createElement(
                  se,
                  null,
                  a.createElement(
                    "div",
                    null,
                    a.createElement(me, null, "Nice. Your stories were saved as test baselines."),
                    a.createElement(
                      j,
                      { center: !0, muted: !0, block: !0 },
                      "This story was indexed and snapshotted in a standardized cloud browser.",
                    ),
                    r.selectedComparison?.headCapture?.captureImage &&
                      a.createElement(sl, {
                        ...r.selectedComparison?.headCapture?.captureImage,
                        status: "positive",
                      }),
                  ),
                  a.createElement(
                    yt,
                    null,
                    a.createElement(I1, null, "You're ready to start testing!"),
                    a.createElement(ce, { variant: "solid", size: "medium", onClick: e }, "Done"),
                    a.createElement(ce, { link: !0, onClick: t }, "Skip walkthrough"),
                  ),
                )
              : a.createElement(
                  se,
                  null,
                  a.createElement(
                    "div",
                    null,
                    a.createElement(me, null, "Nice. You ran your first tests!"),
                    a.createElement(
                      j,
                      { center: !0, muted: !0, block: !0 },
                      "This story was indexed and snapshotted in a standardized cloud browser and changes were found.",
                    ),
                    r.selectedComparison?.headCapture?.captureImage &&
                      a.createElement(sl, {
                        ...r.selectedComparison?.headCapture?.captureImage,
                        status: "positive",
                      }),
                  ),
                  a.createElement(
                    yt,
                    null,
                    a.createElement(I1, null, "It's time to review changes!"),
                    a.createElement(
                      ce,
                      { variant: "solid", size: "medium", onClick: e },
                      "Take a tour",
                    ),
                    a.createElement(ce, { link: !0, onClick: t }, "Skip walkthrough"),
                  ),
                ),
          ),
        );
      },
      B1 = () =>
        a.createElement(
          "div",
          null,
          a.createElement(rn, null),
          a.createElement(me, null, "Get started with visual testing"),
          a.createElement(
            j,
            { center: !0, muted: !0 },
            'Take an image snapshot of your stories to save their "last known good state" as test baselines.',
          ),
        ),
      r6 = ({ isRunning: e, localBuildProgress: t, startBuild: n, onSkip: r }) => (
        We("Onboarding", "InitialBuild"),
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            t
              ? a.createElement(
                  se,
                  null,
                  a.createElement(B1, null),
                  a.createElement(zr, { localBuildProgress: t }),
                )
              : a.createElement(
                  se,
                  null,
                  a.createElement(B1, null),
                  a.createElement(
                    yt,
                    null,
                    a.createElement(
                      ce,
                      { disabled: e, size: "medium", variant: "solid", onClick: n },
                      "Take snapshots",
                    ),
                    a.createElement(ce, { onClick: r, link: !0 }, "Skip walkthrough"),
                  ),
                ),
          ),
        )
      ),
      i6 = w(j)({ marginBottom: 5 }),
      l6 = ({ onCatchAChange: e, onSkip: t }) => {
        We("Onboarding", "InitialBuildComplete");
        let n = on();
        return a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Nice. Your stories were saved as test baselines."),
                a.createElement(
                  j,
                  { center: !0, muted: !0, block: !0 },
                  "This story was indexed and snapshotted in a standardized cloud browser.",
                ),
                n?.selectedComparison?.headCapture?.captureImage &&
                  a.createElement(sl, {
                    ...n?.selectedComparison?.headCapture.captureImage,
                    status: "positive",
                  }),
              ),
              a.createElement(
                yt,
                null,
                a.createElement(
                  i6,
                  { muted: !0 },
                  "Let's see the superpower of catching visual changes.",
                ),
                a.createElement(
                  ce,
                  { variant: "solid", size: "medium", onClick: e },
                  "Catch a UI change",
                ),
                a.createElement(ce, { link: !0, onClick: t }, "Skip walkthrough"),
              ),
            ),
          ),
        );
      },
      o6 = ({
        dismissBuildError: e,
        localBuildProgress: t,
        showInitialBuildScreen: n,
        gitInfo: r,
        lastBuildHasChangesForStory: i,
        onComplete: l,
        onSkip: o,
      }) => {
        let { isRunning: s, startBuild: c } = ka(),
          [d, m] = Ue("showInitialBuild", n);
        X(() => {
          n && m(!0);
        }, [n, m]);
        let [u, p] = Ue("showCatchAChange", !d),
          [f, g] = Ue("initialGitHash", r.uncommittedHash),
          y = () => {
            g(r.uncommittedHash), p(!0);
          },
          [k, E] = Ue("runningSecondBuild", !1);
        return t?.currentStep === "error"
          ? a.createElement(
              z7,
              { localBuildProgress: t },
              a.createElement(
                yt,
                null,
                a.createElement(ce, { variant: "solid", size: "medium", onClick: c }, "Try again"),
                a.createElement(ce, { link: !0, onClick: o }, "Skip walkthrough"),
              ),
            )
          : t?.currentStep === "limited"
            ? a.createElement(
                m0,
                { billingUrl: t.errorDetailsUrl, suspensionReason: "EXCEEDED_THRESHOLD" },
                a.createElement(ce, { link: !0, onClick: e }, "Continue"),
              )
            : d && (!t || (t && s))
              ? a.createElement(r6, {
                  isRunning: s,
                  localBuildProgress: t,
                  startBuild: c,
                  onSkip: o,
                })
              : t?.currentStep === "complete" && !u && !k
                ? i
                  ? a.createElement(Z1, { onComplete: l, onSkip: o })
                  : a.createElement(l6, { onCatchAChange: y, onSkip: o })
                : u && !i
                  ? a.createElement(t6, {
                      isRunning: s,
                      isUnchanged: f === r.uncommittedHash,
                      localBuildProgress: t,
                      onSkip: o,
                      runningSecondBuild: k,
                      setInitialGitHash: g,
                      setRunningSecondBuild: E,
                      startBuild: c,
                      uncommittedHash: r.uncommittedHash,
                    })
                  : i
                    ? a.createElement(Z1, { onComplete: l, onSkip: o, ranSecondBuild: u && k })
                    : null;
      },
      s6 = w.div(({ theme: e }) => ({
        background: e.background.app,
        padding: "10px 15px",
        lineHeight: "20px",
        color: e.color.defaultText,
        borderBottom: `1px solid ${e.appBorderColor}`,
      })),
      c6 = Ft({ from: { transform: "rotate(0deg)" }, to: { transform: "rotate(359deg)" } }),
      d6 = w(us)({ animation: `${c6} 1s linear infinite` }),
      ja = { width: 10, marginRight: 8 },
      P1 = w.button(({ isWarning: e, onClick: t, theme: n }) => {
        let r = n.base === "light" ? n.background.warning : "#2e271a";
        return {
          position: "relative",
          display: "flex",
          width: "100%",
          lineHeight: "20px",
          padding: "5px 7px 5px 15px",
          justifyContent: "space-between",
          alignItems: "center",
          background: e ? r : n.background.app,
          border: "none",
          borderBottom: `1px solid ${n.appBorderColor}`,
          color: n.color.defaultText,
          cursor: t ? "pointer" : "default",
          textAlign: "left",
          "& > *": { zIndex: 1 },
          code: { fontFamily: n.typography.fonts.mono, fontSize: "12px" },
        };
      }),
      V1 = w.div(({ isWarning: e, percentage: t, theme: n }) => {
        let r = n.base === "light" ? "#FFE6B1" : "#43361f";
        return {
          display: "block",
          position: "absolute",
          top: "0",
          height: "100%",
          left: "0",
          width: `${t}%`,
          transition: "width 3s ease-out",
          backgroundColor: e ? r : n.background.hoverable,
          pointerEvents: "none",
          zIndex: 0,
        };
      }),
      za = w.div({ padding: "5px 0" }),
      u6 = w.div(({ expanded: e, theme: t }) => ({
        display: "grid",
        gridTemplateRows: e ? "1fr" : "0fr",
        background: t.background.app,
        borderBottom: e ? `1px solid ${t.appBorderColor}` : "none",
        transition: "grid-template-rows 150ms ease-out",
      })),
      m6 = w.div(({ theme: e }) => ({
        whiteSpace: "nowrap",
        overflow: "hidden",
        color: e.base === "light" ? e.color.dark : e.color.lightest,
      })),
      p6 = w.div(({ isCurrent: e, isFailed: t, isPending: n, theme: r }) => ({
        display: "flex",
        flexDirection: "row",
        gap: 8,
        opacity: n ? 0.7 : 1,
        color: t ? r.color.negativeText : "inherit",
        fontWeight: e || t ? "bold" : "normal",
        fontFamily: "Menlo, monospace",
        fontSize: 12,
        lineHeight: "24px",
        margin: "0 15px",
        "&:first-of-type": { marginTop: 10 },
        "&:last-of-type": { marginBottom: 10 },
        "& > div": { display: "flex", alignItems: "center" },
      })),
      h6 = ({ localBuildProgress: e, expanded: t = !1 }) => {
        let n = Ne({});
        X(() => {
          n.current[e.currentStep] = { ...e };
        }, [e]);
        let r = ["aborted", "error"].includes(e.currentStep),
          i = Ui.map(l => {
            let { startedAt: o, completedAt: s } = e.stepProgress[l],
              c = !!o && !s,
              d = c && r,
              m = !o,
              u = { ...Nl[l], isCurrent: c, isFailed: d, isPending: m };
            return d
              ? { ...u, icon: a.createElement(xt, { style: ja }), renderLabel: u.renderProgress }
              : c
                ? { ...u, icon: a.createElement(d6, { style: ja }), renderLabel: u.renderProgress }
                : m
                  ? { ...u, icon: a.createElement(J5, { style: ja }), renderLabel: u.renderName }
                  : {
                      ...u,
                      icon: a.createElement(hl, { style: ja }),
                      renderLabel: u.renderComplete,
                    };
          });
        return a.createElement(
          u6,
          { expanded: t },
          a.createElement(
            m6,
            null,
            i.map(({ icon: l, isCurrent: o, isFailed: s, isPending: c, key: d, renderLabel: m }) =>
              a.createElement(
                p6,
                { isCurrent: o, isFailed: s, isPending: c, key: d },
                a.createElement("div", null, l, m(n.current[d] || e)),
              ),
            ),
          ),
        );
      },
      f6 = ({
        branch: e,
        dismissBuildError: t,
        localBuildProgress: n,
        lastBuildOnBranchInProgress: r,
        switchToLastBuildOnBranch: i,
      }) => {
        let [l, o] = a.useState(!1),
          s = () => {
            o(!l);
          };
        if (n) {
          let d = n.currentStep === "aborted",
            m = n.currentStep === "error",
            u = d || m;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              P1,
              { as: m ? "div" : "button", onClick: m ? void 0 : s, isWarning: u },
              a.createElement(V1, { percentage: n.buildProgressPercentage, isWarning: u }),
              a.createElement(
                za,
                null,
                a.createElement(Ml, { localBuildProgress: n, withEmoji: !0 }),
              ),
              m
                ? a.createElement(
                    Je,
                    { onClick: t },
                    a.createElement(fl, { "aria-label": "Dismiss" }),
                  )
                : a.createElement(
                    Je,
                    { as: "div" },
                    l ? a.createElement(eu, null) : a.createElement(X5, null),
                  ),
            ),
            a.createElement(h6, { localBuildProgress: n, expanded: l || m }),
          );
        }
        function c() {
          return i
            ? r
              ? a.createElement(
                  za,
                  null,
                  "Reviewing is disabled because there's a newer build in progress on",
                  " ",
                  a.createElement(Fe, null, e),
                  ". This can happen when a build runs in CI.",
                )
              : a.createElement(
                  za,
                  null,
                  "There's a newer snapshot with changes.",
                  " ",
                  a.createElement($t, { withArrow: !0, onClick: i }, "Switch to newer snapshot"),
                )
            : a.createElement(
                za,
                null,
                "Reviewing is disabled because there's a newer build on ",
                a.createElement(Fe, null, e),
                ".",
              );
        }
        return a.createElement(P1, { onClick: i }, a.createElement(V1, { percentage: 100 }), c());
      },
      g6 = ({ onClose: e }) =>
        a.createElement(
          qs,
          null,
          a.createElement(
            Ki,
            null,
            a.createElement(
              cr,
              null,
              "Render settings",
              a.createElement(Ho, null),
              a.createElement(Il, { onClick: e }, a.createElement(Rl, { "aria-label": "Close" })),
            ),
            a.createElement("p", null, a.createElement(Gm, null), "Delay: 300ms"),
            a.createElement("p", null, a.createElement(qm, null), "Animation pause: Ends"),
            a.createElement("p", null, a.createElement(Ym, null), "Threshold: 0.2"),
            a.createElement("p", null, a.createElement(Qm, null), "Anti-alias: Included"),
          ),
          a.createElement(
            Ki,
            null,
            a.createElement(cr, null, "Bounding box", a.createElement(Ho, null)),
            a.createElement(
              "dl",
              null,
              a.createElement("dt", null, "Width:"),
              a.createElement("dd", null, "Fill viewport"),
              a.createElement("dt", null, "Height:"),
              a.createElement("dd", null, "Hug contents"),
            ),
          ),
        ),
      K0 = {
        isReviewing: !1,
        userCanReview: !1,
        buildIsReviewable: !1,
        acceptTest: (e, t = "SPEC") => Promise.resolve(),
        unacceptTest: (e, t = "SPEC") => Promise.resolve(),
      },
      J0 = qe(K0),
      X0 = () => bt(J0, "ReviewTest"),
      v6 = ({ children: e, watchState: t = K0 }) => a.createElement(J0.Provider, { value: t }, e),
      y6 = w.div(
        ({ theme: e }) => ({
          position: "relative",
          display: "flex",
          background: "transparent",
          overflow: "hidden",
          margin: 2,
          maxWidth: "calc(100% - 4px)",
          "& > div": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            p: { maxWidth: 380, textAlign: "center" },
            svg: { width: 24, height: 24 },
          },
          "& > svg": {
            position: "absolute",
            left: "calc(50% - 14px)",
            top: "calc(50% - 14px)",
            width: 20,
            height: 20,
            color: e.color.lightest,
            opacity: 0,
            transition: "opacity 0.1s ease-in-out",
            pointerEvents: "none",
          },
        }),
        ({ href: e }) =>
          e && {
            display: "inline-flex",
            cursor: "pointer",
            "&:hover": { "& > svg": { opacity: 1 }, img: { filter: "brightness(85%)" } },
          },
      ),
      D1 = w.div(({ isVisible: e }) => ({
        position: e ? "static" : "absolute",
        visibility: e ? "visible" : "hidden",
        maxWidth: "100%",
        minHeight: 100,
      })),
      Ua = w.img({
        display: "block",
        width: "100%",
        height: "auto",
        transition: "filter 0.1s ease-in-out, opacity 0.1s ease-in-out",
        "&[data-overlay]": {
          position: "absolute",
          opacity: 0.7,
          pointerEvents: "none",
          transition: "opacity 0.1s ease-in-out",
        },
      }),
      E6 = w(se)({ margin: "30px 15px" }),
      b6 = ({ comparisonImageLoaded: e, focusImageLoaded: t, showDiff: n, showFocus: r }) =>
        n && r ? e && t : n ? e : r ? t : !0,
      k6 = ({
        componentName: e,
        storyName: t,
        testUrl: n,
        comparisonResult: r,
        latestImage: i,
        baselineImage: l,
        baselineImageVisible: o,
        diffImage: s,
        focusImage: c,
        diffVisible: d,
        focusVisible: m,
        ...u
      }) => {
        let p = Ut(),
          f = !!i && !!s && r === "CHANGED",
          g = r === "CAPTURE_ERROR",
          y = f && !!c,
          k = f ? { as: "a", href: n, target: "_blank", title: "View on Chromatic.com" } : {},
          E = f && d,
          h = y && m,
          [v, b] = a.useState(!1),
          [C, O] = a.useState(!1),
          [I, U] = a.useState(!1),
          [G, oe] = a.useState(!1),
          ee = o ? C : v,
          ke = b6({ comparisonImageLoaded: I, focusImageLoaded: G, showDiff: E, showFocus: h });
        return a.createElement(
          y6,
          { ...u, ...k },
          i &&
            a.createElement(
              D1,
              {
                isVisible: !l || !o,
                style: { aspectRatio: `${i.imageWidth} / ${i.imageHeight}`, width: i.imageWidth },
              },
              (!v || !ke) && a.createElement(Qi, null),
              a.createElement(Ua, {
                alt: `Latest snapshot for the '${t}' story of the '${e}' component`,
                src: i.imageUrl,
                style: { opacity: v ? 1 : 0 },
                onLoad: () => b(!0),
              }),
            ),
          l &&
            a.createElement(
              D1,
              {
                isVisible: o,
                style: { aspectRatio: `${l.imageWidth} / ${l.imageHeight}`, width: l.imageWidth },
              },
              (!C || !ke) && a.createElement(Qi, null),
              a.createElement(Ua, {
                alt: `Baseline snapshot for the '${t}' story of the '${e}' component`,
                src: l.imageUrl,
                style: { opacity: C ? 1 : 0 },
                onLoad: () => O(!0),
              }),
            ),
          f &&
            ee &&
            a.createElement(Ua, {
              alt: "",
              "data-overlay": "diff",
              src: s.imageUrl,
              style: {
                width: s.imageWidth,
                maxWidth: `${(s.imageWidth / i.imageWidth) * 100}%`,
                opacity: E && I ? 0.7 : 0,
              },
              onLoad: () => U(!0),
            }),
          y &&
            ee &&
            a.createElement(Ua, {
              alt: "",
              "data-overlay": "focus",
              src: c.imageUrl,
              style: {
                width: c.imageWidth,
                maxWidth: `${(c.imageWidth / i.imageWidth) * 100}%`,
                opacity: h && G ? 0.7 : 0,
                filter: h ? "blur(2px)" : "none",
              },
              onLoad: () => oe(!0),
            }),
          f && a.createElement(cs, null),
          g &&
            !i &&
            a.createElement(
              E6,
              null,
              a.createElement(P5, { color: p.base === "light" ? "currentColor" : p.color.medium }),
              a.createElement(
                j,
                { center: !0, muted: !0 },
                "A snapshot couldn't be captured. This often occurs when a story has a code error. Confirm that this story successfully renders in your local Storybook and run the build again.",
              ),
            ),
        );
      },
      w6 = e =>
        a.createElement(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement("path", {
            d: "M5.06982 9.68493L7.99484 4.63927L14.5786 4.62406C14.5252 4.52043 14.4696 4.41742 14.4109 4.31532C12.372 0.768556 7.84405 -0.453864 4.29726 1.58495C3.24614 2.1892 2.39921 3.01211 1.78076 3.96327L5.06982 9.68493Z",
            fill: "#DB4437",
          }),
          a.createElement("path", {
            d: "M10.9276 9.68457L5.09539 9.6743L1.79036 3.98022C1.72727 4.07822 1.66591 4.17795 1.60682 4.27985C-0.445348 7.81892 0.759985 12.3515 4.29905 14.4037C5.34791 15.0118 6.48403 15.3338 7.617 15.3939L10.9276 9.68457Z",
            fill: "#0F9D58",
          }),
          a.createElement("path", {
            d: "M7.98649 4.61194L10.9032 9.66241L7.63525 15.3778C7.75167 15.3833 7.86871 15.3863 7.98649 15.3863C12.0775 15.3863 15.3939 12.0699 15.3939 7.97893C15.3939 6.76648 15.1025 5.62211 14.5861 4.61194L7.98649 4.61194Z",
            fill: "#FFCD40",
          }),
          a.createElement("path", {
            d: "M8.01367 4.6366V6.40005L14.613 4.6366H8.01367Z",
            fill: "url(#paint0_radial_466_21161)",
          }),
          a.createElement("path", {
            d: "M1.78198 4.00098L6.60102 8.8192L5.09764 9.687L1.78198 4.00098Z",
            fill: "url(#paint1_radial_466_21161)",
          }),
          a.createElement("path", {
            d: "M7.6626 15.4017L9.42689 8.81921L10.9303 9.68702L7.6626 15.4017Z",
            fill: "url(#paint2_radial_466_21161)",
          }),
          a.createElement("ellipse", {
            cx: "8.01347",
            cy: "8.00358",
            rx: "3.36699",
            ry: "3.36699",
            fill: "#F1F1F1",
          }),
          a.createElement("ellipse", {
            cx: "8.01367",
            cy: "8.00354",
            rx: "2.69361",
            ry: "2.6936",
            fill: "#4285F4",
          }),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "radialGradient",
              {
                id: "paint0_radial_466_21161",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(7.69229 4.63226) scale(7.07721 1.89116)",
              },
              a.createElement("stop", { stopColor: "#3E2723", stopOpacity: "0.2" }),
              a.createElement("stop", { offset: "1", stopColor: "#3E2723", stopOpacity: "0.01" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint1_radial_466_21161",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1.77445 4.00677) scale(6.56938 7.75127)",
              },
              a.createElement("stop", { stopColor: "#3E2723", stopOpacity: "0.2" }),
              a.createElement("stop", { offset: "1", stopColor: "#3E2723", stopOpacity: "0.01" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint2_radial_466_21161",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(8.00025 8.01489) scale(7.39644 14.8995)",
              },
              a.createElement("stop", { stopColor: "#263238", stopOpacity: "0.2" }),
              a.createElement("stop", { offset: "1", stopColor: "#263238", stopOpacity: "0.01" }),
            ),
          ),
        ),
      C6 = e =>
        a.createElement(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement("circle", {
            cx: "8.00009",
            cy: "7.99997",
            r: "7.7037",
            fill: "url(#paint0_linear_466_21186)",
          }),
          a.createElement("ellipse", {
            cx: "8.00094",
            cy: "8.00094",
            rx: "7.06173",
            ry: "7.06173",
            fill: "url(#paint1_radial_466_21186)",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.07134 1.36353C8.03043 1.36353 7.99727 1.39669 7.99727 1.4376V2.56469C7.99727 2.6056 8.03043 2.63877 8.07134 2.63877C8.11225 2.63877 8.14542 2.6056 8.14542 2.56469V1.4376C8.14542 1.39669 8.11225 1.36353 8.07134 1.36353ZM8.07134 14.7792C8.11225 14.7792 8.14542 14.746 8.14542 14.7051V13.578C8.14542 13.5371 8.11225 13.5039 8.07134 13.5039C8.03043 13.5039 7.99727 13.5371 7.99727 13.578V14.7051C7.99727 14.746 8.03043 14.7792 8.07134 14.7792ZM8.64883 1.46214C8.65292 1.42143 8.68923 1.39175 8.72994 1.39584C8.77064 1.39993 8.80032 1.43625 8.79623 1.47695L8.74793 1.95766C8.74384 1.99836 8.70752 2.02804 8.66682 2.02395C8.62612 2.01986 8.59643 1.98355 8.60052 1.94284L8.64883 1.46214ZM7.41372 14.7468C7.45442 14.7509 7.49074 14.7213 7.49483 14.6806L7.54313 14.1998C7.54722 14.1591 7.51754 14.1228 7.47683 14.1187C7.43613 14.1146 7.39982 14.1443 7.39573 14.185L7.34742 14.6657C7.34333 14.7064 7.37301 14.7428 7.41372 14.7468ZM14.7051 7.99727C14.746 7.99727 14.7792 8.03043 14.7792 8.07134C14.7792 8.11225 14.746 8.14542 14.7051 8.14542H13.578C13.5371 8.14542 13.5039 8.11225 13.5039 8.07134C13.5039 8.03043 13.5371 7.99727 13.578 7.99727H14.7051ZM1.36353 8.07134C1.36353 8.11225 1.39669 8.14542 1.4376 8.14542H2.56469C2.6056 8.14542 2.63877 8.11225 2.63877 8.07134C2.63877 8.03043 2.6056 7.99727 2.56469 7.99727H1.4376C1.39669 7.99727 1.36353 8.03043 1.36353 8.07134ZM14.6806 8.64883C14.7213 8.65292 14.7509 8.68923 14.7468 8.72994C14.7428 8.77064 14.7064 8.80032 14.6657 8.79623L14.185 8.74793C14.1443 8.74384 14.1146 8.70752 14.1187 8.66682C14.1228 8.62612 14.1591 8.59643 14.1998 8.60052L14.6806 8.64883ZM1.39584 7.41372C1.39175 7.45442 1.42143 7.49074 1.46214 7.49483L1.94284 7.54313C1.98355 7.54722 2.01986 7.51754 2.02395 7.47683C2.02804 7.43613 1.99836 7.39982 1.95766 7.39573L1.47695 7.34742C1.43625 7.34333 1.39993 7.37301 1.39584 7.41372ZM12.7097 3.3282C12.7387 3.29927 12.7856 3.29927 12.8145 3.3282C12.8434 3.35713 12.8434 3.40403 12.8145 3.43296L12.0175 4.22994C11.9886 4.25887 11.9417 4.25887 11.9127 4.22994C11.8838 4.20101 11.8838 4.15411 11.9127 4.12518L12.7097 3.3282ZM3.3282 12.8145C3.35713 12.8434 3.40403 12.8434 3.43296 12.8145L4.22994 12.0175C4.25887 11.9886 4.25887 11.9417 4.22994 11.9127C4.20101 11.8838 4.15411 11.8838 4.12518 11.9127L3.3282 12.7097C3.29927 12.7387 3.29927 12.7856 3.3282 12.8145ZM13.1523 3.80568C13.1839 3.77973 13.2306 3.78433 13.2566 3.81595C13.2825 3.84757 13.2779 3.89425 13.2463 3.9202L12.8729 4.22664C12.8413 4.2526 12.7946 4.248 12.7686 4.21638C12.7427 4.18475 12.7473 4.13808 12.7789 4.11212L13.1523 3.80568ZM2.88614 12.3267C2.91209 12.3584 2.95876 12.363 2.99039 12.337L3.36378 12.0306C3.3954 12.0046 3.4 11.9579 3.37404 11.9263C3.34809 11.8947 3.30142 11.8901 3.26979 11.916L2.8964 12.2225C2.86478 12.2484 2.86018 12.2951 2.88614 12.3267ZM12.8145 12.7097C12.8434 12.7387 12.8434 12.7856 12.8145 12.8145C12.7856 12.8434 12.7387 12.8434 12.7097 12.8145L11.9127 12.0175C11.8838 11.9886 11.8838 11.9417 11.9127 11.9127C11.9417 11.8838 11.9886 11.8838 12.0175 11.9127L12.8145 12.7097ZM3.3282 3.3282C3.29927 3.35713 3.29927 3.40403 3.3282 3.43296L4.12518 4.22994C4.15411 4.25887 4.20101 4.25887 4.22994 4.22994C4.25887 4.20101 4.25887 4.15411 4.22994 4.12518L3.43296 3.3282C3.40403 3.29927 3.35713 3.29927 3.3282 3.3282ZM12.337 13.1523C12.363 13.1839 12.3584 13.2306 12.3267 13.2566C12.2951 13.2825 12.2484 13.2779 12.2225 13.2463L11.916 12.8729C11.8901 12.8413 11.8947 12.7946 11.9263 12.7686C11.9579 12.7427 12.0046 12.7473 12.0306 12.7789L12.337 13.1523ZM3.81595 2.88614C3.78433 2.91209 3.77973 2.95876 3.80568 2.99039L4.11212 3.36378C4.13808 3.3954 4.18475 3.4 4.21638 3.37404C4.248 3.34809 4.2526 3.30142 4.22664 3.26979L3.9202 2.8964C3.89425 2.86478 3.84757 2.86018 3.81595 2.88614ZM10.5415 1.91422C10.5572 1.87643 10.6005 1.85848 10.6383 1.87413C10.6761 1.88979 10.6941 1.93312 10.6784 1.97092L10.2471 3.01221C10.2314 3.05 10.1881 3.06795 10.1503 3.05229C10.1125 3.03664 10.0946 2.99331 10.1102 2.95551L10.5415 1.91422ZM5.50437 14.2686C5.54216 14.2842 5.58549 14.2663 5.60115 14.2285L6.03247 13.1872C6.04813 13.1494 6.03018 13.1061 5.99238 13.0904C5.95459 13.0747 5.91126 13.0927 5.8956 13.1305L5.46428 14.1718C5.44862 14.2096 5.46657 14.2529 5.50437 14.2686ZM11.1332 2.18598C11.1524 2.1499 11.1973 2.13628 11.2334 2.15557C11.2695 2.17486 11.2831 2.21974 11.2638 2.25582L11.0361 2.68183C11.0168 2.7179 10.9719 2.73152 10.9358 2.71223C10.8998 2.69295 10.8861 2.64806 10.9054 2.61199L11.1332 2.18598ZM4.90931 13.9871C4.94539 14.0064 4.99027 13.9928 5.00955 13.9567L5.23726 13.5307C5.25654 13.4946 5.24293 13.4497 5.20685 13.4305C5.17077 13.4112 5.12589 13.4248 5.1066 13.4609L4.8789 13.8869C4.85961 13.923 4.87323 13.9678 4.90931 13.9871ZM14.2285 10.5415C14.2663 10.5572 14.2842 10.6005 14.2686 10.6383C14.2529 10.6761 14.2096 10.6941 14.1718 10.6784L13.1305 10.2471C13.0927 10.2314 13.0747 10.1881 13.0904 10.1503C13.1061 10.1125 13.1494 10.0946 13.1872 10.1102L14.2285 10.5415ZM1.87412 5.50437C1.85846 5.54216 1.87641 5.58549 1.91421 5.60115L2.95551 6.03247C2.99331 6.04813 3.03664 6.03018 3.05229 5.99238C3.06795 5.95459 3.05 5.91126 3.0122 5.8956L1.9709 5.46428C1.9331 5.44862 1.88977 5.46657 1.87412 5.50437ZM13.9567 11.1332C13.9928 11.1524 14.0064 11.1973 13.9871 11.2334C13.9678 11.2695 13.923 11.2831 13.8869 11.2638L13.4609 11.0361C13.4248 11.0168 13.4112 10.9719 13.4305 10.9358C13.4497 10.8998 13.4946 10.8861 13.5307 10.9054L13.9567 11.1332ZM2.15557 4.90929C2.13628 4.94537 2.1499 4.99025 2.18598 5.00954L2.61199 5.23726C2.64806 5.25654 2.69295 5.24293 2.71223 5.20685C2.73152 5.17077 2.7179 5.12589 2.68183 5.1066L2.25582 4.87888C2.21974 4.8596 2.17486 4.87321 2.15557 4.90929ZM14.1718 5.46428C14.2096 5.44862 14.2529 5.46657 14.2686 5.50437C14.2842 5.54216 14.2663 5.58549 14.2285 5.60115L13.1872 6.03247C13.1494 6.04813 13.1061 6.03018 13.0904 5.99238C13.0747 5.95459 13.0927 5.91126 13.1305 5.8956L14.1718 5.46428ZM1.87413 10.6383C1.88979 10.6761 1.93312 10.6941 1.97092 10.6784L3.01221 10.2471C3.05 10.2314 3.06795 10.1881 3.05229 10.1503C3.03664 10.1125 2.99331 10.0946 2.95551 10.1102L1.91422 10.5415C1.87643 10.5572 1.85848 10.6005 1.87413 10.6383ZM14.3979 6.07477C14.4371 6.0629 14.4785 6.08501 14.4903 6.12416C14.5022 6.1633 14.4801 6.20467 14.441 6.21654L13.9787 6.35677C13.9396 6.36864 13.8982 6.34654 13.8863 6.30739C13.8744 6.26824 13.8965 6.22688 13.9357 6.215L14.3979 6.07477ZM1.65237 10.0185C1.66425 10.0577 1.70561 10.0798 1.74476 10.0679L2.20699 9.92769C2.24614 9.91581 2.26825 9.87445 2.25637 9.8353C2.2445 9.79615 2.20313 9.77404 2.16399 9.78592L1.70175 9.92615C1.6626 9.93802 1.64049 9.97939 1.65237 10.0185ZM10.6383 14.2686C10.6005 14.2842 10.5572 14.2663 10.5415 14.2285L10.1102 13.1872C10.0946 13.1494 10.1125 13.1061 10.1503 13.0904C10.1881 13.0747 10.2314 13.0927 10.2471 13.1305L10.6784 14.1718C10.6941 14.2096 10.6761 14.2529 10.6383 14.2686ZM5.50437 1.87413C5.46657 1.88979 5.44862 1.93312 5.46428 1.97092L5.8956 3.01221C5.91126 3.05 5.95459 3.06795 5.99238 3.05229C6.03018 3.03664 6.04813 2.99331 6.03247 2.95551L5.60115 1.91422C5.58549 1.87643 5.54216 1.85848 5.50437 1.87413ZM10.0679 14.3979C10.0798 14.4371 10.0577 14.4785 10.0185 14.4903C9.97939 14.5022 9.93802 14.4801 9.92615 14.441L9.78592 13.9787C9.77404 13.9396 9.79615 13.8982 9.8353 13.8863C9.87445 13.8744 9.91581 13.8965 9.92769 13.9357L10.0679 14.3979ZM6.12417 1.65237C6.08502 1.66424 6.06291 1.70561 6.07479 1.74475L6.215 2.20699C6.22688 2.24614 6.26824 2.26825 6.30739 2.25637C6.34654 2.2445 6.36864 2.20314 6.35677 2.16399L6.21656 1.70175C6.20468 1.6626 6.16332 1.64049 6.12417 1.65237ZM9.29287 1.55062C9.30085 1.5105 9.33985 1.48444 9.37997 1.49242C9.4201 1.5004 9.44615 1.5394 9.43817 1.57952L9.21829 2.68496C9.21031 2.72508 9.17131 2.75114 9.13119 2.74316C9.09107 2.73518 9.06501 2.69618 9.07299 2.65606L9.29287 1.55062ZM6.76272 14.6503C6.80284 14.6583 6.84184 14.6322 6.84982 14.5921L7.0697 13.4866C7.07768 13.4465 7.05162 13.4075 7.0115 13.3995C6.97137 13.3916 6.93238 13.4176 6.9244 13.4577L6.70452 14.5632C6.69654 14.6033 6.72259 14.6423 6.76272 14.6503ZM9.92615 1.70175C9.93802 1.6626 9.97939 1.64049 10.0185 1.65237C10.0577 1.66425 10.0798 1.70561 10.0679 1.74476L9.92769 2.20699C9.91581 2.24614 9.87445 2.26825 9.8353 2.25637C9.79615 2.2445 9.77404 2.20313 9.78592 2.16399L9.92615 1.70175ZM6.12417 14.4903C6.16332 14.5022 6.20469 14.4801 6.21656 14.441L6.35677 13.9787C6.36864 13.9396 6.34653 13.8982 6.30739 13.8863C6.26824 13.8744 6.22687 13.8965 6.215 13.9357L6.07479 14.398C6.06291 14.4371 6.08502 14.4785 6.12417 14.4903ZM14.5921 9.29287C14.6322 9.30085 14.6583 9.33985 14.6503 9.37997C14.6423 9.4201 14.6033 9.44615 14.5632 9.43817L13.4577 9.21829C13.4176 9.21031 13.3916 9.17131 13.3995 9.13119C13.4075 9.09107 13.4465 9.06501 13.4866 9.07299L14.5921 9.29287ZM1.49242 6.76272C1.48444 6.80284 1.5105 6.84184 1.55062 6.84982L2.65606 7.0697C2.69618 7.07768 2.73518 7.05162 2.74316 7.0115C2.75114 6.97137 2.72508 6.93238 2.68496 6.9244L1.57952 6.70452C1.5394 6.69654 1.5004 6.72259 1.49242 6.76272ZM14.441 9.92615C14.4801 9.93802 14.5022 9.97939 14.4903 10.0185C14.4785 10.0577 14.4371 10.0798 14.3979 10.0679L13.9357 9.92769C13.8965 9.91581 13.8744 9.87445 13.8863 9.8353C13.8982 9.79615 13.9396 9.77404 13.9787 9.78592L14.441 9.92615ZM1.65237 6.12415C1.64049 6.1633 1.6626 6.20467 1.70175 6.21654L2.16399 6.35677C2.20313 6.36864 2.2445 6.34654 2.25637 6.30739C2.26825 6.26824 2.24614 6.22688 2.20699 6.215L1.74476 6.07477C1.70561 6.0629 1.66425 6.08501 1.65237 6.12415ZM13.5459 4.32424C13.58 4.30151 13.626 4.31066 13.6487 4.34468C13.6714 4.37869 13.6623 4.42469 13.6282 4.44742L12.6911 5.0736C12.6571 5.09633 12.6111 5.08718 12.5884 5.05317C12.5656 5.01915 12.5748 4.97315 12.6088 4.95042L13.5459 4.32424ZM2.494 11.798C2.51673 11.832 2.56273 11.8412 2.59675 11.8184L3.53389 11.1923C3.56791 11.1695 3.57706 11.1235 3.55433 11.0895C3.5316 11.0555 3.4856 11.0464 3.45159 11.0691L2.51444 11.6953C2.48043 11.718 2.47128 11.764 2.494 11.798ZM13.8869 4.87888C13.923 4.8596 13.9678 4.87321 13.9871 4.90929C14.0064 4.94537 13.9928 4.99025 13.9567 5.00954L13.5307 5.23726C13.4946 5.25654 13.4497 5.24293 13.4305 5.20685C13.4112 5.17077 13.4248 5.12589 13.4609 5.1066L13.8869 4.87888ZM2.15557 11.2334C2.17486 11.2695 2.21974 11.2831 2.25582 11.2638L2.68183 11.0361C2.7179 11.0168 2.73152 10.9719 2.71223 10.9358C2.69295 10.8998 2.64806 10.8861 2.61199 10.9054L2.18598 11.1332C2.1499 11.1524 2.13628 11.1973 2.15557 11.2334ZM11.8184 13.5459C11.8412 13.58 11.832 13.626 11.798 13.6487C11.764 13.6714 11.718 13.6623 11.6953 13.6282L11.0691 12.6911C11.0464 12.6571 11.0555 12.6111 11.0895 12.5884C11.1235 12.5656 11.1695 12.5748 11.1923 12.6088L11.8184 13.5459ZM4.34468 2.494C4.31066 2.51673 4.30151 2.56273 4.32424 2.59675L4.95042 3.53389C4.97315 3.56791 5.01915 3.57706 5.05317 3.55433C5.08718 3.5316 5.09633 3.4856 5.0736 3.45159L4.44742 2.51444C4.42469 2.48043 4.37869 2.47128 4.34468 2.494ZM11.2638 13.8869C11.2831 13.923 11.2695 13.9678 11.2334 13.9871C11.1973 14.0064 11.1524 13.9928 11.1331 13.9567L10.9054 13.5307C10.8861 13.4946 10.8998 13.4497 10.9358 13.4305C10.9719 13.4112 11.0168 13.4248 11.0361 13.4609L11.2638 13.8869ZM4.90931 2.15557C4.87323 2.17485 4.85961 2.21974 4.8789 2.25581L5.1066 2.68182C5.12589 2.7179 5.17077 2.73152 5.20685 2.71223C5.24293 2.69295 5.25654 2.64807 5.23726 2.61199L5.00955 2.18598C4.99027 2.1499 4.94539 2.13628 4.90931 2.15557ZM11.6953 2.51444C11.718 2.48043 11.764 2.47128 11.798 2.494C11.832 2.51673 11.8412 2.56273 11.8184 2.59675L11.1923 3.53389C11.1695 3.56791 11.1235 3.57706 11.0895 3.55433C11.0555 3.5316 11.0464 3.4856 11.0691 3.45159L11.6953 2.51444ZM4.34468 13.6487C4.37869 13.6714 4.42469 13.6623 4.44742 13.6282L5.0736 12.6911C5.09633 12.6571 5.08718 12.6111 5.05317 12.5884C5.01915 12.5656 4.97315 12.5748 4.95042 12.6088L4.32424 13.5459C4.30151 13.58 4.31066 13.626 4.34468 13.6487ZM12.2225 2.8964C12.2484 2.86478 12.2951 2.86018 12.3267 2.88614C12.3584 2.91209 12.363 2.95876 12.337 2.99039L12.0306 3.36378C12.0046 3.3954 11.9579 3.4 11.9263 3.37404C11.8947 3.34809 11.8901 3.30142 11.916 3.26979L12.2225 2.8964ZM3.81595 13.2566C3.84757 13.2825 3.89425 13.2779 3.9202 13.2463L4.22664 12.8729C4.2526 12.8413 4.248 12.7946 4.21638 12.7686C4.18475 12.7427 4.13808 12.7473 4.11212 12.7789L3.80568 13.1523C3.77973 13.1839 3.78433 13.2306 3.81595 13.2566ZM13.6282 11.6953C13.6623 11.718 13.6714 11.764 13.6487 11.798C13.626 11.832 13.58 11.8412 13.5459 11.8184L12.6088 11.1923C12.5748 11.1695 12.5656 11.1235 12.5884 11.0895C12.6111 11.0555 12.6571 11.0464 12.6911 11.0691L13.6282 11.6953ZM2.494 4.34468C2.47128 4.37869 2.48043 4.42469 2.51444 4.44742L3.45159 5.0736C3.4856 5.09633 3.5316 5.08718 3.55433 5.05317C3.57706 5.01915 3.56791 4.97315 3.53389 4.95042L2.59675 4.32424C2.56273 4.30151 2.51673 4.31066 2.494 4.34468ZM13.2463 12.2225C13.2779 12.2484 13.2825 12.2951 13.2566 12.3267C13.2306 12.3584 13.1839 12.363 13.1523 12.337L12.7789 12.0306C12.7473 12.0046 12.7427 11.9579 12.7686 11.9263C12.7946 11.8947 12.8413 11.8901 12.8729 11.916L13.2463 12.2225ZM2.88614 3.81595C2.86018 3.84757 2.86478 3.89425 2.8964 3.9202L3.26979 4.22664C3.30142 4.2526 3.34809 4.248 3.37404 4.21638C3.4 4.18475 3.3954 4.13808 3.36378 4.11212L2.99039 3.80568C2.95876 3.77973 2.91209 3.78433 2.88614 3.81595ZM14.5632 6.70452C14.6033 6.69654 14.6423 6.72259 14.6503 6.76272C14.6583 6.80284 14.6322 6.84184 14.5921 6.84982L13.4866 7.0697C13.4465 7.07768 13.4075 7.05162 13.3995 7.0115C13.3916 6.97137 13.4176 6.93238 13.4577 6.9244L14.5632 6.70452ZM1.49242 9.37997C1.5004 9.4201 1.5394 9.44615 1.57952 9.43817L2.68496 9.21829C2.72508 9.21031 2.75114 9.17131 2.74316 9.13119C2.73518 9.09107 2.69618 9.06501 2.65606 9.07299L1.55062 9.29287C1.5105 9.30085 1.48444 9.33985 1.49242 9.37997ZM14.6657 7.34742C14.7064 7.34333 14.7428 7.37301 14.7468 7.41372C14.7509 7.45442 14.7213 7.49074 14.6806 7.49483L14.1998 7.54313C14.1591 7.54722 14.1228 7.51754 14.1187 7.47683C14.1146 7.43613 14.1443 7.39982 14.185 7.39573L14.6657 7.34742ZM1.39584 8.72994C1.39993 8.77064 1.43625 8.80032 1.47695 8.79623L1.95766 8.74793C1.99836 8.74384 2.02804 8.70752 2.02395 8.66682C2.01986 8.62612 1.98355 8.59643 1.94284 8.60052L1.46214 8.64883C1.42143 8.65292 1.39175 8.68923 1.39584 8.72994ZM9.43817 14.5632C9.44615 14.6033 9.4201 14.6423 9.37997 14.6503C9.33985 14.6583 9.30085 14.6322 9.29287 14.5921L9.07299 13.4866C9.06501 13.4465 9.09107 13.4075 9.13119 13.3995C9.17131 13.3916 9.21031 13.4176 9.21829 13.4577L9.43817 14.5632ZM6.76272 1.49242C6.72259 1.5004 6.69654 1.5394 6.70452 1.57952L6.9244 2.68496C6.93238 2.72508 6.97137 2.75114 7.0115 2.74316C7.05162 2.73518 7.07768 2.69618 7.0697 2.65606L6.84982 1.55062C6.84184 1.5105 6.80284 1.48444 6.76272 1.49242ZM8.79623 14.6657C8.80032 14.7064 8.77064 14.7428 8.72994 14.7468C8.68923 14.7509 8.65292 14.7213 8.64883 14.6806L8.60052 14.1998C8.59643 14.1591 8.62612 14.1228 8.66682 14.1187C8.70752 14.1146 8.74384 14.1443 8.74793 14.185L8.79623 14.6657ZM7.41372 1.39584C7.37301 1.39993 7.34333 1.43625 7.34742 1.47695L7.39573 1.95766C7.39982 1.99836 7.43613 2.02804 7.47683 2.02395C7.51754 2.01986 7.54722 1.98355 7.54313 1.94284L7.49483 1.46214C7.49074 1.42143 7.45442 1.39175 7.41372 1.39584Z",
            fill: "#DDDDDD",
          }),
          a.createElement("path", {
            d: "M3.14941 12.8505L7.29562 7.28674L7.99989 7.99218L3.14941 12.8505Z",
            fill: "#DDDDDD",
          }),
          a.createElement("path", {
            d: "M7.28662 7.29574L12.8504 3.14954L7.99204 8.00002L7.28662 7.29574Z",
            fill: "#EE4444",
          }),
          a.createElement("path", {
            d: "M12.8505 3.14954L8.70427 8.71332L8 8.00789L12.8505 3.14954Z",
            fill: "#CC0000",
          }),
          a.createElement("path", {
            d: "M3.14941 12.8505L8.7132 8.70427L8.00777 8L3.14941 12.8505Z",
            fill: "#AAAAAA",
          }),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "linearGradient",
              {
                id: "paint0_linear_466_21186",
                x1: "0.300303",
                y1: "0.300951",
                x2: "0.300303",
                y2: "15.7084",
                gradientUnits: "userSpaceOnUse",
              },
              a.createElement("stop", { stopColor: "#F8F8F8" }),
              a.createElement("stop", { offset: "1", stopColor: "#CCCCCC" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint1_radial_466_21186",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(8.00216 8.0046) scale(7.06173)",
              },
              a.createElement("stop", { stopColor: "#00F0FF" }),
              a.createElement("stop", { offset: "1", stopColor: "#0070E0" }),
            ),
          ),
        ),
      S6 = e =>
        a.createElement(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement("path", {
            d: "M14.9596 5.19849C14.6332 4.41337 13.9721 3.56574 13.453 3.29783C13.8755 4.12612 14.12 4.95699 14.2134 5.57708C14.2134 5.5783 14.2139 5.58133 14.2149 5.58958C13.3657 3.47293 11.9257 2.61943 10.7499 0.761053C10.6905 0.667084 10.631 0.572865 10.573 0.473553C10.5434 0.422834 10.5159 0.371004 10.4903 0.318178C10.4414 0.223861 10.4038 0.124166 10.378 0.0211155C10.3782 0.0162369 10.3765 0.0114673 10.3734 0.00774353C10.3702 0.0040198 10.3658 0.00161108 10.3609 0.000990505C10.3563 -0.000330168 10.3515 -0.000330168 10.3468 0.000990505C10.3458 0.0013655 10.3442 0.00258425 10.3431 0.00302175C10.3414 0.003678 10.3393 0.005178 10.3376 0.00614675C10.3384 0.00502175 10.3402 0.0024905 10.3407 0.00189675C8.45416 1.10677 7.81416 3.15068 7.75535 4.17327C7.00199 4.22506 6.28171 4.50262 5.68841 4.96977C5.62629 4.9173 5.56135 4.86827 5.49388 4.8229C5.3227 4.22402 5.31543 3.59017 5.47282 2.98752C4.70132 3.3388 4.10126 3.89408 3.66501 4.3844H3.66154C3.36382 4.0073 3.38482 2.76337 3.40179 2.50365C3.39822 2.48755 3.17969 2.61708 3.15107 2.63662C2.88835 2.82414 2.64275 3.03454 2.41713 3.26537C2.16039 3.52573 1.92581 3.80705 1.71582 4.1064C1.71582 4.10677 1.7156 4.10721 1.71547 4.10758C1.71547 4.10718 1.71569 4.10677 1.71582 4.1064C1.23289 4.79075 0.890387 5.56404 0.7081 6.38155C0.704506 6.39783 0.701475 6.41471 0.697975 6.43112C0.68385 6.49724 0.632975 6.82799 0.624068 6.89987C0.623381 6.9054 0.623068 6.91071 0.622412 6.91624C0.556638 7.2582 0.515905 7.60451 0.500537 7.9524C0.500537 7.96521 0.499756 7.9779 0.499756 7.99074C0.499881 12.138 3.86238 15.5 8.01001 15.5C11.7245 15.5 14.8088 12.8035 15.4126 9.26152C15.4253 9.1654 15.4355 9.06877 15.4467 8.9718C15.596 7.68399 15.4301 6.3304 14.9596 5.19849ZM6.30351 11.0764C6.33863 11.0932 6.37163 11.1116 6.40769 11.1276C6.40919 11.1287 6.41126 11.1298 6.41279 11.1308C6.37608 11.1132 6.33965 11.0951 6.30351 11.0764ZM14.2155 5.59143L14.2145 5.58415C14.2149 5.5868 14.2153 5.58958 14.2158 5.59224L14.2155 5.59143Z",
            fill: "url(#paint0_linear_466_21172)",
          }),
          a.createElement("path", {
            d: "M14.9598 5.19851C14.6334 4.41338 13.9723 3.56576 13.4532 3.29785C13.8757 4.12613 14.1202 4.95701 14.2136 5.5771C14.2136 5.57529 14.214 5.5786 14.2148 5.58416C14.2151 5.58682 14.2156 5.5896 14.216 5.59226C14.9246 7.5132 14.5386 9.46657 13.9823 10.6602C13.1217 12.5071 11.0381 14.3999 7.77678 14.3076C4.25319 14.2078 1.149 11.5934 0.569531 8.16904C0.463937 7.62904 0.569531 7.35485 0.622656 6.91641C0.557938 7.25441 0.533281 7.35204 0.500781 7.95257C0.500781 7.96538 0.5 7.97807 0.5 7.99091C0.500063 12.138 3.86256 15.5 8.01019 15.5C11.7247 15.5 14.8089 12.8035 15.4128 9.26154C15.4255 9.16541 15.4357 9.06879 15.4469 8.97182C15.5962 7.68401 15.4303 6.33041 14.9598 5.19851Z",
            fill: "url(#paint1_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M14.9598 5.19851C14.6334 4.41338 13.9723 3.56576 13.4532 3.29785C13.8757 4.12613 14.1202 4.95701 14.2136 5.5771C14.2136 5.57529 14.214 5.5786 14.2148 5.58416C14.2151 5.58682 14.2156 5.5896 14.216 5.59226C14.9246 7.5132 14.5386 9.46657 13.9823 10.6602C13.1217 12.5071 11.0381 14.3999 7.77678 14.3076C4.25319 14.2078 1.149 11.5934 0.569531 8.16904C0.463937 7.62904 0.569531 7.35485 0.622656 6.91641C0.557938 7.25441 0.533281 7.35204 0.500781 7.95257C0.500781 7.96538 0.5 7.97807 0.5 7.99091C0.500063 12.138 3.86256 15.5 8.01019 15.5C11.7247 15.5 14.8089 12.8035 15.4128 9.26154C15.4255 9.16541 15.4357 9.06879 15.4469 8.97182C15.5962 7.68401 15.4303 6.33041 14.9598 5.19851Z",
            fill: "url(#paint2_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M11.3101 6.08127C11.3265 6.09277 11.3413 6.10421 11.3567 6.11564C11.1683 5.78113 10.9336 5.47487 10.6596 5.20589C8.32502 2.87164 10.0474 0.144581 10.3379 0.00608106C10.3387 0.00495606 10.3405 0.0024248 10.341 0.00183105C8.45443 1.10671 7.81443 3.15061 7.75562 4.17321C7.84312 4.16714 7.93037 4.1598 8.01943 4.1598C9.42727 4.1598 10.6535 4.93386 11.3101 6.08127Z",
            fill: "url(#paint3_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M8.02405 6.54735C8.01177 6.73417 7.35173 7.37838 7.12092 7.37838C4.98533 7.37838 4.63867 8.6701 4.63867 8.6701C4.73327 9.75792 5.49058 10.6537 6.40777 11.1277C6.44961 11.1493 6.49195 11.1689 6.53433 11.1882C6.60698 11.2203 6.68054 11.2504 6.75492 11.2784C7.0694 11.3897 7.39881 11.4532 7.73214 11.4668C11.4753 11.6424 12.2005 6.99201 9.49917 5.64157C10.191 5.52126 10.909 5.79948 11.31 6.08117C10.6534 4.93385 9.4272 4.15979 8.01939 4.15979C7.93033 4.15979 7.84311 4.16713 7.75558 4.1732C7.00222 4.22499 6.28194 4.50255 5.68864 4.9697C5.80314 5.06657 5.93239 5.19607 6.2047 5.46432C6.71414 5.96642 8.02127 6.48635 8.02405 6.54735Z",
            fill: "url(#paint4_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M8.02405 6.54735C8.01177 6.73417 7.35173 7.37838 7.12092 7.37838C4.98533 7.37838 4.63867 8.6701 4.63867 8.6701C4.73327 9.75792 5.49058 10.6537 6.40777 11.1277C6.44961 11.1493 6.49195 11.1689 6.53433 11.1882C6.60698 11.2203 6.68054 11.2504 6.75492 11.2784C7.0694 11.3897 7.39881 11.4532 7.73214 11.4668C11.4753 11.6424 12.2005 6.99201 9.49917 5.64157C10.191 5.52126 10.909 5.79948 11.31 6.08117C10.6534 4.93385 9.4272 4.15979 8.01939 4.15979C7.93033 4.15979 7.84311 4.16713 7.75558 4.1732C7.00222 4.22499 6.28194 4.50255 5.68864 4.9697C5.80314 5.06657 5.93239 5.19607 6.2047 5.46432C6.71414 5.96642 8.02127 6.48635 8.02405 6.54735Z",
            fill: "url(#paint5_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M5.3385 4.71992C5.39081 4.75366 5.4427 4.78804 5.49416 4.82305C5.32298 4.22417 5.31571 3.59032 5.4731 2.98767C4.7016 3.33895 4.10153 3.89423 3.66528 4.38455C3.70138 4.38351 4.79072 4.36392 5.3385 4.71992Z",
            fill: "url(#paint6_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M0.569399 8.16902C1.14887 11.5933 4.25305 14.2078 7.77665 14.3076C11.0379 14.3999 13.1216 12.507 13.9821 10.6602C14.5384 9.46646 14.9245 7.51333 14.2159 5.59224L14.2156 5.59142L14.2146 5.58414C14.2138 5.57858 14.2134 5.57527 14.2135 5.57708C14.2135 5.5783 14.214 5.58133 14.215 5.58958C14.4813 7.32899 13.5965 9.01408 12.2134 10.1535L12.2092 10.1632C9.51406 12.3577 6.93502 11.4872 6.41284 11.1309C6.37613 11.1133 6.33967 11.0951 6.30346 11.0765C4.73215 10.3255 4.08302 8.89402 4.22221 7.66633C2.89543 7.66633 2.44302 6.5473 2.44302 6.5473C2.44302 6.5473 3.63424 5.69796 5.20421 6.43664C6.65827 7.1208 8.02384 6.54736 8.02399 6.5473C8.02121 6.4863 6.71409 5.96636 6.20452 5.4643C5.93224 5.19605 5.80296 5.06671 5.68846 4.96967C5.62634 4.91721 5.5614 4.86817 5.49393 4.8228C5.44241 4.78788 5.39052 4.7535 5.33827 4.71967C4.79052 4.36367 3.70115 4.38327 3.66505 4.38421H3.66159C3.36387 4.00711 3.38487 2.76317 3.40184 2.50346C3.39827 2.48736 3.17974 2.61689 3.15112 2.63642C2.8884 2.82395 2.6428 3.03435 2.41718 3.26517C2.16043 3.5256 1.92585 3.80698 1.71587 4.10639C1.71587 4.10677 1.71565 4.10721 1.71552 4.10758C1.71552 4.10717 1.71574 4.10677 1.71587 4.10639C1.23294 4.79075 0.890436 5.56403 0.708149 6.38155C0.704555 6.39783 0.437836 7.56411 0.569399 8.16902Z",
            fill: "url(#paint7_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M10.6595 5.2058C10.9335 5.47478 11.1682 5.78104 11.3566 6.11555C11.398 6.14662 11.4366 6.17759 11.4694 6.2078C13.172 7.77655 12.2799 9.9953 12.2134 10.1534C13.5965 9.01405 14.4813 7.32896 14.215 5.58955C13.3657 3.47293 11.9258 2.61943 10.7499 0.761053C10.6905 0.667084 10.631 0.572866 10.573 0.473553C10.5435 0.422834 10.5159 0.371004 10.4903 0.318178C10.4415 0.223861 10.4038 0.124166 10.3781 0.0211155C10.3782 0.0162369 10.3766 0.0114673 10.3734 0.00774353C10.3703 0.0040198 10.3658 0.00161108 10.361 0.000990505C10.3564 -0.000330168 10.3515 -0.000330168 10.3469 0.000990505C10.3458 0.0013655 10.3443 0.00258425 10.3431 0.00302176C10.3415 0.003678 10.3394 0.00517801 10.3376 0.00614676C10.0473 0.144522 8.32493 2.87158 10.6595 5.2058Z",
            fill: "url(#paint8_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M11.4694 6.20779C11.4366 6.17757 11.398 6.1466 11.3566 6.11554C11.3413 6.10404 11.3263 6.0926 11.31 6.08117C10.909 5.79948 10.1909 5.52126 9.49912 5.64157C12.2004 6.99201 11.4752 11.6424 7.73209 11.4668C7.39876 11.4532 7.06935 11.3897 6.75487 11.2784C6.6805 11.2504 6.60694 11.2203 6.53428 11.1882C6.4919 11.1689 6.44956 11.1493 6.40771 11.1277C6.40921 11.1287 6.41128 11.1299 6.41281 11.1308C6.935 11.4871 9.51403 12.3576 12.2092 10.1631L12.2133 10.1534C12.2799 9.99542 13.1719 7.77657 11.4694 6.20779Z",
            fill: "url(#paint9_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M4.63871 8.67006C4.63871 8.67006 4.98537 7.37834 7.12096 7.37834C7.35183 7.37834 8.01187 6.73412 8.02408 6.54731C8.0363 6.36049 6.65846 7.12081 5.2043 6.43665C3.63433 5.69796 2.44312 6.54731 2.44312 6.54731C2.44312 6.54731 2.89552 7.66634 4.2223 7.66634C4.08315 8.89402 4.73227 10.3257 6.30355 11.0765C6.33868 11.0932 6.37168 11.1116 6.40774 11.1277C5.49062 10.6537 4.7333 9.75787 4.63871 8.67006Z",
            fill: "url(#paint10_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M14.9597 5.19849C14.6333 4.41337 13.9722 3.56574 13.4531 3.29783C13.8756 4.12612 14.1201 4.95699 14.2136 5.57708C14.2136 5.5783 14.214 5.58133 14.215 5.58958C13.3658 3.47293 11.9258 2.61943 10.75 0.761053C10.6906 0.667084 10.6311 0.572865 10.5731 0.473553C10.5436 0.422834 10.516 0.371004 10.4904 0.318178C10.4416 0.223861 10.4039 0.124166 10.3781 0.0211155C10.3783 0.0162369 10.3767 0.0114673 10.3735 0.00774353C10.3703 0.0040198 10.3659 0.00161108 10.3611 0.000990505C10.3565 -0.000330168 10.3516 -0.000330168 10.347 0.000990505C10.3459 0.0013655 10.3443 0.00258425 10.3432 0.00302175C10.3416 0.003678 10.3395 0.005178 10.3377 0.00614675C10.3386 0.00502175 10.3403 0.0024905 10.3408 0.00189675C8.45428 1.10677 7.81428 3.15068 7.75547 4.17327C7.84297 4.16721 7.93022 4.15987 8.01928 4.15987C9.42719 4.15987 10.6534 4.93393 11.3099 6.08124C10.9089 5.79955 10.1908 5.52133 9.49906 5.64165C12.2003 6.99208 11.4752 11.6425 7.73203 11.4669C7.3987 11.4533 7.06929 11.3898 6.75481 11.2784C6.68044 11.2505 6.60688 11.2204 6.53422 11.1882C6.49184 11.1689 6.4495 11.1494 6.40766 11.1278C6.40916 11.1288 6.41122 11.13 6.41275 11.1309C6.37605 11.1132 6.33958 11.0951 6.30337 11.0764C6.3385 11.0932 6.3715 11.1116 6.40756 11.1276C5.49038 10.6536 4.73306 9.75786 4.63847 8.67005C4.63847 8.67005 4.98513 7.37833 7.12072 7.37833C7.35159 7.37833 8.01162 6.73412 8.02384 6.5473C8.02106 6.4863 6.71394 5.96637 6.20437 5.4643C5.93209 5.19605 5.80281 5.06671 5.68831 4.96968C5.62619 4.91721 5.56125 4.86818 5.49378 4.8228C5.3226 4.22393 5.31533 3.59008 5.47272 2.98743C4.70122 3.33871 4.10116 3.89399 3.66491 4.3843H3.66144C3.36372 4.00721 3.38472 2.76327 3.40169 2.50355C3.39812 2.48746 3.17959 2.61699 3.15097 2.63652C2.88825 2.82404 2.64265 3.03445 2.41703 3.26527C2.16036 3.52567 1.92585 3.80702 1.71594 4.1064C1.71594 4.10677 1.71572 4.10721 1.71559 4.10758C1.71559 4.10718 1.71581 4.10677 1.71594 4.1064C1.23301 4.79075 0.890506 5.56404 0.708219 6.38155C0.704625 6.39783 0.701594 6.41471 0.698094 6.43112C0.683969 6.49724 0.620406 6.83277 0.611531 6.90474C0.610844 6.91027 0.612187 6.89924 0.611531 6.90474C0.553567 7.25147 0.516583 7.60137 0.500781 7.95255C0.500781 7.96537 0.5 7.97805 0.5 7.9909C0.5 12.138 3.8625 15.5 8.01012 15.5C11.7247 15.5 14.8089 12.8035 15.4127 9.26152C15.4254 9.1654 15.4356 9.06877 15.4468 8.9718C15.5961 7.68399 15.4302 6.3304 14.9597 5.19849ZM14.2147 5.58415C14.2151 5.5868 14.2155 5.58958 14.2159 5.59224L14.2157 5.59143L14.2147 5.58415Z",
            fill: "url(#paint11_linear_466_21172)",
          }),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "linearGradient",
              {
                id: "paint0_linear_466_21172",
                x1: "13.5874",
                y1: "2.40249",
                x2: "1.52839",
                y2: "14.0351",
                gradientUnits: "userSpaceOnUse",
              },
              a.createElement("stop", { offset: "0.05", stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.37", stopColor: "#FF980E" }),
              a.createElement("stop", { offset: "0.53", stopColor: "#FF3647" }),
              a.createElement("stop", { offset: "0.7", stopColor: "#E31587" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint1_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(10.8936 1.72781) scale(15.3601 15.6187)",
              },
              a.createElement("stop", { offset: "0.13", stopColor: "#FFBD4F" }),
              a.createElement("stop", { offset: "0.28", stopColor: "#FF980E" }),
              a.createElement("stop", { offset: "0.47", stopColor: "#FF3750" }),
              a.createElement("stop", { offset: "0.78", stopColor: "#EB0878" }),
              a.createElement("stop", { offset: "0.86", stopColor: "#E50080" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint2_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(6.43979 8.1787) scale(15.7441 15.6187)",
              },
              a.createElement("stop", { offset: "0.3", stopColor: "#960E18" }),
              a.createElement("stop", {
                offset: "0.35",
                stopColor: "#B11927",
                stopOpacity: "0.74",
              }),
              a.createElement("stop", {
                offset: "0.43",
                stopColor: "#DB293D",
                stopOpacity: "0.34",
              }),
              a.createElement("stop", { offset: "0.5", stopColor: "#F5334B", stopOpacity: "0.09" }),
              a.createElement("stop", { offset: "0.53", stopColor: "#FF3750", stopOpacity: "0" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint3_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(9.48415 -0.731827) scale(5.04157 8.55934)",
              },
              a.createElement("stop", { offset: "0.13", stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.53", stopColor: "#FF980E" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint4_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(6.15707 12.2109) scale(6.67134 7.31187)",
              },
              a.createElement("stop", { offset: "0.35", stopColor: "#3A8EE6" }),
              a.createElement("stop", { offset: "0.67", stopColor: "#9059FF" }),
              a.createElement("stop", { offset: "1", stopColor: "#C139E6" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint5_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(7.29699 6.57271) scale(3.54248 4.314)",
              },
              a.createElement("stop", { offset: "0.21", stopColor: "#9059FF", stopOpacity: "0" }),
              a.createElement("stop", { offset: "0.97", stopColor: "#6E008B", stopOpacity: "0.6" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint6_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(7.50592 1.1523) scale(5.30374 5.32259)",
              },
              a.createElement("stop", { offset: "0.1", stopColor: "#FFE226" }),
              a.createElement("stop", { offset: "0.79", stopColor: "#FF7139" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint7_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(12.3495 -2.33951) scale(25.3212 21.2557)",
              },
              a.createElement("stop", { offset: "0.11", stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.46", stopColor: "#FF980E" }),
              a.createElement("stop", { offset: "0.72", stopColor: "#FF3647" }),
              a.createElement("stop", { offset: "0.9", stopColor: "#E31587" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint8_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform:
                  "translate(2.94576 4.67997) rotate(77.3946) scale(8.03354 34.7519)",
              },
              a.createElement("stop", { stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.3", stopColor: "#FF980E" }),
              a.createElement("stop", { offset: "0.57", stopColor: "#FF3647" }),
              a.createElement("stop", { offset: "0.74", stopColor: "#E31587" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint9_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(7.56027 3.06659) scale(14.5381 14.2827)",
              },
              a.createElement("stop", { offset: "0.14", stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.48", stopColor: "#FF980E" }),
              a.createElement("stop", { offset: "0.66", stopColor: "#FF3647" }),
              a.createElement("stop", { offset: "0.9", stopColor: "#E31587" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint10_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(11.3337 3.90193) scale(17.4743 15.6328)",
              },
              a.createElement("stop", { offset: "0.09", stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.63", stopColor: "#FF980E" }),
            ),
            a.createElement(
              "linearGradient",
              {
                id: "paint11_linear_466_21172",
                x1: "12.5",
                y1: "2.16999",
                x2: "2.85701",
                y2: "12.7061",
                gradientUnits: "userSpaceOnUse",
              },
              a.createElement("stop", { offset: "0.17", stopColor: "#FFF44F", stopOpacity: "0.8" }),
              a.createElement("stop", { offset: "0.6", stopColor: "#FFF44F", stopOpacity: "0" }),
            ),
          ),
        ),
      x6 = e =>
        a.createElement(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement("circle", {
            cx: "8.00009",
            cy: "7.99997",
            r: "7.7037",
            fill: "url(#paint0_linear_466_21186)",
          }),
          a.createElement("ellipse", {
            cx: "8.00094",
            cy: "8.00094",
            rx: "7.06173",
            ry: "7.06173",
            fill: "url(#paint1_radial_466_21186)",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.07134 1.36353C8.03043 1.36353 7.99727 1.39669 7.99727 1.4376V2.56469C7.99727 2.6056 8.03043 2.63877 8.07134 2.63877C8.11225 2.63877 8.14542 2.6056 8.14542 2.56469V1.4376C8.14542 1.39669 8.11225 1.36353 8.07134 1.36353ZM8.07134 14.7792C8.11225 14.7792 8.14542 14.746 8.14542 14.7051V13.578C8.14542 13.5371 8.11225 13.5039 8.07134 13.5039C8.03043 13.5039 7.99727 13.5371 7.99727 13.578V14.7051C7.99727 14.746 8.03043 14.7792 8.07134 14.7792ZM8.64883 1.46214C8.65292 1.42143 8.68923 1.39175 8.72994 1.39584C8.77064 1.39993 8.80032 1.43625 8.79623 1.47695L8.74793 1.95766C8.74384 1.99836 8.70752 2.02804 8.66682 2.02395C8.62612 2.01986 8.59643 1.98355 8.60052 1.94284L8.64883 1.46214ZM7.41372 14.7468C7.45442 14.7509 7.49074 14.7213 7.49483 14.6806L7.54313 14.1998C7.54722 14.1591 7.51754 14.1228 7.47683 14.1187C7.43613 14.1146 7.39982 14.1443 7.39573 14.185L7.34742 14.6657C7.34333 14.7064 7.37301 14.7428 7.41372 14.7468ZM14.7051 7.99727C14.746 7.99727 14.7792 8.03043 14.7792 8.07134C14.7792 8.11225 14.746 8.14542 14.7051 8.14542H13.578C13.5371 8.14542 13.5039 8.11225 13.5039 8.07134C13.5039 8.03043 13.5371 7.99727 13.578 7.99727H14.7051ZM1.36353 8.07134C1.36353 8.11225 1.39669 8.14542 1.4376 8.14542H2.56469C2.6056 8.14542 2.63877 8.11225 2.63877 8.07134C2.63877 8.03043 2.6056 7.99727 2.56469 7.99727H1.4376C1.39669 7.99727 1.36353 8.03043 1.36353 8.07134ZM14.6806 8.64883C14.7213 8.65292 14.7509 8.68923 14.7468 8.72994C14.7428 8.77064 14.7064 8.80032 14.6657 8.79623L14.185 8.74793C14.1443 8.74384 14.1146 8.70752 14.1187 8.66682C14.1228 8.62612 14.1591 8.59643 14.1998 8.60052L14.6806 8.64883ZM1.39584 7.41372C1.39175 7.45442 1.42143 7.49074 1.46214 7.49483L1.94284 7.54313C1.98355 7.54722 2.01986 7.51754 2.02395 7.47683C2.02804 7.43613 1.99836 7.39982 1.95766 7.39573L1.47695 7.34742C1.43625 7.34333 1.39993 7.37301 1.39584 7.41372ZM12.7097 3.3282C12.7387 3.29927 12.7856 3.29927 12.8145 3.3282C12.8434 3.35713 12.8434 3.40403 12.8145 3.43296L12.0175 4.22994C11.9886 4.25887 11.9417 4.25887 11.9127 4.22994C11.8838 4.20101 11.8838 4.15411 11.9127 4.12518L12.7097 3.3282ZM3.3282 12.8145C3.35713 12.8434 3.40403 12.8434 3.43296 12.8145L4.22994 12.0175C4.25887 11.9886 4.25887 11.9417 4.22994 11.9127C4.20101 11.8838 4.15411 11.8838 4.12518 11.9127L3.3282 12.7097C3.29927 12.7387 3.29927 12.7856 3.3282 12.8145ZM13.1523 3.80568C13.1839 3.77973 13.2306 3.78433 13.2566 3.81595C13.2825 3.84757 13.2779 3.89425 13.2463 3.9202L12.8729 4.22664C12.8413 4.2526 12.7946 4.248 12.7686 4.21638C12.7427 4.18475 12.7473 4.13808 12.7789 4.11212L13.1523 3.80568ZM2.88614 12.3267C2.91209 12.3584 2.95876 12.363 2.99039 12.337L3.36378 12.0306C3.3954 12.0046 3.4 11.9579 3.37404 11.9263C3.34809 11.8947 3.30142 11.8901 3.26979 11.916L2.8964 12.2225C2.86478 12.2484 2.86018 12.2951 2.88614 12.3267ZM12.8145 12.7097C12.8434 12.7387 12.8434 12.7856 12.8145 12.8145C12.7856 12.8434 12.7387 12.8434 12.7097 12.8145L11.9127 12.0175C11.8838 11.9886 11.8838 11.9417 11.9127 11.9127C11.9417 11.8838 11.9886 11.8838 12.0175 11.9127L12.8145 12.7097ZM3.3282 3.3282C3.29927 3.35713 3.29927 3.40403 3.3282 3.43296L4.12518 4.22994C4.15411 4.25887 4.20101 4.25887 4.22994 4.22994C4.25887 4.20101 4.25887 4.15411 4.22994 4.12518L3.43296 3.3282C3.40403 3.29927 3.35713 3.29927 3.3282 3.3282ZM12.337 13.1523C12.363 13.1839 12.3584 13.2306 12.3267 13.2566C12.2951 13.2825 12.2484 13.2779 12.2225 13.2463L11.916 12.8729C11.8901 12.8413 11.8947 12.7946 11.9263 12.7686C11.9579 12.7427 12.0046 12.7473 12.0306 12.7789L12.337 13.1523ZM3.81595 2.88614C3.78433 2.91209 3.77973 2.95876 3.80568 2.99039L4.11212 3.36378C4.13808 3.3954 4.18475 3.4 4.21638 3.37404C4.248 3.34809 4.2526 3.30142 4.22664 3.26979L3.9202 2.8964C3.89425 2.86478 3.84757 2.86018 3.81595 2.88614ZM10.5415 1.91422C10.5572 1.87643 10.6005 1.85848 10.6383 1.87413C10.6761 1.88979 10.6941 1.93312 10.6784 1.97092L10.2471 3.01221C10.2314 3.05 10.1881 3.06795 10.1503 3.05229C10.1125 3.03664 10.0946 2.99331 10.1102 2.95551L10.5415 1.91422ZM5.50437 14.2686C5.54216 14.2842 5.58549 14.2663 5.60115 14.2285L6.03247 13.1872C6.04813 13.1494 6.03018 13.1061 5.99238 13.0904C5.95459 13.0747 5.91126 13.0927 5.8956 13.1305L5.46428 14.1718C5.44862 14.2096 5.46657 14.2529 5.50437 14.2686ZM11.1332 2.18598C11.1524 2.1499 11.1973 2.13628 11.2334 2.15557C11.2695 2.17486 11.2831 2.21974 11.2638 2.25582L11.0361 2.68183C11.0168 2.7179 10.9719 2.73152 10.9358 2.71223C10.8998 2.69295 10.8861 2.64806 10.9054 2.61199L11.1332 2.18598ZM4.90931 13.9871C4.94539 14.0064 4.99027 13.9928 5.00955 13.9567L5.23726 13.5307C5.25654 13.4946 5.24293 13.4497 5.20685 13.4305C5.17077 13.4112 5.12589 13.4248 5.1066 13.4609L4.8789 13.8869C4.85961 13.923 4.87323 13.9678 4.90931 13.9871ZM14.2285 10.5415C14.2663 10.5572 14.2842 10.6005 14.2686 10.6383C14.2529 10.6761 14.2096 10.6941 14.1718 10.6784L13.1305 10.2471C13.0927 10.2314 13.0747 10.1881 13.0904 10.1503C13.1061 10.1125 13.1494 10.0946 13.1872 10.1102L14.2285 10.5415ZM1.87412 5.50437C1.85846 5.54216 1.87641 5.58549 1.91421 5.60115L2.95551 6.03247C2.99331 6.04813 3.03664 6.03018 3.05229 5.99238C3.06795 5.95459 3.05 5.91126 3.0122 5.8956L1.9709 5.46428C1.9331 5.44862 1.88977 5.46657 1.87412 5.50437ZM13.9567 11.1332C13.9928 11.1524 14.0064 11.1973 13.9871 11.2334C13.9678 11.2695 13.923 11.2831 13.8869 11.2638L13.4609 11.0361C13.4248 11.0168 13.4112 10.9719 13.4305 10.9358C13.4497 10.8998 13.4946 10.8861 13.5307 10.9054L13.9567 11.1332ZM2.15557 4.90929C2.13628 4.94537 2.1499 4.99025 2.18598 5.00954L2.61199 5.23726C2.64806 5.25654 2.69295 5.24293 2.71223 5.20685C2.73152 5.17077 2.7179 5.12589 2.68183 5.1066L2.25582 4.87888C2.21974 4.8596 2.17486 4.87321 2.15557 4.90929ZM14.1718 5.46428C14.2096 5.44862 14.2529 5.46657 14.2686 5.50437C14.2842 5.54216 14.2663 5.58549 14.2285 5.60115L13.1872 6.03247C13.1494 6.04813 13.1061 6.03018 13.0904 5.99238C13.0747 5.95459 13.0927 5.91126 13.1305 5.8956L14.1718 5.46428ZM1.87413 10.6383C1.88979 10.6761 1.93312 10.6941 1.97092 10.6784L3.01221 10.2471C3.05 10.2314 3.06795 10.1881 3.05229 10.1503C3.03664 10.1125 2.99331 10.0946 2.95551 10.1102L1.91422 10.5415C1.87643 10.5572 1.85848 10.6005 1.87413 10.6383ZM14.3979 6.07477C14.4371 6.0629 14.4785 6.08501 14.4903 6.12416C14.5022 6.1633 14.4801 6.20467 14.441 6.21654L13.9787 6.35677C13.9396 6.36864 13.8982 6.34654 13.8863 6.30739C13.8744 6.26824 13.8965 6.22688 13.9357 6.215L14.3979 6.07477ZM1.65237 10.0185C1.66425 10.0577 1.70561 10.0798 1.74476 10.0679L2.20699 9.92769C2.24614 9.91581 2.26825 9.87445 2.25637 9.8353C2.2445 9.79615 2.20313 9.77404 2.16399 9.78592L1.70175 9.92615C1.6626 9.93802 1.64049 9.97939 1.65237 10.0185ZM10.6383 14.2686C10.6005 14.2842 10.5572 14.2663 10.5415 14.2285L10.1102 13.1872C10.0946 13.1494 10.1125 13.1061 10.1503 13.0904C10.1881 13.0747 10.2314 13.0927 10.2471 13.1305L10.6784 14.1718C10.6941 14.2096 10.6761 14.2529 10.6383 14.2686ZM5.50437 1.87413C5.46657 1.88979 5.44862 1.93312 5.46428 1.97092L5.8956 3.01221C5.91126 3.05 5.95459 3.06795 5.99238 3.05229C6.03018 3.03664 6.04813 2.99331 6.03247 2.95551L5.60115 1.91422C5.58549 1.87643 5.54216 1.85848 5.50437 1.87413ZM10.0679 14.3979C10.0798 14.4371 10.0577 14.4785 10.0185 14.4903C9.97939 14.5022 9.93802 14.4801 9.92615 14.441L9.78592 13.9787C9.77404 13.9396 9.79615 13.8982 9.8353 13.8863C9.87445 13.8744 9.91581 13.8965 9.92769 13.9357L10.0679 14.3979ZM6.12417 1.65237C6.08502 1.66424 6.06291 1.70561 6.07479 1.74475L6.215 2.20699C6.22688 2.24614 6.26824 2.26825 6.30739 2.25637C6.34654 2.2445 6.36864 2.20314 6.35677 2.16399L6.21656 1.70175C6.20468 1.6626 6.16332 1.64049 6.12417 1.65237ZM9.29287 1.55062C9.30085 1.5105 9.33985 1.48444 9.37997 1.49242C9.4201 1.5004 9.44615 1.5394 9.43817 1.57952L9.21829 2.68496C9.21031 2.72508 9.17131 2.75114 9.13119 2.74316C9.09107 2.73518 9.06501 2.69618 9.07299 2.65606L9.29287 1.55062ZM6.76272 14.6503C6.80284 14.6583 6.84184 14.6322 6.84982 14.5921L7.0697 13.4866C7.07768 13.4465 7.05162 13.4075 7.0115 13.3995C6.97137 13.3916 6.93238 13.4176 6.9244 13.4577L6.70452 14.5632C6.69654 14.6033 6.72259 14.6423 6.76272 14.6503ZM9.92615 1.70175C9.93802 1.6626 9.97939 1.64049 10.0185 1.65237C10.0577 1.66425 10.0798 1.70561 10.0679 1.74476L9.92769 2.20699C9.91581 2.24614 9.87445 2.26825 9.8353 2.25637C9.79615 2.2445 9.77404 2.20313 9.78592 2.16399L9.92615 1.70175ZM6.12417 14.4903C6.16332 14.5022 6.20469 14.4801 6.21656 14.441L6.35677 13.9787C6.36864 13.9396 6.34653 13.8982 6.30739 13.8863C6.26824 13.8744 6.22687 13.8965 6.215 13.9357L6.07479 14.398C6.06291 14.4371 6.08502 14.4785 6.12417 14.4903ZM14.5921 9.29287C14.6322 9.30085 14.6583 9.33985 14.6503 9.37997C14.6423 9.4201 14.6033 9.44615 14.5632 9.43817L13.4577 9.21829C13.4176 9.21031 13.3916 9.17131 13.3995 9.13119C13.4075 9.09107 13.4465 9.06501 13.4866 9.07299L14.5921 9.29287ZM1.49242 6.76272C1.48444 6.80284 1.5105 6.84184 1.55062 6.84982L2.65606 7.0697C2.69618 7.07768 2.73518 7.05162 2.74316 7.0115C2.75114 6.97137 2.72508 6.93238 2.68496 6.9244L1.57952 6.70452C1.5394 6.69654 1.5004 6.72259 1.49242 6.76272ZM14.441 9.92615C14.4801 9.93802 14.5022 9.97939 14.4903 10.0185C14.4785 10.0577 14.4371 10.0798 14.3979 10.0679L13.9357 9.92769C13.8965 9.91581 13.8744 9.87445 13.8863 9.8353C13.8982 9.79615 13.9396 9.77404 13.9787 9.78592L14.441 9.92615ZM1.65237 6.12415C1.64049 6.1633 1.6626 6.20467 1.70175 6.21654L2.16399 6.35677C2.20313 6.36864 2.2445 6.34654 2.25637 6.30739C2.26825 6.26824 2.24614 6.22688 2.20699 6.215L1.74476 6.07477C1.70561 6.0629 1.66425 6.08501 1.65237 6.12415ZM13.5459 4.32424C13.58 4.30151 13.626 4.31066 13.6487 4.34468C13.6714 4.37869 13.6623 4.42469 13.6282 4.44742L12.6911 5.0736C12.6571 5.09633 12.6111 5.08718 12.5884 5.05317C12.5656 5.01915 12.5748 4.97315 12.6088 4.95042L13.5459 4.32424ZM2.494 11.798C2.51673 11.832 2.56273 11.8412 2.59675 11.8184L3.53389 11.1923C3.56791 11.1695 3.57706 11.1235 3.55433 11.0895C3.5316 11.0555 3.4856 11.0464 3.45159 11.0691L2.51444 11.6953C2.48043 11.718 2.47128 11.764 2.494 11.798ZM13.8869 4.87888C13.923 4.8596 13.9678 4.87321 13.9871 4.90929C14.0064 4.94537 13.9928 4.99025 13.9567 5.00954L13.5307 5.23726C13.4946 5.25654 13.4497 5.24293 13.4305 5.20685C13.4112 5.17077 13.4248 5.12589 13.4609 5.1066L13.8869 4.87888ZM2.15557 11.2334C2.17486 11.2695 2.21974 11.2831 2.25582 11.2638L2.68183 11.0361C2.7179 11.0168 2.73152 10.9719 2.71223 10.9358C2.69295 10.8998 2.64806 10.8861 2.61199 10.9054L2.18598 11.1332C2.1499 11.1524 2.13628 11.1973 2.15557 11.2334ZM11.8184 13.5459C11.8412 13.58 11.832 13.626 11.798 13.6487C11.764 13.6714 11.718 13.6623 11.6953 13.6282L11.0691 12.6911C11.0464 12.6571 11.0555 12.6111 11.0895 12.5884C11.1235 12.5656 11.1695 12.5748 11.1923 12.6088L11.8184 13.5459ZM4.34468 2.494C4.31066 2.51673 4.30151 2.56273 4.32424 2.59675L4.95042 3.53389C4.97315 3.56791 5.01915 3.57706 5.05317 3.55433C5.08718 3.5316 5.09633 3.4856 5.0736 3.45159L4.44742 2.51444C4.42469 2.48043 4.37869 2.47128 4.34468 2.494ZM11.2638 13.8869C11.2831 13.923 11.2695 13.9678 11.2334 13.9871C11.1973 14.0064 11.1524 13.9928 11.1331 13.9567L10.9054 13.5307C10.8861 13.4946 10.8998 13.4497 10.9358 13.4305C10.9719 13.4112 11.0168 13.4248 11.0361 13.4609L11.2638 13.8869ZM4.90931 2.15557C4.87323 2.17485 4.85961 2.21974 4.8789 2.25581L5.1066 2.68182C5.12589 2.7179 5.17077 2.73152 5.20685 2.71223C5.24293 2.69295 5.25654 2.64807 5.23726 2.61199L5.00955 2.18598C4.99027 2.1499 4.94539 2.13628 4.90931 2.15557ZM11.6953 2.51444C11.718 2.48043 11.764 2.47128 11.798 2.494C11.832 2.51673 11.8412 2.56273 11.8184 2.59675L11.1923 3.53389C11.1695 3.56791 11.1235 3.57706 11.0895 3.55433C11.0555 3.5316 11.0464 3.4856 11.0691 3.45159L11.6953 2.51444ZM4.34468 13.6487C4.37869 13.6714 4.42469 13.6623 4.44742 13.6282L5.0736 12.6911C5.09633 12.6571 5.08718 12.6111 5.05317 12.5884C5.01915 12.5656 4.97315 12.5748 4.95042 12.6088L4.32424 13.5459C4.30151 13.58 4.31066 13.626 4.34468 13.6487ZM12.2225 2.8964C12.2484 2.86478 12.2951 2.86018 12.3267 2.88614C12.3584 2.91209 12.363 2.95876 12.337 2.99039L12.0306 3.36378C12.0046 3.3954 11.9579 3.4 11.9263 3.37404C11.8947 3.34809 11.8901 3.30142 11.916 3.26979L12.2225 2.8964ZM3.81595 13.2566C3.84757 13.2825 3.89425 13.2779 3.9202 13.2463L4.22664 12.8729C4.2526 12.8413 4.248 12.7946 4.21638 12.7686C4.18475 12.7427 4.13808 12.7473 4.11212 12.7789L3.80568 13.1523C3.77973 13.1839 3.78433 13.2306 3.81595 13.2566ZM13.6282 11.6953C13.6623 11.718 13.6714 11.764 13.6487 11.798C13.626 11.832 13.58 11.8412 13.5459 11.8184L12.6088 11.1923C12.5748 11.1695 12.5656 11.1235 12.5884 11.0895C12.6111 11.0555 12.6571 11.0464 12.6911 11.0691L13.6282 11.6953ZM2.494 4.34468C2.47128 4.37869 2.48043 4.42469 2.51444 4.44742L3.45159 5.0736C3.4856 5.09633 3.5316 5.08718 3.55433 5.05317C3.57706 5.01915 3.56791 4.97315 3.53389 4.95042L2.59675 4.32424C2.56273 4.30151 2.51673 4.31066 2.494 4.34468ZM13.2463 12.2225C13.2779 12.2484 13.2825 12.2951 13.2566 12.3267C13.2306 12.3584 13.1839 12.363 13.1523 12.337L12.7789 12.0306C12.7473 12.0046 12.7427 11.9579 12.7686 11.9263C12.7946 11.8947 12.8413 11.8901 12.8729 11.916L13.2463 12.2225ZM2.88614 3.81595C2.86018 3.84757 2.86478 3.89425 2.8964 3.9202L3.26979 4.22664C3.30142 4.2526 3.34809 4.248 3.37404 4.21638C3.4 4.18475 3.3954 4.13808 3.36378 4.11212L2.99039 3.80568C2.95876 3.77973 2.91209 3.78433 2.88614 3.81595ZM14.5632 6.70452C14.6033 6.69654 14.6423 6.72259 14.6503 6.76272C14.6583 6.80284 14.6322 6.84184 14.5921 6.84982L13.4866 7.0697C13.4465 7.07768 13.4075 7.05162 13.3995 7.0115C13.3916 6.97137 13.4176 6.93238 13.4577 6.9244L14.5632 6.70452ZM1.49242 9.37997C1.5004 9.4201 1.5394 9.44615 1.57952 9.43817L2.68496 9.21829C2.72508 9.21031 2.75114 9.17131 2.74316 9.13119C2.73518 9.09107 2.69618 9.06501 2.65606 9.07299L1.55062 9.29287C1.5105 9.30085 1.48444 9.33985 1.49242 9.37997ZM14.6657 7.34742C14.7064 7.34333 14.7428 7.37301 14.7468 7.41372C14.7509 7.45442 14.7213 7.49074 14.6806 7.49483L14.1998 7.54313C14.1591 7.54722 14.1228 7.51754 14.1187 7.47683C14.1146 7.43613 14.1443 7.39982 14.185 7.39573L14.6657 7.34742ZM1.39584 8.72994C1.39993 8.77064 1.43625 8.80032 1.47695 8.79623L1.95766 8.74793C1.99836 8.74384 2.02804 8.70752 2.02395 8.66682C2.01986 8.62612 1.98355 8.59643 1.94284 8.60052L1.46214 8.64883C1.42143 8.65292 1.39175 8.68923 1.39584 8.72994ZM9.43817 14.5632C9.44615 14.6033 9.4201 14.6423 9.37997 14.6503C9.33985 14.6583 9.30085 14.6322 9.29287 14.5921L9.07299 13.4866C9.06501 13.4465 9.09107 13.4075 9.13119 13.3995C9.17131 13.3916 9.21031 13.4176 9.21829 13.4577L9.43817 14.5632ZM6.76272 1.49242C6.72259 1.5004 6.69654 1.5394 6.70452 1.57952L6.9244 2.68496C6.93238 2.72508 6.97137 2.75114 7.0115 2.74316C7.05162 2.73518 7.07768 2.69618 7.0697 2.65606L6.84982 1.55062C6.84184 1.5105 6.80284 1.48444 6.76272 1.49242ZM8.79623 14.6657C8.80032 14.7064 8.77064 14.7428 8.72994 14.7468C8.68923 14.7509 8.65292 14.7213 8.64883 14.6806L8.60052 14.1998C8.59643 14.1591 8.62612 14.1228 8.66682 14.1187C8.70752 14.1146 8.74384 14.1443 8.74793 14.185L8.79623 14.6657ZM7.41372 1.39584C7.37301 1.39993 7.34333 1.43625 7.34742 1.47695L7.39573 1.95766C7.39982 1.99836 7.43613 2.02804 7.47683 2.02395C7.51754 2.01986 7.54722 1.98355 7.54313 1.94284L7.49483 1.46214C7.49074 1.42143 7.45442 1.39175 7.41372 1.39584Z",
            fill: "#DDDDDD",
          }),
          a.createElement("path", {
            d: "M3.14941 12.8505L7.29562 7.28674L7.99989 7.99218L3.14941 12.8505Z",
            fill: "#DDDDDD",
          }),
          a.createElement("path", {
            d: "M7.28662 7.29574L12.8504 3.14954L7.99204 8.00002L7.28662 7.29574Z",
            fill: "#EE4444",
          }),
          a.createElement("path", {
            d: "M12.8505 3.14954L8.70427 8.71332L8 8.00789L12.8505 3.14954Z",
            fill: "#CC0000",
          }),
          a.createElement("path", {
            d: "M3.14941 12.8505L8.7132 8.70427L8.00777 8L3.14941 12.8505Z",
            fill: "#AAAAAA",
          }),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "linearGradient",
              {
                id: "paint0_linear_466_21186",
                x1: "0.300303",
                y1: "0.300951",
                x2: "0.300303",
                y2: "15.7084",
                gradientUnits: "userSpaceOnUse",
              },
              a.createElement("stop", { stopColor: "#F8F8F8" }),
              a.createElement("stop", { offset: "1", stopColor: "#CCCCCC" }),
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint1_radial_466_21186",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(8.00216 8.0046) scale(7.06173)",
              },
              a.createElement("stop", { stopColor: "#00F0FF" }),
              a.createElement("stop", { offset: "1", stopColor: "#0070E0" }),
            ),
          ),
        ),
      H1 = {
        CHROME: a.createElement(w6, { alt: "Chrome" }),
        FIREFOX: a.createElement(S6, { alt: "Firefox" }),
        SAFARI: a.createElement(x6, { alt: "Safari" }),
        EDGE: a.createElement(C6, { alt: "Edge" }),
      },
      N6 = w.div(({ theme: e }) => ({
        alignItems: "center",
        color: e.base === "light" ? e.color.dark : e.color.light,
        display: "inline-flex",
        gap: 6,
        height: 16,
        margin: "6px 7px",
        svg: { verticalAlign: "top" },
      })),
      j1 = w.span(({ theme: e }) => ({
        color: e.base === "light" ? e.color.dark : e.color.light,
        display: "none",
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        "@container (min-width: 300px)": { display: "inline-block" },
        "+ svg": { color: e.base === "light" ? e.color.dark : e.color.light },
        "button:hover > &, button:hover > & + svg": { color: e.color.secondary },
      })),
      M6 = ({ isAccepted: e, selectedBrowser: t, browserResults: n, onSelectBrowser: r }) => {
        Ut();
        let i = Sr(n.map(({ result: s }) => s));
        if (!i) return null;
        let l = H1[t.key];
        !e && i !== "EQUAL" && n.length >= 2 && (l = a.createElement(sr, { status: i }, l));
        let o =
          n.length > 1 &&
          n.map(({ browser: s, result: c }) => ({
            active: t === s,
            id: s.id,
            onClick: () => r(s),
            right: !e && c !== "EQUAL" && a.createElement(Ps, { status: c }),
            icon: H1[s.key],
            title: s.name,
          }));
        return a.createElement(
          we,
          {
            key: t.key,
            hasChrome: !1,
            placement: "top",
            trigger: "hover",
            tooltip: a.createElement(_e, {
              note: o ? "Switch browser" : `Tested in ${n[0].browser.name}`,
            }),
          },
          o
            ? a.createElement(
                ia,
                { placement: "bottom", links: o },
                l,
                a.createElement(j1, null, t.name),
                a.createElement(ds, { size: 10 }),
              )
            : a.createElement(N6, null, l, a.createElement(j1, null, t.name)),
        );
      },
      A6 = w.div(({ theme: e }) => ({
        alignItems: "center",
        color: e.base === "light" ? e.color.darkest : e.color.light,
        display: "inline-flex",
        gap: 6,
        height: 14,
        margin: "7px 7px",
        svg: {
          verticalAlign: "top",
          path: { fill: e.base === "light" ? e.color.dark : e.color.light },
        },
      })),
      _6 = w(ia)(({ theme: e }) => ({
        button: {
          svg: {
            verticalAlign: "top",
            path: { fill: e.base === "light" ? e.color.dark : e.color.light },
          },
          "&:hover": { svg: { path: { fill: e.color.secondary } } },
        },
      })),
      z1 = w.span(({ theme: e }) => ({
        color: e.base === "light" ? e.color.dark : e.color.light,
        display: "none",
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        "@container (min-width: 300px)": { display: "inline-block" },
        "button:hover > &": { color: e.color.secondary },
      })),
      T6 = ({ isAccepted: e, modeOrder: t, modeResults: n, onSelectMode: r, selectedMode: i }) => {
        Ut();
        let l = Sr(n.map(({ result: c }) => c));
        if (!l) return null;
        let o = a.createElement(Q5, null);
        !e && l !== "EQUAL" && n.length >= 2 && (o = a.createElement(sr, { status: l }, o));
        let s =
          n.length > 1 &&
          n
            .map(({ mode: c, result: d }) => ({
              id: c.name,
              title: c.name,
              right: !e && d !== "EQUAL" && a.createElement(Ps, { status: d }),
              onClick: () => r(c),
              active: i.name === c.name,
            }))
            .sort((c, d) => {
              if (!t) return 0;
              let m = t.indexOf(c.title),
                u = t.indexOf(d.title);
              return m !== -1 && u !== -1 ? m - u : 0;
            });
        return a.createElement(
          we,
          {
            key: i.name,
            hasChrome: !1,
            placement: "top",
            trigger: "hover",
            tooltip: a.createElement(_e, {
              note: s ? "Switch mode" : `View mode: ${n[0].mode.name}`,
            }),
          },
          s
            ? a.createElement(
                _6,
                { placement: "bottom", links: s },
                o,
                a.createElement(z1, null, i.name),
                a.createElement(ds, { size: 10 }),
              )
            : a.createElement(A6, null, o, a.createElement(z1, null, i.name)),
        );
      },
      U1 = () => {
        let e = on(),
          { browserResults: t, modeResults: n } = e.summary;
        return a.createElement(
          Ir,
          null,
          n.length > 0 &&
            e.selectedTest &&
            a.createElement(T6, {
              isAccepted: e.summary.status === "ACCEPTED",
              modeOrder: e.modeOrder,
              selectedMode: e.selectedTest.mode,
              modeResults: n,
              onSelectMode: e.onSelectMode,
            }),
          t.length > 0 &&
            e.selectedComparison &&
            a.createElement(M6, {
              isAccepted: e.summary.status === "ACCEPTED",
              selectedBrowser: e.selectedComparison.browser,
              browserResults: t,
              onSelectBrowser: e.onSelectBrowser,
            }),
          a.createElement(Xe, { push: !0 }, a.createElement(Rr, null)),
        );
      },
      F6 = ({ theme: e, status: t, variant: n }) =>
        n === "outline"
          ? {
              color: e.base === "light" ? e.color.dark : e.color.medium,
              backgroundColor: e.background.app,
              borderColor: e.base === "light" ? e.color.medium : e.color.darker,
              "&:hover": {
                color: e.base === "light" ? e.color.darkest : e.color.lighter,
                backgroundColor: Gt(0.03, e.background.app),
              },
            }
          : t === "positive"
            ? {
                color: e.color.positiveText,
                backgroundColor: e.background.positive,
                borderColor: qa(0.5, e.color.positiveText),
                "&:hover": {
                  color: e.color.positiveText,
                  backgroundColor: Gt(0.05, e.background.positive),
                },
              }
            : t === "warning"
              ? {
                  color: e.color.warningText,
                  backgroundColor: e.background.warning,
                  borderColor: qa(0.5, e.color.warningText),
                  "&:hover": {
                    color: e.color.warningText,
                    backgroundColor: Gt(0.05, e.background.warning),
                  },
                }
              : {
                  color: e.color.lightest,
                  backgroundColor: e.color.secondary,
                  borderWidth: 0,
                  borderColor:
                    e.base === "light" ? qa(0.2, e.color.secondary) : Gt(0.1, e.color.secondary),
                  "&:hover": {
                    color: e.color.lightest,
                    backgroundColor: Gt(0.05, e.color.secondary),
                  },
                },
      fn = w(Je)(
        ({ square: e }) => ({
          border: "1px solid transparent",
          boxShadow: "none",
          fontSize: 12,
          fontWeight: 700,
          height: 28,
          padding: e ? "8px 6px" : 8,
          transition: "background-color 150ms ease-out",
          "@container (min-width: 300px)": {
            height: 32,
            width: e ? 32 : "auto",
            padding: e ? "9px 8px" : 9,
          },
          "@container (min-width: 800px)": {
            height: 28,
            fontSize: 12,
            width: e ? 28 : "auto",
            padding: e ? "8px 6px" : 8,
          },
        }),
        F6,
        ({ side: e }) => ({
          ...(e === "left" && {
            borderRightWidth: 1,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }),
          ...(e === "right" && {
            borderLeftWidth: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }),
        }),
      ),
      $1 = w.div({ display: "flex", flexDirection: "row" }),
      xr = w.div(
        ({ theme: e }) => ({
          width: 12,
          height: 12,
          margin: "3px 6px",
          verticalAlign: "top",
          display: "inline-block",
          animation: `${Rs} 0.7s linear infinite`,
          border: "2px solid transparent",
          borderLeftColor: e.base === "light" ? "#00aaff" : "#58faf9",
          borderBottomColor: "#25ccfd",
          borderRightColor: e.base === "light" ? "#58faf9" : "#00aaff",
          borderRadius: "100%",
          transform: "translate3d(0, 0, 0)",
        }),
        ({ parentComponent: e }) =>
          e &&
          ue({
            margin: e === "IconButton" ? 1 : 0,
            borderWidth: 1,
            borderLeftColor: "currentcolor",
            borderBottomColor: "currentcolor",
            borderRightColor: "currentcolor",
          }),
      ),
      xi = w.div(
        ({ theme: e, width: t = 14, height: n = 14, marginLeft: r = 7, marginRight: i = 8 }) => ({
          display: "inline-block",
          backgroundColor: e.appBorderColor,
          borderRadius: 3,
          animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
          height: n,
          width: t,
          margin: 7,
          marginLeft: r,
          marginRight: i,
        }),
      ),
      O6 = w.div(({ theme: e }) => ({
        gridArea: "label",
        margin: "8px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 6,
        span: { display: "none", "@container (min-width: 300px)": { display: "initial" } },
        "@container (min-width: 800px)": {
          borderLeft: `1px solid ${e.appBorderColor}`,
          paddingLeft: 10,
          marginLeft: 0,
        },
      })),
      W1 = w.div({
        gridArea: "controls",
        margin: "6px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 6,
        "@container (min-width: 800px)": { margin: 8 },
      }),
      L6 = w.div(({ theme: e }) => ({
        padding: 9,
        "> svg": { display: "block" },
        path: { fill: e.color.mediumdark },
      })),
      R6 = w.div(({ theme: e, showDivider: t }) => ({
        gridArea: "actions",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: "0px 15px",
        gap: 6,
        "@container (min-width: 300px)": { alignItems: "flex-start", margin: "15px 15px 15px 0px" },
        "@container (min-width: 800px)": {
          alignItems: "center",
          borderLeft: t ? `1px solid ${e.appBorderColor}` : "none",
          margin: "8px 15px 8px 0px",
          paddingLeft: 8,
        },
      })),
      I6 = ({ isOutdated: e }) => {
        let { baselineImageVisible: t, diffVisible: n, focusVisible: r } = Lr(),
          { toggleBaselineImage: i, toggleDiff: l, toggleFocus: o } = _n(),
          { isRunning: s, startBuild: c } = ka(),
          { selectedTest: d, selectedComparison: m, summary: u } = on(),
          { changeCount: p, isInProgress: f } = u,
          {
            isReviewing: g,
            buildIsReviewable: y,
            userCanReview: k,
            acceptTest: E,
            unacceptTest: h,
          } = X0();
        if (f)
          return a.createElement(
            W1,
            null,
            a.createElement(xi, null),
            a.createElement(xi, null),
            a.createElement(xi, null),
          );
        let v = p > 0 && d?.status !== "ACCEPTED",
          b = p > 0 && d?.status === "ACCEPTED",
          C = m?.result === "CHANGED";
        return a.createElement(
          a.Fragment,
          null,
          C &&
            a.createElement(
              O6,
              null,
              a.createElement(
                j,
                null,
                a.createElement(
                  "b",
                  null,
                  t ? "Baseline" : "Latest",
                  a.createElement("span", null, " snapshot"),
                ),
              ),
            ),
          C &&
            a.createElement(
              W1,
              null,
              a.createElement(
                we,
                {
                  tooltip: a.createElement(_e, {
                    note: t ? "Show latest snapshot" : "Show baseline snapshot",
                  }),
                  trigger: "hover",
                  hasChrome: !1,
                },
                a.createElement(
                  Je,
                  {
                    id: "button-toggle-snapshot",
                    "aria-label": t ? "Show latest snapshot" : "Show baseline snapshot",
                    onClick: () => i(),
                  },
                  a.createElement(tu, null),
                ),
              ),
              a.createElement(
                we,
                {
                  tooltip: a.createElement(_e, { note: r ? "Hide spotlight" : "Show spotlight" }),
                  trigger: "hover",
                  hasChrome: !1,
                },
                a.createElement(
                  Je,
                  {
                    id: "button-toggle-spotlight",
                    active: r,
                    "aria-label": r ? "Hide spotlight" : "Show spotlight",
                    onClick: () => o(!r),
                  },
                  a.createElement(au, null),
                ),
              ),
              a.createElement(
                we,
                {
                  tooltip: a.createElement(_e, { note: n ? "Hide diff" : "Show diff" }),
                  trigger: "hover",
                  hasChrome: !1,
                },
                a.createElement(
                  Je,
                  {
                    id: "button-diff-visible",
                    active: n,
                    "aria-label": n ? "Hide diff" : "Show diff",
                    onClick: () => l(!n),
                  },
                  a.createElement(is, null),
                ),
              ),
            ),
          (v || b) &&
            a.createElement(
              R6,
              { showDivider: C },
              k &&
                y &&
                v &&
                d &&
                a.createElement(
                  $1,
                  null,
                  a.createElement(
                    we,
                    {
                      tooltip: a.createElement(_e, { note: "Accept this story" }),
                      trigger: "hover",
                      hasChrome: !1,
                    },
                    a.createElement(
                      fn,
                      {
                        id: "button-toggle-accept-story",
                        disabled: g,
                        "aria-label": "Accept this story",
                        onClick: () => E(d.id, "SPEC"),
                        side: "left",
                      },
                      "Accept",
                    ),
                  ),
                  a.createElement(
                    we,
                    {
                      tooltip: a.createElement(_e, { note: "Batch accept options" }),
                      trigger: "hover",
                      hasChrome: !1,
                    },
                    a.createElement(
                      ia,
                      {
                        placement: "bottom",
                        links: [
                          {
                            id: "acceptComponent",
                            title: "Accept component",
                            center: "Accept all unreviewed changes for this component",
                            onClick: () => E(d.id, "COMPONENT"),
                            disabled: g,
                            loading: g,
                          },
                          {
                            id: "acceptBuild",
                            title: "Accept entire build",
                            center:
                              "Accept all unreviewed changes for every story in the Storybook",
                            onClick: () => E(d.id, "BUILD"),
                            disabled: g,
                            loading: g,
                          },
                        ],
                      },
                      O =>
                        a.createElement(
                          fn,
                          {
                            square: !0,
                            active: O,
                            disabled: g,
                            "aria-label": "Batch accept options",
                            side: "right",
                          },
                          g
                            ? a.createElement(xr, { parentComponent: "IconButton" })
                            : a.createElement(wo, null),
                        ),
                    ),
                  ),
                ),
              k &&
                y &&
                b &&
                a.createElement(
                  $1,
                  null,
                  a.createElement(
                    we,
                    {
                      tooltip: a.createElement(_e, { note: "Unaccept this story" }),
                      trigger: "hover",
                      hasChrome: !1,
                    },
                    a.createElement(
                      fn,
                      {
                        id: "button-toggle-accept-story",
                        disabled: g,
                        "aria-label": "Unaccept this story",
                        onClick: () => h(d.id, "SPEC"),
                        side: "left",
                        status: "positive",
                      },
                      a.createElement(nu, null),
                      "Unaccept",
                    ),
                  ),
                  a.createElement(
                    we,
                    {
                      tooltip: a.createElement(_e, { note: "Batch unaccept options" }),
                      trigger: "hover",
                      hasChrome: !1,
                    },
                    a.createElement(
                      ia,
                      {
                        placement: "bottom",
                        links: [
                          {
                            id: "unacceptComponent",
                            title: "Unaccept component",
                            center: "Unaccept all unreviewed changes for this component",
                            onClick: () => h(d.id, "COMPONENT"),
                            disabled: g,
                            loading: g,
                          },
                          {
                            id: "unacceptBuild",
                            title: "Unaccept entire build",
                            center:
                              "Unaccept all unreviewed changes for every story in the Storybook",
                            onClick: () => h(d.id, "BUILD"),
                            disabled: g,
                            loading: g,
                          },
                        ],
                      },
                      O =>
                        a.createElement(
                          fn,
                          {
                            square: !0,
                            active: O,
                            disabled: g,
                            "aria-label": "Batch unaccept options",
                            side: "right",
                            status: "positive",
                          },
                          g
                            ? a.createElement(xr, { parentComponent: "IconButton" })
                            : a.createElement(wo, null),
                        ),
                    ),
                  ),
                ),
              !(k && y) &&
                a.createElement(
                  we,
                  {
                    tooltip: a.createElement(_e, { note: "Reviewing disabled" }),
                    trigger: "hover",
                    hasChrome: !1,
                  },
                  a.createElement(L6, null, a.createElement(os, null)),
                ),
              a.createElement(
                we,
                {
                  tooltip: a.createElement(_e, { note: e ? "Run new tests" : "Rerun tests" }),
                  trigger: "hover",
                  hasChrome: !1,
                },
                a.createElement(
                  fn,
                  {
                    square: !0,
                    "aria-label": e ? "Run new tests" : "Rerun tests",
                    onClick: c,
                    disabled: s,
                    variant: "outline",
                  },
                  e ? a.createElement(Zt, null) : a.createElement(us, null),
                ),
              ),
            ),
        );
      },
      $a = et(ya()),
      Z6 = e =>
        a.createElement(
          "svg",
          {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: { margin: "3px 6px", verticalAlign: "top" },
            ...e,
          },
          a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.57143 6.85714C5.57143 7.09384 5.76331 7.28571 6 7.28571C6.23669 7.28571 6.42857 7.09384 6.42857 6.85714L6.42857 3.42857C6.42857 3.19188 6.23669 3 6 3C5.76331 3 5.57143 3.19188 5.57143 3.42857V6.85714ZM5.35714 8.78572C5.35714 8.43067 5.64496 8.14286 6 8.14286C6.35504 8.14286 6.64286 8.43067 6.64286 8.78571C6.64286 9.14075 6.35504 9.42857 6 9.42857C5.64496 9.42857 5.35714 9.14075 5.35714 8.78572Z",
            fill: "#73828C",
          }),
        ),
      Ni = { width: 12, height: 12, margin: "3px 3px 3px 6px", verticalAlign: "top" },
      B6 = ({ icon: e }) => {
        let { color: t } = Ut();
        return {
          passed: a.createElement(Li, { style: { ...Ni, color: t.positive } }),
          changed: a.createElement(W5, { style: { ...Ni, color: t.warning } }),
          failed: a.createElement(xt, { style: { ...Ni, color: t.negative } }),
        }[e];
      };
    function cl(e) {
      "@babel/helpers - typeof";
      return (
        (cl =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        cl(e)
      );
    }
    function Ur(e, t) {
      if (t.length < e)
        throw new TypeError(
          e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present",
        );
    }
    function gn(e) {
      Ur(1, arguments);
      var t = Object.prototype.toString.call(e);
      return e instanceof Date || (cl(e) === "object" && t === "[object Date]")
        ? new Date(e.getTime())
        : typeof e == "number" || t === "[object Number]"
          ? new Date(e)
          : ((typeof e == "string" || t === "[object String]") &&
              typeof console < "u" &&
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
    }
    var P6 = {};
    function V6() {
      return P6;
    }
    function G1(e) {
      var t = new Date(
        Date.UTC(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          e.getHours(),
          e.getMinutes(),
          e.getSeconds(),
          e.getMilliseconds(),
        ),
      );
      return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
    }
    function D6(e, t) {
      Ur(2, arguments);
      var n = gn(e),
        r = gn(t),
        i = n.getTime() - r.getTime();
      return i < 0 ? -1 : i > 0 ? 1 : i;
    }
    var H6 = {
        lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      },
      j6 = function (e, t, n) {
        var r,
          i = H6[e];
        return (
          typeof i == "string"
            ? (r = i)
            : t === 1
              ? (r = i.one)
              : (r = i.other.replace("{{count}}", t.toString())),
          n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? "in " + r : r + " ago") : r
        );
      },
      z6 = j6;
    function Mi(e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          n = t.width ? String(t.width) : e.defaultWidth,
          r = e.formats[n] || e.formats[e.defaultWidth];
        return r;
      };
    }
    var U6 = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy",
      },
      $6 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
      W6 = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}",
      },
      G6 = {
        date: Mi({ formats: U6, defaultWidth: "full" }),
        time: Mi({ formats: $6, defaultWidth: "full" }),
        dateTime: Mi({ formats: W6, defaultWidth: "full" }),
      },
      q6 = G6,
      Y6 = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      },
      Q6 = function (e, t, n, r) {
        return Y6[e];
      },
      K6 = Q6;
    function Wn(e) {
      return function (t, n) {
        var r = n != null && n.context ? String(n.context) : "standalone",
          i;
        if (r === "formatting" && e.formattingValues) {
          var l = e.defaultFormattingWidth || e.defaultWidth,
            o = n != null && n.width ? String(n.width) : l;
          i = e.formattingValues[o] || e.formattingValues[l];
        } else {
          var s = e.defaultWidth,
            c = n != null && n.width ? String(n.width) : e.defaultWidth;
          i = e.values[c] || e.values[s];
        }
        var d = e.argumentCallback ? e.argumentCallback(t) : t;
        return i[d];
      };
    }
    var J6 = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"],
      },
      X6 = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
      },
      ef = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        wide: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      tf = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      },
      nf = {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
      },
      af = {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
      },
      rf = function (e, t) {
        var n = Number(e),
          r = n % 100;
        if (r > 20 || r < 10)
          switch (r % 10) {
            case 1:
              return n + "st";
            case 2:
              return n + "nd";
            case 3:
              return n + "rd";
          }
        return n + "th";
      },
      lf = {
        ordinalNumber: rf,
        era: Wn({ values: J6, defaultWidth: "wide" }),
        quarter: Wn({
          values: X6,
          defaultWidth: "wide",
          argumentCallback: function (e) {
            return e - 1;
          },
        }),
        month: Wn({ values: ef, defaultWidth: "wide" }),
        day: Wn({ values: tf, defaultWidth: "wide" }),
        dayPeriod: Wn({
          values: nf,
          defaultWidth: "wide",
          formattingValues: af,
          defaultFormattingWidth: "wide",
        }),
      },
      of = lf;
    function Gn(e) {
      return function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = n.width,
          i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
          l = t.match(i);
        if (!l) return null;
        var o = l[0],
          s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
          c = Array.isArray(s)
            ? cf(s, function (u) {
                return u.test(o);
              })
            : sf(s, function (u) {
                return u.test(o);
              }),
          d;
        (d = e.valueCallback ? e.valueCallback(c) : c),
          (d = n.valueCallback ? n.valueCallback(d) : d);
        var m = t.slice(o.length);
        return { value: d, rest: m };
      };
    }
    function sf(e, t) {
      for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
    }
    function cf(e, t) {
      for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
    }
    function df(e) {
      return function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.match(e.matchPattern);
        if (!r) return null;
        var i = r[0],
          l = t.match(e.parsePattern);
        if (!l) return null;
        var o = e.valueCallback ? e.valueCallback(l[0]) : l[0];
        o = n.valueCallback ? n.valueCallback(o) : o;
        var s = t.slice(i.length);
        return { value: o, rest: s };
      };
    }
    var uf = /^(\d+)(th|st|nd|rd)?/i,
      mf = /\d+/i,
      pf = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
      },
      hf = { any: [/^b/i, /^(a|c)/i] },
      ff = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
      gf = { any: [/1/i, /2/i, /3/i, /4/i] },
      vf = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      },
      yf = {
        narrow: [
          /^j/i,
          /^f/i,
          /^m/i,
          /^a/i,
          /^m/i,
          /^j/i,
          /^j/i,
          /^a/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
        any: [
          /^ja/i,
          /^f/i,
          /^mar/i,
          /^ap/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^au/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
      },
      Ef = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
      },
      bf = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
      },
      kf = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
      },
      wf = {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i,
        },
      },
      Cf = {
        ordinalNumber: df({
          matchPattern: uf,
          parsePattern: mf,
          valueCallback: function (e) {
            return parseInt(e, 10);
          },
        }),
        era: Gn({
          matchPatterns: pf,
          defaultMatchWidth: "wide",
          parsePatterns: hf,
          defaultParseWidth: "any",
        }),
        quarter: Gn({
          matchPatterns: ff,
          defaultMatchWidth: "wide",
          parsePatterns: gf,
          defaultParseWidth: "any",
          valueCallback: function (e) {
            return e + 1;
          },
        }),
        month: Gn({
          matchPatterns: vf,
          defaultMatchWidth: "wide",
          parsePatterns: yf,
          defaultParseWidth: "any",
        }),
        day: Gn({
          matchPatterns: Ef,
          defaultMatchWidth: "wide",
          parsePatterns: bf,
          defaultParseWidth: "any",
        }),
        dayPeriod: Gn({
          matchPatterns: kf,
          defaultMatchWidth: "any",
          parsePatterns: wf,
          defaultParseWidth: "any",
        }),
      },
      Sf = Cf,
      xf = {
        code: "en-US",
        formatDistance: z6,
        formatLong: q6,
        formatRelative: K6,
        localize: of,
        match: Sf,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
      ec = xf,
      Nf = ec;
    function tc(e, t) {
      if (e == null)
        throw new TypeError("assign requires that input parameter not be null or undefined");
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e;
    }
    function Mf(e) {
      return tc({}, e);
    }
    var q1 = 1e3 * 60,
      Nr = 60 * 24,
      Y1 = Nr * 30,
      Q1 = Nr * 365;
    function Af(e, t, n) {
      var r, i, l;
      Ur(2, arguments);
      var o = V6(),
        s =
          (r = (i = n?.locale) !== null && i !== void 0 ? i : o.locale) !== null && r !== void 0
            ? r
            : Nf;
      if (!s.formatDistance)
        throw new RangeError("locale must contain localize.formatDistance property");
      var c = D6(e, t);
      if (isNaN(c)) throw new RangeError("Invalid time value");
      var d = tc(Mf(n), { addSuffix: !!n?.addSuffix, comparison: c }),
        m,
        u;
      c > 0 ? ((m = gn(t)), (u = gn(e))) : ((m = gn(e)), (u = gn(t)));
      var p = String((l = n?.roundingMethod) !== null && l !== void 0 ? l : "round"),
        f;
      if (p === "floor") f = Math.floor;
      else if (p === "ceil") f = Math.ceil;
      else if (p === "round") f = Math.round;
      else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
      var g = u.getTime() - m.getTime(),
        y = g / q1,
        k = G1(u) - G1(m),
        E = (g - k) / q1,
        h = n?.unit,
        v;
      if (
        (h
          ? (v = String(h))
          : y < 1
            ? (v = "second")
            : y < 60
              ? (v = "minute")
              : y < Nr
                ? (v = "hour")
                : E < Y1
                  ? (v = "day")
                  : E < Q1
                    ? (v = "month")
                    : (v = "year"),
        v === "second")
      ) {
        var b = f(g / 1e3);
        return s.formatDistance("xSeconds", b, d);
      } else if (v === "minute") {
        var C = f(y);
        return s.formatDistance("xMinutes", C, d);
      } else if (v === "hour") {
        var O = f(y / 60);
        return s.formatDistance("xHours", O, d);
      } else if (v === "day") {
        var I = f(E / Nr);
        return s.formatDistance("xDays", I, d);
      } else if (v === "month") {
        var U = f(E / Y1);
        return U === 12 && h !== "month"
          ? s.formatDistance("xYears", 1, d)
          : s.formatDistance("xMonths", U, d);
      } else if (v === "year") {
        var G = f(E / Q1);
        return s.formatDistance("xYears", G, d);
      }
      throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
    }
    function _f(e, t) {
      return Ur(1, arguments), Af(e, Date.now(), t);
    }
    var Tf = {
      lessThanXSeconds: "just now",
      xSeconds: "just now",
      halfAMinute: "just now",
      lessThanXMinutes: "{{count}}m",
      xMinutes: "{{count}}m",
      aboutXHours: "{{count}}h",
      xHours: "{{count}}h",
      xDays: "{{count}}d",
      aboutXWeeks: "{{count}}w",
      xWeeks: "{{count}}w",
      aboutXMonths: "{{count}}mo",
      xMonths: "{{count}}mo",
      aboutXYears: "{{count}}y",
      xYears: "{{count}}y",
      overXYears: "{{count}}y",
      almostXYears: "{{count}}y",
    };
    function Ff(e, t, n = { addSuffix: !1, comparison: 0 }) {
      let r = Tf[e].replace("{{count}}", t);
      return ["lessThanXSeconds", "xSeconds", "halfAMinute"].includes(e)
        ? `${r}`
        : n.addSuffix
          ? n.comparison > 0
            ? `in ${r}`
            : `${r} ago`
          : r;
    }
    var Of = e => _f(e, { addSuffix: !0, locale: { ...ec, formatDistance: Ff } }),
      qn = w.div(({ theme: e }) => ({
        gridArea: "info",
        display: "flex",
        justifySelf: "start",
        justifyContent: "center",
        flexDirection: "column",
        margin: 15,
        lineHeight: "18px",
        color: e.base === "light" ? `${e.color.defaultText}99` : `${e.color.light}99`,
        b: { color: e.base === "light" ? `${e.color.defaultText}` : `${e.color.light}` },
        small: { fontSize: e.typography.size.s1 },
        "@container (min-width: 800px)": {
          margin: "6px 10px 6px 15px",
          alignItems: "center",
          flexDirection: "row",
          small: { fontSize: "inherit" },
          "[data-hidden-large]": { display: "none" },
          "& > span:first-of-type": {
            display: "inline-flex",
            alignItems: "center",
            height: 24,
            marginRight: 6,
          },
        },
      })),
      Lf = w.div({
        gridArea: "actions",
        display: "flex",
        justifySelf: "end",
        justifyContent: "center",
        alignItems: "start",
        margin: 15,
        "@container (min-width: 800px)": { margin: "6px 15px 0 0" },
      }),
      Rf = ({
        isStarting: e,
        tests: t,
        startedAt: n,
        isBuildFailed: r,
        isOutdated: i,
        shouldSwitchToLastBuildOnBranch: l,
        switchToLastBuildOnBranch: o,
      }) => {
        let { isRunning: s, startBuild: c } = ka(),
          {
            status: d,
            isInProgress: m,
            changeCount: u,
            brokenCount: p,
            modeResults: f,
            browserResults: g,
          } = $l(t ?? []),
          y = !e && n && Of(new Date(n).getTime()),
          k = e || m,
          E = r || d === "FAILED",
          h = E || d === "BROKEN",
          v = (h || i) && !k && !u,
          b;
        return (
          i
            ? (b = a.createElement(
                qn,
                null,
                a.createElement("span", null, a.createElement("b", null, "Code edits detected")),
                a.createElement(
                  "small",
                  null,
                  a.createElement("span", null, "Run tests to see what changed"),
                ),
              ))
            : E
              ? (b = a.createElement(
                  qn,
                  null,
                  a.createElement(
                    "span",
                    null,
                    a.createElement("b", null, "Build failed"),
                    a.createElement(Z6, null),
                  ),
                  a.createElement(
                    "small",
                    null,
                    a.createElement("span", null, "An infrastructure error occured"),
                  ),
                ))
              : k
                ? (b = a.createElement(
                    qn,
                    null,
                    a.createElement(
                      "span",
                      null,
                      a.createElement("b", null, "Running tests..."),
                      a.createElement(xr, null),
                    ),
                    a.createElement(
                      "small",
                      null,
                      a.createElement("span", null, "Test in progress..."),
                    ),
                  ))
                : l
                  ? (b = a.createElement(
                      qn,
                      null,
                      a.createElement(
                        "span",
                        null,
                        a.createElement(
                          "b",
                          null,
                          a.createElement($t, { isButton: !0, onClick: o }, "View latest snapshot"),
                        ),
                      ),
                      a.createElement(
                        "span",
                        null,
                        "Newer test results are available for this story",
                      ),
                    ))
                  : (b = a.createElement(
                      qn,
                      null,
                      a.createElement(
                        "span",
                        null,
                        a.createElement(
                          "b",
                          null,
                          p
                            ? null
                            : u
                              ? `${(0, $a.default)("change", u, !0)}${d === "ACCEPTED" ? " accepted" : ""}`
                              : "No changes",
                          p ? (0, $a.default)("error", p, !0) : null,
                        ),
                        a.createElement(B6, {
                          icon: p ? "failed" : d === "PENDING" ? "changed" : "passed",
                        }),
                      ),
                      a.createElement(
                        "small",
                        null,
                        f.length > 0 &&
                          a.createElement(
                            "span",
                            { "data-hidden-large": !0 },
                            (0, $a.default)("mode", f.length, !0),
                            ", ",
                            (0, $a.default)("browser", g.length, !0),
                          ),
                        f.length > 0 &&
                          a.createElement("span", { "data-hidden-large": !0 }, " \u2022 "),
                        m && a.createElement("span", null, "Test in progress..."),
                        !m &&
                          n &&
                          a.createElement("span", { title: new Date(n).toUTCString() }, "Ran ", y),
                      ),
                    )),
          a.createElement(
            a.Fragment,
            null,
            b,
            v &&
              a.createElement(
                Lf,
                null,
                a.createElement(
                  fn,
                  { onClick: c, disabled: s },
                  s
                    ? a.createElement(xr, { parentComponent: "Button" })
                    : a.createElement(Zt, null),
                  h ? "Rerun tests" : "Run tests",
                ),
              ),
          )
        );
      },
      K1 = w.div(({ theme: e }) => ({
        display: "grid",
        gridTemplateAreas: `
    "info info"
    "actions actions"
    "label controls"
  `,
        gridTemplateColumns: "1fr fit-content(50%)",
        gridTemplateRows: "auto auto auto",
        borderBottom: `1px solid ${e.appBorderColor}`,
        "@container (min-width: 300px)": {
          gridTemplateAreas: `
      "info actions"
      "label controls"
    `,
          gridTemplateColumns: "1fr auto",
          gridTemplateRows: "auto auto",
        },
        "@container (min-width: 800px)": {
          gridTemplateAreas: '"info label controls actions"',
          gridTemplateColumns: "auto 1fr auto auto",
          gridTemplateRows: 40,
        },
      })),
      J1 = w.div(({ theme: e }) => ({
        display: "grid",
        gridTemplateAreas: `
    "header"
    "main"
    "footer"
  `,
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
        height: "100%",
        "&[hidden]": { display: "none" },
      })),
      X1 = w.div(({ theme: e }) => ({
        gridArea: "header",
        position: "sticky",
        zIndex: 1,
        top: 0,
        background: e.background.content,
        "@container (min-width: 800px)": { background: e.background.app },
      })),
      If = w.div(({ theme: e }) => ({
        gridArea: "main",
        overflowY: "auto",
        maxHeight: "100%",
        background: e.background.content,
      })),
      es = w.div(({ theme: e }) => ({
        gridArea: "footer",
        position: "sticky",
        zIndex: 1,
        bottom: 0,
      })),
      Zf = w.div(({ children: e, theme: t }) => ({
        display: "flex",
        alignItems: "center",
        border: `0px solid ${t.appBorderColor}`,
        borderTopWidth: 1,
        borderBottomWidth: e ? 1 : 0,
        height: e ? 40 : 0,
        padding: e ? "0 15px" : 0,
      })),
      Bf = w.div(({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        color: e.color.defaultText,
        lineHeight: "18px",
        padding: 15,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      })),
      Ai = w.div(({ theme: e }) => ({
        background: e.background.hoverable,
        padding: "10px 15px",
        lineHeight: "18px",
        position: "relative",
        borderBottom: `1px solid ${e.appBorderColor}`,
      })),
      Pf = ({
        isOutdated: e,
        isStarting: t,
        isBuildFailed: n,
        shouldSwitchToLastBuildOnBranch: r,
        switchToLastBuildOnBranch: i,
        hidden: l,
        storyId: o,
      }) => {
        let { baselineImageVisible: s, diffVisible: c, focusVisible: d } = Lr(),
          { toggleBaselineImage: m, toggleSettings: u, toggleWarnings: p } = _n(),
          f = Y0(),
          g = "startedAt" in f && f.startedAt,
          y = on(),
          { tests: k } = y,
          E = a.useRef(o),
          h = a.useRef(y.selectedComparison?.id),
          v = a.useRef(f.id),
          { selectedTest: b, selectedComparison: C } = y,
          O = k.every(({ result: ye, status: pe }) => ye === "ADDED" && pe !== "ACCEPTED"),
          I = !O && b?.result === "ADDED" && b?.status !== "ACCEPTED",
          U = !O && C?.result === "ADDED" && b?.result !== "ADDED" && b?.status !== "ACCEPTED";
        X(() => {
          (E.current !== o ||
            h.current !== y.selectedComparison?.id ||
            v.current !== f.id ||
            O ||
            I ||
            U) &&
            (m(!1), u(!1), p(!1)),
            (h.current = y.selectedComparison?.id),
            (E.current = o),
            (v.current = f.id);
        }, [f.id, o, y, m, u, p, O, I, U]);
        let G = a.createElement(Rf, {
          tests: k,
          startedAt: g,
          isStarting: t,
          isBuildFailed: n,
          isOutdated: e,
          shouldSwitchToLastBuildOnBranch: r,
          switchToLastBuildOnBranch: i,
        });
        if (t || !k.length)
          return a.createElement(
            J1,
            { hidden: l },
            a.createElement(X1, null, a.createElement(K1, null, G)),
            a.createElement(es, null, a.createElement(U1, null)),
          );
        let oe = $l(k),
          { isInProgress: ee } = oe,
          ke =
            C?.headCapture?.captureError &&
            "error" in C?.headCapture?.captureError &&
            C?.headCapture?.captureError?.error;
        return a.createElement(
          J1,
          { hidden: l },
          a.createElement(
            X1,
            null,
            a.createElement(K1, null, G, a.createElement(I6, { isOutdated: e })),
          ),
          a.createElement(
            If,
            null,
            ee && a.createElement(Jr, null),
            !ee &&
              O &&
              a.createElement(
                Ai,
                null,
                a.createElement(
                  j,
                  null,
                  "New story found. Accept this snapshot as a test baseline.",
                  " ",
                  a.createElement(
                    Ie,
                    {
                      withArrow: !0,
                      href: "https://www.chromatic.com/docs/branching-and-baselines",
                      target: "_blank",
                    },
                    "Learn more",
                  ),
                ),
              ),
            !ee &&
              I &&
              a.createElement(
                Ai,
                null,
                a.createElement(
                  j,
                  null,
                  "New mode found. Accept this snapshot as a test baseline.",
                  " ",
                  a.createElement(
                    Ie,
                    {
                      withArrow: !0,
                      href: "https://www.chromatic.com/docs/branching-and-baselines",
                      target: "_blank",
                    },
                    "Learn more",
                  ),
                ),
              ),
            !ee &&
              U &&
              a.createElement(
                Ai,
                null,
                a.createElement(
                  j,
                  null,
                  "New browser found. Accept this snapshot as a test baseline.",
                  " ",
                  a.createElement(
                    Ie,
                    {
                      withArrow: !0,
                      href: "https://www.chromatic.com/docs/branching-and-baselines",
                      target: "_blank",
                    },
                    "Learn more",
                  ),
                ),
              ),
            !ee &&
              C &&
              a.createElement(k6, {
                key: C.id,
                componentName: b?.story?.component?.name,
                storyName: b?.story?.name,
                testUrl: b?.webUrl,
                comparisonResult: C.result ?? void 0,
                latestImage: C.headCapture?.captureImage ?? void 0,
                baselineImage: C.baseCapture?.captureImage ?? void 0,
                baselineImageVisible: s,
                diffImage: C.captureDiff?.diffImage ?? void 0,
                focusImage: C.captureDiff?.focusImage ?? void 0,
                diffVisible: c,
                focusVisible: d,
              }),
            !ee &&
              ke &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(Zf, null, a.createElement("b", null, "Error stack trace")),
                a.createElement(Bf, null, ke.stack || ke.message),
              ),
          ),
          a.createElement(es, null, a.createElement(U1, null)),
        );
      },
      Vf = w(Qr)({ padding: "4px 8px", margin: "0 6px" }),
      Df = ({ onClose: e }) =>
        a.createElement(
          qs,
          null,
          a.createElement(
            Ki,
            null,
            a.createElement(
              cr,
              null,
              "Warnings",
              a.createElement(Vf, { status: "warning" }, "2"),
              a.createElement(Il, { onClick: e }, a.createElement(Rl, { "aria-label": "Close" })),
            ),
            a.createElement(
              "p",
              null,
              "It's essential that your components and stories render in a consistent fashion to prevent false positives. Two issues detected in this story may cause false positives.",
            ),
            a.createElement(
              "p",
              null,
              a.createElement(ce, { variant: "outline" }, a.createElement(ls, null), "Docs"),
              a.createElement(ce, { variant: "outline" }, a.createElement(q5, null), "Get support"),
            ),
          ),
        );
    w.div(({ theme: e }) => ({
      color: e.color.warning,
      background: e.background.warning,
      padding: 10,
      lineHeight: "18px",
      position: "relative",
    }));
    var Hf = ({
        branch: e,
        dismissBuildError: t,
        isOutdated: n,
        localBuildProgress: r,
        switchToLastBuildOnBranch: i,
        storyId: l,
      }) => {
        let { settingsVisible: o, warningsVisible: s } = Lr(),
          { toggleSettings: c, toggleWarnings: d } = _n(),
          { isRunning: m, startBuild: u, stopBuild: p } = ka(),
          {
            lastBuildOnBranch: f,
            lastBuildOnBranchIsReady: g,
            lastBuildOnBranchIsSelectable: y,
          } = T7(),
          k = Y0(),
          E = on(),
          { buildIsReviewable: h, userCanReview: v } = X0(),
          b = !!(!h && g && y && i),
          C = f?.status === "IN_PROGRESS",
          O = m || (!h && !b),
          I = r && r?.buildId === f?.id,
          U =
            O &&
            a.createElement(f6, {
              branch: e,
              dismissBuildError: t,
              localBuildProgress: I || m ? r : void 0,
              lastBuildOnBranchInProgress: C,
              switchToLastBuildOnBranch: i,
            }),
          G = E?.hasTests && E?.tests.length === 0,
          oe = k.id !== `Build:${r?.buildId}`;
        if (G)
          return a.createElement(
            ve,
            null,
            a.createElement(
              he,
              null,
              r && oe
                ? a.createElement(
                    se,
                    null,
                    a.createElement(
                      "div",
                      null,
                      a.createElement(me, null, "Snapshotting new story"),
                      a.createElement(
                        j,
                        { center: !0, muted: !0 },
                        'A new snapshot is being created in a standardized cloud browser to save its "last known good state" as a test baseline.',
                      ),
                    ),
                    a.createElement(zr, { localBuildProgress: r }),
                  )
                : a.createElement(
                    se,
                    null,
                    a.createElement(
                      "div",
                      null,
                      a.createElement(me, null, "New story found"),
                      a.createElement(
                        j,
                        { center: !0, muted: !0 },
                        'Take an image snapshot of this story to save its "last known good state" as a test baseline. This unlocks visual regression testing so you can see exactly what has changed down to the pixel.',
                      ),
                    ),
                    a.createElement(
                      ce,
                      { belowText: !0, size: "medium", variant: "solid", onClick: m ? p : u },
                      m ? "Cancel build" : "Create visual test",
                    ),
                  ),
            ),
          );
        if (E?.tests?.find(ie => ie.result === "SKIPPED"))
          return a.createElement(
            ve,
            null,
            U,
            a.createElement(
              he,
              null,
              a.createElement(
                se,
                null,
                a.createElement(
                  "div",
                  null,
                  a.createElement(me, null, "This story was skipped"),
                  a.createElement(
                    j,
                    { center: !0, muted: !0 },
                    "If you would like to resume testing it, comment out or remove",
                    a.createElement(Fe, null, "disableSnapshot = true"),
                    " from the CSF file.",
                  ),
                ),
                a.createElement(
                  ce,
                  { asChild: !0, size: "medium", variant: "outline" },
                  a.createElement(
                    "a",
                    {
                      href: "https://www.chromatic.com/docs/ignoring-elements#with-storybook",
                      target: "_new",
                    },
                    a.createElement(ls, null),
                    "View docs",
                  ),
                ),
              ),
            ),
          );
        let { status: ee } = k,
          ke = ["ANNOUNCED", "PUBLISHED", "PREPARED"].includes(ee),
          ye = ee === "FAILED",
          pe = ee === "PENDING" && (!v || !h);
        return a.createElement(
          ve,
          { footer: null },
          a.createElement(
            p4,
            null,
            U,
            !U &&
              pe &&
              a.createElement(
                s6,
                null,
                v
                  ? a.createElement(
                      a.Fragment,
                      null,
                      "Reviewing is disabled because there's a newer build on ",
                      a.createElement(Fe, null, e),
                      ".",
                    )
                  : a.createElement(
                      a.Fragment,
                      null,
                      "You don't have permission to accept changes.",
                      " ",
                      a.createElement(
                        $t,
                        {
                          href: "https://www.chromatic.com/docs/collaborators#roles",
                          target: "_blank",
                          withArrow: !0,
                        },
                        "Learn about roles",
                      ),
                    ),
              ),
            a.createElement(
              Xn,
              { grow: !0, hidden: o || s },
              a.createElement(Pf, {
                hidden: o || s,
                isOutdated: n,
                isStarting: ke,
                isBuildFailed: ye,
                shouldSwitchToLastBuildOnBranch: b,
                switchToLastBuildOnBranch: i,
                selectedBuild: k,
                storyId: l,
              }),
            ),
            a.createElement(
              Xn,
              { grow: !0, hidden: !o },
              a.createElement(g6, { onClose: () => c(!1) }),
            ),
            a.createElement(
              Xn,
              { grow: !0, hidden: !s },
              a.createElement(Df, { onClose: () => d(!1) }),
            ),
          ),
        );
      },
      _i = w(Ie)(() => ({ marginTop: 5 })),
      jf = ({
        queryError: e,
        hasData: t,
        hasProject: n,
        hasSelectedBuild: r,
        localBuildProgress: i,
        branch: l,
      }) => {
        let { setAccessToken: o } = Tl(),
          { isRunning: s, startBuild: c } = ka(),
          { disable: d, disableSnapshot: m, docsOnly: u } = Kl("chromatic", {}),
          p = () => {
            let f = a.createElement(
              ce,
              { disabled: s, size: "medium", variant: "solid", onClick: c },
              a.createElement(Zt, null),
              "Take snapshots",
            );
            return i
              ? i.currentStep === "error"
                ? a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(Q0, { localBuildProgress: i, title: "Build failed" }),
                    f,
                  )
                : a.createElement(zr, { localBuildProgress: i })
              : f;
          };
        return a.createElement(
          ve,
          {
            footer: a.createElement(
              Ir,
              null,
              a.createElement(
                Xe,
                null,
                t &&
                  !e &&
                  n &&
                  a.createElement(
                    j,
                    { muted: !0, style: { marginLeft: 5 } },
                    "Waiting for build on ",
                    l,
                  ),
              ),
              a.createElement(Xe, { push: !0 }, a.createElement(Rr, null)),
            ),
          },
          e?.networkError
            ? a.createElement(
                he,
                null,
                a.createElement(
                  se,
                  null,
                  a.createElement(
                    "div",
                    null,
                    a.createElement(me, null, "Network error"),
                    a.createElement(j, null, e.networkError.message),
                  ),
                  a.createElement(
                    ce,
                    { size: "medium", variant: "solid", onClick: () => o(null) },
                    "Log out",
                  ),
                ),
              )
            : e?.graphQLErrors?.length
              ? a.createElement(
                  he,
                  null,
                  a.createElement(
                    se,
                    null,
                    a.createElement(
                      "div",
                      null,
                      a.createElement(me, null, e.graphQLErrors[0].message),
                      a.createElement(
                        j,
                        { center: !0, muted: !0 },
                        e.graphQLErrors[0].extensions.code === "FORBIDDEN"
                          ? "You may have insufficient permissions. Try logging out and back in again."
                          : "Try logging out or clear your browser's local storage.",
                      ),
                    ),
                    a.createElement(
                      yt,
                      null,
                      a.createElement(
                        ce,
                        { size: "medium", variant: "solid", onClick: () => o(null) },
                        "Log out",
                      ),
                      a.createElement(
                        _i,
                        { withArrow: !0, href: `${rs}#troubleshooting`, target: "_blank" },
                        "Troubleshoot",
                      ),
                    ),
                  ),
                )
              : t
                ? n
                  ? d || m || u
                    ? a.createElement(
                        he,
                        null,
                        a.createElement(
                          se,
                          null,
                          a.createElement(
                            "div",
                            null,
                            a.createElement(me, null, "Visual tests disabled for this story"),
                            a.createElement(
                              j,
                              { center: !0, muted: !0 },
                              "Update ",
                              a.createElement(
                                "code",
                                null,
                                "parameters.chromatic.",
                                d ? "disable" : m ? "disableSnapshot" : "docsOnly",
                              ),
                              " to enable snapshots for this story.",
                            ),
                          ),
                          a.createElement(
                            _i,
                            {
                              withArrow: !0,
                              href: "https://www.chromatic.com/docs/ignoring-elements#with-storybook",
                              target: "_blank",
                            },
                            "Read more",
                          ),
                        ),
                      )
                    : r
                      ? null
                      : a.createElement(
                          he,
                          null,
                          a.createElement(
                            se,
                            null,
                            a.createElement(
                              "div",
                              null,
                              a.createElement(me, null, "Create a test baseline"),
                              a.createElement(
                                j,
                                { center: !0, muted: !0 },
                                'Take an image snapshot of your stories to save their "last known good state" as test baselines.',
                              ),
                            ),
                            p(),
                          ),
                        )
                  : a.createElement(
                      he,
                      null,
                      a.createElement(
                        se,
                        null,
                        a.createElement(
                          "div",
                          null,
                          a.createElement(me, null, "Project not found"),
                          a.createElement(
                            j,
                            { center: !0, muted: !0 },
                            "You may not have access to this project or it may not exist.",
                          ),
                        ),
                        a.createElement(
                          _i,
                          { isButton: !0, onClick: () => o(null), withArrow: !0 },
                          "Switch account",
                        ),
                      ),
                    )
                : a.createElement(Jr, null),
        );
      },
      zf = e => Object.fromEntries(Object.entries(e).map(([t]) => [t, null])),
      Uf = ({ buildIsReviewable: e, userCanReview: t, onReviewSuccess: n, onReviewError: r }) => {
        let [{ fetching: i }, l] = Cs(A7),
          o = H(
            async d => {
              try {
                if (!e) throw new Error("Build is not reviewable");
                if (!t) throw new Error("No permission to review tests");
                let { error: m } = await l({ input: d });
                if (m) throw m;
                n?.(d);
              } catch (m) {
                r?.(m, d);
              }
            },
            [n, r, l, e, t],
          ),
          s = H((d, m = "SPEC") => o({ status: "ACCEPTED", testId: d, batch: m }), [o]),
          c = H((d, m = "SPEC") => o({ status: "PENDING", testId: d, batch: m }), [o]);
        return {
          isReviewing: i,
          acceptTest: s,
          unacceptTest: c,
          buildIsReviewable: e,
          userCanReview: t,
        };
      },
      $f = lt(`
  mutation UpdateUserPreferences($input: UserPreferencesInput!) {
    updateUserPreferences(input: $input) {
      updatedPreferences {
        vtaOnboarding
      }
    }
  }
`),
      Wf = ({ lastBuildOnBranch: e, vtaOnboarding: t }) => {
        let n = cn(),
          { notifications: r, storyId: i } = Ht(),
          [l, o] = a.useState(!1),
          s = a.useCallback(() => {
            o(!0), r.forEach(({ id: h }) => n.clearNotification(h));
          }, [n, r]),
          [c, d] = a.useState(!1),
          m = a.useCallback(() => d(!0), []),
          [u, p] = a.useState(!0);
        a.useEffect(() => {
          if (n?.getUrlState?.().queryParams.vtaOnboarding === "true") {
            p(!1);
            return;
          }
          t && p(t === "COMPLETED" || t === "DISMISSED");
        }, [n, t]);
        let [{ fetching: f }, g] = Cs($f),
          y = a.useCallback(
            async h => {
              await g({ input: { vtaOnboarding: h ? "COMPLETED" : "DISMISSED" } }), p(!0), d(!1);
              let b = new URL(window.location.href);
              b.searchParams.has("vtaOnboarding") &&
                (b.searchParams.delete("vtaOnboarding"),
                window.history.replaceState({}, "", b.href));
            },
            [g],
          ),
          k = a.useMemo(
            () =>
              (
                (e &&
                  "testsForStatus" in e &&
                  e.testsForStatus?.nodes &&
                  yn(G0, e.testsForStatus.nodes)) ||
                []
              ).some(
                h => h?.status === "PENDING" && h?.result === "CHANGED" && h?.story?.storyId === i,
              ),
            [e, i],
          ),
          E = !l && !u && !c;
        return {
          showOnboarding: E,
          showGuidedTour: !E && !u,
          completeOnboarding: s,
          skipOnboarding: a.useCallback(() => y(!1), [y]),
          completeWalkthrough: a.useCallback(() => y(!0), [y]),
          skipWalkthrough: a.useCallback(() => y(!1), [y]),
          startWalkthrough: m,
          lastBuildHasChangesForStory: k,
          isUpdating: f,
        };
      },
      Gf = ({
        isOutdated: e,
        selectedBuildInfo: t,
        setSelectedBuildInfo: n,
        dismissBuildError: r,
        localBuildProgress: i,
        setOutdated: l,
        updateBuildStatus: o,
        projectId: s,
        gitInfo: c,
        storyId: d,
      }) => {
        let m = cn(),
          { addNotification: u, setOptions: p, togglePanel: f } = m,
          g = _7({ projectId: s, storyId: d, gitInfo: c, selectedBuildInfo: t }),
          {
            account: y,
            features: k,
            manageUrl: E,
            hasData: h,
            hasProject: v,
            hasSelectedBuild: b,
            lastBuildOnBranch: C,
            lastBuildOnBranchIsReady: O,
            lastBuildOnBranchIsSelectable: I,
            selectedBuild: U,
            selectedBuildMatchesGit: G,
            queryError: oe,
            rerunQuery: ee,
            userCanReview: ke,
          } = g,
          ye = H(
            ({ onDismiss: Tt }) => {
              Tt(), p({ selectedPanel: an }), f(!0);
            },
            [p, f],
          ),
          pe = Uf({
            buildIsReviewable: !!U && U.id === C?.id,
            userCanReview: ke,
            onReviewSuccess: ee,
            onReviewError: (Tt, ic) => {
              Tt instanceof Error &&
                u({
                  id: `${Z}/errorAccepting/${Date.now()}`,
                  content: {
                    headline: `Failed to ${ic.status === "ACCEPTED" ? "accept" : "unaccept"} changes`,
                    subHeadline: Tt.message,
                  },
                  icon: a.createElement(xt, { color: ct.negative }),
                  duration: 8e3,
                  onClick: ye,
                });
            },
          });
        X(() => l(!G), [G, l]);
        let ie =
            C && "testsForStatus" in C && C.testsForStatus?.nodes && yn(G0, C.testsForStatus.nodes),
          Ge = I && Jp(m, ie || []);
        X(() => {
          o(Tt => ({ ...zf(Tt), ...Ge }));
        }, [JSON.stringify(Ge), o]),
          X(() => {
            n(Tt =>
              Xp(Tt, {
                shouldSwitchToLastBuildOnBranch: I && O,
                lastBuildOnBranchId: C?.id,
                storyId: d,
              }),
            );
          }, [I, O, C?.id, n, d]);
        let kt = H(() => C?.id && I && n({ buildId: C.id, storyId: d }), [n, I, C?.id, d]),
          {
            showOnboarding: _t,
            showGuidedTour: Pe,
            completeOnboarding: $r,
            completeWalkthrough: He,
            skipOnboarding: _a,
            skipWalkthrough: nc,
            startWalkthrough: ac,
            lastBuildHasChangesForStory: rc,
          } = Wf(g);
        return k && !k.uiTests
          ? a.createElement(e3, { manageUrl: E })
          : y?.suspensionReason
            ? a.createElement(m0, {
                billingUrl: y.billingUrl,
                suspensionReason: y.suspensionReason,
              })
            : _t && v
              ? a.createElement(
                  a.Fragment,
                  null,
                  !h || oe
                    ? a.createElement(a.Fragment, null)
                    : a.createElement(
                        Si,
                        { watchState: g },
                        a.createElement(o6, {
                          gitInfo: c,
                          projectId: s,
                          updateBuildStatus: o,
                          dismissBuildError: r,
                          localBuildProgress: i,
                          showInitialBuildScreen: !U,
                          onComplete: $r,
                          onSkip: _a,
                          lastBuildHasChangesForStory: rc,
                        }),
                      ),
                )
              : a.createElement(
                  a.Fragment,
                  null,
                  !U || !b || !h || oe
                    ? a.createElement(jf, {
                        queryError: oe,
                        hasData: h,
                        hasProject: v,
                        hasSelectedBuild: b,
                        branch: c.branch,
                        dismissBuildError: r,
                        isOutdated: e,
                        localBuildProgress: i,
                        ...(I && { switchToLastBuildOnBranch: kt }),
                      })
                    : a.createElement(
                        v6,
                        { watchState: pe },
                        a.createElement(
                          Si,
                          { watchState: g },
                          a.createElement(Hf, {
                            branch: c.branch,
                            dismissBuildError: r,
                            isOutdated: e,
                            localBuildProgress: i,
                            ...(C && { lastBuildOnBranch: C }),
                            ...(I && { switchToLastBuildOnBranch: kt }),
                            userCanReview: ke,
                            storyId: d,
                          }),
                        ),
                      ),
                  Pe &&
                    a.createElement(
                      Si,
                      { watchState: { selectedBuild: U } },
                      a.createElement(H7, {
                        managerApi: m,
                        skipWalkthrough: nc,
                        startWalkthrough: ac,
                        completeWalkthrough: He,
                      }),
                    ),
                );
      },
      qf = e => {
        let [t, n] = Ue("selectedBuildInfo");
        return a.createElement(Gf, { selectedBuildInfo: t, setSelectedBuildInfo: n, ...e });
      },
      mn = new Map(),
      Yf = () => {
        let e = Ln({
          [b5]: t => {
            let n = mn.get(t.requestId);
            if (n)
              if ((mn.delete(t.requestId), "error" in t)) n.reject(new Error(t.error));
              else {
                let { body: r, headers: i, status: l, statusText: o } = t.response,
                  s = new Response(r, { headers: i, status: l, statusText: o });
                n.resolve(s);
              }
          },
        });
        return async (t, { signal: n, ...r } = {}) => {
          if (n?.aborted) return Promise.reject(n.reason);
          let i = Math.random().toString(36).slice(2);
          return (
            n?.addEventListener("abort", () => {
              e(y5, { requestId: i }), mn.get(i)?.reject(n.reason), mn.delete(i);
            }),
            e(E5, { requestId: i, input: t, init: r }),
            new Promise((l, o) => {
              mn.set(i, { resolve: l, reject: o }),
                setTimeout(() => {
                  o(new Error("Request timed out")), mn.delete(i);
                }, 3e4);
            })
          );
        };
      },
      Qf = ({ active: e, api: t }) => {
        let [n, r] = Cl(),
          i = H(
            He => {
              r(He), He || Um("authenticationScreen", "exchangeParameters");
            },
            [r],
          ),
          { storyId: l } = Ht(),
          [o, s] = Me(window.navigator.onLine);
        X(() => {
          let He = () => s(!0),
            _a = () => s(!1);
          return (
            window.addEventListener("online", He),
            window.addEventListener("offline", _a),
            () => {
              window.removeEventListener("online", He), window.removeEventListener("offline", _a);
            }
          );
        }, []);
        let [c] = Ee(u5),
          [d] = Ee(ul),
          [m] = Ee(ml),
          [u] = Ee(Qa),
          [p, f] = Ee(pl),
          [, g] = Ee(Qa),
          y = Ln({}),
          k = H(He => t.experimental_updateStatus(Z, He), [t]),
          {
            loading: E,
            projectId: h,
            configFile: v,
            updateProject: b,
            projectUpdatingFailed: C,
            projectIdUpdated: O,
            clearProjectIdUpdated: I,
          } = xl(),
          [U, G] = Ue("createdProjectId"),
          [oe, ee] = Ee(as),
          [ke, ye] = Ue("subdomain", "www"),
          pe = H(He => y(g5, He), [y]),
          {
            isRunning: ie,
            startBuild: Ge,
            stopBuild: kt,
          } = Sl({ localBuildProgress: p, accessToken: n }),
          _t = Yf(),
          Pe = He =>
            a.createElement(
              p2,
              { value: xs({ fetch: _t }) },
              a.createElement(
                h2,
                { value: pe },
                a.createElement(
                  lm,
                  { value: { accessToken: n, setAccessToken: i, subdomain: ke, setSubdomain: ye } },
                  a.createElement(
                    $m,
                    { addonUninstalled: oe, setAddonUninstalled: ee },
                    a.createElement(
                      u4,
                      null,
                      a.createElement(
                        Qp,
                        { watchState: { isRunning: ie, startBuild: Ge, stopBuild: kt } },
                        a.createElement(
                          "div",
                          { hidden: !e, style: { containerType: "size", height: "100%" } },
                          He,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
        if (!e) return Pe(null);
        if (globalThis.CONFIG_TYPE !== "DEVELOPMENT") return Pe(a.createElement(Gp, null));
        if (oe) return Pe(a.createElement(Yp, null));
        if (m) return Pe(a.createElement(qp, { offline: m }));
        if (!n)
          return Pe(
            a.createElement(Fp, { setAccessToken: i, setCreatedProjectId: G, hasProjectId: !!h }),
          );
        if (E) return e ? a.createElement(Qi, null) : null;
        if (!h)
          return Pe(
            a.createElement(zp, {
              createdProjectId: U,
              setCreatedProjectId: G,
              onUpdateProject: b,
            }),
          );
        if (d || !c) return console.error(d), Pe(a.createElement(Lp, null));
        if (C) {
          if (!v) throw new Error("Missing config file after configuration failure");
          return Pe(a.createElement(Hp, { projectId: h, configFile: v }));
        }
        if (O) {
          if (!v) throw new Error("Missing config file after configuration success");
          return Pe(a.createElement(Bp, { projectId: h, configFile: v, goToNext: I }));
        }
        let $r = c.branch === p?.branch;
        return Pe(
          a.createElement(qf, {
            dismissBuildError: () => f(void 0),
            isOutdated: !!u,
            localBuildProgress: $r ? p : void 0,
            setOutdated: g,
            updateBuildStatus: k,
            projectId: h,
            gitInfo: c,
            storyId: l,
          }),
        );
      },
      Ti = et(ya()),
      Kf = ({ api: e, running: t }) => {
        let { addNotification: n, selectStory: r, setOptions: i, togglePanel: l } = e,
          o = zt(ba),
          { projectId: s } = xl(),
          [c] = Cl(),
          d = !!c,
          [m, u] = Ee(ml),
          [p] = Ee(Qa),
          [f] = Ee(pl),
          [g] = Ee(Ar),
          y = Object.keys(g?.problems || {}).length > 0,
          [k] = Ee(ul),
          E = Ne(f?.currentStep),
          { index: h, status: v, storyId: b, viewMode: C } = Ht(),
          O = Object.values(v).filter(pe => pe[Z]?.status === "warn"),
          I = H(
            pe => {
              if ((i({ selectedPanel: an }), l(!0), h && C !== "story")) {
                let ie = Object.keys(h).indexOf(b),
                  Ge = Object.entries(h).slice(ie > 0 ? ie : 0),
                  [kt] = Ge.find(([, { type: _t }]) => _t === "story") || [];
                kt && r(kt);
              }
              pe && o?.({ action: "openWarning", warning: pe });
            },
            [i, l, o, h, r, b, C],
          ),
          U = H(
            ({ onDismiss: pe }) => {
              pe(), I();
            },
            [I],
          );
        X(() => {
          let pe = () => u(!0),
            ie = () => u(!1);
          return (
            window.addEventListener("offline", pe),
            window.addEventListener("online", ie),
            () => {
              window.removeEventListener("offline", pe), window.removeEventListener("online", ie);
            }
          );
        }, [u]),
          X(() => {
            f?.currentStep !== E.current &&
              ((E.current = f?.currentStep),
              f?.currentStep === "error" &&
                n({
                  id: `${Z}/build-error/${Date.now()}`,
                  content: {
                    headline: "Build error",
                    subHeadline:
                      "Check the Storybook process on the command line for more details.",
                  },
                  icon: a.createElement(xt, { color: ct.negative }),
                  onClick: U,
                }),
              f?.currentStep === "limited" &&
                n({
                  id: `${Z}/build-limited/${Date.now()}`,
                  content: {
                    headline: "Build limited",
                    subHeadline:
                      "Your account has insufficient snapshots remaining to run this build. Visit your billing page to find out more.",
                  },
                  icon: a.createElement(xt, { color: ct.negative }),
                  onClick: U,
                }));
          }, [n, U, f?.currentStep]);
        let { startBuild: G, stopBuild: oe } = Sl({ localBuildProgress: f, accessToken: c }),
          ee;
        s || (ee = "Select a project"),
          d || (ee = "Login required"),
          k && (ee = "Git synchronization problem"),
          y && (ee = "Configuration problem"),
          m && (ee = "Not available while offline");
        let ke = H(() => I(ee), [I, ee]),
          ye = Ln(
            {
              [w5]: ({ providerId: pe }) => {
                pe === Wa && G();
              },
              [C5]: ({ providerId: pe }) => {
                pe === Wa && oe();
              },
            },
            [G, oe],
          );
        if (
          (X(() => {
            ye(k5, { providerId: Wa, runnable: !ee });
          }, [ye, ee]),
          ee)
        )
          return a.createElement($t, { onClick: ke }, ee);
        if (t) {
          if (f) {
            let { renderProgress: pe } = Nl[f.currentStep];
            return a.createElement(a.Fragment, null, pe(f));
          }
          return a.createElement(a.Fragment, null, "Starting...");
        }
        return p
          ? a.createElement(a.Fragment, null, "Test results outdated")
          : f?.currentStep === "aborted"
            ? a.createElement(a.Fragment, null, "Aborted by user")
            : f?.currentStep === "complete"
              ? f.errorCount
                ? a.createElement(
                    a.Fragment,
                    null,
                    "Encountered ",
                    (0, Ti.default)("component error", f.errorCount, !0),
                  )
                : O.length
                  ? a.createElement(
                      a.Fragment,
                      null,
                      "Found ",
                      (0, Ti.default)("story", O.length, !0),
                      " with",
                      (0, Ti.default)("change", O.length),
                    )
                  : a.createElement(a.Fragment, null, "No visual changes detected")
              : a.createElement(a.Fragment, null, "Not run");
      };
    sn.register(Z, e => {
      sn.add(an, {
        type: Ta.PANEL,
        title: "Visual tests",
        paramKey: v5,
        match: ({ viewMode: t }) => t === "story",
        render: ({ active: t }) => a.createElement(Qf, { active: !!t, api: e }),
      }),
        globalThis.CONFIG_TYPE === "DEVELOPMENT" &&
          (Ta.experimental_TEST_PROVIDER
            ? sn.add(Wa, {
                type: Ta.experimental_TEST_PROVIDER,
                runnable: !0,
                name: "Visual tests",
                title: ({ failed: t }) => (t ? "Visual tests didn't complete" : "Visual tests"),
                description: t => a.createElement(Kf, { ...t, api: e }),
              })
            : (sn.add(c5, { type: "sidebar-top", render: () => a.createElement(im, { api: e }) }),
              sn.add(d5, {
                type: "sidebar-bottom",
                render: () => a.createElement(B5, { api: e }),
              })));
    });
  })();
} catch (e) {
  console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e);
}
