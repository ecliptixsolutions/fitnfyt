import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card, i as inr } from "./AppShell-Dv9uxNKu.mjs";
import { d as downloadCsv, a as downloadExcel } from "./export-DlLDZkDM.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { R as ResponsiveContainer, B as BarChart, X as XAxis, T as Tooltip, b as Bar } from "../_libs/recharts.mjs";
import { K as List, N as CreditCard, O as CircleAlert, Q as RotateCcw, D as Download, y as FileSpreadsheet, V as ReceiptIndianRupee } from "../_libs/lucide-react.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/lodash.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function Finance() {
  const payments = useApp((state) => state.payments);
  const members = useApp((state) => state.members);
  const [period, setPeriod] = reactExports.useState("month");
  const now = /* @__PURE__ */ new Date();
  const filtered = payments.filter((payment) => inPeriod(payment.date, period, now));
  const paid = filtered.filter((payment) => payment.status === "Paid" && payment.type !== "refund");
  const refunds = filtered.filter((payment) => payment.type === "refund");
  const pending = payments.filter((payment) => payment.status === "Pending");
  const total = paid.reduce((sum, payment) => sum + payment.amount, 0);
  const refundTotal = refunds.reduce((sum, payment) => sum + payment.amount, 0);
  const pendingTotal = pending.reduce((sum, payment) => sum + payment.amount, 0);
  const newMembers = members.filter((member) => inPeriod(member.startDate, period, now)).length;
  const chart = Array.from({
    length: 6
  }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 5 + index, 1);
    const value = payments.filter((payment) => {
      const paidAt = new Date(payment.date);
      return payment.status === "Paid" && payment.type !== "refund" && paidAt.getMonth() === date.getMonth() && paidAt.getFullYear() === date.getFullYear();
    }).reduce((sum, payment) => sum + payment.amount, 0);
    return {
      month: date.toLocaleDateString("en-IN", {
        month: "short"
      }),
      value
    };
  });
  const rows = filtered.map((payment) => {
    const member = members.find((item) => item.id === payment.memberId);
    return [payment.date.slice(0, 10), member?.name ?? "Unknown", payment.type ?? "payment", payment.plan, payment.mode, payment.status, payment.amount, payment.reference ?? ""];
  });
  const headers = ["Date", "Member", "Type", "Plan", "Mode", "Status", "Amount", "Reference"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Finance", description: "Collections, dues, refunds, and transaction reporting.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadCsv("fitfyt-finance", headers, rows), className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
      "CSV"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadExcel("fitfyt-finance", headers, rows), className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "h-4 w-4" }),
      "Excel"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/finance/record", className: "btn-primary text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiptIndianRupee, { className: "h-4 w-4" }),
      "Record transaction"
    ] })
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex gap-1 overflow-x-auto rounded-md bg-input p-1 sm:w-fit", children: ["week", "month", "year", "all"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPeriod(value), className: `rounded px-4 py-2 text-xs capitalize ${period === value ? "bg-primary font-bold text-white" : "text-muted-foreground"}`, children: value === "all" ? "All time" : `This ${value}` }, value)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Collected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-3xl font-black text-emerald-400", children: inr(total) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
          paid.length,
          " paid transactions"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Pending dues" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-3xl font-black text-destructive", children: inr(pendingTotal) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
          pending.length,
          " pending transactions"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Refunds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-3xl font-black text-amber-400", children: inr(refundTotal) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
          refunds.length,
          " refunds recorded"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-sm font-semibold", children: "Revenue - Last 6 months" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: chart, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", axisLine: false, tickLine: false, tick: {
          fill: "var(--muted-foreground)",
          fontSize: 11
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (value) => inr(Number(value)), contentStyle: {
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 8
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", fill: "var(--primary)", radius: [5, 5, 0, 0] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-black", children: newMembers }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase text-muted-foreground", children: "New members" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-black", children: paid.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase text-muted-foreground", children: "Payments" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-black", children: inr(paid.length ? Math.round(total / paid.length) : 0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase text-muted-foreground", children: "Average payment" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/finance/payments", className: "card-surface flex items-center gap-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Payments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Search transactions and receipts" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/finance/record", className: "card-surface flex items-center gap-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5 text-amber-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Record" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Payment, due, or refund" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/finance/dues", className: "card-surface flex items-center gap-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-5 w-5 text-destructive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Dues" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Collect pending balances" })
        ] })
      ] })
    ] }),
    refunds.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4 text-amber-400" }),
      "Refunds are excluded from collected revenue."
    ] })
  ] });
}
function inPeriod(value, period, now) {
  if (period === "all") return true;
  const date = new Date(value);
  if (period === "year") return date.getFullYear() === now.getFullYear();
  if (period === "month") return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  return now.getTime() - date.getTime() <= 7 * 864e5 && date <= now;
}
export {
  Finance as component
};
