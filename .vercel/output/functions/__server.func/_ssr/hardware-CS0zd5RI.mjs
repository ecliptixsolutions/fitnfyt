import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppShell, C as Card, d as dmy, i as inr } from "./AppShell-Dv9uxNKu.mjs";
import { u as useApp } from "./app-CbaCaMR4.mjs";
import { F as FingerprintPattern, R as Router, P as PenLine, T as Trash2, n as PlugZap, o as RefreshCw, W as Wifi, C as Cpu, p as ScanFace, q as Plus } from "../_libs/lucide-react.mjs";
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
import "../_libs/zustand.mjs";
const recommended = [{
  name: "ESSL K30 Pro WiFi",
  price: 8e3,
  tag: "Budget pick",
  icon: FingerprintPattern,
  specs: ["Fingerprint only", "2,000 fingerprint capacity", "WiFi connectivity", "Best for small gyms"]
}, {
  name: "ESSL X990",
  price: 13e3,
  tag: "Best performance",
  icon: Cpu,
  specs: ["Fingerprint + RFID", "10,000 fingerprint capacity", "TCP/IP + USB", "Best for 200-1000 members"]
}, {
  name: "ESSL Aiface-Orcus",
  price: 12500,
  tag: "Face + biometric",
  icon: ScanFace,
  specs: ["Face + fingerprint", "AI recognition", "Card support", "Best for premium gyms"]
}];
function Hardware() {
  const branches = useApp((state) => state.branches);
  const devices = useApp((state) => state.biometricDevices ?? []);
  const attendance = useApp((state) => state.attendance ?? []);
  const addDevice = useApp((state) => state.addBiometricDevice);
  const updateDevice = useApp((state) => state.updateBiometricDevice);
  const deleteDevice = useApp((state) => state.deleteBiometricDevice);
  const testDevice = useApp((state) => state.testBiometricDevice);
  const syncDevice = useApp((state) => state.syncBiometricDevice);
  const [editing, setEditing] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    name: "",
    model: "ESSL K30 Pro WiFi",
    branchId: branches[0]?.id ?? "b1",
    ipAddress: "",
    port: "4370"
  });
  const openForm = (device) => {
    setEditing(device ?? null);
    setForm({
      name: device?.name ?? "",
      model: device?.model ?? "ESSL K30 Pro WiFi",
      branchId: device?.branchId ?? branches[0]?.id ?? "b1",
      ipAddress: device?.ipAddress ?? "",
      port: device?.port ?? "4370"
    });
  };
  const save = () => {
    if (!form.name.trim() || !form.ipAddress.trim()) return toast.error("Device name and IP address are required");
    if (editing) {
      updateDevice(editing.id, form);
      toast.success("Device updated");
    } else {
      addDevice(form);
      toast.success("Device added");
    }
    setEditing(null);
    setForm({
      name: "",
      model: "ESSL K30 Pro WiFi",
      branchId: branches[0]?.id ?? "b1",
      ipAddress: "",
      port: "4370"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Biometric Devices", description: "Manage attendance devices now. Real API sync can be connected later.", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openForm(), className: "btn-primary text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
    "Add device"
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-3 sm:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Devices", value: devices.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Connected", value: devices.filter((device) => device.status === "Connected").length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Mapped users", value: devices.reduce((sum, device) => sum + device.usersMapped, 0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Biometric punches", value: attendance.filter((record) => record.source === "Biometric").length })
    ] }),
    (editing || form.name || form.ipAddress) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: editing ? "Edit device" : "Add device" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setEditing(null);
          setForm({
            name: "",
            model: "ESSL K30 Pro WiFi",
            branchId: branches[0]?.id ?? "b1",
            ipAddress: "",
            port: "4370"
          });
        }, className: "text-xs text-muted-foreground hover:text-primary", children: "Cancel" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Device name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.name, onChange: (event) => setForm({
          ...form,
          name: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Model", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.model, onChange: (event) => setForm({
          ...form,
          model: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Branch", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input-field", value: form.branchId, onChange: (event) => setForm({
          ...form,
          branchId: event.target.value
        }), children: branches.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: branch.id, children: branch.name }, branch.id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "IP address", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", placeholder: "192.168.1.201", value: form.ipAddress, onChange: (event) => setForm({
          ...form,
          ipAddress: event.target.value
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Port", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input-field", value: form.port, onChange: (event) => setForm({
          ...form,
          port: event.target.value
        }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: save, className: "btn-primary mt-4 w-full", children: "Save device" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 grid gap-4 xl:grid-cols-2", children: [
      devices.map((device) => {
        const branch = branches.find((item) => item.id === device.branchId);
        const devicePunches = attendance.filter((record) => record.source === "Biometric" && (record.branchId ?? "b1") === device.branchId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-md bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FingerprintPattern, { className: "h-6 w-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold", children: device.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `status-badge ${device.status === "Connected" ? "status-active" : "status-inactive"}`, children: device.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
                device.model,
                " - ",
                branch?.name ?? "No branch"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Router, { className: "h-3 w-3" }),
                  device.ipAddress,
                  ":",
                  device.port
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  device.usersMapped,
                  " users mapped"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  devicePunches.length,
                  " punches"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openForm(device), className: "icon-button", "aria-label": `Edit ${device.name}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                if (!confirm(`Remove ${device.name}?`)) return;
                deleteDevice(device.id);
                toast.success("Device removed");
              }, className: "icon-button text-destructive", "aria-label": `Delete ${device.name}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Last sync", value: device.lastSync ? `${dmy(device.lastSync)} ${new Date(device.lastSync).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit"
            })}` : "Never" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Mode", value: "Local simulated" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Connection", value: device.status, accent: device.status === "Connected" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
              testDevice(device.id);
              toast.success("Connection test passed locally");
            }, className: "subtle-button flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PlugZap, { className: "h-4 w-4" }),
              "Test"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
              syncDevice(device.id);
              toast.success("Simulated biometric punches synced");
            }, className: "btn-primary flex-1 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4" }),
              "Sync logs"
            ] })
          ] })
        ] }, device.id);
      }),
      !devices.length && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-8 text-center text-sm text-muted-foreground", children: "No biometric devices added yet." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "h-4 w-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", children: "Recommended devices" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 lg:grid-cols-3", children: recommended.map((device) => {
        const Icon = device.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-md bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase text-primary", children: device.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold", children: device.name })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-2xl font-black text-amber-400", children: inr(device.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1", children: device.specs.map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-muted-foreground", children: [
            "- ",
            spec
          ] }, spec)) })
        ] }, device.name);
      }) })
    ] })
  ] });
}
function Metric({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "!p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-black", children: value })
  ] });
}
function Mini({
  label,
  value,
  accent = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1 text-sm font-bold ${accent ? "text-emerald-400" : ""}`, children: value })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block space-y-1 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    children
  ] });
}
export {
  Hardware as component
};
