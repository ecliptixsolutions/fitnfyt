import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as daysBetween, C as Card, d as dmy } from "./AppShell-Dv9uxNKu.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/zustand.mjs";
function MyHome() {
  const auth = useApp((s) => s.auth);
  const member = useApp((s) => s.members[0]);
  const days = daysBetween(/* @__PURE__ */ new Date(), new Date(member.expiryDate));
  const pct = Math.min(100, Math.max(0, days / 365 * 100));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold mb-4", children: [
      "Hello, ",
      auth?.name,
      " 💪"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-5 mb-4 bg-gradient-to-br from-primary/30 to-primary/5 border-primary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-primary font-semibold", children: member.plan }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: [
        "Member since ",
        dmy(member.startDate),
        " • Expires ",
        dmy(member.expiryDate)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-24 h-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "w-24 h-24 -rotate-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9", fill: "none", stroke: "var(--border)", strokeWidth: "3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9", fill: "none", stroke: "var(--primary)", strokeWidth: "3", strokeDasharray: `${pct}, 100`, strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-primary", children: Math.max(days, 0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground", children: "days left" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Active Membership" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Keep up the great work!" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: "🔥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black mt-1", children: member.streak }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: "Day Streak" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: "🏆" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black mt-1", children: "23" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: "Best Streak" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "This Month" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-black mt-2", children: [
        member.checkIns.length,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-normal", children: "check-ins" })
      ] })
    ] }),
    days < 10 && days > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-primary w-full", children: [
      "Renew Now — Only ",
      days,
      " days left!"
    ] })
  ] });
}
export {
  MyHome as component
};
