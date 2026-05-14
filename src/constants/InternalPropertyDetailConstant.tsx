export type Tab =
  | 'owner'
  | 'docs'
  | 'workflow'
  | 'appointments'
  | 'history'
  | 'contract'
  | 'finance';

export const TABS: { key: Tab; label: string }[] = [
  { key: 'owner', label: 'Hồ sơ chủ nhà' },
  { key: 'docs', label: 'Tài liệu' },
  { key: 'workflow', label: 'Trạng thái workflow' },
  { key: 'appointments', label: 'Lịch hẹn' },
  { key: 'history', label: 'Lịch sử làm việc' },
  { key: 'contract', label: 'Hợp đồng' },
  { key: 'finance', label: 'Tài chính' },
];

export const STATUS_STYLE: Record<string, string> = {
  pending_review: 'bg-amber-100 text-amber-700',
  under_valuation: 'bg-blue-100 text-blue-700',
  pending_legal: 'bg-purple-100 text-purple-700',
  active: 'bg-emerald-100 text-emerald-700',
  rented: 'bg-slate-100 text-slate-600',
  rejected: 'bg-red-100 text-red-700',
};

export const STATUS_LABEL: Record<string, string> = {
  pending_review: 'Chờ thẩm định',
  under_valuation: 'Đang thẩm định',
  pending_legal: 'Chờ pháp lý',
  active: 'Đang tìm khách',
  rented: 'Đã cho thuê',
  rejected: 'Từ chối',
};

export const WORKFLOW_STEPS = [
  { id: 'submit', label: 'Nộp hồ sơ', done: true, date: '2025-05-01' },
  { id: 'valuate', label: 'Thẩm định thực địa', done: true, date: '2025-05-05' },
  { id: 'legal', label: 'Kiểm tra pháp lý', done: false, date: null },
  { id: 'sign', label: 'Ký hợp đồng ký gửi', done: false, date: null },
  { id: 'marketing', label: 'Tiếp thị / tìm khách', done: false, date: null },
  { id: 'rented', label: 'Giao dịch hoàn tất', done: false, date: null },
];

export const MOCK_DOCS = [
  { name: 'CMND/CCCD chủ nhà.pdf', size: '2.1 MB', uploaded: '2025-05-01', type: 'identity' },
  { name: 'Giấy chứng nhận sở hữu.pdf', size: '5.3 MB', uploaded: '2025-05-01', type: 'ownership' },
  { name: 'Ảnh chụp thực địa (1).jpg', size: '3.8 MB', uploaded: '2025-05-05', type: 'photo' },
  { name: 'Ảnh chụp thực địa (2).jpg', size: '4.1 MB', uploaded: '2025-05-05', type: 'photo' },
  { name: 'Biên bản thẩm định.docx', size: '156 KB', uploaded: '2025-05-07', type: 'report' },
];

export const MOCK_HISTORY = [
  {
    date: '2025-05-10',
    actor: 'Trần Thị Lan',
    role: 'Thẩm định',
    action: 'Hoàn thành khảo sát thực địa. Bất động sản trong tình trạng tốt, đề xuất duyệt.',
  },
  {
    date: '2025-05-05',
    actor: 'Trần Thị Lan',
    role: 'Thẩm định',
    action: 'Lên lịch khảo sát thực địa ngày 05/05.',
  },
  {
    date: '2025-05-02',
    actor: 'Nguyễn Minh Tuấn',
    role: 'Môi giới',
    action: 'Tiếp nhận và phân công hồ sơ cho thẩm định.',
  },
  {
    date: '2025-05-01',
    actor: 'Hệ thống',
    role: 'System',
    action: 'Hồ sơ được nộp và tạo mã BDS-2025-001.',
  },
];
