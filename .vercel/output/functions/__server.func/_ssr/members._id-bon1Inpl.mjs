import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card, a as daysBetween, b as initials, c as colorFromName, d as dmy, S as StatusBadge, i as inr } from "./AppShell-9xLAHItq.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Route$a, u as useApp } from "./router-Dgpn6rjq.mjs";
import { Z as Phone, a8 as Mail, a9 as Flame, q as Plus, J as Upload, aa as FileText, o as RefreshCw, ab as Pencil, ac as Sun, ad as Snowflake, X } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const planPrices = {
  Basic: {
    6: 4999,
    12: 8999,
    24: 16999
  },
  Premium: {
    6: 6999,
    12: 11999,
    24: 21499
  },
  "Premium Plus": {
    6: 13499,
    12: 24999,
    24: 44999
  }
};
function Detail() {
  const {
    id
  } = Route$a.useParams();
  const members = useApp((state) => state.members);
  const allPayments = useApp((state) => state.payments);
  const staff = useApp((state) => state.staff);
  const updateMember = useApp((state) => state.updateMember);
  const renewMember = useApp((state) => state.renewMember);
  const toggleMemberFreeze = useApp((state) => state.toggleMemberFreeze);
  const setWorkoutPlan = useApp((state) => state.setWorkoutPlan);
  const addMemberDocument = useApp((state) => state.addMemberDocument);
  const [tab, setTab] = reactExports.useState("history");
  const [editOpen, setEditOpen] = reactExports.useState(false);
  const [renewOpen, setRenewOpen] = reactExports.useState(false);
  const [exercise, setExercise] = reactExports.useState("");
  const [edit, setEdit] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    plan: "",
    expiryDate: "",
    status: "active"
  });
  const [renewal, setRenewal] = reactExports.useState({
    plan: "Premium",
    months: 12,
    amount: 11999,
    mode: "UPI"
  });
  const documentInput = reactExports.useRef(null);
  const member = members.find((item) => item.id === id);
  const payments = allPayments.filter((payment) => payment.memberId === id);
  if (!member) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Member profile", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: "Member not found" }) });
  }
  const days = daysBetween(/* @__PURE__ */ new Date(), new Date(member.expiryDate));
  const workouts = member.workoutPlan ?? [];
  const documents = member.documents ?? [];
  const openEdit = () => {
    setEdit({
      name: member.name,
      phone: member.phone,
      email: member.email ?? "",
      plan: member.plan,
      expiryDate: new Date(member.expiryDate).toISOString().slice(0, 10),
      status: member.status
    });
    setEditOpen(true);
  };
  const openRenew = () => {
    const months = 12;
    setRenewal({
      plan: member.plan,
      months,
      amount: planPrices[member.plan]?.[months] ?? 0,
      mode: "UPI"
    });
    setRenewOpen(true);
  };
  const updateRenewal = (patch) => {
    const next = {
      ...renewal,
      ...patch
    };
    if (patch.plan || patch.months) next.amount = planPrices[next.plan]?.[next.months] ?? next.amount;
    setRenewal(next);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Member profile", description: `${member.id.toUpperCase()} - ${member.plan}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-24 w-24 place-items-center rounded-full text-2xl font-black text-white ${colorFromName(member.name)}`, children: initials(member.name) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-2xl font-bold", children: member.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
          member.phone
        ] }),
        member.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3" }),
          member.email
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-4 border-primary/40 bg-primary/10 !p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label text-primary", children: "Membership" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-black", children: member.plan }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex justify-between gap-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          dmy(member.startDate),
          " to ",
          dmy(member.expiryDate)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: member.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-black text-primary", children: Math.max(days, 0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1.5 text-xs text-muted-foreground", children: "days remaining" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 grid grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-black", children: member.checkIns.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase text-muted-foreground", children: "Total Check-ins" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1 text-xl font-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-5 w-5 text-amber-400" }),
          member.streak
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase text-muted-foreground", children: "Streak" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-black text-destructive", children: Math.max(0, 30 - member.checkIns.length) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase text-muted-foreground", children: "Missed" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex gap-1 rounded-md bg-input p-1", children: ["history", "payments", "workouts", "docs"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(value), className: `flex-1 rounded px-2 py-2 text-xs capitalize ${tab === value ? "bg-primary font-semibold text-primary-foreground" : "text-muted-foreground"}`, children: value }, value)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-4 !p-3", children: [
      tab === "history" && /* @__PURE__ */ jsxRuntimeExports.jsx(History, { dates: member.checkIns }),
      tab === "payments" && (payments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { text: "No payments recorded" }) : payments.map((payment) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/50 py-2 text-sm last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            payment.plan,
            payment.category === "Personal Training" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 status-badge status-expiring", children: "PT" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            dmy(payment.date),
            " - ",
            payment.mode
          ] }),
          payment.trainerId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] text-primary", children: [
            "Trainer:",
            " ",
            staff.find((person) => person.id === payment.trainerId)?.name ?? "Unknown",
            " -",
            " ",
            payment.commissionPercent ?? 40,
            "% commission"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `font-semibold ${payment.type === "refund" ? "text-amber-400" : "text-primary"}`, children: [
          payment.type === "refund" ? "-" : "",
          inr(payment.amount)
        ] })
      ] }, payment.id))),
      tab === "workouts" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: exercise, onChange: (event) => setExercise(event.target.value), placeholder: "Add exercise or workout" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "icon-button shrink-0", "aria-label": "Add workout", onClick: () => {
            if (!exercise.trim()) return;
            setWorkoutPlan(member.id, [...workouts, exercise.trim()]);
            setExercise("");
            toast.success("Workout added");
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
        ] }),
        workouts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { text: "No workout plan assigned" }) : workouts.map((workout, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border/50 py-3 text-sm last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary", children: index + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: workout }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setWorkoutPlan(member.id, workouts.filter((_, itemIndex) => itemIndex !== index)), className: "ml-auto text-xs text-destructive", children: "Remove" })
        ] }, `${workout}-${index}`))
      ] }),
      tab === "docs" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: documentInput, type: "file", className: "hidden", onChange: (event) => {
          const file = event.target.files?.[0];
          if (!file) return;
          addMemberDocument(member.id, file.name);
          toast.success("Document added");
          event.target.value = "";
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => documentInput.current?.click(), className: "subtle-button mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
          "Add document"
        ] }),
        documents.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { text: "No documents uploaded" }) : documents.map((document) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border/50 py-3 text-sm last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: document.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: dmy(document.uploadedAt) })
        ] }, document.id))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 grid gap-2 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openRenew, className: "btn-primary justify-center text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4" }),
        "Renew"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openEdit, className: "subtle-button justify-center text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }),
        "Edit"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        toggleMemberFreeze(member.id);
        toast.success(member.status === "frozen" ? "Membership unfrozen" : "Membership frozen");
      }, className: "subtle-button justify-center text-sm", children: [
        member.status === "frozen" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Snowflake, { className: "h-4 w-4" }),
        member.status === "frozen" ? "Unfreeze" : "Freeze"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: editOpen, onOpenChange: setEditOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Edit member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Update profile and membership details." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: edit.name, onChange: (event) => setEdit({
          ...edit,
          name: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: edit.phone, onChange: (event) => setEdit({
          ...edit,
          phone: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: edit.email, onChange: (event) => setEdit({
          ...edit,
          email: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Plan", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: edit.plan, onChange: (event) => setEdit({
          ...edit,
          plan: event.target.value
        }), children: Object.keys(planPrices).map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: plan }, plan)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Expiry date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "input-field", value: edit.expiryDate, onChange: (event) => setEdit({
          ...edit,
          expiryDate: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Status", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: edit.status, onChange: (event) => setEdit({
          ...edit,
          status: event.target.value
        }), children: ["active", "expiring", "expired", "frozen"].map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: status }, status)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary", onClick: () => {
        if (!edit.name.trim() || !edit.phone.trim()) return toast.error("Name and phone are required");
        updateMember(member.id, {
          ...edit,
          expiryDate: new Date(edit.expiryDate).toISOString()
        });
        setEditOpen(false);
        toast.success("Member updated");
      }, children: "Save changes" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: renewOpen, onOpenChange: setRenewOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Renew membership" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "The expiry date and payment history update immediately." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Plan", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: renewal.plan, onChange: (event) => updateRenewal({
          plan: event.target.value
        }), children: Object.keys(planPrices).map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: plan }, plan)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Duration", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input-field", value: renewal.months, onChange: (event) => updateRenewal({
          months: Number(event.target.value)
        }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 6, children: "6 months" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 12, children: "1 year" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 24, children: "2 years" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Amount", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "input-field", value: renewal.amount, onChange: (event) => updateRenewal({
          amount: Number(event.target.value)
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Payment mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: renewal.mode, onChange: (event) => updateRenewal({
          mode: event.target.value
        }), children: ["Cash", "UPI", "Card", "Bank"].map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: mode }, mode)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary", onClick: () => {
        if (renewal.amount <= 0) return toast.error("Enter a valid payment amount");
        renewMember(member.id, renewal.plan, renewal.months, renewal.amount, renewal.mode);
        setRenewOpen(false);
        toast.success("Membership renewed");
      }, children: "Confirm renewal" }) })
    ] }) })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    children
  ] });
}
function History({
  dates
}) {
  if (!dates.length) return /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { text: "No check-ins yet" });
  return dates.slice(0, 10).map((date, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/50 py-2 text-sm last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dmy(date) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: new Date(date).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit"
    }) })
  ] }, `${date}-${index}`));
}
function Empty({
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-center text-sm text-muted-foreground", children: text });
}
export {
  Detail as component
};
