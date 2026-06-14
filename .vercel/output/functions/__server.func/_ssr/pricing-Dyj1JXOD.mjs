import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, C as Card, i as inr } from "./AppShell-Dv9uxNKu.mjs";
import { a as Crown, I as IndianRupee, U as Users, d as Sparkles, e as Check } from "../_libs/lucide-react.mjs";
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
const plans = [{
  name: "Basic",
  subtitle: "For growing neighbourhood gyms",
  icon: Users,
  prices: {
    "6m": 4999,
    "1y": 8999,
    "2y": 16999
  },
  features: ["Unlimited members", "Staff management", "Finance and leads", "2,000 SMS credits", "Up to 3 logins"]
}, {
  name: "Premium",
  subtitle: "For teams ready to automate",
  icon: Sparkles,
  popular: true,
  prices: {
    "6m": 6999,
    "1y": 11999,
    "2y": 21499
  },
  features: ["Everything in Basic", "Member app branding", "One biometric device", "Multi-branch portal", "Up to 8 logins"]
}, {
  name: "Premium Plus",
  subtitle: "For multi-branch fitness businesses",
  icon: Crown,
  active: true,
  prices: {
    "6m": 13499,
    "1y": 24999,
    "2y": 44999
  },
  features: ["Everything in Premium", "Multiple biometric devices", "Daily email backup", "10,000 SMS credits", "Up to 25 logins"]
}];
function Pricing() {
  const [duration, setDuration] = reactExports.useState("1y");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Plans", description: "Choose the right operating plan for your gym.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-md bg-input p-1", children: ["6m", "1y", "2y"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDuration(value), className: `rounded px-4 py-2 text-xs ${duration === value ? "bg-primary font-bold text-white" : "text-muted-foreground"}`, children: value === "6m" ? "6 Months" : value === "1y" ? "1 Year" : "2 Years" }, value)) }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Current plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 text-lg font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "h-5 w-5 text-primary" }),
          "Premium Plus"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: "Renews on 12 June 2027" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Billing cycle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-lg font-bold", children: "Annual" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-emerald-400", children: "Saving 18% yearly" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "Next invoice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 text-lg font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-5 w-5 text-primary" }),
          inr(24999)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: "Taxes calculated at checkout" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 lg:grid-cols-3", children: plans.map((plan) => {
      const Icon = plan.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `relative flex min-h-[430px] flex-col ${plan.popular ? "border-primary/70" : ""}`, children: [
        plan.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-4 top-4 rounded-full bg-primary px-2 py-1 text-[9px] font-bold text-white", children: "MOST POPULAR" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-md bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-xl font-black", children: plan.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: plan.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-3xl font-black", children: inr(plan.prices[duration]) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] text-muted-foreground", children: "+ applicable taxes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 h-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: plan.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-emerald-400" }),
          feature
        ] }, feature)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: plan.active, className: `mt-auto min-h-10 rounded-md text-xs font-bold ${plan.active ? "cursor-not-allowed border border-border bg-secondary text-muted-foreground" : plan.popular ? "bg-primary text-white" : "border border-border hover:bg-secondary"}`, children: plan.active ? "CURRENT PLAN" : "CHOOSE PLAN" })
      ] }, plan.name);
    }) })
  ] });
}
export {
  Pricing as component
};
