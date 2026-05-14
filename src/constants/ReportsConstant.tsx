import { BarChart3, Briefcase, Calendar as CalendarIcon, TrendingUp } from 'lucide-react';

export const brokerKPI = [
  { name: 'Nguyễn Minh Tuấn', deals: 3, viewings: 8, converted: 1, commission: 275_000 },
  { name: 'Lê Thanh Sơn', deals: 2, viewings: 5, converted: 2, commission: 1_100_000 },
];

export const summary = [
  {
    label: 'BĐS đang hoạt động',
    value: 3,
    icon: Briefcase,
    accent: 'from-sky-500 to-blue-700',
    iconBg: 'bg-sky-50 text-sky-600',
  },
  {
    label: 'Giao dịch tháng này',
    value: 3,
    icon: TrendingUp,
    accent: 'from-emerald-400 to-emerald-600',
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
  {
    label: 'Lịch xem nhà',
    value: 4,
    icon: CalendarIcon,
    accent: 'from-amber-400 to-amber-500',
    iconBg: 'bg-amber-50 text-amber-600',
  },
  {
    label: 'Tỷ lệ chuyển đổi',
    value: '75%',
    icon: BarChart3,
    accent: 'from-sky-600 via-blue-700 to-amber-500',
    iconBg: 'bg-blue-50 text-blue-700',
  },
];
