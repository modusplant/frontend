import { _ as a } from "./iframe-Fh9dZVAD.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./DocsRenderer-CFRXHY34-Ch8K9JT8.js",
      "./iframe-Fh9dZVAD.js",
      "./index-DWtqY3O_.js",
      "./jsx-runtime-DoEZbXM1.js",
      "./jsx-runtime-Bw5QeaCk.js",
      "./index-CWNAz4Fr.js",
      "./index-CXQShRbs.js",
      "./index-DrFu-skq.js",
      "./react-18-oVSxgM2P.js",
    ]),
) => i.map(i => d[i]);
var i = Object.defineProperty,
  s = (e, r) => {
    for (var t in r) i(e, t, { get: r[t], enumerable: !0 });
  },
  _ = {};
s(_, { parameters: () => d });
var p = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((e, r) => {
    let [t, o] = r;
    return o.excludeFromDocsStories && (e[t] = !0), e;
  }, {}),
  d = {
    docs: {
      renderer: async () => {
        let { DocsRenderer: e } = await a(
          () => import("./DocsRenderer-CFRXHY34-Ch8K9JT8.js").then(r => r.D),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
          import.meta.url,
        );
        return new e();
      },
      stories: {
        filter: e => {
          var r;
          return (
            (e.tags || []).filter(t => p[t]).length === 0 &&
            !((r = e.parameters.docs) != null && r.disable)
          );
        },
      },
    },
  };
export { d as parameters };
