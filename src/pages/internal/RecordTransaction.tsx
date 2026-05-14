import { useState } from 'react';
import {
  CalendarCheck,
  CalendarDays,
  FileSignature,
  Hash,
  Phone,
  Send,
  StickyNote,
  User,
  Wallet,
  X,
} from 'lucide-react';

type Form = {
  propertyCode: string;
  clientName: string;
  clientPhone: string;
  price: string;
  startDate: string;
  endDate: string;
  note: string;
};

type Field = {
  label: string;
  key: keyof Omit<Form, 'note'>;
  placeholder?: string;
  icon: typeof Hash;
  type?: string;
};

export default function RecordTransaction() {
  const [form, setForm] = useState<Form>({
    propertyCode: '',
    clientName: '',
    clientPhone: '',
    price: '',
    startDate: '',
    endDate: '',
    note: '',
  });

  const fields: Field[] = [
    { label: 'Mã BĐS', key: 'propertyCode', placeholder: 'BDS-2025-001', icon: Hash },
    { label: 'Tên khách thuê', key: 'clientName', placeholder: 'Nguyễn Văn A', icon: User },
    { label: 'SĐT khách thuê', key: 'clientPhone', placeholder: '0901234567', icon: Phone },
    { label: 'Giá thuê thực tế (VND/tháng)', key: 'price', placeholder: '18000000', icon: Wallet },
    { label: 'Ngày bắt đầu thuê', key: 'startDate', placeholder: '2025-06-01', icon: CalendarDays },
    { label: 'Ngày kết thúc HĐ', key: 'endDate', placeholder: '2026-06-01', icon: CalendarCheck },
  ];

  return (
    <div className='sm:10 relative ml-5 max-w-2xl space-y-10 py-6 md:ml-20 lg:ml-40 xl:ml-70'>
      {/* Ambient blobs */}
      <div className='pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl' />
      <div className='pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl' />

      {/* Header */}
      <div className='relative'>
        <div className='mb-2 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-semibold text-sky-700 backdrop-blur'>
          <FileSignature className='h-3.5 w-3.5' />
          Ghi nhận hợp đồng
        </div>
        <h1 className='text-2xl font-black tracking-tight text-slate-900 sm:text-3xl'>
          Giao dịch{' '}
          <em className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-transparent not-italic'>
            thuê thành công
          </em>
        </h1>
        <p className='mt-1 text-sm text-slate-500'>
          Điền thông tin để ghi nhận và gửi duyệt quản lý
        </p>
      </div>

      {/* Form card */}
      <div className='relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-sm backdrop-blur'>
        <div className='absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-600 via-blue-700 to-amber-500' />

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
          {fields.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.key} className={f.key === 'price' ? 'sm:col-span-2' : ''}>
                <label className='mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700'>
                  <Icon className='h-3.5 w-3.5 text-sky-600' />
                  {f.label}
                </label>
                <div className='group relative'>
                  <input
                    type='text'
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        [f.key]: e.target.value,
                      }))
                    }
                    className='w-full rounded-xl border border-sky-100 bg-white/70 px-4 py-3 text-sm text-slate-800 backdrop-blur transition-all outline-none placeholder:text-slate-400 hover:border-sky-200 focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-400/20'
                  />
                </div>
              </div>
            );
          })}

          {/* NOTE FIELD */}
          <div className='sm:col-span-2'>
            <label className='mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700'>
              <StickyNote className='h-3.5 w-3.5 text-amber-500' />
              Ghi chú
            </label>
            <textarea
              rows={3}
              placeholder='Ghi chú thêm...'
              value={form.note}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  note: e.target.value,
                }))
              }
              className='w-full resize-none rounded-xl border border-sky-100 bg-white/70 px-4 py-3 text-sm text-slate-800 backdrop-blur transition-all outline-none placeholder:text-slate-400 hover:border-sky-200 focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-400/20'
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className='mt-6 flex flex-wrap justify-between border-t border-sky-100 pt-5'>
          <button className='inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-linear-to-br from-sky-600 to-blue-700 px-6 py-2.5 text-sm font-bold text-white shadow-sm shadow-sky-600/25 transition-all duration-500 hover:-translate-y-0.5 hover:scale-105 hover:shadow-md hover:shadow-sky-600/30'>
            <Send className='h-4 w-4' />
            Gửi ghi nhận
          </button>
          <button className='inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-6 py-2.5 text-sm font-bold text-rose-600 transition-colors duration-500 hover:scale-105 hover:bg-rose-100'>
            <X className='h-4 w-4' />
            Huỷ
          </button>
        </div>
      </div>
    </div>
  );
}
