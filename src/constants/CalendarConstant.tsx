export const APPT_STATUS_STYLE: Record<string, string> = {
  pending: 'bg-amber-50 text-amber-700 border-amber-200',
  confirmed: 'bg-sky-50 text-sky-700 border-sky-200',
  completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  cancelled: 'bg-rose-50 text-rose-700 border-rose-200',
};

export const APPT_STATUS_LABEL: Record<string, string> = {
  pending: 'Chờ xác nhận',
  confirmed: 'Đã xác nhận',
  completed: 'Đã xem',
  cancelled: 'Huỷ',
};

export const APPT_ACCENT: Record<string, string> = {
  pending: 'from-amber-400 to-orange-500',
  confirmed: 'from-sky-500 to-blue-700',
  completed: 'from-emerald-400 to-emerald-600',
  cancelled: 'from-rose-400 to-rose-600',
};
