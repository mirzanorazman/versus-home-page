"use client";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

export function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-[#121212] p-2 rounded-md border border-[#2A2A2A]">
      <p className="text-white text-sm">{`Week ${label}`}</p>
      <p className="text-[#FF8C00] text-sm font-semibold">
        {`Rating: ${payload[0].value}`}
      </p>
    </div>
  );
}