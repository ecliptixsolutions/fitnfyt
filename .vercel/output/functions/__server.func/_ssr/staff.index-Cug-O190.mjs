import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card, b as initials, c as colorFromName, d as dmy } from "./AppShell-9xLAHItq.mjs";
import { u as useApp } from "./router-Dgpn6rjq.mjs";
import "../_libs/sonner.mjs";
import { w as Search, U as Users, I as IndianRupee, q as Plus } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
function StaffList() {
  const staff = useApp((state) => state.staff);
  const attendance = useApp((state) => state.attendance ?? []);
  const [query, setQuery] = reactExports.useState("");
  const [active, setActive] = reactExports.useState("all");
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const list = staff.filter((person) => active === "all" || String(person.active) === active).filter((person) => `${person.name} ${person.phone} ${person.role}`.toLowerCase().includes(query.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Staff", description: "Profiles, shifts, attendance, assignments, permissions, and payroll.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/staff/payroll", className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-4 w-4" }),
      "Payroll"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/staff/add", className: "btn-primary text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
      "Add staff"
    ] })
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Total staff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-black", children: staff.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Active" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-black text-emerald-400", children: staff.filter((person) => person.active).length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Present today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-black text-primary", children: new Set(attendance.filter((record) => record.subjectType === "staff" && record.date === today).map((record) => record.subjectId)).size })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-[1fr_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field pl-9", placeholder: "Search staff by name, phone, or role", value: query, onChange: (event) => setQuery(event.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { "aria-label": "Staff status", className: "input-field min-w-40", value: active, onChange: (event) => setActive(event.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All staff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "true", children: "Active" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "false", children: "Inactive" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 xl:grid-cols-2", children: list.map((person) => {
      const present = attendance.some((record) => record.subjectType === "staff" && record.subjectId === person.id && record.date === today);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/staff/$id", params: {
        id: person.id
      }, className: "card-surface flex items-center gap-3 p-4 hover:border-primary/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-11 w-11 place-items-center rounded-full text-xs font-bold text-white ${colorFromName(person.name)}`, children: initials(person.name) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: person.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            person.phone,
            " - joined ",
            dmy(person.joined)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] text-muted-foreground", children: [
            person.shift ?? "Shift not set",
            " - ",
            person.weeklyOff ?? "Weekly off not set"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-badge status-active", children: person.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 text-[10px] ${present ? "text-emerald-400" : "text-muted-foreground"}`, children: present ? "Present today" : person.active ? "Active" : "Inactive" })
        ] })
      ] }, person.id);
    }) }),
    !list.length && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-8 text-center text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "mx-auto mb-2 h-5 w-5" }),
      "No matching staff."
    ] })
  ] });
}
export {
  StaffList as component
};
