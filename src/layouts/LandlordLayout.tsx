import { Outlet } from 'react-router-dom';
import LandlordSidebar from '../components/LandlordSidebar';

export default function LandlordLayout() {
  return (
    <div className='flex h-screen overflow-hidden font-sans antialiased'>
      <LandlordSidebar />
      <main className='min-h-0 flex-1 overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  );
}
