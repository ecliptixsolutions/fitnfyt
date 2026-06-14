import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, e as useRouterState, L as Link, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { i as Dumbbell, c as LogOut, H as House, j as Calendar, I as IndianRupee, k as User } from "../_libs/lucide-react.mjs";
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
const tabs = [{
  to: "/member/home",
  label: "Home",
  icon: House
}, {
  to: "/member/attendance",
  label: "Attend",
  icon: Calendar
}, {
  to: "/member/payments",
  label: "Pay",
  icon: IndianRupee
}, {
  to: "/member/workout",
  label: "Workout",
  icon: Dumbbell
}];
function MemberLayout() {
  const auth = useApp((s) => s.auth);
  const logout = useApp((s) => s.logout);
  const navigate = useNavigate();
  const path = useRouterState({
    select: (s) => s.location.pathname
  });
  const [ready, setReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setReady(true);
  }, []);
  reactExports.useEffect(() => {
    if (ready && !auth) navigate({
      to: "/login",
      replace: true
    });
  }, [auth, navigate, ready]);
  if (!ready || !auth) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-screen place-items-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "h-8 w-8 animate-pulse text-primary" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-20 bg-background/90 backdrop-blur border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 h-14 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/member/home", className: "font-black text-foreground", children: [
        "FIT ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "&" }),
        " FYT"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        logout();
        navigate({
          to: "/login"
        });
      }, className: "p-2 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-5 h-5" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-2xl mx-auto px-4 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-0 left-0 right-0 z-30 bg-card border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto grid grid-cols-5", children: [
      tabs.map((t) => {
        const I = t.icon;
        const active = path.startsWith(t.to);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: t.to, className: "flex flex-col items-center py-2.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: `w-5 h-5 ${active ? "text-primary" : "text-muted-foreground"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-0.5 ${active ? "text-primary font-semibold" : "text-muted-foreground"}`, children: t.label })
        ] }, t.to);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: "flex flex-col items-center py-2.5 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 text-muted-foreground", children: "Profile" })
      ] })
    ] }) })
  ] });
}
export {
  MemberLayout as component
};
