import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card, d as dmy } from "./AppShell-Dv9uxNKu.mjs";
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
function MyAttendance() {
  const member = useApp((s) => s.members[0]);
  const days = Array.from({
    length: 30
  }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - (29 - i));
    return d;
  });
  const checkedSet = new Set(member.checkIns.map((c) => new Date(c).toDateString()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold mb-4", children: "My Attendance" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-2", children: days.map((d, i) => {
      const checked = checkedSet.has(d.toDateString());
      const today = d.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `aspect-square rounded-lg grid place-items-center text-xs ${checked ? "bg-primary text-primary-foreground font-bold" : today ? "ring-2 ring-primary" : "bg-secondary text-muted-foreground"}`, children: d.getDate() }, i);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm uppercase tracking-wider text-muted-foreground mb-2", children: "Recent Check-ins" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-2", children: [
      member.checkIns.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-sm text-center text-muted-foreground", children: "No check-ins yet" }),
      member.checkIns.slice(0, 10).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-3 border-b last:border-0 border-border/50 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dmy(c) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: new Date(c).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit"
        }) })
      ] }, i))
    ] })
  ] });
}
export {
  MyAttendance as component
};
