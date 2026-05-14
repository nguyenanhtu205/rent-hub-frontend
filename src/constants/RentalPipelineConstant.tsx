import type { PipelineStage } from '../types/internal.ts';
import { CheckCircle2, Eye, FileSignature, Inbox, MessagesSquare } from 'lucide-react';

export const STAGES: {
  key: PipelineStage;
  label: string;
  border: string;
  header: string;
  badge: string;
  accent: string;
  icon: typeof Inbox;
}[] = [
  {
    key: 'lead',
    label: 'Lead',
    border: 'border-slate-200',
    header: 'from-slate-50 to-white',
    badge: 'bg-slate-100 text-slate-700',
    accent: 'from-slate-400 to-slate-600',
    icon: Inbox,
  },
  {
    key: 'viewing',
    label: 'Đang xem nhà',
    border: 'border-sky-200',
    header: 'from-sky-50 to-white',
    badge: 'bg-sky-100 text-sky-700',
    accent: 'from-sky-500 to-blue-700',
    icon: Eye,
  },
  {
    key: 'negotiating',
    label: 'Thương lượng',
    border: 'border-amber-200',
    header: 'from-amber-50 to-white',
    badge: 'bg-amber-100 text-amber-700',
    accent: 'from-amber-400 to-orange-500',
    icon: MessagesSquare,
  },
  {
    key: 'pending_contract',
    label: 'Chờ ký HĐ',
    border: 'border-violet-200',
    header: 'from-violet-50 to-white',
    badge: 'bg-violet-100 text-violet-700',
    accent: 'from-violet-500 to-purple-700',
    icon: FileSignature,
  },
  {
    key: 'signed',
    label: 'Đã ký HĐ',
    border: 'border-emerald-200',
    header: 'from-emerald-50 to-white',
    badge: 'bg-emerald-100 text-emerald-700',
    accent: 'from-emerald-500 to-teal-700',
    icon: CheckCircle2,
  },
];
