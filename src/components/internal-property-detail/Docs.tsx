import { MOCK_DOCS } from '../../constants/InternalPropertyDetailConstant';

export default function Docs() {
  return (
    <div className='relative space-y-3'>
      {/* Ambient blobs */}
      <div className='pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl' />
      <div className='pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl' />

      <div className='relative mb-4 flex items-center justify-between'>
        <div className='inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-bold text-sky-700 backdrop-blur'>
          <svg
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
            <polyline points='14 2 14 8 20 8' />
          </svg>
          {MOCK_DOCS.length} tài liệu
        </div>
        <button className='inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-linear-to-br from-sky-600 to-blue-700 px-4 py-2 text-xs font-bold text-white shadow-sm shadow-sky-600/25 transition-all duration-500 hover:scale-105 hover:shadow-md'>
          <svg
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
          >
            <line x1='12' y1='5' x2='12' y2='19' />
            <line x1='5' y1='12' x2='19' y2='12' />
          </svg>
          Tải lên
        </button>
      </div>

      {MOCK_DOCS.map((doc) => (
        <div
          key={doc.name}
          className='group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-sky-100 bg-white/80 p-4 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50'
        >
          {/* Accent strip */}
          <div className='absolute inset-y-0 left-0 w-1 bg-linear-to-b from-sky-600 to-blue-700' />

          <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-600 to-blue-700 text-white shadow-sm shadow-sky-600/25'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
              <polyline points='14 2 14 8 20 8' />
            </svg>
          </div>
          <div className='min-w-0 flex-1'>
            <p className='truncate text-sm font-bold text-slate-900'>{doc.name}</p>
            <p className='mt-0.5 inline-flex items-center gap-1.5 text-xs text-slate-500'>
              <span className='font-mono text-slate-400'>{doc.size}</span>
              <span className='text-slate-300'>·</span>
              <span>Tải lên {doc.uploaded}</span>
            </p>
          </div>
          <button className='inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-sky-100 bg-white/70 text-sky-600 backdrop-blur transition-all duration-500 hover:scale-105 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
              <polyline points='7 10 12 15 17 10' />
              <line x1='12' y1='15' x2='12' y2='3' />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
