import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card, d as dmy } from "./AppShell-9xLAHItq.mjs";
import { b as Route$4, u as useApp, L as LeadBadge } from "./router-Dgpn6rjq.mjs";
import { $ as UserCheck, ae as MessageSquarePlus, r as CalendarClock, f as CircleCheck } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
function LeadDetail() {
  const {
    id
  } = Route$4.useParams();
  const leads = useApp((state) => state.leads);
  const staff = useApp((state) => state.staff);
  const updateLead = useApp((state) => state.updateLead);
  const addActivity = useApp((state) => state.addLeadActivity);
  const convertLead = useApp((state) => state.convertLead);
  const lead = leads.find((item) => item.id === id);
  const [note, setNote] = reactExports.useState("");
  if (!lead) return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Lead profile", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: "Lead not found" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: lead.name, description: `${lead.phone} - ${lead.source}`, actions: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadBadge, { status: lead.status }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Enquiry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-bold", children: lead.enquiry })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Next follow-up" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-bold", children: dmy(lead.followUp) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Assigned staff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-bold", children: staff.find((person) => person.id === lead.assignedStaffId)?.name ?? "Unassigned" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-sm font-bold", children: "Manage lead" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-muted-foreground", children: [
          "Status",
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field mt-1", value: lead.status, onChange: (event) => {
            updateLead(lead.id, {
              status: event.target.value
            });
            addActivity(lead.id, `Status changed to ${event.target.value}`);
          }, children: ["New", "Follow-up", "Interested", "Converted", "Lost"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-muted-foreground", children: [
          "Follow-up date",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "input-field mt-1", value: lead.followUp.slice(0, 10), onChange: (event) => {
            updateLead(lead.id, {
              followUp: new Date(event.target.value).toISOString(),
              status: "Follow-up"
            });
            addActivity(lead.id, `Follow-up scheduled for ${event.target.value}`);
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-muted-foreground", children: [
          "Assign staff",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input-field mt-1", value: lead.assignedStaffId ?? "", onChange: (event) => {
            updateLead(lead.id, {
              assignedStaffId: event.target.value
            });
            addActivity(lead.id, `Assigned to ${staff.find((person) => person.id === event.target.value)?.name ?? "nobody"}`);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Unassigned" }),
            staff.map((person) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: person.id, children: person.name }, person.id))
          ] })
        ] })
      ] }),
      lead.status !== "Converted" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        convertLead(lead.id);
        toast.success("Lead converted into a trial member");
      }, className: "btn-primary mt-4 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "h-4 w-4" }),
        "Convert to member"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-sm font-bold", children: "Activity timeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", placeholder: "Add call note, message, or follow-up result", value: note, onChange: (event) => setNote(event.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          if (!note.trim()) return;
          addActivity(lead.id, note.trim());
          setNote("");
          toast.success("Activity added");
        }, className: "icon-button shrink-0", "aria-label": "Add activity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquarePlus, { className: "h-4 w-4" }) })
      ] }),
      [...lead.activities ?? []].reverse().map((activity) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 border-t border-border py-3 text-xs first:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-3.5 w-3.5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: activity.note }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] text-muted-foreground", children: [
            dmy(activity.date),
            " -",
            " ",
            new Date(activity.date).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit"
            })
          ] })
        ] })
      ] }, activity.id)),
      !(lead.activities ?? []).length && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
        "No activity recorded yet."
      ] })
    ] })
  ] });
}
export {
  LeadDetail as component
};
