import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card, d as dmy, b as initials, c as colorFromName } from "./AppShell-Dv9uxNKu.mjs";
import { d as downloadCsv, a as downloadExcel } from "./export-DlLDZkDM.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { W as Wifi, o as RefreshCw, f as CircleCheck, c as LogOut, u as Timer, v as CalendarDays, w as Search, x as LogIn, D as Download, y as FileSpreadsheet } from "../_libs/lucide-react.mjs";
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
function Attendance() {
  const members = useApp((state) => state.members);
  const records = useApp((state) => state.attendance ?? []);
  const punchIn = useApp((state) => state.punchIn);
  const punchOut = useApp((state) => state.punchOut);
  const [query, setQuery] = reactExports.useState("");
  const [range, setRange] = reactExports.useState("day");
  const [selectedDate, setSelectedDate] = reactExports.useState((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
  const [fromDate, setFromDate] = reactExports.useState(selectedDate);
  const [toDate, setToDate] = reactExports.useState(selectedDate);
  const [memberId, setMemberId] = reactExports.useState("all");
  const bounds = getRangeBounds(range, selectedDate, fromDate, toDate);
  const filteredRecords = reactExports.useMemo(() => records.filter((record) => record.subjectType === "member" && record.date >= bounds.from && record.date <= bounds.to && (memberId === "all" || record.subjectId === memberId)).sort((a, b) => b.punchIn.localeCompare(a.punchIn)), [bounds.from, bounds.to, memberId, records]);
  const dayRecords = records.filter((record) => record.subjectType === "member" && record.date === selectedDate);
  const visibleMembers = members.filter((member) => `${member.name} ${member.phone} ${member.id}`.toLowerCase().includes(query.toLowerCase()));
  const exportRows = filteredRecords.map((record) => {
    const member = members.find((item) => item.id === record.subjectId);
    return [record.date, member?.id.toUpperCase() ?? record.subjectId, member?.name ?? "Unknown", member?.plan ?? "", time(record.punchIn), record.punchOut ? time(record.punchOut) : "Missing", duration(record), record.source];
  });
  const exportHeaders = ["Date", "Member ID", "Member", "Plan", "Punch In", "Punch Out", "Duration", "Source"];
  const exportName = `fitfyt-attendance-${bounds.from}-to-${bounds.to}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Attendance", description: "Daily punch records from manual entry and biometric devices.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadCsv(exportName, exportHeaders, exportRows), className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
      "CSV"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadExcel(exportName, exportHeaders, exportRows), className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "h-4 w-4" }),
      "Excel"
    ] })
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5 flex items-center gap-3 !p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-md bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Biometric device connection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-amber-400" }),
          "Ready to configure when hardware is connected"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast.info("No hardware configured yet"), className: "subtle-button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3 w-3" }),
        "Sync"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-[auto_1fr_1fr_auto]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 overflow-x-auto rounded-md bg-input p-1", children: ["day", "week", "month", "year", "custom"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setRange(value), className: `rounded px-3 py-2 text-xs capitalize ${range === value ? "bg-primary font-bold text-white" : "text-muted-foreground"}`, children: value }, value)) }),
        range === "custom" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { "aria-label": "From date", type: "date", className: "input-field", value: fromDate, onChange: (event) => setFromDate(event.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { "aria-label": "To date", type: "date", className: "input-field", value: toDate, onChange: (event) => setToDate(event.target.value) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { "aria-label": "Selected date", type: "date", className: "input-field lg:col-span-2", value: selectedDate, onChange: (event) => setSelectedDate(event.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { "aria-label": "Member export filter", className: "input-field", value: memberId, onChange: (event) => setMemberId(event.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All members" }),
          members.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: member.id, children: member.name }, member.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs text-muted-foreground", children: [
        "Showing records from ",
        dmy(bounds.from),
        " to ",
        dmy(bounds.to)
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: CircleCheck, label: "Present on selected day", value: dayRecords.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: LogOut, label: "Still inside", value: dayRecords.filter((record) => !record.punchOut).length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Timer, label: "Records in selected range", value: filteredRecords.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Daily punch desk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: dmy(selectedDate) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4 text-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field pl-9", placeholder: "Search member or scan ID", value: query, onChange: (event) => setQuery(event.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: visibleMembers.map((member) => {
        const record = dayRecords.find((item) => item.subjectId === member.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 border-t border-border py-3 text-xs first:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-9 w-9 place-items-center rounded-full text-[10px] font-bold text-white ${colorFromName(member.name)}`, children: initials(member.name) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-40 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: member.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: member.plan })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "In: " }),
            record ? time(record.punchIn) : "-"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Out: " }),
            record?.punchOut ? time(record.punchOut) : "-"
          ] }),
          !record ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            punchIn(member.id, "member", "Manual", dateTimeFor(selectedDate));
            toast.success(`${member.name} punched in`);
          }, className: "btn-primary min-w-28 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
            "Punch in"
          ] }) : !record.punchOut ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            punchOut(record.id, dateTimeFor(selectedDate));
            toast.success(`${member.name} punched out`);
          }, className: "subtle-button min-w-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
            "Punch out"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "status-badge status-active min-w-28 justify-center", children: duration(record) })
        ] }, member.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Attendance records" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Export-ready punch history" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "data-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: exportHeaders.map((header) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: header }, header)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: exportRows.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: row.map((cell, cellIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: String(cell) }, cellIndex)) }, `${row[0]}-${row[1]}-${index}`)) })
      ] }) }),
      !exportRows.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "No attendance records in this range." })
    ] })
  ] });
}
function Metric({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex items-center gap-3 !p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-black", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: label })
    ] })
  ] });
}
function time(value) {
  return new Date(value).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit"
  });
}
function duration(record) {
  if (!record.punchOut) return "Missing punch-out";
  const minutes = Math.max(0, Math.round((new Date(record.punchOut).getTime() - new Date(record.punchIn).getTime()) / 6e4));
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}
function dateTimeFor(date) {
  const now = /* @__PURE__ */ new Date();
  const selected = /* @__PURE__ */ new Date(`${date}T${now.toTimeString().slice(0, 8)}`);
  return selected.toISOString();
}
function getRangeBounds(range, selectedDate, fromDate, toDate) {
  if (range === "custom") return {
    from: fromDate,
    to: toDate
  };
  const date = /* @__PURE__ */ new Date(`${selectedDate}T12:00:00`);
  const from = new Date(date);
  const to = new Date(date);
  if (range === "week") {
    const weekday = (date.getDay() + 6) % 7;
    from.setDate(date.getDate() - weekday);
    to.setDate(from.getDate() + 6);
  }
  if (range === "month") {
    from.setDate(1);
    to.setMonth(date.getMonth() + 1, 0);
  }
  if (range === "year") {
    from.setMonth(0, 1);
    to.setMonth(11, 31);
  }
  return {
    from: from.toISOString().slice(0, 10),
    to: to.toISOString().slice(0, 10)
  };
}
export {
  Attendance as component
};
