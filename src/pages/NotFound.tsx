import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Compass, Home } from 'lucide-react';
import { useAuthStore } from '../stores/authStore.ts';

export default function NotFound() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  return (
    <div className='relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-sky-50 via-white to-amber-50 px-6 text-slate-900'>
      {/* Ambient gradient blobs */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -left-40 h-112 w-md animate-pulse rounded-full bg-sky-300/40 blur-3xl' />
        <div
          className='absolute -right-32 -bottom-40 h-128 w-lg animate-pulse rounded-full bg-amber-300/40 blur-3xl'
          style={{ animationDelay: '1s' }}
        />
        <div
          className='absolute top-1/2 left-1/2 h-96 w-[24rem] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-200/40 blur-3xl'
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.06]'
        style={{
          backgroundImage:
            'linear-gradient(to right, #0c4a6e 1px, transparent 1px), linear-gradient(to bottom, #0c4a6e 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className='relative z-10 mx-auto max-w-xl text-center'>
        {/* 404 */}
        <div className='relative mx-auto inline-block'>
          <h1 className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-[10rem] leading-none font-black tracking-tighter text-transparent drop-shadow-[0_8px_40px_rgba(14,165,233,0.25)] select-none sm:text-[14rem]'>
            404
          </h1>
          <div
            aria-hidden
            className='absolute inset-0 bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-[10rem] leading-none font-black tracking-tighter text-transparent opacity-30 blur-2xl select-none sm:text-[14rem]'
          >
            404
          </div>
        </div>

        {/* Badge */}
        <div className='mx-auto -mt-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-widest text-sky-700 uppercase shadow-sm backdrop-blur'>
          <Compass className='h-3.5 w-3.5' />
          Lạc đường rồi
        </div>

        <h2 className='mt-6 text-3xl font-bold text-slate-900 sm:text-4xl'>Không tìm thấy trang</h2>
        <p className='mx-auto mt-3 max-w-md text-base text-slate-600'>
          Trang bạn đang tìm có thể đã bị di chuyển, đổi tên hoặc chưa từng tồn tại. Đừng lo — hãy
          quay lại và tiếp tục khám phá.
        </p>

        {/* Actions */}
        <div className='mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <button
            onClick={() => navigate(-1)}
            className='group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-800 shadow-sm backdrop-blur transition duration-500 hover:scale-105 hover:border-sky-300 hover:bg-white'
          >
            <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-0.5' />
            Quay lại
          </button>

          <Link
            to={
              !user
                ? '/'
                : user.role === 'member'
                  ? '/'
                  : user.role === 'landlord'
                    ? '/landlord/dashboard'
                    : '/internal/dashboard'
            }
            className='group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-sky-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/50'
          >
            <span className='absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 group-hover:translate-x-full hover:scale-105' />
            <Home className='relative h-4 w-4' />
            <span className='relative'>Về trang chủ</span>
          </Link>
        </div>

        {/* Footer hint */}
        <p className='mt-12 text-xs text-slate-500'>
          Mã lỗi: <span className='font-mono text-slate-700'>ERR_PAGE_NOT_FOUND</span>
        </p>
      </div>
    </div>
  );
}
