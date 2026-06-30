import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card, i as inr, b as initials, c as colorFromName, d as dmy } from "./AppShell-9xLAHItq.mjs";
import { d as downloadCsv, a as downloadExcel } from "./export-DlLDZkDM.mjs";
import { u as useApp } from "./router-Dgpn6rjq.mjs";
import { w as Search, X, _ as Save, T as Trash2, D as Download, y as FileSpreadsheet } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
function Payments() {
  const payments = useApp((state) => state.payments);
  const members = useApp((state) => state.members);
  const staff = useApp((state) => state.staff);
  const updatePayment = useApp((state) => state.updatePayment);
  const deletePayment = useApp((state) => state.deletePayment);
  const [query, setQuery] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("all");
  const [mode, setMode] = reactExports.useState("all");
  const [editingId, setEditingId] = reactExports.useState(null);
  const [draft, setDraft] = reactExports.useState({});
  const editingPayment = payments.find((payment) => payment.id === editingId);
  const trainers = staff.filter((person) => person.role === "Trainer");
  const list = payments.filter((payment) => status === "all" || payment.status === status).filter((payment) => mode === "all" || payment.mode === mode).filter((payment) => {
    const member = members.find((item) => item.id === payment.memberId);
    const trainer = staff.find((person) => person.id === payment.trainerId);
    return `${member?.name ?? ""} ${trainer?.name ?? ""} ${payment.plan} ${payment.reference ?? ""}`.toLowerCase().includes(query.toLowerCase());
  }).sort((a, b) => b.date.localeCompare(a.date));
  const rows = list.map((payment) => [payment.date.slice(0, 10), members.find((item) => item.id === payment.memberId)?.name ?? "Unknown", payment.type ?? "payment", payment.category ?? "Membership", payment.plan, staff.find((person) => person.id === payment.trainerId)?.name ?? "", payment.commissionPercent ? `${payment.commissionPercent}%` : "", payment.commissionAmount ?? "", payment.mode, payment.status, payment.amount, payment.reference ?? ""]);
  const headers = ["Date", "Member", "Type", "Category", "Plan", "Trainer", "Commission %", "Commission", "Mode", "Status", "Amount", "Reference"];
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
    editingPayment && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Edit transaction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Changes recalculate member dues and PT trainer payroll instantly." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setEditingId(null);
          setDraft({});
        }, className: "subtle-button", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          "Cancel"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2 xl:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Member", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: draft.memberId ?? editingPayment.memberId, onChange: (event) => setDraft({
          ...draft,
          memberId: event.target.value
        }), children: members.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: member.id, children: member.name }, member.id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Category", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input-field", value: draft.category ?? editingPayment.category ?? "Membership", onChange: (event) => {
          const category = event.target.value;
          setDraft({
            ...draft,
            category,
            trainerId: category === "Personal Training" ? draft.trainerId ?? editingPayment.trainerId ?? trainers[0]?.id : void 0,
            commissionPercent: category === "Personal Training" ? draft.commissionPercent ?? editingPayment.commissionPercent ?? 40 : void 0
          });
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Membership" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Personal Training" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", type: "date", value: (draft.date ?? editingPayment.date).slice(0, 10), onChange: (event) => setDraft({
          ...draft,
          date: new Date(event.target.value).toISOString()
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Amount", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", type: "number", value: draft.amount ?? editingPayment.amount, onChange: (event) => setDraft({
          ...draft,
          amount: Number(event.target.value)
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Plan / package", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: draft.plan ?? editingPayment.plan, onChange: (event) => setDraft({
          ...draft,
          plan: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: draft.mode ?? editingPayment.mode, onChange: (event) => setDraft({
          ...draft,
          mode: event.target.value
        }), children: ["Cash", "UPI", "Card", "Bank"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Status", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input-field", value: draft.status ?? editingPayment.status, onChange: (event) => setDraft({
          ...draft,
          status: event.target.value
        }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Paid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Pending" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Reference", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: draft.reference ?? editingPayment.reference ?? "", onChange: (event) => setDraft({
          ...draft,
          reference: event.target.value
        }) }) }),
        (draft.category ?? editingPayment.category) === "Personal Training" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Trainer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: draft.trainerId ?? editingPayment.trainerId ?? trainers[0]?.id ?? "", onChange: (event) => setDraft({
            ...draft,
            trainerId: event.target.value
          }), children: trainers.map((person) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: person.id, children: person.name }, person.id)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Commission %", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", type: "number", min: "0", max: "100", value: draft.commissionPercent ?? editingPayment.commissionPercent ?? 40, onChange: (event) => setDraft({
            ...draft,
            commissionPercent: Number(event.target.value)
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Trainer commission" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-primary", children: inr(Math.round((draft.amount ?? editingPayment.amount) * (draft.commissionPercent ?? editingPayment.commissionPercent ?? 40) / 100)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        const category = draft.category ?? editingPayment.category ?? "Membership";
        if (category === "Personal Training" && !(draft.trainerId ?? editingPayment.trainerId)) {
          toast.error("Select a trainer before saving PT commission");
          return;
        }
        updatePayment(editingPayment.id, {
          ...draft,
          category,
          trainerId: category === "Personal Training" ? draft.trainerId ?? editingPayment.trainerId : void 0,
          commissionPercent: category === "Personal Training" ? draft.commissionPercent ?? editingPayment.commissionPercent ?? 40 : void 0
        });
        setEditingId(null);
        setDraft({});
        toast.success("Transaction updated");
      }, className: "btn-primary mt-4 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
        "Save changes"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "data-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Member" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: list.map((payment) => {
          const member = members.find((item) => item.id === payment.memberId);
          const trainer = staff.find((person) => person.id === payment.trainerId);
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: payment.category ?? "Membership" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: payment.plan }),
              trainer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-primary", children: [
                trainer.name,
                " - ",
                payment.commissionPercent ?? 40,
                "% commission"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: payment.mode }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `status-badge ${payment.status === "Paid" ? "status-active" : "status-expiring"}`, children: payment.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: payment.type === "refund" ? "font-bold text-amber-400" : "font-bold text-emerald-400", children: [
              payment.type === "refund" ? "-" : "",
              inr(payment.amount)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setEditingId(payment.id);
                setDraft({});
              }, className: "subtle-button !min-h-8 !px-3 text-xs", children: "Edit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
                deletePayment(payment.id);
                toast.success("Transaction deleted");
              }, className: "subtle-button !min-h-8 !px-3 text-xs text-destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
                "Delete"
              ] })
            ] }) })
          ] }, payment.id);
        }) })
      ] }) }),
      !list.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "No matching transactions." })
    ] })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block space-y-1 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    children
  ] });
}
export {
  Payments as component
};
