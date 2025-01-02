"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const PLAYERS = [
  "Alex Chen",
  "Sarah Kim",
  "Mike Liu",
  "Emma Wang",
  "John Doe",
  "Jane Smith",
];

export function DynamicPairing() {
  const [pairs, setPairs] = useState<string[][]>([]);
  const [mode, setMode] = useState<"auto" | "sports" | "adhoc">("auto");

  const generatePairs = () => {
    const shuffled = [...PLAYERS].sort(() => Math.random() - 0.5);
    const newPairs = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      if (i + 1 < shuffled.length) {
        newPairs.push([shuffled[i], shuffled[i + 1]]);
      }
    }
    setPairs(newPairs);
  };

  return (
    <div className="p-4 bg-[#1A1A1A] rounded-lg max-w-[300px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-white">Player Pairing</h3>
        <Users className="h-4 w-4 text-[#FF8C00]" />
      </div>
      <div className="flex gap-2 mb-4">
        <Button
          size="sm"
          variant={mode === "auto" ? "default" : "outline"}
          className={mode === "auto" ? "bg-[#FF8C00]" : ""}
          onClick={() => setMode("auto")}
        >
          Auto
        </Button>
        <Button
          size="sm"
          variant={mode === "sports" ? "default" : "outline"}
          className={mode === "sports" ? "bg-[#FF8C00]" : ""}
          onClick={() => setMode("sports")}
        >
          Sports House
        </Button>
        <Button
          size="sm"
          variant={mode === "adhoc" ? "default" : "outline"}
          className={mode === "adhoc" ? "bg-[#FF8C00]" : ""}
          onClick={() => setMode("adhoc")}
        >
          Ad-Hoc
        </Button>
      </div>
      <div className="space-y-2 mb-4">
        {pairs.map((pair, index) => (
          <div
            key={index}
            className="p-2 rounded bg-[#121212] flex justify-between items-center"
          >
            <span className="text-sm text-white">{pair[0]}</span>
            <span className="text-xs text-[#B0B0B0]">vs</span>
            <span className="text-sm text-white">{pair[1]}</span>
          </div>
        ))}
      </div>
      <Button
        className="w-full bg-[#FF8C00] hover:bg-[#FFA726]"
        onClick={generatePairs}
      >
        Generate Pairs
      </Button>
    </div>
  );
}
