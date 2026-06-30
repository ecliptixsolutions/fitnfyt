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
function Add() {
  const addLead = useApp((state) => state.addLead);
  const staff = useApp((state) => state.staff);
  const navigate = useNavigate();
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    enquiry: "Weight Loss",
    source: "Walk-in",
    followUp: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    notes: "",
    assignedStaffId: ""
  });
  const set = (key, value) => setForm({
    ...form,
    [key]: value
  });
  const save = () => {
    if (!form.name.trim() || !form.phone.trim()) return toast.error("Name and phone are required");
    addLead({
      ...form,
      followUp: new Date(form.followUp).toISOString(),
      status: "New",
      activities: []
    });
    toast.success("Lead added");
    navigate({
      to: "/leads"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Add lead", description: "Create a lead manually from any source.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mx-auto max-w-3xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.name, onChange: (event) => set("name", event.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.phone, onChange: (event) => set("phone", event.target.value) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Enquiry", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: form.enquiry, onChange: (event) => set("enquiry", event.target.value), children: ["Weight Loss", "Muscle Gain", "General Fitness", "Zumba", "Yoga", "MMA"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Source", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: form.source, onChange: (event) => set("source", event.target.value), children: ["Walk-in", "WhatsApp", "Instagram", "Facebook", "Referral", "Website"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Follow-up date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "input-field", value: form.followUp, onChange: (event) => set("followUp", event.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Assign to staff", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input-field", value: form.assignedStaffId, onChange: (event) => set("assignedStaffId", event.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Unassigned" }),
        staff.filter((person) => person.active).map((person) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: person.id, children: [
          person.name,
          " - ",
          person.role
        ] }, person.id))
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Notes", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "input-field", rows: 4, value: form.notes, onChange: (event) => set("notes", event.target.value) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: save, className: "btn-primary w-full", children: "Save lead" })
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
  Add as component
};
