import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import { MOCK_PROPERTIES } from '../mocks/data/mockData';

const STATS = [
  { value: '1.200+', label: 'Bất động sản' },
  { value: '850+', label: 'Giao dịch thành công' },
  { value: '98%', label: 'Khách hàng hài lòng' },
  { value: '25+', label: 'Quận huyện' },
];

const SERVICES = [
  {
    icon: (
      <svg
        width='26'
        height='26'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.8'
      >
        <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
        <polyline points='9 22 9 12 15 12 15 22' />
      </svg>
    ),
    title: 'Ký gửi bất động sản',
    desc: 'Chủ nhà ký gửi tài sản, chúng tôi lo toàn bộ quy trình tìm khách thuê, thẩm định và ký hợp đồng.',
  },
  {
    icon: (
      <svg
        width='26'
        height='26'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.8'
      >
        <circle cx='11' cy='11' r='8' />
        <line x1='21' y1='21' x2='16.65' y2='16.65' />
      </svg>
    ),
    title: 'Tìm kiếm thông minh',
    desc: 'Lọc theo khu vực, giá, tiện ích. Đặt lịch xem nhà trực tiếp qua hệ thống, nhanh chóng và tiện lợi.',
  },
  {
    icon: (
      <svg
        width='26'
        height='26'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.8'
      >
        <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
      </svg>
    ),
    title: 'Thẩm định & pháp lý',
    desc: 'Đội ngũ thẩm định thực địa chuyên nghiệp, pháp lý rõ ràng, hợp đồng chuẩn mực bảo vệ cả hai bên.',
  },
  {
    icon: (
      <svg
        width='26'
        height='26'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.8'
      >
        <rect x='2' y='5' width='20' height='14' rx='2' />
        <line x1='2' y1='10' x2='22' y2='10' />
      </svg>
    ),
    title: 'Quản lý tài chính',
    desc: 'Tiền đảm bảo được quản lý minh bạch, hoàn trả đúng quy trình. Hoa hồng rõ ràng cho môi giới.',
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Đăng ký ký gửi',
    desc: 'Chủ nhà điền thông tin bất động sản, nộp hồ sơ trực tuyến.',
  },
  {
    num: '02',
    title: 'Thẩm định thực địa',
    desc: 'Nhân viên liên hệ, khảo sát và đánh giá bất động sản.',
  },
  { num: '03', title: 'Ký hợp đồng', desc: 'Hợp đồng ký gửi được xét duyệt, ký kết chính thức.' },
  { num: '04', title: 'Tìm khách thuê', desc: 'Môi giới tích cực tiếp thị, dẫn khách xem nhà.' },
  {
    num: '05',
    title: 'Giao dịch thành công',
    desc: 'Hợp đồng thuê ký kết, chủ nhà nhận tiền đúng hạn.',
  },
];

