"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Target } from "lucide-react";

export function EloRanking() {
  const [playerStats] = useState({
    name: "Alex Chen",
    currentElo: 2150,
    peakElo: 2200,
    gamesPlayed: 45,
    winRate: 68,
  });

  return (
    <div className="p-4 bg-[#1A1A1A] rounded-lg max-w-[300px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-white">Player Rating</h3>
        <Target className="h-4 w-4 text-[#FF8C00]" />
      </div>
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-[#FF8C00]">
            {playerStats.currentElo}
          </div>
          <div className="text-sm text-[#B0B0B0]">Current Rating</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-lg font-semibold text-white">
              {playerStats.peakElo}
            </div>
            <div className="text-xs text-[#B0B0B0]">Peak Rating</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-white">
              {playerStats.winRate}%
            </div>
            <div className="text-xs text-[#B0B0B0]">Win Rate</div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm text-[#B0B0B0]">
            Based on {playerStats.gamesPlayed} games
          </div>
        </div>
      </div>
    </div>
  );
}