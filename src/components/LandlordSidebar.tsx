import { Bell, FileText, Home, PlusCircle, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

type MenuItemProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
};

function MenuItem({ icon, label, active }: MenuItemProps) {
  return (
    <button
      className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
        active
          ? 'bg-linear-to-r from-sky-600 to-blue-700 text-white shadow-md shadow-sky-500/30'
          : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

export default function LandlordSidebar() {
  return (
    <aside className='sticky top-0 h-screen w-72 shrink-0 scrollbar-none overflow-y-auto border-r border-sky-100/60 bg-white/70 p-6 backdrop-blur-xl'>
      <div className='flex items-center gap-2.5'>
        <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-600 to-blue-700 shadow-lg shadow-sky-500/30'>
          <Home size={20} className='text-white' />
        </div>
        <div>
          <h1 className='text-lg font-black tracking-tight text-slate-900'>
            Landlord<span className='text-sky-600'>Portal</span>
          </h1>
          <p className='text-[11px] font-medium text-slate-500'>Quản lý ký gửi</p>
        </div>
      </div>

      <nav className='mt-10 space-y-1.5'>
        <MenuItem icon={<Home size={18} />} label='Trang chủ' active />
        <MenuItem icon={<PlusCircle size={18} />} label='Tạo hồ sơ ký gửi' />
        <MenuItem icon={<FileText size={18} />} label='Danh sách bất động sản' />
        <MenuItem icon={<Bell size={18} />} label='Thông báo' />
      </nav>

      <div className='mt-10 rounded-2xl border border-amber-200/60 bg-linear-to-br from-amber-50 to-amber-100/50 p-5'>
        <div className='mb-2 flex items-center gap-2'>
          <Sparkles size={16} className='text-amber-600' />
          <span className='text-xs font-bold tracking-wider text-amber-700 uppercase'>Pro tip</span>
        </div>
        <p className='text-sm leading-relaxed text-slate-700'>
          Hồ sơ đầy đủ giấy tờ pháp lý sẽ được xử lý nhanh hơn 3 lần.
        </p>
      </div>
    </aside>
  );
}
