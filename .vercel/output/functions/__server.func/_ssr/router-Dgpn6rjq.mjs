import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster, t as toast } from "../_libs/sonner.mjs";
import { c as create, p as persist } from "../_libs/zustand.mjs";
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
const appCss = "/assets/styles-BRw9Lj0W.css";
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
const SUPABASE_URL = "https://qvrebewjlthikhzxwpcg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_RiKCU541R0b2uFu4RAS2-Q_3bbTx10m";
const enabled = Boolean(SUPABASE_ANON_KEY);
async function request(tableAndQuery, init = {}) {
  if (!enabled) throw new Error("Supabase is not configured");
  const response = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/${tableAndQuery}`, {
    ...init,
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=minimal",
      ...init.headers ?? {}
    }
  });
  if (!response.ok) {
    throw new Error(`Supabase request failed: ${response.status} ${await response.text()}`);
  }
  if (response.status === 204) return void 0;
  const text = await response.text();
  return text ? JSON.parse(text) : void 0;
}
async function loadSupabaseSnapshot() {
  if (!enabled) return {};
  const [members, staff, attendance, biometricDevices] = await Promise.all([
    request("members?select=*&order=name.asc"),
    request("staff?select=*&order=name.asc"),
    request("attendance_records?select=*&order=punch_in.desc"),
    request("biometric_devices?select=*&order=name.asc")
  ]);
  return {
    members: members.map(fromMemberRow),
    staff: staff.map(fromStaffRow),
    attendance: attendance.map(fromAttendanceRow),
    biometricDevices: biometricDevices.map(fromDeviceRow)
  };
}
async function queueHikvisionEnrollment(enrollment) {
  if (!enabled) return;
  await request("hikvision_people?on_conflict=employee_number", {
    method: "POST",
    body: JSON.stringify({
      employee_number: enrollment.employeeNumber,
      subject_id: enrollment.subjectId,
      subject_type: enrollment.subjectType,
      name: enrollment.name,
      card_number: enrollment.cardNumber || null,
      face_image_path: enrollment.faceImagePath || null,
      valid_from: enrollment.validFrom || null,
      valid_to: enrollment.validTo || null,
      active: enrollment.active ?? true,
      pending_operation: "Upsert",
      branch_id: enrollment.branchId ?? null,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    })
  });
}
async function saveSupabaseSnapshot(snapshot) {
  if (!enabled) return;
  await Promise.all([
    upsert("members", snapshot.members.map(toMemberRow), "id"),
    upsert("staff", snapshot.staff.map(toStaffRow), "id"),
    upsert("attendance_records", snapshot.attendance.map(toAttendanceRow), "id"),
    upsert("biometric_devices", snapshot.biometricDevices.map(toDeviceRow), "id")
  ]);
}
async function upsert(table, rows, conflict) {
  if (!rows.length) return;
  await request(`${table}?on_conflict=${conflict}`, {
    method: "POST",
    body: JSON.stringify(rows)
  });
}
function fromMemberRow(row) {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    email: row.email ?? void 0,
    plan: row.plan ?? "Premium",
    startDate: row.start_date,
    expiryDate: row.expiry_date,
    status: row.status ?? "active",
    amountPaid: Number(row.amount_paid ?? 0),
    totalAmount: Number(row.total_amount ?? 0),
    checkIns: [],
    streak: 0,
    documents: [],
    workoutPlan: [],
    branchId: row.branch_id ?? void 0
  };
}
function toMemberRow(member) {
  return {
    id: member.id,
    name: member.name,
    phone: member.phone,
    email: member.email ?? null,
    plan: member.plan,
    start_date: member.startDate,
    expiry_date: member.expiryDate,
    status: member.status,
    amount_paid: member.amountPaid,
    total_amount: member.totalAmount,
    branch_id: member.branchId ?? null,
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function fromStaffRow(row) {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    role: row.role ?? "Trainer",
    joined: row.joined,
    salary: Number(row.salary ?? 0),
    active: row.active ?? true,
    shift: row.shift ?? void 0,
    weeklyOff: row.weekly_off ?? void 0,
    permissions: [],
    assignedMemberIds: [],
    branchId: row.branch_id ?? void 0
  };
}
function toStaffRow(staff) {
  return {
    id: staff.id,
    name: staff.name,
    phone: staff.phone,
    role: staff.role,
    joined: staff.joined,
    salary: staff.salary,
    active: staff.active,
    shift: staff.shift ?? null,
    weekly_off: staff.weeklyOff ?? null,
    branch_id: staff.branchId ?? null,
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function fromAttendanceRow(row) {
  return {
    id: row.id,
    subjectId: row.subject_id,
    subjectType: row.subject_type,
    date: row.date,
    punchIn: row.punch_in,
    punchOut: row.punch_out ?? void 0,
    source: row.source ?? "Biometric",
    branchId: row.branch_id ?? void 0
  };
}
function toAttendanceRow(record) {
  return {
    id: record.id,
    subject_id: record.subjectId,
    subject_type: record.subjectType,
    date: record.date,
    punch_in: record.punchIn,
    punch_out: record.punchOut ?? null,
    source: record.source,
    branch_id: record.branchId ?? null
  };
}
function fromDeviceRow(row) {
  return {
    id: row.id,
    name: row.name,
    model: row.model,
    branchId: row.branch_id ?? "b1",
    ipAddress: row.ip_address,
    port: row.port ?? "443",
    status: row.status ?? "Disconnected",
    lastSync: row.last_sync ?? void 0,
    usersMapped: Number(row.users_mapped ?? 0)
  };
}
function toDeviceRow(device) {
  return {
    id: device.id,
    name: device.name,
    model: device.model,
    branch_id: device.branchId,
    ip_address: device.ipAddress,
    port: device.port,
    status: device.status,
    last_sync: device.lastSync ?? null,
    users_mapped: device.usersMapped,
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  };
}
const today = /* @__PURE__ */ new Date();
const offset = (days) => {
  const d = new Date(today);
  d.setDate(d.getDate() + days);
  return d.toISOString();
};
const seedMembers = [
  {
    id: "m1",
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    plan: "Premium Plus",
    startDate: offset(-180),
    expiryDate: offset(205),
    status: "active",
    amountPaid: 24999,
    totalAmount: 24999,
    checkIns: [offset(0), offset(-1), offset(-2), offset(-3)],
    streak: 12,
    workoutPlan: ["Upper body strength", "HIIT conditioning", "Mobility cooldown"],
    documents: [{ id: "doc-m1-1", name: "ID proof.pdf", uploadedAt: offset(-180) }],
    branchId: "b1"
  },
  {
    id: "m2",
    name: "Priya Patel",
    phone: "+91 87654 32109",
    plan: "Premium",
    startDate: offset(-90),
    expiryDate: offset(36),
    status: "active",
    amountPaid: 11999,
    totalAmount: 11999,
    checkIns: [offset(0), offset(-1)],
    streak: 5,
    workoutPlan: ["Fat-loss circuit", "Core stability"],
    documents: [],
    branchId: "b1"
  },
  {
    id: "m3",
    name: "Amit Verma",
    phone: "+91 76543 21098",
    plan: "Basic",
    startDate: offset(-200),
    expiryDate: offset(-10),
    status: "expired",
    amountPaid: 8999,
    totalAmount: 8999,
    checkIns: [],
    streak: 0,
    workoutPlan: ["Reactivation assessment"],
    documents: [],
    branchId: "b2"
  },
  {
    id: "m4",
    name: "Sneha Joshi",
    phone: "+91 65432 10987",
    plan: "Premium",
    startDate: offset(-60),
    expiryDate: offset(72),
    status: "active",
    amountPaid: 11999,
    totalAmount: 11999,
    checkIns: [offset(0)],
    streak: 3,
    workoutPlan: ["Yoga mobility", "Lower body strength"],
    documents: [{ id: "doc-m4-1", name: "Medical declaration.pdf", uploadedAt: offset(-60) }],
    branchId: "b1"
  },
  {
    id: "m5",
    name: "Rohan Gupta",
    phone: "+91 54321 09876",
    plan: "Basic",
    startDate: offset(-350),
    expiryDate: offset(5),
    status: "expiring",
    amountPaid: 6e3,
    totalAmount: 8999,
    checkIns: [offset(-1)],
    streak: 0,
    workoutPlan: ["Beginner hypertrophy", "Treadmill intervals"],
    documents: [],
    branchId: "b2"
  }
];
const seedStaff = [
  {
    id: "s1",
    name: "Vikram Singh",
    phone: "+91 99999 11111",
    role: "Trainer",
    joined: offset(-400),
    salary: 25e3,
    active: true,
    permissions: ["View Members", "Mark Attendance", "View Reports"],
    shift: "06:00 - 14:00",
    weeklyOff: "Sunday",
    assignedMemberIds: ["m1", "m2"],
    branchId: "b1"
  },
  {
    id: "s2",
    name: "Arjun Mehta",
    phone: "+91 99999 22222",
    role: "Trainer",
    joined: offset(-300),
    salary: 23e3,
    active: true,
    permissions: ["View Members", "Mark Attendance"],
    shift: "14:00 - 22:00",
    weeklyOff: "Monday",
    assignedMemberIds: ["m4"],
    branchId: "b1"
  },
  {
    id: "s3",
    name: "Neha Kapoor",
    phone: "+91 99999 33333",
    role: "Trainer",
    joined: offset(-260),
    salary: 22e3,
    active: true,
    permissions: ["View Members", "Mark Attendance"],
    shift: "07:00 - 15:00",
    weeklyOff: "Tuesday",
    assignedMemberIds: ["m3"],
    branchId: "b2"
  },
  {
    id: "s4",
    name: "Kabir Khan",
    phone: "+91 99999 44444",
    role: "Trainer",
    joined: offset(-190),
    salary: 21e3,
    active: true,
    permissions: ["View Members", "Mark Attendance"],
    shift: "16:00 - 23:00",
    weeklyOff: "Wednesday",
    assignedMemberIds: ["m5"],
    branchId: "b2"
  },
  {
    id: "s5",
    name: "Riya Shah",
    phone: "+91 99999 55555",
    role: "Trainer",
    joined: offset(-120),
    salary: 2e4,
    active: true,
    permissions: ["View Members", "Mark Attendance", "Manage Leads"],
    shift: "10:00 - 18:00",
    weeklyOff: "Friday",
    assignedMemberIds: [],
    branchId: "b1"
  },
  {
    id: "s6",
    name: "Suresh Kumar",
    phone: "+91 99999 66666",
    role: "Manager",
    joined: offset(-600),
    salary: 4e4,
    active: true,
    permissions: [
      "View Members",
      "Add Members",
      "Edit Members",
      "View Finance",
      "Record Payments",
      "Mark Attendance",
      "View Reports",
      "Manage Leads"
    ],
    shift: "10:00 - 19:00",
    weeklyOff: "Thursday",
    assignedMemberIds: [],
    branchId: "b1"
  }
];
const seedLeads = [
  {
    id: "l1",
    name: "Ankit Mehta",
    phone: "+91 91111 11111",
    source: "Walk-in",
    status: "Interested",
    enquiry: "Weight Loss",
    followUp: offset(1),
    assignedStaffId: "s5",
    branchId: "b1"
  },
  {
    id: "l2",
    name: "Divya Shah",
    phone: "+91 92222 22222",
    source: "Instagram",
    status: "New",
    enquiry: "Yoga",
    followUp: offset(0),
    assignedStaffId: "s2",
    branchId: "b1"
  },
  {
    id: "l3",
    name: "Karan Nair",
    phone: "+91 93333 33333",
    source: "Referral",
    status: "Converted",
    enquiry: "Muscle Gain",
    followUp: offset(-5),
    assignedStaffId: "s3",
    branchId: "b2"
  },
  {
    id: "l4",
    name: "Fatima Khan",
    phone: "+91 94444 44444",
    source: "Website",
    status: "Follow-up",
    enquiry: "Personal Training",
    followUp: offset(2),
    assignedStaffId: "s1",
    branchId: "b1"
  },
  {
    id: "l5",
    name: "Nikhil Desai",
    phone: "+91 95555 55555",
    source: "WhatsApp",
    status: "New",
    enquiry: "MMA Classes",
    followUp: offset(1),
    assignedStaffId: "s4",
    branchId: "b2"
  }
];
const seedPayments = [
  {
    id: "p1",
    memberId: "m1",
    amount: 24999,
    date: offset(-180),
    mode: "UPI",
    plan: "Premium Plus",
    status: "Paid",
    category: "Membership",
    branchId: "b1"
  },
  {
    id: "p2",
    memberId: "m2",
    amount: 11999,
    date: offset(-90),
    mode: "Card",
    plan: "Premium",
    status: "Paid",
    category: "Membership",
    branchId: "b1"
  },
  {
    id: "p3",
    memberId: "m4",
    amount: 11999,
    date: offset(-60),
    mode: "Cash",
    plan: "Premium",
    status: "Paid",
    category: "Membership",
    branchId: "b1"
  },
  {
    id: "p4",
    memberId: "m5",
    amount: 6e3,
    date: offset(-15),
    mode: "UPI",
    plan: "Basic",
    status: "Pending",
    category: "Membership",
    dueDate: offset(2),
    branchId: "b2"
  },
  {
    id: "p5",
    memberId: "m3",
    amount: 8999,
    date: offset(-200),
    mode: "Cash",
    plan: "Basic",
    status: "Paid",
    category: "Membership",
    branchId: "b2"
  },
  {
    id: "pt1",
    memberId: "m1",
    amount: 1e4,
    date: offset(-8),
    mode: "UPI",
    plan: "PT Strength Transformation - 12 sessions",
    status: "Paid",
    type: "payment",
    category: "Personal Training",
    trainerId: "s1",
    commissionPercent: 40,
    commissionAmount: 4e3,
    reference: "PT-1001",
    branchId: "b1"
  },
  {
    id: "pt2",
    memberId: "m2",
    amount: 12e3,
    date: offset(-5),
    mode: "Card",
    plan: "PT Fat Loss - 16 sessions",
    status: "Paid",
    type: "payment",
    category: "Personal Training",
    trainerId: "s2",
    commissionPercent: 35,
    commissionAmount: 4200,
    reference: "PT-1002",
    branchId: "b1"
  },
  {
    id: "pt3",
    memberId: "m4",
    amount: 8e3,
    date: offset(-3),
    mode: "Cash",
    plan: "PT Mobility Rehab - 8 sessions",
    status: "Paid",
    type: "payment",
    category: "Personal Training",
    trainerId: "s3",
    commissionPercent: 50,
    commissionAmount: 4e3,
    reference: "PT-1003",
    branchId: "b1"
  },
  {
    id: "pt3-refund",
    memberId: "m4",
    amount: 2e3,
    date: offset(-1),
    mode: "Cash",
    plan: "PT Mobility Rehab - partial refund",
    status: "Paid",
    type: "refund",
    category: "Personal Training",
    trainerId: "s3",
    commissionPercent: 50,
    refundForPaymentId: "pt3",
    reference: "RF-PT-1003",
    notes: "Two PT sessions refunded",
    branchId: "b1"
  }
];
const seedBranches = [
  {
    id: "b1",
    name: "Fit Force Andheri",
    city: "Mumbai",
    manager: "Suresh Kumar",
    members: 247,
    revenue: 124500,
    address: "Andheri West, Mumbai, 400053",
    phone: "+91 91117 11366",
    active: true
  },
  {
    id: "b2",
    name: "Fit Force Bandra",
    city: "Mumbai",
    manager: "Neha Kapoor",
    members: 156,
    revenue: 89200,
    address: "Bandra West, Mumbai, 400050",
    phone: "+91 92222 11366",
    active: true
  }
];
const seedDevices = [
  {
    id: "bd1",
    name: "Main Gate K30",
    model: "ESSL K30 Pro WiFi",
    branchId: "b1",
    ipAddress: "192.168.1.201",
    port: "4370",
    status: "Disconnected",
    usersMapped: 5
  }
];
const seedGymSettings = {
  name: "Fit Force Gym",
  address: "Andheri West, Mumbai, 400053",
  phone: "+91 91117 11366",
  email: "admin@fitfyt.com",
  brandTagline: "MMA - Gym - Fitness",
  supportPhone: "+91 91117 11366",
  supportWhatsApp: "919111711366"
};
const seedNotificationSettings = {
  whatsapp: true,
  sms: true,
  push: true,
  expiryReminders: true,
  paymentReminders: true
};
const seedAttendance = seedMembers.flatMap(
  (member) => member.checkIns.map((checkIn, index) => ({
    id: `a-${member.id}-${index}`,
    subjectId: member.id,
    subjectType: "member",
    date: checkIn.slice(0, 10),
    punchIn: checkIn,
    punchOut: new Date(new Date(checkIn).getTime() + 75 * 6e4).toISOString(),
    source: "Biometric"
  }))
);
const id = () => Math.random().toString(36).slice(2, 9);
const statusFromExpiry = (expiryDate) => {
  const days = Math.ceil((new Date(expiryDate).getTime() - Date.now()) / 864e5);
  if (days < 0) return "expired";
  if (days <= 7) return "expiring";
  return "active";
};
const isPersonalTrainingPayment = (payment) => payment.category === "Personal Training" || payment.plan.toLowerCase().includes("pt ");
const memberPaymentContribution = (payment) => {
  if (payment.status !== "Paid" || isPersonalTrainingPayment(payment)) return 0;
  return payment.type === "refund" ? -payment.amount : payment.amount;
};
const monthKey = (value) => value.slice(0, 7);
function getTrainerCommissionEntries(payments, members, staff, payroll = []) {
  const refundsByPayment = payments.filter((payment) => payment.type === "refund").reduce((acc, refund) => {
    if (!refund.refundForPaymentId) return acc;
    acc[refund.refundForPaymentId] = (acc[refund.refundForPaymentId] ?? 0) + refund.amount;
    return acc;
  }, {});
  const paidCommissionIds = new Set(
    payroll.flatMap((record) => record.paidAt ? record.paidCommissionIds ?? [] : [])
  );
  return payments.filter(
    (payment) => payment.status === "Paid" && payment.type !== "refund" && isPersonalTrainingPayment(payment) && Boolean(payment.trainerId)
  ).map((payment) => {
    const trainer = staff.find((person) => person.id === payment.trainerId);
    const member = members.find((item) => item.id === payment.memberId);
    const refundedAmount = refundsByPayment[payment.id] ?? 0;
    const netAmount = Math.max(0, payment.amount - refundedAmount);
    const commissionPercent = payment.commissionPercent ?? 40;
    const commissionAmount = netAmount === payment.amount && typeof payment.commissionAmount === "number" ? payment.commissionAmount : Math.round(netAmount * commissionPercent / 100);
    return {
      id: `commission-${payment.id}`,
      paymentId: payment.id,
      staffId: payment.trainerId,
      staffName: trainer?.name ?? "Unknown trainer",
      memberId: payment.memberId,
      memberName: member?.name ?? "Unknown member",
      packageName: payment.plan,
      paymentDate: payment.date,
      totalAmount: payment.amount,
      refundedAmount,
      netAmount,
      commissionPercent,
      commissionAmount,
      payoutStatus: netAmount <= 0 ? "Refunded" : paidCommissionIds.has(`commission-${payment.id}`) ? "Paid" : "Pending"
    };
  });
}
const useApp = create()(
  persist(
    (set, get) => ({
      auth: null,
      members: seedMembers,
      staff: seedStaff,
      leads: seedLeads,
      payments: seedPayments,
      attendance: seedAttendance,
      payroll: [],
      branches: seedBranches,
      biometricDevices: seedDevices,
      gymSettings: seedGymSettings,
      notificationSettings: seedNotificationSettings,
      currentBranch: "b1",
      login: (role, phone, password) => {
        if (!phone || !password) return false;
        if (phone === "superadmin" && password === "superadmin") {
          set({ auth: { role: "super", name: "Super Admin", phone } });
          return true;
        }
        const name = role === "owner" ? "Rahul" : role === "staff" ? "Vikram" : "Priya";
        set({ auth: { role, name, phone } });
        return true;
      },
      logout: () => set({ auth: null }),
      addMember: (m) => {
        const memberId = id();
        set({
          members: [
            ...get().members,
            {
              ...m,
              id: memberId,
              branchId: m.branchId ?? get().currentBranch,
              checkIns: [],
              streak: 0,
              workoutPlan: m.workoutPlan ?? [],
              documents: m.documents ?? []
            }
          ],
          payments: m.amountPaid > 0 ? [
            ...get().payments,
            {
              id: id(),
              memberId,
              amount: m.amountPaid,
              date: m.startDate,
              mode: "UPI",
              plan: m.plan,
              status: "Paid",
              type: "payment",
              category: "Membership",
              branchId: m.branchId ?? get().currentBranch
            }
          ] : get().payments
        });
      },
      importMembers: (members) => set({
        members: [
          ...get().members,
          ...members.map((member) => ({
            ...member,
            id: id(),
            branchId: member.branchId ?? get().currentBranch,
            checkIns: [],
            streak: 0,
            workoutPlan: member.workoutPlan ?? [],
            documents: member.documents ?? []
          }))
        ]
      }),
      updateMember: (mid, patch) => set({ members: get().members.map((x) => x.id === mid ? { ...x, ...patch } : x) }),
      renewMember: (mid, plan, months, amount, mode) => {
        const renewedAt = /* @__PURE__ */ new Date();
        const member = get().members.find((x) => x.id === mid);
        if (!member) return;
        const currentExpiry = new Date(member.expiryDate);
        const newExpiry = currentExpiry > renewedAt ? currentExpiry : renewedAt;
        newExpiry.setMonth(newExpiry.getMonth() + months);
        set({
          members: get().members.map(
            (x) => x.id === mid ? {
              ...x,
              plan,
              expiryDate: newExpiry.toISOString(),
              status: "active",
              amountPaid: x.amountPaid + amount,
              totalAmount: x.totalAmount + amount
            } : x
          ),
          payments: [
            ...get().payments,
            {
              id: id(),
              memberId: mid,
              amount,
              date: renewedAt.toISOString(),
              mode,
              plan,
              status: "Paid",
              type: "payment",
              category: "Membership"
            }
          ]
        });
      },
      toggleMemberFreeze: (mid) => set({
        members: get().members.map(
          (x) => x.id === mid ? { ...x, status: x.status === "frozen" ? statusFromExpiry(x.expiryDate) : "frozen" } : x
        )
      }),
      setWorkoutPlan: (mid, exercises) => set({
        members: get().members.map((x) => x.id === mid ? { ...x, workoutPlan: exercises } : x)
      }),
      addMemberDocument: (mid, name) => set({
        members: get().members.map(
          (x) => x.id === mid ? {
            ...x,
            documents: [
              ...x.documents ?? [],
              { id: id(), name, uploadedAt: (/* @__PURE__ */ new Date()).toISOString() }
            ]
          } : x
        )
      }),
      checkIn: (mid) => get().punchIn(mid),
      punchIn: (subjectId, subjectType = "member", source = "Manual", at = (/* @__PURE__ */ new Date()).toISOString()) => {
        const date = at.slice(0, 10);
        const openRecord = (get().attendance ?? []).find(
          (record) => record.subjectId === subjectId && record.subjectType === subjectType && record.date === date && !record.punchOut
        );
        if (openRecord) return;
        set({
          attendance: [
            ...get().attendance ?? [],
            { id: id(), subjectId, subjectType, date, punchIn: at, source }
          ].map(
            (record, index, list) => index === list.length - 1 ? { ...record, branchId: get().currentBranch } : record
          ),
          members: subjectType === "member" ? get().members.map(
            (member) => member.id === subjectId ? { ...member, checkIns: [at, ...member.checkIns], streak: member.streak + 1 } : member
          ) : get().members
        });
      },
      punchOut: (recordId, at = (/* @__PURE__ */ new Date()).toISOString()) => set({
        attendance: (get().attendance ?? []).map(
          (record) => record.id === recordId ? { ...record, punchOut: at } : record
        )
      }),
      updateAttendance: (recordId, patch) => set({
        attendance: (get().attendance ?? []).map(
          (record) => record.id === recordId ? { ...record, ...patch } : record
        )
      }),
      addStaff: (s) => set({
        staff: [
          ...get().staff,
          {
            ...s,
            id: id(),
            branchId: s.branchId ?? get().currentBranch,
            permissions: s.permissions ?? [],
            assignedMemberIds: s.assignedMemberIds ?? []
          }
        ]
      }),
      updateStaff: (staffId, patch) => set({
        staff: get().staff.map(
          (person) => person.id === staffId ? { ...person, ...patch } : person
        )
      }),
      recordPayroll: (record) => set({
        payroll: [
          ...(get().payroll ?? []).filter(
            (item) => !(item.staffId === record.staffId && item.month === record.month)
          ),
          { ...record, id: id() }
        ]
      }),
      addLead: (l) => set({
        leads: [
          ...get().leads,
          {
            ...l,
            id: id(),
            branchId: l.branchId ?? get().currentBranch,
            activities: l.activities ?? [
              { id: id(), date: (/* @__PURE__ */ new Date()).toISOString(), note: `Lead added from ${l.source}` }
            ]
          }
        ]
      }),
      updateLead: (leadId, patch) => set({
        leads: get().leads.map((lead) => lead.id === leadId ? { ...lead, ...patch } : lead)
      }),
      addLeadActivity: (leadId, note) => set({
        leads: get().leads.map(
          (lead) => lead.id === leadId ? {
            ...lead,
            activities: [
              ...lead.activities ?? [],
              { id: id(), date: (/* @__PURE__ */ new Date()).toISOString(), note }
            ]
          } : lead
        )
      }),
      convertLead: (lid) => {
        const lead = get().leads.find((item) => item.id === lid);
        if (!lead) return;
        const alreadyMember = get().members.some((member) => member.phone === lead.phone);
        const startDate = /* @__PURE__ */ new Date();
        const expiryDate = /* @__PURE__ */ new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 1);
        set({
          leads: get().leads.map(
            (item) => item.id === lid ? {
              ...item,
              status: "Converted",
              activities: [
                ...item.activities ?? [],
                { id: id(), date: startDate.toISOString(), note: "Converted to member" }
              ]
            } : item
          ),
          members: alreadyMember ? get().members : [
            ...get().members,
            {
              id: id(),
              name: lead.name,
              phone: lead.phone,
              plan: "Trial",
              startDate: startDate.toISOString(),
              expiryDate: expiryDate.toISOString(),
              status: "active",
              amountPaid: 0,
              totalAmount: 0,
              checkIns: [],
              streak: 0,
              workoutPlan: [],
              documents: [],
              branchId: lead.branchId ?? get().currentBranch
            }
          ]
        });
      },
      addPayment: (p) => {
        const category = p.category ?? "Membership";
        const payment = {
          ...p,
          id: id(),
          type: p.type ?? "payment",
          category,
          branchId: p.branchId ?? get().currentBranch,
          commissionPercent: category === "Personal Training" ? p.commissionPercent ?? 40 : p.commissionPercent,
          commissionAmount: category === "Personal Training" ? Math.round(p.amount * (p.commissionPercent ?? 40) / 100) : p.commissionAmount
        };
        set({
          payments: [...get().payments, payment],
          members: p.status === "Paid" && category !== "Personal Training" ? get().members.map(
            (member) => member.id === p.memberId ? { ...member, amountPaid: member.amountPaid + p.amount } : member
          ) : get().members
        });
      },
      updatePayment: (paymentId, patch) => {
        const previous = get().payments.find((payment) => payment.id === paymentId);
        if (!previous) return;
        const category = patch.category ?? previous.category ?? "Membership";
        const next = {
          ...previous,
          ...patch,
          category,
          commissionPercent: category === "Personal Training" ? patch.commissionPercent ?? previous.commissionPercent ?? 40 : patch.commissionPercent
        };
        const normalizedNext = {
          ...next,
          commissionAmount: category === "Personal Training" ? Math.round(next.amount * (next.commissionPercent ?? 40) / 100) : next.commissionAmount
        };
        const previousContribution = memberPaymentContribution(previous);
        const nextContribution = memberPaymentContribution(normalizedNext);
        set({
          payments: get().payments.map(
            (payment) => payment.id === paymentId ? normalizedNext : payment
          ),
          members: get().members.map((member) => {
            let amountPaid = member.amountPaid;
            if (member.id === previous.memberId) amountPaid -= previousContribution;
            if (member.id === normalizedNext.memberId) amountPaid += nextContribution;
            return amountPaid === member.amountPaid ? member : { ...member, amountPaid: Math.max(0, amountPaid) };
          })
        });
      },
      deletePayment: (paymentId) => {
        const payment = get().payments.find((item) => item.id === paymentId);
        if (!payment) return;
        const removedPayments = get().payments.filter(
          (item) => item.id === paymentId || item.refundForPaymentId === paymentId
        );
        const contributionByMember = removedPayments.reduce(
          (acc, item) => ({
            ...acc,
            [item.memberId]: (acc[item.memberId] ?? 0) + memberPaymentContribution(item)
          }),
          {}
        );
        set({
          payments: get().payments.filter(
            (item) => item.id !== paymentId && item.refundForPaymentId !== paymentId
          ),
          members: get().members.map((member) => {
            const contribution = contributionByMember[member.id] ?? 0;
            return contribution ? { ...member, amountPaid: Math.max(0, member.amountPaid - contribution) } : member;
          })
        });
      },
      addRefund: (payment) => {
        const original = payment.refundForPaymentId ? get().payments.find((item) => item.id === payment.refundForPaymentId) : void 0;
        const category = payment.category ?? original?.category ?? "Membership";
        const refund = {
          ...payment,
          id: id(),
          type: "refund",
          status: "Paid",
          category,
          trainerId: payment.trainerId ?? original?.trainerId,
          commissionPercent: payment.commissionPercent ?? original?.commissionPercent,
          branchId: payment.branchId ?? original?.branchId ?? get().currentBranch
        };
        set({
          payments: [...get().payments, refund],
          members: category !== "Personal Training" ? get().members.map(
            (member) => member.id === payment.memberId ? { ...member, amountPaid: Math.max(0, member.amountPaid - payment.amount) } : member
          ) : get().members
        });
      },
      addBranch: (branch) => set({
        branches: [
          ...get().branches,
          { ...branch, id: id(), members: 0, revenue: 0, active: branch.active ?? true }
        ]
      }),
      updateBranch: (branchId, patch) => set({
        branches: get().branches.map(
          (branch) => branch.id === branchId ? { ...branch, ...patch } : branch
        )
      }),
      deleteBranch: (branchId) => {
        const remainingBranches = get().branches.filter((branch) => branch.id !== branchId);
        const fallbackBranchId = remainingBranches[0]?.id ?? "b1";
        set({
          branches: remainingBranches,
          currentBranch: get().currentBranch === branchId ? fallbackBranchId : get().currentBranch,
          members: get().members.map(
            (member) => member.branchId === branchId ? { ...member, branchId: fallbackBranchId } : member
          ),
          staff: get().staff.map(
            (person) => person.branchId === branchId ? { ...person, branchId: fallbackBranchId } : person
          ),
          leads: get().leads.map(
            (lead) => lead.branchId === branchId ? { ...lead, branchId: fallbackBranchId } : lead
          )
        });
      },
      setCurrentBranch: (branchId) => set({ currentBranch: branchId }),
      addBiometricDevice: (device) => set({
        biometricDevices: [
          ...get().biometricDevices ?? [],
          { ...device, id: id(), status: "Disconnected", usersMapped: 0 }
        ]
      }),
      updateBiometricDevice: (deviceId, patch) => set({
        biometricDevices: (get().biometricDevices ?? []).map(
          (device) => device.id === deviceId ? { ...device, ...patch } : device
        )
      }),
      deleteBiometricDevice: (deviceId) => set({
        biometricDevices: (get().biometricDevices ?? []).filter(
          (device) => device.id !== deviceId
        )
      }),
      testBiometricDevice: (deviceId) => set({
        biometricDevices: (get().biometricDevices ?? []).map(
          (device) => device.id === deviceId ? { ...device, status: "Connected" } : device
        )
      }),
      syncBiometricDevice: (deviceId) => {
        const device = (get().biometricDevices ?? []).find((item) => item.id === deviceId);
        if (!device) return;
        const now = /* @__PURE__ */ new Date();
        const date = now.toISOString().slice(0, 10);
        const branchMembers = get().members.filter(
          (member) => (member.branchId ?? "b1") === device.branchId
        );
        const newRecords = branchMembers.slice(0, 3).filter(
          (member) => !(get().attendance ?? []).some(
            (record) => record.subjectId === member.id && record.subjectType === "member" && record.date === date && record.source === "Biometric"
          )
        ).map((member, index) => {
          const punchIn = new Date(now);
          punchIn.setMinutes(now.getMinutes() - 30 - index * 7);
          return {
            id: id(),
            subjectId: member.id,
            subjectType: "member",
            date,
            punchIn: punchIn.toISOString(),
            source: "Biometric",
            branchId: device.branchId
          };
        });
        set({
          attendance: [...get().attendance ?? [], ...newRecords],
          biometricDevices: (get().biometricDevices ?? []).map(
            (item) => item.id === deviceId ? {
              ...item,
              status: "Connected",
              lastSync: now.toISOString(),
              usersMapped: branchMembers.length
            } : item
          )
        });
      },
      updateGymSettings: (patch) => set({ gymSettings: { ...get().gymSettings ?? seedGymSettings, ...patch } }),
      updateNotificationSettings: (patch) => set({
        notificationSettings: {
          ...get().notificationSettings ?? seedNotificationSettings,
          ...patch
        }
      }),
      resetWorkspace: () => set({
        members: seedMembers,
        staff: seedStaff,
        leads: seedLeads,
        payments: seedPayments,
        attendance: seedAttendance,
        payroll: [],
        branches: seedBranches,
        biometricDevices: seedDevices,
        gymSettings: seedGymSettings,
        notificationSettings: seedNotificationSettings,
        currentBranch: "b1"
      })
    }),
    {
      name: "fitforce-app",
      merge: (persisted, current) => {
        const saved = persisted;
        return {
          ...current,
          ...saved,
          attendance: saved.attendance ?? current.attendance,
          payroll: saved.payroll ?? current.payroll,
          branches: (saved.branches ?? current.branches).map((branch) => ({
            ...branch,
            active: branch.active ?? true
          })),
          biometricDevices: saved.biometricDevices ?? current.biometricDevices,
          gymSettings: saved.gymSettings ?? current.gymSettings,
          notificationSettings: saved.notificationSettings ?? current.notificationSettings
        };
      }
    }
  )
);
function isUserEditing() {
  const active = document.activeElement;
  if (!active) return false;
  const tagName = active.tagName.toLowerCase();
  return tagName === "input" || tagName === "textarea" || tagName === "select" || active.hasAttribute("contenteditable");
}
function SupabaseBridge() {
  const loaded = reactExports.useRef(false);
  const saveTimer = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    let cancelled = false;
    loadSupabaseSnapshot().then((snapshot) => {
      if (cancelled) return;
      if (snapshot.members?.length || snapshot.staff?.length || snapshot.attendance?.length || snapshot.biometricDevices?.length) {
        useApp.setState((state) => ({
          ...state,
          ...snapshot
        }));
      }
      loaded.current = true;
    }).catch((error) => {
      loaded.current = true;
      console.error(error);
      toast.error("Supabase sync failed. Check database setup.");
    });
    const unsubscribe = useApp.subscribe((state) => {
      if (!loaded.current) return;
      window.clearTimeout(saveTimer.current);
      saveTimer.current = window.setTimeout(() => {
        saveSupabaseSnapshot({
          members: state.members,
          staff: state.staff,
          attendance: state.attendance ?? [],
          biometricDevices: state.biometricDevices ?? []
        }).catch((error) => {
          console.error(error);
          toast.error("Could not save to Supabase");
        });
      }, 1200);
    });
    const interval = window.setInterval(() => {
      if (isUserEditing()) return;
      loadSupabaseSnapshot().then((snapshot) => {
        if (!cancelled && !isUserEditing()) useApp.setState((state) => ({ ...state, ...snapshot }));
      }).catch((error) => console.error(error));
    }, 3e4);
    return () => {
      cancelled = true;
      unsubscribe();
      window.clearTimeout(saveTimer.current);
      window.clearInterval(interval);
    };
  }, []);
  return null;
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
      { title: "Fit Force Gym â€” Gym Management" },
      { name: "description", content: "Complete gym management platform for Indian gym owners." },
      { name: "theme-color", content: "#0c0909" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Fit Force" },
      { property: "og:title", content: "Fit Force Gym â€” Gym Management" },
      {
        property: "og:description",
        content: "Complete gym management platform for Indian gym owners."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Fit Force Gym â€” Gym Management" },
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(SupabaseBridge, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { theme: "dark", position: "top-center", richColors: true })
  ] });
}
const $$splitComponentImporter$y = () => import("./staff-BFsOu0JM.mjs");
const Route$y = createFileRoute("/staff")({
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./settings-BIRuUzxp.mjs");
const Route$x = createFileRoute("/settings")({
  head: () => ({
    meta: [{
      title: "Settings - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./pricing-DkBeFix0.mjs");
const Route$w = createFileRoute("/pricing")({
  head: () => ({
    meta: [{
      title: "Plans - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./notifications-DnQKPAG6.mjs");
const Route$v = createFileRoute("/notifications")({
  head: () => ({
    meta: [{
      title: "Notifications - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./messages-BRojWvQi.mjs");
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
const $$splitComponentImporter$s = () => import("./member-CELFTppA.mjs");
const Route$s = createFileRoute("/member")({
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./login-D7V9jZaa.mjs");
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
const $$splitComponentImporter$p = () => import("./hardware-ANqHY8z1.mjs");
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
const $$splitComponentImporter$n = () => import("./dashboard-BdKuf2o4.mjs");
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
const $$splitComponentImporter$l = () => import("./attendance-BmO7NuJH.mjs");
const Route$l = createFileRoute("/attendance")({
  head: () => ({
    meta: [{
      title: "Attendance - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./index-B67yQNF1.mjs");
const Route$k = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./staff.index-Cug-O190.mjs");
const Route$j = createFileRoute("/staff/")({
  head: () => ({
    meta: [{
      title: "Staff - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./members.index-DFlGQbp5.mjs");
const Route$i = createFileRoute("/members/")({
  head: () => ({
    meta: [{
      title: "Members - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./leads.index-Bmt_Z_zM.mjs");
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
const $$splitComponentImporter$g = () => import("./finance.index-l6c8Syo6.mjs");
const Route$g = createFileRoute("/finance/")({
  head: () => ({
    meta: [{
      title: "Finance - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./branches.index-C6Ru0Z32.mjs");
const Route$f = createFileRoute("/branches/")({
  head: () => ({
    meta: [{
      title: "Branches - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./staff.payroll-BADIS2H0.mjs");
const Route$e = createFileRoute("/staff/payroll")({
  head: () => ({
    meta: [{
      title: "Payroll - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./staff.add-D7sKEApY.mjs");
const Route$d = createFileRoute("/staff/add")({
  head: () => ({
    meta: [{
      title: "Add Staff - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./staff._id-CINy2bBw.mjs");
const Route$c = createFileRoute("/staff/$id")({
  head: () => ({
    meta: [{
      title: "Staff Profile - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./members.add-BKf5J6A5.mjs");
const Route$b = createFileRoute("/members/add")({
  head: () => ({
    meta: [{
      title: "Add Member - Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./members._id-bon1Inpl.mjs");
const Route$a = createFileRoute("/members/$id")({
  head: () => ({
    meta: [{
      title: "Member Profile - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./member.workout-CFuYGFxF.mjs");
const Route$9 = createFileRoute("/member/workout")({
  head: () => ({
    meta: [{
      title: "My Workout — Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./member.payments-BiT9nzrv.mjs");
const Route$8 = createFileRoute("/member/payments")({
  head: () => ({
    meta: [{
      title: "My Payments — Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./member.home-Dn2sFnvN.mjs");
const Route$7 = createFileRoute("/member/home")({
  head: () => ({
    meta: [{
      title: "My Account — Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./member.attendance-BUsw0gg8.mjs");
const Route$6 = createFileRoute("/member/attendance")({
  head: () => ({
    meta: [{
      title: "My Attendance — Fit Force Gym"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./leads.add-DM2XNCh1.mjs");
const Route$5 = createFileRoute("/leads/add")({
  head: () => ({
    meta: [{
      title: "Add Lead - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./leads._id-C92Nwsz1.mjs");
const Route$4 = createFileRoute("/leads/$id")({
  head: () => ({
    meta: [{
      title: "Lead Profile - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./finance.record-CnUz_skS.mjs");
const Route$3 = createFileRoute("/finance/record")({
  head: () => ({
    meta: [{
      title: "Record Transaction - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./finance.payments-dL1NxNek.mjs");
const Route$2 = createFileRoute("/finance/payments")({
  head: () => ({
    meta: [{
      title: "Transactions - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./finance.dues-DGcCeA1e.mjs");
const Route$1 = createFileRoute("/finance/dues")({
  head: () => ({
    meta: [{
      title: "Pending Dues - Fit & Fyt GymOS"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./branches._id-Bj4xBRQn.mjs");
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
  getTrainerCommissionEntries as g,
  monthKey as m,
  queueHikvisionEnrollment as q,
  router as r,
  useApp as u
};
