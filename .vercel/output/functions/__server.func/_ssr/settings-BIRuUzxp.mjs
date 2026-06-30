import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card } from "./AppShell-9xLAHItq.mjs";
import { d as downloadCsv, a as downloadExcel } from "./export-DlLDZkDM.mjs";
import { u as useApp } from "./router-Dgpn6rjq.mjs";
import { B as Building2, U as Users, C as Cpu, a as Crown, b as Bell, D as Download, L as LifeBuoy, S as ShieldAlert, T as Trash2, c as LogOut } from "../_libs/lucide-react.mjs";
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
function Settings() {
  const logout = useApp((state) => state.logout);
  const gymSettings = useApp((state) => state.gymSettings);
  const notificationSettings = useApp((state) => state.notificationSettings);
  const updateGymSettings = useApp((state) => state.updateGymSettings);
  const updateNotificationSettings = useApp((state) => state.updateNotificationSettings);
  const resetWorkspace = useApp((state) => state.resetWorkspace);
  const members = useApp((state) => state.members);
  const payments = useApp((state) => state.payments);
  const attendance = useApp((state) => state.attendance ?? []);
  const leads = useApp((state) => state.leads);
  const staff = useApp((state) => state.staff);
  const branches = useApp((state) => state.branches);
  const devices = useApp((state) => state.biometricDevices ?? []);
  const navigate = useNavigate();
  const [profile, setProfile] = reactExports.useState(gymSettings);
  const [confirmText, setConfirmText] = reactExports.useState("");
  const exporters = [{
    label: "Members",
    headers: ["ID", "Name", "Phone", "Email", "Plan", "Status", "Branch"],
    rows: members.map((member) => [member.id, member.name, member.phone, member.email ?? "", member.plan, member.status, branches.find((branch) => branch.id === (member.branchId ?? "b1"))?.name ?? ""])
  }, {
    label: "Payments",
    headers: ["Date", "Member ID", "Plan", "Category", "Trainer", "Commission %", "Commission", "Mode", "Status", "Type", "Amount"],
    rows: payments.map((payment) => [payment.date.slice(0, 10), payment.memberId, payment.plan, payment.category ?? "Membership", staff.find((person) => person.id === payment.trainerId)?.name ?? "", payment.commissionPercent ? `${payment.commissionPercent}%` : "", payment.commissionAmount ?? "", payment.mode, payment.status, payment.type ?? "payment", payment.amount])
  }, {
    label: "Attendance",
    headers: ["Date", "Subject", "Type", "Punch In", "Punch Out", "Source", "Branch"],
    rows: attendance.map((record) => [record.date, record.subjectId, record.subjectType, record.punchIn, record.punchOut ?? "", record.source, branches.find((branch) => branch.id === (record.branchId ?? "b1"))?.name ?? ""])
  }, {
    label: "Leads",
    headers: ["Name", "Phone", "Source", "Status", "Enquiry", "Follow Up"],
    rows: leads.map((lead) => [lead.name, lead.phone, lead.source, lead.status, lead.enquiry, lead.followUp.slice(0, 10)])
  }, {
    label: "Staff",
    headers: ["Name", "Phone", "Role", "Salary", "Active", "Branch"],
    rows: staff.map((person) => [person.name, person.phone, person.role, person.salary, person.active ? "Active" : "Inactive", branches.find((branch) => branch.id === (person.branchId ?? "b1"))?.name ?? ""])
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Settings", description: "Gym profile, access shortcuts, exports, notifications, and admin safety.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-xs font-bold uppercase tracking-wider text-primary", children: "Gym profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Gym name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: profile.name, onChange: (event) => setProfile({
          ...profile,
          name: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Brand tagline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: profile.brandTagline, onChange: (event) => setProfile({
          ...profile,
          brandTagline: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Address", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: profile.address, onChange: (event) => setProfile({
          ...profile,
          address: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: profile.phone, onChange: (event) => setProfile({
          ...profile,
          phone: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", type: "email", value: profile.email, onChange: (event) => setProfile({
          ...profile,
          email: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Support WhatsApp number", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: profile.supportWhatsApp, onChange: (event) => setProfile({
          ...profile,
          supportWhatsApp: event.target.value
        }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        updateGymSettings(profile);
        toast.success("Gym profile saved");
      }, className: "btn-primary mt-4 w-full", children: "Save changes" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-5 !p-2", children: [{
      to: "/branches",
      icon: Building2,
      label: "Branch Management",
      detail: `${branches.length} branches`
    }, {
      to: "/staff",
      icon: Users,
      label: "Staff & Access",
      detail: `${staff.length} staff users`
    }, {
      to: "/hardware",
      icon: Cpu,
      label: "Biometric Devices",
      detail: `${devices.length} configured`
    }, {
      to: "/pricing",
      icon: Crown,
      label: "Plan & Billing",
      detail: "Subscription plans"
    }].map((link) => {
      const Icon = link.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: link.to, className: "flex items-center gap-3 rounded-md border-b border-border/50 p-3 hover:bg-secondary/40 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm font-semibold", children: link.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: link.detail })
      ] }, link.to);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
        "Notifications"
      ] }),
      [["whatsapp", "WhatsApp alerts"], ["sms", "SMS alerts"], ["push", "Push notifications"], ["expiryReminders", "Expiry reminders"], ["paymentReminders", "Payment reminders"]].map(([key, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label, checked: notificationSettings[key], onChange: (checked) => {
        updateNotificationSettings({
          [key]: checked
        });
        toast.success(`${label} ${checked ? "enabled" : "disabled"}`);
      } }, key))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
        "Backup & export"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-5", children: exporters.map((exporter) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs font-semibold", children: exporter.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => downloadCsv(`fitfyt-${exporter.label.toLowerCase()}`, exporter.headers, exporter.rows), className: "subtle-button !min-h-8 !p-1 text-[10px]", children: "CSV" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => downloadExcel(`fitfyt-${exporter.label.toLowerCase()}`, exporter.headers, exporter.rows), className: "subtle-button !min-h-8 !p-1 text-[10px]", children: "Excel" })
        ] })
      ] }, exporter.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[10px] text-muted-foreground", children: "Exports are generated from the current browser-persisted workspace data." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LifeBuoy, { className: "h-4 w-4" }),
        "Support"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${profile.supportPhone}`, className: "subtle-button justify-start", children: [
          "Call support: ",
          profile.supportPhone
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://wa.me/${profile.supportWhatsApp}`, target: "_blank", rel: "noreferrer", className: "subtle-button justify-start", children: "WhatsApp support" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-destructive/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-destructive", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-4 w-4" }),
        "Danger zone"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-[1fr_auto_auto]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", placeholder: 'Type "RESET" to reset local app data', value: confirmText, onChange: (event) => setConfirmText(event.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: confirmText !== "RESET", onClick: () => {
          resetWorkspace();
          setConfirmText("");
          toast.success("Workspace reset to seed data");
        }, className: `subtle-button text-destructive ${confirmText !== "RESET" ? "cursor-not-allowed opacity-50" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
          "Reset local data"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          logout();
          navigate({
            to: "/login"
          });
        }, className: "subtle-button", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          "Logout"
        ] })
      ] })
    ] })
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
function Toggle({
  label,
  checked,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between gap-3 border-t border-border py-3 text-sm first:border-0", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block h-5 w-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked, onChange: (event) => onChange(event.target.checked), className: "peer sr-only" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-secondary transition peer-checked:bg-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4" })
    ] })
  ] });
}
export {
  Settings as component
};
