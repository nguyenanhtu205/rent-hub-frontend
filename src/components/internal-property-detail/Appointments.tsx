import { CalendarDays, CheckCircle2, Clock, Phone, Plus, User, XCircle } from 'lucide-react';
import type { Appointment } from '../../types/internal';

export default function Appointments({ appts }: { appts: Appointment[] }) {
  return (
    <div className='space-y-3'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-700 text-white shadow-sm shadow-sky-200'>
            <CalendarDays className='h-4 w-4' />
          </span>
          <h3 className='text-sm font-bold text-slate-800'>
            <span className='bg-linear-to-r from-sky-700 to-blue-800 bg-clip-text text-transparent'>
              {appts.length}
            </span>{' '}
            lịch hẹn
          </h3>
        </div>
        <button className='inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-linear-to-r from-sky-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-sky-200 transition-all duration-500 hover:scale-105 hover:shadow-md hover:shadow-sky-300'>
          <Plus className='h-3.5 w-3.5' />
          Thêm lịch
        </button>
      </div>
      {appts.length === 0 && (
        <div className='rounded-2xl border border-dashed border-sky-200 bg-sky-50/40 py-10 text-center text-sm text-slate-400'>
          Chưa có lịch hẹn nào.
        </div>
      )}
      {appts.map((a) => (
        <div
          key={a.id}
          className='group flex items-start gap-4 rounded-2xl border border-sky-100 bg-white/70 p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md hover:shadow-sky-100'
        >
          <div className='flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-linear-to-br from-sky-50 to-blue-100 text-blue-700 ring-1 ring-sky-200'>
            <span className='text-xl leading-none font-bold'>{a.date.split('-')[2]}</span>
            <span className='mt-0.5 text-[10px] font-bold tracking-wide'>
              {
                ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'][
                  +a.date.split('-')[1] - 1
                ]
              }
            </span>
          </div>
          <div className='flex-1'>
            <div className='flex items-center justify-between gap-2'>
              <p className='font-semibold text-slate-800'>{a.clientName}</p>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold ring-1 ${
                  a.status === 'confirmed'
                    ? 'bg-sky-100 text-sky-700 ring-sky-200'
                    : a.status === 'completed'
                      ? 'bg-emerald-100 text-emerald-700 ring-emerald-200'
                      : a.status === 'cancelled'
                        ? 'bg-rose-100 text-rose-700 ring-rose-200'
                        : 'bg-amber-100 text-amber-700 ring-amber-200'
                }`}
              >
                {a.status === 'confirmed'
                  ? 'Đã xác nhận'
                  : a.status === 'completed'
                    ? 'Đã xem'
                    : a.status === 'cancelled'
                      ? 'Huỷ'
                      : 'Chờ xác nhận'}
              </span>
            </div>
            <p className='mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500'>
              <span className='inline-flex items-center gap-1'>
                <Phone className='h-3 w-3 text-sky-500' />
                {a.clientPhone}
              </span>
              <span className='text-slate-300'>·</span>
              <span className='inline-flex items-center gap-1'>
                <Clock className='h-3 w-3 text-sky-500' />
                {a.time}
              </span>
              <span className='text-slate-300'>·</span>
              <span className='inline-flex items-center gap-1'>
                <User className='h-3 w-3 text-sky-500' />
                {a.brokerName}
              </span>
            </p>
            {a.notes && (
              <p className='mt-1.5 rounded-lg bg-sky-50/60 px-2.5 py-1.5 text-xs text-slate-600 italic ring-1 ring-sky-100'>
                {a.notes}
              </p>
            )}
            {a.status === 'pending' && (
              <div className='mt-2.5 flex gap-4'>
                <button className='inline-flex cursor-pointer items-center gap-1 rounded-lg bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-700 ring-1 ring-sky-200 transition-colors duration-500 hover:scale-105 hover:bg-sky-100'>
                  <CheckCircle2 className='h-3.5 w-3.5' />
                  Xác nhận
                </button>
                <button className='inline-flex cursor-pointer items-center gap-1 rounded-lg bg-rose-50 px-4 py-2 text-xs font-semibold text-rose-600 ring-1 ring-rose-200 transition-colors duration-500 hover:scale-105 hover:bg-rose-100'>
                  <XCircle className='h-3.5 w-3.5' />
                  Huỷ
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
