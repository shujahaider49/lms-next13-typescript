"use client";

import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  data: {
    name: string;
    total: number;
  }[];
}

export const Chart = () => {
  const data = [
    { name: "Advance Web Development", value: 10 },
    { name: "Graphic Designing", value: 15 },
    { name: "SEO", value: 8 },
    { name: "React Js Mastery", value: 20 },
  ];
  return (
    <Card>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#888888" />
          <YAxis stroke="#888888" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#0369a1" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
