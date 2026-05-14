import type { InternalProperty } from '../../types/internal';

export default function Owner({ property }: { property: InternalProperty }) {
  return (
    <div className='relative grid grid-cols-1 gap-6 md:grid-cols-2'>
      {/* Ambient blobs */}
      <div className='pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl' />
      <div className='pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl' />

      {/* Owner info */}
      <div className='relative space-y-4 rounded-2xl border border-sky-100 bg-white/70 p-5 backdrop-blur'>
        <div className='inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-bold text-sky-700 backdrop-blur'>
          <svg
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
            <circle cx='12' cy='7' r='4' />
          </svg>
          Thông tin chủ nhà
        </div>
        <div className='space-y-3'>
          {[
            { label: 'Họ và tên', value: property.ownerName },
            { label: 'Số điện thoại', value: property.ownerPhone },
            { label: 'Email', value: 'owner@example.com' },
            { label: 'CCCD', value: '079201012345' },
            { label: 'Địa chỉ thường trú', value: '123 Nguyễn Huệ, Q1, TP.HCM' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className='flex flex-col gap-0.5 border-b border-sky-50 pb-2 last:border-b-0 last:pb-0'
            >
              <p className='text-xs font-semibold tracking-wider text-slate-400 uppercase'>
                {label}
              </p>
              <p className='text-sm font-bold text-slate-900'>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Verification */}
      <div className='relative space-y-4 rounded-2xl border border-sky-100 bg-white/70 p-5 backdrop-blur'>
        <div className='inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-bold text-sky-700 backdrop-blur'>
          <svg
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M9 12l2 2 4-4' />
            <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
          </svg>
          Liên lạc & xác minh
        </div>
        <div className='space-y-3 rounded-xl border border-sky-100 bg-white/80 p-4 text-sm backdrop-blur'>
          {[
            { label: 'Đã liên hệ xác minh', done: true },
            { label: 'CCCD đã xác thực', done: true },
            { label: 'Chứng nhận sở hữu đã kiểm tra', done: true },
            { label: 'Ký hợp đồng ký gửi', done: false },
          ].map((item) => (
            <div key={item.label} className='flex items-center gap-2.5'>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full shadow-sm ${
                  item.done
                    ? 'bg-linear-to-br from-emerald-500 to-emerald-600 text-white shadow-emerald-500/25'
                    : 'border border-sky-100 bg-white/80 text-slate-400 backdrop-blur'
                }`}
              >
                {item.done ? (
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='3'
                  >
                    <polyline points='20 6 9 17 4 12' />
                  </svg>
                ) : (
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2.5'
                  >
                    <circle cx='12' cy='12' r='9' />
                  </svg>
                )}
              </span>
              <span className={`font-semibold ${item.done ? 'text-slate-800' : 'text-slate-400'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
