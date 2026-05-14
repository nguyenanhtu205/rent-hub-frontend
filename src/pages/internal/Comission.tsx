import {
  Building2,
  Calendar as CalendarIcon,
  CheckCircle2,
  Clock,
  Percent,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { MOCK_COMMISSIONS } from '../../constants/internalMockData';
import { STATUS_LABEL, STATUS_STYLE } from '../../constants/ComissionConstant';

export default function Commission() {
  const total = MOCK_COMMISSIONS.reduce((s, c) => s + c.amount, 0);
  const paid = MOCK_COMMISSIONS.filter((c) => c.status === 'paid').reduce(
    (s, c) => s + c.amount,
    0,
  );
  const pending = MOCK_COMMISSIONS.filter((c) => c.status === 'pending').reduce(
    (s, c) => s + c.amount,
    0,
  );

  const stats = [
    {
      label: 'Tổng hoa hồng',
      value: total,
      icon: Wallet,
      gradient: 'from-sky-500 to-blue-700',
      ring: 'ring-sky-100',
    },
    {
      label: 'Đã thanh toán',
      value: paid,
      icon: CheckCircle2,
      gradient: 'from-emerald-500 to-emerald-700',
      ring: 'ring-emerald-100',
    },
    {
      label: 'Chờ duyệt',
      value: pending,
      icon: Clock,
      gradient: 'from-amber-400 to-orange-500',
      ring: 'ring-amber-100',
    },
  ];

  return (
    <div className='relative min-h-full space-y-10 bg-linear-to-br from-sky-100 via-white to-sky-100 p-12'>
      {/* Header */}
      <div className='relative'>
        <div className='mb-2 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-semibold text-sky-700 backdrop-blur'>
          <TrendingUp className='h-3.5 w-3.5' />
          Tài chính
        </div>
        <h1 className='text-2xl font-black tracking-tight text-slate-900 sm:text-3xl'>
          Hoa hồng{' '}
          <em className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-transparent not-italic'>
            môi giới
          </em>
        </h1>
        <p className='mt-1 text-sm text-slate-500'>Theo dõi và phê duyệt hoa hồng</p>
      </div>

      {/* Stat cards */}
      <div className='relative grid grid-cols-1 gap-4 sm:grid-cols-3'>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className={`group relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm ring-1 ${s.ring} backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg`}
            >
              <div className='flex items-start justify-between'>
                <div>
                  <p className='text-xs font-semibold tracking-wider text-slate-500 uppercase'>
                    {s.label}
                  </p>
                  <p className='mt-2 text-2xl font-black text-slate-900'>
                    {(s.value / 1_000).toFixed(0)}
                    <span className='ml-1 text-sm font-bold text-slate-400'>K đ</span>
                  </p>
                </div>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br ${s.gradient} text-white shadow-sm`}
                >
                  <Icon className='h-5 w-5' />
                </div>
              </div>
              <div
                className={`absolute inset-x-0 bottom-0 h-1 bg-linear-to-r ${s.gradient} opacity-60`}
              />
            </div>
          );
        })}
      </div>

      {/* Table card */}
      <div className='relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 shadow-sm backdrop-blur'>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead className='bg-linear-to-r from-sky-50/80 via-white to-amber-50/40'>
              <tr className='border-b border-sky-100 text-xs font-bold tracking-wider text-slate-500 uppercase'>
                <th className='px-5 py-4 text-left'>Môi giới</th>
                <th className='px-4 py-4 text-left'>Mã BĐS</th>
                <th className='px-4 py-4 text-left'>GT giao dịch</th>
                <th className='px-4 py-4 text-left'>Tỷ lệ</th>
                <th className='px-4 py-4 text-left'>Hoa hồng</th>
                <th className='px-4 py-4 text-left'>Tháng</th>
                <th className='px-4 py-4 text-left'>Trạng thái</th>
                <th className='px-4 py-4' />
              </tr>
            </thead>
            <tbody className='divide-y divide-sky-50'>
              {MOCK_COMMISSIONS.map((c) => (
                <tr key={c.id} className='transition-colors hover:bg-sky-50/40'>
                  <td className='px-5 py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-blue-700 text-xs font-bold text-white'>
                        {c.brokerName
                          .split(' ')
                          .map((w) => w[0])
                          .slice(-2)
                          .join('')}
                      </div>
                      <span className='font-semibold text-slate-800'>{c.brokerName}</span>
                    </div>
                  </td>
                  <td className='px-4 py-4'>
                    <span className='inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-600'>
                      <Building2 className='h-3 w-3' />
                      {c.propertyCode}
                    </span>
                  </td>
                  <td className='px-4 py-4 font-medium text-slate-700'>
                    {(c.transactionValue / 1_000_000).toFixed(0)}
                    <span className='text-xs text-slate-400'>M</span>
                  </td>
                  <td className='px-4 py-4'>
                    <span className='inline-flex items-center gap-0.5 text-slate-600'>
                      {c.rate}
                      <Percent className='h-3 w-3 text-slate-400' />
                    </span>
                  </td>
                  <td className='px-4 py-4'>
                    <span className='bg-linear-to-br from-sky-700 to-blue-800 bg-clip-text font-black text-transparent'>
                      {(c.amount / 1_000).toFixed(0)}K
                    </span>
                    <span className='ml-1 text-xs font-bold text-slate-400'>đ</span>
                  </td>
                  <td className='px-4 py-4'>
                    <span className='inline-flex items-center gap-1 text-xs text-slate-500'>
                      <CalendarIcon className='h-3 w-3' />
                      {c.month}
                    </span>
                  </td>
                  <td className='px-4 py-4'>
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold ${STATUS_STYLE[c.status]}`}
                    >
                      {STATUS_LABEL[c.status]}
                    </span>
                  </td>
                  <td className='px-4 py-4'>
                    {c.status === 'pending' && (
                      <button className='cursor-pointer rounded-lg bg-linear-to-br from-sky-400 to-blue-700 px-3 py-1.5 text-xs font-bold text-white shadow-sm shadow-sky-600/25 transition-all duration-500 hover:scale-110 hover:shadow-md'>
                        Duyệt
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
