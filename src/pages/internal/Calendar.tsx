import { useState } from 'react';
import { Calendar as CalendarIcon, Check, Clock, Eye, MapPin, Phone, User, X } from 'lucide-react';
import { MOCK_APPOINTMENTS } from '../../mocks/data/internalMockData';

const APPT_STATUS_STYLE: Record<string, string> = {
  pending: 'bg-amber-50 text-amber-700 border-amber-200',
  confirmed: 'bg-sky-50 text-sky-700 border-sky-200',
  completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  cancelled: 'bg-rose-50 text-rose-700 border-rose-200',
};

const APPT_STATUS_LABEL: Record<string, string> = {
  pending: 'Chờ xác nhận',
  confirmed: 'Đã xác nhận',
  completed: 'Đã xem',
  cancelled: 'Huỷ',
};

const APPT_ACCENT: Record<string, string> = {
  pending: 'from-amber-400 to-orange-500',
  confirmed: 'from-sky-500 to-blue-700',
  completed: 'from-emerald-400 to-emerald-600',
  cancelled: 'from-rose-400 to-rose-600',
};

export default function Calendar() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed'>('all');
  const visible = MOCK_APPOINTMENTS.filter((a) => filter === 'all' || a.status === filter);

  const counts = {
    all: MOCK_APPOINTMENTS.length,
    pending: MOCK_APPOINTMENTS.filter((a) => a.status === 'pending').length,
    confirmed: MOCK_APPOINTMENTS.filter((a) => a.status === 'confirmed').length,
    completed: MOCK_APPOINTMENTS.filter((a) => a.status === 'completed').length,
  };

  return (
    <div className='min-h-full bg-linear-to-br from-sky-100 via-white to-sky-100 px-10 py-4'>
      <div className='relative space-y-10'>
        {/* Header */}
        <div className='relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <div className='mb-2 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-semibold text-sky-700 backdrop-blur'>
              <CalendarIcon className='h-3.5 w-3.5' />
              Lịch làm việc
            </div>
            <h1 className='text-2xl font-black tracking-tight text-slate-900 sm:text-3xl'>
              Lịch hẹn{' '}
              <em className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-transparent not-italic'>
                xem nhà
              </em>
            </h1>
            <p className='mt-1 text-sm text-slate-500'>
              {MOCK_APPOINTMENTS.length} lịch hẹn · {counts.pending} đang chờ xác nhận
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className='relative flex flex-wrap gap-2 rounded-2xl border border-sky-100 bg-white/70 p-2 backdrop-blur'>
          {(['all', 'pending', 'confirmed', 'completed'] as const).map((s) => {
            const active = filter === s;
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                  active
                    ? 'bg-linear-to-br from-sky-600 to-blue-700 text-white shadow-md shadow-sky-600/25'
                    : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'
                }`}
              >
                {s === 'all' ? 'Tất cả' : APPT_STATUS_LABEL[s]}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                    active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {counts[s]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        {visible.length === 0 ? (
          <div className='relative rounded-2xl border border-dashed border-sky-200 bg-white/60 py-16 text-center backdrop-blur'>
            <CalendarIcon className='mx-auto h-10 w-10 text-slate-300' />
            <p className='mt-3 text-sm font-medium text-slate-500'>Không có lịch hẹn nào</p>
          </div>
        ) : (
          <div className='relative grid grid-cols-1 gap-6 md:grid-cols-2'>
            {visible.map((a) => (
              <div
                key={a.id}
                className='group relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50'
              >
                {/* Accent strip */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${APPT_ACCENT[a.status]}`}
                />

                <div className='mb-4 flex items-start justify-between gap-3'>
                  <div className='min-w-0'>
                    <p className='truncate font-bold text-slate-900'>{a.clientName}</p>
                    <p className='mt-1 inline-flex items-center gap-1.5 text-xs text-slate-500'>
                      <Phone className='h-3 w-3' />
                      {a.clientPhone}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-bold ${APPT_STATUS_STYLE[a.status]}`}
                  >
                    {APPT_STATUS_LABEL[a.status]}
                  </span>
                </div>

                <div className='space-y-2 text-sm text-slate-600'>
                  <p className='flex items-start gap-2'>
                    <MapPin className='mt-0.5 h-4 w-4 shrink-0 text-sky-600' />
                    <span className='min-w-0'>
                      <span className='line-clamp-1'>{a.propertyTitle}</span>
                      <span className='font-mono text-xs text-slate-400'>{a.propertyCode}</span>
                    </span>
                  </p>
                  <p className='flex items-center gap-2'>
                    <Clock className='h-4 w-4 shrink-0 text-amber-500' />
                    <span className='font-medium text-slate-700'>{a.date}</span>
                    <span className='text-slate-400'>·</span>
                    <span>{a.time}</span>
                  </p>
                  <p className='flex items-center gap-2'>
                    <User className='h-4 w-4 shrink-0 text-slate-400' />
                    Môi giới: <span className='font-medium text-slate-700'>{a.brokerName}</span>
                  </p>
                  {a.notes && (
                    <p className='mt-2 rounded-lg border border-slate-100 bg-slate-50/60 px-3 py-2 text-xs text-slate-500 italic'>
                      "{a.notes}"
                    </p>
                  )}
                </div>

                {a.status === 'pending' && (
                  <div className='mt-4 flex gap-6'>
                    <button className='inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-linear-to-br from-sky-600 to-blue-700 py-2 text-xs font-bold text-white shadow-sm shadow-sky-600/25 transition-all duration-500 hover:scale-105 hover:shadow-md'>
                      <Check className='h-3.5 w-3.5' />
                      Xác nhận
                    </button>
                    <button className='inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 py-2 text-xs font-bold text-rose-600 transition-colors duration-500 hover:scale-105 hover:bg-rose-100'>
                      <X className='h-3.5 w-3.5' />
                      Huỷ
                    </button>
                  </div>
                )}
                {a.status === 'confirmed' && (
                  <button className='mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 py-2 text-xs font-bold text-emerald-700 transition-colors duration-500 hover:scale-105 hover:bg-emerald-100'>
                    <Eye className='h-3.5 w-3.5' />
                    Đánh dấu đã xem
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
