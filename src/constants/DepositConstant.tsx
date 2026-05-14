import type { DepositStatus } from '../types/internal';

export const DEP_STYLE: Record<DepositStatus, string> = {
  held: 'border-sky-200 bg-sky-50 text-sky-700',
  refunded: 'border-slate-200 bg-slate-50 text-slate-500',
  deducted: 'border-rose-200 bg-rose-50 text-rose-700',
  pending_refund: 'border-amber-200 bg-amber-50 text-amber-700',
};

export const DEP_LABEL: Record<DepositStatus, string> = {
  held: 'Đang giữ',
  refunded: 'Đã hoàn trả',
  deducted: 'Đã khấu trừ',
  pending_refund: 'Chờ hoàn trả',
};
