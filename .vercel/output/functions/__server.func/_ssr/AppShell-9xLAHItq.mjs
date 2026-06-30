import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, e as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useApp } from "./router-Dgpn6rjq.mjs";
import { c as LogOut, a0 as Menu, w as Search, U as Users, a as Crown, d as Sparkles, b as Bell, a1 as UserRound, X, i as Dumbbell, a2 as LayoutDashboard, a3 as CalendarCheck, a4 as CircleDollarSign, a5 as UserCog, M as MessageCircle, B as Building2, C as Cpu, a6 as Settings, a7 as ChevronRight } from "../_libs/lucide-react.mjs";
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
const dmy = (d) => {
  const dt = typeof d === "string" ? new Date(d) : d;
  return `${String(dt.getDate()).padStart(2, "0")}/${String(dt.getMonth() + 1).padStart(2, "0")}/${dt.getFullYear()}`;
};
const daysBetween = (a, b) => Math.ceil((b.getTime() - a.getTime()) / (1e3 * 60 * 60 * 24));
const initials = (name) => name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
const colorFromName = (name) => {
  const colors = [
    "bg-emerald-600",
    "bg-sky-600",
    "bg-amber-600",
    "bg-rose-600",
    "bg-violet-600",
    "bg-cyan-600"
  ];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = h * 31 + name.charCodeAt(i) | 0;
  return colors[Math.abs(h) % colors.length];
};
const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/members", label: "Members", icon: Users },
  { to: "/pricing", label: "Plans", icon: Crown },
  { to: "/attendance", label: "Attendance", icon: CalendarCheck },
  { to: "/finance", label: "Finance", icon: CircleDollarSign },
  { to: "/leads", label: "Leads", icon: Sparkles },
  { to: "/staff", label: "Staff", icon: UserCog },
  { to: "/messages", label: "Messages", icon: MessageCircle },
  { to: "/branches", label: "Branches", icon: Building2 },
  { to: "/hardware", label: "Biometric", icon: Cpu },
  { to: "/settings", label: "Settings", icon: Settings }
];
const mobileItems = navItems.slice(0, 4);
function AppShell({
  children,
  title,
  description,
  actions
}) {
  const auth = useApp((state) => state.auth);
  const logout = useApp((state) => state.logout);
  const members = useApp((state) => state.members);
  const leads = useApp((state) => state.leads);
  const payments = useApp((state) => state.payments);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [drawer, setDrawer] = reactExports.useState(false);
  const [collapsed, setCollapsed] = reactExports.useState(false);
  const [accountMenu, setAccountMenu] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [ready, setReady] = reactExports.useState(false);
  reactExports.useEffect(() => setReady(true), []);
  reactExports.useEffect(() => {
    if (ready && !auth) navigate({ to: "/login", replace: true });
  }, [auth, navigate, ready]);
  const onLogout = () => {
    logout();
    navigate({ to: "/login" });
  };
  const normalizedSearch = search.trim().toLowerCase();
  const { memberResults, leadResults, planResults } = reactExports.useMemo(() => {
    if (!normalizedSearch) {
      return { memberResults: [], leadResults: [], planResults: [] };
    }
    return {
      memberResults: members.filter(
        (member) => `${member.name} ${member.phone} ${member.email ?? ""} ${member.plan}`.toLowerCase().includes(normalizedSearch)
      ).slice(0, 4),
      leadResults: leads.filter(
        (lead) => `${lead.name} ${lead.phone} ${lead.enquiry}`.toLowerCase().includes(normalizedSearch)
      ).slice(0, 2),
      planResults: [...new Set(members.map((member) => member.plan))].filter((plan) => plan.toLowerCase().includes(normalizedSearch)).slice(0, 2)
    };
  }, [leads, members, normalizedSearch]);
  const notificationCount = reactExports.useMemo(
    () => members.filter((member) => member.status === "expiring").length + payments.filter((payment) => payment.status === "Pending").length + leads.filter((lead) => lead.status === "New").length,
    [leads, members, payments]
  );
  if (!ready || !auth) return /* @__PURE__ */ jsxRuntimeExports.jsx(AppLoading, {});
  const renderNav = (compact) => /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1", children: navItems.map((item) => {
    const Icon = item.icon;
    const active = pathname === item.to || item.to !== "/dashboard" && pathname.startsWith(`${item.to}/`);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: item.to,
        onClick: () => setDrawer(false),
        title: compact ? item.label : void 0,
        className: `sidebar-link ${compact ? "justify-center" : ""} ${active ? "sidebar-link-active" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 shrink-0" }),
          !compact && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label }),
          active && !compact && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto h-3.5 w-3.5" })
        ]
      },
      item.to
    );
  }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: `fixed inset-y-0 left-0 z-40 hidden border-r border-border bg-sidebar transition-[width] lg:flex lg:flex-col ${collapsed ? "w-20" : "w-64"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brand, { collapsed }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-3 py-5", children: renderNav(collapsed) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mb-3 flex items-center gap-3 ${collapsed ? "justify-center" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: auth.name }),
              !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-semibold", children: auth.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate text-xs capitalize text-muted-foreground", children: [
                  auth.role,
                  " - HQ Branch"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: onLogout,
                className: `sidebar-link w-full text-destructive ${collapsed ? "justify-center" : ""}`,
                title: collapsed ? "Logout" : void 0,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
                  !collapsed && "Logout"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `transition-[padding] ${collapsed ? "lg:pl-20" : "lg:pl-64"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 border-b border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center gap-3 px-4 lg:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              if (window.innerWidth >= 1024) setCollapsed((value) => !value);
              else setDrawer(true);
            },
            className: "icon-button",
            "aria-label": collapsed ? "Expand menu" : "Toggle menu",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden max-w-md flex-1 md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input-field h-10 pl-9",
              placeholder: "Search members, plans, leads...",
              value: search,
              onChange: (event) => setSearch(event.target.value)
            }
          ),
          normalizedSearch && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-md border border-border bg-card shadow-xl", children: [
            memberResults.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/members/$id",
                params: { id: member.id },
                onClick: () => setSearch(""),
                className: "flex items-center gap-3 border-b border-border px-3 py-2.5 text-xs hover:bg-secondary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: member.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-muted-foreground", children: member.plan })
                ]
              },
              member.id
            )),
            planResults.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/pricing",
                onClick: () => setSearch(""),
                className: "flex items-center gap-3 border-b border-border px-3 py-2.5 text-xs hover:bg-secondary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "h-4 w-4 text-amber-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: plan }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-muted-foreground", children: "Plan" })
                ]
              },
              plan
            )),
            leadResults.map((lead) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/leads",
                onClick: () => setSearch(""),
                className: "flex items-center gap-3 border-b border-border px-3 py-2.5 text-xs hover:bg-secondary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-sky-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: lead.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-muted-foreground", children: "Lead" })
                ]
              },
              lead.id
            )),
            memberResults.length + planResults.length + leadResults.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-4 text-center text-xs text-muted-foreground", children: "No matching members, plans, or leads" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", className: "brand-wordmark md:hidden", children: [
          "FIT ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "&" }),
          " FYT"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/notifications", className: "icon-button relative", "aria-label": "Notifications", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
            notificationCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-0 top-0 grid min-h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[8px] font-bold text-white", children: notificationCount })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setAccountMenu((value) => !value),
                className: "flex items-center gap-2 rounded-md p-1 hover:bg-secondary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden text-right sm:block", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", children: auth.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] capitalize text-muted-foreground", children: [
                      auth.role,
                      " - HQ Branch"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: auth.name })
                ]
              }
            ),
            accountMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-12 z-50 w-44 rounded-md border border-border bg-card p-1 shadow-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/settings",
                  onClick: () => setAccountMenu(false),
                  className: "sidebar-link",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "h-4 w-4" }),
                    "Account settings"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onLogout, className: "sidebar-link w-full text-destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
                "Logout"
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1500px] px-4 py-6 pb-24 lg:px-6 lg:pb-8", children: [
        (title || actions) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            title && /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "page-title", children: title }),
            description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "page-description", children: description })
          ] }),
          actions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: actions })
        ] }),
        children
      ] })
    ] }),
    drawer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "absolute inset-0 bg-black/75",
          onClick: () => setDrawer(false),
          "aria-label": "Close menu"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "absolute inset-y-0 left-0 flex w-72 flex-col border-r border-border bg-sidebar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brand, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setDrawer(false),
              className: "icon-button mr-3",
              "aria-label": "Close menu",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-3 py-5", children: renderNav(false) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onLogout, className: "sidebar-link m-3 text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          "Logout"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-border bg-sidebar lg:hidden", children: [
      mobileItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            className: `mobile-nav-link ${active ? "text-primary" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
            ]
          },
          item.to
        );
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setDrawer(true), className: "mobile-nav-link", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "More" })
      ] })
    ] })
  ] });
}
function Brand({ collapsed = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/dashboard",
      className: `flex h-20 items-center gap-3 border-b border-border px-5 ${collapsed ? "justify-center px-0" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary/40 bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "h-5 w-5 text-primary" }) }),
        !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "brand-wordmark", children: [
            "FIT ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "&" }),
            " FYT"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-primary", children: "MMA - Gym - Fitness" })
        ] })
      ]
    }
  );
}
function Avatar({ name }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/15 text-xs font-bold text-primary", children: initials(name) });
}
function AppLoading() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-screen place-items-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-md border border-primary/40 bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "h-6 w-6 animate-pulse text-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "brand-wordmark mt-3", children: [
      "FIT ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "&" }),
      " FYT"
    ] })
  ] }) });
}
function Card({ children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `card-surface p-5 ${className}`, children });
}
function StatusBadge({ status }) {
  const map = {
    active: "status-active",
    expired: "status-expired",
    expiring: "status-expiring",
    frozen: "status-frozen",
    inactive: "status-inactive"
  };
  const label = {
    active: "Active",
    expired: "Expired",
    expiring: "Expiring Soon",
    frozen: "Frozen",
    inactive: "Inactive"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `status-badge ${map[status] ?? "status-inactive"}`, children: label[status] ?? status });
}
export {
  AppShell as A,
  Card as C,
  StatusBadge as S,
  daysBetween as a,
  initials as b,
  colorFromName as c,
  dmy as d,
  inr as i
};
