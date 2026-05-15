import {
  BarChart3,
  Briefcase,
  Calendar as CalendarIcon,
  CheckCircle2,
  Eye,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';
import { MOCK_BROKER_KPI } from '../../mocks/data/internalMockData';

const summary = [
  {
    label: 'BĐS đang hoạt động',
    value: 3,
    icon: Briefcase,
    accent: 'from-sky-500 to-blue-700',
    iconBg: 'bg-sky-50 text-sky-600',
  },
  {
    label: 'Giao dịch tháng này',
    value: 3,
    icon: TrendingUp,
    accent: 'from-emerald-400 to-emerald-600',
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
  {
    label: 'Lịch xem nhà',
    value: 4,
    icon: CalendarIcon,
    accent: 'from-amber-400 to-amber-500',
    iconBg: 'bg-amber-50 text-amber-600',
  },
  {
    label: 'Tỷ lệ chuyển đổi',
    value: '75%',
    icon: BarChart3,
    accent: 'from-sky-600 via-blue-700 to-amber-500',
    iconBg: 'bg-blue-50 text-blue-700',
  },
];

export default function Reports() {
  return (
    <div className='relative space-y-10 p-20 sm:overflow-x-hidden'>
      {/* Ambient blobs */}
      <div className='pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl' />
      <div className='pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl' />

      {/* Header */}
      <div className='relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <div className='mb-2 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-semibold text-sky-700 backdrop-blur'>
            <BarChart3 className='h-3.5 w-3.5' />
            Tổng quan hiệu suất
          </div>
          <h1 className='text-2xl font-black tracking-tight text-slate-900 sm:text-3xl'>
            Báo cáo &{' '}
            <em className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-transparent not-italic'>
              KPI
            </em>
          </h1>
          <p className='mt-1 text-sm text-slate-500'>Tháng 05/2025</p>
        </div>
      </div>

      {/* Summary */}
      <div className='relative grid grid-cols-2 gap-4 md:grid-cols-4'>
        {summary.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className='group relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50'
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${s.accent}`} />
              <div className='mb-3 flex items-center justify-between'>
                <p className='text-xs font-semibold tracking-wide text-slate-500 uppercase'>
                  {s.label}
                </p>
                <div className={`rounded-lg p-1.5 ${s.iconBg}`}>
                  <Icon className='h-4 w-4' />
                </div>
              </div>
              <p className='text-2xl font-black text-slate-900 sm:text-3xl'>{s.value}</p>
            </div>
          );
        })}
      </div>

      {/* Broker KPI */}
      <div className='relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 shadow-sm backdrop-blur'>
        <div className='absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-600 via-blue-700 to-amber-500' />
        <div className='flex items-center justify-between border-b border-sky-100 px-5 py-4'>
          <div className='flex items-center gap-2'>
            <div className='rounded-lg bg-sky-50 p-1.5 text-sky-600'>
              <Users className='h-4 w-4' />
            </div>
            <h2 className='text-sm font-bold text-slate-900'>KPI Môi giới</h2>
          </div>
          <span className='rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-700'>
            {MOCK_BROKER_KPI.length} người
          </span>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead className='bg-slate-50/60'>
              <tr className='border-b border-sky-100 text-xs font-bold tracking-wider text-slate-500 uppercase'>
                <th className='px-5 py-3 text-left'>Môi giới</th>
                <th className='px-4 py-3 text-left'>
                  <span className='inline-flex items-center gap-1.5'>
                    <Briefcase className='h-3.5 w-3.5 text-sky-600' />
                    Deals đang XL
                  </span>
                </th>
                <th className='px-4 py-3 text-left'>
                  <span className='inline-flex items-center gap-1.5'>
                    <Eye className='h-3.5 w-3.5 text-amber-500' />
                    Lượt xem nhà
                  </span>
                </th>
                <th className='px-4 py-3 text-left'>
                  <span className='inline-flex items-center gap-1.5'>
                    <CheckCircle2 className='h-3.5 w-3.5 text-emerald-600' />
                    Đã chuyển đổi
                  </span>
                </th>
                <th className='px-4 py-3 text-left'>
                  <span className='inline-flex items-center gap-1.5'>
                    <Wallet className='h-3.5 w-3.5 text-blue-700' />
                    Hoa hồng
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-sky-50'>
              {MOCK_BROKER_KPI.map((b) => (
                <tr key={b.name} className='transition-colors hover:bg-sky-50/40'>
                  <td className='px-5 py-3.5'>
                    <div className='flex items-center gap-2.5'>
                      <div className='flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-sky-600 to-blue-700 text-xs font-bold text-white shadow-sm shadow-sky-600/25'>
                        {b.name
                          .split(' ')
                          .map((w) => w[0])
                          .slice(-2)
                          .join('')}
                      </div>
                      <span className='font-semibold text-slate-900'>{b.name}</span>
                    </div>
                  </td>
                  <td className='px-4 py-3.5 font-semibold text-slate-700'>{b.deals}</td>
                  <td className='px-4 py-3.5 font-semibold text-slate-700'>{b.viewings}</td>
                  <td className='px-4 py-3.5'>
                    <span className='inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700'>
                      {b.converted}
                    </span>
                  </td>
                  <td className='px-4 py-3.5'>
                    <span className='bg-linear-to-br from-sky-600 to-blue-700 bg-clip-text font-black text-transparent'>
                      {(b.commission / 1_000).toFixed(0)}K đ
                    </span>
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
