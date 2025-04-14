'use-client';

import { Bell, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <div className="text-xl font-bold text-primary">SPOT MKT</div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">3</span>
        </button>

        <div className="text-sm text-gray-700">
          <p className="font-semibold">João</p>
          <p className="text-xs">Cliente</p>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1.5 rounded"
        >
          <LogOut className="w-4 h-4" />
          Sair
        </button>
      </div>
    </nav>
  );
}

export default Navbar;