import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { HANOI_DISTRICTS, MOCK_PROPERTIES, PROPERTY_TYPE_LABELS } from '../mocks/data/mockData';

export default function Properties() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [sort, setSort] = useState('newest');

  const filtered = useMemo(() => {
    let data = [...MOCK_PROPERTIES];
    if (search) {
      const q = search.toLowerCase();
      data = data.filter(
        (p) => p.title.toLowerCase().includes(q) || p.address.toLowerCase().includes(q),
      );
    }
    if (type !== 'all') data = data.filter((p) => p.type === type);
    switch (sort) {
      case 'low':
        data.sort((a, b) => a.price - b.price);
        break;
      case 'high':
        data.sort((a, b) => b.price - a.price);
        break;
      default:
        data.sort((a, b) => b.id.localeCompare(a.id));
    }
    return data;
  }, [search, type, sort]);

  const hasFilter = search || type !== 'all';

  return (
    <div className='relative min-h-screen overflow-hidden bg-linear-to-br from-sky-300 via-white to-sky-200 text-slate-900'>
      {/* ── Hero header ─────────────────────────────────── */}
      <section className='relative overflow-hidden pt-17'>
        <div className='absolute inset-0 bg-linear-to-br from-sky-50 via-white to-amber-50' />
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
          <div className='absolute -top-40 -left-40 h-112 w-md rounded-full bg-sky-300/40 blur-3xl' />
          <div className='absolute -top-20 -right-32 h-96 w-96 rounded-full bg-amber-300/40 blur-3xl' />
        </div>
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.06]'
          style={{
            backgroundImage:
              'linear-gradient(to right, #0c4a6e 1px, transparent 1px), linear-gradient(to bottom, #0c4a6e 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent' />

        <div className='relative mx-auto max-w-7xl px-6 py-16 sm:py-20'>
          <span className='mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-[11px] font-bold tracking-widest text-sky-700 uppercase shadow-sm backdrop-blur'>
            <span className='inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]' />
            Danh sách bất động sản
          </span>
          <h1 className='mb-4 max-w-3xl text-4xl leading-[1.05] font-black tracking-tight text-slate-900 md:text-6xl'>
            Tất cả{' '}
            <em className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-transparent not-italic drop-shadow-[0_4px_30px_rgba(14,165,233,0.25)]'>
              bất động sản
            </em>
          </h1>
          <p className='max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg'>
            Khám phá các bất động sản đã{' '}
            <span className='font-semibold text-sky-700'>thẩm định</span> tại Hà Nội — minh bạch,
            nhanh chóng, đáng tin cậy.
          </p>
        </div>
      </section>

      {/* ── Toolbar + Results ───────────────────────────── */}
      <section className='relative mx-auto max-w-7xl px-6 pb-24'>
        {/* Toolbar */}
        <div className='-mt-8 mb-8 rounded-2xl border border-sky-100 bg-white/80 p-4 shadow-lg shadow-sky-500/5 backdrop-blur sm:p-5'>
          <div className='flex flex-wrap items-center gap-3'>
            <div className='relative min-w-60 flex-1'>
              <Search className='pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-sky-500' />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Tìm theo khu vực, tên...'
                className='w-full rounded-xl border border-sky-200 bg-white/80 px-11 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:outline-none'
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className='absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:bg-sky-50 hover:text-sky-700'
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className='cursor-pointer appearance-none rounded-xl border border-sky-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none'
            >
              <option value=''>Tất cả khu vực</option>
              {HANOI_DISTRICTS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className='cursor-pointer appearance-none rounded-xl border border-sky-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none'
            >
              <option value=''>Tất cả loại nhà</option>
              {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className='cursor-pointer appearance-none rounded-xl border border-sky-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none'
            >
              <option value='newest'>Mới nhất</option>
              <option value='low'>Giá thấp nhất</option>
              <option value='high'>Giá cao nhất</option>
            </select>

            <button
              className='inline-flex items-center justify-center rounded-xl border border-sky-200 bg-white/80 px-4 py-3 text-sky-700 transition hover:border-sky-300 hover:bg-sky-50'
              title='Bộ lọc nâng cao'
            >
              <SlidersHorizontal size={18} />
            </button>
          </div>
        </div>

        {/* Result count */}
        <div className='mb-6 flex flex-wrap items-center justify-between gap-3'>
          <p className='text-sm text-slate-600'>
            <span className='font-bold text-sky-700'>{filtered.length}</span> bất động sản phù hợp
          </p>
          {hasFilter && (
            <button
              onClick={() => {
                setSearch('');
                setType('all');
              }}
              className='inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-semibold text-sky-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50'
            >
              <X size={12} /> Xóa bộ lọc
            </button>
          )}
        </div>

        {/* Grid / Empty */}
        {filtered.length === 0 ? (
          <div className='rounded-2xl border border-dashed border-sky-200 bg-white/60 px-6 py-20 text-center backdrop-blur'>
            <div className='mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-sky-100 to-blue-100 text-sky-700'>
              <Search size={22} />
            </div>
            <h3 className='mb-1.5 text-lg font-bold text-slate-900'>Không tìm thấy kết quả</h3>
            <p className='text-sm text-slate-500'>Thử thay đổi từ khóa hoặc bộ lọc khác.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
