import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card, b as initials, c as colorFromName, d as dmy, i as inr } from "./AppShell-Dv9uxNKu.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { b as Bell, f as CircleCheck } from "../_libs/lucide-react.mjs";
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
function Dues() {
  const members = useApp((state) => state.members);
  const pendingPayments = useApp((state) => state.payments).filter((payment) => payment.status === "Pending");
  const addPayment = useApp((state) => state.addPayment);
  const updatePayment = useApp((state) => state.updatePayment);
  const updateMember = useApp((state) => state.updateMember);
  const dues = members.map((member) => ({
    member,
    amount: Math.max(0, member.totalAmount - member.amountPaid)
  })).filter((item) => item.amount > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Pending dues", description: `${dues.length} members have an outstanding balance.`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-2", children: [
    dues.map(({
      member,
      amount
    }) => {
      const pending = pendingPayments.find((payment) => payment.memberId === member.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 border-b border-border/50 p-3 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-10 w-10 place-items-center rounded-full text-xs font-bold text-white ${colorFromName(member.name)}`, children: initials(member.name) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-48 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: member.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            member.plan,
            " - joined ",
            dmy(member.startDate),
            pending?.dueDate ? ` - due ${dmy(pending.dueDate)}` : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-destructive", children: inr(amount) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast.success(`Reminder prepared for ${member.name}`), className: "subtle-button", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
          "Remind"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          if (pending) {
            updatePayment(pending.id, {
              status: "Paid",
              date: (/* @__PURE__ */ new Date()).toISOString()
            });
            updateMember(member.id, {
              amountPaid: member.amountPaid + pending.amount
            });
          } else {
            addPayment({
              memberId: member.id,
              amount,
              date: (/* @__PURE__ */ new Date()).toISOString(),
              mode: "UPI",
              plan: member.plan,
              status: "Paid",
              type: "payment",
              notes: "Due collected"
            });
          }
          toast.success(`${member.name}'s due collected`);
        }, className: "btn-primary text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
          "Collect"
        ] })
      ] }, member.id);
    }),
    !dues.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "All member balances are fully paid." })
  ] }) });
}
export {
  Dues as component
};
