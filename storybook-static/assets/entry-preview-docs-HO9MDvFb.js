import { a as K, d as Mr, c as gi, _ as nt, b as yn } from "./chunk-XP5HYGXS-BpfKkqn7.js";
import {
  n as Ai,
  y as Ci,
  c as Di,
  a as Dt,
  z as Ei,
  B as Fi,
  Y as Ur,
  g as Vr,
  l as ee,
  j as qr,
  o as yi,
} from "./index-CXQShRbs.js";
import { r as Ge, R as ft } from "./index-DWtqY3O_.js";

const { logger: vt } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  { defaultDecorateStory: xi, addons: vi, useEffect: _i } = __STORYBOOK_MODULE_PREVIEW_API__;
var Si = K({
    "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(e, t) {
      var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      t.exports = r;
    },
  }),
  bi = K({
    "../../node_modules/prop-types/factoryWithThrowingShims.js"(e, t) {
      var r = Si();
      function n() {}
      function s() {}
      (s.resetWarningCache = n),
        (t.exports = function () {
          function o(p, m, g, F, A, C) {
            if (C !== r) {
              var D = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((D.name = "Invariant Violation"), D);
            }
          }
          o.isRequired = o;
          function u() {
            return o;
          }
          var h = {
            array: o,
            bigint: o,
            bool: o,
            func: o,
            number: o,
            object: o,
            string: o,
            symbol: o,
            any: o,
            arrayOf: u,
            element: o,
            elementType: o,
            instanceOf: u,
            node: o,
            objectOf: u,
            oneOf: u,
            oneOfType: u,
            shape: u,
            exact: u,
            checkPropTypes: s,
            resetWarningCache: n,
          };
          return (h.PropTypes = h), h;
        });
    },
  }),
  Bi = K({
    "../../node_modules/prop-types/index.js"(e, t) {
      t.exports = bi()();
    },
  }),
  wi = K({
    "../../node_modules/html-tags/html-tags.json"(e, t) {
      t.exports = [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "math",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rb",
        "rp",
        "rt",
        "rtc",
        "ruby",
        "s",
        "samp",
        "script",
        "search",
        "section",
        "select",
        "slot",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "svg",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
      ];
    },
  }),
  ki = K({
    "../../node_modules/html-tags/index.js"(e, t) {
      t.exports = wi();
    },
  }),
  Ii = K({
    "../../node_modules/estraverse/estraverse.js"(e) {
      (function t(r) {
        var n, s, o, u, h, p;
        function m(x) {
          var y = {},
            v,
            B;
          for (v in x)
            x.hasOwnProperty(v) &&
              ((B = x[v]), typeof B == "object" && B !== null ? (y[v] = m(B)) : (y[v] = B));
          return y;
        }
        function g(x, y) {
          var v, B, P, j;
          for (B = x.length, P = 0; B; )
            (v = B >>> 1), (j = P + v), y(x[j]) ? (B = v) : ((P = j + 1), (B -= v + 1));
          return P;
        }
        (n = {
          AssignmentExpression: "AssignmentExpression",
          AssignmentPattern: "AssignmentPattern",
          ArrayExpression: "ArrayExpression",
          ArrayPattern: "ArrayPattern",
          ArrowFunctionExpression: "ArrowFunctionExpression",
          AwaitExpression: "AwaitExpression",
          BlockStatement: "BlockStatement",
          BinaryExpression: "BinaryExpression",
          BreakStatement: "BreakStatement",
          CallExpression: "CallExpression",
          CatchClause: "CatchClause",
          ChainExpression: "ChainExpression",
          ClassBody: "ClassBody",
          ClassDeclaration: "ClassDeclaration",
          ClassExpression: "ClassExpression",
          ComprehensionBlock: "ComprehensionBlock",
          ComprehensionExpression: "ComprehensionExpression",
          ConditionalExpression: "ConditionalExpression",
          ContinueStatement: "ContinueStatement",
          DebuggerStatement: "DebuggerStatement",
          DirectiveStatement: "DirectiveStatement",
          DoWhileStatement: "DoWhileStatement",
          EmptyStatement: "EmptyStatement",
          ExportAllDeclaration: "ExportAllDeclaration",
          ExportDefaultDeclaration: "ExportDefaultDeclaration",
          ExportNamedDeclaration: "ExportNamedDeclaration",
          ExportSpecifier: "ExportSpecifier",
          ExpressionStatement: "ExpressionStatement",
          ForStatement: "ForStatement",
          ForInStatement: "ForInStatement",
          ForOfStatement: "ForOfStatement",
          FunctionDeclaration: "FunctionDeclaration",
          FunctionExpression: "FunctionExpression",
          GeneratorExpression: "GeneratorExpression",
          Identifier: "Identifier",
          IfStatement: "IfStatement",
          ImportExpression: "ImportExpression",
          ImportDeclaration: "ImportDeclaration",
          ImportDefaultSpecifier: "ImportDefaultSpecifier",
          ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
          ImportSpecifier: "ImportSpecifier",
          Literal: "Literal",
          LabeledStatement: "LabeledStatement",
          LogicalExpression: "LogicalExpression",
          MemberExpression: "MemberExpression",
          MetaProperty: "MetaProperty",
          MethodDefinition: "MethodDefinition",
          ModuleSpecifier: "ModuleSpecifier",
          NewExpression: "NewExpression",
          ObjectExpression: "ObjectExpression",
          ObjectPattern: "ObjectPattern",
          PrivateIdentifier: "PrivateIdentifier",
          Program: "Program",
          Property: "Property",
          PropertyDefinition: "PropertyDefinition",
          RestElement: "RestElement",
          ReturnStatement: "ReturnStatement",
          SequenceExpression: "SequenceExpression",
          SpreadElement: "SpreadElement",
          Super: "Super",
          SwitchStatement: "SwitchStatement",
          SwitchCase: "SwitchCase",
          TaggedTemplateExpression: "TaggedTemplateExpression",
          TemplateElement: "TemplateElement",
          TemplateLiteral: "TemplateLiteral",
          ThisExpression: "ThisExpression",
          ThrowStatement: "ThrowStatement",
          TryStatement: "TryStatement",
          UnaryExpression: "UnaryExpression",
          UpdateExpression: "UpdateExpression",
          VariableDeclaration: "VariableDeclaration",
          VariableDeclarator: "VariableDeclarator",
          WhileStatement: "WhileStatement",
          WithStatement: "WithStatement",
          YieldExpression: "YieldExpression",
        }),
          (o = {
            AssignmentExpression: ["left", "right"],
            AssignmentPattern: ["left", "right"],
            ArrayExpression: ["elements"],
            ArrayPattern: ["elements"],
            ArrowFunctionExpression: ["params", "body"],
            AwaitExpression: ["argument"],
            BlockStatement: ["body"],
            BinaryExpression: ["left", "right"],
            BreakStatement: ["label"],
            CallExpression: ["callee", "arguments"],
            CatchClause: ["param", "body"],
            ChainExpression: ["expression"],
            ClassBody: ["body"],
            ClassDeclaration: ["id", "superClass", "body"],
            ClassExpression: ["id", "superClass", "body"],
            ComprehensionBlock: ["left", "right"],
            ComprehensionExpression: ["blocks", "filter", "body"],
            ConditionalExpression: ["test", "consequent", "alternate"],
            ContinueStatement: ["label"],
            DebuggerStatement: [],
            DirectiveStatement: [],
            DoWhileStatement: ["body", "test"],
            EmptyStatement: [],
            ExportAllDeclaration: ["source"],
            ExportDefaultDeclaration: ["declaration"],
            ExportNamedDeclaration: ["declaration", "specifiers", "source"],
            ExportSpecifier: ["exported", "local"],
            ExpressionStatement: ["expression"],
            ForStatement: ["init", "test", "update", "body"],
            ForInStatement: ["left", "right", "body"],
            ForOfStatement: ["left", "right", "body"],
            FunctionDeclaration: ["id", "params", "body"],
            FunctionExpression: ["id", "params", "body"],
            GeneratorExpression: ["blocks", "filter", "body"],
            Identifier: [],
            IfStatement: ["test", "consequent", "alternate"],
            ImportExpression: ["source"],
            ImportDeclaration: ["specifiers", "source"],
            ImportDefaultSpecifier: ["local"],
            ImportNamespaceSpecifier: ["local"],
            ImportSpecifier: ["imported", "local"],
            Literal: [],
            LabeledStatement: ["label", "body"],
            LogicalExpression: ["left", "right"],
            MemberExpression: ["object", "property"],
            MetaProperty: ["meta", "property"],
            MethodDefinition: ["key", "value"],
            ModuleSpecifier: [],
            NewExpression: ["callee", "arguments"],
            ObjectExpression: ["properties"],
            ObjectPattern: ["properties"],
            PrivateIdentifier: [],
            Program: ["body"],
            Property: ["key", "value"],
            PropertyDefinition: ["key", "value"],
            RestElement: ["argument"],
            ReturnStatement: ["argument"],
            SequenceExpression: ["expressions"],
            SpreadElement: ["argument"],
            Super: [],
            SwitchStatement: ["discriminant", "cases"],
            SwitchCase: ["test", "consequent"],
            TaggedTemplateExpression: ["tag", "quasi"],
            TemplateElement: [],
            TemplateLiteral: ["quasis", "expressions"],
            ThisExpression: [],
            ThrowStatement: ["argument"],
            TryStatement: ["block", "handler", "finalizer"],
            UnaryExpression: ["argument"],
            UpdateExpression: ["argument"],
            VariableDeclaration: ["declarations"],
            VariableDeclarator: ["id", "init"],
            WhileStatement: ["test", "body"],
            WithStatement: ["object", "body"],
            YieldExpression: ["argument"],
          }),
          (u = {}),
          (h = {}),
          (p = {}),
          (s = { Break: u, Skip: h, Remove: p });
        function F(x, y) {
          (this.parent = x), (this.key = y);
        }
        (F.prototype.replace = function (x) {
          this.parent[this.key] = x;
        }),
          (F.prototype.remove = function () {
            return Array.isArray(this.parent)
              ? (this.parent.splice(this.key, 1), !0)
              : (this.replace(null), !1);
          });
        function A(x, y, v, B) {
          (this.node = x), (this.path = y), (this.wrap = v), (this.ref = B);
        }
        function C() {}
        (C.prototype.path = function () {
          var x, y, v, B, P, j;
          function M(V, U) {
            if (Array.isArray(U)) for (v = 0, B = U.length; v < B; ++v) V.push(U[v]);
            else V.push(U);
          }
          if (!this.__current.path) return null;
          for (P = [], x = 2, y = this.__leavelist.length; x < y; ++x)
            (j = this.__leavelist[x]), M(P, j.path);
          return M(P, this.__current.path), P;
        }),
          (C.prototype.type = function () {
            var x = this.current();
            return x.type || this.__current.wrap;
          }),
          (C.prototype.parents = function () {
            var x, y, v;
            for (v = [], x = 1, y = this.__leavelist.length; x < y; ++x)
              v.push(this.__leavelist[x].node);
            return v;
          }),
          (C.prototype.current = function () {
            return this.__current.node;
          }),
          (C.prototype.__execute = function (x, y) {
            var v, B;
            return (
              (B = void 0),
              (v = this.__current),
              (this.__current = y),
              (this.__state = null),
              x && (B = x.call(this, y.node, this.__leavelist[this.__leavelist.length - 1].node)),
              (this.__current = v),
              B
            );
          }),
          (C.prototype.notify = function (x) {
            this.__state = x;
          }),
          (C.prototype.skip = function () {
            this.notify(h);
          }),
          (C.prototype.break = function () {
            this.notify(u);
          }),
          (C.prototype.remove = function () {
            this.notify(p);
          }),
          (C.prototype.__initialize = function (x, y) {
            (this.visitor = y),
              (this.root = x),
              (this.__worklist = []),
              (this.__leavelist = []),
              (this.__current = null),
              (this.__state = null),
              (this.__fallback = null),
              y.fallback === "iteration"
                ? (this.__fallback = Object.keys)
                : typeof y.fallback == "function" && (this.__fallback = y.fallback),
              (this.__keys = o),
              y.keys && (this.__keys = Object.assign(Object.create(this.__keys), y.keys));
          });
        function D(x) {
          return x == null ? !1 : typeof x == "object" && typeof x.type == "string";
        }
        function E(x, y) {
          return (x === n.ObjectExpression || x === n.ObjectPattern) && y === "properties";
        }
        function w(x, y) {
          for (var v = x.length - 1; v >= 0; --v) if (x[v].node === y) return !0;
          return !1;
        }
        (C.prototype.traverse = function (x, y) {
          var v, B, P, j, M, V, U, H, ne, se, ue, Z;
          for (
            this.__initialize(x, y),
              Z = {},
              v = this.__worklist,
              B = this.__leavelist,
              v.push(new A(x, null, null, null)),
              B.push(new A(null, null, null, null));
            v.length;

          ) {
            if (((P = v.pop()), P === Z)) {
              if (((P = B.pop()), (V = this.__execute(y.leave, P)), this.__state === u || V === u))
                return;
              continue;
            }
            if (P.node) {
              if (((V = this.__execute(y.enter, P)), this.__state === u || V === u)) return;
              if ((v.push(Z), B.push(P), this.__state === h || V === h)) continue;
              if (((j = P.node), (M = j.type || P.wrap), (se = this.__keys[M]), !se))
                if (this.__fallback) se = this.__fallback(j);
                else throw new Error("Unknown node type " + M + ".");
              for (H = se.length; (H -= 1) >= 0; )
                if (((U = se[H]), (ue = j[U]), !!ue)) {
                  if (Array.isArray(ue)) {
                    for (ne = ue.length; (ne -= 1) >= 0; )
                      if (ue[ne] && !w(B, ue[ne])) {
                        if (E(M, se[H])) P = new A(ue[ne], [U, ne], "Property", null);
                        else if (D(ue[ne])) P = new A(ue[ne], [U, ne], null, null);
                        else continue;
                        v.push(P);
                      }
                  } else if (D(ue)) {
                    if (w(B, ue)) continue;
                    v.push(new A(ue, U, null, null));
                  }
                }
            }
          }
        }),
          (C.prototype.replace = function (x, y) {
            var v, B, P, j, M, V, U, H, ne, se, ue, Z, we;
            function st(Re) {
              var R, Je, je, ut;
              if (Re.ref.remove()) {
                for (Je = Re.ref.key, ut = Re.ref.parent, R = v.length; R--; )
                  if (((je = v[R]), je.ref && je.ref.parent === ut)) {
                    if (je.ref.key < Je) break;
                    --je.ref.key;
                  }
              }
            }
            for (
              this.__initialize(x, y),
                ue = {},
                v = this.__worklist,
                B = this.__leavelist,
                Z = { root: x },
                V = new A(x, null, null, new F(Z, "root")),
                v.push(V),
                B.push(V);
              v.length;

            ) {
              if (((V = v.pop()), V === ue)) {
                if (
                  ((V = B.pop()),
                  (M = this.__execute(y.leave, V)),
                  M !== void 0 && M !== u && M !== h && M !== p && V.ref.replace(M),
                  (this.__state === p || M === p) && st(V),
                  this.__state === u || M === u)
                )
                  return Z.root;
                continue;
              }
              if (
                ((M = this.__execute(y.enter, V)),
                M !== void 0 && M !== u && M !== h && M !== p && (V.ref.replace(M), (V.node = M)),
                (this.__state === p || M === p) && (st(V), (V.node = null)),
                this.__state === u || M === u)
              )
                return Z.root;
              if (
                ((P = V.node), !!P && (v.push(ue), B.push(V), !(this.__state === h || M === h)))
              ) {
                if (((j = P.type || V.wrap), (ne = this.__keys[j]), !ne))
                  if (this.__fallback) ne = this.__fallback(P);
                  else throw new Error("Unknown node type " + j + ".");
                for (U = ne.length; (U -= 1) >= 0; )
                  if (((we = ne[U]), (se = P[we]), !!se))
                    if (Array.isArray(se)) {
                      for (H = se.length; (H -= 1) >= 0; )
                        if (se[H]) {
                          if (E(j, ne[U])) V = new A(se[H], [we, H], "Property", new F(se, H));
                          else if (D(se[H])) V = new A(se[H], [we, H], null, new F(se, H));
                          else continue;
                          v.push(V);
                        }
                    } else D(se) && v.push(new A(se, we, null, new F(P, we)));
              }
            }
            return Z.root;
          });
        function b(x, y) {
          var v = new C();
          return v.traverse(x, y);
        }
        function S(x, y) {
          var v = new C();
          return v.replace(x, y);
        }
        function L(x, y) {
          var v;
          return (
            (v = g(y, function (B) {
              return B.range[0] > x.range[0];
            })),
            (x.extendedRange = [x.range[0], x.range[1]]),
            v !== y.length && (x.extendedRange[1] = y[v].range[0]),
            (v -= 1),
            v >= 0 && (x.extendedRange[0] = y[v].range[1]),
            x
          );
        }
        function _(x, y, v) {
          var B = [],
            P,
            j,
            M,
            V;
          if (!x.range) throw new Error("attachComments needs range information");
          if (!v.length) {
            if (y.length) {
              for (M = 0, j = y.length; M < j; M += 1)
                (P = m(y[M])), (P.extendedRange = [0, x.range[0]]), B.push(P);
              x.leadingComments = B;
            }
            return x;
          }
          for (M = 0, j = y.length; M < j; M += 1) B.push(L(m(y[M]), v));
          return (
            (V = 0),
            b(x, {
              enter: function (U) {
                for (var H; V < B.length && ((H = B[V]), !(H.extendedRange[1] > U.range[0])); )
                  H.extendedRange[1] === U.range[0]
                    ? (U.leadingComments || (U.leadingComments = []),
                      U.leadingComments.push(H),
                      B.splice(V, 1))
                    : (V += 1);
                if (V === B.length) return s.Break;
                if (B[V].extendedRange[0] > U.range[1]) return s.Skip;
              },
            }),
            (V = 0),
            b(x, {
              leave: function (U) {
                for (var H; V < B.length && ((H = B[V]), !(U.range[1] < H.extendedRange[0])); )
                  U.range[1] === H.extendedRange[0]
                    ? (U.trailingComments || (U.trailingComments = []),
                      U.trailingComments.push(H),
                      B.splice(V, 1))
                    : (V += 1);
                if (V === B.length) return s.Break;
                if (B[V].extendedRange[0] > U.range[1]) return s.Skip;
              },
            }),
            x
          );
        }
        return (
          (r.Syntax = n),
          (r.traverse = b),
          (r.replace = S),
          (r.attachComments = _),
          (r.VisitorKeys = o),
          (r.VisitorOption = s),
          (r.Controller = C),
          (r.cloneEnvironment = function () {
            return t({});
          }),
          r
        );
      })(e);
    },
  }),
  Ti = K({
    "../../node_modules/esutils/lib/ast.js"(e, t) {
      (function () {
        function r(p) {
          if (p == null) return !1;
          switch (p.type) {
            case "ArrayExpression":
            case "AssignmentExpression":
            case "BinaryExpression":
            case "CallExpression":
            case "ConditionalExpression":
            case "FunctionExpression":
            case "Identifier":
            case "Literal":
            case "LogicalExpression":
            case "MemberExpression":
            case "NewExpression":
            case "ObjectExpression":
            case "SequenceExpression":
            case "ThisExpression":
            case "UnaryExpression":
            case "UpdateExpression":
              return !0;
          }
          return !1;
        }
        function n(p) {
          if (p == null) return !1;
          switch (p.type) {
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "WhileStatement":
              return !0;
          }
          return !1;
        }
        function s(p) {
          if (p == null) return !1;
          switch (p.type) {
            case "BlockStatement":
            case "BreakStatement":
            case "ContinueStatement":
            case "DebuggerStatement":
            case "DoWhileStatement":
            case "EmptyStatement":
            case "ExpressionStatement":
            case "ForInStatement":
            case "ForStatement":
            case "IfStatement":
            case "LabeledStatement":
            case "ReturnStatement":
            case "SwitchStatement":
            case "ThrowStatement":
            case "TryStatement":
            case "VariableDeclaration":
            case "WhileStatement":
            case "WithStatement":
              return !0;
          }
          return !1;
        }
        function o(p) {
          return s(p) || (p != null && p.type === "FunctionDeclaration");
        }
        function u(p) {
          switch (p.type) {
            case "IfStatement":
              return p.alternate != null ? p.alternate : p.consequent;
            case "LabeledStatement":
            case "ForStatement":
            case "ForInStatement":
            case "WhileStatement":
            case "WithStatement":
              return p.body;
          }
          return null;
        }
        function h(p) {
          var m;
          if (p.type !== "IfStatement" || p.alternate == null) return !1;
          m = p.consequent;
          do {
            if (m.type === "IfStatement" && m.alternate == null) return !0;
            m = u(m);
          } while (m);
          return !1;
        }
        t.exports = {
          isExpression: r,
          isStatement: s,
          isIterationStatement: n,
          isSourceElement: o,
          isProblematicIfStatement: h,
          trailingStatement: u,
        };
      })();
    },
  }),
  Fn = K({
    "../../node_modules/esutils/lib/code.js"(e, t) {
      (function () {
        var r, n, s, o, u, h;
        (n = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        }),
          (r = {
            NonAsciiIdentifierStart:
              /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
            NonAsciiIdentifierPart:
              /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
          });
        function p(S) {
          return 48 <= S && S <= 57;
        }
        function m(S) {
          return (48 <= S && S <= 57) || (97 <= S && S <= 102) || (65 <= S && S <= 70);
        }
        function g(S) {
          return S >= 48 && S <= 55;
        }
        s = [
          5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288,
          65279,
        ];
        function F(S) {
          return (
            S === 32 ||
            S === 9 ||
            S === 11 ||
            S === 12 ||
            S === 160 ||
            (S >= 5760 && s.indexOf(S) >= 0)
          );
        }
        function A(S) {
          return S === 10 || S === 13 || S === 8232 || S === 8233;
        }
        function C(S) {
          if (S <= 65535) return String.fromCharCode(S);
          var L = String.fromCharCode(Math.floor((S - 65536) / 1024) + 55296),
            _ = String.fromCharCode(((S - 65536) % 1024) + 56320);
          return L + _;
        }
        for (o = new Array(128), h = 0; h < 128; ++h)
          o[h] = (h >= 97 && h <= 122) || (h >= 65 && h <= 90) || h === 36 || h === 95;
        for (u = new Array(128), h = 0; h < 128; ++h)
          u[h] =
            (h >= 97 && h <= 122) ||
            (h >= 65 && h <= 90) ||
            (h >= 48 && h <= 57) ||
            h === 36 ||
            h === 95;
        function D(S) {
          return S < 128 ? o[S] : n.NonAsciiIdentifierStart.test(C(S));
        }
        function E(S) {
          return S < 128 ? u[S] : n.NonAsciiIdentifierPart.test(C(S));
        }
        function w(S) {
          return S < 128 ? o[S] : r.NonAsciiIdentifierStart.test(C(S));
        }
        function b(S) {
          return S < 128 ? u[S] : r.NonAsciiIdentifierPart.test(C(S));
        }
        t.exports = {
          isDecimalDigit: p,
          isHexDigit: m,
          isOctalDigit: g,
          isWhiteSpace: F,
          isLineTerminator: A,
          isIdentifierStartES5: D,
          isIdentifierPartES5: E,
          isIdentifierStartES6: w,
          isIdentifierPartES6: b,
        };
      })();
    },
  }),
  Pi = K({
    "../../node_modules/esutils/lib/keyword.js"(e, t) {
      (function () {
        var r = Fn();
        function n(D) {
          switch (D) {
            case "implements":
            case "interface":
            case "package":
            case "private":
            case "protected":
            case "public":
            case "static":
            case "let":
              return !0;
            default:
              return !1;
          }
        }
        function s(D, E) {
          return !E && D === "yield" ? !1 : o(D, E);
        }
        function o(D, E) {
          if (E && n(D)) return !0;
          switch (D.length) {
            case 2:
              return D === "if" || D === "in" || D === "do";
            case 3:
              return D === "var" || D === "for" || D === "new" || D === "try";
            case 4:
              return (
                D === "this" ||
                D === "else" ||
                D === "case" ||
                D === "void" ||
                D === "with" ||
                D === "enum"
              );
            case 5:
              return (
                D === "while" ||
                D === "break" ||
                D === "catch" ||
                D === "throw" ||
                D === "const" ||
                D === "yield" ||
                D === "class" ||
                D === "super"
              );
            case 6:
              return (
                D === "return" ||
                D === "typeof" ||
                D === "delete" ||
                D === "switch" ||
                D === "export" ||
                D === "import"
              );
            case 7:
              return D === "default" || D === "finally" || D === "extends";
            case 8:
              return D === "function" || D === "continue" || D === "debugger";
            case 10:
              return D === "instanceof";
            default:
              return !1;
          }
        }
        function u(D, E) {
          return D === "null" || D === "true" || D === "false" || s(D, E);
        }
        function h(D, E) {
          return D === "null" || D === "true" || D === "false" || o(D, E);
        }
        function p(D) {
          return D === "eval" || D === "arguments";
        }
        function m(D) {
          var E, w, b;
          if (D.length === 0 || ((b = D.charCodeAt(0)), !r.isIdentifierStartES5(b))) return !1;
          for (E = 1, w = D.length; E < w; ++E)
            if (((b = D.charCodeAt(E)), !r.isIdentifierPartES5(b))) return !1;
          return !0;
        }
        function g(D, E) {
          return (D - 55296) * 1024 + (E - 56320) + 65536;
        }
        function F(D) {
          var E, w, b, S, L;
          if (D.length === 0) return !1;
          for (L = r.isIdentifierStartES6, E = 0, w = D.length; E < w; ++E) {
            if (((b = D.charCodeAt(E)), 55296 <= b && b <= 56319)) {
              if ((++E, E >= w || ((S = D.charCodeAt(E)), !(56320 <= S && S <= 57343)))) return !1;
              b = g(b, S);
            }
            if (!L(b)) return !1;
            L = r.isIdentifierPartES6;
          }
          return !0;
        }
        function A(D, E) {
          return m(D) && !u(D, E);
        }
        function C(D, E) {
          return F(D) && !h(D, E);
        }
        t.exports = {
          isKeywordES5: s,
          isKeywordES6: o,
          isReservedWordES5: u,
          isReservedWordES6: h,
          isRestrictedWord: p,
          isIdentifierNameES5: m,
          isIdentifierNameES6: F,
          isIdentifierES5: A,
          isIdentifierES6: C,
        };
      })();
    },
  }),
  Ni = K({
    "../../node_modules/esutils/lib/utils.js"(e) {
      (function () {
        (e.ast = Ti()), (e.code = Fn()), (e.keyword = Pi());
      })();
    },
  }),
  Li = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/base64.js"(e) {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      (e.encode = function (r) {
        if (0 <= r && r < t.length) return t[r];
        throw new TypeError("Must be between 0 and 63: " + r);
      }),
        (e.decode = function (r) {
          var n = 65,
            s = 90,
            o = 97,
            u = 122,
            h = 48,
            p = 57,
            m = 43,
            g = 47,
            F = 26,
            A = 52;
          return n <= r && r <= s
            ? r - n
            : o <= r && r <= u
              ? r - o + F
              : h <= r && r <= p
                ? r - h + A
                : r == m
                  ? 62
                  : r == g
                    ? 63
                    : -1;
        });
    },
  }),
  xn = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/base64-vlq.js"(e) {
      var t = Li(),
        r = 5,
        n = 1 << r,
        s = n - 1,
        o = n;
      function u(p) {
        return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
      }
      function h(p) {
        var m = (p & 1) === 1,
          g = p >> 1;
        return m ? -g : g;
      }
      (e.encode = function (p) {
        var m = "",
          g,
          F = u(p);
        do (g = F & s), (F >>>= r), F > 0 && (g |= o), (m += t.encode(g));
        while (F > 0);
        return m;
      }),
        (e.decode = function (p, m, g) {
          var F = p.length,
            A = 0,
            C = 0,
            D,
            E;
          do {
            if (m >= F) throw new Error("Expected more digits in base 64 VLQ value.");
            if (((E = t.decode(p.charCodeAt(m++))), E === -1))
              throw new Error("Invalid base64 digit: " + p.charAt(m - 1));
            (D = !!(E & o)), (E &= s), (A = A + (E << C)), (C += r);
          } while (D);
          (g.value = h(A)), (g.rest = m);
        });
    },
  }),
  At = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/util.js"(e) {
      function t(_, x, y) {
        if (x in _) return _[x];
        if (arguments.length === 3) return y;
        throw new Error('"' + x + '" is a required argument.');
      }
      e.getArg = t;
      var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
        n = /^data:.+\,.+$/;
      function s(_) {
        var x = _.match(r);
        return x ? { scheme: x[1], auth: x[2], host: x[3], port: x[4], path: x[5] } : null;
      }
      e.urlParse = s;
      function o(_) {
        var x = "";
        return (
          _.scheme && (x += _.scheme + ":"),
          (x += "//"),
          _.auth && (x += _.auth + "@"),
          _.host && (x += _.host),
          _.port && (x += ":" + _.port),
          _.path && (x += _.path),
          x
        );
      }
      e.urlGenerate = o;
      function u(_) {
        var x = _,
          y = s(_);
        if (y) {
          if (!y.path) return _;
          x = y.path;
        }
        for (var v = e.isAbsolute(x), B = x.split(/\/+/), P, j = 0, M = B.length - 1; M >= 0; M--)
          (P = B[M]),
            P === "."
              ? B.splice(M, 1)
              : P === ".."
                ? j++
                : j > 0 && (P === "" ? (B.splice(M + 1, j), (j = 0)) : (B.splice(M, 2), j--));
        return (x = B.join("/")), x === "" && (x = v ? "/" : "."), y ? ((y.path = x), o(y)) : x;
      }
      e.normalize = u;
      function h(_, x) {
        _ === "" && (_ = "."), x === "" && (x = ".");
        var y = s(x),
          v = s(_);
        if ((v && (_ = v.path || "/"), y && !y.scheme)) return v && (y.scheme = v.scheme), o(y);
        if (y || x.match(n)) return x;
        if (v && !v.host && !v.path) return (v.host = x), o(v);
        var B = x.charAt(0) === "/" ? x : u(_.replace(/\/+$/, "") + "/" + x);
        return v ? ((v.path = B), o(v)) : B;
      }
      (e.join = h),
        (e.isAbsolute = function (_) {
          return _.charAt(0) === "/" || r.test(_);
        });
      function p(_, x) {
        _ === "" && (_ = "."), (_ = _.replace(/\/$/, ""));
        for (var y = 0; x.indexOf(_ + "/") !== 0; ) {
          var v = _.lastIndexOf("/");
          if (v < 0 || ((_ = _.slice(0, v)), _.match(/^([^\/]+:\/)?\/*$/))) return x;
          ++y;
        }
        return Array(y + 1).join("../") + x.substr(_.length + 1);
      }
      e.relative = p;
      var m = (function () {
        var _ = Object.create(null);
        return !("__proto__" in _);
      })();
      function g(_) {
        return _;
      }
      function F(_) {
        return C(_) ? "$" + _ : _;
      }
      e.toSetString = m ? g : F;
      function A(_) {
        return C(_) ? _.slice(1) : _;
      }
      e.fromSetString = m ? g : A;
      function C(_) {
        if (!_) return !1;
        var x = _.length;
        if (
          x < 9 ||
          _.charCodeAt(x - 1) !== 95 ||
          _.charCodeAt(x - 2) !== 95 ||
          _.charCodeAt(x - 3) !== 111 ||
          _.charCodeAt(x - 4) !== 116 ||
          _.charCodeAt(x - 5) !== 111 ||
          _.charCodeAt(x - 6) !== 114 ||
          _.charCodeAt(x - 7) !== 112 ||
          _.charCodeAt(x - 8) !== 95 ||
          _.charCodeAt(x - 9) !== 95
        )
          return !1;
        for (var y = x - 10; y >= 0; y--) if (_.charCodeAt(y) !== 36) return !1;
        return !0;
      }
      function D(_, x, y) {
        var v = w(_.source, x.source);
        return v !== 0 ||
          ((v = _.originalLine - x.originalLine), v !== 0) ||
          ((v = _.originalColumn - x.originalColumn), v !== 0 || y) ||
          ((v = _.generatedColumn - x.generatedColumn), v !== 0) ||
          ((v = _.generatedLine - x.generatedLine), v !== 0)
          ? v
          : w(_.name, x.name);
      }
      e.compareByOriginalPositions = D;
      function E(_, x, y) {
        var v = _.generatedLine - x.generatedLine;
        return v !== 0 ||
          ((v = _.generatedColumn - x.generatedColumn), v !== 0 || y) ||
          ((v = w(_.source, x.source)), v !== 0) ||
          ((v = _.originalLine - x.originalLine), v !== 0) ||
          ((v = _.originalColumn - x.originalColumn), v !== 0)
          ? v
          : w(_.name, x.name);
      }
      e.compareByGeneratedPositionsDeflated = E;
      function w(_, x) {
        return _ === x ? 0 : _ === null ? 1 : x === null ? -1 : _ > x ? 1 : -1;
      }
      function b(_, x) {
        var y = _.generatedLine - x.generatedLine;
        return y !== 0 ||
          ((y = _.generatedColumn - x.generatedColumn), y !== 0) ||
          ((y = w(_.source, x.source)), y !== 0) ||
          ((y = _.originalLine - x.originalLine), y !== 0) ||
          ((y = _.originalColumn - x.originalColumn), y !== 0)
          ? y
          : w(_.name, x.name);
      }
      e.compareByGeneratedPositionsInflated = b;
      function S(_) {
        return JSON.parse(_.replace(/^\)]}'[^\n]*\n/, ""));
      }
      e.parseSourceMapInput = S;
      function L(_, x, y) {
        if (
          ((x = x || ""),
          _ && (_[_.length - 1] !== "/" && x[0] !== "/" && (_ += "/"), (x = _ + x)),
          y)
        ) {
          var v = s(y);
          if (!v) throw new Error("sourceMapURL could not be parsed");
          if (v.path) {
            var B = v.path.lastIndexOf("/");
            B >= 0 && (v.path = v.path.substring(0, B + 1));
          }
          x = h(o(v), x);
        }
        return u(x);
      }
      e.computeSourceURL = L;
    },
  }),
  vn = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/array-set.js"(e) {
      var t = At(),
        r = Object.prototype.hasOwnProperty,
        n = typeof Map < "u";
      function s() {
        (this._array = []), (this._set = n ? new Map() : Object.create(null));
      }
      (s.fromArray = function (o, u) {
        for (var h = new s(), p = 0, m = o.length; p < m; p++) h.add(o[p], u);
        return h;
      }),
        (s.prototype.size = function () {
          return n ? this._set.size : Object.getOwnPropertyNames(this._set).length;
        }),
        (s.prototype.add = function (o, u) {
          var h = n ? o : t.toSetString(o),
            p = n ? this.has(o) : r.call(this._set, h),
            m = this._array.length;
          (!p || u) && this._array.push(o), p || (n ? this._set.set(o, m) : (this._set[h] = m));
        }),
        (s.prototype.has = function (o) {
          if (n) return this._set.has(o);
          var u = t.toSetString(o);
          return r.call(this._set, u);
        }),
        (s.prototype.indexOf = function (o) {
          if (n) {
            var u = this._set.get(o);
            if (u >= 0) return u;
          } else {
            var h = t.toSetString(o);
            if (r.call(this._set, h)) return this._set[h];
          }
          throw new Error('"' + o + '" is not in the set.');
        }),
        (s.prototype.at = function (o) {
          if (o >= 0 && o < this._array.length) return this._array[o];
          throw new Error("No element indexed by " + o);
        }),
        (s.prototype.toArray = function () {
          return this._array.slice();
        }),
        (e.ArraySet = s);
    },
  }),
  Oi = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/mapping-list.js"(e) {
      var t = At();
      function r(s, o) {
        var u = s.generatedLine,
          h = o.generatedLine,
          p = s.generatedColumn,
          m = o.generatedColumn;
        return h > u || (h == u && m >= p) || t.compareByGeneratedPositionsInflated(s, o) <= 0;
      }
      function n() {
        (this._array = []),
          (this._sorted = !0),
          (this._last = { generatedLine: -1, generatedColumn: 0 });
      }
      (n.prototype.unsortedForEach = function (s, o) {
        this._array.forEach(s, o);
      }),
        (n.prototype.add = function (s) {
          r(this._last, s)
            ? ((this._last = s), this._array.push(s))
            : ((this._sorted = !1), this._array.push(s));
        }),
        (n.prototype.toArray = function () {
          return (
            this._sorted ||
              (this._array.sort(t.compareByGeneratedPositionsInflated), (this._sorted = !0)),
            this._array
          );
        }),
        (e.MappingList = n);
    },
  }),
  _n = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/source-map-generator.js"(e) {
      var t = xn(),
        r = At(),
        n = vn().ArraySet,
        s = Oi().MappingList;
      function o(u) {
        u || (u = {}),
          (this._file = r.getArg(u, "file", null)),
          (this._sourceRoot = r.getArg(u, "sourceRoot", null)),
          (this._skipValidation = r.getArg(u, "skipValidation", !1)),
          (this._sources = new n()),
          (this._names = new n()),
          (this._mappings = new s()),
          (this._sourcesContents = null);
      }
      (o.prototype._version = 3),
        (o.fromSourceMap = function (u) {
          var h = u.sourceRoot,
            p = new o({ file: u.file, sourceRoot: h });
          return (
            u.eachMapping(function (m) {
              var g = { generated: { line: m.generatedLine, column: m.generatedColumn } };
              m.source != null &&
                ((g.source = m.source),
                h != null && (g.source = r.relative(h, g.source)),
                (g.original = { line: m.originalLine, column: m.originalColumn }),
                m.name != null && (g.name = m.name)),
                p.addMapping(g);
            }),
            u.sources.forEach(function (m) {
              var g = m;
              h !== null && (g = r.relative(h, m)), p._sources.has(g) || p._sources.add(g);
              var F = u.sourceContentFor(m);
              F != null && p.setSourceContent(m, F);
            }),
            p
          );
        }),
        (o.prototype.addMapping = function (u) {
          var h = r.getArg(u, "generated"),
            p = r.getArg(u, "original", null),
            m = r.getArg(u, "source", null),
            g = r.getArg(u, "name", null);
          this._skipValidation || this._validateMapping(h, p, m, g),
            m != null && ((m = String(m)), this._sources.has(m) || this._sources.add(m)),
            g != null && ((g = String(g)), this._names.has(g) || this._names.add(g)),
            this._mappings.add({
              generatedLine: h.line,
              generatedColumn: h.column,
              originalLine: p != null && p.line,
              originalColumn: p != null && p.column,
              source: m,
              name: g,
            });
        }),
        (o.prototype.setSourceContent = function (u, h) {
          var p = u;
          this._sourceRoot != null && (p = r.relative(this._sourceRoot, p)),
            h != null
              ? (this._sourcesContents || (this._sourcesContents = Object.create(null)),
                (this._sourcesContents[r.toSetString(p)] = h))
              : this._sourcesContents &&
                (delete this._sourcesContents[r.toSetString(p)],
                Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
        }),
        (o.prototype.applySourceMap = function (u, h, p) {
          var m = h;
          if (h == null) {
            if (u.file == null)
              throw new Error(
                `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`,
              );
            m = u.file;
          }
          var g = this._sourceRoot;
          g != null && (m = r.relative(g, m));
          var F = new n(),
            A = new n();
          this._mappings.unsortedForEach(function (C) {
            if (C.source === m && C.originalLine != null) {
              var D = u.originalPositionFor({ line: C.originalLine, column: C.originalColumn });
              D.source != null &&
                ((C.source = D.source),
                p != null && (C.source = r.join(p, C.source)),
                g != null && (C.source = r.relative(g, C.source)),
                (C.originalLine = D.line),
                (C.originalColumn = D.column),
                D.name != null && (C.name = D.name));
            }
            var E = C.source;
            E != null && !F.has(E) && F.add(E);
            var w = C.name;
            w != null && !A.has(w) && A.add(w);
          }, this),
            (this._sources = F),
            (this._names = A),
            u.sources.forEach(function (C) {
              var D = u.sourceContentFor(C);
              D != null &&
                (p != null && (C = r.join(p, C)),
                g != null && (C = r.relative(g, C)),
                this.setSourceContent(C, D));
            }, this);
        }),
        (o.prototype._validateMapping = function (u, h, p, m) {
          if (h && typeof h.line != "number" && typeof h.column != "number")
            throw new Error(
              "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.",
            );
          if (
            !(u && "line" in u && "column" in u && u.line > 0 && u.column >= 0 && !h && !p && !m)
          ) {
            if (
              u &&
              "line" in u &&
              "column" in u &&
              h &&
              "line" in h &&
              "column" in h &&
              u.line > 0 &&
              u.column >= 0 &&
              h.line > 0 &&
              h.column >= 0 &&
              p
            )
              return;
            throw new Error(
              "Invalid mapping: " +
                JSON.stringify({ generated: u, source: p, original: h, name: m }),
            );
          }
        }),
        (o.prototype._serializeMappings = function () {
          for (
            var u = 0,
              h = 1,
              p = 0,
              m = 0,
              g = 0,
              F = 0,
              A = "",
              C,
              D,
              E,
              w,
              b = this._mappings.toArray(),
              S = 0,
              L = b.length;
            S < L;
            S++
          ) {
            if (((D = b[S]), (C = ""), D.generatedLine !== h))
              for (u = 0; D.generatedLine !== h; ) (C += ";"), h++;
            else if (S > 0) {
              if (!r.compareByGeneratedPositionsInflated(D, b[S - 1])) continue;
              C += ",";
            }
            (C += t.encode(D.generatedColumn - u)),
              (u = D.generatedColumn),
              D.source != null &&
                ((w = this._sources.indexOf(D.source)),
                (C += t.encode(w - F)),
                (F = w),
                (C += t.encode(D.originalLine - 1 - m)),
                (m = D.originalLine - 1),
                (C += t.encode(D.originalColumn - p)),
                (p = D.originalColumn),
                D.name != null &&
                  ((E = this._names.indexOf(D.name)), (C += t.encode(E - g)), (g = E))),
              (A += C);
          }
          return A;
        }),
        (o.prototype._generateSourcesContent = function (u, h) {
          return u.map(function (p) {
            if (!this._sourcesContents) return null;
            h != null && (p = r.relative(h, p));
            var m = r.toSetString(p);
            return Object.prototype.hasOwnProperty.call(this._sourcesContents, m)
              ? this._sourcesContents[m]
              : null;
          }, this);
        }),
        (o.prototype.toJSON = function () {
          var u = {
            version: this._version,
            sources: this._sources.toArray(),
            names: this._names.toArray(),
            mappings: this._serializeMappings(),
          };
          return (
            this._file != null && (u.file = this._file),
            this._sourceRoot != null && (u.sourceRoot = this._sourceRoot),
            this._sourcesContents &&
              (u.sourcesContent = this._generateSourcesContent(u.sources, u.sourceRoot)),
            u
          );
        }),
        (o.prototype.toString = function () {
          return JSON.stringify(this.toJSON());
        }),
        (e.SourceMapGenerator = o);
    },
  }),
  Ri = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/binary-search.js"(e) {
      (e.GREATEST_LOWER_BOUND = 1), (e.LEAST_UPPER_BOUND = 2);
      function t(r, n, s, o, u, h) {
        var p = Math.floor((n - r) / 2) + r,
          m = u(s, o[p], !0);
        return m === 0
          ? p
          : m > 0
            ? n - p > 1
              ? t(p, n, s, o, u, h)
              : h == e.LEAST_UPPER_BOUND
                ? n < o.length
                  ? n
                  : -1
                : p
            : p - r > 1
              ? t(r, p, s, o, u, h)
              : h == e.LEAST_UPPER_BOUND
                ? p
                : r < 0
                  ? -1
                  : r;
      }
      e.search = function (r, n, s, o) {
        if (n.length === 0) return -1;
        var u = t(-1, n.length, r, n, s, o || e.GREATEST_LOWER_BOUND);
        if (u < 0) return -1;
        for (; u - 1 >= 0 && s(n[u], n[u - 1], !0) === 0; ) --u;
        return u;
      };
    },
  }),
  ji = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/quick-sort.js"(e) {
      function t(s, o, u) {
        var h = s[o];
        (s[o] = s[u]), (s[u] = h);
      }
      function r(s, o) {
        return Math.round(s + Math.random() * (o - s));
      }
      function n(s, o, u, h) {
        if (u < h) {
          var p = r(u, h),
            m = u - 1;
          t(s, p, h);
          for (var g = s[h], F = u; F < h; F++) o(s[F], g) <= 0 && ((m += 1), t(s, m, F));
          t(s, m + 1, F);
          var A = m + 1;
          n(s, o, u, A - 1), n(s, o, A + 1, h);
        }
      }
      e.quickSort = function (s, o) {
        n(s, o, 0, s.length - 1);
      };
    },
  }),
  Mi = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/source-map-consumer.js"(e) {
      var t = At(),
        r = Ri(),
        n = vn().ArraySet,
        s = xn(),
        o = ji().quickSort;
      function u(g, F) {
        var A = g;
        return (
          typeof g == "string" && (A = t.parseSourceMapInput(g)),
          A.sections != null ? new m(A, F) : new h(A, F)
        );
      }
      (u.fromSourceMap = function (g, F) {
        return h.fromSourceMap(g, F);
      }),
        (u.prototype._version = 3),
        (u.prototype.__generatedMappings = null),
        Object.defineProperty(u.prototype, "_generatedMappings", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return (
              this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot),
              this.__generatedMappings
            );
          },
        }),
        (u.prototype.__originalMappings = null),
        Object.defineProperty(u.prototype, "_originalMappings", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return (
              this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot),
              this.__originalMappings
            );
          },
        }),
        (u.prototype._charIsMappingSeparator = function (g, F) {
          var A = g.charAt(F);
          return A === ";" || A === ",";
        }),
        (u.prototype._parseMappings = function (g, F) {
          throw new Error("Subclasses must implement _parseMappings");
        }),
        (u.GENERATED_ORDER = 1),
        (u.ORIGINAL_ORDER = 2),
        (u.GREATEST_LOWER_BOUND = 1),
        (u.LEAST_UPPER_BOUND = 2),
        (u.prototype.eachMapping = function (g, F, A) {
          var C = F || null,
            D = A || u.GENERATED_ORDER,
            E;
          switch (D) {
            case u.GENERATED_ORDER:
              E = this._generatedMappings;
              break;
            case u.ORIGINAL_ORDER:
              E = this._originalMappings;
              break;
            default:
              throw new Error("Unknown order of iteration.");
          }
          var w = this.sourceRoot;
          E.map(function (b) {
            var S = b.source === null ? null : this._sources.at(b.source);
            return (
              (S = t.computeSourceURL(w, S, this._sourceMapURL)),
              {
                source: S,
                generatedLine: b.generatedLine,
                generatedColumn: b.generatedColumn,
                originalLine: b.originalLine,
                originalColumn: b.originalColumn,
                name: b.name === null ? null : this._names.at(b.name),
              }
            );
          }, this).forEach(g, C);
        }),
        (u.prototype.allGeneratedPositionsFor = function (g) {
          var F = t.getArg(g, "line"),
            A = {
              source: t.getArg(g, "source"),
              originalLine: F,
              originalColumn: t.getArg(g, "column", 0),
            };
          if (((A.source = this._findSourceIndex(A.source)), A.source < 0)) return [];
          var C = [],
            D = this._findMapping(
              A,
              this._originalMappings,
              "originalLine",
              "originalColumn",
              t.compareByOriginalPositions,
              r.LEAST_UPPER_BOUND,
            );
          if (D >= 0) {
            var E = this._originalMappings[D];
            if (g.column === void 0)
              for (var w = E.originalLine; E && E.originalLine === w; )
                C.push({
                  line: t.getArg(E, "generatedLine", null),
                  column: t.getArg(E, "generatedColumn", null),
                  lastColumn: t.getArg(E, "lastGeneratedColumn", null),
                }),
                  (E = this._originalMappings[++D]);
            else
              for (var b = E.originalColumn; E && E.originalLine === F && E.originalColumn == b; )
                C.push({
                  line: t.getArg(E, "generatedLine", null),
                  column: t.getArg(E, "generatedColumn", null),
                  lastColumn: t.getArg(E, "lastGeneratedColumn", null),
                }),
                  (E = this._originalMappings[++D]);
          }
          return C;
        }),
        (e.SourceMapConsumer = u);
      function h(g, F) {
        var A = g;
        typeof g == "string" && (A = t.parseSourceMapInput(g));
        var C = t.getArg(A, "version"),
          D = t.getArg(A, "sources"),
          E = t.getArg(A, "names", []),
          w = t.getArg(A, "sourceRoot", null),
          b = t.getArg(A, "sourcesContent", null),
          S = t.getArg(A, "mappings"),
          L = t.getArg(A, "file", null);
        if (C != this._version) throw new Error("Unsupported version: " + C);
        w && (w = t.normalize(w)),
          (D = D.map(String)
            .map(t.normalize)
            .map(function (_) {
              return w && t.isAbsolute(w) && t.isAbsolute(_) ? t.relative(w, _) : _;
            })),
          (this._names = n.fromArray(E.map(String), !0)),
          (this._sources = n.fromArray(D, !0)),
          (this._absoluteSources = this._sources.toArray().map(function (_) {
            return t.computeSourceURL(w, _, F);
          })),
          (this.sourceRoot = w),
          (this.sourcesContent = b),
          (this._mappings = S),
          (this._sourceMapURL = F),
          (this.file = L);
      }
      (h.prototype = Object.create(u.prototype)),
        (h.prototype.consumer = u),
        (h.prototype._findSourceIndex = function (g) {
          var F = g;
          if (
            (this.sourceRoot != null && (F = t.relative(this.sourceRoot, F)), this._sources.has(F))
          )
            return this._sources.indexOf(F);
          var A;
          for (A = 0; A < this._absoluteSources.length; ++A)
            if (this._absoluteSources[A] == g) return A;
          return -1;
        }),
        (h.fromSourceMap = function (g, F) {
          var A = Object.create(h.prototype),
            C = (A._names = n.fromArray(g._names.toArray(), !0)),
            D = (A._sources = n.fromArray(g._sources.toArray(), !0));
          (A.sourceRoot = g._sourceRoot),
            (A.sourcesContent = g._generateSourcesContent(A._sources.toArray(), A.sourceRoot)),
            (A.file = g._file),
            (A._sourceMapURL = F),
            (A._absoluteSources = A._sources.toArray().map(function (y) {
              return t.computeSourceURL(A.sourceRoot, y, F);
            }));
          for (
            var E = g._mappings.toArray().slice(),
              w = (A.__generatedMappings = []),
              b = (A.__originalMappings = []),
              S = 0,
              L = E.length;
            S < L;
            S++
          ) {
            var _ = E[S],
              x = new p();
            (x.generatedLine = _.generatedLine),
              (x.generatedColumn = _.generatedColumn),
              _.source &&
                ((x.source = D.indexOf(_.source)),
                (x.originalLine = _.originalLine),
                (x.originalColumn = _.originalColumn),
                _.name && (x.name = C.indexOf(_.name)),
                b.push(x)),
              w.push(x);
          }
          return o(A.__originalMappings, t.compareByOriginalPositions), A;
        }),
        (h.prototype._version = 3),
        Object.defineProperty(h.prototype, "sources", {
          get: function () {
            return this._absoluteSources.slice();
          },
        });
      function p() {
        (this.generatedLine = 0),
          (this.generatedColumn = 0),
          (this.source = null),
          (this.originalLine = null),
          (this.originalColumn = null),
          (this.name = null);
      }
      (h.prototype._parseMappings = function (g, F) {
        for (
          var A = 1,
            C = 0,
            D = 0,
            E = 0,
            w = 0,
            b = 0,
            S = g.length,
            L = 0,
            _ = {},
            x = {},
            y = [],
            v = [],
            B,
            P,
            j,
            M,
            V;
          L < S;

        )
          if (g.charAt(L) === ";") A++, L++, (C = 0);
          else if (g.charAt(L) === ",") L++;
          else {
            for (
              B = new p(), B.generatedLine = A, M = L;
              M < S && !this._charIsMappingSeparator(g, M);
              M++
            );
            if (((P = g.slice(L, M)), (j = _[P]), j)) L += P.length;
            else {
              for (j = []; L < M; ) s.decode(g, L, x), (V = x.value), (L = x.rest), j.push(V);
              if (j.length === 2) throw new Error("Found a source, but no line and column");
              if (j.length === 3) throw new Error("Found a source and line, but no column");
              _[P] = j;
            }
            (B.generatedColumn = C + j[0]),
              (C = B.generatedColumn),
              j.length > 1 &&
                ((B.source = w + j[1]),
                (w += j[1]),
                (B.originalLine = D + j[2]),
                (D = B.originalLine),
                (B.originalLine += 1),
                (B.originalColumn = E + j[3]),
                (E = B.originalColumn),
                j.length > 4 && ((B.name = b + j[4]), (b += j[4]))),
              v.push(B),
              typeof B.originalLine == "number" && y.push(B);
          }
        o(v, t.compareByGeneratedPositionsDeflated),
          (this.__generatedMappings = v),
          o(y, t.compareByOriginalPositions),
          (this.__originalMappings = y);
      }),
        (h.prototype._findMapping = function (g, F, A, C, D, E) {
          if (g[A] <= 0)
            throw new TypeError("Line must be greater than or equal to 1, got " + g[A]);
          if (g[C] < 0)
            throw new TypeError("Column must be greater than or equal to 0, got " + g[C]);
          return r.search(g, F, D, E);
        }),
        (h.prototype.computeColumnSpans = function () {
          for (var g = 0; g < this._generatedMappings.length; ++g) {
            var F = this._generatedMappings[g];
            if (g + 1 < this._generatedMappings.length) {
              var A = this._generatedMappings[g + 1];
              if (F.generatedLine === A.generatedLine) {
                F.lastGeneratedColumn = A.generatedColumn - 1;
                continue;
              }
            }
            F.lastGeneratedColumn = 1 / 0;
          }
        }),
        (h.prototype.originalPositionFor = function (g) {
          var F = { generatedLine: t.getArg(g, "line"), generatedColumn: t.getArg(g, "column") },
            A = this._findMapping(
              F,
              this._generatedMappings,
              "generatedLine",
              "generatedColumn",
              t.compareByGeneratedPositionsDeflated,
              t.getArg(g, "bias", u.GREATEST_LOWER_BOUND),
            );
          if (A >= 0) {
            var C = this._generatedMappings[A];
            if (C.generatedLine === F.generatedLine) {
              var D = t.getArg(C, "source", null);
              D !== null &&
                ((D = this._sources.at(D)),
                (D = t.computeSourceURL(this.sourceRoot, D, this._sourceMapURL)));
              var E = t.getArg(C, "name", null);
              return (
                E !== null && (E = this._names.at(E)),
                {
                  source: D,
                  line: t.getArg(C, "originalLine", null),
                  column: t.getArg(C, "originalColumn", null),
                  name: E,
                }
              );
            }
          }
          return { source: null, line: null, column: null, name: null };
        }),
        (h.prototype.hasContentsOfAllSources = function () {
          return this.sourcesContent
            ? this.sourcesContent.length >= this._sources.size() &&
                !this.sourcesContent.some(function (g) {
                  return g == null;
                })
            : !1;
        }),
        (h.prototype.sourceContentFor = function (g, F) {
          if (!this.sourcesContent) return null;
          var A = this._findSourceIndex(g);
          if (A >= 0) return this.sourcesContent[A];
          var C = g;
          this.sourceRoot != null && (C = t.relative(this.sourceRoot, C));
          var D;
          if (this.sourceRoot != null && (D = t.urlParse(this.sourceRoot))) {
            var E = C.replace(/^file:\/\//, "");
            if (D.scheme == "file" && this._sources.has(E))
              return this.sourcesContent[this._sources.indexOf(E)];
            if ((!D.path || D.path == "/") && this._sources.has("/" + C))
              return this.sourcesContent[this._sources.indexOf("/" + C)];
          }
          if (F) return null;
          throw new Error('"' + C + '" is not in the SourceMap.');
        }),
        (h.prototype.generatedPositionFor = function (g) {
          var F = t.getArg(g, "source");
          if (((F = this._findSourceIndex(F)), F < 0))
            return { line: null, column: null, lastColumn: null };
          var A = {
              source: F,
              originalLine: t.getArg(g, "line"),
              originalColumn: t.getArg(g, "column"),
            },
            C = this._findMapping(
              A,
              this._originalMappings,
              "originalLine",
              "originalColumn",
              t.compareByOriginalPositions,
              t.getArg(g, "bias", u.GREATEST_LOWER_BOUND),
            );
          if (C >= 0) {
            var D = this._originalMappings[C];
            if (D.source === A.source)
              return {
                line: t.getArg(D, "generatedLine", null),
                column: t.getArg(D, "generatedColumn", null),
                lastColumn: t.getArg(D, "lastGeneratedColumn", null),
              };
          }
          return { line: null, column: null, lastColumn: null };
        }),
        (e.BasicSourceMapConsumer = h);
      function m(g, F) {
        var A = g;
        typeof g == "string" && (A = t.parseSourceMapInput(g));
        var C = t.getArg(A, "version"),
          D = t.getArg(A, "sections");
        if (C != this._version) throw new Error("Unsupported version: " + C);
        (this._sources = new n()), (this._names = new n());
        var E = { line: -1, column: 0 };
        this._sections = D.map(function (w) {
          if (w.url) throw new Error("Support for url field in sections not implemented.");
          var b = t.getArg(w, "offset"),
            S = t.getArg(b, "line"),
            L = t.getArg(b, "column");
          if (S < E.line || (S === E.line && L < E.column))
            throw new Error("Section offsets must be ordered and non-overlapping.");
          return (
            (E = b),
            {
              generatedOffset: { generatedLine: S + 1, generatedColumn: L + 1 },
              consumer: new u(t.getArg(w, "map"), F),
            }
          );
        });
      }
      (m.prototype = Object.create(u.prototype)),
        (m.prototype.constructor = u),
        (m.prototype._version = 3),
        Object.defineProperty(m.prototype, "sources", {
          get: function () {
            for (var g = [], F = 0; F < this._sections.length; F++)
              for (var A = 0; A < this._sections[F].consumer.sources.length; A++)
                g.push(this._sections[F].consumer.sources[A]);
            return g;
          },
        }),
        (m.prototype.originalPositionFor = function (g) {
          var F = { generatedLine: t.getArg(g, "line"), generatedColumn: t.getArg(g, "column") },
            A = r.search(F, this._sections, function (D, E) {
              var w = D.generatedLine - E.generatedOffset.generatedLine;
              return w || D.generatedColumn - E.generatedOffset.generatedColumn;
            }),
            C = this._sections[A];
          return C
            ? C.consumer.originalPositionFor({
                line: F.generatedLine - (C.generatedOffset.generatedLine - 1),
                column:
                  F.generatedColumn -
                  (C.generatedOffset.generatedLine === F.generatedLine
                    ? C.generatedOffset.generatedColumn - 1
                    : 0),
                bias: g.bias,
              })
            : { source: null, line: null, column: null, name: null };
        }),
        (m.prototype.hasContentsOfAllSources = function () {
          return this._sections.every(function (g) {
            return g.consumer.hasContentsOfAllSources();
          });
        }),
        (m.prototype.sourceContentFor = function (g, F) {
          for (var A = 0; A < this._sections.length; A++) {
            var C = this._sections[A],
              D = C.consumer.sourceContentFor(g, !0);
            if (D) return D;
          }
          if (F) return null;
          throw new Error('"' + g + '" is not in the SourceMap.');
        }),
        (m.prototype.generatedPositionFor = function (g) {
          for (var F = 0; F < this._sections.length; F++) {
            var A = this._sections[F];
            if (A.consumer._findSourceIndex(t.getArg(g, "source")) !== -1) {
              var C = A.consumer.generatedPositionFor(g);
              if (C) {
                var D = {
                  line: C.line + (A.generatedOffset.generatedLine - 1),
                  column:
                    C.column +
                    (A.generatedOffset.generatedLine === C.line
                      ? A.generatedOffset.generatedColumn - 1
                      : 0),
                };
                return D;
              }
            }
          }
          return { line: null, column: null };
        }),
        (m.prototype._parseMappings = function (g, F) {
          (this.__generatedMappings = []), (this.__originalMappings = []);
          for (var A = 0; A < this._sections.length; A++)
            for (
              var C = this._sections[A], D = C.consumer._generatedMappings, E = 0;
              E < D.length;
              E++
            ) {
              var w = D[E],
                b = C.consumer._sources.at(w.source);
              (b = t.computeSourceURL(C.consumer.sourceRoot, b, this._sourceMapURL)),
                this._sources.add(b),
                (b = this._sources.indexOf(b));
              var S = null;
              w.name &&
                ((S = C.consumer._names.at(w.name)),
                this._names.add(S),
                (S = this._names.indexOf(S)));
              var L = {
                source: b,
                generatedLine: w.generatedLine + (C.generatedOffset.generatedLine - 1),
                generatedColumn:
                  w.generatedColumn +
                  (C.generatedOffset.generatedLine === w.generatedLine
                    ? C.generatedOffset.generatedColumn - 1
                    : 0),
                originalLine: w.originalLine,
                originalColumn: w.originalColumn,
                name: S,
              };
              this.__generatedMappings.push(L),
                typeof L.originalLine == "number" && this.__originalMappings.push(L);
            }
          o(this.__generatedMappings, t.compareByGeneratedPositionsDeflated),
            o(this.__originalMappings, t.compareByOriginalPositions);
        }),
        (e.IndexedSourceMapConsumer = m);
    },
  }),
  Vi = K({
    "../../node_modules/escodegen/node_modules/source-map/lib/source-node.js"(e) {
      var t = _n().SourceMapGenerator,
        r = At(),
        n = /(\r?\n)/,
        s = 10,
        o = "$$$isSourceNode$$$";
      function u(h, p, m, g, F) {
        (this.children = []),
          (this.sourceContents = {}),
          (this.line = h ?? null),
          (this.column = p ?? null),
          (this.source = m ?? null),
          (this.name = F ?? null),
          (this[o] = !0),
          g != null && this.add(g);
      }
      (u.fromStringWithSourceMap = function (h, p, m) {
        var g = new u(),
          F = h.split(n),
          A = 0,
          C = function () {
            var S = _(),
              L = _() || "";
            return S + L;
            function _() {
              return A < F.length ? F[A++] : void 0;
            }
          },
          D = 1,
          E = 0,
          w = null;
        return (
          p.eachMapping(function (S) {
            if (w !== null)
              if (D < S.generatedLine) b(w, C()), D++, (E = 0);
              else {
                var L = F[A] || "",
                  _ = L.substr(0, S.generatedColumn - E);
                (F[A] = L.substr(S.generatedColumn - E)), (E = S.generatedColumn), b(w, _), (w = S);
                return;
              }
            for (; D < S.generatedLine; ) g.add(C()), D++;
            if (E < S.generatedColumn) {
              var L = F[A] || "";
              g.add(L.substr(0, S.generatedColumn)),
                (F[A] = L.substr(S.generatedColumn)),
                (E = S.generatedColumn);
            }
            w = S;
          }, this),
          A < F.length && (w && b(w, C()), g.add(F.splice(A).join(""))),
          p.sources.forEach(function (S) {
            var L = p.sourceContentFor(S);
            L != null && (m != null && (S = r.join(m, S)), g.setSourceContent(S, L));
          }),
          g
        );
        function b(S, L) {
          if (S === null || S.source === void 0) g.add(L);
          else {
            var _ = m ? r.join(m, S.source) : S.source;
            g.add(new u(S.originalLine, S.originalColumn, _, L, S.name));
          }
        }
      }),
        (u.prototype.add = function (h) {
          if (Array.isArray(h))
            h.forEach(function (p) {
              this.add(p);
            }, this);
          else if (h[o] || typeof h == "string") h && this.children.push(h);
          else
            throw new TypeError(
              "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + h,
            );
          return this;
        }),
        (u.prototype.prepend = function (h) {
          if (Array.isArray(h)) for (var p = h.length - 1; p >= 0; p--) this.prepend(h[p]);
          else if (h[o] || typeof h == "string") this.children.unshift(h);
          else
            throw new TypeError(
              "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + h,
            );
          return this;
        }),
        (u.prototype.walk = function (h) {
          for (var p, m = 0, g = this.children.length; m < g; m++)
            (p = this.children[m]),
              p[o]
                ? p.walk(h)
                : p !== "" &&
                  h(p, {
                    source: this.source,
                    line: this.line,
                    column: this.column,
                    name: this.name,
                  });
        }),
        (u.prototype.join = function (h) {
          var p,
            m,
            g = this.children.length;
          if (g > 0) {
            for (p = [], m = 0; m < g - 1; m++) p.push(this.children[m]), p.push(h);
            p.push(this.children[m]), (this.children = p);
          }
          return this;
        }),
        (u.prototype.replaceRight = function (h, p) {
          var m = this.children[this.children.length - 1];
          return (
            m[o]
              ? m.replaceRight(h, p)
              : typeof m == "string"
                ? (this.children[this.children.length - 1] = m.replace(h, p))
                : this.children.push("".replace(h, p)),
            this
          );
        }),
        (u.prototype.setSourceContent = function (h, p) {
          this.sourceContents[r.toSetString(h)] = p;
        }),
        (u.prototype.walkSourceContents = function (h) {
          for (var p = 0, m = this.children.length; p < m; p++)
            this.children[p][o] && this.children[p].walkSourceContents(h);
          for (var g = Object.keys(this.sourceContents), p = 0, m = g.length; p < m; p++)
            h(r.fromSetString(g[p]), this.sourceContents[g[p]]);
        }),
        (u.prototype.toString = function () {
          var h = "";
          return (
            this.walk(function (p) {
              h += p;
            }),
            h
          );
        }),
        (u.prototype.toStringWithSourceMap = function (h) {
          var p = { code: "", line: 1, column: 0 },
            m = new t(h),
            g = !1,
            F = null,
            A = null,
            C = null,
            D = null;
          return (
            this.walk(function (E, w) {
              (p.code += E),
                w.source !== null && w.line !== null && w.column !== null
                  ? ((F !== w.source || A !== w.line || C !== w.column || D !== w.name) &&
                      m.addMapping({
                        source: w.source,
                        original: { line: w.line, column: w.column },
                        generated: { line: p.line, column: p.column },
                        name: w.name,
                      }),
                    (F = w.source),
                    (A = w.line),
                    (C = w.column),
                    (D = w.name),
                    (g = !0))
                  : g &&
                    (m.addMapping({ generated: { line: p.line, column: p.column } }),
                    (F = null),
                    (g = !1));
              for (var b = 0, S = E.length; b < S; b++)
                E.charCodeAt(b) === s
                  ? (p.line++,
                    (p.column = 0),
                    b + 1 === S
                      ? ((F = null), (g = !1))
                      : g &&
                        m.addMapping({
                          source: w.source,
                          original: { line: w.line, column: w.column },
                          generated: { line: p.line, column: p.column },
                          name: w.name,
                        }))
                  : p.column++;
            }),
            this.walkSourceContents(function (E, w) {
              m.setSourceContent(E, w);
            }),
            { code: p.code, map: m }
          );
        }),
        (e.SourceNode = u);
    },
  }),
  qi = K({
    "../../node_modules/escodegen/node_modules/source-map/source-map.js"(e) {
      (e.SourceMapGenerator = _n().SourceMapGenerator),
        (e.SourceMapConsumer = Mi().SourceMapConsumer),
        (e.SourceNode = Vi().SourceNode);
    },
  }),
  Ui = K({
    "../../node_modules/escodegen/package.json"(e, t) {
      t.exports = {
        name: "escodegen",
        description: "ECMAScript code generator",
        homepage: "http://github.com/estools/escodegen",
        main: "escodegen.js",
        bin: { esgenerate: "./bin/esgenerate.js", escodegen: "./bin/escodegen.js" },
        files: ["LICENSE.BSD", "README.md", "bin", "escodegen.js", "package.json"],
        version: "2.1.0",
        engines: { node: ">=6.0" },
        maintainers: [
          {
            name: "Yusuke Suzuki",
            email: "utatane.tea@gmail.com",
            web: "http://github.com/Constellation",
          },
        ],
        repository: { type: "git", url: "http://github.com/estools/escodegen.git" },
        dependencies: { estraverse: "^5.2.0", esutils: "^2.0.2", esprima: "^4.0.1" },
        optionalDependencies: { "source-map": "~0.6.1" },
        devDependencies: {
          acorn: "^8.0.4",
          bluebird: "^3.4.7",
          "bower-registry-client": "^1.0.0",
          chai: "^4.2.0",
          "chai-exclude": "^2.0.2",
          "commonjs-everywhere": "^0.9.7",
          gulp: "^4.0.2",
          "gulp-eslint": "^6.0.0",
          "gulp-mocha": "^7.0.2",
          minimist: "^1.2.5",
          optionator: "^0.9.1",
          semver: "^7.3.4",
        },
        license: "BSD-2-Clause",
        scripts: {
          test: "gulp travis",
          "unit-test": "gulp test",
          lint: "gulp lint",
          release: "node tools/release.js",
          "build-min":
            "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
          build: "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js",
        },
      };
    },
  }),
  Wi = K({
    "../../node_modules/escodegen/escodegen.js"(e) {
      (function () {
        var t, r, n, s, o, u, h, p, m, g, F, A, C, D, E, w, b, S, L, _, x, y, v, B, P, j;
        (o = Ii()), (u = Ni()), (t = o.Syntax);
        function M(i) {
          return oe.Expression.hasOwnProperty(i.type);
        }
        function V(i) {
          return oe.Statement.hasOwnProperty(i.type);
        }
        (r = {
          Sequence: 0,
          Yield: 1,
          Assignment: 1,
          Conditional: 2,
          ArrowFunction: 2,
          Coalesce: 3,
          LogicalOR: 4,
          LogicalAND: 5,
          BitwiseOR: 6,
          BitwiseXOR: 7,
          BitwiseAND: 8,
          Equality: 9,
          Relational: 10,
          BitwiseSHIFT: 11,
          Additive: 12,
          Multiplicative: 13,
          Exponentiation: 14,
          Await: 15,
          Unary: 15,
          Postfix: 16,
          OptionalChaining: 17,
          Call: 18,
          New: 19,
          TaggedTemplate: 20,
          Member: 21,
          Primary: 22,
        }),
          (n = {
            "??": r.Coalesce,
            "||": r.LogicalOR,
            "&&": r.LogicalAND,
            "|": r.BitwiseOR,
            "^": r.BitwiseXOR,
            "&": r.BitwiseAND,
            "==": r.Equality,
            "!=": r.Equality,
            "===": r.Equality,
            "!==": r.Equality,
            is: r.Equality,
            isnt: r.Equality,
            "<": r.Relational,
            ">": r.Relational,
            "<=": r.Relational,
            ">=": r.Relational,
            in: r.Relational,
            instanceof: r.Relational,
            "<<": r.BitwiseSHIFT,
            ">>": r.BitwiseSHIFT,
            ">>>": r.BitwiseSHIFT,
            "+": r.Additive,
            "-": r.Additive,
            "*": r.Multiplicative,
            "%": r.Multiplicative,
            "/": r.Multiplicative,
            "**": r.Exponentiation,
          });
        var U = 1,
          H = 2,
          ne = 4,
          se = 8,
          ue = 16,
          Z = 32,
          we = 64,
          st = H | ne,
          Re = U | H,
          R = U | H | ne,
          Je = U,
          je = ne,
          ut = U | ne,
          re = U,
          xe = U | Z,
          yt = 0,
          ri = U | ue,
          ni = U | se;
        function kr() {
          return {
            indent: null,
            base: null,
            parse: null,
            comment: !1,
            format: {
              indent: { style: "    ", base: 0, adjustMultilineComment: !1 },
              newline: `
`,
              space: " ",
              json: !1,
              renumber: !1,
              hexadecimal: !1,
              quotes: "single",
              escapeless: !1,
              compact: !1,
              parentheses: !0,
              semicolons: !0,
              safeConcatenation: !1,
              preserveBlankLines: !1,
            },
            moz: { comprehensionExpressionStartsWithAssignment: !1, starlessGenerator: !1 },
            sourceMap: null,
            sourceMapRoot: null,
            sourceMapWithCode: !1,
            directive: !1,
            raw: !0,
            verbatim: null,
            sourceCode: null,
          };
        }
        function Me(i, l) {
          var a = "";
          for (l |= 0; l > 0; l >>>= 1, i += i) l & 1 && (a += i);
          return a;
        }
        function ii(i) {
          return /[\r\n]/g.test(i);
        }
        function he(i) {
          var l = i.length;
          return l && u.code.isLineTerminator(i.charCodeAt(l - 1));
        }
        function Ir(i, l) {
          var a;
          for (a in l) l.hasOwnProperty(a) && (i[a] = l[a]);
          return i;
        }
        function Ft(i, l) {
          var a, c;
          function d(k) {
            return typeof k == "object" && k instanceof Object && !(k instanceof RegExp);
          }
          for (a in l)
            l.hasOwnProperty(a) &&
              ((c = l[a]), d(c) ? (d(i[a]) ? Ft(i[a], c) : (i[a] = Ft({}, c))) : (i[a] = c));
          return i;
        }
        function si(i) {
          var l, a, c, d, k;
          if (i !== i) throw new Error("Numeric literal whose value is NaN");
          if (i < 0 || (i === 0 && 1 / i < 0))
            throw new Error("Numeric literal whose value is negative");
          if (i === 1 / 0) return m ? "null" : g ? "1e400" : "1e+400";
          if (((l = "" + i), !g || l.length < 3)) return l;
          for (
            a = l.indexOf("."),
              !m && l.charCodeAt(0) === 48 && a === 1 && ((a = 0), (l = l.slice(1))),
              c = l,
              l = l.replace("e+", "e"),
              d = 0,
              (k = c.indexOf("e")) > 0 && ((d = +c.slice(k + 1)), (c = c.slice(0, k))),
              a >= 0 && ((d -= c.length - a - 1), (c = +(c.slice(0, a) + c.slice(a + 1)) + "")),
              k = 0;
            c.charCodeAt(c.length + k - 1) === 48;

          )
            --k;
          return (
            k !== 0 && ((d -= k), (c = c.slice(0, k))),
            d !== 0 && (c += "e" + d),
            (c.length < l.length ||
              (F &&
                i > 1e12 &&
                Math.floor(i) === i &&
                (c = "0x" + i.toString(16)).length < l.length)) &&
              +c === i &&
              (l = c),
            l
          );
        }
        function Tr(i, l) {
          return (i & -2) === 8232
            ? (l ? "u" : "\\u") + (i === 8232 ? "2028" : "2029")
            : i === 10 || i === 13
              ? (l ? "" : "\\") + (i === 10 ? "n" : "r")
              : String.fromCharCode(i);
        }
        function ui(i) {
          var l, a, c, d, k, I, T, O;
          if (((a = i.toString()), i.source)) {
            if (((l = a.match(/\/([^/]*)$/)), !l)) return a;
            for (c = l[1], a = "", T = !1, O = !1, d = 0, k = i.source.length; d < k; ++d)
              (I = i.source.charCodeAt(d)),
                O
                  ? ((a += Tr(I, O)), (O = !1))
                  : (T ? I === 93 && (T = !1) : I === 47 ? (a += "\\") : I === 91 && (T = !0),
                    (a += Tr(I, O)),
                    (O = I === 92));
            return "/" + a + "/" + c;
          }
          return a;
        }
        function ai(i, l) {
          var a;
          return i === 8
            ? "\\b"
            : i === 12
              ? "\\f"
              : i === 9
                ? "\\t"
                : ((a = i.toString(16).toUpperCase()),
                  m || i > 255
                    ? "\\u" + "0000".slice(a.length) + a
                    : i === 0 && !u.code.isDecimalDigit(l)
                      ? "\\0"
                      : i === 11
                        ? "\\x0B"
                        : "\\x" + "00".slice(a.length) + a);
        }
        function oi(i) {
          if (i === 92) return "\\\\";
          if (i === 10) return "\\n";
          if (i === 13) return "\\r";
          if (i === 8232) return "\\u2028";
          if (i === 8233) return "\\u2029";
          throw new Error("Incorrectly classified character");
        }
        function li(i) {
          var l, a, c, d;
          for (d = A === "double" ? '"' : "'", l = 0, a = i.length; l < a; ++l)
            if (((c = i.charCodeAt(l)), c === 39)) {
              d = '"';
              break;
            } else if (c === 34) {
              d = "'";
              break;
            } else c === 92 && ++l;
          return d + i + d;
        }
        function ci(i) {
          var l = "",
            a,
            c,
            d,
            k = 0,
            I = 0,
            T,
            O;
          for (a = 0, c = i.length; a < c; ++a) {
            if (((d = i.charCodeAt(a)), d === 39)) ++k;
            else if (d === 34) ++I;
            else if (d === 47 && m) l += "\\";
            else if (u.code.isLineTerminator(d) || d === 92) {
              l += oi(d);
              continue;
            } else if (
              !u.code.isIdentifierPartES5(d) &&
              ((m && d < 32) || (!m && !C && (d < 32 || d > 126)))
            ) {
              l += ai(d, i.charCodeAt(a + 1));
              continue;
            }
            l += String.fromCharCode(d);
          }
          if (
            ((T = !(A === "double" || (A === "auto" && I < k))), (O = T ? "'" : '"'), !(T ? k : I))
          )
            return O + l + O;
          for (i = l, l = O, a = 0, c = i.length; a < c; ++a)
            (d = i.charCodeAt(a)),
              ((d === 39 && T) || (d === 34 && !T)) && (l += "\\"),
              (l += String.fromCharCode(d));
          return l + O;
        }
        function Pr(i) {
          var l,
            a,
            c,
            d = "";
          for (l = 0, a = i.length; l < a; ++l) (c = i[l]), (d += Array.isArray(c) ? Pr(c) : c);
          return d;
        }
        function Y(i, l) {
          if (!y) return Array.isArray(i) ? Pr(i) : i;
          if (l == null) {
            if (i instanceof s) return i;
            l = {};
          }
          return l.loc == null
            ? new s(null, null, y, i, l.name || null)
            : new s(
                l.loc.start.line,
                l.loc.start.column,
                y === !0 ? l.loc.source || null : y,
                i,
                l.name || null,
              );
        }
        function pe() {
          return E || " ";
        }
        function W(i, l) {
          var a, c, d, k;
          return (
            (a = Y(i).toString()),
            a.length === 0
              ? [l]
              : ((c = Y(l).toString()),
                c.length === 0
                  ? [i]
                  : ((d = a.charCodeAt(a.length - 1)),
                    (k = c.charCodeAt(0)),
                    ((d === 43 || d === 45) && d === k) ||
                    (u.code.isIdentifierPartES5(d) && u.code.isIdentifierPartES5(k)) ||
                    (d === 47 && k === 105)
                      ? [i, pe(), l]
                      : u.code.isWhiteSpace(d) ||
                          u.code.isLineTerminator(d) ||
                          u.code.isWhiteSpace(k) ||
                          u.code.isLineTerminator(k)
                        ? [i, l]
                        : [i, E, l]))
          );
        }
        function fe(i) {
          return [h, i];
        }
        function ae(i) {
          var l;
          (l = h), (h += p), i(h), (h = l);
        }
        function hi(i) {
          var l;
          for (l = i.length - 1; l >= 0 && !u.code.isLineTerminator(i.charCodeAt(l)); --l);
          return i.length - 1 - l;
        }
        function pi(i, l) {
          var a, c, d, k, I, T, O, J;
          for (a = i.split(/\r\n|[\r\n]/), T = Number.MAX_VALUE, c = 1, d = a.length; c < d; ++c) {
            for (k = a[c], I = 0; I < k.length && u.code.isWhiteSpace(k.charCodeAt(I)); ) ++I;
            T > I && (T = I);
          }
          for (
            typeof l < "u"
              ? ((O = h), a[1][T] === "*" && (l += " "), (h = l))
              : (T & 1 && --T, (O = h)),
              c = 1,
              d = a.length;
            c < d;
            ++c
          )
            (J = Y(fe(a[c].slice(T)))), (a[c] = y ? J.join("") : J);
          return (
            (h = O),
            a.join(`
`)
          );
        }
        function ke(i, l) {
          if (i.type === "Line") {
            if (he(i.value)) return "//" + i.value;
            var a = "//" + i.value;
            return (
              B ||
                (a += `
`),
              a
            );
          }
          return _.format.indent.adjustMultilineComment && /[\n\r]/.test(i.value)
            ? pi("/*" + i.value + "*/", l)
            : "/*" + i.value + "*/";
        }
        function Nr(i, l) {
          var a, c, d, k, I, T, O, J, ce, Ve, He, Rr, jr, ve;
          if (i.leadingComments && i.leadingComments.length > 0) {
            if (((k = l), B)) {
              for (
                d = i.leadingComments[0],
                  l = [],
                  J = d.extendedRange,
                  ce = d.range,
                  He = v.substring(J[0], ce[0]),
                  ve = (He.match(/\n/g) || []).length,
                  ve > 0
                    ? (l.push(
                        Me(
                          `
`,
                          ve,
                        ),
                      ),
                      l.push(fe(ke(d))))
                    : (l.push(He), l.push(ke(d))),
                  Ve = ce,
                  a = 1,
                  c = i.leadingComments.length;
                a < c;
                a++
              )
                (d = i.leadingComments[a]),
                  (ce = d.range),
                  (Rr = v.substring(Ve[1], ce[0])),
                  (ve = (Rr.match(/\n/g) || []).length),
                  l.push(
                    Me(
                      `
`,
                      ve,
                    ),
                  ),
                  l.push(fe(ke(d))),
                  (Ve = ce);
              (jr = v.substring(ce[1], J[1])),
                (ve = (jr.match(/\n/g) || []).length),
                l.push(
                  Me(
                    `
`,
                    ve,
                  ),
                );
            } else
              for (
                d = i.leadingComments[0],
                  l = [],
                  S &&
                    i.type === t.Program &&
                    i.body.length === 0 &&
                    l.push(`
`),
                  l.push(ke(d)),
                  he(Y(l).toString()) ||
                    l.push(`
`),
                  a = 1,
                  c = i.leadingComments.length;
                a < c;
                ++a
              )
                (d = i.leadingComments[a]),
                  (O = [ke(d)]),
                  he(Y(O).toString()) ||
                    O.push(`
`),
                  l.push(fe(O));
            l.push(fe(k));
          }
          if (i.trailingComments)
            if (B)
              (d = i.trailingComments[0]),
                (J = d.extendedRange),
                (ce = d.range),
                (He = v.substring(J[0], ce[0])),
                (ve = (He.match(/\n/g) || []).length),
                ve > 0
                  ? (l.push(
                      Me(
                        `
`,
                        ve,
                      ),
                    ),
                    l.push(fe(ke(d))))
                  : (l.push(He), l.push(ke(d)));
            else
              for (
                I = !he(Y(l).toString()),
                  T = Me(" ", hi(Y([h, l, p]).toString())),
                  a = 0,
                  c = i.trailingComments.length;
                a < c;
                ++a
              )
                (d = i.trailingComments[a]),
                  I
                    ? (a === 0 ? (l = [l, p]) : (l = [l, T]), l.push(ke(d, T)))
                    : (l = [l, fe(ke(d))]),
                  a !== c - 1 &&
                    !he(Y(l).toString()) &&
                    (l = [
                      l,
                      `
`,
                    ]);
          return l;
        }
        function Xe(i, l, a) {
          var c,
            d = 0;
          for (c = i; c < l; c++)
            v[c] ===
              `
` && d++;
          for (c = 1; c < d; c++) a.push(D);
        }
        function le(i, l, a) {
          return l < a ? ["(", i, ")"] : i;
        }
        function Lr(i) {
          var l, a, c;
          for (c = i.split(/\r\n|\n/), l = 1, a = c.length; l < a; l++) c[l] = D + h + c[l];
          return c;
        }
        function fi(i, l) {
          var a, c, d;
          return (
            (a = i[_.verbatim]),
            typeof a == "string"
              ? (c = le(Lr(a), r.Sequence, l))
              : ((c = Lr(a.content)),
                (d = a.precedence != null ? a.precedence : r.Sequence),
                (c = le(c, d, l))),
            Y(c, i)
          );
        }
        function oe() {}
        (oe.prototype.maybeBlock = function (i, l) {
          var a,
            c,
            d = this;
          return (
            (c = !_.comment || !i.leadingComments),
            i.type === t.BlockStatement && c
              ? [E, this.generateStatement(i, l)]
              : i.type === t.EmptyStatement && c
                ? ";"
                : (ae(function () {
                    a = [D, fe(d.generateStatement(i, l))];
                  }),
                  a)
          );
        }),
          (oe.prototype.maybeBlockSuffix = function (i, l) {
            var a = he(Y(l).toString());
            return i.type === t.BlockStatement && (!_.comment || !i.leadingComments) && !a
              ? [l, E]
              : a
                ? [l, h]
                : [l, D, h];
          });
        function Ae(i) {
          return Y(i.name, i);
        }
        function at(i, l) {
          return i.async ? "async" + (l ? pe() : E) : "";
        }
        function xt(i) {
          var l = i.generator && !_.moz.starlessGenerator;
          return l ? "*" + E : "";
        }
        function Or(i) {
          var l = i.value,
            a = "";
          return l.async && (a += at(l, !i.computed)), l.generator && (a += xt(l) ? "*" : ""), a;
        }
        (oe.prototype.generatePattern = function (i, l, a) {
          return i.type === t.Identifier ? Ae(i) : this.generateExpression(i, l, a);
        }),
          (oe.prototype.generateFunctionParams = function (i) {
            var l, a, c, d;
            if (
              ((d = !1),
              i.type === t.ArrowFunctionExpression &&
                !i.rest &&
                (!i.defaults || i.defaults.length === 0) &&
                i.params.length === 1 &&
                i.params[0].type === t.Identifier)
            )
              c = [at(i, !0), Ae(i.params[0])];
            else {
              for (
                c = i.type === t.ArrowFunctionExpression ? [at(i, !1)] : [],
                  c.push("("),
                  i.defaults && (d = !0),
                  l = 0,
                  a = i.params.length;
                l < a;
                ++l
              )
                d && i.defaults[l]
                  ? c.push(
                      this.generateAssignment(i.params[l], i.defaults[l], "=", r.Assignment, R),
                    )
                  : c.push(this.generatePattern(i.params[l], r.Assignment, R)),
                  l + 1 < a && c.push("," + E);
              i.rest && (i.params.length && c.push("," + E), c.push("..."), c.push(Ae(i.rest))),
                c.push(")");
            }
            return c;
          }),
          (oe.prototype.generateFunctionBody = function (i) {
            var l, a;
            return (
              (l = this.generateFunctionParams(i)),
              i.type === t.ArrowFunctionExpression && (l.push(E), l.push("=>")),
              i.expression
                ? (l.push(E),
                  (a = this.generateExpression(i.body, r.Assignment, R)),
                  a.toString().charAt(0) === "{" && (a = ["(", a, ")"]),
                  l.push(a))
                : l.push(this.maybeBlock(i.body, ni)),
              l
            );
          }),
          (oe.prototype.generateIterationForStatement = function (i, l, a) {
            var c = ["for" + (l.await ? pe() + "await" : "") + E + "("],
              d = this;
            return (
              ae(function () {
                l.left.type === t.VariableDeclaration
                  ? ae(function () {
                      c.push(l.left.kind + pe()),
                        c.push(d.generateStatement(l.left.declarations[0], yt));
                    })
                  : c.push(d.generateExpression(l.left, r.Call, R)),
                  (c = W(c, i)),
                  (c = [W(c, d.generateExpression(l.right, r.Assignment, R)), ")"]);
              }),
              c.push(this.maybeBlock(l.body, a)),
              c
            );
          }),
          (oe.prototype.generatePropertyKey = function (i, l) {
            var a = [];
            return (
              l && a.push("["),
              a.push(this.generateExpression(i, r.Assignment, R)),
              l && a.push("]"),
              a
            );
          }),
          (oe.prototype.generateAssignment = function (i, l, a, c, d) {
            return (
              r.Assignment < c && (d |= U),
              le(
                [
                  this.generateExpression(i, r.Call, d),
                  E + a + E,
                  this.generateExpression(l, r.Assignment, d),
                ],
                r.Assignment,
                c,
              )
            );
          }),
          (oe.prototype.semicolon = function (i) {
            return !b && i & Z ? "" : ";";
          }),
          (oe.Statement = {
            BlockStatement: function (i, l) {
              var a,
                c,
                d = ["{", D],
                k = this;
              return (
                ae(function () {
                  i.body.length === 0 &&
                    B &&
                    ((a = i.range),
                    a[1] - a[0] > 2 &&
                      ((c = v.substring(a[0] + 1, a[1] - 1)),
                      c[0] ===
                        `
` && (d = ["{"]),
                      d.push(c)));
                  var I, T, O, J;
                  for (J = re, l & se && (J |= ue), I = 0, T = i.body.length; I < T; ++I)
                    B &&
                      (I === 0 &&
                        (i.body[0].leadingComments &&
                          ((a = i.body[0].leadingComments[0].extendedRange),
                          (c = v.substring(a[0], a[1])),
                          c[0] ===
                            `
` && (d = ["{"])),
                        i.body[0].leadingComments || Xe(i.range[0], i.body[0].range[0], d)),
                      I > 0 &&
                        !i.body[I - 1].trailingComments &&
                        !i.body[I].leadingComments &&
                        Xe(i.body[I - 1].range[1], i.body[I].range[0], d)),
                      I === T - 1 && (J |= Z),
                      i.body[I].leadingComments && B
                        ? (O = k.generateStatement(i.body[I], J))
                        : (O = fe(k.generateStatement(i.body[I], J))),
                      d.push(O),
                      he(Y(O).toString()) ||
                        (B && I < T - 1 && i.body[I + 1].leadingComments) ||
                        d.push(D),
                      B &&
                        I === T - 1 &&
                        (i.body[I].trailingComments || Xe(i.body[I].range[1], i.range[1], d));
                }),
                d.push(fe("}")),
                d
              );
            },
            BreakStatement: function (i, l) {
              return i.label
                ? "break " + i.label.name + this.semicolon(l)
                : "break" + this.semicolon(l);
            },
            ContinueStatement: function (i, l) {
              return i.label
                ? "continue " + i.label.name + this.semicolon(l)
                : "continue" + this.semicolon(l);
            },
            ClassBody: function (i, l) {
              var a = ["{", D],
                c = this;
              return (
                ae(function (d) {
                  var k, I;
                  for (k = 0, I = i.body.length; k < I; ++k)
                    a.push(d),
                      a.push(c.generateExpression(i.body[k], r.Sequence, R)),
                      k + 1 < I && a.push(D);
                }),
                he(Y(a).toString()) || a.push(D),
                a.push(h),
                a.push("}"),
                a
              );
            },
            ClassDeclaration: function (i, l) {
              var a, c;
              return (
                (a = ["class"]),
                i.id && (a = W(a, this.generateExpression(i.id, r.Sequence, R))),
                i.superClass &&
                  ((c = W("extends", this.generateExpression(i.superClass, r.Unary, R))),
                  (a = W(a, c))),
                a.push(E),
                a.push(this.generateStatement(i.body, xe)),
                a
              );
            },
            DirectiveStatement: function (i, l) {
              return _.raw && i.raw
                ? i.raw + this.semicolon(l)
                : li(i.directive) + this.semicolon(l);
            },
            DoWhileStatement: function (i, l) {
              var a = W("do", this.maybeBlock(i.body, re));
              return (
                (a = this.maybeBlockSuffix(i.body, a)),
                W(a, [
                  "while" + E + "(",
                  this.generateExpression(i.test, r.Sequence, R),
                  ")" + this.semicolon(l),
                ])
              );
            },
            CatchClause: function (i, l) {
              var a,
                c = this;
              return (
                ae(function () {
                  var d;
                  i.param
                    ? ((a = ["catch" + E + "(", c.generateExpression(i.param, r.Sequence, R), ")"]),
                      i.guard &&
                        ((d = c.generateExpression(i.guard, r.Sequence, R)),
                        a.splice(2, 0, " if ", d)))
                    : (a = ["catch"]);
                }),
                a.push(this.maybeBlock(i.body, re)),
                a
              );
            },
            DebuggerStatement: function (i, l) {
              return "debugger" + this.semicolon(l);
            },
            EmptyStatement: function (i, l) {
              return ";";
            },
            ExportDefaultDeclaration: function (i, l) {
              var a = ["export"],
                c;
              return (
                (c = l & Z ? xe : re),
                (a = W(a, "default")),
                V(i.declaration)
                  ? (a = W(a, this.generateStatement(i.declaration, c)))
                  : (a = W(
                      a,
                      this.generateExpression(i.declaration, r.Assignment, R) + this.semicolon(l),
                    )),
                a
              );
            },
            ExportNamedDeclaration: function (i, l) {
              var a = ["export"],
                c,
                d = this;
              return (
                (c = l & Z ? xe : re),
                i.declaration
                  ? W(a, this.generateStatement(i.declaration, c))
                  : (i.specifiers &&
                      (i.specifiers.length === 0
                        ? (a = W(a, "{" + E + "}"))
                        : i.specifiers[0].type === t.ExportBatchSpecifier
                          ? (a = W(a, this.generateExpression(i.specifiers[0], r.Sequence, R)))
                          : ((a = W(a, "{")),
                            ae(function (k) {
                              var I, T;
                              for (a.push(D), I = 0, T = i.specifiers.length; I < T; ++I)
                                a.push(k),
                                  a.push(d.generateExpression(i.specifiers[I], r.Sequence, R)),
                                  I + 1 < T && a.push("," + D);
                            }),
                            he(Y(a).toString()) || a.push(D),
                            a.push(h + "}")),
                      i.source
                        ? (a = W(a, [
                            "from" + E,
                            this.generateExpression(i.source, r.Sequence, R),
                            this.semicolon(l),
                          ]))
                        : a.push(this.semicolon(l))),
                    a)
              );
            },
            ExportAllDeclaration: function (i, l) {
              return [
                "export" + E,
                "*" + E,
                "from" + E,
                this.generateExpression(i.source, r.Sequence, R),
                this.semicolon(l),
              ];
            },
            ExpressionStatement: function (i, l) {
              var a, c;
              function d(T) {
                var O;
                return T.slice(0, 5) !== "class"
                  ? !1
                  : ((O = T.charCodeAt(5)),
                    O === 123 || u.code.isWhiteSpace(O) || u.code.isLineTerminator(O));
              }
              function k(T) {
                var O;
                return T.slice(0, 8) !== "function"
                  ? !1
                  : ((O = T.charCodeAt(8)),
                    O === 40 || u.code.isWhiteSpace(O) || O === 42 || u.code.isLineTerminator(O));
              }
              function I(T) {
                var O, J, ce;
                if (T.slice(0, 5) !== "async" || !u.code.isWhiteSpace(T.charCodeAt(5))) return !1;
                for (J = 6, ce = T.length; J < ce && u.code.isWhiteSpace(T.charCodeAt(J)); ++J);
                return J === ce || T.slice(J, J + 8) !== "function"
                  ? !1
                  : ((O = T.charCodeAt(J + 8)),
                    O === 40 || u.code.isWhiteSpace(O) || O === 42 || u.code.isLineTerminator(O));
              }
              return (
                (a = [this.generateExpression(i.expression, r.Sequence, R)]),
                (c = Y(a).toString()),
                c.charCodeAt(0) === 123 ||
                d(c) ||
                k(c) ||
                I(c) ||
                (L &&
                  l & ue &&
                  i.expression.type === t.Literal &&
                  typeof i.expression.value == "string")
                  ? (a = ["(", a, ")" + this.semicolon(l)])
                  : a.push(this.semicolon(l)),
                a
              );
            },
            ImportDeclaration: function (i, l) {
              var a,
                c,
                d = this;
              return i.specifiers.length === 0
                ? ["import", E, this.generateExpression(i.source, r.Sequence, R), this.semicolon(l)]
                : ((a = ["import"]),
                  (c = 0),
                  i.specifiers[c].type === t.ImportDefaultSpecifier &&
                    ((a = W(a, [this.generateExpression(i.specifiers[c], r.Sequence, R)])), ++c),
                  i.specifiers[c] &&
                    (c !== 0 && a.push(","),
                    i.specifiers[c].type === t.ImportNamespaceSpecifier
                      ? (a = W(a, [E, this.generateExpression(i.specifiers[c], r.Sequence, R)]))
                      : (a.push(E + "{"),
                        i.specifiers.length - c === 1
                          ? (a.push(E),
                            a.push(this.generateExpression(i.specifiers[c], r.Sequence, R)),
                            a.push(E + "}" + E))
                          : (ae(function (k) {
                              var I, T;
                              for (a.push(D), I = c, T = i.specifiers.length; I < T; ++I)
                                a.push(k),
                                  a.push(d.generateExpression(i.specifiers[I], r.Sequence, R)),
                                  I + 1 < T && a.push("," + D);
                            }),
                            he(Y(a).toString()) || a.push(D),
                            a.push(h + "}" + E)))),
                  (a = W(a, [
                    "from" + E,
                    this.generateExpression(i.source, r.Sequence, R),
                    this.semicolon(l),
                  ])),
                  a);
            },
            VariableDeclarator: function (i, l) {
              var a = l & U ? R : st;
              return i.init
                ? [
                    this.generateExpression(i.id, r.Assignment, a),
                    E,
                    "=",
                    E,
                    this.generateExpression(i.init, r.Assignment, a),
                  ]
                : this.generatePattern(i.id, r.Assignment, a);
            },
            VariableDeclaration: function (i, l) {
              var a,
                c,
                d,
                k,
                I,
                T = this;
              (a = [i.kind]), (I = l & U ? re : yt);
              function O() {
                for (
                  k = i.declarations[0],
                    _.comment && k.leadingComments
                      ? (a.push(`
`),
                        a.push(fe(T.generateStatement(k, I))))
                      : (a.push(pe()), a.push(T.generateStatement(k, I))),
                    c = 1,
                    d = i.declarations.length;
                  c < d;
                  ++c
                )
                  (k = i.declarations[c]),
                    _.comment && k.leadingComments
                      ? (a.push("," + D), a.push(fe(T.generateStatement(k, I))))
                      : (a.push("," + E), a.push(T.generateStatement(k, I)));
              }
              return i.declarations.length > 1 ? ae(O) : O(), a.push(this.semicolon(l)), a;
            },
            ThrowStatement: function (i, l) {
              return [
                W("throw", this.generateExpression(i.argument, r.Sequence, R)),
                this.semicolon(l),
              ];
            },
            TryStatement: function (i, l) {
              var a, c, d, k;
              if (
                ((a = ["try", this.maybeBlock(i.block, re)]),
                (a = this.maybeBlockSuffix(i.block, a)),
                i.handlers)
              )
                for (c = 0, d = i.handlers.length; c < d; ++c)
                  (a = W(a, this.generateStatement(i.handlers[c], re))),
                    (i.finalizer || c + 1 !== d) &&
                      (a = this.maybeBlockSuffix(i.handlers[c].body, a));
              else {
                for (k = i.guardedHandlers || [], c = 0, d = k.length; c < d; ++c)
                  (a = W(a, this.generateStatement(k[c], re))),
                    (i.finalizer || c + 1 !== d) && (a = this.maybeBlockSuffix(k[c].body, a));
                if (i.handler)
                  if (Array.isArray(i.handler))
                    for (c = 0, d = i.handler.length; c < d; ++c)
                      (a = W(a, this.generateStatement(i.handler[c], re))),
                        (i.finalizer || c + 1 !== d) &&
                          (a = this.maybeBlockSuffix(i.handler[c].body, a));
                  else
                    (a = W(a, this.generateStatement(i.handler, re))),
                      i.finalizer && (a = this.maybeBlockSuffix(i.handler.body, a));
              }
              return i.finalizer && (a = W(a, ["finally", this.maybeBlock(i.finalizer, re)])), a;
            },
            SwitchStatement: function (i, l) {
              var a,
                c,
                d,
                k,
                I,
                T = this;
              if (
                (ae(function () {
                  a = [
                    "switch" + E + "(",
                    T.generateExpression(i.discriminant, r.Sequence, R),
                    ")" + E + "{" + D,
                  ];
                }),
                i.cases)
              )
                for (I = re, d = 0, k = i.cases.length; d < k; ++d)
                  d === k - 1 && (I |= Z),
                    (c = fe(this.generateStatement(i.cases[d], I))),
                    a.push(c),
                    he(Y(c).toString()) || a.push(D);
              return a.push(fe("}")), a;
            },
            SwitchCase: function (i, l) {
              var a,
                c,
                d,
                k,
                I,
                T = this;
              return (
                ae(function () {
                  for (
                    i.test
                      ? (a = [W("case", T.generateExpression(i.test, r.Sequence, R)), ":"])
                      : (a = ["default:"]),
                      d = 0,
                      k = i.consequent.length,
                      k &&
                        i.consequent[0].type === t.BlockStatement &&
                        ((c = T.maybeBlock(i.consequent[0], re)), a.push(c), (d = 1)),
                      d !== k && !he(Y(a).toString()) && a.push(D),
                      I = re;
                    d < k;
                    ++d
                  )
                    d === k - 1 && l & Z && (I |= Z),
                      (c = fe(T.generateStatement(i.consequent[d], I))),
                      a.push(c),
                      d + 1 !== k && !he(Y(c).toString()) && a.push(D);
                }),
                a
              );
            },
            IfStatement: function (i, l) {
              var a,
                c,
                d,
                k = this;
              return (
                ae(function () {
                  a = ["if" + E + "(", k.generateExpression(i.test, r.Sequence, R), ")"];
                }),
                (d = l & Z),
                (c = re),
                d && (c |= Z),
                i.alternate
                  ? (a.push(this.maybeBlock(i.consequent, re)),
                    (a = this.maybeBlockSuffix(i.consequent, a)),
                    i.alternate.type === t.IfStatement
                      ? (a = W(a, ["else ", this.generateStatement(i.alternate, c)]))
                      : (a = W(a, W("else", this.maybeBlock(i.alternate, c)))))
                  : a.push(this.maybeBlock(i.consequent, c)),
                a
              );
            },
            ForStatement: function (i, l) {
              var a,
                c = this;
              return (
                ae(function () {
                  (a = ["for" + E + "("]),
                    i.init
                      ? i.init.type === t.VariableDeclaration
                        ? a.push(c.generateStatement(i.init, yt))
                        : (a.push(c.generateExpression(i.init, r.Sequence, st)), a.push(";"))
                      : a.push(";"),
                    i.test && (a.push(E), a.push(c.generateExpression(i.test, r.Sequence, R))),
                    a.push(";"),
                    i.update && (a.push(E), a.push(c.generateExpression(i.update, r.Sequence, R))),
                    a.push(")");
                }),
                a.push(this.maybeBlock(i.body, l & Z ? xe : re)),
                a
              );
            },
            ForInStatement: function (i, l) {
              return this.generateIterationForStatement("in", i, l & Z ? xe : re);
            },
            ForOfStatement: function (i, l) {
              return this.generateIterationForStatement("of", i, l & Z ? xe : re);
            },
            LabeledStatement: function (i, l) {
              return [i.label.name + ":", this.maybeBlock(i.body, l & Z ? xe : re)];
            },
            Program: function (i, l) {
              var a, c, d, k, I;
              for (
                k = i.body.length,
                  a = [
                    S && k > 0
                      ? `
`
                      : "",
                  ],
                  I = ri,
                  d = 0;
                d < k;
                ++d
              )
                !S && d === k - 1 && (I |= Z),
                  B &&
                    (d === 0 &&
                      (i.body[0].leadingComments || Xe(i.range[0], i.body[d].range[0], a)),
                    d > 0 &&
                      !i.body[d - 1].trailingComments &&
                      !i.body[d].leadingComments &&
                      Xe(i.body[d - 1].range[1], i.body[d].range[0], a)),
                  (c = fe(this.generateStatement(i.body[d], I))),
                  a.push(c),
                  d + 1 < k &&
                    !he(Y(c).toString()) &&
                    ((B && i.body[d + 1].leadingComments) || a.push(D)),
                  B &&
                    d === k - 1 &&
                    (i.body[d].trailingComments || Xe(i.body[d].range[1], i.range[1], a));
              return a;
            },
            FunctionDeclaration: function (i, l) {
              return [
                at(i, !0),
                "function",
                xt(i) || pe(),
                i.id ? Ae(i.id) : "",
                this.generateFunctionBody(i),
              ];
            },
            ReturnStatement: function (i, l) {
              return i.argument
                ? [
                    W("return", this.generateExpression(i.argument, r.Sequence, R)),
                    this.semicolon(l),
                  ]
                : ["return" + this.semicolon(l)];
            },
            WhileStatement: function (i, l) {
              var a,
                c = this;
              return (
                ae(function () {
                  a = ["while" + E + "(", c.generateExpression(i.test, r.Sequence, R), ")"];
                }),
                a.push(this.maybeBlock(i.body, l & Z ? xe : re)),
                a
              );
            },
            WithStatement: function (i, l) {
              var a,
                c = this;
              return (
                ae(function () {
                  a = ["with" + E + "(", c.generateExpression(i.object, r.Sequence, R), ")"];
                }),
                a.push(this.maybeBlock(i.body, l & Z ? xe : re)),
                a
              );
            },
          }),
          Ir(oe.prototype, oe.Statement),
          (oe.Expression = {
            SequenceExpression: function (i, l, a) {
              var c, d, k;
              for (r.Sequence < l && (a |= U), c = [], d = 0, k = i.expressions.length; d < k; ++d)
                c.push(this.generateExpression(i.expressions[d], r.Assignment, a)),
                  d + 1 < k && c.push("," + E);
              return le(c, r.Sequence, l);
            },
            AssignmentExpression: function (i, l, a) {
              return this.generateAssignment(i.left, i.right, i.operator, l, a);
            },
            ArrowFunctionExpression: function (i, l, a) {
              return le(this.generateFunctionBody(i), r.ArrowFunction, l);
            },
            ConditionalExpression: function (i, l, a) {
              return (
                r.Conditional < l && (a |= U),
                le(
                  [
                    this.generateExpression(i.test, r.Coalesce, a),
                    E + "?" + E,
                    this.generateExpression(i.consequent, r.Assignment, a),
                    E + ":" + E,
                    this.generateExpression(i.alternate, r.Assignment, a),
                  ],
                  r.Conditional,
                  l,
                )
              );
            },
            LogicalExpression: function (i, l, a) {
              return i.operator === "??" && (a |= we), this.BinaryExpression(i, l, a);
            },
            BinaryExpression: function (i, l, a) {
              var c, d, k, I, T, O;
              return (
                (I = n[i.operator]),
                (d = i.operator === "**" ? r.Postfix : I),
                (k = i.operator === "**" ? I : I + 1),
                I < l && (a |= U),
                (T = this.generateExpression(i.left, d, a)),
                (O = T.toString()),
                O.charCodeAt(O.length - 1) === 47 &&
                u.code.isIdentifierPartES5(i.operator.charCodeAt(0))
                  ? (c = [T, pe(), i.operator])
                  : (c = W(T, i.operator)),
                (T = this.generateExpression(i.right, k, a)),
                (i.operator === "/" && T.toString().charAt(0) === "/") ||
                (i.operator.slice(-1) === "<" && T.toString().slice(0, 3) === "!--")
                  ? (c.push(pe()), c.push(T))
                  : (c = W(c, T)),
                i.operator === "in" && !(a & U)
                  ? ["(", c, ")"]
                  : (i.operator === "||" || i.operator === "&&") && a & we
                    ? ["(", c, ")"]
                    : le(c, I, l)
              );
            },
            CallExpression: function (i, l, a) {
              var c, d, k;
              for (
                c = [this.generateExpression(i.callee, r.Call, Re)],
                  i.optional && c.push("?."),
                  c.push("("),
                  d = 0,
                  k = i.arguments.length;
                d < k;
                ++d
              )
                c.push(this.generateExpression(i.arguments[d], r.Assignment, R)),
                  d + 1 < k && c.push("," + E);
              return c.push(")"), a & H ? le(c, r.Call, l) : ["(", c, ")"];
            },
            ChainExpression: function (i, l, a) {
              r.OptionalChaining < l && (a |= H);
              var c = this.generateExpression(i.expression, r.OptionalChaining, a);
              return le(c, r.OptionalChaining, l);
            },
            NewExpression: function (i, l, a) {
              var c, d, k, I, T;
              if (
                ((d = i.arguments.length),
                (T = a & ne && !w && d === 0 ? ut : Je),
                (c = W("new", this.generateExpression(i.callee, r.New, T))),
                !(a & ne) || w || d > 0)
              ) {
                for (c.push("("), k = 0, I = d; k < I; ++k)
                  c.push(this.generateExpression(i.arguments[k], r.Assignment, R)),
                    k + 1 < I && c.push("," + E);
                c.push(")");
              }
              return le(c, r.New, l);
            },
            MemberExpression: function (i, l, a) {
              var c, d;
              return (
                (c = [this.generateExpression(i.object, r.Call, a & H ? Re : Je)]),
                i.computed
                  ? (i.optional && c.push("?."),
                    c.push("["),
                    c.push(this.generateExpression(i.property, r.Sequence, a & H ? R : ut)),
                    c.push("]"))
                  : (!i.optional &&
                      i.object.type === t.Literal &&
                      typeof i.object.value == "number" &&
                      ((d = Y(c).toString()),
                      d.indexOf(".") < 0 &&
                        !/[eExX]/.test(d) &&
                        u.code.isDecimalDigit(d.charCodeAt(d.length - 1)) &&
                        !(d.length >= 2 && d.charCodeAt(0) === 48) &&
                        c.push(" ")),
                    c.push(i.optional ? "?." : "."),
                    c.push(Ae(i.property))),
                le(c, r.Member, l)
              );
            },
            MetaProperty: function (i, l, a) {
              var c;
              return (
                (c = []),
                c.push(typeof i.meta == "string" ? i.meta : Ae(i.meta)),
                c.push("."),
                c.push(typeof i.property == "string" ? i.property : Ae(i.property)),
                le(c, r.Member, l)
              );
            },
            UnaryExpression: function (i, l, a) {
              var c, d, k, I, T;
              return (
                (d = this.generateExpression(i.argument, r.Unary, R)),
                E === ""
                  ? (c = W(i.operator, d))
                  : ((c = [i.operator]),
                    i.operator.length > 2
                      ? (c = W(c, d))
                      : ((I = Y(c).toString()),
                        (T = I.charCodeAt(I.length - 1)),
                        (k = d.toString().charCodeAt(0)),
                        (((T === 43 || T === 45) && T === k) ||
                          (u.code.isIdentifierPartES5(T) && u.code.isIdentifierPartES5(k))) &&
                          c.push(pe()),
                        c.push(d))),
                le(c, r.Unary, l)
              );
            },
            YieldExpression: function (i, l, a) {
              var c;
              return (
                i.delegate ? (c = "yield*") : (c = "yield"),
                i.argument && (c = W(c, this.generateExpression(i.argument, r.Yield, R))),
                le(c, r.Yield, l)
              );
            },
            AwaitExpression: function (i, l, a) {
              var c = W(
                i.all ? "await*" : "await",
                this.generateExpression(i.argument, r.Await, R),
              );
              return le(c, r.Await, l);
            },
            UpdateExpression: function (i, l, a) {
              return i.prefix
                ? le([i.operator, this.generateExpression(i.argument, r.Unary, R)], r.Unary, l)
                : le([this.generateExpression(i.argument, r.Postfix, R), i.operator], r.Postfix, l);
            },
            FunctionExpression: function (i, l, a) {
              var c = [at(i, !0), "function"];
              return (
                i.id ? (c.push(xt(i) || pe()), c.push(Ae(i.id))) : c.push(xt(i) || E),
                c.push(this.generateFunctionBody(i)),
                c
              );
            },
            ArrayPattern: function (i, l, a) {
              return this.ArrayExpression(i, l, a, !0);
            },
            ArrayExpression: function (i, l, a, c) {
              var d,
                k,
                I = this;
              return i.elements.length
                ? ((k = c ? !1 : i.elements.length > 1),
                  (d = ["[", k ? D : ""]),
                  ae(function (T) {
                    var O, J;
                    for (O = 0, J = i.elements.length; O < J; ++O)
                      i.elements[O]
                        ? (d.push(k ? T : ""),
                          d.push(I.generateExpression(i.elements[O], r.Assignment, R)))
                        : (k && d.push(T), O + 1 === J && d.push(",")),
                        O + 1 < J && d.push("," + (k ? D : E));
                  }),
                  k && !he(Y(d).toString()) && d.push(D),
                  d.push(k ? h : ""),
                  d.push("]"),
                  d)
                : "[]";
            },
            RestElement: function (i, l, a) {
              return "..." + this.generatePattern(i.argument);
            },
            ClassExpression: function (i, l, a) {
              var c, d;
              return (
                (c = ["class"]),
                i.id && (c = W(c, this.generateExpression(i.id, r.Sequence, R))),
                i.superClass &&
                  ((d = W("extends", this.generateExpression(i.superClass, r.Unary, R))),
                  (c = W(c, d))),
                c.push(E),
                c.push(this.generateStatement(i.body, xe)),
                c
              );
            },
            MethodDefinition: function (i, l, a) {
              var c, d;
              return (
                i.static ? (c = ["static" + E]) : (c = []),
                i.kind === "get" || i.kind === "set"
                  ? (d = [
                      W(i.kind, this.generatePropertyKey(i.key, i.computed)),
                      this.generateFunctionBody(i.value),
                    ])
                  : (d = [
                      Or(i),
                      this.generatePropertyKey(i.key, i.computed),
                      this.generateFunctionBody(i.value),
                    ]),
                W(c, d)
              );
            },
            Property: function (i, l, a) {
              return i.kind === "get" || i.kind === "set"
                ? [
                    i.kind,
                    pe(),
                    this.generatePropertyKey(i.key, i.computed),
                    this.generateFunctionBody(i.value),
                  ]
                : i.shorthand
                  ? i.value.type === "AssignmentPattern"
                    ? this.AssignmentPattern(i.value, r.Sequence, R)
                    : this.generatePropertyKey(i.key, i.computed)
                  : i.method
                    ? [
                        Or(i),
                        this.generatePropertyKey(i.key, i.computed),
                        this.generateFunctionBody(i.value),
                      ]
                    : [
                        this.generatePropertyKey(i.key, i.computed),
                        ":" + E,
                        this.generateExpression(i.value, r.Assignment, R),
                      ];
            },
            ObjectExpression: function (i, l, a) {
              var c,
                d,
                k,
                I = this;
              return i.properties.length
                ? ((c = i.properties.length > 1),
                  ae(function () {
                    k = I.generateExpression(i.properties[0], r.Sequence, R);
                  }),
                  !c && !ii(Y(k).toString())
                    ? ["{", E, k, E, "}"]
                    : (ae(function (T) {
                        var O, J;
                        if (((d = ["{", D, T, k]), c))
                          for (d.push("," + D), O = 1, J = i.properties.length; O < J; ++O)
                            d.push(T),
                              d.push(I.generateExpression(i.properties[O], r.Sequence, R)),
                              O + 1 < J && d.push("," + D);
                      }),
                      he(Y(d).toString()) || d.push(D),
                      d.push(h),
                      d.push("}"),
                      d))
                : "{}";
            },
            AssignmentPattern: function (i, l, a) {
              return this.generateAssignment(i.left, i.right, "=", l, a);
            },
            ObjectPattern: function (i, l, a) {
              var c,
                d,
                k,
                I,
                T,
                O = this;
              if (!i.properties.length) return "{}";
              if (((I = !1), i.properties.length === 1))
                (T = i.properties[0]),
                  T.type === t.Property && T.value.type !== t.Identifier && (I = !0);
              else
                for (d = 0, k = i.properties.length; d < k; ++d)
                  if (((T = i.properties[d]), T.type === t.Property && !T.shorthand)) {
                    I = !0;
                    break;
                  }
              return (
                (c = ["{", I ? D : ""]),
                ae(function (J) {
                  var ce, Ve;
                  for (ce = 0, Ve = i.properties.length; ce < Ve; ++ce)
                    c.push(I ? J : ""),
                      c.push(O.generateExpression(i.properties[ce], r.Sequence, R)),
                      ce + 1 < Ve && c.push("," + (I ? D : E));
                }),
                I && !he(Y(c).toString()) && c.push(D),
                c.push(I ? h : ""),
                c.push("}"),
                c
              );
            },
            ThisExpression: function (i, l, a) {
              return "this";
            },
            Super: function (i, l, a) {
              return "super";
            },
            Identifier: function (i, l, a) {
              return Ae(i);
            },
            ImportDefaultSpecifier: function (i, l, a) {
              return Ae(i.id || i.local);
            },
            ImportNamespaceSpecifier: function (i, l, a) {
              var c = ["*"],
                d = i.id || i.local;
              return d && c.push(E + "as" + pe() + Ae(d)), c;
            },
            ImportSpecifier: function (i, l, a) {
              var c = i.imported,
                d = [c.name],
                k = i.local;
              return k && k.name !== c.name && d.push(pe() + "as" + pe() + Ae(k)), d;
            },
            ExportSpecifier: function (i, l, a) {
              var c = i.local,
                d = [c.name],
                k = i.exported;
              return k && k.name !== c.name && d.push(pe() + "as" + pe() + Ae(k)), d;
            },
            Literal: function (i, l, a) {
              var c;
              if (i.hasOwnProperty("raw") && x && _.raw)
                try {
                  if (
                    ((c = x(i.raw).body[0].expression), c.type === t.Literal && c.value === i.value)
                  )
                    return i.raw;
                } catch {}
              return i.regex
                ? "/" + i.regex.pattern + "/" + i.regex.flags
                : typeof i.value == "bigint"
                  ? i.value.toString() + "n"
                  : i.bigint
                    ? i.bigint + "n"
                    : i.value === null
                      ? "null"
                      : typeof i.value == "string"
                        ? ci(i.value)
                        : typeof i.value == "number"
                          ? si(i.value)
                          : typeof i.value == "boolean"
                            ? i.value
                              ? "true"
                              : "false"
                            : ui(i.value);
            },
            GeneratorExpression: function (i, l, a) {
              return this.ComprehensionExpression(i, l, a);
            },
            ComprehensionExpression: function (i, l, a) {
              var c,
                d,
                k,
                I,
                T = this;
              return (
                (c = i.type === t.GeneratorExpression ? ["("] : ["["]),
                _.moz.comprehensionExpressionStartsWithAssignment &&
                  ((I = this.generateExpression(i.body, r.Assignment, R)), c.push(I)),
                i.blocks &&
                  ae(function () {
                    for (d = 0, k = i.blocks.length; d < k; ++d)
                      (I = T.generateExpression(i.blocks[d], r.Sequence, R)),
                        d > 0 || _.moz.comprehensionExpressionStartsWithAssignment
                          ? (c = W(c, I))
                          : c.push(I);
                  }),
                i.filter &&
                  ((c = W(c, "if" + E)),
                  (I = this.generateExpression(i.filter, r.Sequence, R)),
                  (c = W(c, ["(", I, ")"]))),
                _.moz.comprehensionExpressionStartsWithAssignment ||
                  ((I = this.generateExpression(i.body, r.Assignment, R)), (c = W(c, I))),
                c.push(i.type === t.GeneratorExpression ? ")" : "]"),
                c
              );
            },
            ComprehensionBlock: function (i, l, a) {
              var c;
              return (
                i.left.type === t.VariableDeclaration
                  ? (c = [i.left.kind, pe(), this.generateStatement(i.left.declarations[0], yt)])
                  : (c = this.generateExpression(i.left, r.Call, R)),
                (c = W(c, i.of ? "of" : "in")),
                (c = W(c, this.generateExpression(i.right, r.Sequence, R))),
                ["for" + E + "(", c, ")"]
              );
            },
            SpreadElement: function (i, l, a) {
              return ["...", this.generateExpression(i.argument, r.Assignment, R)];
            },
            TaggedTemplateExpression: function (i, l, a) {
              var c = Re;
              a & H || (c = Je);
              var d = [
                this.generateExpression(i.tag, r.Call, c),
                this.generateExpression(i.quasi, r.Primary, je),
              ];
              return le(d, r.TaggedTemplate, l);
            },
            TemplateElement: function (i, l, a) {
              return i.value.raw;
            },
            TemplateLiteral: function (i, l, a) {
              var c, d, k;
              for (c = ["`"], d = 0, k = i.quasis.length; d < k; ++d)
                c.push(this.generateExpression(i.quasis[d], r.Primary, R)),
                  d + 1 < k &&
                    (c.push("${" + E),
                    c.push(this.generateExpression(i.expressions[d], r.Sequence, R)),
                    c.push(E + "}"));
              return c.push("`"), c;
            },
            ModuleSpecifier: function (i, l, a) {
              return this.Literal(i, l, a);
            },
            ImportExpression: function (i, l, a) {
              return le(
                ["import(", this.generateExpression(i.source, r.Assignment, R), ")"],
                r.Call,
                l,
              );
            },
          }),
          Ir(oe.prototype, oe.Expression),
          (oe.prototype.generateExpression = function (i, l, a) {
            var c, d;
            return (
              (d = i.type || t.Property),
              _.verbatim && i.hasOwnProperty(_.verbatim)
                ? fi(i, l)
                : ((c = this[d](i, l, a)), _.comment && (c = Nr(i, c)), Y(c, i))
            );
          }),
          (oe.prototype.generateStatement = function (i, l) {
            var a, c;
            return (
              (a = this[i.type](i, l)),
              _.comment && (a = Nr(i, a)),
              (c = Y(a).toString()),
              i.type === t.Program &&
                !S &&
                D === "" &&
                c.charAt(c.length - 1) ===
                  `
` &&
                (a = y ? Y(a).replaceRight(/\s+$/, "") : c.replace(/\s+$/, "")),
              Y(a, i)
            );
          });
        function di(i) {
          var l;
          if (((l = new oe()), V(i))) return l.generateStatement(i, re);
          if (M(i)) return l.generateExpression(i, r.Sequence, R);
          throw new Error("Unknown node type: " + i.type);
        }
        function mi(i, l) {
          var a = kr(),
            c,
            d;
          return (
            l != null
              ? (typeof l.indent == "string" && (a.format.indent.style = l.indent),
                typeof l.base == "number" && (a.format.indent.base = l.base),
                (l = Ft(a, l)),
                (p = l.format.indent.style),
                typeof l.base == "string" ? (h = l.base) : (h = Me(p, l.format.indent.base)))
              : ((l = a), (p = l.format.indent.style), (h = Me(p, l.format.indent.base))),
            (m = l.format.json),
            (g = l.format.renumber),
            (F = m ? !1 : l.format.hexadecimal),
            (A = m ? "double" : l.format.quotes),
            (C = l.format.escapeless),
            (D = l.format.newline),
            (E = l.format.space),
            l.format.compact && (D = E = p = h = ""),
            (w = l.format.parentheses),
            (b = l.format.semicolons),
            (S = l.format.safeConcatenation),
            (L = l.directive),
            (x = m ? null : l.parse),
            (y = l.sourceMap),
            (v = l.sourceCode),
            (B = l.format.preserveBlankLines && v !== null),
            (_ = l),
            y && (e.browser ? (s = global.sourceMap.SourceNode) : (s = qi().SourceNode)),
            (c = di(i)),
            y
              ? ((d = c.toStringWithSourceMap({ file: l.file, sourceRoot: l.sourceMapRoot })),
                l.sourceContent && d.map.setSourceContent(l.sourceMap, l.sourceContent),
                l.sourceMapWithCode ? d : d.map.toString())
              : ((d = { code: c.toString(), map: null }), l.sourceMapWithCode ? d : d.code)
          );
        }
        (P = {
          indent: { style: "", base: 0 },
          renumber: !0,
          hexadecimal: !0,
          quotes: "auto",
          escapeless: !0,
          compact: !0,
          parentheses: !1,
          semicolons: !1,
        }),
          (j = kr().format),
          (e.version = Ui().version),
          (e.generate = mi),
          (e.attachComments = o.attachComments),
          (e.Precedence = Ft({}, r)),
          (e.browser = !1),
          (e.FORMAT_MINIFY = P),
          (e.FORMAT_DEFAULTS = j);
      })();
    },
  }),
  ar = {};
yn(ar, {
  Node: () => ht,
  Parser: () => te,
  Position: () => Ue,
  SourceLocation: () => et,
  TokContext: () => ye,
  Token: () => pt,
  TokenType: () => Q,
  defaultOptions: () => mt,
  getLineInfo: () => lr,
  isIdentifierChar: () => qe,
  isIdentifierStart: () => Te,
  isNewLine: () => Ke,
  keywordTypes: () => dt,
  lineBreak: () => De,
  lineBreakG: () => ze,
  nonASCIIwhitespace: () => Ot,
  parse: () => Ki,
  parseExpressionAt: () => Zi,
  tokContexts: () => ie,
  tokTypes: () => f,
  tokenizer: () => es,
  version: () => mr,
});
function or(e, t) {
  for (var r = 65536, n = 0; n < t.length; n += 2) {
    if (((r += t[n]), r > e)) return !1;
    if (((r += t[n + 1]), r >= e)) return !0;
  }
}
function Te(e, t) {
  return e < 65
    ? e === 36
    : e < 91
      ? !0
      : e < 97
        ? e === 95
        : e < 123
          ? !0
          : e <= 65535
            ? e >= 170 && Bn.test(String.fromCharCode(e))
            : t === !1
              ? !1
              : or(e, xr);
}
function qe(e, t) {
  return e < 48
    ? e === 36
    : e < 58
      ? !0
      : e < 65
        ? !1
        : e < 91
          ? !0
          : e < 97
            ? e === 95
            : e < 123
              ? !0
              : e <= 65535
                ? e >= 170 && wn.test(String.fromCharCode(e))
                : t === !1
                  ? !1
                  : or(e, xr) || or(e, kn);
}
function Fe(e, t) {
  return new Q(e, { beforeExpr: !0, binop: t });
}
function X(e, t) {
  return t === void 0 && (t = {}), (t.keyword = e), (dt[e] = new Q(e, t));
}
function Ke(e, t) {
  return e === 10 || e === 13 || (!t && (e === 8232 || e === 8233));
}
function Nt(e, t) {
  return In.call(e, t);
}
function We(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
function lr(e, t) {
  for (var r = 1, n = 0; ; ) {
    ze.lastIndex = n;
    var s = ze.exec(e);
    if (s && s.index < t) ++r, (n = s.index + s[0].length);
    else return new Ue(r, t - n);
  }
}
function zi(e) {
  var t = {};
  for (var r in mt) t[r] = e && Nt(e, r) ? e[r] : mt[r];
  if (
    (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009),
    t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5),
    cr(t.onToken))
  ) {
    var n = t.onToken;
    t.onToken = function (s) {
      return n.push(s);
    };
  }
  return cr(t.onComment) && (t.onComment = Gi(t, t.onComment)), t;
}
function Gi(e, t) {
  return function (r, n, s, o, u, h) {
    var p = { type: r ? "Block" : "Line", value: n, start: s, end: o };
    e.locations && (p.loc = new et(this, u, h)), e.ranges && (p.range = [s, o]), t.push(p);
  };
}
function Vt(e, t) {
  return Ze | (e ? hr : 0) | (t ? pr : 0);
}
function _t() {
  this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1;
}
function Wr(e, t, r, n) {
  return (
    (e.type = t),
    (e.end = r),
    this.options.locations && (e.loc.end = n),
    this.options.ranges && (e.range[1] = r),
    e
  );
}
function qt(e) {
  var t = (dr[e] = {
    binary: We(Tn[e] + " " + fr),
    nonBinary: { General_Category: We(fr), Script: We(Pn[e]) },
  });
  (t.nonBinary.Script_Extensions = t.nonBinary.Script),
    (t.nonBinary.gc = t.nonBinary.General_Category),
    (t.nonBinary.sc = t.nonBinary.Script),
    (t.nonBinary.scx = t.nonBinary.Script_Extensions);
}
function St(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536), String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
function zr(e) {
  return (
    e === 36 ||
    (e >= 40 && e <= 43) ||
    e === 46 ||
    e === 63 ||
    (e >= 91 && e <= 94) ||
    (e >= 123 && e <= 125)
  );
}
function $i(e) {
  return Te(e, !0) || e === 36 || e === 95;
}
function Ji(e) {
  return qe(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
function Sn(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
function Xi(e) {
  return e >= 0 && e <= 1114111;
}
function Hi(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
function bn(e) {
  return Sn(e) || e === 95;
}
function Qi(e) {
  return bn(e) || Lt(e);
}
function Lt(e) {
  return e >= 48 && e <= 57;
}
function Gr(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
}
function $r(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
function Jr(e) {
  return e >= 48 && e <= 55;
}
function Yi(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function Xr(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
function Ut(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536), String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
function Ki(e, t) {
  return te.parse(e, t);
}
function Zi(e, t, r) {
  return te.parseExpressionAt(e, t, r);
}
function es(e, t) {
  return te.tokenizer(e, t);
}
var bt,
  Bt,
  Hr,
  Qr,
  wt,
  Wt,
  Bn,
  wn,
  xr,
  kn,
  Q,
  Ce,
  ge,
  dt,
  f,
  De,
  ze,
  Ot,
  Ee,
  zt,
  In,
  Yr,
  cr,
  Ue,
  et,
  mt,
  Qe,
  Ze,
  kt,
  hr,
  pr,
  Gt,
  $t,
  Jt,
  Xt,
  Ht,
  It,
  _e,
  Qt,
  Yt,
  Kt,
  te,
  Ne,
  de,
  Kr,
  z,
  Tt,
  Zr,
  en,
  Ye,
  Pt,
  Zt,
  Se,
  G,
  tn,
  ot,
  Ie,
  rn,
  ht,
  lt,
  ye,
  ie,
  ct,
  er,
  tr,
  nn,
  Tn,
  fr,
  rr,
  nr,
  sn,
  Pn,
  dr,
  q,
  be,
  pt,
  $,
  ir,
  mr,
  gr = gi({
    "../../node_modules/acorn/dist/acorn.mjs"() {
      (bt = {
        3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
        5: "class enum extends super const export import",
        6: "enum",
        strict: "implements interface let package private protected public static yield",
        strictBind: "eval arguments",
      }),
        (Bt =
          "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),
        (Hr = {
          5: Bt,
          "5module": Bt + " export import",
          6: Bt + " const class extends export import super",
        }),
        (Qr = /^in(stanceof)?$/),
        (wt =
          "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"),
        (Wt =
          "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿"),
        (Bn = new RegExp("[" + wt + "]")),
        (wn = new RegExp("[" + wt + Wt + "]")),
        (wt = Wt = null),
        (xr = [
          0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29,
          6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21,
          11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11,
          25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21,
          11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107,
          20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22,
          0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6,
          2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42,
          3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23,
          16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56,
          264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328,
          18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29,
          19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9,
          1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2,
          70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4,
          2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24,
          2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2,
          0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2,
          0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16,
          4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
        ]),
        (kn = [
          509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9,
          370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1,
          45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1,
          3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1,
          83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1,
          13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9,
          57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3,
          19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4,
          5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361,
          6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9,
          787719, 239,
        ]),
        (Q = function (e, t) {
          t === void 0 && (t = {}),
            (this.label = e),
            (this.keyword = t.keyword),
            (this.beforeExpr = !!t.beforeExpr),
            (this.startsExpr = !!t.startsExpr),
            (this.isLoop = !!t.isLoop),
            (this.isAssign = !!t.isAssign),
            (this.prefix = !!t.prefix),
            (this.postfix = !!t.postfix),
            (this.binop = t.binop || null),
            (this.updateContext = null);
        }),
        (Ce = { beforeExpr: !0 }),
        (ge = { startsExpr: !0 }),
        (dt = {}),
        (f = {
          num: new Q("num", ge),
          regexp: new Q("regexp", ge),
          string: new Q("string", ge),
          name: new Q("name", ge),
          eof: new Q("eof"),
          bracketL: new Q("[", { beforeExpr: !0, startsExpr: !0 }),
          bracketR: new Q("]"),
          braceL: new Q("{", { beforeExpr: !0, startsExpr: !0 }),
          braceR: new Q("}"),
          parenL: new Q("(", { beforeExpr: !0, startsExpr: !0 }),
          parenR: new Q(")"),
          comma: new Q(",", Ce),
          semi: new Q(";", Ce),
          colon: new Q(":", Ce),
          dot: new Q("."),
          question: new Q("?", Ce),
          questionDot: new Q("?."),
          arrow: new Q("=>", Ce),
          template: new Q("template"),
          invalidTemplate: new Q("invalidTemplate"),
          ellipsis: new Q("...", Ce),
          backQuote: new Q("`", ge),
          dollarBraceL: new Q("${", { beforeExpr: !0, startsExpr: !0 }),
          eq: new Q("=", { beforeExpr: !0, isAssign: !0 }),
          assign: new Q("_=", { beforeExpr: !0, isAssign: !0 }),
          incDec: new Q("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
          prefix: new Q("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          logicalOR: Fe("||", 1),
          logicalAND: Fe("&&", 2),
          bitwiseOR: Fe("|", 3),
          bitwiseXOR: Fe("^", 4),
          bitwiseAND: Fe("&", 5),
          equality: Fe("==/!=/===/!==", 6),
          relational: Fe("</>/<=/>=", 7),
          bitShift: Fe("<</>>/>>>", 8),
          plusMin: new Q("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
          modulo: Fe("%", 10),
          star: Fe("*", 10),
          slash: Fe("/", 10),
          starstar: new Q("**", { beforeExpr: !0 }),
          coalesce: Fe("??", 1),
          _break: X("break"),
          _case: X("case", Ce),
          _catch: X("catch"),
          _continue: X("continue"),
          _debugger: X("debugger"),
          _default: X("default", Ce),
          _do: X("do", { isLoop: !0, beforeExpr: !0 }),
          _else: X("else", Ce),
          _finally: X("finally"),
          _for: X("for", { isLoop: !0 }),
          _function: X("function", ge),
          _if: X("if"),
          _return: X("return", Ce),
          _switch: X("switch"),
          _throw: X("throw", Ce),
          _try: X("try"),
          _var: X("var"),
          _const: X("const"),
          _while: X("while", { isLoop: !0 }),
          _with: X("with"),
          _new: X("new", { beforeExpr: !0, startsExpr: !0 }),
          _this: X("this", ge),
          _super: X("super", ge),
          _class: X("class", ge),
          _extends: X("extends", Ce),
          _export: X("export"),
          _import: X("import", ge),
          _null: X("null", ge),
          _true: X("true", ge),
          _false: X("false", ge),
          _in: X("in", { beforeExpr: !0, binop: 7 }),
          _instanceof: X("instanceof", { beforeExpr: !0, binop: 7 }),
          _typeof: X("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          _void: X("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          _delete: X("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        }),
        (De = /\r\n?|\n|\u2028|\u2029/),
        (ze = new RegExp(De.source, "g")),
        (Ot = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/),
        (Ee = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g),
        (zt = Object.prototype),
        (In = zt.hasOwnProperty),
        (Yr = zt.toString),
        (cr =
          Array.isArray ||
          function (e) {
            return Yr.call(e) === "[object Array]";
          }),
        (Ue = function (e, t) {
          (this.line = e), (this.column = t);
        }),
        (Ue.prototype.offset = function (e) {
          return new Ue(this.line, this.column + e);
        }),
        (et = function (e, t, r) {
          (this.start = t), (this.end = r), e.sourceFile !== null && (this.source = e.sourceFile);
        }),
        (mt = {
          ecmaVersion: 10,
          sourceType: "script",
          onInsertedSemicolon: null,
          onTrailingComma: null,
          allowReserved: null,
          allowReturnOutsideFunction: !1,
          allowImportExportEverywhere: !1,
          allowAwaitOutsideFunction: !1,
          allowHashBang: !1,
          locations: !1,
          onToken: null,
          onComment: null,
          ranges: !1,
          program: null,
          sourceFile: null,
          directSourceFile: null,
          preserveParens: !1,
        }),
        (Qe = 1),
        (Ze = 2),
        (kt = Qe | Ze),
        (hr = 4),
        (pr = 8),
        (Gt = 16),
        ($t = 32),
        (Jt = 64),
        (Xt = 128),
        (Ht = 0),
        (It = 1),
        (_e = 2),
        (Qt = 3),
        (Yt = 4),
        (Kt = 5),
        (te = function (e, t, r) {
          (this.options = e = zi(e)),
            (this.sourceFile = e.sourceFile),
            (this.keywords = We(
              Hr[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5],
            ));
          var n = "";
          if (e.allowReserved !== !0) {
            for (var s = e.ecmaVersion; !(n = bt[s]); s--);
            e.sourceType === "module" && (n += " await");
          }
          this.reservedWords = We(n);
          var o = (n ? n + " " : "") + bt.strict;
          (this.reservedWordsStrict = We(o)),
            (this.reservedWordsStrictBind = We(o + " " + bt.strictBind)),
            (this.input = String(t)),
            (this.containsEsc = !1),
            r
              ? ((this.pos = r),
                (this.lineStart =
                  this.input.lastIndexOf(
                    `
`,
                    r - 1,
                  ) + 1),
                (this.curLine = this.input.slice(0, this.lineStart).split(De).length))
              : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
            (this.type = f.eof),
            (this.value = null),
            (this.start = this.end = this.pos),
            (this.startLoc = this.endLoc = this.curPosition()),
            (this.lastTokEndLoc = this.lastTokStartLoc = null),
            (this.lastTokStart = this.lastTokEnd = this.pos),
            (this.context = this.initialContext()),
            (this.exprAllowed = !0),
            (this.inModule = e.sourceType === "module"),
            (this.strict = this.inModule || this.strictDirective(this.pos)),
            (this.potentialArrowAt = -1),
            (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
            (this.labels = []),
            (this.undefinedExports = {}),
            this.pos === 0 &&
              e.allowHashBang &&
              this.input.slice(0, 2) === "#!" &&
              this.skipLineComment(2),
            (this.scopeStack = []),
            this.enterScope(Qe),
            (this.regexpState = null);
        }),
        (Ne = {
          inFunction: { configurable: !0 },
          inGenerator: { configurable: !0 },
          inAsync: { configurable: !0 },
          allowSuper: { configurable: !0 },
          allowDirectSuper: { configurable: !0 },
          treatFunctionsAsVar: { configurable: !0 },
        }),
        (te.prototype.parse = function () {
          var e = this.options.program || this.startNode();
          return this.nextToken(), this.parseTopLevel(e);
        }),
        (Ne.inFunction.get = function () {
          return (this.currentVarScope().flags & Ze) > 0;
        }),
        (Ne.inGenerator.get = function () {
          return (this.currentVarScope().flags & pr) > 0;
        }),
        (Ne.inAsync.get = function () {
          return (this.currentVarScope().flags & hr) > 0;
        }),
        (Ne.allowSuper.get = function () {
          return (this.currentThisScope().flags & Jt) > 0;
        }),
        (Ne.allowDirectSuper.get = function () {
          return (this.currentThisScope().flags & Xt) > 0;
        }),
        (Ne.treatFunctionsAsVar.get = function () {
          return this.treatFunctionsAsVarInScope(this.currentScope());
        }),
        (te.prototype.inNonArrowFunction = function () {
          return (this.currentThisScope().flags & Ze) > 0;
        }),
        (te.extend = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          for (var r = this, n = 0; n < e.length; n++) r = e[n](r);
          return r;
        }),
        (te.parse = function (e, t) {
          return new this(t, e).parse();
        }),
        (te.parseExpressionAt = function (e, t, r) {
          var n = new this(r, e, t);
          return n.nextToken(), n.parseExpression();
        }),
        (te.tokenizer = function (e, t) {
          return new this(t, e);
        }),
        Object.defineProperties(te.prototype, Ne),
        (de = te.prototype),
        (Kr = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/),
        (de.strictDirective = function (e) {
          for (;;) {
            (Ee.lastIndex = e), (e += Ee.exec(this.input)[0].length);
            var t = Kr.exec(this.input.slice(e));
            if (!t) return !1;
            if ((t[1] || t[2]) === "use strict") {
              Ee.lastIndex = e + t[0].length;
              var r = Ee.exec(this.input),
                n = r.index + r[0].length,
                s = this.input.charAt(n);
              return (
                s === ";" ||
                s === "}" ||
                (De.test(r[0]) &&
                  !(
                    /[(`.[+\-/*%<>=,?^&]/.test(s) ||
                    (s === "!" && this.input.charAt(n + 1) === "=")
                  ))
              );
            }
            (e += t[0].length),
              (Ee.lastIndex = e),
              (e += Ee.exec(this.input)[0].length),
              this.input[e] === ";" && e++;
          }
        }),
        (de.eat = function (e) {
          return this.type === e ? (this.next(), !0) : !1;
        }),
        (de.isContextual = function (e) {
          return this.type === f.name && this.value === e && !this.containsEsc;
        }),
        (de.eatContextual = function (e) {
          return this.isContextual(e) ? (this.next(), !0) : !1;
        }),
        (de.expectContextual = function (e) {
          this.eatContextual(e) || this.unexpected();
        }),
        (de.canInsertSemicolon = function () {
          return (
            this.type === f.eof ||
            this.type === f.braceR ||
            De.test(this.input.slice(this.lastTokEnd, this.start))
          );
        }),
        (de.insertSemicolon = function () {
          if (this.canInsertSemicolon())
            return (
              this.options.onInsertedSemicolon &&
                this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
              !0
            );
        }),
        (de.semicolon = function () {
          !this.eat(f.semi) && !this.insertSemicolon() && this.unexpected();
        }),
        (de.afterTrailingComma = function (e, t) {
          if (this.type === e)
            return (
              this.options.onTrailingComma &&
                this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
              t || this.next(),
              !0
            );
        }),
        (de.expect = function (e) {
          this.eat(e) || this.unexpected();
        }),
        (de.unexpected = function (e) {
          this.raise(e ?? this.start, "Unexpected token");
        }),
        (de.checkPatternErrors = function (e, t) {
          if (e) {
            e.trailingComma > -1 &&
              this.raiseRecoverable(
                e.trailingComma,
                "Comma is not permitted after the rest element",
              );
            var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
            r > -1 && this.raiseRecoverable(r, "Parenthesized pattern");
          }
        }),
        (de.checkExpressionErrors = function (e, t) {
          if (!e) return !1;
          var r = e.shorthandAssign,
            n = e.doubleProto;
          if (!t) return r >= 0 || n >= 0;
          r >= 0 &&
            this.raise(
              r,
              "Shorthand property assignments are valid only in destructuring patterns",
            ),
            n >= 0 && this.raiseRecoverable(n, "Redefinition of __proto__ property");
        }),
        (de.checkYieldAwaitInDefaultParams = function () {
          this.yieldPos &&
            (!this.awaitPos || this.yieldPos < this.awaitPos) &&
            this.raise(this.yieldPos, "Yield expression cannot be a default value"),
            this.awaitPos &&
              this.raise(this.awaitPos, "Await expression cannot be a default value");
        }),
        (de.isSimpleAssignTarget = function (e) {
          return e.type === "ParenthesizedExpression"
            ? this.isSimpleAssignTarget(e.expression)
            : e.type === "Identifier" || e.type === "MemberExpression";
        }),
        (z = te.prototype),
        (z.parseTopLevel = function (e) {
          var t = {};
          for (e.body || (e.body = []); this.type !== f.eof; ) {
            var r = this.parseStatement(null, !0, t);
            e.body.push(r);
          }
          if (this.inModule)
            for (var n = 0, s = Object.keys(this.undefinedExports); n < s.length; n += 1) {
              var o = s[n];
              this.raiseRecoverable(
                this.undefinedExports[o].start,
                "Export '" + o + "' is not defined",
              );
            }
          return (
            this.adaptDirectivePrologue(e.body),
            this.next(),
            (e.sourceType = this.options.sourceType),
            this.finishNode(e, "Program")
          );
        }),
        (Tt = { kind: "loop" }),
        (Zr = { kind: "switch" }),
        (z.isLet = function (e) {
          if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
          Ee.lastIndex = this.pos;
          var t = Ee.exec(this.input),
            r = this.pos + t[0].length,
            n = this.input.charCodeAt(r);
          if (n === 91) return !0;
          if (e) return !1;
          if (n === 123) return !0;
          if (Te(n, !0)) {
            for (var s = r + 1; qe(this.input.charCodeAt(s), !0); ) ++s;
            var o = this.input.slice(r, s);
            if (!Qr.test(o)) return !0;
          }
          return !1;
        }),
        (z.isAsyncFunction = function () {
          if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
          Ee.lastIndex = this.pos;
          var e = Ee.exec(this.input),
            t = this.pos + e[0].length;
          return (
            !De.test(this.input.slice(this.pos, t)) &&
            this.input.slice(t, t + 8) === "function" &&
            (t + 8 === this.input.length || !qe(this.input.charAt(t + 8)))
          );
        }),
        (z.parseStatement = function (e, t, r) {
          var n = this.type,
            s = this.startNode(),
            o;
          switch ((this.isLet(e) && ((n = f._var), (o = "let")), n)) {
            case f._break:
            case f._continue:
              return this.parseBreakContinueStatement(s, n.keyword);
            case f._debugger:
              return this.parseDebuggerStatement(s);
            case f._do:
              return this.parseDoStatement(s);
            case f._for:
              return this.parseForStatement(s);
            case f._function:
              return (
                e &&
                  (this.strict || (e !== "if" && e !== "label")) &&
                  this.options.ecmaVersion >= 6 &&
                  this.unexpected(),
                this.parseFunctionStatement(s, !1, !e)
              );
            case f._class:
              return e && this.unexpected(), this.parseClass(s, !0);
            case f._if:
              return this.parseIfStatement(s);
            case f._return:
              return this.parseReturnStatement(s);
            case f._switch:
              return this.parseSwitchStatement(s);
            case f._throw:
              return this.parseThrowStatement(s);
            case f._try:
              return this.parseTryStatement(s);
            case f._const:
            case f._var:
              return (
                (o = o || this.value),
                e && o !== "var" && this.unexpected(),
                this.parseVarStatement(s, o)
              );
            case f._while:
              return this.parseWhileStatement(s);
            case f._with:
              return this.parseWithStatement(s);
            case f.braceL:
              return this.parseBlock(!0, s);
            case f.semi:
              return this.parseEmptyStatement(s);
            case f._export:
            case f._import:
              if (this.options.ecmaVersion > 10 && n === f._import) {
                Ee.lastIndex = this.pos;
                var u = Ee.exec(this.input),
                  h = this.pos + u[0].length,
                  p = this.input.charCodeAt(h);
                if (p === 40 || p === 46)
                  return this.parseExpressionStatement(s, this.parseExpression());
              }
              return (
                this.options.allowImportExportEverywhere ||
                  (t ||
                    this.raise(
                      this.start,
                      "'import' and 'export' may only appear at the top level",
                    ),
                  this.inModule ||
                    this.raise(
                      this.start,
                      "'import' and 'export' may appear only with 'sourceType: module'",
                    )),
                n === f._import ? this.parseImport(s) : this.parseExport(s, r)
              );
            default:
              if (this.isAsyncFunction())
                return e && this.unexpected(), this.next(), this.parseFunctionStatement(s, !0, !e);
              var m = this.value,
                g = this.parseExpression();
              return n === f.name && g.type === "Identifier" && this.eat(f.colon)
                ? this.parseLabeledStatement(s, m, g, e)
                : this.parseExpressionStatement(s, g);
          }
        }),
        (z.parseBreakContinueStatement = function (e, t) {
          var r = t === "break";
          this.next(),
            this.eat(f.semi) || this.insertSemicolon()
              ? (e.label = null)
              : this.type !== f.name
                ? this.unexpected()
                : ((e.label = this.parseIdent()), this.semicolon());
          for (var n = 0; n < this.labels.length; ++n) {
            var s = this.labels[n];
            if (
              (e.label == null || s.name === e.label.name) &&
              ((s.kind != null && (r || s.kind === "loop")) || (e.label && r))
            )
              break;
          }
          return (
            n === this.labels.length && this.raise(e.start, "Unsyntactic " + t),
            this.finishNode(e, r ? "BreakStatement" : "ContinueStatement")
          );
        }),
        (z.parseDebuggerStatement = function (e) {
          return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
        }),
        (z.parseDoStatement = function (e) {
          return (
            this.next(),
            this.labels.push(Tt),
            (e.body = this.parseStatement("do")),
            this.labels.pop(),
            this.expect(f._while),
            (e.test = this.parseParenExpression()),
            this.options.ecmaVersion >= 6 ? this.eat(f.semi) : this.semicolon(),
            this.finishNode(e, "DoWhileStatement")
          );
        }),
        (z.parseForStatement = function (e) {
          this.next();
          var t =
            this.options.ecmaVersion >= 9 &&
            (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
            this.eatContextual("await")
              ? this.lastTokStart
              : -1;
          if (
            (this.labels.push(Tt), this.enterScope(0), this.expect(f.parenL), this.type === f.semi)
          )
            return t > -1 && this.unexpected(t), this.parseFor(e, null);
          var r = this.isLet();
          if (this.type === f._var || this.type === f._const || r) {
            var n = this.startNode(),
              s = r ? "let" : this.value;
            return (
              this.next(),
              this.parseVar(n, !0, s),
              this.finishNode(n, "VariableDeclaration"),
              (this.type === f._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) &&
              n.declarations.length === 1
                ? (this.options.ecmaVersion >= 9 &&
                    (this.type === f._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
                  this.parseForIn(e, n))
                : (t > -1 && this.unexpected(t), this.parseFor(e, n))
            );
          }
          var o = new _t(),
            u = this.parseExpression(!0, o);
          return this.type === f._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))
            ? (this.options.ecmaVersion >= 9 &&
                (this.type === f._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
              this.toAssignable(u, !1, o),
              this.checkLVal(u),
              this.parseForIn(e, u))
            : (this.checkExpressionErrors(o, !0),
              t > -1 && this.unexpected(t),
              this.parseFor(e, u));
        }),
        (z.parseFunctionStatement = function (e, t, r) {
          return this.next(), this.parseFunction(e, Ye | (r ? 0 : Pt), !1, t);
        }),
        (z.parseIfStatement = function (e) {
          return (
            this.next(),
            (e.test = this.parseParenExpression()),
            (e.consequent = this.parseStatement("if")),
            (e.alternate = this.eat(f._else) ? this.parseStatement("if") : null),
            this.finishNode(e, "IfStatement")
          );
        }),
        (z.parseReturnStatement = function (e) {
          return (
            !this.inFunction &&
              !this.options.allowReturnOutsideFunction &&
              this.raise(this.start, "'return' outside of function"),
            this.next(),
            this.eat(f.semi) || this.insertSemicolon()
              ? (e.argument = null)
              : ((e.argument = this.parseExpression()), this.semicolon()),
            this.finishNode(e, "ReturnStatement")
          );
        }),
        (z.parseSwitchStatement = function (e) {
          this.next(),
            (e.discriminant = this.parseParenExpression()),
            (e.cases = []),
            this.expect(f.braceL),
            this.labels.push(Zr),
            this.enterScope(0);
          for (var t, r = !1; this.type !== f.braceR; )
            if (this.type === f._case || this.type === f._default) {
              var n = this.type === f._case;
              t && this.finishNode(t, "SwitchCase"),
                e.cases.push((t = this.startNode())),
                (t.consequent = []),
                this.next(),
                n
                  ? (t.test = this.parseExpression())
                  : (r && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"),
                    (r = !0),
                    (t.test = null)),
                this.expect(f.colon);
            } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
          return (
            this.exitScope(),
            t && this.finishNode(t, "SwitchCase"),
            this.next(),
            this.labels.pop(),
            this.finishNode(e, "SwitchStatement")
          );
        }),
        (z.parseThrowStatement = function (e) {
          return (
            this.next(),
            De.test(this.input.slice(this.lastTokEnd, this.start)) &&
              this.raise(this.lastTokEnd, "Illegal newline after throw"),
            (e.argument = this.parseExpression()),
            this.semicolon(),
            this.finishNode(e, "ThrowStatement")
          );
        }),
        (en = []),
        (z.parseTryStatement = function (e) {
          if (
            (this.next(), (e.block = this.parseBlock()), (e.handler = null), this.type === f._catch)
          ) {
            var t = this.startNode();
            if ((this.next(), this.eat(f.parenL))) {
              t.param = this.parseBindingAtom();
              var r = t.param.type === "Identifier";
              this.enterScope(r ? $t : 0),
                this.checkLVal(t.param, r ? Yt : _e),
                this.expect(f.parenR);
            } else
              this.options.ecmaVersion < 10 && this.unexpected(),
                (t.param = null),
                this.enterScope(0);
            (t.body = this.parseBlock(!1)),
              this.exitScope(),
              (e.handler = this.finishNode(t, "CatchClause"));
          }
          return (
            (e.finalizer = this.eat(f._finally) ? this.parseBlock() : null),
            !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"),
            this.finishNode(e, "TryStatement")
          );
        }),
        (z.parseVarStatement = function (e, t) {
          return (
            this.next(),
            this.parseVar(e, !1, t),
            this.semicolon(),
            this.finishNode(e, "VariableDeclaration")
          );
        }),
        (z.parseWhileStatement = function (e) {
          return (
            this.next(),
            (e.test = this.parseParenExpression()),
            this.labels.push(Tt),
            (e.body = this.parseStatement("while")),
            this.labels.pop(),
            this.finishNode(e, "WhileStatement")
          );
        }),
        (z.parseWithStatement = function (e) {
          return (
            this.strict && this.raise(this.start, "'with' in strict mode"),
            this.next(),
            (e.object = this.parseParenExpression()),
            (e.body = this.parseStatement("with")),
            this.finishNode(e, "WithStatement")
          );
        }),
        (z.parseEmptyStatement = function (e) {
          return this.next(), this.finishNode(e, "EmptyStatement");
        }),
        (z.parseLabeledStatement = function (e, t, r, n) {
          for (var s = 0, o = this.labels; s < o.length; s += 1) {
            var u = o[s];
            u.name === t && this.raise(r.start, "Label '" + t + "' is already declared");
          }
          for (
            var h = this.type.isLoop ? "loop" : this.type === f._switch ? "switch" : null,
              p = this.labels.length - 1;
            p >= 0;
            p--
          ) {
            var m = this.labels[p];
            if (m.statementStart === e.start) (m.statementStart = this.start), (m.kind = h);
            else break;
          }
          return (
            this.labels.push({ name: t, kind: h, statementStart: this.start }),
            (e.body = this.parseStatement(
              n ? (n.indexOf("label") === -1 ? n + "label" : n) : "label",
            )),
            this.labels.pop(),
            (e.label = r),
            this.finishNode(e, "LabeledStatement")
          );
        }),
        (z.parseExpressionStatement = function (e, t) {
          return (e.expression = t), this.semicolon(), this.finishNode(e, "ExpressionStatement");
        }),
        (z.parseBlock = function (e, t, r) {
          for (
            e === void 0 && (e = !0),
              t === void 0 && (t = this.startNode()),
              t.body = [],
              this.expect(f.braceL),
              e && this.enterScope(0);
            this.type !== f.braceR;

          ) {
            var n = this.parseStatement(null);
            t.body.push(n);
          }
          return (
            r && (this.strict = !1),
            this.next(),
            e && this.exitScope(),
            this.finishNode(t, "BlockStatement")
          );
        }),
        (z.parseFor = function (e, t) {
          return (
            (e.init = t),
            this.expect(f.semi),
            (e.test = this.type === f.semi ? null : this.parseExpression()),
            this.expect(f.semi),
            (e.update = this.type === f.parenR ? null : this.parseExpression()),
            this.expect(f.parenR),
            (e.body = this.parseStatement("for")),
            this.exitScope(),
            this.labels.pop(),
            this.finishNode(e, "ForStatement")
          );
        }),
        (z.parseForIn = function (e, t) {
          var r = this.type === f._in;
          return (
            this.next(),
            t.type === "VariableDeclaration" &&
            t.declarations[0].init != null &&
            (!r ||
              this.options.ecmaVersion < 8 ||
              this.strict ||
              t.kind !== "var" ||
              t.declarations[0].id.type !== "Identifier")
              ? this.raise(
                  t.start,
                  (r ? "for-in" : "for-of") +
                    " loop variable declaration may not have an initializer",
                )
              : t.type === "AssignmentPattern" &&
                this.raise(t.start, "Invalid left-hand side in for-loop"),
            (e.left = t),
            (e.right = r ? this.parseExpression() : this.parseMaybeAssign()),
            this.expect(f.parenR),
            (e.body = this.parseStatement("for")),
            this.exitScope(),
            this.labels.pop(),
            this.finishNode(e, r ? "ForInStatement" : "ForOfStatement")
          );
        }),
        (z.parseVar = function (e, t, r) {
          for (e.declarations = [], e.kind = r; ; ) {
            var n = this.startNode();
            if (
              (this.parseVarId(n, r),
              this.eat(f.eq)
                ? (n.init = this.parseMaybeAssign(t))
                : r === "const" &&
                    !(
                      this.type === f._in ||
                      (this.options.ecmaVersion >= 6 && this.isContextual("of"))
                    )
                  ? this.unexpected()
                  : n.id.type !== "Identifier" &&
                      !(t && (this.type === f._in || this.isContextual("of")))
                    ? this.raise(
                        this.lastTokEnd,
                        "Complex binding patterns require an initialization value",
                      )
                    : (n.init = null),
              e.declarations.push(this.finishNode(n, "VariableDeclarator")),
              !this.eat(f.comma))
            )
              break;
          }
          return e;
        }),
        (z.parseVarId = function (e, t) {
          (e.id = this.parseBindingAtom()), this.checkLVal(e.id, t === "var" ? It : _e, !1);
        }),
        (Ye = 1),
        (Pt = 2),
        (Zt = 4),
        (z.parseFunction = function (e, t, r, n) {
          this.initFunction(e),
            (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !n)) &&
              (this.type === f.star && t & Pt && this.unexpected(),
              (e.generator = this.eat(f.star))),
            this.options.ecmaVersion >= 8 && (e.async = !!n),
            t & Ye &&
              ((e.id = t & Zt && this.type !== f.name ? null : this.parseIdent()),
              e.id &&
                !(t & Pt) &&
                this.checkLVal(
                  e.id,
                  this.strict || e.generator || e.async ? (this.treatFunctionsAsVar ? It : _e) : Qt,
                ));
          var s = this.yieldPos,
            o = this.awaitPos,
            u = this.awaitIdentPos;
          return (
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.awaitIdentPos = 0),
            this.enterScope(Vt(e.async, e.generator)),
            t & Ye || (e.id = this.type === f.name ? this.parseIdent() : null),
            this.parseFunctionParams(e),
            this.parseFunctionBody(e, r, !1),
            (this.yieldPos = s),
            (this.awaitPos = o),
            (this.awaitIdentPos = u),
            this.finishNode(e, t & Ye ? "FunctionDeclaration" : "FunctionExpression")
          );
        }),
        (z.parseFunctionParams = function (e) {
          this.expect(f.parenL),
            (e.params = this.parseBindingList(f.parenR, !1, this.options.ecmaVersion >= 8)),
            this.checkYieldAwaitInDefaultParams();
        }),
        (z.parseClass = function (e, t) {
          this.next();
          var r = this.strict;
          (this.strict = !0), this.parseClassId(e, t), this.parseClassSuper(e);
          var n = this.startNode(),
            s = !1;
          for (n.body = [], this.expect(f.braceL); this.type !== f.braceR; ) {
            var o = this.parseClassElement(e.superClass !== null);
            o &&
              (n.body.push(o),
              o.type === "MethodDefinition" &&
                o.kind === "constructor" &&
                (s && this.raise(o.start, "Duplicate constructor in the same class"), (s = !0)));
          }
          return (
            (this.strict = r),
            this.next(),
            (e.body = this.finishNode(n, "ClassBody")),
            this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
          );
        }),
        (z.parseClassElement = function (e) {
          var t = this;
          if (this.eat(f.semi)) return null;
          var r = this.startNode(),
            n = function (p, m) {
              m === void 0 && (m = !1);
              var g = t.start,
                F = t.startLoc;
              return t.eatContextual(p)
                ? t.type !== f.parenL && (!m || !t.canInsertSemicolon())
                  ? !0
                  : (r.key && t.unexpected(),
                    (r.computed = !1),
                    (r.key = t.startNodeAt(g, F)),
                    (r.key.name = p),
                    t.finishNode(r.key, "Identifier"),
                    !1)
                : !1;
            };
          (r.kind = "method"), (r.static = n("static"));
          var s = this.eat(f.star),
            o = !1;
          s ||
            (this.options.ecmaVersion >= 8 && n("async", !0)
              ? ((o = !0), (s = this.options.ecmaVersion >= 9 && this.eat(f.star)))
              : n("get")
                ? (r.kind = "get")
                : n("set") && (r.kind = "set")),
            r.key || this.parsePropertyName(r);
          var u = r.key,
            h = !1;
          return (
            !r.computed &&
            !r.static &&
            ((u.type === "Identifier" && u.name === "constructor") ||
              (u.type === "Literal" && u.value === "constructor"))
              ? (r.kind !== "method" &&
                  this.raise(u.start, "Constructor can't have get/set modifier"),
                s && this.raise(u.start, "Constructor can't be a generator"),
                o && this.raise(u.start, "Constructor can't be an async method"),
                (r.kind = "constructor"),
                (h = e))
              : r.static &&
                u.type === "Identifier" &&
                u.name === "prototype" &&
                this.raise(u.start, "Classes may not have a static property named prototype"),
            this.parseClassMethod(r, s, o, h),
            r.kind === "get" &&
              r.value.params.length !== 0 &&
              this.raiseRecoverable(r.value.start, "getter should have no params"),
            r.kind === "set" &&
              r.value.params.length !== 1 &&
              this.raiseRecoverable(r.value.start, "setter should have exactly one param"),
            r.kind === "set" &&
              r.value.params[0].type === "RestElement" &&
              this.raiseRecoverable(r.value.params[0].start, "Setter cannot use rest params"),
            r
          );
        }),
        (z.parseClassMethod = function (e, t, r, n) {
          return (e.value = this.parseMethod(t, r, n)), this.finishNode(e, "MethodDefinition");
        }),
        (z.parseClassId = function (e, t) {
          this.type === f.name
            ? ((e.id = this.parseIdent()), t && this.checkLVal(e.id, _e, !1))
            : (t === !0 && this.unexpected(), (e.id = null));
        }),
        (z.parseClassSuper = function (e) {
          e.superClass = this.eat(f._extends) ? this.parseExprSubscripts() : null;
        }),
        (z.parseExport = function (e, t) {
          if ((this.next(), this.eat(f.star)))
            return (
              this.options.ecmaVersion >= 11 &&
                (this.eatContextual("as")
                  ? ((e.exported = this.parseIdent(!0)),
                    this.checkExport(t, e.exported.name, this.lastTokStart))
                  : (e.exported = null)),
              this.expectContextual("from"),
              this.type !== f.string && this.unexpected(),
              (e.source = this.parseExprAtom()),
              this.semicolon(),
              this.finishNode(e, "ExportAllDeclaration")
            );
          if (this.eat(f._default)) {
            this.checkExport(t, "default", this.lastTokStart);
            var r;
            if (this.type === f._function || (r = this.isAsyncFunction())) {
              var n = this.startNode();
              this.next(),
                r && this.next(),
                (e.declaration = this.parseFunction(n, Ye | Zt, !1, r));
            } else if (this.type === f._class) {
              var s = this.startNode();
              e.declaration = this.parseClass(s, "nullableID");
            } else (e.declaration = this.parseMaybeAssign()), this.semicolon();
            return this.finishNode(e, "ExportDefaultDeclaration");
          }
          if (this.shouldParseExportStatement())
            (e.declaration = this.parseStatement(null)),
              e.declaration.type === "VariableDeclaration"
                ? this.checkVariableExport(t, e.declaration.declarations)
                : this.checkExport(t, e.declaration.id.name, e.declaration.id.start),
              (e.specifiers = []),
              (e.source = null);
          else {
            if (
              ((e.declaration = null),
              (e.specifiers = this.parseExportSpecifiers(t)),
              this.eatContextual("from"))
            )
              this.type !== f.string && this.unexpected(), (e.source = this.parseExprAtom());
            else {
              for (var o = 0, u = e.specifiers; o < u.length; o += 1) {
                var h = u[o];
                this.checkUnreserved(h.local), this.checkLocalExport(h.local);
              }
              e.source = null;
            }
            this.semicolon();
          }
          return this.finishNode(e, "ExportNamedDeclaration");
        }),
        (z.checkExport = function (e, t, r) {
          e && (Nt(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"), (e[t] = !0));
        }),
        (z.checkPatternExport = function (e, t) {
          var r = t.type;
          if (r === "Identifier") this.checkExport(e, t.name, t.start);
          else if (r === "ObjectPattern")
            for (var n = 0, s = t.properties; n < s.length; n += 1) {
              var o = s[n];
              this.checkPatternExport(e, o);
            }
          else if (r === "ArrayPattern")
            for (var u = 0, h = t.elements; u < h.length; u += 1) {
              var p = h[u];
              p && this.checkPatternExport(e, p);
            }
          else
            r === "Property"
              ? this.checkPatternExport(e, t.value)
              : r === "AssignmentPattern"
                ? this.checkPatternExport(e, t.left)
                : r === "RestElement"
                  ? this.checkPatternExport(e, t.argument)
                  : r === "ParenthesizedExpression" && this.checkPatternExport(e, t.expression);
        }),
        (z.checkVariableExport = function (e, t) {
          if (e)
            for (var r = 0, n = t; r < n.length; r += 1) {
              var s = n[r];
              this.checkPatternExport(e, s.id);
            }
        }),
        (z.shouldParseExportStatement = function () {
          return (
            this.type.keyword === "var" ||
            this.type.keyword === "const" ||
            this.type.keyword === "class" ||
            this.type.keyword === "function" ||
            this.isLet() ||
            this.isAsyncFunction()
          );
        }),
        (z.parseExportSpecifiers = function (e) {
          var t = [],
            r = !0;
          for (this.expect(f.braceL); !this.eat(f.braceR); ) {
            if (r) r = !1;
            else if ((this.expect(f.comma), this.afterTrailingComma(f.braceR))) break;
            var n = this.startNode();
            (n.local = this.parseIdent(!0)),
              (n.exported = this.eatContextual("as") ? this.parseIdent(!0) : n.local),
              this.checkExport(e, n.exported.name, n.exported.start),
              t.push(this.finishNode(n, "ExportSpecifier"));
          }
          return t;
        }),
        (z.parseImport = function (e) {
          return (
            this.next(),
            this.type === f.string
              ? ((e.specifiers = en), (e.source = this.parseExprAtom()))
              : ((e.specifiers = this.parseImportSpecifiers()),
                this.expectContextual("from"),
                (e.source = this.type === f.string ? this.parseExprAtom() : this.unexpected())),
            this.semicolon(),
            this.finishNode(e, "ImportDeclaration")
          );
        }),
        (z.parseImportSpecifiers = function () {
          var e = [],
            t = !0;
          if (this.type === f.name) {
            var r = this.startNode();
            if (
              ((r.local = this.parseIdent()),
              this.checkLVal(r.local, _e),
              e.push(this.finishNode(r, "ImportDefaultSpecifier")),
              !this.eat(f.comma))
            )
              return e;
          }
          if (this.type === f.star) {
            var n = this.startNode();
            return (
              this.next(),
              this.expectContextual("as"),
              (n.local = this.parseIdent()),
              this.checkLVal(n.local, _e),
              e.push(this.finishNode(n, "ImportNamespaceSpecifier")),
              e
            );
          }
          for (this.expect(f.braceL); !this.eat(f.braceR); ) {
            if (t) t = !1;
            else if ((this.expect(f.comma), this.afterTrailingComma(f.braceR))) break;
            var s = this.startNode();
            (s.imported = this.parseIdent(!0)),
              this.eatContextual("as")
                ? (s.local = this.parseIdent())
                : (this.checkUnreserved(s.imported), (s.local = s.imported)),
              this.checkLVal(s.local, _e),
              e.push(this.finishNode(s, "ImportSpecifier"));
          }
          return e;
        }),
        (z.adaptDirectivePrologue = function (e) {
          for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
            e[t].directive = e[t].expression.raw.slice(1, -1);
        }),
        (z.isDirectiveCandidate = function (e) {
          return (
            e.type === "ExpressionStatement" &&
            e.expression.type === "Literal" &&
            typeof e.expression.value == "string" &&
            (this.input[e.start] === '"' || this.input[e.start] === "'")
          );
        }),
        (Se = te.prototype),
        (Se.toAssignable = function (e, t, r) {
          if (this.options.ecmaVersion >= 6 && e)
            switch (e.type) {
              case "Identifier":
                this.inAsync &&
                  e.name === "await" &&
                  this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
                break;
              case "ObjectPattern":
              case "ArrayPattern":
              case "RestElement":
                break;
              case "ObjectExpression":
                (e.type = "ObjectPattern"), r && this.checkPatternErrors(r, !0);
                for (var n = 0, s = e.properties; n < s.length; n += 1) {
                  var o = s[n];
                  this.toAssignable(o, t),
                    o.type === "RestElement" &&
                      (o.argument.type === "ArrayPattern" || o.argument.type === "ObjectPattern") &&
                      this.raise(o.argument.start, "Unexpected token");
                }
                break;
              case "Property":
                e.kind !== "init" &&
                  this.raise(e.key.start, "Object pattern can't contain getter or setter"),
                  this.toAssignable(e.value, t);
                break;
              case "ArrayExpression":
                (e.type = "ArrayPattern"),
                  r && this.checkPatternErrors(r, !0),
                  this.toAssignableList(e.elements, t);
                break;
              case "SpreadElement":
                (e.type = "RestElement"),
                  this.toAssignable(e.argument, t),
                  e.argument.type === "AssignmentPattern" &&
                    this.raise(e.argument.start, "Rest elements cannot have a default value");
                break;
              case "AssignmentExpression":
                e.operator !== "=" &&
                  this.raise(
                    e.left.end,
                    "Only '=' operator can be used for specifying default value.",
                  ),
                  (e.type = "AssignmentPattern"),
                  delete e.operator,
                  this.toAssignable(e.left, t);
              case "AssignmentPattern":
                break;
              case "ParenthesizedExpression":
                this.toAssignable(e.expression, t, r);
                break;
              case "ChainExpression":
                this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
                break;
              case "MemberExpression":
                if (!t) break;
              default:
                this.raise(e.start, "Assigning to rvalue");
            }
          else r && this.checkPatternErrors(r, !0);
          return e;
        }),
        (Se.toAssignableList = function (e, t) {
          for (var r = e.length, n = 0; n < r; n++) {
            var s = e[n];
            s && this.toAssignable(s, t);
          }
          if (r) {
            var o = e[r - 1];
            this.options.ecmaVersion === 6 &&
              t &&
              o &&
              o.type === "RestElement" &&
              o.argument.type !== "Identifier" &&
              this.unexpected(o.argument.start);
          }
          return e;
        }),
        (Se.parseSpread = function (e) {
          var t = this.startNode();
          return (
            this.next(),
            (t.argument = this.parseMaybeAssign(!1, e)),
            this.finishNode(t, "SpreadElement")
          );
        }),
        (Se.parseRestBinding = function () {
          var e = this.startNode();
          return (
            this.next(),
            this.options.ecmaVersion === 6 && this.type !== f.name && this.unexpected(),
            (e.argument = this.parseBindingAtom()),
            this.finishNode(e, "RestElement")
          );
        }),
        (Se.parseBindingAtom = function () {
          if (this.options.ecmaVersion >= 6)
            switch (this.type) {
              case f.bracketL:
                var e = this.startNode();
                return (
                  this.next(),
                  (e.elements = this.parseBindingList(f.bracketR, !0, !0)),
                  this.finishNode(e, "ArrayPattern")
                );
              case f.braceL:
                return this.parseObj(!0);
            }
          return this.parseIdent();
        }),
        (Se.parseBindingList = function (e, t, r) {
          for (var n = [], s = !0; !this.eat(e); )
            if ((s ? (s = !1) : this.expect(f.comma), t && this.type === f.comma)) n.push(null);
            else {
              if (r && this.afterTrailingComma(e)) break;
              if (this.type === f.ellipsis) {
                var o = this.parseRestBinding();
                this.parseBindingListItem(o),
                  n.push(o),
                  this.type === f.comma &&
                    this.raise(this.start, "Comma is not permitted after the rest element"),
                  this.expect(e);
                break;
              } else {
                var u = this.parseMaybeDefault(this.start, this.startLoc);
                this.parseBindingListItem(u), n.push(u);
              }
            }
          return n;
        }),
        (Se.parseBindingListItem = function (e) {
          return e;
        }),
        (Se.parseMaybeDefault = function (e, t, r) {
          if (((r = r || this.parseBindingAtom()), this.options.ecmaVersion < 6 || !this.eat(f.eq)))
            return r;
          var n = this.startNodeAt(e, t);
          return (
            (n.left = r),
            (n.right = this.parseMaybeAssign()),
            this.finishNode(n, "AssignmentPattern")
          );
        }),
        (Se.checkLVal = function (e, t, r) {
          switch ((t === void 0 && (t = Ht), e.type)) {
            case "Identifier":
              t === _e &&
                e.name === "let" &&
                this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"),
                this.strict &&
                  this.reservedWordsStrictBind.test(e.name) &&
                  this.raiseRecoverable(
                    e.start,
                    (t ? "Binding " : "Assigning to ") + e.name + " in strict mode",
                  ),
                r &&
                  (Nt(r, e.name) && this.raiseRecoverable(e.start, "Argument name clash"),
                  (r[e.name] = !0)),
                t !== Ht && t !== Kt && this.declareName(e.name, t, e.start);
              break;
            case "ChainExpression":
              this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
              break;
            case "MemberExpression":
              t && this.raiseRecoverable(e.start, "Binding member expression");
              break;
            case "ObjectPattern":
              for (var n = 0, s = e.properties; n < s.length; n += 1) {
                var o = s[n];
                this.checkLVal(o, t, r);
              }
              break;
            case "Property":
              this.checkLVal(e.value, t, r);
              break;
            case "ArrayPattern":
              for (var u = 0, h = e.elements; u < h.length; u += 1) {
                var p = h[u];
                p && this.checkLVal(p, t, r);
              }
              break;
            case "AssignmentPattern":
              this.checkLVal(e.left, t, r);
              break;
            case "RestElement":
              this.checkLVal(e.argument, t, r);
              break;
            case "ParenthesizedExpression":
              this.checkLVal(e.expression, t, r);
              break;
            default:
              this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue");
          }
        }),
        (G = te.prototype),
        (G.checkPropClash = function (e, t, r) {
          if (
            !(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") &&
            !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
          ) {
            var n = e.key,
              s;
            switch (n.type) {
              case "Identifier":
                s = n.name;
                break;
              case "Literal":
                s = String(n.value);
                break;
              default:
                return;
            }
            var o = e.kind;
            if (this.options.ecmaVersion >= 6) {
              s === "__proto__" &&
                o === "init" &&
                (t.proto &&
                  (r
                    ? r.doubleProto < 0 && (r.doubleProto = n.start)
                    : this.raiseRecoverable(n.start, "Redefinition of __proto__ property")),
                (t.proto = !0));
              return;
            }
            s = "$" + s;
            var u = t[s];
            if (u) {
              var h;
              o === "init" ? (h = (this.strict && u.init) || u.get || u.set) : (h = u.init || u[o]),
                h && this.raiseRecoverable(n.start, "Redefinition of property");
            } else u = t[s] = { init: !1, get: !1, set: !1 };
            u[o] = !0;
          }
        }),
        (G.parseExpression = function (e, t) {
          var r = this.start,
            n = this.startLoc,
            s = this.parseMaybeAssign(e, t);
          if (this.type === f.comma) {
            var o = this.startNodeAt(r, n);
            for (o.expressions = [s]; this.eat(f.comma); )
              o.expressions.push(this.parseMaybeAssign(e, t));
            return this.finishNode(o, "SequenceExpression");
          }
          return s;
        }),
        (G.parseMaybeAssign = function (e, t, r) {
          if (this.isContextual("yield")) {
            if (this.inGenerator) return this.parseYield(e);
            this.exprAllowed = !1;
          }
          var n = !1,
            s = -1,
            o = -1;
          t
            ? ((s = t.parenthesizedAssign),
              (o = t.trailingComma),
              (t.parenthesizedAssign = t.trailingComma = -1))
            : ((t = new _t()), (n = !0));
          var u = this.start,
            h = this.startLoc;
          (this.type === f.parenL || this.type === f.name) && (this.potentialArrowAt = this.start);
          var p = this.parseMaybeConditional(e, t);
          if ((r && (p = r.call(this, p, u, h)), this.type.isAssign)) {
            var m = this.startNodeAt(u, h);
            return (
              (m.operator = this.value),
              (m.left = this.type === f.eq ? this.toAssignable(p, !1, t) : p),
              n || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1),
              t.shorthandAssign >= m.left.start && (t.shorthandAssign = -1),
              this.checkLVal(p),
              this.next(),
              (m.right = this.parseMaybeAssign(e)),
              this.finishNode(m, "AssignmentExpression")
            );
          } else n && this.checkExpressionErrors(t, !0);
          return s > -1 && (t.parenthesizedAssign = s), o > -1 && (t.trailingComma = o), p;
        }),
        (G.parseMaybeConditional = function (e, t) {
          var r = this.start,
            n = this.startLoc,
            s = this.parseExprOps(e, t);
          if (this.checkExpressionErrors(t)) return s;
          if (this.eat(f.question)) {
            var o = this.startNodeAt(r, n);
            return (
              (o.test = s),
              (o.consequent = this.parseMaybeAssign()),
              this.expect(f.colon),
              (o.alternate = this.parseMaybeAssign(e)),
              this.finishNode(o, "ConditionalExpression")
            );
          }
          return s;
        }),
        (G.parseExprOps = function (e, t) {
          var r = this.start,
            n = this.startLoc,
            s = this.parseMaybeUnary(t, !1);
          return this.checkExpressionErrors(t) ||
            (s.start === r && s.type === "ArrowFunctionExpression")
            ? s
            : this.parseExprOp(s, r, n, -1, e);
        }),
        (G.parseExprOp = function (e, t, r, n, s) {
          var o = this.type.binop;
          if (o != null && (!s || this.type !== f._in) && o > n) {
            var u = this.type === f.logicalOR || this.type === f.logicalAND,
              h = this.type === f.coalesce;
            h && (o = f.logicalAND.binop);
            var p = this.value;
            this.next();
            var m = this.start,
              g = this.startLoc,
              F = this.parseExprOp(this.parseMaybeUnary(null, !1), m, g, o, s),
              A = this.buildBinary(t, r, e, F, p, u || h);
            return (
              ((u && this.type === f.coalesce) ||
                (h && (this.type === f.logicalOR || this.type === f.logicalAND))) &&
                this.raiseRecoverable(
                  this.start,
                  "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses",
                ),
              this.parseExprOp(A, t, r, n, s)
            );
          }
          return e;
        }),
        (G.buildBinary = function (e, t, r, n, s, o) {
          var u = this.startNodeAt(e, t);
          return (
            (u.left = r),
            (u.operator = s),
            (u.right = n),
            this.finishNode(u, o ? "LogicalExpression" : "BinaryExpression")
          );
        }),
        (G.parseMaybeUnary = function (e, t) {
          var r = this.start,
            n = this.startLoc,
            s;
          if (
            this.isContextual("await") &&
            (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))
          )
            (s = this.parseAwait()), (t = !0);
          else if (this.type.prefix) {
            var o = this.startNode(),
              u = this.type === f.incDec;
            (o.operator = this.value),
              (o.prefix = !0),
              this.next(),
              (o.argument = this.parseMaybeUnary(null, !0)),
              this.checkExpressionErrors(e, !0),
              u
                ? this.checkLVal(o.argument)
                : this.strict && o.operator === "delete" && o.argument.type === "Identifier"
                  ? this.raiseRecoverable(o.start, "Deleting local variable in strict mode")
                  : (t = !0),
              (s = this.finishNode(o, u ? "UpdateExpression" : "UnaryExpression"));
          } else {
            if (((s = this.parseExprSubscripts(e)), this.checkExpressionErrors(e))) return s;
            for (; this.type.postfix && !this.canInsertSemicolon(); ) {
              var h = this.startNodeAt(r, n);
              (h.operator = this.value),
                (h.prefix = !1),
                (h.argument = s),
                this.checkLVal(s),
                this.next(),
                (s = this.finishNode(h, "UpdateExpression"));
            }
          }
          return !t && this.eat(f.starstar)
            ? this.buildBinary(r, n, s, this.parseMaybeUnary(null, !1), "**", !1)
            : s;
        }),
        (G.parseExprSubscripts = function (e) {
          var t = this.start,
            r = this.startLoc,
            n = this.parseExprAtom(e);
          if (
            n.type === "ArrowFunctionExpression" &&
            this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")"
          )
            return n;
          var s = this.parseSubscripts(n, t, r);
          return (
            e &&
              s.type === "MemberExpression" &&
              (e.parenthesizedAssign >= s.start && (e.parenthesizedAssign = -1),
              e.parenthesizedBind >= s.start && (e.parenthesizedBind = -1)),
            s
          );
        }),
        (G.parseSubscripts = function (e, t, r, n) {
          for (
            var s =
                this.options.ecmaVersion >= 8 &&
                e.type === "Identifier" &&
                e.name === "async" &&
                this.lastTokEnd === e.end &&
                !this.canInsertSemicolon() &&
                e.end - e.start === 5 &&
                this.potentialArrowAt === e.start,
              o = !1;
            ;

          ) {
            var u = this.parseSubscript(e, t, r, n, s, o);
            if ((u.optional && (o = !0), u === e || u.type === "ArrowFunctionExpression")) {
              if (o) {
                var h = this.startNodeAt(t, r);
                (h.expression = u), (u = this.finishNode(h, "ChainExpression"));
              }
              return u;
            }
            e = u;
          }
        }),
        (G.parseSubscript = function (e, t, r, n, s, o) {
          var u = this.options.ecmaVersion >= 11,
            h = u && this.eat(f.questionDot);
          n &&
            h &&
            this.raise(
              this.lastTokStart,
              "Optional chaining cannot appear in the callee of new expressions",
            );
          var p = this.eat(f.bracketL);
          if (p || (h && this.type !== f.parenL && this.type !== f.backQuote) || this.eat(f.dot)) {
            var m = this.startNodeAt(t, r);
            (m.object = e),
              (m.property = p
                ? this.parseExpression()
                : this.parseIdent(this.options.allowReserved !== "never")),
              (m.computed = !!p),
              p && this.expect(f.bracketR),
              u && (m.optional = h),
              (e = this.finishNode(m, "MemberExpression"));
          } else if (!n && this.eat(f.parenL)) {
            var g = new _t(),
              F = this.yieldPos,
              A = this.awaitPos,
              C = this.awaitIdentPos;
            (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
            var D = this.parseExprList(f.parenR, this.options.ecmaVersion >= 8, !1, g);
            if (s && !h && !this.canInsertSemicolon() && this.eat(f.arrow))
              return (
                this.checkPatternErrors(g, !1),
                this.checkYieldAwaitInDefaultParams(),
                this.awaitIdentPos > 0 &&
                  this.raise(
                    this.awaitIdentPos,
                    "Cannot use 'await' as identifier inside an async function",
                  ),
                (this.yieldPos = F),
                (this.awaitPos = A),
                (this.awaitIdentPos = C),
                this.parseArrowExpression(this.startNodeAt(t, r), D, !0)
              );
            this.checkExpressionErrors(g, !0),
              (this.yieldPos = F || this.yieldPos),
              (this.awaitPos = A || this.awaitPos),
              (this.awaitIdentPos = C || this.awaitIdentPos);
            var E = this.startNodeAt(t, r);
            (E.callee = e),
              (E.arguments = D),
              u && (E.optional = h),
              (e = this.finishNode(E, "CallExpression"));
          } else if (this.type === f.backQuote) {
            (h || o) &&
              this.raise(
                this.start,
                "Optional chaining cannot appear in the tag of tagged template expressions",
              );
            var w = this.startNodeAt(t, r);
            (w.tag = e),
              (w.quasi = this.parseTemplate({ isTagged: !0 })),
              (e = this.finishNode(w, "TaggedTemplateExpression"));
          }
          return e;
        }),
        (G.parseExprAtom = function (e) {
          this.type === f.slash && this.readRegexp();
          var t,
            r = this.potentialArrowAt === this.start;
          switch (this.type) {
            case f._super:
              return (
                this.allowSuper || this.raise(this.start, "'super' keyword outside a method"),
                (t = this.startNode()),
                this.next(),
                this.type === f.parenL &&
                  !this.allowDirectSuper &&
                  this.raise(t.start, "super() call outside constructor of a subclass"),
                this.type !== f.dot &&
                  this.type !== f.bracketL &&
                  this.type !== f.parenL &&
                  this.unexpected(),
                this.finishNode(t, "Super")
              );
            case f._this:
              return (t = this.startNode()), this.next(), this.finishNode(t, "ThisExpression");
            case f.name:
              var n = this.start,
                s = this.startLoc,
                o = this.containsEsc,
                u = this.parseIdent(!1);
              if (
                this.options.ecmaVersion >= 8 &&
                !o &&
                u.name === "async" &&
                !this.canInsertSemicolon() &&
                this.eat(f._function)
              )
                return this.parseFunction(this.startNodeAt(n, s), 0, !1, !0);
              if (r && !this.canInsertSemicolon()) {
                if (this.eat(f.arrow))
                  return this.parseArrowExpression(this.startNodeAt(n, s), [u], !1);
                if (
                  this.options.ecmaVersion >= 8 &&
                  u.name === "async" &&
                  this.type === f.name &&
                  !o
                )
                  return (
                    (u = this.parseIdent(!1)),
                    (this.canInsertSemicolon() || !this.eat(f.arrow)) && this.unexpected(),
                    this.parseArrowExpression(this.startNodeAt(n, s), [u], !0)
                  );
              }
              return u;
            case f.regexp:
              var h = this.value;
              return (
                (t = this.parseLiteral(h.value)),
                (t.regex = { pattern: h.pattern, flags: h.flags }),
                t
              );
            case f.num:
            case f.string:
              return this.parseLiteral(this.value);
            case f._null:
            case f._true:
            case f._false:
              return (
                (t = this.startNode()),
                (t.value = this.type === f._null ? null : this.type === f._true),
                (t.raw = this.type.keyword),
                this.next(),
                this.finishNode(t, "Literal")
              );
            case f.parenL:
              var p = this.start,
                m = this.parseParenAndDistinguishExpression(r);
              return (
                e &&
                  (e.parenthesizedAssign < 0 &&
                    !this.isSimpleAssignTarget(m) &&
                    (e.parenthesizedAssign = p),
                  e.parenthesizedBind < 0 && (e.parenthesizedBind = p)),
                m
              );
            case f.bracketL:
              return (
                (t = this.startNode()),
                this.next(),
                (t.elements = this.parseExprList(f.bracketR, !0, !0, e)),
                this.finishNode(t, "ArrayExpression")
              );
            case f.braceL:
              return this.parseObj(!1, e);
            case f._function:
              return (t = this.startNode()), this.next(), this.parseFunction(t, 0);
            case f._class:
              return this.parseClass(this.startNode(), !1);
            case f._new:
              return this.parseNew();
            case f.backQuote:
              return this.parseTemplate();
            case f._import:
              return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
            default:
              this.unexpected();
          }
        }),
        (G.parseExprImport = function () {
          var e = this.startNode();
          this.containsEsc &&
            this.raiseRecoverable(this.start, "Escape sequence in keyword import");
          var t = this.parseIdent(!0);
          switch (this.type) {
            case f.parenL:
              return this.parseDynamicImport(e);
            case f.dot:
              return (e.meta = t), this.parseImportMeta(e);
            default:
              this.unexpected();
          }
        }),
        (G.parseDynamicImport = function (e) {
          if ((this.next(), (e.source = this.parseMaybeAssign()), !this.eat(f.parenR))) {
            var t = this.start;
            this.eat(f.comma) && this.eat(f.parenR)
              ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()")
              : this.unexpected(t);
          }
          return this.finishNode(e, "ImportExpression");
        }),
        (G.parseImportMeta = function (e) {
          this.next();
          var t = this.containsEsc;
          return (
            (e.property = this.parseIdent(!0)),
            e.property.name !== "meta" &&
              this.raiseRecoverable(
                e.property.start,
                "The only valid meta property for import is 'import.meta'",
              ),
            t &&
              this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"),
            this.options.sourceType !== "module" &&
              this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"),
            this.finishNode(e, "MetaProperty")
          );
        }),
        (G.parseLiteral = function (e) {
          var t = this.startNode();
          return (
            (t.value = e),
            (t.raw = this.input.slice(this.start, this.end)),
            t.raw.charCodeAt(t.raw.length - 1) === 110 &&
              (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")),
            this.next(),
            this.finishNode(t, "Literal")
          );
        }),
        (G.parseParenExpression = function () {
          this.expect(f.parenL);
          var e = this.parseExpression();
          return this.expect(f.parenR), e;
        }),
        (G.parseParenAndDistinguishExpression = function (e) {
          var t = this.start,
            r = this.startLoc,
            n,
            s = this.options.ecmaVersion >= 8;
          if (this.options.ecmaVersion >= 6) {
            this.next();
            var o = this.start,
              u = this.startLoc,
              h = [],
              p = !0,
              m = !1,
              g = new _t(),
              F = this.yieldPos,
              A = this.awaitPos,
              C;
            for (this.yieldPos = 0, this.awaitPos = 0; this.type !== f.parenR; )
              if (
                (p ? (p = !1) : this.expect(f.comma), s && this.afterTrailingComma(f.parenR, !0))
              ) {
                m = !0;
                break;
              } else if (this.type === f.ellipsis) {
                (C = this.start),
                  h.push(this.parseParenItem(this.parseRestBinding())),
                  this.type === f.comma &&
                    this.raise(this.start, "Comma is not permitted after the rest element");
                break;
              } else h.push(this.parseMaybeAssign(!1, g, this.parseParenItem));
            var D = this.start,
              E = this.startLoc;
            if ((this.expect(f.parenR), e && !this.canInsertSemicolon() && this.eat(f.arrow)))
              return (
                this.checkPatternErrors(g, !1),
                this.checkYieldAwaitInDefaultParams(),
                (this.yieldPos = F),
                (this.awaitPos = A),
                this.parseParenArrowList(t, r, h)
              );
            (!h.length || m) && this.unexpected(this.lastTokStart),
              C && this.unexpected(C),
              this.checkExpressionErrors(g, !0),
              (this.yieldPos = F || this.yieldPos),
              (this.awaitPos = A || this.awaitPos),
              h.length > 1
                ? ((n = this.startNodeAt(o, u)),
                  (n.expressions = h),
                  this.finishNodeAt(n, "SequenceExpression", D, E))
                : (n = h[0]);
          } else n = this.parseParenExpression();
          if (this.options.preserveParens) {
            var w = this.startNodeAt(t, r);
            return (w.expression = n), this.finishNode(w, "ParenthesizedExpression");
          } else return n;
        }),
        (G.parseParenItem = function (e) {
          return e;
        }),
        (G.parseParenArrowList = function (e, t, r) {
          return this.parseArrowExpression(this.startNodeAt(e, t), r);
        }),
        (tn = []),
        (G.parseNew = function () {
          this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
          var e = this.startNode(),
            t = this.parseIdent(!0);
          if (this.options.ecmaVersion >= 6 && this.eat(f.dot)) {
            e.meta = t;
            var r = this.containsEsc;
            return (
              (e.property = this.parseIdent(!0)),
              e.property.name !== "target" &&
                this.raiseRecoverable(
                  e.property.start,
                  "The only valid meta property for new is 'new.target'",
                ),
              r &&
                this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"),
              this.inNonArrowFunction() ||
                this.raiseRecoverable(e.start, "'new.target' can only be used in functions"),
              this.finishNode(e, "MetaProperty")
            );
          }
          var n = this.start,
            s = this.startLoc,
            o = this.type === f._import;
          return (
            (e.callee = this.parseSubscripts(this.parseExprAtom(), n, s, !0)),
            o &&
              e.callee.type === "ImportExpression" &&
              this.raise(n, "Cannot use new with import()"),
            this.eat(f.parenL)
              ? (e.arguments = this.parseExprList(f.parenR, this.options.ecmaVersion >= 8, !1))
              : (e.arguments = tn),
            this.finishNode(e, "NewExpression")
          );
        }),
        (G.parseTemplateElement = function (e) {
          var t = e.isTagged,
            r = this.startNode();
          return (
            this.type === f.invalidTemplate
              ? (t ||
                  this.raiseRecoverable(
                    this.start,
                    "Bad escape sequence in untagged template literal",
                  ),
                (r.value = { raw: this.value, cooked: null }))
              : (r.value = {
                  raw: this.input.slice(this.start, this.end).replace(
                    /\r\n?/g,
                    `
`,
                  ),
                  cooked: this.value,
                }),
            this.next(),
            (r.tail = this.type === f.backQuote),
            this.finishNode(r, "TemplateElement")
          );
        }),
        (G.parseTemplate = function (e) {
          e === void 0 && (e = {});
          var t = e.isTagged;
          t === void 0 && (t = !1);
          var r = this.startNode();
          this.next(), (r.expressions = []);
          var n = this.parseTemplateElement({ isTagged: t });
          for (r.quasis = [n]; !n.tail; )
            this.type === f.eof && this.raise(this.pos, "Unterminated template literal"),
              this.expect(f.dollarBraceL),
              r.expressions.push(this.parseExpression()),
              this.expect(f.braceR),
              r.quasis.push((n = this.parseTemplateElement({ isTagged: t })));
          return this.next(), this.finishNode(r, "TemplateLiteral");
        }),
        (G.isAsyncProp = function (e) {
          return (
            !e.computed &&
            e.key.type === "Identifier" &&
            e.key.name === "async" &&
            (this.type === f.name ||
              this.type === f.num ||
              this.type === f.string ||
              this.type === f.bracketL ||
              this.type.keyword ||
              (this.options.ecmaVersion >= 9 && this.type === f.star)) &&
            !De.test(this.input.slice(this.lastTokEnd, this.start))
          );
        }),
        (G.parseObj = function (e, t) {
          var r = this.startNode(),
            n = !0,
            s = {};
          for (r.properties = [], this.next(); !this.eat(f.braceR); ) {
            if (n) n = !1;
            else if (
              (this.expect(f.comma),
              this.options.ecmaVersion >= 5 && this.afterTrailingComma(f.braceR))
            )
              break;
            var o = this.parseProperty(e, t);
            e || this.checkPropClash(o, s, t), r.properties.push(o);
          }
          return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression");
        }),
        (G.parseProperty = function (e, t) {
          var r = this.startNode(),
            n,
            s,
            o,
            u;
          if (this.options.ecmaVersion >= 9 && this.eat(f.ellipsis))
            return e
              ? ((r.argument = this.parseIdent(!1)),
                this.type === f.comma &&
                  this.raise(this.start, "Comma is not permitted after the rest element"),
                this.finishNode(r, "RestElement"))
              : (this.type === f.parenL &&
                  t &&
                  (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start),
                  t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)),
                (r.argument = this.parseMaybeAssign(!1, t)),
                this.type === f.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start),
                this.finishNode(r, "SpreadElement"));
          this.options.ecmaVersion >= 6 &&
            ((r.method = !1),
            (r.shorthand = !1),
            (e || t) && ((o = this.start), (u = this.startLoc)),
            e || (n = this.eat(f.star)));
          var h = this.containsEsc;
          return (
            this.parsePropertyName(r),
            !e && !h && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(r)
              ? ((s = !0),
                (n = this.options.ecmaVersion >= 9 && this.eat(f.star)),
                this.parsePropertyName(r, t))
              : (s = !1),
            this.parsePropertyValue(r, e, n, s, o, u, t, h),
            this.finishNode(r, "Property")
          );
        }),
        (G.parsePropertyValue = function (e, t, r, n, s, o, u, h) {
          if (((r || n) && this.type === f.colon && this.unexpected(), this.eat(f.colon)))
            (e.value = t
              ? this.parseMaybeDefault(this.start, this.startLoc)
              : this.parseMaybeAssign(!1, u)),
              (e.kind = "init");
          else if (this.options.ecmaVersion >= 6 && this.type === f.parenL)
            t && this.unexpected(),
              (e.kind = "init"),
              (e.method = !0),
              (e.value = this.parseMethod(r, n));
          else if (
            !t &&
            !h &&
            this.options.ecmaVersion >= 5 &&
            !e.computed &&
            e.key.type === "Identifier" &&
            (e.key.name === "get" || e.key.name === "set") &&
            this.type !== f.comma &&
            this.type !== f.braceR &&
            this.type !== f.eq
          ) {
            (r || n) && this.unexpected(),
              (e.kind = e.key.name),
              this.parsePropertyName(e),
              (e.value = this.parseMethod(!1));
            var p = e.kind === "get" ? 0 : 1;
            if (e.value.params.length !== p) {
              var m = e.value.start;
              e.kind === "get"
                ? this.raiseRecoverable(m, "getter should have no params")
                : this.raiseRecoverable(m, "setter should have exactly one param");
            } else
              e.kind === "set" &&
                e.value.params[0].type === "RestElement" &&
                this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
          } else
            this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier"
              ? ((r || n) && this.unexpected(),
                this.checkUnreserved(e.key),
                e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = s),
                (e.kind = "init"),
                t
                  ? (e.value = this.parseMaybeDefault(s, o, e.key))
                  : this.type === f.eq && u
                    ? (u.shorthandAssign < 0 && (u.shorthandAssign = this.start),
                      (e.value = this.parseMaybeDefault(s, o, e.key)))
                    : (e.value = e.key),
                (e.shorthand = !0))
              : this.unexpected();
        }),
        (G.parsePropertyName = function (e) {
          if (this.options.ecmaVersion >= 6) {
            if (this.eat(f.bracketL))
              return (
                (e.computed = !0), (e.key = this.parseMaybeAssign()), this.expect(f.bracketR), e.key
              );
            e.computed = !1;
          }
          return (e.key =
            this.type === f.num || this.type === f.string
              ? this.parseExprAtom()
              : this.parseIdent(this.options.allowReserved !== "never"));
        }),
        (G.initFunction = function (e) {
          (e.id = null),
            this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
            this.options.ecmaVersion >= 8 && (e.async = !1);
        }),
        (G.parseMethod = function (e, t, r) {
          var n = this.startNode(),
            s = this.yieldPos,
            o = this.awaitPos,
            u = this.awaitIdentPos;
          return (
            this.initFunction(n),
            this.options.ecmaVersion >= 6 && (n.generator = e),
            this.options.ecmaVersion >= 8 && (n.async = !!t),
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.awaitIdentPos = 0),
            this.enterScope(Vt(t, n.generator) | Jt | (r ? Xt : 0)),
            this.expect(f.parenL),
            (n.params = this.parseBindingList(f.parenR, !1, this.options.ecmaVersion >= 8)),
            this.checkYieldAwaitInDefaultParams(),
            this.parseFunctionBody(n, !1, !0),
            (this.yieldPos = s),
            (this.awaitPos = o),
            (this.awaitIdentPos = u),
            this.finishNode(n, "FunctionExpression")
          );
        }),
        (G.parseArrowExpression = function (e, t, r) {
          var n = this.yieldPos,
            s = this.awaitPos,
            o = this.awaitIdentPos;
          return (
            this.enterScope(Vt(r, !1) | Gt),
            this.initFunction(e),
            this.options.ecmaVersion >= 8 && (e.async = !!r),
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.awaitIdentPos = 0),
            (e.params = this.toAssignableList(t, !0)),
            this.parseFunctionBody(e, !0, !1),
            (this.yieldPos = n),
            (this.awaitPos = s),
            (this.awaitIdentPos = o),
            this.finishNode(e, "ArrowFunctionExpression")
          );
        }),
        (G.parseFunctionBody = function (e, t, r) {
          var n = t && this.type !== f.braceL,
            s = this.strict,
            o = !1;
          if (n) (e.body = this.parseMaybeAssign()), (e.expression = !0), this.checkParams(e, !1);
          else {
            var u = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
            (!s || u) &&
              ((o = this.strictDirective(this.end)),
              o &&
                u &&
                this.raiseRecoverable(
                  e.start,
                  "Illegal 'use strict' directive in function with non-simple parameter list",
                ));
            var h = this.labels;
            (this.labels = []),
              o && (this.strict = !0),
              this.checkParams(e, !s && !o && !t && !r && this.isSimpleParamList(e.params)),
              this.strict && e.id && this.checkLVal(e.id, Kt),
              (e.body = this.parseBlock(!1, void 0, o && !s)),
              (e.expression = !1),
              this.adaptDirectivePrologue(e.body.body),
              (this.labels = h);
          }
          this.exitScope();
        }),
        (G.isSimpleParamList = function (e) {
          for (var t = 0, r = e; t < r.length; t += 1) {
            var n = r[t];
            if (n.type !== "Identifier") return !1;
          }
          return !0;
        }),
        (G.checkParams = function (e, t) {
          for (var r = {}, n = 0, s = e.params; n < s.length; n += 1) {
            var o = s[n];
            this.checkLVal(o, It, t ? null : r);
          }
        }),
        (G.parseExprList = function (e, t, r, n) {
          for (var s = [], o = !0; !this.eat(e); ) {
            if (o) o = !1;
            else if ((this.expect(f.comma), t && this.afterTrailingComma(e))) break;
            var u = void 0;
            r && this.type === f.comma
              ? (u = null)
              : this.type === f.ellipsis
                ? ((u = this.parseSpread(n)),
                  n &&
                    this.type === f.comma &&
                    n.trailingComma < 0 &&
                    (n.trailingComma = this.start))
                : (u = this.parseMaybeAssign(!1, n)),
              s.push(u);
          }
          return s;
        }),
        (G.checkUnreserved = function (e) {
          var t = e.start,
            r = e.end,
            n = e.name;
          if (
            (this.inGenerator &&
              n === "yield" &&
              this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"),
            this.inAsync &&
              n === "await" &&
              this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"),
            this.keywords.test(n) && this.raise(t, "Unexpected keyword '" + n + "'"),
            !(this.options.ecmaVersion < 6 && this.input.slice(t, r).indexOf("\\") !== -1))
          ) {
            var s = this.strict ? this.reservedWordsStrict : this.reservedWords;
            s.test(n) &&
              (!this.inAsync &&
                n === "await" &&
                this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"),
              this.raiseRecoverable(t, "The keyword '" + n + "' is reserved"));
          }
        }),
        (G.parseIdent = function (e, t) {
          var r = this.startNode();
          return (
            this.type === f.name
              ? (r.name = this.value)
              : this.type.keyword
                ? ((r.name = this.type.keyword),
                  (r.name === "class" || r.name === "function") &&
                    (this.lastTokEnd !== this.lastTokStart + 1 ||
                      this.input.charCodeAt(this.lastTokStart) !== 46) &&
                    this.context.pop())
                : this.unexpected(),
            this.next(!!e),
            this.finishNode(r, "Identifier"),
            e ||
              (this.checkUnreserved(r),
              r.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = r.start)),
            r
          );
        }),
        (G.parseYield = function (e) {
          this.yieldPos || (this.yieldPos = this.start);
          var t = this.startNode();
          return (
            this.next(),
            this.type === f.semi ||
            this.canInsertSemicolon() ||
            (this.type !== f.star && !this.type.startsExpr)
              ? ((t.delegate = !1), (t.argument = null))
              : ((t.delegate = this.eat(f.star)), (t.argument = this.parseMaybeAssign(e))),
            this.finishNode(t, "YieldExpression")
          );
        }),
        (G.parseAwait = function () {
          this.awaitPos || (this.awaitPos = this.start);
          var e = this.startNode();
          return (
            this.next(),
            (e.argument = this.parseMaybeUnary(null, !1)),
            this.finishNode(e, "AwaitExpression")
          );
        }),
        (ot = te.prototype),
        (ot.raise = function (e, t) {
          var r = lr(this.input, e);
          t += " (" + r.line + ":" + r.column + ")";
          var n = new SyntaxError(t);
          throw ((n.pos = e), (n.loc = r), (n.raisedAt = this.pos), n);
        }),
        (ot.raiseRecoverable = ot.raise),
        (ot.curPosition = function () {
          if (this.options.locations) return new Ue(this.curLine, this.pos - this.lineStart);
        }),
        (Ie = te.prototype),
        (rn = function (e) {
          (this.flags = e), (this.var = []), (this.lexical = []), (this.functions = []);
        }),
        (Ie.enterScope = function (e) {
          this.scopeStack.push(new rn(e));
        }),
        (Ie.exitScope = function () {
          this.scopeStack.pop();
        }),
        (Ie.treatFunctionsAsVarInScope = function (e) {
          return e.flags & Ze || (!this.inModule && e.flags & Qe);
        }),
        (Ie.declareName = function (e, t, r) {
          var n = !1;
          if (t === _e) {
            var s = this.currentScope();
            (n = s.lexical.indexOf(e) > -1 || s.functions.indexOf(e) > -1 || s.var.indexOf(e) > -1),
              s.lexical.push(e),
              this.inModule && s.flags & Qe && delete this.undefinedExports[e];
          } else if (t === Yt) {
            var o = this.currentScope();
            o.lexical.push(e);
          } else if (t === Qt) {
            var u = this.currentScope();
            this.treatFunctionsAsVar
              ? (n = u.lexical.indexOf(e) > -1)
              : (n = u.lexical.indexOf(e) > -1 || u.var.indexOf(e) > -1),
              u.functions.push(e);
          } else
            for (var h = this.scopeStack.length - 1; h >= 0; --h) {
              var p = this.scopeStack[h];
              if (
                (p.lexical.indexOf(e) > -1 && !(p.flags & $t && p.lexical[0] === e)) ||
                (!this.treatFunctionsAsVarInScope(p) && p.functions.indexOf(e) > -1)
              ) {
                n = !0;
                break;
              }
              if (
                (p.var.push(e),
                this.inModule && p.flags & Qe && delete this.undefinedExports[e],
                p.flags & kt)
              )
                break;
            }
          n && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared");
        }),
        (Ie.checkLocalExport = function (e) {
          this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
            this.scopeStack[0].var.indexOf(e.name) === -1 &&
            (this.undefinedExports[e.name] = e);
        }),
        (Ie.currentScope = function () {
          return this.scopeStack[this.scopeStack.length - 1];
        }),
        (Ie.currentVarScope = function () {
          for (var e = this.scopeStack.length - 1; ; e--) {
            var t = this.scopeStack[e];
            if (t.flags & kt) return t;
          }
        }),
        (Ie.currentThisScope = function () {
          for (var e = this.scopeStack.length - 1; ; e--) {
            var t = this.scopeStack[e];
            if (t.flags & kt && !(t.flags & Gt)) return t;
          }
        }),
        (ht = function (e, t, r) {
          (this.type = ""),
            (this.start = t),
            (this.end = 0),
            e.options.locations && (this.loc = new et(e, r)),
            e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile),
            e.options.ranges && (this.range = [t, 0]);
        }),
        (lt = te.prototype),
        (lt.startNode = function () {
          return new ht(this, this.start, this.startLoc);
        }),
        (lt.startNodeAt = function (e, t) {
          return new ht(this, e, t);
        }),
        (lt.finishNode = function (e, t) {
          return Wr.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
        }),
        (lt.finishNodeAt = function (e, t, r, n) {
          return Wr.call(this, e, t, r, n);
        }),
        (ye = function (e, t, r, n, s) {
          (this.token = e),
            (this.isExpr = !!t),
            (this.preserveSpace = !!r),
            (this.override = n),
            (this.generator = !!s);
        }),
        (ie = {
          b_stat: new ye("{", !1),
          b_expr: new ye("{", !0),
          b_tmpl: new ye("${", !1),
          p_stat: new ye("(", !1),
          p_expr: new ye("(", !0),
          q_tmpl: new ye("`", !0, !0, function (e) {
            return e.tryReadTemplateToken();
          }),
          f_stat: new ye("function", !1),
          f_expr: new ye("function", !0),
          f_expr_gen: new ye("function", !0, !1, null, !0),
          f_gen: new ye("function", !1, !1, null, !0),
        }),
        (ct = te.prototype),
        (ct.initialContext = function () {
          return [ie.b_stat];
        }),
        (ct.braceIsBlock = function (e) {
          var t = this.curContext();
          return t === ie.f_expr || t === ie.f_stat
            ? !0
            : e === f.colon && (t === ie.b_stat || t === ie.b_expr)
              ? !t.isExpr
              : e === f._return || (e === f.name && this.exprAllowed)
                ? De.test(this.input.slice(this.lastTokEnd, this.start))
                : e === f._else || e === f.semi || e === f.eof || e === f.parenR || e === f.arrow
                  ? !0
                  : e === f.braceL
                    ? t === ie.b_stat
                    : e === f._var || e === f._const || e === f.name
                      ? !1
                      : !this.exprAllowed;
        }),
        (ct.inGeneratorContext = function () {
          for (var e = this.context.length - 1; e >= 1; e--) {
            var t = this.context[e];
            if (t.token === "function") return t.generator;
          }
          return !1;
        }),
        (ct.updateContext = function (e) {
          var t,
            r = this.type;
          r.keyword && e === f.dot
            ? (this.exprAllowed = !1)
            : (t = r.updateContext)
              ? t.call(this, e)
              : (this.exprAllowed = r.beforeExpr);
        }),
        (f.parenR.updateContext = f.braceR.updateContext =
          function () {
            if (this.context.length === 1) {
              this.exprAllowed = !0;
              return;
            }
            var e = this.context.pop();
            e === ie.b_stat && this.curContext().token === "function" && (e = this.context.pop()),
              (this.exprAllowed = !e.isExpr);
          }),
        (f.braceL.updateContext = function (e) {
          this.context.push(this.braceIsBlock(e) ? ie.b_stat : ie.b_expr), (this.exprAllowed = !0);
        }),
        (f.dollarBraceL.updateContext = function () {
          this.context.push(ie.b_tmpl), (this.exprAllowed = !0);
        }),
        (f.parenL.updateContext = function (e) {
          var t = e === f._if || e === f._for || e === f._with || e === f._while;
          this.context.push(t ? ie.p_stat : ie.p_expr), (this.exprAllowed = !0);
        }),
        (f.incDec.updateContext = function () {}),
        (f._function.updateContext = f._class.updateContext =
          function (e) {
            e.beforeExpr &&
            e !== f.semi &&
            e !== f._else &&
            !(e === f._return && De.test(this.input.slice(this.lastTokEnd, this.start))) &&
            !((e === f.colon || e === f.braceL) && this.curContext() === ie.b_stat)
              ? this.context.push(ie.f_expr)
              : this.context.push(ie.f_stat),
              (this.exprAllowed = !1);
          }),
        (f.backQuote.updateContext = function () {
          this.curContext() === ie.q_tmpl ? this.context.pop() : this.context.push(ie.q_tmpl),
            (this.exprAllowed = !1);
        }),
        (f.star.updateContext = function (e) {
          if (e === f._function) {
            var t = this.context.length - 1;
            this.context[t] === ie.f_expr
              ? (this.context[t] = ie.f_expr_gen)
              : (this.context[t] = ie.f_gen);
          }
          this.exprAllowed = !0;
        }),
        (f.name.updateContext = function (e) {
          var t = !1;
          this.options.ecmaVersion >= 6 &&
            e !== f.dot &&
            ((this.value === "of" && !this.exprAllowed) ||
              (this.value === "yield" && this.inGeneratorContext())) &&
            (t = !0),
            (this.exprAllowed = t);
        }),
        (er =
          "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS"),
        (tr = er + " Extended_Pictographic"),
        (nn = tr),
        (Tn = { 9: er, 10: tr, 11: nn }),
        (fr =
          "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu"),
        (rr =
          "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb"),
        (nr =
          rr +
          " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd"),
        (sn = nr + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"),
        (Pn = { 9: rr, 10: nr, 11: sn }),
        (dr = {}),
        qt(9),
        qt(10),
        qt(11),
        (q = te.prototype),
        (be = function (e) {
          (this.parser = e),
            (this.validFlags =
              "gim" +
              (e.options.ecmaVersion >= 6 ? "uy" : "") +
              (e.options.ecmaVersion >= 9 ? "s" : "")),
            (this.unicodeProperties = dr[e.options.ecmaVersion >= 11 ? 11 : e.options.ecmaVersion]),
            (this.source = ""),
            (this.flags = ""),
            (this.start = 0),
            (this.switchU = !1),
            (this.switchN = !1),
            (this.pos = 0),
            (this.lastIntValue = 0),
            (this.lastStringValue = ""),
            (this.lastAssertionIsQuantifiable = !1),
            (this.numCapturingParens = 0),
            (this.maxBackReference = 0),
            (this.groupNames = []),
            (this.backReferenceNames = []);
        }),
        (be.prototype.reset = function (e, t, r) {
          var n = r.indexOf("u") !== -1;
          (this.start = e | 0),
            (this.source = t + ""),
            (this.flags = r),
            (this.switchU = n && this.parser.options.ecmaVersion >= 6),
            (this.switchN = n && this.parser.options.ecmaVersion >= 9);
        }),
        (be.prototype.raise = function (e) {
          this.parser.raiseRecoverable(
            this.start,
            "Invalid regular expression: /" + this.source + "/: " + e,
          );
        }),
        (be.prototype.at = function (e, t) {
          t === void 0 && (t = !1);
          var r = this.source,
            n = r.length;
          if (e >= n) return -1;
          var s = r.charCodeAt(e);
          if (!(t || this.switchU) || s <= 55295 || s >= 57344 || e + 1 >= n) return s;
          var o = r.charCodeAt(e + 1);
          return o >= 56320 && o <= 57343 ? (s << 10) + o - 56613888 : s;
        }),
        (be.prototype.nextIndex = function (e, t) {
          t === void 0 && (t = !1);
          var r = this.source,
            n = r.length;
          if (e >= n) return n;
          var s = r.charCodeAt(e),
            o;
          return !(t || this.switchU) ||
            s <= 55295 ||
            s >= 57344 ||
            e + 1 >= n ||
            (o = r.charCodeAt(e + 1)) < 56320 ||
            o > 57343
            ? e + 1
            : e + 2;
        }),
        (be.prototype.current = function (e) {
          return e === void 0 && (e = !1), this.at(this.pos, e);
        }),
        (be.prototype.lookahead = function (e) {
          return e === void 0 && (e = !1), this.at(this.nextIndex(this.pos, e), e);
        }),
        (be.prototype.advance = function (e) {
          e === void 0 && (e = !1), (this.pos = this.nextIndex(this.pos, e));
        }),
        (be.prototype.eat = function (e, t) {
          return t === void 0 && (t = !1), this.current(t) === e ? (this.advance(t), !0) : !1;
        }),
        (q.validateRegExpFlags = function (e) {
          for (var t = e.validFlags, r = e.flags, n = 0; n < r.length; n++) {
            var s = r.charAt(n);
            t.indexOf(s) === -1 && this.raise(e.start, "Invalid regular expression flag"),
              r.indexOf(s, n + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
          }
        }),
        (q.validateRegExpPattern = function (e) {
          this.regexp_pattern(e),
            !e.switchN &&
              this.options.ecmaVersion >= 9 &&
              e.groupNames.length > 0 &&
              ((e.switchN = !0), this.regexp_pattern(e));
        }),
        (q.regexp_pattern = function (e) {
          (e.pos = 0),
            (e.lastIntValue = 0),
            (e.lastStringValue = ""),
            (e.lastAssertionIsQuantifiable = !1),
            (e.numCapturingParens = 0),
            (e.maxBackReference = 0),
            (e.groupNames.length = 0),
            (e.backReferenceNames.length = 0),
            this.regexp_disjunction(e),
            e.pos !== e.source.length &&
              (e.eat(41) && e.raise("Unmatched ')'"),
              (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")),
            e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
          for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
            var n = r[t];
            e.groupNames.indexOf(n) === -1 && e.raise("Invalid named capture referenced");
          }
        }),
        (q.regexp_disjunction = function (e) {
          for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e);
          this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"),
            e.eat(123) && e.raise("Lone quantifier brackets");
        }),
        (q.regexp_alternative = function (e) {
          for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
        }),
        (q.regexp_eatTerm = function (e) {
          return this.regexp_eatAssertion(e)
            ? (e.lastAssertionIsQuantifiable &&
                this.regexp_eatQuantifier(e) &&
                e.switchU &&
                e.raise("Invalid quantifier"),
              !0)
            : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e))
              ? (this.regexp_eatQuantifier(e), !0)
              : !1;
        }),
        (q.regexp_eatAssertion = function (e) {
          var t = e.pos;
          if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36))) return !0;
          if (e.eat(92)) {
            if (e.eat(66) || e.eat(98)) return !0;
            e.pos = t;
          }
          if (e.eat(40) && e.eat(63)) {
            var r = !1;
            if ((this.options.ecmaVersion >= 9 && (r = e.eat(60)), e.eat(61) || e.eat(33)))
              return (
                this.regexp_disjunction(e),
                e.eat(41) || e.raise("Unterminated group"),
                (e.lastAssertionIsQuantifiable = !r),
                !0
              );
          }
          return (e.pos = t), !1;
        }),
        (q.regexp_eatQuantifier = function (e, t) {
          return (
            t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), !0) : !1
          );
        }),
        (q.regexp_eatQuantifierPrefix = function (e, t) {
          return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
        }),
        (q.regexp_eatBracedQuantifier = function (e, t) {
          var r = e.pos;
          if (e.eat(123)) {
            var n = 0,
              s = -1;
            if (
              this.regexp_eatDecimalDigits(e) &&
              ((n = e.lastIntValue),
              e.eat(44) && this.regexp_eatDecimalDigits(e) && (s = e.lastIntValue),
              e.eat(125))
            )
              return (
                s !== -1 && s < n && !t && e.raise("numbers out of order in {} quantifier"), !0
              );
            e.switchU && !t && e.raise("Incomplete quantifier"), (e.pos = r);
          }
          return !1;
        }),
        (q.regexp_eatAtom = function (e) {
          return (
            this.regexp_eatPatternCharacters(e) ||
            e.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(e) ||
            this.regexp_eatCharacterClass(e) ||
            this.regexp_eatUncapturingGroup(e) ||
            this.regexp_eatCapturingGroup(e)
          );
        }),
        (q.regexp_eatReverseSolidusAtomEscape = function (e) {
          var t = e.pos;
          if (e.eat(92)) {
            if (this.regexp_eatAtomEscape(e)) return !0;
            e.pos = t;
          }
          return !1;
        }),
        (q.regexp_eatUncapturingGroup = function (e) {
          var t = e.pos;
          if (e.eat(40)) {
            if (e.eat(63) && e.eat(58)) {
              if ((this.regexp_disjunction(e), e.eat(41))) return !0;
              e.raise("Unterminated group");
            }
            e.pos = t;
          }
          return !1;
        }),
        (q.regexp_eatCapturingGroup = function (e) {
          if (e.eat(40)) {
            if (
              (this.options.ecmaVersion >= 9
                ? this.regexp_groupSpecifier(e)
                : e.current() === 63 && e.raise("Invalid group"),
              this.regexp_disjunction(e),
              e.eat(41))
            )
              return (e.numCapturingParens += 1), !0;
            e.raise("Unterminated group");
          }
          return !1;
        }),
        (q.regexp_eatExtendedAtom = function (e) {
          return (
            e.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(e) ||
            this.regexp_eatCharacterClass(e) ||
            this.regexp_eatUncapturingGroup(e) ||
            this.regexp_eatCapturingGroup(e) ||
            this.regexp_eatInvalidBracedQuantifier(e) ||
            this.regexp_eatExtendedPatternCharacter(e)
          );
        }),
        (q.regexp_eatInvalidBracedQuantifier = function (e) {
          return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
        }),
        (q.regexp_eatSyntaxCharacter = function (e) {
          var t = e.current();
          return zr(t) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
        }),
        (q.regexp_eatPatternCharacters = function (e) {
          for (var t = e.pos, r = 0; (r = e.current()) !== -1 && !zr(r); ) e.advance();
          return e.pos !== t;
        }),
        (q.regexp_eatExtendedPatternCharacter = function (e) {
          var t = e.current();
          return t !== -1 &&
            t !== 36 &&
            !(t >= 40 && t <= 43) &&
            t !== 46 &&
            t !== 63 &&
            t !== 91 &&
            t !== 94 &&
            t !== 124
            ? (e.advance(), !0)
            : !1;
        }),
        (q.regexp_groupSpecifier = function (e) {
          if (e.eat(63)) {
            if (this.regexp_eatGroupName(e)) {
              e.groupNames.indexOf(e.lastStringValue) !== -1 &&
                e.raise("Duplicate capture group name"),
                e.groupNames.push(e.lastStringValue);
              return;
            }
            e.raise("Invalid group");
          }
        }),
        (q.regexp_eatGroupName = function (e) {
          if (((e.lastStringValue = ""), e.eat(60))) {
            if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
            e.raise("Invalid capture group name");
          }
          return !1;
        }),
        (q.regexp_eatRegExpIdentifierName = function (e) {
          if (((e.lastStringValue = ""), this.regexp_eatRegExpIdentifierStart(e))) {
            for (e.lastStringValue += St(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
              e.lastStringValue += St(e.lastIntValue);
            return !0;
          }
          return !1;
        }),
        (q.regexp_eatRegExpIdentifierStart = function (e) {
          var t = e.pos,
            r = this.options.ecmaVersion >= 11,
            n = e.current(r);
          return (
            e.advance(r),
            n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue),
            $i(n) ? ((e.lastIntValue = n), !0) : ((e.pos = t), !1)
          );
        }),
        (q.regexp_eatRegExpIdentifierPart = function (e) {
          var t = e.pos,
            r = this.options.ecmaVersion >= 11,
            n = e.current(r);
          return (
            e.advance(r),
            n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue),
            Ji(n) ? ((e.lastIntValue = n), !0) : ((e.pos = t), !1)
          );
        }),
        (q.regexp_eatAtomEscape = function (e) {
          return this.regexp_eatBackReference(e) ||
            this.regexp_eatCharacterClassEscape(e) ||
            this.regexp_eatCharacterEscape(e) ||
            (e.switchN && this.regexp_eatKGroupName(e))
            ? !0
            : (e.switchU &&
                (e.current() === 99 && e.raise("Invalid unicode escape"),
                e.raise("Invalid escape")),
              !1);
        }),
        (q.regexp_eatBackReference = function (e) {
          var t = e.pos;
          if (this.regexp_eatDecimalEscape(e)) {
            var r = e.lastIntValue;
            if (e.switchU) return r > e.maxBackReference && (e.maxBackReference = r), !0;
            if (r <= e.numCapturingParens) return !0;
            e.pos = t;
          }
          return !1;
        }),
        (q.regexp_eatKGroupName = function (e) {
          if (e.eat(107)) {
            if (this.regexp_eatGroupName(e))
              return e.backReferenceNames.push(e.lastStringValue), !0;
            e.raise("Invalid named reference");
          }
          return !1;
        }),
        (q.regexp_eatCharacterEscape = function (e) {
          return (
            this.regexp_eatControlEscape(e) ||
            this.regexp_eatCControlLetter(e) ||
            this.regexp_eatZero(e) ||
            this.regexp_eatHexEscapeSequence(e) ||
            this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
            (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
            this.regexp_eatIdentityEscape(e)
          );
        }),
        (q.regexp_eatCControlLetter = function (e) {
          var t = e.pos;
          if (e.eat(99)) {
            if (this.regexp_eatControlLetter(e)) return !0;
            e.pos = t;
          }
          return !1;
        }),
        (q.regexp_eatZero = function (e) {
          return e.current() === 48 && !Lt(e.lookahead())
            ? ((e.lastIntValue = 0), e.advance(), !0)
            : !1;
        }),
        (q.regexp_eatControlEscape = function (e) {
          var t = e.current();
          return t === 116
            ? ((e.lastIntValue = 9), e.advance(), !0)
            : t === 110
              ? ((e.lastIntValue = 10), e.advance(), !0)
              : t === 118
                ? ((e.lastIntValue = 11), e.advance(), !0)
                : t === 102
                  ? ((e.lastIntValue = 12), e.advance(), !0)
                  : t === 114
                    ? ((e.lastIntValue = 13), e.advance(), !0)
                    : !1;
        }),
        (q.regexp_eatControlLetter = function (e) {
          var t = e.current();
          return Sn(t) ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
        }),
        (q.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
          t === void 0 && (t = !1);
          var r = e.pos,
            n = t || e.switchU;
          if (e.eat(117)) {
            if (this.regexp_eatFixedHexDigits(e, 4)) {
              var s = e.lastIntValue;
              if (n && s >= 55296 && s <= 56319) {
                var o = e.pos;
                if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
                  var u = e.lastIntValue;
                  if (u >= 56320 && u <= 57343)
                    return (e.lastIntValue = (s - 55296) * 1024 + (u - 56320) + 65536), !0;
                }
                (e.pos = o), (e.lastIntValue = s);
              }
              return !0;
            }
            if (n && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && Xi(e.lastIntValue))
              return !0;
            n && e.raise("Invalid unicode escape"), (e.pos = r);
          }
          return !1;
        }),
        (q.regexp_eatIdentityEscape = function (e) {
          if (e.switchU)
            return this.regexp_eatSyntaxCharacter(e)
              ? !0
              : e.eat(47)
                ? ((e.lastIntValue = 47), !0)
                : !1;
          var t = e.current();
          return t !== 99 && (!e.switchN || t !== 107)
            ? ((e.lastIntValue = t), e.advance(), !0)
            : !1;
        }),
        (q.regexp_eatDecimalEscape = function (e) {
          e.lastIntValue = 0;
          var t = e.current();
          if (t >= 49 && t <= 57) {
            do (e.lastIntValue = 10 * e.lastIntValue + (t - 48)), e.advance();
            while ((t = e.current()) >= 48 && t <= 57);
            return !0;
          }
          return !1;
        }),
        (q.regexp_eatCharacterClassEscape = function (e) {
          var t = e.current();
          if (Hi(t)) return (e.lastIntValue = -1), e.advance(), !0;
          if (e.switchU && this.options.ecmaVersion >= 9 && (t === 80 || t === 112)) {
            if (
              ((e.lastIntValue = -1),
              e.advance(),
              e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125))
            )
              return !0;
            e.raise("Invalid property name");
          }
          return !1;
        }),
        (q.regexp_eatUnicodePropertyValueExpression = function (e) {
          var t = e.pos;
          if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
            var r = e.lastStringValue;
            if (this.regexp_eatUnicodePropertyValue(e)) {
              var n = e.lastStringValue;
              return this.regexp_validateUnicodePropertyNameAndValue(e, r, n), !0;
            }
          }
          if (((e.pos = t), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
            var s = e.lastStringValue;
            return this.regexp_validateUnicodePropertyNameOrValue(e, s), !0;
          }
          return !1;
        }),
        (q.regexp_validateUnicodePropertyNameAndValue = function (e, t, r) {
          Nt(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"),
            e.unicodeProperties.nonBinary[t].test(r) || e.raise("Invalid property value");
        }),
        (q.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
          e.unicodeProperties.binary.test(t) || e.raise("Invalid property name");
        }),
        (q.regexp_eatUnicodePropertyName = function (e) {
          var t = 0;
          for (e.lastStringValue = ""; bn((t = e.current())); )
            (e.lastStringValue += St(t)), e.advance();
          return e.lastStringValue !== "";
        }),
        (q.regexp_eatUnicodePropertyValue = function (e) {
          var t = 0;
          for (e.lastStringValue = ""; Qi((t = e.current())); )
            (e.lastStringValue += St(t)), e.advance();
          return e.lastStringValue !== "";
        }),
        (q.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
          return this.regexp_eatUnicodePropertyValue(e);
        }),
        (q.regexp_eatCharacterClass = function (e) {
          if (e.eat(91)) {
            if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0;
            e.raise("Unterminated character class");
          }
          return !1;
        }),
        (q.regexp_classRanges = function (e) {
          for (; this.regexp_eatClassAtom(e); ) {
            var t = e.lastIntValue;
            if (e.eat(45) && this.regexp_eatClassAtom(e)) {
              var r = e.lastIntValue;
              e.switchU && (t === -1 || r === -1) && e.raise("Invalid character class"),
                t !== -1 && r !== -1 && t > r && e.raise("Range out of order in character class");
            }
          }
        }),
        (q.regexp_eatClassAtom = function (e) {
          var t = e.pos;
          if (e.eat(92)) {
            if (this.regexp_eatClassEscape(e)) return !0;
            if (e.switchU) {
              var r = e.current();
              (r === 99 || Jr(r)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
            }
            e.pos = t;
          }
          var n = e.current();
          return n !== 93 ? ((e.lastIntValue = n), e.advance(), !0) : !1;
        }),
        (q.regexp_eatClassEscape = function (e) {
          var t = e.pos;
          if (e.eat(98)) return (e.lastIntValue = 8), !0;
          if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
          if (!e.switchU && e.eat(99)) {
            if (this.regexp_eatClassControlLetter(e)) return !0;
            e.pos = t;
          }
          return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
        }),
        (q.regexp_eatClassControlLetter = function (e) {
          var t = e.current();
          return Lt(t) || t === 95 ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
        }),
        (q.regexp_eatHexEscapeSequence = function (e) {
          var t = e.pos;
          if (e.eat(120)) {
            if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
            e.switchU && e.raise("Invalid escape"), (e.pos = t);
          }
          return !1;
        }),
        (q.regexp_eatDecimalDigits = function (e) {
          var t = e.pos,
            r = 0;
          for (e.lastIntValue = 0; Lt((r = e.current())); )
            (e.lastIntValue = 10 * e.lastIntValue + (r - 48)), e.advance();
          return e.pos !== t;
        }),
        (q.regexp_eatHexDigits = function (e) {
          var t = e.pos,
            r = 0;
          for (e.lastIntValue = 0; Gr((r = e.current())); )
            (e.lastIntValue = 16 * e.lastIntValue + $r(r)), e.advance();
          return e.pos !== t;
        }),
        (q.regexp_eatLegacyOctalEscapeSequence = function (e) {
          if (this.regexp_eatOctalDigit(e)) {
            var t = e.lastIntValue;
            if (this.regexp_eatOctalDigit(e)) {
              var r = e.lastIntValue;
              t <= 3 && this.regexp_eatOctalDigit(e)
                ? (e.lastIntValue = t * 64 + r * 8 + e.lastIntValue)
                : (e.lastIntValue = t * 8 + r);
            } else e.lastIntValue = t;
            return !0;
          }
          return !1;
        }),
        (q.regexp_eatOctalDigit = function (e) {
          var t = e.current();
          return Jr(t) ? ((e.lastIntValue = t - 48), e.advance(), !0) : ((e.lastIntValue = 0), !1);
        }),
        (q.regexp_eatFixedHexDigits = function (e, t) {
          var r = e.pos;
          e.lastIntValue = 0;
          for (var n = 0; n < t; ++n) {
            var s = e.current();
            if (!Gr(s)) return (e.pos = r), !1;
            (e.lastIntValue = 16 * e.lastIntValue + $r(s)), e.advance();
          }
          return !0;
        }),
        (pt = function (e) {
          (this.type = e.type),
            (this.value = e.value),
            (this.start = e.start),
            (this.end = e.end),
            e.options.locations && (this.loc = new et(e, e.startLoc, e.endLoc)),
            e.options.ranges && (this.range = [e.start, e.end]);
        }),
        ($ = te.prototype),
        ($.next = function (e) {
          !e &&
            this.type.keyword &&
            this.containsEsc &&
            this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword),
            this.options.onToken && this.options.onToken(new pt(this)),
            (this.lastTokEnd = this.end),
            (this.lastTokStart = this.start),
            (this.lastTokEndLoc = this.endLoc),
            (this.lastTokStartLoc = this.startLoc),
            this.nextToken();
        }),
        ($.getToken = function () {
          return this.next(), new pt(this);
        }),
        typeof Symbol < "u" &&
          ($[Symbol.iterator] = function () {
            var e = this;
            return {
              next: function () {
                var t = e.getToken();
                return { done: t.type === f.eof, value: t };
              },
            };
          }),
        ($.curContext = function () {
          return this.context[this.context.length - 1];
        }),
        ($.nextToken = function () {
          var e = this.curContext();
          if (
            ((!e || !e.preserveSpace) && this.skipSpace(),
            (this.start = this.pos),
            this.options.locations && (this.startLoc = this.curPosition()),
            this.pos >= this.input.length)
          )
            return this.finishToken(f.eof);
          if (e.override) return e.override(this);
          this.readToken(this.fullCharCodeAtPos());
        }),
        ($.readToken = function (e) {
          return Te(e, this.options.ecmaVersion >= 6) || e === 92
            ? this.readWord()
            : this.getTokenFromCode(e);
        }),
        ($.fullCharCodeAtPos = function () {
          var e = this.input.charCodeAt(this.pos);
          if (e <= 55295 || e >= 57344) return e;
          var t = this.input.charCodeAt(this.pos + 1);
          return (e << 10) + t - 56613888;
        }),
        ($.skipBlockComment = function () {
          var e = this.options.onComment && this.curPosition(),
            t = this.pos,
            r = this.input.indexOf("*/", (this.pos += 2));
          if (
            (r === -1 && this.raise(this.pos - 2, "Unterminated comment"),
            (this.pos = r + 2),
            this.options.locations)
          ) {
            ze.lastIndex = t;
            for (var n; (n = ze.exec(this.input)) && n.index < this.pos; )
              ++this.curLine, (this.lineStart = n.index + n[0].length);
          }
          this.options.onComment &&
            this.options.onComment(
              !0,
              this.input.slice(t + 2, r),
              t,
              this.pos,
              e,
              this.curPosition(),
            );
        }),
        ($.skipLineComment = function (e) {
          for (
            var t = this.pos,
              r = this.options.onComment && this.curPosition(),
              n = this.input.charCodeAt((this.pos += e));
            this.pos < this.input.length && !Ke(n);

          )
            n = this.input.charCodeAt(++this.pos);
          this.options.onComment &&
            this.options.onComment(
              !1,
              this.input.slice(t + e, this.pos),
              t,
              this.pos,
              r,
              this.curPosition(),
            );
        }),
        ($.skipSpace = function () {
          e: for (; this.pos < this.input.length; ) {
            var e = this.input.charCodeAt(this.pos);
            switch (e) {
              case 32:
              case 160:
                ++this.pos;
                break;
              case 13:
                this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
              case 10:
              case 8232:
              case 8233:
                ++this.pos, this.options.locations && (++this.curLine, (this.lineStart = this.pos));
                break;
              case 47:
                switch (this.input.charCodeAt(this.pos + 1)) {
                  case 42:
                    this.skipBlockComment();
                    break;
                  case 47:
                    this.skipLineComment(2);
                    break;
                  default:
                    break e;
                }
                break;
              default:
                if ((e > 8 && e < 14) || (e >= 5760 && Ot.test(String.fromCharCode(e)))) ++this.pos;
                else break e;
            }
          }
        }),
        ($.finishToken = function (e, t) {
          (this.end = this.pos), this.options.locations && (this.endLoc = this.curPosition());
          var r = this.type;
          (this.type = e), (this.value = t), this.updateContext(r);
        }),
        ($.readToken_dot = function () {
          var e = this.input.charCodeAt(this.pos + 1);
          if (e >= 48 && e <= 57) return this.readNumber(!0);
          var t = this.input.charCodeAt(this.pos + 2);
          return this.options.ecmaVersion >= 6 && e === 46 && t === 46
            ? ((this.pos += 3), this.finishToken(f.ellipsis))
            : (++this.pos, this.finishToken(f.dot));
        }),
        ($.readToken_slash = function () {
          var e = this.input.charCodeAt(this.pos + 1);
          return this.exprAllowed
            ? (++this.pos, this.readRegexp())
            : e === 61
              ? this.finishOp(f.assign, 2)
              : this.finishOp(f.slash, 1);
        }),
        ($.readToken_mult_modulo_exp = function (e) {
          var t = this.input.charCodeAt(this.pos + 1),
            r = 1,
            n = e === 42 ? f.star : f.modulo;
          return (
            this.options.ecmaVersion >= 7 &&
              e === 42 &&
              t === 42 &&
              (++r, (n = f.starstar), (t = this.input.charCodeAt(this.pos + 2))),
            t === 61 ? this.finishOp(f.assign, r + 1) : this.finishOp(n, r)
          );
        }),
        ($.readToken_pipe_amp = function (e) {
          var t = this.input.charCodeAt(this.pos + 1);
          if (t === e) {
            if (this.options.ecmaVersion >= 12) {
              var r = this.input.charCodeAt(this.pos + 2);
              if (r === 61) return this.finishOp(f.assign, 3);
            }
            return this.finishOp(e === 124 ? f.logicalOR : f.logicalAND, 2);
          }
          return t === 61
            ? this.finishOp(f.assign, 2)
            : this.finishOp(e === 124 ? f.bitwiseOR : f.bitwiseAND, 1);
        }),
        ($.readToken_caret = function () {
          var e = this.input.charCodeAt(this.pos + 1);
          return e === 61 ? this.finishOp(f.assign, 2) : this.finishOp(f.bitwiseXOR, 1);
        }),
        ($.readToken_plus_min = function (e) {
          var t = this.input.charCodeAt(this.pos + 1);
          return t === e
            ? t === 45 &&
              !this.inModule &&
              this.input.charCodeAt(this.pos + 2) === 62 &&
              (this.lastTokEnd === 0 || De.test(this.input.slice(this.lastTokEnd, this.pos)))
              ? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
              : this.finishOp(f.incDec, 2)
            : t === 61
              ? this.finishOp(f.assign, 2)
              : this.finishOp(f.plusMin, 1);
        }),
        ($.readToken_lt_gt = function (e) {
          var t = this.input.charCodeAt(this.pos + 1),
            r = 1;
          return t === e
            ? ((r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
              this.input.charCodeAt(this.pos + r) === 61
                ? this.finishOp(f.assign, r + 1)
                : this.finishOp(f.bitShift, r))
            : t === 33 &&
                e === 60 &&
                !this.inModule &&
                this.input.charCodeAt(this.pos + 2) === 45 &&
                this.input.charCodeAt(this.pos + 3) === 45
              ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
              : (t === 61 && (r = 2), this.finishOp(f.relational, r));
        }),
        ($.readToken_eq_excl = function (e) {
          var t = this.input.charCodeAt(this.pos + 1);
          return t === 61
            ? this.finishOp(f.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2)
            : e === 61 && t === 62 && this.options.ecmaVersion >= 6
              ? ((this.pos += 2), this.finishToken(f.arrow))
              : this.finishOp(e === 61 ? f.eq : f.prefix, 1);
        }),
        ($.readToken_question = function () {
          var e = this.options.ecmaVersion;
          if (e >= 11) {
            var t = this.input.charCodeAt(this.pos + 1);
            if (t === 46) {
              var r = this.input.charCodeAt(this.pos + 2);
              if (r < 48 || r > 57) return this.finishOp(f.questionDot, 2);
            }
            if (t === 63) {
              if (e >= 12) {
                var n = this.input.charCodeAt(this.pos + 2);
                if (n === 61) return this.finishOp(f.assign, 3);
              }
              return this.finishOp(f.coalesce, 2);
            }
          }
          return this.finishOp(f.question, 1);
        }),
        ($.getTokenFromCode = function (e) {
          switch (e) {
            case 46:
              return this.readToken_dot();
            case 40:
              return ++this.pos, this.finishToken(f.parenL);
            case 41:
              return ++this.pos, this.finishToken(f.parenR);
            case 59:
              return ++this.pos, this.finishToken(f.semi);
            case 44:
              return ++this.pos, this.finishToken(f.comma);
            case 91:
              return ++this.pos, this.finishToken(f.bracketL);
            case 93:
              return ++this.pos, this.finishToken(f.bracketR);
            case 123:
              return ++this.pos, this.finishToken(f.braceL);
            case 125:
              return ++this.pos, this.finishToken(f.braceR);
            case 58:
              return ++this.pos, this.finishToken(f.colon);
            case 96:
              if (this.options.ecmaVersion < 6) break;
              return ++this.pos, this.finishToken(f.backQuote);
            case 48:
              var t = this.input.charCodeAt(this.pos + 1);
              if (t === 120 || t === 88) return this.readRadixNumber(16);
              if (this.options.ecmaVersion >= 6) {
                if (t === 111 || t === 79) return this.readRadixNumber(8);
                if (t === 98 || t === 66) return this.readRadixNumber(2);
              }
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return this.readNumber(!1);
            case 34:
            case 39:
              return this.readString(e);
            case 47:
              return this.readToken_slash();
            case 37:
            case 42:
              return this.readToken_mult_modulo_exp(e);
            case 124:
            case 38:
              return this.readToken_pipe_amp(e);
            case 94:
              return this.readToken_caret();
            case 43:
            case 45:
              return this.readToken_plus_min(e);
            case 60:
            case 62:
              return this.readToken_lt_gt(e);
            case 61:
            case 33:
              return this.readToken_eq_excl(e);
            case 63:
              return this.readToken_question();
            case 126:
              return this.finishOp(f.prefix, 1);
          }
          this.raise(this.pos, "Unexpected character '" + Ut(e) + "'");
        }),
        ($.finishOp = function (e, t) {
          var r = this.input.slice(this.pos, this.pos + t);
          return (this.pos += t), this.finishToken(e, r);
        }),
        ($.readRegexp = function () {
          for (var e, t, r = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(r, "Unterminated regular expression");
            var n = this.input.charAt(this.pos);
            if ((De.test(n) && this.raise(r, "Unterminated regular expression"), e)) e = !1;
            else {
              if (n === "[") t = !0;
              else if (n === "]" && t) t = !1;
              else if (n === "/" && !t) break;
              e = n === "\\";
            }
            ++this.pos;
          }
          var s = this.input.slice(r, this.pos);
          ++this.pos;
          var o = this.pos,
            u = this.readWord1();
          this.containsEsc && this.unexpected(o);
          var h = this.regexpState || (this.regexpState = new be(this));
          h.reset(r, s, u), this.validateRegExpFlags(h), this.validateRegExpPattern(h);
          var p = null;
          try {
            p = new RegExp(s, u);
          } catch {}
          return this.finishToken(f.regexp, { pattern: s, flags: u, value: p });
        }),
        ($.readInt = function (e, t, r) {
          for (
            var n = this.options.ecmaVersion >= 12 && t === void 0,
              s = r && this.input.charCodeAt(this.pos) === 48,
              o = this.pos,
              u = 0,
              h = 0,
              p = 0,
              m = t ?? 1 / 0;
            p < m;
            ++p, ++this.pos
          ) {
            var g = this.input.charCodeAt(this.pos),
              F = void 0;
            if (n && g === 95) {
              s &&
                this.raiseRecoverable(
                  this.pos,
                  "Numeric separator is not allowed in legacy octal numeric literals",
                ),
                h === 95 &&
                  this.raiseRecoverable(
                    this.pos,
                    "Numeric separator must be exactly one underscore",
                  ),
                p === 0 &&
                  this.raiseRecoverable(
                    this.pos,
                    "Numeric separator is not allowed at the first of digits",
                  ),
                (h = g);
              continue;
            }
            if (
              (g >= 97
                ? (F = g - 97 + 10)
                : g >= 65
                  ? (F = g - 65 + 10)
                  : g >= 48 && g <= 57
                    ? (F = g - 48)
                    : (F = 1 / 0),
              F >= e)
            )
              break;
            (h = g), (u = u * e + F);
          }
          return (
            n &&
              h === 95 &&
              this.raiseRecoverable(
                this.pos - 1,
                "Numeric separator is not allowed at the last of digits",
              ),
            this.pos === o || (t != null && this.pos - o !== t) ? null : u
          );
        }),
        ($.readRadixNumber = function (e) {
          var t = this.pos;
          this.pos += 2;
          var r = this.readInt(e);
          return (
            r == null && this.raise(this.start + 2, "Expected number in radix " + e),
            this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
              ? ((r = Xr(this.input.slice(t, this.pos))), ++this.pos)
              : Te(this.fullCharCodeAtPos()) &&
                this.raise(this.pos, "Identifier directly after number"),
            this.finishToken(f.num, r)
          );
        }),
        ($.readNumber = function (e) {
          var t = this.pos;
          !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
          var r = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
          r && this.strict && this.raise(t, "Invalid number");
          var n = this.input.charCodeAt(this.pos);
          if (!r && !e && this.options.ecmaVersion >= 11 && n === 110) {
            var s = Xr(this.input.slice(t, this.pos));
            return (
              ++this.pos,
              Te(this.fullCharCodeAtPos()) &&
                this.raise(this.pos, "Identifier directly after number"),
              this.finishToken(f.num, s)
            );
          }
          r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1),
            n === 46 && !r && (++this.pos, this.readInt(10), (n = this.input.charCodeAt(this.pos))),
            (n === 69 || n === 101) &&
              !r &&
              ((n = this.input.charCodeAt(++this.pos)),
              (n === 43 || n === 45) && ++this.pos,
              this.readInt(10) === null && this.raise(t, "Invalid number")),
            Te(this.fullCharCodeAtPos()) &&
              this.raise(this.pos, "Identifier directly after number");
          var o = Yi(this.input.slice(t, this.pos), r);
          return this.finishToken(f.num, o);
        }),
        ($.readCodePoint = function () {
          var e = this.input.charCodeAt(this.pos),
            t;
          if (e === 123) {
            this.options.ecmaVersion < 6 && this.unexpected();
            var r = ++this.pos;
            (t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos)),
              ++this.pos,
              t > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
          } else t = this.readHexChar(4);
          return t;
        }),
        ($.readString = function (e) {
          for (var t = "", r = ++this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
            var n = this.input.charCodeAt(this.pos);
            if (n === e) break;
            n === 92
              ? ((t += this.input.slice(r, this.pos)),
                (t += this.readEscapedChar(!1)),
                (r = this.pos))
              : (Ke(n, this.options.ecmaVersion >= 10) &&
                  this.raise(this.start, "Unterminated string constant"),
                ++this.pos);
          }
          return (t += this.input.slice(r, this.pos++)), this.finishToken(f.string, t);
        }),
        (ir = {}),
        ($.tryReadTemplateToken = function () {
          this.inTemplateElement = !0;
          try {
            this.readTmplToken();
          } catch (e) {
            if (e === ir) this.readInvalidTemplateToken();
            else throw e;
          }
          this.inTemplateElement = !1;
        }),
        ($.invalidStringToken = function (e, t) {
          if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw ir;
          this.raise(e, t);
        }),
        ($.readTmplToken = function () {
          for (var e = "", t = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
            var r = this.input.charCodeAt(this.pos);
            if (r === 96 || (r === 36 && this.input.charCodeAt(this.pos + 1) === 123))
              return this.pos === this.start &&
                (this.type === f.template || this.type === f.invalidTemplate)
                ? r === 36
                  ? ((this.pos += 2), this.finishToken(f.dollarBraceL))
                  : (++this.pos, this.finishToken(f.backQuote))
                : ((e += this.input.slice(t, this.pos)), this.finishToken(f.template, e));
            if (r === 92)
              (e += this.input.slice(t, this.pos)), (e += this.readEscapedChar(!0)), (t = this.pos);
            else if (Ke(r)) {
              switch (((e += this.input.slice(t, this.pos)), ++this.pos, r)) {
                case 13:
                  this.input.charCodeAt(this.pos) === 10 && ++this.pos;
                case 10:
                  e += `
`;
                  break;
                default:
                  e += String.fromCharCode(r);
                  break;
              }
              this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
                (t = this.pos);
            } else ++this.pos;
          }
        }),
        ($.readInvalidTemplateToken = function () {
          for (; this.pos < this.input.length; this.pos++)
            switch (this.input[this.pos]) {
              case "\\":
                ++this.pos;
                break;
              case "$":
                if (this.input[this.pos + 1] !== "{") break;
              case "`":
                return this.finishToken(f.invalidTemplate, this.input.slice(this.start, this.pos));
            }
          this.raise(this.start, "Unterminated template");
        }),
        ($.readEscapedChar = function (e) {
          var t = this.input.charCodeAt(++this.pos);
          switch ((++this.pos, t)) {
            case 110:
              return `
`;
            case 114:
              return "\r";
            case 120:
              return String.fromCharCode(this.readHexChar(2));
            case 117:
              return Ut(this.readCodePoint());
            case 116:
              return "	";
            case 98:
              return "\b";
            case 118:
              return "\v";
            case 102:
              return "\f";
            case 13:
              this.input.charCodeAt(this.pos) === 10 && ++this.pos;
            case 10:
              return this.options.locations && ((this.lineStart = this.pos), ++this.curLine), "";
            case 56:
            case 57:
              if (e) {
                var r = this.pos - 1;
                return (
                  this.invalidStringToken(r, "Invalid escape sequence in template string"), null
                );
              }
            default:
              if (t >= 48 && t <= 55) {
                var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                  s = parseInt(n, 8);
                return (
                  s > 255 && ((n = n.slice(0, -1)), (s = parseInt(n, 8))),
                  (this.pos += n.length - 1),
                  (t = this.input.charCodeAt(this.pos)),
                  (n !== "0" || t === 56 || t === 57) &&
                    (this.strict || e) &&
                    this.invalidStringToken(
                      this.pos - 1 - n.length,
                      e ? "Octal literal in template string" : "Octal literal in strict mode",
                    ),
                  String.fromCharCode(s)
                );
              }
              return Ke(t) ? "" : String.fromCharCode(t);
          }
        }),
        ($.readHexChar = function (e) {
          var t = this.pos,
            r = this.readInt(16, e);
          return r === null && this.invalidStringToken(t, "Bad character escape sequence"), r;
        }),
        ($.readWord1 = function () {
          this.containsEsc = !1;
          for (
            var e = "", t = !0, r = this.pos, n = this.options.ecmaVersion >= 6;
            this.pos < this.input.length;

          ) {
            var s = this.fullCharCodeAtPos();
            if (qe(s, n)) this.pos += s <= 65535 ? 1 : 2;
            else if (s === 92) {
              (this.containsEsc = !0), (e += this.input.slice(r, this.pos));
              var o = this.pos;
              this.input.charCodeAt(++this.pos) !== 117 &&
                this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"),
                ++this.pos;
              var u = this.readCodePoint();
              (t ? Te : qe)(u, n) || this.invalidStringToken(o, "Invalid Unicode escape"),
                (e += Ut(u)),
                (r = this.pos);
            } else break;
            t = !1;
          }
          return e + this.input.slice(r, this.pos);
        }),
        ($.readWord = function () {
          var e = this.readWord1(),
            t = f.name;
          return this.keywords.test(e) && (t = dt[e]), this.finishToken(t, e);
        }),
        (mr = "7.4.1"),
        (te.acorn = {
          Parser: te,
          version: mr,
          defaultOptions: mt,
          Position: Ue,
          SourceLocation: et,
          getLineInfo: lr,
          Node: ht,
          TokenType: Q,
          tokTypes: f,
          keywordTypes: dt,
          TokContext: ye,
          tokContexts: ie,
          isIdentifierChar: qe,
          isIdentifierStart: Te,
          Token: pt,
          isNewLine: Ke,
          lineBreak: De,
          lineBreakG: ze,
          nonASCIIwhitespace: Ot,
        });
    },
  }),
  ts = K({
    "../../node_modules/acorn-jsx/xhtml.js"(e, t) {
      t.exports = {
        quot: '"',
        amp: "&",
        apos: "'",
        lt: "<",
        gt: ">",
        nbsp: " ",
        iexcl: "¡",
        cent: "¢",
        pound: "£",
        curren: "¤",
        yen: "¥",
        brvbar: "¦",
        sect: "§",
        uml: "¨",
        copy: "©",
        ordf: "ª",
        laquo: "«",
        not: "¬",
        shy: "­",
        reg: "®",
        macr: "¯",
        deg: "°",
        plusmn: "±",
        sup2: "²",
        sup3: "³",
        acute: "´",
        micro: "µ",
        para: "¶",
        middot: "·",
        cedil: "¸",
        sup1: "¹",
        ordm: "º",
        raquo: "»",
        frac14: "¼",
        frac12: "½",
        frac34: "¾",
        iquest: "¿",
        Agrave: "À",
        Aacute: "Á",
        Acirc: "Â",
        Atilde: "Ã",
        Auml: "Ä",
        Aring: "Å",
        AElig: "Æ",
        Ccedil: "Ç",
        Egrave: "È",
        Eacute: "É",
        Ecirc: "Ê",
        Euml: "Ë",
        Igrave: "Ì",
        Iacute: "Í",
        Icirc: "Î",
        Iuml: "Ï",
        ETH: "Ð",
        Ntilde: "Ñ",
        Ograve: "Ò",
        Oacute: "Ó",
        Ocirc: "Ô",
        Otilde: "Õ",
        Ouml: "Ö",
        times: "×",
        Oslash: "Ø",
        Ugrave: "Ù",
        Uacute: "Ú",
        Ucirc: "Û",
        Uuml: "Ü",
        Yacute: "Ý",
        THORN: "Þ",
        szlig: "ß",
        agrave: "à",
        aacute: "á",
        acirc: "â",
        atilde: "ã",
        auml: "ä",
        aring: "å",
        aelig: "æ",
        ccedil: "ç",
        egrave: "è",
        eacute: "é",
        ecirc: "ê",
        euml: "ë",
        igrave: "ì",
        iacute: "í",
        icirc: "î",
        iuml: "ï",
        eth: "ð",
        ntilde: "ñ",
        ograve: "ò",
        oacute: "ó",
        ocirc: "ô",
        otilde: "õ",
        ouml: "ö",
        divide: "÷",
        oslash: "ø",
        ugrave: "ù",
        uacute: "ú",
        ucirc: "û",
        uuml: "ü",
        yacute: "ý",
        thorn: "þ",
        yuml: "ÿ",
        OElig: "Œ",
        oelig: "œ",
        Scaron: "Š",
        scaron: "š",
        Yuml: "Ÿ",
        fnof: "ƒ",
        circ: "ˆ",
        tilde: "˜",
        Alpha: "Α",
        Beta: "Β",
        Gamma: "Γ",
        Delta: "Δ",
        Epsilon: "Ε",
        Zeta: "Ζ",
        Eta: "Η",
        Theta: "Θ",
        Iota: "Ι",
        Kappa: "Κ",
        Lambda: "Λ",
        Mu: "Μ",
        Nu: "Ν",
        Xi: "Ξ",
        Omicron: "Ο",
        Pi: "Π",
        Rho: "Ρ",
        Sigma: "Σ",
        Tau: "Τ",
        Upsilon: "Υ",
        Phi: "Φ",
        Chi: "Χ",
        Psi: "Ψ",
        Omega: "Ω",
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ε",
        zeta: "ζ",
        eta: "η",
        theta: "θ",
        iota: "ι",
        kappa: "κ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        xi: "ξ",
        omicron: "ο",
        pi: "π",
        rho: "ρ",
        sigmaf: "ς",
        sigma: "σ",
        tau: "τ",
        upsilon: "υ",
        phi: "φ",
        chi: "χ",
        psi: "ψ",
        omega: "ω",
        thetasym: "ϑ",
        upsih: "ϒ",
        piv: "ϖ",
        ensp: " ",
        emsp: " ",
        thinsp: " ",
        zwnj: "‌",
        zwj: "‍",
        lrm: "‎",
        rlm: "‏",
        ndash: "–",
        mdash: "—",
        lsquo: "‘",
        rsquo: "’",
        sbquo: "‚",
        ldquo: "“",
        rdquo: "”",
        bdquo: "„",
        dagger: "†",
        Dagger: "‡",
        bull: "•",
        hellip: "…",
        permil: "‰",
        prime: "′",
        Prime: "″",
        lsaquo: "‹",
        rsaquo: "›",
        oline: "‾",
        frasl: "⁄",
        euro: "€",
        image: "ℑ",
        weierp: "℘",
        real: "ℜ",
        trade: "™",
        alefsym: "ℵ",
        larr: "←",
        uarr: "↑",
        rarr: "→",
        darr: "↓",
        harr: "↔",
        crarr: "↵",
        lArr: "⇐",
        uArr: "⇑",
        rArr: "⇒",
        dArr: "⇓",
        hArr: "⇔",
        forall: "∀",
        part: "∂",
        exist: "∃",
        empty: "∅",
        nabla: "∇",
        isin: "∈",
        notin: "∉",
        ni: "∋",
        prod: "∏",
        sum: "∑",
        minus: "−",
        lowast: "∗",
        radic: "√",
        prop: "∝",
        infin: "∞",
        ang: "∠",
        and: "∧",
        or: "∨",
        cap: "∩",
        cup: "∪",
        int: "∫",
        there4: "∴",
        sim: "∼",
        cong: "≅",
        asymp: "≈",
        ne: "≠",
        equiv: "≡",
        le: "≤",
        ge: "≥",
        sub: "⊂",
        sup: "⊃",
        nsub: "⊄",
        sube: "⊆",
        supe: "⊇",
        oplus: "⊕",
        otimes: "⊗",
        perp: "⊥",
        sdot: "⋅",
        lceil: "⌈",
        rceil: "⌉",
        lfloor: "⌊",
        rfloor: "⌋",
        lang: "〈",
        rang: "〉",
        loz: "◊",
        spades: "♠",
        clubs: "♣",
        hearts: "♥",
        diams: "♦",
      };
    },
  }),
  rs = K({
    "../../node_modules/acorn-jsx/index.js"(e, t) {
      var r = ts(),
        n = /^[\da-fA-F]+$/,
        s = /^\d+$/,
        o = new WeakMap();
      function u(m) {
        m = m.Parser.acorn || m;
        let g = o.get(m);
        if (!g) {
          let F = m.tokTypes,
            A = m.TokContext,
            C = m.TokenType,
            D = new A("<tag", !1),
            E = new A("</tag", !1),
            w = new A("<tag>...</tag>", !0, !0),
            b = { tc_oTag: D, tc_cTag: E, tc_expr: w },
            S = {
              jsxName: new C("jsxName"),
              jsxText: new C("jsxText", { beforeExpr: !0 }),
              jsxTagStart: new C("jsxTagStart", { startsExpr: !0 }),
              jsxTagEnd: new C("jsxTagEnd"),
            };
          (S.jsxTagStart.updateContext = function () {
            this.context.push(w), this.context.push(D), (this.exprAllowed = !1);
          }),
            (S.jsxTagEnd.updateContext = function (L) {
              let _ = this.context.pop();
              (_ === D && L === F.slash) || _ === E
                ? (this.context.pop(), (this.exprAllowed = this.curContext() === w))
                : (this.exprAllowed = !0);
            }),
            (g = { tokContexts: b, tokTypes: S }),
            o.set(m, g);
        }
        return g;
      }
      function h(m) {
        if (!m) return m;
        if (m.type === "JSXIdentifier") return m.name;
        if (m.type === "JSXNamespacedName") return m.namespace.name + ":" + m.name.name;
        if (m.type === "JSXMemberExpression") return h(m.object) + "." + h(m.property);
      }
      (t.exports = function (m) {
        return (
          (m = m || {}),
          function (g) {
            return p(
              {
                allowNamespaces: m.allowNamespaces !== !1,
                allowNamespacedObjects: !!m.allowNamespacedObjects,
              },
              g,
            );
          }
        );
      }),
        Object.defineProperty(t.exports, "tokTypes", {
          get: function () {
            return u((gr(), Mr(ar))).tokTypes;
          },
          configurable: !0,
          enumerable: !0,
        });
      function p(m, g) {
        let F = g.acorn || (gr(), Mr(ar)),
          A = u(F),
          C = F.tokTypes,
          D = A.tokTypes,
          E = F.tokContexts,
          w = A.tokContexts.tc_oTag,
          b = A.tokContexts.tc_cTag,
          S = A.tokContexts.tc_expr,
          L = F.isNewLine,
          _ = F.isIdentifierStart,
          x = F.isIdentifierChar;
        return class extends g {
          static get acornJsx() {
            return A;
          }
          jsx_readToken() {
            let y = "",
              v = this.pos;
            for (;;) {
              this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
              let B = this.input.charCodeAt(this.pos);
              switch (B) {
                case 60:
                case 123:
                  return this.pos === this.start
                    ? B === 60 && this.exprAllowed
                      ? (++this.pos, this.finishToken(D.jsxTagStart))
                      : this.getTokenFromCode(B)
                    : ((y += this.input.slice(v, this.pos)), this.finishToken(D.jsxText, y));
                case 38:
                  (y += this.input.slice(v, this.pos)),
                    (y += this.jsx_readEntity()),
                    (v = this.pos);
                  break;
                case 62:
                case 125:
                  this.raise(
                    this.pos,
                    "Unexpected token `" +
                      this.input[this.pos] +
                      "`. Did you mean `" +
                      (B === 62 ? "&gt;" : "&rbrace;") +
                      '` or `{"' +
                      this.input[this.pos] +
                      '"}`?',
                  );
                default:
                  L(B)
                    ? ((y += this.input.slice(v, this.pos)),
                      (y += this.jsx_readNewLine(!0)),
                      (v = this.pos))
                    : ++this.pos;
              }
            }
          }
          jsx_readNewLine(y) {
            let v = this.input.charCodeAt(this.pos),
              B;
            return (
              ++this.pos,
              v === 13 && this.input.charCodeAt(this.pos) === 10
                ? (++this.pos,
                  (B = y
                    ? `
`
                    : `\r
`))
                : (B = String.fromCharCode(v)),
              this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
              B
            );
          }
          jsx_readString(y) {
            let v = "",
              B = ++this.pos;
            for (;;) {
              this.pos >= this.input.length &&
                this.raise(this.start, "Unterminated string constant");
              let P = this.input.charCodeAt(this.pos);
              if (P === y) break;
              P === 38
                ? ((v += this.input.slice(B, this.pos)),
                  (v += this.jsx_readEntity()),
                  (B = this.pos))
                : L(P)
                  ? ((v += this.input.slice(B, this.pos)),
                    (v += this.jsx_readNewLine(!1)),
                    (B = this.pos))
                  : ++this.pos;
            }
            return (v += this.input.slice(B, this.pos++)), this.finishToken(C.string, v);
          }
          jsx_readEntity() {
            let y = "",
              v = 0,
              B,
              P = this.input[this.pos];
            P !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
            let j = ++this.pos;
            for (; this.pos < this.input.length && v++ < 10; ) {
              if (((P = this.input[this.pos++]), P === ";")) {
                y[0] === "#"
                  ? y[1] === "x"
                    ? ((y = y.substr(2)), n.test(y) && (B = String.fromCharCode(parseInt(y, 16))))
                    : ((y = y.substr(1)), s.test(y) && (B = String.fromCharCode(parseInt(y, 10))))
                  : (B = r[y]);
                break;
              }
              y += P;
            }
            return B || ((this.pos = j), "&");
          }
          jsx_readWord() {
            let y,
              v = this.pos;
            do y = this.input.charCodeAt(++this.pos);
            while (x(y) || y === 45);
            return this.finishToken(D.jsxName, this.input.slice(v, this.pos));
          }
          jsx_parseIdentifier() {
            let y = this.startNode();
            return (
              this.type === D.jsxName
                ? (y.name = this.value)
                : this.type.keyword
                  ? (y.name = this.type.keyword)
                  : this.unexpected(),
              this.next(),
              this.finishNode(y, "JSXIdentifier")
            );
          }
          jsx_parseNamespacedName() {
            let y = this.start,
              v = this.startLoc,
              B = this.jsx_parseIdentifier();
            if (!m.allowNamespaces || !this.eat(C.colon)) return B;
            var P = this.startNodeAt(y, v);
            return (
              (P.namespace = B),
              (P.name = this.jsx_parseIdentifier()),
              this.finishNode(P, "JSXNamespacedName")
            );
          }
          jsx_parseElementName() {
            if (this.type === D.jsxTagEnd) return "";
            let y = this.start,
              v = this.startLoc,
              B = this.jsx_parseNamespacedName();
            for (
              this.type === C.dot &&
              B.type === "JSXNamespacedName" &&
              !m.allowNamespacedObjects &&
              this.unexpected();
              this.eat(C.dot);

            ) {
              let P = this.startNodeAt(y, v);
              (P.object = B),
                (P.property = this.jsx_parseIdentifier()),
                (B = this.finishNode(P, "JSXMemberExpression"));
            }
            return B;
          }
          jsx_parseAttributeValue() {
            switch (this.type) {
              case C.braceL:
                let y = this.jsx_parseExpressionContainer();
                return (
                  y.expression.type === "JSXEmptyExpression" &&
                    this.raise(
                      y.start,
                      "JSX attributes must only be assigned a non-empty expression",
                    ),
                  y
                );
              case D.jsxTagStart:
              case C.string:
                return this.parseExprAtom();
              default:
                this.raise(
                  this.start,
                  "JSX value should be either an expression or a quoted JSX text",
                );
            }
          }
          jsx_parseEmptyExpression() {
            let y = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
            return this.finishNodeAt(y, "JSXEmptyExpression", this.start, this.startLoc);
          }
          jsx_parseExpressionContainer() {
            let y = this.startNode();
            return (
              this.next(),
              (y.expression =
                this.type === C.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression()),
              this.expect(C.braceR),
              this.finishNode(y, "JSXExpressionContainer")
            );
          }
          jsx_parseAttribute() {
            let y = this.startNode();
            return this.eat(C.braceL)
              ? (this.expect(C.ellipsis),
                (y.argument = this.parseMaybeAssign()),
                this.expect(C.braceR),
                this.finishNode(y, "JSXSpreadAttribute"))
              : ((y.name = this.jsx_parseNamespacedName()),
                (y.value = this.eat(C.eq) ? this.jsx_parseAttributeValue() : null),
                this.finishNode(y, "JSXAttribute"));
          }
          jsx_parseOpeningElementAt(y, v) {
            let B = this.startNodeAt(y, v);
            B.attributes = [];
            let P = this.jsx_parseElementName();
            for (P && (B.name = P); this.type !== C.slash && this.type !== D.jsxTagEnd; )
              B.attributes.push(this.jsx_parseAttribute());
            return (
              (B.selfClosing = this.eat(C.slash)),
              this.expect(D.jsxTagEnd),
              this.finishNode(B, P ? "JSXOpeningElement" : "JSXOpeningFragment")
            );
          }
          jsx_parseClosingElementAt(y, v) {
            let B = this.startNodeAt(y, v),
              P = this.jsx_parseElementName();
            return (
              P && (B.name = P),
              this.expect(D.jsxTagEnd),
              this.finishNode(B, P ? "JSXClosingElement" : "JSXClosingFragment")
            );
          }
          jsx_parseElementAt(y, v) {
            let B = this.startNodeAt(y, v),
              P = [],
              j = this.jsx_parseOpeningElementAt(y, v),
              M = null;
            if (!j.selfClosing) {
              e: for (;;)
                switch (this.type) {
                  case D.jsxTagStart:
                    if (((y = this.start), (v = this.startLoc), this.next(), this.eat(C.slash))) {
                      M = this.jsx_parseClosingElementAt(y, v);
                      break e;
                    }
                    P.push(this.jsx_parseElementAt(y, v));
                    break;
                  case D.jsxText:
                    P.push(this.parseExprAtom());
                    break;
                  case C.braceL:
                    P.push(this.jsx_parseExpressionContainer());
                    break;
                  default:
                    this.unexpected();
                }
              h(M.name) !== h(j.name) &&
                this.raise(
                  M.start,
                  "Expected corresponding JSX closing tag for <" + h(j.name) + ">",
                );
            }
            let V = j.name ? "Element" : "Fragment";
            return (
              (B["opening" + V] = j),
              (B["closing" + V] = M),
              (B.children = P),
              this.type === C.relational &&
                this.value === "<" &&
                this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"),
              this.finishNode(B, "JSX" + V)
            );
          }
          jsx_parseText() {
            let y = this.parseLiteral(this.value);
            return (y.type = "JSXText"), y;
          }
          jsx_parseElement() {
            let y = this.start,
              v = this.startLoc;
            return this.next(), this.jsx_parseElementAt(y, v);
          }
          parseExprAtom(y) {
            return this.type === D.jsxText
              ? this.jsx_parseText()
              : this.type === D.jsxTagStart
                ? this.jsx_parseElement()
                : super.parseExprAtom(y);
          }
          readToken(y) {
            let v = this.curContext();
            if (v === S) return this.jsx_readToken();
            if (v === w || v === b) {
              if (_(y)) return this.jsx_readWord();
              if (y == 62) return ++this.pos, this.finishToken(D.jsxTagEnd);
              if ((y === 34 || y === 39) && v == w) return this.jsx_readString(y);
            }
            return y === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33
              ? (++this.pos, this.finishToken(D.jsxTagStart))
              : super.readToken(y);
          }
          updateContext(y) {
            if (this.type == C.braceL) {
              var v = this.curContext();
              v == w
                ? this.context.push(E.b_expr)
                : v == S
                  ? this.context.push(E.b_tmpl)
                  : super.updateContext(y),
                (this.exprAllowed = !0);
            } else if (this.type === C.slash && y === D.jsxTagStart)
              (this.context.length -= 2), this.context.push(b), (this.exprAllowed = !1);
            else return super.updateContext(y);
          }
        };
      }
    },
  }),
  ns = K({
    "../../node_modules/@base2/pretty-print-object/dist/index.js"(e) {
      var t =
          (e && e.__assign) ||
          function () {
            return (
              (t =
                Object.assign ||
                function (p) {
                  for (var m, g = 1, F = arguments.length; g < F; g++) {
                    m = arguments[g];
                    for (var A in m) Object.prototype.hasOwnProperty.call(m, A) && (p[A] = m[A]);
                  }
                  return p;
                }),
              t.apply(this, arguments)
            );
          },
        r =
          (e && e.__spreadArrays) ||
          function () {
            for (var p = 0, m = 0, g = arguments.length; m < g; m++) p += arguments[m].length;
            for (var F = Array(p), A = 0, m = 0; m < g; m++)
              for (var C = arguments[m], D = 0, E = C.length; D < E; D++, A++) F[A] = C[D];
            return F;
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = [];
      function s(p) {
        var m = typeof p;
        return p !== null && (m === "object" || m === "function");
      }
      function o(p) {
        return Object.prototype.toString.call(p) === "[object RegExp]";
      }
      function u(p) {
        return Object.getOwnPropertySymbols(p).filter(function (m) {
          return Object.prototype.propertyIsEnumerable.call(p, m);
        });
      }
      function h(p, m, g) {
        g === void 0 && (g = "");
        var F = { indent: "	", singleQuotes: !0 },
          A = t(t({}, F), m),
          C;
        A.inlineCharacterLimit === void 0
          ? (C = {
              newLine: `
`,
              newLineOrSpace: `
`,
              pad: g,
              indent: g + A.indent,
            })
          : (C = {
              newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
              newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
              pad: "@@__PRETTY_PRINT_PAD__@@",
              indent: "@@__PRETTY_PRINT_INDENT__@@",
            });
        var D = function (b) {
          if (A.inlineCharacterLimit === void 0) return b;
          var S = b
            .replace(new RegExp(C.newLine, "g"), "")
            .replace(new RegExp(C.newLineOrSpace, "g"), " ")
            .replace(new RegExp(C.pad + "|" + C.indent, "g"), "");
          return S.length <= A.inlineCharacterLimit
            ? S
            : b
                .replace(
                  new RegExp(C.newLine + "|" + C.newLineOrSpace, "g"),
                  `
`,
                )
                .replace(new RegExp(C.pad, "g"), g)
                .replace(new RegExp(C.indent, "g"), g + A.indent);
        };
        if (n.indexOf(p) !== -1) return '"[Circular]"';
        if (
          p == null ||
          typeof p == "number" ||
          typeof p == "boolean" ||
          typeof p == "function" ||
          typeof p == "symbol" ||
          o(p)
        )
          return String(p);
        if (p instanceof Date) return "new Date('" + p.toISOString() + "')";
        if (Array.isArray(p)) {
          if (p.length === 0) return "[]";
          n.push(p);
          var E =
            "[" +
            C.newLine +
            p
              .map(function (b, S) {
                var L = p.length - 1 === S ? C.newLine : "," + C.newLineOrSpace,
                  _ = h(b, A, g + A.indent);
                return A.transform && (_ = A.transform(p, S, _)), C.indent + _ + L;
              })
              .join("") +
            C.pad +
            "]";
          return n.pop(), D(E);
        }
        if (s(p)) {
          var w = r(Object.keys(p), u(p));
          if (
            (A.filter &&
              (w = w.filter(function (S) {
                return A.filter && A.filter(p, S);
              })),
            w.length === 0)
          )
            return "{}";
          n.push(p);
          var E =
            "{" +
            C.newLine +
            w
              .map(function (S, L) {
                var _ = w.length - 1 === L ? C.newLine : "," + C.newLineOrSpace,
                  x = typeof S == "symbol",
                  y = !x && /^[a-z$_][a-z$_0-9]*$/i.test(S.toString()),
                  v = x || y ? S : h(S, A),
                  B = h(p[S], A, g + A.indent);
                return (
                  A.transform && (B = A.transform(p, S, B)), C.indent + String(v) + ": " + B + _
                );
              })
              .join("") +
            C.pad +
            "}";
          return n.pop(), D(E);
        }
        return (
          (p = String(p).replace(/[\r\n]/g, function (b) {
            return b ===
              `
`
              ? "\\n"
              : "\\r";
          })),
          A.singleQuotes
            ? ((p = p.replace(/\\?'/g, "\\'")), "'" + p + "'")
            : ((p = p.replace(/"/g, '\\"')), '"' + p + '"')
        );
      }
      e.prettyPrint = h;
    },
  }),
  is = K({
    "../../node_modules/react-element-to-jsx-string/node_modules/react-is/cjs/react-is.production.min.js"(
      e,
    ) {
      var t = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        n = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        o = Symbol.for("react.profiler"),
        u = Symbol.for("react.provider"),
        h = Symbol.for("react.context"),
        p = Symbol.for("react.server_context"),
        m = Symbol.for("react.forward_ref"),
        g = Symbol.for("react.suspense"),
        F = Symbol.for("react.suspense_list"),
        A = Symbol.for("react.memo"),
        C = Symbol.for("react.lazy"),
        D = Symbol.for("react.offscreen"),
        E;
      E = Symbol.for("react.module.reference");
      function w(b) {
        if (typeof b == "object" && b !== null) {
          var S = b.$$typeof;
          switch (S) {
            case t:
              switch (((b = b.type), b)) {
                case n:
                case o:
                case s:
                case g:
                case F:
                  return b;
                default:
                  switch (((b = b && b.$$typeof), b)) {
                    case p:
                    case h:
                    case m:
                    case C:
                    case A:
                    case u:
                      return b;
                    default:
                      return S;
                  }
              }
            case r:
              return S;
          }
        }
      }
      (e.ContextConsumer = h),
        (e.ContextProvider = u),
        (e.Element = t),
        (e.ForwardRef = m),
        (e.Fragment = n),
        (e.Lazy = C),
        (e.Memo = A),
        (e.Portal = r),
        (e.Profiler = o),
        (e.StrictMode = s),
        (e.Suspense = g),
        (e.SuspenseList = F),
        (e.isAsyncMode = function () {
          return !1;
        }),
        (e.isConcurrentMode = function () {
          return !1;
        }),
        (e.isContextConsumer = function (b) {
          return w(b) === h;
        }),
        (e.isContextProvider = function (b) {
          return w(b) === u;
        }),
        (e.isElement = function (b) {
          return typeof b == "object" && b !== null && b.$$typeof === t;
        }),
        (e.isForwardRef = function (b) {
          return w(b) === m;
        }),
        (e.isFragment = function (b) {
          return w(b) === n;
        }),
        (e.isLazy = function (b) {
          return w(b) === C;
        }),
        (e.isMemo = function (b) {
          return w(b) === A;
        }),
        (e.isPortal = function (b) {
          return w(b) === r;
        }),
        (e.isProfiler = function (b) {
          return w(b) === o;
        }),
        (e.isStrictMode = function (b) {
          return w(b) === s;
        }),
        (e.isSuspense = function (b) {
          return w(b) === g;
        }),
        (e.isSuspenseList = function (b) {
          return w(b) === F;
        }),
        (e.isValidElementType = function (b) {
          return (
            typeof b == "string" ||
            typeof b == "function" ||
            b === n ||
            b === o ||
            b === s ||
            b === g ||
            b === F ||
            b === D ||
            (typeof b == "object" &&
              b !== null &&
              (b.$$typeof === C ||
                b.$$typeof === A ||
                b.$$typeof === u ||
                b.$$typeof === h ||
                b.$$typeof === m ||
                b.$$typeof === E ||
                b.getModuleId !== void 0))
          );
        }),
        (e.typeOf = w);
    },
  }),
  ss = K({
    "../../node_modules/react-element-to-jsx-string/node_modules/react-is/index.js"(e, t) {
      t.exports = is();
    },
  }),
  us = {};
yn(us, {
  applyDecorators: () => ta,
  argTypesEnhancers: () => ia,
  decorators: () => na,
  parameters: () => ra,
});
var un = nt(Bi()),
  Dr = "custom",
  Ct = "object",
  vr = "array",
  as = "class",
  tt = "func",
  it = "element",
  os = nt(ki());
function _r(e) {
  return os.default.includes(e.toLowerCase());
}
var ls = nt(Wi());
function cs(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var s = n.reduce(function (h, p) {
    var m = p.match(/\n([\t ]+|(?!\s).)/g);
    return m
      ? h.concat(
          m.map(function (g) {
            var F, A;
            return (A = (F = g.match(/[\t ]/g)) === null || F === void 0 ? void 0 : F.length) !==
              null && A !== void 0
              ? A
              : 0;
          }),
        )
      : h;
  }, []);
  if (s.length) {
    var o = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, s) +
        "}",
      "g",
    );
    n = n.map(function (h) {
      return h.replace(
        o,
        `
`,
      );
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var u = n[0];
  return (
    t.forEach(function (h, p) {
      var m = u.match(/(?:^|\n)( *)$/),
        g = m ? m[1] : "",
        F = h;
      typeof h == "string" &&
        h.includes(`
`) &&
        (F = String(h)
          .split(
            `
`,
          )
          .map(function (A, C) {
            return C === 0 ? A : "" + g + A;
          }).join(`
`)),
        (u += F + n[p + 1]);
    }),
    u
  );
}
var Nn = { format: { indent: { style: "  " }, semicolons: !1 } },
  hs = { ...Nn, format: { newline: "" } },
  ps = { ...Nn };
function Le(e, t = !1) {
  return (0, ls.generate)(e, t ? hs : ps);
}
function Ar(e, t = !1) {
  return t ? fs(e) : Le(e);
}
function fs(e) {
  let t = Le(e, !0);
  return t.endsWith(" }") || (t = `${t.slice(0, -1)} }`), t;
}
function an(e, t = !1) {
  return t ? ms(e) : ds(e);
}
function ds(e) {
  let t = Le(e);
  return t.endsWith("  }]") && (t = cs(t)), t;
}
function ms(e) {
  let t = Le(e, !0);
  return t.startsWith("[    ") && (t = t.replace("[    ", "[")), t;
}
var Ln = e => e.$$typeof === Symbol.for("react.memo"),
  gs = e => e.$$typeof === Symbol.for("react.forward_ref");
gr();
var Ds = nt(rs());
function On(e, t, r, n, s) {
  r || (r = N),
    (function o(u, h, p) {
      var m = p || u.type,
        g = t[m];
      r[m](u, h, o), g && g(u, h);
    })(e, n, s);
}
function As(e, t, r, n, s) {
  var o = [];
  r || (r = N),
    (function u(h, p, m) {
      var g = m || h.type,
        F = t[g],
        A = h !== o[o.length - 1];
      A && o.push(h), r[g](h, p, u), F && F(h, p || o, o), A && o.pop();
    })(e, n, s);
}
function Sr(e, t, r) {
  r(e, t);
}
function $e(e, t, r) {}
var N = {};
N.Program = N.BlockStatement = function (e, t, r) {
  for (var n = 0, s = e.body; n < s.length; n += 1) {
    var o = s[n];
    r(o, t, "Statement");
  }
};
N.Statement = Sr;
N.EmptyStatement = $e;
N.ExpressionStatement =
  N.ParenthesizedExpression =
  N.ChainExpression =
    function (e, t, r) {
      return r(e.expression, t, "Expression");
    };
N.IfStatement = function (e, t, r) {
  r(e.test, t, "Expression"),
    r(e.consequent, t, "Statement"),
    e.alternate && r(e.alternate, t, "Statement");
};
N.LabeledStatement = function (e, t, r) {
  return r(e.body, t, "Statement");
};
N.BreakStatement = N.ContinueStatement = $e;
N.WithStatement = function (e, t, r) {
  r(e.object, t, "Expression"), r(e.body, t, "Statement");
};
N.SwitchStatement = function (e, t, r) {
  r(e.discriminant, t, "Expression");
  for (var n = 0, s = e.cases; n < s.length; n += 1) {
    var o = s[n];
    o.test && r(o.test, t, "Expression");
    for (var u = 0, h = o.consequent; u < h.length; u += 1) {
      var p = h[u];
      r(p, t, "Statement");
    }
  }
};
N.SwitchCase = function (e, t, r) {
  e.test && r(e.test, t, "Expression");
  for (var n = 0, s = e.consequent; n < s.length; n += 1) {
    var o = s[n];
    r(o, t, "Statement");
  }
};
N.ReturnStatement =
  N.YieldExpression =
  N.AwaitExpression =
    function (e, t, r) {
      e.argument && r(e.argument, t, "Expression");
    };
N.ThrowStatement = N.SpreadElement = function (e, t, r) {
  return r(e.argument, t, "Expression");
};
N.TryStatement = function (e, t, r) {
  r(e.block, t, "Statement"),
    e.handler && r(e.handler, t),
    e.finalizer && r(e.finalizer, t, "Statement");
};
N.CatchClause = function (e, t, r) {
  e.param && r(e.param, t, "Pattern"), r(e.body, t, "Statement");
};
N.WhileStatement = N.DoWhileStatement = function (e, t, r) {
  r(e.test, t, "Expression"), r(e.body, t, "Statement");
};
N.ForStatement = function (e, t, r) {
  e.init && r(e.init, t, "ForInit"),
    e.test && r(e.test, t, "Expression"),
    e.update && r(e.update, t, "Expression"),
    r(e.body, t, "Statement");
};
N.ForInStatement = N.ForOfStatement = function (e, t, r) {
  r(e.left, t, "ForInit"), r(e.right, t, "Expression"), r(e.body, t, "Statement");
};
N.ForInit = function (e, t, r) {
  e.type === "VariableDeclaration" ? r(e, t) : r(e, t, "Expression");
};
N.DebuggerStatement = $e;
N.FunctionDeclaration = function (e, t, r) {
  return r(e, t, "Function");
};
N.VariableDeclaration = function (e, t, r) {
  for (var n = 0, s = e.declarations; n < s.length; n += 1) {
    var o = s[n];
    r(o, t);
  }
};
N.VariableDeclarator = function (e, t, r) {
  r(e.id, t, "Pattern"), e.init && r(e.init, t, "Expression");
};
N.Function = function (e, t, r) {
  e.id && r(e.id, t, "Pattern");
  for (var n = 0, s = e.params; n < s.length; n += 1) {
    var o = s[n];
    r(o, t, "Pattern");
  }
  r(e.body, t, e.expression ? "Expression" : "Statement");
};
N.Pattern = function (e, t, r) {
  e.type === "Identifier"
    ? r(e, t, "VariablePattern")
    : e.type === "MemberExpression"
      ? r(e, t, "MemberPattern")
      : r(e, t);
};
N.VariablePattern = $e;
N.MemberPattern = Sr;
N.RestElement = function (e, t, r) {
  return r(e.argument, t, "Pattern");
};
N.ArrayPattern = function (e, t, r) {
  for (var n = 0, s = e.elements; n < s.length; n += 1) {
    var o = s[n];
    o && r(o, t, "Pattern");
  }
};
N.ObjectPattern = function (e, t, r) {
  for (var n = 0, s = e.properties; n < s.length; n += 1) {
    var o = s[n];
    o.type === "Property"
      ? (o.computed && r(o.key, t, "Expression"), r(o.value, t, "Pattern"))
      : o.type === "RestElement" && r(o.argument, t, "Pattern");
  }
};
N.Expression = Sr;
N.ThisExpression = N.Super = N.MetaProperty = $e;
N.ArrayExpression = function (e, t, r) {
  for (var n = 0, s = e.elements; n < s.length; n += 1) {
    var o = s[n];
    o && r(o, t, "Expression");
  }
};
N.ObjectExpression = function (e, t, r) {
  for (var n = 0, s = e.properties; n < s.length; n += 1) {
    var o = s[n];
    r(o, t);
  }
};
N.FunctionExpression = N.ArrowFunctionExpression = N.FunctionDeclaration;
N.SequenceExpression = function (e, t, r) {
  for (var n = 0, s = e.expressions; n < s.length; n += 1) {
    var o = s[n];
    r(o, t, "Expression");
  }
};
N.TemplateLiteral = function (e, t, r) {
  for (var n = 0, s = e.quasis; n < s.length; n += 1) {
    var o = s[n];
    r(o, t);
  }
  for (var u = 0, h = e.expressions; u < h.length; u += 1) {
    var p = h[u];
    r(p, t, "Expression");
  }
};
N.TemplateElement = $e;
N.UnaryExpression = N.UpdateExpression = function (e, t, r) {
  r(e.argument, t, "Expression");
};
N.BinaryExpression = N.LogicalExpression = function (e, t, r) {
  r(e.left, t, "Expression"), r(e.right, t, "Expression");
};
N.AssignmentExpression = N.AssignmentPattern = function (e, t, r) {
  r(e.left, t, "Pattern"), r(e.right, t, "Expression");
};
N.ConditionalExpression = function (e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Expression"), r(e.alternate, t, "Expression");
};
N.NewExpression = N.CallExpression = function (e, t, r) {
  if ((r(e.callee, t, "Expression"), e.arguments))
    for (var n = 0, s = e.arguments; n < s.length; n += 1) {
      var o = s[n];
      r(o, t, "Expression");
    }
};
N.MemberExpression = function (e, t, r) {
  r(e.object, t, "Expression"), e.computed && r(e.property, t, "Expression");
};
N.ExportNamedDeclaration = N.ExportDefaultDeclaration = function (e, t, r) {
  e.declaration &&
    r(
      e.declaration,
      t,
      e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression",
    ),
    e.source && r(e.source, t, "Expression");
};
N.ExportAllDeclaration = function (e, t, r) {
  e.exported && r(e.exported, t), r(e.source, t, "Expression");
};
N.ImportDeclaration = function (e, t, r) {
  for (var n = 0, s = e.specifiers; n < s.length; n += 1) {
    var o = s[n];
    r(o, t);
  }
  r(e.source, t, "Expression");
};
N.ImportExpression = function (e, t, r) {
  r(e.source, t, "Expression");
};
N.ImportSpecifier =
  N.ImportDefaultSpecifier =
  N.ImportNamespaceSpecifier =
  N.Identifier =
  N.Literal =
    $e;
N.TaggedTemplateExpression = function (e, t, r) {
  r(e.tag, t, "Expression"), r(e.quasi, t, "Expression");
};
N.ClassDeclaration = N.ClassExpression = function (e, t, r) {
  return r(e, t, "Class");
};
N.Class = function (e, t, r) {
  e.id && r(e.id, t, "Pattern"), e.superClass && r(e.superClass, t, "Expression"), r(e.body, t);
};
N.ClassBody = function (e, t, r) {
  for (var n = 0, s = e.body; n < s.length; n += 1) {
    var o = s[n];
    r(o, t);
  }
};
N.MethodDefinition = N.Property = function (e, t, r) {
  e.computed && r(e.key, t, "Expression"), r(e.value, t, "Expression");
};
var br = { ...N, JSXElement: () => {} },
  Cs = te.extend((0, Ds.default)());
function Et(e) {
  return e != null ? e.name : null;
}
function on(e) {
  return e.filter(t => t.type === "ObjectExpression" || t.type === "ArrayExpression");
}
function Rn(e) {
  let t = [];
  return (
    As(
      e,
      {
        ObjectExpression(r, n) {
          t.push(on(n).length);
        },
        ArrayExpression(r, n) {
          t.push(on(n).length);
        },
      },
      br,
    ),
    Math.max(...t)
  );
}
function Es(e) {
  return { inferredType: { type: "Identifier", identifier: Et(e) }, ast: e };
}
function ys(e) {
  return { inferredType: { type: "Literal" }, ast: e };
}
function Fs(e) {
  let t;
  On(
    e.body,
    {
      JSXElement(s) {
        t = s;
      },
    },
    br,
  );
  let r = {
      type: t != null ? "Element" : "Function",
      params: e.params,
      hasParams: e.params.length !== 0,
    },
    n = Et(e.id);
  return n != null && (r.identifier = n), { inferredType: r, ast: e };
}
function xs(e) {
  let t;
  return (
    On(
      e.body,
      {
        JSXElement(r) {
          t = r;
        },
      },
      br,
    ),
    { inferredType: { type: t != null ? "Element" : "Class", identifier: Et(e.id) }, ast: e }
  );
}
function vs(e) {
  let t = { type: "Element" },
    r = Et(e.openingElement.name);
  return r != null && (t.identifier = r), { inferredType: t, ast: e };
}
function _s(e) {
  let t = e.callee.type === "MemberExpression" ? e.callee.property : e.callee;
  return Et(t) === "shape" ? jn(e.arguments[0]) : null;
}
function jn(e) {
  return { inferredType: { type: "Object", depth: Rn(e) }, ast: e };
}
function Ss(e) {
  return { inferredType: { type: "Array", depth: Rn(e) }, ast: e };
}
function bs(e) {
  switch (e.type) {
    case "Identifier":
      return Es(e);
    case "Literal":
      return ys(e);
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return Fs(e);
    case "ClassExpression":
      return xs(e);
    case "JSXElement":
      return vs(e);
    case "CallExpression":
      return _s(e);
    case "ObjectExpression":
      return jn(e);
    case "ArrayExpression":
      return Ss(e);
    default:
      return null;
  }
}
function Bs(e) {
  let t = Cs.parse(`(${e})`, { ecmaVersion: 2020 }),
    r = { inferredType: { type: "Unknown" }, ast: t };
  if (t.body[0] != null) {
    let n = t.body[0];
    switch (n.type) {
      case "ExpressionStatement": {
        let s = bs(n.expression);
        s != null && (r = s);
        break;
      }
    }
  }
  return r;
}
function Oe(e) {
  try {
    return { ...Bs(e) };
  } catch {}
  return { inferredType: { type: "Unknown" } };
}
function Mn({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r <= 2) {
    let n = an(t, !0);
    if (!Dt(n)) return ee(n);
  }
  return ee(vr, an(t));
}
function Vn({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r === 1) {
    let n = Ar(t, !0);
    if (!Dt(n)) return ee(n);
  }
  return ee(Ct, Ar(t));
}
function Br(e, t) {
  return t ? `${e}( ... )` : `${e}()`;
}
function jt(e) {
  return `<${e} />`;
}
function qn(e) {
  let { type: t, identifier: r } = e;
  switch (t) {
    case "Function":
      return Br(r, e.hasParams);
    case "Element":
      return jt(r);
    default:
      return r;
  }
}
function ws({ inferredType: e, ast: t }) {
  let { identifier: r } = e;
  if (r != null) return ee(qn(e), Le(t));
  let n = Le(t, !0);
  return Dt(n) ? ee(tt, Le(t)) : ee(n);
}
function ks(e, t) {
  let { inferredType: r } = t,
    { identifier: n } = r;
  if (n != null && !_r(n)) {
    let s = qn(r);
    return ee(s, e);
  }
  return Dt(e) ? ee(it, e) : ee(e);
}
function Un(e) {
  try {
    let t = Oe(e);
    switch (t.inferredType.type) {
      case "Object":
        return Vn(t);
      case "Function":
        return ws(t);
      case "Element":
        return ks(e, t);
      case "Array":
        return Mn(t);
      default:
        return null;
    }
  } catch (t) {
    console.error(t);
  }
  return null;
}
function ln(e) {
  return typeof e == "function";
}
function Is(e) {
  return typeof e == "string" || e instanceof String;
}
function Ts(e) {
  var r;
  if (typeof e != "object" || e == null) return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  if (Object.prototype.toString.call(e) !== "[object Object]") {
    let n = e[Symbol.toStringTag];
    return n == null ||
      !((r = Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)) != null && r.writable)
      ? !1
      : e.toString() === `[object ${n}]`;
  }
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function cn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ps(e) {
  var t, r;
  return cn(e) === !1
    ? !1
    : ((t = e.constructor),
      t === void 0
        ? !0
        : ((r = t.prototype), !(cn(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var Ns = nt(ns()),
  Be = nt(ss()),
  Pe = function (e, t) {
    return e === 0 ? "" : new Array(e * t).fill(" ").join("");
  };
function gt(e) {
  "@babel/helpers - typeof";
  return (
    (gt =
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
    gt(e)
  );
}
function Ls(e) {
  return Os(e) || Rs(e) || js(e) || Ms();
}
function Os(e) {
  if (Array.isArray(e)) return Cr(e);
}
function Rs(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function js(e, t) {
  if (e) {
    if (typeof e == "string") return Cr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cr(e, t);
  }
}
function Cr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ms() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Er(e, t) {
  return e === null ||
    gt(e) !== "object" ||
    e instanceof Date ||
    e instanceof RegExp ||
    Ge.isValidElement(e)
    ? e
    : (t.add(e),
      Array.isArray(e)
        ? e.map(function (r) {
            return Er(r, t);
          })
        : Object.keys(e)
            .sort()
            .reduce(function (r, n) {
              return (
                n === "_owner" ||
                  (n === "current" || t.has(e[n]) ? (r[n] = "[Circular]") : (r[n] = Er(e[n], t))),
                r
              );
            }, {}));
}
function Vs(e) {
  return Er(e, new WeakSet());
}
var Wn = function (e) {
    return { type: "string", value: e };
  },
  qs = function (e) {
    return { type: "number", value: e };
  },
  Us = function (e, t, r, n) {
    return { type: "ReactElement", displayName: e, props: t, defaultProps: r, childrens: n };
  },
  Ws = function (e, t) {
    return { type: "ReactFragment", key: e, childrens: t };
  },
  zs = !!Ge.Fragment,
  zn = function (e) {
    return !e.name || e.name === "_default" ? "No Display Name" : e.name;
  },
  Gs = function e(t) {
    switch (!0) {
      case !!t.displayName:
        return t.displayName;
      case t.$$typeof === Be.Memo:
        return e(t.type);
      case t.$$typeof === Be.ForwardRef:
        return e(t.render);
      default:
        return zn(t);
    }
  },
  $s = function (e) {
    switch (!0) {
      case typeof e.type == "string":
        return e.type;
      case typeof e.type == "function":
        return e.type.displayName ? e.type.displayName : zn(e.type);
      case (0, Be.isForwardRef)(e):
      case (0, Be.isMemo)(e):
        return Gs(e.type);
      case (0, Be.isContextConsumer)(e):
        return "".concat(e.type._context.displayName || "Context", ".Consumer");
      case (0, Be.isContextProvider)(e):
        return "".concat(e.type._context.displayName || "Context", ".Provider");
      case (0, Be.isLazy)(e):
        return "Lazy";
      case (0, Be.isProfiler)(e):
        return "Profiler";
      case (0, Be.isStrictMode)(e):
        return "StrictMode";
      case (0, Be.isSuspense)(e):
        return "Suspense";
      default:
        return "UnknownElementType";
    }
  },
  hn = function (e, t) {
    return t !== "children";
  },
  Js = function (e) {
    return e !== !0 && e !== !1 && e !== null && e !== "";
  },
  pn = function (e, t) {
    var r = {};
    return (
      Object.keys(e)
        .filter(function (n) {
          return t(e[n], n);
        })
        .forEach(function (n) {
          return (r[n] = e[n]);
        }),
      r
    );
  },
  wr = function e(t, r) {
    var n = r.displayName,
      s = n === void 0 ? $s : n;
    if (typeof t == "string") return Wn(t);
    if (typeof t == "number") return qs(t);
    if (!ft.isValidElement(t))
      throw new Error(
        "react-element-to-jsx-string: Expected a React.Element, got `".concat(gt(t), "`"),
      );
    var o = s(t),
      u = pn(t.props, hn);
    t.ref !== null && (u.ref = t.ref);
    var h = t.key;
    typeof h == "string" && h.search(/^\./) && (u.key = h);
    var p = pn(t.type.defaultProps || {}, hn),
      m = ft.Children.toArray(t.props.children)
        .filter(Js)
        .map(function (g) {
          return e(g, r);
        });
    return zs && t.type === Ge.Fragment ? Ws(h, m) : Us(o, u, p, m);
  };
function Xs() {}
var Hs = function (e) {
    return e
      .toString()
      .split(
        `
`,
      )
      .map(function (t) {
        return t.trim();
      })
      .join("");
  },
  fn = Hs,
  Gn = function (e, t) {
    var r = t.functionValue,
      n = r === void 0 ? fn : r,
      s = t.showFunctions;
    return n(!s && n === fn ? Xs : e);
  },
  Qs = function (e, t, r, n) {
    var s = Vs(e),
      o = (0, Ns.prettyPrint)(s, {
        transform: function (u, h, p) {
          var m = u[h];
          return m && Ge.isValidElement(m)
            ? Mt(wr(m, n), !0, r, n)
            : typeof m == "function"
              ? Gn(m, n)
              : p;
        },
      });
    return t
      ? o
          .replace(/\s+/g, " ")
          .replace(/{ /g, "{")
          .replace(/ }/g, "}")
          .replace(/\[ /g, "[")
          .replace(/ ]/g, "]")
      : o.replace(/\t/g, Pe(1, n.tabStop)).replace(
          /\n([^$])/g,
          `
`.concat(Pe(r + 1, n.tabStop), "$1"),
        );
  },
  Ys = function (e) {
    return e.replace(/"/g, "&quot;");
  },
  Ks = function (e, t, r, n) {
    if (typeof e == "number") return "{".concat(String(e), "}");
    if (typeof e == "string") return '"'.concat(Ys(e), '"');
    if (gt(e) === "symbol") {
      var s = e
        .valueOf()
        .toString()
        .replace(/Symbol\((.*)\)/, "$1");
      return s ? "{Symbol('".concat(s, "')}") : "{Symbol()}";
    }
    return typeof e == "function"
      ? "{".concat(Gn(e, n), "}")
      : Ge.isValidElement(e)
        ? "{".concat(Mt(wr(e, n), !0, r, n), "}")
        : e instanceof Date
          ? isNaN(e.valueOf())
            ? "{new Date(NaN)}"
            : '{new Date("'.concat(e.toISOString(), '")}')
          : Ps(e) || Array.isArray(e)
            ? "{".concat(Qs(e, t, r, n), "}")
            : "{".concat(String(e), "}");
  },
  Zs = function (e, t, r, n, s, o, u, h) {
    if (!t && !n)
      throw new Error(
        'The prop "'.concat(e, '" has no value and no default: could not be formatted'),
      );
    var p = t ? r : s,
      m = h.useBooleanShorthandSyntax,
      g = h.tabStop,
      F = Ks(p, o, u, h),
      A = " ",
      C = `
`.concat(Pe(u + 1, g)),
      D = F.includes(`
`);
    return (
      m && F === "{false}" && !n
        ? ((A = ""), (C = ""))
        : m && F === "{true}"
          ? ((A += "".concat(e)), (C += "".concat(e)))
          : ((A += "".concat(e, "=").concat(F)), (C += "".concat(e, "=").concat(F))),
      { attributeFormattedInline: A, attributeFormattedMultiline: C, isMultilineAttribute: D }
    );
  },
  eu = function (e, t) {
    var r = e.slice(0, e.length > 0 ? e.length - 1 : 0),
      n = e[e.length - 1];
    return (
      n &&
      (t.type === "string" || t.type === "number") &&
      (n.type === "string" || n.type === "number")
        ? r.push(Wn(String(n.value) + String(t.value)))
        : (n && r.push(n), r.push(t)),
      r
    );
  },
  tu = function (e) {
    return ["key", "ref"].includes(e);
  },
  ru = function (e) {
    return function (t) {
      var r = t.includes("key"),
        n = t.includes("ref"),
        s = t.filter(function (u) {
          return !tu(u);
        }),
        o = Ls(e ? s.sort() : s);
      return n && o.unshift("ref"), r && o.unshift("key"), o;
    };
  };
function nu(e, t) {
  return Array.isArray(t)
    ? function (r) {
        return t.indexOf(r) === -1;
      }
    : function (r) {
        return t(e[r], r);
      };
}
var iu = function (e, t, r, n, s) {
    var o = s.tabStop;
    return e.type === "string"
      ? t
          .split(
            `
`,
          )
          .map(function (u, h) {
            return h === 0 ? u : "".concat(Pe(n, o)).concat(u);
          }).join(`
`)
      : t;
  },
  su = function (e, t, r) {
    return function (n) {
      return iu(n, Mt(n, e, t, r), e, t, r);
    };
  },
  uu = function (e, t) {
    return function (r) {
      var n = Object.keys(e).includes(r);
      return !n || (n && e[r] !== t[r]);
    };
  },
  $n = function (e, t, r, n, s) {
    return s ? Pe(r, n).length + t.length > s : e.length > 1;
  },
  au = function (e, t, r, n, s, o, u) {
    return ($n(e, t, s, o, u) || r) && !n;
  },
  Jn = function (e, t, r, n) {
    var s = e.type,
      o = e.displayName,
      u = o === void 0 ? "" : o,
      h = e.childrens,
      p = e.props,
      m = p === void 0 ? {} : p,
      g = e.defaultProps,
      F = g === void 0 ? {} : g;
    if (s !== "ReactElement")
      throw new Error(
        'The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(
          s,
        ),
      );
    var A = n.filterProps,
      C = n.maxInlineAttributesLineLength,
      D = n.showDefaultProps,
      E = n.sortProps,
      w = n.tabStop,
      b = "<".concat(u),
      S = b,
      L = b,
      _ = !1,
      x = [],
      y = nu(m, A);
    Object.keys(m)
      .filter(y)
      .filter(uu(F, m))
      .forEach(function (P) {
        return x.push(P);
      }),
      Object.keys(F)
        .filter(y)
        .filter(function () {
          return D;
        })
        .filter(function (P) {
          return !x.includes(P);
        })
        .forEach(function (P) {
          return x.push(P);
        });
    var v = ru(E)(x);
    if (
      (v.forEach(function (P) {
        var j = Zs(P, Object.keys(m).includes(P), m[P], Object.keys(F).includes(P), F[P], t, r, n),
          M = j.attributeFormattedInline,
          V = j.attributeFormattedMultiline,
          U = j.isMultilineAttribute;
        U && (_ = !0), (S += M), (L += V);
      }),
      (L += `
`.concat(Pe(r, w))),
      au(v, S, _, t, r, w, C) ? (b = L) : (b = S),
      h && h.length > 0)
    ) {
      var B = r + 1;
      (b += ">"),
        t ||
          ((b += `
`),
          (b += Pe(B, w))),
        (b += h
          .reduce(eu, [])
          .map(su(t, B, n))
          .join(
            t
              ? ""
              : `
`.concat(Pe(B, w)),
          )),
        t ||
          ((b += `
`),
          (b += Pe(B - 1, w))),
        (b += "</".concat(u, ">"));
    } else $n(v, S, r, w, C) || (b += " "), (b += "/>");
    return b;
  },
  ou = "",
  dn = "React.Fragment",
  lu = function (e, t, r) {
    var n = {};
    return (
      t && (n = { key: t }),
      { type: "ReactElement", displayName: e, props: n, defaultProps: {}, childrens: r }
    );
  },
  cu = function (e) {
    var t = e.key;
    return !!t;
  },
  hu = function (e) {
    var t = e.childrens;
    return t.length === 0;
  },
  pu = function (e, t, r, n) {
    var s = e.type,
      o = e.key,
      u = e.childrens;
    if (s !== "ReactFragment")
      throw new Error(
        'The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(
          s,
        ),
      );
    var h = n.useFragmentShortSyntax,
      p;
    return h ? (hu(e) || cu(e) ? (p = dn) : (p = ou)) : (p = dn), Jn(lu(p, o, u), t, r, n);
  },
  fu = ["<", ">", "{", "}"],
  du = function (e) {
    return fu.some(function (t) {
      return e.includes(t);
    });
  },
  mu = function (e) {
    return du(e) ? "{`".concat(e, "`}") : e;
  },
  gu = function (e) {
    var t = e;
    return (
      t.endsWith(" ") && (t = t.replace(/^(.*?)(\s+)$/, "$1{'$2'}")),
      t.startsWith(" ") && (t = t.replace(/^(\s+)(.*)$/, "{'$1'}$2")),
      t
    );
  },
  Mt = function (e, t, r, n) {
    if (e.type === "number") return String(e.value);
    if (e.type === "string") return e.value ? "".concat(gu(mu(String(e.value)))) : "";
    if (e.type === "ReactElement") return Jn(e, t, r, n);
    if (e.type === "ReactFragment") return pu(e, t, r, n);
    throw new TypeError('Unknow format type "'.concat(e.type, '"'));
  },
  Du = function (e, t) {
    return Mt(e, !1, 0, t);
  },
  Xn = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = t.filterProps,
      n = r === void 0 ? [] : r,
      s = t.showDefaultProps,
      o = s === void 0 ? !0 : s,
      u = t.showFunctions,
      h = u === void 0 ? !1 : u,
      p = t.functionValue,
      m = t.tabStop,
      g = m === void 0 ? 2 : m,
      F = t.useBooleanShorthandSyntax,
      A = F === void 0 ? !0 : F,
      C = t.useFragmentShortSyntax,
      D = C === void 0 ? !0 : C,
      E = t.sortProps,
      w = E === void 0 ? !0 : E,
      b = t.maxInlineAttributesLineLength,
      S = t.displayName;
    if (!e) throw new Error("react-element-to-jsx-string: Expected a ReactElement");
    var L = {
      filterProps: n,
      showDefaultProps: o,
      showFunctions: h,
      functionValue: p,
      tabStop: g,
      useBooleanShorthandSyntax: A,
      useFragmentShortSyntax: D,
      sortProps: w,
      maxInlineAttributesLineLength: b,
      displayName: S,
    };
    return Du(wr(e, L), L);
  },
  mn = Xn;
function Hn(e) {
  return e.$$typeof != null;
}
function Qn(e, t) {
  let { name: r } = e;
  return r !== "" && r !== "anonymous" && r !== t ? r : null;
}
var Au = e => ee(JSON.stringify(e));
function Cu(e) {
  let { type: t } = e,
    { displayName: r } = t,
    n = mn(e, {});
  if (r != null) {
    let s = jt(r);
    return ee(s, n);
  }
  if (Is(t) && _r(t)) {
    let s = mn(e, { tabStop: 0 }).replace(/\r?\n|\r/g, "");
    if (!Dt(s)) return ee(s);
  }
  return ee(it, n);
}
var Eu = e => {
    if (Hn(e) && e.type != null) return Cu(e);
    if (Ts(e)) {
      let t = Oe(JSON.stringify(e));
      return Vn(t);
    }
    if (Array.isArray(e)) {
      let t = Oe(JSON.stringify(e));
      return Mn(t);
    }
    return ee(Ct);
  },
  yu = (e, t) => {
    let r = !1,
      n;
    if (ln(e.render)) r = !0;
    else if (e.prototype != null && ln(e.prototype.render)) r = !0;
    else {
      let o;
      try {
        n = Oe(e.toString());
        let { hasParams: u, params: h } = n.inferredType;
        u ? h.length === 1 && h[0].type === "ObjectPattern" && (o = e({})) : (o = e()),
          o != null && Hn(o) && (r = !0);
      } catch {}
    }
    let s = Qn(e, t.name);
    if (s != null) {
      if (r) return ee(jt(s));
      n != null && (n = Oe(e.toString()));
      let { hasParams: o } = n.inferredType;
      return ee(Br(s, o));
    }
    return ee(r ? it : tt);
  },
  Fu = e => ee(e.toString()),
  Yn = { string: Au, object: Eu, function: yu, default: Fu };
function xu(e = {}) {
  return { ...Yn, ...e };
}
function vu(e, t, r = Yn) {
  try {
    switch (typeof e) {
      case "string":
        return r.string(e, t);
      case "object":
        return r.object(e, t);
      case "function":
        return r.function(e, t);
      default:
        return r.default(e, t);
    }
  } catch (n) {
    console.error(n);
  }
  return null;
}
function _u(e, t) {
  let r = e != null,
    n = t != null;
  if (!r && !n) return "";
  let s = [];
  if (r) {
    let o = e.map(u => {
      let h = u.getPrettyName(),
        p = u.getTypeName();
      return p != null ? `${h}: ${p}` : h;
    });
    s.push(`(${o.join(", ")})`);
  } else s.push("()");
  return n && s.push(`=> ${t.getTypeName()}`), s.join(" ");
}
function Su(e, t) {
  let r = e != null,
    n = t != null;
  if (!r && !n) return "";
  let s = [];
  return r ? s.push("( ... )") : s.push("()"), n && s.push(`=> ${t.getTypeName()}`), s.join(" ");
}
function bu(e) {
  return e.replace(
    /,/g,
    `,\r
`,
  );
}
var Bu = 150;
function me({ name: e, short: t, compact: r, full: n, inferredType: s }) {
  return { name: e, short: t, compact: r, full: n ?? t, inferredType: s };
}
function Kn(e) {
  return e.replace(/PropTypes./g, "").replace(/.isRequired/g, "");
}
function gn(e) {
  return e.split(/\r?\n/);
}
function Rt(e, t = !1) {
  return Kn(Ar(e, t));
}
function Dn(e, t = !1) {
  return Kn(Le(e, t));
}
function wu(e) {
  switch (e) {
    case "Object":
      return Ct;
    case "Array":
      return vr;
    case "Class":
      return as;
    case "Function":
      return tt;
    case "Element":
      return it;
    default:
      return Dr;
  }
}
function Zn(e, t) {
  let { inferredType: r, ast: n } = Oe(e),
    { type: s } = r,
    o,
    u,
    h;
  switch (s) {
    case "Identifier":
    case "Literal":
      (o = e), (u = e);
      break;
    case "Object": {
      let { depth: p } = r;
      (o = Ct), (u = p === 1 ? Rt(n, !0) : null), (h = Rt(n));
      break;
    }
    case "Element": {
      let { identifier: p } = r;
      (o = p != null && !_r(p) ? p : it), (u = gn(e).length === 1 ? e : null), (h = e);
      break;
    }
    case "Array": {
      let { depth: p } = r;
      (o = vr), (u = p <= 2 ? Dn(n, !0) : null), (h = Dn(n));
      break;
    }
    default:
      (o = wu(s)), (u = gn(e).length === 1 ? e : null), (h = e);
      break;
  }
  return me({ name: t, short: o, compact: u, full: h, inferredType: s });
}
function ku({ raw: e }) {
  return e != null ? Zn(e, "custom") : me({ name: "custom", short: Dr, compact: Dr });
}
function Iu(e) {
  let { jsDocTags: t } = e;
  return t != null && (t.params != null || t.returns != null)
    ? me({
        name: "func",
        short: Su(t.params, t.returns),
        compact: null,
        full: _u(t.params, t.returns),
      })
    : me({ name: "func", short: tt, compact: tt });
}
function Tu(e, t) {
  let r = Object.keys(e.value)
      .map(u => `${u}: ${rt(e.value[u], t).full}`)
      .join(", "),
    { inferredType: n, ast: s } = Oe(`{ ${r} }`),
    { depth: o } = n;
  return me({
    name: "shape",
    short: Ct,
    compact: o === 1 && s ? Rt(s, !0) : null,
    full: s ? Rt(s) : null,
  });
}
function sr(e) {
  return `objectOf(${e})`;
}
function Pu(e, t) {
  let { short: r, compact: n, full: s } = rt(e.value, t);
  return me({
    name: "objectOf",
    short: sr(r),
    compact: n != null ? sr(n) : null,
    full: s && sr(s),
  });
}
function Nu(e, t) {
  if (Array.isArray(e.value)) {
    let r = e.value.reduce(
      (n, s) => {
        let { short: o, compact: u, full: h } = rt(s, t);
        return n.short.push(o), n.compact.push(u), n.full.push(h), n;
      },
      { short: [], compact: [], full: [] },
    );
    return me({
      name: "union",
      short: r.short.join(" | "),
      compact: r.compact.every(n => n != null) ? r.compact.join(" | ") : null,
      full: r.full.join(" | "),
    });
  }
  return me({ name: "union", short: e.value, compact: null });
}
function Lu({ value: e, computed: t }) {
  return t ? Zn(e, "enumvalue") : me({ name: "enumvalue", short: e, compact: e });
}
function Ou(e) {
  if (Array.isArray(e.value)) {
    let t = e.value.reduce(
      (r, n) => {
        let { short: s, compact: o, full: u } = Lu(n);
        return r.short.push(s), r.compact.push(o), r.full.push(u), r;
      },
      { short: [], compact: [], full: [] },
    );
    return me({
      name: "enum",
      short: t.short.join(" | "),
      compact: t.compact.every(r => r != null) ? t.compact.join(" | ") : null,
      full: t.full.join(" | "),
    });
  }
  return me({ name: "enum", short: e.value, compact: e.value });
}
function yr(e) {
  return `${e}[]`;
}
function An(e) {
  return `[${e}]`;
}
function Cn(e, t, r) {
  return me({ name: "arrayOf", short: yr(e), compact: t != null ? An(t) : null, full: r && An(r) });
}
function Ru(e, t) {
  let { name: r, short: n, compact: s, full: o, inferredType: u } = rt(e.value, t);
  if (r === "custom") {
    if (u === "Object") return Cn(n, s, o);
  } else if (r === "shape") return Cn(n, s, o);
  return me({ name: "arrayOf", short: yr(n), compact: yr(n) });
}
function rt(e, t) {
  try {
    switch (e.name) {
      case "custom":
        return ku(e);
      case "func":
        return Iu(t);
      case "shape":
        return Tu(e, t);
      case "instanceOf":
        return me({ name: "instanceOf", short: e.value, compact: e.value });
      case "objectOf":
        return Pu(e, t);
      case "union":
        return Nu(e, t);
      case "enum":
        return Ou(e);
      case "arrayOf":
        return Ru(e, t);
      default:
        return me({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (r) {
    console.error(r);
  }
  return me({ name: "unknown", short: "unknown", compact: "unknown" });
}
function ju(e) {
  let { type: t } = e.docgenInfo;
  if (t == null) return null;
  try {
    switch (t.name) {
      case "custom":
      case "shape":
      case "instanceOf":
      case "objectOf":
      case "union":
      case "enum":
      case "arrayOf": {
        let { short: r, compact: n, full: s } = rt(t, e);
        return n != null && !Fi(n) ? ee(n) : s ? ee(r, s) : ee(r);
      }
      case "func": {
        let { short: r, full: n } = rt(t, e),
          s = r,
          o;
        return n && n.length < Bu ? (s = n) : n && (o = bu(n)), ee(s, o);
      }
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
var Mu = (e, { name: t, type: r }) => {
    let n =
        (r == null ? void 0 : r.summary) === "element" ||
        (r == null ? void 0 : r.summary) === "elementType",
      s = Qn(e, t);
    if (s != null) {
      if (n) return ee(jt(s));
      let { hasParams: o } = Oe(e.toString()).inferredType;
      return ee(Br(s, o));
    }
    return ee(n ? it : tt);
  },
  Vu = xu({ function: Mu });
function qu(e, t) {
  let { propTypes: r } = t;
  return r != null
    ? Object.keys(r)
        .map(n => e.find(s => s.name === n))
        .filter(Boolean)
    : e;
}
function Uu(e, t) {
  let { propDef: r } = e,
    n = ju(e);
  n != null && (r.type = n);
  let { defaultValue: s } = e.docgenInfo;
  if (s != null && s.value != null) {
    let o = Un(s.value);
    o != null && (r.defaultValue = o);
  } else if (t != null) {
    let o = vu(t, r, Vu);
    o != null && (r.defaultValue = o);
  }
  return r;
}
function Wu(e, t) {
  let r = t.defaultProps != null ? t.defaultProps : {},
    n = e.map(s => Uu(s, r[s.propDef.name]));
  return qu(n, t);
}
function zu(e, t) {
  let { propDef: r } = e,
    { defaultValue: n } = e.docgenInfo;
  if (n != null && n.value != null) {
    let s = Un(n.value);
    s != null && (r.defaultValue = s);
  }
  return r;
}
function Gu(e) {
  return e.map(t => zu(t));
}
var En = new Map();
Object.keys(un.default).forEach(e => {
  let t = un.default[e];
  En.set(t, e), En.set(t.isRequired, e);
});
function $u(e, t) {
  let r = e;
  !Ei(e) && !e.propTypes && Ln(e) && (r = e.type);
  let n = yi(r, t);
  if (n.length === 0) return [];
  switch (n[0].typeSystem) {
    case qr.JAVASCRIPT:
      return Wu(n, e);
    case qr.TYPESCRIPT:
      return Gu(n);
    default:
      return n.map(s => s.propDef);
  }
}
var Ju = e => ({ rows: $u(e, "props") }),
  Xu = e => {
    if (e) {
      let { rows: t } = Ju(e);
      if (t)
        return t.reduce((r, n) => {
          let {
            name: s,
            description: o,
            type: u,
            sbType: h,
            defaultValue: p,
            jsDocTags: m,
            required: g,
          } = n;
          return (
            (r[s] = {
              name: s,
              description: o,
              type: { required: g, ...h },
              table: { type: u ?? void 0, jsDocTags: m, defaultValue: p ?? void 0 },
            }),
            r
          );
        }, {});
    }
    return null;
  },
  ur = Xn,
  Hu = e => e.charAt(0).toUpperCase() + e.slice(1),
  Qu = e =>
    (e.$$typeof || e)
      .toString()
      .replace(/^Symbol\((.*)\)$/, "$1")
      .split(".")
      .map(t => t.split("_").map(Hu).join(""))
      .join(".");
function Fr(e) {
  if (Ge.isValidElement(e)) {
    let t = Object.keys(e.props).reduce((r, n) => ((r[n] = Fr(e.props[n])), r), {});
    return { ...e, props: t, _owner: null };
  }
  return Array.isArray(e) ? e.map(Fr) : e;
}
var Yu = (e, t) => {
    if (typeof e > "u") return vt.warn("Too many skip or undefined component"), null;
    let r = e,
      n = r.type;
    for (let u = 0; u < (t == null ? void 0 : t.skip); u += 1) {
      if (typeof r > "u") return vt.warn("Cannot skip undefined element"), null;
      if (ft.Children.count(r) > 1) return vt.warn("Trying to skip an array of elements"), null;
      typeof r.props.children > "u"
        ? (vt.warn("Not enough children to skip elements."),
          typeof r.type == "function" &&
            r.type.name === "" &&
            (r = ft.createElement(n, { ...r.props })))
        : typeof r.props.children == "function"
          ? (r = r.props.children())
          : (r = r.props.children);
    }
    let s;
    typeof (t == null ? void 0 : t.displayName) == "string"
      ? (s = { showFunctions: !0, displayName: () => t.displayName })
      : (s = {
          displayName: u => {
            var h;
            return u.type.displayName
              ? u.type.displayName
              : Ur(u.type, "displayName")
                ? Ur(u.type, "displayName")
                : (h = u.type.render) != null && h.displayName
                  ? u.type.render.displayName
                  : typeof u.type == "symbol" ||
                      (u.type.$$typeof && typeof u.type.$$typeof == "symbol")
                    ? Qu(u.type)
                    : u.type.name && u.type.name !== "_default"
                      ? u.type.name
                      : typeof u.type == "function"
                        ? "No Display Name"
                        : gs(u.type)
                          ? u.type.render.name
                          : Ln(u.type)
                            ? u.type.type.name
                            : u.type;
          },
        });
    let o = { ...s, filterProps: (u, h) => u !== void 0, ...t };
    return ft.Children.map(e, u => {
      let h = typeof u == "number" ? u.toString() : u,
        p = (typeof ur == "function" ? ur : ur.default)(Fr(h), o);
      if (p.indexOf("&quot;") > -1) {
        let m = p.match(/\S+=\\"([^"]*)\\"/g);
        m &&
          m.forEach(g => {
            p = p.replace(g, g.replace(/&quot;/g, "'"));
          });
      }
      return p;
    })
      .join(
        `
`,
      )
      .replace(/function\s+noRefCheck\(\)\s*\{\}/g, "() => {}");
  },
  Ku = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 },
  Zu = e => {
    var n;
    let t = (n = e == null ? void 0 : e.parameters.docs) == null ? void 0 : n.source,
      r = e == null ? void 0 : e.parameters.__isArgsStory;
    return (t == null ? void 0 : t.type) === Vr.DYNAMIC
      ? !1
      : !r || (t == null ? void 0 : t.code) || (t == null ? void 0 : t.type) === Vr.CODE;
  },
  ea = e => {
    var t, r;
    return (
      ((t = e.type) == null ? void 0 : t.displayName) === "MDXCreateElement" &&
      !!((r = e.props) != null && r.mdxType)
    );
  },
  ei = e => {
    if (!ea(e)) return e;
    let { mdxType: t, originalType: r, children: n, ...s } = e.props,
      o = [];
    return n && (o = (Array.isArray(n) ? n : [n]).map(ei)), Ge.createElement(r, s, ...o);
  },
  ti = (e, t) => {
    var g, F;
    let r = vi.getChannel(),
      n = Zu(t),
      s = "";
    _i(() => {
      if (!n) {
        let { id: A, unmappedArgs: C } = t;
        r.emit(Ci, { id: A, source: s, args: C });
      }
    });
    let o = e();
    if (n) return o;
    let u = { ...Ku, ...((t == null ? void 0 : t.parameters.jsx) || {}) },
      h =
        (F = (g = t == null ? void 0 : t.parameters.docs) == null ? void 0 : g.source) != null &&
        F.excludeDecorators
          ? t.originalStoryFn(t.args, t)
          : o,
      p = ei(h),
      m = Yu(p, u);
    return m && (s = m), o;
  },
  ta = (e, t) => {
    let r = t.findIndex(s => s.originalFn === ti),
      n = r === -1 ? t : [...t.splice(r, 1), ...t];
    return xi(e, n);
  },
  ra = { docs: { story: { inline: !0 }, extractArgTypes: Xu, extractComponentDescription: Ai } },
  na = [ti],
  ia = [Di];
export { ta as applyDecorators, ia as argTypesEnhancers, na as decorators, ra as parameters };
