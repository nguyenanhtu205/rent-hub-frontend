import { Building2, ClipboardCheck, FileCheck, MapPin, Scale, User, X } from 'lucide-react';
import { MOCK_INT_PROPERTIES } from '../../mocks/data/internalMockData';

const VAL_STATUS_LABEL: Record<string, string> = {
  pending_review: 'Chờ thẩm định',
  under_valuation: 'Đang thẩm định',
};

const VAL_STATUS_STYLE: Record<string, string> = {
  pending_review: 'border-amber-200 bg-amber-50 text-amber-700',
  under_valuation: 'border-sky-200 bg-sky-50 text-sky-700',
};

const VAL_ACCENT: Record<string, string> = {
  pending_review: 'from-amber-400 to-amber-500',
  under_valuation: 'from-sky-500 to-blue-700',
};


export default function Valuation() {
  const queue = MOCK_INT_PROPERTIES.filter((p) =>
    ['pending_review', 'under_valuation'].includes(p.status),
  );

  const counts = {
    pending: queue.filter((p) => p.status === 'pending_review').length,
    under: queue.filter((p) => p.status === 'under_valuation').length,
  };

  return (
    <div className='relative space-y-10 p-20 sm:overflow-x-hidden'>
      {/* Ambient blobs */}
      <div className='pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl' />
      <div className='pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl' />

      {/* Header */}
      <div className='relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <div className='mb-2 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-semibold text-sky-700 backdrop-blur'>
            <Scale className='h-3.5 w-3.5' />
            Hàng đợi thẩm định
          </div>
          <h1 className='text-2xl font-black tracking-tight text-slate-900 sm:text-3xl'>
            Thẩm định{' '}
            <em className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-transparent not-italic'>
              bất động sản
            </em>
          </h1>
          <p className='mt-1 text-sm text-slate-500'>
            {queue.length} hồ sơ cần thẩm định · {counts.pending} chờ tiếp nhận · {counts.under}{' '}
            đang xử lý
          </p>
        </div>
      </div>

      {/* Cards grid */}
      {queue.length === 0 ? (
        <div className='relative rounded-2xl border border-dashed border-sky-200 bg-white/60 py-16 text-center backdrop-blur'>
          <Scale className='mx-auto h-10 w-10 text-slate-300' />
          <p className='mt-3 text-sm font-medium text-slate-500'>
            Không có hồ sơ nào cần thẩm định
          </p>
        </div>
      ) : (
        <div className='relative space-y-8'>
          {queue.map((p) => (
            <div
              key={p.id}
              className='group relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 p-8 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50'
            >
              {/* Accent strip */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${VAL_ACCENT[p.status]}`}
              />

              <div className='flex items-start gap-8'>
                <div className='relative shrink-0'>
                  <img
                    src={p.thumbnail}
                    alt=''
                    className='h-30 w-30 rounded-xl object-cover ring-1 ring-sky-100'
                  />
                  <div className='absolute -right-1 -bottom-1 rounded-lg bg-white/90 p-1 shadow-sm backdrop-blur'>
                    <Building2 className='h-3.5 w-3.5 text-sky-600' />
                  </div>
                </div>

                <div className='min-w-0 flex-1'>
                  <div className='mb-3 flex items-start justify-between gap-3'>
                    <div className='min-w-0'>
                      <p className='truncate font-bold text-slate-900'>{p.title}</p>
                      <p className='mt-0.5 font-mono text-xs text-slate-400'>{p.code}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-bold ${VAL_STATUS_STYLE[p.status]}`}
                    >
                      {VAL_STATUS_LABEL[p.status]}
                    </span>
                  </div>

                  <div className='space-y-2 text-sm text-slate-600'>
                    <p className='flex items-start gap-2'>
                      <MapPin className='mt-0.5 h-4 w-4 shrink-0 text-sky-600' />
                      <span className='line-clamp-1 min-w-0'>{p.address}</span>
                    </p>
                    <p className='flex items-center gap-2'>
                      <User className='h-4 w-4 shrink-0 text-slate-400' />
                      Chủ sở hữu: <span className='font-medium text-slate-700'>{p.ownerName}</span>
                    </p>
                  </div>

                  <div className='mt-4 flex flex-wrap gap-2'>
                    {p.status === 'pending_review' && (
                      <button className='inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-linear-to-br from-sky-600 to-blue-700 px-4 py-2 text-xs font-bold text-white shadow-sm shadow-sky-600/25 transition-all duration-500 hover:scale-105 hover:shadow-md'>
                        <ClipboardCheck className='h-3.5 w-3.5' />
                        Nhận thẩm định
                      </button>
                    )}
                    {p.status === 'under_valuation' && (
                      <>
                        <button className='inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm shadow-emerald-600/25 transition-all duration-500 hover:scale-105 hover:shadow-md'>
                          <FileCheck className='h-3.5 w-3.5' />
                          Hoàn thành & Duyệt
                        </button>
                        <button className='inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-bold text-rose-600 transition-colors duration-500 hover:scale-105 hover:bg-rose-100'>
                          <X className='h-3.5 w-3.5' />
                          Từ chối
                        </button>
                        <button className='inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700 transition-colors duration-500 hover:scale-105 hover:bg-amber-100'>
                          <Scale className='h-3.5 w-3.5' />
                          Chuyển pháp lý
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
