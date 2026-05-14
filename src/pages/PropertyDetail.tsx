import { type ReactNode, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Calendar,
  CheckCircle2,
  Heart,
  MapPin,
  Phone,
  ShieldCheck,
  Square,
} from 'lucide-react';
import { MOCK_PROPERTIES, PROPERTY_TYPE_LABELS } from '../constants/mockData';

function Spec({ icon, label, value }: { icon: ReactNode; label: string; value: ReactNode }) {
  return (
    <div className='rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:border-sky-300 hover:shadow-md hover:shadow-sky-500/10'>
      <div className='mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-100 to-blue-100 text-sky-700'>
        {icon}
      </div>
      <p className='text-xs font-medium tracking-wide text-slate-500 uppercase'>{label}</p>
      <p className='mt-1 text-xl font-black text-slate-900'>{value}</p>
    </div>
  );
}

export default function PropertyDetail() {
  const { id } = useParams();
  const property = useMemo(() => MOCK_PROPERTIES.find((p) => p.id === id), [id]);
  const [saved, setSaved] = useState(false);

  if (!property) {
    return (
      <div className='relative overflow-hidden bg-linear-to-br from-sky-300 via-white to-sky-200'>
        <div className='py-40 text-center'>
          <div className='mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-sky-100 to-blue-100 text-sky-700'>
            <MapPin size={22} />
          </div>
          <h3 className='text-lg font-bold text-slate-900'>Không tìm thấy bất động sản</h3>
          <Link
            to='/properties'
            className='mt-4 inline-block text-sm font-semibold text-sky-700 duration-500 hover:scale-105 hover:underline'
          >
            ← Quay lại danh sách
          </Link>
        </div>
      </div>
    );
  }

  const similar = MOCK_PROPERTIES.filter(
    (p) => p.id !== property.id && p.type === property.type,
  ).slice(0, 3);

  return (
    <div className='relative min-h-screen overflow-hidden bg-linear-to-br from-sky-300 via-white to-sky-200 text-slate-900'>
      {/* Decorative bg */}
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

      {/* Header / Gallery */}
      <section className='relative mx-auto max-w-7xl px-6 pt-24'>
        <Link
          to='/properties'
          className='group mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-3 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur transition duration-500 hover:scale-105 hover:border-sky-300 hover:bg-sky-50'
        >
          <ArrowLeft
            size={16}
            className='relative h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5'
          />
          Quay lại danh sách
        </Link>

        <div className='grid gap-4 lg:grid-cols-4'>
          <div className='relative overflow-hidden rounded-3xl shadow-xl shadow-sky-500/10 lg:col-span-3'>
            <img
              src={property.thumbnail}
              alt={property.title}
              className='h-130 w-full object-cover'
            />
            <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent' />
          </div>
          <div className='space-y-4'>
            {[1, 2, 3].map((x) => (
              <img
                key={x}
                src={property.thumbnail}
                alt=''
                className='h-41 w-full rounded-2xl object-cover shadow-sm ring-1 ring-sky-100'
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <section className='relative mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-3'>
        {/* Left */}
        <div className='lg:col-span-2'>
          <div className='mb-5 flex flex-wrap gap-2'>
            <span className='inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-[11px] font-bold tracking-widest text-sky-700 uppercase shadow-sm backdrop-blur'>
              {PROPERTY_TYPE_LABELS[property.type]}
            </span>
            {property.isVerified && (
              <span className='inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-4 py-1.5 text-[11px] font-bold tracking-widest text-emerald-700 uppercase shadow-sm backdrop-blur'>
                <ShieldCheck size={14} />
                Đã xác minh
              </span>
            )}
          </div>

          <h1 className='text-4xl leading-[1.1] font-black tracking-tight text-slate-900 md:text-5xl'>
            {property.title.split(' ').slice(0, -2).join(' ')}{' '}
            <em className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-transparent not-italic drop-shadow-[0_4px_30px_rgba(14,165,233,0.25)]'>
              {property.title.split(' ').slice(-2).join(' ')}
            </em>
          </h1>

          <div className='mt-4 flex items-center gap-2 text-slate-600'>
            <MapPin size={18} className='text-sky-600' />
            <span className='text-sm'>
              {property.address}, {property.district}, {property.city}
            </span>
          </div>

          <div className='mt-8 inline-flex items-baseline gap-2 rounded-2xl border border-sky-100 bg-white/80 px-6 py-4 shadow-lg shadow-sky-500/5 backdrop-blur'>
            <span className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-4xl font-black text-transparent md:text-5xl'>
              {property.price.toLocaleString()}đ
            </span>
            <span className='text-sm font-medium text-slate-500'>/tháng</span>
          </div>

          {/* Specs */}
          <div className='mt-10 grid grid-cols-3 gap-4'>
            <Spec icon={<Square />} label='Diện tích' value={`${property.area} m²`} />
            <Spec icon={<BedDouble />} label='Phòng ngủ' value={property.bedrooms} />
            <Spec icon={<Bath />} label='Phòng tắm' value={property.bathrooms} />
          </div>

          {/* Amenities */}
          <div className='mt-12'>
            <h2 className='text-2xl font-black tracking-tight text-slate-900'>Tiện ích nổi bật</h2>
            <div className='mt-5 flex flex-wrap gap-2'>
              {property.tags.map((tag) => (
                <span
                  key={tag}
                  className='rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-sky-300 hover:text-sky-700'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className='mt-12 rounded-2xl border border-sky-100 bg-white/80 p-8 shadow-lg shadow-sky-500/5 backdrop-blur'>
            <h2 className='mb-4 text-2xl font-black tracking-tight text-slate-900'>
              Thông tin chi tiết
            </h2>
            <p className='leading-8 text-slate-600'>
              Bất động sản đã được thẩm định và xác minh bởi hệ thống ký gửi. Chủ nhà đã hoàn tất
              hợp đồng ký gửi hợp lệ. Thành viên có thể đặt lịch xem nhà hoặc gửi yêu cầu tư vấn
              trực tiếp tới môi giới phụ trách.
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div>
          <div className='sticky top-24 rounded-2xl border border-sky-100 bg-white/80 p-7 shadow-xl shadow-sky-500/10 backdrop-blur'>
            <h3 className='text-lg font-black tracking-tight text-slate-900'>Hành động nhanh</h3>

            <div className='mt-5 space-y-3'>
              <button className='group durattion-500 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-br from-sky-600 to-blue-700 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-105 hover:shadow-xl hover:shadow-sky-500/40'>
                <Calendar size={16} />
                Đặt lịch xem nhà
              </button>
              <button className='inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white/80 py-3.5 text-sm font-semibold text-sky-700 transition duration-500 hover:scale-105 hover:border-sky-300 hover:bg-sky-50'>
                <Phone size={16} />
                Yêu cầu tư vấn
              </button>
              <button
                onClick={() => setSaved(!saved)}
                className={`inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border py-3.5 text-sm font-semibold transition duration-500 hover:scale-105 ${
                  saved
                    ? 'border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100'
                    : 'border-sky-200 bg-white/80 text-slate-700 hover:border-sky-300 hover:bg-sky-50'
                }`}
              >
                <Heart size={16} fill={saved ? 'currentColor' : 'none'} />
                {saved ? 'Đã lưu' : 'Lưu bất động sản'}
              </button>
            </div>

            {/* Broker */}
            <div className='mt-7 rounded-xl border border-sky-100 bg-linear-to-br from-sky-50/80 to-amber-50/60 p-4'>
              <h4 className='text-xs font-bold tracking-widest text-sky-700 uppercase'>
                Môi giới phụ trách
              </h4>
              <div className='mt-3 flex items-center gap-3'>
                <img
                  src='https://i.pravatar.cc/100'
                  className='h-12 w-12 rounded-full shadow-md ring-2 ring-white'
                  alt='Broker avatar'
                />
                <div>
                  <p className='font-bold text-slate-900'>Nguyễn Minh Anh</p>
                  <p className='text-xs text-slate-500'>Broker verified</p>
                </div>
              </div>
            </div>

            {/* Interaction status */}
            <div className='mt-4 inline-flex w-full items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm font-semibold text-emerald-700'>
              <CheckCircle2 size={16} />
              Hồ sơ sẵn sàng xem nhà
            </div>
          </div>
        </div>
      </section>

      {/* Similar */}
      <section className='relative mx-auto max-w-7xl px-6 pb-24'>
        <h2 className='mb-8 text-3xl font-black tracking-tight text-slate-900 md:text-4xl'>
          Bất động sản{' '}
          <em className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-transparent not-italic'>
            tương tự
          </em>
        </h2>
        <div className='grid gap-6 md:grid-cols-3'>
          {similar.map((p) => (
            <Link
              key={p.id}
              to={`/properties/${p.id}`}
              className='group overflow-hidden rounded-2xl border border-sky-100 bg-white/80 shadow-lg shadow-sky-500/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10'
            >
              <div className='overflow-hidden'>
                <img
                  src={p.thumbnail}
                  className='h-56 w-full object-cover transition duration-500 group-hover:scale-105'
                  alt='Similar property thumbnail'
                />
              </div>
              <div className='p-5'>
                <h3 className='font-bold text-slate-900 group-hover:text-sky-700'>{p.title}</h3>
                <p className='mt-2 bg-linear-to-br from-sky-600 to-blue-700 bg-clip-text text-lg font-black text-transparent'>
                  {p.price.toLocaleString()}đ
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
