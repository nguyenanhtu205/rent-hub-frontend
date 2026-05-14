import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const columns = [
    {
      heading: 'Dịch vụ',
      links: [
        { label: 'Ký gửi BĐS', href: '/#services' },
        { label: 'Tìm thuê nhà', href: '/properties' },
        { label: 'Quy trình', href: '/#process' },
      ],
    },
    {
      heading: 'Hỗ trợ',
      links: [
        { label: 'Câu hỏi thường gặp', href: '/#faq' },
        { label: 'Liên hệ', href: '/#contact' },
        { label: 'Điều khoản', href: '/terms' },
      ],
    },
    {
      heading: 'Tài khoản',
      links: [
        { label: 'Đăng ký', href: '/register' },
        { label: 'Đăng nhập', href: '/login' },
        { label: 'Chủ nhà ký gửi', href: '/owner/register' },
      ],
    },
  ];

  return (
    <footer className='relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-amber-50 text-slate-600'>
      {/* Ambient gradient blobs */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl' />
        <div className='absolute -right-24 -bottom-40 h-112 w-md rounded-full bg-amber-300/30 blur-3xl' />
        <div className='absolute top-1/3 left-1/2 h-80 w-[20rem] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl' />
      </div>

      {/* Grid overlay */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.05]'
        style={{
          backgroundImage:
            'linear-gradient(to right, #0c4a6e 1px, transparent 1px), linear-gradient(to bottom, #0c4a6e 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top hairline gradient */}
      <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent' />

      <div className='relative mx-auto max-w-7xl px-6 pt-20 pb-14'>
        <div className='grid gap-14 md:grid-cols-12'>
          {/* Brand */}
          <div className='md:col-span-4'>
            <Link to='/' className='group mb-5 inline-flex items-center gap-3'>
              <span className='relative flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-sky-500 to-blue-700 p-0.5 shadow-lg shadow-sky-500/30 transition-transform group-hover:scale-105'>
                <span className='flex h-full w-full items-center justify-center rounded-[7px] bg-white text-[11px] font-black tracking-wide text-sky-700'>
                  RH
                </span>
              </span>
              <span className='bg-linear-to-br from-blue-800 via-sky-600 to-amber-500 bg-clip-text text-xl font-black tracking-tight text-transparent'>
                RentHub
              </span>
            </Link>

            <p className='max-w-sm text-sm leading-relaxed text-slate-600'>
              Nền tảng ký gửi và cho thuê bất động sản{' '}
              <span className='font-semibold text-sky-700'>minh bạch</span>, chuyên nghiệp — kết nối
              chủ nhà và người thuê một cách dễ dàng.
            </p>

            {/* Contact chips */}
            <ul className='mt-6 space-y-2.5 text-sm'>
              <li className='flex items-center gap-2.5 text-slate-600'>
                <span className='flex h-7 w-7 items-center justify-center rounded-lg border border-sky-200 bg-white text-sky-600 shadow-sm'>
                  <Phone className='h-3.5 w-3.5' />
                </span>
                <a href='tel:19001234' className='transition-colors hover:text-sky-700'>
                  1900 1234
                </a>
              </li>
              <li className='flex items-center gap-2.5 text-slate-600'>
                <span className='flex h-7 w-7 items-center justify-center rounded-lg border border-sky-200 bg-white text-sky-600 shadow-sm'>
                  <Mail className='h-3.5 w-3.5' />
                </span>
                <a href='mailto:hello@renthub.vn' className='transition-colors hover:text-sky-700'>
                  hello@renthub.vn
                </a>
              </li>
              <li className='flex items-center gap-2.5 text-slate-600'>
                <span className='flex h-7 w-7 items-center justify-center rounded-lg border border-sky-200 bg-white text-sky-600 shadow-sm'>
                  <MapPin className='h-3.5 w-3.5' />
                </span>
                <span>Hà Nội</span>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <div className='grid gap-10 sm:grid-cols-3 md:col-span-8'>
            {columns.map((col) => (
              <div key={col.heading} className='flex flex-col gap-3.5'>
                <h4 className='inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-sky-700 uppercase'>
                  <span className='h-px w-5 bg-linear-to-r from-sky-500/80 to-transparent' />
                  {col.heading}
                </h4>
                {col.links.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className='group inline-flex w-fit items-center gap-1.5 text-sm text-slate-600 transition-colors hover:text-sky-700'
                  >
                    <span className='relative'>
                      {l.label}
                      <span className='absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-linear-to-r from-sky-500 to-amber-400 transition-transform duration-300 group-hover:scale-x-100' />
                    </span>
                    <ArrowUpRight className='h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100' />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='relative'>
        <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-300/60 to-transparent' />
      </div>

      <div className='relative'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-[13px] text-slate-500 sm:flex-row'>
          <p className='flex items-center gap-2'>
            <span className='inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]' />
            © 2026 RentHub
          </p>

          {/* Socials */}
          <div className='flex items-center gap-2'>
            {[
              { Icon: FaFacebook, href: '#', label: 'Facebook' },
              { Icon: FaInstagram, href: '#', label: 'Instagram' },
              { Icon: FaYoutube, href: '#', label: 'Youtube' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className='group flex h-9 w-9 items-center justify-center rounded-lg border border-sky-200 bg-white text-slate-500 shadow-sm transition-all hover:border-sky-400 hover:bg-linear-to-br hover:from-sky-50 hover:to-amber-50 hover:text-sky-700'
              >
                <Icon className='h-4 w-4 transition-transform group-hover:scale-110' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
