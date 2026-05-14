import { useAuthStore } from '../../stores/authStore';
import { MOCK_COMMISSIONS, MOCK_INT_PROPERTIES, MOCK_WORK_ITEMS, } from '../../constants/internalMockData';
import { ArrowUpRight, Building2, Clock, Flame, MapPin, Sparkles } from 'lucide-react';
import { fmt, kpiByRole, STATUS_COLOR, STATUS_LABEL } from '../../constants/DashboardConstant';

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);

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
