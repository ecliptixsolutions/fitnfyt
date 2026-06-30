import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card } from "./AppShell-9xLAHItq.mjs";
import { u as useApp } from "./router-Dgpn6rjq.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
function RecordTransaction() {
  const members = useApp((state) => state.members);
  const staff = useApp((state) => state.staff);
  const payments = useApp((state) => state.payments);
  const addPayment = useApp((state) => state.addPayment);
  const addRefund = useApp((state) => state.addRefund);
  const navigate = useNavigate();
  const trainers = staff.filter((person) => person.role === "Trainer" && person.active);
  const ptPayments = payments.filter((payment) => payment.category === "Personal Training" && payment.type !== "refund" && payment.status === "Paid");
  const [form, setForm] = reactExports.useState({
    memberId: members[0]?.id ?? "",
    amount: 0,
    mode: "UPI",
    status: "Paid",
    type: "payment",
    category: "Membership",
    plan: "",
    trainerId: trainers[0]?.id ?? "",
    commissionPercent: 40,
    refundForPaymentId: "",
    date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    dueDate: "",
    reference: "",
    notes: ""
  });
  const member = members.find((item) => item.id === form.memberId);
  const set = (key, value) => setForm({
    ...form,
    [key]: value
  });
  const linkedRefundPayment = ptPayments.find((payment) => payment.id === form.refundForPaymentId);
  const submit = () => {
    if (!member || form.amount <= 0) return toast.error("Select a member and enter a valid amount");
    if (form.category === "Personal Training" && !form.trainerId) return toast.error("Select a trainer for Personal Training");
    const transaction = {
      memberId: member.id,
      amount: form.amount,
      date: new Date(form.date).toISOString(),
      mode: form.mode,
      plan: form.category === "Personal Training" ? form.plan || "Personal Training" : form.plan || member.plan,
      reference: form.reference,
      notes: form.notes,
      dueDate: form.dueDate ? new Date(form.dueDate).toISOString() : void 0,
      category: form.category,
      trainerId: form.category === "Personal Training" ? form.trainerId : void 0,
      commissionPercent: form.category === "Personal Training" ? form.commissionPercent : void 0,
      refundForPaymentId: form.type === "refund" && form.category === "Personal Training" ? form.refundForPaymentId : void 0
    };
    if (form.type === "refund") addRefund(transaction);
    else addPayment({
      ...transaction,
      status: form.status,
      type: "payment"
    });
    toast.success(form.type === "refund" ? "Refund recorded" : "Payment recorded");
    navigate({
      to: "/finance/payments"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Record transaction", description: "Record a payment, pending due, or refund.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mx-auto max-w-3xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1 rounded-md bg-input p-1", children: ["payment", "refund"].map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => set("type", type), className: `rounded py-2 text-xs capitalize ${form.type === type ? "bg-primary font-bold text-white" : "text-muted-foreground"}`, children: type }, type)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Member", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: form.memberId, onChange: (event) => set("memberId", event.target.value), children: members.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: item.id, children: [
      item.name,
      " - ",
      item.plan
    ] }, item.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Transaction category", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input-field", value: form.category, onChange: (event) => {
      const category = event.target.value;
      setForm({
        ...form,
        category,
        plan: category === "Personal Training" ? "PT Strength Transformation - 12 sessions" : "",
        status: category === "Personal Training" ? "Paid" : form.status
      });
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Membership" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Personal Training" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
    ] }) }),
    form.category === "Personal Training" && form.type === "refund" && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Refund against PT payment", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input-field", value: form.refundForPaymentId, onChange: (event) => {
      const payment = ptPayments.find((item) => item.id === event.target.value);
      setForm({
        ...form,
        refundForPaymentId: event.target.value,
        memberId: payment?.memberId ?? form.memberId,
        trainerId: payment?.trainerId ?? form.trainerId,
        commissionPercent: payment?.commissionPercent ?? form.commissionPercent,
        plan: payment ? `${payment.plan} - refund` : form.plan
      });
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select original PT sale" }),
      ptPayments.map((payment) => {
        const paymentMember = members.find((item) => item.id === payment.memberId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: payment.id, children: [
          paymentMember?.name ?? "Unknown",
          " - ",
          payment.plan,
          " - ₹",
          payment.amount.toLocaleString("en-IN")
        ] }, payment.id);
      })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Transaction date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "input-field", value: form.date, onChange: (event) => set("date", event.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Amount", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "input-field", value: form.amount || "", onChange: (event) => set("amount", Number(event.target.value)) }) })
    ] }),
    form.type === "payment" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Status", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input-field", value: form.status, onChange: (event) => set("status", event.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Paid" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Pending" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Due date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "input-field", value: form.dueDate, onChange: (event) => set("dueDate", event.target.value) }) })
    ] }),
    form.category === "Personal Training" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-primary/30 bg-primary/5 !p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-bold uppercase tracking-wider text-primary", children: "Personal Training commission" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "PT package", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.plan, onChange: (event) => set("plan", event.target.value) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Trainer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: form.trainerId, onChange: (event) => set("trainerId", event.target.value), children: trainers.map((trainer) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: trainer.id, children: trainer.name }, trainer.id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Commission %", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", type: "number", value: form.commissionPercent, onChange: (event) => set("commissionPercent", Number(event.target.value)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Trainer commission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-lg font-black text-primary", children: [
            "₹",
            Math.round(form.amount * form.commissionPercent / 100).toLocaleString("en-IN")
          ] }),
          linkedRefundPayment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] text-muted-foreground", children: [
            "Original sale ₹",
            linkedRefundPayment.amount.toLocaleString("en-IN")
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Payment mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: ["Cash", "UPI", "Card", "Bank"].map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => set("mode", mode), className: `rounded-md border py-2 text-xs ${form.mode === mode ? "border-primary bg-primary font-bold text-white" : "border-border text-muted-foreground"}`, children: mode }, mode)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Reference / receipt number", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.reference, onChange: (event) => set("reference", event.target.value) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Notes", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "input-field", rows: 3, value: form.notes, onChange: (event) => set("notes", event.target.value) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: submit, className: "btn-primary w-full", children: "Save transaction" })
  ] }) });
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
  RecordTransaction as component
};
