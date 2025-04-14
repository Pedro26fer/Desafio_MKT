"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', visitas: 400 },
  { name: 'Fev', visitas: 300 },
  { name: 'Mar', visitas: 500 },
  { name: 'Abr', visitas: 200 },
  { name: 'Mai', visitas: 600 },
];

function Chart() {
  return (
    <div className="bg-white p-4 rounded shadow w-full h-50">
      <h3 className="text-lg font-semibold mb-2">Visitas da Campanha</h3>
      <ResponsiveContainer width="90%" height="90%" className="mx-auto p-4 justify-center align-center">
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visitas" stroke="#007FFF" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Chart;