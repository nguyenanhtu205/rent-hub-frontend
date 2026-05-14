import type { SubmitEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, MapPin, Search, Sparkles } from 'lucide-react';
import { HANOI_DISTRICTS, PROPERTY_TYPE_LABELS } from '../constants/mockData';

export default function SearchBar() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ keyword: '', city: '', type: '' });

  const handleSearch = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (form.keyword) params.set('q', form.keyword);
    if (form.city) params.set('city', form.city);
    if (form.type) params.set('type', form.type);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className='relative w-full max-w-3xl'>
      {/* Glow halo */}
      <div className='pointer-events-none absolute -inset-1 rounded-3xl bg-linear-to-r from-sky-400/40 via-blue-400/30 to-amber-300/40 opacity-70 blur-2xl' />

      <form
        onSubmit={handleSearch}
        className='relative flex flex-col items-stretch overflow-hidden rounded-2xl border border-white/60 bg-white/95 shadow-2xl shadow-sky-500/10 backdrop-blur-xl md:flex-row'
      >
        {/* Top hairline */}
        <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent' />

        {/* Keyword */}
        <div className='group flex min-w-0 flex-1 flex-col px-5 py-4 transition-colors hover:bg-sky-50/60'>
          <label className='mb-1 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-sky-700 uppercase'>
            <Search className='h-3 w-3' />
            Tìm kiếm
          </label>
          <input
            type='text'
            placeholder='Tên dự án, địa chỉ...'
            value={form.keyword}
            onChange={(e) => setForm({ ...form, keyword: e.target.value })}
            className='w-full bg-transparent text-[15px] font-medium text-slate-800 placeholder-slate-400 outline-none'
          />
        </div>

        <div className='my-3 hidden w-px bg-linear-to-b from-transparent via-sky-200 to-transparent md:block' />
        <div className='mx-5 h-px bg-linear-to-r from-transparent via-sky-200 to-transparent md:hidden' />

        {/* City */}
        <div className='group flex min-w-0 flex-1 flex-col px-5 py-4 transition-colors hover:bg-sky-50/60'>
          <label className='mb-1 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-sky-700 uppercase'>
            <MapPin className='h-3 w-3' />
            Quận huyện
          </label>
          <select
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className='w-full cursor-pointer appearance-none bg-transparent px-4 text-[15px] font-medium text-slate-800 outline-none'
          >
            <option value=''>Tất cả</option>
            {HANOI_DISTRICTS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className='my-3 hidden w-px bg-linear-to-b from-transparent via-sky-200 to-transparent md:block' />
        <div className='mx-5 h-px bg-linear-to-r from-transparent via-sky-200 to-transparent md:hidden' />

        {/* Type */}
        <div className='group flex min-w-0 flex-1 flex-col px-5 py-4 transition-colors hover:bg-sky-50/60'>
          <label className='mb-1 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-sky-700 uppercase'>
            <Building2 className='h-3 w-3' />
            Loại BĐS
          </label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className='w-full cursor-pointer appearance-none bg-transparent px-4 text-[15px] font-medium text-slate-800 outline-none'
          >
            <option value=''>Tất cả</option>
            {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Button */}
        <button
          type='submit'
          className='group relative m-2 flex shrink-0 cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-linear-to-r from-amber-400 to-amber-600 px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-yellow-100 transition-all hover:shadow-xl hover:shadow-yellow-200'
        >
          <span className='absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full' />
          <Sparkles className='relative h-4 w-4 text-blue-700' />
          <span className='relative'>Tìm kiếm</span>
        </button>
      </form>
    </div>
  );
}
