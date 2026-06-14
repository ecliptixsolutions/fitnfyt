import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./AppShell-Dv9uxNKu.mjs";
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
import "../_libs/lucide-react.mjs";
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const plan = {
  Mon: [{
    name: "Bench Press",
    sets: "4 × 10"
  }, {
    name: "Incline Dumbbell Press",
    sets: "3 × 12"
  }, {
    name: "Tricep Pushdown",
    sets: "3 × 15"
  }],
  Tue: [{
    name: "Deadlift",
    sets: "4 × 6"
  }, {
    name: "Barbell Row",
    sets: "4 × 10"
  }, {
    name: "Bicep Curls",
    sets: "3 × 12"
  }],
  Wed: [{
    name: "Rest / Light Cardio",
    sets: "30 min"
  }],
  Thu: [{
    name: "Squat",
    sets: "4 × 8"
  }, {
    name: "Leg Press",
    sets: "3 × 12"
  }, {
    name: "Calf Raise",
    sets: "4 × 15"
  }],
  Fri: [{
    name: "Shoulder Press",
    sets: "4 × 10"
  }, {
    name: "Lateral Raise",
    sets: "3 × 15"
  }, {
    name: "Face Pulls",
    sets: "3 × 15"
  }],
  Sat: [{
    name: "Cardio HIIT",
    sets: "20 min"
  }, {
    name: "Core",
    sets: "3 × 20"
  }],
  Sun: [{
    name: "Rest Day",
    sets: "Recover well 💤"
  }]
};
function Workout() {
  const [day, setDay] = reactExports.useState("Mon");
  const [done, setDone] = reactExports.useState({});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold mb-4", children: "My Workout Plan" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4 overflow-x-auto pb-1", children: days.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDay(d), className: `px-4 py-2 rounded-lg text-xs whitespace-nowrap ${day === d ? "bg-primary text-primary-foreground font-semibold" : "bg-secondary text-muted-foreground"}`, children: d }, d)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "!p-2", children: plan[day].map((ex, i) => {
      const k = `${day}-${i}`;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 p-3 border-b last:border-0 border-border/50 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: !!done[k], onChange: (e) => setDone({
          ...done,
          [k]: e.target.checked
        }), className: "w-5 h-5 accent-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-semibold text-sm ${done[k] ? "line-through text-muted-foreground" : ""}`, children: ex.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: ex.sets })
        ] })
      ] }, k);
    }) })
  ] });
}
export {
  Workout as component
};
