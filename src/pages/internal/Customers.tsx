import { Calendar, Eye, Phone, Plus, Sparkles, UserCircle2 } from 'lucide-react';
import { MOCK_CUSTOMERS } from '../../mocks/data/internalMockData';

export default function Customers() {
  return (
    <div className='relative min-h-full bg-linear-to-br from-sky-300 via-white to-sky-200 p-16 pt-20'>
      {/* Decorative blobs */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -top-32 -left-24 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl' />
        <div className='absolute top-40 -right-20 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl' />
        <div className='absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl' />
      </div>

      <div className='relative space-y-16'>
        {/* Header */}
        <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <span className='mb-3 inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold text-sky-700 backdrop-blur'>
              <Sparkles className='h-3.5 w-3.5' />
              Quản lý khách hàng
            </span>
            <h1 className='bg-linear-to-br from-sky-700 via-blue-700 to-amber-500 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl'>
              Khách hàng
            </h1>
            <p className='mt-1 text-sm text-slate-600'>
              <span className='font-semibold text-slate-900'>{MOCK_CUSTOMERS.length}</span> khách
              được phân công cho bạn
            </p>
          </div>
          <button className='group inline-flex cursor-pointer items-center gap-2 rounded-full bg-linear-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/40'>
            <Plus className='h-4 w-4 transition-transform group-hover:rotate-90' />
            Thêm khách
          </button>
        </div>

        {/* Table card */}
        <div className='overflow-hidden rounded-3xl border border-sky-100 bg-white/80 shadow-xl shadow-sky-500/10 backdrop-blur'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead className='bg-linear-to-r from-sky-50/80 via-white/60 to-amber-50/60'>
                <tr className='text-xs font-bold tracking-wider text-slate-500 uppercase'>
                  <th className='px-5 py-4 text-left'>Khách hàng</th>
                  <th className='px-4 py-4 text-left'>Nhu cầu</th>
                  <th className='px-4 py-4 text-left'>Môi giới</th>
                  <th className='px-4 py-4 text-left'>Liên hệ cuối</th>
                  <th className='px-4 py-4 text-left'>Lượt xem</th>
                  <th className='px-4 py-4 text-left'>Trạng thái</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-sky-50'>
                {MOCK_CUSTOMERS.map((c) => {
                  const initials = c.name
                    .split(' ')
                    .map((w) => w[0])
                    .slice(-2)
                    .join('');
                  const statusStyle =
                    c.status === 'active'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                      : c.status === 'converted'
                        ? 'border-sky-200 bg-sky-50 text-sky-700'
                        : 'border-slate-200 bg-slate-50 text-slate-500';
                  const statusLabel =
                    c.status === 'active'
                      ? 'Đang tư vấn'
                      : c.status === 'converted'
                        ? 'Đã ký HĐ'
                        : 'Không HĐ';
                  return (
                    <tr key={c.id} className='group transition-colors hover:bg-sky-50/50'>
                      <td className='px-5 py-4'>
                        <div className='flex items-center gap-3'>
                          <div className='relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-blue-700 text-xs font-black text-white shadow-md ring-2 shadow-sky-500/30 ring-white'>
                            {initials || <UserCircle2 className='h-5 w-5' />}
                          </div>
                          <div>
                            <p className='font-bold text-slate-900'>{c.name}</p>
                            <p className='flex items-center gap-1 text-xs text-slate-500'>
                              <Phone className='h-3 w-3' />
                              {c.phone}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='px-4 py-4'>
                        <p className='font-semibold text-slate-800'>{c.interestType}</p>
                        <p className='text-xs font-medium text-amber-600'>{c.budget}</p>
                      </td>
                      <td className='px-4 py-4 text-slate-700'>{c.assignedBroker}</td>
                      <td className='px-4 py-4'>
                        <span className='inline-flex items-center gap-1 text-xs text-slate-500'>
                          <Calendar className='h-3 w-3' />
                          {c.lastContact}
                        </span>
                      </td>
                      <td className='px-4 py-4'>
                        <span className='inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-700'>
                          <Eye className='h-3 w-3' />
                          {c.viewingCount}
                        </span>
                      </td>
                      <td className='px-4 py-4'>
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold ${statusStyle}`}
                        >
                          {statusLabel}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
