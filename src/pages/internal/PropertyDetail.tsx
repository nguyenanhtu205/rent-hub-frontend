import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  MOCK_APPOINTMENTS,
  MOCK_DEPOSITS,
  MOCK_INT_PROPERTIES,
} from '../../mocks/data/internalMockData';
import {
  AlertTriangle,
  Building2,
  CalendarDays,
  ChevronRight,
  Hash,
  MapPin,
  Ruler,
  Scale,
  User,
  Wallet,
} from 'lucide-react';
import {
  Appointments,
  Contract,
  Docs,
  Finance,
  History,
  Owner,
  Workflow,
} from '../../components/internal-property-detail';
import type { Tab } from '../../types/internal';

const TABS: { key: Tab; label: string }[] = [
  { key: 'owner', label: 'Hồ sơ chủ nhà' },
  { key: 'docs', label: 'Tài liệu' },
  { key: 'workflow', label: 'Trạng thái workflow' },
  { key: 'appointments', label: 'Lịch hẹn' },
  { key: 'history', label: 'Lịch sử làm việc' },
  { key: 'contract', label: 'Hợp đồng' },
  { key: 'finance', label: 'Tài chính' },
];

const STATUS_STYLE: Record<string, string> = {
  pending_review: 'bg-amber-100 text-amber-700',
  under_valuation: 'bg-blue-100 text-blue-700',
  pending_legal: 'bg-purple-100 text-purple-700',
  active: 'bg-emerald-100 text-emerald-700',
  rented: 'bg-slate-100 text-slate-600',
  rejected: 'bg-red-100 text-red-700',
};

const STATUS_LABEL: Record<string, string> = {
  pending_review: 'Chờ thẩm định',
  under_valuation: 'Đang thẩm định',
  pending_legal: 'Chờ pháp lý',
  active: 'Đang tìm khách',
  rented: 'Đã cho thuê',
  rejected: 'Từ chối',
};

