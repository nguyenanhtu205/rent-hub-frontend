import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function InternalLayout() {
  return (
    <div className='flex h-screen overflow-hidden font-sans antialiased'>
      <Sidebar />
      <main className='min-h-0 flex-1 overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  );
}
