import type { AttendanceRecord, BiometricDevice, Member, Staff } from "@/store/app";

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ?? "https://qvrebewjlthikhzxwpcg.supabase.co";
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ?? "sb_publishable_RiKCU541R0b2uFu4RAS2-Q_3bbTx10m";

const enabled = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

type Snapshot = {
  members: Member[];
  staff: Staff[];
  attendance: AttendanceRecord[];
  biometricDevices: BiometricDevice[];
};
type HikvisionEnrollment = {
  employeeNumber: string;
  subjectId: string;
  subjectType: "member" | "staff";
  name: string;
  cardNumber?: string;
  faceImagePath?: string;
  validFrom?: string;
  validTo?: string;
  active?: boolean;
  branchId?: string;
};

async function request<T>(tableAndQuery: string, init: RequestInit = {}): Promise<T> {
  if (!enabled) throw new Error("Supabase is not configured");
  const response = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/${tableAndQuery}`, {
    ...init,
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=minimal",
      ...(init.headers ?? {}),
    },
  });
  if (!response.ok) {
    throw new Error(`Supabase request failed: ${response.status} ${await response.text()}`);
  }
  if (response.status === 204) return undefined as T;
  const text = await response.text();
  return text ? (JSON.parse(text) as T) : (undefined as T);
}

export async function loadSupabaseSnapshot(): Promise<Partial<Snapshot>> {
  if (!enabled) return {};
  const [members, staff, attendance, biometricDevices] = await Promise.all([
    request<any[]>("members?select=*&order=name.asc"),
    request<any[]>("staff?select=*&order=name.asc"),
    request<any[]>("attendance_records?select=*&order=punch_in.desc"),
    request<any[]>("biometric_devices?select=*&order=name.asc"),
  ]);

  return {
    members: members.map(fromMemberRow),
    staff: staff.map(fromStaffRow),
    attendance: attendance.map(fromAttendanceRow),
    biometricDevices: biometricDevices.map(fromDeviceRow),
  };
}

export async function queueHikvisionEnrollment(enrollment: HikvisionEnrollment) {
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
      updated_at: new Date().toISOString(),
    }),
  });
}
export async function saveSupabaseSnapshot(snapshot: Snapshot) {
  if (!enabled) return;
  await Promise.all([
    upsert("members", snapshot.members.map(toMemberRow), "id"),
    upsert("staff", snapshot.staff.map(toStaffRow), "id"),
    upsert("attendance_records", snapshot.attendance.map(toAttendanceRow), "id"),
    upsert("biometric_devices", snapshot.biometricDevices.map(toDeviceRow), "id"),
  ]);
}

async function upsert(table: string, rows: unknown[], conflict: string) {
  if (!rows.length) return;
  await request(`${table}?on_conflict=${conflict}`, {
    method: "POST",
    body: JSON.stringify(rows),
  });
}

function fromMemberRow(row: any): Member {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    email: row.email ?? undefined,
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
    branchId: row.branch_id ?? undefined,
  };
}

function toMemberRow(member: Member) {
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
    updated_at: new Date().toISOString(),
  };
}

function fromStaffRow(row: any): Staff {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    role: row.role ?? "Trainer",
    joined: row.joined,
    salary: Number(row.salary ?? 0),
    active: row.active ?? true,
    shift: row.shift ?? undefined,
    weeklyOff: row.weekly_off ?? undefined,
    permissions: [],
    assignedMemberIds: [],
    branchId: row.branch_id ?? undefined,
  };
}

function toStaffRow(staff: Staff) {
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
    updated_at: new Date().toISOString(),
  };
}

function fromAttendanceRow(row: any): AttendanceRecord {
  return {
    id: row.id,
    subjectId: row.subject_id,
    subjectType: row.subject_type,
    date: row.date,
    punchIn: row.punch_in,
    punchOut: row.punch_out ?? undefined,
    source: row.source ?? "Biometric",
    branchId: row.branch_id ?? undefined,
  };
}

function toAttendanceRow(record: AttendanceRecord) {
  return {
    id: record.id,
    subject_id: record.subjectId,
    subject_type: record.subjectType,
    date: record.date,
    punch_in: record.punchIn,
    punch_out: record.punchOut ?? null,
    source: record.source,
    branch_id: record.branchId ?? null,
  };
}

function fromDeviceRow(row: any): BiometricDevice {
  return {
    id: row.id,
    name: row.name,
    model: row.model,
    branchId: row.branch_id ?? "b1",
    ipAddress: row.ip_address,
    port: row.port ?? "443",
    status: row.status ?? "Disconnected",
    lastSync: row.last_sync ?? undefined,
    usersMapped: Number(row.users_mapped ?? 0),
  };
}

function toDeviceRow(device: BiometricDevice) {
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
    updated_at: new Date().toISOString(),
  };
}
