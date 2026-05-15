import { type ReactNode, useState } from 'react';
import {
  Ban,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Eye,
  Home,
  MessageCircle,
  PlusCircle,
  Upload,
  Wallet,
} from 'lucide-react';
import { MOCK_PROPERTY_LANDLORD } from '../mocks/data/mockData';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: ReactNode;
  accent?: 'sky' | 'amber' | 'emerald' | 'rose';
};

type SectionBoxProps = {
  icon: ReactNode;
  title: string;
  content: string | ReactNode;
};

const tabs = [
  'Thông tin căn nhà',
  'Tài liệu đính kèm',
  'Trạng thái xử lý',
  'Hợp đồng ký gửi',
  'Lịch sử làm việc',
  'Tiến độ tìm khách thuê',
];

export default function LandlordPortal() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className='min-h-screen bg-linear-to-br from-sky-50 via-white to-amber-50'>
      <div className='pointer-events-none fixed inset-0 overflow-hidden'>
        <div className='absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl' />
        <div className='absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl' />
      </div>

      <div className='relative flex'>
        {/* Main */}
        <main className='flex-1 px-5 py-8 sm:px-8 lg:px-10 lg:py-10'>
          {/* Header */}
          <div className='mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <div className='mb-2 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-700 backdrop-blur'>
                <span className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
                Đang hoạt động
              </div>
              <h2 className='text-3xl font-black tracking-tight text-slate-900 sm:text-4xl'>
                Xin chào, Chủ nhà <span className='inline-block animate-pulse'>👋</span>
              </h2>
              <p className='mt-1.5 text-slate-500'>
                Quản lý ký gửi và theo dõi tiến độ bất động sản
              </p>
            </div>

            <button className='group inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-sky-600 to-blue-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all hover:scale-105 hover:shadow-sky-500/50'>
              <PlusCircle size={18} className='transition-transform group-hover:rotate-90' />
              Tạo hồ sơ ký gửi
            </button>
          </div>

          {/* Dashboard cards */}
          <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
            <StatCard title='Đang xử lý' value='2' icon={<Clock3 />} accent='sky' />
            <StatCard title='Đã ký hợp đồng' value='1' icon={<CheckCircle2 />} accent='emerald' />
            <StatCard title='Tiền đảm bảo' value='1.000.000đ' icon={<Wallet />} accent='amber' />
            <StatCard title='Yêu cầu hoàn trả' value='0' icon={<Ban />} accent='rose' />
          </div>

          {/* Property list */}
          <div className='mt-10 rounded-3xl border border-sky-100/80 bg-white/80 p-6 shadow-xl shadow-sky-900/5 backdrop-blur-xl sm:p-8'>
            <div className='mb-6 flex items-center justify-between'>
              <div>
                <h3 className='text-2xl font-black tracking-tight text-slate-900'>
                  Danh sách ký gửi
                </h3>
                <p className='mt-1 text-sm text-slate-500'>Theo dõi tiến độ từng bất động sản</p>
              </div>
              <span className='rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700'>
                {MOCK_PROPERTY_LANDLORD.length} hồ sơ
              </span>
            </div>

            <div className='space-y-4'>
              {MOCK_PROPERTY_LANDLORD.map((p) => (
                <div
                  key={p.id}
                  className='group rounded-2xl border border-slate-200/80 bg-linear-to-br from-white to-sky-50/30 p-5 transition-all hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 sm:p-6'
                >
                  <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                    <div className='min-w-0 flex-1'>
                      <h4 className='truncate text-lg font-bold text-slate-900 sm:text-xl'>
                        {p.title}
                      </h4>
                      <div className='mt-1.5 flex items-center gap-2'>
                        <span className='inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700'>
                          <span className='h-1.5 w-1.5 rounded-full bg-amber-500' />
                          {p.status}
                        </span>
                      </div>
                    </div>

                    <button className='inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition-all hover:border-sky-400 hover:bg-sky-50'>
                      Xem chi tiết
                      <ChevronRight
                        size={16}
                        className='transition-transform group-hover:translate-x-0.5'
                      />
                    </button>
                  </div>

                  <div className='mt-5'>
                    <div className='mb-1.5 flex items-center justify-between text-xs font-semibold'>
                      <span className='text-slate-500'>Tiến độ</span>
                      <span className='text-sky-700'>{p.progress}%</span>
                    </div>
                    <div className='h-2.5 overflow-hidden rounded-full bg-slate-100'>
                      <div
                        className='h-full rounded-full bg-linear-to-r from-sky-500 via-sky-600 to-blue-700 shadow-sm transition-all duration-700'
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail Tabs */}
          <div className='mt-10 rounded-3xl border border-sky-100/80 bg-white/80 p-6 shadow-xl shadow-sky-900/5 backdrop-blur-xl sm:p-8'>
            <div className='flex flex-wrap gap-2.5'>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-linear-to-r from-sky-600 to-blue-700 text-white shadow-md shadow-sky-500/30'
                      : 'bg-slate-100 text-slate-600 hover:bg-sky-100 hover:text-sky-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className='mt-8'>
              {activeTab === 'Thông tin căn nhà' && (
                <SectionBox
                  icon={<Home size={20} />}
                  title='Thông tin căn nhà'
                  content='Loại nhà, diện tích, địa chỉ, giá đề xuất, tình trạng pháp lý...'
                />
              )}

              {activeTab === 'Tài liệu đính kèm' && (
                <SectionBox
                  icon={<Upload size={20} />}
                  title='Tài liệu'
                  content='Ảnh, video, giấy tờ sở hữu, bản vẽ, hồ sơ pháp lý'
                />
              )}

              {activeTab === 'Trạng thái xử lý' && (
                <SectionBox
                  icon={<ClipboardCheck size={20} />}
                  title='Workflow'
                  content='Submitted → Inspection → Legal Review → Contract Pending → Signed → Published'
                />
              )}

              {activeTab === 'Hợp đồng ký gửi' && <ActionPanel />}

              {activeTab === 'Lịch sử làm việc' && <Timeline />}

              {activeTab === 'Tiến độ tìm khách thuê' && <ProgressPanel />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, accent = 'sky' }: StatCardProps) {
  const accents = {
    sky: 'from-sky-500 to-blue-600 shadow-sky-500/30',
    emerald: 'from-emerald-500 to-teal-600 shadow-emerald-500/30',
    amber: 'from-amber-500 to-orange-500 shadow-amber-500/30',
    rose: 'from-rose-500 to-pink-600 shadow-rose-500/30',
  };
  return (
    <div className='group relative overflow-hidden rounded-3xl border border-sky-100/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-900/10'>
      <div className='pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-sky-100/50 blur-2xl transition-opacity group-hover:opacity-100' />
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-lg ${accents[accent]}`}
      >
        {icon}
      </div>
      <p className='text-sm font-medium text-slate-500'>{title}</p>
      <h3 className='mt-1 text-3xl font-black tracking-tight text-slate-900'>{value}</h3>
    </div>
  );
}

function SectionBox({ icon, title, content }: SectionBoxProps) {
  return (
    <div className='rounded-2xl border border-sky-100 bg-linear-to-br from-sky-50/50 to-white p-6 sm:p-8'>
      <div className='mb-4 flex items-center gap-3'>
        <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-600 to-blue-700 text-white shadow-md shadow-sky-500/30'>
          {icon}
        </div>
        <h4 className='text-xl font-bold text-slate-900'>{title}</h4>
      </div>
      <p className='leading-relaxed text-slate-600'>{content}</p>
    </div>
  );
}

function ActionPanel() {
  return (
    <div className='space-y-3'>
      <button className='w-full rounded-2xl bg-linear-to-r from-sky-600 to-blue-700 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all hover:scale-[1.01] hover:shadow-sky-500/50'>
        Xác nhận hợp đồng
      </button>
      <button className='w-full rounded-2xl border border-sky-200 bg-white py-4 text-sm font-semibold text-slate-700 transition-all hover:border-sky-400 hover:bg-sky-50'>
        Yêu cầu sửa hồ sơ
      </button>
      <button className='w-full rounded-2xl border border-amber-300 bg-amber-50/50 py-4 text-sm font-semibold text-amber-700 transition-all hover:bg-amber-50'>
        Yêu cầu hoàn trả tiền đảm bảo
      </button>
      <button className='w-full rounded-2xl border border-rose-300 bg-rose-50/50 py-4 text-sm font-semibold text-rose-600 transition-all hover:bg-rose-50'>
        Yêu cầu chấm dứt hợp đồng
      </button>
    </div>
  );
}

function Timeline() {
  const items = ['Hồ sơ được tiếp nhận', 'Khảo sát hoàn tất', 'Hợp đồng tạo', 'Đang chờ ký'];

  return (
    <div className='relative space-y-4 pl-6'>
      <div className='absolute top-2 bottom-2 left-2 w-0.5 bg-linear-to-b from-sky-300 via-sky-200 to-amber-200' />
      {items.map((i, idx) => (
        <div key={i} className='relative'>
          <div className='absolute top-4 -left-6 h-4 w-4 rounded-full border-4 border-white bg-linear-to-br from-sky-500 to-blue-700 shadow-md shadow-sky-500/40' />
          <div className='rounded-2xl border border-sky-100 bg-linear-to-br from-white to-sky-50/40 p-4 transition-all hover:border-sky-300 hover:shadow-md'>
            <div className='flex items-center justify-between'>
              <span className='font-semibold text-slate-800'>{i}</span>
              <span className='text-xs font-medium text-slate-400'>Bước {idx + 1}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProgressPanel() {
  const stats = [
    { icon: <Eye size={20} />, value: '14', label: 'Lượt xem hồ sơ', color: 'sky' },
    { icon: <MessageCircle size={20} />, value: '3', label: 'Yêu cầu tư vấn', color: 'amber' },
    { icon: <CalendarCheck size={20} />, value: '1', label: 'Lịch xem nhà', color: 'emerald' },
  ] as const;
  const colors = {
    sky: 'from-sky-500 to-blue-600 shadow-sky-500/30',
    amber: 'from-amber-500 to-orange-500 shadow-amber-500/30',
    emerald: 'from-emerald-500 to-teal-600 shadow-emerald-500/30',
  };
  return (
    <div className='grid gap-4 sm:grid-cols-3'>
      {stats.map((s) => (
        <div
          key={s.label}
          className='rounded-2xl border border-sky-100 bg-linear-to-br from-white to-sky-50/40 p-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg'
        >
          <div
            className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-lg ${colors[s.color]}`}
          >
            {s.icon}
          </div>
          <p className='text-3xl font-black text-slate-900'>{s.value}</p>
          <p className='mt-1 text-sm font-medium text-slate-500'>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
