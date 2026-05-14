import type { InternalPropertyStatus } from '../types/internal.ts';

export const STATUS_STYLE: Record<InternalPropertyStatus, string> = {
  pending_review: 'bg-amber-100 text-amber-700 ring-1 ring-amber-200',
  under_valuation: 'bg-sky-100 text-sky-700 ring-1 ring-sky-200',
  pending_legal: 'bg-violet-100 text-violet-700 ring-1 ring-violet-200',
  active: 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200',
  rented: 'bg-slate-100 text-slate-600 ring-1 ring-slate-200',
  rejected: 'bg-rose-100 text-rose-700 ring-1 ring-rose-200',
  terminated: 'bg-rose-100 text-rose-700 ring-1 ring-rose-200',
};

export const STATUS_LABEL: Record<InternalPropertyStatus, string> = {
  pending_review: 'Chờ thẩm định',
  under_valuation: 'Đang thẩm định',
  pending_legal: 'Chờ pháp lý',
  active: 'Đang tìm khách',
  rented: 'Đã cho thuê',
  rejected: 'Từ chối',
  terminated: 'Chấm dứt HĐ',
};
