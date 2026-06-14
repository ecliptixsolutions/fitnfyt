import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, C as Card } from "./AppShell-Dv9uxNKu.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { M as MessageCircle, h as Send } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./app-CbaCaMR4.mjs";
import "../_libs/zustand.mjs";
const templates = [{
  name: "Membership Expiry",
  text: "Hi {{name}}, your {{plan}} membership at Fit Force Gym expires on {{date}}. Renew now to avoid interruption! 💪"
}, {
  name: "Payment Receipt",
  text: "Hi {{name}}, payment of ₹{{amount}} received for {{plan}}. Thank you! 🏋️"
}, {
  name: "Birthday Wish",
  text: "Happy Birthday {{name}}! 🎂 Wishing you a fit and healthy year ahead. — Fit Force Gym"
}, {
  name: "Welcome Message",
  text: "Welcome to Fit Force Gym, {{name}}! Your {{plan}} membership starts today. 💪"
}, {
  name: "Attendance Alert",
  text: "Hi {{name}}, we miss you! It's been {{days}} days since your last visit. Keep your streak going 🔥"
}];
function Messages() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "WhatsApp & SMS", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-4 mb-4 flex items-center gap-3 bg-primary/10 border-primary/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-8 h-8 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Bulk Messaging" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Send to all members at once" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast.success("Will send to 47 members"), className: "text-xs px-3 py-2 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3 h-3" }),
        "Send"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3", children: "Message Templates" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: templates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative inline-block w-9 h-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", defaultChecked: true, className: "peer sr-only" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-secondary peer-checked:bg-primary transition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white peer-checked:translate-x-4 transition" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-2 leading-relaxed", children: t.text }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[11px] px-3 py-1.5 rounded-lg border border-border", children: "Edit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toast.success("Test sent"), className: "text-[11px] px-3 py-1.5 rounded-lg border border-border", children: "Send Test" })
      ] })
    ] }, t.name)) })
  ] });
}
export {
  Messages as component
};
