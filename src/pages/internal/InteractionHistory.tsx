import { Phone, Plus, Sparkles, User } from 'lucide-react';
import {
  INTERACTIONS,
  TYPE_COLOR,
  TYPE_DOT,
  TYPE_ICON,
} from '../../constants/InteractionHistoryConstant';

export default function InteractionHistory() {
  return (
    <div className='relative space-y-10 p-20'>
      {/* Ambient background */}
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl' />
        <div className='absolute top-40 -right-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl' />
      </div>

      {/* Header */}
      <div className='flex flex-wrap items-center justify-between gap-3'>
        <div>
          <span className='inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm backdrop-blur'>
            <Sparkles className='h-3.5 w-3.5' />
            Hoạt động gần đây
          </span>
          <h1 className='mt-2 bg-linear-to-r from-sky-700 via-blue-700 to-amber-500 bg-clip-text text-2xl font-bold text-transparent'>
            Lịch sử tương tác
          </h1>
          <p className='mt-0.5 text-sm text-slate-500'>
            {INTERACTIONS.length} tương tác gần đây với khách hàng
          </p>
        </div>
        <button className='group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-sky-600 to-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/40'>
          <Plus className='h-4 w-4 transition-transform group-hover:rotate-90' />
          Ghi tương tác
        </button>
      </div>

      {/* Timeline */}
      <div className='overflow-hidden rounded-3xl border border-sky-100 bg-white/80 shadow-lg shadow-sky-500/5 backdrop-blur'>
        <div className='border-b border-sky-100 bg-linear-to-r from-sky-50/60 to-transparent px-5 py-3.5'>
          <h3 className='text-sm font-bold text-slate-800'>Dòng thời gian</h3>
        </div>
        <div className='relative px-5 py-4'>
          {/* Vertical line */}
          <div className='absolute top-6 bottom-6 left-13 w-px bg-linear-to-b from-sky-200 via-sky-100 to-transparent' />

          <div className='space-y-1'>
            {INTERACTIONS.map((item, i) => {
              const Icon = TYPE_ICON[item.type] ?? Phone;
              return (
                <div
                  key={i}
                  className='group relative flex gap-4 rounded-2xl px-2 py-3 transition-colors hover:bg-sky-50/40'
                >
                  {/* Date */}
                  <div className='flex w-12 shrink-0 flex-col items-center gap-0.5 text-center'>
                    <p className='bg-linear-to-br from-sky-700 to-blue-700 bg-clip-text text-2xl leading-none font-bold text-transparent'>
                      {item.date.split('-')[2]}
                    </p>
                    <p className='text-[10px] font-semibold tracking-wide text-slate-400 uppercase'>
                      Th{item.date.split('-')[1]}
                    </p>
                  </div>

                  {/* Icon dot on timeline */}
                  <div
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full bg-linear-to-br ${TYPE_DOT[item.type] ?? 'from-slate-400 to-slate-600'} text-white shadow-md ring-4 ring-white`}
                  >
                    <Icon className='h-4 w-4' />
                  </div>

                  {/* Content */}
                  <div className='flex-1 pt-1'>
                    <div className='mb-1.5 flex flex-wrap items-center gap-2'>
                      <span className='font-semibold text-slate-800'>{item.client}</span>
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-bold ${TYPE_COLOR[item.type] ?? 'border-slate-200 bg-slate-50 text-slate-500'}`}
                      >
                        {item.type}
                      </span>
                      <span className='inline-flex items-center gap-1 text-xs text-slate-400'>
                        <User className='h-3 w-3' />
                        {item.broker}
                      </span>
                    </div>
                    <p className='text-sm leading-relaxed text-slate-600'>{item.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
