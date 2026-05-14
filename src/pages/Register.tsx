import { type ChangeEvent, type SubmitEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  Home,
  Loader2,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  User,
  UserCheck,
} from 'lucide-react';

type Role = 'member' | 'owner';
 type FormState = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: Role;
  agree: boolean;
}

function getPasswordStrength(pw: string): { score: number; label: string; color: string } {
  if (!pw) return { score: 0, label: '', color: '' };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const levels = [
    { score: 1, label: 'Yếu', color: 'bg-red-400' },
    { score: 2, label: 'Trung bình', color: 'bg-amber-400' },
    { score: 3, label: 'Khá', color: 'bg-sky-400' },
    { score: 4, label: 'Mạnh', color: 'bg-emerald-500' },
  ];
  return levels[Math.min(score, 4) - 1] ?? { score: 0, label: '', color: '' };
}

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'member',
    agree: false,
  });
  const [showPw, setShowPw] = useState(false);
  const [showCPw, setShowCPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({
      ...f,
      [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));

  const validate = (): boolean => {
    const errs: typeof errors = {};
    if (!form.fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên.';
    if (!form.email) errs.email = 'Vui lòng nhập email.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Email không hợp lệ.';
    if (!form.phone) errs.phone = 'Vui lòng nhập số điện thoại.';
    else if (!/^(0|\+84)[0-9]{8,9}$/.test(form.phone)) errs.phone = 'Số điện thoại không hợp lệ.';
    if (!form.password) errs.password = 'Vui lòng nhập mật khẩu.';
    else if (form.password.length < 8) errs.password = 'Mật khẩu phải ít nhất 8 ký tự.';
    if (form.confirmPassword !== form.password)
      errs.confirmPassword = 'Mật khẩu xác nhận không khớp.';
    if (!form.agree) errs.agree = 'Bạn cần đồng ý với điều khoản.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // TODO: call API
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    navigate('/');
  };

  const pwStrength = getPasswordStrength(form.password);

  const benefits = [
    'Xem chi tiết bất động sản đã thẩm định',
    'Đặt lịch xem nhà trực tuyến',
    'Gửi yêu cầu tư vấn với môi giới',
    'Theo dõi tiến độ xử lý yêu cầu',
    'Đăng tin ký gửi và quản lý bất động sản dễ dàng',
    'Theo dõi lượt quan tâm và lịch hẹn xem nhà',
    'Nhận hỗ trợ định giá và thẩm định tài sản',
  ];

  return (
    <div className='relative min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-white to-sky-50'>
      {/* Ambient blobs */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl' />
        <div className='absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-blue-300/25 blur-3xl' />
        <div className='absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl' />
      </div>

      <div className='relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2'>
        {/* Left panel */}
        <div className='relative hidden flex-col overflow-hidden p-10 lg:flex xl:p-14'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(2,132,199,0.12)_1px,transparent_0)] bg-size-[22px_22px]' />
          <div className='absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl' />

          {/* Logo */}
          <div className='relative flex items-center gap-2.5'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-600 to-blue-700 text-sm font-bold text-white shadow-lg shadow-sky-500/30'>
              RH
            </div>
            <span className='text-lg font-bold tracking-tight text-slate-900'>RentHub</span>
          </div>

          {/* Center content */}
          <div className='relative mt-4 space-y-7'>
            <div className='inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-sky-700 shadow-sm backdrop-blur'>
              <ShieldCheck className='h-3.5 w-3.5' />
              Tham gia cộng đồng RentHub
            </div>

            <h1 className='mt-12 text-4xl leading-tight font-bold tracking-tight text-slate-900 xl:text-5xl'>
              Tham gia cộng đồng
              <br />
              <span className='bg-linear-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent'>
                hàng ngàn thành viên
              </span>
            </h1>

            <p className='max-w-md text-base leading-relaxed text-slate-600'>
              Tìm kiếm bất động sản phù hợp hoặc ký gửi tài sản của bạn — tất cả trong một nền tảng
              minh bạch & hiệu quả.
            </p>

            {/* Benefit list */}
            <ul className='space-y-3 pt-2'>
              {benefits.map((item) => (
                <li key={item} className='flex items-start gap-3'>
                  <span className='mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sky-100 text-sky-700 ring-1 ring-sky-200'>
                    <Check className='h-3.5 w-3.5' strokeWidth={3} />
                  </span>
                  <span className='text-sm text-slate-700'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right panel — form */}
        <div className='flex items-center justify-center px-4 py-10 sm:px-6 lg:px-10'>
          <div className='w-full max-w-lg'>
            {/* Mobile logo */}
            <div className='mb-6 flex items-center justify-center gap-2.5 lg:hidden'>
              <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-600 to-blue-700 text-sm font-bold text-white shadow-lg shadow-sky-500/30'>
                RH
              </div>
              <span className='text-lg font-bold tracking-tight text-slate-900'>RentHub</span>
            </div>

            <div className='rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-xl shadow-sky-900/5 backdrop-blur sm:p-8'>
              <h2 className='text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl'>
                Tạo tài khoản
              </h2>
              <p className='mt-1.5 text-sm text-slate-600'>
                Đã có tài khoản?{' '}
                <Link
                  to='/login'
                  className='font-semibold text-sky-700 transition-colors hover:text-sky-800'
                >
                  Đăng nhập
                </Link>
              </p>

              {/* Role selector */}
              <div className='mt-6 grid grid-cols-2 gap-3'>
                {(
                  [
                    {
                      role: 'member' as Role,
                      label: 'Người thuê',
                      desc: 'Tìm & đặt lịch xem nhà',
                      icon: <UserCheck className='h-5 w-5' />,
                    },
                    {
                      role: 'owner' as Role,
                      label: 'Chủ nhà',
                      desc: 'Ký gửi bất động sản',
                      icon: <Home className='h-5 w-5' />,
                    },
                  ] as const
                ).map(({ role, label, desc, icon }) => {
                  const active = form.role === role;
                  return (
                    <button
                      key={role}
                      type='button'
                      onClick={() => setForm((f) => ({ ...f, role }))}
                      className={`group flex cursor-pointer flex-col items-start gap-2 rounded-xl border-2 p-3.5 text-left transition-all ${
                        active
                          ? 'border-sky-600 bg-sky-50/70 shadow-sm shadow-sky-500/10'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                          active
                            ? 'bg-linear-to-br from-sky-600 to-blue-700 text-white'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                        }`}
                      >
                        {icon}
                      </span>
                      <span
                        className={`text-sm font-semibold ${active ? 'text-sky-800' : 'text-slate-900'}`}
                      >
                        {label}
                      </span>
                      <span className='text-xs text-slate-500'>{desc}</span>
                    </button>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
                {/* Full name */}
                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-slate-700'>Họ và tên</label>
                  <div className='relative'>
                    <User className='pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400' />
                    <input
                      type='text'
                      placeholder='Nguyễn Văn A'
                      value={form.fullName}
                      onChange={set('fullName')}
                      className='w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pl-10 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15'
                    />
                  </div>
                  {errors.fullName && (
                    <p className='flex items-center gap-1 text-xs text-red-600'>
                      <AlertCircle className='h-3 w-3' />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-slate-700'>Email</label>
                  <div className='relative'>
                    <Mail className='pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400' />
                    <input
                      type='email'
                      placeholder='ban@example.com'
                      value={form.email}
                      onChange={set('email')}
                      className='w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pl-10 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15'
                    />
                  </div>
                  {errors.email && (
                    <p className='flex items-center gap-1 text-xs text-red-600'>
                      <AlertCircle className='h-3 w-3' />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-slate-700'>Số điện thoại</label>
                  <div className='relative'>
                    <Phone className='pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400' />
                    <input
                      type='tel'
                      placeholder='0901234567'
                      value={form.phone}
                      onChange={set('phone')}
                      className='w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pl-10 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15'
                    />
                  </div>
                  {errors.phone && (
                    <p className='flex items-center gap-1 text-xs text-red-600'>
                      <AlertCircle className='h-3 w-3' />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-slate-700'>Mật khẩu</label>
                  <div className='relative'>
                    <Lock className='pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400' />
                    <input
                      type={showPw ? 'text' : 'password'}
                      placeholder='Tối thiểu 8 ký tự'
                      value={form.password}
                      onChange={set('password')}
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
                  {/* Strength bar */}
                  {form.password && (
                    <div className='space-y-1 pt-1'>
                      <div className='flex gap-1'>
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className={`h-1.5 flex-1 rounded-full transition-colors ${
                              i <= pwStrength.score ? pwStrength.color : 'bg-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                      <p className='text-xs text-slate-500'>
                        Độ mạnh:{' '}
                        <span className='font-medium text-slate-700'>{pwStrength.label}</span>
                      </p>
                    </div>
                  )}
                  {errors.password && (
                    <p className='flex items-center gap-1 text-xs text-red-600'>
                      <AlertCircle className='h-3 w-3' />
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm password */}
                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-slate-700'>Xác nhận mật khẩu</label>
                  <div className='relative'>
                    <Lock className='pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400' />
                    <input
                      type={showCPw ? 'text' : 'password'}
                      placeholder='Nhập lại mật khẩu'
                      value={form.confirmPassword}
                      onChange={set('confirmPassword')}
                      className='w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-16 pl-10 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15'
                    />
                    {form.confirmPassword && form.confirmPassword === form.password && (
                      <CheckCircle2 className='absolute top-1/2 right-10 h-4 w-4 -translate-y-1/2 text-emerald-500' />
                    )}
                    <button
                      type='button'
                      onClick={() => setShowCPw(!showCPw)}
                      className='absolute top-1/2 right-3.5 -translate-y-1/2 cursor-pointer text-slate-400 transition-colors hover:text-sky-700'
                      tabIndex={-1}
                      aria-label={showCPw ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      {showCPw ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className='flex items-center gap-1 text-xs text-red-600'>
                      <AlertCircle className='h-3 w-3' />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Agree */}
                <div className='space-y-1.5 pt-1'>
                  <label className='flex cursor-pointer items-start gap-2.5 text-sm text-slate-600'>
                    <input
                      type='checkbox'
                      checked={form.agree}
                      onChange={set('agree')}
                      className='mt-0.5 h-4 w-4 rounded border-slate-300 text-sky-600 accent-sky-600'
                    />
                    <span className='leading-relaxed'>
                      Tôi đồng ý với{' '}
                      <Link to='/terms' className='font-semibold text-sky-700 hover:text-sky-800'>
                        Điều khoản sử dụng
                      </Link>{' '}
                      và{' '}
                      <Link to='/privacy' className='font-semibold text-sky-700 hover:text-sky-800'>
                        Chính sách quyền riêng tư
                      </Link>{' '}
                      của RentHub.
                    </span>
                  </label>
                  {errors.agree && (
                    <p className='flex items-center gap-1 text-xs text-red-600'>
                      <AlertCircle className='h-3 w-3' />
                      {errors.agree}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type='submit'
                  disabled={loading}
                  className='group relative flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-sky-600 to-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/35 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70'
                >
                  {loading ? (
                    <>
                      <Loader2 className='h-4 w-4 animate-spin' />
                      Đang tạo tài khoản...
                    </>
                  ) : (
                    <>
                      Tạo tài khoản
                      <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
                    </>
                  )}
                </button>
              </form>
            </div>

            <p className='mt-5 text-center text-xs text-slate-500'>
              Bằng việc đăng ký, bạn đồng ý với{' '}
              <Link to='/terms' className='font-medium text-slate-700 hover:text-sky-700'>
                Điều khoản
              </Link>{' '}
              &{' '}
              <Link to='/privacy' className='font-medium text-slate-700 hover:text-sky-700'>
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
