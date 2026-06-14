import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as daysBetween, i as inr, A as AppShell, C as Card, b as initials, c as colorFromName, S as StatusBadge, d as dmy } from "./AppShell-Dv9uxNKu.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { U as Users, f as CircleCheck, I as IndianRupee, r as CalendarClock, A as ArrowUpRight, g as TriangleAlert, s as UserPlus, t as MessageSquareText } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, A as AreaChart, X as XAxis, T as Tooltip, a as Area } from "../_libs/recharts.mjs";
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
function Dashboard() {
  const {
    auth,
    members,
    payments,
    leads
  } = useApp();
  const now = /* @__PURE__ */ new Date();
  const active = members.filter((m) => m.status === "active" || m.status === "expiring").length;
  const paidPayments = payments.filter((payment) => payment.status === "Paid" && payment.type !== "refund");
  const monthRevenue = paidPayments.filter((payment) => {
    const date = new Date(payment.date);
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  }).reduce((sum, payment) => sum + payment.amount, 0);
  const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const previousRevenue = paidPayments.filter((payment) => {
    const date = new Date(payment.date);
    return date.getMonth() === previousMonth.getMonth() && date.getFullYear() === previousMonth.getFullYear();
  }).reduce((sum, payment) => sum + payment.amount, 0);
  const revenueChange = previousRevenue === 0 ? null : Math.round((monthRevenue - previousRevenue) / previousRevenue * 100);
  const joinedThisMonth = members.filter((member) => {
    const date = new Date(member.startDate);
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  }).length;
  const revenueData = Array.from({
    length: 6
  }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 5 + index, 1);
    return {
      month: date.toLocaleDateString("en-IN", {
        month: "short"
      }),
      revenue: paidPayments.filter((payment) => {
        const paidAt = new Date(payment.date);
        return paidAt.getMonth() === date.getMonth() && paidAt.getFullYear() === date.getFullYear();
      }).reduce((sum, payment) => sum + payment.amount, 0)
    };
  });
  const expiring = members.filter((m) => {
    const days = daysBetween(now, new Date(m.expiryDate));
    return days > 0 && days <= 7;
  }).length;
  const todayCheckins = members.filter((m) => m.checkIns.some((checkIn) => new Date(checkIn).toDateString() === now.toDateString())).length;
  const stats = [{
    label: "Total Members",
    value: members.length,
    detail: `${joinedThisMonth} joined this month`,
    icon: Users
  }, {
    label: "Active Members",
    value: active,
    detail: `${members.length ? Math.round(active / members.length * 100) : 0}% retention`,
    icon: CircleCheck
  }, {
    label: "Revenue (MTD)",
    value: inr(monthRevenue),
    detail: revenueChange === null ? "No revenue last month" : `${revenueChange >= 0 ? "+" : ""}${revenueChange}% vs last month`,
    icon: IndianRupee
  }, {
    label: "Expiring in 7d",
    value: expiring,
    detail: "Send reminders",
    icon: CalendarClock
  }];
  const actions = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/attendance", className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-4 w-4" }),
      "Today"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/members/add", className: "btn-primary text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-4 w-4" }),
      "Add member"
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: `Welcome back, ${auth?.name ?? "Owner"}`, description: "Here's how Fit & Fyt is performing today.", actions, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4", children: stats.map((stat) => {
      const Icon = stat.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: stat.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-3xl font-black", children: stat.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-emerald-400", children: stat.detail })
      ] }, stat.label);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.7fr)_minmax(300px,0.8fr)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Revenue trend" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Last 6 months" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: revenueData, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "revenueFill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--primary)", stopOpacity: 0.35 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--primary)", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", axisLine: false, tickLine: false, tick: {
            fill: "var(--muted-foreground)",
            fontSize: 11
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 8
          }, formatter: (value) => inr(Number(value)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "revenue", stroke: "var(--primary)", strokeWidth: 2, fill: "url(#revenueFill)" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Action queue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Items needing attention" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-amber-400" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(QueueItem, { label: `${expiring} plans expiring this week`, action: "Remind", to: "/members" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(QueueItem, { label: `${payments.filter((p) => p.status === "Pending").length} payments overdue`, action: "Collect", to: "/finance/dues" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(QueueItem, { label: `${leads.filter((lead) => lead.status === "New").length} new leads to follow up`, action: "Assign", to: "/leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(QueueItem, { label: "Send attendance follow-ups", action: "SMS", to: "/messages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 border-t border-border py-3 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Daily backup scheduled · 2:00 AM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-badge status-active", children: "Ready" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-5 !p-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Recent members" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Latest memberships and renewals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/members", className: "text-xs font-semibold text-primary", children: "View all" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "data-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Member" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Check-ins" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Expires" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [...members].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()).slice(0, 6).map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/members/$id", params: {
            id: member.id
          }, className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-8 w-8 place-items-center rounded-full text-[10px] font-bold text-white ${colorFromName(member.name)}`, children: initials(member.name) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: member.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: member.id.toUpperCase() })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: member.plan }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: member.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: member.checkIns.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: dmy(member.expiryDate) })
        ] }, member.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/attendance", className: "subtle-button justify-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary" }),
        todayCheckins,
        " checked in today"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/members/add", className: "subtle-button justify-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-4 w-4 text-primary" }),
        "Add a new member"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/messages", className: "subtle-button justify-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareText, { className: "h-4 w-4 text-primary" }),
        "Message members"
      ] })
    ] })
  ] });
}
function QueueItem({
  label,
  action,
  to
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 border-t border-border py-3 text-xs first:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "rounded-full border border-primary/40 px-2 py-1 text-[10px] font-semibold text-primary", children: action })
  ] });
}
export {
  Dashboard as component
};
