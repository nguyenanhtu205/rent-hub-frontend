import { ArrowRight, Wallet } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import type { DepositRecord } from '../../types/internal';
import { Navigate } from 'react-router-dom';

export default function Finance({ deposit }: { deposit: DepositRecord | undefined }) {
  const user = useAuthStore((state) => state.user);

  if (!user) return <Navigate to='/login' replace />;

  return (
    <div className='max-w-full space-y-5 px-40'>
      {deposit ? (
        <div className='relative space-y-4 overflow-hidden rounded-2xl border border-sky-100 bg-white/70 p-5 backdrop-blur-sm'>
          <div className='absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-400 via-blue-500 to-sky-400' />
          <div className='flex items-center gap-2'>
            <span className='inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-700 text-white shadow-sm shadow-sky-200'>
              <Wallet className='h-4 w-4' />
            </span>
            <h3 className='text-sm font-bold text-slate-800'>Tiền đảm bảo</h3>
          </div>
          {[
            { label: 'Số tiền', value: `${deposit.amount.toLocaleString('vi-VN')}đ` },
            {
              label: 'Trạng thái',
              value:
                deposit.status === 'held'
                  ? '✅ Đang giữ'
                  : deposit.status === 'pending_refund'
                    ? '⏳ Chờ hoàn trả'
                    : deposit.status === 'refunded'
                      ? '↩ Đã hoàn trả'
                      : '✂️ Đã khấu trừ',
            },
            { label: 'Ngày nhận', value: deposit.receivedAt },
            ...(deposit.deductAmount
              ? [
                  {
                    label: 'Khấu trừ',
                    value: `${deposit.deductAmount.toLocaleString('vi-VN')}đ — ${deposit.deductReason}`,
                  },
                ]
              : []),
          ].map(({ label, value }) => (
            <div
              key={label}
              className='flex justify-between border-b border-sky-50 pb-2 text-sm last:border-0'
            >
              <span className='text-slate-500'>{label}</span>
              <span
                className={`font-semibold ${label === 'Số tiền' ? 'bg-linear-to-r from-sky-700 to-blue-800 bg-clip-text text-transparent' : 'text-slate-800'}`}
              >
                {value}
              </span>
            </div>
          ))}
          {(user.role === 'accountant' || user.role === 'manager') &&
            deposit.status === 'pending_refund' && (
              <button className='mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-linear-to-r from-sky-600 to-blue-700 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition-all duration-500 hover:scale-105 hover:shadow-md hover:shadow-sky-300'>
                <ArrowRight className='h-4 w-4' />
                Xử lý hoàn trả
              </button>
            )}
        </div>
      ) : (
        <div className='rounded-2xl border border-dashed border-sky-200 bg-sky-50/40 py-8 text-center text-sm text-slate-400'>
          Chưa có thông tin tiền đảm bảo.
        </div>
      )}
    </div>
  );
}
