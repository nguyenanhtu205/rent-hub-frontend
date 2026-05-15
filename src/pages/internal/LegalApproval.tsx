import { useState } from 'react';
import {
  AlertTriangle,
  Check,
  Edit3,
  FileText,
  Scale,
  ScrollText,
  Sparkles,
  X,
} from 'lucide-react';
import { MOCK_INT_PROPERTIES } from '../../mocks/data/internalMockData';

export default function LegalApproval() {
  const queue = MOCK_INT_PROPERTIES.filter((p) => p.status === 'pending_legal' || p.hasLegalFlag);
  const [notes, setNotes] = useState<Record<string, string>>({});

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
            Bộ phận pháp lý
          </span>
          <h1 className='mt-2 bg-linear-to-r from-sky-700 via-blue-700 to-amber-500 bg-clip-text text-2xl font-bold text-transparent'>
            Phê duyệt pháp lý
          </h1>
          <p className='mt-0.5 text-sm text-slate-500'>
            <span className='font-semibold text-slate-700'>{queue.length}</span> hợp đồng chờ xem
            xét
          </p>
        </div>
        <div className='inline-flex items-center gap-2 rounded-2xl border border-sky-100 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur'>
          <Scale className='h-5 w-5 text-sky-600' />
          <div className='text-xs'>
            <p className='font-bold text-slate-700'>Hàng đợi xét duyệt</p>
            <p className='text-slate-400'>Sắp xếp theo mức ưu tiên</p>
          </div>
        </div>
      </div>

      {/* Queue */}
      {queue.length === 0 ? (
        <div className='rounded-3xl border border-sky-100 bg-white/80 px-6 py-16 text-center shadow-lg shadow-sky-500/5 backdrop-blur'>
          <div className='mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 ring-4 ring-emerald-100'>
            <Check className='h-6 w-6 text-emerald-600' />
          </div>
          <h3 className='mb-1 text-lg font-bold text-slate-900'>Tất cả đã được xử lý</h3>
          <p className='text-sm text-slate-500'>Không có hợp đồng nào đang chờ phê duyệt.</p>
        </div>
      ) : (
        <div className='space-y-5'>
          {queue.map((p) => (
            <div
              key={p.id}
              className='group relative overflow-hidden rounded-3xl border border-sky-100 bg-white/80 shadow-lg shadow-sky-500/5 backdrop-blur transition-all hover:shadow-xl hover:shadow-sky-500/10'
            >
              {/* Side accent */}
              <div className='absolute top-0 bottom-0 left-0 w-1 bg-linear-to-b from-sky-500 via-blue-600 to-amber-400' />

              <div className='space-y-4 p-6 pl-7'>
                {/* Title row */}
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex items-start gap-3'>
                    <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 to-blue-700 text-white shadow-md ring-1 ring-sky-100'>
                      <FileText className='h-5 w-5' />
                    </div>
                    <div>
                      <p className='font-bold text-slate-800'>{p.title}</p>
                      <p className='mt-0.5 inline-block rounded-md border border-sky-100 bg-sky-50 px-2 py-0.5 font-mono text-xs font-semibold text-sky-700'>
                        {p.code}
                      </p>
                      <div className='mt-2.5 flex flex-wrap gap-2'>
                        {p.status === 'pending_legal' && (
                          <span className='inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-700'>
                            <ScrollText className='h-3 w-3' />
                            Chờ pháp lý
                          </span>
                        )}
                        {p.hasLegalFlag && (
                          <span className='inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-700'>
                            <AlertTriangle className='h-3 w-3' />
                            Điều khoản phát sinh
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Warning */}
                <div className='flex gap-3 rounded-2xl border border-rose-100 bg-linear-to-r from-rose-50 to-amber-50/50 p-4 text-sm'>
                  <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600'>
                    <AlertTriangle className='h-4 w-4' />
                  </div>
                  <div>
                    <p className='font-bold text-rose-700'>Cảnh báo</p>
                    <p className='text-rose-700/90'>
                      Hợp đồng có điều khoản ngoài mẫu chuẩn. Cần xem xét trước khi phê duyệt.
                    </p>
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label className='mb-1.5 block text-sm font-semibold text-slate-700'>
                    Ghi chú pháp lý
                  </label>
                  <textarea
                    rows={2}
                    placeholder='Nhập ý kiến hoặc yêu cầu chỉnh sửa...'
                    value={notes[p.id] ?? ''}
                    onChange={(e) => setNotes((prev) => ({ ...prev, [p.id]: e.target.value }))}
                    className='w-full resize-none rounded-2xl border border-sky-100 bg-white/70 px-4 py-3 text-sm text-slate-700 transition-all outline-none placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100'
                  />
                </div>

                {/* Actions */}
                <div className='flex flex-wrap gap-2'>
                  <button className='inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-emerald-500/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/40'>
                    <Check className='h-4 w-4' />
                    Phê duyệt
                  </button>
                  <button className='inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-bold text-rose-700 transition-all duration-500 hover:scale-105 hover:border-rose-300 hover:bg-rose-100'>
                    <X className='h-4 w-4' />
                    Từ chối
                  </button>
                  <button className='inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 transition-all duration-500 hover:scale-105 hover:border-amber-300 hover:bg-amber-100'>
                    <Edit3 className='h-4 w-4' />
                    Yêu cầu chỉnh sửa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
