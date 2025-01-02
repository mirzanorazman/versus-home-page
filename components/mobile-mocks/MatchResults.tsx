"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function MatchResults() {
  const [score1, setScore1] = useState(21);
  const [score2, setScore2] = useState(19);

  return (
    <div className="p-4 bg-[#1A1A1A] rounded-lg max-w-[300px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-white">Match Results</h3>
        <span className="text-xs text-[#B0B0B0]">Today</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{score1}</div>
          <div className="text-sm text-[#B0B0B0]">Team A</div>
        </div>
        <div className="text-xl text-[#B0B0B0]">vs</div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{score2}</div>
          <div className="text-sm text-[#B0B0B0]">Team B</div>
        </div>
      </div>
      <Button 
        className="w-full bg-[#FF8C00] hover:bg-[#FFA726]"
        onClick={() => {
          setScore1(Math.floor(Math.random() * 10) + 15);
          setScore2(Math.floor(Math.random() * 10) + 15);
        }}
      >
        Update Score
      </Button>
    </div>
  );
}