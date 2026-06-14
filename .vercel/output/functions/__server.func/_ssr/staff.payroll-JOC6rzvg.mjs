import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { d as dmy, A as AppShell, C as Card, i as inr } from "./AppShell-Dv9uxNKu.mjs";
import { d as downloadCsv, a as downloadExcel } from "./export-DlLDZkDM.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { D as Download, y as FileSpreadsheet } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
function Payroll() {
  const staff = useApp((state) => state.staff);
  const payroll = useApp((state) => state.payroll ?? []);
  const recordPayroll = useApp((state) => state.recordPayroll);
  const [month, setMonth] = reactExports.useState((/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
  const [mode, setMode] = reactExports.useState("Bank");
  const [adjustments, setAdjustments] = reactExports.useState({});
  const rows = staff.map((person) => {
    const record = payroll.find((item) => item.staffId === person.id && item.month === month);
    return [person.name, person.role, month, person.salary, record?.bonus ?? 0, record?.deduction ?? 0, record ? person.salary + record.bonus - record.deduction : person.salary, record?.paidAt ? dmy(record.paidAt) : "Pending"];
  });
  const headers = ["Staff", "Role", "Month", "Base Salary", "Bonus", "Deduction", "Net", "Paid"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Payroll", description: "Monthly salary payment history.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadCsv(`fitfyt-payroll-${month}`, headers, rows), className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
      "CSV"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadExcel(`fitfyt-payroll-${month}`, headers, rows), className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "h-4 w-4" }),
      "Excel"
    ] })
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-muted-foreground", children: [
        "Payroll month",
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "month", className: "input-field mt-1", value: month, onChange: (event) => setMonth(event.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-muted-foreground", children: [
        "Payment mode",
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field mt-1", value: mode, onChange: (event) => setMode(event.target.value), children: ["Cash", "UPI", "Card", "Bank"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "!p-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "data-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Staff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Salary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: staff.map((person) => {
        const record = payroll.find((item) => item.staffId === person.id && item.month === month);
        const adjustment = adjustments[person.id] ?? {
          bonus: 0,
          deduction: 0
        };
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-semibold", children: person.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: person.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: inr(person.salary + (record?.bonus ?? adjustment.bonus) - (record?.deduction ?? adjustment.deduction)) }),
            !record?.paidAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { "aria-label": `${person.name} bonus`, type: "number", className: "input-field max-w-28 !p-1.5 text-[10px]", placeholder: "Bonus", value: adjustment.bonus || "", onChange: (event) => setAdjustments({
                ...adjustments,
                [person.id]: {
                  ...adjustment,
                  bonus: Number(event.target.value)
                }
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { "aria-label": `${person.name} deduction`, type: "number", className: "input-field max-w-28 !p-1.5 text-[10px]", placeholder: "Deduction", value: adjustment.deduction || "", onChange: (event) => setAdjustments({
                ...adjustments,
                [person.id]: {
                  ...adjustment,
                  deduction: Number(event.target.value)
                }
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: record?.paidAt ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "status-badge status-active", children: [
            "Paid ",
            dmy(record.paidAt)
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-badge status-expiring", children: "Pending" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: Boolean(record?.paidAt), onClick: () => {
            recordPayroll({
              staffId: person.id,
              month,
              baseSalary: person.salary,
              bonus: adjustment.bonus,
              deduction: adjustment.deduction,
              paidAt: (/* @__PURE__ */ new Date()).toISOString(),
              mode
            });
            toast.success(`${person.name}'s salary marked paid`);
          }, className: record?.paidAt ? "subtle-button opacity-50" : "btn-primary text-xs", children: record?.paidAt ? "Paid" : "Mark paid" }) })
        ] }, person.id);
      }) })
    ] }) }) })
  ] });
}
export {
  Payroll as component
};
