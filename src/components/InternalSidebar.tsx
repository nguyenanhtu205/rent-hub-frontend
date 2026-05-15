import { Navigate, NavLink } from 'react-router-dom';
import { type MenuKey, type MenuItem } from '../types/internal';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import type { Role } from '../types/user.ts';
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

const MENU_ITEMS: MenuItem[] = [
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

const ROLE_LABELS: Record<Role, string> = {
  broker: 'Môi giới',
  valuator: 'Thẩm định',
  legal: 'Pháp lý',
  accountant: 'Kế toán',
  manager: 'Quản lý',
  member: '',
  landlord: '',
};

const ROLE_COLORS: Record<Role, string> = {
  broker: 'bg-sky-100 text-sky-700 ring-1 ring-sky-200',
  valuator: 'bg-amber-100 text-amber-700 ring-1 ring-amber-200',
  legal: 'bg-violet-100 text-violet-700 ring-1 ring-violet-200',
  accountant: 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200',
  manager: 'bg-rose-100 text-rose-700 ring-1 ring-rose-200',
  member: '',
  landlord: '',
};

const ROLE_MENUS: Record<Role, MenuKey[]> = {
  broker: [
    'dashboard',
    'work-queue',
    'properties',
    'calendar',
    'customers',
    'interactions',
    'pipeline',
    'record-transaction',
    'commission',
  ],
  valuator: ['dashboard', 'work-queue', 'properties', 'calendar', 'valuation'],
  legal: ['dashboard', 'work-queue', 'properties', 'legal-approval'],
  accountant: ['dashboard', 'work-queue', 'deposit', 'commission', 'reports', 'audit-log'],
  manager: [
    'dashboard',
    'work-queue',
    'properties',
    'calendar',
    'customers',
    'pipeline',
    'commission',
    'valuation',
    'deposit',
    'reports',
    'audit-log',
  ],
  member: [],
  landlord: [],
};

export default function InternalSidebar() {
  const user = useAuthStore((state) => state.user);

  const [collapsed, setCollapsed] = useState(false);
  const [showRolePicker, setShowRolePicker] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!user) return <Navigate to='/login' replace />;

  const allowed = new Set(ROLE_MENUS[user.role]);
  const visibleItems = MENU_ITEMS.filter((m) => allowed.has(m.key));
  const groups = [...new Set(visibleItems.map((m) => m.group))].filter(Boolean) as string[];

  return (
    <aside
      className={`relative flex h-screen shrink-0 flex-col overflow-hidden bg-linear-to-b from-blue-800 via-sky-800 to-blue-900 shadow-2xl shadow-sky-900/30 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}
    >
      {/* Decorative glows */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -top-24 -left-12 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl' />
        <div className='absolute -right-16 bottom-1/3 h-56 w-56 rounded-full bg-amber-300/15 blur-3xl' />
      </div>

      {/* Logo + collapse */}
      <div
        className={`relative flex h-16 shrink-0 items-center border-b border-white/10 px-4 ${collapsed ? 'justify-center' : 'justify-between'}`}
      >
        {!collapsed && (
          <div className='flex items-center gap-2.5'>
            <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-sky-400 to-blue-600 text-xs font-black text-white shadow-lg ring-1 shadow-sky-500/40 ring-white/20'>
              RH
            </span>
            <div className='flex flex-col leading-tight'>
              <span className='text-sm font-bold tracking-tight text-white'>RentHub</span>
              <span className='text-[9px] font-semibold tracking-[0.2em] text-amber-300/90 uppercase'>
                Operations
              </span>
            </div>
          </div>
        )}
        {collapsed && (
          <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-sky-400 to-blue-600 text-xs font-black text-white shadow-lg ring-1 shadow-sky-500/40 ring-white/20'>
            RH
          </span>
        )}
        {!collapsed && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className='cursor-pointer rounded-lg p-1.5 text-sky-200/70 transition-all hover:bg-white/10 hover:text-white'
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
            >
              <path d='M15 18l-6-6 6-6' />
            </svg>
          </button>
        )}
      </div>

      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className='relative mx-2 mt-2 cursor-pointer rounded-lg p-1.5 text-sky-200/70 transition-all hover:bg-white/10 hover:text-white'
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
            className='mx-auto'
          >
            <path d='M9 18l6-6-6-6' />
          </svg>
        </button>
      )}

      {/* Nav */}
      <nav className='relative flex-1 scrollbar-none space-y-5 overflow-y-auto py-4'>
        {groups.map((group) => {
          const items = visibleItems.filter((m) => m.group === group);
          return (
            <div key={group}>
              {!collapsed && (
                <p className='mb-1.5 px-5 text-[10px] font-bold tracking-[0.18em] text-sky-300/60 uppercase'>
                  {group}
                </p>
              )}
              <div className='space-y-0.5'>
                {items.map((item) => (
                  <NavLink
                    key={item.key}
                    to={item.path}
                    title={collapsed ? item.label : undefined}
                    className={({ isActive }: { isActive: boolean }) =>
                      `group relative mx-2 flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-linear-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/40'
                          : 'text-sky-100/70 hover:bg-white/10 hover:text-white'
                      } ${collapsed ? 'justify-center px-2' : ''}`
                    }
                  >
                    {({ isActive }: { isActive: boolean }) => (
                      <>
                        {isActive && !collapsed && (
                          <span className='absolute top-1/2 -left-2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.7)]' />
                        )}
                        <span className='shrink-0'>{item.icon}</span>
                        {!collapsed && <span className='truncate'>{item.label}</span>}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          );
        })}
      </nav>

      {/* User + role switcher */}
      <div className='relative shrink-0 border-t border-white/10 bg-black/20 p-3 backdrop-blur'>
        {!collapsed ? (
          <div>
            <div className='mb-2.5 flex items-center gap-2.5 rounded-xl bg-white/5 p-2 ring-1 ring-white/10'>
              <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-orange-500 text-xs font-bold text-white shadow-md shadow-amber-500/30'>
                {user.name
                  .split(' ')
                  .map((w: string) => w[0])
                  .slice(-2)
                  .join('')}
              </div>
              <div className='min-w-0'>
                <p className='truncate text-xs font-semibold text-white'>{user.name}</p>
                <p className='truncate text-[11px] text-sky-200/60'>{user.email}</p>
              </div>
            </div>
            <div className='relative'>
              <button
                onClick={() => setShowRolePicker(!showRolePicker)}
                className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition-all hover:scale-[1.02] ${ROLE_COLORS[user.role]}`}
              >
                <span>{ROLE_LABELS[user.role]}</span>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2.5'
                >
                  <polyline points='6 9 12 15 18 9' />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className='flex justify-center'>
            <div className='flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-orange-500 text-xs font-bold text-white shadow-md shadow-amber-500/30'>
              {user.name
                .split(' ')
                .map((w: string) => w[0])
                .slice(-2)
                .join('')}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
