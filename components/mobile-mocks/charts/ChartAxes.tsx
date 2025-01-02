"use client";

import { XAxis, YAxis } from "recharts";

interface AxisProps {
  dataKey?: string;
}

export function CustomXAxis({ dataKey, ...props }: AxisProps) {
  return (
    <XAxis
      {...props}
      dataKey={dataKey}
      stroke="#B0B0B0"
      fontSize={12}
      tickLine={false}
      axisLine={{ stroke: '#2A2A2A' }}
      label={{ 
        value: 'Timeline', 
        position: 'bottom',
        offset: 0,
        style: { fill: '#B0B0B0', fontSize: 12 }
      }}
    />
  );
}

export function CustomYAxis(props: AxisProps) {
  return (
    <YAxis
      {...props}
      stroke="#B0B0B0"
      fontSize={12}
      tickLine={false}
      axisLine={{ stroke: '#2A2A2A' }}
      label={{ 
        value: 'Rating', 
        angle: -90, 
        position: 'left',
        offset: 0,
        style: { fill: '#B0B0B0', fontSize: 12 }
      }}
    />
  );
}