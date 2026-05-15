import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { useShallow } from 'zustand/react/shallow';

export default function Navbar() {
  const { user, accessToken } = useAuthStore(
    useShallow((state) => ({
      user: state.user,
      accessToken: state.accessToken,
    })),
  );
  console.log(user, accessToken);

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Bất động sản', href: '/properties' },
    { label: 'Dịch vụ', href: '/services' },
    { label: 'Liên hệ', href: '/contact' },
  ];

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-sky-100 bg-white/85 backdrop-blur-xl'>
      {/* Top hairline */}
      <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent' />

      <div className='relative mx-auto flex h-17 max-w-7xl items-center gap-10 px-6'>
        {/* Logo */}
        <Link to='/' className='group flex shrink-0 items-center gap-2.5'>
          <span className='relative flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-sky-500 to-blue-700 p-0.5 shadow-lg shadow-sky-500/30 transition-transform group-hover:scale-105'>
            <span className='flex h-full w-full items-center justify-center rounded-[7px] bg-white text-[11px] font-black tracking-wide text-sky-700'>
              RH
            </span>
          </span>
          <span className='bg-linear-to-br from-blue-800 via-sky-600 to-amber-500 bg-clip-text text-lg font-black tracking-tight text-transparent'>
            RentHub
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className='hidden flex-1 items-center gap-1 lg:flex'>
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'
                }`}
              >
                <span className='relative'>
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-linear-to-r from-sky-500 to-amber-400 transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className='ml-auto hidden items-center gap-2 lg:flex'>
          <Link
            to='/login'
            className='rounded-lg border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm transition-all duration-500 hover:scale-105 hover:border-sky-300 hover:bg-sky-50'
          >
            Đăng nhập
          </Link>
          <Link
            to='/register'
            className='group relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg bg-linear-to-r from-sky-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/50'
          >
            <span className='absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full' />
            <span className='relative'>Đăng ký</span>
            <ArrowRight className='relative h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className='ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-sky-200 bg-white text-sky-700 shadow-sm transition hover:bg-sky-50 lg:hidden'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          {menuOpen ? <X className='h-4.5 w-4.5' /> : <Menu className='h-4.5 w-4.5' />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className='relative overflow-hidden border-t border-sky-100 bg-white/95 backdrop-blur-xl lg:hidden'>
          <div className='pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-sky-300/30 blur-3xl' />
          <div className='pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-amber-300/30 blur-3xl' />

          <div className='relative px-6 pt-2 pb-5'>
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center justify-between border-b border-sky-100 py-3.5 text-sm font-medium transition-colors last:border-0 ${
                    active ? 'text-sky-700' : 'text-slate-700 hover:text-sky-700'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <ArrowRight className='h-3.5 w-3.5 opacity-40' />
                </Link>
              );
            })}
            <div className='flex gap-2 pt-4'>
              <Link
                to='/login'
                className='flex-1 rounded-lg border border-sky-200 bg-white py-2.5 text-center text-sm font-medium text-sky-700 shadow-sm transition-all hover:border-sky-300 hover:bg-sky-50'
              >
                Đăng nhập
              </Link>
              <Link
                to='/register'
                className='flex-1 rounded-lg bg-linear-to-r from-sky-600 to-blue-700 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:shadow-xl'
              >
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
