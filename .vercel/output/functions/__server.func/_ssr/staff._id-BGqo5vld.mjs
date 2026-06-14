import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card, b as initials, c as colorFromName, i as inr, d as dmy } from "./AppShell-Dv9uxNKu.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { R as Route$c } from "./router-Dw1geAbd.mjs";
import { x as LogIn, c as LogOut, _ as Save, $ as UserCheck } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const permissionOptions = ["View Members", "Add Members", "Edit Members", "View Finance", "Record Payments", "Mark Attendance", "View Reports", "Manage Leads"];
function StaffDetail() {
  const {
    id
  } = Route$c.useParams();
  const staff = useApp((state) => state.staff);
  const members = useApp((state) => state.members);
  const leads = useApp((state) => state.leads);
  const attendance = useApp((state) => state.attendance ?? []);
  const updateStaff = useApp((state) => state.updateStaff);
  const punchIn = useApp((state) => state.punchIn);
  const punchOut = useApp((state) => state.punchOut);
  const person = staff.find((item) => item.id === id);
  const [edit, setEdit] = reactExports.useState(false);
  if (!person) return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Staff profile", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: "Staff member not found" }) });
  const records = attendance.filter((record) => record.subjectType === "staff" && record.subjectId === person.id).sort((a, b) => b.punchIn.localeCompare(a.punchIn));
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const todayRecord = records.find((record) => record.date === today);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Staff profile", description: `${person.role} - joined ${dmy(person.joined)}`, actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
    updateStaff(person.id, {
      active: !person.active
    });
    toast.success(person.active ? "Staff deactivated" : "Staff activated");
  }, className: "subtle-button", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "h-4 w-4" }),
    person.active ? "Deactivate" : "Activate"
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-20 w-20 place-items-center rounded-full text-xl font-black text-white ${colorFromName(person.name)}`, children: initials(person.name) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-xl font-bold", children: person.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: person.phone })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-3 sm:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Salary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-bold", children: inr(person.salary) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Shift" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-bold", children: person.shift ?? "Not set" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Weekly off" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-bold", children: person.weeklyOff ?? "Not set" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Assigned leads" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-bold", children: leads.filter((lead) => lead.assignedStaffId === person.id).length })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Staff attendance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Manual punches until hardware is configured." })
        ] }),
        !todayRecord ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          punchIn(person.id, "staff");
          toast.success("Staff punched in");
        }, className: "btn-primary text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
          "Punch in"
        ] }) : !todayRecord.punchOut ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          punchOut(todayRecord.id);
          toast.success("Staff punched out");
        }, className: "subtle-button", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          "Punch out"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-badge status-active", children: "Completed today" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        records.slice(0, 7).map((record) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-border py-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dmy(record.date) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            new Date(record.punchIn).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit"
            }),
            " ",
            "-",
            " ",
            record.punchOut ? new Date(record.punchOut).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit"
            }) : "Still in"
          ] })
        ] }, record.id)),
        !records.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 text-xs text-muted-foreground", children: "No attendance records yet." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Profile and assignments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEdit((value) => !value), className: "subtle-button", children: edit ? "Cancel" : "Edit" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-muted-foreground", children: [
          "Role",
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { disabled: !edit, className: "input-field mt-1", value: person.role, onChange: (event) => updateStaff(person.id, {
            role: event.target.value
          }), children: ["Trainer", "Receptionist", "Manager"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-muted-foreground", children: [
          "Shift",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { disabled: !edit, className: "input-field mt-1", value: person.shift ?? "", onChange: (event) => updateStaff(person.id, {
            shift: event.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-muted-foreground", children: [
          "Weekly off",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { disabled: !edit, className: "input-field mt-1", value: person.weeklyOff ?? "", onChange: (event) => updateStaff(person.id, {
            weeklyOff: event.target.value
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Not set" }),
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value))
          ] })
        ] })
      ] }),
      edit && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 section-label", children: "Permissions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4", children: permissionOptions.map((permission) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 rounded-md border border-border p-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: (person.permissions ?? []).includes(permission), onChange: (event) => updateStaff(person.id, {
            permissions: event.target.checked ? [...person.permissions ?? [], permission] : (person.permissions ?? []).filter((item) => item !== permission)
          }), className: "accent-primary" }),
          permission
        ] }, permission)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 section-label", children: "Assigned members" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3", children: members.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 rounded-md border border-border p-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: (person.assignedMemberIds ?? []).includes(member.id), onChange: (event) => updateStaff(person.id, {
            assignedMemberIds: event.target.checked ? [...person.assignedMemberIds ?? [], member.id] : (person.assignedMemberIds ?? []).filter((memberId) => memberId !== member.id)
          }), className: "accent-primary" }),
          member.name
        ] }, member.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setEdit(false);
          toast.success("Staff profile saved");
        }, className: "btn-primary mt-4 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
          "Save profile"
        ] })
      ] })
    ] })
  ] });
}
export {
  StaffDetail as component
};
