import { Home, Calendar, ClipboardList, Bell, Settings } from 'lucide-react';

const menu = [
  { icon: <Home />, label: 'Dashboard' },
  { icon: <Calendar />, label: 'Calendário' },
  { icon: <ClipboardList />, label: 'Demandas' },
  { icon: <Bell />, label: 'Notificações' },
  { icon: <Settings />, label: 'Configurações' },
];

function Sidebar() {
  return (
    <aside className="group fixed md:relative top-0 left-0 z-50 h-screen w-14 md:w-60 bg-primary text-white transition-all duration-300 ease-in-out sm:hidden md:flex flex-col items-center justify-between shadow-lg xs:hidden">
      <div className="p-4 flex flex-col gap-6">
        <h2 className="text-2xl font-bold hidden md:block group-hover:block">SPOT MKT</h2>
        {menu.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 cursor-pointer hover:text-secondary"
          >
            <div className="min-w-[24px]">{item.icon}</div>
            <span className="hidden md:inline group-hover:inline">{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
