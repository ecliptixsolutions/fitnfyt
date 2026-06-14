import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, C as Card, b as initials, c as colorFromName, d as dmy, i as inr } from "./AppShell-Dv9uxNKu.mjs";
import { d as downloadCsv, a as downloadExcel } from "./export-DlLDZkDM.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { w as Search, D as Download, y as FileSpreadsheet } from "../_libs/lucide-react.mjs";
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
function Payments() {
  const payments = useApp((state) => state.payments);
  const members = useApp((state) => state.members);
  const [query, setQuery] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("all");
  const [mode, setMode] = reactExports.useState("all");
  const list = payments.filter((payment) => status === "all" || payment.status === status).filter((payment) => mode === "all" || payment.mode === mode).filter((payment) => {
    const member = members.find((item) => item.id === payment.memberId);
    return `${member?.name ?? ""} ${payment.plan} ${payment.reference ?? ""}`.toLowerCase().includes(query.toLowerCase());
  }).sort((a, b) => b.date.localeCompare(a.date));
  const rows = list.map((payment) => [payment.date.slice(0, 10), members.find((item) => item.id === payment.memberId)?.name ?? "Unknown", payment.type ?? "payment", payment.plan, payment.mode, payment.status, payment.amount, payment.reference ?? ""]);
  const headers = ["Date", "Member", "Type", "Plan", "Mode", "Status", "Amount", "Reference"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Transactions", description: `${list.length} matching payments and refunds.`, actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadCsv("fitfyt-transactions", headers, rows), className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
      "CSV"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadExcel("fitfyt-transactions", headers, rows), className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "h-4 w-4" }),
      "Excel"
    ] })
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-[1fr_auto_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field pl-9", placeholder: "Search member, plan, or reference", value: query, onChange: (event) => setQuery(event.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { "aria-label": "Payment status", className: "input-field min-w-36", value: status, onChange: (event) => setStatus(event.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All statuses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Paid" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Pending" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { "aria-label": "Payment mode", className: "input-field min-w-36", value: mode, onChange: (event) => setMode(event.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All modes" }),
        ["Cash", "UPI", "Card", "Bank"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "data-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Member" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Amount" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: list.map((payment) => {
          const member = members.find((item) => item.id === payment.memberId);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-8 w-8 place-items-center rounded-full text-[10px] font-bold text-white ${colorFromName(member?.name ?? "?")}`, children: initials(member?.name ?? "?") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: member?.name ?? "Unknown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: payment.reference || "No reference" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: dmy(payment.date) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "capitalize", children: payment.type ?? "payment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: payment.plan }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: payment.mode }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `status-badge ${payment.status === "Paid" ? "status-active" : "status-expiring"}`, children: payment.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: payment.type === "refund" ? "font-bold text-amber-400" : "font-bold text-emerald-400", children: [
              payment.type === "refund" ? "-" : "",
              inr(payment.amount)
            ] })
          ] }, payment.id);
        }) })
      ] }) }),
      !list.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "No matching transactions." })
    ] })
  ] });
}
export {
  Payments as component
};
