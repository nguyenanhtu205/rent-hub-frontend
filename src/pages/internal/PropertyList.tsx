import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  LayoutGrid,
  List,
  MapPin,
  Ruler,
  Search,
} from 'lucide-react';
import { MOCK_INT_PROPERTIES } from '../../mocks/data/internalMockData';
import type { InternalPropertyStatus } from '../../types/internal';

const STATUS_STYLE: Record<InternalPropertyStatus, string> = {
  pending_review: 'bg-amber-100 text-amber-700 ring-1 ring-amber-200',
  under_valuation: 'bg-sky-100 text-sky-700 ring-1 ring-sky-200',
  pending_legal: 'bg-violet-100 text-violet-700 ring-1 ring-violet-200',
  active: 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200',
  rented: 'bg-slate-100 text-slate-600 ring-1 ring-slate-200',
  rejected: 'bg-rose-100 text-rose-700 ring-1 ring-rose-200',
  terminated: 'bg-rose-100 text-rose-700 ring-1 ring-rose-200',
};

const STATUS_LABEL: Record<InternalPropertyStatus, string> = {
  pending_review: 'Chờ thẩm định',
  under_valuation: 'Đang thẩm định',
  pending_legal: 'Chờ pháp lý',
  active: 'Đang tìm khách',
  rented: 'Đã cho thuê',
  rejected: 'Từ chối',
  terminated: 'Chấm dứt HĐ',
};

function fmt(n: number) {
  return n >= 1_000_000 ? `${(n / 1_000_000).toFixed(0)} triệu` : n.toLocaleString('vi-VN');
}

