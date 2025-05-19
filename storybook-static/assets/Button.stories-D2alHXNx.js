import { c as ne, a as oe } from "./className-BoCCXcUU.js";
import "./jsx-runtime-Bw5QeaCk.js";
import { j as se } from "./jsx-runtime-DoEZbXM1.js";

import { c as ne, a as oe } from "./className-BoCCXcUU.js";
import "./jsx-runtime-Bw5QeaCk.js";
const ie = ne(
    "h-[60px] rounded-[7px] flex justify-center items-center transition-color duration-300 ease-in-out",
    {
      variants: {
        variant: {
          fill: "bg-primary-500 text-white hover:bg-primary-500/80 active:bg-accent-200",
          outline:
            "bg-white border-2 border-primary-500 text-primary-500 hover:border-primary-300 active:border-accent-200 active:text-accent-200",
          ghost:
            "bg-neutral-400/40 text-primary-400 hover:bg-neutral-400/70 active:text-accent-200",
          disabled: "bg-neutral-500 text-neutral-700 cursor-not-allowed",
        },
        size: {
          default: "w-[120px] px-[14px] label_button_default",
          small: "w-[100px] px-[10px] label_button_small",
          large: "w-full px-5 label_button_large",
        },
      },
      defaultVariants: { variant: "fill", size: "default" },
    },
  ),
  $ = ({ className: ee, variant: p, size: re, ...ae }) => {
    const te = oe(ee, ie({ variant: p, size: re }));
    return se.jsx("button", { className: te, disabled: p === "disabled", ...ae });
  };
$.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Button",
  props: {
    children: {
      required: !1,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
  },
  composes: ["VariantProps"],
};
const ue = {
    title: "Components/Button",
    component: $,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {
      variant: { control: "select", options: ["fill", "outline", "ghost", "disabled"] },
      size: { control: "select", options: ["small", "medium", "large"] },
    },
  },
  e = { args: { children: "default button" } },
  r = { args: { variant: "fill", size: "small", children: "button" } },
  a = { args: { variant: "fill", size: "medium", children: "button" } },
  t = { args: { variant: "fill", size: "large", children: "button" } },
  s = { args: { variant: "outline", size: "small", children: "button" } },
  n = { args: { variant: "outline", size: "medium", children: "button" } },
  o = { args: { variant: "outline", size: "large", children: "button" } },
  i = { args: { variant: "ghost", size: "small", children: "button" } },
  l = { args: { variant: "ghost", size: "medium", children: "button" } },
  c = { args: { variant: "ghost", size: "large", children: "button" } },
  d = { args: { variant: "disabled", size: "small", children: "button" } },
  u = { args: { variant: "disabled", size: "medium", children: "button" } },
  m = { args: { variant: "disabled", size: "large", children: "button" } };
var g, b, h;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((g = e.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  args: {
    children: "default button"
  }
}`,
      ...((h = (b = e.parameters) == null ? void 0 : b.docs) == null ? void 0 : h.source),
    },
  },
};
var v, z, f;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((v = r.parameters) == null ? void 0 : v.docs),
    source: {
      originalSource: `{
  args: {
    variant: "fill",
    size: "small",
    children: "button"
  }
}`,
      ...((f = (z = r.parameters) == null ? void 0 : z.docs) == null ? void 0 : f.source),
    },
  },
};
var S, x, y;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((S = a.parameters) == null ? void 0 : S.docs),
    source: {
      originalSource: `{
  args: {
    variant: "fill",
    size: "medium",
    children: "button"
  }
}`,
      ...((y = (x = a.parameters) == null ? void 0 : x.docs) == null ? void 0 : y.source),
    },
  },
};
var _, D, L;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((_ = t.parameters) == null ? void 0 : _.docs),
    source: {
      originalSource: `{
  args: {
    variant: "fill",
    size: "large",
    children: "button"
  }
}`,
      ...((L = (D = t.parameters) == null ? void 0 : D.docs) == null ? void 0 : L.source),
    },
  },
};
var M, w, O;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((M = s.parameters) == null ? void 0 : M.docs),
    source: {
      originalSource: `{
  args: {
    variant: "outline",
    size: "small",
    children: "button"
  }
}`,
      ...((O = (w = s.parameters) == null ? void 0 : w.docs) == null ? void 0 : O.source),
    },
  },
};
var F, G, R;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((F = n.parameters) == null ? void 0 : F.docs),
    source: {
      originalSource: `{
  args: {
    variant: "outline",
    size: "medium",
    children: "button"
  }
}`,
      ...((R = (G = n.parameters) == null ? void 0 : G.docs) == null ? void 0 : R.source),
    },
  },
};
var j, N, B;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((j = o.parameters) == null ? void 0 : j.docs),
    source: {
      originalSource: `{
  args: {
    variant: "outline",
    size: "large",
    children: "button"
  }
}`,
      ...((B = (N = o.parameters) == null ? void 0 : N.docs) == null ? void 0 : B.source),
    },
  },
};
var C, E, T;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((C = i.parameters) == null ? void 0 : C.docs),
    source: {
      originalSource: `{
  args: {
    variant: "ghost",
    size: "small",
    children: "button"
  }
}`,
      ...((T = (E = i.parameters) == null ? void 0 : E.docs) == null ? void 0 : T.source),
    },
  },
};
var V, q, I;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((V = l.parameters) == null ? void 0 : V.docs),
    source: {
      originalSource: `{
  args: {
    variant: "ghost",
    size: "medium",
    children: "button"
  }
}`,
      ...((I = (q = l.parameters) == null ? void 0 : q.docs) == null ? void 0 : I.source),
    },
  },
};
var P, k, A;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((P = c.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `{
  args: {
    variant: "ghost",
    size: "large",
    children: "button"
  }
}`,
      ...((A = (k = c.parameters) == null ? void 0 : k.docs) == null ? void 0 : A.source),
    },
  },
};
var H, J, K;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((H = d.parameters) == null ? void 0 : H.docs),
    source: {
      originalSource: `{
  args: {
    variant: "disabled",
    size: "small",
    children: "button"
  }
}`,
      ...((K = (J = d.parameters) == null ? void 0 : J.docs) == null ? void 0 : K.source),
    },
  },
};
var Q, U, W;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((Q = u.parameters) == null ? void 0 : Q.docs),
    source: {
      originalSource: `{
  args: {
    variant: "disabled",
    size: "medium",
    children: "button"
  }
}`,
      ...((W = (U = u.parameters) == null ? void 0 : U.docs) == null ? void 0 : W.source),
    },
  },
};
var X, Y, Z;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((X = m.parameters) == null ? void 0 : X.docs),
    source: {
      originalSource: `{
  args: {
    variant: "disabled",
    size: "large",
    children: "button"
  }
}`,
      ...((Z = (Y = m.parameters) == null ? void 0 : Y.docs) == null ? void 0 : Z.source),
    },
  },
};
const me = [
  "Default",
  "FillSmall",
  "FillMedium",
  "FillLarge",
  "OutlineSmall",
  "OutlineMedium",
  "OutlineLarge",
  "GhostSmall",
  "GhostMedium",
  "GhostLarge",
  "DisabledSmall",
  "DisabledMedium",
  "DisabledLarge",
];
export {
  e as Default,
  m as DisabledLarge,
  u as DisabledMedium,
  d as DisabledSmall,
  t as FillLarge,
  a as FillMedium,
  r as FillSmall,
  c as GhostLarge,
  l as GhostMedium,
  i as GhostSmall,
  o as OutlineLarge,
  n as OutlineMedium,
  s as OutlineSmall,
  me as __namedExportsOrder,
  ue as default,
};
