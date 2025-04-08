try {
  (() => {
    var Ee = (e =>
      typeof require < "u"
        ? require
        : typeof Proxy < "u"
          ? new Proxy(e, { get: (t, r) => (typeof require < "u" ? require : t)[r] })
          : e)(function (e) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var c = __REACT__,
      {
        Children: Mh,
        Component: $h,
        Fragment: Mt,
        Profiler: qh,
        PureComponent: Uh,
        StrictMode: zh,
        Suspense: Hh,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Gh,
        cloneElement: Vh,
        createContext: Wh,
        createElement: z,
        createFactory: Yh,
        createRef: Kh,
        forwardRef: Xh,
        isValidElement: Jh,
        lazy: Zh,
        memo: $t,
        startTransition: Qh,
        unstable_act: ef,
        useCallback: tf,
        useContext: to,
        useDebugValue: rf,
        useDeferredValue: nf,
        useEffect: Fe,
        useId: of,
        useImperativeHandle: af,
        useInsertionEffect: uf,
        useLayoutEffect: sf,
        useMemo: Ct,
        useReducer: lf,
        useRef: qt,
        useState: ge,
        useSyncExternalStore: cf,
        useTransition: pf,
        version: df,
      } = __REACT__;
    var gf = __STORYBOOK_COMPONENTS__,
      {
        A: yf,
        ActionBar: bf,
        AddonPanel: ro,
        Badge: Tr,
        Bar: no,
        Blockquote: Ef,
        Button: $e,
        ClipboardCode: Af,
        Code: Sf,
        DL: wf,
        Div: Cf,
        DocumentWrapper: vf,
        EmptyTabContent: oo,
        ErrorFormatter: Df,
        FlexBar: xf,
        Form: Tf,
        H1: Rf,
        H2: _f,
        H3: Of,
        H4: Ff,
        H5: If,
        H6: Bf,
        HR: Pf,
        IconButton: Ut,
        IconButtonSkeleton: Nf,
        Icons: Lf,
        Img: kf,
        LI: jf,
        Link: vt,
        ListItem: qe,
        Loader: Mf,
        Modal: ao,
        OL: $f,
        P: uo,
        Placeholder: qf,
        Pre: Uf,
        ProgressSpinner: io,
        ResetWrapper: zf,
        ScrollArea: Hf,
        Separator: so,
        Spaced: lo,
        Span: Gf,
        StorybookIcon: Vf,
        StorybookLogo: Wf,
        Symbols: Yf,
        SyntaxHighlighter: Kf,
        TT: Xf,
        TabBar: Jf,
        TabButton: Zf,
        TabWrapper: Qf,
        Table: em,
        Tabs: tm,
        TabsState: rm,
        TooltipLinkList: nm,
        TooltipMessage: om,
        TooltipNote: Je,
        UL: am,
        WithTooltip: Re,
        WithTooltipPure: um,
        Zoom: im,
        codeCommon: sm,
        components: lm,
        createCopyToClipboardFunction: cm,
        getStoryHref: pm,
        icons: dm,
        interleaveSeparators: hm,
        nameSpaceClassNames: fm,
        resetComponents: mm,
        withReset: gm,
      } = __STORYBOOK_COMPONENTS__;
    var Sm = __STORYBOOK_API__,
      {
        ActiveTabs: wm,
        Consumer: co,
        ManagerContext: Cm,
        Provider: vm,
        RequestResponseError: Dm,
        addons: Dt,
        combineParameters: xm,
        controlOrMetaKey: Tm,
        controlOrMetaSymbol: Rm,
        eventMatchesShortcut: _m,
        eventToShortcut: Om,
        experimental_MockUniversalStore: Fm,
        experimental_UniversalStore: po,
        experimental_requestResponse: Im,
        experimental_useUniversalStore: ho,
        isMacLike: Bm,
        isShortcutTaken: Pm,
        keyToSymbol: Nm,
        merge: Lm,
        mockChannel: km,
        optionOrAltSymbol: jm,
        shortcutMatchesShortcut: Mm,
        shortcutToHumanString: $m,
        types: fo,
        useAddonState: Rr,
        useArgTypes: qm,
        useArgs: Um,
        useChannel: mo,
        useGlobalTypes: zm,
        useGlobals: Hm,
        useParameter: go,
        useSharedState: Gm,
        useStoryPrepared: Vm,
        useStorybookApi: zt,
        useStorybookState: yo,
      } = __STORYBOOK_API__;
    var Jm = __STORYBOOK_TYPES__,
      { Addon_TypesEnum: bo } = __STORYBOOK_TYPES__;
    var rg = __STORYBOOK_THEMING__,
      {
        CacheProvider: ng,
        ClassNames: og,
        Global: ag,
        ThemeProvider: ug,
        background: ig,
        color: sg,
        convert: lg,
        create: cg,
        createCache: pg,
        createGlobal: dg,
        createReset: hg,
        css: fg,
        darken: mg,
        ensure: gg,
        ignoreSsrWarning: yg,
        isPropValid: bg,
        jsx: Eg,
        keyframes: Ag,
        lighten: Sg,
        styled: $,
        themes: wg,
        typography: Le,
        useTheme: Ze,
        withTheme: Cg,
      } = __STORYBOOK_THEMING__;
    var Rg = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: _g,
        AccessibilityIcon: Eo,
        AccessibilityIgnoredIcon: Og,
        AddIcon: Fg,
        AdminIcon: Ig,
        AlertAltIcon: Bg,
        AlertIcon: Pg,
        AlignLeftIcon: Ng,
        AlignRightIcon: Lg,
        AppleIcon: kg,
        ArrowBottomLeftIcon: jg,
        ArrowBottomRightIcon: Mg,
        ArrowDownIcon: $g,
        ArrowLeftIcon: qg,
        ArrowRightIcon: Ug,
        ArrowSolidDownIcon: zg,
        ArrowSolidLeftIcon: Hg,
        ArrowSolidRightIcon: Gg,
        ArrowSolidUpIcon: Vg,
        ArrowTopLeftIcon: Wg,
        ArrowTopRightIcon: Yg,
        ArrowUpIcon: Kg,
        AzureDevOpsIcon: Xg,
        BackIcon: Jg,
        BasketIcon: Zg,
        BatchAcceptIcon: Qg,
        BatchDenyIcon: e0,
        BeakerIcon: t0,
        BellIcon: r0,
        BitbucketIcon: n0,
        BoldIcon: o0,
        BookIcon: a0,
        BookmarkHollowIcon: u0,
        BookmarkIcon: i0,
        BottomBarIcon: s0,
        BottomBarToggleIcon: l0,
        BoxIcon: c0,
        BranchIcon: p0,
        BrowserIcon: d0,
        ButtonIcon: h0,
        CPUIcon: f0,
        CalendarIcon: m0,
        CameraIcon: g0,
        CameraStabilizeIcon: y0,
        CategoryIcon: b0,
        CertificateIcon: E0,
        ChangedIcon: A0,
        ChatIcon: S0,
        CheckIcon: Ao,
        ChevronDownIcon: w0,
        ChevronLeftIcon: C0,
        ChevronRightIcon: v0,
        ChevronSmallDownIcon: D0,
        ChevronSmallLeftIcon: x0,
        ChevronSmallRightIcon: T0,
        ChevronSmallUpIcon: R0,
        ChevronUpIcon: _0,
        ChromaticIcon: O0,
        ChromeIcon: F0,
        CircleHollowIcon: I0,
        CircleIcon: So,
        ClearIcon: B0,
        CloseAltIcon: P0,
        CloseIcon: wo,
        CloudHollowIcon: N0,
        CloudIcon: L0,
        CogIcon: k0,
        CollapseIcon: j0,
        CommandIcon: M0,
        CommentAddIcon: $0,
        CommentIcon: q0,
        CommentsIcon: U0,
        CommitIcon: z0,
        CompassIcon: H0,
        ComponentDrivenIcon: G0,
        ComponentIcon: V0,
        ContrastIcon: W0,
        ContrastIgnoredIcon: Y0,
        ControlsIcon: K0,
        CopyIcon: X0,
        CreditIcon: J0,
        CrossIcon: Z0,
        DashboardIcon: Q0,
        DatabaseIcon: ey,
        DeleteIcon: ty,
        DiamondIcon: ry,
        DirectionIcon: ny,
        DiscordIcon: oy,
        DocChartIcon: ay,
        DocListIcon: uy,
        DocumentIcon: Co,
        DownloadIcon: iy,
        DragIcon: sy,
        EditIcon: vo,
        EllipsisIcon: ly,
        EmailIcon: cy,
        ExpandAltIcon: py,
        ExpandIcon: dy,
        EyeCloseIcon: hy,
        EyeIcon: Do,
        FaceHappyIcon: fy,
        FaceNeutralIcon: my,
        FaceSadIcon: gy,
        FacebookIcon: yy,
        FailedIcon: by,
        FastForwardIcon: xo,
        FigmaIcon: Ey,
        FilterIcon: Ay,
        FlagIcon: Sy,
        FolderIcon: wy,
        FormIcon: Cy,
        GDriveIcon: vy,
        GithubIcon: Dy,
        GitlabIcon: xy,
        GlobeIcon: Ty,
        GoogleIcon: Ry,
        GraphBarIcon: _y,
        GraphLineIcon: Oy,
        GraphqlIcon: Fy,
        GridAltIcon: Iy,
        GridIcon: By,
        GrowIcon: Py,
        HeartHollowIcon: Ny,
        HeartIcon: Ly,
        HomeIcon: ky,
        HourglassIcon: jy,
        InfoIcon: My,
        ItalicIcon: $y,
        JumpToIcon: qy,
        KeyIcon: Uy,
        LightningIcon: zy,
        LightningOffIcon: Hy,
        LinkBrokenIcon: Gy,
        LinkIcon: Vy,
        LinkedinIcon: Wy,
        LinuxIcon: Yy,
        ListOrderedIcon: Ky,
        ListUnorderedIcon: To,
        LocationIcon: Xy,
        LockIcon: Jy,
        MarkdownIcon: Zy,
        MarkupIcon: Qy,
        MediumIcon: e1,
        MemoryIcon: t1,
        MenuIcon: r1,
        MergeIcon: n1,
        MirrorIcon: o1,
        MobileIcon: a1,
        MoonIcon: u1,
        NutIcon: i1,
        OutboxIcon: s1,
        OutlineIcon: l1,
        PaintBrushIcon: c1,
        PaperClipIcon: p1,
        ParagraphIcon: d1,
        PassedIcon: h1,
        PhoneIcon: f1,
        PhotoDragIcon: m1,
        PhotoIcon: g1,
        PhotoStabilizeIcon: y1,
        PinAltIcon: b1,
        PinIcon: E1,
        PlayAllHollowIcon: A1,
        PlayBackIcon: Ro,
        PlayHollowIcon: _o,
        PlayIcon: Oo,
        PlayNextIcon: Fo,
        PlusIcon: S1,
        PointerDefaultIcon: w1,
        PointerHandIcon: Io,
        PowerIcon: C1,
        PrintIcon: v1,
        ProceedIcon: D1,
        ProfileIcon: x1,
        PullRequestIcon: T1,
        QuestionIcon: R1,
        RSSIcon: _1,
        RedirectIcon: O1,
        ReduxIcon: F1,
        RefreshIcon: I1,
        ReplyIcon: B1,
        RepoIcon: P1,
        RequestChangeIcon: N1,
        RewindIcon: Bo,
        RulerIcon: L1,
        SaveIcon: k1,
        SearchIcon: j1,
        ShareAltIcon: M1,
        ShareIcon: $1,
        ShieldIcon: Po,
        SideBySideIcon: q1,
        SidebarAltIcon: U1,
        SidebarAltToggleIcon: z1,
        SidebarIcon: H1,
        SidebarToggleIcon: G1,
        SpeakerIcon: V1,
        StackedIcon: W1,
        StarHollowIcon: Y1,
        StarIcon: K1,
        StatusFailIcon: X1,
        StatusIcon: J1,
        StatusPassIcon: Z1,
        StatusWarnIcon: Q1,
        StickerIcon: eb,
        StopAltHollowIcon: tb,
        StopAltIcon: _r,
        StopIcon: rb,
        StorybookIcon: nb,
        StructureIcon: ob,
        SubtractIcon: ab,
        SunIcon: ub,
        SupportIcon: ib,
        SwitchAltIcon: sb,
        SyncIcon: Or,
        TabletIcon: lb,
        ThumbsUpIcon: cb,
        TimeIcon: pb,
        TimerIcon: db,
        TransferIcon: hb,
        TrashIcon: fb,
        TwitterIcon: mb,
        TypeIcon: gb,
        UbuntuIcon: yb,
        UndoIcon: bb,
        UnfoldIcon: Eb,
        UnlockIcon: Ab,
        UnpinIcon: Sb,
        UploadIcon: wb,
        UserAddIcon: Cb,
        UserAltIcon: vb,
        UserIcon: Db,
        UsersIcon: xb,
        VSCodeIcon: Tb,
        VerifiedIcon: Rb,
        VideoIcon: No,
        WandIcon: _b,
        WatchIcon: Ob,
        WindowsIcon: Fb,
        WrenchIcon: Ib,
        XIcon: Bb,
        YoutubeIcon: Pb,
        ZoomIcon: Nb,
        ZoomOutIcon: Lb,
        ZoomResetIcon: kb,
        iconList: jb,
      } = __STORYBOOK_ICONS__;
    var zb = __STORYBOOK_CORE_EVENTS__,
      {
        ARGTYPES_INFO_REQUEST: Lo,
        ARGTYPES_INFO_RESPONSE: Fr,
        CHANNEL_CREATED: Hb,
        CHANNEL_WS_DISCONNECT: Gb,
        CONFIG_ERROR: ko,
        CREATE_NEW_STORYFILE_REQUEST: Vb,
        CREATE_NEW_STORYFILE_RESPONSE: Wb,
        CURRENT_STORY_WAS_SET: Ir,
        DOCS_PREPARED: jo,
        DOCS_RENDERED: Ht,
        FILE_COMPONENT_SEARCH_REQUEST: Yb,
        FILE_COMPONENT_SEARCH_RESPONSE: Kb,
        FORCE_REMOUNT: xt,
        FORCE_RE_RENDER: Gt,
        GLOBALS_UPDATED: st,
        NAVIGATE_URL: Xb,
        PLAY_FUNCTION_THREW_EXCEPTION: Vt,
        PRELOAD_ENTRIES: Mo,
        PREVIEW_BUILDER_PROGRESS: Jb,
        PREVIEW_KEYDOWN: $o,
        REGISTER_SUBSCRIPTION: Zb,
        REQUEST_WHATS_NEW_DATA: Qb,
        RESET_STORY_ARGS: Wt,
        RESULT_WHATS_NEW_DATA: eE,
        SAVE_STORY_REQUEST: tE,
        SAVE_STORY_RESPONSE: rE,
        SELECT_STORY: nE,
        SET_CONFIG: oE,
        SET_CURRENT_STORY: Br,
        SET_FILTER: aE,
        SET_GLOBALS: qo,
        SET_INDEX: uE,
        SET_STORIES: iE,
        SET_WHATS_NEW_CACHE: sE,
        SHARED_STATE_CHANGED: lE,
        SHARED_STATE_SET: cE,
        STORIES_COLLAPSE_ALL: pE,
        STORIES_EXPAND_ALL: dE,
        STORY_ARGS_UPDATED: Uo,
        STORY_CHANGED: zo,
        STORY_ERRORED: Ho,
        STORY_FINISHED: Pr,
        STORY_INDEX_INVALIDATED: Go,
        STORY_MISSING: Nr,
        STORY_PREPARED: Vo,
        STORY_RENDERED: Tt,
        STORY_RENDER_PHASE_CHANGED: ke,
        STORY_SPECIFIED: Wo,
        STORY_THREW_EXCEPTION: Yt,
        STORY_UNCHANGED: Yo,
        TELEMETRY_ERROR: hE,
        TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: fE,
        TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: mE,
        TESTING_MODULE_CRASH_REPORT: gE,
        TESTING_MODULE_PROGRESS_REPORT: yE,
        TESTING_MODULE_RUN_ALL_REQUEST: bE,
        TESTING_MODULE_RUN_REQUEST: EE,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: AE,
        UNHANDLED_ERRORS_WHILE_PLAYING: Kt,
        UPDATE_GLOBALS: Xt,
        UPDATE_QUERY_PARAMS: Ko,
        UPDATE_STORY_ARGS: Jt,
      } = __STORYBOOK_CORE_EVENTS__;
    var Rt = (() => {
      let e;
      return (
        typeof window < "u"
          ? (e = window)
          : typeof globalThis < "u"
            ? (e = globalThis)
            : typeof window < "u"
              ? (e = window)
              : typeof self < "u"
                ? (e = self)
                : (e = {}),
        e
      );
    })();
    var PE = __STORYBOOK_CLIENT_LOGGER__,
      { deprecate: NE, logger: LE, once: ds, pretty: kE } = __STORYBOOK_CLIENT_LOGGER__;
    var UE = __STORYBOOK_CHANNELS__,
      {
        Channel: Zt,
        HEARTBEAT_INTERVAL: zE,
        HEARTBEAT_MAX_LATENCY: HE,
        PostMessageTransport: GE,
        WebsocketTransport: VE,
        createBrowserChannel: WE,
      } = __STORYBOOK_CHANNELS__;
    var ZE = __STORYBOOK_CLIENT_LOGGER__,
      { deprecate: je, logger: X, once: Ue, pretty: QE } = __STORYBOOK_CLIENT_LOGGER__;
    var hs = Object.defineProperty,
      oe = (e, t) => hs(e, "name", { value: t, configurable: !0 });
    function ie(e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      var n = Array.from(typeof e == "string" ? [e] : e);
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
      var o = n.reduce(function (i, s) {
        var l = s.match(/\n([\t ]+|(?!\s).)/g);
        return l
          ? i.concat(
              l.map(function (f) {
                var m, y;
                return (y =
                  (m = f.match(/[\t ]/g)) === null || m === void 0 ? void 0 : m.length) !== null &&
                  y !== void 0
                  ? y
                  : 0;
              }),
            )
          : i;
      }, []);
      if (o.length) {
        var a = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, o) +
            "}",
          "g",
        );
        n = n.map(function (i) {
          return i.replace(
            a,
            `
`,
          );
        });
      }
      n[0] = n[0].replace(/^\r?\n/, "");
      var u = n[0];
      return (
        t.forEach(function (i, s) {
          var l = u.match(/(?:^|\n)( *)$/),
            f = l ? l[1] : "",
            m = i;
          typeof i == "string" &&
            i.includes(`
`) &&
            (m = String(i)
              .split(
                `
`,
              )
              .map(function (y, E) {
                return E === 0 ? y : "" + f + y;
              }).join(`
`)),
            (u += m + n[s + 1]);
        }),
        u
      );
    }
    oe(ie, "dedent");
    function Lr({ code: e, category: t }) {
      let r = String(e).padStart(4, "0");
      return `SB_${t}_${r}`;
    }
    oe(Lr, "parseErrorCode");
    var Xo = class Jo extends Error {
      constructor(t) {
        super(Jo.getFullMessage(t)),
          (this.data = {}),
          (this.fromStorybook = !0),
          (this.category = t.category),
          (this.documentation = t.documentation ?? !1),
          (this.code = t.code);
      }
      get fullErrorCode() {
        return Lr({ code: this.code, category: this.category });
      }
      get name() {
        let t = this.constructor.name;
        return `${this.fullErrorCode} (${t})`;
      }
      static getFullMessage({ documentation: t, code: r, category: n, message: o }) {
        let a;
        return (
          t === !0
            ? (a = `https://storybook.js.org/error/${Lr({ code: r, category: n })}`)
            : typeof t == "string"
              ? (a = t)
              : Array.isArray(t) &&
                (a = `
${t.map(u => `	- ${u}`).join(`
`)}`),
          `${o}${
            a != null
              ? `

More info: ${a}
`
              : ""
          }`
        );
      }
    };
    oe(Xo, "StorybookError");
    var pe = Xo,
      fs = (e => (
        (e.BLOCKS = "BLOCKS"),
        (e.DOCS_TOOLS = "DOCS-TOOLS"),
        (e.PREVIEW_CLIENT_LOGGER = "PREVIEW_CLIENT-LOGGER"),
        (e.PREVIEW_CHANNELS = "PREVIEW_CHANNELS"),
        (e.PREVIEW_CORE_EVENTS = "PREVIEW_CORE-EVENTS"),
        (e.PREVIEW_INSTRUMENTER = "PREVIEW_INSTRUMENTER"),
        (e.PREVIEW_API = "PREVIEW_API"),
        (e.PREVIEW_REACT_DOM_SHIM = "PREVIEW_REACT-DOM-SHIM"),
        (e.PREVIEW_ROUTER = "PREVIEW_ROUTER"),
        (e.PREVIEW_THEMING = "PREVIEW_THEMING"),
        (e.RENDERER_HTML = "RENDERER_HTML"),
        (e.RENDERER_PREACT = "RENDERER_PREACT"),
        (e.RENDERER_REACT = "RENDERER_REACT"),
        (e.RENDERER_SERVER = "RENDERER_SERVER"),
        (e.RENDERER_SVELTE = "RENDERER_SVELTE"),
        (e.RENDERER_VUE = "RENDERER_VUE"),
        (e.RENDERER_VUE3 = "RENDERER_VUE3"),
        (e.RENDERER_WEB_COMPONENTS = "RENDERER_WEB-COMPONENTS"),
        (e.FRAMEWORK_NEXTJS = "FRAMEWORK_NEXTJS"),
        (e.ADDON_VITEST = "ADDON_VITEST"),
        e
      ))(fs || {}),
      Zo = class extends pe {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 1,
            message: ie`
        Couldn't find story matching id '${t.storyId}' after HMR.
        - Did you just rename a story?
        - Did you remove it from your CSF file?
        - Are you sure a story with the id '${t.storyId}' exists?
        - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
        - Also check the browser console and terminal for potential error messages.`,
          }),
            (this.data = t);
        }
      };
    oe(Zo, "MissingStoryAfterHmrError");
    var Qo = Zo,
      ms = class extends pe {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 2,
            documentation:
              "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function",
            message: ie`
        We detected that you use an implicit action arg while ${t.phase} of your story.  
        ${
          t.deprecated
            ? `
This is deprecated and won't work in Storybook 8 anymore.
`
            : ""
        }
        Please provide an explicit spy to your args like this:
          import { fn } from '@storybook/test';
          ... 
          args: {
           ${t.name}: fn()
          }`,
          }),
            (this.data = t);
        }
      };
    oe(ms, "ImplicitActionsDuringRendering");
    var ea = class extends pe {
      constructor() {
        super({
          category: "PREVIEW_API",
          code: 3,
          message: ie`
        Cannot call \`storyStore.extract()\` without calling \`storyStore.cacheAllCsfFiles()\` first.

        You probably meant to call \`await preview.extract()\` which does the above for you.`,
        });
      }
    };
    oe(ea, "CalledExtractOnStoreError");
    var ta = ea,
      ra = class extends pe {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 4,
            message: ie`
        Expected your framework's preset to export a \`renderToCanvas\` field.

        Perhaps it needs to be upgraded for Storybook 7.0?`,
            documentation:
              "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field",
          });
        }
      };
    oe(ra, "MissingRenderToCanvasError");
    var na = ra,
      oa = class extends pe {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 5,
            message: ie`
        Called \`Preview.${t.methodName}()\` before initialization.
        
        The preview needs to load the story index before most methods can be called. If you want
        to call \`${t.methodName}\`, try \`await preview.initializationPromise;\` first.
        
        If you didn't call the above code, then likely it was called by an addon that needs to
        do the above.`,
          }),
            (this.data = t);
        }
      };
    oe(oa, "CalledPreviewMethodBeforeInitializationError");
    var Ae = oa,
      aa = class extends pe {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 6,
            message: ie`
        Error fetching \`/index.json\`:
        
        ${t.text}

        If you are in development, this likely indicates a problem with your Storybook process,
        check the terminal for errors.

        If you are in a deployed Storybook, there may have been an issue deploying the full Storybook
        build.`,
          }),
            (this.data = t);
        }
      };
    oe(aa, "StoryIndexFetchError");
    var ua = aa,
      ia = class extends pe {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 7,
            message: ie`
        Tried to render docs entry ${t.storyId} but it is a MDX file that has no CSF
        references, or autodocs for a CSF file that some doesn't refer to itself.
        
        This likely is an internal error in Storybook's indexing, or you've attached the
        \`attached-mdx\` tag to an MDX file that is not attached.`,
          }),
            (this.data = t);
        }
      };
    oe(ia, "MdxFileWithNoCsfReferencesError");
    var sa = ia,
      la = class extends pe {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 8,
            message: ie`
        Couldn't find any stories in your Storybook.

        - Please check your stories field of your main.js config: does it match correctly?
        - Also check the browser console and terminal for error messages.`,
          });
        }
      };
    oe(la, "EmptyIndexError");
    var ca = la,
      pa = class extends pe {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 9,
            message: ie`
        Couldn't find story matching '${t.storySpecifier}'.

        - Are you sure a story with that id exists?
        - Please check your stories field of your main.js config.
        - Also check the browser console and terminal for error messages.`,
          }),
            (this.data = t);
        }
      };
    oe(pa, "NoStoryMatchError");
    var da = pa,
      ha = class extends pe {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 10,
            message: ie`
        Couldn't find story matching id '${t.storyId}' after importing a CSF file.

        The file was indexed as if the story was there, but then after importing the file in the browser
        we didn't find the story. Possible reasons:
        - You are using a custom story indexer that is misbehaving.
        - You have a custom file loader that is removing or renaming exports.

        Please check your browser console and terminal for errors that may explain the issue.`,
          }),
            (this.data = t);
        }
      };
    oe(ha, "MissingStoryFromCsfFileError");
    var fa = ha,
      ma = class extends pe {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 11,
            message: ie`
        Cannot access the Story Store until the index is ready.

        It is not recommended to use methods directly on the Story Store anyway, in Storybook 9 we will
        remove access to the store entirely`,
          });
        }
      };
    oe(ma, "StoryStoreAccessedBeforeInitializationError");
    var ga = ma,
      ya = class extends pe {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 12,
            message: ie`
      Incorrect use of mount in the play function.
      
      To use mount in the play function, you must satisfy the following two requirements: 
      
      1. You *must* destructure the mount property from the \`context\` (the argument passed to your play function). 
         This makes sure that Storybook does not start rendering the story before the play function begins.
      
      2. Your Storybook framework or builder must be configured to transpile to ES2017 or newer. 
         This is because destructuring statements and async/await usages are otherwise transpiled away, 
         which prevents Storybook from recognizing your usage of \`mount\`.
      
      Note that Angular is not supported. As async/await is transpiled to support the zone.js polyfill. 
      
      More info: https://storybook.js.org/docs/writing-tests/interaction-testing#run-code-before-the-component-gets-rendered
      
      Received the following play function:
      ${t.playFunction}`,
          }),
            (this.data = t);
        }
      };
    oe(ya, "MountMustBeDestructuredError");
    var Qt = ya,
      ba = class extends pe {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 14,
            message: ie`
        No render function available for storyId '${t.id}'
      `,
          }),
            (this.data = t);
        }
      };
    oe(ba, "NoRenderFunctionError");
    var Ea = ba,
      Aa = class extends pe {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 15,
            message: ie`
        No component is mounted in your story.
        
        This usually occurs when you destructure mount in the play function, but forget to call it.
        
        For example:

        async play({ mount, canvasElement }) {
          // 👈 mount should be called: await mount(); 
          const canvas = within(canvasElement);
          const button = await canvas.findByRole('button');
          await userEvent.click(button);
        };

        Make sure to either remove it or call mount in your play function.
      `,
          });
        }
      };
    oe(Aa, "NoStoryMountedError");
    var Sa = Aa,
      gs = class extends pe {
        constructor() {
          super({
            category: "FRAMEWORK_NEXTJS",
            code: 1,
            documentation: "https://storybook.js.org/docs/get-started/nextjs#faq",
            message: ie`
      You are importing avif images, but you don't have sharp installed.

      You have to install sharp in order to use image optimization features in Next.js.
      `,
          });
        }
      };
    oe(gs, "NextJsSharpError");
    var ys = class extends pe {
      constructor(t) {
        super({
          category: "FRAMEWORK_NEXTJS",
          code: 2,
          message: ie`
        Tried to access router mocks from "${t.importType}" but they were not created yet. You might be running code in an unsupported environment.
      `,
        }),
          (this.data = t);
      }
    };
    oe(ys, "NextjsRouterMocksNotAvailable");
    var bs = class extends pe {
      constructor(t) {
        super({
          category: "DOCS-TOOLS",
          code: 1,
          documentation: "https://github.com/storybookjs/storybook/issues/26606",
          message: ie`
        There was a failure when generating detailed ArgTypes in ${t.language} for:
        ${JSON.stringify(t.type, null, 2)} 
        
        Storybook will fall back to use a generic type description instead.

        This type is either not supported or it is a bug in the docgen generation in Storybook.
        If you think this is a bug, please detail it as much as possible in the Github issue.
      `,
        }),
          (this.data = t);
      }
    };
    oe(bs, "UnknownArgTypesError");
    var Es = class extends pe {
      constructor(t) {
        super({
          category: "ADDON_VITEST",
          code: 1,
          message: ie`
        Encountered an unsupported value "${t.value}" when setting the viewport ${t.dimension} dimension.
        
        The Storybook plugin only supports values in the following units:
        - px, vh, vw, em, rem and %.
        
        You can either change the viewport for this story to use one of the supported units or skip the test by adding '!test' to the story's tags per https://storybook.js.org/docs/writing-stories/tags
      `,
        }),
          (this.data = t);
      }
    };
    oe(Es, "UnsupportedViewportDimensionError");
    var As = Object.create,
      jr = Object.defineProperty,
      Ss = Object.getOwnPropertyDescriptor,
      ws = Object.getOwnPropertyNames,
      Cs = Object.getPrototypeOf,
      vs = Object.prototype.hasOwnProperty,
      se = (e, t) => jr(e, "name", { value: t, configurable: !0 }),
      Ds = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      xs = (e, t, r, n) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let o of ws(t))
            !vs.call(e, o) &&
              o !== r &&
              jr(e, o, { get: () => t[o], enumerable: !(n = Ss(t, o)) || n.enumerable });
        return e;
      },
      Ts = (e, t, r) => (
        (r = e != null ? As(Cs(e)) : {}),
        xs(t || !e || !e.__esModule ? jr(r, "default", { value: e, enumerable: !0 }) : r, e)
      ),
      Rs = Ds(e => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isEqual = (function () {
            var t = Object.prototype.toString,
              r = Object.getPrototypeOf,
              n = Object.getOwnPropertySymbols
                ? function (o) {
                    return Object.keys(o).concat(Object.getOwnPropertySymbols(o));
                  }
                : Object.keys;
            return function (o, a) {
              return se(function u(i, s, l) {
                var f,
                  m,
                  y,
                  E = t.call(i),
                  w = t.call(s);
                if (i === s) return !0;
                if (i == null || s == null) return !1;
                if (l.indexOf(i) > -1 && l.indexOf(s) > -1) return !0;
                if (
                  (l.push(i, s),
                  E != w ||
                    ((f = n(i)),
                    (m = n(s)),
                    f.length != m.length ||
                      f.some(function (C) {
                        return !u(i[C], s[C], l);
                      })))
                )
                  return !1;
                switch (E.slice(8, -1)) {
                  case "Symbol":
                    return i.valueOf() == s.valueOf();
                  case "Date":
                  case "Number":
                    return +i == +s || (+i != +i && +s != +s);
                  case "RegExp":
                  case "Function":
                  case "String":
                  case "Boolean":
                    return "" + i == "" + s;
                  case "Set":
                  case "Map":
                    (f = i.entries()), (m = s.entries());
                    do if (!u((y = f.next()).value, m.next().value, l)) return !1;
                    while (!y.done);
                    return !0;
                  case "ArrayBuffer":
                    (i = new Uint8Array(i)), (s = new Uint8Array(s));
                  case "DataView":
                    (i = new Uint8Array(i.buffer)), (s = new Uint8Array(s.buffer));
                  case "Float32Array":
                  case "Float64Array":
                  case "Int8Array":
                  case "Int16Array":
                  case "Int32Array":
                  case "Uint8Array":
                  case "Uint16Array":
                  case "Uint32Array":
                  case "Uint8ClampedArray":
                  case "Arguments":
                  case "Array":
                    if (i.length != s.length) return !1;
                    for (y = 0; y < i.length; y++)
                      if ((y in i || y in s) && (y in i != y in s || !u(i[y], s[y], l))) return !1;
                    return !0;
                  case "Object":
                    return u(r(i), r(s), l);
                  default:
                    return !1;
                }
              }, "n")(o, a, []);
            };
          })());
      });
    function va(e) {
      return e
        .replace(/_/g, " ")
        .replace(/-/g, " ")
        .replace(/\./g, " ")
        .replace(/([^\n])([A-Z])([a-z])/g, (t, r, n, o) => `${r} ${n}${o}`)
        .replace(/([a-z])([A-Z])/g, (t, r, n) => `${r} ${n}`)
        .replace(/([a-z])([0-9])/gi, (t, r, n) => `${r} ${n}`)
        .replace(/([0-9])([a-z])/gi, (t, r, n) => `${r} ${n}`)
        .replace(/(\s|^)(\w)/g, (t, r, n) => `${r}${n.toUpperCase()}`)
        .replace(/ +/g, " ")
        .trim();
    }
    se(va, "toStartCaseStr");
    var wa = Ts(Rs(), 1),
      Da = se(e => e.map(t => typeof t < "u").filter(Boolean).length, "count"),
      _s = se((e, t) => {
        let { exists: r, eq: n, neq: o, truthy: a } = e;
        if (Da([r, n, o, a]) > 1)
          throw new Error(
            `Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: o })}`,
          );
        if (typeof n < "u") return (0, wa.isEqual)(t, n);
        if (typeof o < "u") return !(0, wa.isEqual)(t, o);
        if (typeof r < "u") {
          let u = typeof t < "u";
          return r ? u : !u;
        }
        return typeof a > "u" || a ? !!t : !t;
      }, "testValue"),
      xa = se((e, t, r) => {
        if (!e.if) return !0;
        let { arg: n, global: o } = e.if;
        if (Da([n, o]) !== 1)
          throw new Error(`Invalid conditional value ${JSON.stringify({ arg: n, global: o })}`);
        let a = n ? t[n] : r[o];
        return _s(e.if, a);
      }, "includeConditionalArg");
    function Os(e) {
      let t,
        r = {
          _tag: "Preview",
          input: e,
          get composed() {
            if (t) return t;
            let { addons: n, ...o } = e;
            return (t = ct(et([...(n ?? []), o]))), t;
          },
          meta(n) {
            return Ta(n, this);
          },
        };
      return (globalThis.globalProjectAnnotations = r.composed), r;
    }
    se(Os, "__definePreview");
    function Fs(e) {
      return e != null && typeof e == "object" && "_tag" in e && e?._tag === "Preview";
    }
    se(Fs, "isPreview");
    function Is(e) {
      return e != null && typeof e == "object" && "_tag" in e && e?._tag === "Meta";
    }
    se(Is, "isMeta");
    function Ta(e, t) {
      return {
        _tag: "Meta",
        input: e,
        preview: t,
        get composed() {
          throw new Error("Not implemented");
        },
        story(r) {
          return Ra(r, this);
        },
      };
    }
    se(Ta, "defineMeta");
    function Ra(e, t) {
      return {
        _tag: "Story",
        input: e,
        meta: t,
        get composed() {
          throw new Error("Not implemented");
        },
      };
    }
    se(Ra, "defineStory");
    function Qe(e) {
      return e != null && typeof e == "object" && "_tag" in e && e?._tag === "Story";
    }
    se(Qe, "isStory");
    var Mr = se(
        e =>
          e
            .toLowerCase()
            .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-")
            .replace(/-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        "sanitize",
      ),
      Ca = se((e, t) => {
        let r = Mr(e);
        if (r === "") throw new Error(`Invalid ${t} '${e}', must include alphanumeric characters`);
        return r;
      }, "sanitizeSafe"),
      _a = se((e, t) => `${Ca(e, "kind")}${t ? `--${Ca(t, "name")}` : ""}`, "toId"),
      Oa = se(e => va(e), "storyNameFromExport");
    function kr(e, t) {
      return Array.isArray(t) ? t.includes(e) : e.match(t);
    }
    se(kr, "matches");
    function lt(e, { includeStories: t, excludeStories: r }) {
      return e !== "__esModule" && (!t || kr(e, t)) && (!r || !kr(e, r));
    }
    se(lt, "isExportStory");
    var TA = se((e, { rootSeparator: t, groupSeparator: r }) => {
        let [n, o] = e.split(t, 2),
          a = (o || e).split(r).filter(u => !!u);
        return { root: o ? n : null, groups: a };
      }, "parseKind"),
      Fa = se((...e) => {
        let t = e.reduce(
          (r, n) => (n.startsWith("!") ? r.delete(n.slice(1)) : r.add(n), r),
          new Set(),
        );
        return Array.from(t);
      }, "combineTags");
    var Bs = Object.create,
      sn = Object.defineProperty,
      Ps = Object.getOwnPropertyDescriptor,
      Ns = Object.getOwnPropertyNames,
      Ls = Object.getPrototypeOf,
      ks = Object.prototype.hasOwnProperty,
      d = (e, t) => sn(e, "name", { value: t, configurable: !0 }),
      er = (e =>
        typeof Ee < "u"
          ? Ee
          : typeof Proxy < "u"
            ? new Proxy(e, { get: (t, r) => (typeof Ee < "u" ? Ee : t)[r] })
            : e)(function (e) {
        if (typeof Ee < "u") return Ee.apply(this, arguments);
        throw Error('Dynamic require of "' + e + '" is not supported');
      }),
      he = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      js = (e, t, r, n) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let o of Ns(t))
            !ks.call(e, o) &&
              o !== r &&
              sn(e, o, { get: () => t[o], enumerable: !(n = Ps(t, o)) || n.enumerable });
        return e;
      },
      ft = (e, t, r) => (
        (r = e != null ? Bs(Ls(e)) : {}),
        js(t || !e || !e.__esModule ? sn(r, "default", { value: e, enumerable: !0 }) : r, e)
      ),
      Wa = he((e, t) => {
        (function (r) {
          if (typeof e == "object" && typeof t < "u") t.exports = r();
          else if (typeof define == "function" && define.amd) define([], r);
          else {
            var n;
            typeof window < "u" || typeof window < "u"
              ? (n = window)
              : typeof self < "u"
                ? (n = self)
                : (n = this),
              (n.memoizerific = r());
          }
        })(function () {
          var r, n, o;
          return d(function a(u, i, s) {
            function l(y, E) {
              if (!i[y]) {
                if (!u[y]) {
                  var w = typeof er == "function" && er;
                  if (!E && w) return w(y, !0);
                  if (f) return f(y, !0);
                  var C = new Error("Cannot find module '" + y + "'");
                  throw ((C.code = "MODULE_NOT_FOUND"), C);
                }
                var b = (i[y] = { exports: {} });
                u[y][0].call(
                  b.exports,
                  function (S) {
                    var A = u[y][1][S];
                    return l(A || S);
                  },
                  b,
                  b.exports,
                  a,
                  u,
                  i,
                  s,
                );
              }
              return i[y].exports;
            }
            d(l, "s");
            for (var f = typeof er == "function" && er, m = 0; m < s.length; m++) l(s[m]);
            return l;
          }, "e")(
            {
              1: [
                function (a, u, i) {
                  u.exports = function (s) {
                    if (typeof Map != "function" || s) {
                      var l = a("./similar");
                      return new l();
                    } else return new Map();
                  };
                },
                { "./similar": 2 },
              ],
              2: [
                function (a, u, i) {
                  function s() {
                    return (this.list = []), (this.lastItem = void 0), (this.size = 0), this;
                  }
                  d(s, "Similar"),
                    (s.prototype.get = function (l) {
                      var f;
                      if (this.lastItem && this.isEqual(this.lastItem.key, l))
                        return this.lastItem.val;
                      if (((f = this.indexOf(l)), f >= 0))
                        return (this.lastItem = this.list[f]), this.list[f].val;
                    }),
                    (s.prototype.set = function (l, f) {
                      var m;
                      return this.lastItem && this.isEqual(this.lastItem.key, l)
                        ? ((this.lastItem.val = f), this)
                        : ((m = this.indexOf(l)),
                          m >= 0
                            ? ((this.lastItem = this.list[m]), (this.list[m].val = f), this)
                            : ((this.lastItem = { key: l, val: f }),
                              this.list.push(this.lastItem),
                              this.size++,
                              this));
                    }),
                    (s.prototype.delete = function (l) {
                      var f;
                      if (
                        (this.lastItem &&
                          this.isEqual(this.lastItem.key, l) &&
                          (this.lastItem = void 0),
                        (f = this.indexOf(l)),
                        f >= 0)
                      )
                        return this.size--, this.list.splice(f, 1)[0];
                    }),
                    (s.prototype.has = function (l) {
                      var f;
                      return this.lastItem && this.isEqual(this.lastItem.key, l)
                        ? !0
                        : ((f = this.indexOf(l)),
                          f >= 0 ? ((this.lastItem = this.list[f]), !0) : !1);
                    }),
                    (s.prototype.forEach = function (l, f) {
                      var m;
                      for (m = 0; m < this.size; m++)
                        l.call(f || this, this.list[m].val, this.list[m].key, this);
                    }),
                    (s.prototype.indexOf = function (l) {
                      var f;
                      for (f = 0; f < this.size; f++)
                        if (this.isEqual(this.list[f].key, l)) return f;
                      return -1;
                    }),
                    (s.prototype.isEqual = function (l, f) {
                      return l === f || (l !== l && f !== f);
                    }),
                    (u.exports = s);
                },
                {},
              ],
              3: [
                function (a, u, i) {
                  var s = a("map-or-similar");
                  u.exports = function (y) {
                    var E = new s(!1),
                      w = [];
                    return function (C) {
                      var b = d(function () {
                        var S = E,
                          A,
                          x,
                          _ = arguments.length - 1,
                          I = Array(_ + 1),
                          v = !0,
                          T;
                        if ((b.numArgs || b.numArgs === 0) && b.numArgs !== _ + 1)
                          throw new Error(
                            "Memoizerific functions should always be called with the same number of arguments",
                          );
                        for (T = 0; T < _; T++) {
                          if (((I[T] = { cacheItem: S, arg: arguments[T] }), S.has(arguments[T]))) {
                            S = S.get(arguments[T]);
                            continue;
                          }
                          (v = !1), (A = new s(!1)), S.set(arguments[T], A), (S = A);
                        }
                        return (
                          v && (S.has(arguments[_]) ? (x = S.get(arguments[_])) : (v = !1)),
                          v || ((x = C.apply(null, arguments)), S.set(arguments[_], x)),
                          y > 0 &&
                            ((I[_] = { cacheItem: S, arg: arguments[_] }),
                            v ? l(w, I) : w.push(I),
                            w.length > y && f(w.shift())),
                          (b.wasMemoized = v),
                          (b.numArgs = _ + 1),
                          x
                        );
                      }, "memoizerific");
                      return (b.limit = y), (b.wasMemoized = !1), (b.cache = E), (b.lru = w), b;
                    };
                  };
                  function l(y, E) {
                    var w = y.length,
                      C = E.length,
                      b,
                      S,
                      A;
                    for (S = 0; S < w; S++) {
                      for (b = !0, A = 0; A < C; A++)
                        if (!m(y[S][A].arg, E[A].arg)) {
                          b = !1;
                          break;
                        }
                      if (b) break;
                    }
                    y.push(y.splice(S, 1)[0]);
                  }
                  d(l, "moveToMostRecentLru");
                  function f(y) {
                    var E = y.length,
                      w = y[E - 1],
                      C,
                      b;
                    for (
                      w.cacheItem.delete(w.arg), b = E - 2;
                      b >= 0 && ((w = y[b]), (C = w.cacheItem.get(w.arg)), !C || !C.size);
                      b--
                    )
                      w.cacheItem.delete(w.arg);
                  }
                  d(f, "removeCachedResult");
                  function m(y, E) {
                    return y === E || (y !== y && E !== E);
                  }
                  d(m, "isEqual");
                },
                { "map-or-similar": 1 },
              ],
            },
            {},
            [3],
          )(3);
        });
      }),
      Ya = he(e => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.encodeString = n);
        var t = Array.from(
            { length: 256 },
            (o, a) => "%" + ((a < 16 ? "0" : "") + a.toString(16)).toUpperCase(),
          ),
          r = new Int8Array([
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0,
          ]);
        function n(o) {
          let a = o.length;
          if (a === 0) return "";
          let u = "",
            i = 0,
            s = 0;
          e: for (; s < a; s++) {
            let l = o.charCodeAt(s);
            for (; l < 128; ) {
              if (
                (r[l] !== 1 && (i < s && (u += o.slice(i, s)), (i = s + 1), (u += t[l])), ++s === a)
              )
                break e;
              l = o.charCodeAt(s);
            }
            if ((i < s && (u += o.slice(i, s)), l < 2048)) {
              (i = s + 1), (u += t[192 | (l >> 6)] + t[128 | (l & 63)]);
              continue;
            }
            if (l < 55296 || l >= 57344) {
              (i = s + 1), (u += t[224 | (l >> 12)] + t[128 | ((l >> 6) & 63)] + t[128 | (l & 63)]);
              continue;
            }
            if ((++s, s >= a)) throw new Error("URI malformed");
            let f = o.charCodeAt(s) & 1023;
            (i = s + 1),
              (l = 65536 + (((l & 1023) << 10) | f)),
              (u +=
                t[240 | (l >> 18)] +
                t[128 | ((l >> 12) & 63)] +
                t[128 | ((l >> 6) & 63)] +
                t[128 | (l & 63)]);
          }
          return i === 0 ? o : i < a ? u + o.slice(i) : u;
        }
        d(n, "encodeString");
      }),
      ln = he(e => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.defaultOptions = e.defaultShouldSerializeObject = e.defaultValueSerializer = void 0);
        var t = Ya(),
          r = d(a => {
            switch (typeof a) {
              case "string":
                return (0, t.encodeString)(a);
              case "bigint":
              case "boolean":
                return "" + a;
              case "number":
                if (Number.isFinite(a)) return a < 1e21 ? "" + a : (0, t.encodeString)("" + a);
                break;
            }
            return a instanceof Date ? (0, t.encodeString)(a.toISOString()) : "";
          }, "defaultValueSerializer");
        e.defaultValueSerializer = r;
        var n = d(a => a instanceof Date, "defaultShouldSerializeObject");
        e.defaultShouldSerializeObject = n;
        var o = d(a => a, "identityFunc");
        e.defaultOptions = {
          nesting: !0,
          nestingSyntax: "dot",
          arrayRepeat: !1,
          arrayRepeatSyntax: "repeat",
          delimiter: 38,
          valueDeserializer: o,
          valueSerializer: e.defaultValueSerializer,
          keyDeserializer: o,
          shouldSerializeObject: e.defaultShouldSerializeObject,
        };
      }),
      Ka = he(e => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getDeepObject = o),
          (e.stringifyObject = f);
        var t = ln(),
          r = Ya();
        function n(m) {
          return m === "__proto__" || m === "constructor" || m === "prototype";
        }
        d(n, "isPrototypeKey");
        function o(m, y, E, w, C) {
          if (n(y)) return m;
          let b = m[y];
          return typeof b == "object" && b !== null
            ? b
            : !w &&
                (C ||
                  typeof E == "number" ||
                  (typeof E == "string" && E * 0 === 0 && E.indexOf(".") === -1))
              ? (m[y] = [])
              : (m[y] = {});
        }
        d(o, "getDeepObject");
        var a = 20,
          u = "[]",
          i = "[",
          s = "]",
          l = ".";
        function f(m, y, E = 0, w, C) {
          let {
              nestingSyntax: b = t.defaultOptions.nestingSyntax,
              arrayRepeat: S = t.defaultOptions.arrayRepeat,
              arrayRepeatSyntax: A = t.defaultOptions.arrayRepeatSyntax,
              nesting: x = t.defaultOptions.nesting,
              delimiter: _ = t.defaultOptions.delimiter,
              valueSerializer: I = t.defaultOptions.valueSerializer,
              shouldSerializeObject: v = t.defaultOptions.shouldSerializeObject,
            } = y,
            T = typeof _ == "number" ? String.fromCharCode(_) : _,
            B = C === !0 && S,
            L = b === "dot" || (b === "js" && !C);
          if (E > a) return "";
          let k = "",
            q = !0,
            P = !1;
          for (let M in m) {
            let h = m[M],
              p;
            w
              ? ((p = w),
                B
                  ? A === "bracket" && (p += u)
                  : L
                    ? ((p += l), (p += M))
                    : ((p += i), (p += M), (p += s)))
              : (p = M),
              q || (k += T),
              typeof h == "object" && h !== null && !v(h)
                ? ((P = h.pop !== void 0), (x || (S && P)) && (k += f(h, y, E + 1, p, P)))
                : ((k += (0, r.encodeString)(p)), (k += "="), (k += I(h, M))),
              q && (q = !1);
          }
          return k;
        }
        d(f, "stringifyObject");
      }),
      Ms = he((e, t) => {
        "use strict";
        var r = 12,
          n = 0,
          o = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7,
            7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0,
            31, 15, 15, 15, 7, 7, 7,
          ];
        function a(s) {
          var l = s.indexOf("%");
          if (l === -1) return s;
          for (var f = s.length, m = "", y = 0, E = 0, w = l, C = r; l > -1 && l < f; ) {
            var b = i(s[l + 1], 4),
              S = i(s[l + 2], 0),
              A = b | S,
              x = o[A];
            if (((C = o[256 + C + x]), (E = (E << 6) | (A & o[364 + x])), C === r))
              (m += s.slice(y, w)),
                (m +=
                  E <= 65535
                    ? String.fromCharCode(E)
                    : String.fromCharCode(55232 + (E >> 10), 56320 + (E & 1023))),
                (E = 0),
                (y = l + 3),
                (l = w = s.indexOf("%", y));
            else {
              if (C === n) return null;
              if (((l += 3), l < f && s.charCodeAt(l) === 37)) continue;
              return null;
            }
          }
          return m + s.slice(y);
        }
        d(a, "decodeURIComponent");
        var u = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          a: 10,
          A: 10,
          b: 11,
          B: 11,
          c: 12,
          C: 12,
          d: 13,
          D: 13,
          e: 14,
          E: 14,
          f: 15,
          F: 15,
        };
        function i(s, l) {
          var f = u[s];
          return f === void 0 ? 255 : f << l;
        }
        d(i, "hexCodeToInt"), (t.exports = a);
      }),
      $s = he(e => {
        "use strict";
        var t =
          (e && e.__importDefault) ||
          function (m) {
            return m && m.__esModule ? m : { default: m };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.numberValueDeserializer = e.numberKeyDeserializer = void 0),
          (e.parse = f);
        var r = Ka(),
          n = ln(),
          o = t(Ms()),
          a = d(m => {
            let y = Number(m);
            return Number.isNaN(y) ? m : y;
          }, "numberKeyDeserializer");
        e.numberKeyDeserializer = a;
        var u = d(m => {
          let y = Number(m);
          return Number.isNaN(y) ? m : y;
        }, "numberValueDeserializer");
        e.numberValueDeserializer = u;
        var i = /\+/g,
          s = d(function () {}, "Empty");
        s.prototype = Object.create(null);
        function l(m, y, E, w, C) {
          let b = m.substring(y, E);
          return w && (b = b.replace(i, " ")), C && (b = (0, o.default)(b) || b), b;
        }
        d(l, "computeKeySlice");
        function f(m, y) {
          let {
              valueDeserializer: E = n.defaultOptions.valueDeserializer,
              keyDeserializer: w = n.defaultOptions.keyDeserializer,
              arrayRepeatSyntax: C = n.defaultOptions.arrayRepeatSyntax,
              nesting: b = n.defaultOptions.nesting,
              arrayRepeat: S = n.defaultOptions.arrayRepeat,
              nestingSyntax: A = n.defaultOptions.nestingSyntax,
              delimiter: x = n.defaultOptions.delimiter,
            } = y ?? {},
            _ = typeof x == "string" ? x.charCodeAt(0) : x,
            I = A === "js",
            v = new s();
          if (typeof m != "string") return v;
          let T = m.length,
            B = "",
            L = -1,
            k = -1,
            q = -1,
            P = v,
            M,
            h = "",
            p = "",
            g = !1,
            R = !1,
            D = !1,
            O = !1,
            F = !1,
            N = !1,
            j = !1,
            Q = 0,
            te = -1,
            J = -1,
            ue = -1;
          for (let V = 0; V < T + 1; V++) {
            if (((Q = V !== T ? m.charCodeAt(V) : _), Q === _)) {
              if (
                ((j = k > L),
                j || (k = V),
                q !== k - 1 &&
                  ((p = l(m, q + 1, te > -1 ? te : k, D, g)),
                  (h = w(p)),
                  M !== void 0 && (P = (0, r.getDeepObject)(P, M, h, I && F, I && N))),
                j || h !== "")
              ) {
                j &&
                  ((B = m.slice(k + 1, V)),
                  O && (B = B.replace(i, " ")),
                  R && (B = (0, o.default)(B) || B));
                let ce = E(B, h);
                if (S) {
                  let De = P[h];
                  De === void 0
                    ? te > -1
                      ? (P[h] = [ce])
                      : (P[h] = ce)
                    : De.pop
                      ? De.push(ce)
                      : (P[h] = [De, ce]);
                } else P[h] = ce;
              }
              (B = ""),
                (L = V),
                (k = V),
                (g = !1),
                (R = !1),
                (D = !1),
                (O = !1),
                (F = !1),
                (N = !1),
                (te = -1),
                (q = V),
                (P = v),
                (M = void 0),
                (h = "");
            } else
              Q === 93
                ? (S && C === "bracket" && ue === 91 && (te = J),
                  b &&
                    (A === "index" || I) &&
                    k <= L &&
                    (q !== J &&
                      ((p = l(m, q + 1, V, D, g)),
                      (h = w(p)),
                      M !== void 0 && (P = (0, r.getDeepObject)(P, M, h, void 0, I)),
                      (M = h),
                      (D = !1),
                      (g = !1)),
                    (q = V),
                    (N = !0),
                    (F = !1)))
                : Q === 46
                  ? b &&
                    (A === "dot" || I) &&
                    k <= L &&
                    (q !== J &&
                      ((p = l(m, q + 1, V, D, g)),
                      (h = w(p)),
                      M !== void 0 && (P = (0, r.getDeepObject)(P, M, h, I)),
                      (M = h),
                      (D = !1),
                      (g = !1)),
                    (F = !0),
                    (N = !1),
                    (q = V))
                  : Q === 91
                    ? b &&
                      (A === "index" || I) &&
                      k <= L &&
                      (q !== J &&
                        ((p = l(m, q + 1, V, D, g)),
                        (h = w(p)),
                        I && M !== void 0 && (P = (0, r.getDeepObject)(P, M, h, I)),
                        (M = h),
                        (D = !1),
                        (g = !1),
                        (F = !1),
                        (N = !0)),
                      (q = V))
                    : Q === 61
                      ? k <= L
                        ? (k = V)
                        : (R = !0)
                      : Q === 43
                        ? k > L
                          ? (O = !0)
                          : (D = !0)
                        : Q === 37 && (k > L ? (R = !0) : (g = !0));
            (J = V), (ue = Q);
          }
          return v;
        }
        d(f, "parse");
      }),
      qs = he(e => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.stringify = r);
        var t = Ka();
        function r(n, o) {
          if (n === null || typeof n != "object") return "";
          let a = o ?? {};
          return (0, t.stringifyObject)(n, a);
        }
        d(r, "stringify");
      }),
      cn = he(e => {
        "use strict";
        var t =
            (e && e.__createBinding) ||
            (Object.create
              ? function (a, u, i, s) {
                  s === void 0 && (s = i);
                  var l = Object.getOwnPropertyDescriptor(u, i);
                  (!l || ("get" in l ? !u.__esModule : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: d(function () {
                        return u[i];
                      }, "get"),
                    }),
                    Object.defineProperty(a, s, l);
                }
              : function (a, u, i, s) {
                  s === void 0 && (s = i), (a[s] = u[i]);
                }),
          r =
            (e && e.__exportStar) ||
            function (a, u) {
              for (var i in a)
                i !== "default" && !Object.prototype.hasOwnProperty.call(u, i) && t(u, a, i);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.stringify = e.parse = void 0);
        var n = $s();
        Object.defineProperty(e, "parse", {
          enumerable: !0,
          get: d(function () {
            return n.parse;
          }, "get"),
        });
        var o = qs();
        Object.defineProperty(e, "stringify", {
          enumerable: !0,
          get: d(function () {
            return o.stringify;
          }, "get"),
        }),
          r(ln(), e);
      }),
      Xa = he((e, t) => {
        t.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Abreve: "\u0102",
          abreve: "\u0103",
          ac: "\u223E",
          acd: "\u223F",
          acE: "\u223E\u0333",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          Acy: "\u0410",
          acy: "\u0430",
          AElig: "\xC6",
          aelig: "\xE6",
          af: "\u2061",
          Afr: "\u{1D504}",
          afr: "\u{1D51E}",
          Agrave: "\xC0",
          agrave: "\xE0",
          alefsym: "\u2135",
          aleph: "\u2135",
          Alpha: "\u0391",
          alpha: "\u03B1",
          Amacr: "\u0100",
          amacr: "\u0101",
          amalg: "\u2A3F",
          amp: "&",
          AMP: "&",
          andand: "\u2A55",
          And: "\u2A53",
          and: "\u2227",
          andd: "\u2A5C",
          andslope: "\u2A58",
          andv: "\u2A5A",
          ang: "\u2220",
          ange: "\u29A4",
          angle: "\u2220",
          angmsdaa: "\u29A8",
          angmsdab: "\u29A9",
          angmsdac: "\u29AA",
          angmsdad: "\u29AB",
          angmsdae: "\u29AC",
          angmsdaf: "\u29AD",
          angmsdag: "\u29AE",
          angmsdah: "\u29AF",
          angmsd: "\u2221",
          angrt: "\u221F",
          angrtvb: "\u22BE",
          angrtvbd: "\u299D",
          angsph: "\u2222",
          angst: "\xC5",
          angzarr: "\u237C",
          Aogon: "\u0104",
          aogon: "\u0105",
          Aopf: "\u{1D538}",
          aopf: "\u{1D552}",
          apacir: "\u2A6F",
          ap: "\u2248",
          apE: "\u2A70",
          ape: "\u224A",
          apid: "\u224B",
          apos: "'",
          ApplyFunction: "\u2061",
          approx: "\u2248",
          approxeq: "\u224A",
          Aring: "\xC5",
          aring: "\xE5",
          Ascr: "\u{1D49C}",
          ascr: "\u{1D4B6}",
          Assign: "\u2254",
          ast: "*",
          asymp: "\u2248",
          asympeq: "\u224D",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          awconint: "\u2233",
          awint: "\u2A11",
          backcong: "\u224C",
          backepsilon: "\u03F6",
          backprime: "\u2035",
          backsim: "\u223D",
          backsimeq: "\u22CD",
          Backslash: "\u2216",
          Barv: "\u2AE7",
          barvee: "\u22BD",
          barwed: "\u2305",
          Barwed: "\u2306",
          barwedge: "\u2305",
          bbrk: "\u23B5",
          bbrktbrk: "\u23B6",
          bcong: "\u224C",
          Bcy: "\u0411",
          bcy: "\u0431",
          bdquo: "\u201E",
          becaus: "\u2235",
          because: "\u2235",
          Because: "\u2235",
          bemptyv: "\u29B0",
          bepsi: "\u03F6",
          bernou: "\u212C",
          Bernoullis: "\u212C",
          Beta: "\u0392",
          beta: "\u03B2",
          beth: "\u2136",
          between: "\u226C",
          Bfr: "\u{1D505}",
          bfr: "\u{1D51F}",
          bigcap: "\u22C2",
          bigcirc: "\u25EF",
          bigcup: "\u22C3",
          bigodot: "\u2A00",
          bigoplus: "\u2A01",
          bigotimes: "\u2A02",
          bigsqcup: "\u2A06",
          bigstar: "\u2605",
          bigtriangledown: "\u25BD",
          bigtriangleup: "\u25B3",
          biguplus: "\u2A04",
          bigvee: "\u22C1",
          bigwedge: "\u22C0",
          bkarow: "\u290D",
          blacklozenge: "\u29EB",
          blacksquare: "\u25AA",
          blacktriangle: "\u25B4",
          blacktriangledown: "\u25BE",
          blacktriangleleft: "\u25C2",
          blacktriangleright: "\u25B8",
          blank: "\u2423",
          blk12: "\u2592",
          blk14: "\u2591",
          blk34: "\u2593",
          block: "\u2588",
          bne: "=\u20E5",
          bnequiv: "\u2261\u20E5",
          bNot: "\u2AED",
          bnot: "\u2310",
          Bopf: "\u{1D539}",
          bopf: "\u{1D553}",
          bot: "\u22A5",
          bottom: "\u22A5",
          bowtie: "\u22C8",
          boxbox: "\u29C9",
          boxdl: "\u2510",
          boxdL: "\u2555",
          boxDl: "\u2556",
          boxDL: "\u2557",
          boxdr: "\u250C",
          boxdR: "\u2552",
          boxDr: "\u2553",
          boxDR: "\u2554",
          boxh: "\u2500",
          boxH: "\u2550",
          boxhd: "\u252C",
          boxHd: "\u2564",
          boxhD: "\u2565",
          boxHD: "\u2566",
          boxhu: "\u2534",
          boxHu: "\u2567",
          boxhU: "\u2568",
          boxHU: "\u2569",
          boxminus: "\u229F",
          boxplus: "\u229E",
          boxtimes: "\u22A0",
          boxul: "\u2518",
          boxuL: "\u255B",
          boxUl: "\u255C",
          boxUL: "\u255D",
          boxur: "\u2514",
          boxuR: "\u2558",
          boxUr: "\u2559",
          boxUR: "\u255A",
          boxv: "\u2502",
          boxV: "\u2551",
          boxvh: "\u253C",
          boxvH: "\u256A",
          boxVh: "\u256B",
          boxVH: "\u256C",
          boxvl: "\u2524",
          boxvL: "\u2561",
          boxVl: "\u2562",
          boxVL: "\u2563",
          boxvr: "\u251C",
          boxvR: "\u255E",
          boxVr: "\u255F",
          boxVR: "\u2560",
          bprime: "\u2035",
          breve: "\u02D8",
          Breve: "\u02D8",
          brvbar: "\xA6",
          bscr: "\u{1D4B7}",
          Bscr: "\u212C",
          bsemi: "\u204F",
          bsim: "\u223D",
          bsime: "\u22CD",
          bsolb: "\u29C5",
          bsol: "\\",
          bsolhsub: "\u27C8",
          bull: "\u2022",
          bullet: "\u2022",
          bump: "\u224E",
          bumpE: "\u2AAE",
          bumpe: "\u224F",
          Bumpeq: "\u224E",
          bumpeq: "\u224F",
          Cacute: "\u0106",
          cacute: "\u0107",
          capand: "\u2A44",
          capbrcup: "\u2A49",
          capcap: "\u2A4B",
          cap: "\u2229",
          Cap: "\u22D2",
          capcup: "\u2A47",
          capdot: "\u2A40",
          CapitalDifferentialD: "\u2145",
          caps: "\u2229\uFE00",
          caret: "\u2041",
          caron: "\u02C7",
          Cayleys: "\u212D",
          ccaps: "\u2A4D",
          Ccaron: "\u010C",
          ccaron: "\u010D",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          Ccirc: "\u0108",
          ccirc: "\u0109",
          Cconint: "\u2230",
          ccups: "\u2A4C",
          ccupssm: "\u2A50",
          Cdot: "\u010A",
          cdot: "\u010B",
          cedil: "\xB8",
          Cedilla: "\xB8",
          cemptyv: "\u29B2",
          cent: "\xA2",
          centerdot: "\xB7",
          CenterDot: "\xB7",
          cfr: "\u{1D520}",
          Cfr: "\u212D",
          CHcy: "\u0427",
          chcy: "\u0447",
          check: "\u2713",
          checkmark: "\u2713",
          Chi: "\u03A7",
          chi: "\u03C7",
          circ: "\u02C6",
          circeq: "\u2257",
          circlearrowleft: "\u21BA",
          circlearrowright: "\u21BB",
          circledast: "\u229B",
          circledcirc: "\u229A",
          circleddash: "\u229D",
          CircleDot: "\u2299",
          circledR: "\xAE",
          circledS: "\u24C8",
          CircleMinus: "\u2296",
          CirclePlus: "\u2295",
          CircleTimes: "\u2297",
          cir: "\u25CB",
          cirE: "\u29C3",
          cire: "\u2257",
          cirfnint: "\u2A10",
          cirmid: "\u2AEF",
          cirscir: "\u29C2",
          ClockwiseContourIntegral: "\u2232",
          CloseCurlyDoubleQuote: "\u201D",
          CloseCurlyQuote: "\u2019",
          clubs: "\u2663",
          clubsuit: "\u2663",
          colon: ":",
          Colon: "\u2237",
          Colone: "\u2A74",
          colone: "\u2254",
          coloneq: "\u2254",
          comma: ",",
          commat: "@",
          comp: "\u2201",
          compfn: "\u2218",
          complement: "\u2201",
          complexes: "\u2102",
          cong: "\u2245",
          congdot: "\u2A6D",
          Congruent: "\u2261",
          conint: "\u222E",
          Conint: "\u222F",
          ContourIntegral: "\u222E",
          copf: "\u{1D554}",
          Copf: "\u2102",
          coprod: "\u2210",
          Coproduct: "\u2210",
          copy: "\xA9",
          COPY: "\xA9",
          copysr: "\u2117",
          CounterClockwiseContourIntegral: "\u2233",
          crarr: "\u21B5",
          cross: "\u2717",
          Cross: "\u2A2F",
          Cscr: "\u{1D49E}",
          cscr: "\u{1D4B8}",
          csub: "\u2ACF",
          csube: "\u2AD1",
          csup: "\u2AD0",
          csupe: "\u2AD2",
          ctdot: "\u22EF",
          cudarrl: "\u2938",
          cudarrr: "\u2935",
          cuepr: "\u22DE",
          cuesc: "\u22DF",
          cularr: "\u21B6",
          cularrp: "\u293D",
          cupbrcap: "\u2A48",
          cupcap: "\u2A46",
          CupCap: "\u224D",
          cup: "\u222A",
          Cup: "\u22D3",
          cupcup: "\u2A4A",
          cupdot: "\u228D",
          cupor: "\u2A45",
          cups: "\u222A\uFE00",
          curarr: "\u21B7",
          curarrm: "\u293C",
          curlyeqprec: "\u22DE",
          curlyeqsucc: "\u22DF",
          curlyvee: "\u22CE",
          curlywedge: "\u22CF",
          curren: "\xA4",
          curvearrowleft: "\u21B6",
          curvearrowright: "\u21B7",
          cuvee: "\u22CE",
          cuwed: "\u22CF",
          cwconint: "\u2232",
          cwint: "\u2231",
          cylcty: "\u232D",
          dagger: "\u2020",
          Dagger: "\u2021",
          daleth: "\u2138",
          darr: "\u2193",
          Darr: "\u21A1",
          dArr: "\u21D3",
          dash: "\u2010",
          Dashv: "\u2AE4",
          dashv: "\u22A3",
          dbkarow: "\u290F",
          dblac: "\u02DD",
          Dcaron: "\u010E",
          dcaron: "\u010F",
          Dcy: "\u0414",
          dcy: "\u0434",
          ddagger: "\u2021",
          ddarr: "\u21CA",
          DD: "\u2145",
          dd: "\u2146",
          DDotrahd: "\u2911",
          ddotseq: "\u2A77",
          deg: "\xB0",
          Del: "\u2207",
          Delta: "\u0394",
          delta: "\u03B4",
          demptyv: "\u29B1",
          dfisht: "\u297F",
          Dfr: "\u{1D507}",
          dfr: "\u{1D521}",
          dHar: "\u2965",
          dharl: "\u21C3",
          dharr: "\u21C2",
          DiacriticalAcute: "\xB4",
          DiacriticalDot: "\u02D9",
          DiacriticalDoubleAcute: "\u02DD",
          DiacriticalGrave: "`",
          DiacriticalTilde: "\u02DC",
          diam: "\u22C4",
          diamond: "\u22C4",
          Diamond: "\u22C4",
          diamondsuit: "\u2666",
          diams: "\u2666",
          die: "\xA8",
          DifferentialD: "\u2146",
          digamma: "\u03DD",
          disin: "\u22F2",
          div: "\xF7",
          divide: "\xF7",
          divideontimes: "\u22C7",
          divonx: "\u22C7",
          DJcy: "\u0402",
          djcy: "\u0452",
          dlcorn: "\u231E",
          dlcrop: "\u230D",
          dollar: "$",
          Dopf: "\u{1D53B}",
          dopf: "\u{1D555}",
          Dot: "\xA8",
          dot: "\u02D9",
          DotDot: "\u20DC",
          doteq: "\u2250",
          doteqdot: "\u2251",
          DotEqual: "\u2250",
          dotminus: "\u2238",
          dotplus: "\u2214",
          dotsquare: "\u22A1",
          doublebarwedge: "\u2306",
          DoubleContourIntegral: "\u222F",
          DoubleDot: "\xA8",
          DoubleDownArrow: "\u21D3",
          DoubleLeftArrow: "\u21D0",
          DoubleLeftRightArrow: "\u21D4",
          DoubleLeftTee: "\u2AE4",
          DoubleLongLeftArrow: "\u27F8",
          DoubleLongLeftRightArrow: "\u27FA",
          DoubleLongRightArrow: "\u27F9",
          DoubleRightArrow: "\u21D2",
          DoubleRightTee: "\u22A8",
          DoubleUpArrow: "\u21D1",
          DoubleUpDownArrow: "\u21D5",
          DoubleVerticalBar: "\u2225",
          DownArrowBar: "\u2913",
          downarrow: "\u2193",
          DownArrow: "\u2193",
          Downarrow: "\u21D3",
          DownArrowUpArrow: "\u21F5",
          DownBreve: "\u0311",
          downdownarrows: "\u21CA",
          downharpoonleft: "\u21C3",
          downharpoonright: "\u21C2",
          DownLeftRightVector: "\u2950",
          DownLeftTeeVector: "\u295E",
          DownLeftVectorBar: "\u2956",
          DownLeftVector: "\u21BD",
          DownRightTeeVector: "\u295F",
          DownRightVectorBar: "\u2957",
          DownRightVector: "\u21C1",
          DownTeeArrow: "\u21A7",
          DownTee: "\u22A4",
          drbkarow: "\u2910",
          drcorn: "\u231F",
          drcrop: "\u230C",
          Dscr: "\u{1D49F}",
          dscr: "\u{1D4B9}",
          DScy: "\u0405",
          dscy: "\u0455",
          dsol: "\u29F6",
          Dstrok: "\u0110",
          dstrok: "\u0111",
          dtdot: "\u22F1",
          dtri: "\u25BF",
          dtrif: "\u25BE",
          duarr: "\u21F5",
          duhar: "\u296F",
          dwangle: "\u29A6",
          DZcy: "\u040F",
          dzcy: "\u045F",
          dzigrarr: "\u27FF",
          Eacute: "\xC9",
          eacute: "\xE9",
          easter: "\u2A6E",
          Ecaron: "\u011A",
          ecaron: "\u011B",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          ecir: "\u2256",
          ecolon: "\u2255",
          Ecy: "\u042D",
          ecy: "\u044D",
          eDDot: "\u2A77",
          Edot: "\u0116",
          edot: "\u0117",
          eDot: "\u2251",
          ee: "\u2147",
          efDot: "\u2252",
          Efr: "\u{1D508}",
          efr: "\u{1D522}",
          eg: "\u2A9A",
          Egrave: "\xC8",
          egrave: "\xE8",
          egs: "\u2A96",
          egsdot: "\u2A98",
          el: "\u2A99",
          Element: "\u2208",
          elinters: "\u23E7",
          ell: "\u2113",
          els: "\u2A95",
          elsdot: "\u2A97",
          Emacr: "\u0112",
          emacr: "\u0113",
          empty: "\u2205",
          emptyset: "\u2205",
          EmptySmallSquare: "\u25FB",
          emptyv: "\u2205",
          EmptyVerySmallSquare: "\u25AB",
          emsp13: "\u2004",
          emsp14: "\u2005",
          emsp: "\u2003",
          ENG: "\u014A",
          eng: "\u014B",
          ensp: "\u2002",
          Eogon: "\u0118",
          eogon: "\u0119",
          Eopf: "\u{1D53C}",
          eopf: "\u{1D556}",
          epar: "\u22D5",
          eparsl: "\u29E3",
          eplus: "\u2A71",
          epsi: "\u03B5",
          Epsilon: "\u0395",
          epsilon: "\u03B5",
          epsiv: "\u03F5",
          eqcirc: "\u2256",
          eqcolon: "\u2255",
          eqsim: "\u2242",
          eqslantgtr: "\u2A96",
          eqslantless: "\u2A95",
          Equal: "\u2A75",
          equals: "=",
          EqualTilde: "\u2242",
          equest: "\u225F",
          Equilibrium: "\u21CC",
          equiv: "\u2261",
          equivDD: "\u2A78",
          eqvparsl: "\u29E5",
          erarr: "\u2971",
          erDot: "\u2253",
          escr: "\u212F",
          Escr: "\u2130",
          esdot: "\u2250",
          Esim: "\u2A73",
          esim: "\u2242",
          Eta: "\u0397",
          eta: "\u03B7",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          euro: "\u20AC",
          excl: "!",
          exist: "\u2203",
          Exists: "\u2203",
          expectation: "\u2130",
          exponentiale: "\u2147",
          ExponentialE: "\u2147",
          fallingdotseq: "\u2252",
          Fcy: "\u0424",
          fcy: "\u0444",
          female: "\u2640",
          ffilig: "\uFB03",
          fflig: "\uFB00",
          ffllig: "\uFB04",
          Ffr: "\u{1D509}",
          ffr: "\u{1D523}",
          filig: "\uFB01",
          FilledSmallSquare: "\u25FC",
          FilledVerySmallSquare: "\u25AA",
          fjlig: "fj",
          flat: "\u266D",
          fllig: "\uFB02",
          fltns: "\u25B1",
          fnof: "\u0192",
          Fopf: "\u{1D53D}",
          fopf: "\u{1D557}",
          forall: "\u2200",
          ForAll: "\u2200",
          fork: "\u22D4",
          forkv: "\u2AD9",
          Fouriertrf: "\u2131",
          fpartint: "\u2A0D",
          frac12: "\xBD",
          frac13: "\u2153",
          frac14: "\xBC",
          frac15: "\u2155",
          frac16: "\u2159",
          frac18: "\u215B",
          frac23: "\u2154",
          frac25: "\u2156",
          frac34: "\xBE",
          frac35: "\u2157",
          frac38: "\u215C",
          frac45: "\u2158",
          frac56: "\u215A",
          frac58: "\u215D",
          frac78: "\u215E",
          frasl: "\u2044",
          frown: "\u2322",
          fscr: "\u{1D4BB}",
          Fscr: "\u2131",
          gacute: "\u01F5",
          Gamma: "\u0393",
          gamma: "\u03B3",
          Gammad: "\u03DC",
          gammad: "\u03DD",
          gap: "\u2A86",
          Gbreve: "\u011E",
          gbreve: "\u011F",
          Gcedil: "\u0122",
          Gcirc: "\u011C",
          gcirc: "\u011D",
          Gcy: "\u0413",
          gcy: "\u0433",
          Gdot: "\u0120",
          gdot: "\u0121",
          ge: "\u2265",
          gE: "\u2267",
          gEl: "\u2A8C",
          gel: "\u22DB",
          geq: "\u2265",
          geqq: "\u2267",
          geqslant: "\u2A7E",
          gescc: "\u2AA9",
          ges: "\u2A7E",
          gesdot: "\u2A80",
          gesdoto: "\u2A82",
          gesdotol: "\u2A84",
          gesl: "\u22DB\uFE00",
          gesles: "\u2A94",
          Gfr: "\u{1D50A}",
          gfr: "\u{1D524}",
          gg: "\u226B",
          Gg: "\u22D9",
          ggg: "\u22D9",
          gimel: "\u2137",
          GJcy: "\u0403",
          gjcy: "\u0453",
          gla: "\u2AA5",
          gl: "\u2277",
          glE: "\u2A92",
          glj: "\u2AA4",
          gnap: "\u2A8A",
          gnapprox: "\u2A8A",
          gne: "\u2A88",
          gnE: "\u2269",
          gneq: "\u2A88",
          gneqq: "\u2269",
          gnsim: "\u22E7",
          Gopf: "\u{1D53E}",
          gopf: "\u{1D558}",
          grave: "`",
          GreaterEqual: "\u2265",
          GreaterEqualLess: "\u22DB",
          GreaterFullEqual: "\u2267",
          GreaterGreater: "\u2AA2",
          GreaterLess: "\u2277",
          GreaterSlantEqual: "\u2A7E",
          GreaterTilde: "\u2273",
          Gscr: "\u{1D4A2}",
          gscr: "\u210A",
          gsim: "\u2273",
          gsime: "\u2A8E",
          gsiml: "\u2A90",
          gtcc: "\u2AA7",
          gtcir: "\u2A7A",
          gt: ">",
          GT: ">",
          Gt: "\u226B",
          gtdot: "\u22D7",
          gtlPar: "\u2995",
          gtquest: "\u2A7C",
          gtrapprox: "\u2A86",
          gtrarr: "\u2978",
          gtrdot: "\u22D7",
          gtreqless: "\u22DB",
          gtreqqless: "\u2A8C",
          gtrless: "\u2277",
          gtrsim: "\u2273",
          gvertneqq: "\u2269\uFE00",
          gvnE: "\u2269\uFE00",
          Hacek: "\u02C7",
          hairsp: "\u200A",
          half: "\xBD",
          hamilt: "\u210B",
          HARDcy: "\u042A",
          hardcy: "\u044A",
          harrcir: "\u2948",
          harr: "\u2194",
          hArr: "\u21D4",
          harrw: "\u21AD",
          Hat: "^",
          hbar: "\u210F",
          Hcirc: "\u0124",
          hcirc: "\u0125",
          hearts: "\u2665",
          heartsuit: "\u2665",
          hellip: "\u2026",
          hercon: "\u22B9",
          hfr: "\u{1D525}",
          Hfr: "\u210C",
          HilbertSpace: "\u210B",
          hksearow: "\u2925",
          hkswarow: "\u2926",
          hoarr: "\u21FF",
          homtht: "\u223B",
          hookleftarrow: "\u21A9",
          hookrightarrow: "\u21AA",
          hopf: "\u{1D559}",
          Hopf: "\u210D",
          horbar: "\u2015",
          HorizontalLine: "\u2500",
          hscr: "\u{1D4BD}",
          Hscr: "\u210B",
          hslash: "\u210F",
          Hstrok: "\u0126",
          hstrok: "\u0127",
          HumpDownHump: "\u224E",
          HumpEqual: "\u224F",
          hybull: "\u2043",
          hyphen: "\u2010",
          Iacute: "\xCD",
          iacute: "\xED",
          ic: "\u2063",
          Icirc: "\xCE",
          icirc: "\xEE",
          Icy: "\u0418",
          icy: "\u0438",
          Idot: "\u0130",
          IEcy: "\u0415",
          iecy: "\u0435",
          iexcl: "\xA1",
          iff: "\u21D4",
          ifr: "\u{1D526}",
          Ifr: "\u2111",
          Igrave: "\xCC",
          igrave: "\xEC",
          ii: "\u2148",
          iiiint: "\u2A0C",
          iiint: "\u222D",
          iinfin: "\u29DC",
          iiota: "\u2129",
          IJlig: "\u0132",
          ijlig: "\u0133",
          Imacr: "\u012A",
          imacr: "\u012B",
          image: "\u2111",
          ImaginaryI: "\u2148",
          imagline: "\u2110",
          imagpart: "\u2111",
          imath: "\u0131",
          Im: "\u2111",
          imof: "\u22B7",
          imped: "\u01B5",
          Implies: "\u21D2",
          incare: "\u2105",
          in: "\u2208",
          infin: "\u221E",
          infintie: "\u29DD",
          inodot: "\u0131",
          intcal: "\u22BA",
          int: "\u222B",
          Int: "\u222C",
          integers: "\u2124",
          Integral: "\u222B",
          intercal: "\u22BA",
          Intersection: "\u22C2",
          intlarhk: "\u2A17",
          intprod: "\u2A3C",
          InvisibleComma: "\u2063",
          InvisibleTimes: "\u2062",
          IOcy: "\u0401",
          iocy: "\u0451",
          Iogon: "\u012E",
          iogon: "\u012F",
          Iopf: "\u{1D540}",
          iopf: "\u{1D55A}",
          Iota: "\u0399",
          iota: "\u03B9",
          iprod: "\u2A3C",
          iquest: "\xBF",
          iscr: "\u{1D4BE}",
          Iscr: "\u2110",
          isin: "\u2208",
          isindot: "\u22F5",
          isinE: "\u22F9",
          isins: "\u22F4",
          isinsv: "\u22F3",
          isinv: "\u2208",
          it: "\u2062",
          Itilde: "\u0128",
          itilde: "\u0129",
          Iukcy: "\u0406",
          iukcy: "\u0456",
          Iuml: "\xCF",
          iuml: "\xEF",
          Jcirc: "\u0134",
          jcirc: "\u0135",
          Jcy: "\u0419",
          jcy: "\u0439",
          Jfr: "\u{1D50D}",
          jfr: "\u{1D527}",
          jmath: "\u0237",
          Jopf: "\u{1D541}",
          jopf: "\u{1D55B}",
          Jscr: "\u{1D4A5}",
          jscr: "\u{1D4BF}",
          Jsercy: "\u0408",
          jsercy: "\u0458",
          Jukcy: "\u0404",
          jukcy: "\u0454",
          Kappa: "\u039A",
          kappa: "\u03BA",
          kappav: "\u03F0",
          Kcedil: "\u0136",
          kcedil: "\u0137",
          Kcy: "\u041A",
          kcy: "\u043A",
          Kfr: "\u{1D50E}",
          kfr: "\u{1D528}",
          kgreen: "\u0138",
          KHcy: "\u0425",
          khcy: "\u0445",
          KJcy: "\u040C",
          kjcy: "\u045C",
          Kopf: "\u{1D542}",
          kopf: "\u{1D55C}",
          Kscr: "\u{1D4A6}",
          kscr: "\u{1D4C0}",
          lAarr: "\u21DA",
          Lacute: "\u0139",
          lacute: "\u013A",
          laemptyv: "\u29B4",
          lagran: "\u2112",
          Lambda: "\u039B",
          lambda: "\u03BB",
          lang: "\u27E8",
          Lang: "\u27EA",
          langd: "\u2991",
          langle: "\u27E8",
          lap: "\u2A85",
          Laplacetrf: "\u2112",
          laquo: "\xAB",
          larrb: "\u21E4",
          larrbfs: "\u291F",
          larr: "\u2190",
          Larr: "\u219E",
          lArr: "\u21D0",
          larrfs: "\u291D",
          larrhk: "\u21A9",
          larrlp: "\u21AB",
          larrpl: "\u2939",
          larrsim: "\u2973",
          larrtl: "\u21A2",
          latail: "\u2919",
          lAtail: "\u291B",
          lat: "\u2AAB",
          late: "\u2AAD",
          lates: "\u2AAD\uFE00",
          lbarr: "\u290C",
          lBarr: "\u290E",
          lbbrk: "\u2772",
          lbrace: "{",
          lbrack: "[",
          lbrke: "\u298B",
          lbrksld: "\u298F",
          lbrkslu: "\u298D",
          Lcaron: "\u013D",
          lcaron: "\u013E",
          Lcedil: "\u013B",
          lcedil: "\u013C",
          lceil: "\u2308",
          lcub: "{",
          Lcy: "\u041B",
          lcy: "\u043B",
          ldca: "\u2936",
          ldquo: "\u201C",
          ldquor: "\u201E",
          ldrdhar: "\u2967",
          ldrushar: "\u294B",
          ldsh: "\u21B2",
          le: "\u2264",
          lE: "\u2266",
          LeftAngleBracket: "\u27E8",
          LeftArrowBar: "\u21E4",
          leftarrow: "\u2190",
          LeftArrow: "\u2190",
          Leftarrow: "\u21D0",
          LeftArrowRightArrow: "\u21C6",
          leftarrowtail: "\u21A2",
          LeftCeiling: "\u2308",
          LeftDoubleBracket: "\u27E6",
          LeftDownTeeVector: "\u2961",
          LeftDownVectorBar: "\u2959",
          LeftDownVector: "\u21C3",
          LeftFloor: "\u230A",
          leftharpoondown: "\u21BD",
          leftharpoonup: "\u21BC",
          leftleftarrows: "\u21C7",
          leftrightarrow: "\u2194",
          LeftRightArrow: "\u2194",
          Leftrightarrow: "\u21D4",
          leftrightarrows: "\u21C6",
          leftrightharpoons: "\u21CB",
          leftrightsquigarrow: "\u21AD",
          LeftRightVector: "\u294E",
          LeftTeeArrow: "\u21A4",
          LeftTee: "\u22A3",
          LeftTeeVector: "\u295A",
          leftthreetimes: "\u22CB",
          LeftTriangleBar: "\u29CF",
          LeftTriangle: "\u22B2",
          LeftTriangleEqual: "\u22B4",
          LeftUpDownVector: "\u2951",
          LeftUpTeeVector: "\u2960",
          LeftUpVectorBar: "\u2958",
          LeftUpVector: "\u21BF",
          LeftVectorBar: "\u2952",
          LeftVector: "\u21BC",
          lEg: "\u2A8B",
          leg: "\u22DA",
          leq: "\u2264",
          leqq: "\u2266",
          leqslant: "\u2A7D",
          lescc: "\u2AA8",
          les: "\u2A7D",
          lesdot: "\u2A7F",
          lesdoto: "\u2A81",
          lesdotor: "\u2A83",
          lesg: "\u22DA\uFE00",
          lesges: "\u2A93",
          lessapprox: "\u2A85",
          lessdot: "\u22D6",
          lesseqgtr: "\u22DA",
          lesseqqgtr: "\u2A8B",
          LessEqualGreater: "\u22DA",
          LessFullEqual: "\u2266",
          LessGreater: "\u2276",
          lessgtr: "\u2276",
          LessLess: "\u2AA1",
          lesssim: "\u2272",
          LessSlantEqual: "\u2A7D",
          LessTilde: "\u2272",
          lfisht: "\u297C",
          lfloor: "\u230A",
          Lfr: "\u{1D50F}",
          lfr: "\u{1D529}",
          lg: "\u2276",
          lgE: "\u2A91",
          lHar: "\u2962",
          lhard: "\u21BD",
          lharu: "\u21BC",
          lharul: "\u296A",
          lhblk: "\u2584",
          LJcy: "\u0409",
          ljcy: "\u0459",
          llarr: "\u21C7",
          ll: "\u226A",
          Ll: "\u22D8",
          llcorner: "\u231E",
          Lleftarrow: "\u21DA",
          llhard: "\u296B",
          lltri: "\u25FA",
          Lmidot: "\u013F",
          lmidot: "\u0140",
          lmoustache: "\u23B0",
          lmoust: "\u23B0",
          lnap: "\u2A89",
          lnapprox: "\u2A89",
          lne: "\u2A87",
          lnE: "\u2268",
          lneq: "\u2A87",
          lneqq: "\u2268",
          lnsim: "\u22E6",
          loang: "\u27EC",
          loarr: "\u21FD",
          lobrk: "\u27E6",
          longleftarrow: "\u27F5",
          LongLeftArrow: "\u27F5",
          Longleftarrow: "\u27F8",
          longleftrightarrow: "\u27F7",
          LongLeftRightArrow: "\u27F7",
          Longleftrightarrow: "\u27FA",
          longmapsto: "\u27FC",
          longrightarrow: "\u27F6",
          LongRightArrow: "\u27F6",
          Longrightarrow: "\u27F9",
          looparrowleft: "\u21AB",
          looparrowright: "\u21AC",
          lopar: "\u2985",
          Lopf: "\u{1D543}",
          lopf: "\u{1D55D}",
          loplus: "\u2A2D",
          lotimes: "\u2A34",
          lowast: "\u2217",
          lowbar: "_",
          LowerLeftArrow: "\u2199",
          LowerRightArrow: "\u2198",
          loz: "\u25CA",
          lozenge: "\u25CA",
          lozf: "\u29EB",
          lpar: "(",
          lparlt: "\u2993",
          lrarr: "\u21C6",
          lrcorner: "\u231F",
          lrhar: "\u21CB",
          lrhard: "\u296D",
          lrm: "\u200E",
          lrtri: "\u22BF",
          lsaquo: "\u2039",
          lscr: "\u{1D4C1}",
          Lscr: "\u2112",
          lsh: "\u21B0",
          Lsh: "\u21B0",
          lsim: "\u2272",
          lsime: "\u2A8D",
          lsimg: "\u2A8F",
          lsqb: "[",
          lsquo: "\u2018",
          lsquor: "\u201A",
          Lstrok: "\u0141",
          lstrok: "\u0142",
          ltcc: "\u2AA6",
          ltcir: "\u2A79",
          lt: "<",
          LT: "<",
          Lt: "\u226A",
          ltdot: "\u22D6",
          lthree: "\u22CB",
          ltimes: "\u22C9",
          ltlarr: "\u2976",
          ltquest: "\u2A7B",
          ltri: "\u25C3",
          ltrie: "\u22B4",
          ltrif: "\u25C2",
          ltrPar: "\u2996",
          lurdshar: "\u294A",
          luruhar: "\u2966",
          lvertneqq: "\u2268\uFE00",
          lvnE: "\u2268\uFE00",
          macr: "\xAF",
          male: "\u2642",
          malt: "\u2720",
          maltese: "\u2720",
          Map: "\u2905",
          map: "\u21A6",
          mapsto: "\u21A6",
          mapstodown: "\u21A7",
          mapstoleft: "\u21A4",
          mapstoup: "\u21A5",
          marker: "\u25AE",
          mcomma: "\u2A29",
          Mcy: "\u041C",
          mcy: "\u043C",
          mdash: "\u2014",
          mDDot: "\u223A",
          measuredangle: "\u2221",
          MediumSpace: "\u205F",
          Mellintrf: "\u2133",
          Mfr: "\u{1D510}",
          mfr: "\u{1D52A}",
          mho: "\u2127",
          micro: "\xB5",
          midast: "*",
          midcir: "\u2AF0",
          mid: "\u2223",
          middot: "\xB7",
          minusb: "\u229F",
          minus: "\u2212",
          minusd: "\u2238",
          minusdu: "\u2A2A",
          MinusPlus: "\u2213",
          mlcp: "\u2ADB",
          mldr: "\u2026",
          mnplus: "\u2213",
          models: "\u22A7",
          Mopf: "\u{1D544}",
          mopf: "\u{1D55E}",
          mp: "\u2213",
          mscr: "\u{1D4C2}",
          Mscr: "\u2133",
          mstpos: "\u223E",
          Mu: "\u039C",
          mu: "\u03BC",
          multimap: "\u22B8",
          mumap: "\u22B8",
          nabla: "\u2207",
          Nacute: "\u0143",
          nacute: "\u0144",
          nang: "\u2220\u20D2",
          nap: "\u2249",
          napE: "\u2A70\u0338",
          napid: "\u224B\u0338",
          napos: "\u0149",
          napprox: "\u2249",
          natural: "\u266E",
          naturals: "\u2115",
          natur: "\u266E",
          nbsp: "\xA0",
          nbump: "\u224E\u0338",
          nbumpe: "\u224F\u0338",
          ncap: "\u2A43",
          Ncaron: "\u0147",
          ncaron: "\u0148",
          Ncedil: "\u0145",
          ncedil: "\u0146",
          ncong: "\u2247",
          ncongdot: "\u2A6D\u0338",
          ncup: "\u2A42",
          Ncy: "\u041D",
          ncy: "\u043D",
          ndash: "\u2013",
          nearhk: "\u2924",
          nearr: "\u2197",
          neArr: "\u21D7",
          nearrow: "\u2197",
          ne: "\u2260",
          nedot: "\u2250\u0338",
          NegativeMediumSpace: "\u200B",
          NegativeThickSpace: "\u200B",
          NegativeThinSpace: "\u200B",
          NegativeVeryThinSpace: "\u200B",
          nequiv: "\u2262",
          nesear: "\u2928",
          nesim: "\u2242\u0338",
          NestedGreaterGreater: "\u226B",
          NestedLessLess: "\u226A",
          NewLine: `
`,
          nexist: "\u2204",
          nexists: "\u2204",
          Nfr: "\u{1D511}",
          nfr: "\u{1D52B}",
          ngE: "\u2267\u0338",
          nge: "\u2271",
          ngeq: "\u2271",
          ngeqq: "\u2267\u0338",
          ngeqslant: "\u2A7E\u0338",
          nges: "\u2A7E\u0338",
          nGg: "\u22D9\u0338",
          ngsim: "\u2275",
          nGt: "\u226B\u20D2",
          ngt: "\u226F",
          ngtr: "\u226F",
          nGtv: "\u226B\u0338",
          nharr: "\u21AE",
          nhArr: "\u21CE",
          nhpar: "\u2AF2",
          ni: "\u220B",
          nis: "\u22FC",
          nisd: "\u22FA",
          niv: "\u220B",
          NJcy: "\u040A",
          njcy: "\u045A",
          nlarr: "\u219A",
          nlArr: "\u21CD",
          nldr: "\u2025",
          nlE: "\u2266\u0338",
          nle: "\u2270",
          nleftarrow: "\u219A",
          nLeftarrow: "\u21CD",
          nleftrightarrow: "\u21AE",
          nLeftrightarrow: "\u21CE",
          nleq: "\u2270",
          nleqq: "\u2266\u0338",
          nleqslant: "\u2A7D\u0338",
          nles: "\u2A7D\u0338",
          nless: "\u226E",
          nLl: "\u22D8\u0338",
          nlsim: "\u2274",
          nLt: "\u226A\u20D2",
          nlt: "\u226E",
          nltri: "\u22EA",
          nltrie: "\u22EC",
          nLtv: "\u226A\u0338",
          nmid: "\u2224",
          NoBreak: "\u2060",
          NonBreakingSpace: "\xA0",
          nopf: "\u{1D55F}",
          Nopf: "\u2115",
          Not: "\u2AEC",
          not: "\xAC",
          NotCongruent: "\u2262",
          NotCupCap: "\u226D",
          NotDoubleVerticalBar: "\u2226",
          NotElement: "\u2209",
          NotEqual: "\u2260",
          NotEqualTilde: "\u2242\u0338",
          NotExists: "\u2204",
          NotGreater: "\u226F",
          NotGreaterEqual: "\u2271",
          NotGreaterFullEqual: "\u2267\u0338",
          NotGreaterGreater: "\u226B\u0338",
          NotGreaterLess: "\u2279",
          NotGreaterSlantEqual: "\u2A7E\u0338",
          NotGreaterTilde: "\u2275",
          NotHumpDownHump: "\u224E\u0338",
          NotHumpEqual: "\u224F\u0338",
          notin: "\u2209",
          notindot: "\u22F5\u0338",
          notinE: "\u22F9\u0338",
          notinva: "\u2209",
          notinvb: "\u22F7",
          notinvc: "\u22F6",
          NotLeftTriangleBar: "\u29CF\u0338",
          NotLeftTriangle: "\u22EA",
          NotLeftTriangleEqual: "\u22EC",
          NotLess: "\u226E",
          NotLessEqual: "\u2270",
          NotLessGreater: "\u2278",
          NotLessLess: "\u226A\u0338",
          NotLessSlantEqual: "\u2A7D\u0338",
          NotLessTilde: "\u2274",
          NotNestedGreaterGreater: "\u2AA2\u0338",
          NotNestedLessLess: "\u2AA1\u0338",
          notni: "\u220C",
          notniva: "\u220C",
          notnivb: "\u22FE",
          notnivc: "\u22FD",
          NotPrecedes: "\u2280",
          NotPrecedesEqual: "\u2AAF\u0338",
          NotPrecedesSlantEqual: "\u22E0",
          NotReverseElement: "\u220C",
          NotRightTriangleBar: "\u29D0\u0338",
          NotRightTriangle: "\u22EB",
          NotRightTriangleEqual: "\u22ED",
          NotSquareSubset: "\u228F\u0338",
          NotSquareSubsetEqual: "\u22E2",
          NotSquareSuperset: "\u2290\u0338",
          NotSquareSupersetEqual: "\u22E3",
          NotSubset: "\u2282\u20D2",
          NotSubsetEqual: "\u2288",
          NotSucceeds: "\u2281",
          NotSucceedsEqual: "\u2AB0\u0338",
          NotSucceedsSlantEqual: "\u22E1",
          NotSucceedsTilde: "\u227F\u0338",
          NotSuperset: "\u2283\u20D2",
          NotSupersetEqual: "\u2289",
          NotTilde: "\u2241",
          NotTildeEqual: "\u2244",
          NotTildeFullEqual: "\u2247",
          NotTildeTilde: "\u2249",
          NotVerticalBar: "\u2224",
          nparallel: "\u2226",
          npar: "\u2226",
          nparsl: "\u2AFD\u20E5",
          npart: "\u2202\u0338",
          npolint: "\u2A14",
          npr: "\u2280",
          nprcue: "\u22E0",
          nprec: "\u2280",
          npreceq: "\u2AAF\u0338",
          npre: "\u2AAF\u0338",
          nrarrc: "\u2933\u0338",
          nrarr: "\u219B",
          nrArr: "\u21CF",
          nrarrw: "\u219D\u0338",
          nrightarrow: "\u219B",
          nRightarrow: "\u21CF",
          nrtri: "\u22EB",
          nrtrie: "\u22ED",
          nsc: "\u2281",
          nsccue: "\u22E1",
          nsce: "\u2AB0\u0338",
          Nscr: "\u{1D4A9}",
          nscr: "\u{1D4C3}",
          nshortmid: "\u2224",
          nshortparallel: "\u2226",
          nsim: "\u2241",
          nsime: "\u2244",
          nsimeq: "\u2244",
          nsmid: "\u2224",
          nspar: "\u2226",
          nsqsube: "\u22E2",
          nsqsupe: "\u22E3",
          nsub: "\u2284",
          nsubE: "\u2AC5\u0338",
          nsube: "\u2288",
          nsubset: "\u2282\u20D2",
          nsubseteq: "\u2288",
          nsubseteqq: "\u2AC5\u0338",
          nsucc: "\u2281",
          nsucceq: "\u2AB0\u0338",
          nsup: "\u2285",
          nsupE: "\u2AC6\u0338",
          nsupe: "\u2289",
          nsupset: "\u2283\u20D2",
          nsupseteq: "\u2289",
          nsupseteqq: "\u2AC6\u0338",
          ntgl: "\u2279",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          ntlg: "\u2278",
          ntriangleleft: "\u22EA",
          ntrianglelefteq: "\u22EC",
          ntriangleright: "\u22EB",
          ntrianglerighteq: "\u22ED",
          Nu: "\u039D",
          nu: "\u03BD",
          num: "#",
          numero: "\u2116",
          numsp: "\u2007",
          nvap: "\u224D\u20D2",
          nvdash: "\u22AC",
          nvDash: "\u22AD",
          nVdash: "\u22AE",
          nVDash: "\u22AF",
          nvge: "\u2265\u20D2",
          nvgt: ">\u20D2",
          nvHarr: "\u2904",
          nvinfin: "\u29DE",
          nvlArr: "\u2902",
          nvle: "\u2264\u20D2",
          nvlt: "<\u20D2",
          nvltrie: "\u22B4\u20D2",
          nvrArr: "\u2903",
          nvrtrie: "\u22B5\u20D2",
          nvsim: "\u223C\u20D2",
          nwarhk: "\u2923",
          nwarr: "\u2196",
          nwArr: "\u21D6",
          nwarrow: "\u2196",
          nwnear: "\u2927",
          Oacute: "\xD3",
          oacute: "\xF3",
          oast: "\u229B",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          ocir: "\u229A",
          Ocy: "\u041E",
          ocy: "\u043E",
          odash: "\u229D",
          Odblac: "\u0150",
          odblac: "\u0151",
          odiv: "\u2A38",
          odot: "\u2299",
          odsold: "\u29BC",
          OElig: "\u0152",
          oelig: "\u0153",
          ofcir: "\u29BF",
          Ofr: "\u{1D512}",
          ofr: "\u{1D52C}",
          ogon: "\u02DB",
          Ograve: "\xD2",
          ograve: "\xF2",
          ogt: "\u29C1",
          ohbar: "\u29B5",
          ohm: "\u03A9",
          oint: "\u222E",
          olarr: "\u21BA",
          olcir: "\u29BE",
          olcross: "\u29BB",
          oline: "\u203E",
          olt: "\u29C0",
          Omacr: "\u014C",
          omacr: "\u014D",
          Omega: "\u03A9",
          omega: "\u03C9",
          Omicron: "\u039F",
          omicron: "\u03BF",
          omid: "\u29B6",
          ominus: "\u2296",
          Oopf: "\u{1D546}",
          oopf: "\u{1D560}",
          opar: "\u29B7",
          OpenCurlyDoubleQuote: "\u201C",
          OpenCurlyQuote: "\u2018",
          operp: "\u29B9",
          oplus: "\u2295",
          orarr: "\u21BB",
          Or: "\u2A54",
          or: "\u2228",
          ord: "\u2A5D",
          order: "\u2134",
          orderof: "\u2134",
          ordf: "\xAA",
          ordm: "\xBA",
          origof: "\u22B6",
          oror: "\u2A56",
          orslope: "\u2A57",
          orv: "\u2A5B",
          oS: "\u24C8",
          Oscr: "\u{1D4AA}",
          oscr: "\u2134",
          Oslash: "\xD8",
          oslash: "\xF8",
          osol: "\u2298",
          Otilde: "\xD5",
          otilde: "\xF5",
          otimesas: "\u2A36",
          Otimes: "\u2A37",
          otimes: "\u2297",
          Ouml: "\xD6",
          ouml: "\xF6",
          ovbar: "\u233D",
          OverBar: "\u203E",
          OverBrace: "\u23DE",
          OverBracket: "\u23B4",
          OverParenthesis: "\u23DC",
          para: "\xB6",
          parallel: "\u2225",
          par: "\u2225",
          parsim: "\u2AF3",
          parsl: "\u2AFD",
          part: "\u2202",
          PartialD: "\u2202",
          Pcy: "\u041F",
          pcy: "\u043F",
          percnt: "%",
          period: ".",
          permil: "\u2030",
          perp: "\u22A5",
          pertenk: "\u2031",
          Pfr: "\u{1D513}",
          pfr: "\u{1D52D}",
          Phi: "\u03A6",
          phi: "\u03C6",
          phiv: "\u03D5",
          phmmat: "\u2133",
          phone: "\u260E",
          Pi: "\u03A0",
          pi: "\u03C0",
          pitchfork: "\u22D4",
          piv: "\u03D6",
          planck: "\u210F",
          planckh: "\u210E",
          plankv: "\u210F",
          plusacir: "\u2A23",
          plusb: "\u229E",
          pluscir: "\u2A22",
          plus: "+",
          plusdo: "\u2214",
          plusdu: "\u2A25",
          pluse: "\u2A72",
          PlusMinus: "\xB1",
          plusmn: "\xB1",
          plussim: "\u2A26",
          plustwo: "\u2A27",
          pm: "\xB1",
          Poincareplane: "\u210C",
          pointint: "\u2A15",
          popf: "\u{1D561}",
          Popf: "\u2119",
          pound: "\xA3",
          prap: "\u2AB7",
          Pr: "\u2ABB",
          pr: "\u227A",
          prcue: "\u227C",
          precapprox: "\u2AB7",
          prec: "\u227A",
          preccurlyeq: "\u227C",
          Precedes: "\u227A",
          PrecedesEqual: "\u2AAF",
          PrecedesSlantEqual: "\u227C",
          PrecedesTilde: "\u227E",
          preceq: "\u2AAF",
          precnapprox: "\u2AB9",
          precneqq: "\u2AB5",
          precnsim: "\u22E8",
          pre: "\u2AAF",
          prE: "\u2AB3",
          precsim: "\u227E",
          prime: "\u2032",
          Prime: "\u2033",
          primes: "\u2119",
          prnap: "\u2AB9",
          prnE: "\u2AB5",
          prnsim: "\u22E8",
          prod: "\u220F",
          Product: "\u220F",
          profalar: "\u232E",
          profline: "\u2312",
          profsurf: "\u2313",
          prop: "\u221D",
          Proportional: "\u221D",
          Proportion: "\u2237",
          propto: "\u221D",
          prsim: "\u227E",
          prurel: "\u22B0",
          Pscr: "\u{1D4AB}",
          pscr: "\u{1D4C5}",
          Psi: "\u03A8",
          psi: "\u03C8",
          puncsp: "\u2008",
          Qfr: "\u{1D514}",
          qfr: "\u{1D52E}",
          qint: "\u2A0C",
          qopf: "\u{1D562}",
          Qopf: "\u211A",
          qprime: "\u2057",
          Qscr: "\u{1D4AC}",
          qscr: "\u{1D4C6}",
          quaternions: "\u210D",
          quatint: "\u2A16",
          quest: "?",
          questeq: "\u225F",
          quot: '"',
          QUOT: '"',
          rAarr: "\u21DB",
          race: "\u223D\u0331",
          Racute: "\u0154",
          racute: "\u0155",
          radic: "\u221A",
          raemptyv: "\u29B3",
          rang: "\u27E9",
          Rang: "\u27EB",
          rangd: "\u2992",
          range: "\u29A5",
          rangle: "\u27E9",
          raquo: "\xBB",
          rarrap: "\u2975",
          rarrb: "\u21E5",
          rarrbfs: "\u2920",
          rarrc: "\u2933",
          rarr: "\u2192",
          Rarr: "\u21A0",
          rArr: "\u21D2",
          rarrfs: "\u291E",
          rarrhk: "\u21AA",
          rarrlp: "\u21AC",
          rarrpl: "\u2945",
          rarrsim: "\u2974",
          Rarrtl: "\u2916",
          rarrtl: "\u21A3",
          rarrw: "\u219D",
          ratail: "\u291A",
          rAtail: "\u291C",
          ratio: "\u2236",
          rationals: "\u211A",
          rbarr: "\u290D",
          rBarr: "\u290F",
          RBarr: "\u2910",
          rbbrk: "\u2773",
          rbrace: "}",
          rbrack: "]",
          rbrke: "\u298C",
          rbrksld: "\u298E",
          rbrkslu: "\u2990",
          Rcaron: "\u0158",
          rcaron: "\u0159",
          Rcedil: "\u0156",
          rcedil: "\u0157",
          rceil: "\u2309",
          rcub: "}",
          Rcy: "\u0420",
          rcy: "\u0440",
          rdca: "\u2937",
          rdldhar: "\u2969",
          rdquo: "\u201D",
          rdquor: "\u201D",
          rdsh: "\u21B3",
          real: "\u211C",
          realine: "\u211B",
          realpart: "\u211C",
          reals: "\u211D",
          Re: "\u211C",
          rect: "\u25AD",
          reg: "\xAE",
          REG: "\xAE",
          ReverseElement: "\u220B",
          ReverseEquilibrium: "\u21CB",
          ReverseUpEquilibrium: "\u296F",
          rfisht: "\u297D",
          rfloor: "\u230B",
          rfr: "\u{1D52F}",
          Rfr: "\u211C",
          rHar: "\u2964",
          rhard: "\u21C1",
          rharu: "\u21C0",
          rharul: "\u296C",
          Rho: "\u03A1",
          rho: "\u03C1",
          rhov: "\u03F1",
          RightAngleBracket: "\u27E9",
          RightArrowBar: "\u21E5",
          rightarrow: "\u2192",
          RightArrow: "\u2192",
          Rightarrow: "\u21D2",
          RightArrowLeftArrow: "\u21C4",
          rightarrowtail: "\u21A3",
          RightCeiling: "\u2309",
          RightDoubleBracket: "\u27E7",
          RightDownTeeVector: "\u295D",
          RightDownVectorBar: "\u2955",
          RightDownVector: "\u21C2",
          RightFloor: "\u230B",
          rightharpoondown: "\u21C1",
          rightharpoonup: "\u21C0",
          rightleftarrows: "\u21C4",
          rightleftharpoons: "\u21CC",
          rightrightarrows: "\u21C9",
          rightsquigarrow: "\u219D",
          RightTeeArrow: "\u21A6",
          RightTee: "\u22A2",
          RightTeeVector: "\u295B",
          rightthreetimes: "\u22CC",
          RightTriangleBar: "\u29D0",
          RightTriangle: "\u22B3",
          RightTriangleEqual: "\u22B5",
          RightUpDownVector: "\u294F",
          RightUpTeeVector: "\u295C",
          RightUpVectorBar: "\u2954",
          RightUpVector: "\u21BE",
          RightVectorBar: "\u2953",
          RightVector: "\u21C0",
          ring: "\u02DA",
          risingdotseq: "\u2253",
          rlarr: "\u21C4",
          rlhar: "\u21CC",
          rlm: "\u200F",
          rmoustache: "\u23B1",
          rmoust: "\u23B1",
          rnmid: "\u2AEE",
          roang: "\u27ED",
          roarr: "\u21FE",
          robrk: "\u27E7",
          ropar: "\u2986",
          ropf: "\u{1D563}",
          Ropf: "\u211D",
          roplus: "\u2A2E",
          rotimes: "\u2A35",
          RoundImplies: "\u2970",
          rpar: ")",
          rpargt: "\u2994",
          rppolint: "\u2A12",
          rrarr: "\u21C9",
          Rrightarrow: "\u21DB",
          rsaquo: "\u203A",
          rscr: "\u{1D4C7}",
          Rscr: "\u211B",
          rsh: "\u21B1",
          Rsh: "\u21B1",
          rsqb: "]",
          rsquo: "\u2019",
          rsquor: "\u2019",
          rthree: "\u22CC",
          rtimes: "\u22CA",
          rtri: "\u25B9",
          rtrie: "\u22B5",
          rtrif: "\u25B8",
          rtriltri: "\u29CE",
          RuleDelayed: "\u29F4",
          ruluhar: "\u2968",
          rx: "\u211E",
          Sacute: "\u015A",
          sacute: "\u015B",
          sbquo: "\u201A",
          scap: "\u2AB8",
          Scaron: "\u0160",
          scaron: "\u0161",
          Sc: "\u2ABC",
          sc: "\u227B",
          sccue: "\u227D",
          sce: "\u2AB0",
          scE: "\u2AB4",
          Scedil: "\u015E",
          scedil: "\u015F",
          Scirc: "\u015C",
          scirc: "\u015D",
          scnap: "\u2ABA",
          scnE: "\u2AB6",
          scnsim: "\u22E9",
          scpolint: "\u2A13",
          scsim: "\u227F",
          Scy: "\u0421",
          scy: "\u0441",
          sdotb: "\u22A1",
          sdot: "\u22C5",
          sdote: "\u2A66",
          searhk: "\u2925",
          searr: "\u2198",
          seArr: "\u21D8",
          searrow: "\u2198",
          sect: "\xA7",
          semi: ";",
          seswar: "\u2929",
          setminus: "\u2216",
          setmn: "\u2216",
          sext: "\u2736",
          Sfr: "\u{1D516}",
          sfr: "\u{1D530}",
          sfrown: "\u2322",
          sharp: "\u266F",
          SHCHcy: "\u0429",
          shchcy: "\u0449",
          SHcy: "\u0428",
          shcy: "\u0448",
          ShortDownArrow: "\u2193",
          ShortLeftArrow: "\u2190",
          shortmid: "\u2223",
          shortparallel: "\u2225",
          ShortRightArrow: "\u2192",
          ShortUpArrow: "\u2191",
          shy: "\xAD",
          Sigma: "\u03A3",
          sigma: "\u03C3",
          sigmaf: "\u03C2",
          sigmav: "\u03C2",
          sim: "\u223C",
          simdot: "\u2A6A",
          sime: "\u2243",
          simeq: "\u2243",
          simg: "\u2A9E",
          simgE: "\u2AA0",
          siml: "\u2A9D",
          simlE: "\u2A9F",
          simne: "\u2246",
          simplus: "\u2A24",
          simrarr: "\u2972",
          slarr: "\u2190",
          SmallCircle: "\u2218",
          smallsetminus: "\u2216",
          smashp: "\u2A33",
          smeparsl: "\u29E4",
          smid: "\u2223",
          smile: "\u2323",
          smt: "\u2AAA",
          smte: "\u2AAC",
          smtes: "\u2AAC\uFE00",
          SOFTcy: "\u042C",
          softcy: "\u044C",
          solbar: "\u233F",
          solb: "\u29C4",
          sol: "/",
          Sopf: "\u{1D54A}",
          sopf: "\u{1D564}",
          spades: "\u2660",
          spadesuit: "\u2660",
          spar: "\u2225",
          sqcap: "\u2293",
          sqcaps: "\u2293\uFE00",
          sqcup: "\u2294",
          sqcups: "\u2294\uFE00",
          Sqrt: "\u221A",
          sqsub: "\u228F",
          sqsube: "\u2291",
          sqsubset: "\u228F",
          sqsubseteq: "\u2291",
          sqsup: "\u2290",
          sqsupe: "\u2292",
          sqsupset: "\u2290",
          sqsupseteq: "\u2292",
          square: "\u25A1",
          Square: "\u25A1",
          SquareIntersection: "\u2293",
          SquareSubset: "\u228F",
          SquareSubsetEqual: "\u2291",
          SquareSuperset: "\u2290",
          SquareSupersetEqual: "\u2292",
          SquareUnion: "\u2294",
          squarf: "\u25AA",
          squ: "\u25A1",
          squf: "\u25AA",
          srarr: "\u2192",
          Sscr: "\u{1D4AE}",
          sscr: "\u{1D4C8}",
          ssetmn: "\u2216",
          ssmile: "\u2323",
          sstarf: "\u22C6",
          Star: "\u22C6",
          star: "\u2606",
          starf: "\u2605",
          straightepsilon: "\u03F5",
          straightphi: "\u03D5",
          strns: "\xAF",
          sub: "\u2282",
          Sub: "\u22D0",
          subdot: "\u2ABD",
          subE: "\u2AC5",
          sube: "\u2286",
          subedot: "\u2AC3",
          submult: "\u2AC1",
          subnE: "\u2ACB",
          subne: "\u228A",
          subplus: "\u2ABF",
          subrarr: "\u2979",
          subset: "\u2282",
          Subset: "\u22D0",
          subseteq: "\u2286",
          subseteqq: "\u2AC5",
          SubsetEqual: "\u2286",
          subsetneq: "\u228A",
          subsetneqq: "\u2ACB",
          subsim: "\u2AC7",
          subsub: "\u2AD5",
          subsup: "\u2AD3",
          succapprox: "\u2AB8",
          succ: "\u227B",
          succcurlyeq: "\u227D",
          Succeeds: "\u227B",
          SucceedsEqual: "\u2AB0",
          SucceedsSlantEqual: "\u227D",
          SucceedsTilde: "\u227F",
          succeq: "\u2AB0",
          succnapprox: "\u2ABA",
          succneqq: "\u2AB6",
          succnsim: "\u22E9",
          succsim: "\u227F",
          SuchThat: "\u220B",
          sum: "\u2211",
          Sum: "\u2211",
          sung: "\u266A",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          sup: "\u2283",
          Sup: "\u22D1",
          supdot: "\u2ABE",
          supdsub: "\u2AD8",
          supE: "\u2AC6",
          supe: "\u2287",
          supedot: "\u2AC4",
          Superset: "\u2283",
          SupersetEqual: "\u2287",
          suphsol: "\u27C9",
          suphsub: "\u2AD7",
          suplarr: "\u297B",
          supmult: "\u2AC2",
          supnE: "\u2ACC",
          supne: "\u228B",
          supplus: "\u2AC0",
          supset: "\u2283",
          Supset: "\u22D1",
          supseteq: "\u2287",
          supseteqq: "\u2AC6",
          supsetneq: "\u228B",
          supsetneqq: "\u2ACC",
          supsim: "\u2AC8",
          supsub: "\u2AD4",
          supsup: "\u2AD6",
          swarhk: "\u2926",
          swarr: "\u2199",
          swArr: "\u21D9",
          swarrow: "\u2199",
          swnwar: "\u292A",
          szlig: "\xDF",
          Tab: "	",
          target: "\u2316",
          Tau: "\u03A4",
          tau: "\u03C4",
          tbrk: "\u23B4",
          Tcaron: "\u0164",
          tcaron: "\u0165",
          Tcedil: "\u0162",
          tcedil: "\u0163",
          Tcy: "\u0422",
          tcy: "\u0442",
          tdot: "\u20DB",
          telrec: "\u2315",
          Tfr: "\u{1D517}",
          tfr: "\u{1D531}",
          there4: "\u2234",
          therefore: "\u2234",
          Therefore: "\u2234",
          Theta: "\u0398",
          theta: "\u03B8",
          thetasym: "\u03D1",
          thetav: "\u03D1",
          thickapprox: "\u2248",
          thicksim: "\u223C",
          ThickSpace: "\u205F\u200A",
          ThinSpace: "\u2009",
          thinsp: "\u2009",
          thkap: "\u2248",
          thksim: "\u223C",
          THORN: "\xDE",
          thorn: "\xFE",
          tilde: "\u02DC",
          Tilde: "\u223C",
          TildeEqual: "\u2243",
          TildeFullEqual: "\u2245",
          TildeTilde: "\u2248",
          timesbar: "\u2A31",
          timesb: "\u22A0",
          times: "\xD7",
          timesd: "\u2A30",
          tint: "\u222D",
          toea: "\u2928",
          topbot: "\u2336",
          topcir: "\u2AF1",
          top: "\u22A4",
          Topf: "\u{1D54B}",
          topf: "\u{1D565}",
          topfork: "\u2ADA",
          tosa: "\u2929",
          tprime: "\u2034",
          trade: "\u2122",
          TRADE: "\u2122",
          triangle: "\u25B5",
          triangledown: "\u25BF",
          triangleleft: "\u25C3",
          trianglelefteq: "\u22B4",
          triangleq: "\u225C",
          triangleright: "\u25B9",
          trianglerighteq: "\u22B5",
          tridot: "\u25EC",
          trie: "\u225C",
          triminus: "\u2A3A",
          TripleDot: "\u20DB",
          triplus: "\u2A39",
          trisb: "\u29CD",
          tritime: "\u2A3B",
          trpezium: "\u23E2",
          Tscr: "\u{1D4AF}",
          tscr: "\u{1D4C9}",
          TScy: "\u0426",
          tscy: "\u0446",
          TSHcy: "\u040B",
          tshcy: "\u045B",
          Tstrok: "\u0166",
          tstrok: "\u0167",
          twixt: "\u226C",
          twoheadleftarrow: "\u219E",
          twoheadrightarrow: "\u21A0",
          Uacute: "\xDA",
          uacute: "\xFA",
          uarr: "\u2191",
          Uarr: "\u219F",
          uArr: "\u21D1",
          Uarrocir: "\u2949",
          Ubrcy: "\u040E",
          ubrcy: "\u045E",
          Ubreve: "\u016C",
          ubreve: "\u016D",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ucy: "\u0423",
          ucy: "\u0443",
          udarr: "\u21C5",
          Udblac: "\u0170",
          udblac: "\u0171",
          udhar: "\u296E",
          ufisht: "\u297E",
          Ufr: "\u{1D518}",
          ufr: "\u{1D532}",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uHar: "\u2963",
          uharl: "\u21BF",
          uharr: "\u21BE",
          uhblk: "\u2580",
          ulcorn: "\u231C",
          ulcorner: "\u231C",
          ulcrop: "\u230F",
          ultri: "\u25F8",
          Umacr: "\u016A",
          umacr: "\u016B",
          uml: "\xA8",
          UnderBar: "_",
          UnderBrace: "\u23DF",
          UnderBracket: "\u23B5",
          UnderParenthesis: "\u23DD",
          Union: "\u22C3",
          UnionPlus: "\u228E",
          Uogon: "\u0172",
          uogon: "\u0173",
          Uopf: "\u{1D54C}",
          uopf: "\u{1D566}",
          UpArrowBar: "\u2912",
          uparrow: "\u2191",
          UpArrow: "\u2191",
          Uparrow: "\u21D1",
          UpArrowDownArrow: "\u21C5",
          updownarrow: "\u2195",
          UpDownArrow: "\u2195",
          Updownarrow: "\u21D5",
          UpEquilibrium: "\u296E",
          upharpoonleft: "\u21BF",
          upharpoonright: "\u21BE",
          uplus: "\u228E",
          UpperLeftArrow: "\u2196",
          UpperRightArrow: "\u2197",
          upsi: "\u03C5",
          Upsi: "\u03D2",
          upsih: "\u03D2",
          Upsilon: "\u03A5",
          upsilon: "\u03C5",
          UpTeeArrow: "\u21A5",
          UpTee: "\u22A5",
          upuparrows: "\u21C8",
          urcorn: "\u231D",
          urcorner: "\u231D",
          urcrop: "\u230E",
          Uring: "\u016E",
          uring: "\u016F",
          urtri: "\u25F9",
          Uscr: "\u{1D4B0}",
          uscr: "\u{1D4CA}",
          utdot: "\u22F0",
          Utilde: "\u0168",
          utilde: "\u0169",
          utri: "\u25B5",
          utrif: "\u25B4",
          uuarr: "\u21C8",
          Uuml: "\xDC",
          uuml: "\xFC",
          uwangle: "\u29A7",
          vangrt: "\u299C",
          varepsilon: "\u03F5",
          varkappa: "\u03F0",
          varnothing: "\u2205",
          varphi: "\u03D5",
          varpi: "\u03D6",
          varpropto: "\u221D",
          varr: "\u2195",
          vArr: "\u21D5",
          varrho: "\u03F1",
          varsigma: "\u03C2",
          varsubsetneq: "\u228A\uFE00",
          varsubsetneqq: "\u2ACB\uFE00",
          varsupsetneq: "\u228B\uFE00",
          varsupsetneqq: "\u2ACC\uFE00",
          vartheta: "\u03D1",
          vartriangleleft: "\u22B2",
          vartriangleright: "\u22B3",
          vBar: "\u2AE8",
          Vbar: "\u2AEB",
          vBarv: "\u2AE9",
          Vcy: "\u0412",
          vcy: "\u0432",
          vdash: "\u22A2",
          vDash: "\u22A8",
          Vdash: "\u22A9",
          VDash: "\u22AB",
          Vdashl: "\u2AE6",
          veebar: "\u22BB",
          vee: "\u2228",
          Vee: "\u22C1",
          veeeq: "\u225A",
          vellip: "\u22EE",
          verbar: "|",
          Verbar: "\u2016",
          vert: "|",
          Vert: "\u2016",
          VerticalBar: "\u2223",
          VerticalLine: "|",
          VerticalSeparator: "\u2758",
          VerticalTilde: "\u2240",
          VeryThinSpace: "\u200A",
          Vfr: "\u{1D519}",
          vfr: "\u{1D533}",
          vltri: "\u22B2",
          vnsub: "\u2282\u20D2",
          vnsup: "\u2283\u20D2",
          Vopf: "\u{1D54D}",
          vopf: "\u{1D567}",
          vprop: "\u221D",
          vrtri: "\u22B3",
          Vscr: "\u{1D4B1}",
          vscr: "\u{1D4CB}",
          vsubnE: "\u2ACB\uFE00",
          vsubne: "\u228A\uFE00",
          vsupnE: "\u2ACC\uFE00",
          vsupne: "\u228B\uFE00",
          Vvdash: "\u22AA",
          vzigzag: "\u299A",
          Wcirc: "\u0174",
          wcirc: "\u0175",
          wedbar: "\u2A5F",
          wedge: "\u2227",
          Wedge: "\u22C0",
          wedgeq: "\u2259",
          weierp: "\u2118",
          Wfr: "\u{1D51A}",
          wfr: "\u{1D534}",
          Wopf: "\u{1D54E}",
          wopf: "\u{1D568}",
          wp: "\u2118",
          wr: "\u2240",
          wreath: "\u2240",
          Wscr: "\u{1D4B2}",
          wscr: "\u{1D4CC}",
          xcap: "\u22C2",
          xcirc: "\u25EF",
          xcup: "\u22C3",
          xdtri: "\u25BD",
          Xfr: "\u{1D51B}",
          xfr: "\u{1D535}",
          xharr: "\u27F7",
          xhArr: "\u27FA",
          Xi: "\u039E",
          xi: "\u03BE",
          xlarr: "\u27F5",
          xlArr: "\u27F8",
          xmap: "\u27FC",
          xnis: "\u22FB",
          xodot: "\u2A00",
          Xopf: "\u{1D54F}",
          xopf: "\u{1D569}",
          xoplus: "\u2A01",
          xotime: "\u2A02",
          xrarr: "\u27F6",
          xrArr: "\u27F9",
          Xscr: "\u{1D4B3}",
          xscr: "\u{1D4CD}",
          xsqcup: "\u2A06",
          xuplus: "\u2A04",
          xutri: "\u25B3",
          xvee: "\u22C1",
          xwedge: "\u22C0",
          Yacute: "\xDD",
          yacute: "\xFD",
          YAcy: "\u042F",
          yacy: "\u044F",
          Ycirc: "\u0176",
          ycirc: "\u0177",
          Ycy: "\u042B",
          ycy: "\u044B",
          yen: "\xA5",
          Yfr: "\u{1D51C}",
          yfr: "\u{1D536}",
          YIcy: "\u0407",
          yicy: "\u0457",
          Yopf: "\u{1D550}",
          yopf: "\u{1D56A}",
          Yscr: "\u{1D4B4}",
          yscr: "\u{1D4CE}",
          YUcy: "\u042E",
          yucy: "\u044E",
          yuml: "\xFF",
          Yuml: "\u0178",
          Zacute: "\u0179",
          zacute: "\u017A",
          Zcaron: "\u017D",
          zcaron: "\u017E",
          Zcy: "\u0417",
          zcy: "\u0437",
          Zdot: "\u017B",
          zdot: "\u017C",
          zeetrf: "\u2128",
          ZeroWidthSpace: "\u200B",
          Zeta: "\u0396",
          zeta: "\u03B6",
          zfr: "\u{1D537}",
          Zfr: "\u2128",
          ZHcy: "\u0416",
          zhcy: "\u0436",
          zigrarr: "\u21DD",
          zopf: "\u{1D56B}",
          Zopf: "\u2124",
          Zscr: "\u{1D4B5}",
          zscr: "\u{1D4CF}",
          zwj: "\u200D",
          zwnj: "\u200C",
        };
      }),
      Us = he((e, t) => {
        t.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          AElig: "\xC6",
          aelig: "\xE6",
          Agrave: "\xC0",
          agrave: "\xE0",
          amp: "&",
          AMP: "&",
          Aring: "\xC5",
          aring: "\xE5",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          brvbar: "\xA6",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          cedil: "\xB8",
          cent: "\xA2",
          copy: "\xA9",
          COPY: "\xA9",
          curren: "\xA4",
          deg: "\xB0",
          divide: "\xF7",
          Eacute: "\xC9",
          eacute: "\xE9",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          Egrave: "\xC8",
          egrave: "\xE8",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          frac12: "\xBD",
          frac14: "\xBC",
          frac34: "\xBE",
          gt: ">",
          GT: ">",
          Iacute: "\xCD",
          iacute: "\xED",
          Icirc: "\xCE",
          icirc: "\xEE",
          iexcl: "\xA1",
          Igrave: "\xCC",
          igrave: "\xEC",
          iquest: "\xBF",
          Iuml: "\xCF",
          iuml: "\xEF",
          laquo: "\xAB",
          lt: "<",
          LT: "<",
          macr: "\xAF",
          micro: "\xB5",
          middot: "\xB7",
          nbsp: "\xA0",
          not: "\xAC",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          Oacute: "\xD3",
          oacute: "\xF3",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          Ograve: "\xD2",
          ograve: "\xF2",
          ordf: "\xAA",
          ordm: "\xBA",
          Oslash: "\xD8",
          oslash: "\xF8",
          Otilde: "\xD5",
          otilde: "\xF5",
          Ouml: "\xD6",
          ouml: "\xF6",
          para: "\xB6",
          plusmn: "\xB1",
          pound: "\xA3",
          quot: '"',
          QUOT: '"',
          raquo: "\xBB",
          reg: "\xAE",
          REG: "\xAE",
          sect: "\xA7",
          shy: "\xAD",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          szlig: "\xDF",
          THORN: "\xDE",
          thorn: "\xFE",
          times: "\xD7",
          Uacute: "\xDA",
          uacute: "\xFA",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uml: "\xA8",
          Uuml: "\xDC",
          uuml: "\xFC",
          Yacute: "\xDD",
          yacute: "\xFD",
          yen: "\xA5",
          yuml: "\xFF",
        };
      }),
      Ja = he((e, t) => {
        t.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
      }),
      zs = he((e, t) => {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        };
      }),
      Hs = he(e => {
        "use strict";
        var t =
          (e && e.__importDefault) ||
          function (a) {
            return a && a.__esModule ? a : { default: a };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = t(zs()),
          n =
            String.fromCodePoint ||
            function (a) {
              var u = "";
              return (
                a > 65535 &&
                  ((a -= 65536),
                  (u += String.fromCharCode(((a >>> 10) & 1023) | 55296)),
                  (a = 56320 | (a & 1023))),
                (u += String.fromCharCode(a)),
                u
              );
            };
        function o(a) {
          return (a >= 55296 && a <= 57343) || a > 1114111
            ? "\uFFFD"
            : (a in r.default && (a = r.default[a]), n(a));
        }
        d(o, "decodeCodePoint"), (e.default = o);
      }),
      Ia = he(e => {
        "use strict";
        var t =
          (e && e.__importDefault) ||
          function (f) {
            return f && f.__esModule ? f : { default: f };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
        var r = t(Xa()),
          n = t(Us()),
          o = t(Ja()),
          a = t(Hs()),
          u = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
        (e.decodeXML = i(o.default)), (e.decodeHTMLStrict = i(r.default));
        function i(f) {
          var m = l(f);
          return function (y) {
            return String(y).replace(u, m);
          };
        }
        d(i, "getStrictDecoder");
        var s = d(function (f, m) {
          return f < m ? 1 : -1;
        }, "sorter");
        e.decodeHTML = (function () {
          for (
            var f = Object.keys(n.default).sort(s),
              m = Object.keys(r.default).sort(s),
              y = 0,
              E = 0;
            y < m.length;
            y++
          )
            f[E] === m[y] ? ((m[y] += ";?"), E++) : (m[y] += ";");
          var w = new RegExp("&(?:" + m.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
            C = l(r.default);
          function b(S) {
            return S.substr(-1) !== ";" && (S += ";"), C(S);
          }
          return (
            d(b, "replacer"),
            function (S) {
              return String(S).replace(w, b);
            }
          );
        })();
        function l(f) {
          return d(function (m) {
            if (m.charAt(1) === "#") {
              var y = m.charAt(2);
              return y === "X" || y === "x"
                ? a.default(parseInt(m.substr(3), 16))
                : a.default(parseInt(m.substr(2), 10));
            }
            return f[m.slice(1, -1)] || m;
          }, "replace");
        }
        d(l, "getReplacer");
      }),
      Ba = he(e => {
        "use strict";
        var t =
          (e && e.__importDefault) ||
          function (A) {
            return A && A.__esModule ? A : { default: A };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.escapeUTF8 = e.escape = e.encodeNonAsciiHTML = e.encodeHTML = e.encodeXML = void 0);
        var r = t(Ja()),
          n = s(r.default),
          o = l(n);
        e.encodeXML = S(n);
        var a = t(Xa()),
          u = s(a.default),
          i = l(u);
        (e.encodeHTML = E(u, i)), (e.encodeNonAsciiHTML = S(u));
        function s(A) {
          return Object.keys(A)
            .sort()
            .reduce(function (x, _) {
              return (x[A[_]] = "&" + _ + ";"), x;
            }, {});
        }
        d(s, "getInverseObj");
        function l(A) {
          for (var x = [], _ = [], I = 0, v = Object.keys(A); I < v.length; I++) {
            var T = v[I];
            T.length === 1 ? x.push("\\" + T) : _.push(T);
          }
          x.sort();
          for (var B = 0; B < x.length - 1; B++) {
            for (var L = B; L < x.length - 1 && x[L].charCodeAt(1) + 1 === x[L + 1].charCodeAt(1); )
              L += 1;
            var k = 1 + L - B;
            k < 3 || x.splice(B, k, x[B] + "-" + x[L]);
          }
          return _.unshift("[" + x.join("") + "]"), new RegExp(_.join("|"), "g");
        }
        d(l, "getInverseReplacer");
        var f =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          m =
            String.prototype.codePointAt != null
              ? function (A) {
                  return A.codePointAt(0);
                }
              : function (A) {
                  return (A.charCodeAt(0) - 55296) * 1024 + A.charCodeAt(1) - 56320 + 65536;
                };
        function y(A) {
          return "&#x" + (A.length > 1 ? m(A) : A.charCodeAt(0)).toString(16).toUpperCase() + ";";
        }
        d(y, "singleCharReplacer");
        function E(A, x) {
          return function (_) {
            return _.replace(x, function (I) {
              return A[I];
            }).replace(f, y);
          };
        }
        d(E, "getInverse");
        var w = new RegExp(o.source + "|" + f.source, "g");
        function C(A) {
          return A.replace(w, y);
        }
        d(C, "escape"), (e.escape = C);
        function b(A) {
          return A.replace(o, y);
        }
        d(b, "escapeUTF8"), (e.escapeUTF8 = b);
        function S(A) {
          return function (x) {
            return x.replace(w, function (_) {
              return A[_] || y(_);
            });
          };
        }
        d(S, "getASCIIEncoder");
      }),
      Gs = he(e => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0);
        var t = Ia(),
          r = Ba();
        function n(s, l) {
          return (!l || l <= 0 ? t.decodeXML : t.decodeHTML)(s);
        }
        d(n, "decode"), (e.decode = n);
        function o(s, l) {
          return (!l || l <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s);
        }
        d(o, "decodeStrict"), (e.decodeStrict = o);
        function a(s, l) {
          return (!l || l <= 0 ? r.encodeXML : r.encodeHTML)(s);
        }
        d(a, "encode"), (e.encode = a);
        var u = Ba();
        Object.defineProperty(e, "encodeXML", {
          enumerable: !0,
          get: d(function () {
            return u.encodeXML;
          }, "get"),
        }),
          Object.defineProperty(e, "encodeHTML", {
            enumerable: !0,
            get: d(function () {
              return u.encodeHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "encodeNonAsciiHTML", {
            enumerable: !0,
            get: d(function () {
              return u.encodeNonAsciiHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "escape", {
            enumerable: !0,
            get: d(function () {
              return u.escape;
            }, "get"),
          }),
          Object.defineProperty(e, "escapeUTF8", {
            enumerable: !0,
            get: d(function () {
              return u.escapeUTF8;
            }, "get"),
          }),
          Object.defineProperty(e, "encodeHTML4", {
            enumerable: !0,
            get: d(function () {
              return u.encodeHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "encodeHTML5", {
            enumerable: !0,
            get: d(function () {
              return u.encodeHTML;
            }, "get"),
          });
        var i = Ia();
        Object.defineProperty(e, "decodeXML", {
          enumerable: !0,
          get: d(function () {
            return i.decodeXML;
          }, "get"),
        }),
          Object.defineProperty(e, "decodeHTML", {
            enumerable: !0,
            get: d(function () {
              return i.decodeHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeHTMLStrict", {
            enumerable: !0,
            get: d(function () {
              return i.decodeHTMLStrict;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeHTML4", {
            enumerable: !0,
            get: d(function () {
              return i.decodeHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeHTML5", {
            enumerable: !0,
            get: d(function () {
              return i.decodeHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeHTML4Strict", {
            enumerable: !0,
            get: d(function () {
              return i.decodeHTMLStrict;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeHTML5Strict", {
            enumerable: !0,
            get: d(function () {
              return i.decodeHTMLStrict;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeXMLStrict", {
            enumerable: !0,
            get: d(function () {
              return i.decodeXML;
            }, "get"),
          });
      }),
      Vs = he((e, t) => {
        "use strict";
        function r(h, p) {
          if (!(h instanceof p)) throw new TypeError("Cannot call a class as a function");
        }
        d(r, "_classCallCheck");
        function n(h, p) {
          for (var g = 0; g < p.length; g++) {
            var R = p[g];
            (R.enumerable = R.enumerable || !1),
              (R.configurable = !0),
              "value" in R && (R.writable = !0),
              Object.defineProperty(h, R.key, R);
          }
        }
        d(n, "_defineProperties");
        function o(h, p, g) {
          return p && n(h.prototype, p), g && n(h, g), h;
        }
        d(o, "_createClass");
        function a(h, p) {
          var g = (typeof Symbol < "u" && h[Symbol.iterator]) || h["@@iterator"];
          if (!g) {
            if (Array.isArray(h) || (g = u(h)) || (p && h && typeof h.length == "number")) {
              g && (h = g);
              var R = 0,
                D = d(function () {}, "F");
              return {
                s: D,
                n: d(function () {
                  return R >= h.length ? { done: !0 } : { done: !1, value: h[R++] };
                }, "n"),
                e: d(function (j) {
                  throw j;
                }, "e"),
                f: D,
              };
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          var O = !0,
            F = !1,
            N;
          return {
            s: d(function () {
              g = g.call(h);
            }, "s"),
            n: d(function () {
              var j = g.next();
              return (O = j.done), j;
            }, "n"),
            e: d(function (j) {
              (F = !0), (N = j);
            }, "e"),
            f: d(function () {
              try {
                !O && g.return != null && g.return();
              } finally {
                if (F) throw N;
              }
            }, "f"),
          };
        }
        d(a, "_createForOfIteratorHelper");
        function u(h, p) {
          if (h) {
            if (typeof h == "string") return i(h, p);
            var g = Object.prototype.toString.call(h).slice(8, -1);
            if (
              (g === "Object" && h.constructor && (g = h.constructor.name),
              g === "Map" || g === "Set")
            )
              return Array.from(h);
            if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))
              return i(h, p);
          }
        }
        d(u, "_unsupportedIterableToArray");
        function i(h, p) {
          (p == null || p > h.length) && (p = h.length);
          for (var g = 0, R = new Array(p); g < p; g++) R[g] = h[g];
          return R;
        }
        d(i, "_arrayLikeToArray");
        var s = Gs(),
          l = { fg: "#FFF", bg: "#000", newline: !1, escapeXML: !1, stream: !1, colors: f() };
        function f() {
          var h = {
            0: "#000",
            1: "#A00",
            2: "#0A0",
            3: "#A50",
            4: "#00A",
            5: "#A0A",
            6: "#0AA",
            7: "#AAA",
            8: "#555",
            9: "#F55",
            10: "#5F5",
            11: "#FF5",
            12: "#55F",
            13: "#F5F",
            14: "#5FF",
            15: "#FFF",
          };
          return (
            A(0, 5).forEach(function (p) {
              A(0, 5).forEach(function (g) {
                A(0, 5).forEach(function (R) {
                  return m(p, g, R, h);
                });
              });
            }),
            A(0, 23).forEach(function (p) {
              var g = p + 232,
                R = y(p * 10 + 8);
              h[g] = "#" + R + R + R;
            }),
            h
          );
        }
        d(f, "getDefaultColors");
        function m(h, p, g, R) {
          var D = 16 + h * 36 + p * 6 + g,
            O = h > 0 ? h * 40 + 55 : 0,
            F = p > 0 ? p * 40 + 55 : 0,
            N = g > 0 ? g * 40 + 55 : 0;
          R[D] = E([O, F, N]);
        }
        d(m, "setStyleColor");
        function y(h) {
          for (var p = h.toString(16); p.length < 2; ) p = "0" + p;
          return p;
        }
        d(y, "toHexString");
        function E(h) {
          var p = [],
            g = a(h),
            R;
          try {
            for (g.s(); !(R = g.n()).done; ) {
              var D = R.value;
              p.push(y(D));
            }
          } catch (O) {
            g.e(O);
          } finally {
            g.f();
          }
          return "#" + p.join("");
        }
        d(E, "toColorHexString");
        function w(h, p, g, R) {
          var D;
          return (
            p === "text"
              ? (D = I(g, R))
              : p === "display"
                ? (D = b(h, g, R))
                : p === "xterm256Foreground"
                  ? (D = B(h, R.colors[g]))
                  : p === "xterm256Background"
                    ? (D = L(h, R.colors[g]))
                    : p === "rgb" && (D = C(h, g)),
            D
          );
        }
        d(w, "generateOutput");
        function C(h, p) {
          p = p.substring(2).slice(0, -1);
          var g = +p.substr(0, 2),
            R = p.substring(5).split(";"),
            D = R.map(function (O) {
              return ("0" + Number(O).toString(16)).substr(-2);
            }).join("");
          return T(h, (g === 38 ? "color:#" : "background-color:#") + D);
        }
        d(C, "handleRgb");
        function b(h, p, g) {
          p = parseInt(p, 10);
          var R = {
              "-1": d(function () {
                return "<br/>";
              }, "_"),
              0: d(function () {
                return h.length && S(h);
              }, "_"),
              1: d(function () {
                return v(h, "b");
              }, "_"),
              3: d(function () {
                return v(h, "i");
              }, "_"),
              4: d(function () {
                return v(h, "u");
              }, "_"),
              8: d(function () {
                return T(h, "display:none");
              }, "_"),
              9: d(function () {
                return v(h, "strike");
              }, "_"),
              22: d(function () {
                return T(h, "font-weight:normal;text-decoration:none;font-style:normal");
              }, "_"),
              23: d(function () {
                return k(h, "i");
              }, "_"),
              24: d(function () {
                return k(h, "u");
              }, "_"),
              39: d(function () {
                return B(h, g.fg);
              }, "_"),
              49: d(function () {
                return L(h, g.bg);
              }, "_"),
              53: d(function () {
                return T(h, "text-decoration:overline");
              }, "_"),
            },
            D;
          return (
            R[p]
              ? (D = R[p]())
              : 4 < p && p < 7
                ? (D = v(h, "blink"))
                : 29 < p && p < 38
                  ? (D = B(h, g.colors[p - 30]))
                  : 39 < p && p < 48
                    ? (D = L(h, g.colors[p - 40]))
                    : 89 < p && p < 98
                      ? (D = B(h, g.colors[8 + (p - 90)]))
                      : 99 < p && p < 108 && (D = L(h, g.colors[8 + (p - 100)])),
            D
          );
        }
        d(b, "handleDisplay");
        function S(h) {
          var p = h.slice(0);
          return (
            (h.length = 0),
            p
              .reverse()
              .map(function (g) {
                return "</" + g + ">";
              })
              .join("")
          );
        }
        d(S, "resetStyles");
        function A(h, p) {
          for (var g = [], R = h; R <= p; R++) g.push(R);
          return g;
        }
        d(A, "range");
        function x(h) {
          return function (p) {
            return (h === null || p.category !== h) && h !== "all";
          };
        }
        d(x, "notCategory");
        function _(h) {
          h = parseInt(h, 10);
          var p = null;
          return (
            h === 0
              ? (p = "all")
              : h === 1
                ? (p = "bold")
                : 2 < h && h < 5
                  ? (p = "underline")
                  : 4 < h && h < 7
                    ? (p = "blink")
                    : h === 8
                      ? (p = "hide")
                      : h === 9
                        ? (p = "strike")
                        : (29 < h && h < 38) || h === 39 || (89 < h && h < 98)
                          ? (p = "foreground-color")
                          : ((39 < h && h < 48) || h === 49 || (99 < h && h < 108)) &&
                            (p = "background-color"),
            p
          );
        }
        d(_, "categoryForCode");
        function I(h, p) {
          return p.escapeXML ? s.encodeXML(h) : h;
        }
        d(I, "pushText");
        function v(h, p, g) {
          return (
            g || (g = ""), h.push(p), "<".concat(p).concat(g ? ' style="'.concat(g, '"') : "", ">")
          );
        }
        d(v, "pushTag");
        function T(h, p) {
          return v(h, "span", p);
        }
        d(T, "pushStyle");
        function B(h, p) {
          return v(h, "span", "color:" + p);
        }
        d(B, "pushForegroundColor");
        function L(h, p) {
          return v(h, "span", "background-color:" + p);
        }
        d(L, "pushBackgroundColor");
        function k(h, p) {
          var g;
          if ((h.slice(-1)[0] === p && (g = h.pop()), g)) return "</" + p + ">";
        }
        d(k, "closeTag");
        function q(h, p, g) {
          var R = !1,
            D = 3;
          function O() {
            return "";
          }
          d(O, "remove");
          function F(re, ne) {
            return g("xterm256Foreground", ne), "";
          }
          d(F, "removeXterm256Foreground");
          function N(re, ne) {
            return g("xterm256Background", ne), "";
          }
          d(N, "removeXterm256Background");
          function j(re) {
            return p.newline ? g("display", -1) : g("text", re), "";
          }
          d(j, "newline");
          function Q(re, ne) {
            (R = !0), ne.trim().length === 0 && (ne = "0"), (ne = ne.trimRight(";").split(";"));
            var Ne = a(ne),
              wt;
            try {
              for (Ne.s(); !(wt = Ne.n()).done; ) {
                var Dr = wt.value;
                g("display", Dr);
              }
            } catch (xr) {
              Ne.e(xr);
            } finally {
              Ne.f();
            }
            return "";
          }
          d(Q, "ansiMess");
          function te(re) {
            return g("text", re), "";
          }
          d(te, "realText");
          function J(re) {
            return g("rgb", re), "";
          }
          d(J, "rgb");
          var ue = [
            { pattern: /^\x08+/, sub: O },
            { pattern: /^\x1b\[[012]?K/, sub: O },
            { pattern: /^\x1b\[\(B/, sub: O },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: J },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: F },
            { pattern: /^\x1b\[48;5;(\d+)m/, sub: N },
            { pattern: /^\n/, sub: j },
            { pattern: /^\r+\n/, sub: j },
            { pattern: /^\r/, sub: j },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: Q },
            { pattern: /^\x1b\[\d?J/, sub: O },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: O },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: O },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: te },
          ];
          function V(re, ne) {
            (ne > D && R) || ((R = !1), (h = h.replace(re.pattern, re.sub)));
          }
          d(V, "process");
          var ce = [],
            De = h,
            be = De.length;
          e: for (; be > 0; ) {
            for (var Oe = 0, St = 0, Cr = ue.length; St < Cr; Oe = ++St) {
              var vr = ue[Oe];
              if ((V(vr, Oe), h.length !== be)) {
                be = h.length;
                continue e;
              }
            }
            if (h.length === be) break;
            ce.push(0), (be = h.length);
          }
          return ce;
        }
        d(q, "tokenize");
        function P(h, p, g) {
          return (
            p !== "text" &&
              ((h = h.filter(x(_(g)))), h.push({ token: p, data: g, category: _(g) })),
            h
          );
        }
        d(P, "updateStickyStack");
        var M = (function () {
          function h(p) {
            r(this, h),
              (p = p || {}),
              p.colors && (p.colors = Object.assign({}, l.colors, p.colors)),
              (this.options = Object.assign({}, l, p)),
              (this.stack = []),
              (this.stickyStack = []);
          }
          return (
            d(h, "Filter"),
            o(h, [
              {
                key: "toHtml",
                value: d(function (p) {
                  var g = this;
                  p = typeof p == "string" ? [p] : p;
                  var R = this.stack,
                    D = this.options,
                    O = [];
                  return (
                    this.stickyStack.forEach(function (F) {
                      var N = w(R, F.token, F.data, D);
                      N && O.push(N);
                    }),
                    q(p.join(""), D, function (F, N) {
                      var j = w(R, F, N, D);
                      j && O.push(j), D.stream && (g.stickyStack = P(g.stickyStack, F, N));
                    }),
                    R.length && O.push(S(R)),
                    O.join("")
                  );
                }, "toHtml"),
              },
            ]),
            h
          );
        })();
        t.exports = M;
      }),
      de = (() => {
        let e;
        return (
          typeof window < "u"
            ? (e = window)
            : typeof globalThis < "u"
              ? (e = globalThis)
              : typeof window < "u"
                ? (e = window)
                : typeof self < "u"
                  ? (e = self)
                  : (e = {}),
          e
        );
      })();
    function Za() {
      let e = { setHandler: d(() => {}, "setHandler"), send: d(() => {}, "send") };
      return new Zt({ transport: e });
    }
    d(Za, "mockChannel");
    var Qa = class {
      constructor() {
        (this.getChannel = d(() => {
          if (!this.channel) {
            let t = Za();
            return this.setChannel(t), t;
          }
          return this.channel;
        }, "getChannel")),
          (this.ready = d(() => this.promise, "ready")),
          (this.hasChannel = d(() => !!this.channel, "hasChannel")),
          (this.setChannel = d(t => {
            (this.channel = t), this.resolve();
          }, "setChannel")),
          (this.promise = new Promise(t => {
            this.resolve = () => t(this.getChannel());
          }));
      }
    };
    d(Qa, "AddonStore");
    var Ws = Qa,
      $r = "__STORYBOOK_ADDONS_PREVIEW";
    function eu() {
      return de[$r] || (de[$r] = new Ws()), de[$r];
    }
    d(eu, "getAddonsStore");
    var Ve = eu();
    function Ys(e) {
      return e;
    }
    d(Ys, "definePreview");
    var tu = class {
      constructor() {
        (this.hookListsMap = void 0),
          (this.mountedDecorators = void 0),
          (this.prevMountedDecorators = void 0),
          (this.currentHooks = void 0),
          (this.nextHookIndex = void 0),
          (this.currentPhase = void 0),
          (this.currentEffects = void 0),
          (this.prevEffects = void 0),
          (this.currentDecoratorName = void 0),
          (this.hasUpdates = void 0),
          (this.currentContext = void 0),
          (this.renderListener = d(t => {
            t === this.currentContext?.id &&
              (this.triggerEffects(), (this.currentContext = null), this.removeRenderListeners());
          }, "renderListener")),
          this.init();
      }
      init() {
        (this.hookListsMap = new WeakMap()),
          (this.mountedDecorators = new Set()),
          (this.prevMountedDecorators = new Set()),
          (this.currentHooks = []),
          (this.nextHookIndex = 0),
          (this.currentPhase = "NONE"),
          (this.currentEffects = []),
          (this.prevEffects = []),
          (this.currentDecoratorName = null),
          (this.hasUpdates = !1),
          (this.currentContext = null);
      }
      clean() {
        this.prevEffects.forEach(t => {
          t.destroy && t.destroy();
        }),
          this.init(),
          this.removeRenderListeners();
      }
      getNextHook() {
        let t = this.currentHooks[this.nextHookIndex];
        return (this.nextHookIndex += 1), t;
      }
      triggerEffects() {
        this.prevEffects.forEach(t => {
          !this.currentEffects.includes(t) && t.destroy && t.destroy();
        }),
          this.currentEffects.forEach(t => {
            this.prevEffects.includes(t) || (t.destroy = t.create());
          }),
          (this.prevEffects = this.currentEffects),
          (this.currentEffects = []);
      }
      addRenderListeners() {
        this.removeRenderListeners(), Ve.getChannel().on(Tt, this.renderListener);
      }
      removeRenderListeners() {
        Ve.getChannel().removeListener(Tt, this.renderListener);
      }
    };
    d(tu, "HooksContext");
    var ru = tu;
    function Wr(e) {
      let t = d((...r) => {
        let { hooks: n } = typeof r[0] == "function" ? r[1] : r[0],
          o = n.currentPhase,
          a = n.currentHooks,
          u = n.nextHookIndex,
          i = n.currentDecoratorName;
        (n.currentDecoratorName = e.name),
          n.prevMountedDecorators.has(e)
            ? ((n.currentPhase = "UPDATE"), (n.currentHooks = n.hookListsMap.get(e) || []))
            : ((n.currentPhase = "MOUNT"),
              (n.currentHooks = []),
              n.hookListsMap.set(e, n.currentHooks),
              n.prevMountedDecorators.add(e)),
          (n.nextHookIndex = 0);
        let s = de.STORYBOOK_HOOKS_CONTEXT;
        de.STORYBOOK_HOOKS_CONTEXT = n;
        let l = e(...r);
        if (
          ((de.STORYBOOK_HOOKS_CONTEXT = s), n.currentPhase === "UPDATE" && n.getNextHook() != null)
        )
          throw new Error(
            "Rendered fewer hooks than expected. This may be caused by an accidental early return statement.",
          );
        return (
          (n.currentPhase = o),
          (n.currentHooks = a),
          (n.nextHookIndex = u),
          (n.currentDecoratorName = i),
          l
        );
      }, "hookified");
      return (t.originalFn = e), t;
    }
    d(Wr, "hookify");
    var qr = 0,
      Ks = 25,
      Xs = d(
        e => (t, r) => {
          let n = e(
            Wr(t),
            r.map(o => Wr(o)),
          );
          return o => {
            let { hooks: a } = o;
            (a.prevMountedDecorators ??= new Set()),
              (a.mountedDecorators = new Set([t, ...r])),
              (a.currentContext = o),
              (a.hasUpdates = !1);
            let u = n(o);
            for (qr = 1; a.hasUpdates; )
              if (((a.hasUpdates = !1), (a.currentEffects = []), (u = n(o)), (qr += 1), qr > Ks))
                throw new Error(
                  "Too many re-renders. Storybook limits the number of renders to prevent an infinite loop.",
                );
            return a.addRenderListeners(), u;
          };
        },
        "applyHooks",
      ),
      Js = d((e, t) => e.length === t.length && e.every((r, n) => r === t[n]), "areDepsEqual"),
      pn = d(
        () =>
          new Error(
            "Storybook preview hooks can only be called inside decorators and story functions.",
          ),
        "invalidHooksError",
      );
    function dn() {
      return de.STORYBOOK_HOOKS_CONTEXT || null;
    }
    d(dn, "getHooksContextOrNull");
    function lr() {
      let e = dn();
      if (e == null) throw pn();
      return e;
    }
    d(lr, "getHooksContextOrThrow");
    function nu(e, t, r) {
      let n = lr();
      if (n.currentPhase === "MOUNT") {
        r != null &&
          !Array.isArray(r) &&
          X.warn(
            `${e} received a final argument that is not an array (instead, received ${r}). When specified, the final argument must be an array.`,
          );
        let o = { name: e, deps: r };
        return n.currentHooks.push(o), t(o), o;
      }
      if (n.currentPhase === "UPDATE") {
        let o = n.getNextHook();
        if (o == null) throw new Error("Rendered more hooks than during the previous render.");
        return (
          o.name !== e &&
            X.warn(
              `Storybook has detected a change in the order of Hooks${n.currentDecoratorName ? ` called by ${n.currentDecoratorName}` : ""}. This will lead to bugs and errors if not fixed.`,
            ),
          r != null &&
            o.deps == null &&
            X.warn(
              `${e} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`,
            ),
          r != null &&
            o.deps != null &&
            r.length !== o.deps.length &&
            X.warn(`The final argument passed to ${e} changed size between renders. The order and size of this array must remain constant.
Previous: ${o.deps}
Incoming: ${r}`),
          (r == null || o.deps == null || !Js(r, o.deps)) && (t(o), (o.deps = r)),
          o
        );
      }
      throw pn();
    }
    d(nu, "useHook");
    function It(e, t, r) {
      let { memoizedState: n } = nu(
        e,
        o => {
          o.memoizedState = t();
        },
        r,
      );
      return n;
    }
    d(It, "useMemoLike");
    function Zs(e, t) {
      return It("useMemo", e, t);
    }
    d(Zs, "useMemo");
    function Ft(e, t) {
      return It("useCallback", () => e, t);
    }
    d(Ft, "useCallback");
    function hn(e, t) {
      return It(e, () => ({ current: t }), []);
    }
    d(hn, "useRefLike");
    function Qs(e) {
      return hn("useRef", e);
    }
    d(Qs, "useRef");
    function ou() {
      let e = dn();
      if (e != null && e.currentPhase !== "NONE") e.hasUpdates = !0;
      else
        try {
          Ve.getChannel().emit(Gt);
        } catch {
          X.warn("State updates of Storybook preview hooks work only in browser");
        }
    }
    d(ou, "triggerUpdate");
    function fn(e, t) {
      let r = hn(e, typeof t == "function" ? t() : t),
        n = d(o => {
          (r.current = typeof o == "function" ? o(r.current) : o), ou();
        }, "setState");
      return [r.current, n];
    }
    d(fn, "useStateLike");
    function mn(e) {
      return fn("useState", e);
    }
    d(mn, "useState");
    function el(e, t, r) {
      let n = r != null ? () => r(t) : t,
        [o, a] = fn("useReducer", n);
      return [o, d(u => a(i => e(i, u)), "dispatch")];
    }
    d(el, "useReducer");
    function cr(e, t) {
      let r = lr(),
        n = It("useEffect", () => ({ create: e }), t);
      r.currentEffects.includes(n) || r.currentEffects.push(n);
    }
    d(cr, "useEffect");
    function tl(e, t = []) {
      let r = Ve.getChannel();
      return (
        cr(
          () => (
            Object.entries(e).forEach(([n, o]) => r.on(n, o)),
            () => {
              Object.entries(e).forEach(([n, o]) => r.removeListener(n, o));
            }
          ),
          [...Object.keys(e), ...t],
        ),
        Ft(r.emit.bind(r), [r])
      );
    }
    d(tl, "useChannel");
    function pr() {
      let { currentContext: e } = lr();
      if (e == null) throw pn();
      return e;
    }
    d(pr, "useStoryContext");
    function rl(e, t) {
      let { parameters: r } = pr();
      if (e) return r[e] ?? t;
    }
    d(rl, "useParameter");
    function nl() {
      let e = Ve.getChannel(),
        { id: t, args: r } = pr(),
        n = Ft(a => e.emit(Jt, { storyId: t, updatedArgs: a }), [e, t]),
        o = Ft(a => e.emit(Wt, { storyId: t, argNames: a }), [e, t]);
      return [r, n, o];
    }
    d(nl, "useArgs");
    function ol() {
      let e = Ve.getChannel(),
        { globals: t } = pr(),
        r = Ft(n => e.emit(Xt, { globals: n }), [e]);
      return [t, r];
    }
    d(ol, "useGlobals");
    var kA = d(({ name: e, parameterName: t, wrapper: r, skipIfNoParametersOrOptions: n = !1 }) => {
      let o = d(
        a => (u, i) => {
          let s = i.parameters && i.parameters[t];
          return (s && s.disable) || (n && !a && !s)
            ? u(i)
            : r(u, i, { options: a, parameters: s });
        },
        "decorator",
      );
      return (...a) =>
        typeof a[0] == "function"
          ? o()(...a)
          : (...u) => {
              if (u.length > 1) return a.length > 1 ? o(a)(...u) : o(...a)(...u);
              throw new Error(`Passing stories directly into ${e}() is not allowed,
        instead use addDecorator(${e}) and pass options with the '${t}' parameter`);
            };
    }, "makeDecorator");
    function le(e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      var n = Array.from(typeof e == "string" ? [e] : e);
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
      var o = n.reduce(function (i, s) {
        var l = s.match(/\n([\t ]+|(?!\s).)/g);
        return l
          ? i.concat(
              l.map(function (f) {
                var m, y;
                return (y =
                  (m = f.match(/[\t ]/g)) === null || m === void 0 ? void 0 : m.length) !== null &&
                  y !== void 0
                  ? y
                  : 0;
              }),
            )
          : i;
      }, []);
      if (o.length) {
        var a = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, o) +
            "}",
          "g",
        );
        n = n.map(function (i) {
          return i.replace(
            a,
            `
`,
          );
        });
      }
      n[0] = n[0].replace(/^\r?\n/, "");
      var u = n[0];
      return (
        t.forEach(function (i, s) {
          var l = u.match(/(?:^|\n)( *)$/),
            f = l ? l[1] : "",
            m = i;
          typeof i == "string" &&
            i.includes(`
`) &&
            (m = String(i)
              .split(
                `
`,
              )
              .map(function (y, E) {
                return E === 0 ? y : "" + f + y;
              }).join(`
`)),
            (u += m + n[s + 1]);
        }),
        u
      );
    }
    d(le, "dedent");
    var al = le,
      Pa = new Map(),
      ul = "UNIVERSAL_STORE:",
      xe = { PENDING: "PENDING", RESOLVED: "RESOLVED", REJECTED: "REJECTED" },
      ze = class U {
        constructor(t, r) {
          if (
            ((this.debugging = !1),
            (this.listeners = new Map([["*", new Set()]])),
            (this.getState = d(
              () => (this.debug("getState", { state: this.state }), this.state),
              "getState",
            )),
            (this.subscribe = d((n, o) => {
              let a = typeof n == "function",
                u = a ? "*" : n,
                i = a ? n : o;
              if ((this.debug("subscribe", { eventType: u, listener: i }), !i))
                throw new TypeError(
                  `Missing first subscribe argument, or second if first is the event type, when subscribing to a UniversalStore with id '${this.id}'`,
                );
              return (
                this.listeners.has(u) || this.listeners.set(u, new Set()),
                this.listeners.get(u).add(i),
                () => {
                  this.debug("unsubscribe", { eventType: u, listener: i }),
                    this.listeners.has(u) &&
                      (this.listeners.get(u).delete(i),
                      this.listeners.get(u)?.size === 0 && this.listeners.delete(u));
                }
              );
            }, "subscribe")),
            (this.send = d(n => {
              if ((this.debug("send", { event: n }), this.status !== U.Status.READY))
                throw new TypeError(le`Cannot send event before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify({ event: n, id: this.id, actor: this.actor, environment: this.environment }, null, 2)}`);
              this.emitToListeners(n, { actor: this.actor }),
                this.emitToChannel(n, { actor: this.actor });
            }, "send")),
            (this.debugging = t.debug ?? !1),
            !U.isInternalConstructing)
          )
            throw new TypeError(
              "UniversalStore is not constructable - use UniversalStore.create() instead",
            );
          if (
            ((U.isInternalConstructing = !1),
            (this.id = t.id),
            (this.actorId = Date.now().toString(36) + Math.random().toString(36).substring(2)),
            (this.actorType = t.leader ? U.ActorType.LEADER : U.ActorType.FOLLOWER),
            (this.state = t.initialState),
            (this.channelEventName = `${ul}${this.id}`),
            this.debug("constructor", {
              options: t,
              environmentOverrides: r,
              channelEventName: this.channelEventName,
            }),
            this.actor.type === U.ActorType.LEADER)
          )
            this.syncing = { state: xe.RESOLVED, promise: Promise.resolve() };
          else {
            let n,
              o,
              a = new Promise((u, i) => {
                (n = d(() => {
                  this.syncing.state === xe.PENDING && ((this.syncing.state = xe.RESOLVED), u());
                }, "syncingResolve")),
                  (o = d(s => {
                    this.syncing.state === xe.PENDING && ((this.syncing.state = xe.REJECTED), i(s));
                  }, "syncingReject"));
              });
            this.syncing = { state: xe.PENDING, promise: a, resolve: n, reject: o };
          }
          (this.getState = this.getState.bind(this)),
            (this.setState = this.setState.bind(this)),
            (this.subscribe = this.subscribe.bind(this)),
            (this.onStateChange = this.onStateChange.bind(this)),
            (this.send = this.send.bind(this)),
            (this.emitToChannel = this.emitToChannel.bind(this)),
            (this.prepareThis = this.prepareThis.bind(this)),
            (this.emitToListeners = this.emitToListeners.bind(this)),
            (this.handleChannelEvents = this.handleChannelEvents.bind(this)),
            (this.debug = this.debug.bind(this)),
            (this.channel = r?.channel ?? U.preparation.channel),
            (this.environment = r?.environment ?? U.preparation.environment),
            this.channel && this.environment
              ? this.prepareThis({ channel: this.channel, environment: this.environment })
              : U.preparation.promise.then(this.prepareThis);
        }
        static setupPreparationPromise() {
          let t,
            r,
            n = new Promise((o, a) => {
              (t = d(u => {
                o(u);
              }, "resolveRef")),
                (r = d((...u) => {
                  a(u);
                }, "rejectRef"));
            });
          U.preparation = { resolve: t, reject: r, promise: n };
        }
        get actor() {
          return Object.freeze({
            id: this.actorId,
            type: this.actorType,
            environment: this.environment ?? U.Environment.UNKNOWN,
          });
        }
        get status() {
          if (!this.channel || !this.environment) return U.Status.UNPREPARED;
          switch (this.syncing?.state) {
            case xe.PENDING:
            case void 0:
              return U.Status.SYNCING;
            case xe.REJECTED:
              return U.Status.ERROR;
            case xe.RESOLVED:
            default:
              return U.Status.READY;
          }
        }
        untilReady() {
          return Promise.all([U.preparation.promise, this.syncing?.promise]);
        }
        static create(t) {
          if (!t || typeof t?.id != "string")
            throw new TypeError(
              "id is required and must be a string, when creating a UniversalStore",
            );
          t.debug &&
            console.debug(
              le`[UniversalStore]
        create`,
              { options: t },
            );
          let r = Pa.get(t.id);
          if (r)
            return (
              console.warn(le`UniversalStore with id "${t.id}" already exists in this environment, re-using existing.
        You should reuse the existing instance instead of trying to create a new one.`),
              r
            );
          U.isInternalConstructing = !0;
          let n = new U(t);
          return Pa.set(t.id, n), n;
        }
        static __prepare(t, r) {
          (U.preparation.channel = t),
            (U.preparation.environment = r),
            U.preparation.resolve({ channel: t, environment: r });
        }
        setState(t) {
          let r = this.state,
            n = typeof t == "function" ? t(r) : t;
          if (
            (this.debug("setState", { newState: n, previousState: r, updater: t }),
            this.status !== U.Status.READY)
          )
            throw new TypeError(le`Cannot set state before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify({ newState: n, id: this.id, actor: this.actor, environment: this.environment }, null, 2)}`);
          this.state = n;
          let o = { type: U.InternalEventType.SET_STATE, payload: { state: n, previousState: r } };
          this.emitToChannel(o, { actor: this.actor }),
            this.emitToListeners(o, { actor: this.actor });
        }
        onStateChange(t) {
          return (
            this.debug("onStateChange", { listener: t }),
            this.subscribe(U.InternalEventType.SET_STATE, ({ payload: r }, n) => {
              t(r.state, r.previousState, n);
            })
          );
        }
        emitToChannel(t, r) {
          this.debug("emitToChannel", { event: t, eventInfo: r, channel: this.channel }),
            this.channel?.emit(this.channelEventName, { event: t, eventInfo: r });
        }
        prepareThis({ channel: t, environment: r }) {
          (this.channel = t),
            (this.environment = r),
            this.debug("prepared", { channel: t, environment: r }),
            this.channel.on(this.channelEventName, this.handleChannelEvents),
            this.actor.type === U.ActorType.LEADER
              ? this.emitToChannel(
                  { type: U.InternalEventType.LEADER_CREATED },
                  { actor: this.actor },
                )
              : (this.emitToChannel(
                  { type: U.InternalEventType.FOLLOWER_CREATED },
                  { actor: this.actor },
                ),
                this.emitToChannel(
                  { type: U.InternalEventType.EXISTING_STATE_REQUEST },
                  { actor: this.actor },
                ),
                setTimeout(() => {
                  this.syncing.reject(
                    new TypeError(
                      `No existing state found for follower with id: '${this.id}'. Make sure a leader with the same id exists before creating a follower.`,
                    ),
                  );
                }, 1e3));
        }
        emitToListeners(t, r) {
          let n = this.listeners.get(t.type),
            o = this.listeners.get("*");
          this.debug("emitToListeners", {
            event: t,
            eventInfo: r,
            eventTypeListeners: n,
            everythingListeners: o,
          }),
            [...(n ?? []), ...(o ?? [])].forEach(a => a(t, r));
        }
        handleChannelEvents(t) {
          let { event: r, eventInfo: n } = t;
          if ([n.actor.id, n.forwardingActor?.id].includes(this.actor.id)) {
            this.debug("handleChannelEvents: Ignoring event from self", { channelEvent: t });
            return;
          } else if (
            this.syncing?.state === xe.PENDING &&
            r.type !== U.InternalEventType.EXISTING_STATE_RESPONSE
          ) {
            this.debug("handleChannelEvents: Ignoring event while syncing", { channelEvent: t });
            return;
          }
          if (
            (this.debug("handleChannelEvents", { channelEvent: t }),
            this.actor.type === U.ActorType.LEADER)
          ) {
            let o = !0;
            switch (r.type) {
              case U.InternalEventType.EXISTING_STATE_REQUEST:
                o = !1;
                let a = { type: U.InternalEventType.EXISTING_STATE_RESPONSE, payload: this.state };
                this.debug("handleChannelEvents: responding to existing state request", {
                  responseEvent: a,
                }),
                  this.emitToChannel(a, { actor: this.actor });
                break;
              case U.InternalEventType.LEADER_CREATED:
                (o = !1),
                  (this.syncing.state = xe.REJECTED),
                  this.debug("handleChannelEvents: erroring due to second leader being created", {
                    event: r,
                  }),
                  console.error(le`Detected multiple UniversalStore leaders created with the same id "${this.id}".
            Only one leader can exists at a time, your stores are now in an invalid state.
            Leaders detected:
            this: ${JSON.stringify(this.actor, null, 2)}
            other: ${JSON.stringify(n.actor, null, 2)}`);
                break;
            }
            o &&
              (this.debug("handleChannelEvents: forwarding event", { channelEvent: t }),
              this.emitToChannel(r, { actor: n.actor, forwardingActor: this.actor }));
          }
          if (this.actor.type === U.ActorType.FOLLOWER)
            switch (r.type) {
              case U.InternalEventType.EXISTING_STATE_RESPONSE:
                if (
                  (this.debug(
                    "handleChannelEvents: Setting state from leader's existing state response",
                    { event: r },
                  ),
                  this.syncing?.state !== xe.PENDING)
                )
                  break;
                this.syncing.resolve?.();
                let o = {
                  type: U.InternalEventType.SET_STATE,
                  payload: { state: r.payload, previousState: this.state },
                };
                (this.state = r.payload), this.emitToListeners(o, n);
                break;
            }
          switch (r.type) {
            case U.InternalEventType.SET_STATE:
              this.debug("handleChannelEvents: Setting state", { event: r }),
                (this.state = r.payload.state);
              break;
          }
          this.emitToListeners(r, { actor: n.actor });
        }
        debug(t, r) {
          this.debugging &&
            console.debug(
              le`[UniversalStore::${this.id}::${this.environment ?? U.Environment.UNKNOWN}]
        ${t}`,
              JSON.stringify(
                { data: r, actor: this.actor, state: this.state, status: this.status },
                null,
                2,
              ),
            );
        }
        static __reset() {
          U.preparation.reject(new Error("reset")),
            U.setupPreparationPromise(),
            (U.isInternalConstructing = !1);
        }
      };
    d(ze, "UniversalStore"),
      (ze.ActorType = { LEADER: "LEADER", FOLLOWER: "FOLLOWER" }),
      (ze.Environment = {
        SERVER: "SERVER",
        MANAGER: "MANAGER",
        PREVIEW: "PREVIEW",
        UNKNOWN: "UNKNOWN",
        MOCK: "MOCK",
      }),
      (ze.InternalEventType = {
        EXISTING_STATE_REQUEST: "__EXISTING_STATE_REQUEST",
        EXISTING_STATE_RESPONSE: "__EXISTING_STATE_RESPONSE",
        SET_STATE: "__SET_STATE",
        LEADER_CREATED: "__LEADER_CREATED",
        FOLLOWER_CREATED: "__FOLLOWER_CREATED",
      }),
      (ze.Status = {
        UNPREPARED: "UNPREPARED",
        SYNCING: "SYNCING",
        READY: "READY",
        ERROR: "ERROR",
      }),
      (ze.isInternalConstructing = !1),
      ze.setupPreparationPromise();
    var tr = ze;
    function au(e, t) {
      let r = {},
        n = Object.entries(e);
      for (let o = 0; o < n.length; o++) {
        let [a, u] = n[o];
        t(u, a) || (r[a] = u);
      }
      return r;
    }
    d(au, "omitBy");
    function uu(e, t) {
      let r = {};
      for (let n = 0; n < t.length; n++) {
        let o = t[n];
        Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
      }
      return r;
    }
    d(uu, "pick");
    function iu(e, t) {
      let r = {},
        n = Object.entries(e);
      for (let o = 0; o < n.length; o++) {
        let [a, u] = n[o];
        t(u, a) && (r[a] = u);
      }
      return r;
    }
    d(iu, "pickBy");
    function _e(e) {
      if (typeof e != "object" || e == null) return !1;
      if (Object.getPrototypeOf(e) === null) return !0;
      if (e.toString() !== "[object Object]") return !1;
      let t = e;
      for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    d(_e, "isPlainObject");
    function nt(e, t) {
      let r = {},
        n = Object.keys(e);
      for (let o = 0; o < n.length; o++) {
        let a = n[o],
          u = e[a];
        r[a] = t(u, a, e);
      }
      return r;
    }
    d(nt, "mapValues");
    var il = "[object RegExp]",
      sl = "[object String]",
      ll = "[object Number]",
      cl = "[object Boolean]",
      Na = "[object Arguments]",
      pl = "[object Symbol]",
      dl = "[object Date]",
      hl = "[object Map]",
      fl = "[object Set]",
      ml = "[object Array]",
      gl = "[object Function]",
      yl = "[object ArrayBuffer]",
      Ur = "[object Object]",
      bl = "[object Error]",
      El = "[object DataView]",
      Al = "[object Uint8Array]",
      Sl = "[object Uint8ClampedArray]",
      wl = "[object Uint16Array]",
      Cl = "[object Uint32Array]",
      vl = "[object BigUint64Array]",
      Dl = "[object Int8Array]",
      xl = "[object Int16Array]",
      Tl = "[object Int32Array]",
      Rl = "[object BigInt64Array]",
      _l = "[object Float32Array]",
      Ol = "[object Float64Array]";
    function Yr(e) {
      return Object.getOwnPropertySymbols(e).filter(t =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    }
    d(Yr, "getSymbols");
    function Kr(e) {
      return e == null
        ? e === void 0
          ? "[object Undefined]"
          : "[object Null]"
        : Object.prototype.toString.call(e);
    }
    d(Kr, "getTag");
    function gn(e, t) {
      if (typeof e == typeof t)
        switch (typeof e) {
          case "bigint":
          case "string":
          case "boolean":
          case "symbol":
          case "undefined":
            return e === t;
          case "number":
            return e === t || Object.is(e, t);
          case "function":
            return e === t;
          case "object":
            return Ie(e, t);
        }
      return Ie(e, t);
    }
    d(gn, "isEqual");
    function Ie(e, t, r) {
      if (Object.is(e, t)) return !0;
      let n = Kr(e),
        o = Kr(t);
      if ((n === Na && (n = Ur), o === Na && (o = Ur), n !== o)) return !1;
      switch (n) {
        case sl:
          return e.toString() === t.toString();
        case ll: {
          let i = e.valueOf(),
            s = t.valueOf();
          return i === s || (Number.isNaN(i) && Number.isNaN(s));
        }
        case cl:
        case dl:
        case pl:
          return Object.is(e.valueOf(), t.valueOf());
        case il:
          return e.source === t.source && e.flags === t.flags;
        case gl:
          return e === t;
      }
      r = r ?? new Map();
      let a = r.get(e),
        u = r.get(t);
      if (a != null && u != null) return a === t;
      r.set(e, t), r.set(t, e);
      try {
        switch (n) {
          case hl: {
            if (e.size !== t.size) return !1;
            for (let [i, s] of e.entries()) if (!t.has(i) || !Ie(s, t.get(i), r)) return !1;
            return !0;
          }
          case fl: {
            if (e.size !== t.size) return !1;
            let i = Array.from(e.values()),
              s = Array.from(t.values());
            for (let l = 0; l < i.length; l++) {
              let f = i[l],
                m = s.findIndex(y => Ie(f, y, r));
              if (m === -1) return !1;
              s.splice(m, 1);
            }
            return !0;
          }
          case ml:
          case Al:
          case Sl:
          case wl:
          case Cl:
          case vl:
          case Dl:
          case xl:
          case Tl:
          case Rl:
          case _l:
          case Ol: {
            if (
              (typeof Buffer < "u" && Buffer.isBuffer(e) !== Buffer.isBuffer(t)) ||
              e.length !== t.length
            )
              return !1;
            for (let i = 0; i < e.length; i++) if (!Ie(e[i], t[i], r)) return !1;
            return !0;
          }
          case yl:
            return e.byteLength !== t.byteLength ? !1 : Ie(new Uint8Array(e), new Uint8Array(t), r);
          case El:
            return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset
              ? !1
              : Ie(e.buffer, t.buffer, r);
          case bl:
            return e.name === t.name && e.message === t.message;
          case Ur: {
            if (!(Ie(e.constructor, t.constructor, r) || (_e(e) && _e(t)))) return !1;
            let i = [...Object.keys(e), ...Yr(e)],
              s = [...Object.keys(t), ...Yr(t)];
            if (i.length !== s.length) return !1;
            for (let l = 0; l < i.length; l++) {
              let f = i[l],
                m = e[f];
              if (!Object.prototype.hasOwnProperty.call(t, f)) return !1;
              let y = t[f];
              if (!Ie(m, y, r)) return !1;
            }
            return !0;
          }
          default:
            return !1;
        }
      } finally {
        r.delete(e), r.delete(t);
      }
    }
    d(Ie, "areObjectsEqual");
    var MA = d((e, t) => {
        let [r, n] = mn(t ? t(e.getState()) : e.getState());
        return (
          cr(
            () =>
              e.onStateChange((o, a) => {
                if (!t) {
                  n(o);
                  return;
                }
                let u = t(o),
                  i = t(a);
                !gn(u, i) && n(u);
              }),
            [e, n, t],
          ),
          [r, e.setState]
        );
      }, "useUniversalStore"),
      Fl = class su extends tr {
        constructor(t, r) {
          (tr.isInternalConstructing = !0),
            super({ ...t, leader: !0 }, { channel: new Zt({}), environment: tr.Environment.MOCK }),
            (tr.isInternalConstructing = !1),
            typeof r?.fn == "function" &&
              ((this.testUtils = r),
              (this.getState = r.fn(this.getState)),
              (this.setState = r.fn(this.setState)),
              (this.subscribe = r.fn(this.subscribe)),
              (this.onStateChange = r.fn(this.onStateChange)),
              (this.send = r.fn(this.send)));
        }
        static create(t, r) {
          return new su(t, r);
        }
        unsubscribeAll() {
          if (!this.testUtils)
            throw new Error(al`Cannot call unsubscribeAll on a store that does not have testUtils.
        Please provide testUtils as the second argument when creating the store.`);
          let t = d(r => {
            try {
              r.value();
            } catch {}
          }, "callReturnedUnsubscribeFn");
          this.subscribe.mock?.results.forEach(t), this.onStateChange.mock?.results.forEach(t);
        }
      };
    d(Fl, "MockUniversalStore");
    var zr = ft(Wa(), 1),
      pt = Symbol("incompatible"),
      Xr = d((e, t) => {
        let r = t.type;
        if (e == null || !r || t.mapping) return e;
        switch (r.name) {
          case "string":
            return String(e);
          case "enum":
            return e;
          case "number":
            return Number(e);
          case "boolean":
            return String(e) === "true";
          case "array":
            return !r.value || !Array.isArray(e)
              ? pt
              : e.reduce((n, o, a) => {
                  let u = Xr(o, { type: r.value });
                  return u !== pt && (n[a] = u), n;
                }, new Array(e.length));
          case "object":
            return typeof e == "string" || typeof e == "number"
              ? e
              : !r.value || typeof e != "object"
                ? pt
                : Object.entries(e).reduce((n, [o, a]) => {
                    let u = Xr(a, { type: r.value[o] });
                    return u === pt ? n : Object.assign(n, { [o]: u });
                  }, {});
          default:
            return pt;
        }
      }, "map"),
      Il = d(
        (e, t) =>
          Object.entries(e).reduce((r, [n, o]) => {
            if (!t[n]) return r;
            let a = Xr(o, t[n]);
            return a === pt ? r : Object.assign(r, { [n]: a });
          }, {}),
        "mapArgsToTypes",
      ),
      Jr = d(
        (e, t) =>
          Array.isArray(e) && Array.isArray(t)
            ? t.reduce((r, n, o) => ((r[o] = Jr(e[o], t[o])), r), [...e]).filter(r => r !== void 0)
            : !_e(e) || !_e(t)
              ? t
              : Object.keys({ ...e, ...t }).reduce((r, n) => {
                  if (n in t) {
                    let o = Jr(e[n], t[n]);
                    o !== void 0 && (r[n] = o);
                  } else r[n] = e[n];
                  return r;
                }, {}),
        "combineArgs",
      ),
      Bl = d(
        (e, t) =>
          Object.entries(t).reduce((r, [n, { options: o }]) => {
            function a() {
              return n in e && (r[n] = e[n]), r;
            }
            if ((d(a, "allowArg"), !o)) return a();
            if (!Array.isArray(o))
              return (
                Ue.error(le`
        Invalid argType: '${n}.options' should be an array.

        More info: https://storybook.js.org/docs/api/arg-types
      `),
                a()
              );
            if (o.some(m => m && ["object", "function"].includes(typeof m)))
              return (
                Ue.error(le`
        Invalid argType: '${n}.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
      `),
                a()
              );
            let u = Array.isArray(e[n]),
              i = u && e[n].findIndex(m => !o.includes(m)),
              s = u && i === -1;
            if (e[n] === void 0 || o.includes(e[n]) || s) return a();
            let l = u ? `${n}[${i}]` : n,
              f = o.map(m => (typeof m == "string" ? `'${m}'` : String(m))).join(", ");
            return Ue.warn(`Received illegal value for '${l}'. Supported options: ${f}`), r;
          }, {}),
        "validateOptions",
      ),
      _t = Symbol("Deeply equal"),
      ar = d((e, t) => {
        if (typeof e != typeof t) return t;
        if (gn(e, t)) return _t;
        if (Array.isArray(e) && Array.isArray(t)) {
          let r = t.reduce((n, o, a) => {
            let u = ar(e[a], o);
            return u !== _t && (n[a] = u), n;
          }, new Array(t.length));
          return t.length >= e.length ? r : r.concat(new Array(e.length - t.length).fill(void 0));
        }
        return _e(e) && _e(t)
          ? Object.keys({ ...e, ...t }).reduce((r, n) => {
              let o = ar(e?.[n], t?.[n]);
              return o === _t ? r : Object.assign(r, { [n]: o });
            }, {})
          : t;
      }, "deepDiff"),
      lu = "UNTARGETED";
    function cu({ args: e, argTypes: t }) {
      let r = {};
      return (
        Object.entries(e).forEach(([n, o]) => {
          let { target: a = lu } = t[n] || {};
          (r[a] = r[a] || {}), (r[a][n] = o);
        }),
        r
      );
    }
    d(cu, "groupArgsByTarget");
    function pu(e) {
      return Object.keys(e).forEach(t => e[t] === void 0 && delete e[t]), e;
    }
    d(pu, "deleteUndefined");
    var du = class {
      constructor() {
        (this.initialArgsByStoryId = {}), (this.argsByStoryId = {});
      }
      get(t) {
        if (!(t in this.argsByStoryId))
          throw new Error(`No args known for ${t} -- has it been rendered yet?`);
        return this.argsByStoryId[t];
      }
      setInitial(t) {
        if (!this.initialArgsByStoryId[t.id])
          (this.initialArgsByStoryId[t.id] = t.initialArgs),
            (this.argsByStoryId[t.id] = t.initialArgs);
        else if (this.initialArgsByStoryId[t.id] !== t.initialArgs) {
          let r = ar(this.initialArgsByStoryId[t.id], this.argsByStoryId[t.id]);
          (this.initialArgsByStoryId[t.id] = t.initialArgs),
            (this.argsByStoryId[t.id] = t.initialArgs),
            r !== _t && this.updateFromDelta(t, r);
        }
      }
      updateFromDelta(t, r) {
        let n = Bl(r, t.argTypes);
        this.argsByStoryId[t.id] = Jr(this.argsByStoryId[t.id], n);
      }
      updateFromPersisted(t, r) {
        let n = Il(r, t.argTypes);
        return this.updateFromDelta(t, n);
      }
      update(t, r) {
        if (!(t in this.argsByStoryId))
          throw new Error(`No args known for ${t} -- has it been rendered yet?`);
        this.argsByStoryId[t] = pu({ ...this.argsByStoryId[t], ...r });
      }
    };
    d(du, "ArgsStore");
    var Pl = du,
      hu = d(
        (e = {}) =>
          Object.entries(e).reduce(
            (t, [r, { defaultValue: n }]) => (typeof n < "u" && (t[r] = n), t),
            {},
          ),
        "getValuesFromArgTypes",
      ),
      fu = class {
        constructor({ globals: t = {}, globalTypes: r = {} }) {
          this.set({ globals: t, globalTypes: r });
        }
        set({ globals: t = {}, globalTypes: r = {} }) {
          let n = this.initialGlobals && ar(this.initialGlobals, this.globals);
          this.allowedGlobalNames = new Set([...Object.keys(t), ...Object.keys(r)]);
          let o = hu(r);
          (this.initialGlobals = { ...o, ...t }),
            (this.globals = this.initialGlobals),
            n && n !== _t && this.updateFromPersisted(n);
        }
        filterAllowedGlobals(t) {
          return Object.entries(t).reduce(
            (r, [n, o]) => (
              this.allowedGlobalNames.has(n)
                ? (r[n] = o)
                : X.warn(
                    `Attempted to set a global (${n}) that is not defined in initial globals or globalTypes`,
                  ),
              r
            ),
            {},
          );
        }
        updateFromPersisted(t) {
          let r = this.filterAllowedGlobals(t);
          this.globals = { ...this.globals, ...r };
        }
        get() {
          return this.globals;
        }
        update(t) {
          this.globals = { ...this.globals, ...this.filterAllowedGlobals(t) };
        }
      };
    d(fu, "GlobalsStore");
    var Nl = fu,
      Ll = ft(Wa(), 1),
      kl = (0, Ll.default)(1)(e =>
        Object.values(e).reduce((t, r) => ((t[r.importPath] = t[r.importPath] || r), t), {}),
      ),
      mu = class {
        constructor({ entries: t } = { v: 5, entries: {} }) {
          this.entries = t;
        }
        entryFromSpecifier(t) {
          let r = Object.values(this.entries);
          if (t === "*") return r[0];
          if (typeof t == "string")
            return this.entries[t] ? this.entries[t] : r.find(a => a.id.startsWith(t));
          let { name: n, title: o } = t;
          return r.find(a => a.name === n && a.title === o);
        }
        storyIdToEntry(t) {
          let r = this.entries[t];
          if (!r) throw new Qo({ storyId: t });
          return r;
        }
        importPathToEntry(t) {
          return kl(this.entries)[t];
        }
      };
    d(mu, "StoryIndexStore");
    var jl = mu,
      Ml = d(e => (typeof e == "string" ? { name: e } : e), "normalizeType"),
      $l = d(e => (typeof e == "string" ? { type: e } : e), "normalizeControl"),
      ql = d((e, t) => {
        let { type: r, control: n, ...o } = e,
          a = { name: t, ...o };
        return (
          r && (a.type = Ml(r)),
          n ? (a.control = $l(n)) : n === !1 && (a.control = { disable: !0 }),
          a
        );
      }, "normalizeInputType"),
      ur = d(e => nt(e, ql), "normalizeInputTypes"),
      ee = d(e => (Array.isArray(e) ? e : e ? [e] : []), "normalizeArrays"),
      Ul = le`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
    function ir(e, t, r) {
      let n = t,
        o = typeof t == "function" ? t : null,
        { story: a } = n;
      a && (X.debug("deprecated story", a), je(Ul));
      let u = Oa(e),
        i = (typeof n != "function" && n.name) || n.storyName || a?.name || u,
        s = [...ee(n.decorators), ...ee(a?.decorators)],
        l = { ...a?.parameters, ...n.parameters },
        f = { ...a?.args, ...n.args },
        m = { ...a?.argTypes, ...n.argTypes },
        y = [...ee(n.loaders), ...ee(a?.loaders)],
        E = [...ee(n.beforeEach), ...ee(a?.beforeEach)],
        w = [...ee(n.experimental_afterEach), ...ee(a?.experimental_afterEach)],
        { render: C, play: b, tags: S = [], globals: A = {} } = n,
        x = l.__id || _a(r.id, u);
      return {
        moduleExport: t,
        id: x,
        name: i,
        tags: S,
        decorators: s,
        parameters: l,
        args: f,
        argTypes: ur(m),
        loaders: y,
        beforeEach: E,
        experimental_afterEach: w,
        globals: A,
        ...(C && { render: C }),
        ...(o && { userStoryFn: o }),
        ...(b && { play: b }),
      };
    }
    d(ir, "normalizeStory");
    function sr(e, t = e.title, r) {
      let { id: n, argTypes: o } = e;
      return {
        id: Mr(n || t),
        ...e,
        title: t,
        ...(o && { argTypes: ur(o) }),
        parameters: { fileName: r, ...e.parameters },
      };
    }
    d(sr, "normalizeComponentAnnotations");
    var zl = d(e => {
        let { globals: t, globalTypes: r } = e;
        (t || r) &&
          X.error(
            "Global args/argTypes can only be set globally",
            JSON.stringify({ globals: t, globalTypes: r }),
          );
      }, "checkGlobals"),
      Hl = d(e => {
        let { options: t } = e;
        t?.storySort && X.error("The storySort option parameter can only be set globally");
      }, "checkStorySort"),
      rr = d(e => {
        e && (zl(e), Hl(e));
      }, "checkDisallowedParameters");
    function gu(e, t, r) {
      let { default: n, __namedExportsOrder: o, ...a } = e,
        u = Object.values(a)[0];
      if (Qe(u)) {
        let l = sr(u.meta.input, r, t);
        rr(l.parameters);
        let f = { meta: l, stories: {}, moduleExports: e };
        return (
          Object.keys(a).forEach(m => {
            if (lt(m, l)) {
              let y = ir(m, a[m].input, l);
              rr(y.parameters), (f.stories[y.id] = y);
            }
          }),
          (f.projectAnnotations = u.meta.preview.composed),
          f
        );
      }
      let i = sr(n, r, t);
      rr(i.parameters);
      let s = { meta: i, stories: {}, moduleExports: e };
      return (
        Object.keys(a).forEach(l => {
          if (lt(l, i)) {
            let f = ir(l, a[l], i);
            rr(f.parameters), (s.stories[f.id] = f);
          }
        }),
        s
      );
    }
    d(gu, "processCSFFile");
    function yu(e) {
      return e != null && bu(e).includes("mount");
    }
    d(yu, "mountDestructured");
    function bu(e) {
      let t = e.toString().match(/[^(]*\(([^)]*)/);
      if (!t) return [];
      let r = Zr(t[1]);
      if (!r.length) return [];
      let n = r[0];
      return n.startsWith("{") && n.endsWith("}")
        ? Zr(n.slice(1, -1).replace(/\s/g, "")).map(o => o.replace(/:.*|=.*/g, ""))
        : [];
    }
    d(bu, "getUsedProps");
    function Zr(e) {
      let t = [],
        r = [],
        n = 0;
      for (let a = 0; a < e.length; a++)
        if (e[a] === "{" || e[a] === "[") r.push(e[a] === "{" ? "}" : "]");
        else if (e[a] === r[r.length - 1]) r.pop();
        else if (!r.length && e[a] === ",") {
          let u = e.substring(n, a).trim();
          u && t.push(u), (n = a + 1);
        }
      let o = e.substring(n).trim();
      return o && t.push(o), t;
    }
    d(Zr, "splitByComma");
    function Eu(e, t, r) {
      let n = r(e);
      return o => t(n, o);
    }
    d(Eu, "decorateStory");
    function Au({
      componentId: e,
      title: t,
      kind: r,
      id: n,
      name: o,
      story: a,
      parameters: u,
      initialArgs: i,
      argTypes: s,
      ...l
    } = {}) {
      return l;
    }
    d(Au, "sanitizeStoryContextUpdate");
    function Su(e, t) {
      let r = {},
        n = d(
          a => u => {
            if (!r.value) throw new Error("Decorated function called without init");
            return (r.value = { ...r.value, ...Au(u) }), a(r.value);
          },
          "bindWithContext",
        ),
        o = t.reduce((a, u) => Eu(a, u, n), e);
      return a => ((r.value = a), o(a));
    }
    d(Su, "defaultDecorateStory");
    var ot = d((...e) => {
      let t = {},
        r = e.filter(Boolean),
        n = r.reduce(
          (o, a) => (
            Object.entries(a).forEach(([u, i]) => {
              let s = o[u];
              Array.isArray(i) || typeof s > "u"
                ? (o[u] = i)
                : _e(i) && _e(s)
                  ? (t[u] = !0)
                  : typeof i < "u" && (o[u] = i);
            }),
            o
          ),
          {},
        );
      return (
        Object.keys(t).forEach(o => {
          let a = r
            .filter(Boolean)
            .map(u => u[o])
            .filter(u => typeof u < "u");
          a.every(u => _e(u)) ? (n[o] = ot(...a)) : (n[o] = a[a.length - 1]);
        }),
        n
      );
    }, "combineParameters");
    function yn(e, t, r) {
      let { moduleExport: n, id: o, name: a } = e || {},
        u = bn(e, t, r),
        i = d(async v => {
          let T = {};
          for (let B of [
            ...("__STORYBOOK_TEST_LOADERS__" in de && Array.isArray(de.__STORYBOOK_TEST_LOADERS__)
              ? [de.__STORYBOOK_TEST_LOADERS__]
              : []),
            ee(r.loaders),
            ee(t.loaders),
            ee(e.loaders),
          ]) {
            if (v.abortSignal.aborted) return T;
            let L = await Promise.all(B.map(k => k(v)));
            Object.assign(T, ...L);
          }
          return T;
        }, "applyLoaders"),
        s = d(async v => {
          let T = new Array();
          for (let B of [...ee(r.beforeEach), ...ee(t.beforeEach), ...ee(e.beforeEach)]) {
            if (v.abortSignal.aborted) return T;
            let L = await B(v);
            L && T.push(L);
          }
          return T;
        }, "applyBeforeEach"),
        l = d(async v => {
          let T = [
            ...ee(r.experimental_afterEach),
            ...ee(t.experimental_afterEach),
            ...ee(e.experimental_afterEach),
          ].reverse();
          for (let B of T) {
            if (v.abortSignal.aborted) return;
            await B(v);
          }
        }, "applyAfterEach"),
        f = d(v => v.originalStoryFn(v.args, v), "undecoratedStoryFn"),
        { applyDecorators: m = Su, runStep: y } = r,
        E = [...ee(e?.decorators), ...ee(t?.decorators), ...ee(r?.decorators)],
        w = e?.userStoryFn || e?.render || t.render || r.render,
        C = Xs(m)(f, E),
        b = d(v => C(v), "unboundStoryFn"),
        S = e?.play ?? t?.play,
        A = yu(S);
      if (!w && !A) throw new Ea({ id: o });
      let x = d(v => async () => (await v.renderToCanvas(), v.canvas), "defaultMount"),
        _ = e.mount ?? t.mount ?? r.mount ?? x,
        I = r.testingLibraryRender;
      return {
        storyGlobals: {},
        ...u,
        moduleExport: n,
        id: o,
        name: a,
        story: a,
        originalStoryFn: w,
        undecoratedStoryFn: f,
        unboundStoryFn: b,
        applyLoaders: i,
        applyBeforeEach: s,
        applyAfterEach: l,
        playFunction: S,
        runStep: y,
        mount: _,
        testingLibraryRender: I,
        renderToCanvas: r.renderToCanvas,
        usesMount: A,
      };
    }
    d(yn, "prepareStory");
    function wu(e, t, r) {
      return { ...bn(void 0, e, t), moduleExport: r };
    }
    d(wu, "prepareMeta");
    function bn(e, t, r) {
      let n = ["dev", "test"],
        o = de.DOCS_OPTIONS?.autodocs === !0 ? ["autodocs"] : [],
        a = Fa(...n, ...o, ...(r.tags ?? []), ...(t.tags ?? []), ...(e?.tags ?? [])),
        u = ot(r.parameters, t.parameters, e?.parameters),
        { argTypesEnhancers: i = [], argsEnhancers: s = [] } = r,
        l = ot(r.argTypes, t.argTypes, e?.argTypes);
      if (e) {
        let S = e?.userStoryFn || e?.render || t.render || r.render;
        u.__isArgsStory = S && S.length > 0;
      }
      let f = { ...r.args, ...t.args, ...e?.args },
        m = { ...t.globals, ...e?.globals },
        y = {
          componentId: t.id,
          title: t.title,
          kind: t.title,
          id: e?.id || t.id,
          name: e?.name || "__meta",
          story: e?.name || "__meta",
          component: t.component,
          subcomponents: t.subcomponents,
          tags: a,
          parameters: u,
          initialArgs: f,
          argTypes: l,
          storyGlobals: m,
        };
      y.argTypes = i.reduce((S, A) => A({ ...y, argTypes: S }), y.argTypes);
      let E = { ...f };
      y.initialArgs = s.reduce((S, A) => ({ ...S, ...A({ ...y, initialArgs: S }) }), E);
      let { name: w, story: C, ...b } = y;
      return b;
    }
    d(bn, "preparePartialAnnotations");
    function En(e) {
      let { args: t } = e,
        r = { ...e, allArgs: void 0, argsByTarget: void 0 };
      if (de.FEATURES?.argTypeTargetsV7) {
        let a = cu(e);
        r = { ...e, allArgs: e.args, argsByTarget: a, args: a[lu] || {} };
      }
      let n = Object.entries(r.args).reduce((a, [u, i]) => {
          if (!r.argTypes[u]?.mapping) return (a[u] = i), a;
          let s = d(l => {
            let f = r.argTypes[u].mapping;
            return f && l in f ? f[l] : l;
          }, "mappingFn");
          return (a[u] = Array.isArray(i) ? i.map(s) : s(i)), a;
        }, {}),
        o = Object.entries(n).reduce((a, [u, i]) => {
          let s = r.argTypes[u] || {};
          return xa(s, n, r.globals) && (a[u] = i), a;
        }, {});
      return { ...r, unmappedArgs: t, args: o };
    }
    d(En, "prepareContext");
    var Qr = d((e, t, r) => {
        let n = typeof e;
        switch (n) {
          case "boolean":
          case "string":
          case "number":
          case "function":
          case "symbol":
            return { name: n };
          default:
            break;
        }
        return e
          ? r.has(e)
            ? (X.warn(le`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/essentials/controls#fully-custom-args
      `),
              { name: "other", value: "cyclic object" })
            : (r.add(e),
              Array.isArray(e)
                ? {
                    name: "array",
                    value:
                      e.length > 0 ? Qr(e[0], t, new Set(r)) : { name: "other", value: "unknown" },
                  }
                : { name: "object", value: nt(e, o => Qr(o, t, new Set(r))) })
          : { name: "object", value: {} };
      }, "inferType"),
      Cu = d(e => {
        let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
          o = nt(n, (u, i) => ({ name: i, type: Qr(u, `${t}.${i}`, new Set()) })),
          a = nt(r, (u, i) => ({ name: i }));
        return ot(o, a, r);
      }, "inferArgTypes");
    Cu.secondPass = !0;
    var La = d((e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)), "matches"),
      Gl = d(
        (e, t, r) =>
          !t && !r
            ? e
            : e &&
              iu(e, (n, o) => {
                let a = n.name || o.toString();
                return !!(!t || La(a, t)) && (!r || !La(a, r));
              }),
        "filterArgTypes",
      ),
      Vl = d((e, t, r) => {
        let { type: n, options: o } = e;
        if (n) {
          if (r.color && r.color.test(t)) {
            let a = n.name;
            if (a === "string") return { control: { type: "color" } };
            a !== "enum" &&
              X.warn(
                `Addon controls: Control of type color only supports string, received "${a}" instead`,
              );
          }
          if (r.date && r.date.test(t)) return { control: { type: "date" } };
          switch (n.name) {
            case "array":
              return { control: { type: "object" } };
            case "boolean":
              return { control: { type: "boolean" } };
            case "string":
              return { control: { type: "text" } };
            case "number":
              return { control: { type: "number" } };
            case "enum": {
              let { value: a } = n;
              return { control: { type: a?.length <= 5 ? "radio" : "select" }, options: a };
            }
            case "function":
            case "symbol":
              return null;
            default:
              return { control: { type: o ? "select" : "object" } };
          }
        }
      }, "inferControl"),
      vu = d(e => {
        let {
          argTypes: t,
          parameters: {
            __isArgsStory: r,
            controls: { include: n = null, exclude: o = null, matchers: a = {} } = {},
          },
        } = e;
        if (!r) return t;
        let u = Gl(t, n, o),
          i = nt(u, (s, l) => s?.type && Vl(s, l.toString(), a));
        return ot(i, u);
      }, "inferControls");
    vu.secondPass = !0;
    function ct({
      argTypes: e,
      globalTypes: t,
      argTypesEnhancers: r,
      decorators: n,
      loaders: o,
      beforeEach: a,
      experimental_afterEach: u,
      globals: i,
      initialGlobals: s,
      ...l
    }) {
      return (
        i &&
          Object.keys(i).length > 0 &&
          je(le`
      The preview.js 'globals' field is deprecated and will be removed in Storybook 9.0.
      Please use 'initialGlobals' instead. Learn more:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewjs-globals-renamed-to-initialglobals
    `),
        {
          ...(e && { argTypes: ur(e) }),
          ...(t && { globalTypes: ur(t) }),
          decorators: ee(n),
          loaders: ee(o),
          beforeEach: ee(a),
          experimental_afterEach: ee(u),
          argTypesEnhancers: [...(r || []), Cu, vu],
          initialGlobals: ot(s, i),
          ...l,
        }
      );
    }
    d(ct, "normalizeProjectAnnotations");
    var Wl = d(
      e => async () => {
        let t = [];
        for (let r of e) {
          let n = await r();
          n && t.unshift(n);
        }
        return async () => {
          for (let r of t) await r();
        };
      },
      "composeBeforeAllHooks",
    );
    function Du(e) {
      return async (t, r, n) => {
        await e.reduceRight(
          (o, a) => async () => a(t, o, n),
          async () => r(n),
        )();
      };
    }
    d(Du, "composeStepRunners");
    function ht(e, t) {
      return e.map(r => r.default?.[t] ?? r[t]).filter(Boolean);
    }
    d(ht, "getField");
    function Me(e, t, r = {}) {
      return ht(e, t).reduce((n, o) => {
        let a = ee(o);
        return r.reverseFileOrder ? [...a, ...n] : [...n, ...a];
      }, []);
    }
    d(Me, "getArrayField");
    function dt(e, t) {
      return Object.assign({}, ...ht(e, t));
    }
    d(dt, "getObjectField");
    function tt(e, t) {
      return ht(e, t).pop();
    }
    d(tt, "getSingletonField");
    function et(e) {
      let t = Me(e, "argTypesEnhancers"),
        r = ht(e, "runStep"),
        n = Me(e, "beforeAll");
      return {
        parameters: ot(...ht(e, "parameters")),
        decorators: Me(e, "decorators", {
          reverseFileOrder: !(de.FEATURES?.legacyDecoratorFileOrder ?? !1),
        }),
        args: dt(e, "args"),
        argsEnhancers: Me(e, "argsEnhancers"),
        argTypes: dt(e, "argTypes"),
        argTypesEnhancers: [...t.filter(o => !o.secondPass), ...t.filter(o => o.secondPass)],
        globals: dt(e, "globals"),
        initialGlobals: dt(e, "initialGlobals"),
        globalTypes: dt(e, "globalTypes"),
        loaders: Me(e, "loaders"),
        beforeAll: Wl(n),
        beforeEach: Me(e, "beforeEach"),
        experimental_afterEach: Me(e, "experimental_afterEach"),
        render: tt(e, "render"),
        renderToCanvas: tt(e, "renderToCanvas"),
        renderToDOM: tt(e, "renderToDOM"),
        applyDecorators: tt(e, "applyDecorators"),
        runStep: Du(r),
        tags: Me(e, "tags"),
        mount: tt(e, "mount"),
        testingLibraryRender: tt(e, "testingLibraryRender"),
      };
    }
    d(et, "composeConfigs");
    var xu = class {
      constructor() {
        this.reports = [];
      }
      async addReport(t) {
        this.reports.push(t);
      }
    };
    d(xu, "ReporterAPI");
    var Tu = xu;
    function Ru(e, t, r) {
      return Qe(e)
        ? { story: e.input, meta: e.meta.input, preview: e.meta.preview.composed }
        : { story: e, meta: t, preview: r };
    }
    d(Ru, "getCsfFactoryAnnotations");
    function Yl(e) {
      globalThis.defaultProjectAnnotations = e;
    }
    d(Yl, "setDefaultProjectAnnotations");
    var Kl = "ComposedStory",
      Xl = "Unnamed Story";
    function _u(e) {
      return e ? et([e]) : {};
    }
    d(_u, "extractAnnotation");
    function Jl(e) {
      let t = Array.isArray(e) ? e : [e];
      return (
        (globalThis.globalProjectAnnotations = et([
          globalThis.defaultProjectAnnotations ?? {},
          et(t.map(_u)),
        ])),
        globalThis.globalProjectAnnotations ?? {}
      );
    }
    d(Jl, "setProjectAnnotations");
    var He = [];
    function Ou(e, t, r, n, o) {
      if (e === void 0) throw new Error("Expected a story but received undefined.");
      t.title = t.title ?? Kl;
      let a = sr(t),
        u = o || e.storyName || e.story?.name || e.name || Xl,
        i = ir(u, e, a),
        s = ct(et([n ?? globalThis.globalProjectAnnotations ?? {}, r ?? {}])),
        l = yn(i, a, s),
        f = { ...hu(s.globalTypes), ...s.initialGlobals, ...l.storyGlobals },
        m = new Tu(),
        y = d(() => {
          let S = En({
            hooks: new ru(),
            globals: f,
            args: { ...l.initialArgs },
            viewMode: "story",
            reporting: m,
            loaded: {},
            abortSignal: new AbortController().signal,
            step: d((A, x) => l.runStep(A, x, S), "step"),
            canvasElement: null,
            canvas: {},
            globalTypes: s.globalTypes,
            ...l,
            context: null,
            mount: null,
          });
          return (
            (S.parameters.__isPortableStory = !0),
            (S.context = S),
            l.renderToCanvas &&
              (S.renderToCanvas = async () => {
                let A = await l.renderToCanvas?.(
                  {
                    componentId: l.componentId,
                    title: l.title,
                    id: l.id,
                    name: l.name,
                    tags: l.tags,
                    showMain: d(() => {}, "showMain"),
                    showError: d(x => {
                      throw new Error(`${x.title}
${x.description}`);
                    }, "showError"),
                    showException: d(x => {
                      throw x;
                    }, "showException"),
                    forceRemount: !0,
                    storyContext: S,
                    storyFn: d(() => l.unboundStoryFn(S), "storyFn"),
                    unboundStoryFn: l.unboundStoryFn,
                  },
                  S.canvasElement,
                );
                A && He.push(A);
              }),
            (S.mount = l.mount(S)),
            S
          );
        }, "initializeContext"),
        E,
        w = d(async S => {
          let A = y();
          return (
            (A.canvasElement ??= globalThis?.document?.body),
            E && (A.loaded = E.loaded),
            Object.assign(A, S),
            l.playFunction(A)
          );
        }, "play"),
        C = d(S => {
          let A = y();
          return Object.assign(A, S), Fu(l, A);
        }, "run"),
        b = l.playFunction ? w : void 0;
      return Object.assign(
        d(function (S) {
          let A = y();
          return (
            E && (A.loaded = E.loaded), (A.args = { ...A.initialArgs, ...S }), l.unboundStoryFn(A)
          );
        }, "storyFn"),
        {
          id: l.id,
          storyName: u,
          load: d(async () => {
            for (let A of [...He].reverse()) await A();
            He.length = 0;
            let S = y();
            (S.loaded = await l.applyLoaders(S)),
              He.push(...(await l.applyBeforeEach(S)).filter(Boolean)),
              (E = S);
          }, "load"),
          globals: f,
          args: l.initialArgs,
          parameters: l.parameters,
          argTypes: l.argTypes,
          play: b,
          run: C,
          reporting: m,
          tags: l.tags,
        },
      );
    }
    d(Ou, "composeStory");
    var Zl = d((e, t, r, n) => Ou(e, t, r, {}, n), "defaultComposeStory");
    function Ql(e, t, r = Zl) {
      let { default: n, __esModule: o, __namedExportsOrder: a, ...u } = e,
        i = n;
      return Object.entries(u).reduce((s, [l, f]) => {
        let { story: m, meta: y } = Ru(f);
        return !i && y && (i = y), lt(l, i) ? Object.assign(s, { [l]: r(m, i, t, l) }) : s;
      }, {});
    }
    d(Ql, "composeStories");
    function ec(e) {
      return e.extend({
        mount: d(async ({ mount: t, page: r }, n) => {
          await n(async (o, ...a) => {
            if (!("__pw_type" in o) || ("__pw_type" in o && o.__pw_type !== "jsx"))
              throw new Error(le`
              Portable stories in Playwright CT only work when referencing JSX elements.
              Please use JSX format for your components such as:

              instead of:
              await mount(MyComponent, { props: { foo: 'bar' } })

              do:
              await mount(<MyComponent foo="bar"/>)

              More info: https://storybook.js.org/docs/api/portable-stories-playwright
            `);
            await r.evaluate(async i => {
              let s = await globalThis.__pwUnwrapObject?.(i);
              return ("__pw_type" in s ? s.type : s)?.load?.();
            }, o);
            let u = await t(o, ...a);
            return (
              await r.evaluate(async i => {
                let s = await globalThis.__pwUnwrapObject?.(i),
                  l = "__pw_type" in s ? s.type : s,
                  f = document.querySelector("#root");
                return l?.play?.({ canvasElement: f });
              }, o),
              u
            );
          });
        }, "mount"),
      });
    }
    d(ec, "createPlaywrightTest");
    async function Fu(e, t) {
      for (let o of [...He].reverse()) await o();
      if (((He.length = 0), !t.canvasElement)) {
        let o = document.createElement("div");
        globalThis?.document?.body?.appendChild(o),
          (t.canvasElement = o),
          He.push(() => {
            globalThis?.document?.body?.contains(o) && globalThis?.document?.body?.removeChild(o);
          });
      }
      if (((t.loaded = await e.applyLoaders(t)), t.abortSignal.aborted)) return;
      He.push(...(await e.applyBeforeEach(t)).filter(Boolean));
      let r = e.playFunction,
        n = e.usesMount;
      n || (await t.mount()),
        !t.abortSignal.aborted &&
          (r &&
            (n ||
              (t.mount = async () => {
                throw new Qt({ playFunction: r.toString() });
              }),
            await r(t)),
          await e.applyAfterEach(t));
    }
    d(Fu, "runStory");
    function en(e, t) {
      return au(uu(e, t), r => r === void 0);
    }
    d(en, "picky");
    var ka = 1e3,
      tc = 1e4,
      Iu = class {
        constructor(t, r, n) {
          (this.importFn = r),
            (this.getStoriesJsonData = d(() => {
              let u = this.getSetStoriesPayload(),
                i = ["fileName", "docsOnly", "framework", "__id", "__isArgsStory"];
              return {
                v: 3,
                stories: nt(u.stories, s => {
                  let { importPath: l } = this.storyIndex.entries[s.id];
                  return {
                    ...en(s, ["id", "name", "title"]),
                    importPath: l,
                    kind: s.title,
                    story: s.name,
                    parameters: { ...en(s.parameters, i), fileName: l },
                  };
                }),
              };
            }, "getStoriesJsonData")),
            (this.storyIndex = new jl(t)),
            (this.projectAnnotations = ct(n));
          let { initialGlobals: o, globalTypes: a } = this.projectAnnotations;
          (this.args = new Pl()),
            (this.userGlobals = new Nl({ globals: o, globalTypes: a })),
            (this.hooks = {}),
            (this.cleanupCallbacks = {}),
            (this.processCSFFileWithCache = (0, zr.default)(ka)(gu)),
            (this.prepareMetaWithCache = (0, zr.default)(ka)(wu)),
            (this.prepareStoryWithCache = (0, zr.default)(tc)(yn));
        }
        setProjectAnnotations(t) {
          this.projectAnnotations = ct(t);
          let { initialGlobals: r, globalTypes: n } = t;
          this.userGlobals.set({ globals: r, globalTypes: n });
        }
        async onStoriesChanged({ importFn: t, storyIndex: r }) {
          t && (this.importFn = t),
            r && (this.storyIndex.entries = r.entries),
            this.cachedCSFFiles && (await this.cacheAllCSFFiles());
        }
        async storyIdToEntry(t) {
          return this.storyIndex.storyIdToEntry(t);
        }
        async loadCSFFileByStoryId(t) {
          let { importPath: r, title: n } = this.storyIndex.storyIdToEntry(t),
            o = await this.importFn(r);
          return this.processCSFFileWithCache(o, r, n);
        }
        async loadAllCSFFiles() {
          let t = {};
          return (
            Object.entries(this.storyIndex.entries).forEach(([r, { importPath: n }]) => {
              t[n] = r;
            }),
            (
              await Promise.all(
                Object.entries(t).map(async ([r, n]) => ({
                  importPath: r,
                  csfFile: await this.loadCSFFileByStoryId(n),
                })),
              )
            ).reduce((r, { importPath: n, csfFile: o }) => ((r[n] = o), r), {})
          );
        }
        async cacheAllCSFFiles() {
          this.cachedCSFFiles = await this.loadAllCSFFiles();
        }
        preparedMetaFromCSFFile({ csfFile: t }) {
          let r = t.meta;
          return this.prepareMetaWithCache(r, this.projectAnnotations, t.moduleExports.default);
        }
        async loadStory({ storyId: t }) {
          let r = await this.loadCSFFileByStoryId(t);
          return this.storyFromCSFFile({ storyId: t, csfFile: r });
        }
        storyFromCSFFile({ storyId: t, csfFile: r }) {
          let n = r.stories[t];
          if (!n) throw new fa({ storyId: t });
          let o = r.meta,
            a = this.prepareStoryWithCache(n, o, r.projectAnnotations ?? this.projectAnnotations);
          return this.args.setInitial(a), (this.hooks[a.id] = this.hooks[a.id] || new ru()), a;
        }
        componentStoriesFromCSFFile({ csfFile: t }) {
          return Object.keys(this.storyIndex.entries)
            .filter(r => !!t.stories[r])
            .map(r => this.storyFromCSFFile({ storyId: r, csfFile: t }));
        }
        async loadEntry(t) {
          let r = await this.storyIdToEntry(t),
            n = r.type === "docs" ? r.storiesImports : [],
            [o, ...a] = await Promise.all([
              this.importFn(r.importPath),
              ...n.map(u => {
                let i = this.storyIndex.importPathToEntry(u);
                return this.loadCSFFileByStoryId(i.id);
              }),
            ]);
          return { entryExports: o, csfFiles: a };
        }
        getStoryContext(t, { forceInitialArgs: r = !1 } = {}) {
          let n = this.userGlobals.get(),
            { initialGlobals: o } = this.userGlobals,
            a = new Tu();
          return En({
            ...t,
            args: r ? t.initialArgs : this.args.get(t.id),
            initialGlobals: o,
            globalTypes: this.projectAnnotations.globalTypes,
            userGlobals: n,
            reporting: a,
            globals: { ...n, ...t.storyGlobals },
            hooks: this.hooks[t.id],
          });
        }
        addCleanupCallbacks(t, r) {
          this.cleanupCallbacks[t.id] = r;
        }
        async cleanupStory(t) {
          this.hooks[t.id].clean();
          let r = this.cleanupCallbacks[t.id];
          if (r) for (let n of [...r].reverse()) await n();
          delete this.cleanupCallbacks[t.id];
        }
        extract(t = { includeDocsOnly: !1 }) {
          let { cachedCSFFiles: r } = this;
          if (!r) throw new ta();
          return Object.entries(this.storyIndex.entries).reduce(
            (n, [o, { type: a, importPath: u }]) => {
              if (a === "docs") return n;
              let i = r[u],
                s = this.storyFromCSFFile({ storyId: o, csfFile: i });
              return (
                (!t.includeDocsOnly && s.parameters.docsOnly) ||
                  (n[o] = Object.entries(s).reduce(
                    (l, [f, m]) =>
                      f === "moduleExport" || typeof m == "function"
                        ? l
                        : Array.isArray(m)
                          ? Object.assign(l, { [f]: m.slice().sort() })
                          : Object.assign(l, { [f]: m }),
                    {
                      args: s.initialArgs,
                      globals: {
                        ...this.userGlobals.initialGlobals,
                        ...this.userGlobals.globals,
                        ...s.storyGlobals,
                      },
                    },
                  )),
                n
              );
            },
            {},
          );
        }
        getSetStoriesPayload() {
          let t = this.extract({ includeDocsOnly: !0 }),
            r = Object.values(t).reduce((n, { title: o }) => ((n[o] = {}), n), {});
          return {
            v: 2,
            globals: this.userGlobals.get(),
            globalParameters: {},
            kindParameters: r,
            stories: t,
          };
        }
        raw() {
          return (
            je(
              "StoryStore.raw() is deprecated and will be removed in 9.0, please use extract() instead",
            ),
            Object.values(this.extract())
              .map(({ id: t }) => this.fromId(t))
              .filter(Boolean)
          );
        }
        fromId(t) {
          if (
            (je(
              "StoryStore.fromId() is deprecated and will be removed in 9.0, please use loadStory() instead",
            ),
            !this.cachedCSFFiles)
          )
            throw new Error("Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.");
          let r;
          try {
            ({ importPath: r } = this.storyIndex.storyIdToEntry(t));
          } catch {
            return null;
          }
          let n = this.cachedCSFFiles[r],
            o = this.storyFromCSFFile({ storyId: t, csfFile: n });
          return {
            ...o,
            storyFn: d(a => {
              let u = {
                ...this.getStoryContext(o),
                abortSignal: new AbortController().signal,
                canvasElement: null,
                loaded: {},
                step: d((i, s) => o.runStep(i, s, u), "step"),
                context: null,
                mount: null,
                canvas: {},
                viewMode: "story",
              };
              return o.unboundStoryFn({ ...u, ...a });
            }, "storyFn"),
          };
        }
      };
    d(Iu, "StoryStore");
    var rc = Iu;
    function Bu(e) {
      return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
    }
    d(Bu, "slash");
    var nc = d(e => {
      if (e.length === 0) return e;
      let t = e[e.length - 1],
        r = t?.replace(/(?:[.](?:story|stories))?([.][^.]+)$/i, "");
      if (e.length === 1) return [r];
      let n = e[e.length - 2];
      return r && n && r.toLowerCase() === n.toLowerCase()
        ? [...e.slice(0, -2), r]
        : r && (/^(story|stories)([.][^.]+)$/i.test(t) || /^index$/i.test(r))
          ? e.slice(0, -1)
          : [...e.slice(0, -1), r];
    }, "sanitize");
    function tn(e) {
      return e
        .flatMap(t => t.split("/"))
        .filter(Boolean)
        .join("/");
    }
    d(tn, "pathJoin");
    var oc = d((e, t, r) => {
        let { directory: n, importPathMatcher: o, titlePrefix: a = "" } = t || {};
        typeof e == "number" &&
          Ue.warn(le`
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `);
        let u = Bu(String(e));
        if (o.exec(u)) {
          if (!r) {
            let i = u.replace(n, ""),
              s = tn([a, i]).split("/");
            return (s = nc(s)), s.join("/");
          }
          return a ? tn([a, r]) : r;
        }
      }, "userOrAutoTitleFromSpecifier"),
      pS = d((e, t, r) => {
        for (let n = 0; n < t.length; n += 1) {
          let o = oc(e, t[n], r);
          if (o) return o;
        }
        return r || void 0;
      }, "userOrAutoTitle"),
      ja = /\s*\/\s*/,
      ac = d(
        (e = {}) =>
          (t, r) => {
            if (t.title === r.title && !e.includeNames) return 0;
            let n = e.method || "configure",
              o = e.order || [],
              a = t.title.trim().split(ja),
              u = r.title.trim().split(ja);
            e.includeNames && (a.push(t.name), u.push(r.name));
            let i = 0;
            for (; a[i] || u[i]; ) {
              if (!a[i]) return -1;
              if (!u[i]) return 1;
              let s = a[i],
                l = u[i];
              if (s !== l) {
                let m = o.indexOf(s),
                  y = o.indexOf(l),
                  E = o.indexOf("*");
                return m !== -1 || y !== -1
                  ? (m === -1 && (E !== -1 ? (m = E) : (m = o.length)),
                    y === -1 && (E !== -1 ? (y = E) : (y = o.length)),
                    m - y)
                  : n === "configure"
                    ? 0
                    : s.localeCompare(l, e.locales ? e.locales : void 0, {
                        numeric: !0,
                        sensitivity: "accent",
                      });
              }
              let f = o.indexOf(s);
              f === -1 && (f = o.indexOf("*")),
                (o = f !== -1 && Array.isArray(o[f + 1]) ? o[f + 1] : []),
                (i += 1);
            }
            return 0;
          },
        "storySort",
      ),
      uc = d((e, t, r) => {
        if (t) {
          let n;
          typeof t == "function" ? (n = t) : (n = ac(t)), e.sort(n);
        } else e.sort((n, o) => r.indexOf(n.importPath) - r.indexOf(o.importPath));
        return e;
      }, "sortStoriesCommon"),
      dS = d((e, t, r) => {
        try {
          return uc(e, t, r);
        } catch (n) {
          throw new Error(le`
    Error sorting stories with sort parameter ${t}:

    > ${n.message}
    
    Are you using a V6-style sort function in V7 mode?

    More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
  `);
        }
      }, "sortStoriesV7"),
      dr = new Error("prepareAborted"),
      { AbortController: Ma } = globalThis;
    function rn(e) {
      try {
        let { name: t = "Error", message: r = String(e), stack: n } = e;
        return { name: t, message: r, stack: n };
      } catch {
        return { name: "Error", message: String(e) };
      }
    }
    d(rn, "serializeError");
    var Pu = class {
      constructor(t, r, n, o, a, u, i = { autoplay: !0, forceInitialArgs: !1 }, s) {
        (this.channel = t),
          (this.store = r),
          (this.renderToScreen = n),
          (this.callbacks = o),
          (this.id = a),
          (this.viewMode = u),
          (this.renderOptions = i),
          (this.type = "story"),
          (this.notYetRendered = !0),
          (this.rerenderEnqueued = !1),
          (this.disableKeyListeners = !1),
          (this.teardownRender = d(() => {}, "teardownRender")),
          (this.torndown = !1),
          (this.abortController = new Ma()),
          s && ((this.story = s), (this.phase = "preparing"));
      }
      async runPhase(t, r, n) {
        (this.phase = r),
          this.channel.emit(ke, { newPhase: this.phase, storyId: this.id }),
          n && (await n(), this.checkIfAborted(t));
      }
      checkIfAborted(t) {
        return t.aborted
          ? ((this.phase = "aborted"),
            this.channel.emit(ke, { newPhase: this.phase, storyId: this.id }),
            !0)
          : !1;
      }
      async prepare() {
        if (
          (await this.runPhase(this.abortController.signal, "preparing", async () => {
            this.story = await this.store.loadStory({ storyId: this.id });
          }),
          this.abortController.signal.aborted)
        )
          throw (await this.store.cleanupStory(this.story), dr);
      }
      isEqual(t) {
        return !!(this.id === t.id && this.story && this.story === t.story);
      }
      isPreparing() {
        return ["preparing"].includes(this.phase);
      }
      isPending() {
        return ["loading", "beforeEach", "rendering", "playing", "afterEach"].includes(this.phase);
      }
      async renderToElement(t) {
        return (this.canvasElement = t), this.render({ initial: !0, forceRemount: !0 });
      }
      storyContext() {
        if (!this.story) throw new Error("Cannot call storyContext before preparing");
        let { forceInitialArgs: t } = this.renderOptions;
        return this.store.getStoryContext(this.story, { forceInitialArgs: t });
      }
      async render({ initial: t = !1, forceRemount: r = !1 } = {}) {
        let { canvasElement: n } = this;
        if (!this.story) throw new Error("cannot render when not prepared");
        let o = this.story;
        if (!n) throw new Error("cannot render when canvasElement is unset");
        let {
          id: a,
          componentId: u,
          title: i,
          name: s,
          tags: l,
          applyLoaders: f,
          applyBeforeEach: m,
          applyAfterEach: y,
          unboundStoryFn: E,
          playFunction: w,
          runStep: C,
        } = o;
        r && !t && (this.cancelRender(), (this.abortController = new Ma()));
        let b = this.abortController.signal,
          S = !1,
          A = o.usesMount;
        try {
          let x = {
            ...this.storyContext(),
            viewMode: this.viewMode,
            abortSignal: b,
            canvasElement: n,
            loaded: {},
            step: d((P, M) => C(P, M, x), "step"),
            context: null,
            canvas: {},
            renderToCanvas: d(async () => {
              let P = await this.renderToScreen(_, n);
              (this.teardownRender = P || (() => {})), (S = !0);
            }, "renderToCanvas"),
            mount: d(async (...P) => {
              this.callbacks.showStoryDuringRender?.();
              let M = null;
              return (
                await this.runPhase(b, "rendering", async () => {
                  M = await o.mount(x)(...P);
                }),
                A && (await this.runPhase(b, "playing")),
                M
              );
            }, "mount"),
          };
          x.context = x;
          let _ = {
            componentId: u,
            title: i,
            kind: i,
            id: a,
            name: s,
            story: s,
            tags: l,
            ...this.callbacks,
            showError: d(P => ((this.phase = "errored"), this.callbacks.showError(P)), "showError"),
            showException: d(
              P => ((this.phase = "errored"), this.callbacks.showException(P)),
              "showException",
            ),
            forceRemount: r || this.notYetRendered,
            storyContext: x,
            storyFn: d(() => E(x), "storyFn"),
            unboundStoryFn: E,
          };
          if (
            (await this.runPhase(b, "loading", async () => {
              x.loaded = await f(x);
            }),
            b.aborted)
          )
            return;
          let I = await m(x);
          if (
            (this.store.addCleanupCallbacks(o, I),
            this.checkIfAborted(b) ||
              (!S && !A && (await x.mount()), (this.notYetRendered = !1), b.aborted))
          )
            return;
          let v = this.story.parameters?.test?.dangerouslyIgnoreUnhandledErrors === !0,
            T = new Set(),
            B = d(P => T.add("error" in P ? P.error : P.reason), "onError");
          if (this.renderOptions.autoplay && r && w && this.phase !== "errored") {
            window.addEventListener("error", B),
              window.addEventListener("unhandledrejection", B),
              (this.disableKeyListeners = !0);
            try {
              if (
                (A
                  ? await w(x)
                  : ((x.mount = async () => {
                      throw new Qt({ playFunction: w.toString() });
                    }),
                    await this.runPhase(b, "playing", async () => w(x))),
                !S)
              )
                throw new Sa();
              this.checkIfAborted(b),
                !v && T.size > 0
                  ? await this.runPhase(b, "errored")
                  : await this.runPhase(b, "played");
            } catch (P) {
              if (
                (this.callbacks.showStoryDuringRender?.(),
                await this.runPhase(b, "errored", async () => {
                  this.channel.emit(Vt, rn(P));
                }),
                this.story.parameters.throwPlayFunctionExceptions !== !1)
              )
                throw P;
              console.error(P);
            }
            if (
              (!v && T.size > 0 && this.channel.emit(Kt, Array.from(T).map(rn)),
              (this.disableKeyListeners = !1),
              window.removeEventListener("unhandledrejection", B),
              window.removeEventListener("error", B),
              b.aborted)
            )
              return;
          }
          await this.runPhase(b, "completed", async () => this.channel.emit(Tt, a)),
            this.phase !== "errored" &&
              (await this.runPhase(b, "afterEach", async () => {
                await y(x);
              }));
          let L = !v && T.size > 0,
            k = x.reporting.reports.some(P => P.status === "failed"),
            q = L || k;
          await this.runPhase(b, "finished", async () =>
            this.channel.emit(Pr, {
              storyId: a,
              status: q ? "error" : "success",
              reporters: x.reporting.reports,
            }),
          );
        } catch (x) {
          (this.phase = "errored"),
            this.callbacks.showException(x),
            await this.runPhase(b, "finished", async () =>
              this.channel.emit(Pr, { storyId: a, status: "error", reporters: [] }),
            );
        }
        this.rerenderEnqueued && ((this.rerenderEnqueued = !1), this.render());
      }
      async rerender() {
        if (this.isPending() && this.phase !== "playing") this.rerenderEnqueued = !0;
        else return this.render();
      }
      async remount() {
        return await this.teardown(), this.render({ forceRemount: !0 });
      }
      cancelRender() {
        this.abortController?.abort();
      }
      async teardown() {
        (this.torndown = !0),
          this.cancelRender(),
          this.story && (await this.store.cleanupStory(this.story));
        for (let t = 0; t < 3; t += 1) {
          if (!this.isPending()) {
            await this.teardownRender();
            return;
          }
          await new Promise(r => setTimeout(r, 0));
        }
        window.location.reload(), await new Promise(() => {});
      }
    };
    d(Pu, "StoryRender");
    var nn = Pu,
      { fetch: ic } = de,
      sc = "./index.json",
      Nu = class {
        constructor(t, r, n = Ve.getChannel(), o = !0) {
          (this.importFn = t),
            (this.getProjectAnnotations = r),
            (this.channel = n),
            (this.storyRenders = []),
            (this.storeInitializationPromise = new Promise((a, u) => {
              (this.resolveStoreInitializationPromise = a),
                (this.rejectStoreInitializationPromise = u);
            })),
            o && this.initialize();
        }
        get storyStore() {
          return new Proxy(
            {},
            {
              get: d((t, r) => {
                if (this.storyStoreValue)
                  return (
                    je("Accessing the Story Store is deprecated and will be removed in 9.0"),
                    this.storyStoreValue[r]
                  );
                throw new ga();
              }, "get"),
            },
          );
        }
        async initialize() {
          this.setupListeners();
          try {
            let t = await this.getProjectAnnotationsOrRenderError();
            await this.runBeforeAllHook(t), await this.initializeWithProjectAnnotations(t);
          } catch (t) {
            this.rejectStoreInitializationPromise(t);
          }
        }
        ready() {
          return this.storeInitializationPromise;
        }
        setupListeners() {
          this.channel.on(Go, this.onStoryIndexChanged.bind(this)),
            this.channel.on(Xt, this.onUpdateGlobals.bind(this)),
            this.channel.on(Jt, this.onUpdateArgs.bind(this)),
            this.channel.on(Lo, this.onRequestArgTypesInfo.bind(this)),
            this.channel.on(Wt, this.onResetArgs.bind(this)),
            this.channel.on(Gt, this.onForceReRender.bind(this)),
            this.channel.on(xt, this.onForceRemount.bind(this));
        }
        async getProjectAnnotationsOrRenderError() {
          try {
            let t = await this.getProjectAnnotations();
            if (((this.renderToCanvas = t.renderToCanvas), !this.renderToCanvas)) throw new na();
            return t;
          } catch (t) {
            throw (this.renderPreviewEntryError("Error reading preview.js:", t), t);
          }
        }
        async initializeWithProjectAnnotations(t) {
          this.projectAnnotationsBeforeInitialization = t;
          try {
            let r = await this.getStoryIndexFromServer();
            return this.initializeWithStoryIndex(r);
          } catch (r) {
            throw (this.renderPreviewEntryError("Error loading story index:", r), r);
          }
        }
        async runBeforeAllHook(t) {
          try {
            await this.beforeAllCleanup?.(), (this.beforeAllCleanup = await t.beforeAll?.());
          } catch (r) {
            throw (this.renderPreviewEntryError("Error in beforeAll hook:", r), r);
          }
        }
        async getStoryIndexFromServer() {
          let t = await ic(sc);
          if (t.status === 200) return t.json();
          throw new ua({ text: await t.text() });
        }
        initializeWithStoryIndex(t) {
          if (!this.projectAnnotationsBeforeInitialization)
            throw new Error(
              "Cannot call initializeWithStoryIndex until project annotations resolve",
            );
          (this.storyStoreValue = new rc(
            t,
            this.importFn,
            this.projectAnnotationsBeforeInitialization,
          )),
            delete this.projectAnnotationsBeforeInitialization,
            this.setInitialGlobals(),
            this.resolveStoreInitializationPromise();
        }
        async setInitialGlobals() {
          this.emitGlobals();
        }
        emitGlobals() {
          if (!this.storyStoreValue) throw new Ae({ methodName: "emitGlobals" });
          let t = {
            globals: this.storyStoreValue.userGlobals.get() || {},
            globalTypes: this.storyStoreValue.projectAnnotations.globalTypes || {},
          };
          this.channel.emit(qo, t);
        }
        async onGetProjectAnnotationsChanged({ getProjectAnnotations: t }) {
          delete this.previewEntryError, (this.getProjectAnnotations = t);
          let r = await this.getProjectAnnotationsOrRenderError();
          if ((await this.runBeforeAllHook(r), !this.storyStoreValue)) {
            await this.initializeWithProjectAnnotations(r);
            return;
          }
          this.storyStoreValue.setProjectAnnotations(r), this.emitGlobals();
        }
        async onStoryIndexChanged() {
          if (
            (delete this.previewEntryError,
            !(!this.storyStoreValue && !this.projectAnnotationsBeforeInitialization))
          )
            try {
              let t = await this.getStoryIndexFromServer();
              if (this.projectAnnotationsBeforeInitialization) {
                this.initializeWithStoryIndex(t);
                return;
              }
              await this.onStoriesChanged({ storyIndex: t });
            } catch (t) {
              throw (this.renderPreviewEntryError("Error loading story index:", t), t);
            }
        }
        async onStoriesChanged({ importFn: t, storyIndex: r }) {
          if (!this.storyStoreValue) throw new Ae({ methodName: "onStoriesChanged" });
          await this.storyStoreValue.onStoriesChanged({ importFn: t, storyIndex: r });
        }
        async onUpdateGlobals({ globals: t, currentStory: r }) {
          if (
            (this.storyStoreValue || (await this.storeInitializationPromise), !this.storyStoreValue)
          )
            throw new Ae({ methodName: "onUpdateGlobals" });
          if ((this.storyStoreValue.userGlobals.update(t), r)) {
            let {
              initialGlobals: n,
              storyGlobals: o,
              userGlobals: a,
              globals: u,
            } = this.storyStoreValue.getStoryContext(r);
            this.channel.emit(st, {
              initialGlobals: n,
              userGlobals: a,
              storyGlobals: o,
              globals: u,
            });
          } else {
            let { initialGlobals: n, globals: o } = this.storyStoreValue.userGlobals;
            this.channel.emit(st, {
              initialGlobals: n,
              userGlobals: o,
              storyGlobals: {},
              globals: o,
            });
          }
          await Promise.all(this.storyRenders.map(n => n.rerender()));
        }
        async onUpdateArgs({ storyId: t, updatedArgs: r }) {
          if (!this.storyStoreValue) throw new Ae({ methodName: "onUpdateArgs" });
          this.storyStoreValue.args.update(t, r),
            await Promise.all(
              this.storyRenders
                .filter(n => n.id === t && !n.renderOptions.forceInitialArgs)
                .map(n => (n.story && n.story.usesMount ? n.remount() : n.rerender())),
            ),
            this.channel.emit(Uo, { storyId: t, args: this.storyStoreValue.args.get(t) });
        }
        async onRequestArgTypesInfo({ id: t, payload: r }) {
          try {
            await this.storeInitializationPromise;
            let n = await this.storyStoreValue?.loadStory(r);
            this.channel.emit(Fr, {
              id: t,
              success: !0,
              payload: { argTypes: n?.argTypes || {} },
              error: null,
            });
          } catch (n) {
            this.channel.emit(Fr, { id: t, success: !1, error: n?.message });
          }
        }
        async onResetArgs({ storyId: t, argNames: r }) {
          if (!this.storyStoreValue) throw new Ae({ methodName: "onResetArgs" });
          let n =
              this.storyRenders.find(a => a.id === t)?.story ||
              (await this.storyStoreValue.loadStory({ storyId: t })),
            o = (
              r || [
                ...new Set([
                  ...Object.keys(n.initialArgs),
                  ...Object.keys(this.storyStoreValue.args.get(t)),
                ]),
              ]
            ).reduce((a, u) => ((a[u] = n.initialArgs[u]), a), {});
          await this.onUpdateArgs({ storyId: t, updatedArgs: o });
        }
        async onForceReRender() {
          await Promise.all(this.storyRenders.map(t => t.rerender()));
        }
        async onForceRemount({ storyId: t }) {
          await Promise.all(this.storyRenders.filter(r => r.id === t).map(r => r.remount()));
        }
        renderStoryToElement(t, r, n, o) {
          if (!this.renderToCanvas || !this.storyStoreValue)
            throw new Ae({ methodName: "renderStoryToElement" });
          let a = new nn(
            this.channel,
            this.storyStoreValue,
            this.renderToCanvas,
            n,
            t.id,
            "docs",
            o,
            t,
          );
          return (
            a.renderToElement(r),
            this.storyRenders.push(a),
            async () => {
              await this.teardownRender(a);
            }
          );
        }
        async teardownRender(t, { viewModeChanged: r } = {}) {
          (this.storyRenders = this.storyRenders.filter(n => n !== t)),
            await t?.teardown?.({ viewModeChanged: r });
        }
        async loadStory({ storyId: t }) {
          if (!this.storyStoreValue) throw new Ae({ methodName: "loadStory" });
          return this.storyStoreValue.loadStory({ storyId: t });
        }
        getStoryContext(t, { forceInitialArgs: r = !1 } = {}) {
          if (!this.storyStoreValue) throw new Ae({ methodName: "getStoryContext" });
          return this.storyStoreValue.getStoryContext(t, { forceInitialArgs: r });
        }
        async extract(t) {
          if (!this.storyStoreValue) throw new Ae({ methodName: "extract" });
          if (this.previewEntryError) throw this.previewEntryError;
          return await this.storyStoreValue.cacheAllCSFFiles(), this.storyStoreValue.extract(t);
        }
        renderPreviewEntryError(t, r) {
          (this.previewEntryError = r), X.error(t), X.error(r), this.channel.emit(ko, r);
        }
      };
    d(Nu, "Preview");
    var lc = Nu,
      cc = !1,
      Hr = "Invariant failed";
    function nr(e, t) {
      if (!e) {
        if (cc) throw new Error(Hr);
        var r = typeof t == "function" ? t() : t,
          n = r ? "".concat(Hr, ": ").concat(r) : Hr;
        throw new Error(n);
      }
    }
    d(nr, "invariant");
    var Lu = class {
      constructor(t, r, n, o) {
        (this.channel = t),
          (this.store = r),
          (this.renderStoryToElement = n),
          (this.storyIdByName = d(a => {
            let u = this.nameToStoryId.get(a);
            if (u) return u;
            throw new Error(`No story found with that name: ${a}`);
          }, "storyIdByName")),
          (this.componentStories = d(() => this.componentStoriesValue, "componentStories")),
          (this.componentStoriesFromCSFFile = d(
            a => this.store.componentStoriesFromCSFFile({ csfFile: a }),
            "componentStoriesFromCSFFile",
          )),
          (this.storyById = d(a => {
            if (!a) {
              if (!this.primaryStory)
                throw new Error(
                  "No primary story defined for docs entry. Did you forget to use `<Meta>`?",
                );
              return this.primaryStory;
            }
            let u = this.storyIdToCSFFile.get(a);
            if (!u) throw new Error(`Called \`storyById\` for story that was never loaded: ${a}`);
            return this.store.storyFromCSFFile({ storyId: a, csfFile: u });
          }, "storyById")),
          (this.getStoryContext = d(
            a => ({ ...this.store.getStoryContext(a), loaded: {}, viewMode: "docs" }),
            "getStoryContext",
          )),
          (this.loadStory = d(a => this.store.loadStory({ storyId: a }), "loadStory")),
          (this.componentStoriesValue = []),
          (this.storyIdToCSFFile = new Map()),
          (this.exportToStory = new Map()),
          (this.exportsToCSFFile = new Map()),
          (this.nameToStoryId = new Map()),
          (this.attachedCSFFiles = new Set()),
          o.forEach((a, u) => {
            this.referenceCSFFile(a);
          });
      }
      referenceCSFFile(t) {
        this.exportsToCSFFile.set(t.moduleExports, t),
          this.exportsToCSFFile.set(t.moduleExports.default, t),
          this.store.componentStoriesFromCSFFile({ csfFile: t }).forEach(r => {
            let n = t.stories[r.id];
            this.storyIdToCSFFile.set(n.id, t), this.exportToStory.set(n.moduleExport, r);
          });
      }
      attachCSFFile(t) {
        if (!this.exportsToCSFFile.has(t.moduleExports))
          throw new Error("Cannot attach a CSF file that has not been referenced");
        this.attachedCSFFiles.has(t) ||
          (this.attachedCSFFiles.add(t),
          this.store.componentStoriesFromCSFFile({ csfFile: t }).forEach(r => {
            this.nameToStoryId.set(r.name, r.id),
              this.componentStoriesValue.push(r),
              this.primaryStory || (this.primaryStory = r);
          }));
      }
      referenceMeta(t, r) {
        let n = this.resolveModuleExport(t);
        if (n.type !== "meta")
          throw new Error(
            "<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your CSF file?",
          );
        r && this.attachCSFFile(n.csfFile);
      }
      get projectAnnotations() {
        let { projectAnnotations: t } = this.store;
        if (!t)
          throw new Error(
            "Can't get projectAnnotations from DocsContext before they are initialized",
          );
        return t;
      }
      resolveAttachedModuleExportType(t) {
        if (t === "story") {
          if (!this.primaryStory)
            throw new Error(
              "No primary story attached to this docs file, did you forget to use <Meta of={} />?",
            );
          return { type: "story", story: this.primaryStory };
        }
        if (this.attachedCSFFiles.size === 0)
          throw new Error(
            "No CSF file attached to this docs file, did you forget to use <Meta of={} />?",
          );
        let r = Array.from(this.attachedCSFFiles)[0];
        if (t === "meta") return { type: "meta", csfFile: r };
        let { component: n } = r.meta;
        if (!n)
          throw new Error(
            "Attached CSF file does not defined a component, did you forget to export one?",
          );
        return { type: "component", component: n };
      }
      resolveModuleExport(t) {
        let r = this.exportsToCSFFile.get(t);
        if (r) return { type: "meta", csfFile: r };
        let n = this.exportToStory.get(Qe(t) ? t.input : t);
        return n ? { type: "story", story: n } : { type: "component", component: t };
      }
      resolveOf(t, r = []) {
        let n;
        if (["component", "meta", "story"].includes(t)) {
          let o = t;
          n = this.resolveAttachedModuleExportType(o);
        } else n = this.resolveModuleExport(t);
        if (r.length && !r.includes(n.type)) {
          let o = n.type === "component" ? "component or unknown" : n.type;
          throw new Error(le`Invalid value passed to the 'of' prop. The value was resolved to a '${o}' type but the only types for this block are: ${r.join(", ")}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`);
        }
        switch (n.type) {
          case "component":
            return { ...n, projectAnnotations: this.projectAnnotations };
          case "meta":
            return {
              ...n,
              preparedMeta: this.store.preparedMetaFromCSFFile({ csfFile: n.csfFile }),
            };
          case "story":
          default:
            return n;
        }
      }
    };
    d(Lu, "DocsContext");
    var ku = Lu,
      ju = class {
        constructor(t, r, n, o) {
          (this.channel = t),
            (this.store = r),
            (this.entry = n),
            (this.callbacks = o),
            (this.type = "docs"),
            (this.subtype = "csf"),
            (this.torndown = !1),
            (this.disableKeyListeners = !1),
            (this.preparing = !1),
            (this.id = n.id);
        }
        isPreparing() {
          return this.preparing;
        }
        async prepare() {
          this.preparing = !0;
          let { entryExports: t, csfFiles: r = [] } = await this.store.loadEntry(this.id);
          if (this.torndown) throw dr;
          let { importPath: n, title: o } = this.entry,
            a = this.store.processCSFFileWithCache(t, n, o),
            u = Object.keys(a.stories)[0];
          (this.story = this.store.storyFromCSFFile({ storyId: u, csfFile: a })),
            (this.csfFiles = [a, ...r]),
            (this.preparing = !1);
        }
        isEqual(t) {
          return !!(this.id === t.id && this.story && this.story === t.story);
        }
        docsContext(t) {
          if (!this.csfFiles) throw new Error("Cannot render docs before preparing");
          let r = new ku(this.channel, this.store, t, this.csfFiles);
          return this.csfFiles.forEach(n => r.attachCSFFile(n)), r;
        }
        async renderToElement(t, r) {
          if (!this.story || !this.csfFiles) throw new Error("Cannot render docs before preparing");
          let n = this.docsContext(r),
            { docs: o } = this.story.parameters || {};
          if (!o)
            throw new Error(
              "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed",
            );
          let a = await o.renderer(),
            { render: u } = a,
            i = d(async () => {
              try {
                await u(n, o, t), this.channel.emit(Ht, this.id);
              } catch (s) {
                this.callbacks.showException(s);
              }
            }, "renderDocs");
          return (
            (this.rerender = async () => i()),
            (this.teardownRender = async ({ viewModeChanged: s }) => {
              !s || !t || a.unmount(t);
            }),
            i()
          );
        }
        async teardown({ viewModeChanged: t } = {}) {
          this.teardownRender?.({ viewModeChanged: t }), (this.torndown = !0);
        }
      };
    d(ju, "CsfDocsRender");
    var $a = ju,
      Mu = class {
        constructor(t, r, n, o) {
          (this.channel = t),
            (this.store = r),
            (this.entry = n),
            (this.callbacks = o),
            (this.type = "docs"),
            (this.subtype = "mdx"),
            (this.torndown = !1),
            (this.disableKeyListeners = !1),
            (this.preparing = !1),
            (this.id = n.id);
        }
        isPreparing() {
          return this.preparing;
        }
        async prepare() {
          this.preparing = !0;
          let { entryExports: t, csfFiles: r = [] } = await this.store.loadEntry(this.id);
          if (this.torndown) throw dr;
          (this.csfFiles = r), (this.exports = t), (this.preparing = !1);
        }
        isEqual(t) {
          return !!(this.id === t.id && this.exports && this.exports === t.exports);
        }
        docsContext(t) {
          if (!this.csfFiles) throw new Error("Cannot render docs before preparing");
          return new ku(this.channel, this.store, t, this.csfFiles);
        }
        async renderToElement(t, r) {
          if (!this.exports || !this.csfFiles || !this.store.projectAnnotations)
            throw new Error("Cannot render docs before preparing");
          let n = this.docsContext(r),
            { docs: o } = this.store.projectAnnotations.parameters || {};
          if (!o)
            throw new Error(
              "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed",
            );
          let a = { ...o, page: this.exports.default },
            u = await o.renderer(),
            { render: i } = u,
            s = d(async () => {
              try {
                await i(n, a, t), this.channel.emit(Ht, this.id);
              } catch (l) {
                this.callbacks.showException(l);
              }
            }, "renderDocs");
          return (
            (this.rerender = async () => s()),
            (this.teardownRender = async ({ viewModeChanged: l } = {}) => {
              !l || !t || (u.unmount(t), (this.torndown = !0));
            }),
            s()
          );
        }
        async teardown({ viewModeChanged: t } = {}) {
          this.teardownRender?.({ viewModeChanged: t }), (this.torndown = !0);
        }
      };
    d(Mu, "MdxDocsRender");
    var qa = Mu,
      pc = globalThis;
    function $u(e) {
      let t = (e.composedPath && e.composedPath()[0]) || e.target;
      return /input|textarea/i.test(t.tagName) || t.getAttribute("contenteditable") !== null;
    }
    d($u, "focusInInput");
    var qu = "attached-mdx",
      dc = "unattached-mdx";
    function Uu({ tags: e }) {
      return e?.includes(dc) || e?.includes(qu);
    }
    d(Uu, "isMdxEntry");
    function or(e) {
      return e.type === "story";
    }
    d(or, "isStoryRender");
    function zu(e) {
      return e.type === "docs";
    }
    d(zu, "isDocsRender");
    function Hu(e) {
      return zu(e) && e.subtype === "csf";
    }
    d(Hu, "isCsfDocsRender");
    var Gu = class extends lc {
      constructor(t, r, n, o) {
        super(t, r, void 0, !1),
          (this.importFn = t),
          (this.getProjectAnnotations = r),
          (this.selectionStore = n),
          (this.view = o),
          this.initialize();
      }
      setupListeners() {
        super.setupListeners(),
          (pc.onkeydown = this.onKeydown.bind(this)),
          this.channel.on(Br, this.onSetCurrentStory.bind(this)),
          this.channel.on(Ko, this.onUpdateQueryParams.bind(this)),
          this.channel.on(Mo, this.onPreloadStories.bind(this));
      }
      async setInitialGlobals() {
        if (!this.storyStoreValue) throw new Ae({ methodName: "setInitialGlobals" });
        let { globals: t } = this.selectionStore.selectionSpecifier || {};
        t && this.storyStoreValue.userGlobals.updateFromPersisted(t), this.emitGlobals();
      }
      async initializeWithStoryIndex(t) {
        return await super.initializeWithStoryIndex(t), this.selectSpecifiedStory();
      }
      async selectSpecifiedStory() {
        if (!this.storyStoreValue) throw new Ae({ methodName: "selectSpecifiedStory" });
        if (this.selectionStore.selection) {
          await this.renderSelection();
          return;
        }
        if (!this.selectionStore.selectionSpecifier) {
          this.renderMissingStory();
          return;
        }
        let { storySpecifier: t, args: r } = this.selectionStore.selectionSpecifier,
          n = this.storyStoreValue.storyIndex.entryFromSpecifier(t);
        if (!n) {
          t === "*"
            ? this.renderStoryLoadingException(t, new ca())
            : this.renderStoryLoadingException(t, new da({ storySpecifier: t.toString() }));
          return;
        }
        let { id: o, type: a } = n;
        this.selectionStore.setSelection({ storyId: o, viewMode: a }),
          this.channel.emit(Wo, this.selectionStore.selection),
          this.channel.emit(Ir, this.selectionStore.selection),
          await this.renderSelection({ persistedArgs: r });
      }
      async onGetProjectAnnotationsChanged({ getProjectAnnotations: t }) {
        await super.onGetProjectAnnotationsChanged({ getProjectAnnotations: t }),
          this.selectionStore.selection && this.renderSelection();
      }
      async onStoriesChanged({ importFn: t, storyIndex: r }) {
        await super.onStoriesChanged({ importFn: t, storyIndex: r }),
          this.selectionStore.selection
            ? await this.renderSelection()
            : await this.selectSpecifiedStory();
      }
      onKeydown(t) {
        if (!this.storyRenders.find(r => r.disableKeyListeners) && !$u(t)) {
          let { altKey: r, ctrlKey: n, metaKey: o, shiftKey: a, key: u, code: i, keyCode: s } = t;
          this.channel.emit($o, {
            event: { altKey: r, ctrlKey: n, metaKey: o, shiftKey: a, key: u, code: i, keyCode: s },
          });
        }
      }
      async onSetCurrentStory(t) {
        this.selectionStore.setSelection({ viewMode: "story", ...t }),
          await this.storeInitializationPromise,
          this.channel.emit(Ir, this.selectionStore.selection),
          this.renderSelection();
      }
      onUpdateQueryParams(t) {
        this.selectionStore.setQueryParams(t);
      }
      async onUpdateGlobals({ globals: t }) {
        let r = (this.currentRender instanceof nn && this.currentRender.story) || void 0;
        super.onUpdateGlobals({ globals: t, currentStory: r }),
          (this.currentRender instanceof qa || this.currentRender instanceof $a) &&
            (await this.currentRender.rerender?.());
      }
      async onUpdateArgs({ storyId: t, updatedArgs: r }) {
        super.onUpdateArgs({ storyId: t, updatedArgs: r });
      }
      async onPreloadStories({ ids: t }) {
        await this.storeInitializationPromise,
          this.storyStoreValue &&
            (await Promise.allSettled(t.map(r => this.storyStoreValue?.loadEntry(r))));
      }
      async renderSelection({ persistedArgs: t } = {}) {
        let { renderToCanvas: r } = this;
        if (!this.storyStoreValue || !r) throw new Ae({ methodName: "renderSelection" });
        let { selection: n } = this.selectionStore;
        if (!n) throw new Error("Cannot call renderSelection as no selection was made");
        let { storyId: o } = n,
          a;
        try {
          a = await this.storyStoreValue.storyIdToEntry(o);
        } catch (y) {
          this.currentRender && (await this.teardownRender(this.currentRender)),
            this.renderStoryLoadingException(o, y);
          return;
        }
        let u = this.currentSelection?.storyId !== o,
          i = this.currentRender?.type !== a.type;
        a.type === "story"
          ? this.view.showPreparingStory({ immediate: i })
          : this.view.showPreparingDocs({ immediate: i }),
          this.currentRender?.isPreparing() && (await this.teardownRender(this.currentRender));
        let s;
        a.type === "story"
          ? (s = new nn(
              this.channel,
              this.storyStoreValue,
              r,
              this.mainStoryCallbacks(o),
              o,
              "story",
            ))
          : Uu(a)
            ? (s = new qa(this.channel, this.storyStoreValue, a, this.mainStoryCallbacks(o)))
            : (s = new $a(this.channel, this.storyStoreValue, a, this.mainStoryCallbacks(o)));
        let l = this.currentSelection;
        this.currentSelection = n;
        let f = this.currentRender;
        this.currentRender = s;
        try {
          await s.prepare();
        } catch (y) {
          f && (await this.teardownRender(f)), y !== dr && this.renderStoryLoadingException(o, y);
          return;
        }
        let m = !u && f && !s.isEqual(f);
        if (
          (t && or(s) && (nr(!!s.story), this.storyStoreValue.args.updateFromPersisted(s.story, t)),
          f && !f.torndown && !u && !m && !i)
        ) {
          (this.currentRender = f), this.channel.emit(Yo, o), this.view.showMain();
          return;
        }
        if (
          (f && (await this.teardownRender(f, { viewModeChanged: i })),
          l && (u || i) && this.channel.emit(zo, o),
          or(s))
        ) {
          nr(!!s.story);
          let {
            parameters: y,
            initialArgs: E,
            argTypes: w,
            unmappedArgs: C,
            initialGlobals: b,
            userGlobals: S,
            storyGlobals: A,
            globals: x,
          } = this.storyStoreValue.getStoryContext(s.story);
          this.channel.emit(Vo, { id: o, parameters: y, initialArgs: E, argTypes: w, args: C }),
            this.channel.emit(st, {
              userGlobals: S,
              storyGlobals: A,
              globals: x,
              initialGlobals: b,
            });
        } else {
          let { parameters: y } = this.storyStoreValue.projectAnnotations,
            { initialGlobals: E, globals: w } = this.storyStoreValue.userGlobals;
          if (
            (this.channel.emit(st, {
              globals: w,
              initialGlobals: E,
              storyGlobals: {},
              userGlobals: w,
            }),
            Hu(s) || s.entry.tags?.includes(qu))
          ) {
            if (!s.csfFiles) throw new sa({ storyId: o });
            ({ parameters: y } = this.storyStoreValue.preparedMetaFromCSFFile({
              csfFile: s.csfFiles[0],
            }));
          }
          this.channel.emit(jo, { id: o, parameters: y });
        }
        or(s)
          ? (nr(!!s.story),
            this.storyRenders.push(s),
            this.currentRender.renderToElement(this.view.prepareForStory(s.story)))
          : this.currentRender.renderToElement(
              this.view.prepareForDocs(),
              this.renderStoryToElement.bind(this),
            );
      }
      async teardownRender(t, { viewModeChanged: r = !1 } = {}) {
        (this.storyRenders = this.storyRenders.filter(n => n !== t)),
          await t?.teardown?.({ viewModeChanged: r });
      }
      mainStoryCallbacks(t) {
        return {
          showStoryDuringRender: d(
            () => this.view.showStoryDuringRender(),
            "showStoryDuringRender",
          ),
          showMain: d(() => this.view.showMain(), "showMain"),
          showError: d(r => this.renderError(t, r), "showError"),
          showException: d(r => this.renderException(t, r), "showException"),
        };
      }
      renderPreviewEntryError(t, r) {
        super.renderPreviewEntryError(t, r), this.view.showErrorDisplay(r);
      }
      renderMissingStory() {
        this.view.showNoPreview(), this.channel.emit(Nr);
      }
      renderStoryLoadingException(t, r) {
        X.error(r), this.view.showErrorDisplay(r), this.channel.emit(Nr, t);
      }
      renderException(t, r) {
        let { name: n = "Error", message: o = String(r), stack: a } = r;
        this.channel.emit(Yt, { name: n, message: o, stack: a }),
          this.channel.emit(ke, { newPhase: "errored", storyId: t }),
          this.view.showErrorDisplay(r),
          X.error(`Error rendering story '${t}':`),
          X.error(r);
      }
      renderError(t, { title: r, description: n }) {
        X.error(`Error rendering story ${r}: ${n}`),
          this.channel.emit(Ho, { title: r, description: n }),
          this.channel.emit(ke, { newPhase: "errored", storyId: t }),
          this.view.showErrorDisplay({ message: r, stack: n });
      }
    };
    d(Gu, "PreviewWithSelection");
    var hc = Gu,
      on = ft(cn(), 1),
      fc = ft(cn(), 1),
      Ua = /^[a-zA-Z0-9 _-]*$/,
      Vu = /^-?[0-9]+(\.[0-9]+)?$/,
      mc = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i,
      Wu =
        /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i,
      an = d(
        (e = "", t) =>
          e === null || e === "" || !Ua.test(e)
            ? !1
            : t == null || t instanceof Date || typeof t == "number" || typeof t == "boolean"
              ? !0
              : typeof t == "string"
                ? Ua.test(t) || Vu.test(t) || mc.test(t) || Wu.test(t)
                : Array.isArray(t)
                  ? t.every(r => an(e, r))
                  : _e(t)
                    ? Object.entries(t).every(([r, n]) => an(r, n))
                    : !1,
        "validateArgs",
      ),
      gc = {
        delimiter: ";",
        nesting: !0,
        arrayRepeat: !0,
        arrayRepeatSyntax: "bracket",
        nestingSyntax: "js",
        valueDeserializer(e) {
          if (e.startsWith("!")) {
            if (e === "!undefined") return;
            if (e === "!null") return null;
            if (e === "!true") return !0;
            if (e === "!false") return !1;
            if (e.startsWith("!date(") && e.endsWith(")"))
              return new Date(e.replaceAll(" ", "+").slice(6, -1));
            if (e.startsWith("!hex(") && e.endsWith(")")) return `#${e.slice(5, -1)}`;
            let t = e.slice(1).match(Wu);
            if (t)
              return e.startsWith("!rgba") || e.startsWith("!RGBA")
                ? `${t[1]}(${t[2]}, ${t[3]}, ${t[4]}, ${t[5]})`
                : e.startsWith("!hsla") || e.startsWith("!HSLA")
                  ? `${t[1]}(${t[2]}, ${t[3]}%, ${t[4]}%, ${t[5]})`
                  : e.startsWith("!rgb") || e.startsWith("!RGB")
                    ? `${t[1]}(${t[2]}, ${t[3]}, ${t[4]})`
                    : `${t[1]}(${t[2]}, ${t[3]}%, ${t[4]}%)`;
          }
          return Vu.test(e) ? Number(e) : e;
        },
      },
      za = d(e => {
        let t = e.split(";").map(r => r.replace("=", "~").replace(":", "="));
        return Object.entries((0, fc.parse)(t.join(";"), gc)).reduce(
          (r, [n, o]) =>
            an(n, o)
              ? Object.assign(r, { [n]: o })
              : (Ue.warn(le`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
    `),
                r),
          {},
        );
      }, "parseArgsParam"),
      { history: Yu, document: Ge } = de;
    function Ku(e) {
      let t = (e || "").match(/^\/story\/(.+)/);
      if (!t) throw new Error(`Invalid path '${e}',  must start with '/story/'`);
      return t[1];
    }
    d(Ku, "pathToId");
    var Xu = d(({ selection: e, extraParams: t }) => {
        let r = Ge?.location.search.slice(1),
          { path: n, selectedKind: o, selectedStory: a, ...u } = (0, on.parse)(r);
        return `?${(0, on.stringify)({ ...u, ...t, ...(e && { id: e.storyId, viewMode: e.viewMode }) })}`;
      }, "getQueryString"),
      yc = d(e => {
        if (!e) return;
        let t = Xu({ selection: e }),
          { hash: r = "" } = Ge.location;
        (Ge.title = e.storyId), Yu.replaceState({}, "", `${Ge.location.pathname}${t}${r}`);
      }, "setPath"),
      bc = d(e => e != null && typeof e == "object" && Array.isArray(e) === !1, "isObject"),
      Ot = d(e => {
        if (e !== void 0) {
          if (typeof e == "string") return e;
          if (Array.isArray(e)) return Ot(e[0]);
          if (bc(e)) return Ot(Object.values(e).filter(Boolean));
        }
      }, "getFirstString"),
      Ec = d(() => {
        if (typeof Ge < "u") {
          let e = Ge.location.search.slice(1),
            t = (0, on.parse)(e),
            r = typeof t.args == "string" ? za(t.args) : void 0,
            n = typeof t.globals == "string" ? za(t.globals) : void 0,
            o = Ot(t.viewMode);
          (typeof o != "string" || !o.match(/docs|story/)) && (o = "story");
          let a = Ot(t.path),
            u = a ? Ku(a) : Ot(t.id);
          if (u) return { storySpecifier: u, args: r, globals: n, viewMode: o };
        }
        return null;
      }, "getSelectionSpecifierFromPath"),
      Ju = class {
        constructor() {
          this.selectionSpecifier = Ec();
        }
        setSelection(t) {
          (this.selection = t), yc(this.selection);
        }
        setQueryParams(t) {
          let r = Xu({ extraParams: t }),
            { hash: n = "" } = Ge.location;
          Yu.replaceState({}, "", `${Ge.location.pathname}${r}${n}`);
        }
      };
    d(Ju, "UrlStore");
    var Ac = Ju,
      Sc = ft(Vs(), 1),
      wc = ft(cn(), 1),
      { document: me } = de,
      Ha = 100,
      Zu = (e => (
        (e.MAIN = "MAIN"),
        (e.NOPREVIEW = "NOPREVIEW"),
        (e.PREPARING_STORY = "PREPARING_STORY"),
        (e.PREPARING_DOCS = "PREPARING_DOCS"),
        (e.ERROR = "ERROR"),
        e
      ))(Zu || {}),
      Gr = {
        PREPARING_STORY: "sb-show-preparing-story",
        PREPARING_DOCS: "sb-show-preparing-docs",
        MAIN: "sb-show-main",
        NOPREVIEW: "sb-show-nopreview",
        ERROR: "sb-show-errordisplay",
      },
      Vr = {
        centered: "sb-main-centered",
        fullscreen: "sb-main-fullscreen",
        padded: "sb-main-padded",
      },
      Ga = new Sc.default({ escapeXML: !0 }),
      Qu = class {
        constructor() {
          if (((this.testing = !1), typeof me < "u")) {
            let { __SPECIAL_TEST_PARAMETER__: t } = (0, wc.parse)(me.location.search.slice(1));
            switch (t) {
              case "preparing-story": {
                this.showPreparingStory(), (this.testing = !0);
                break;
              }
              case "preparing-docs": {
                this.showPreparingDocs(), (this.testing = !0);
                break;
              }
              default:
            }
          }
        }
        prepareForStory(t) {
          return (
            this.showStory(),
            this.applyLayout(t.parameters.layout),
            (me.documentElement.scrollTop = 0),
            (me.documentElement.scrollLeft = 0),
            this.storyRoot()
          );
        }
        storyRoot() {
          return me.getElementById("storybook-root");
        }
        prepareForDocs() {
          return (
            this.showMain(),
            this.showDocs(),
            this.applyLayout("fullscreen"),
            (me.documentElement.scrollTop = 0),
            (me.documentElement.scrollLeft = 0),
            this.docsRoot()
          );
        }
        docsRoot() {
          return me.getElementById("storybook-docs");
        }
        applyLayout(t = "padded") {
          if (t === "none") {
            me.body.classList.remove(this.currentLayoutClass), (this.currentLayoutClass = null);
            return;
          }
          this.checkIfLayoutExists(t);
          let r = Vr[t];
          me.body.classList.remove(this.currentLayoutClass),
            me.body.classList.add(r),
            (this.currentLayoutClass = r);
        }
        checkIfLayoutExists(t) {
          Vr[t] ||
            X.warn(le`
          The desired layout: ${t} is not a valid option.
          The possible options are: ${Object.keys(Vr).join(", ")}, none.
        `);
        }
        showMode(t) {
          clearTimeout(this.preparingTimeout),
            Object.keys(Zu).forEach(r => {
              r === t ? me.body.classList.add(Gr[r]) : me.body.classList.remove(Gr[r]);
            });
        }
        showErrorDisplay({ message: t = "", stack: r = "" }) {
          let n = t,
            o = r,
            a = t.split(`
`);
          a.length > 1 &&
            (([n] = a),
            (o = a
              .slice(1)
              .join(
                `
`,
              )
              .replace(/^\n/, ""))),
            (me.getElementById("error-message").innerHTML = Ga.toHtml(n)),
            (me.getElementById("error-stack").innerHTML = Ga.toHtml(o)),
            this.showMode("ERROR");
        }
        showNoPreview() {
          this.testing ||
            (this.showMode("NOPREVIEW"),
            this.storyRoot()?.setAttribute("hidden", "true"),
            this.docsRoot()?.setAttribute("hidden", "true"));
        }
        showPreparingStory({ immediate: t = !1 } = {}) {
          clearTimeout(this.preparingTimeout),
            t
              ? this.showMode("PREPARING_STORY")
              : (this.preparingTimeout = setTimeout(() => this.showMode("PREPARING_STORY"), Ha));
        }
        showPreparingDocs({ immediate: t = !1 } = {}) {
          clearTimeout(this.preparingTimeout),
            t
              ? this.showMode("PREPARING_DOCS")
              : (this.preparingTimeout = setTimeout(() => this.showMode("PREPARING_DOCS"), Ha));
        }
        showMain() {
          this.showMode("MAIN");
        }
        showDocs() {
          this.storyRoot().setAttribute("hidden", "true"),
            this.docsRoot().removeAttribute("hidden");
        }
        showStory() {
          this.docsRoot().setAttribute("hidden", "true"),
            this.storyRoot().removeAttribute("hidden");
        }
        showStoryDuringRender() {
          me.body.classList.add(Gr.MAIN);
        }
      };
    d(Qu, "WebView");
    var Cc = Qu,
      vc = class extends hc {
        constructor(t, r) {
          super(t, r, new Ac(), new Cc()),
            (this.importFn = t),
            (this.getProjectAnnotations = r),
            (de.__STORYBOOK_PREVIEW__ = this);
        }
      };
    d(vc, "PreviewWeb");
    var { document: rt } = de,
      Dc = [
        "application/javascript",
        "application/ecmascript",
        "application/x-ecmascript",
        "application/x-javascript",
        "text/ecmascript",
        "text/javascript",
        "text/javascript1.0",
        "text/javascript1.1",
        "text/javascript1.2",
        "text/javascript1.3",
        "text/javascript1.4",
        "text/javascript1.5",
        "text/jscript",
        "text/livescript",
        "text/x-ecmascript",
        "text/x-javascript",
        "module",
      ],
      xc = "script",
      Va = "scripts-root";
    function un() {
      let e = rt.createEvent("Event");
      e.initEvent("DOMContentLoaded", !0, !0), rt.dispatchEvent(e);
    }
    d(un, "simulateDOMContentLoaded");
    function ei(e, t, r) {
      let n = rt.createElement("script");
      (n.type = e.type === "module" ? "module" : "text/javascript"),
        e.src ? ((n.onload = t), (n.onerror = t), (n.src = e.src)) : (n.textContent = e.innerText),
        r ? r.appendChild(n) : rt.head.appendChild(n),
        e.parentNode.removeChild(e),
        e.src || t();
    }
    d(ei, "insertScript");
    function An(e, t, r = 0) {
      e[r](() => {
        r++, r === e.length ? t() : An(e, t, r);
      });
    }
    d(An, "insertScriptsSequentially");
    function Tc(e) {
      let t = rt.getElementById(Va);
      t ? (t.innerHTML = "") : ((t = rt.createElement("div")), (t.id = Va), rt.body.appendChild(t));
      let r = Array.from(e.querySelectorAll(xc));
      if (r.length) {
        let n = [];
        r.forEach(o => {
          let a = o.getAttribute("type");
          (!a || Dc.includes(a)) && n.push(u => ei(o, u, t));
        }),
          n.length && An(n, un, void 0);
      } else un();
    }
    d(Tc, "simulatePageLoad");
    var Rc = (e =>
        typeof Ee < "u"
          ? Ee
          : typeof Proxy < "u"
            ? new Proxy(e, { get: (t, r) => (typeof Ee < "u" ? Ee : t)[r] })
            : e)(function (e) {
        if (typeof Ee < "u") return Ee.apply(this, arguments);
        throw Error('Dynamic require of "' + e + '" is not supported');
      }),
      _c = {
        reset: [0, 0],
        bold: [1, 22, "\x1B[22m\x1B[1m"],
        dim: [2, 22, "\x1B[22m\x1B[2m"],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49],
      },
      Oc = Object.entries(_c);
    function vn(e) {
      return String(e);
    }
    vn.open = "";
    vn.close = "";
    function Fc(e = !1) {
      let t = typeof process < "u" ? process : void 0,
        r = t?.env || {},
        n = t?.argv || [];
      return (
        (!("NO_COLOR" in r || n.includes("--no-color")) &&
          ("FORCE_COLOR" in r ||
            n.includes("--color") ||
            t?.platform === "win32" ||
            (e && r.TERM !== "dumb") ||
            "CI" in r)) ||
        (typeof window < "u" && !!window.chrome)
      );
    }
    function Ic(e = !1) {
      let t = Fc(e),
        r = (u, i, s, l) => {
          let f = "",
            m = 0;
          do (f += u.substring(m, l) + s), (m = l + i.length), (l = u.indexOf(i, m));
          while (~l);
          return f + u.substring(m);
        },
        n = (u, i, s = u) => {
          let l = f => {
            let m = String(f),
              y = m.indexOf(i, u.length);
            return ~y ? u + r(m, i, s, y) + i : u + m + i;
          };
          return (l.open = u), (l.close = i), l;
        },
        o = { isColorSupported: t },
        a = u => `\x1B[${u}m`;
      for (let [u, i] of Oc) o[u] = t ? n(a(i[0]), a(i[1]), i[2]) : vn;
      return o;
    }
    var KS = Ic(!1);
    function Bc(e, t) {
      let r = Object.keys(e),
        n = t === null ? r : r.sort(t);
      if (Object.getOwnPropertySymbols)
        for (let o of Object.getOwnPropertySymbols(e))
          Object.getOwnPropertyDescriptor(e, o).enumerable && n.push(o);
      return n;
    }
    function Dn(e, t, r, n, o, a, u = ": ") {
      let i = "",
        s = 0,
        l = e.next();
      if (!l.done) {
        i += t.spacingOuter;
        let f = r + t.indent;
        for (; !l.done; ) {
          if (((i += f), s++ === t.maxWidth)) {
            i += "\u2026";
            break;
          }
          let m = a(l.value[0], t, f, n, o),
            y = a(l.value[1], t, f, n, o);
          (i += m + u + y),
            (l = e.next()),
            l.done ? t.min || (i += ",") : (i += `,${t.spacingInner}`);
        }
        i += t.spacingOuter + r;
      }
      return i;
    }
    function li(e, t, r, n, o, a) {
      let u = "",
        i = 0,
        s = e.next();
      if (!s.done) {
        u += t.spacingOuter;
        let l = r + t.indent;
        for (; !s.done; ) {
          if (((u += l), i++ === t.maxWidth)) {
            u += "\u2026";
            break;
          }
          (u += a(s.value, t, l, n, o)),
            (s = e.next()),
            s.done ? t.min || (u += ",") : (u += `,${t.spacingInner}`);
        }
        u += t.spacingOuter + r;
      }
      return u;
    }
    function ci(e, t, r, n, o, a) {
      let u = "";
      e = e instanceof ArrayBuffer ? new DataView(e) : e;
      let i = l => l instanceof DataView,
        s = i(e) ? e.byteLength : e.length;
      if (s > 0) {
        u += t.spacingOuter;
        let l = r + t.indent;
        for (let f = 0; f < s; f++) {
          if (((u += l), f === t.maxWidth)) {
            u += "\u2026";
            break;
          }
          (i(e) || f in e) && (u += a(i(e) ? e.getInt8(f) : e[f], t, l, n, o)),
            f < s - 1 ? (u += `,${t.spacingInner}`) : t.min || (u += ",");
        }
        u += t.spacingOuter + r;
      }
      return u;
    }
    function pi(e, t, r, n, o, a) {
      let u = "",
        i = Bc(e, t.compareKeys);
      if (i.length > 0) {
        u += t.spacingOuter;
        let s = r + t.indent;
        for (let l = 0; l < i.length; l++) {
          let f = i[l],
            m = a(f, t, s, n, o),
            y = a(e[f], t, s, n, o);
          (u += `${s + m}: ${y}`),
            l < i.length - 1 ? (u += `,${t.spacingInner}`) : t.min || (u += ",");
        }
        u += t.spacingOuter + r;
      }
      return u;
    }
    var Pc =
        typeof Symbol == "function" && Symbol.for ? Symbol.for("jest.asymmetricMatcher") : 1267621,
      Sn = " ",
      Nc = (e, t, r, n, o, a) => {
        let u = e.toString();
        if (u === "ArrayContaining" || u === "ArrayNotContaining")
          return ++n > t.maxDepth ? `[${u}]` : `${u + Sn}[${ci(e.sample, t, r, n, o, a)}]`;
        if (u === "ObjectContaining" || u === "ObjectNotContaining")
          return ++n > t.maxDepth ? `[${u}]` : `${u + Sn}{${pi(e.sample, t, r, n, o, a)}}`;
        if (
          u === "StringMatching" ||
          u === "StringNotMatching" ||
          u === "StringContaining" ||
          u === "StringNotContaining"
        )
          return u + Sn + a(e.sample, t, r, n, o);
        if (typeof e.toAsymmetricMatcher != "function")
          throw new TypeError(
            `Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`,
          );
        return e.toAsymmetricMatcher();
      },
      Lc = e => e && e.$$typeof === Pc,
      kc = { serialize: Nc, test: Lc },
      jc = " ",
      di = new Set(["DOMStringMap", "NamedNodeMap"]),
      Mc = /^(?:HTML\w*Collection|NodeList)$/;
    function $c(e) {
      return di.has(e) || Mc.test(e);
    }
    var qc = e => e && e.constructor && !!e.constructor.name && $c(e.constructor.name);
    function Uc(e) {
      return e.constructor.name === "NamedNodeMap";
    }
    var zc = (e, t, r, n, o, a) => {
        let u = e.constructor.name;
        return ++n > t.maxDepth
          ? `[${u}]`
          : (t.min ? "" : u + jc) +
              (di.has(u)
                ? `{${pi(Uc(e) ? [...e].reduce((i, s) => ((i[s.name] = s.value), i), {}) : { ...e }, t, r, n, o, a)}}`
                : `[${ci([...e], t, r, n, o, a)}]`);
      },
      Hc = { serialize: zc, test: qc };
    function hi(e) {
      return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    }
    function xn(e, t, r, n, o, a, u) {
      let i = n + r.indent,
        s = r.colors;
      return e
        .map(l => {
          let f = t[l],
            m = u(f, r, i, o, a);
          return (
            typeof f != "string" &&
              (m.includes(`
`) && (m = r.spacingOuter + i + m + r.spacingOuter + n),
              (m = `{${m}}`)),
            `${r.spacingInner + n + s.prop.open + l + s.prop.close}=${s.value.open}${m}${s.value.close}`
          );
        })
        .join("");
    }
    function Tn(e, t, r, n, o, a) {
      return e
        .map(u => t.spacingOuter + r + (typeof u == "string" ? fi(u, t) : a(u, t, r, n, o)))
        .join("");
    }
    function fi(e, t) {
      let r = t.colors.content;
      return r.open + hi(e) + r.close;
    }
    function Gc(e, t) {
      let r = t.colors.comment;
      return `${r.open}<!--${hi(e)}-->${r.close}`;
    }
    function Rn(e, t, r, n, o) {
      let a = n.colors.tag;
      return `${a.open}<${e}${t && a.close + t + n.spacingOuter + o + a.open}${r ? `>${a.close}${r}${n.spacingOuter}${o}${a.open}</${e}` : `${t && !n.min ? "" : " "}/`}>${a.close}`;
    }
    function _n(e, t) {
      let r = t.colors.tag;
      return `${r.open}<${e}${r.close} \u2026${r.open} />${r.close}`;
    }
    var Vc = 1,
      mi = 3,
      gi = 8,
      yi = 11,
      Wc = /^(?:(?:HTML|SVG)\w*)?Element$/;
    function Yc(e) {
      try {
        return typeof e.hasAttribute == "function" && e.hasAttribute("is");
      } catch {
        return !1;
      }
    }
    function Kc(e) {
      let t = e.constructor.name,
        { nodeType: r, tagName: n } = e,
        o = (typeof n == "string" && n.includes("-")) || Yc(e);
      return (
        (r === Vc && (Wc.test(t) || o)) ||
        (r === mi && t === "Text") ||
        (r === gi && t === "Comment") ||
        (r === yi && t === "DocumentFragment")
      );
    }
    var Xc = e => {
      var t;
      return ((t = e?.constructor) == null ? void 0 : t.name) && Kc(e);
    };
    function Jc(e) {
      return e.nodeType === mi;
    }
    function Zc(e) {
      return e.nodeType === gi;
    }
    function wn(e) {
      return e.nodeType === yi;
    }
    var Qc = (e, t, r, n, o, a) => {
        if (Jc(e)) return fi(e.data, t);
        if (Zc(e)) return Gc(e.data, t);
        let u = wn(e) ? "DocumentFragment" : e.tagName.toLowerCase();
        return ++n > t.maxDepth
          ? _n(u, t)
          : Rn(
              u,
              xn(
                wn(e) ? [] : Array.from(e.attributes, i => i.name).sort(),
                wn(e) ? {} : [...e.attributes].reduce((i, s) => ((i[s.name] = s.value), i), {}),
                t,
                r + t.indent,
                n,
                o,
                a,
              ),
              Tn(Array.prototype.slice.call(e.childNodes || e.children), t, r + t.indent, n, o, a),
              t,
              r,
            );
      },
      ep = { serialize: Qc, test: Xc },
      tp = "@@__IMMUTABLE_ITERABLE__@@",
      rp = "@@__IMMUTABLE_LIST__@@",
      np = "@@__IMMUTABLE_KEYED__@@",
      op = "@@__IMMUTABLE_MAP__@@",
      ti = "@@__IMMUTABLE_ORDERED__@@",
      ap = "@@__IMMUTABLE_RECORD__@@",
      up = "@@__IMMUTABLE_SEQ__@@",
      ip = "@@__IMMUTABLE_SET__@@",
      sp = "@@__IMMUTABLE_STACK__@@",
      mt = e => `Immutable.${e}`,
      fr = e => `[${e}]`,
      Bt = " ",
      ri = "\u2026";
    function lp(e, t, r, n, o, a, u) {
      return ++n > t.maxDepth ? fr(mt(u)) : `${mt(u) + Bt}{${Dn(e.entries(), t, r, n, o, a)}}`;
    }
    function cp(e) {
      let t = 0;
      return {
        next() {
          if (t < e._keys.length) {
            let r = e._keys[t++];
            return { done: !1, value: [r, e.get(r)] };
          }
          return { done: !0, value: void 0 };
        },
      };
    }
    function pp(e, t, r, n, o, a) {
      let u = mt(e._name || "Record");
      return ++n > t.maxDepth ? fr(u) : `${u + Bt}{${Dn(cp(e), t, r, n, o, a)}}`;
    }
    function dp(e, t, r, n, o, a) {
      let u = mt("Seq");
      return ++n > t.maxDepth
        ? fr(u)
        : e[np]
          ? `${u + Bt}{${e._iter || e._object ? Dn(e.entries(), t, r, n, o, a) : ri}}`
          : `${u + Bt}[${e._iter || e._array || e._collection || e._iterable ? li(e.values(), t, r, n, o, a) : ri}]`;
    }
    function Cn(e, t, r, n, o, a, u) {
      return ++n > t.maxDepth ? fr(mt(u)) : `${mt(u) + Bt}[${li(e.values(), t, r, n, o, a)}]`;
    }
    var hp = (e, t, r, n, o, a) =>
        e[op]
          ? lp(e, t, r, n, o, a, e[ti] ? "OrderedMap" : "Map")
          : e[rp]
            ? Cn(e, t, r, n, o, a, "List")
            : e[ip]
              ? Cn(e, t, r, n, o, a, e[ti] ? "OrderedSet" : "Set")
              : e[sp]
                ? Cn(e, t, r, n, o, a, "Stack")
                : e[up]
                  ? dp(e, t, r, n, o, a)
                  : pp(e, t, r, n, o, a),
      fp = e => e && (e[tp] === !0 || e[ap] === !0),
      mp = { serialize: hp, test: fp },
      ni = { exports: {} },
      G = {},
      oi;
    function gp() {
      if (oi) return G;
      oi = 1;
      var e = Symbol.for("react.element"),
        t = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        n = Symbol.for("react.strict_mode"),
        o = Symbol.for("react.profiler"),
        a = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        i = Symbol.for("react.server_context"),
        s = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
        f = Symbol.for("react.suspense_list"),
        m = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        E = Symbol.for("react.offscreen"),
        w;
      w = Symbol.for("react.module.reference");
      function C(b) {
        if (typeof b == "object" && b !== null) {
          var S = b.$$typeof;
          switch (S) {
            case e:
              switch (((b = b.type), b)) {
                case r:
                case o:
                case n:
                case l:
                case f:
                  return b;
                default:
                  switch (((b = b && b.$$typeof), b)) {
                    case i:
                    case u:
                    case s:
                    case y:
                    case m:
                    case a:
                      return b;
                    default:
                      return S;
                  }
              }
            case t:
              return S;
          }
        }
      }
      return (
        (G.ContextConsumer = u),
        (G.ContextProvider = a),
        (G.Element = e),
        (G.ForwardRef = s),
        (G.Fragment = r),
        (G.Lazy = y),
        (G.Memo = m),
        (G.Portal = t),
        (G.Profiler = o),
        (G.StrictMode = n),
        (G.Suspense = l),
        (G.SuspenseList = f),
        (G.isAsyncMode = function () {
          return !1;
        }),
        (G.isConcurrentMode = function () {
          return !1;
        }),
        (G.isContextConsumer = function (b) {
          return C(b) === u;
        }),
        (G.isContextProvider = function (b) {
          return C(b) === a;
        }),
        (G.isElement = function (b) {
          return typeof b == "object" && b !== null && b.$$typeof === e;
        }),
        (G.isForwardRef = function (b) {
          return C(b) === s;
        }),
        (G.isFragment = function (b) {
          return C(b) === r;
        }),
        (G.isLazy = function (b) {
          return C(b) === y;
        }),
        (G.isMemo = function (b) {
          return C(b) === m;
        }),
        (G.isPortal = function (b) {
          return C(b) === t;
        }),
        (G.isProfiler = function (b) {
          return C(b) === o;
        }),
        (G.isStrictMode = function (b) {
          return C(b) === n;
        }),
        (G.isSuspense = function (b) {
          return C(b) === l;
        }),
        (G.isSuspenseList = function (b) {
          return C(b) === f;
        }),
        (G.isValidElementType = function (b) {
          return (
            typeof b == "string" ||
            typeof b == "function" ||
            b === r ||
            b === o ||
            b === n ||
            b === l ||
            b === f ||
            b === E ||
            (typeof b == "object" &&
              b !== null &&
              (b.$$typeof === y ||
                b.$$typeof === m ||
                b.$$typeof === a ||
                b.$$typeof === u ||
                b.$$typeof === s ||
                b.$$typeof === w ||
                b.getModuleId !== void 0))
          );
        }),
        (G.typeOf = C),
        G
      );
    }
    var ai;
    function yp() {
      return ai || ((ai = 1), (ni.exports = gp())), ni.exports;
    }
    var at = yp();
    function bi(e, t = []) {
      if (Array.isArray(e)) for (let r of e) bi(r, t);
      else e != null && e !== !1 && e !== "" && t.push(e);
      return t;
    }
    function ui(e) {
      let t = e.type;
      if (typeof t == "string") return t;
      if (typeof t == "function") return t.displayName || t.name || "Unknown";
      if (at.isFragment(e)) return "React.Fragment";
      if (at.isSuspense(e)) return "React.Suspense";
      if (typeof t == "object" && t !== null) {
        if (at.isContextProvider(e)) return "Context.Provider";
        if (at.isContextConsumer(e)) return "Context.Consumer";
        if (at.isForwardRef(e)) {
          if (t.displayName) return t.displayName;
          let r = t.render.displayName || t.render.name || "";
          return r === "" ? "ForwardRef" : `ForwardRef(${r})`;
        }
        if (at.isMemo(e)) {
          let r = t.displayName || t.type.displayName || t.type.name || "";
          return r === "" ? "Memo" : `Memo(${r})`;
        }
      }
      return "UNDEFINED";
    }
    function bp(e) {
      let { props: t } = e;
      return Object.keys(t)
        .filter(r => r !== "children" && t[r] !== void 0)
        .sort();
    }
    var Ep = (e, t, r, n, o, a) =>
        ++n > t.maxDepth
          ? _n(ui(e), t)
          : Rn(
              ui(e),
              xn(bp(e), e.props, t, r + t.indent, n, o, a),
              Tn(bi(e.props.children), t, r + t.indent, n, o, a),
              t,
              r,
            ),
      Ap = e => e != null && at.isElement(e),
      Sp = { serialize: Ep, test: Ap },
      wp = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.test.json") : 245830487;
    function Cp(e) {
      let { props: t } = e;
      return t
        ? Object.keys(t)
            .filter(r => t[r] !== void 0)
            .sort()
        : [];
    }
    var vp = (e, t, r, n, o, a) =>
        ++n > t.maxDepth
          ? _n(e.type, t)
          : Rn(
              e.type,
              e.props ? xn(Cp(e), e.props, t, r + t.indent, n, o, a) : "",
              e.children ? Tn(e.children, t, r + t.indent, n, o, a) : "",
              t,
              r,
            ),
      Dp = e => e && e.$$typeof === wp,
      xp = { serialize: vp, test: Dp };
    var XS = Date.prototype.toISOString,
      JS = Error.prototype.toString,
      ZS = RegExp.prototype.toString;
    var Ei = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" },
      QS = Object.keys(Ei),
      ew = {
        callToJSON: !0,
        compareKeys: void 0,
        escapeRegex: !1,
        escapeString: !0,
        highlight: !1,
        indent: 2,
        maxDepth: Number.POSITIVE_INFINITY,
        maxWidth: Number.POSITIVE_INFINITY,
        min: !1,
        plugins: [],
        printBasicPrototype: !0,
        printFunctionName: !0,
        theme: Ei,
      };
    var Ai = {
      AsymmetricMatcher: kc,
      DOMCollection: Hc,
      DOMElement: ep,
      Immutable: mp,
      ReactElement: Sp,
      ReactTestComponent: xp,
    };
    var tw = Number.isNaN || (e => e !== e);
    var rw = new RegExp(
      "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
      "g",
    );
    var Tp = () => "Promise{\u2026}";
    try {
      let { getPromiseDetails: e, kPending: t, kRejected: r } = process.binding("util");
      Array.isArray(e(Promise.resolve())) &&
        (Tp = (n, o) => {
          let [a, u] = e(n);
          return a === t
            ? "Promise{<pending>}"
            : `Promise${a === r ? "!" : ""}{${o.inspect(u, o)}}`;
        });
    } catch {}
    var Rp = typeof Symbol == "function" && typeof Symbol.for == "function",
      nw = Rp ? Symbol.for("chai/inspect") : "@@chai/inspect",
      ii = !1;
    try {
      let e = Rc("util");
      ii = e.inspect ? e.inspect.custom : !1;
    } catch {
      ii = !1;
    }
    var {
      AsymmetricMatcher: ow,
      DOMCollection: aw,
      DOMElement: uw,
      Immutable: iw,
      ReactElement: sw,
      ReactTestComponent: lw,
    } = Ai;
    function _p(e) {
      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
    }
    var hr = {},
      si;
    function Op() {
      if (si) return hr;
      (si = 1), Object.defineProperty(hr, "__esModule", { value: !0 }), (hr.default = y);
      let e = "diff-sequences",
        t = 0,
        r = (E, w, C, b, S) => {
          let A = 0;
          for (; E < w && C < b && S(E, C); ) (E += 1), (C += 1), (A += 1);
          return A;
        },
        n = (E, w, C, b, S) => {
          let A = 0;
          for (; E <= w && C <= b && S(w, b); ) (w -= 1), (b -= 1), (A += 1);
          return A;
        },
        o = (E, w, C, b, S, A, x) => {
          let _ = 0,
            I = -E,
            v = A[_],
            T = v;
          A[_] += r(v + 1, w, b + v - I + 1, C, S);
          let B = E < x ? E : x;
          for (_ += 1, I += 2; _ <= B; _ += 1, I += 2) {
            if (_ !== E && T < A[_]) v = A[_];
            else if (((v = T + 1), w <= v)) return _ - 1;
            (T = A[_]), (A[_] = v + r(v + 1, w, b + v - I + 1, C, S));
          }
          return x;
        },
        a = (E, w, C, b, S, A, x) => {
          let _ = 0,
            I = E,
            v = A[_],
            T = v;
          A[_] -= n(w, v - 1, C, b + v - I - 1, S);
          let B = E < x ? E : x;
          for (_ += 1, I -= 2; _ <= B; _ += 1, I -= 2) {
            if (_ !== E && A[_] < T) v = A[_];
            else if (((v = T - 1), v < w)) return _ - 1;
            (T = A[_]), (A[_] = v - n(w, v - 1, C, b + v - I - 1, S));
          }
          return x;
        },
        u = (E, w, C, b, S, A, x, _, I, v, T) => {
          let B = b - w,
            L = C - w,
            k = S - b - L,
            q = -k - (E - 1),
            P = -k + (E - 1),
            M = t,
            h = E < _ ? E : _;
          for (let p = 0, g = -E; p <= h; p += 1, g += 2) {
            let R = p === 0 || (p !== E && M < x[p]),
              D = R ? x[p] : M,
              O = R ? D : D + 1,
              F = B + O - g,
              N = r(O + 1, C, F + 1, S, A),
              j = O + N;
            if (((M = x[p]), (x[p] = j), q <= g && g <= P)) {
              let Q = (E - 1 - (g + k)) / 2;
              if (Q <= v && I[Q] - 1 <= j) {
                let te = B + D - (R ? g + 1 : g - 1),
                  J = n(w, D, b, te, A),
                  ue = D - J,
                  V = te - J,
                  ce = ue + 1,
                  De = V + 1;
                (T.nChangePreceding = E - 1),
                  E - 1 === ce + De - w - b
                    ? ((T.aEndPreceding = w), (T.bEndPreceding = b))
                    : ((T.aEndPreceding = ce), (T.bEndPreceding = De)),
                  (T.nCommonPreceding = J),
                  J !== 0 && ((T.aCommonPreceding = ce), (T.bCommonPreceding = De)),
                  (T.nCommonFollowing = N),
                  N !== 0 && ((T.aCommonFollowing = O + 1), (T.bCommonFollowing = F + 1));
                let be = j + 1,
                  Oe = F + N + 1;
                return (
                  (T.nChangeFollowing = E - 1),
                  E - 1 === C + S - be - Oe
                    ? ((T.aStartFollowing = C), (T.bStartFollowing = S))
                    : ((T.aStartFollowing = be), (T.bStartFollowing = Oe)),
                  !0
                );
              }
            }
          }
          return !1;
        },
        i = (E, w, C, b, S, A, x, _, I, v, T) => {
          let B = S - C,
            L = C - w,
            k = S - b - L,
            q = k - E,
            P = k + E,
            M = t,
            h = E < v ? E : v;
          for (let p = 0, g = E; p <= h; p += 1, g -= 2) {
            let R = p === 0 || (p !== E && I[p] < M),
              D = R ? I[p] : M,
              O = R ? D : D - 1,
              F = B + O - g,
              N = n(w, O - 1, b, F - 1, A),
              j = O - N;
            if (((M = I[p]), (I[p] = j), q <= g && g <= P)) {
              let Q = (E + (g - k)) / 2;
              if (Q <= _ && j - 1 <= x[Q]) {
                let te = F - N;
                if (
                  ((T.nChangePreceding = E),
                  E === j + te - w - b
                    ? ((T.aEndPreceding = w), (T.bEndPreceding = b))
                    : ((T.aEndPreceding = j), (T.bEndPreceding = te)),
                  (T.nCommonPreceding = N),
                  N !== 0 && ((T.aCommonPreceding = j), (T.bCommonPreceding = te)),
                  (T.nChangeFollowing = E - 1),
                  E === 1)
                )
                  (T.nCommonFollowing = 0), (T.aStartFollowing = C), (T.bStartFollowing = S);
                else {
                  let J = B + D - (R ? g - 1 : g + 1),
                    ue = r(D, C, J, S, A);
                  (T.nCommonFollowing = ue),
                    ue !== 0 && ((T.aCommonFollowing = D), (T.bCommonFollowing = J));
                  let V = D + ue,
                    ce = J + ue;
                  E - 1 === C + S - V - ce
                    ? ((T.aStartFollowing = C), (T.bStartFollowing = S))
                    : ((T.aStartFollowing = V), (T.bStartFollowing = ce));
                }
                return !0;
              }
            }
          }
          return !1;
        },
        s = (E, w, C, b, S, A, x, _, I) => {
          let v = b - w,
            T = S - C,
            B = C - w,
            L = S - b,
            k = L - B,
            q = B,
            P = B;
          if (((x[0] = w - 1), (_[0] = C), k % 2 === 0)) {
            let M = (E || k) / 2,
              h = (B + L) / 2;
            for (let p = 1; p <= h; p += 1)
              if (((q = o(p, C, S, v, A, x, q)), p < M)) P = a(p, w, b, T, A, _, P);
              else if (i(p, w, C, b, S, A, x, q, _, P, I)) return;
          } else {
            let M = ((E || k) + 1) / 2,
              h = (B + L + 1) / 2,
              p = 1;
            for (q = o(p, C, S, v, A, x, q), p += 1; p <= h; p += 1)
              if (((P = a(p - 1, w, b, T, A, _, P)), p < M)) q = o(p, C, S, v, A, x, q);
              else if (u(p, w, C, b, S, A, x, q, _, P, I)) return;
          }
          throw new Error(`${e}: no overlap aStart=${w} aEnd=${C} bStart=${b} bEnd=${S}`);
        },
        l = (E, w, C, b, S, A, x, _, I, v) => {
          if (S - b < C - w) {
            if (((A = !A), A && x.length === 1)) {
              let { foundSubsequence: Q, isCommon: te } = x[0];
              x[1] = {
                foundSubsequence: (J, ue, V) => {
                  Q(J, V, ue);
                },
                isCommon: (J, ue) => te(ue, J),
              };
            }
            let N = w,
              j = C;
            (w = b), (C = S), (b = N), (S = j);
          }
          let { foundSubsequence: T, isCommon: B } = x[A ? 1 : 0];
          s(E, w, C, b, S, B, _, I, v);
          let {
            nChangePreceding: L,
            aEndPreceding: k,
            bEndPreceding: q,
            nCommonPreceding: P,
            aCommonPreceding: M,
            bCommonPreceding: h,
            nCommonFollowing: p,
            aCommonFollowing: g,
            bCommonFollowing: R,
            nChangeFollowing: D,
            aStartFollowing: O,
            bStartFollowing: F,
          } = v;
          w < k && b < q && l(L, w, k, b, q, A, x, _, I, v),
            P !== 0 && T(P, M, h),
            p !== 0 && T(p, g, R),
            O < C && F < S && l(D, O, C, F, S, A, x, _, I, v);
        },
        f = (E, w) => {
          if (typeof w != "number")
            throw new TypeError(`${e}: ${E} typeof ${typeof w} is not a number`);
          if (!Number.isSafeInteger(w))
            throw new RangeError(`${e}: ${E} value ${w} is not a safe integer`);
          if (w < 0) throw new RangeError(`${e}: ${E} value ${w} is a negative integer`);
        },
        m = (E, w) => {
          let C = typeof w;
          if (C !== "function") throw new TypeError(`${e}: ${E} typeof ${C} is not a function`);
        };
      function y(E, w, C, b) {
        f("aLength", E), f("bLength", w), m("isCommon", C), m("foundSubsequence", b);
        let S = r(0, E, 0, w, C);
        if ((S !== 0 && b(S, 0, 0), E !== S || w !== S)) {
          let A = S,
            x = S,
            _ = n(A, E - 1, x, w - 1, C),
            I = E - _,
            v = w - _,
            T = S + _;
          E !== T &&
            w !== T &&
            l(0, A, I, x, v, !1, [{ foundSubsequence: b, isCommon: C }], [t], [t], {
              aCommonFollowing: t,
              aCommonPreceding: t,
              aEndPreceding: t,
              aStartFollowing: t,
              bCommonFollowing: t,
              bCommonPreceding: t,
              bEndPreceding: t,
              bStartFollowing: t,
              nChangeFollowing: t,
              nChangePreceding: t,
              nCommonFollowing: t,
              nCommonPreceding: t,
            }),
            _ !== 0 && b(_, I, v);
        }
      }
      return hr;
    }
    var Fp = Op(),
      cw = _p(Fp);
    var {
      AsymmetricMatcher: pw,
      DOMCollection: dw,
      DOMElement: hw,
      Immutable: fw,
      ReactElement: mw,
      ReactTestComponent: gw,
    } = Ai;
    var yw = Object.getPrototypeOf({});
    var H = (e => (
        (e.DONE = "done"), (e.ERROR = "error"), (e.ACTIVE = "active"), (e.WAITING = "waiting"), e
      ))(H || {}),
      We = {
        CALL: "storybook/instrumenter/call",
        SYNC: "storybook/instrumenter/sync",
        START: "storybook/instrumenter/start",
        BACK: "storybook/instrumenter/back",
        GOTO: "storybook/instrumenter/goto",
        NEXT: "storybook/instrumenter/next",
        END: "storybook/instrumenter/end",
      };
    var bw = new Error(
      "This function ran after the play function completed. Did you forget to `await` it?",
    );
    function ye() {
      return (
        (ye = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
        ye.apply(null, arguments)
      );
    }
    function Si(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function Ye(e, t) {
      return (
        (Ye = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (r, n) {
              return (r.__proto__ = n), r;
            }),
        Ye(e, t)
      );
    }
    function wi(e, t) {
      (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Ye(e, t);
    }
    function mr(e) {
      return (
        (mr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        mr(e)
      );
    }
    function Ci(e) {
      try {
        return Function.toString.call(e).indexOf("[native code]") !== -1;
      } catch {
        return typeof e == "function";
      }
    }
    function On() {
      try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      } catch {}
      return (On = function () {
        return !!e;
      })();
    }
    function vi(e, t, r) {
      if (On()) return Reflect.construct.apply(null, arguments);
      var n = [null];
      n.push.apply(n, t);
      var o = new (e.bind.apply(e, n))();
      return r && Ye(o, r.prototype), o;
    }
    function gr(e) {
      var t = typeof Map == "function" ? new Map() : void 0;
      return (
        (gr = function (n) {
          if (n === null || !Ci(n)) return n;
          if (typeof n != "function")
            throw new TypeError("Super expression must either be null or a function");
          if (t !== void 0) {
            if (t.has(n)) return t.get(n);
            t.set(n, o);
          }
          function o() {
            return vi(n, arguments, mr(this).constructor);
          }
          return (
            (o.prototype = Object.create(n.prototype, {
              constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 },
            })),
            Ye(o, n)
          );
        }),
        gr(e)
      );
    }
    var Se = (function (e) {
      wi(t, e);
      function t(r) {
        var n;
        if (1)
          n =
            e.call(
              this,
              "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
                r +
                " for more information.",
            ) || this;
        else for (var o, a, u; u < o; u++);
        return Si(n);
      }
      return t;
    })(gr(Error));
    function Di(e, t) {
      return e.substr(-t.length) === t;
    }
    var Ip = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
    function xi(e) {
      if (typeof e != "string") return e;
      var t = e.match(Ip);
      return t ? parseFloat(e) : e;
    }
    var Bp = function (t) {
        return function (r, n) {
          n === void 0 && (n = "16px");
          var o = r,
            a = n;
          if (typeof r == "string") {
            if (!Di(r, "px")) throw new Se(69, t, r);
            o = xi(r);
          }
          if (typeof n == "string") {
            if (!Di(n, "px")) throw new Se(70, t, n);
            a = xi(n);
          }
          if (typeof o == "string") throw new Se(71, r, t);
          if (typeof a == "string") throw new Se(72, n, t);
          return "" + o / a + t;
        };
      },
      Ri = Bp,
      CC = Ri("em");
    var vC = Ri("rem");
    function Fn(e) {
      return Math.round(e * 255);
    }
    function Pp(e, t, r) {
      return Fn(e) + "," + Fn(t) + "," + Fn(r);
    }
    function Pt(e, t, r, n) {
      if ((n === void 0 && (n = Pp), t === 0)) return n(r, r, r);
      var o = (((e % 360) + 360) % 360) / 60,
        a = (1 - Math.abs(2 * r - 1)) * t,
        u = a * (1 - Math.abs((o % 2) - 1)),
        i = 0,
        s = 0,
        l = 0;
      o >= 0 && o < 1
        ? ((i = a), (s = u))
        : o >= 1 && o < 2
          ? ((i = u), (s = a))
          : o >= 2 && o < 3
            ? ((s = a), (l = u))
            : o >= 3 && o < 4
              ? ((s = u), (l = a))
              : o >= 4 && o < 5
                ? ((i = u), (l = a))
                : o >= 5 && o < 6 && ((i = a), (l = u));
      var f = r - a / 2,
        m = i + f,
        y = s + f,
        E = l + f;
      return n(m, y, E);
    }
    var Ti = {
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
    function Np(e) {
      if (typeof e != "string") return e;
      var t = e.toLowerCase();
      return Ti[t] ? "#" + Ti[t] : e;
    }
    var Lp = /^#[a-fA-F0-9]{6}$/,
      kp = /^#[a-fA-F0-9]{8}$/,
      jp = /^#[a-fA-F0-9]{3}$/,
      Mp = /^#[a-fA-F0-9]{4}$/,
      In = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      $p =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      qp =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      Up =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
    function gt(e) {
      if (typeof e != "string") throw new Se(3);
      var t = Np(e);
      if (t.match(Lp))
        return {
          red: parseInt("" + t[1] + t[2], 16),
          green: parseInt("" + t[3] + t[4], 16),
          blue: parseInt("" + t[5] + t[6], 16),
        };
      if (t.match(kp)) {
        var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
        return {
          red: parseInt("" + t[1] + t[2], 16),
          green: parseInt("" + t[3] + t[4], 16),
          blue: parseInt("" + t[5] + t[6], 16),
          alpha: r,
        };
      }
      if (t.match(jp))
        return {
          red: parseInt("" + t[1] + t[1], 16),
          green: parseInt("" + t[2] + t[2], 16),
          blue: parseInt("" + t[3] + t[3], 16),
        };
      if (t.match(Mp)) {
        var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
        return {
          red: parseInt("" + t[1] + t[1], 16),
          green: parseInt("" + t[2] + t[2], 16),
          blue: parseInt("" + t[3] + t[3], 16),
          alpha: n,
        };
      }
      var o = In.exec(t);
      if (o)
        return {
          red: parseInt("" + o[1], 10),
          green: parseInt("" + o[2], 10),
          blue: parseInt("" + o[3], 10),
        };
      var a = $p.exec(t.substring(0, 50));
      if (a)
        return {
          red: parseInt("" + a[1], 10),
          green: parseInt("" + a[2], 10),
          blue: parseInt("" + a[3], 10),
          alpha: parseFloat("" + a[4]) > 1 ? parseFloat("" + a[4]) / 100 : parseFloat("" + a[4]),
        };
      var u = qp.exec(t);
      if (u) {
        var i = parseInt("" + u[1], 10),
          s = parseInt("" + u[2], 10) / 100,
          l = parseInt("" + u[3], 10) / 100,
          f = "rgb(" + Pt(i, s, l) + ")",
          m = In.exec(f);
        if (!m) throw new Se(4, t, f);
        return {
          red: parseInt("" + m[1], 10),
          green: parseInt("" + m[2], 10),
          blue: parseInt("" + m[3], 10),
        };
      }
      var y = Up.exec(t.substring(0, 50));
      if (y) {
        var E = parseInt("" + y[1], 10),
          w = parseInt("" + y[2], 10) / 100,
          C = parseInt("" + y[3], 10) / 100,
          b = "rgb(" + Pt(E, w, C) + ")",
          S = In.exec(b);
        if (!S) throw new Se(4, t, b);
        return {
          red: parseInt("" + S[1], 10),
          green: parseInt("" + S[2], 10),
          blue: parseInt("" + S[3], 10),
          alpha: parseFloat("" + y[4]) > 1 ? parseFloat("" + y[4]) / 100 : parseFloat("" + y[4]),
        };
      }
      throw new Se(5);
    }
    function zp(e) {
      var t = e.red / 255,
        r = e.green / 255,
        n = e.blue / 255,
        o = Math.max(t, r, n),
        a = Math.min(t, r, n),
        u = (o + a) / 2;
      if (o === a)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: u, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: u };
      var i,
        s = o - a,
        l = u > 0.5 ? s / (2 - o - a) : s / (o + a);
      switch (o) {
        case t:
          i = (r - n) / s + (r < n ? 6 : 0);
          break;
        case r:
          i = (n - t) / s + 2;
          break;
        default:
          i = (t - r) / s + 4;
          break;
      }
      return (
        (i *= 60),
        e.alpha !== void 0
          ? { hue: i, saturation: l, lightness: u, alpha: e.alpha }
          : { hue: i, saturation: l, lightness: u }
      );
    }
    function Ke(e) {
      return zp(gt(e));
    }
    var Hp = function (t) {
        return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
          ? "#" + t[1] + t[3] + t[5]
          : t;
      },
      Pn = Hp;
    function ut(e) {
      var t = e.toString(16);
      return t.length === 1 ? "0" + t : t;
    }
    function Bn(e) {
      return ut(Math.round(e * 255));
    }
    function Gp(e, t, r) {
      return Pn("#" + Bn(e) + Bn(t) + Bn(r));
    }
    function yr(e, t, r) {
      return Pt(e, t, r, Gp);
    }
    function Vp(e, t, r) {
      if (typeof e == "number" && typeof t == "number" && typeof r == "number") return yr(e, t, r);
      if (typeof e == "object" && t === void 0 && r === void 0)
        return yr(e.hue, e.saturation, e.lightness);
      throw new Se(1);
    }
    function Wp(e, t, r, n) {
      if (
        typeof e == "number" &&
        typeof t == "number" &&
        typeof r == "number" &&
        typeof n == "number"
      )
        return n >= 1 ? yr(e, t, r) : "rgba(" + Pt(e, t, r) + "," + n + ")";
      if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? yr(e.hue, e.saturation, e.lightness)
          : "rgba(" + Pt(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
      throw new Se(2);
    }
    function Nn(e, t, r) {
      if (typeof e == "number" && typeof t == "number" && typeof r == "number")
        return Pn("#" + ut(e) + ut(t) + ut(r));
      if (typeof e == "object" && t === void 0 && r === void 0)
        return Pn("#" + ut(e.red) + ut(e.green) + ut(e.blue));
      throw new Se(6);
    }
    function br(e, t, r, n) {
      if (typeof e == "string" && typeof t == "number") {
        var o = gt(e);
        return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
      } else {
        if (
          typeof e == "number" &&
          typeof t == "number" &&
          typeof r == "number" &&
          typeof n == "number"
        )
          return n >= 1 ? Nn(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
        if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
          return e.alpha >= 1
            ? Nn(e.red, e.green, e.blue)
            : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
      }
      throw new Se(7);
    }
    var Yp = function (t) {
        return (
          typeof t.red == "number" &&
          typeof t.green == "number" &&
          typeof t.blue == "number" &&
          (typeof t.alpha != "number" || typeof t.alpha > "u")
        );
      },
      Kp = function (t) {
        return (
          typeof t.red == "number" &&
          typeof t.green == "number" &&
          typeof t.blue == "number" &&
          typeof t.alpha == "number"
        );
      },
      Xp = function (t) {
        return (
          typeof t.hue == "number" &&
          typeof t.saturation == "number" &&
          typeof t.lightness == "number" &&
          (typeof t.alpha != "number" || typeof t.alpha > "u")
        );
      },
      Jp = function (t) {
        return (
          typeof t.hue == "number" &&
          typeof t.saturation == "number" &&
          typeof t.lightness == "number" &&
          typeof t.alpha == "number"
        );
      };
    function Xe(e) {
      if (typeof e != "object") throw new Se(8);
      if (Kp(e)) return br(e);
      if (Yp(e)) return Nn(e);
      if (Jp(e)) return Wp(e);
      if (Xp(e)) return Vp(e);
      throw new Se(8);
    }
    function _i(e, t, r) {
      return function () {
        var o = r.concat(Array.prototype.slice.call(arguments));
        return o.length >= t ? e.apply(this, o) : _i(e, t, o);
      };
    }
    function ve(e) {
      return _i(e, e.length, []);
    }
    function Zp(e, t) {
      if (t === "transparent") return t;
      var r = Ke(t);
      return Xe(ye({}, r, { hue: r.hue + parseFloat(e) }));
    }
    var DC = ve(Zp);
    function yt(e, t, r) {
      return Math.max(e, Math.min(t, r));
    }
    function Qp(e, t) {
      if (t === "transparent") return t;
      var r = Ke(t);
      return Xe(ye({}, r, { lightness: yt(0, 1, r.lightness - parseFloat(e)) }));
    }
    var xC = ve(Qp);
    function e2(e, t) {
      if (t === "transparent") return t;
      var r = Ke(t);
      return Xe(ye({}, r, { saturation: yt(0, 1, r.saturation - parseFloat(e)) }));
    }
    var TC = ve(e2);
    function t2(e, t) {
      if (t === "transparent") return t;
      var r = Ke(t);
      return Xe(ye({}, r, { lightness: yt(0, 1, r.lightness + parseFloat(e)) }));
    }
    var RC = ve(t2);
    function r2(e, t, r) {
      if (t === "transparent") return r;
      if (r === "transparent") return t;
      if (e === 0) return r;
      var n = gt(t),
        o = ye({}, n, { alpha: typeof n.alpha == "number" ? n.alpha : 1 }),
        a = gt(r),
        u = ye({}, a, { alpha: typeof a.alpha == "number" ? a.alpha : 1 }),
        i = o.alpha - u.alpha,
        s = parseFloat(e) * 2 - 1,
        l = s * i === -1 ? s : s + i,
        f = 1 + s * i,
        m = (l / f + 1) / 2,
        y = 1 - m,
        E = {
          red: Math.floor(o.red * m + u.red * y),
          green: Math.floor(o.green * m + u.green * y),
          blue: Math.floor(o.blue * m + u.blue * y),
          alpha: o.alpha * parseFloat(e) + u.alpha * (1 - parseFloat(e)),
        };
      return br(E);
    }
    var n2 = ve(r2),
      Oi = n2;
    function o2(e, t) {
      if (t === "transparent") return t;
      var r = gt(t),
        n = typeof r.alpha == "number" ? r.alpha : 1,
        o = ye({}, r, { alpha: yt(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
      return br(o);
    }
    var _C = ve(o2);
    function a2(e, t) {
      if (t === "transparent") return t;
      var r = Ke(t);
      return Xe(ye({}, r, { saturation: yt(0, 1, r.saturation + parseFloat(e)) }));
    }
    var OC = ve(a2);
    function u2(e, t) {
      return t === "transparent" ? t : Xe(ye({}, Ke(t), { hue: parseFloat(e) }));
    }
    var FC = ve(u2);
    function i2(e, t) {
      return t === "transparent" ? t : Xe(ye({}, Ke(t), { lightness: parseFloat(e) }));
    }
    var IC = ve(i2);
    function s2(e, t) {
      return t === "transparent" ? t : Xe(ye({}, Ke(t), { saturation: parseFloat(e) }));
    }
    var BC = ve(s2);
    function l2(e, t) {
      return t === "transparent" ? t : Oi(parseFloat(e), "rgb(0, 0, 0)", t);
    }
    var PC = ve(l2);
    function c2(e, t) {
      return t === "transparent" ? t : Oi(parseFloat(e), "rgb(255, 255, 255)", t);
    }
    var NC = ve(c2);
    function p2(e, t) {
      if (t === "transparent") return t;
      var r = gt(t),
        n = typeof r.alpha == "number" ? r.alpha : 1,
        o = ye({}, r, { alpha: yt(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
      return br(o);
    }
    var d2 = ve(p2),
      Er = d2;
    var h2 = Object.create,
      Ki = Object.defineProperty,
      f2 = Object.getOwnPropertyDescriptor,
      Xi = Object.getOwnPropertyNames,
      m2 = Object.getPrototypeOf,
      g2 = Object.prototype.hasOwnProperty,
      ae = (e, t) =>
        function () {
          return t || (0, e[Xi(e)[0]])((t = { exports: {} }).exports, t), t.exports;
        },
      y2 = (e, t, r, n) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let o of Xi(t))
            !g2.call(e, o) &&
              o !== r &&
              Ki(e, o, { get: () => t[o], enumerable: !(n = f2(t, o)) || n.enumerable });
        return e;
      },
      Te = (e, t, r) => (
        (r = e != null ? h2(m2(e)) : {}),
        y2(t || !e || !e.__esModule ? Ki(r, "default", { value: e, enumerable: !0 }) : r, e)
      ),
      Ji = ae({
        "../../node_modules/ansi-to-html/node_modules/entities/lib/maps/entities.json"(e, t) {
          t.exports = {
            Aacute: "\xC1",
            aacute: "\xE1",
            Abreve: "\u0102",
            abreve: "\u0103",
            ac: "\u223E",
            acd: "\u223F",
            acE: "\u223E\u0333",
            Acirc: "\xC2",
            acirc: "\xE2",
            acute: "\xB4",
            Acy: "\u0410",
            acy: "\u0430",
            AElig: "\xC6",
            aelig: "\xE6",
            af: "\u2061",
            Afr: "\u{1D504}",
            afr: "\u{1D51E}",
            Agrave: "\xC0",
            agrave: "\xE0",
            alefsym: "\u2135",
            aleph: "\u2135",
            Alpha: "\u0391",
            alpha: "\u03B1",
            Amacr: "\u0100",
            amacr: "\u0101",
            amalg: "\u2A3F",
            amp: "&",
            AMP: "&",
            andand: "\u2A55",
            And: "\u2A53",
            and: "\u2227",
            andd: "\u2A5C",
            andslope: "\u2A58",
            andv: "\u2A5A",
            ang: "\u2220",
            ange: "\u29A4",
            angle: "\u2220",
            angmsdaa: "\u29A8",
            angmsdab: "\u29A9",
            angmsdac: "\u29AA",
            angmsdad: "\u29AB",
            angmsdae: "\u29AC",
            angmsdaf: "\u29AD",
            angmsdag: "\u29AE",
            angmsdah: "\u29AF",
            angmsd: "\u2221",
            angrt: "\u221F",
            angrtvb: "\u22BE",
            angrtvbd: "\u299D",
            angsph: "\u2222",
            angst: "\xC5",
            angzarr: "\u237C",
            Aogon: "\u0104",
            aogon: "\u0105",
            Aopf: "\u{1D538}",
            aopf: "\u{1D552}",
            apacir: "\u2A6F",
            ap: "\u2248",
            apE: "\u2A70",
            ape: "\u224A",
            apid: "\u224B",
            apos: "'",
            ApplyFunction: "\u2061",
            approx: "\u2248",
            approxeq: "\u224A",
            Aring: "\xC5",
            aring: "\xE5",
            Ascr: "\u{1D49C}",
            ascr: "\u{1D4B6}",
            Assign: "\u2254",
            ast: "*",
            asymp: "\u2248",
            asympeq: "\u224D",
            Atilde: "\xC3",
            atilde: "\xE3",
            Auml: "\xC4",
            auml: "\xE4",
            awconint: "\u2233",
            awint: "\u2A11",
            backcong: "\u224C",
            backepsilon: "\u03F6",
            backprime: "\u2035",
            backsim: "\u223D",
            backsimeq: "\u22CD",
            Backslash: "\u2216",
            Barv: "\u2AE7",
            barvee: "\u22BD",
            barwed: "\u2305",
            Barwed: "\u2306",
            barwedge: "\u2305",
            bbrk: "\u23B5",
            bbrktbrk: "\u23B6",
            bcong: "\u224C",
            Bcy: "\u0411",
            bcy: "\u0431",
            bdquo: "\u201E",
            becaus: "\u2235",
            because: "\u2235",
            Because: "\u2235",
            bemptyv: "\u29B0",
            bepsi: "\u03F6",
            bernou: "\u212C",
            Bernoullis: "\u212C",
            Beta: "\u0392",
            beta: "\u03B2",
            beth: "\u2136",
            between: "\u226C",
            Bfr: "\u{1D505}",
            bfr: "\u{1D51F}",
            bigcap: "\u22C2",
            bigcirc: "\u25EF",
            bigcup: "\u22C3",
            bigodot: "\u2A00",
            bigoplus: "\u2A01",
            bigotimes: "\u2A02",
            bigsqcup: "\u2A06",
            bigstar: "\u2605",
            bigtriangledown: "\u25BD",
            bigtriangleup: "\u25B3",
            biguplus: "\u2A04",
            bigvee: "\u22C1",
            bigwedge: "\u22C0",
            bkarow: "\u290D",
            blacklozenge: "\u29EB",
            blacksquare: "\u25AA",
            blacktriangle: "\u25B4",
            blacktriangledown: "\u25BE",
            blacktriangleleft: "\u25C2",
            blacktriangleright: "\u25B8",
            blank: "\u2423",
            blk12: "\u2592",
            blk14: "\u2591",
            blk34: "\u2593",
            block: "\u2588",
            bne: "=\u20E5",
            bnequiv: "\u2261\u20E5",
            bNot: "\u2AED",
            bnot: "\u2310",
            Bopf: "\u{1D539}",
            bopf: "\u{1D553}",
            bot: "\u22A5",
            bottom: "\u22A5",
            bowtie: "\u22C8",
            boxbox: "\u29C9",
            boxdl: "\u2510",
            boxdL: "\u2555",
            boxDl: "\u2556",
            boxDL: "\u2557",
            boxdr: "\u250C",
            boxdR: "\u2552",
            boxDr: "\u2553",
            boxDR: "\u2554",
            boxh: "\u2500",
            boxH: "\u2550",
            boxhd: "\u252C",
            boxHd: "\u2564",
            boxhD: "\u2565",
            boxHD: "\u2566",
            boxhu: "\u2534",
            boxHu: "\u2567",
            boxhU: "\u2568",
            boxHU: "\u2569",
            boxminus: "\u229F",
            boxplus: "\u229E",
            boxtimes: "\u22A0",
            boxul: "\u2518",
            boxuL: "\u255B",
            boxUl: "\u255C",
            boxUL: "\u255D",
            boxur: "\u2514",
            boxuR: "\u2558",
            boxUr: "\u2559",
            boxUR: "\u255A",
            boxv: "\u2502",
            boxV: "\u2551",
            boxvh: "\u253C",
            boxvH: "\u256A",
            boxVh: "\u256B",
            boxVH: "\u256C",
            boxvl: "\u2524",
            boxvL: "\u2561",
            boxVl: "\u2562",
            boxVL: "\u2563",
            boxvr: "\u251C",
            boxvR: "\u255E",
            boxVr: "\u255F",
            boxVR: "\u2560",
            bprime: "\u2035",
            breve: "\u02D8",
            Breve: "\u02D8",
            brvbar: "\xA6",
            bscr: "\u{1D4B7}",
            Bscr: "\u212C",
            bsemi: "\u204F",
            bsim: "\u223D",
            bsime: "\u22CD",
            bsolb: "\u29C5",
            bsol: "\\",
            bsolhsub: "\u27C8",
            bull: "\u2022",
            bullet: "\u2022",
            bump: "\u224E",
            bumpE: "\u2AAE",
            bumpe: "\u224F",
            Bumpeq: "\u224E",
            bumpeq: "\u224F",
            Cacute: "\u0106",
            cacute: "\u0107",
            capand: "\u2A44",
            capbrcup: "\u2A49",
            capcap: "\u2A4B",
            cap: "\u2229",
            Cap: "\u22D2",
            capcup: "\u2A47",
            capdot: "\u2A40",
            CapitalDifferentialD: "\u2145",
            caps: "\u2229\uFE00",
            caret: "\u2041",
            caron: "\u02C7",
            Cayleys: "\u212D",
            ccaps: "\u2A4D",
            Ccaron: "\u010C",
            ccaron: "\u010D",
            Ccedil: "\xC7",
            ccedil: "\xE7",
            Ccirc: "\u0108",
            ccirc: "\u0109",
            Cconint: "\u2230",
            ccups: "\u2A4C",
            ccupssm: "\u2A50",
            Cdot: "\u010A",
            cdot: "\u010B",
            cedil: "\xB8",
            Cedilla: "\xB8",
            cemptyv: "\u29B2",
            cent: "\xA2",
            centerdot: "\xB7",
            CenterDot: "\xB7",
            cfr: "\u{1D520}",
            Cfr: "\u212D",
            CHcy: "\u0427",
            chcy: "\u0447",
            check: "\u2713",
            checkmark: "\u2713",
            Chi: "\u03A7",
            chi: "\u03C7",
            circ: "\u02C6",
            circeq: "\u2257",
            circlearrowleft: "\u21BA",
            circlearrowright: "\u21BB",
            circledast: "\u229B",
            circledcirc: "\u229A",
            circleddash: "\u229D",
            CircleDot: "\u2299",
            circledR: "\xAE",
            circledS: "\u24C8",
            CircleMinus: "\u2296",
            CirclePlus: "\u2295",
            CircleTimes: "\u2297",
            cir: "\u25CB",
            cirE: "\u29C3",
            cire: "\u2257",
            cirfnint: "\u2A10",
            cirmid: "\u2AEF",
            cirscir: "\u29C2",
            ClockwiseContourIntegral: "\u2232",
            CloseCurlyDoubleQuote: "\u201D",
            CloseCurlyQuote: "\u2019",
            clubs: "\u2663",
            clubsuit: "\u2663",
            colon: ":",
            Colon: "\u2237",
            Colone: "\u2A74",
            colone: "\u2254",
            coloneq: "\u2254",
            comma: ",",
            commat: "@",
            comp: "\u2201",
            compfn: "\u2218",
            complement: "\u2201",
            complexes: "\u2102",
            cong: "\u2245",
            congdot: "\u2A6D",
            Congruent: "\u2261",
            conint: "\u222E",
            Conint: "\u222F",
            ContourIntegral: "\u222E",
            copf: "\u{1D554}",
            Copf: "\u2102",
            coprod: "\u2210",
            Coproduct: "\u2210",
            copy: "\xA9",
            COPY: "\xA9",
            copysr: "\u2117",
            CounterClockwiseContourIntegral: "\u2233",
            crarr: "\u21B5",
            cross: "\u2717",
            Cross: "\u2A2F",
            Cscr: "\u{1D49E}",
            cscr: "\u{1D4B8}",
            csub: "\u2ACF",
            csube: "\u2AD1",
            csup: "\u2AD0",
            csupe: "\u2AD2",
            ctdot: "\u22EF",
            cudarrl: "\u2938",
            cudarrr: "\u2935",
            cuepr: "\u22DE",
            cuesc: "\u22DF",
            cularr: "\u21B6",
            cularrp: "\u293D",
            cupbrcap: "\u2A48",
            cupcap: "\u2A46",
            CupCap: "\u224D",
            cup: "\u222A",
            Cup: "\u22D3",
            cupcup: "\u2A4A",
            cupdot: "\u228D",
            cupor: "\u2A45",
            cups: "\u222A\uFE00",
            curarr: "\u21B7",
            curarrm: "\u293C",
            curlyeqprec: "\u22DE",
            curlyeqsucc: "\u22DF",
            curlyvee: "\u22CE",
            curlywedge: "\u22CF",
            curren: "\xA4",
            curvearrowleft: "\u21B6",
            curvearrowright: "\u21B7",
            cuvee: "\u22CE",
            cuwed: "\u22CF",
            cwconint: "\u2232",
            cwint: "\u2231",
            cylcty: "\u232D",
            dagger: "\u2020",
            Dagger: "\u2021",
            daleth: "\u2138",
            darr: "\u2193",
            Darr: "\u21A1",
            dArr: "\u21D3",
            dash: "\u2010",
            Dashv: "\u2AE4",
            dashv: "\u22A3",
            dbkarow: "\u290F",
            dblac: "\u02DD",
            Dcaron: "\u010E",
            dcaron: "\u010F",
            Dcy: "\u0414",
            dcy: "\u0434",
            ddagger: "\u2021",
            ddarr: "\u21CA",
            DD: "\u2145",
            dd: "\u2146",
            DDotrahd: "\u2911",
            ddotseq: "\u2A77",
            deg: "\xB0",
            Del: "\u2207",
            Delta: "\u0394",
            delta: "\u03B4",
            demptyv: "\u29B1",
            dfisht: "\u297F",
            Dfr: "\u{1D507}",
            dfr: "\u{1D521}",
            dHar: "\u2965",
            dharl: "\u21C3",
            dharr: "\u21C2",
            DiacriticalAcute: "\xB4",
            DiacriticalDot: "\u02D9",
            DiacriticalDoubleAcute: "\u02DD",
            DiacriticalGrave: "`",
            DiacriticalTilde: "\u02DC",
            diam: "\u22C4",
            diamond: "\u22C4",
            Diamond: "\u22C4",
            diamondsuit: "\u2666",
            diams: "\u2666",
            die: "\xA8",
            DifferentialD: "\u2146",
            digamma: "\u03DD",
            disin: "\u22F2",
            div: "\xF7",
            divide: "\xF7",
            divideontimes: "\u22C7",
            divonx: "\u22C7",
            DJcy: "\u0402",
            djcy: "\u0452",
            dlcorn: "\u231E",
            dlcrop: "\u230D",
            dollar: "$",
            Dopf: "\u{1D53B}",
            dopf: "\u{1D555}",
            Dot: "\xA8",
            dot: "\u02D9",
            DotDot: "\u20DC",
            doteq: "\u2250",
            doteqdot: "\u2251",
            DotEqual: "\u2250",
            dotminus: "\u2238",
            dotplus: "\u2214",
            dotsquare: "\u22A1",
            doublebarwedge: "\u2306",
            DoubleContourIntegral: "\u222F",
            DoubleDot: "\xA8",
            DoubleDownArrow: "\u21D3",
            DoubleLeftArrow: "\u21D0",
            DoubleLeftRightArrow: "\u21D4",
            DoubleLeftTee: "\u2AE4",
            DoubleLongLeftArrow: "\u27F8",
            DoubleLongLeftRightArrow: "\u27FA",
            DoubleLongRightArrow: "\u27F9",
            DoubleRightArrow: "\u21D2",
            DoubleRightTee: "\u22A8",
            DoubleUpArrow: "\u21D1",
            DoubleUpDownArrow: "\u21D5",
            DoubleVerticalBar: "\u2225",
            DownArrowBar: "\u2913",
            downarrow: "\u2193",
            DownArrow: "\u2193",
            Downarrow: "\u21D3",
            DownArrowUpArrow: "\u21F5",
            DownBreve: "\u0311",
            downdownarrows: "\u21CA",
            downharpoonleft: "\u21C3",
            downharpoonright: "\u21C2",
            DownLeftRightVector: "\u2950",
            DownLeftTeeVector: "\u295E",
            DownLeftVectorBar: "\u2956",
            DownLeftVector: "\u21BD",
            DownRightTeeVector: "\u295F",
            DownRightVectorBar: "\u2957",
            DownRightVector: "\u21C1",
            DownTeeArrow: "\u21A7",
            DownTee: "\u22A4",
            drbkarow: "\u2910",
            drcorn: "\u231F",
            drcrop: "\u230C",
            Dscr: "\u{1D49F}",
            dscr: "\u{1D4B9}",
            DScy: "\u0405",
            dscy: "\u0455",
            dsol: "\u29F6",
            Dstrok: "\u0110",
            dstrok: "\u0111",
            dtdot: "\u22F1",
            dtri: "\u25BF",
            dtrif: "\u25BE",
            duarr: "\u21F5",
            duhar: "\u296F",
            dwangle: "\u29A6",
            DZcy: "\u040F",
            dzcy: "\u045F",
            dzigrarr: "\u27FF",
            Eacute: "\xC9",
            eacute: "\xE9",
            easter: "\u2A6E",
            Ecaron: "\u011A",
            ecaron: "\u011B",
            Ecirc: "\xCA",
            ecirc: "\xEA",
            ecir: "\u2256",
            ecolon: "\u2255",
            Ecy: "\u042D",
            ecy: "\u044D",
            eDDot: "\u2A77",
            Edot: "\u0116",
            edot: "\u0117",
            eDot: "\u2251",
            ee: "\u2147",
            efDot: "\u2252",
            Efr: "\u{1D508}",
            efr: "\u{1D522}",
            eg: "\u2A9A",
            Egrave: "\xC8",
            egrave: "\xE8",
            egs: "\u2A96",
            egsdot: "\u2A98",
            el: "\u2A99",
            Element: "\u2208",
            elinters: "\u23E7",
            ell: "\u2113",
            els: "\u2A95",
            elsdot: "\u2A97",
            Emacr: "\u0112",
            emacr: "\u0113",
            empty: "\u2205",
            emptyset: "\u2205",
            EmptySmallSquare: "\u25FB",
            emptyv: "\u2205",
            EmptyVerySmallSquare: "\u25AB",
            emsp13: "\u2004",
            emsp14: "\u2005",
            emsp: "\u2003",
            ENG: "\u014A",
            eng: "\u014B",
            ensp: "\u2002",
            Eogon: "\u0118",
            eogon: "\u0119",
            Eopf: "\u{1D53C}",
            eopf: "\u{1D556}",
            epar: "\u22D5",
            eparsl: "\u29E3",
            eplus: "\u2A71",
            epsi: "\u03B5",
            Epsilon: "\u0395",
            epsilon: "\u03B5",
            epsiv: "\u03F5",
            eqcirc: "\u2256",
            eqcolon: "\u2255",
            eqsim: "\u2242",
            eqslantgtr: "\u2A96",
            eqslantless: "\u2A95",
            Equal: "\u2A75",
            equals: "=",
            EqualTilde: "\u2242",
            equest: "\u225F",
            Equilibrium: "\u21CC",
            equiv: "\u2261",
            equivDD: "\u2A78",
            eqvparsl: "\u29E5",
            erarr: "\u2971",
            erDot: "\u2253",
            escr: "\u212F",
            Escr: "\u2130",
            esdot: "\u2250",
            Esim: "\u2A73",
            esim: "\u2242",
            Eta: "\u0397",
            eta: "\u03B7",
            ETH: "\xD0",
            eth: "\xF0",
            Euml: "\xCB",
            euml: "\xEB",
            euro: "\u20AC",
            excl: "!",
            exist: "\u2203",
            Exists: "\u2203",
            expectation: "\u2130",
            exponentiale: "\u2147",
            ExponentialE: "\u2147",
            fallingdotseq: "\u2252",
            Fcy: "\u0424",
            fcy: "\u0444",
            female: "\u2640",
            ffilig: "\uFB03",
            fflig: "\uFB00",
            ffllig: "\uFB04",
            Ffr: "\u{1D509}",
            ffr: "\u{1D523}",
            filig: "\uFB01",
            FilledSmallSquare: "\u25FC",
            FilledVerySmallSquare: "\u25AA",
            fjlig: "fj",
            flat: "\u266D",
            fllig: "\uFB02",
            fltns: "\u25B1",
            fnof: "\u0192",
            Fopf: "\u{1D53D}",
            fopf: "\u{1D557}",
            forall: "\u2200",
            ForAll: "\u2200",
            fork: "\u22D4",
            forkv: "\u2AD9",
            Fouriertrf: "\u2131",
            fpartint: "\u2A0D",
            frac12: "\xBD",
            frac13: "\u2153",
            frac14: "\xBC",
            frac15: "\u2155",
            frac16: "\u2159",
            frac18: "\u215B",
            frac23: "\u2154",
            frac25: "\u2156",
            frac34: "\xBE",
            frac35: "\u2157",
            frac38: "\u215C",
            frac45: "\u2158",
            frac56: "\u215A",
            frac58: "\u215D",
            frac78: "\u215E",
            frasl: "\u2044",
            frown: "\u2322",
            fscr: "\u{1D4BB}",
            Fscr: "\u2131",
            gacute: "\u01F5",
            Gamma: "\u0393",
            gamma: "\u03B3",
            Gammad: "\u03DC",
            gammad: "\u03DD",
            gap: "\u2A86",
            Gbreve: "\u011E",
            gbreve: "\u011F",
            Gcedil: "\u0122",
            Gcirc: "\u011C",
            gcirc: "\u011D",
            Gcy: "\u0413",
            gcy: "\u0433",
            Gdot: "\u0120",
            gdot: "\u0121",
            ge: "\u2265",
            gE: "\u2267",
            gEl: "\u2A8C",
            gel: "\u22DB",
            geq: "\u2265",
            geqq: "\u2267",
            geqslant: "\u2A7E",
            gescc: "\u2AA9",
            ges: "\u2A7E",
            gesdot: "\u2A80",
            gesdoto: "\u2A82",
            gesdotol: "\u2A84",
            gesl: "\u22DB\uFE00",
            gesles: "\u2A94",
            Gfr: "\u{1D50A}",
            gfr: "\u{1D524}",
            gg: "\u226B",
            Gg: "\u22D9",
            ggg: "\u22D9",
            gimel: "\u2137",
            GJcy: "\u0403",
            gjcy: "\u0453",
            gla: "\u2AA5",
            gl: "\u2277",
            glE: "\u2A92",
            glj: "\u2AA4",
            gnap: "\u2A8A",
            gnapprox: "\u2A8A",
            gne: "\u2A88",
            gnE: "\u2269",
            gneq: "\u2A88",
            gneqq: "\u2269",
            gnsim: "\u22E7",
            Gopf: "\u{1D53E}",
            gopf: "\u{1D558}",
            grave: "`",
            GreaterEqual: "\u2265",
            GreaterEqualLess: "\u22DB",
            GreaterFullEqual: "\u2267",
            GreaterGreater: "\u2AA2",
            GreaterLess: "\u2277",
            GreaterSlantEqual: "\u2A7E",
            GreaterTilde: "\u2273",
            Gscr: "\u{1D4A2}",
            gscr: "\u210A",
            gsim: "\u2273",
            gsime: "\u2A8E",
            gsiml: "\u2A90",
            gtcc: "\u2AA7",
            gtcir: "\u2A7A",
            gt: ">",
            GT: ">",
            Gt: "\u226B",
            gtdot: "\u22D7",
            gtlPar: "\u2995",
            gtquest: "\u2A7C",
            gtrapprox: "\u2A86",
            gtrarr: "\u2978",
            gtrdot: "\u22D7",
            gtreqless: "\u22DB",
            gtreqqless: "\u2A8C",
            gtrless: "\u2277",
            gtrsim: "\u2273",
            gvertneqq: "\u2269\uFE00",
            gvnE: "\u2269\uFE00",
            Hacek: "\u02C7",
            hairsp: "\u200A",
            half: "\xBD",
            hamilt: "\u210B",
            HARDcy: "\u042A",
            hardcy: "\u044A",
            harrcir: "\u2948",
            harr: "\u2194",
            hArr: "\u21D4",
            harrw: "\u21AD",
            Hat: "^",
            hbar: "\u210F",
            Hcirc: "\u0124",
            hcirc: "\u0125",
            hearts: "\u2665",
            heartsuit: "\u2665",
            hellip: "\u2026",
            hercon: "\u22B9",
            hfr: "\u{1D525}",
            Hfr: "\u210C",
            HilbertSpace: "\u210B",
            hksearow: "\u2925",
            hkswarow: "\u2926",
            hoarr: "\u21FF",
            homtht: "\u223B",
            hookleftarrow: "\u21A9",
            hookrightarrow: "\u21AA",
            hopf: "\u{1D559}",
            Hopf: "\u210D",
            horbar: "\u2015",
            HorizontalLine: "\u2500",
            hscr: "\u{1D4BD}",
            Hscr: "\u210B",
            hslash: "\u210F",
            Hstrok: "\u0126",
            hstrok: "\u0127",
            HumpDownHump: "\u224E",
            HumpEqual: "\u224F",
            hybull: "\u2043",
            hyphen: "\u2010",
            Iacute: "\xCD",
            iacute: "\xED",
            ic: "\u2063",
            Icirc: "\xCE",
            icirc: "\xEE",
            Icy: "\u0418",
            icy: "\u0438",
            Idot: "\u0130",
            IEcy: "\u0415",
            iecy: "\u0435",
            iexcl: "\xA1",
            iff: "\u21D4",
            ifr: "\u{1D526}",
            Ifr: "\u2111",
            Igrave: "\xCC",
            igrave: "\xEC",
            ii: "\u2148",
            iiiint: "\u2A0C",
            iiint: "\u222D",
            iinfin: "\u29DC",
            iiota: "\u2129",
            IJlig: "\u0132",
            ijlig: "\u0133",
            Imacr: "\u012A",
            imacr: "\u012B",
            image: "\u2111",
            ImaginaryI: "\u2148",
            imagline: "\u2110",
            imagpart: "\u2111",
            imath: "\u0131",
            Im: "\u2111",
            imof: "\u22B7",
            imped: "\u01B5",
            Implies: "\u21D2",
            incare: "\u2105",
            in: "\u2208",
            infin: "\u221E",
            infintie: "\u29DD",
            inodot: "\u0131",
            intcal: "\u22BA",
            int: "\u222B",
            Int: "\u222C",
            integers: "\u2124",
            Integral: "\u222B",
            intercal: "\u22BA",
            Intersection: "\u22C2",
            intlarhk: "\u2A17",
            intprod: "\u2A3C",
            InvisibleComma: "\u2063",
            InvisibleTimes: "\u2062",
            IOcy: "\u0401",
            iocy: "\u0451",
            Iogon: "\u012E",
            iogon: "\u012F",
            Iopf: "\u{1D540}",
            iopf: "\u{1D55A}",
            Iota: "\u0399",
            iota: "\u03B9",
            iprod: "\u2A3C",
            iquest: "\xBF",
            iscr: "\u{1D4BE}",
            Iscr: "\u2110",
            isin: "\u2208",
            isindot: "\u22F5",
            isinE: "\u22F9",
            isins: "\u22F4",
            isinsv: "\u22F3",
            isinv: "\u2208",
            it: "\u2062",
            Itilde: "\u0128",
            itilde: "\u0129",
            Iukcy: "\u0406",
            iukcy: "\u0456",
            Iuml: "\xCF",
            iuml: "\xEF",
            Jcirc: "\u0134",
            jcirc: "\u0135",
            Jcy: "\u0419",
            jcy: "\u0439",
            Jfr: "\u{1D50D}",
            jfr: "\u{1D527}",
            jmath: "\u0237",
            Jopf: "\u{1D541}",
            jopf: "\u{1D55B}",
            Jscr: "\u{1D4A5}",
            jscr: "\u{1D4BF}",
            Jsercy: "\u0408",
            jsercy: "\u0458",
            Jukcy: "\u0404",
            jukcy: "\u0454",
            Kappa: "\u039A",
            kappa: "\u03BA",
            kappav: "\u03F0",
            Kcedil: "\u0136",
            kcedil: "\u0137",
            Kcy: "\u041A",
            kcy: "\u043A",
            Kfr: "\u{1D50E}",
            kfr: "\u{1D528}",
            kgreen: "\u0138",
            KHcy: "\u0425",
            khcy: "\u0445",
            KJcy: "\u040C",
            kjcy: "\u045C",
            Kopf: "\u{1D542}",
            kopf: "\u{1D55C}",
            Kscr: "\u{1D4A6}",
            kscr: "\u{1D4C0}",
            lAarr: "\u21DA",
            Lacute: "\u0139",
            lacute: "\u013A",
            laemptyv: "\u29B4",
            lagran: "\u2112",
            Lambda: "\u039B",
            lambda: "\u03BB",
            lang: "\u27E8",
            Lang: "\u27EA",
            langd: "\u2991",
            langle: "\u27E8",
            lap: "\u2A85",
            Laplacetrf: "\u2112",
            laquo: "\xAB",
            larrb: "\u21E4",
            larrbfs: "\u291F",
            larr: "\u2190",
            Larr: "\u219E",
            lArr: "\u21D0",
            larrfs: "\u291D",
            larrhk: "\u21A9",
            larrlp: "\u21AB",
            larrpl: "\u2939",
            larrsim: "\u2973",
            larrtl: "\u21A2",
            latail: "\u2919",
            lAtail: "\u291B",
            lat: "\u2AAB",
            late: "\u2AAD",
            lates: "\u2AAD\uFE00",
            lbarr: "\u290C",
            lBarr: "\u290E",
            lbbrk: "\u2772",
            lbrace: "{",
            lbrack: "[",
            lbrke: "\u298B",
            lbrksld: "\u298F",
            lbrkslu: "\u298D",
            Lcaron: "\u013D",
            lcaron: "\u013E",
            Lcedil: "\u013B",
            lcedil: "\u013C",
            lceil: "\u2308",
            lcub: "{",
            Lcy: "\u041B",
            lcy: "\u043B",
            ldca: "\u2936",
            ldquo: "\u201C",
            ldquor: "\u201E",
            ldrdhar: "\u2967",
            ldrushar: "\u294B",
            ldsh: "\u21B2",
            le: "\u2264",
            lE: "\u2266",
            LeftAngleBracket: "\u27E8",
            LeftArrowBar: "\u21E4",
            leftarrow: "\u2190",
            LeftArrow: "\u2190",
            Leftarrow: "\u21D0",
            LeftArrowRightArrow: "\u21C6",
            leftarrowtail: "\u21A2",
            LeftCeiling: "\u2308",
            LeftDoubleBracket: "\u27E6",
            LeftDownTeeVector: "\u2961",
            LeftDownVectorBar: "\u2959",
            LeftDownVector: "\u21C3",
            LeftFloor: "\u230A",
            leftharpoondown: "\u21BD",
            leftharpoonup: "\u21BC",
            leftleftarrows: "\u21C7",
            leftrightarrow: "\u2194",
            LeftRightArrow: "\u2194",
            Leftrightarrow: "\u21D4",
            leftrightarrows: "\u21C6",
            leftrightharpoons: "\u21CB",
            leftrightsquigarrow: "\u21AD",
            LeftRightVector: "\u294E",
            LeftTeeArrow: "\u21A4",
            LeftTee: "\u22A3",
            LeftTeeVector: "\u295A",
            leftthreetimes: "\u22CB",
            LeftTriangleBar: "\u29CF",
            LeftTriangle: "\u22B2",
            LeftTriangleEqual: "\u22B4",
            LeftUpDownVector: "\u2951",
            LeftUpTeeVector: "\u2960",
            LeftUpVectorBar: "\u2958",
            LeftUpVector: "\u21BF",
            LeftVectorBar: "\u2952",
            LeftVector: "\u21BC",
            lEg: "\u2A8B",
            leg: "\u22DA",
            leq: "\u2264",
            leqq: "\u2266",
            leqslant: "\u2A7D",
            lescc: "\u2AA8",
            les: "\u2A7D",
            lesdot: "\u2A7F",
            lesdoto: "\u2A81",
            lesdotor: "\u2A83",
            lesg: "\u22DA\uFE00",
            lesges: "\u2A93",
            lessapprox: "\u2A85",
            lessdot: "\u22D6",
            lesseqgtr: "\u22DA",
            lesseqqgtr: "\u2A8B",
            LessEqualGreater: "\u22DA",
            LessFullEqual: "\u2266",
            LessGreater: "\u2276",
            lessgtr: "\u2276",
            LessLess: "\u2AA1",
            lesssim: "\u2272",
            LessSlantEqual: "\u2A7D",
            LessTilde: "\u2272",
            lfisht: "\u297C",
            lfloor: "\u230A",
            Lfr: "\u{1D50F}",
            lfr: "\u{1D529}",
            lg: "\u2276",
            lgE: "\u2A91",
            lHar: "\u2962",
            lhard: "\u21BD",
            lharu: "\u21BC",
            lharul: "\u296A",
            lhblk: "\u2584",
            LJcy: "\u0409",
            ljcy: "\u0459",
            llarr: "\u21C7",
            ll: "\u226A",
            Ll: "\u22D8",
            llcorner: "\u231E",
            Lleftarrow: "\u21DA",
            llhard: "\u296B",
            lltri: "\u25FA",
            Lmidot: "\u013F",
            lmidot: "\u0140",
            lmoustache: "\u23B0",
            lmoust: "\u23B0",
            lnap: "\u2A89",
            lnapprox: "\u2A89",
            lne: "\u2A87",
            lnE: "\u2268",
            lneq: "\u2A87",
            lneqq: "\u2268",
            lnsim: "\u22E6",
            loang: "\u27EC",
            loarr: "\u21FD",
            lobrk: "\u27E6",
            longleftarrow: "\u27F5",
            LongLeftArrow: "\u27F5",
            Longleftarrow: "\u27F8",
            longleftrightarrow: "\u27F7",
            LongLeftRightArrow: "\u27F7",
            Longleftrightarrow: "\u27FA",
            longmapsto: "\u27FC",
            longrightarrow: "\u27F6",
            LongRightArrow: "\u27F6",
            Longrightarrow: "\u27F9",
            looparrowleft: "\u21AB",
            looparrowright: "\u21AC",
            lopar: "\u2985",
            Lopf: "\u{1D543}",
            lopf: "\u{1D55D}",
            loplus: "\u2A2D",
            lotimes: "\u2A34",
            lowast: "\u2217",
            lowbar: "_",
            LowerLeftArrow: "\u2199",
            LowerRightArrow: "\u2198",
            loz: "\u25CA",
            lozenge: "\u25CA",
            lozf: "\u29EB",
            lpar: "(",
            lparlt: "\u2993",
            lrarr: "\u21C6",
            lrcorner: "\u231F",
            lrhar: "\u21CB",
            lrhard: "\u296D",
            lrm: "\u200E",
            lrtri: "\u22BF",
            lsaquo: "\u2039",
            lscr: "\u{1D4C1}",
            Lscr: "\u2112",
            lsh: "\u21B0",
            Lsh: "\u21B0",
            lsim: "\u2272",
            lsime: "\u2A8D",
            lsimg: "\u2A8F",
            lsqb: "[",
            lsquo: "\u2018",
            lsquor: "\u201A",
            Lstrok: "\u0141",
            lstrok: "\u0142",
            ltcc: "\u2AA6",
            ltcir: "\u2A79",
            lt: "<",
            LT: "<",
            Lt: "\u226A",
            ltdot: "\u22D6",
            lthree: "\u22CB",
            ltimes: "\u22C9",
            ltlarr: "\u2976",
            ltquest: "\u2A7B",
            ltri: "\u25C3",
            ltrie: "\u22B4",
            ltrif: "\u25C2",
            ltrPar: "\u2996",
            lurdshar: "\u294A",
            luruhar: "\u2966",
            lvertneqq: "\u2268\uFE00",
            lvnE: "\u2268\uFE00",
            macr: "\xAF",
            male: "\u2642",
            malt: "\u2720",
            maltese: "\u2720",
            Map: "\u2905",
            map: "\u21A6",
            mapsto: "\u21A6",
            mapstodown: "\u21A7",
            mapstoleft: "\u21A4",
            mapstoup: "\u21A5",
            marker: "\u25AE",
            mcomma: "\u2A29",
            Mcy: "\u041C",
            mcy: "\u043C",
            mdash: "\u2014",
            mDDot: "\u223A",
            measuredangle: "\u2221",
            MediumSpace: "\u205F",
            Mellintrf: "\u2133",
            Mfr: "\u{1D510}",
            mfr: "\u{1D52A}",
            mho: "\u2127",
            micro: "\xB5",
            midast: "*",
            midcir: "\u2AF0",
            mid: "\u2223",
            middot: "\xB7",
            minusb: "\u229F",
            minus: "\u2212",
            minusd: "\u2238",
            minusdu: "\u2A2A",
            MinusPlus: "\u2213",
            mlcp: "\u2ADB",
            mldr: "\u2026",
            mnplus: "\u2213",
            models: "\u22A7",
            Mopf: "\u{1D544}",
            mopf: "\u{1D55E}",
            mp: "\u2213",
            mscr: "\u{1D4C2}",
            Mscr: "\u2133",
            mstpos: "\u223E",
            Mu: "\u039C",
            mu: "\u03BC",
            multimap: "\u22B8",
            mumap: "\u22B8",
            nabla: "\u2207",
            Nacute: "\u0143",
            nacute: "\u0144",
            nang: "\u2220\u20D2",
            nap: "\u2249",
            napE: "\u2A70\u0338",
            napid: "\u224B\u0338",
            napos: "\u0149",
            napprox: "\u2249",
            natural: "\u266E",
            naturals: "\u2115",
            natur: "\u266E",
            nbsp: "\xA0",
            nbump: "\u224E\u0338",
            nbumpe: "\u224F\u0338",
            ncap: "\u2A43",
            Ncaron: "\u0147",
            ncaron: "\u0148",
            Ncedil: "\u0145",
            ncedil: "\u0146",
            ncong: "\u2247",
            ncongdot: "\u2A6D\u0338",
            ncup: "\u2A42",
            Ncy: "\u041D",
            ncy: "\u043D",
            ndash: "\u2013",
            nearhk: "\u2924",
            nearr: "\u2197",
            neArr: "\u21D7",
            nearrow: "\u2197",
            ne: "\u2260",
            nedot: "\u2250\u0338",
            NegativeMediumSpace: "\u200B",
            NegativeThickSpace: "\u200B",
            NegativeThinSpace: "\u200B",
            NegativeVeryThinSpace: "\u200B",
            nequiv: "\u2262",
            nesear: "\u2928",
            nesim: "\u2242\u0338",
            NestedGreaterGreater: "\u226B",
            NestedLessLess: "\u226A",
            NewLine: `
`,
            nexist: "\u2204",
            nexists: "\u2204",
            Nfr: "\u{1D511}",
            nfr: "\u{1D52B}",
            ngE: "\u2267\u0338",
            nge: "\u2271",
            ngeq: "\u2271",
            ngeqq: "\u2267\u0338",
            ngeqslant: "\u2A7E\u0338",
            nges: "\u2A7E\u0338",
            nGg: "\u22D9\u0338",
            ngsim: "\u2275",
            nGt: "\u226B\u20D2",
            ngt: "\u226F",
            ngtr: "\u226F",
            nGtv: "\u226B\u0338",
            nharr: "\u21AE",
            nhArr: "\u21CE",
            nhpar: "\u2AF2",
            ni: "\u220B",
            nis: "\u22FC",
            nisd: "\u22FA",
            niv: "\u220B",
            NJcy: "\u040A",
            njcy: "\u045A",
            nlarr: "\u219A",
            nlArr: "\u21CD",
            nldr: "\u2025",
            nlE: "\u2266\u0338",
            nle: "\u2270",
            nleftarrow: "\u219A",
            nLeftarrow: "\u21CD",
            nleftrightarrow: "\u21AE",
            nLeftrightarrow: "\u21CE",
            nleq: "\u2270",
            nleqq: "\u2266\u0338",
            nleqslant: "\u2A7D\u0338",
            nles: "\u2A7D\u0338",
            nless: "\u226E",
            nLl: "\u22D8\u0338",
            nlsim: "\u2274",
            nLt: "\u226A\u20D2",
            nlt: "\u226E",
            nltri: "\u22EA",
            nltrie: "\u22EC",
            nLtv: "\u226A\u0338",
            nmid: "\u2224",
            NoBreak: "\u2060",
            NonBreakingSpace: "\xA0",
            nopf: "\u{1D55F}",
            Nopf: "\u2115",
            Not: "\u2AEC",
            not: "\xAC",
            NotCongruent: "\u2262",
            NotCupCap: "\u226D",
            NotDoubleVerticalBar: "\u2226",
            NotElement: "\u2209",
            NotEqual: "\u2260",
            NotEqualTilde: "\u2242\u0338",
            NotExists: "\u2204",
            NotGreater: "\u226F",
            NotGreaterEqual: "\u2271",
            NotGreaterFullEqual: "\u2267\u0338",
            NotGreaterGreater: "\u226B\u0338",
            NotGreaterLess: "\u2279",
            NotGreaterSlantEqual: "\u2A7E\u0338",
            NotGreaterTilde: "\u2275",
            NotHumpDownHump: "\u224E\u0338",
            NotHumpEqual: "\u224F\u0338",
            notin: "\u2209",
            notindot: "\u22F5\u0338",
            notinE: "\u22F9\u0338",
            notinva: "\u2209",
            notinvb: "\u22F7",
            notinvc: "\u22F6",
            NotLeftTriangleBar: "\u29CF\u0338",
            NotLeftTriangle: "\u22EA",
            NotLeftTriangleEqual: "\u22EC",
            NotLess: "\u226E",
            NotLessEqual: "\u2270",
            NotLessGreater: "\u2278",
            NotLessLess: "\u226A\u0338",
            NotLessSlantEqual: "\u2A7D\u0338",
            NotLessTilde: "\u2274",
            NotNestedGreaterGreater: "\u2AA2\u0338",
            NotNestedLessLess: "\u2AA1\u0338",
            notni: "\u220C",
            notniva: "\u220C",
            notnivb: "\u22FE",
            notnivc: "\u22FD",
            NotPrecedes: "\u2280",
            NotPrecedesEqual: "\u2AAF\u0338",
            NotPrecedesSlantEqual: "\u22E0",
            NotReverseElement: "\u220C",
            NotRightTriangleBar: "\u29D0\u0338",
            NotRightTriangle: "\u22EB",
            NotRightTriangleEqual: "\u22ED",
            NotSquareSubset: "\u228F\u0338",
            NotSquareSubsetEqual: "\u22E2",
            NotSquareSuperset: "\u2290\u0338",
            NotSquareSupersetEqual: "\u22E3",
            NotSubset: "\u2282\u20D2",
            NotSubsetEqual: "\u2288",
            NotSucceeds: "\u2281",
            NotSucceedsEqual: "\u2AB0\u0338",
            NotSucceedsSlantEqual: "\u22E1",
            NotSucceedsTilde: "\u227F\u0338",
            NotSuperset: "\u2283\u20D2",
            NotSupersetEqual: "\u2289",
            NotTilde: "\u2241",
            NotTildeEqual: "\u2244",
            NotTildeFullEqual: "\u2247",
            NotTildeTilde: "\u2249",
            NotVerticalBar: "\u2224",
            nparallel: "\u2226",
            npar: "\u2226",
            nparsl: "\u2AFD\u20E5",
            npart: "\u2202\u0338",
            npolint: "\u2A14",
            npr: "\u2280",
            nprcue: "\u22E0",
            nprec: "\u2280",
            npreceq: "\u2AAF\u0338",
            npre: "\u2AAF\u0338",
            nrarrc: "\u2933\u0338",
            nrarr: "\u219B",
            nrArr: "\u21CF",
            nrarrw: "\u219D\u0338",
            nrightarrow: "\u219B",
            nRightarrow: "\u21CF",
            nrtri: "\u22EB",
            nrtrie: "\u22ED",
            nsc: "\u2281",
            nsccue: "\u22E1",
            nsce: "\u2AB0\u0338",
            Nscr: "\u{1D4A9}",
            nscr: "\u{1D4C3}",
            nshortmid: "\u2224",
            nshortparallel: "\u2226",
            nsim: "\u2241",
            nsime: "\u2244",
            nsimeq: "\u2244",
            nsmid: "\u2224",
            nspar: "\u2226",
            nsqsube: "\u22E2",
            nsqsupe: "\u22E3",
            nsub: "\u2284",
            nsubE: "\u2AC5\u0338",
            nsube: "\u2288",
            nsubset: "\u2282\u20D2",
            nsubseteq: "\u2288",
            nsubseteqq: "\u2AC5\u0338",
            nsucc: "\u2281",
            nsucceq: "\u2AB0\u0338",
            nsup: "\u2285",
            nsupE: "\u2AC6\u0338",
            nsupe: "\u2289",
            nsupset: "\u2283\u20D2",
            nsupseteq: "\u2289",
            nsupseteqq: "\u2AC6\u0338",
            ntgl: "\u2279",
            Ntilde: "\xD1",
            ntilde: "\xF1",
            ntlg: "\u2278",
            ntriangleleft: "\u22EA",
            ntrianglelefteq: "\u22EC",
            ntriangleright: "\u22EB",
            ntrianglerighteq: "\u22ED",
            Nu: "\u039D",
            nu: "\u03BD",
            num: "#",
            numero: "\u2116",
            numsp: "\u2007",
            nvap: "\u224D\u20D2",
            nvdash: "\u22AC",
            nvDash: "\u22AD",
            nVdash: "\u22AE",
            nVDash: "\u22AF",
            nvge: "\u2265\u20D2",
            nvgt: ">\u20D2",
            nvHarr: "\u2904",
            nvinfin: "\u29DE",
            nvlArr: "\u2902",
            nvle: "\u2264\u20D2",
            nvlt: "<\u20D2",
            nvltrie: "\u22B4\u20D2",
            nvrArr: "\u2903",
            nvrtrie: "\u22B5\u20D2",
            nvsim: "\u223C\u20D2",
            nwarhk: "\u2923",
            nwarr: "\u2196",
            nwArr: "\u21D6",
            nwarrow: "\u2196",
            nwnear: "\u2927",
            Oacute: "\xD3",
            oacute: "\xF3",
            oast: "\u229B",
            Ocirc: "\xD4",
            ocirc: "\xF4",
            ocir: "\u229A",
            Ocy: "\u041E",
            ocy: "\u043E",
            odash: "\u229D",
            Odblac: "\u0150",
            odblac: "\u0151",
            odiv: "\u2A38",
            odot: "\u2299",
            odsold: "\u29BC",
            OElig: "\u0152",
            oelig: "\u0153",
            ofcir: "\u29BF",
            Ofr: "\u{1D512}",
            ofr: "\u{1D52C}",
            ogon: "\u02DB",
            Ograve: "\xD2",
            ograve: "\xF2",
            ogt: "\u29C1",
            ohbar: "\u29B5",
            ohm: "\u03A9",
            oint: "\u222E",
            olarr: "\u21BA",
            olcir: "\u29BE",
            olcross: "\u29BB",
            oline: "\u203E",
            olt: "\u29C0",
            Omacr: "\u014C",
            omacr: "\u014D",
            Omega: "\u03A9",
            omega: "\u03C9",
            Omicron: "\u039F",
            omicron: "\u03BF",
            omid: "\u29B6",
            ominus: "\u2296",
            Oopf: "\u{1D546}",
            oopf: "\u{1D560}",
            opar: "\u29B7",
            OpenCurlyDoubleQuote: "\u201C",
            OpenCurlyQuote: "\u2018",
            operp: "\u29B9",
            oplus: "\u2295",
            orarr: "\u21BB",
            Or: "\u2A54",
            or: "\u2228",
            ord: "\u2A5D",
            order: "\u2134",
            orderof: "\u2134",
            ordf: "\xAA",
            ordm: "\xBA",
            origof: "\u22B6",
            oror: "\u2A56",
            orslope: "\u2A57",
            orv: "\u2A5B",
            oS: "\u24C8",
            Oscr: "\u{1D4AA}",
            oscr: "\u2134",
            Oslash: "\xD8",
            oslash: "\xF8",
            osol: "\u2298",
            Otilde: "\xD5",
            otilde: "\xF5",
            otimesas: "\u2A36",
            Otimes: "\u2A37",
            otimes: "\u2297",
            Ouml: "\xD6",
            ouml: "\xF6",
            ovbar: "\u233D",
            OverBar: "\u203E",
            OverBrace: "\u23DE",
            OverBracket: "\u23B4",
            OverParenthesis: "\u23DC",
            para: "\xB6",
            parallel: "\u2225",
            par: "\u2225",
            parsim: "\u2AF3",
            parsl: "\u2AFD",
            part: "\u2202",
            PartialD: "\u2202",
            Pcy: "\u041F",
            pcy: "\u043F",
            percnt: "%",
            period: ".",
            permil: "\u2030",
            perp: "\u22A5",
            pertenk: "\u2031",
            Pfr: "\u{1D513}",
            pfr: "\u{1D52D}",
            Phi: "\u03A6",
            phi: "\u03C6",
            phiv: "\u03D5",
            phmmat: "\u2133",
            phone: "\u260E",
            Pi: "\u03A0",
            pi: "\u03C0",
            pitchfork: "\u22D4",
            piv: "\u03D6",
            planck: "\u210F",
            planckh: "\u210E",
            plankv: "\u210F",
            plusacir: "\u2A23",
            plusb: "\u229E",
            pluscir: "\u2A22",
            plus: "+",
            plusdo: "\u2214",
            plusdu: "\u2A25",
            pluse: "\u2A72",
            PlusMinus: "\xB1",
            plusmn: "\xB1",
            plussim: "\u2A26",
            plustwo: "\u2A27",
            pm: "\xB1",
            Poincareplane: "\u210C",
            pointint: "\u2A15",
            popf: "\u{1D561}",
            Popf: "\u2119",
            pound: "\xA3",
            prap: "\u2AB7",
            Pr: "\u2ABB",
            pr: "\u227A",
            prcue: "\u227C",
            precapprox: "\u2AB7",
            prec: "\u227A",
            preccurlyeq: "\u227C",
            Precedes: "\u227A",
            PrecedesEqual: "\u2AAF",
            PrecedesSlantEqual: "\u227C",
            PrecedesTilde: "\u227E",
            preceq: "\u2AAF",
            precnapprox: "\u2AB9",
            precneqq: "\u2AB5",
            precnsim: "\u22E8",
            pre: "\u2AAF",
            prE: "\u2AB3",
            precsim: "\u227E",
            prime: "\u2032",
            Prime: "\u2033",
            primes: "\u2119",
            prnap: "\u2AB9",
            prnE: "\u2AB5",
            prnsim: "\u22E8",
            prod: "\u220F",
            Product: "\u220F",
            profalar: "\u232E",
            profline: "\u2312",
            profsurf: "\u2313",
            prop: "\u221D",
            Proportional: "\u221D",
            Proportion: "\u2237",
            propto: "\u221D",
            prsim: "\u227E",
            prurel: "\u22B0",
            Pscr: "\u{1D4AB}",
            pscr: "\u{1D4C5}",
            Psi: "\u03A8",
            psi: "\u03C8",
            puncsp: "\u2008",
            Qfr: "\u{1D514}",
            qfr: "\u{1D52E}",
            qint: "\u2A0C",
            qopf: "\u{1D562}",
            Qopf: "\u211A",
            qprime: "\u2057",
            Qscr: "\u{1D4AC}",
            qscr: "\u{1D4C6}",
            quaternions: "\u210D",
            quatint: "\u2A16",
            quest: "?",
            questeq: "\u225F",
            quot: '"',
            QUOT: '"',
            rAarr: "\u21DB",
            race: "\u223D\u0331",
            Racute: "\u0154",
            racute: "\u0155",
            radic: "\u221A",
            raemptyv: "\u29B3",
            rang: "\u27E9",
            Rang: "\u27EB",
            rangd: "\u2992",
            range: "\u29A5",
            rangle: "\u27E9",
            raquo: "\xBB",
            rarrap: "\u2975",
            rarrb: "\u21E5",
            rarrbfs: "\u2920",
            rarrc: "\u2933",
            rarr: "\u2192",
            Rarr: "\u21A0",
            rArr: "\u21D2",
            rarrfs: "\u291E",
            rarrhk: "\u21AA",
            rarrlp: "\u21AC",
            rarrpl: "\u2945",
            rarrsim: "\u2974",
            Rarrtl: "\u2916",
            rarrtl: "\u21A3",
            rarrw: "\u219D",
            ratail: "\u291A",
            rAtail: "\u291C",
            ratio: "\u2236",
            rationals: "\u211A",
            rbarr: "\u290D",
            rBarr: "\u290F",
            RBarr: "\u2910",
            rbbrk: "\u2773",
            rbrace: "}",
            rbrack: "]",
            rbrke: "\u298C",
            rbrksld: "\u298E",
            rbrkslu: "\u2990",
            Rcaron: "\u0158",
            rcaron: "\u0159",
            Rcedil: "\u0156",
            rcedil: "\u0157",
            rceil: "\u2309",
            rcub: "}",
            Rcy: "\u0420",
            rcy: "\u0440",
            rdca: "\u2937",
            rdldhar: "\u2969",
            rdquo: "\u201D",
            rdquor: "\u201D",
            rdsh: "\u21B3",
            real: "\u211C",
            realine: "\u211B",
            realpart: "\u211C",
            reals: "\u211D",
            Re: "\u211C",
            rect: "\u25AD",
            reg: "\xAE",
            REG: "\xAE",
            ReverseElement: "\u220B",
            ReverseEquilibrium: "\u21CB",
            ReverseUpEquilibrium: "\u296F",
            rfisht: "\u297D",
            rfloor: "\u230B",
            rfr: "\u{1D52F}",
            Rfr: "\u211C",
            rHar: "\u2964",
            rhard: "\u21C1",
            rharu: "\u21C0",
            rharul: "\u296C",
            Rho: "\u03A1",
            rho: "\u03C1",
            rhov: "\u03F1",
            RightAngleBracket: "\u27E9",
            RightArrowBar: "\u21E5",
            rightarrow: "\u2192",
            RightArrow: "\u2192",
            Rightarrow: "\u21D2",
            RightArrowLeftArrow: "\u21C4",
            rightarrowtail: "\u21A3",
            RightCeiling: "\u2309",
            RightDoubleBracket: "\u27E7",
            RightDownTeeVector: "\u295D",
            RightDownVectorBar: "\u2955",
            RightDownVector: "\u21C2",
            RightFloor: "\u230B",
            rightharpoondown: "\u21C1",
            rightharpoonup: "\u21C0",
            rightleftarrows: "\u21C4",
            rightleftharpoons: "\u21CC",
            rightrightarrows: "\u21C9",
            rightsquigarrow: "\u219D",
            RightTeeArrow: "\u21A6",
            RightTee: "\u22A2",
            RightTeeVector: "\u295B",
            rightthreetimes: "\u22CC",
            RightTriangleBar: "\u29D0",
            RightTriangle: "\u22B3",
            RightTriangleEqual: "\u22B5",
            RightUpDownVector: "\u294F",
            RightUpTeeVector: "\u295C",
            RightUpVectorBar: "\u2954",
            RightUpVector: "\u21BE",
            RightVectorBar: "\u2953",
            RightVector: "\u21C0",
            ring: "\u02DA",
            risingdotseq: "\u2253",
            rlarr: "\u21C4",
            rlhar: "\u21CC",
            rlm: "\u200F",
            rmoustache: "\u23B1",
            rmoust: "\u23B1",
            rnmid: "\u2AEE",
            roang: "\u27ED",
            roarr: "\u21FE",
            robrk: "\u27E7",
            ropar: "\u2986",
            ropf: "\u{1D563}",
            Ropf: "\u211D",
            roplus: "\u2A2E",
            rotimes: "\u2A35",
            RoundImplies: "\u2970",
            rpar: ")",
            rpargt: "\u2994",
            rppolint: "\u2A12",
            rrarr: "\u21C9",
            Rrightarrow: "\u21DB",
            rsaquo: "\u203A",
            rscr: "\u{1D4C7}",
            Rscr: "\u211B",
            rsh: "\u21B1",
            Rsh: "\u21B1",
            rsqb: "]",
            rsquo: "\u2019",
            rsquor: "\u2019",
            rthree: "\u22CC",
            rtimes: "\u22CA",
            rtri: "\u25B9",
            rtrie: "\u22B5",
            rtrif: "\u25B8",
            rtriltri: "\u29CE",
            RuleDelayed: "\u29F4",
            ruluhar: "\u2968",
            rx: "\u211E",
            Sacute: "\u015A",
            sacute: "\u015B",
            sbquo: "\u201A",
            scap: "\u2AB8",
            Scaron: "\u0160",
            scaron: "\u0161",
            Sc: "\u2ABC",
            sc: "\u227B",
            sccue: "\u227D",
            sce: "\u2AB0",
            scE: "\u2AB4",
            Scedil: "\u015E",
            scedil: "\u015F",
            Scirc: "\u015C",
            scirc: "\u015D",
            scnap: "\u2ABA",
            scnE: "\u2AB6",
            scnsim: "\u22E9",
            scpolint: "\u2A13",
            scsim: "\u227F",
            Scy: "\u0421",
            scy: "\u0441",
            sdotb: "\u22A1",
            sdot: "\u22C5",
            sdote: "\u2A66",
            searhk: "\u2925",
            searr: "\u2198",
            seArr: "\u21D8",
            searrow: "\u2198",
            sect: "\xA7",
            semi: ";",
            seswar: "\u2929",
            setminus: "\u2216",
            setmn: "\u2216",
            sext: "\u2736",
            Sfr: "\u{1D516}",
            sfr: "\u{1D530}",
            sfrown: "\u2322",
            sharp: "\u266F",
            SHCHcy: "\u0429",
            shchcy: "\u0449",
            SHcy: "\u0428",
            shcy: "\u0448",
            ShortDownArrow: "\u2193",
            ShortLeftArrow: "\u2190",
            shortmid: "\u2223",
            shortparallel: "\u2225",
            ShortRightArrow: "\u2192",
            ShortUpArrow: "\u2191",
            shy: "\xAD",
            Sigma: "\u03A3",
            sigma: "\u03C3",
            sigmaf: "\u03C2",
            sigmav: "\u03C2",
            sim: "\u223C",
            simdot: "\u2A6A",
            sime: "\u2243",
            simeq: "\u2243",
            simg: "\u2A9E",
            simgE: "\u2AA0",
            siml: "\u2A9D",
            simlE: "\u2A9F",
            simne: "\u2246",
            simplus: "\u2A24",
            simrarr: "\u2972",
            slarr: "\u2190",
            SmallCircle: "\u2218",
            smallsetminus: "\u2216",
            smashp: "\u2A33",
            smeparsl: "\u29E4",
            smid: "\u2223",
            smile: "\u2323",
            smt: "\u2AAA",
            smte: "\u2AAC",
            smtes: "\u2AAC\uFE00",
            SOFTcy: "\u042C",
            softcy: "\u044C",
            solbar: "\u233F",
            solb: "\u29C4",
            sol: "/",
            Sopf: "\u{1D54A}",
            sopf: "\u{1D564}",
            spades: "\u2660",
            spadesuit: "\u2660",
            spar: "\u2225",
            sqcap: "\u2293",
            sqcaps: "\u2293\uFE00",
            sqcup: "\u2294",
            sqcups: "\u2294\uFE00",
            Sqrt: "\u221A",
            sqsub: "\u228F",
            sqsube: "\u2291",
            sqsubset: "\u228F",
            sqsubseteq: "\u2291",
            sqsup: "\u2290",
            sqsupe: "\u2292",
            sqsupset: "\u2290",
            sqsupseteq: "\u2292",
            square: "\u25A1",
            Square: "\u25A1",
            SquareIntersection: "\u2293",
            SquareSubset: "\u228F",
            SquareSubsetEqual: "\u2291",
            SquareSuperset: "\u2290",
            SquareSupersetEqual: "\u2292",
            SquareUnion: "\u2294",
            squarf: "\u25AA",
            squ: "\u25A1",
            squf: "\u25AA",
            srarr: "\u2192",
            Sscr: "\u{1D4AE}",
            sscr: "\u{1D4C8}",
            ssetmn: "\u2216",
            ssmile: "\u2323",
            sstarf: "\u22C6",
            Star: "\u22C6",
            star: "\u2606",
            starf: "\u2605",
            straightepsilon: "\u03F5",
            straightphi: "\u03D5",
            strns: "\xAF",
            sub: "\u2282",
            Sub: "\u22D0",
            subdot: "\u2ABD",
            subE: "\u2AC5",
            sube: "\u2286",
            subedot: "\u2AC3",
            submult: "\u2AC1",
            subnE: "\u2ACB",
            subne: "\u228A",
            subplus: "\u2ABF",
            subrarr: "\u2979",
            subset: "\u2282",
            Subset: "\u22D0",
            subseteq: "\u2286",
            subseteqq: "\u2AC5",
            SubsetEqual: "\u2286",
            subsetneq: "\u228A",
            subsetneqq: "\u2ACB",
            subsim: "\u2AC7",
            subsub: "\u2AD5",
            subsup: "\u2AD3",
            succapprox: "\u2AB8",
            succ: "\u227B",
            succcurlyeq: "\u227D",
            Succeeds: "\u227B",
            SucceedsEqual: "\u2AB0",
            SucceedsSlantEqual: "\u227D",
            SucceedsTilde: "\u227F",
            succeq: "\u2AB0",
            succnapprox: "\u2ABA",
            succneqq: "\u2AB6",
            succnsim: "\u22E9",
            succsim: "\u227F",
            SuchThat: "\u220B",
            sum: "\u2211",
            Sum: "\u2211",
            sung: "\u266A",
            sup1: "\xB9",
            sup2: "\xB2",
            sup3: "\xB3",
            sup: "\u2283",
            Sup: "\u22D1",
            supdot: "\u2ABE",
            supdsub: "\u2AD8",
            supE: "\u2AC6",
            supe: "\u2287",
            supedot: "\u2AC4",
            Superset: "\u2283",
            SupersetEqual: "\u2287",
            suphsol: "\u27C9",
            suphsub: "\u2AD7",
            suplarr: "\u297B",
            supmult: "\u2AC2",
            supnE: "\u2ACC",
            supne: "\u228B",
            supplus: "\u2AC0",
            supset: "\u2283",
            Supset: "\u22D1",
            supseteq: "\u2287",
            supseteqq: "\u2AC6",
            supsetneq: "\u228B",
            supsetneqq: "\u2ACC",
            supsim: "\u2AC8",
            supsub: "\u2AD4",
            supsup: "\u2AD6",
            swarhk: "\u2926",
            swarr: "\u2199",
            swArr: "\u21D9",
            swarrow: "\u2199",
            swnwar: "\u292A",
            szlig: "\xDF",
            Tab: "	",
            target: "\u2316",
            Tau: "\u03A4",
            tau: "\u03C4",
            tbrk: "\u23B4",
            Tcaron: "\u0164",
            tcaron: "\u0165",
            Tcedil: "\u0162",
            tcedil: "\u0163",
            Tcy: "\u0422",
            tcy: "\u0442",
            tdot: "\u20DB",
            telrec: "\u2315",
            Tfr: "\u{1D517}",
            tfr: "\u{1D531}",
            there4: "\u2234",
            therefore: "\u2234",
            Therefore: "\u2234",
            Theta: "\u0398",
            theta: "\u03B8",
            thetasym: "\u03D1",
            thetav: "\u03D1",
            thickapprox: "\u2248",
            thicksim: "\u223C",
            ThickSpace: "\u205F\u200A",
            ThinSpace: "\u2009",
            thinsp: "\u2009",
            thkap: "\u2248",
            thksim: "\u223C",
            THORN: "\xDE",
            thorn: "\xFE",
            tilde: "\u02DC",
            Tilde: "\u223C",
            TildeEqual: "\u2243",
            TildeFullEqual: "\u2245",
            TildeTilde: "\u2248",
            timesbar: "\u2A31",
            timesb: "\u22A0",
            times: "\xD7",
            timesd: "\u2A30",
            tint: "\u222D",
            toea: "\u2928",
            topbot: "\u2336",
            topcir: "\u2AF1",
            top: "\u22A4",
            Topf: "\u{1D54B}",
            topf: "\u{1D565}",
            topfork: "\u2ADA",
            tosa: "\u2929",
            tprime: "\u2034",
            trade: "\u2122",
            TRADE: "\u2122",
            triangle: "\u25B5",
            triangledown: "\u25BF",
            triangleleft: "\u25C3",
            trianglelefteq: "\u22B4",
            triangleq: "\u225C",
            triangleright: "\u25B9",
            trianglerighteq: "\u22B5",
            tridot: "\u25EC",
            trie: "\u225C",
            triminus: "\u2A3A",
            TripleDot: "\u20DB",
            triplus: "\u2A39",
            trisb: "\u29CD",
            tritime: "\u2A3B",
            trpezium: "\u23E2",
            Tscr: "\u{1D4AF}",
            tscr: "\u{1D4C9}",
            TScy: "\u0426",
            tscy: "\u0446",
            TSHcy: "\u040B",
            tshcy: "\u045B",
            Tstrok: "\u0166",
            tstrok: "\u0167",
            twixt: "\u226C",
            twoheadleftarrow: "\u219E",
            twoheadrightarrow: "\u21A0",
            Uacute: "\xDA",
            uacute: "\xFA",
            uarr: "\u2191",
            Uarr: "\u219F",
            uArr: "\u21D1",
            Uarrocir: "\u2949",
            Ubrcy: "\u040E",
            ubrcy: "\u045E",
            Ubreve: "\u016C",
            ubreve: "\u016D",
            Ucirc: "\xDB",
            ucirc: "\xFB",
            Ucy: "\u0423",
            ucy: "\u0443",
            udarr: "\u21C5",
            Udblac: "\u0170",
            udblac: "\u0171",
            udhar: "\u296E",
            ufisht: "\u297E",
            Ufr: "\u{1D518}",
            ufr: "\u{1D532}",
            Ugrave: "\xD9",
            ugrave: "\xF9",
            uHar: "\u2963",
            uharl: "\u21BF",
            uharr: "\u21BE",
            uhblk: "\u2580",
            ulcorn: "\u231C",
            ulcorner: "\u231C",
            ulcrop: "\u230F",
            ultri: "\u25F8",
            Umacr: "\u016A",
            umacr: "\u016B",
            uml: "\xA8",
            UnderBar: "_",
            UnderBrace: "\u23DF",
            UnderBracket: "\u23B5",
            UnderParenthesis: "\u23DD",
            Union: "\u22C3",
            UnionPlus: "\u228E",
            Uogon: "\u0172",
            uogon: "\u0173",
            Uopf: "\u{1D54C}",
            uopf: "\u{1D566}",
            UpArrowBar: "\u2912",
            uparrow: "\u2191",
            UpArrow: "\u2191",
            Uparrow: "\u21D1",
            UpArrowDownArrow: "\u21C5",
            updownarrow: "\u2195",
            UpDownArrow: "\u2195",
            Updownarrow: "\u21D5",
            UpEquilibrium: "\u296E",
            upharpoonleft: "\u21BF",
            upharpoonright: "\u21BE",
            uplus: "\u228E",
            UpperLeftArrow: "\u2196",
            UpperRightArrow: "\u2197",
            upsi: "\u03C5",
            Upsi: "\u03D2",
            upsih: "\u03D2",
            Upsilon: "\u03A5",
            upsilon: "\u03C5",
            UpTeeArrow: "\u21A5",
            UpTee: "\u22A5",
            upuparrows: "\u21C8",
            urcorn: "\u231D",
            urcorner: "\u231D",
            urcrop: "\u230E",
            Uring: "\u016E",
            uring: "\u016F",
            urtri: "\u25F9",
            Uscr: "\u{1D4B0}",
            uscr: "\u{1D4CA}",
            utdot: "\u22F0",
            Utilde: "\u0168",
            utilde: "\u0169",
            utri: "\u25B5",
            utrif: "\u25B4",
            uuarr: "\u21C8",
            Uuml: "\xDC",
            uuml: "\xFC",
            uwangle: "\u29A7",
            vangrt: "\u299C",
            varepsilon: "\u03F5",
            varkappa: "\u03F0",
            varnothing: "\u2205",
            varphi: "\u03D5",
            varpi: "\u03D6",
            varpropto: "\u221D",
            varr: "\u2195",
            vArr: "\u21D5",
            varrho: "\u03F1",
            varsigma: "\u03C2",
            varsubsetneq: "\u228A\uFE00",
            varsubsetneqq: "\u2ACB\uFE00",
            varsupsetneq: "\u228B\uFE00",
            varsupsetneqq: "\u2ACC\uFE00",
            vartheta: "\u03D1",
            vartriangleleft: "\u22B2",
            vartriangleright: "\u22B3",
            vBar: "\u2AE8",
            Vbar: "\u2AEB",
            vBarv: "\u2AE9",
            Vcy: "\u0412",
            vcy: "\u0432",
            vdash: "\u22A2",
            vDash: "\u22A8",
            Vdash: "\u22A9",
            VDash: "\u22AB",
            Vdashl: "\u2AE6",
            veebar: "\u22BB",
            vee: "\u2228",
            Vee: "\u22C1",
            veeeq: "\u225A",
            vellip: "\u22EE",
            verbar: "|",
            Verbar: "\u2016",
            vert: "|",
            Vert: "\u2016",
            VerticalBar: "\u2223",
            VerticalLine: "|",
            VerticalSeparator: "\u2758",
            VerticalTilde: "\u2240",
            VeryThinSpace: "\u200A",
            Vfr: "\u{1D519}",
            vfr: "\u{1D533}",
            vltri: "\u22B2",
            vnsub: "\u2282\u20D2",
            vnsup: "\u2283\u20D2",
            Vopf: "\u{1D54D}",
            vopf: "\u{1D567}",
            vprop: "\u221D",
            vrtri: "\u22B3",
            Vscr: "\u{1D4B1}",
            vscr: "\u{1D4CB}",
            vsubnE: "\u2ACB\uFE00",
            vsubne: "\u228A\uFE00",
            vsupnE: "\u2ACC\uFE00",
            vsupne: "\u228B\uFE00",
            Vvdash: "\u22AA",
            vzigzag: "\u299A",
            Wcirc: "\u0174",
            wcirc: "\u0175",
            wedbar: "\u2A5F",
            wedge: "\u2227",
            Wedge: "\u22C0",
            wedgeq: "\u2259",
            weierp: "\u2118",
            Wfr: "\u{1D51A}",
            wfr: "\u{1D534}",
            Wopf: "\u{1D54E}",
            wopf: "\u{1D568}",
            wp: "\u2118",
            wr: "\u2240",
            wreath: "\u2240",
            Wscr: "\u{1D4B2}",
            wscr: "\u{1D4CC}",
            xcap: "\u22C2",
            xcirc: "\u25EF",
            xcup: "\u22C3",
            xdtri: "\u25BD",
            Xfr: "\u{1D51B}",
            xfr: "\u{1D535}",
            xharr: "\u27F7",
            xhArr: "\u27FA",
            Xi: "\u039E",
            xi: "\u03BE",
            xlarr: "\u27F5",
            xlArr: "\u27F8",
            xmap: "\u27FC",
            xnis: "\u22FB",
            xodot: "\u2A00",
            Xopf: "\u{1D54F}",
            xopf: "\u{1D569}",
            xoplus: "\u2A01",
            xotime: "\u2A02",
            xrarr: "\u27F6",
            xrArr: "\u27F9",
            Xscr: "\u{1D4B3}",
            xscr: "\u{1D4CD}",
            xsqcup: "\u2A06",
            xuplus: "\u2A04",
            xutri: "\u25B3",
            xvee: "\u22C1",
            xwedge: "\u22C0",
            Yacute: "\xDD",
            yacute: "\xFD",
            YAcy: "\u042F",
            yacy: "\u044F",
            Ycirc: "\u0176",
            ycirc: "\u0177",
            Ycy: "\u042B",
            ycy: "\u044B",
            yen: "\xA5",
            Yfr: "\u{1D51C}",
            yfr: "\u{1D536}",
            YIcy: "\u0407",
            yicy: "\u0457",
            Yopf: "\u{1D550}",
            yopf: "\u{1D56A}",
            Yscr: "\u{1D4B4}",
            yscr: "\u{1D4CE}",
            YUcy: "\u042E",
            yucy: "\u044E",
            yuml: "\xFF",
            Yuml: "\u0178",
            Zacute: "\u0179",
            zacute: "\u017A",
            Zcaron: "\u017D",
            zcaron: "\u017E",
            Zcy: "\u0417",
            zcy: "\u0437",
            Zdot: "\u017B",
            zdot: "\u017C",
            zeetrf: "\u2128",
            ZeroWidthSpace: "\u200B",
            Zeta: "\u0396",
            zeta: "\u03B6",
            zfr: "\u{1D537}",
            Zfr: "\u2128",
            ZHcy: "\u0416",
            zhcy: "\u0436",
            zigrarr: "\u21DD",
            zopf: "\u{1D56B}",
            Zopf: "\u2124",
            Zscr: "\u{1D4B5}",
            zscr: "\u{1D4CF}",
            zwj: "\u200D",
            zwnj: "\u200C",
          };
        },
      }),
      b2 = ae({
        "../../node_modules/ansi-to-html/node_modules/entities/lib/maps/legacy.json"(e, t) {
          t.exports = {
            Aacute: "\xC1",
            aacute: "\xE1",
            Acirc: "\xC2",
            acirc: "\xE2",
            acute: "\xB4",
            AElig: "\xC6",
            aelig: "\xE6",
            Agrave: "\xC0",
            agrave: "\xE0",
            amp: "&",
            AMP: "&",
            Aring: "\xC5",
            aring: "\xE5",
            Atilde: "\xC3",
            atilde: "\xE3",
            Auml: "\xC4",
            auml: "\xE4",
            brvbar: "\xA6",
            Ccedil: "\xC7",
            ccedil: "\xE7",
            cedil: "\xB8",
            cent: "\xA2",
            copy: "\xA9",
            COPY: "\xA9",
            curren: "\xA4",
            deg: "\xB0",
            divide: "\xF7",
            Eacute: "\xC9",
            eacute: "\xE9",
            Ecirc: "\xCA",
            ecirc: "\xEA",
            Egrave: "\xC8",
            egrave: "\xE8",
            ETH: "\xD0",
            eth: "\xF0",
            Euml: "\xCB",
            euml: "\xEB",
            frac12: "\xBD",
            frac14: "\xBC",
            frac34: "\xBE",
            gt: ">",
            GT: ">",
            Iacute: "\xCD",
            iacute: "\xED",
            Icirc: "\xCE",
            icirc: "\xEE",
            iexcl: "\xA1",
            Igrave: "\xCC",
            igrave: "\xEC",
            iquest: "\xBF",
            Iuml: "\xCF",
            iuml: "\xEF",
            laquo: "\xAB",
            lt: "<",
            LT: "<",
            macr: "\xAF",
            micro: "\xB5",
            middot: "\xB7",
            nbsp: "\xA0",
            not: "\xAC",
            Ntilde: "\xD1",
            ntilde: "\xF1",
            Oacute: "\xD3",
            oacute: "\xF3",
            Ocirc: "\xD4",
            ocirc: "\xF4",
            Ograve: "\xD2",
            ograve: "\xF2",
            ordf: "\xAA",
            ordm: "\xBA",
            Oslash: "\xD8",
            oslash: "\xF8",
            Otilde: "\xD5",
            otilde: "\xF5",
            Ouml: "\xD6",
            ouml: "\xF6",
            para: "\xB6",
            plusmn: "\xB1",
            pound: "\xA3",
            quot: '"',
            QUOT: '"',
            raquo: "\xBB",
            reg: "\xAE",
            REG: "\xAE",
            sect: "\xA7",
            shy: "\xAD",
            sup1: "\xB9",
            sup2: "\xB2",
            sup3: "\xB3",
            szlig: "\xDF",
            THORN: "\xDE",
            thorn: "\xFE",
            times: "\xD7",
            Uacute: "\xDA",
            uacute: "\xFA",
            Ucirc: "\xDB",
            ucirc: "\xFB",
            Ugrave: "\xD9",
            ugrave: "\xF9",
            uml: "\xA8",
            Uuml: "\xDC",
            uuml: "\xFC",
            Yacute: "\xDD",
            yacute: "\xFD",
            yen: "\xA5",
            yuml: "\xFF",
          };
        },
      }),
      Zi = ae({
        "../../node_modules/ansi-to-html/node_modules/entities/lib/maps/xml.json"(e, t) {
          t.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
        },
      }),
      E2 = ae({
        "../../node_modules/ansi-to-html/node_modules/entities/lib/maps/decode.json"(e, t) {
          t.exports = {
            0: 65533,
            128: 8364,
            130: 8218,
            131: 402,
            132: 8222,
            133: 8230,
            134: 8224,
            135: 8225,
            136: 710,
            137: 8240,
            138: 352,
            139: 8249,
            140: 338,
            142: 381,
            145: 8216,
            146: 8217,
            147: 8220,
            148: 8221,
            149: 8226,
            150: 8211,
            151: 8212,
            152: 732,
            153: 8482,
            154: 353,
            155: 8250,
            156: 339,
            158: 382,
            159: 376,
          };
        },
      }),
      A2 = ae({
        "../../node_modules/ansi-to-html/node_modules/entities/lib/decode_codepoint.js"(e) {
          var t =
            (e && e.__importDefault) ||
            function (a) {
              return a && a.__esModule ? a : { default: a };
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = t(E2()),
            n =
              String.fromCodePoint ||
              function (a) {
                var u = "";
                return (
                  a > 65535 &&
                    ((a -= 65536),
                    (u += String.fromCharCode(((a >>> 10) & 1023) | 55296)),
                    (a = 56320 | (a & 1023))),
                  (u += String.fromCharCode(a)),
                  u
                );
              };
          function o(a) {
            return (a >= 55296 && a <= 57343) || a > 1114111
              ? "\uFFFD"
              : (a in r.default && (a = r.default[a]), n(a));
          }
          e.default = o;
        },
      }),
      Fi = ae({
        "../../node_modules/ansi-to-html/node_modules/entities/lib/decode.js"(e) {
          var t =
            (e && e.__importDefault) ||
            function (f) {
              return f && f.__esModule ? f : { default: f };
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
          var r = t(Ji()),
            n = t(b2()),
            o = t(Zi()),
            a = t(A2()),
            u = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
          (e.decodeXML = i(o.default)), (e.decodeHTMLStrict = i(r.default));
          function i(f) {
            var m = l(f);
            return function (y) {
              return String(y).replace(u, m);
            };
          }
          var s = function (f, m) {
            return f < m ? 1 : -1;
          };
          e.decodeHTML = (function () {
            for (
              var f = Object.keys(n.default).sort(s),
                m = Object.keys(r.default).sort(s),
                y = 0,
                E = 0;
              y < m.length;
              y++
            )
              f[E] === m[y] ? ((m[y] += ";?"), E++) : (m[y] += ";");
            var w = new RegExp("&(?:" + m.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
              C = l(r.default);
            function b(S) {
              return S.substr(-1) !== ";" && (S += ";"), C(S);
            }
            return function (S) {
              return String(S).replace(w, b);
            };
          })();
          function l(f) {
            return function (m) {
              if (m.charAt(1) === "#") {
                var y = m.charAt(2);
                return y === "X" || y === "x"
                  ? a.default(parseInt(m.substr(3), 16))
                  : a.default(parseInt(m.substr(2), 10));
              }
              return f[m.slice(1, -1)] || m;
            };
          }
        },
      }),
      Ii = ae({
        "../../node_modules/ansi-to-html/node_modules/entities/lib/encode.js"(e) {
          var t =
            (e && e.__importDefault) ||
            function (A) {
              return A && A.__esModule ? A : { default: A };
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.escapeUTF8 = e.escape = e.encodeNonAsciiHTML = e.encodeHTML = e.encodeXML = void 0);
          var r = t(Zi()),
            n = s(r.default),
            o = l(n);
          e.encodeXML = S(n);
          var a = t(Ji()),
            u = s(a.default),
            i = l(u);
          (e.encodeHTML = E(u, i)), (e.encodeNonAsciiHTML = S(u));
          function s(A) {
            return Object.keys(A)
              .sort()
              .reduce(function (x, _) {
                return (x[A[_]] = "&" + _ + ";"), x;
              }, {});
          }
          function l(A) {
            for (var x = [], _ = [], I = 0, v = Object.keys(A); I < v.length; I++) {
              var T = v[I];
              T.length === 1 ? x.push("\\" + T) : _.push(T);
            }
            x.sort();
            for (var B = 0; B < x.length - 1; B++) {
              for (
                var L = B;
                L < x.length - 1 && x[L].charCodeAt(1) + 1 === x[L + 1].charCodeAt(1);

              )
                L += 1;
              var k = 1 + L - B;
              k < 3 || x.splice(B, k, x[B] + "-" + x[L]);
            }
            return _.unshift("[" + x.join("") + "]"), new RegExp(_.join("|"), "g");
          }
          var f =
              /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
            m =
              String.prototype.codePointAt != null
                ? function (A) {
                    return A.codePointAt(0);
                  }
                : function (A) {
                    return (A.charCodeAt(0) - 55296) * 1024 + A.charCodeAt(1) - 56320 + 65536;
                  };
          function y(A) {
            return "&#x" + (A.length > 1 ? m(A) : A.charCodeAt(0)).toString(16).toUpperCase() + ";";
          }
          function E(A, x) {
            return function (_) {
              return _.replace(x, function (I) {
                return A[I];
              }).replace(f, y);
            };
          }
          var w = new RegExp(o.source + "|" + f.source, "g");
          function C(A) {
            return A.replace(w, y);
          }
          e.escape = C;
          function b(A) {
            return A.replace(o, y);
          }
          e.escapeUTF8 = b;
          function S(A) {
            return function (x) {
              return x.replace(w, function (_) {
                return A[_] || y(_);
              });
            };
          }
        },
      }),
      S2 = ae({
        "../../node_modules/ansi-to-html/node_modules/entities/lib/index.js"(e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.decodeXMLStrict =
              e.decodeHTML5Strict =
              e.decodeHTML4Strict =
              e.decodeHTML5 =
              e.decodeHTML4 =
              e.decodeHTMLStrict =
              e.decodeHTML =
              e.decodeXML =
              e.encodeHTML5 =
              e.encodeHTML4 =
              e.escapeUTF8 =
              e.escape =
              e.encodeNonAsciiHTML =
              e.encodeHTML =
              e.encodeXML =
              e.encode =
              e.decodeStrict =
              e.decode =
                void 0);
          var t = Fi(),
            r = Ii();
          function n(s, l) {
            return (!l || l <= 0 ? t.decodeXML : t.decodeHTML)(s);
          }
          e.decode = n;
          function o(s, l) {
            return (!l || l <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s);
          }
          e.decodeStrict = o;
          function a(s, l) {
            return (!l || l <= 0 ? r.encodeXML : r.encodeHTML)(s);
          }
          e.encode = a;
          var u = Ii();
          Object.defineProperty(e, "encodeXML", {
            enumerable: !0,
            get: function () {
              return u.encodeXML;
            },
          }),
            Object.defineProperty(e, "encodeHTML", {
              enumerable: !0,
              get: function () {
                return u.encodeHTML;
              },
            }),
            Object.defineProperty(e, "encodeNonAsciiHTML", {
              enumerable: !0,
              get: function () {
                return u.encodeNonAsciiHTML;
              },
            }),
            Object.defineProperty(e, "escape", {
              enumerable: !0,
              get: function () {
                return u.escape;
              },
            }),
            Object.defineProperty(e, "escapeUTF8", {
              enumerable: !0,
              get: function () {
                return u.escapeUTF8;
              },
            }),
            Object.defineProperty(e, "encodeHTML4", {
              enumerable: !0,
              get: function () {
                return u.encodeHTML;
              },
            }),
            Object.defineProperty(e, "encodeHTML5", {
              enumerable: !0,
              get: function () {
                return u.encodeHTML;
              },
            });
          var i = Fi();
          Object.defineProperty(e, "decodeXML", {
            enumerable: !0,
            get: function () {
              return i.decodeXML;
            },
          }),
            Object.defineProperty(e, "decodeHTML", {
              enumerable: !0,
              get: function () {
                return i.decodeHTML;
              },
            }),
            Object.defineProperty(e, "decodeHTMLStrict", {
              enumerable: !0,
              get: function () {
                return i.decodeHTMLStrict;
              },
            }),
            Object.defineProperty(e, "decodeHTML4", {
              enumerable: !0,
              get: function () {
                return i.decodeHTML;
              },
            }),
            Object.defineProperty(e, "decodeHTML5", {
              enumerable: !0,
              get: function () {
                return i.decodeHTML;
              },
            }),
            Object.defineProperty(e, "decodeHTML4Strict", {
              enumerable: !0,
              get: function () {
                return i.decodeHTMLStrict;
              },
            }),
            Object.defineProperty(e, "decodeHTML5Strict", {
              enumerable: !0,
              get: function () {
                return i.decodeHTMLStrict;
              },
            }),
            Object.defineProperty(e, "decodeXMLStrict", {
              enumerable: !0,
              get: function () {
                return i.decodeXML;
              },
            });
        },
      }),
      w2 = ae({
        "../../node_modules/ansi-to-html/lib/ansi_to_html.js"(e, t) {
          function r(h, p) {
            if (!(h instanceof p)) throw new TypeError("Cannot call a class as a function");
          }
          function n(h, p) {
            for (var g = 0; g < p.length; g++) {
              var R = p[g];
              (R.enumerable = R.enumerable || !1),
                (R.configurable = !0),
                "value" in R && (R.writable = !0),
                Object.defineProperty(h, R.key, R);
            }
          }
          function o(h, p, g) {
            return p && n(h.prototype, p), g && n(h, g), h;
          }
          function a(h, p) {
            var g = (typeof Symbol < "u" && h[Symbol.iterator]) || h["@@iterator"];
            if (!g) {
              if (Array.isArray(h) || (g = u(h)) || (p && h && typeof h.length == "number")) {
                g && (h = g);
                var R = 0,
                  D = function () {};
                return {
                  s: D,
                  n: function () {
                    return R >= h.length ? { done: !0 } : { done: !1, value: h[R++] };
                  },
                  e: function (j) {
                    throw j;
                  },
                  f: D,
                };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var O = !0,
              F = !1,
              N;
            return {
              s: function () {
                g = g.call(h);
              },
              n: function () {
                var j = g.next();
                return (O = j.done), j;
              },
              e: function (j) {
                (F = !0), (N = j);
              },
              f: function () {
                try {
                  !O && g.return != null && g.return();
                } finally {
                  if (F) throw N;
                }
              },
            };
          }
          function u(h, p) {
            if (h) {
              if (typeof h == "string") return i(h, p);
              var g = Object.prototype.toString.call(h).slice(8, -1);
              if (
                (g === "Object" && h.constructor && (g = h.constructor.name),
                g === "Map" || g === "Set")
              )
                return Array.from(h);
              if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))
                return i(h, p);
            }
          }
          function i(h, p) {
            (p == null || p > h.length) && (p = h.length);
            for (var g = 0, R = new Array(p); g < p; g++) R[g] = h[g];
            return R;
          }
          var s = S2(),
            l = { fg: "#FFF", bg: "#000", newline: !1, escapeXML: !1, stream: !1, colors: f() };
          function f() {
            var h = {
              0: "#000",
              1: "#A00",
              2: "#0A0",
              3: "#A50",
              4: "#00A",
              5: "#A0A",
              6: "#0AA",
              7: "#AAA",
              8: "#555",
              9: "#F55",
              10: "#5F5",
              11: "#FF5",
              12: "#55F",
              13: "#F5F",
              14: "#5FF",
              15: "#FFF",
            };
            return (
              A(0, 5).forEach(function (p) {
                A(0, 5).forEach(function (g) {
                  A(0, 5).forEach(function (R) {
                    return m(p, g, R, h);
                  });
                });
              }),
              A(0, 23).forEach(function (p) {
                var g = p + 232,
                  R = y(p * 10 + 8);
                h[g] = "#" + R + R + R;
              }),
              h
            );
          }
          function m(h, p, g, R) {
            var D = 16 + h * 36 + p * 6 + g,
              O = h > 0 ? h * 40 + 55 : 0,
              F = p > 0 ? p * 40 + 55 : 0,
              N = g > 0 ? g * 40 + 55 : 0;
            R[D] = E([O, F, N]);
          }
          function y(h) {
            for (var p = h.toString(16); p.length < 2; ) p = "0" + p;
            return p;
          }
          function E(h) {
            var p = [],
              g = a(h),
              R;
            try {
              for (g.s(); !(R = g.n()).done; ) {
                var D = R.value;
                p.push(y(D));
              }
            } catch (O) {
              g.e(O);
            } finally {
              g.f();
            }
            return "#" + p.join("");
          }
          function w(h, p, g, R) {
            var D;
            return (
              p === "text"
                ? (D = I(g, R))
                : p === "display"
                  ? (D = b(h, g, R))
                  : p === "xterm256Foreground"
                    ? (D = B(h, R.colors[g]))
                    : p === "xterm256Background"
                      ? (D = L(h, R.colors[g]))
                      : p === "rgb" && (D = C(h, g)),
              D
            );
          }
          function C(h, p) {
            p = p.substring(2).slice(0, -1);
            var g = +p.substr(0, 2),
              R = p.substring(5).split(";"),
              D = R.map(function (O) {
                return ("0" + Number(O).toString(16)).substr(-2);
              }).join("");
            return T(h, (g === 38 ? "color:#" : "background-color:#") + D);
          }
          function b(h, p, g) {
            p = parseInt(p, 10);
            var R = {
                "-1": function () {
                  return "<br/>";
                },
                0: function () {
                  return h.length && S(h);
                },
                1: function () {
                  return v(h, "b");
                },
                3: function () {
                  return v(h, "i");
                },
                4: function () {
                  return v(h, "u");
                },
                8: function () {
                  return T(h, "display:none");
                },
                9: function () {
                  return v(h, "strike");
                },
                22: function () {
                  return T(h, "font-weight:normal;text-decoration:none;font-style:normal");
                },
                23: function () {
                  return k(h, "i");
                },
                24: function () {
                  return k(h, "u");
                },
                39: function () {
                  return B(h, g.fg);
                },
                49: function () {
                  return L(h, g.bg);
                },
                53: function () {
                  return T(h, "text-decoration:overline");
                },
              },
              D;
            return (
              R[p]
                ? (D = R[p]())
                : 4 < p && p < 7
                  ? (D = v(h, "blink"))
                  : 29 < p && p < 38
                    ? (D = B(h, g.colors[p - 30]))
                    : 39 < p && p < 48
                      ? (D = L(h, g.colors[p - 40]))
                      : 89 < p && p < 98
                        ? (D = B(h, g.colors[8 + (p - 90)]))
                        : 99 < p && p < 108 && (D = L(h, g.colors[8 + (p - 100)])),
              D
            );
          }
          function S(h) {
            var p = h.slice(0);
            return (
              (h.length = 0),
              p
                .reverse()
                .map(function (g) {
                  return "</" + g + ">";
                })
                .join("")
            );
          }
          function A(h, p) {
            for (var g = [], R = h; R <= p; R++) g.push(R);
            return g;
          }
          function x(h) {
            return function (p) {
              return (h === null || p.category !== h) && h !== "all";
            };
          }
          function _(h) {
            h = parseInt(h, 10);
            var p = null;
            return (
              h === 0
                ? (p = "all")
                : h === 1
                  ? (p = "bold")
                  : 2 < h && h < 5
                    ? (p = "underline")
                    : 4 < h && h < 7
                      ? (p = "blink")
                      : h === 8
                        ? (p = "hide")
                        : h === 9
                          ? (p = "strike")
                          : (29 < h && h < 38) || h === 39 || (89 < h && h < 98)
                            ? (p = "foreground-color")
                            : ((39 < h && h < 48) || h === 49 || (99 < h && h < 108)) &&
                              (p = "background-color"),
              p
            );
          }
          function I(h, p) {
            return p.escapeXML ? s.encodeXML(h) : h;
          }
          function v(h, p, g) {
            return (
              g || (g = ""),
              h.push(p),
              "<".concat(p).concat(g ? ' style="'.concat(g, '"') : "", ">")
            );
          }
          function T(h, p) {
            return v(h, "span", p);
          }
          function B(h, p) {
            return v(h, "span", "color:" + p);
          }
          function L(h, p) {
            return v(h, "span", "background-color:" + p);
          }
          function k(h, p) {
            var g;
            if ((h.slice(-1)[0] === p && (g = h.pop()), g)) return "</" + p + ">";
          }
          function q(h, p, g) {
            var R = !1,
              D = 3;
            function O() {
              return "";
            }
            function F(re, ne) {
              return g("xterm256Foreground", ne), "";
            }
            function N(re, ne) {
              return g("xterm256Background", ne), "";
            }
            function j(re) {
              return p.newline ? g("display", -1) : g("text", re), "";
            }
            function Q(re, ne) {
              (R = !0), ne.trim().length === 0 && (ne = "0"), (ne = ne.trimRight(";").split(";"));
              var Ne = a(ne),
                wt;
              try {
                for (Ne.s(); !(wt = Ne.n()).done; ) {
                  var Dr = wt.value;
                  g("display", Dr);
                }
              } catch (xr) {
                Ne.e(xr);
              } finally {
                Ne.f();
              }
              return "";
            }
            function te(re) {
              return g("text", re), "";
            }
            function J(re) {
              return g("rgb", re), "";
            }
            var ue = [
              { pattern: /^\x08+/, sub: O },
              { pattern: /^\x1b\[[012]?K/, sub: O },
              { pattern: /^\x1b\[\(B/, sub: O },
              { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: J },
              { pattern: /^\x1b\[38;5;(\d+)m/, sub: F },
              { pattern: /^\x1b\[48;5;(\d+)m/, sub: N },
              { pattern: /^\n/, sub: j },
              { pattern: /^\r+\n/, sub: j },
              { pattern: /^\r/, sub: j },
              { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: Q },
              { pattern: /^\x1b\[\d?J/, sub: O },
              { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: O },
              { pattern: /^\x1b\[?[\d;]{0,3}/, sub: O },
              { pattern: /^(([^\x1b\x08\r\n])+)/, sub: te },
            ];
            function V(re, ne) {
              (ne > D && R) || ((R = !1), (h = h.replace(re.pattern, re.sub)));
            }
            var ce = [],
              De = h,
              be = De.length;
            e: for (; be > 0; ) {
              for (var Oe = 0, St = 0, Cr = ue.length; St < Cr; Oe = ++St) {
                var vr = ue[Oe];
                if ((V(vr, Oe), h.length !== be)) {
                  be = h.length;
                  continue e;
                }
              }
              if (h.length === be) break;
              ce.push(0), (be = h.length);
            }
            return ce;
          }
          function P(h, p, g) {
            return (
              p !== "text" &&
                ((h = h.filter(x(_(g)))), h.push({ token: p, data: g, category: _(g) })),
              h
            );
          }
          var M = (function () {
            function h(p) {
              r(this, h),
                (p = p || {}),
                p.colors && (p.colors = Object.assign({}, l.colors, p.colors)),
                (this.options = Object.assign({}, l, p)),
                (this.stack = []),
                (this.stickyStack = []);
            }
            return (
              o(h, [
                {
                  key: "toHtml",
                  value: function (p) {
                    var g = this;
                    p = typeof p == "string" ? [p] : p;
                    var R = this.stack,
                      D = this.options,
                      O = [];
                    return (
                      this.stickyStack.forEach(function (F) {
                        var N = w(R, F.token, F.data, D);
                        N && O.push(N);
                      }),
                      q(p.join(""), D, function (F, N) {
                        var j = w(R, F, N, D);
                        j && O.push(j), D.stream && (g.stickyStack = P(g.stickyStack, F, N));
                      }),
                      R.length && O.push(S(R)),
                      O.join("")
                    );
                  },
                },
              ]),
              h
            );
          })();
          t.exports = M;
        },
      }),
      Wn = ae({
        "../../node_modules/@devtools-ds/object-inspector/node_modules/@babel/runtime/helpers/extends.js"(
          e,
          t,
        ) {
          function r() {
            return (
              (t.exports = r =
                Object.assign ||
                function (n) {
                  for (var o = 1; o < arguments.length; o++) {
                    var a = arguments[o];
                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (n[u] = a[u]);
                  }
                  return n;
                }),
              r.apply(this, arguments)
            );
          }
          t.exports = r;
        },
      }),
      C2 = ae({
        "../../node_modules/@devtools-ds/object-inspector/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(
          e,
          t,
        ) {
          function r(n, o) {
            if (n == null) return {};
            var a = {},
              u = Object.keys(n),
              i,
              s;
            for (s = 0; s < u.length; s++) (i = u[s]), !(o.indexOf(i) >= 0) && (a[i] = n[i]);
            return a;
          }
          t.exports = r;
        },
      }),
      Yn = ae({
        "../../node_modules/@devtools-ds/object-inspector/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"(
          e,
          t,
        ) {
          var r = C2();
          function n(o, a) {
            if (o == null) return {};
            var u = r(o, a),
              i,
              s;
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(o);
              for (s = 0; s < l.length; s++)
                (i = l[s]),
                  !(a.indexOf(i) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(o, i) &&
                    (u[i] = o[i]);
            }
            return u;
          }
          t.exports = n;
        },
      }),
      v2 = ae({
        "../../node_modules/@devtools-ds/themes/node_modules/@babel/runtime/helpers/defineProperty.js"(
          e,
          t,
        ) {
          function r(n, o, a) {
            return (
              o in n
                ? Object.defineProperty(n, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[o] = a),
              n
            );
          }
          t.exports = r;
        },
      }),
      D2 = ae({
        "../../node_modules/@devtools-ds/themes/node_modules/@babel/runtime/helpers/objectSpread2.js"(
          e,
          t,
        ) {
          var r = v2();
          function n(a, u) {
            var i = Object.keys(a);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(a);
              u &&
                (s = s.filter(function (l) {
                  return Object.getOwnPropertyDescriptor(a, l).enumerable;
                })),
                i.push.apply(i, s);
            }
            return i;
          }
          function o(a) {
            for (var u = 1; u < arguments.length; u++) {
              var i = arguments[u] != null ? arguments[u] : {};
              u % 2
                ? n(i, !0).forEach(function (s) {
                    r(a, s, i[s]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                  : n(i).forEach(function (s) {
                      Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(i, s));
                    });
            }
            return a;
          }
          t.exports = o;
        },
      }),
      x2 = ae({
        "../../node_modules/@devtools-ds/themes/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(
          e,
          t,
        ) {
          function r(n, o) {
            if (n == null) return {};
            var a = {},
              u = Object.keys(n),
              i,
              s;
            for (s = 0; s < u.length; s++) (i = u[s]), !(o.indexOf(i) >= 0) && (a[i] = n[i]);
            return a;
          }
          t.exports = r;
        },
      }),
      T2 = ae({
        "../../node_modules/@devtools-ds/themes/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"(
          e,
          t,
        ) {
          var r = x2();
          function n(o, a) {
            if (o == null) return {};
            var u = r(o, a),
              i,
              s;
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(o);
              for (s = 0; s < l.length; s++)
                (i = l[s]),
                  !(a.indexOf(i) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(o, i) &&
                    (u[i] = o[i]);
            }
            return u;
          }
          t.exports = n;
        },
      }),
      R2 = ae({
        "../../node_modules/@devtools-ds/object-inspector/node_modules/@babel/runtime/helpers/defineProperty.js"(
          e,
          t,
        ) {
          function r(n, o, a) {
            return (
              o in n
                ? Object.defineProperty(n, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[o] = a),
              n
            );
          }
          t.exports = r;
        },
      }),
      _2 = ae({
        "../../node_modules/@devtools-ds/object-inspector/node_modules/@babel/runtime/helpers/objectSpread2.js"(
          e,
          t,
        ) {
          var r = R2();
          function n(a, u) {
            var i = Object.keys(a);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(a);
              u &&
                (s = s.filter(function (l) {
                  return Object.getOwnPropertyDescriptor(a, l).enumerable;
                })),
                i.push.apply(i, s);
            }
            return i;
          }
          function o(a) {
            for (var u = 1; u < arguments.length; u++) {
              var i = arguments[u] != null ? arguments[u] : {};
              u % 2
                ? n(i, !0).forEach(function (s) {
                    r(a, s, i[s]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                  : n(i).forEach(function (s) {
                      Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(i, s));
                    });
            }
            return a;
          }
          t.exports = o;
        },
      }),
      O2 = ae({
        "../../node_modules/@devtools-ds/tree/node_modules/@babel/runtime/helpers/extends.js"(
          e,
          t,
        ) {
          function r() {
            return (
              (t.exports = r =
                Object.assign ||
                function (n) {
                  for (var o = 1; o < arguments.length; o++) {
                    var a = arguments[o];
                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (n[u] = a[u]);
                  }
                  return n;
                }),
              r.apply(this, arguments)
            );
          }
          t.exports = r;
        },
      }),
      F2 = ae({
        "../../node_modules/@devtools-ds/tree/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(
          e,
          t,
        ) {
          function r(n, o) {
            if (n == null) return {};
            var a = {},
              u = Object.keys(n),
              i,
              s;
            for (s = 0; s < u.length; s++) (i = u[s]), !(o.indexOf(i) >= 0) && (a[i] = n[i]);
            return a;
          }
          t.exports = r;
        },
      }),
      I2 = ae({
        "../../node_modules/@devtools-ds/tree/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"(
          e,
          t,
        ) {
          var r = F2();
          function n(o, a) {
            if (o == null) return {};
            var u = r(o, a),
              i,
              s;
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(o);
              for (s = 0; s < l.length; s++)
                (i = l[s]),
                  !(a.indexOf(i) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(o, i) &&
                    (u[i] = o[i]);
            }
            return u;
          }
          t.exports = n;
        },
      }),
      At = "storybook/test",
      Ar = `${At}/test-provider`,
      Hn = `${At}/panel`,
      B2 = "STORYBOOK_ADDON_TEST_CHANNEL",
      P2 = "https://youtu.be/Waht9qq7AoA",
      Kn = "writing-tests/test-addon",
      N2 = `${Kn}#what-happens-when-there-are-different-test-results-in-multiple-environments`,
      L2 = `${Kn}#what-happens-if-vitest-itself-has-an-error`,
      k2 = { id: At, initialState: { config: { coverage: !1, a11y: !1 }, watching: !1 } },
      Qi = po.create({ ...k2, leader: globalThis.CONFIG_TYPE === "PRODUCTION" }),
      j2 = $.div({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "6px 6px 6px 20px",
      }),
      M2 = $.div({ display: "flex", justifyContent: "space-between", alignItems: "center" }),
      $2 = $.div(({ theme: { typography: e } }) => ({
        fontSize: e.size.s2,
        fontWeight: e.weight.bold,
      })),
      q2 = $.pre(({ theme: e }) => ({
        whiteSpace: "pre-wrap",
        overflow: "auto",
        maxHeight: "60vh",
        margin: 0,
        padding: "20px",
        fontFamily: e.typography.fonts.mono,
        fontSize: "12px",
        borderTop: `1px solid ${e.appBorderColor}`,
        borderRadius: 0,
      })),
      U2 = $.a(({ theme: e }) => ({ color: e.color.defaultText })),
      Xn = c.createContext({ isModalOpen: !1, setModalOpen: () => {}, error: void 0 });
    function z2({ onRerun: e }) {
      let t = zt(),
        { error: r, isModalOpen: n, setModalOpen: o } = to(Xn),
        a = () => o(!1),
        u = t.getDocsUrl({ subpath: L2, versioned: !0, renderer: !0 });
      return c.createElement(
        ao,
        { onEscapeKeyDown: a, onInteractOutside: a, open: n },
        c.createElement(
          j2,
          null,
          c.createElement($2, null, "Storybook Tests error details"),
          c.createElement(
            M2,
            null,
            c.createElement(
              $e,
              { onClick: e, variant: "ghost" },
              c.createElement(Or, null),
              "Rerun",
            ),
            c.createElement(
              $e,
              { variant: "ghost", asChild: !0 },
              c.createElement(
                "a",
                { target: "_blank", href: u, rel: "noreferrer" },
                "Troubleshoot",
              ),
            ),
            c.createElement(Ut, { onClick: a }, c.createElement(wo, null)),
          ),
        ),
        c.createElement(
          q2,
          null,
          r,
          c.createElement("br", null),
          c.createElement("br", null),
          "Troubleshoot:",
          " ",
          c.createElement(U2, { target: "_blank", href: u }, u),
        ),
      );
    }
    var H2 = Te(w2());
    function G2({ onlyFirst: e = !1 } = {}) {
      let t = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
      ].join("|");
      return new RegExp(t, e ? void 0 : "g");
    }
    var V2 = G2();
    function W2(e) {
      if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
      return e.replace(V2, "");
    }
    function Y2(e) {
      return es(e) || ts(e);
    }
    function es(e) {
      return (
        e &&
        typeof e == "object" &&
        "name" in e &&
        typeof e.name == "string" &&
        e.name === "AssertionError"
      );
    }
    function ts(e) {
      return (
        e &&
        typeof e == "object" &&
        "message" in e &&
        typeof e.message == "string" &&
        W2(e.message).startsWith("expect(")
      );
    }
    function K2(e) {
      return new H2.default({ escapeXML: !0, fg: e.color.defaultText, bg: e.background.content });
    }
    function Jn() {
      let e = Ze();
      return K2(e);
    }
    var X2 = $.div(({ theme: e }) => ({
        display: "flex",
        fontSize: e.typography.size.s2 - 1,
        gap: 25,
      })),
      J2 = $.div(({ theme: e }) => ({ width: 1, height: 16, backgroundColor: e.appBorderColor })),
      Z2 = () => {
        let [e, t] = ge(!0),
          r = zt().getDocsUrl({ subpath: Kn, versioned: !0, renderer: !0 });
        return (
          Fe(() => {
            let n = setTimeout(() => {
              t(!1);
            }, 100);
            return () => clearTimeout(n);
          }, []),
          e
            ? null
            : c.createElement(oo, {
                title: "Component testing",
                description: c.createElement(
                  c.Fragment,
                  null,
                  "Component tests allow you to verify the functional aspects of UIs. Write a play function for your story and you'll see it run here.",
                ),
                footer: c.createElement(
                  X2,
                  null,
                  c.createElement(
                    vt,
                    { href: P2, target: "_blank", withArrow: !0 },
                    c.createElement(No, null),
                    " Watch 8m video",
                  ),
                  c.createElement(J2, null),
                  c.createElement(
                    vt,
                    { href: r, target: "_blank", withArrow: !0 },
                    c.createElement(Co, null),
                    " Read docs",
                  ),
                ),
              })
        );
      },
      Q2 = Te(Wn()),
      ed = Te(Yn());
    function Gn(e) {
      var t,
        r,
        n = "";
      if (e)
        if (typeof e == "object")
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (r = Gn(e[t])) && (n && (n += " "), (n += r));
          else for (t in e) e[t] && (r = Gn(t)) && (n && (n += " "), (n += r));
        else typeof e != "boolean" && !e.call && (n && (n += " "), (n += e));
      return n;
    }
    function Pe() {
      for (var e = 0, t, r = ""; e < arguments.length; )
        (t = Gn(arguments[e++])) && (r && (r += " "), (r += t));
      return r;
    }
    var Zn = e => Array.isArray(e) || (ArrayBuffer.isView(e) && !(e instanceof DataView)),
      rs = e =>
        e !== null &&
        typeof e == "object" &&
        !Zn(e) &&
        !(e instanceof Date) &&
        !(e instanceof RegExp) &&
        !(e instanceof Error) &&
        !(e instanceof WeakMap) &&
        !(e instanceof WeakSet),
      td = e => rs(e) || Zn(e) || typeof e == "function" || e instanceof Promise,
      ns = e => {
        let t = /unique/;
        return Promise.race([e, t]).then(
          r => (r === t ? ["pending"] : ["fulfilled", r]),
          r => ["rejected", r],
        );
      },
      Be = async (e, t, r, n, o, a) => {
        let u = { key: e, depth: r, value: t, type: "value", parent: void 0 };
        if (t && td(t) && r < 100) {
          let i = [],
            s = "object";
          if (Zn(t)) {
            for (let l = 0; l < t.length; l++)
              i.push(async () => {
                let f = await Be(l.toString(), t[l], r + 1, n);
                return (f.parent = u), f;
              });
            s = "array";
          } else {
            let l = Object.getOwnPropertyNames(t);
            n && l.sort();
            for (let f = 0; f < l.length; f++) {
              let m;
              try {
                m = t[l[f]];
              } catch {}
              i.push(async () => {
                let y = await Be(l[f], m, r + 1, n);
                return (y.parent = u), y;
              });
            }
            if ((typeof t == "function" && (s = "function"), t instanceof Promise)) {
              let [f, m] = await ns(t);
              i.push(async () => {
                let y = await Be("<state>", f, r + 1, n);
                return (y.parent = u), y;
              }),
                f !== "pending" &&
                  i.push(async () => {
                    let y = await Be("<value>", m, r + 1, n);
                    return (y.parent = u), y;
                  }),
                (s = "promise");
            }
            if (t instanceof Map) {
              let f = Array.from(t.entries()).map(m => {
                let [y, E] = m;
                return { "<key>": y, "<value>": E };
              });
              i.push(async () => {
                let m = await Be("<entries>", f, r + 1, n);
                return (m.parent = u), m;
              }),
                i.push(async () => {
                  let m = await Be("size", t.size, r + 1, n);
                  return (m.parent = u), m;
                }),
                (s = "map");
            }
            if (t instanceof Set) {
              let f = Array.from(t.entries()).map(m => m[1]);
              i.push(async () => {
                let m = await Be("<entries>", f, r + 1, n);
                return (m.parent = u), m;
              }),
                i.push(async () => {
                  let m = await Be("size", t.size, r + 1, n);
                  return (m.parent = u), m;
                }),
                (s = "set");
            }
          }
          t !== Object.prototype &&
            a &&
            i.push(async () => {
              let l = await Be("<prototype>", Object.getPrototypeOf(t), r + 1, n, !0);
              return (l.parent = u), l;
            }),
            (u.type = s),
            (u.children = i),
            (u.isPrototype = o);
        }
        return u;
      },
      rd = (e, t, r) => Be("root", e, 0, t === !1 ? t : !0, void 0, r === !1 ? r : !0),
      Bi = Te(D2()),
      nd = Te(T2()),
      od = ["children"],
      Vn = c.createContext({ theme: "chrome", colorScheme: "light" }),
      ad = e => {
        let { children: t } = e,
          r = (0, nd.default)(e, od),
          n = c.useContext(Vn);
        return c.createElement(
          Vn.Provider,
          { value: (0, Bi.default)((0, Bi.default)({}, n), r) },
          t,
        );
      },
      wr = (e, t = {}) => {
        let r = c.useContext(Vn),
          n = e.theme || r.theme || "chrome",
          o = e.colorScheme || r.colorScheme || "light",
          a = Pe(t[n], t[o]);
        return { currentColorScheme: o, currentTheme: n, themeClass: a };
      },
      Pi = Te(_2()),
      Ln = Te(O2()),
      ud = Te(I2()),
      id = c.createContext({ isChild: !1, depth: 0, hasHover: !0 }),
      kn = id,
      we = {
        tree: "Tree-tree-fbbbe38",
        item: "Tree-item-353d6f3",
        group: "Tree-group-d3c3d8a",
        label: "Tree-label-d819155",
        focusWhite: "Tree-focusWhite-f1e00c2",
        arrow: "Tree-arrow-03ab2e7",
        hover: "Tree-hover-3cc4e5d",
        open: "Tree-open-3f1a336",
        dark: "Tree-dark-1b4aa00",
        chrome: "Tree-chrome-bcbcac6",
        light: "Tree-light-09174ee",
      },
      sd = [
        "theme",
        "hover",
        "colorScheme",
        "children",
        "label",
        "className",
        "onUpdate",
        "onSelect",
        "open",
      ],
      Sr = e => {
        let {
            theme: t,
            hover: r,
            colorScheme: n,
            children: o,
            label: a,
            className: u,
            onUpdate: i,
            onSelect: s,
            open: l,
          } = e,
          f = (0, ud.default)(e, sd),
          { themeClass: m, currentTheme: y } = wr({ theme: t, colorScheme: n }, we),
          [E, w] = ge(l);
        Fe(() => {
          w(l);
        }, [l]);
        let C = D => {
            w(D), i && i(D);
          },
          b = c.Children.count(o) > 0,
          S = (D, O) => {
            if (D.isSameNode(O || null)) return;
            D.querySelector('[tabindex="-1"]')?.focus(),
              D.setAttribute("aria-selected", "true"),
              O?.removeAttribute("aria-selected");
          },
          A = (D, O) => {
            let F = D;
            for (; F && F.parentElement; ) {
              if (F.getAttribute("role") === O) return F;
              F = F.parentElement;
            }
            return null;
          },
          x = D => {
            let O = A(D, "tree");
            return O ? Array.from(O.querySelectorAll("li")) : [];
          },
          _ = D => {
            let O = A(D, "group"),
              F = O?.previousElementSibling;
            if (F && F.getAttribute("tabindex") === "-1") {
              let N = F.parentElement,
                j = D.parentElement;
              S(N, j);
            }
          },
          I = (D, O) => {
            let F = x(D);
            F.forEach(N => {
              N.removeAttribute("aria-selected");
            }),
              O === "start" && F[0] && S(F[0]),
              O === "end" && F[F.length - 1] && S(F[F.length - 1]);
          },
          v = (D, O) => {
            let F = x(D) || [];
            for (let N = 0; N < F.length; N++) {
              let j = F[N];
              if (j.getAttribute("aria-selected") === "true") {
                O === "up" && F[N - 1]
                  ? S(F[N - 1], j)
                  : O === "down" && F[N + 1] && S(F[N + 1], j);
                return;
              }
            }
            S(F[0]);
          },
          T = (D, O) => {
            let F = D.target;
            (D.key === "Enter" || D.key === " ") && C(!E),
              D.key === "ArrowRight" && E && !O ? v(F, "down") : D.key === "ArrowRight" && C(!0),
              D.key === "ArrowLeft" && (!E || O) ? _(F) : D.key === "ArrowLeft" && C(!1),
              D.key === "ArrowDown" && v(F, "down"),
              D.key === "ArrowUp" && v(F, "up"),
              D.key === "Home" && I(F, "start"),
              D.key === "End" && I(F, "end");
          },
          B = (D, O) => {
            let F = D.target,
              N = A(F, "treeitem"),
              j = x(F) || [],
              Q = !1;
            for (let te = 0; te < j.length; te++) {
              let J = j[te];
              if (J.getAttribute("aria-selected") === "true") {
                N && ((Q = !0), S(N, J));
                break;
              }
            }
            !Q && N && S(N), O || C(!E);
          },
          L = D => {
            let O = D.currentTarget;
            !O.contains(document.activeElement) &&
              O.getAttribute("role") === "tree" &&
              O.setAttribute("tabindex", "0");
          },
          k = D => {
            let O = D.target;
            if (O.getAttribute("role") === "tree") {
              let F = O.querySelector('[aria-selected="true"]');
              F ? S(F) : v(O, "down"), O.setAttribute("tabindex", "-1");
            }
          },
          q = () => {
            s?.();
          },
          P = D => {
            let O = D * 0.9 + 0.3;
            return { paddingLeft: `${O}em`, width: `calc(100% - ${O}em)` };
          },
          { isChild: M, depth: h, hasHover: p } = c.useContext(kn),
          g = p ? r : !1;
        if (!M)
          return c.createElement(
            "ul",
            (0, Ln.default)(
              {
                role: "tree",
                tabIndex: 0,
                className: Pe(we.tree, we.group, m, u),
                onFocus: k,
                onBlur: L,
              },
              f,
            ),
            c.createElement(
              kn.Provider,
              { value: { isChild: !0, depth: 0, hasHover: g } },
              c.createElement(Sr, e),
            ),
          );
        if (!b)
          return c.createElement(
            "li",
            (0, Ln.default)({ role: "treeitem", className: we.item }, f),
            c.createElement(
              "div",
              {
                role: "button",
                className: Pe(we.label, { [we.hover]: g, [we.focusWhite]: y === "firefox" }),
                tabIndex: -1,
                style: P(h),
                onKeyDown: D => {
                  T(D, M);
                },
                onClick: D => B(D, !0),
                onFocus: q,
              },
              c.createElement("span", null, a),
            ),
          );
        let R = Pe(we.arrow, { [we.open]: E });
        return c.createElement(
          "li",
          { role: "treeitem", "aria-expanded": E, className: we.item },
          c.createElement(
            "div",
            {
              role: "button",
              tabIndex: -1,
              className: Pe(we.label, { [we.hover]: g, [we.focusWhite]: y === "firefox" }),
              style: P(h),
              onClick: D => B(D),
              onKeyDown: D => T(D),
              onFocus: q,
            },
            c.createElement(
              "span",
              null,
              c.createElement("span", { "aria-hidden": !0, className: R }),
              c.createElement("span", null, a),
            ),
          ),
          c.createElement(
            "ul",
            (0, Ln.default)({ role: "group", className: Pe(u, we.group) }, f),
            E &&
              c.Children.map(o, D =>
                c.createElement(
                  kn.Provider,
                  { value: { isChild: !0, depth: h + 1, hasHover: g } },
                  D,
                ),
              ),
          ),
        );
      };
    Sr.defaultProps = { open: !1, hover: !0 };
    var ld = Te(Wn()),
      cd = Te(Yn()),
      Z = {
        "object-inspector": "ObjectInspector-object-inspector-0c33e82",
        objectInspector: "ObjectInspector-object-inspector-0c33e82",
        "object-label": "ObjectInspector-object-label-b81482b",
        objectLabel: "ObjectInspector-object-label-b81482b",
        text: "ObjectInspector-text-25f57f3",
        key: "ObjectInspector-key-4f712bb",
        value: "ObjectInspector-value-f7ec2e5",
        string: "ObjectInspector-string-c496000",
        regex: "ObjectInspector-regex-59d45a3",
        error: "ObjectInspector-error-b818698",
        boolean: "ObjectInspector-boolean-2dd1642",
        number: "ObjectInspector-number-a6daabb",
        undefined: "ObjectInspector-undefined-3a68263",
        null: "ObjectInspector-null-74acb50",
        function: "ObjectInspector-function-07bbdcd",
        "function-decorator": "ObjectInspector-function-decorator-3d22c24",
        functionDecorator: "ObjectInspector-function-decorator-3d22c24",
        prototype: "ObjectInspector-prototype-f2449ee",
        dark: "ObjectInspector-dark-0c96c97",
        chrome: "ObjectInspector-chrome-2f3ca98",
        light: "ObjectInspector-light-78bef54",
      },
      pd = ["ast", "theme", "showKey", "colorScheme", "className"],
      Ce = (e, t, r, n, o) => {
        let a = e.includes("-") ? `"${e}"` : e,
          u = o <= 0;
        return c.createElement(
          "span",
          { className: Z.text },
          !u &&
            n &&
            c.createElement(
              c.Fragment,
              null,
              c.createElement("span", { className: Z.key }, a),
              c.createElement("span", null, ":\xA0"),
            ),
          c.createElement("span", { className: r }, t),
        );
      },
      os = e => {
        let { ast: t, theme: r, showKey: n, colorScheme: o, className: a } = e,
          u = (0, cd.default)(e, pd),
          { themeClass: i } = wr({ theme: r, colorScheme: o }, Z),
          [s, l] = ge(c.createElement("span", null)),
          f = c.createElement("span", null);
        return (
          Fe(() => {
            t.value instanceof Promise &&
              (async m => {
                l(Ce(t.key, `Promise { "${await ns(m)}" }`, Z.key, n, t.depth));
              })(t.value);
          }, [t, n]),
          typeof t.value == "number" || typeof t.value == "bigint"
            ? (f = Ce(t.key, String(t.value), Z.number, n, t.depth))
            : typeof t.value == "boolean"
              ? (f = Ce(t.key, String(t.value), Z.boolean, n, t.depth))
              : typeof t.value == "string"
                ? (f = Ce(t.key, `"${t.value}"`, Z.string, n, t.depth))
                : typeof t.value > "u"
                  ? (f = Ce(t.key, "undefined", Z.undefined, n, t.depth))
                  : typeof t.value == "symbol"
                    ? (f = Ce(t.key, t.value.toString(), Z.string, n, t.depth))
                    : typeof t.value == "function"
                      ? (f = Ce(t.key, `${t.value.name}()`, Z.key, n, t.depth))
                      : typeof t.value == "object" &&
                        (t.value === null
                          ? (f = Ce(t.key, "null", Z.null, n, t.depth))
                          : Array.isArray(t.value)
                            ? (f = Ce(t.key, `Array(${t.value.length})`, Z.key, n, t.depth))
                            : t.value instanceof Date
                              ? (f = Ce(t.key, `Date ${t.value.toString()}`, Z.value, n, t.depth))
                              : t.value instanceof RegExp
                                ? (f = Ce(t.key, t.value.toString(), Z.regex, n, t.depth))
                                : t.value instanceof Error
                                  ? (f = Ce(t.key, t.value.toString(), Z.error, n, t.depth))
                                  : rs(t.value)
                                    ? (f = Ce(t.key, "{\u2026}", Z.key, n, t.depth))
                                    : (f = Ce(t.key, t.value.constructor.name, Z.key, n, t.depth))),
          c.createElement("span", (0, ld.default)({ className: Pe(i, a) }, u), s, f)
        );
      };
    os.defaultProps = { showKey: !0 };
    var as = os,
      bt = Te(Wn()),
      dd = Te(Yn()),
      hd = ["ast", "theme", "previewMax", "open", "colorScheme", "className"],
      jt = (e, t, r) => {
        let n = [];
        for (let o = 0; o < e.length; o++) {
          let a = e[o];
          if (
            (a.isPrototype ||
              (n.push(c.createElement(as, { key: a.key, ast: a, showKey: r })),
              o < e.length - 1 ? n.push(", ") : n.push(" ")),
            a.isPrototype && o === e.length - 1 && (n.pop(), n.push(" ")),
            o === t - 1 && e.length > t)
          ) {
            n.push("\u2026 ");
            break;
          }
        }
        return n;
      },
      fd = (e, t, r, n) => {
        let o = e.value.length;
        return t
          ? c.createElement("span", null, "Array(", o, ")")
          : c.createElement(
              c.Fragment,
              null,
              c.createElement("span", null, `${n === "firefox" ? "Array" : ""}(${o}) [ `),
              jt(e.children, r, !1),
              c.createElement("span", null, "]"),
            );
      },
      md = (e, t, r, n) =>
        e.isPrototype
          ? c.createElement("span", null, `Object ${n === "firefox" ? "{ \u2026 }" : ""}`)
          : t
            ? c.createElement("span", null, "{\u2026}")
            : c.createElement(
                c.Fragment,
                null,
                c.createElement("span", null, `${n === "firefox" ? "Object " : ""}{ `),
                jt(e.children, r, !0),
                c.createElement("span", null, "}"),
              ),
      gd = (e, t, r) =>
        t
          ? c.createElement("span", null, `Promise { "${String(e.children[0].value)}" }`)
          : c.createElement(
              c.Fragment,
              null,
              c.createElement("span", null, "Promise { "),
              jt(e.children, r, !0),
              c.createElement("span", null, "}"),
            ),
      yd = (e, t, r, n) => {
        let { size: o } = e.value;
        return t
          ? c.createElement("span", null, `Map(${o})`)
          : c.createElement(
              c.Fragment,
              null,
              c.createElement("span", null, `Map${n === "chrome" ? `(${o})` : ""} { `),
              jt(e.children, r, !0),
              c.createElement("span", null, "}"),
            );
      },
      bd = (e, t, r) => {
        let { size: n } = e.value;
        return t
          ? c.createElement("span", null, "Set(", n, ")")
          : c.createElement(
              c.Fragment,
              null,
              c.createElement("span", null, `Set(${e.value.size}) {`),
              jt(e.children, r, !0),
              c.createElement("span", null, "}"),
            );
      },
      us = e => {
        let { ast: t, theme: r, previewMax: n, open: o, colorScheme: a, className: u } = e,
          i = (0, dd.default)(e, hd),
          { themeClass: s, currentTheme: l } = wr({ theme: r, colorScheme: a }, Z),
          f = t.isPrototype || !1,
          m = Pe(Z.objectLabel, s, u, { [Z.prototype]: f }),
          y = t.depth <= 0,
          E = () =>
            c.createElement("span", { className: f ? Z.prototype : Z.key }, y ? "" : `${t.key}: `);
        return t.type === "array"
          ? c.createElement(
              "span",
              (0, bt.default)({ className: m }, i),
              c.createElement(E, null),
              fd(t, o, n, l),
            )
          : t.type === "function"
            ? c.createElement(
                "span",
                (0, bt.default)({ className: m }, i),
                c.createElement(E, null),
                l === "chrome" &&
                  c.createElement("span", { className: Z.functionDecorator }, "\u0192 "),
                c.createElement(
                  "span",
                  { className: Pe({ [Z.function]: !f }) },
                  `${t.value.name}()`,
                ),
              )
            : t.type === "promise"
              ? c.createElement(
                  "span",
                  (0, bt.default)({ className: m }, i),
                  c.createElement(E, null),
                  gd(t, o, n),
                )
              : t.type === "map"
                ? c.createElement(
                    "span",
                    (0, bt.default)({ className: m }, i),
                    c.createElement(E, null),
                    yd(t, o, n, l),
                  )
                : t.type === "set"
                  ? c.createElement(
                      "span",
                      (0, bt.default)({ className: m }, i),
                      c.createElement(E, null),
                      bd(t, o, n),
                    )
                  : c.createElement(
                      "span",
                      (0, bt.default)({ className: m }, i),
                      c.createElement(E, null),
                      md(t, o, n, l),
                    );
      };
    us.defaultProps = { previewMax: 8, open: !1 };
    var Ed = us,
      Qn = e => {
        let { ast: t, expandLevel: r, depth: n } = e,
          [o, a] = ge(),
          [u, i] = ge(n < r);
        return (
          Fe(() => {
            (async () => {
              if (t.type !== "value") {
                let s = t.children.map(m => m()),
                  l = await Promise.all(s),
                  f = (0, Pi.default)((0, Pi.default)({}, t), {}, { children: l });
                a(f);
              }
            })();
          }, [t]),
          o
            ? c.createElement(
                Sr,
                {
                  hover: !1,
                  open: u,
                  label: c.createElement(Ed, { open: u, ast: o }),
                  onSelect: () => {
                    var s;
                    (s = e.onSelect) === null || s === void 0 || s.call(e, t);
                  },
                  onUpdate: s => {
                    i(s);
                  },
                },
                o.children.map(s =>
                  c.createElement(Qn, {
                    key: s.key,
                    ast: s,
                    depth: n + 1,
                    expandLevel: r,
                    onSelect: e.onSelect,
                  }),
                ),
              )
            : c.createElement(Sr, {
                hover: !1,
                label: c.createElement(as, { ast: t }),
                onSelect: () => {
                  var s;
                  (s = e.onSelect) === null || s === void 0 || s.call(e, t);
                },
              })
        );
      };
    Qn.defaultProps = { expandLevel: 0, depth: 0 };
    var Ad = Qn,
      Sd = [
        "data",
        "expandLevel",
        "sortKeys",
        "includePrototypes",
        "className",
        "theme",
        "colorScheme",
        "onSelect",
      ],
      is = e => {
        let {
            data: t,
            expandLevel: r,
            sortKeys: n,
            includePrototypes: o,
            className: a,
            theme: u,
            colorScheme: i,
            onSelect: s,
          } = e,
          l = (0, ed.default)(e, Sd),
          [f, m] = ge(void 0),
          {
            themeClass: y,
            currentTheme: E,
            currentColorScheme: w,
          } = wr({ theme: u, colorScheme: i }, Z);
        return (
          Fe(() => {
            (async () => m(await rd(t, n, o)))();
          }, [t, n, o]),
          c.createElement(
            "div",
            (0, Q2.default)({ className: Pe(Z.objectInspector, a, y) }, l),
            f &&
              c.createElement(
                ad,
                { theme: E, colorScheme: w },
                c.createElement(Ad, { ast: f, expandLevel: r, onSelect: s }),
              ),
          )
        );
      };
    is.defaultProps = { expandLevel: 0, sortKeys: !0, includePrototypes: !0 };
    var wd = {
        base: "#444",
        nullish: "#7D99AA",
        string: "#16B242",
        number: "#5D40D0",
        boolean: "#f41840",
        objectkey: "#698394",
        instance: "#A15C20",
        function: "#EA7509",
        muted: "#7D99AA",
        tag: { name: "#6F2CAC", suffix: "#1F99E5" },
        date: "#459D9C",
        error: { name: "#D43900", message: "#444" },
        regex: { source: "#A15C20", flags: "#EA7509" },
        meta: "#EA7509",
        method: "#0271B6",
      },
      Cd = {
        base: "#eee",
        nullish: "#aaa",
        string: "#5FE584",
        number: "#6ba5ff",
        boolean: "#ff4191",
        objectkey: "#accfe6",
        instance: "#E3B551",
        function: "#E3B551",
        muted: "#aaa",
        tag: { name: "#f57bff", suffix: "#8EB5FF" },
        date: "#70D4D3",
        error: { name: "#f40", message: "#eee" },
        regex: { source: "#FAD483", flags: "#E3B551" },
        meta: "#FAD483",
        method: "#5EC1FF",
      },
      fe = () => {
        let { base: e } = Ze();
        return e === "dark" ? Cd : wd;
      },
      vd = /[^A-Z0-9]/i,
      Ni = /[\s.,…]+$/gm,
      ss = (e, t) => {
        if (e.length <= t) return e;
        for (let r = t - 1; r >= 0; r -= 1)
          if (vd.test(e[r]) && r > 10) return `${e.slice(0, r).replace(Ni, "")}\u2026`;
        return `${e.slice(0, t).replace(Ni, "")}\u2026`;
      },
      Dd = e => {
        try {
          return JSON.stringify(e, null, 1);
        } catch {
          return String(e);
        }
      },
      ls = (e, t) =>
        e.flatMap((r, n) =>
          n === e.length - 1 ? [r] : [r, c.cloneElement(t, { key: `sep${n}` })],
        ),
      it = ({ value: e, nested: t, showObjectInspector: r, callsById: n, ...o }) => {
        switch (!0) {
          case e === null:
            return c.createElement(xd, { ...o });
          case e === void 0:
            return c.createElement(Td, { ...o });
          case Array.isArray(e):
            return c.createElement(Fd, { ...o, value: e, callsById: n });
          case typeof e == "string":
            return c.createElement(Rd, { ...o, value: e });
          case typeof e == "number":
            return c.createElement(_d, { ...o, value: e });
          case typeof e == "boolean":
            return c.createElement(Od, { ...o, value: e });
          case Object.prototype.hasOwnProperty.call(e, "__date__"):
            return c.createElement(Ld, { ...o, ...e.__date__ });
          case Object.prototype.hasOwnProperty.call(e, "__error__"):
            return c.createElement(kd, { ...o, ...e.__error__ });
          case Object.prototype.hasOwnProperty.call(e, "__regexp__"):
            return c.createElement(jd, { ...o, ...e.__regexp__ });
          case Object.prototype.hasOwnProperty.call(e, "__function__"):
            return c.createElement(Pd, { ...o, ...e.__function__ });
          case Object.prototype.hasOwnProperty.call(e, "__symbol__"):
            return c.createElement(Md, { ...o, ...e.__symbol__ });
          case Object.prototype.hasOwnProperty.call(e, "__element__"):
            return c.createElement(Nd, { ...o, ...e.__element__ });
          case Object.prototype.hasOwnProperty.call(e, "__class__"):
            return c.createElement(Bd, { ...o, ...e.__class__ });
          case Object.prototype.hasOwnProperty.call(e, "__callId__"):
            return c.createElement(eo, { call: n?.get(e.__callId__), callsById: n });
          case Object.prototype.toString.call(e) === "[object Object]":
            return c.createElement(Id, { value: e, showInspector: r, callsById: n, ...o });
          default:
            return c.createElement($d, { value: e, ...o });
        }
      },
      xd = e => {
        let t = fe();
        return c.createElement("span", { style: { color: t.nullish }, ...e }, "null");
      },
      Td = e => {
        let t = fe();
        return c.createElement("span", { style: { color: t.nullish }, ...e }, "undefined");
      },
      Rd = ({ value: e, ...t }) => {
        let r = fe();
        return c.createElement(
          "span",
          { style: { color: r.string }, ...t },
          JSON.stringify(ss(e, 50)),
        );
      },
      _d = ({ value: e, ...t }) => {
        let r = fe();
        return c.createElement("span", { style: { color: r.number }, ...t }, e);
      },
      Od = ({ value: e, ...t }) => {
        let r = fe();
        return c.createElement("span", { style: { color: r.boolean }, ...t }, String(e));
      },
      Fd = ({ value: e, nested: t = !1, callsById: r }) => {
        let n = fe();
        if (t) return c.createElement("span", { style: { color: n.base } }, "[\u2026]");
        let o = e
            .slice(0, 3)
            .map((u, i) =>
              c.createElement(it, {
                key: `${i}--${JSON.stringify(u)}`,
                value: u,
                nested: !0,
                callsById: r,
              }),
            ),
          a = ls(o, c.createElement("span", null, ", "));
        return e.length <= 3
          ? c.createElement("span", { style: { color: n.base } }, "[", a, "]")
          : c.createElement(
              "span",
              { style: { color: n.base } },
              "(",
              e.length,
              ") [",
              a,
              ", \u2026]",
            );
      },
      Id = ({ showInspector: e, value: t, callsById: r, nested: n = !1 }) => {
        let o = Ze().base === "dark",
          a = fe();
        if (e)
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(is, {
              id: "interactions-object-inspector",
              data: t,
              includePrototypes: !1,
              colorScheme: o ? "dark" : "light",
            }),
          );
        if (n) return c.createElement("span", { style: { color: a.base } }, "{\u2026}");
        let u = ls(
          Object.entries(t)
            .slice(0, 2)
            .map(([i, s]) =>
              c.createElement(
                Mt,
                { key: i },
                c.createElement("span", { style: { color: a.objectkey } }, i, ": "),
                c.createElement(it, { value: s, callsById: r, nested: !0 }),
              ),
            ),
          c.createElement("span", null, ", "),
        );
        return Object.keys(t).length <= 2
          ? c.createElement("span", { style: { color: a.base } }, "{ ", u, " }")
          : c.createElement(
              "span",
              { style: { color: a.base } },
              "(",
              Object.keys(t).length,
              ") ",
              "{ ",
              u,
              ", \u2026 }",
            );
      },
      Bd = ({ name: e }) => {
        let t = fe();
        return c.createElement("span", { style: { color: t.instance } }, e);
      },
      Pd = ({ name: e }) => {
        let t = fe();
        return e
          ? c.createElement("span", { style: { color: t.function } }, e)
          : c.createElement(
              "span",
              { style: { color: t.nullish, fontStyle: "italic" } },
              "anonymous",
            );
      },
      Nd = ({ prefix: e, localName: t, id: r, classNames: n = [], innerText: o }) => {
        let a = e ? `${e}:${t}` : t,
          u = fe();
        return c.createElement(
          "span",
          { style: { wordBreak: "keep-all" } },
          c.createElement("span", { key: `${a}_lt`, style: { color: u.muted } }, "<"),
          c.createElement("span", { key: `${a}_tag`, style: { color: u.tag.name } }, a),
          c.createElement(
            "span",
            { key: `${a}_suffix`, style: { color: u.tag.suffix } },
            r ? `#${r}` : n.reduce((i, s) => `${i}.${s}`, ""),
          ),
          c.createElement("span", { key: `${a}_gt`, style: { color: u.muted } }, ">"),
          !r &&
            n.length === 0 &&
            o &&
            c.createElement(
              c.Fragment,
              null,
              c.createElement("span", { key: `${a}_text` }, o),
              c.createElement("span", { key: `${a}_close_lt`, style: { color: u.muted } }, "<"),
              c.createElement(
                "span",
                { key: `${a}_close_tag`, style: { color: u.tag.name } },
                "/",
                a,
              ),
              c.createElement("span", { key: `${a}_close_gt`, style: { color: u.muted } }, ">"),
            ),
        );
      },
      Ld = ({ value: e }) => {
        let t = e instanceof Date ? e.toISOString() : e,
          [r, n, o] = t.split(/[T.Z]/),
          a = fe();
        return c.createElement(
          "span",
          { style: { whiteSpace: "nowrap", color: a.date } },
          r,
          c.createElement("span", { style: { opacity: 0.7 } }, "T"),
          n === "00:00:00" ? c.createElement("span", { style: { opacity: 0.7 } }, n) : n,
          o === "000" ? c.createElement("span", { style: { opacity: 0.7 } }, ".", o) : `.${o}`,
          c.createElement("span", { style: { opacity: 0.7 } }, "Z"),
        );
      },
      kd = ({ name: e, message: t }) => {
        let r = fe();
        return c.createElement(
          "span",
          { style: { color: r.error.name } },
          e,
          t && ": ",
          t &&
            c.createElement(
              "span",
              { style: { color: r.error.message }, title: t.length > 50 ? t : "" },
              ss(t, 50),
            ),
        );
      },
      jd = ({ flags: e, source: t }) => {
        let r = fe();
        return c.createElement(
          "span",
          { style: { whiteSpace: "nowrap", color: r.regex.flags } },
          "/",
          c.createElement("span", { style: { color: r.regex.source } }, t),
          "/",
          e,
        );
      },
      Md = ({ description: e }) => {
        let t = fe();
        return c.createElement(
          "span",
          { style: { whiteSpace: "nowrap", color: t.instance } },
          "Symbol(",
          e && c.createElement("span", { style: { color: t.meta } }, '"', e, '"'),
          ")",
        );
      },
      $d = ({ value: e }) => {
        let t = fe();
        return c.createElement("span", { style: { color: t.meta } }, Dd(e));
      },
      qd = ({ label: e }) => {
        let t = fe(),
          { typography: r } = Ze();
        return c.createElement(
          "span",
          { style: { color: t.base, fontFamily: r.fonts.base, fontSize: r.size.s2 - 1 } },
          e,
        );
      },
      eo = ({ call: e, callsById: t }) => {
        if (!e) return null;
        if (e.method === "step" && e.path?.length === 0)
          return c.createElement(qd, { label: e.args[0] });
        let r = e.path?.flatMap((a, u) => {
            let i = a.__callId__;
            return [
              i
                ? c.createElement(eo, { key: `elem${u}`, call: t?.get(i), callsById: t })
                : c.createElement("span", { key: `elem${u}` }, a),
              c.createElement("wbr", { key: `wbr${u}` }),
              c.createElement("span", { key: `dot${u}` }, "."),
            ];
          }),
          n = e.args?.flatMap((a, u, i) => {
            let s = c.createElement(it, { key: `node${u}`, value: a, callsById: t });
            return u < i.length - 1
              ? [
                  s,
                  c.createElement("span", { key: `comma${u}` }, ",\xA0"),
                  c.createElement("wbr", { key: `wbr${u}` }),
                ]
              : [s];
          }),
          o = fe();
        return c.createElement(
          c.Fragment,
          null,
          c.createElement("span", { style: { color: o.base } }, r),
          c.createElement("span", { style: { color: o.method } }, e.method),
          c.createElement(
            "span",
            { style: { color: o.base } },
            "(",
            c.createElement("wbr", null),
            n,
            c.createElement("wbr", null),
            ")",
          ),
        );
      },
      Li = (e, t = 0) => {
        for (let r = t, n = 1; r < e.length; r += 1)
          if ((e[r] === "(" ? (n += 1) : e[r] === ")" && (n -= 1), n === 0)) return e.slice(t, r);
        return "";
      },
      jn = e => {
        try {
          return e === "undefined" ? void 0 : JSON.parse(e);
        } catch {
          return e;
        }
      },
      Ud = $.span(({ theme: e }) => ({
        color: e.base === "light" ? e.color.positiveText : e.color.positive,
      })),
      zd = $.span(({ theme: e }) => ({
        color: e.base === "light" ? e.color.negativeText : e.color.negative,
      })),
      Mn = ({ value: e, parsed: t }) =>
        t
          ? c.createElement(it, { showObjectInspector: !0, value: e, style: { color: "#D43900" } })
          : c.createElement(zd, null, e),
      $n = ({ value: e, parsed: t }) =>
        t
          ? typeof e == "string" && e.startsWith("called with")
            ? c.createElement(c.Fragment, null, e)
            : c.createElement(it, {
                showObjectInspector: !0,
                value: e,
                style: { color: "#16B242" },
              })
          : c.createElement(Ud, null, e),
      ki = ({ message: e, style: t = {} }) => {
        let r = Jn(),
          n = e.split(`
`);
        return c.createElement(
          "pre",
          { style: { margin: 0, padding: "8px 10px 8px 36px", fontSize: Le.size.s1, ...t } },
          n.flatMap((o, a) => {
            if (o.startsWith("expect(")) {
              let m = Li(o, 7),
                y = m ? 7 + m.length : 0,
                E = m && o.slice(y).match(/\.(to|last|nth)[A-Z]\w+\(/);
              if (E) {
                let w = y + (E.index ?? 0) + E[0].length,
                  C = Li(o, w);
                if (C)
                  return [
                    "expect(",
                    c.createElement(Mn, { key: `received_${m}`, value: m }),
                    o.slice(y, w),
                    c.createElement($n, { key: `expected_${C}`, value: C }),
                    o.slice(w + C.length),
                    c.createElement("br", { key: `br${a}` }),
                  ];
              }
            }
            if (o.match(/^\s*- /))
              return [
                c.createElement($n, { key: o + a, value: o }),
                c.createElement("br", { key: `br${a}` }),
              ];
            if (o.match(/^\s*\+ /) || o.match(/^Received: $/))
              return [
                c.createElement(Mn, { key: o + a, value: o }),
                c.createElement("br", { key: `br${a}` }),
              ];
            let [, u, i] = o.match(/^(Expected|Received): (.*)$/) || [];
            if (u && i)
              return u === "Expected"
                ? [
                    "Expected: ",
                    c.createElement($n, { key: o + a, value: jn(i), parsed: !0 }),
                    c.createElement("br", { key: `br${a}` }),
                  ]
                : [
                    "Received: ",
                    c.createElement(Mn, { key: o + a, value: jn(i), parsed: !0 }),
                    c.createElement("br", { key: `br${a}` }),
                  ];
            let [, s, l] =
              o.match(/(Expected number|Received number|Number) of calls: (\d+)$/i) || [];
            if (s && l)
              return [
                `${s} of calls: `,
                c.createElement(it, { key: o + a, value: Number(l) }),
                c.createElement("br", { key: `br${a}` }),
              ];
            let [, f] = o.match(/^Received has value: (.+)$/) || [];
            return f
              ? [
                  "Received has value: ",
                  c.createElement(it, { key: o + a, value: jn(f) }),
                  c.createElement("br", { key: `br${a}` }),
                ]
              : [
                  c.createElement("span", {
                    key: o + a,
                    dangerouslySetInnerHTML: { __html: r.toHtml(o) },
                  }),
                  c.createElement("br", { key: `br${a}` }),
                ];
          }),
        );
      },
      Hd = $.div({
        width: 14,
        height: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }),
      Gd = ({ status: e }) => {
        let t = Ze();
        switch (e) {
          case H.DONE:
            return c.createElement(Ao, { color: t.color.positive, "data-testid": "icon-done" });
          case H.ERROR:
            return c.createElement(_r, { color: t.color.negative, "data-testid": "icon-error" });
          case H.ACTIVE:
            return c.createElement(Oo, { color: t.color.secondary, "data-testid": "icon-active" });
          case H.WAITING:
            return c.createElement(
              Hd,
              { "data-testid": "icon-waiting" },
              c.createElement(So, { color: Er(0.5, "#CCCCCC"), size: 6 }),
            );
          default:
            return null;
        }
      },
      Vd = $.div({
        fontFamily: Le.fonts.mono,
        fontSize: Le.size.s1,
        overflowWrap: "break-word",
        inlineSize: "calc( 100% - 40px )",
      }),
      Wd = $("div", { shouldForwardProp: e => !["call", "pausedAt"].includes(e.toString()) })(
        ({ theme: e, call: t }) => ({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          borderBottom: `1px solid ${e.appBorderColor}`,
          fontFamily: Le.fonts.base,
          fontSize: 13,
          ...(t.status === H.ERROR && {
            backgroundColor: e.base === "dark" ? Er(0.93, e.color.negative) : e.background.warning,
          }),
          paddingLeft: (t.ancestors?.length ?? 0) * 20,
        }),
        ({ theme: e, call: t, pausedAt: r }) =>
          r === t.id && {
            "&::before": {
              content: '""',
              position: "absolute",
              top: -5,
              zIndex: 1,
              borderTop: "4.5px solid transparent",
              borderLeft: `7px solid ${e.color.warning}`,
              borderBottom: "4.5px solid transparent",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: -1,
              zIndex: 1,
              width: "100%",
              borderTop: `1.5px solid ${e.color.warning}`,
            },
          },
      ),
      Yd = $.div(({ theme: e, isInteractive: t }) => ({
        display: "flex",
        "&:hover": t ? {} : { background: e.background.hoverable },
      })),
      Kd = $("button", { shouldForwardProp: e => !["call"].includes(e.toString()) })(
        ({ theme: e, disabled: t, call: r }) => ({
          flex: 1,
          display: "grid",
          background: "none",
          border: 0,
          gridTemplateColumns: "15px 1fr",
          alignItems: "center",
          minHeight: 40,
          margin: 0,
          padding: "8px 15px",
          textAlign: "start",
          cursor: t || r.status === H.ERROR ? "default" : "pointer",
          "&:focus-visible": {
            outline: 0,
            boxShadow: `inset 3px 0 0 0 ${r.status === H.ERROR ? e.color.warning : e.color.secondary}`,
            background: r.status === H.ERROR ? "transparent" : e.background.hoverable,
          },
          "& > div": { opacity: r.status === H.WAITING ? 0.5 : 1 },
        }),
      ),
      Xd = $.div({ padding: 6 }),
      Jd = $(Ut)(({ theme: e }) => ({ color: e.textMutedColor, margin: "0 3px" })),
      Zd = $(Je)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base })),
      ji = $("div")(({ theme: e }) => ({
        padding: "8px 10px 8px 36px",
        fontSize: Le.size.s1,
        color: e.color.defaultText,
        pre: { margin: 0, padding: 0 },
      })),
      Qd = ({ exception: e }) => {
        let t = Jn();
        if (!e) return null;
        if (ts(e)) return z(ki, { ...e });
        if (es(e))
          return z(
            ji,
            null,
            z(ki, {
              message: `${e.message}${
                e.diff
                  ? `

${e.diff}`
                  : ""
              }`,
              style: { padding: 0 },
            }),
            z("p", null, "See the full stack trace in the browser console."),
          );
        let r = e.message.split(`

`),
          n = r.length > 1;
        return z(
          ji,
          null,
          z("pre", { dangerouslySetInnerHTML: { __html: t.toHtml(r[0]) } }),
          n && z("p", null, "See the full stack trace in the browser console."),
        );
      },
      eh = ({
        call: e,
        callsById: t,
        controls: r,
        controlStates: n,
        childCallIds: o,
        isHidden: a,
        isCollapsed: u,
        toggleCollapsed: i,
        pausedAt: s,
      }) => {
        let [l, f] = ge(!1),
          m = !n.goto || !e.interceptable || !!e.ancestors?.length;
        return a
          ? null
          : z(
              Wd,
              { call: e, pausedAt: s },
              z(
                Yd,
                { isInteractive: m },
                z(
                  Kd,
                  {
                    "aria-label": "Interaction step",
                    call: e,
                    onClick: () => r.goto(e.id),
                    disabled: m,
                    onMouseEnter: () => n.goto && f(!0),
                    onMouseLeave: () => n.goto && f(!1),
                  },
                  z(Gd, { status: l ? H.ACTIVE : e.status }),
                  z(
                    Vd,
                    { style: { marginLeft: 6, marginBottom: 1 } },
                    z(eo, { call: e, callsById: t }),
                  ),
                ),
                z(
                  Xd,
                  null,
                  (o?.length ?? 0) > 0 &&
                    z(
                      Re,
                      {
                        hasChrome: !1,
                        tooltip: z(Zd, { note: `${u ? "Show" : "Hide"} interactions` }),
                      },
                      z(Jd, { onClick: i }, z(To, null)),
                    ),
                ),
              ),
              e.status === H.ERROR &&
                e.exception?.callId === e.id &&
                z(Qd, { exception: e.exception }),
            );
      },
      th = $.div(({ theme: e, status: t }) => ({
        padding: "4px 6px 4px 8px;",
        borderRadius: "4px",
        backgroundColor: {
          [H.DONE]: e.color.positive,
          [H.ERROR]: e.color.negative,
          [H.ACTIVE]: e.color.warning,
          [H.WAITING]: e.color.warning,
        }[t],
        color: "white",
        fontFamily: Le.fonts.base,
        textTransform: "uppercase",
        fontSize: Le.size.s1,
        letterSpacing: 3,
        fontWeight: Le.weight.bold,
        width: 65,
        textAlign: "center",
      })),
      rh = ({ status: e }) => {
        let t = { [H.DONE]: "Pass", [H.ERROR]: "Fail", [H.ACTIVE]: "Runs", [H.WAITING]: "Runs" }[e];
        return c.createElement(th, { "aria-label": "Status of the test run", status: e }, t);
      },
      nh = $.div(({ theme: e }) => ({
        background: e.background.app,
        borderBottom: `1px solid ${e.appBorderColor}`,
        position: "sticky",
        top: 0,
        zIndex: 1,
      })),
      oh = $.nav(({ theme: e }) => ({
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 15,
      })),
      ah = $($e)(({ theme: e }) => ({
        borderRadius: 4,
        padding: 6,
        color: e.textMutedColor,
        "&:not(:disabled)": { "&:hover,&:focus-visible": { color: e.color.secondary } },
      })),
      Nt = $(Je)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base })),
      kt = $(Ut)(({ theme: e }) => ({ color: e.textMutedColor, margin: "0 3px" })),
      uh = $(so)({ marginTop: 0 }),
      ih = $(uo)(({ theme: e }) => ({
        color: e.textMutedColor,
        justifyContent: "flex-end",
        textAlign: "right",
        whiteSpace: "nowrap",
        marginTop: "auto",
        marginBottom: 1,
        paddingRight: 15,
        fontSize: 13,
      })),
      Mi = $.div({ display: "flex", alignItems: "center" }),
      sh = $(kt)({ marginLeft: 9 }),
      lh = $(ah)({ marginLeft: 9, marginRight: 9, marginBottom: 1, lineHeight: "12px" }),
      ch = $(kt)(({ theme: e, animating: t, disabled: r }) => ({
        opacity: r ? 0.5 : 1,
        svg: { animation: t ? `${e.animation.rotate360} 200ms ease-out` : void 0 },
      })),
      ph = ({ controls: e, controlStates: t, status: r, storyFileName: n, onScrollToEnd: o }) => {
        let a = r === H.ERROR ? "Scroll to error" : "Scroll to end";
        return c.createElement(
          nh,
          null,
          c.createElement(
            no,
            null,
            c.createElement(
              oh,
              null,
              c.createElement(
                Mi,
                null,
                c.createElement(rh, { status: r }),
                c.createElement(lh, { onClick: o, disabled: !o }, a),
                c.createElement(uh, null),
                c.createElement(
                  Re,
                  {
                    trigger: "hover",
                    hasChrome: !1,
                    tooltip: c.createElement(Nt, { note: "Go to start" }),
                  },
                  c.createElement(
                    sh,
                    { "aria-label": "Go to start", onClick: e.start, disabled: !t.start },
                    c.createElement(Bo, null),
                  ),
                ),
                c.createElement(
                  Re,
                  {
                    trigger: "hover",
                    hasChrome: !1,
                    tooltip: c.createElement(Nt, { note: "Go back" }),
                  },
                  c.createElement(
                    kt,
                    { "aria-label": "Go back", onClick: e.back, disabled: !t.back },
                    c.createElement(Ro, null),
                  ),
                ),
                c.createElement(
                  Re,
                  {
                    trigger: "hover",
                    hasChrome: !1,
                    tooltip: c.createElement(Nt, { note: "Go forward" }),
                  },
                  c.createElement(
                    kt,
                    { "aria-label": "Go forward", onClick: e.next, disabled: !t.next },
                    c.createElement(Fo, null),
                  ),
                ),
                c.createElement(
                  Re,
                  {
                    trigger: "hover",
                    hasChrome: !1,
                    tooltip: c.createElement(Nt, { note: "Go to end" }),
                  },
                  c.createElement(
                    kt,
                    { "aria-label": "Go to end", onClick: e.end, disabled: !t.end },
                    c.createElement(xo, null),
                  ),
                ),
                c.createElement(
                  Re,
                  {
                    trigger: "hover",
                    hasChrome: !1,
                    tooltip: c.createElement(Nt, { note: "Rerun" }),
                  },
                  c.createElement(
                    ch,
                    { "aria-label": "Rerun", onClick: e.rerun },
                    c.createElement(Or, null),
                  ),
                ),
              ),
              n && c.createElement(Mi, null, c.createElement(ih, null, n)),
            ),
          ),
        );
      },
      dh = $.div(({ theme: { color: e, typography: t, background: r } }) => ({
        textAlign: "start",
        padding: "11px 15px",
        fontSize: `${t.size.s2}px`,
        fontWeight: t.weight.regular,
        lineHeight: "1rem",
        background: r.app,
        borderBottom: `1px solid ${e.border}`,
        color: e.defaultText,
        backgroundClip: "padding-box",
        position: "relative",
        code: {
          fontSize: `${t.size.s1 - 1}px`,
          color: "inherit",
          margin: "0 0.2em",
          padding: "0 0.2em",
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "2px",
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)",
        },
      })),
      hh = ({ browserTestStatus: e }) => {
        let t = zt().getDocsUrl({ subpath: N2, versioned: !0, renderer: !0 }),
          [r, n] = e === H.ERROR ? ["the CLI", "this browser"] : ["this browser", "the CLI"];
        return c.createElement(
          dh,
          null,
          "This component test passed in ",
          r,
          ", but the tests failed in ",
          n,
          ".",
          " ",
          c.createElement(
            vt,
            { href: t, target: "_blank", withArrow: !0 },
            "Learn what could cause this",
          ),
        );
      },
      fh = $.div(({ theme: e }) => ({ height: "100%", background: e.background.content })),
      $i = $.div(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        backgroundColor: e.base === "dark" ? Er(0.93, e.color.negative) : e.background.warning,
        padding: 15,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: "19px",
      })),
      qn = $.code(({ theme: e }) => ({
        margin: "0 1px",
        padding: 3,
        fontSize: e.typography.size.s1 - 1,
        lineHeight: 1,
        verticalAlign: "top",
        background: "rgba(0, 0, 0, 0.05)",
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 3,
      })),
      qi = $.div({ paddingBottom: 4, fontWeight: "bold" }),
      mh = $.p({ margin: 0, padding: "0 0 20px" }),
      Ui = $.pre(({ theme: e }) => ({
        margin: 0,
        padding: 0,
        "&:not(:last-child)": { paddingBottom: 16 },
        fontSize: e.typography.size.s1 - 1,
      })),
      gh = $t(function ({
        calls: e,
        controls: t,
        controlStates: r,
        interactions: n,
        fileName: o,
        hasException: a,
        caughtException: u,
        unhandledErrors: i,
        isPlaying: s,
        pausedAt: l,
        onScrollToEnd: f,
        endRef: m,
        hasResultMismatch: y,
        browserTestStatus: E,
      }) {
        let w = Jn();
        return z(
          fh,
          null,
          y && z(hh, { browserTestStatus: E }),
          (n.length > 0 || a) &&
            z(ph, { controls: t, controlStates: r, status: E, storyFileName: o, onScrollToEnd: f }),
          z(
            "div",
            { "aria-label": "Interactions list" },
            n.map(C =>
              z(eh, {
                key: C.id,
                call: C,
                callsById: e,
                controls: t,
                controlStates: r,
                childCallIds: C.childCallIds,
                isHidden: C.isHidden,
                isCollapsed: C.isCollapsed,
                toggleCollapsed: C.toggleCollapsed,
                pausedAt: l,
              }),
            ),
          ),
          u &&
            !Y2(u) &&
            z(
              $i,
              null,
              z(qi, null, "Caught exception in ", z(qn, null, "play"), " function"),
              z(Ui, {
                "data-chromatic": "ignore",
                dangerouslySetInnerHTML: { __html: w.toHtml(zi(u)) },
              }),
            ),
          i &&
            z(
              $i,
              null,
              z(qi, null, "Unhandled Errors"),
              z(
                mh,
                null,
                "Found ",
                i.length,
                " unhandled error",
                i.length > 1 ? "s" : "",
                " ",
                "while running the play function. This might cause false positive assertions. Resolve unhandled errors or ignore unhandled errors with setting the",
                z(qn, null, "test.dangerouslyIgnoreUnhandledErrors"),
                " ",
                "parameter to ",
                z(qn, null, "true"),
                ".",
              ),
              i.map((C, b) => z(Ui, { key: b, "data-chromatic": "ignore" }, zi(C))),
            ),
          z("div", { ref: m }),
          !s && !u && n.length === 0 && z(Z2, null),
        );
      });
    function zi(e) {
      return e.stack || `${e.name}: ${e.message}`;
    }
    var Un = { start: !1, back: !1, goto: !1, next: !1, end: !1 },
      yh = {
        [H.DONE]: "success",
        [H.ERROR]: "error",
        [H.ACTIVE]: "pending",
        [H.WAITING]: "pending",
      },
      Hi = ({ log: e, calls: t, collapsed: r, setCollapsed: n }) => {
        let o = new Map(),
          a = new Map();
        return e
          .map(({ callId: u, ancestors: i, status: s }) => {
            let l = !1;
            return (
              i.forEach(f => {
                r.has(f) && (l = !0), a.set(f, (a.get(f) || []).concat(u));
              }),
              { ...t.get(u), status: s, isHidden: l }
            );
          })
          .map(u => {
            let i =
              u.status === H.ERROR &&
              u.ancestors &&
              o.get(u.ancestors.slice(-1)[0])?.status === H.ACTIVE
                ? H.ACTIVE
                : u.status;
            return (
              o.set(u.id, { ...u, status: i }),
              {
                ...u,
                status: i,
                childCallIds: a.get(u.id),
                isCollapsed: r.has(u.id),
                toggleCollapsed: () =>
                  n(s => (s.has(u.id) ? s.delete(u.id) : s.add(u.id), new Set(s))),
              }
            );
          });
      },
      bh = $t(function ({ storyId: e }) {
        let { status: t } = yo(),
          [r, n] = Rr(At, {
            controlStates: Un,
            isErrored: !1,
            pausedAt: void 0,
            interactions: [],
            isPlaying: !1,
            hasException: !1,
            caughtException: void 0,
            interactionsCount: 0,
            unhandledErrors: void 0,
          }),
          [o, a] = ge(void 0),
          [u, i] = ge(new Set()),
          [s, l] = ge(!1),
          {
            controlStates: f = Un,
            isErrored: m = !1,
            pausedAt: y = void 0,
            interactions: E = [],
            isPlaying: w = !1,
            caughtException: C = void 0,
            unhandledErrors: b = void 0,
          } = r,
          S = qt([]),
          A = qt(new Map()),
          x = ({ status: p, ...g }) => A.current.set(g.id, g),
          _ = qt();
        Fe(() => {
          let p;
          return (
            Rt.IntersectionObserver &&
              ((p = new Rt.IntersectionObserver(([g]) => a(g.isIntersecting ? void 0 : g.target), {
                root: Rt.document.querySelector("#panel-tab-content"),
              })),
              _.current && p.observe(_.current)),
            () => p?.disconnect()
          );
        }, []);
        let I = mo(
          {
            [We.CALL]: x,
            [We.SYNC]: p => {
              n(g => {
                let R = Hi({ log: p.logItems, calls: A.current, collapsed: u, setCollapsed: i });
                return {
                  ...g,
                  controlStates: p.controlStates,
                  pausedAt: p.pausedAt,
                  interactions: R,
                  interactionsCount: R.filter(({ method: D }) => D !== "step").length,
                };
              }),
                (S.current = p.logItems);
            },
            [ke]: p => {
              if (p.newPhase === "preparing") {
                n({
                  controlStates: Un,
                  isErrored: !1,
                  pausedAt: void 0,
                  interactions: [],
                  isPlaying: !1,
                  hasException: !1,
                  caughtException: void 0,
                  interactionsCount: 0,
                  unhandledErrors: void 0,
                });
                return;
              }
              n(g => ({
                ...g,
                isPlaying: p.newPhase === "playing",
                pausedAt: void 0,
                ...(p.newPhase === "rendering" ? { isErrored: !1, caughtException: void 0 } : {}),
              }));
            },
            [Yt]: () => {
              n(p => ({ ...p, isErrored: !0, hasException: !0 }));
            },
            [Vt]: p => {
              n(g => ({ ...g, caughtException: p, hasException: !0 }));
            },
            [Kt]: p => {
              n(g => ({ ...g, unhandledErrors: p, hasException: !0 }));
            },
          },
          [u],
        );
        Fe(() => {
          n(p => {
            let g = Hi({ log: S.current, calls: A.current, collapsed: u, setCollapsed: i });
            return {
              ...p,
              interactions: g,
              interactionsCount: g.filter(({ method: R }) => R !== "step").length,
            };
          });
        }, [n, u]);
        let v = Ct(
            () => ({
              start: () => I(We.START, { storyId: e }),
              back: () => I(We.BACK, { storyId: e }),
              goto: p => I(We.GOTO, { storyId: e, callId: p }),
              next: () => I(We.NEXT, { storyId: e }),
              end: () => I(We.END, { storyId: e }),
              rerun: () => {
                I(xt, { storyId: e });
              },
            }),
            [I, e],
          ),
          T = go("fileName", ""),
          [B] = T.toString().split("/").slice(-1),
          L = () => o?.scrollIntoView({ behavior: "smooth", block: "end" }),
          k = !!C || !!b || E.some(p => p.status === H.ERROR),
          q = t[e]?.[Ar],
          P = q?.status,
          M = Ct(
            () => (!w && (E.length > 0 || k) ? (k ? H.ERROR : H.DONE) : w ? H.ACTIVE : void 0),
            [w, E, k],
          ),
          { testRunId: h } = q?.data || {};
        return (
          Fe(() => {
            if (M && P && P !== "pending" && P !== yh[M]) {
              let p = setTimeout(
                () =>
                  l(
                    g => (
                      g ||
                        I(B2, {
                          type: "test-discrepancy",
                          payload: {
                            browserStatus: M === H.DONE ? "PASS" : "FAIL",
                            cliStatus: M === H.DONE ? "FAIL" : "PASS",
                            storyId: e,
                            testRunId: h,
                          },
                        }),
                      !0
                    ),
                  ),
                2e3,
              );
              return () => clearTimeout(p);
            } else l(!1);
          }, [I, M, P, e, h]),
          m
            ? c.createElement(Mt, { key: "component-tests" })
            : c.createElement(
                Mt,
                { key: "component-tests" },
                c.createElement(gh, {
                  hasResultMismatch: s,
                  browserTestStatus: M,
                  calls: A.current,
                  controls: v,
                  controlStates: f,
                  interactions: E,
                  fileName: B,
                  hasException: k,
                  caughtException: C,
                  unhandledErrors: b,
                  isPlaying: w,
                  pausedAt: y,
                  endRef: _,
                  onScrollToEnd: o && L,
                }),
              )
        );
      });
    function Eh() {
      let [e = {}] = Rr(At),
        { hasException: t, interactionsCount: r } = e;
      return c.createElement(
        "div",
        null,
        c.createElement(
          lo,
          { col: 1 },
          c.createElement(
            "span",
            { style: { display: "inline-block", verticalAlign: "middle" } },
            "Component tests",
          ),
          r && !t ? c.createElement(Tr, { status: "neutral" }, r) : null,
          t ? c.createElement(Tr, { status: "negative" }, r) : null,
        ),
      );
    }
    var cs = "storybook/a11y",
      Ah = `${cs}/panel`,
      Sh = ({ timestamp: e }) => {
        let [t, r] = ge(null);
        if (
          (Fe(() => {
            if (e) {
              r(Date.now() - e);
              let i = setInterval(() => r(Date.now() - e), 1e4);
              return () => clearInterval(i);
            }
          }, [e]),
          t === null)
        )
          return null;
        let n = Math.round(t / 1e3);
        if (n < 60) return "just now";
        let o = Math.floor(n / 60);
        if (o < 60) return o === 1 ? "a minute ago" : `${o} minutes ago`;
        let a = Math.floor(o / 60);
        if (a < 24) return a === 1 ? "an hour ago" : `${a} hours ago`;
        let u = Math.floor(a / 24);
        return u === 1 ? "yesterday" : `${u} days ago`;
      },
      wh = $.div(({ theme: e }) => ({
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        fontSize: e.typography.size.s1,
        color: e.textMutedColor,
      }));
    $.span(({ theme: e }) => ({ color: e.color.positiveText }));
    function Ch({ state: e, watching: t, entryId: r, results: n, ...o }) {
      let { setModalOpen: a } = c.useContext(Xn),
        u = e.error?.message,
        i = "Not run";
      return (
        e.running
          ? (i = e.progress
              ? `Testing... ${e.progress.numPassedTests}/${e.progress.numTotalTests}`
              : "Starting...")
          : r && n?.length
            ? (i = `Ran ${n.length} ${n.length === 1 ? "test" : "tests"}`)
            : e.failed && !u
              ? (i = "Failed")
              : e.crashed || (e.failed && u)
                ? (i = a
                    ? c.createElement(
                        vt,
                        { isButton: !0, onClick: () => a(!0) },
                        e.error?.name || "View full error",
                      )
                    : e.error?.name || "Failed")
                : e.progress?.finishedAt
                  ? (i = c.createElement(
                      c.Fragment,
                      null,
                      "Ran ",
                      e.progress.numTotalTests,
                      " ",
                      e.progress.numTotalTests === 1 ? "test" : "tests",
                      " ",
                      c.createElement(Sh, { timestamp: e.progress.finishedAt }),
                    ))
                  : t && (i = "Watching for file changes"),
        c.createElement(wh, { ...o }, i)
      );
    }
    var Et = $.div(
        ({ percentage: e }) => ({
          width: e ? 12 : 6,
          height: e ? 12 : 6,
          margin: e ? 1 : 4,
          background: e
            ? `conic-gradient(var(--status-color) ${e}%, var(--status-background) ${e + 1}%)`
            : "var(--status-color)",
          borderRadius: "50%",
        }),
        ({ status: e, theme: t }) =>
          e === "pending" && {
            animation: `${t.animation.glow} 1.5s ease-in-out infinite`,
            "--status-color": t.color.mediumdark,
            "--status-background": `${t.color.mediumdark}66`,
          },
        ({ status: e, theme: t }) =>
          e === "positive" && {
            "--status-color": t.color.positive,
            "--status-background": `${t.color.positive}66`,
          },
        ({ status: e, theme: t }) =>
          e === "warning" && {
            "--status-color": t.color.gold,
            "--status-background": `${t.color.gold}66`,
          },
        ({ status: e, theme: t }) =>
          e === "negative" && {
            "--status-color": t.color.negative,
            "--status-background": `${t.color.negative}66`,
          },
        ({ status: e, theme: t }) =>
          e === "critical" && {
            "--status-color": t.color.defaultText,
            "--status-background": `${t.color.defaultText}66`,
          },
        ({ status: e, theme: t }) =>
          e === "unknown" && {
            "--status-color": t.color.mediumdark,
            "--status-background": `${t.color.mediumdark}66`,
          },
      ),
      vh = $.div({ display: "flex", flexDirection: "column" }),
      Dh = $.div({ display: "flex", justifyContent: "space-between", padding: "8px 2px", gap: 12 }),
      xh = $.div({ display: "flex", flexDirection: "column", marginLeft: 6, minWidth: 0 }),
      Th = $.div(({ crashed: e, theme: t }) => ({
        fontSize: t.typography.size.s1,
        fontWeight: e ? "bold" : "normal",
        color: e ? t.color.negativeText : t.color.defaultText,
      })),
      Rh = $.div({ display: "flex", gap: 2 }),
      Gi = $.div({ marginBottom: 2 }),
      zn = $.input({ margin: 0, "&:enabled": { cursor: "pointer" } }),
      _h = $(io)({ margin: 2 }),
      Oh = $(_r)({ width: 10 }),
      Lt = $.span(
        ({ enabled: e, theme: t }) =>
          !e && { color: t.textMutedColor, "&:after": { content: '" (disabled)"' } },
      ),
      Vi = ["failed", "warning", "pending", "passed", "skipped"],
      Fh = {
        failed: "negative",
        warning: "warning",
        passed: "positive",
        skipped: "unknown",
        pending: "pending",
      },
      Wi = ({ state: e, api: t, entryId: r, ...n }) => {
        let [o, a] = ge(!1),
          u = Ze(),
          i = e.details?.coverageSummary,
          s = Dt.experimental_getRegisteredAddons().includes(cs),
          [{ config: l, watching: f }, m] = ho(Qi),
          y = r?.includes("--") ?? !1,
          E = Ct(
            () =>
              s
                ? e.details?.testResults?.flatMap(v =>
                    v.results
                      .filter(Boolean)
                      .filter(T => !r || T.storyId === r || T.storyId?.startsWith(`${r}-`))
                      .map(T => T.reports.find(B => B.type === "a11y")),
                  )
                : [],
            [s, e.details?.testResults, r],
          ),
          w = Ct(() => {
            if (e.running || !s || l.a11y === !1) return "unknown";
            let v = E?.filter(Boolean) ?? [];
            if (!v || v.length === 0) return "unknown";
            let T = v.some(L => L?.status === "failed"),
              B = v.some(L => L?.status === "warning");
            return T ? "negative" : B ? "warning" : "positive";
          }, [e.running, s, l.a11y, E]),
          C = l?.a11y
            ? E?.filter(v => v?.status === "failed" || v?.status === "warning").length
            : void 0,
          b = e.running || !l?.a11y ? null : E?.filter(v => !v).length,
          S = b ? (b === 1 && y ? "(skipped)" : `(${b} skipped)`) : "",
          A = y ? r : void 0,
          x = (e.details?.testResults || [])
            .flatMap(v =>
              r
                ? v.results.filter(T => (A ? T.storyId === A : T.storyId?.startsWith(`${r}-`)))
                : v.results,
            )
            .sort((v, T) => Vi.indexOf(v.status) - Vi.indexOf(T.status)),
          _ = x[0]?.status ?? (e.running ? "pending" : "unknown"),
          I = (v, T) => {
            t.selectStory(v), t.setSelectedPanel(T), t.togglePanel(!0);
          };
        return c.createElement(
          vh,
          { ...n },
          c.createElement(
            Dh,
            null,
            c.createElement(
              xh,
              null,
              c.createElement(
                Th,
                { id: "testing-module-title", crashed: e.crashed },
                e.crashed ? "Local tests failed" : "Run local tests",
              ),
              c.createElement(Ch, {
                id: "testing-module-description",
                state: e,
                entryId: r,
                results: x,
                watching: f,
              }),
            ),
            c.createElement(
              Rh,
              null,
              !r &&
                c.createElement(
                  Re,
                  {
                    hasChrome: !1,
                    trigger: "hover",
                    tooltip: c.createElement(Je, { note: `${o ? "Hide" : "Show"} settings` }),
                  },
                  c.createElement(
                    $e,
                    {
                      "aria-label": `${o ? "Hide" : "Show"} settings`,
                      variant: "ghost",
                      padding: "small",
                      active: o,
                      disabled: e.running && !o,
                      onClick: () => a(!o),
                    },
                    c.createElement(vo, null),
                  ),
                ),
              !r &&
                c.createElement(
                  Re,
                  {
                    hasChrome: !1,
                    trigger: "hover",
                    tooltip: c.createElement(Je, {
                      note: `${f ? "Disable" : "Enable"} watch mode`,
                    }),
                  },
                  c.createElement(
                    $e,
                    {
                      "aria-label": `${f ? "Disable" : "Enable"} watch mode`,
                      variant: "ghost",
                      padding: "small",
                      active: f,
                      onClick: () => m(v => ({ ...v, watching: !f })),
                      disabled: e.running || o,
                    },
                    c.createElement(Do, null),
                  ),
                ),
              e.runnable &&
                c.createElement(
                  c.Fragment,
                  null,
                  e.running && e.cancellable
                    ? c.createElement(
                        Re,
                        {
                          hasChrome: !1,
                          trigger: "hover",
                          tooltip: c.createElement(Je, { note: "Stop test run" }),
                        },
                        c.createElement(
                          $e,
                          {
                            "aria-label": "Stop test run",
                            variant: "ghost",
                            padding: "none",
                            onClick: () => t.cancelTestProvider(e.id),
                            disabled: e.cancelling,
                          },
                          c.createElement(
                            _h,
                            { percentage: e.progress?.percentageCompleted },
                            c.createElement(Oh, null),
                          ),
                        ),
                      )
                    : c.createElement(
                        Re,
                        {
                          hasChrome: !1,
                          trigger: "hover",
                          tooltip: c.createElement(Je, { note: "Start test run" }),
                        },
                        c.createElement(
                          $e,
                          {
                            "aria-label": "Start test run",
                            variant: "ghost",
                            padding: "small",
                            onClick: () => t.runTestProvider(e.id, { entryId: r }),
                            disabled: e.running || o,
                          },
                          c.createElement(_o, null),
                        ),
                      ),
                ),
            ),
          ),
          o
            ? c.createElement(
                Gi,
                null,
                c.createElement(qe, {
                  as: "label",
                  title: "Component tests",
                  icon: c.createElement(Io, { color: u.textMutedColor }),
                  right: c.createElement(zn, { type: "checkbox", checked: !0, disabled: !0 }),
                }),
                s &&
                  c.createElement(qe, {
                    as: "label",
                    title: c.createElement(Lt, { enabled: l.a11y }, "Accessibility"),
                    icon: c.createElement(Eo, { color: u.textMutedColor }),
                    right: c.createElement(zn, {
                      type: "checkbox",
                      checked: l.a11y,
                      onChange: () => m(v => ({ ...v, config: { ...v.config, a11y: !l.a11y } })),
                    }),
                  }),
                !r &&
                  c.createElement(qe, {
                    as: "label",
                    title: c.createElement(Lt, { enabled: l.coverage }, "Coverage"),
                    icon: c.createElement(Po, { color: u.textMutedColor }),
                    right: c.createElement(zn, {
                      type: "checkbox",
                      checked: f ? !1 : l.coverage,
                      disabled: f,
                      onChange: () =>
                        m(v => ({ ...v, config: { ...v.config, coverage: !l.coverage } })),
                    }),
                  }),
              )
            : c.createElement(
                Gi,
                null,
                c.createElement(qe, {
                  title: "Component tests",
                  onClick:
                    (_ === "failed" || _ === "warning") && x.length
                      ? () => {
                          let v = x.find(T => T.status === "failed" || T.status === "warning");
                          v && I(v.storyId, Hn);
                        }
                      : void 0,
                  icon: e.crashed
                    ? c.createElement(Et, { status: "critical", "aria-label": "status: crashed" })
                    : _ === "unknown"
                      ? c.createElement(Et, { status: "unknown", "aria-label": "status: unknown" })
                      : c.createElement(Et, { status: Fh[_], "aria-label": `status: ${_}` }),
                }),
                s &&
                  c.createElement(qe, {
                    title: c.createElement(Lt, { enabled: l.a11y }, "Accessibility ", S),
                    onClick:
                      (w === "negative" || w === "warning") && E.length
                        ? () => {
                            let v = x.find(T =>
                              T.reports
                                .filter(B => B.type === "a11y")
                                .find(B => B.status === "failed" || B.status === "warning"),
                            );
                            v && I(v.storyId, Ah);
                          }
                        : void 0,
                    icon: c.createElement(Et, { status: w, "aria-label": `status: ${w}` }),
                    right: y ? null : C || null,
                  }),
                !r &&
                  c.createElement(
                    c.Fragment,
                    null,
                    i
                      ? c.createElement(qe, {
                          title: c.createElement(Lt, { enabled: l.coverage }, "Coverage"),
                          href: "/coverage/index.html",
                          target: "_blank",
                          "aria-label": "Open coverage report",
                          icon: c.createElement(Et, {
                            percentage: i.percentage,
                            status: i.status,
                            "aria-label": `status: ${i.status}`,
                          }),
                          right: i.percentage
                            ? c.createElement(
                                "span",
                                { "aria-label": `${i.percentage} percent coverage` },
                                i.percentage,
                                " %",
                              )
                            : null,
                        })
                      : c.createElement(qe, {
                          title: c.createElement(Lt, { enabled: l.coverage }, "Coverage"),
                          icon: c.createElement(Et, {
                            status: "unknown",
                            "aria-label": "status: unknown",
                          }),
                        }),
                  ),
              ),
        );
      },
      Yi = {
        failed: "error",
        passed: "success",
        pending: "pending",
        warning: "warn",
        skipped: "unknown",
      };
    Dt.register(At, e => {
      if ((globalThis.STORYBOOK_BUILDER || "").includes("vite")) {
        let r = () => {
          e.setSelectedPanel(Hn), e.togglePanel(!0);
        };
        Dt.add(Ar, {
          type: bo.experimental_TEST_PROVIDER,
          runnable: !0,
          name: "Component tests",
          render: n => {
            let [o, a] = ge(!1);
            return c.createElement(
              Xn.Provider,
              { value: { error: n.error?.message, isModalOpen: o, setModalOpen: a } },
              c.createElement(Wi, { api: e, state: n }),
              c.createElement(z2, {
                onRerun: () => {
                  a(!1), e.runTestProvider(Ar);
                },
              }),
            );
          },
          sidebarContextMenu: ({ context: n, state: o }) =>
            n.type === "docs" || (n.type === "story" && !n.tags.includes("test"))
              ? null
              : c.createElement(Wi, { api: e, state: o, entryId: n.id, style: { minWidth: 240 } }),
          stateUpdater: (n, o) => {
            let a = { ...n, ...o, details: { ...n.details, ...o.details } };
            return (
              ((!n.running && o.running) || Qi.getState().watching) &&
                delete a.details.coverageSummary,
              o.details?.testResults &&
                (async () => (
                  await e.experimental_updateStatus(
                    Ar,
                    Object.fromEntries(
                      o.details.testResults.flatMap(u =>
                        u.results
                          .filter(({ storyId: i }) => i)
                          .map(({ storyId: i, status: s, testRunId: l, ...f }) => [
                            i,
                            {
                              title: "Component tests",
                              status: Yi[s],
                              description:
                                "failureMessages" in f && f.failureMessages
                                  ? f.failureMessages.join(`
`)
                                  : "",
                              data: { testRunId: l },
                              onClick: r,
                              sidebarContextMenu: !1,
                            },
                          ]),
                      ),
                    ),
                  ),
                  await e.experimental_updateStatus(
                    "storybook/addon-a11y/test-provider",
                    Object.fromEntries(
                      o.details.testResults.flatMap(u =>
                        u.results
                          .filter(({ storyId: i }) => i)
                          .map(({ storyId: i, testRunId: s, reports: l }) => {
                            let f = l.find(m => m.type === "a11y");
                            return [
                              i,
                              f
                                ? {
                                    title: "Accessibility tests",
                                    description: "",
                                    status: Yi[f.status],
                                    data: { testRunId: s },
                                    onClick: () => {
                                      e.setSelectedPanel("storybook/a11y/panel"), e.togglePanel(!0);
                                    },
                                    sidebarContextMenu: !1,
                                  }
                                : null,
                            ];
                          }),
                      ),
                    ),
                  )
                ))(),
              a
            );
          },
        });
      }
      let t = ({ state: r }) => ({ storyId: r.storyId });
      Dt.add(Hn, {
        type: fo.PANEL,
        title: () => c.createElement(Eh, null),
        match: ({ viewMode: r }) => r === "story",
        render: ({ active: r }) =>
          c.createElement(
            ro,
            { active: !!r },
            c.createElement(co, { filter: t }, ({ storyId: n }) =>
              c.createElement(bh, { storyId: n }),
            ),
          ),
      });
    });
  })();
} catch (e) {
  console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e);
}
