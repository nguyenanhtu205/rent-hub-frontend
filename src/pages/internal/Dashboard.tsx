import { useAuthStore } from '../../stores/authStore';
import { ArrowUpRight, Building2, Clock, Flame, MapPin, Sparkles } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import {
  MOCK_COMMISSIONS,
  MOCK_DEALS,
  MOCK_DEPOSITS,
  MOCK_INT_PROPERTIES,
  MOCK_WORK_ITEMS,
} from '../../mocks/data/internalMockData.ts';
import { type KpiCard } from '../../types/internal';

const STATUS_COLOR: Record<string, string> = {
  pending_review: 'bg-amber-100 text-amber-700',
  under_valuation: 'bg-blue-100 text-blue-700',
  pending_legal: 'bg-purple-100 text-purple-700',
  active: 'bg-emerald-100 text-emerald-700',
  rented: 'bg-slate-100 text-slate-600',
  rejected: 'bg-red-100 text-red-700',
};

const STATUS_LABEL: Record<string, string> = {
  pending_review: 'Chờ thẩm định',
  under_valuation: 'Đang thẩm định',
  pending_legal: 'Chờ pháp lý',
  active: 'Đang tìm khách',
  rented: 'Đã cho thuê',
  rejected: 'Từ chối',
};

function fmt(n: number) {
  return n >= 1_000_000 ? `${(n / 1_000_000).toFixed(0)}M` : n.toLocaleString('vi-VN');
}

const openWork = MOCK_WORK_ITEMS.filter((w) => w.status === 'open').length;
const highPriority = MOCK_WORK_ITEMS.filter(
  (w) => w.priority === 'high' && w.status === 'open',
).length;

