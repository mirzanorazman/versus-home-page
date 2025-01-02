"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MatchResults } from "./mobile-mocks/MatchResults";
import { Leaderboard } from "./mobile-mocks/Leaderboard";
import { DynamicPairing } from "./mobile-mocks/DynamicPairing";
import { Statistics } from "./mobile-mocks/Statistics";
import { EloRanking } from "./mobile-mocks/EloRanking";

export function BentoGrid() {
  return (
    <div className="container mx-auto px-4 py-4">
      <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 text-center">
        Versus, at a glance
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <BentoCard
          title="Match Management"
          description="Record and track match results with ease"
          content={<MatchResults />}
        />
        <BentoCard
          title="Statistics"
          description="Track your progress over time"
          content={<Statistics />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard
          title="Dynamic Pairing"
          description="Pair players automatically or play Sports House mode"
          content={<DynamicPairing />}
        />
        <BentoCard
          title="Real-Time Leaderboards"
          description="Stay updated with live rankings every game"
          content={<Leaderboard />}
        />
        <BentoCard
          title="Elo-based Ranking"
          description="Fair and accurate player rankings"
          content={<EloRanking />}
        />
      </div>
    </div>
  );
}

function BentoCard({
  title,
  description,
  content,
}: {
  title: string;
  description: string;
  content: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="p-6 bg-[#1E1E1E] border-none hover:bg-[#252525] transition-colors cursor-pointer">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-[#B0B0B0] mb-6">{description}</p>
          {content}
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-[#1E1E1E] border-none">
        <DialogHeader>
          <DialogTitle className="text-white">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">{content}</div>
      </DialogContent>
    </Dialog>
  );
}
