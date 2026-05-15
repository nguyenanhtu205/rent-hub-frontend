import { useState } from 'react';
import { AlertTriangle, CheckCircle2, ListChecks, PlayCircle } from 'lucide-react';
import { MOCK_WORK_ITEMS } from '../../mocks/data/internalMockData';
import type { Priority, WorkItem } from '../../types/internal.ts';
import type { ReactNode } from 'react';
import { CalendarDays, ClipboardCheck, Eye, FileText, Plus, Scale, Wallet } from 'lucide-react';

const PRIORITY_STYLE: Record<Priority, string> = {
  high: 'bg-rose-100 text-rose-700 ring-1 ring-rose-200',
  medium: 'bg-amber-100 text-amber-700 ring-1 ring-amber-200',
  low: 'bg-slate-100 text-slate-500 ring-1 ring-slate-200',
};

const PRIORITY_LABEL: Record<Priority, string> = {
  high: 'Cao',
  medium: 'Trung bình',
  low: 'Thấp',
};

const TYPE_LABEL: Record<WorkItem['type'], string> = {
  new_submission: 'Hồ sơ mới',
  valuation_scheduled: 'Lịch thẩm định',
  legal_review: 'Pháp lý',
  viewing_request: 'Lịch xem nhà',
  deposit_refund: 'Hoàn tiền ĐB',
  contract_approval: 'Duyệt HĐ',
  transaction_record: 'Ghi nhận GD',
};

const TYPE_ICON: Record<WorkItem['type'], ReactNode> = {
  new_submission: <FileText className='h-4 w-4' />,
  valuation_scheduled: <CalendarDays className='h-4 w-4' />,
  legal_review: <Scale className='h-4 w-4' />,
  viewing_request: <Eye className='h-4 w-4' />,
  deposit_refund: <Wallet className='h-4 w-4' />,
  contract_approval: <ClipboardCheck className='h-4 w-4' />,
  transaction_record: <Plus className='h-4 w-4' />,
};

const TYPE_ACCENT: Record<WorkItem['type'], string> = {
  new_submission: 'bg-sky-100 text-sky-700 ring-1 ring-sky-200',
  valuation_scheduled: 'bg-blue-100 text-blue-700 ring-1 ring-blue-200',
  legal_review: 'bg-violet-100 text-violet-700 ring-1 ring-violet-200',
  viewing_request: 'bg-amber-100 text-amber-700 ring-1 ring-amber-200',
  deposit_refund: 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200',
  contract_approval: 'bg-teal-100 text-teal-700 ring-1 ring-teal-200',
  transaction_record: 'bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200',
};

