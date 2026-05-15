import {
  Calendar,
  CheckCircle2,
  Clock,
  Plus,
  Shield,
  Sparkles,
  TrendingDown,
  Wallet,
} from 'lucide-react';
import { MOCK_DEPOSITS } from '../../mocks/data/internalMockData';
import type { DepositStatus } from '../../types/internal';

const DEP_STYLE: Record<DepositStatus, string> = {
  held: 'border-sky-200 bg-sky-50 text-sky-700',
  refunded: 'border-slate-200 bg-slate-50 text-slate-500',
  deducted: 'border-rose-200 bg-rose-50 text-rose-700',
  pending_refund: 'border-amber-200 bg-amber-50 text-amber-700',
};

const DEP_LABEL: Record<DepositStatus, string> = {
  held: 'Đang giữ',
  refunded: 'Đã hoàn trả',
  deducted: 'Đã khấu trừ',
  pending_refund: 'Chờ hoàn trả',
};

export default function Deposit() {
  const total = MOCK_DEPOSITS.reduce((s, d) => s + d.amount, 0);
  const held = MOCK_DEPOSITS.filter((d) => d.status === 'held').reduce((s, d) => s + d.amount, 0);

  const stats = [
    {
      label: 'Tổng tiền ĐB',
      value: `${(total / 1_000_000).toFixed(0)}M đ`,
      icon: Wallet,
      iconWrap: 'from-sky-500 to-blue-700',
      ring: 'ring-sky-100',
      blob: 'bg-sky-300/30',
    },
    {
      label: 'Đang giữ',
      value: `${(held / 1_000_000).toFixed(0)}M đ`,
      icon: Shield,
      iconWrap: 'from-blue-500 to-indigo-700',
      ring: 'ring-blue-100',
      blob: 'bg-blue-300/30',
    },
    {
      label: 'Chờ hoàn trả',
      value: MOCK_DEPOSITS.filter((d) => d.status === 'pending_refund').length,
      icon: Clock,
      iconWrap: 'from-amber-400 to-orange-500',
      ring: 'ring-amber-100',
      blob: 'bg-amber-300/40',
    },
    {
      label: 'Đã hoàn',
      value: MOCK_DEPOSITS.filter((d) => d.status === 'refunded').length,
      icon: CheckCircle2,
      iconWrap: 'from-emerald-500 to-teal-700',
      ring: 'ring-emerald-100',
      blob: 'bg-emerald-300/30',
    },
  ];

  return (
    <div className='relative space-y-10 p-20'>
      {/* Ambient background */}
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl' />
        <div className='absolute top-40 -right-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl' />
      </div>

      {/* Header */}
      <div className='flex flex-wrap items-center justify-between gap-3'>
        <div>
          <span className='inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm backdrop-blur'>
            <Sparkles className='h-3.5 w-3.5' />
            Quản lý tài chính
          </span>
          <h1 className='mt-2 bg-linear-to-r from-sky-700 via-blue-700 to-amber-500 bg-clip-text text-2xl font-bold text-transparent'>
            Tiền đảm bảo
          </h1>
          <p className='mt-0.5 text-sm text-slate-500'>Quản lý tiền đảm bảo ký gửi từ chủ nhà</p>
        </div>
        <button className='group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-sky-600 to-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/40'>
          <Plus className='h-4 w-4 transition-transform group-hover:rotate-90' />
          Thêm tiền ĐB
        </button>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className='group relative overflow-hidden rounded-3xl border border-sky-100 bg-white/80 p-5 shadow-lg shadow-sky-500/5 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/10'
            >
              <div
                className={`absolute -top-8 -right-8 h-24 w-24 rounded-full ${s.blob} blur-2xl transition-opacity group-hover:opacity-80`}
              />
              <div className='relative flex items-start justify-between'>
                <div>
                  <p className='mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase'>
                    {s.label}
                  </p>
                  <p className='text-2xl font-bold text-slate-800'>{s.value}</p>
                </div>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br ${s.iconWrap} text-white shadow-md ring-1 ${s.ring}`}
                >
                  <Icon className='h-5 w-5' />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className='overflow-hidden rounded-3xl border border-sky-100 bg-white/80 shadow-lg shadow-sky-500/5 backdrop-blur'>
        <div className='flex items-center justify-between border-b border-sky-100 bg-linear-to-r from-sky-50/60 to-transparent px-5 py-3.5'>
          <div className='flex items-center gap-2'>
            <Wallet className='h-4 w-4 text-sky-600' />
            <h3 className='text-sm font-bold text-slate-800'>Danh sách tiền đảm bảo</h3>
          </div>
          <span className='rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700'>
            {MOCK_DEPOSITS.length} bản ghi
          </span>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b border-sky-100 bg-slate-50/40 text-xs font-bold tracking-wider text-slate-500 uppercase'>
                <th className='px-5 py-3 text-left'>Mã BĐS</th>
                <th className='px-4 py-3 text-left'>Chủ nhà</th>
                <th className='px-4 py-3 text-left'>Số tiền</th>
                <th className='px-4 py-3 text-left'>Ngày nhận</th>
                <th className='px-4 py-3 text-left'>Khấu trừ</th>
                <th className='px-4 py-3 text-left'>Trạng thái</th>
                <th className='px-4 py-3' />
              </tr>
            </thead>
            <tbody className='divide-y divide-sky-50'>
              {MOCK_DEPOSITS.map((d) => (
                <tr key={d.id} className='group transition-colors hover:bg-sky-50/40'>
                  <td className='px-5 py-3.5'>
                    <span className='rounded-md border border-sky-100 bg-sky-50 px-2 py-0.5 font-mono text-xs font-semibold text-sky-700'>
                      {d.propertyCode}
                    </span>
                  </td>
                  <td className='px-4 py-3.5'>
                    <div className='flex items-center gap-2.5'>
                      <div className='flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-blue-700 text-xs font-bold text-white ring-2 ring-white'>
                        {d.ownerName
                          .split(' ')
                          .map((p) => p[0])
                          .slice(-2)
                          .join('')}
                      </div>
                      <span className='font-semibold text-slate-800'>{d.ownerName}</span>
                    </div>
                  </td>
                  <td className='px-4 py-3.5'>
                    <span className='bg-linear-to-r from-sky-700 to-blue-700 bg-clip-text font-bold text-transparent'>
                      {(d.amount / 1_000_000).toFixed(0)}M đ
                    </span>
                  </td>
                  <td className='px-4 py-3.5'>
                    <span className='inline-flex items-center gap-1.5 text-xs text-slate-500'>
                      <Calendar className='h-3.5 w-3.5 text-slate-400' />
                      {d.receivedAt}
                    </span>
                  </td>
                  <td className='px-4 py-3.5 text-xs'>
                    {d.deductAmount ? (
                      <span className='inline-flex items-center gap-1.5 rounded-md border border-rose-100 bg-rose-50 px-2 py-1 font-semibold text-rose-600'>
                        <TrendingDown className='h-3 w-3' />
                        {(d.deductAmount / 1_000).toFixed(0)}K — {d.deductReason}
                      </span>
                    ) : (
                      <span className='text-slate-300'>—</span>
                    )}
                  </td>
                  <td className='px-4 py-3.5'>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${DEP_STYLE[d.status]}`}
                    >
                      {DEP_LABEL[d.status]}
                    </span>
                  </td>
                  <td className='px-4 py-3.5'>
                    {d.status === 'pending_refund' && (
                      <button className='cursor-pointer rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 transition-all duration-500 hover:scale-105 hover:border-amber-300 hover:bg-amber-100 hover:shadow-sm'>
                        Xử lý
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
