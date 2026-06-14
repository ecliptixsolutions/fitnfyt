import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { i as Dumbbell, E as EyeOff, l as Eye, m as Shield } from "../_libs/lucide-react.mjs";
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
function Login() {
  const [role, setRole] = reactExports.useState("owner");
  const [phone, setPhone] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [show, setShow] = reactExports.useState(false);
  const login = useApp((s) => s.login);
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (!phone || !password) {
      toast.error("Enter mobile and password");
      return;
    }
    const ok = login(role, phone, password);
    if (!ok) {
      toast.error("Login failed");
      return;
    }
    toast.success("Welcome to Fit & Fyt GymOS!");
    if (phone === "superadmin") navigate({
      to: "/dashboard"
    });
    else navigate({
      to: role === "member" ? "/member/home" : "/dashboard"
    });
  };
  const quickSuper = () => {
    login("super", "superadmin", "superadmin");
    toast.success("Logged in as Super Admin");
    navigate({
      to: "/dashboard"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-background px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm card-surface p-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-md border border-primary/40 bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { className: "h-6 w-6 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-2xl font-black", children: [
        "FIT ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "&" }),
        " FYT"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase text-primary", children: "MMA · Gym · Fitness" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "Sign in to GymOS" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-5 p-1 bg-input rounded-md", children: ["owner", "staff", "member"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setRole(r), className: `py-2 text-sm rounded capitalize transition ${role === r ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"}`, children: r }, r)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium", children: "Mobile Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field mt-1", placeholder: "+91 98765 43210", value: phone, onChange: (e) => setPhone(e.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field pr-10", type: show ? "text" : "password", value: password, onChange: (e) => setPassword(e.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow(!show), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-xs text-muted-foreground hover:text-primary", href: "#", children: "Forgot Password?" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary w-full", type: "submit", children: "Login" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: quickSuper, className: "mt-3 w-full flex items-center justify-center gap-2 text-xs py-2.5 rounded-md border border-border text-muted-foreground hover:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
      " Quick Login as Super Admin"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-4", children: [
      "New gym?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-primary font-medium", href: "#", children: "Start Free Trial →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[10px] text-muted-foreground mt-3 leading-relaxed", children: [
      "Demo: use any number + password.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Super: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300", children: "superadmin / superadmin" })
    ] })
  ] }) });
}
export {
  Login as component
};
