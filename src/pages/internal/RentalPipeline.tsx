import {
  CheckCircle2,
  Eye,
  FileSignature,
  Inbox,
  MessagesSquare,
  Plus,
  Sparkles,
  User,
  UserCheck,
} from 'lucide-react';
import { MOCK_DEALS } from '../../mocks/data/internalMockData';
import type { PipelineStage } from '../../types/internal.ts';

const STAGES: {
  key: PipelineStage;
  label: string;
  border: string;
  header: string;
  badge: string;
  accent: string;
  icon: typeof Inbox;
}[] = [
  {
    key: 'lead',
    label: 'Lead',
    border: 'border-slate-200',
    header: 'from-slate-50 to-white',
    badge: 'bg-slate-100 text-slate-700',
    accent: 'from-slate-400 to-slate-600',
    icon: Inbox,
  },
  {
    key: 'viewing',
    label: 'Đang xem nhà',
    border: 'border-sky-200',
    header: 'from-sky-50 to-white',
    badge: 'bg-sky-100 text-sky-700',
    accent: 'from-sky-500 to-blue-700',
    icon: Eye,
  },
  {
    key: 'negotiating',
    label: 'Thương lượng',
    border: 'border-amber-200',
    header: 'from-amber-50 to-white',
    badge: 'bg-amber-100 text-amber-700',
    accent: 'from-amber-400 to-orange-500',
    icon: MessagesSquare,
  },
  {
    key: 'pending_contract',
    label: 'Chờ ký HĐ',
    border: 'border-violet-200',
    header: 'from-violet-50 to-white',
    badge: 'bg-violet-100 text-violet-700',
    accent: 'from-violet-500 to-purple-700',
    icon: FileSignature,
  },
  {
    key: 'signed',
    label: 'Đã ký HĐ',
    border: 'border-emerald-200',
    header: 'from-emerald-50 to-white',
    badge: 'bg-emerald-100 text-emerald-700',
    accent: 'from-emerald-500 to-teal-700',
    icon: CheckCircle2,
  },
];

export default function RentalPipeline() {
  const totalValue = MOCK_DEALS.reduce((s, d) => s + d.price, 0);

  return (
    <div className='relative space-y-16 p-20'>
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
            Quản lý giao dịch
          </span>
          <h1 className='mt-2 bg-linear-to-r from-sky-700 via-blue-700 to-amber-500 bg-clip-text text-2xl font-bold text-transparent'>
            Pipeline giao dịch thuê
          </h1>
          <p className='mt-0.5 text-sm text-slate-500'>
            <span className='font-semibold text-slate-700'>{MOCK_DEALS.length}</span> deals đang
            theo dõi · Tổng giá trị{' '}
            <span className='font-semibold text-sky-700'>
              {(totalValue / 1_000_000).toFixed(0)}M đ
            </span>
          </p>
        </div>
        <button className='group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-sky-600 to-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/40'>
          <Plus className='h-4 w-4 transition-transform group-hover:rotate-90' />
          Thêm deal
        </button>
      </div>

      {/* Board */}
      <div className='flex gap-4 overflow-x-auto pb-3'>
        {STAGES.map((stage) => {
          const deals = MOCK_DEALS.filter((d) => d.stage === stage.key);
          const stageValue = deals.reduce((s, d) => s + d.price, 0);
          const Icon = stage.icon;
          return (
            <div
              key={stage.key}
              className={`flex w-72 shrink-0 flex-col overflow-hidden rounded-3xl border ${stage.border} bg-white/80 shadow-lg shadow-sky-500/5 backdrop-blur`}
            >
              {/* Column accent */}
              <div className={`h-1 bg-linear-to-r ${stage.accent}`} />

              {/* Column header */}
              <div className={`bg-linear-to-b ${stage.header} px-4 py-3.5`}>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br ${stage.accent} text-white shadow-sm`}
                    >
                      <Icon className='h-3.5 w-3.5' />
                    </div>
                    <p className='text-xs font-bold tracking-wider text-slate-600 uppercase'>
                      {stage.label}
                    </p>
                  </div>
                  <span
                    className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-xs font-bold ${stage.badge}`}
                  >
                    {deals.length}
                  </span>
                </div>
                {stageValue > 0 && (
                  <p className='mt-1.5 text-xs text-slate-500'>
                    Giá trị:{' '}
                    <span className='font-bold text-slate-700'>
                      {(stageValue / 1_000_000).toFixed(0)}M đ
                    </span>
                  </p>
                )}
              </div>

              {/* Cards */}
              <div className='flex min-h-64 flex-1 flex-col gap-2.5 p-3'>
                {deals.map((d) => (
                  <div
                    key={d.id}
                    className='group cursor-pointer rounded-2xl border border-sky-100 bg-white p-3 text-sm shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md hover:shadow-sky-500/10'
                  >
                    <p className='line-clamp-2 leading-snug font-semibold text-slate-800 group-hover:text-sky-700'>
                      {d.propertyTitle}
                    </p>
                    <p className='mt-1 inline-block rounded border border-sky-100 bg-sky-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-sky-700'>
                      {d.propertyCode}
                    </p>
                    <div className='mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2'>
                      <span className='inline-flex items-center gap-1 text-xs text-slate-500'>
                        <User className='h-3 w-3 text-slate-400' />
                        {d.clientName}
                      </span>
                      <span className='bg-linear-to-r from-sky-700 to-blue-700 bg-clip-text text-xs font-bold text-transparent'>
                        {(d.price / 1_000_000).toFixed(0)}M
                      </span>
                    </div>
                    <p className='mt-1 inline-flex items-center gap-1 text-[11px] text-slate-400'>
                      <UserCheck className='h-3 w-3' />
                      {d.brokerName}
                    </p>
                  </div>
                ))}
                {deals.length === 0 && (
                  <div className='flex flex-1 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-200 py-6 text-center'>
                    <Inbox className='h-6 w-6 text-slate-300' />
                    <p className='text-xs text-slate-400'>Chưa có deal</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
