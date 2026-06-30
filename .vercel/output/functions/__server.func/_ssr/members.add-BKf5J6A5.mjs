import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card } from "./AppShell-9xLAHItq.mjs";
import { u as useApp, q as queueHikvisionEnrollment } from "./router-Dgpn6rjq.mjs";
import { t as toast } from "../_libs/sonner.mjs";
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
const plans = [{
  name: "Basic",
  price: 8999,
  days: 365
}, {
  name: "Premium",
  price: 11999,
  days: 365
}, {
  name: "Premium Plus",
  price: 24999,
  days: 365
}];
function defaultEmployeeNumber() {
  return `EMP${(/* @__PURE__ */ new Date()).getTime().toString().slice(-6)}`;
}
function AddMember() {
  const addMember = useApp((s) => s.addMember);
  const currentBranch = useApp((s) => s.currentBranch);
  const navigate = useNavigate();
  const [saving, setSaving] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "Male",
    plan: "Premium",
    startDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    amountPaid: 11999,
    mode: "UPI",
    ref: "",
    locker: "",
    enrollBiometric: true,
    employeeNumber: defaultEmployeeNumber(),
    cardNumber: "",
    faceImagePath: ""
  });
  const plan = plans.find((p) => p.name === form.plan);
  const expiry = new Date(form.startDate);
  expiry.setDate(expiry.getDate() + plan.days);
  const balance = plan.price - Number(form.amountPaid || 0);
  const set = (k, v) => setForm({
    ...form,
    [k]: v
  });
  const save = async (andAnother) => {
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Name and phone required");
      return;
    }
    const employeeNumber = form.employeeNumber.trim().toUpperCase();
    if (form.enrollBiometric && !employeeNumber) {
      toast.error("Employee number is required for biometric enrollment");
      return;
    }
    setSaving(true);
    try {
      const memberId = form.enrollBiometric ? employeeNumber : void 0;
      addMember({
        id: memberId,
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || void 0,
        plan: form.plan,
        startDate: new Date(form.startDate).toISOString(),
        expiryDate: expiry.toISOString(),
        status: "active",
        amountPaid: Number(form.amountPaid),
        totalAmount: plan.price,
        branchId: currentBranch
      });
      if (form.enrollBiometric) {
        await queueHikvisionEnrollment({
          employeeNumber,
          subjectId: employeeNumber,
          subjectType: "member",
          name: form.name.trim(),
          cardNumber: form.cardNumber.trim() || void 0,
          faceImagePath: form.faceImagePath.trim() || void 0,
          validFrom: new Date(form.startDate).toISOString(),
          validTo: expiry.toISOString(),
          active: true,
          branchId: currentBranch
        });
        toast.success("Member added and queued for device enrollment");
      } else {
        toast.success("Member added");
      }
      if (andAnother) {
        setForm({
          ...form,
          name: "",
          phone: "",
          email: "",
          cardNumber: "",
          faceImagePath: "",
          employeeNumber: defaultEmployeeNumber()
        });
      } else {
        navigate({
          to: "/members"
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Member saved locally, but device enrollment queue failed");
    } finally {
      setSaving(false);
    }
  };
  const Field = ({
    label,
    children
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium", children: label }),
    children
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Add Member", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: "Personal Info" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1", value: form.name, onChange: (e) => set("name", e.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mobile *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1", placeholder: "+91", value: form.phone, onChange: (e) => set("phone", e.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1", type: "email", value: form.email, onChange: (e) => set("email", e.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Date of Birth", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1", type: "date", value: form.dob, onChange: (e) => set("dob", e.target.value) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Gender", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input-field mt-1", value: form.gender, onChange: (e) => set("gender", e.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Male" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Female" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: "Membership" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Plan", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field mt-1", value: form.plan, onChange: (e) => {
        set("plan", e.target.value);
        set("amountPaid", plans.find((p) => p.name === e.target.value).price);
      }, children: plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: p.name }, p.name)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Start Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1", type: "date", value: form.startDate, onChange: (e) => set("startDate", e.target.value) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Expiry", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1 opacity-60", readOnly: true, value: expiry.toISOString().slice(0, 10) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: "Biometric Enrollment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.enrollBiometric, onChange: (event) => set("enrollBiometric", event.target.checked) }),
          "Queue to device"
        ] })
      ] }),
      form.enrollBiometric && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Employee Number *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1 uppercase", value: form.employeeNumber, onChange: (event) => set("employeeNumber", event.target.value.toUpperCase()) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Card Number", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1", value: form.cardNumber, onChange: (event) => set("cardNumber", event.target.value) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Face Image Path", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1", placeholder: "C:\\Users\\padar\\Pictures\\HikvisionFaces\\EMP002.jpg", value: form.faceImagePath, onChange: (event) => set("faceImagePath", event.target.value) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: "Payment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
          "INR ",
          plan.price.toLocaleString("en-IN")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Amount Paid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1", type: "number", value: form.amountPaid, onChange: (e) => set("amountPaid", e.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Balance Due" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-semibold ${balance > 0 ? "text-destructive" : "text-primary"}`, children: [
          "INR ",
          balance.toLocaleString("en-IN")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Payment Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 mt-1", children: ["Cash", "UPI", "Card", "Bank"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => set("mode", m), className: `py-2 text-xs rounded-lg border ${form.mode === m ? "bg-primary text-primary-foreground border-primary font-semibold" : "border-border text-muted-foreground"}`, children: m }, m)) }) }),
      (form.mode === "UPI" || form.mode === "Card") && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Reference / UTR", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1", value: form.ref, onChange: (e) => set("ref", e.target.value) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: saving, onClick: () => save(false), className: "btn-primary w-full disabled:opacity-60", children: saving ? "Saving..." : "Save Member" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: saving, onClick: () => save(true), className: "w-full mt-2 py-3 rounded-xl border border-border text-sm text-muted-foreground hover:bg-secondary disabled:opacity-60", children: "Save & Add Another" })
  ] });
}
export {
  AddMember as component
};
