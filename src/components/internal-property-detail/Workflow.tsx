import { WORKFLOW_STEPS } from '../../constants/InternalPropertyDetailConstant';
import { useState } from 'react';
import { useAuthStore } from '../../stores/authStore';

export default function Workflow() {
  const user = useAuthStore((s) => s.user);
  const [note, setNote] = useState('');

  return (
    <div className='relative max-w-full'>
      {/* Ambient blobs */}
      <div className='pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl' />
      <div className='pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl' />

      <div className='relative rounded-2xl border border-sky-100 bg-white/70 p-6 backdrop-blur'>
        {WORKFLOW_STEPS.map((step, i) => {
          const currentIdx = WORKFLOW_STEPS.findIndex((s) => !s.done);
          const isCurrent = !step.done && i === currentIdx;
          return (
            <div key={step.id} className='flex gap-4 pb-8 last:pb-0'>
              {/* Line */}
              <div className='flex flex-col items-center'>
                <div
                  className={`z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm transition-all ${
                    step.done
                      ? 'bg-linear-to-br from-emerald-500 to-emerald-600 text-white shadow-emerald-500/25'
                      : isCurrent
                        ? 'bg-linear-to-br from-sky-600 to-blue-700 text-white ring-4 shadow-sky-600/25 ring-sky-100'
                        : 'border border-sky-100 bg-white/80 text-slate-400 backdrop-blur'
                  }`}
                >
                  {step.done ? (
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='3'
                    >
                      <polyline points='20 6 9 17 4 12' />
                    </svg>
                  ) : (
                    <span className='text-xs font-bold'>{i + 1}</span>
                  )}
                </div>
                {i < WORKFLOW_STEPS.length - 1 && (
                  <div
                    className={`mt-1 w-0.5 flex-1 ${
                      step.done ? 'bg-linear-to-b from-emerald-300 to-emerald-200' : 'bg-slate-200'
                    }`}
                  />
                )}
              </div>
              <div className='flex-1 pt-1.5'>
                <div className='flex items-center justify-between gap-2'>
                  <p
                    className={`text-sm font-bold ${
                      step.done
                        ? 'text-slate-800'
                        : isCurrent
                          ? 'bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-transparent'
                          : 'text-slate-400'
                    }`}
                  >
                    {step.label}
                  </p>
                  <div className='flex shrink-0 items-center gap-2'>
                    {step.date && (
                      <span className='font-mono text-xs text-slate-400'>{step.date}</span>
                    )}
                    {isCurrent && (
                      <span className='rounded-full border border-sky-200 bg-white/70 px-2 py-0.5 text-xs font-bold text-sky-700 backdrop-blur'>
                        Hiện tại
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action note */}
      {(user.role === 'valuator' || user.role === 'legal' || user.role === 'manager') && (
        <div className='relative mt-6 space-y-3 rounded-2xl border border-sky-100 bg-white/70 p-5 backdrop-blur'>
          <label className='block text-sm font-bold text-slate-900'>Ghi chú xử lý</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder='Nhập ghi chú hoặc lý do...'
            className='w-full resize-none rounded-xl border border-sky-100 bg-white/80 px-4 py-3 text-sm text-slate-700 backdrop-blur transition-all outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20'
          />
          <div className='flex gap-8'>
            <button className='inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-linear-to-br from-sky-600 to-blue-700 px-4 py-2 text-sm font-bold text-white shadow-sm shadow-sky-600/25 transition-all duration-500 hover:scale-105 hover:shadow-md'>
              Duyệt bước tiếp theo
            </button>
            <button className='inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-bold text-rose-600 transition-colors duration-500 hover:scale-105 hover:bg-rose-100'>
              Từ chối / Trả về
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