export default function Home() {
  const featured = MOCK_PROPERTIES.filter((p) => p.isVerified).slice(0, 3);

  return (
    <div className='bg-linear-to-b from-white via-sky-50/40 to-white text-slate-900'>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className='relative flex min-h-156 items-center overflow-hidden pt-17'>
        {/* Soft light background */}
        <div className='absolute inset-0 bg-linear-to-br from-sky-50 via-white to-amber-50' />

        {/* Ambient gradient blobs */}
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
          <div className='absolute -top-40 -left-40 h-112 w-md rounded-full bg-sky-300/40 blur-3xl' />
          <div className='absolute -right-32 -bottom-40 h-128 w-lg rounded-full bg-amber-300/40 blur-3xl' />
          <div className='absolute top-1/2 left-1/2 h-88 w-88 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/40 blur-3xl' />
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

        {/* Top hairline */}
        <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent' />

        <div className='relative z-10 mx-auto w-full max-w-7xl px-6 py-24'>
          <span className='mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-[11px] font-bold tracking-widest text-sky-700 uppercase shadow-sm backdrop-blur'>
            <span className='inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]' />
            Nền tảng ký gửi bất động sản
          </span>

          <h1 className='mb-6 max-w-2xl text-5xl leading-[1.05] font-black tracking-tight text-slate-900 md:text-7xl'>
            Tìm ngôi nhà{' '}
            <em className='bg-linear-to-br from-sky-600 via-blue-700 to-amber-500 bg-clip-text text-transparent not-italic drop-shadow-[0_4px_30px_rgba(14,165,233,0.25)]'>
              hoàn hảo
            </em>{' '}
            của bạn
          </h1>

          <p className='mb-10 max-w-lg text-lg leading-relaxed text-slate-600'>
            Hàng nghìn bất động sản đã thẩm định.{' '}
            <span className='font-semibold text-sky-700'>Quy trình minh bạch.</span> Môi giới chuyên
            nghiệp.
          </p>

          <SearchBar />

          <div className='mt-8 flex flex-wrap gap-3'>
            <Link
              to='/properties'
              className='group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-sky-600 to-blue-700 px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-sky-500/30 transition hover:scale-105 hover:shadow-xl hover:shadow-sky-500/50'
            >
              <span className='absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full' />
              <span className='relative'>Xem tất cả BĐS</span>
              <svg
                className='relative transition-transform group-hover:translate-x-0.5'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
              >
                <path d='M5 12h14M12 5l7 7-7 7' />
              </svg>
            </Link>
            <Link
              to='/owner/register'
              className='inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white/80 px-7 py-3.5 text-[15px] font-bold text-sky-800 shadow-sm backdrop-blur transition hover:scale-105 hover:border-sky-300 hover:bg-white'
            >
              Ký gửi nhà của bạn
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className='relative overflow-hidden bg-linear-to-br from-blue-900 via-sky-900 to-blue-950'>
        <div className='pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl' />
        <div className='pointer-events-none absolute right-1/4 -bottom-20 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl' />
        <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent' />

        <div className='relative mx-auto max-w-7xl px-6'>
          <div className='grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4'>
            {STATS.map((s) => (
              <div key={s.label} className='group flex flex-col items-center gap-1.5 py-10'>
                <span className='bg-linear-to-b from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-4xl font-black tracking-tight text-transparent transition-transform group-hover:scale-110'>
                  {s.value}
                </span>
                <span className='text-sm font-medium text-sky-100/70'>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Properties ────────────────────────────── */}
      <section className='relative mx-auto max-w-7xl px-6 py-24' id='properties'>
        <div className='mb-12 flex items-end justify-between gap-4'>
          <div>
            <p className='mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-sky-700 uppercase'>
              <span className='h-px w-8 bg-linear-to-r from-sky-500 to-transparent' />
              Nổi bật
            </p>
            <h2 className='text-3xl font-black tracking-tight text-slate-900 md:text-5xl'>
              Bất động sản{' '}
              <span className='bg-linear-to-br from-sky-600 to-blue-700 bg-clip-text text-transparent'>
                tiêu biểu
              </span>
            </h2>
          </div>
          <Link
            to='/properties'
            className='group flex shrink-0 items-center gap-1.5 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50'
          >
            Xem tất cả
            <svg
              className='transition-transform group-hover:translate-x-0.5'
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
            >
              <path d='M5 12h14M12 5l7 7-7 7' />
            </svg>
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {featured.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section
        className='relative overflow-hidden bg-linear-to-br from-sky-700 via-sky-300 to-sky-200 px-6 py-24'
        id='services'
      >
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-blue-400/40 blur-3xl' />
          <div className='absolute -right-24 bottom-1/3 h-80 w-80 rounded-full bg-amber-300/40 blur-3xl' />
          <div className='absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/30 blur-3xl' />
        </div>

        <div className='relative mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <p className='mb-3 inline-flex items-center gap-2 bg-linear-to-r from-white via-amber-200 to-yellow-400 bg-clip-text text-[11px] font-bold tracking-[0.18em] text-transparent uppercase'>
              <span className='h-px w-8 bg-linear-to-r from-transparent to-sky-500' />
              Dịch vụ
              <span className='h-px w-8 bg-linear-to-l from-transparent to-sky-500' />
            </p>
            <h2 className='mb-4 bg-linear-to-r from-white via-yellow-100 to-amber-400 bg-clip-text text-3xl leading-tight font-black tracking-tight text-transparent md:text-5xl'>
              Chúng tôi làm được gì?
            </h2>
            <p className='mx-auto max-w-lg bg-linear-to-r from-yellow-100 via-yellow-200 to-amber-400 bg-clip-text text-base leading-relaxed text-transparent'>
              Hệ sinh thái đầy đủ từ ký gửi đến cho thuê, quản lý đến tài chính.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className='group relative overflow-hidden rounded-2xl border border-white/60 bg-linear-to-bl from-amber-100 via-white to-amber-100 p-7 shadow-sm shadow-sky-500/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/15'
              >
                {/* Hover gradient halo */}
                <div className='pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-linear-to-br from-sky-400/30 to-amber-300/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100' />

                <div className='relative mb-5 inline-flex h-13 w-13 items-center justify-center rounded-xl bg-linear-to-br from-sky-100 to-blue-100 text-sky-700 shadow-inner transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-sky-600 group-hover:to-blue-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/30'>
                  {s.icon}
                </div>
                <h3 className='relative mb-2.5 text-[15px] font-bold text-slate-900'>{s.title}</h3>
                <p className='relative text-sm leading-relaxed text-slate-600'>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <section className='mx-auto max-w-7xl px-6 py-24' id='process'>
        <div className='mb-16 text-center'>
          <p className='mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-sky-700 uppercase'>
            <span className='h-px w-8 bg-linear-to-r from-transparent to-sky-500' />
            Quy trình
            <span className='h-px w-8 bg-linear-to-l from-transparent to-sky-500' />
          </p>
          <h2 className='text-3xl font-black tracking-tight text-slate-900 md:text-5xl'>
            Ký gửi dễ dàng trong{' '}
            <span className='bg-linear-to-br from-sky-600 to-amber-500 bg-clip-text text-transparent'>
              5 bước
            </span>
          </h2>
        </div>

        <div className='relative flex flex-col justify-between gap-10 md:flex-row md:gap-4'>
          {/* Connector line (desktop) */}
          <div className='absolute top-7 right-[10%] left-[10%] hidden h-px bg-linear-to-r from-sky-200 via-amber-200 to-sky-200 md:block' />

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className='group relative mx-auto flex max-w-44 flex-1 flex-col items-center text-center md:mx-0'
            >
              {/* Glow ring on hover */}
              <div className='pointer-events-none absolute -top-2 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-sky-400/30 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100' />

              <div className='relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-sky-600 to-blue-700 text-lg font-black text-white shadow-lg ring-4 shadow-sky-500/40 ring-white transition-transform group-hover:scale-110'>
                {step.num}
              </div>
              <h4 className='mb-2 text-[14px] font-bold text-slate-900'>{step.title}</h4>
              <p className='text-[13px] leading-relaxed text-slate-600'>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className='relative overflow-hidden px-6 py-24'>
        <div className='absolute inset-0 bg-linear-to-br from-blue-900 via-sky-900 to-blue-950' />
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-400/25 blur-3xl' />
          <div className='absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-amber-300/25 blur-3xl' />
        </div>
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.07]'
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-300/60 to-transparent' />

        <div className='relative mx-auto max-w-xl text-center'>
          <span className='mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-[11px] font-bold tracking-widest text-amber-200 uppercase backdrop-blur'>
            Bắt đầu ngay
          </span>
          <h2 className='mb-4 text-3xl font-black tracking-tight text-white md:text-5xl'>
            Sẵn sàng ký gửi{' '}
            <span className='bg-linear-to-br from-amber-200 to-amber-400 bg-clip-text text-transparent'>
              bất động sản?
            </span>
          </h2>
          <p className='mb-10 text-base leading-relaxed text-sky-100/80'>
            Đăng ký tài khoản và bắt đầu hành trình cùng RentHub ngay hôm nay.
          </p>
          <div className='flex flex-wrap justify-center gap-3'>
            <Link
              to='/register'
              className='group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-amber-300 to-amber-500 px-7 py-3.5 text-[15px] font-bold text-slate-900 shadow-lg shadow-amber-500/40 transition hover:scale-105 hover:shadow-xl hover:shadow-amber-500/60'
            >
              <span className='absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full' />
              <span className='relative'>Đăng ký miễn phí</span>
            </Link>
            <Link
              to='/#contact'
              className='rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-[15px] font-bold text-white backdrop-blur transition hover:scale-105 hover:border-white/40 hover:bg-white/20'
            >
              Tư vấn ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
