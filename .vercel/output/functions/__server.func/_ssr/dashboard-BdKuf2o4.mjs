import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as daysBetween, i as inr, A as AppShell, C as Card, b as initials, c as colorFromName, S as StatusBadge, d as dmy } from "./AppShell-9xLAHItq.mjs";
import { u as useApp, g as getTrainerCommissionEntries } from "./router-Dgpn6rjq.mjs";
import "../_libs/sonner.mjs";
import { U as Users, f as CircleCheck, I as IndianRupee, r as CalendarClock, A as ArrowUpRight, g as TriangleAlert, s as UserPlus, t as MessageSquareText } from "../_libs/lucide-react.mjs";
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
function Dashboard() {
  const auth = useApp((state) => state.auth);
  const members = useApp((state) => state.members);
  const payments = useApp((state) => state.payments);
  const leads = useApp((state) => state.leads);
  const staff = useApp((state) => state.staff);
  const payroll = useApp((state) => state.payroll ?? []);
  const {
    active,
    expiring,
    joinedThisMonth,
    monthRevenue,
    paidPayments,
    pendingPayments,
    pendingTrainerCommission,
    recentMembers,
    revenueChange,
    revenueData,
    todayCheckins,
    newLeads
  } = reactExports.useMemo(() => {
    const now = /* @__PURE__ */ new Date();
    const today = now.toDateString();
    const active2 = members.filter((m) => m.status === "active" || m.status === "expiring").length;
    const paidPayments2 = payments.filter((payment) => payment.status === "Paid" && payment.type !== "refund");
    const monthRevenue2 = paidPayments2.filter((payment) => {
      const date = new Date(payment.date);
      return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    }).reduce((sum, payment) => sum + payment.amount, 0);
    const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const previousRevenue = paidPayments2.filter((payment) => {
      const date = new Date(payment.date);
      return date.getMonth() === previousMonth.getMonth() && date.getFullYear() === previousMonth.getFullYear();
    }).reduce((sum, payment) => sum + payment.amount, 0);
    const revenueChange2 = previousRevenue === 0 ? null : Math.round((monthRevenue2 - previousRevenue) / previousRevenue * 100);
    const joinedThisMonth2 = members.filter((member) => {
      const date = new Date(member.startDate);
      return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    }).length;
    const revenueData2 = Array.from({
      length: 6
    }, (_, index) => {
      const date = new Date(now.getFullYear(), now.getMonth() - 5 + index, 1);
      return {
        month: date.toLocaleDateString("en-IN", {
          month: "short"
        }),
        revenue: paidPayments2.filter((payment) => {
          const paidAt = new Date(payment.date);
          return paidAt.getMonth() === date.getMonth() && paidAt.getFullYear() === date.getFullYear();
        }).reduce((sum, payment) => sum + payment.amount, 0)
      };
    });
    const expiring2 = members.filter((m) => {
      const days = daysBetween(now, new Date(m.expiryDate));
      return days > 0 && days <= 7;
    }).length;
    const todayCheckins2 = members.filter((m) => m.checkIns.some((checkIn) => new Date(checkIn).toDateString() === today)).length;
    const pendingTrainerCommission2 = getTrainerCommissionEntries(payments, members, staff, payroll).filter((entry) => entry.payoutStatus === "Pending").reduce((sum, entry) => sum + entry.commissionAmount, 0);
    const recentMembers2 = [...members].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()).slice(0, 6);
    return {
      active: active2,
      expiring: expiring2,
      joinedThisMonth: joinedThisMonth2,
      monthRevenue: monthRevenue2,
      paidPayments: paidPayments2,
      pendingPayments: payments.filter((p) => p.status === "Pending").length,
      pendingTrainerCommission: pendingTrainerCommission2,
      recentMembers: recentMembers2,
      revenueChange: revenueChange2,
      revenueData: revenueData2,
      todayCheckins: todayCheckins2,
      newLeads: leads.filter((lead) => lead.status === "New").length
    };
  }, [leads, members, payments, payroll, staff]);
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RevenueTrendChart, { data: revenueData }) })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(QueueItem, { label: `${pendingPayments} payments overdue`, action: "Collect", to: "/finance/dues" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(QueueItem, { label: `${newLeads} new leads to follow up`, action: "Assign", to: "/leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(QueueItem, { label: `${inr(pendingTrainerCommission)} trainer commission payable`, action: "Payroll", to: "/staff/payroll" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: recentMembers.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
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
function RevenueTrendChart({
  data
}) {
  const width = 600;
  const height = 220;
  const padding = 28;
  const max = Math.max(...data.map((item) => item.revenue), 1);
  const step = data.length > 1 ? (width - padding * 2) / (data.length - 1) : 0;
  const points = data.map((item, index) => {
    const x = padding + index * step;
    const y = height - padding - item.revenue / max * (height - padding * 2);
    return {
      ...item,
      x,
      y
    };
  });
  const line = points.map((point) => `${point.x},${point.y}`).join(" ");
  const area = `${padding},${height - padding} ${line} ${width - padding},${height - padding}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-full w-full overflow-visible", viewBox: `0 0 ${width} ${height}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "dashboardRevenueFill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--primary)", stopOpacity: "0.35" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--primary)", stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: area, fill: "url(#dashboardRevenueFill)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: line, fill: "none", stroke: "var(--primary)", strokeWidth: "3" }),
    points.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: point.x, cy: point.y, r: "4", fill: "var(--primary)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: point.x, y: height - 4, textAnchor: "middle", className: "fill-muted-foreground text-[11px]", children: point.month })
    ] }, point.month))
  ] }) });
}
export {
  Dashboard as component
};
