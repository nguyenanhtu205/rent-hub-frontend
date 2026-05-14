import type { MenuKey, Role } from '../types/internal';
import type { ReactNode } from 'react';
import {
  AuditLogIcon,
  CalendarIcon,
  ComissionIcon,
  CustomerIcon,
  DashboardIcon,
  DepositIcon,
  InteractionIcon,
  LegalApprovalIcon,
  PipelineIcon,
  PropertyIcon,
  RecordTransactionIcon,
  ReportIcon,
  ValuationIcon,
  WorkQueueIcon,
} from '../assets/svgIcons';

type MenuItem = {
  key: MenuKey;
  label: string;
  path: string;
  icon: ReactNode;
  group?: string;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    key: 'dashboard',
    label: 'Bảng điều khiển',
    path: '/internal/dashboard',
    group: 'Tổng quan',
    icon: <DashboardIcon />,
  },
  {
    key: 'work-queue',
    label: 'Công việc',
    path: '/internal/work-queue',
    group: 'Tổng quan',
    icon: <WorkQueueIcon />,
  },
  {
    key: 'properties',
    label: 'Bất động sản',
    path: '/internal/properties',
    group: 'Bất động sản',
    icon: <PropertyIcon />,
  },
  {
    key: 'valuation',
    label: 'Thẩm định',
    path: '/internal/valuation',
    group: 'Bất động sản',
    icon: <ValuationIcon />,
  },
  {
    key: 'legal-approval',
    label: 'Phê duyệt pháp lý',
    path: '/internal/legal-approval',
    group: 'Bất động sản',
    icon: <LegalApprovalIcon />,
  },
  {
    key: 'calendar',
    label: 'Lịch hẹn',
    path: '/internal/calendar',
    group: 'Môi giới',
    icon: <CalendarIcon />,
  },
  {
    key: 'customers',
    label: 'Khách hàng',
    path: '/internal/customers',
    group: 'Môi giới',
    icon: <CustomerIcon />,
  },
  {
    key: 'interactions',
    label: 'Lịch sử tương tác',
    path: '/internal/interactions',
    group: 'Môi giới',
    icon: <InteractionIcon />,
  },
  {
    key: 'pipeline',
    label: 'Pipeline giao dịch',
    path: '/internal/pipeline',
    group: 'Môi giới',
    icon: <PipelineIcon />,
  },
  {
    key: 'record-transaction',
    label: 'Ghi nhận GD thuê',
    path: '/internal/record-transaction',
    group: 'Môi giới',
    icon: <RecordTransactionIcon />,
  },
  {
    key: 'deposit',
    label: 'Tiền đảm bảo',
    path: '/internal/deposit',
    group: 'Tài chính',
    icon: <DepositIcon />,
  },
  {
    key: 'commission',
    label: 'Hoa hồng môi giới',
    path: '/internal/commission',
    group: 'Tài chính',
    icon: <ComissionIcon />,
  },
  {
    key: 'reports',
    label: 'Báo cáo / KPI',
    path: '/internal/reports',
    group: 'Quản lý',
    icon: <ReportIcon />,
  },
  {
    key: 'audit-log',
    label: 'Audit Log',
    path: '/internal/audit-log',
    group: 'Quản lý',
    icon: <AuditLogIcon />,
  },
];

export const ROLE_LABELS: Record<Role, string> = {
  broker: 'Môi giới',
  valuator: 'Thẩm định',
  legal: 'Pháp lý',
  accountant: 'Kế toán',
  manager: 'Quản lý',
};

export const ROLE_COLORS: Record<Role, string> = {
  broker: 'bg-sky-100 text-sky-700 ring-1 ring-sky-200',
  valuator: 'bg-amber-100 text-amber-700 ring-1 ring-amber-200',
  legal: 'bg-violet-100 text-violet-700 ring-1 ring-violet-200',
  accountant: 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200',
  manager: 'bg-rose-100 text-rose-700 ring-1 ring-rose-200',
};
