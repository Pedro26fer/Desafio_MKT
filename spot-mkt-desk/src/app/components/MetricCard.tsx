
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
}

function MetricCard({ title, value, icon: Icon, color = 'text-blue-500' }: MetricCardProps) {
  return (
    <div className="bg-white rounded shadow p-4 flex items-center gap-4 w-full">
      <div className={`p-3 bg-blue-100 rounded-full ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

export default MetricCard;
