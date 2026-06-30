import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useApp } from "./router-Dgpn6rjq.mjs";
import "../_libs/sonner.mjs";
import { i as Dumbbell } from "../_libs/lucide-react.mjs";
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
function Splash() {
  const navigate = useNavigate();
  const auth = useApp((s) => s.auth);
  reactExports.useEffect(() => {
    const t = setTimeout(() => {
      if (auth) navigate({
        to: auth.role === "member" ? "/member/home" : "/dashboard"
      });
      else navigate({
        to: "/login"
      });
    }, 2200);
    return () => clearTimeout(t);
  }, [auth, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background grid place-items-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-24 h-24 mx-auto grid place-items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full border-2 border-primary pulse-ring" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full border-2 border-primary/60 pulse-ring", style: {
        animationDelay: ".6s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "w-16 h-16 text-primary relative" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl font-black tracking-tight", children: [
      "FIT FORCE ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "GYM" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-primary text-xs uppercase tracking-[0.3em]", children: "Your Gym. Automated." })
  ] }) });
}
export {
  Splash as component
};
