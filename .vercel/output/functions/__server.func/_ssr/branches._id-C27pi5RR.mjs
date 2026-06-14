import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card, i as inr, b as initials, c as colorFromName, S as StatusBadge, d as dmy } from "./AppShell-Dv9uxNKu.mjs";
import { d as downloadCsv, a as downloadExcel } from "./export-DlLDZkDM.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { c as Route } from "./router-Dw1geAbd.mjs";
import { af as UserRoundCog, ag as ArrowLeft, D as Download, y as FileSpreadsheet } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function BranchDetail() {
  const {
    id
  } = Route.useParams();
  const branches = useApp((state) => state.branches);
  const members = useApp((state) => state.members);
  const staff = useApp((state) => state.staff);
  const leads = useApp((state) => state.leads);
  const payments = useApp((state) => state.payments);
  const attendance = useApp((state) => state.attendance ?? []);
  const updateMember = useApp((state) => state.updateMember);
  const updateStaff = useApp((state) => state.updateStaff);
  const branch = branches.find((item) => item.id === id);
  if (!branch) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Branch detail", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: "Branch not found" }) });
  }
  const branchMembers = members.filter((member) => (member.branchId ?? "b1") === branch.id);
  const branchStaff = staff.filter((person) => (person.branchId ?? "b1") === branch.id);
  const branchLeads = leads.filter((lead) => (lead.branchId ?? "b1") === branch.id);
  const branchPayments = payments.filter((payment) => (payment.branchId ?? "b1") === branch.id || branchMembers.some((member) => member.id === payment.memberId));
  const revenue = branchPayments.filter((payment) => payment.status === "Paid" && payment.type !== "refund").reduce((sum, payment) => sum + payment.amount, 0);
  const rows = [...branchMembers.map((member) => ["Member", member.name, member.phone, member.plan, member.status]), ...branchStaff.map((person) => ["Staff", person.name, person.phone, person.role, person.active ? "Active" : "Inactive"]), ...branchLeads.map((lead) => ["Lead", lead.name, lead.phone, lead.enquiry, lead.status])];
  const headers = ["Type", "Name", "Phone", "Category", "Status"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: branch.name, description: `${branch.city} - ${branch.address ?? "Address not set"}`, actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/branches", className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      "Branches"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadCsv(`fitfyt-${branch.name}-report`, headers, rows), className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
      "CSV"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadExcel(`fitfyt-${branch.name}-report`, headers, rows), className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "h-4 w-4" }),
      "Excel"
    ] })
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-3 sm:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Members", value: branchMembers.length || branch.members }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Staff", value: branchStaff.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Leads", value: branchLeads.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Revenue", value: inr(revenue || branch.revenue), accent: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-5 xl:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-0 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Members" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Transfer members between branches" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          branchMembers.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 border-t border-border px-5 py-3 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-8 w-8 place-items-center rounded-full text-[10px] font-bold text-white ${colorFromName(member.name)}`, children: initials(member.name) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-40 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: member.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: member.plan })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: member.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { "aria-label": `Transfer ${member.name}`, className: "input-field max-w-44 !py-2", value: member.branchId ?? "b1", onChange: (event) => {
              updateMember(member.id, {
                branchId: event.target.value
              });
              toast.success(`${member.name} transferred`);
            }, children: branches.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.id, children: item.name }, item.id)) })
          ] }, member.id)),
          !branchMembers.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-center text-sm text-muted-foreground", children: "No members assigned." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-0 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Staff" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Managers, trainers, and access users" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          branchStaff.map((person) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 border-t border-border px-5 py-3 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserRoundCog, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-40 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: person.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: person.role })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `status-badge ${person.active ? "status-active" : "status-inactive"}`, children: person.active ? "Active" : "Inactive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { "aria-label": `Transfer ${person.name}`, className: "input-field max-w-44 !py-2", value: person.branchId ?? "b1", onChange: (event) => {
              updateStaff(person.id, {
                branchId: event.target.value
              });
              toast.success(`${person.name} transferred`);
            }, children: branches.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.id, children: item.name }, item.id)) })
          ] }, person.id)),
          !branchStaff.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-center text-sm text-muted-foreground", children: "No staff assigned." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Recent branch activity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Payments and attendance linked to this location" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "data-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Detail" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          branchPayments.slice(0, 6).map((payment) => {
            const member = members.find((item) => item.id === payment.memberId);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: dmy(payment.date) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Payment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: member?.name ?? "Unknown" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                inr(payment.amount),
                " - ",
                payment.status
              ] })
            ] }, payment.id);
          }),
          attendance.filter((record) => (record.branchId ?? "b1") === branch.id).slice(0, 6).map((record) => {
            const member = members.find((item) => item.id === record.subjectId);
            const person = staff.find((item) => item.id === record.subjectId);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: dmy(record.date) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Attendance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: member?.name ?? person?.name ?? "Unknown" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                record.source,
                " punch"
              ] })
            ] }, record.id);
          })
        ] })
      ] }) })
    ] })
  ] });
}
function Metric({
  label,
  value,
  accent = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 text-2xl font-black ${accent ? "text-amber-400" : ""}`, children: value })
  ] });
}
export {
  BranchDetail as component
};
