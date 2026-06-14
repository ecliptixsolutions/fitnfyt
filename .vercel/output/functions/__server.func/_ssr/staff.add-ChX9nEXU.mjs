import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card } from "./AppShell-Dv9uxNKu.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
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
import "../_libs/zustand.mjs";
const permissions = ["View Members", "Add Members", "Edit Members", "View Finance", "Record Payments", "Mark Attendance", "View Reports", "Manage Leads"];
function Add() {
  const addStaff = useApp((state) => state.addStaff);
  const navigate = useNavigate();
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    role: "Trainer",
    joined: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    salary: 2e4,
    shift: "06:00 - 14:00",
    weeklyOff: "Sunday",
    permissions: [...permissions]
  });
  const set = (key, value) => setForm({
    ...form,
    [key]: value
  });
  const save = () => {
    if (!form.name.trim() || !form.phone.trim()) return toast.error("Name and phone are required");
    addStaff({
      ...form,
      joined: new Date(form.joined).toISOString(),
      active: true,
      assignedMemberIds: []
    });
    toast.success("Staff added");
    navigate({
      to: "/staff"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Add staff", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mx-auto max-w-3xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.name, onChange: (event) => set("name", event.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.phone, onChange: (event) => set("phone", event.target.value) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Role", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: form.role, onChange: (event) => set("role", event.target.value), children: ["Trainer", "Receptionist", "Manager"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Joining date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "input-field", value: form.joined, onChange: (event) => set("joined", event.target.value) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Monthly salary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "input-field", value: form.salary, onChange: (event) => set("salary", Number(event.target.value)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Shift", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.shift, onChange: (event) => set("shift", event.target.value) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Weekly off", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: form.weeklyOff, onChange: (event) => set("weeklyOff", event.target.value), children: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Permissions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-2", children: permissions.map((permission) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 rounded-md border border-border p-2 text-xs text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.permissions.includes(permission), onChange: (event) => set("permissions", event.target.checked ? [...form.permissions, permission] : form.permissions.filter((item) => item !== permission)), className: "accent-primary" }),
      permission
    ] }, permission)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: save, className: "btn-primary w-full", children: "Save staff" })
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
