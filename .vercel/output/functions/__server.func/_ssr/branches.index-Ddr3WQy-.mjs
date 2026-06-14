import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card, i as inr } from "./AppShell-Dv9uxNKu.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { B as Building2, Y as MapPin, Z as Phone, P as PenLine, T as Trash2, f as CircleCheck, q as Plus } from "../_libs/lucide-react.mjs";
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
function Branches() {
  const branches = useApp((state) => state.branches);
  const members = useApp((state) => state.members);
  const staff = useApp((state) => state.staff);
  const leads = useApp((state) => state.leads);
  const payments = useApp((state) => state.payments);
  const currentBranch = useApp((state) => state.currentBranch);
  const addBranch = useApp((state) => state.addBranch);
  const updateBranch = useApp((state) => state.updateBranch);
  const deleteBranch = useApp((state) => state.deleteBranch);
  const setCurrentBranch = useApp((state) => state.setCurrentBranch);
  const [editing, setEditing] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    name: "",
    city: "Mumbai",
    manager: "",
    address: "",
    phone: "",
    active: true
  });
  const openForm = (branch) => {
    setEditing(branch ?? null);
    setForm({
      name: branch?.name ?? "",
      city: branch?.city ?? "Mumbai",
      manager: branch?.manager ?? "",
      address: branch?.address ?? "",
      phone: branch?.phone ?? "",
      active: branch?.active ?? true
    });
  };
  const save = () => {
    if (!form.name.trim() || !form.city.trim()) return toast.error("Branch name and city are required");
    if (editing) {
      updateBranch(editing.id, form);
      toast.success("Branch updated");
    } else {
      addBranch(form);
      toast.success("Branch added");
    }
    setEditing(null);
    setForm({
      name: "",
      city: "Mumbai",
      manager: "",
      address: "",
      phone: "",
      active: true
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Branches", description: "Manage locations, managers, members, staff, and branch performance.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openForm(), className: "btn-primary text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
    "Add branch"
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-3 sm:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Branches", value: branches.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Members", value: members.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Staff", value: staff.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Open leads", value: leads.filter((lead) => lead.status !== "Converted").length })
    ] }),
    (editing || form.name || form.address || form.phone) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: editing ? "Edit branch" : "Add branch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setEditing(null);
          setForm({
            name: "",
            city: "Mumbai",
            manager: "",
            address: "",
            phone: "",
            active: true
          });
        }, className: "text-xs text-muted-foreground hover:text-primary", children: "Cancel" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Branch name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.name, onChange: (event) => setForm({
          ...form,
          name: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.city, onChange: (event) => setForm({
          ...form,
          city: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Manager", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.manager, onChange: (event) => setForm({
          ...form,
          manager: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Address", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.address, onChange: (event) => setForm({
          ...form,
          address: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.phone, onChange: (event) => setForm({
          ...form,
          phone: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-end gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.active, onChange: (event) => setForm({
            ...form,
            active: event.target.checked
          }), className: "mb-3 accent-primary" }),
          "Active branch"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: save, className: "btn-primary mt-4 w-full", children: "Save branch" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 xl:grid-cols-2", children: branches.map((branch) => {
      const branchMembers = members.filter((member) => (member.branchId ?? "b1") === branch.id);
      const branchStaff = staff.filter((person) => (person.branchId ?? "b1") === branch.id);
      const branchRevenue = payments.filter((payment) => payment.status === "Paid" && payment.type !== "refund" && ((payment.branchId ?? "b1") === branch.id || branchMembers.some((member) => member.id === payment.memberId))).reduce((sum, payment) => sum + payment.amount, 0) || branch.revenue;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-md bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold", children: branch.name }),
              currentBranch === branch.id && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-badge status-active", children: "Current" }),
              !branch.active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-badge status-inactive", children: "Inactive" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                branch.city
              ] }),
              branch.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
                branch.phone
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Manager: ",
                branch.manager || "Not assigned"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openForm(branch), className: "icon-button", "aria-label": `Edit ${branch.name}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "h-4 w-4" }) }),
            branches.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              if (!confirm(`Delete ${branch.name}? Its members and staff will move to the current branch.`)) return;
              deleteBranch(branch.id);
              toast.success("Branch deleted");
            }, className: "icon-button text-destructive", "aria-label": `Delete ${branch.name}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Members", value: branchMembers.length || branch.members }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Staff", value: branchStaff.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Revenue", value: inr(branchRevenue), accent: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/branches/$id", params: {
            id: branch.id
          }, className: "subtle-button flex-1", children: "View branch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setCurrentBranch(branch.id);
            toast.success(`${branch.name} selected`);
          }, className: "subtle-button flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
            "Set current"
          ] })
        ] })
      ] }, branch.id);
    }) })
  ] });
}
function Metric({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-black", children: value })
  ] });
}
function Mini({
  label,
  value,
  accent = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1 text-lg font-bold ${accent ? "text-amber-400" : ""}`, children: value })
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
  Branches as component
};
