import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { i as inr, A as AppShell, C as Card, d as dmy } from "./AppShell-9xLAHItq.mjs";
import { u as useApp } from "./router-Dgpn6rjq.mjs";
import "../_libs/sonner.mjs";
import { f as CircleCheck, I as IndianRupee, g as TriangleAlert, d as Sparkles } from "../_libs/lucide-react.mjs";
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
function Notifications() {
  const members = useApp((state) => state.members);
  const payments = useApp((state) => state.payments);
  const leads = useApp((state) => state.leads);
  const today = (/* @__PURE__ */ new Date()).toDateString();
  const items = [...members.flatMap((member) => member.checkIns.filter((checkIn) => new Date(checkIn).toDateString() === today).map((checkIn) => ({
    key: `${member.id}-${checkIn}`,
    icon: CircleCheck,
    color: "text-emerald-400 bg-emerald-500/15",
    title: `${member.name} checked in`,
    body: new Date(checkIn).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit"
    }),
    date: checkIn,
    to: "/attendance"
  }))), ...payments.map((payment) => ({
    key: payment.id,
    icon: payment.status === "Paid" ? IndianRupee : TriangleAlert,
    color: payment.status === "Paid" ? "text-primary bg-primary/15" : "text-amber-400 bg-amber-500/15",
    title: payment.status === "Paid" ? "Payment received" : "Payment pending",
    body: `${inr(payment.amount)} - ${members.find((member) => member.id === payment.memberId)?.name ?? "Member"}`,
    date: payment.date,
    to: payment.status === "Paid" ? "/finance" : "/finance/dues"
  })), ...leads.filter((lead) => lead.status === "New").map((lead) => ({
    key: lead.id,
    icon: Sparkles,
    color: "text-sky-400 bg-sky-500/15",
    title: `New lead: ${lead.name}`,
    body: lead.enquiry,
    date: lead.followUp,
    to: "/leads"
  }))].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Notifications", description: `${items.length} live updates from your gym.`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-2", children: [
    items.map((item) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: item.to, className: "flex gap-3 border-b border-border/50 p-3 last:border-0 hover:bg-secondary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-10 w-10 shrink-0 place-items-center rounded-md ${item.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: item.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] text-muted-foreground", children: dmy(item.date) })
        ] })
      ] }, item.key);
    }),
    items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "No notifications yet." })
  ] }) });
}
export {
  Notifications as component
};
