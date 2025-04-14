// filepath: c:\Users\Pedro Henrique\Desktop\Desafio-SPOT_Mkt\spot-mkt-desk\src\app\dashboard\page.tsx
"use client";

import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';
import Chart from '../components/Charts';
import MetricCard from '../components/MetricCard';
import { TrendingUp, UserPlus, Target } from 'lucide-react';
import NotificationItem from '../components/NotificationItem';
import CalendarPreview from '../components/CalendarPreviw';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6 grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard title="Campanhas Ativas" value={12} icon={TrendingUp} />
            <MetricCard title="Novos Leads" value="1.240" icon={UserPlus} />
            <MetricCard title="ROI Médio" value="320%" icon={Target} />
          </div>

          <Chart />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CalendarPreview />
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-4">Notificações</h3>
              <NotificationItem message="Novo pedido de campanha recebido" time="há 2 horas" />
              <NotificationItem message="Calendário atualizado" time="ontem" />
              <NotificationItem message="Campanha Y teve pico de tráfego" time="2 dias atrás" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}