export default function PropertyList() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | InternalPropertyStatus>('all');
  const [view, setView] = useState<'table' | 'grid'>('table');

  const visible = MOCK_INT_PROPERTIES.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.ownerName.toLowerCase().includes(q);
    const matchStatus = filterStatus === 'all' || p.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className='relative space-y-8 px-12 py-16'>
      {/* Ambient blobs */}
      <div className='pointer-events-none absolute -top-20 -left-10 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl' />
      <div className='pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl' />

      {/* Header */}
      <div className='relative flex items-center justify-between'>
        <div>
          <div className='mb-2 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-sky-700 ring-1 ring-sky-200/70 backdrop-blur'>
            <Building2 className='h-3.5 w-3.5' />
            Danh mục nội bộ
          </div>
          <h1 className='bg-linear-to-r from-sky-700 via-blue-700 to-amber-600 bg-clip-text text-2xl font-bold text-transparent'>
            Bất động sản nội bộ
          </h1>
          <p className='text-sm text-slate-500'>
            <span className='font-semibold text-slate-700'>{visible.length}</span> /{' '}
            {MOCK_INT_PROPERTIES.length} bất động sản
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className='relative flex flex-wrap gap-3'>
        {/* Search */}
        <div className='relative max-w-xs min-w-50 flex-1'>
          <Search className='absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-sky-500' />
          <input
            type='text'
            placeholder='Tìm theo mã, tên, chủ nhà...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full rounded-xl border border-sky-200/70 bg-white/80 py-2.5 pr-4 pl-9 text-sm shadow-sm backdrop-blur transition-all outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20'
          />
        </div>

        {/* Status filter */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
          className='cursor-pointer appearance-none rounded-xl border border-sky-200/70 bg-white/80 px-3 py-2.5 text-sm text-slate-700 shadow-sm backdrop-blur transition-all outline-none hover:scale-105 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20'
        >
          <option value='all'>Tất cả trạng thái</option>
          {(Object.keys(STATUS_LABEL) as InternalPropertyStatus[]).map((s) => (
            <option key={s} value={s}>
              {STATUS_LABEL[s]}
            </option>
          ))}
        </select>

        {/* View toggle */}
        <div className='ml-auto flex overflow-hidden rounded-xl border border-sky-200/70 bg-white/80 shadow-sm backdrop-blur'>
          {(['table', 'grid'] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`cursor-pointer px-3 py-2.5 transition-all duration-500 hover:scale-105 ${
                view === v
                  ? 'bg-linear-to-br from-sky-600 to-blue-700 text-white shadow-inner'
                  : 'text-slate-500 hover:bg-sky-50 hover:text-sky-700'
              }`}
            >
              {v === 'table' ? <List className='h-4 w-4' /> : <LayoutGrid className='h-4 w-4' />}
            </button>
          ))}
        </div>
      </div>

      {/* Table view */}
      {view === 'table' && (
        <div className='relative overflow-hidden rounded-2xl border border-sky-200/60 bg-white/80 shadow-sm backdrop-blur'>
          <div className='absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-blue-600 to-amber-500' />
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-sky-100 bg-linear-to-r from-sky-50/60 to-blue-50/40 text-left text-xs font-bold tracking-wider text-slate-500 uppercase'>
                  <th className='px-5 py-3.5'>Bất động sản</th>
                  <th className='px-4 py-3.5'>Loại</th>
                  <th className='px-4 py-3.5'>Chủ nhà</th>
                  <th className='px-4 py-3.5'>Giá thuê</th>
                  <th className='px-4 py-3.5'>Môi giới</th>
                  <th className='px-4 py-3.5'>Trạng thái</th>
                  <th className='px-4 py-3.5'>Cập nhật</th>
                  <th className='px-4 py-3.5' />
                </tr>
              </thead>
              <tbody className='divide-y divide-sky-50'>
                {visible.map((p) => (
                  <tr key={p.id} className='transition-colors hover:bg-sky-50/40'>
                    <td className='px-5 py-4'>
                      <div className='flex items-center gap-3'>
                        <img
                          src={p.thumbnail}
                          alt=''
                          className='h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-sky-100'
                        />
                        <div>
                          <p className='max-w-30 truncate font-semibold text-slate-800'>
                            {p.title}
                          </p>
                          <p className='mt-0.5 font-mono text-xs text-sky-600/80'>{p.code}</p>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-slate-600'>{p.type}</td>
                    <td className='px-4 py-4'>
                      <p className='font-medium text-slate-700'>{p.ownerName}</p>
                      <p className='text-xs text-slate-400'>{p.ownerPhone}</p>
                    </td>
                    <td className='px-4 py-4 font-bold text-blue-700'>{fmt(p.price)}/th</td>
                    <td className='px-4 py-4 text-xs text-slate-600'>
                      {p.assignedBroker ?? <span className='text-slate-300'>Chưa phân</span>}
                    </td>
                    <td className='px-4 py-4'>
                      <div className='flex items-center gap-1.5'>
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-bold ${STATUS_STYLE[p.status]}`}
                        >
                          {STATUS_LABEL[p.status]}
                        </span>
                        {p.hasLegalFlag && (
                          <span
                            title='Có flag pháp lý'
                            className='flex h-4 w-4 items-center justify-center rounded-full bg-rose-100 text-[10px] font-bold text-rose-600 ring-1 ring-rose-200'
                          >
                            !
                          </span>
                        )}
                      </div>
                    </td>
                    <td className='px-4 py-4 text-xs text-slate-400'>{p.updatedAt}</td>
                    <td className='px-4 py-4'>
                      <Link
                        to={`/internal/properties/${p.id}`}
                        className='group inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold text-sky-700 transition-colors hover:bg-sky-50 hover:text-blue-800'
                      >
                        Chi tiết
                        <ArrowRight className='h-3 w-3 duration-500 group-hover:translate-x-1' />
                      </Link>
                    </td>
                  </tr>
                ))}
                {visible.length === 0 && (
                  <tr>
                    <td colSpan={8} className='py-12 text-center text-slate-400'>
                      Không tìm thấy bất động sản
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Grid view */}
      {view === 'grid' && (
        <div className='relative grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {visible.map((p) => (
            <Link
              key={p.id}
              to={`/internal/properties/${p.id}`}
              className='group relative overflow-hidden rounded-2xl border border-sky-200/60 bg-white/80 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-200/40'
            >
              <div className='absolute inset-x-0 top-0 z-10 h-1 bg-linear-to-r from-sky-500 via-blue-600 to-amber-500' />
              <div className='relative h-40 overflow-hidden'>
                <img
                  src={p.thumbnail}
                  alt=''
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent' />
                <span
                  className={`absolute top-3 right-3 rounded-full px-2 py-0.5 text-[10px] font-bold backdrop-blur ${STATUS_STYLE[p.status]}`}
                >
                  {STATUS_LABEL[p.status]}
                </span>
                {p.hasLegalFlag && (
                  <span className='absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-rose-100/95 px-2 py-0.5 text-[10px] font-bold text-rose-700 ring-1 ring-rose-200 backdrop-blur'>
                    <AlertTriangle className='h-2.5 w-2.5' />
                    Pháp lý
                  </span>
                )}
              </div>
              <div className='p-4'>
                <p className='mb-1 font-mono text-xs text-sky-600/80'>{p.code}</p>
                <p className='mb-2 line-clamp-2 text-sm leading-snug font-bold text-slate-800'>
                  {p.title}
                </p>
                <p className='mb-3 inline-flex items-center gap-1 text-xs text-slate-500'>
                  <MapPin className='h-3 w-3 text-sky-500' />
                  {p.district}, {p.city}
                </p>
                <div className='flex items-center justify-between border-t border-sky-100 pt-3'>
                  <span className='bg-linear-to-r from-sky-700 to-blue-700 bg-clip-text text-base font-bold text-transparent'>
                    {fmt(p.price)}/th
                  </span>
                  <span className='inline-flex items-center gap-1 text-xs text-slate-500'>
                    <Ruler className='h-3 w-3 text-amber-500' />
                    {p.area} m²
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