const kpiByRole: Record<string, KpiCard[]> = {
  broker: [
    {
      label: 'Việc cần xử lý',
      value: openWork,
      sub: `${highPriority} ưu tiên cao`,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M9 11l3 3L22 4' />
          <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' />
        </svg>
      ),
    },
    {
      label: 'Khách hàng',
      value: 4,
      sub: '2 đang tích cực',
      color: 'text-emerald-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
          <circle cx='9' cy='7' r='4' />
        </svg>
      ),
    },
    {
      label: 'Deals đang xử lý',
      value: MOCK_DEALS.filter((d) => d.stage !== 'signed' && d.stage !== 'lost').length,
      sub: '1 gần ký HĐ',
      color: 'text-amber-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
        </svg>
      ),
    },
  ],
  valuator: [
    {
      label: 'Việc cần xử lý',
      value: openWork,
      sub: `${highPriority} ưu tiên cao`,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M9 11l3 3L22 4' />
          <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' />
        </svg>
      ),
    },
    {
      label: 'Chờ thẩm định',
      value: MOCK_INT_PROPERTIES.filter((p) => p.status === 'pending_review').length,
      color: 'text-amber-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <circle cx='12' cy='12' r='10' />
          <polyline points='12 6 12 12 16 14' />
        </svg>
      ),
    },
    {
      label: 'Đang thẩm định',
      value: MOCK_INT_PROPERTIES.filter((p) => p.status === 'under_valuation').length,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
        </svg>
      ),
    },
    {
      label: 'Hoàn thành tháng',
      value: 8,
      sub: 'tháng 05/2025',
      color: 'text-emerald-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='20 6 9 17 4 12' />
        </svg>
      ),
    },
  ],
  legal: [
    {
      label: 'Việc cần xử lý',
      value: openWork,
      sub: `${highPriority} ưu tiên cao`,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M9 11l3 3L22 4' />
        </svg>
      ),
    },
    {
      label: 'Chờ pháp lý',
      value: MOCK_INT_PROPERTIES.filter((p) => p.status === 'pending_legal').length,
      color: 'text-purple-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
        </svg>
      ),
    },
    {
      label: 'Có flag pháp lý',
      value: MOCK_INT_PROPERTIES.filter((p) => p.hasLegalFlag).length,
      color: 'text-rose-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' />
          <line x1='12' y1='9' x2='12' y2='13' />
          <line x1='12' y1='17' x2='12.01' y2='17' />
        </svg>
      ),
    },
    {
      label: 'Đã duyệt tháng',
      value: 5,
      sub: 'tháng 05/2025',
      color: 'text-emerald-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='20 6 9 17 4 12' />
        </svg>
      ),
    },
  ],
  accountant: [
    {
      label: 'Tiền đảm bảo đang giữ',
      value: `${fmt(MOCK_DEPOSITS.filter((d) => d.status === 'held').reduce((s, d) => s + d.amount, 0))}đ`,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <rect x='2' y='5' width='20' height='14' rx='2' />
          <line x1='2' y1='10' x2='22' y2='10' />
        </svg>
      ),
    },
    {
      label: 'Chờ hoàn trả',
      value: MOCK_DEPOSITS.filter((d) => d.status === 'pending_refund').length,
      color: 'text-amber-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='1 4 1 10 7 10' />
          <path d='M3.51 15a9 9 0 1 0 .49-3.5' />
        </svg>
      ),
    },
    {
      label: 'Hoa hồng chờ duyệt',
      value: MOCK_COMMISSIONS.filter((c) => c.status === 'pending').length,
      color: 'text-purple-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <line x1='12' y1='1' x2='12' y2='23' />
          <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
        </svg>
      ),
    },
    {
      label: 'Tổng HH đã duyệt',
      value: `${fmt(MOCK_COMMISSIONS.filter((c) => c.status !== 'pending').reduce((s, c) => s + c.amount, 0))}đ`,
      color: 'text-emerald-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='22 7 13.5 15.5 8.5 10.5 2 17' />
          <polyline points='16 7 22 7 22 13' />
        </svg>
      ),
    },
  ],
  manager: [
    {
      label: 'Tổng BĐS đang XL',
      value: MOCK_INT_PROPERTIES.filter(
        (p) => !['rented', 'rejected', 'terminated'].includes(p.status),
      ).length,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
        </svg>
      ),
    },
    {
      label: 'Deals đang xử lý',
      value: MOCK_DEALS.filter((d) => d.stage !== 'signed' && d.stage !== 'lost').length,
      color: 'text-amber-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
        </svg>
      ),
    },
    {
      label: 'Đã cho thuê tháng',
      value: 3,
      sub: 'tháng 05/2025',
      color: 'text-emerald-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='20 6 9 17 4 12' />
        </svg>
      ),
    },
    {
      label: 'Doanh thu hoa hồng',
      value: `${fmt(MOCK_COMMISSIONS.reduce((s, c) => s + c.amount, 0))}đ`,
      color: 'text-purple-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <line x1='12' y1='1' x2='12' y2='23' />
          <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
        </svg>
      ),
    },
  ],
};

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);

  if (!user) return <Navigate to='/login' replace />;

  const cards = [
    ...(kpiByRole[user.role] ?? kpiByRole.broker),
    {
      label: 'Hoa hồng tháng',
      value: `${fmt(MOCK_COMMISSIONS.filter((c) => c.brokerName === user.name).reduce((s, c) => s + c.amount, 0))}đ`,
      sub: 'tháng 05/2025',
      color: 'text-purple-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <line x1='12' y1='1' x2='12' y2='23' />
          <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
        </svg>
      ),
    },
  ];

  return (
    <div className='relative space-y-10 px-20 py-6'>
      {/* Decorative background */}
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-32 -left-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl' />
        <div className='absolute top-40 -right-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl' />
      </div>

      {/* Header */}
      <div className='flex flex-col gap-3'>
        <span className='inline-flex w-fit items-center gap-1.5 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm shadow-sky-500/10 backdrop-blur'>
          <Sparkles className='h-3.5 w-3.5' />
          Bảng điều khiển
        </span>
        <div>
          <h1 className='bg-linear-to-br from-sky-700 via-blue-700 to-amber-500 bg-clip-text text-2xl font-black tracking-tight text-transparent sm:text-3xl'>
            Xin chào, {user.name.split(' ').pop()} 👋
          </h1>
          <p className='mt-1 text-sm text-slate-500'>
            Tổng quan hoạt động hôm nay —{' '}
            <span className='font-semibold text-slate-700'>
              {new Date().toLocaleDateString('vi-VN', {
                weekday: 'long',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </span>
          </p>
        </div>
      </div>

      {/* KPI cards */}
      <div className='grid grid-cols-2 gap-4 xl:grid-cols-4'>
        {cards.map((c) => (
          <div
            key={c.label}
            className='group relative overflow-hidden rounded-3xl border border-sky-100 bg-white/80 bg-linear-to-bl from-amber-50 via-white to-amber-50 p-5 shadow-lg shadow-sky-500/5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10'
          >
            <div className='absolute -top-10 -right-10 h-24 w-24 rounded-full bg-linear-to-br from-sky-200/40 to-amber-200/30 blur-2xl transition-opacity group-hover:opacity-100' />
            <div className='relative mb-3 flex items-start justify-between'>
              <p className='max-w-32 text-xs leading-snug font-semibold tracking-wide text-slate-500 uppercase'>
                {c.label}
              </p>
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-2xl bg-linear-to-br from-sky-50 to-amber-50 ring-1 ring-sky-100 ${c.color}`}
              >
                {c.icon}
              </span>
            </div>
            <p className={`relative text-3xl font-black tracking-tight ${c.color}`}>{c.value}</p>
            {c.sub && <p className='relative mt-1 text-xs text-slate-400'>{c.sub}</p>}
          </div>
        ))}
      </div>

      {/* Two-col */}
      <div className='grid grid-cols-1 gap-5 xl:grid-cols-2'>
        {/* Recent work queue */}
        <div className='overflow-hidden rounded-3xl border border-sky-100 bg-white/80 shadow-lg shadow-sky-500/5 backdrop-blur'>
          <div className='flex items-center justify-between border-b border-sky-100/70 bg-linear-to-r from-sky-50/60 to-transparent px-5 py-4'>
            <div className='flex items-center gap-2'>
              <span className='flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-red-500 to-amber-500 text-white shadow-md shadow-red-500/20'>
                <Flame className='h-4 w-4' />
              </span>
              <h2 className='text-sm font-bold text-slate-800'>Việc ưu tiên cao</h2>
            </div>
            <a
              href='/internal/work-queue'
              className='inline-flex cursor-pointer items-center gap-1 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-700 transition-all duration-500 hover:scale-105 hover:border-sky-400 hover:bg-sky-50'
            >
              Xem tất cả <ArrowUpRight className='h-3 w-3' />
            </a>
          </div>
          <div className='divide-y divide-sky-50'>
            {MOCK_WORK_ITEMS.filter((w) => w.priority === 'high').map((w) => (
              <div
                key={w.id}
                className='group flex items-start gap-3 px-5 py-3.5 transition-colors hover:bg-sky-50/40'
              >
                <span className='relative mt-1.5 flex h-2.5 w-2.5 shrink-0'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60' />
                  <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500' />
                </span>
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-semibold text-slate-800 group-hover:text-sky-800'>
                    {w.title}
                  </p>
                  <p className='mt-0.5 flex items-center gap-1.5 text-xs text-slate-400'>
                    <span className='font-medium text-slate-500'>{w.propertyCode}</span>
                    <span>·</span>
                    <Clock className='h-3 w-3' />
                    Hạn: {w.dueDate}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${
                    w.status === 'open'
                      ? 'border-amber-200 bg-amber-50 text-amber-700'
                      : 'border-sky-200 bg-sky-50 text-sky-700'
                  }`}
                >
                  {w.status === 'open' ? 'Mới' : 'Đang XL'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent properties */}
        <div className='overflow-hidden rounded-3xl border border-sky-100 bg-white/80 shadow-lg shadow-sky-500/5 backdrop-blur'>
          <div className='flex items-center justify-between border-b border-sky-100/70 bg-linear-to-r from-amber-50/60 to-transparent px-5 py-4'>
            <div className='flex items-center gap-2'>
              <span className='flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-700 text-white shadow-md shadow-sky-500/20'>
                <Building2 className='h-4 w-4' />
              </span>
              <h2 className='text-sm font-bold text-slate-800'>BĐS gần đây</h2>
            </div>
            <a
              href='/internal/properties'
              className='inline-flex cursor-pointer items-center gap-1 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-700 transition-all duration-500 hover:scale-105 hover:border-sky-400 hover:bg-sky-50'
            >
              Xem tất cả <ArrowUpRight className='h-3 w-3' />
            </a>
          </div>
          <div className='divide-y divide-sky-50'>
            {MOCK_INT_PROPERTIES.slice(0, 5).map((p) => (
              <div
                key={p.id}
                className='group flex items-center gap-3 px-5 py-3 transition-colors hover:bg-sky-50/40'
              >
                <div className='relative shrink-0'>
                  <img
                    src={p.thumbnail}
                    alt=''
                    className='h-12 w-12 rounded-xl object-cover ring-1 ring-sky-100 transition-transform group-hover:scale-105'
                  />
                  <div className='absolute inset-0 rounded-xl ring-1 ring-white/40 ring-inset' />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-semibold text-slate-800 group-hover:text-sky-800'>
                    {p.title}
                  </p>
                  <p className='mt-0.5 flex items-center gap-1 text-xs text-slate-400'>
                    <span className='font-medium text-slate-500'>{p.code}</span>
                    <span>·</span>
                    <MapPin className='h-3 w-3' />
                    {p.district}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${STATUS_COLOR[p.status] ?? 'border-slate-200 bg-slate-50 text-slate-600'}`}
                >
                  {STATUS_LABEL[p.status] ?? p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
