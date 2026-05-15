import { type SubmitEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowRight, Eye, EyeOff, Loader2, Lock, Mail, ShieldCheck, } from 'lucide-react';
import useLogin from '../hooks/useLogin';

const stats: [string, string][] = [
  ['1.200+', 'Bất động sản'],
  ['98%', 'Hài lòng'],
  ['850+', 'Giao dịch'],
];

export default function Login() {
  const navigate = useNavigate();
  const { login, isPending } = useLogin();

  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!form.email || !form.password) {
      setError('Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    login(
      { email: form.email, password: form.password },
      {
        onSuccess: (data) => {
          if (data.user.role === 'member') navigate('/');
          else if (data.user.role === 'landlord') navigate('/landlord/dashboard');
          else navigate('/internal/dashboard');
        },
        onError: () => setError('Email hoặc mật khẩu không đúng.'),
      },
    );
  };

  return (
    <div className='relative min-h-screen overflow-hidden bg-linear-to-br from-sky-50 via-white to-amber-50'>
      {/* Ambient blobs */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -top-32 -left-32 h-112 w-md rounded-full bg-sky-300/30 blur-3xl' />
        <div className='absolute -right-24 -bottom-32 h-112 w-md rounded-full bg-amber-300/30 blur-3xl' />
        <div className='absolute top-1/2 left-1/2 h-80 w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/30 blur-3xl' />
      </div>

      <div className='relative mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2'>
        {/* Left panel — illustration */}
        <div className='relative hidden flex-col justify-between overflow-hidden p-10 lg:flex xl:w-170'>
          <div className='relative flex flex-1 flex-col overflow-hidden rounded-3xl bg-linear-to-br from-blue-700 via-sky-600 to-blue-800 p-10 shadow-2xl ring-1 shadow-sky-900/30 ring-white/10'>
            {/* Dot pattern */}
            <div
              className='pointer-events-none absolute inset-0 opacity-[0.18]'
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />
            {/* Glow */}
            <div className='pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-amber-400/30 blur-3xl' />
            <div className='pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl' />

            {/* Logo */}
            <Link to='/' className='relative inline-flex items-center gap-2.5 self-start'>
              <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 p-0.5 ring-1 ring-white/30 backdrop-blur'>
                <span className='flex h-full w-full items-center justify-center rounded-[10px] bg-white text-[12px] font-black tracking-wide text-sky-700'>
                  RH
                </span>
              </span>
              <span className='text-lg font-black tracking-tight text-white'>RentHub</span>
            </Link>

            {/* Center content */}
            <div className='relative my-auto'>
              <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-semibold tracking-widest text-white uppercase backdrop-blur'>
                <ShieldCheck className='h-3.5 w-3.5 text-amber-300' />
                Nền tảng uy tín
              </div>

              <h2 className='text-[32px] leading-tight font-black text-white drop-shadow-sm xl:text-5xl'>
                Quản lý bất động sản
                <br />
                <span className='bg-linear-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent'>
                  minh bạch & hiệu quả
                </span>
              </h2>

              <p className='mt-5 max-w-md text-[15px] leading-relaxed text-sky-50/90 xl:text-[22px]'>
                Hàng nghìn giao dịch thành công. Đội ngũ môi giới chuyên nghiệp. Hệ thống pháp lý
                chuẩn mực.
              </p>
            </div>

            {/* Stats row */}
            <div className='relative grid grid-cols-3 gap-3'>
              {stats.map(([v, l]) => (
                <div
                  key={l}
                  className='mb-16 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur transition-colors duration-500 hover:scale-105 hover:bg-white/15'
                >
                  <div className='bg-linear-to-br from-white to-amber-200 bg-clip-text text-2xl font-black text-transparent'>
                    {v}
                  </div>
                  <div className='mt-1 text-[11px] font-medium tracking-wider text-sky-100/80 uppercase'>
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — form */}
        <div className='relative flex items-center justify-center px-6 py-10 sm:px-10'>
          <div className='w-full max-w-md'>
            {/* Mobile logo */}
            <Link to='/' className='mb-8 inline-flex items-center gap-2.5 lg:hidden'>
              <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-700 p-0.5 shadow-lg shadow-sky-500/30'>
                <span className='flex h-full w-full items-center justify-center rounded-[10px] bg-white text-[12px] font-black tracking-wide text-sky-700'>
                  RH
                </span>
              </span>
              <span className='bg-linear-to-br from-blue-800 via-sky-600 to-amber-500 bg-clip-text text-lg font-black tracking-tight text-transparent'>
                RentHub
              </span>
            </Link>

            <div className='rounded-3xl border border-sky-100 bg-white/80 p-7 shadow-xl shadow-sky-900/5 backdrop-blur-xl sm:p-9'>
              <h1 className='text-3xl font-black tracking-tight text-slate-900'>Đăng nhập</h1>
              <p className='mt-2 text-sm text-slate-600'>
                Chưa có tài khoản?{' '}
                <Link
                  to='/register'
                  className='font-semibold text-sky-700 transition-colors hover:text-sky-800'
                >
                  Đăng ký miễn phí
                </Link>
              </p>

              {/* Error */}
              {error && (
                <div className='mt-5 flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-sm text-rose-700'>
                  <AlertCircle className='h-4 w-4 shrink-0' />
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
                {/* Email */}
                <div>
                  <label className='mb-1.5 block text-xs font-semibold tracking-wider text-slate-600 uppercase'>
                    Email
                  </label>
                  <div className='relative'>
                    <Mail className='pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400' />
                    <input
                      type='email'
                      placeholder='ban@example.com'
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className='w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pl-10 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15'
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className='mb-1.5 flex items-center justify-between'>
                    <label className='text-xs font-semibold tracking-wider text-slate-600 uppercase'>
                      Mật khẩu
                    </label>
                    <Link
                      to='/'
                      className='text-xs font-semibold text-sky-700 transition-colors hover:text-sky-800'
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
                  <div className='relative'>
                    <Lock className='pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400' />
                    <input
                      type={showPw ? 'text' : 'password'}
                      placeholder='••••••••'
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      className='w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-11 pl-10 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPw(!showPw)}
                      className='absolute top-1/2 right-3.5 -translate-y-1/2 cursor-pointer text-slate-400 transition-colors hover:text-sky-700'
                      tabIndex={-1}
                      aria-label={showPw ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      {showPw ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <label className='flex cursor-pointer items-center gap-2 text-sm text-slate-600 select-none'>
                  <input
                    type='checkbox'
                    checked={form.remember}
                    onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                    className='h-4 w-4 rounded border-slate-300 text-sky-600 accent-sky-600'
                  />
                  Ghi nhớ đăng nhập
                </label>

                {/* Submit */}
                <button
                  type='submit'
                  disabled={isPending}
                  className='group relative inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-sky-600 to-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/50 disabled:cursor-not-allowed disabled:opacity-70'
                >
                  <span className='absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full' />
                  {isPending ? (
                    <>
                      <Loader2 className='relative h-4 w-4 animate-spin' />
                      <span className='relative'>Đang đăng nhập...</span>
                    </>
                  ) : (
                    <>
                      <span className='relative'>Đăng nhập</span>
                      <ArrowRight className='relative h-4 w-4 transition-transform group-hover:translate-x-0.5' />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className='my-6 flex items-center gap-3'>
                <div className='h-px flex-1 bg-linear-to-r from-transparent to-sky-200' />
                <span className='text-[11px] font-semibold tracking-widest text-slate-400 uppercase'>
                  hoặc đăng nhập với
                </span>
                <div className='h-px flex-1 bg-linear-to-l from-transparent to-sky-200' />
              </div>

              {/* Social login */}
              <div className='grid grid-cols-2 gap-3'>
                <button
                  type='button'
                  className='inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-500 hover:scale-105 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700'
                >
                  <svg className='h-4 w-4' viewBox='0 0 24 24' aria-hidden>
                    <path
                      fill='#EA4335'
                      d='M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.5 14.6 2.6 12 2.6 6.8 2.6 2.6 6.8 2.6 12s4.2 9.4 9.4 9.4c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12z'
                    />
                  </svg>
                  Google
                </button>
                <button
                  type='button'
                  className='inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-500 hover:scale-105 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700'
                >
                  <svg className='h-4 w-4' viewBox='0 0 24 24' fill='#1877F2' aria-hidden>
                    <path d='M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z' />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>

            <p className='mt-6 text-center text-xs text-slate-500'>
              Bằng việc đăng nhập, bạn đồng ý với{' '}
              <Link to='/' className='font-semibold text-sky-700 hover:text-sky-800'>
                Điều khoản
              </Link>{' '}
              &{' '}
              <Link to='/' className='font-semibold text-sky-700 hover:text-sky-800'>
                Chính sách
              </Link>{' '}
              của chúng tôi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
