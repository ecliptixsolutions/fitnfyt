import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster } from "../_libs/sonner.mjs";
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
const appCss = "/assets/styles-Cbm2lEtz.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-primary", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This page doesn't exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-block btn-primary", children: "Go home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: error.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          router2.invalidate();
          reset();
        },
        className: "mt-6 btn-primary",
        children: "Try again"
      }
    )
  ] }) });
}
const Route$z = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Fit Force Gym — Gym Management" },
      { name: "description", content: "Complete gym management platform for Indian gym owners." },
      { name: "theme-color", content: "#0c0909" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Fit Force" },
      { property: "og:title", content: "Fit Force Gym — Gym Management" },
      {
        property: "og:description",
        content: "Complete gym management platform for Indian gym owners."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Fit Force Gym — Gym Management" },
      {
        name: "twitter:description",
        content: "Complete gym management platform for Indian gym owners."
      },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e701f243-fd34-44ec-8c89-8551fd985de5/id-preview-d6bcd992--48e08378-957c-4997-ac20-2959be5def74.lovable.app-1781008184453.png"
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e701f243-fd34-44ec-8c89-8551fd985de5/id-preview-d6bcd992--48e08378-957c-4997-ac20-2959be5def74.lovable.app-1781008184453.png"
      },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "apple-touch-icon", href: "/icons/icon-192.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$z.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { theme: "dark", position: "top-center", richColors: true })
  ] });
}
const $$splitComponentImporter$y = () => import("./staff-BFsOu0JM.mjs");
const Route$y = createFileRoute("/staff")({
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./settings-C7otLmN7.mjs");
const Route$x = createFileRoute("/settings")({
  head: () => ({
    meta: [{
      title: "Settings - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./pricing-Dyj1JXOD.mjs");
const Route$w = createFileRoute("/pricing")({
  head: () => ({
    meta: [{
      title: "Plans - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./notifications-6i51CCjI.mjs");
const Route$v = createFileRoute("/notifications")({
  head: () => ({
    meta: [{
      title: "Notifications - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./messages-B1PY8OWP.mjs");
const Route$u = createFileRoute("/messages")({
  head: () => ({
    meta: [{
      title: "Messages — Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./members-BFsOu0JM.mjs");
const Route$t = createFileRoute("/members")({
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./member-CM8VAUQo.mjs");
const Route$s = createFileRoute("/member")({
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./login-D-km8ZVu.mjs");
const Route$r = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Login — Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./leads-BFsOu0JM.mjs");
const Route$q = createFileRoute("/leads")({
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./hardware-CS0zd5RI.mjs");
const Route$p = createFileRoute("/hardware")({
  head: () => ({
    meta: [{
      title: "Biometric Devices - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./finance-BFsOu0JM.mjs");
const Route$o = createFileRoute("/finance")({
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./dashboard-ou5gxQlV.mjs");
const Route$n = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./branches-BFsOu0JM.mjs");
const Route$m = createFileRoute("/branches")({
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./attendance-2JkFJ9dP.mjs");
const Route$l = createFileRoute("/attendance")({
  head: () => ({
    meta: [{
      title: "Attendance - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./index-DexOTxTg.mjs");
const Route$k = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./staff.index-B1Jxi-Kx.mjs");
const Route$j = createFileRoute("/staff/")({
  head: () => ({
    meta: [{
      title: "Staff - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./members.index-DW1jWZcy.mjs");
const Route$i = createFileRoute("/members/")({
  head: () => ({
    meta: [{
      title: "Members - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./leads.index-C1lfTRoy.mjs");
const Route$h = createFileRoute("/leads/")({
  head: () => ({
    meta: [{
      title: "Leads - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
function LeadBadge({
  status
}) {
  const classes = {
    New: "status-frozen",
    "Follow-up": "status-expiring",
    Interested: "status-active",
    Converted: "border-violet-500/40 bg-violet-500/10 text-violet-400",
    Lost: "status-expired"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `status-badge ${classes[status] ?? "status-inactive"}`, children: status });
}
const $$splitComponentImporter$g = () => import("./finance.index-6JB_c_NN.mjs");
const Route$g = createFileRoute("/finance/")({
  head: () => ({
    meta: [{
      title: "Finance - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./branches.index-Ddr3WQy-.mjs");
const Route$f = createFileRoute("/branches/")({
  head: () => ({
    meta: [{
      title: "Branches - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./staff.payroll-JOC6rzvg.mjs");
const Route$e = createFileRoute("/staff/payroll")({
  head: () => ({
    meta: [{
      title: "Payroll - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./staff.add-ChX9nEXU.mjs");
const Route$d = createFileRoute("/staff/add")({
  head: () => ({
    meta: [{
      title: "Add Staff - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./staff._id-BGqo5vld.mjs");
const Route$c = createFileRoute("/staff/$id")({
  head: () => ({
    meta: [{
      title: "Staff Profile - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./members.add-e4z9Mpa4.mjs");
const Route$b = createFileRoute("/members/add")({
  head: () => ({
    meta: [{
      title: "Add Member — Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./members._id-DrAmozfY.mjs");
const Route$a = createFileRoute("/members/$id")({
  head: () => ({
    meta: [{
      title: "Member Profile - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./member.workout-CIQDOHVR.mjs");
const Route$9 = createFileRoute("/member/workout")({
  head: () => ({
    meta: [{
      title: "My Workout — Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./member.payments-BHTIdSPW.mjs");
const Route$8 = createFileRoute("/member/payments")({
  head: () => ({
    meta: [{
      title: "My Payments — Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./member.home-DoQdctpv.mjs");
const Route$7 = createFileRoute("/member/home")({
  head: () => ({
    meta: [{
      title: "My Account — Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./member.attendance-5-iXvPB0.mjs");
const Route$6 = createFileRoute("/member/attendance")({
  head: () => ({
    meta: [{
      title: "My Attendance — Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./leads.add-Cj-c7kVj.mjs");
const Route$5 = createFileRoute("/leads/add")({
  head: () => ({
    meta: [{
      title: "Add Lead - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./leads._id--vCuPuPW.mjs");
const Route$4 = createFileRoute("/leads/$id")({
  head: () => ({
    meta: [{
      title: "Lead Profile - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./finance.record-D-PSCR9u.mjs");
const Route$3 = createFileRoute("/finance/record")({
  head: () => ({
    meta: [{
      title: "Record Transaction - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./finance.payments-F1v49WaW.mjs");
const Route$2 = createFileRoute("/finance/payments")({
  head: () => ({
    meta: [{
      title: "Transactions - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./finance.dues-C3BrmBCW.mjs");
const Route$1 = createFileRoute("/finance/dues")({
  head: () => ({
    meta: [{
      title: "Pending Dues - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./branches._id-C27pi5RR.mjs");
const Route = createFileRoute("/branches/$id")({
  head: () => ({
    meta: [{
      title: "Branch Detail - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const StaffRoute = Route$y.update({
  id: "/staff",
  path: "/staff",
  getParentRoute: () => Route$z
});
const SettingsRoute = Route$x.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => Route$z
});
const PricingRoute = Route$w.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$z
});
const NotificationsRoute = Route$v.update({
  id: "/notifications",
  path: "/notifications",
  getParentRoute: () => Route$z
});
const MessagesRoute = Route$u.update({
  id: "/messages",
  path: "/messages",
  getParentRoute: () => Route$z
});
const MembersRoute = Route$t.update({
  id: "/members",
  path: "/members",
  getParentRoute: () => Route$z
});
const MemberRoute = Route$s.update({
  id: "/member",
  path: "/member",
  getParentRoute: () => Route$z
});
const LoginRoute = Route$r.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$z
});
const LeadsRoute = Route$q.update({
  id: "/leads",
  path: "/leads",
  getParentRoute: () => Route$z
});
const HardwareRoute = Route$p.update({
  id: "/hardware",
  path: "/hardware",
  getParentRoute: () => Route$z
});
const FinanceRoute = Route$o.update({
  id: "/finance",
  path: "/finance",
  getParentRoute: () => Route$z
});
const DashboardRoute = Route$n.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$z
});
const BranchesRoute = Route$m.update({
  id: "/branches",
  path: "/branches",
  getParentRoute: () => Route$z
});
const AttendanceRoute = Route$l.update({
  id: "/attendance",
  path: "/attendance",
  getParentRoute: () => Route$z
});
const IndexRoute = Route$k.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$z
});
const StaffIndexRoute = Route$j.update({
  id: "/",
  path: "/",
  getParentRoute: () => StaffRoute
});
const MembersIndexRoute = Route$i.update({
  id: "/",
  path: "/",
  getParentRoute: () => MembersRoute
});
const LeadsIndexRoute = Route$h.update({
  id: "/",
  path: "/",
  getParentRoute: () => LeadsRoute
});
const FinanceIndexRoute = Route$g.update({
  id: "/",
  path: "/",
  getParentRoute: () => FinanceRoute
});
const BranchesIndexRoute = Route$f.update({
  id: "/",
  path: "/",
  getParentRoute: () => BranchesRoute
});
const StaffPayrollRoute = Route$e.update({
  id: "/payroll",
  path: "/payroll",
  getParentRoute: () => StaffRoute
});
const StaffAddRoute = Route$d.update({
  id: "/add",
  path: "/add",
  getParentRoute: () => StaffRoute
});
const StaffIdRoute = Route$c.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => StaffRoute
});
const MembersAddRoute = Route$b.update({
  id: "/add",
  path: "/add",
  getParentRoute: () => MembersRoute
});
const MembersIdRoute = Route$a.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => MembersRoute
});
const MemberWorkoutRoute = Route$9.update({
  id: "/workout",
  path: "/workout",
  getParentRoute: () => MemberRoute
});
const MemberPaymentsRoute = Route$8.update({
  id: "/payments",
  path: "/payments",
  getParentRoute: () => MemberRoute
});
const MemberHomeRoute = Route$7.update({
  id: "/home",
  path: "/home",
  getParentRoute: () => MemberRoute
});
const MemberAttendanceRoute = Route$6.update({
  id: "/attendance",
  path: "/attendance",
  getParentRoute: () => MemberRoute
});
const LeadsAddRoute = Route$5.update({
  id: "/add",
  path: "/add",
  getParentRoute: () => LeadsRoute
});
const LeadsIdRoute = Route$4.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => LeadsRoute
});
const FinanceRecordRoute = Route$3.update({
  id: "/record",
  path: "/record",
  getParentRoute: () => FinanceRoute
});
const FinancePaymentsRoute = Route$2.update({
  id: "/payments",
  path: "/payments",
  getParentRoute: () => FinanceRoute
});
const FinanceDuesRoute = Route$1.update({
  id: "/dues",
  path: "/dues",
  getParentRoute: () => FinanceRoute
});
const BranchesIdRoute = Route.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => BranchesRoute
});
const BranchesRouteChildren = {
  BranchesIdRoute,
  BranchesIndexRoute
};
const BranchesRouteWithChildren = BranchesRoute._addFileChildren(
  BranchesRouteChildren
);
const FinanceRouteChildren = {
  FinanceDuesRoute,
  FinancePaymentsRoute,
  FinanceRecordRoute,
  FinanceIndexRoute
};
const FinanceRouteWithChildren = FinanceRoute._addFileChildren(FinanceRouteChildren);
const LeadsRouteChildren = {
  LeadsIdRoute,
  LeadsAddRoute,
  LeadsIndexRoute
};
const LeadsRouteWithChildren = LeadsRoute._addFileChildren(LeadsRouteChildren);
const MemberRouteChildren = {
  MemberAttendanceRoute,
  MemberHomeRoute,
  MemberPaymentsRoute,
  MemberWorkoutRoute
};
const MemberRouteWithChildren = MemberRoute._addFileChildren(MemberRouteChildren);
const MembersRouteChildren = {
  MembersIdRoute,
  MembersAddRoute,
  MembersIndexRoute
};
const MembersRouteWithChildren = MembersRoute._addFileChildren(MembersRouteChildren);
const StaffRouteChildren = {
  StaffIdRoute,
  StaffAddRoute,
  StaffPayrollRoute,
  StaffIndexRoute
};
const StaffRouteWithChildren = StaffRoute._addFileChildren(StaffRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AttendanceRoute,
  BranchesRoute: BranchesRouteWithChildren,
  DashboardRoute,
  FinanceRoute: FinanceRouteWithChildren,
  HardwareRoute,
  LeadsRoute: LeadsRouteWithChildren,
  LoginRoute,
  MemberRoute: MemberRouteWithChildren,
  MembersRoute: MembersRouteWithChildren,
  MessagesRoute,
  NotificationsRoute,
  PricingRoute,
  SettingsRoute,
  StaffRoute: StaffRouteWithChildren
};
const routeTree = Route$z._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  LeadBadge as L,
  Route$c as R,
  Route$a as a,
  Route$4 as b,
  Route as c,
  router as r
};
