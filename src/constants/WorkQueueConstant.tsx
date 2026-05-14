import type { Priority, WorkItem } from '../types/internal.ts';
import type { ReactNode } from 'react';
import { CalendarDays, ClipboardCheck, Eye, FileText, Plus, Scale, Wallet } from 'lucide-react';

export const PRIORITY_STYLE: Record<Priority, string> = {
  high: 'bg-rose-100 text-rose-700 ring-1 ring-rose-200',
  medium: 'bg-amber-100 text-amber-700 ring-1 ring-amber-200',
  low: 'bg-slate-100 text-slate-500 ring-1 ring-slate-200',
};

export const PRIORITY_LABEL: Record<Priority, string> = {
  high: 'Cao',
  medium: 'Trung bình',
  low: 'Thấp',
};

export const TYPE_LABEL: Record<WorkItem['type'], string> = {
  new_submission: 'Hồ sơ mới',
  valuation_scheduled: 'Lịch thẩm định',
  legal_review: 'Pháp lý',
  viewing_request: 'Lịch xem nhà',
  deposit_refund: 'Hoàn tiền ĐB',
  contract_approval: 'Duyệt HĐ',
  transaction_record: 'Ghi nhận GD',
};

export const TYPE_ICON: Record<WorkItem['type'], ReactNode> = {
  new_submission: <FileText className='h-4 w-4' />,
  valuation_scheduled: <CalendarDays className='h-4 w-4' />,
  legal_review: <Scale className='h-4 w-4' />,
  viewing_request: <Eye className='h-4 w-4' />,
  deposit_refund: <Wallet className='h-4 w-4' />,
  contract_approval: <ClipboardCheck className='h-4 w-4' />,
  transaction_record: <Plus className='h-4 w-4' />,
};

export const TYPE_ACCENT: Record<WorkItem['type'], string> = {
  new_submission: 'bg-sky-100 text-sky-700 ring-1 ring-sky-200',
  valuation_scheduled: 'bg-blue-100 text-blue-700 ring-1 ring-blue-200',
  legal_review: 'bg-violet-100 text-violet-700 ring-1 ring-violet-200',
  viewing_request: 'bg-amber-100 text-amber-700 ring-1 ring-amber-200',
  deposit_refund: 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200',
  contract_approval: 'bg-teal-100 text-teal-700 ring-1 ring-teal-200',
  transaction_record: 'bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200',
};
