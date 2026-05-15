import { Activity, Download, Filter, Search, ShieldCheck } from 'lucide-react';
import { MOCK_AUDIT_LOGS } from '../../mocks/data/internalMockData';

const TYPE_STYLE: Record<string, string> = {
  create: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  update: 'bg-sky-50 text-sky-700 ring-sky-200',
  delete: 'bg-rose-50 text-rose-700 ring-rose-200',
  login: 'bg-amber-50 text-amber-700 ring-amber-200',
  view: 'bg-slate-50 text-slate-600 ring-slate-200',
};

export default function AuditLog() {
  return (
    <div className='min-h-full bg-linear-to-br from-sky-100 via-white to-sky-100'>
      <div className='space-y-12 px-20 py-12'>
        {/* Header */}
        <div className='relative overflow-hidden rounded-3xl border border-sky-100 bg-linear-to-br from-blue-700 via-sky-600 to-blue-800 p-6 shadow-xl shadow-sky-900/20'>
          <div
            className='pointer-events-none absolute inset-0 opacity-[0.18]'
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <div className='pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-amber-400/30 blur-3xl' />
          <div className='pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl' />

          <div className='relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <div className='mb-2 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-white uppercase backdrop-blur'>
                <ShieldCheck className='h-3.5 w-3.5 text-amber-300' />
                Bảo mật & Tuân thủ
              </div>
              <h1 className='flex items-center gap-2.5 text-2xl font-black tracking-tight text-white sm:text-3xl'>
                <Activity className='h-6 w-6 text-amber-300' />
                Audit Log nghiệp vụ
              </h1>
              <p className='mt-1 text-sm text-sky-100/90'>
                Lịch sử hành động hệ thống — minh bạch & truy vết đầy đủ
              </p>
            </div>

            <div className='flex flex-wrap gap-4'>
              <button className='inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur transition duration-500 hover:scale-105 hover:bg-white/20'>
                <Filter className='h-3.5 w-3.5' />
                Lọc
              </button>
              <button className='inline-flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-amber-400 to-amber-500 px-3.5 py-2 text-xs font-bold text-blue-900 shadow-lg shadow-amber-500/30 transition duration-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/50'>
                <Download className='h-3.5 w-3.5' />
                Xuất CSV
              </button>
            </div>
          </div>

          {/* Search */}
          <div className='relative mt-5'>
            <Search className='pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400' />
            <input
              type='text'
              placeholder='Tìm theo người thực hiện, hành động, đối tượng...'
              className='w-full rounded-xl border border-white/20 bg-white/95 px-4 py-2.5 pl-10 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition outline-none focus:border-amber-300 focus:ring-4 focus:ring-amber-300/30'
            />
          </div>
        </div>

        {/* Table */}
        <div className='overflow-hidden rounded-3xl border border-sky-100 bg-white/80 shadow-xl shadow-sky-900/5 backdrop-blur-xl'>
          {/* Desktop table */}
          <div className='hidden overflow-x-auto md:block'>
            <table className='w-full text-sm'>
              <thead className='bg-linear-to-r from-sky-50 via-white to-amber-50'>
                <tr className='text-[11px] font-bold tracking-wider text-slate-500 uppercase'>
                  <th className='px-5 py-4 text-left'>Thời gian</th>
                  <th className='px-4 py-4 text-left'>Người thực hiện</th>
                  <th className='px-4 py-4 text-left'>Hành động</th>
                  <th className='px-4 py-4 text-left'>Đối tượng</th>
                  <th className='px-4 py-4 text-left'>IP</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-sky-50'>
                {MOCK_AUDIT_LOGS.map((log, i) => (
                  <tr
                    key={i}
                    className='group transition-colors hover:bg-linear-to-r hover:from-sky-50/60 hover:to-amber-50/40'
                  >
                    <td className='px-5 py-4 font-mono text-xs whitespace-nowrap text-slate-500'>
                      {log.time}
                    </td>
                    <td className='px-4 py-4'>
                      <div className='flex items-center gap-2.5'>
                        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-700 text-xs font-black text-white shadow-md shadow-sky-500/30'>
                          {log.actor.split(' ').slice(-1)[0][0]}
                        </div>
                        <div>
                          <p className='font-semibold text-slate-800'>{log.actor}</p>
                          <span className='text-[11px] font-semibold tracking-wider text-sky-600 uppercase'>
                            {log.role}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-4'>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ${
                          TYPE_STYLE[log.type ?? 'view']
                        }`}
                      >
                        {log.action}
                      </span>
                    </td>
                    <td className='px-4 py-4'>
                      <span className='rounded-lg border border-sky-100 bg-sky-50/70 px-2.5 py-1 font-mono text-xs font-semibold text-sky-700'>
                        {log.target}
                      </span>
                    </td>
                    <td className='px-4 py-4 font-mono text-xs text-slate-400 group-hover:text-slate-600'>
                      {log.ip}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className='divide-y divide-sky-50 md:hidden'>
            {MOCK_AUDIT_LOGS.map((log, i) => (
              <div key={i} className='space-y-3 p-4'>
                <div className='flex items-start justify-between gap-3'>
                  <div className='flex items-center gap-2.5'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-700 text-sm font-black text-white shadow-md shadow-sky-500/30'>
                      {log.actor.split(' ').slice(-1)[0][0]}
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-slate-800'>{log.actor}</p>
                      <span className='text-[10px] font-semibold tracking-wider text-sky-600 uppercase'>
                        {log.role}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ring-1 ${
                      TYPE_STYLE[log.type ?? 'view']
                    }`}
                  >
                    {log.action}
                  </span>
                </div>
                <div className='flex flex-wrap items-center gap-2 text-[11px]'>
                  <span className='rounded-lg border border-sky-100 bg-sky-50/70 px-2 py-0.5 font-mono font-semibold text-sky-700'>
                    {log.target}
                  </span>
                  <span className='font-mono text-slate-400'>{log.ip}</span>
                  <span className='ml-auto font-mono text-slate-500'>{log.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className='flex items-center justify-between border-t border-sky-100 bg-linear-to-r from-sky-50/50 to-amber-50/30 px-5 py-3 text-xs text-slate-500'>
            <span>
              Hiển thị <b className='text-slate-700'>{MOCK_AUDIT_LOGS.length}</b> bản ghi gần nhất
            </span>
            <div className='flex items-center gap-1.5'>
              <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-500' />
              <span className='font-semibold text-emerald-700'>Đang ghi nhận trực tiếp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
