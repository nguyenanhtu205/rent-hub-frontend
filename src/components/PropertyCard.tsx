import { Link } from 'react-router-dom';
import type { Property } from '../types/property';
import { PROPERTY_TYPE_LABELS } from '../mocks/data/mockData';

type Props = {
  property: Property;
};

function formatPrice(price: number): string {
  if (price >= 1_000_000) {
    const val = price / 1_000_000;
    return `${Number.isInteger(val) ? val : val.toFixed(1)} triệu/tháng`;
  }
  return `${price.toLocaleString('vi-VN')}đ/tháng`;
}

export default function PropertyCard({ property }: Props) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className='group relative flex flex-col overflow-hidden rounded-2xl bg-linear-to-br from-blue-700 via-sky-600 to-blue-800 p-[1.5px] shadow-lg shadow-sky-900/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-700/30'
    >
      {/* Glow halo on hover */}
      <div className='pointer-events-none absolute -inset-1 rounded-3xl bg-linear-to-r from-sky-400/0 via-amber-300/40 to-blue-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100' />

      <div className='relative flex flex-1 flex-col overflow-hidden rounded-[14px] bg-linear-to-br from-blue-50 via-white to-sky-50'>
        {/* Image */}
        <div className='relative h-52 overflow-hidden'>
          <img
            src={property.thumbnail}
            alt={property.title}
            className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
            loading='lazy'
          />
          {/* Bottom gradient veil */}
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-blue-950/60 via-blue-900/20 to-transparent' />

          {/* Type badge */}
          <span className='absolute top-3 left-3 rounded-full bg-linear-to-r from-blue-700 to-sky-600 px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase shadow-md ring-1 shadow-blue-900/40 ring-white/30 backdrop-blur'>
            {PROPERTY_TYPE_LABELS[property.type]}
          </span>
          {/* Verified badge */}
          {property.isVerified && (
            <span className='absolute top-3 right-3 flex items-center gap-1 rounded-full bg-linear-to-r from-amber-400 to-amber-300 px-3 py-1 text-[11px] font-bold text-blue-950 shadow-md ring-1 shadow-amber-500/40 ring-white/40'>
              <svg
                width='11'
                height='11'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
              >
                <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
                <polyline points='9 12 11 14 15 10' />
              </svg>
              Đã thẩm định
            </span>
          )}

          {/* Price overlay */}
          <div className='absolute right-3 bottom-3 left-3'>
            <p className='text-xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'>
              <span className='bg-linear-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent'>
                {formatPrice(property.price)}
              </span>
            </p>
          </div>
        </div>

        {/* Body */}
        <div className='relative flex flex-1 flex-col p-5'>
          <h3 className='mb-2 line-clamp-2 text-[15px] leading-snug font-bold text-blue-950 transition-colors group-hover:text-sky-700'>
            {property.title}
          </h3>
          <p className='mb-4 flex items-center gap-1.5 text-[13px] font-medium text-sky-700/80'>
            <svg
              width='13'
              height='13'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
              <circle cx='12' cy='10' r='3' />
            </svg>
            {property.district}, {property.city}
          </p>

          {/* Specs */}
          <div className='mb-4 flex items-center gap-2 rounded-xl border border-sky-100 bg-white/70 px-3 py-2.5 text-[12px] font-semibold text-blue-900 shadow-sm backdrop-blur'>
            <span className='flex flex-1 items-center justify-center gap-1.5'>
              <svg
                width='13'
                height='13'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='text-sky-600'
              >
                <rect x='3' y='3' width='18' height='18' rx='2' />
                <path d='M3 9h18M9 21V9' />
              </svg>
              {property.area} m²
            </span>
            {property.bedrooms > 0 && (
              <>
                <span className='h-4 w-px bg-sky-200' />
                <span className='flex flex-1 items-center justify-center gap-1.5'>
                  <svg
                    width='13'
                    height='13'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='text-sky-600'
                  >
                    <path d='M2 9V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5' />
                    <path d='M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0z' />
                  </svg>
                  {property.bedrooms} PN
                </span>
              </>
            )}
            <span className='h-4 w-px bg-sky-200' />
            <span className='flex flex-1 items-center justify-center gap-1.5'>
              <svg
                width='13'
                height='13'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='text-sky-600'
              >
                <path d='M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5' />
                <line x1='10' x2='8' y1='5' y2='7' />
                <line x1='2' x2='22' y1='12' y2='12' />
              </svg>
              {property.bathrooms} WC
            </span>
          </div>

          {/* Tags */}
          <div className='mt-auto flex flex-wrap gap-1.5'>
            {property.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className='rounded-full border border-sky-200/70 bg-linear-to-r from-sky-50 to-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
