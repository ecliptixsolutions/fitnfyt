import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card, i as inr, d as dmy } from "./AppShell-Dv9uxNKu.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { D as Download } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
function MyPayments() {
  const member = useApp((s) => s.members[0]);
  const allPayments = useApp((s) => s.payments);
  const payments = allPayments.filter((p) => p.memberId === member.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold mb-4", children: "My Payments" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "!p-2", children: payments.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 border-b last:border-0 border-border/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: inr(p.amount) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          p.plan,
          " • ",
          dmy(p.date),
          " • ",
          p.mode
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-xs px-3 py-1.5 rounded-lg border border-border flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
        "Receipt"
      ] })
    ] }, p.id)) })
  ] });
}
export {
  MyPayments as component
};
