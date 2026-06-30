import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card, b as initials, c as colorFromName, S as StatusBadge, d as dmy } from "./AppShell-9xLAHItq.mjs";
import { u as useApp } from "./router-Dgpn6rjq.mjs";
import { w as Search, X, z as Funnel, G as IdCard, J as Upload, D as Download, q as Plus } from "../_libs/lucide-react.mjs";
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
const filters = ["all", "active", "expired", "expiring", "frozen"];
function MembersList() {
  const members = useApp((s) => s.members);
  const importMembers = useApp((s) => s.importMembers);
  const [query, setQuery] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("all");
  const [showAdvanced, setShowAdvanced] = reactExports.useState(false);
  const [plan, setPlan] = reactExports.useState("all");
  const [sort, setSort] = reactExports.useState("newest");
  const fileInput = reactExports.useRef(null);
  const list = members.filter((member) => {
    if (filter !== "all" && member.status !== filter) return false;
    if (plan !== "all" && member.plan !== plan) return false;
    return `${member.name} ${member.phone} ${member.email ?? ""} ${member.id}`.toLowerCase().includes(query.toLowerCase());
  }).sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "expiry") return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
  const plans = [...new Set(members.map((member) => member.plan))];
  const exportCsv = () => {
    const headers = ["name", "phone", "email", "plan", "status", "startDate", "expiryDate", "amountPaid", "totalAmount"];
    const rows = list.map((member) => headers.map((header) => {
      const value = String(member[header] ?? "");
      return `"${value.replaceAll('"', '""')}"`;
    }));
    const blob = new Blob([[headers.join(","), ...rows.map((row) => row.join(","))].join("\n")], {
      type: "text/csv;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `fitfyt-members-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success(`${list.length} members exported`);
  };
  const importCsv = async (file) => {
    if (!file) return;
    const rows = parseCsv(await file.text());
    const validStatuses = ["active", "expired", "expiring", "frozen"];
    const imported = rows.filter((row) => row.name && row.phone).map((row) => ({
      name: row.name,
      phone: row.phone,
      email: row.email,
      plan: row.plan || "Basic",
      status: validStatuses.includes(row.status) ? row.status : "active",
      startDate: safeIso(row.startDate, /* @__PURE__ */ new Date()),
      expiryDate: safeIso(row.expiryDate, new Date(Date.now() + 365 * 864e5)),
      amountPaid: Number(row.amountPaid) || 0,
      totalAmount: Number(row.totalAmount) || Number(row.amountPaid) || 0
    }));
    if (!imported.length) {
      toast.error("No valid rows found. CSV must include name and phone.");
      return;
    }
    importMembers(imported);
    toast.success(`${imported.length} members imported`);
    if (fileInput.current) fileInput.current.value = "";
  };
  const actions = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => fileInput.current?.click(), className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
      "Import CSV"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: exportCsv, className: "subtle-button", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
      "Export"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/members/add", className: "btn-primary text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
      "Add member"
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Members", description: `${members.length} total members across all plans.`, actions, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileInput, type: "file", accept: ".csv,text/csv", className: "hidden", onChange: (event) => void importCsv(event.target.files?.[0]) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field pl-9", placeholder: "Search by name, ID, phone...", value: query, onChange: (event) => setQuery(event.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scrollbar-hide flex gap-1 overflow-x-auto rounded-md bg-input p-1", children: filters.map((value) => {
          const count = value === "all" ? members.length : members.filter((member) => member.status === value).length;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFilter(value), className: `whitespace-nowrap rounded px-3 py-2 text-xs capitalize ${filter === value ? "bg-primary font-bold text-primary-foreground" : "text-muted-foreground"}`, children: [
            value === "expiring" ? "Expiring" : value,
            " (",
            count,
            ")"
          ] }, value);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowAdvanced((value) => !value), className: `icon-button shrink-0 ${showAdvanced || plan !== "all" ? "border-primary text-primary" : ""}`, "aria-label": "Advanced filters", children: showAdvanced ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4" }) })
      ] }),
      showAdvanced && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-[1fr_1fr_auto]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-muted-foreground", children: [
          "Plan",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input-field mt-1", value: plan, onChange: (event) => setPlan(event.target.value), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All plans" }),
            plans.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: value }, value))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-muted-foreground", children: [
          "Sort by",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input-field mt-1", value: sort, onChange: (event) => setSort(event.target.value), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "newest", children: "Newest joined" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: "Name A-Z" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "expiry", children: "Expiry date" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setPlan("all");
          setSort("newest");
          setFilter("all");
          setQuery("");
        }, className: "subtle-button self-end", children: "Clear filters" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "hidden !p-0 overflow-hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "data-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Member" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Joined" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Expires" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: list.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/members/$id", params: {
            id: member.id
          }, className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-9 w-9 place-items-center rounded-full text-[10px] font-bold text-white ${colorFromName(member.name)}`, children: initials(member.name) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: member.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: member.id.toUpperCase() })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: member.phone }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: member.email || "No email added" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: member.plan }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: member.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: dmy(member.startDate) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: dmy(member.expiryDate) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/members/$id", params: {
            id: member.id
          }, className: "inline-flex items-center gap-1.5 text-xs font-semibold hover:text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IdCard, { className: "h-4 w-4" }),
            "Profile"
          ] }) })
        ] }, member.id)) })
      ] }),
      list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-muted-foreground", children: "No members match this search." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 md:hidden", children: [
      list.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/members/$id", params: {
        id: member.id
      }, className: "card-surface flex items-center gap-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-10 w-10 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white ${colorFromName(member.name)}`, children: initials(member.name) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-semibold", children: member.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] text-muted-foreground", children: [
            member.id.toUpperCase(),
            " · ",
            member.plan
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] text-muted-foreground", children: member.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: member.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] text-muted-foreground", children: dmy(member.expiryDate) })
        ] })
      ] }, member.id)),
      list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-surface p-8 text-center text-sm text-muted-foreground", children: "No members match this search." })
    ] })
  ] });
}
function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const parseLine = (line) => {
    const values = [];
    let value = "";
    let quoted = false;
    for (let index = 0; index < line.length; index += 1) {
      const character = line[index];
      if (character === '"' && line[index + 1] === '"') {
        value += '"';
        index += 1;
      } else if (character === '"') {
        quoted = !quoted;
      } else if (character === "," && !quoted) {
        values.push(value.trim());
        value = "";
      } else {
        value += character;
      }
    }
    values.push(value.trim());
    return values;
  };
  const headers = parseLine(lines[0]);
  return lines.slice(1).map((line) => Object.fromEntries(headers.map((header, index) => [header, parseLine(line)[index] ?? ""])));
}
function safeIso(value, fallback) {
  const date = value ? new Date(value) : fallback;
  return Number.isNaN(date.getTime()) ? fallback.toISOString() : date.toISOString();
}
export {
  MembersList as component
};
