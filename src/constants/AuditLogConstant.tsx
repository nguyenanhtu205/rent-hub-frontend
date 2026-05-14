type AuditLogEntry = {
  time: string;
  actor: string;
  role: string;
  action: string;
  target: string;
  ip: string;
  type?: 'create' | 'update' | 'delete' | 'login' | 'view';
};

export const AUDIT_LOGS: AuditLogEntry[] = [
  {
    time: '2025-05-13 09:42:11',
    actor: 'Nguyễn Văn A',
    role: 'Admin',
    action: 'Tạo hợp đồng',
    target: 'CT-2025-0421',
    ip: '113.22.45.18',
    type: 'create',
  },
  {
    time: '2025-05-13 09:30:54',
    actor: 'Trần Thị B',
    role: 'Môi giới',
    action: 'Cập nhật bất động sản',
    target: 'BDS-1098',
    ip: '14.241.88.102',
    type: 'update',
  },
  {
    time: '2025-05-13 09:12:03',
    actor: 'Lê Minh C',
    role: 'Khách hàng',
    action: 'Đăng nhập hệ thống',
    target: 'session#a91f2c',
    ip: '203.205.30.7',
    type: 'login',
  },
  {
    time: '2025-05-13 08:55:42',
    actor: 'Phạm Quốc D',
    role: 'Kế toán',
    action: 'Xóa giao dịch',
    target: 'TX-77821',
    ip: '171.244.10.55',
    type: 'delete',
  },
  {
    time: '2025-05-13 08:40:19',
    actor: 'Nguyễn Văn A',
    role: 'Admin',
    action: 'Xem hồ sơ khách hàng',
    target: 'KH-3320',
    ip: '113.22.45.18',
    type: 'view',
  },
];

export const TYPE_STYLE: Record<string, string> = {
  create: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  update: 'bg-sky-50 text-sky-700 ring-sky-200',
  delete: 'bg-rose-50 text-rose-700 ring-rose-200',
  login: 'bg-amber-50 text-amber-700 ring-amber-200',
  view: 'bg-slate-50 text-slate-600 ring-slate-200',
};
