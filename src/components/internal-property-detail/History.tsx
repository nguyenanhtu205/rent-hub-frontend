import { MOCK_HISTORY } from '../../constants/InternalPropertyDetailConstant';
import { Clock } from 'lucide-react';

export default function History() {
  return (
    <div className='space-y-2'>
      {MOCK_HISTORY.map((h, i) => (
        <div key={i} className='flex gap-4 pb-6'>
          <div className='flex flex-col items-center'>
            <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-blue-700 text-xs font-bold text-white shadow-sm ring-2 shadow-sky-200 ring-white'>
              {h.actor
                .split(' ')
                .map((w) => w[0])
                .slice(-2)
                .join('')}
            </div>
            {i < MOCK_HISTORY.length - 1 && (
              <div className='mt-1 w-0.5 flex-1 bg-linear-to-b from-sky-200 to-transparent' />
            )}
          </div>
          <div className='flex-1 pt-1'>
            <div className='mb-1.5 flex flex-wrap items-center gap-2'>
              <span className='text-sm font-semibold text-slate-800'>{h.actor}</span>
              <span className='rounded-full bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-700 ring-1 ring-sky-200'>
                {h.role}
              </span>
              <span className='ml-auto inline-flex items-center gap-1 text-xs text-slate-400'>
                <Clock className='h-3 w-3' />
                {h.date}
              </span>
            </div>
            <p className='rounded-xl border border-sky-100 bg-white/70 px-3 py-2 text-sm text-slate-600 backdrop-blur-sm'>
              {h.action}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
