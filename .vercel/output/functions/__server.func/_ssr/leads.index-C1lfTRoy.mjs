import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, d as dmy, C as Card } from "./AppShell-Dv9uxNKu.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { w as Search, s as UserPlus, q as Plus } from "../_libs/lucide-react.mjs";
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
const sources = ["All", "Walk-in", "WhatsApp", "Instagram", "Facebook", "Referral", "Website"];
const statuses = ["All", "New", "Follow-up", "Interested", "Converted", "Lost"];
function Leads() {
  const leads = useApp((state) => state.leads);
  const staff = useApp((state) => state.staff);
  const [source, setSource] = reactExports.useState("All");
  const [status, setStatus] = reactExports.useState("All");
  const [query, setQuery] = reactExports.useState("");
  const list = leads.filter((lead) => source === "All" || lead.source === source).filter((lead) => status === "All" || lead.status === status).filter((lead) => `${lead.name} ${lead.phone} ${lead.enquiry}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => a.followUp.localeCompare(b.followUp));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Leads", description: "Manual CRM pipeline for every enquiry source.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leads/add", className: "btn-primary text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
    "Add lead"
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-3 lg:grid-cols-[1fr_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field pl-9", placeholder: "Search leads by name, phone, or enquiry", value: query, onChange: (event) => setQuery(event.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { "aria-label": "Lead status", className: "input-field min-w-44", value: status, onChange: (event) => setStatus(event.target.value), children: statuses.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scrollbar-hide mb-5 flex gap-2 overflow-x-auto", children: sources.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSource(value), className: `whitespace-nowrap rounded-full border px-3 py-1.5 text-xs ${source === value ? "border-primary bg-primary font-semibold text-white" : "border-border text-muted-foreground"}`, children: [
      value,
      " (",
      value === "All" ? leads.length : leads.filter((lead) => lead.source === value).length,
      ")"
    ] }, value)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 xl:grid-cols-2", children: list.map((lead) => {
      const assigned = staff.find((person) => person.id === lead.assignedStaffId);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leads/$id", params: {
        id: lead.id
      }, className: "card-surface p-4 hover:border-primary/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: lead.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LeadBadge, { status: lead.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Source" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: lead.source })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Enquiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: lead.enquiry })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Follow-up" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: dmy(lead.followUp) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Assigned to" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-3 w-3 text-primary" }),
              assigned?.name ?? "Unassigned"
            ] })
          ] })
        ] })
      ] }, lead.id);
    }) }),
    !list.length && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-8 text-center text-sm text-muted-foreground", children: "No leads match these filters." })
  ] });
}
function LeadBadge({
  status
}) {
  const classes = {
    New: "status-frozen",
    "Follow-up": "status-expiring",
    Interested: "status-active",
    Converted: "border-violet-500/40 bg-violet-500/10 text-violet-400",
    Lost: "status-expired"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `status-badge ${classes[status] ?? "status-inactive"}`, children: status });
}
export {
  LeadBadge,
  Leads as component
};
