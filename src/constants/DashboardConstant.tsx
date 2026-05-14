import {
  MOCK_COMMISSIONS,
  MOCK_DEALS,
  MOCK_DEPOSITS,
  MOCK_INT_PROPERTIES,
  MOCK_WORK_ITEMS,
} from './internalMockData.ts';
import type { ReactNode } from 'react';

export const STATUS_COLOR: Record<string, string> = {
  pending_review: 'bg-amber-100 text-amber-700',
  under_valuation: 'bg-blue-100 text-blue-700',
  pending_legal: 'bg-purple-100 text-purple-700',
  active: 'bg-emerald-100 text-emerald-700',
  rented: 'bg-slate-100 text-slate-600',
  rejected: 'bg-red-100 text-red-700',
};

export const STATUS_LABEL: Record<string, string> = {
  pending_review: 'Chờ thẩm định',
  under_valuation: 'Đang thẩm định',
  pending_legal: 'Chờ pháp lý',
  active: 'Đang tìm khách',
  rented: 'Đã cho thuê',
  rejected: 'Từ chối',
};

export function fmt(n: number) {
  return n >= 1_000_000 ? `${(n / 1_000_000).toFixed(0)}M` : n.toLocaleString('vi-VN');
}

type KpiCard = {
  label: string;
  value: string | number;
  sub?: string;
  color: string;
  icon: ReactNode;
}

const openWork = MOCK_WORK_ITEMS.filter((w) => w.status === 'open').length;
const highPriority = MOCK_WORK_ITEMS.filter(
  (w) => w.priority === 'high' && w.status === 'open',
).length;

export const kpiByRole: Record<string, KpiCard[]> = {
  broker: [
    {
      label: 'Việc cần xử lý',
      value: openWork,
      sub: `${highPriority} ưu tiên cao`,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M9 11l3 3L22 4' />
          <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' />
        </svg>
      ),
    },
    {
      label: 'Khách hàng',
      value: 4,
      sub: '2 đang tích cực',
      color: 'text-emerald-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
          <circle cx='9' cy='7' r='4' />
        </svg>
      ),
    },
    {
      label: 'Deals đang xử lý',
      value: MOCK_DEALS.filter((d) => d.stage !== 'signed' && d.stage !== 'lost').length,
      sub: '1 gần ký HĐ',
      color: 'text-amber-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
        </svg>
      ),
    },
  ],
  valuator: [
    {
      label: 'Việc cần xử lý',
      value: openWork,
      sub: `${highPriority} ưu tiên cao`,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M9 11l3 3L22 4' />
          <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' />
        </svg>
      ),
    },
    {
      label: 'Chờ thẩm định',
      value: MOCK_INT_PROPERTIES.filter((p) => p.status === 'pending_review').length,
      color: 'text-amber-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <circle cx='12' cy='12' r='10' />
          <polyline points='12 6 12 12 16 14' />
        </svg>
      ),
    },
    {
      label: 'Đang thẩm định',
      value: MOCK_INT_PROPERTIES.filter((p) => p.status === 'under_valuation').length,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
        </svg>
      ),
    },
    {
      label: 'Hoàn thành tháng',
      value: 8,
      sub: 'tháng 05/2025',
      color: 'text-emerald-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='20 6 9 17 4 12' />
        </svg>
      ),
    },
  ],
  legal: [
    {
      label: 'Việc cần xử lý',
      value: openWork,
      sub: `${highPriority} ưu tiên cao`,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M9 11l3 3L22 4' />
        </svg>
      ),
    },
    {
      label: 'Chờ pháp lý',
      value: MOCK_INT_PROPERTIES.filter((p) => p.status === 'pending_legal').length,
      color: 'text-purple-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
        </svg>
      ),
    },
    {
      label: 'Có flag pháp lý',
      value: MOCK_INT_PROPERTIES.filter((p) => p.hasLegalFlag).length,
      color: 'text-rose-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' />
          <line x1='12' y1='9' x2='12' y2='13' />
          <line x1='12' y1='17' x2='12.01' y2='17' />
        </svg>
      ),
    },
    {
      label: 'Đã duyệt tháng',
      value: 5,
      sub: 'tháng 05/2025',
      color: 'text-emerald-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='20 6 9 17 4 12' />
        </svg>
      ),
    },
  ],
  accountant: [
    {
      label: 'Tiền đảm bảo đang giữ',
      value: `${fmt(MOCK_DEPOSITS.filter((d) => d.status === 'held').reduce((s, d) => s + d.amount, 0))}đ`,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <rect x='2' y='5' width='20' height='14' rx='2' />
          <line x1='2' y1='10' x2='22' y2='10' />
        </svg>
      ),
    },
    {
      label: 'Chờ hoàn trả',
      value: MOCK_DEPOSITS.filter((d) => d.status === 'pending_refund').length,
      color: 'text-amber-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='1 4 1 10 7 10' />
          <path d='M3.51 15a9 9 0 1 0 .49-3.5' />
        </svg>
      ),
    },
    {
      label: 'Hoa hồng chờ duyệt',
      value: MOCK_COMMISSIONS.filter((c) => c.status === 'pending').length,
      color: 'text-purple-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <line x1='12' y1='1' x2='12' y2='23' />
          <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
        </svg>
      ),
    },
    {
      label: 'Tổng HH đã duyệt',
      value: `${fmt(MOCK_COMMISSIONS.filter((c) => c.status !== 'pending').reduce((s, c) => s + c.amount, 0))}đ`,
      color: 'text-emerald-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='22 7 13.5 15.5 8.5 10.5 2 17' />
          <polyline points='16 7 22 7 22 13' />
        </svg>
      ),
    },
  ],
  manager: [
    {
      label: 'Tổng BĐS đang XL',
      value: MOCK_INT_PROPERTIES.filter(
        (p) => !['rented', 'rejected', 'terminated'].includes(p.status),
      ).length,
      color: 'text-blue-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
        </svg>
      ),
    },
    {
      label: 'Deals đang xử lý',
      value: MOCK_DEALS.filter((d) => d.stage !== 'signed' && d.stage !== 'lost').length,
      color: 'text-amber-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
        </svg>
      ),
    },
    {
      label: 'Đã cho thuê tháng',
      value: 3,
      sub: 'tháng 05/2025',
      color: 'text-emerald-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <polyline points='20 6 9 17 4 12' />
        </svg>
      ),
    },
    {
      label: 'Doanh thu hoa hồng',
      value: `${fmt(MOCK_COMMISSIONS.reduce((s, c) => s + c.amount, 0))}đ`,
      color: 'text-purple-600',
      icon: (
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <line x1='12' y1='1' x2='12' y2='23' />
          <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
        </svg>
      ),
    },
  ],
};
