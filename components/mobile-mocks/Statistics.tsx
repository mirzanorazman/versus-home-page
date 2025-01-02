"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Week 1", rating: 1400 },
  { date: "Week 2", rating: 1550 },
  { date: "Week 3", rating: 1525 },
  { date: "Week 4", rating: 1700 },
  { date: "Week 5", rating: 1580 },
  { date: "Week 6", rating: 1650 },
];

export function Statistics() {
  return (
    <div className="p-4 bg-[#1A1A1A] rounded-lg max-w-[300px] mx-auto">
      <h3 className="text-sm font-semibold text-white mb-4">Elo Rating</h3>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              stroke="#B0B0B0"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              stroke="#B0B0B0"
              fontSize={12}
              tickLine={false}
              domain={[1000, 2000]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#121212",
                border: "none",
                borderRadius: "4px",
                color: "#FFFFFF",
              }}
            />
            <Line
              type="monotone"
              dataKey="rating"
              stroke="#FF8C00"
              strokeWidth={2}
              dot={{ fill: "#FF8C00" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