export default function WorkQueue() {
  const [filterStatus, setFilterStatus] = useState<'all' | 'open' | 'in_progress' | 'done'>('all');
  const [filterPriority, setFilterPriority] = useState<'all' | Priority>('all');
  const [items, setItems] = useState(MOCK_WORK_ITEMS);

  const visible = items.filter(
    (w) =>
      (filterStatus === 'all' || w.status === filterStatus) &&
      (filterPriority === 'all' || w.priority === filterPriority),
  );

  const markDone = (id: string) =>
    setItems((prev) => prev.map((w) => (w.id === id ? { ...w, status: 'done' as const } : w)));

  const markInProgress = (id: string) =>
    setItems((prev) =>
      prev.map((w) => (w.id === id ? { ...w, status: 'in_progress' as const } : w)),
    );

  const openCount = items.filter((w) => w.status === 'open').length;

  return (
    <div className='relative space-y-10 p-10'>
      {/* Ambient blobs */}
      <div className='pointer-events-none absolute -top-20 -left-10 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl' />
      <div className='pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl' />

      {/* Header */}
      <div className='relative flex items-center justify-between'>
        <div>
          <div className='mb-2 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-sky-700 ring-1 ring-sky-200/70 backdrop-blur'>
            <ListChecks className='h-3.5 w-3.5' />
            Quản lý hàng việc
          </div>
          <h1 className='bg-linear-to-r from-sky-700 via-blue-700 to-amber-600 bg-clip-text text-2xl font-bold text-transparent'>
            Công việc
          </h1>
          <p className='text-sm text-slate-500'>
            <span className='font-semibold text-slate-700'>{visible.length}</span> mục ·{' '}
            <span className='font-semibold text-amber-600'>{openCount}</span> chờ xử lý
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className='relative flex flex-wrap gap-3'>
        <div className='flex overflow-hidden rounded-xl border border-sky-200/70 bg-white/80 text-sm font-medium shadow-sm backdrop-blur'>
          {(['all', 'open', 'in_progress', 'done'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`cursor-pointer px-4 py-2 transition-all ${
                filterStatus === s
                  ? 'bg-linear-to-br from-sky-600 to-blue-700 text-white shadow-inner'
                  : 'text-slate-500 hover:bg-sky-50 hover:text-sky-700'
              }`}
            >
              {s === 'all'
                ? 'Tất cả'
                : s === 'open'
                  ? 'Mới'
                  : s === 'in_progress'
                    ? 'Đang XL'
                    : 'Xong'}
            </button>
          ))}
        </div>
        <div className='flex overflow-hidden rounded-xl border border-sky-200/70 bg-white/80 text-sm font-medium shadow-sm backdrop-blur'>
          {(['all', 'high', 'medium', 'low'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setFilterPriority(p)}
              className={`cursor-pointer px-4 py-2 transition-all ${
                filterPriority === p
                  ? 'bg-linear-to-br from-amber-500 to-amber-600 text-white shadow-inner'
                  : 'text-slate-500 hover:bg-amber-50 hover:text-amber-700'
              }`}
            >
              {p === 'all' ? 'Mọi độ ưu tiên' : PRIORITY_LABEL[p as Priority]}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className='relative overflow-hidden rounded-2xl border border-sky-200/60 bg-white/80 shadow-sm backdrop-blur'>
        <div className='absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-blue-600 to-amber-500' />
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b border-sky-100 bg-linear-to-r from-sky-50/60 to-blue-50/40 text-xs font-bold tracking-wider text-slate-500 uppercase'>
                <th className='px-5 py-3.5 text-left'>Loại / Tiêu đề</th>
                <th className='px-4 py-3.5 text-left'>Mã BĐS</th>
                <th className='px-4 py-3.5 text-left'>Phụ trách</th>
                <th className='px-4 py-3.5 text-left'>Hạn xử lý</th>
                <th className='px-4 py-3.5 text-left'>Ưu tiên</th>
                <th className='px-4 py-3.5 text-left'>Trạng thái</th>
                <th className='px-4 py-3.5' />
              </tr>
            </thead>
            <tbody className='divide-y divide-sky-50'>
              {visible.map((w) => {
                const overdue = new Date(w.dueDate) <= new Date();
                return (
                  <tr
                    key={w.id}
                    className={`transition-colors hover:bg-sky-50/40 ${w.status === 'done' ? 'opacity-50' : ''}`}
                  >
                    <td className='px-5 py-4'>
                      <div className='flex items-start gap-2.5'>
                        <span
                          className={`mt-0.5 flex h-7 w-6 shrink-0 items-center justify-center rounded-lg ${TYPE_ACCENT[w.type]}`}
                        >
                          {TYPE_ICON[w.type]}
                        </span>
                        <div>
                          <p className='font-semibold text-slate-800'>
                            <span className='text-sky-700'>{TYPE_LABEL[w.type]}</span> · {w.title}
                          </p>
                          <p className='mt-0.5 text-xs text-slate-400'>{w.subtitle}</p>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-4'>
                      <span className='rounded-md bg-sky-50 px-2 py-1 font-mono text-xs text-sky-700 ring-1 ring-sky-100'>
                        {w.propertyCode}
                      </span>
                    </td>
                    <td className='px-4 py-4 text-slate-600'>{w.assignedTo ?? '—'}</td>
                    <td className='px-4 py-4'>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium ${overdue ? 'text-rose-600' : 'text-slate-600'}`}
                      >
                        {overdue && <AlertTriangle className='h-3 w-3' />}
                        {w.dueDate}
                      </span>
                    </td>
                    <td className='px-4 py-4'>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${PRIORITY_STYLE[w.priority]}`}
                      >
                        {PRIORITY_LABEL[w.priority]}
                      </span>
                    </td>
                    <td className='px-4 py-4'>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                          w.status === 'open'
                            ? 'bg-amber-100 text-amber-700 ring-1 ring-amber-200'
                            : w.status === 'in_progress'
                              ? 'bg-sky-100 text-sky-700 ring-1 ring-sky-200'
                              : 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200'
                        }`}
                      >
                        {w.status === 'open'
                          ? 'Mới'
                          : w.status === 'in_progress'
                            ? 'Đang XL'
                            : 'Xong'}
                      </span>
                    </td>
                    <td className='px-4 py-4'>
                      <div className='flex gap-1.5'>
                        {w.status === 'open' && (
                          <button
                            onClick={() => markInProgress(w.id)}
                            className='inline-flex cursor-pointer items-center gap-1 rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200 transition-colors duration-500 hover:scale-105 hover:bg-sky-100'
                          >
                            <PlayCircle className='h-3 w-3' />
                            Nhận
                          </button>
                        )}
                        {w.status === 'in_progress' && (
                          <button
                            onClick={() => markDone(w.id)}
                            className='inline-flex cursor-pointer items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 transition-colors duration-500 hover:scale-105 hover:bg-emerald-100'
                          >
                            <CheckCircle2 className='h-3 w-3' />
                            Xong
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={7} className='py-12 text-center text-sm text-slate-400'>
                    Không có việc nào phù hợp
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
