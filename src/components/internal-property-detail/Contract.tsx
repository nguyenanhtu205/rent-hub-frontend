import { AlertTriangle, CheckCircle2, Clock, Download, FileText } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import type { InternalProperty } from '../../types/internal';
import { Navigate } from 'react-router-dom';

export default function Contract({ property }: { property: InternalProperty }) {
  const user = useAuthStore((state) => state.user);

  if (!user) return <Navigate to='/login' replace />;

  return (
    <div className='max-w-full space-y-8 px-40 py-6'>
      <div className='relative space-y-4 overflow-hidden rounded-2xl border border-sky-100 bg-white/70 p-5 backdrop-blur-sm'>
        <div className='absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-400 via-blue-500 to-sky-400' />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className='inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-700 text-white shadow-sm shadow-sky-200'>
              <FileText className='h-4 w-4' />
            </span>
            <h3 className='text-sm font-bold text-slate-800'>Hợp đồng ký gửi</h3>
          </div>
          <span className='inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-700 ring-1 ring-amber-200'>
            <Clock className='h-3 w-3' />
            Chờ ký
          </span>
        </div>
        {[
          { label: 'Số HĐ', value: 'HDKG-2025-001' },
          { label: 'Ngày lập', value: '2025-05-07' },
          { label: 'Thời hạn ký gửi', value: '12 tháng' },
          { label: 'Phí ký gửi', value: '1 tháng tiền thuê' },
          {
            label: 'Điều khoản phát sinh',
            value: property.hasLegalFlag ? 'Có — đang chờ pháp lý duyệt' : 'Không',
          },
        ].map(({ label, value }) => (
          <div
            key={label}
            className='flex justify-between border-b border-sky-50 pb-2 text-sm last:border-0'
          >
            <span className='text-slate-500'>{label}</span>
            <span
              className={`font-semibold ${label === 'Điều khoản phát sinh' && property.hasLegalFlag ? 'text-rose-600' : 'text-slate-800'}`}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
      {property.hasLegalFlag && (
        <div className='flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50/70 p-4 text-sm text-rose-700 backdrop-blur-sm'>
          <AlertTriangle className='mt-0.5 h-4 w-4 shrink-0' />
          <span>
            Hợp đồng đang có điều khoản ngoài mẫu chuẩn. Đang chờ bộ phận pháp lý xem xét và phê
            duyệt.
          </span>
        </div>
      )}
      <div className='flex flex-wrap justify-center gap-4'>
        <button className='inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-linear-to-r from-sky-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition-all duration-500 hover:scale-105 hover:shadow-md hover:shadow-sky-300'>
          <Download className='h-4 w-4' />
          Tải hợp đồng PDF
        </button>
        {(user.role === 'legal' || user.role === 'manager') && (
          <button className='inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-linear-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-200 transition-all duration-500 hover:scale-105 hover:shadow-md hover:shadow-emerald-300'>
            <CheckCircle2 className='h-4 w-4' />
            Phê duyệt
          </button>
        )}
      </div>
    </div>
  );
}
