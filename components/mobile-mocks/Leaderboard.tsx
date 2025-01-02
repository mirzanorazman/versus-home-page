"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const INITIAL_PLAYERS = [
  { id: 1, name: "Alex Chen", points: 2150, change: "+15" },
  { id: 2, name: "Sarah Kim", points: 2080, change: "+8" },
  { id: 3, name: "Mike Liu", points: 2045, change: "-5" },
  { id: 4, name: "Emma Wang", points: 2020, change: "+10" },
];

export function Leaderboard() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);

  return (
    <div className="p-4 bg-[#1A1A1A] rounded-lg max-w-[300px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-white">Top Players</h3>
        <Trophy className="h-4 w-4 text-[#FF8C00]" />
      </div>
      <div className="space-y-3">
        {players.map((player) => (
          <div
            key={player.id}
            className="flex items-center justify-between p-2 rounded bg-[#121212]"
          >
            <div>
              <div className="text-sm font-medium text-white">{player.name}</div>
              <div className="text-xs text-[#B0B0B0]">{player.points} pts</div>
            </div>
            <div className={`text-sm ${
              player.change.startsWith("+") ? "text-green-500" : "text-red-500"
            }`}>
              {player.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}