function fmt(n: number) {
  return n >= 1_000_000
    ? `${(n / 1_000_000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} triệu`
    : n.toLocaleString('vi-VN');
}

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const [tab, setTab] = useState<Tab>('owner');

  const property = MOCK_INT_PROPERTIES.find((p) => p.id === id);
  if (!property)
    return <div className='p-8 text-center text-slate-500'>Không tìm thấy bất động sản.</div>;

  const appts = MOCK_APPOINTMENTS.filter((a) => a.propertyCode === property.code);
  const deposit = MOCK_DEPOSITS.find((d) => d.propertyCode === property.code);

  return (
    <div className='space-y-10 p-20'>
      {/* Breadcrumb */}
      <div className='flex items-center gap-2 text-lg text-slate-500'>
        <Link
          to='/internal/properties'
          className='inline-flex items-center gap-1 rounded-lg px-2 py-1 font-medium text-sky-700 transition-colors hover:bg-sky-50 hover:text-sky-800'
        >
          <Building2 className='h-3.5 w-3.5' />
          Bất động sản
        </Link>
        <ChevronRight className='h-3.5 w-3.5 text-slate-300' />
        <span className='truncate font-mono text-sm font-semibold text-slate-700'>
          {property.code}
        </span>
      </div>

      {/* Top card */}
      <div className='relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 shadow-lg shadow-sky-100/40 backdrop-blur'>
        <div className='absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-blue-600 to-amber-400' />
        <div className='flex flex-col gap-0 md:flex-row'>
          {/* Image */}
          <div className='relative h-52 w-full shrink-0 overflow-hidden md:h-auto md:w-72'>
            <img
              src={property.thumbnail}
              alt=''
              className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
            />
            <div className='absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-white/10' />
            {property.hasLegalFlag && (
              <span className='absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-700 shadow-sm ring-1 ring-rose-200'>
                <AlertTriangle className='h-3 w-3' />
                Flag pháp lý
              </span>
            )}
          </div>
          {/* Info */}
          <div className='flex-1 p-6'>
            <div className='mb-4 flex flex-wrap items-start justify-between gap-3'>
              <div>
                <p className='mb-1 inline-flex items-center gap-1 rounded-md bg-sky-50 px-2 py-0.5 font-mono text-xs font-semibold text-sky-700 ring-1 ring-sky-100'>
                  <Hash className='h-3 w-3' />
                  {property.code}
                </p>
                <h1 className='bg-linear-to-r from-slate-900 via-blue-900 to-sky-800 bg-clip-text text-lg leading-snug font-bold text-transparent'>
                  {property.title}
                </h1>
                <p className='mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500'>
                  <MapPin className='h-3.5 w-3.5 text-sky-500' />
                  {property.address}, {property.district}, {property.city}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ring-1 ${STATUS_STYLE[property.status]}`}
              >
                {STATUS_LABEL[property.status]}
              </span>
            </div>
            <div className='grid grid-cols-2 gap-4 text-sm sm:grid-cols-4'>
              {[
                { label: 'Loại', value: property.type, icon: Building2 },
                { label: 'Diện tích', value: `${property.area} m²`, icon: Ruler },
                { label: 'Giá thuê', value: `${fmt(property.price)}/tháng`, icon: Wallet },
                { label: 'Nộp hồ sơ', value: property.submittedAt, icon: CalendarDays },
              ].map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className='rounded-xl border border-sky-100 bg-linear-to-br from-sky-50/60 to-white p-3 transition-all hover:-translate-y-0.5'
                >
                  <p className='mb-1 inline-flex items-center gap-1 text-xs font-medium text-sky-600'>
                    <Icon className='h-3 w-3' />
                    {label}
                  </p>
                  <p className='font-bold text-slate-800'>{value}</p>
                </div>
              ))}
            </div>
            <div className='mt-4 flex flex-wrap gap-6 border-t border-sky-100 pt-4 text-sm'>
              <div className='flex items-center gap-2'>
                <span className='inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-700'>
                  <User className='h-4 w-4' />
                </span>
                <div>
                  <p className='text-xs font-medium text-sky-600'>Môi giới phụ trách</p>
                  <p className='font-semibold text-slate-800'>{property.assignedBroker ?? '—'}</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <span className='inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700'>
                  <Scale className='h-4 w-4' />
                </span>
                <div>
                  <p className='text-xs font-medium text-amber-600'>Thẩm định viên</p>
                  <p className='font-semibold text-slate-800'>{property.assignedValuator ?? '—'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className='relative overflow-hidden rounded-2xl border border-sky-100 bg-white/70 shadow-sm backdrop-blur'>
        {/* Ambient blobs */}
        <div className='pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl' />
        <div className='pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl' />

        {/* Tab bar */}
        <div className='relative flex scrollbar-none overflow-x-auto border-b border-sky-100 bg-white/60 backdrop-blur'>
          {TABS.map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`relative shrink-0 cursor-pointer px-5 py-3.5 text-sm font-bold transition-all ${
                  active
                    ? 'text-transparent'
                    : 'text-slate-500 hover:bg-sky-50/60 hover:text-sky-700'
                }`}
              >
                {active ? (
                  <span className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-transparent'>
                    {t.label}
                  </span>
                ) : (
                  t.label
                )}
                {active && (
                  <span className='absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-linear-to-r from-sky-600 via-blue-700 to-amber-500 shadow-sm shadow-sky-600/30' />
                )}
              </button>
            );
          })}
        </div>

        <div className='p-6'>
          {/* ── Owner ── */}
          {tab === 'owner' && <Owner property={property} />}

          {/* ── Docs ── */}
          {tab === 'docs' && <Docs />}

          {/* ── Workflow ── */}
          {tab === 'workflow' && <Workflow />}

          {/* ── Appointments ── */}
          {tab === 'appointments' && <Appointments appts={appts} />}

          {/* ── History ── */}
          {tab === 'history' && <History />}

          {/* ── Contract ── */}
          {tab === 'contract' && <Contract property={property} />}

          {/* ── Finance ── */}
          {tab === 'finance' && <Finance deposit={deposit} />}
        </div>
      </div>
    </div>
  );
}
