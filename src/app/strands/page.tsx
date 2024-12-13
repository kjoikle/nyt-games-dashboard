import React from "react";
import gameStats from "@data/gameStats.json";
import DashboardStatCard from "@/components/DashboardStatCard";
import { strandsData, strandsGame } from "@/utils/interfaces";
import StrandsGameCard from "@/components/StrandsGameCard";

const StrandsDashboard = () => {
  const strandsStats: strandsData = gameStats.strands;
  const hintsPerGame =
    strandsStats.gamesPlayed > 0
      ? Math.round((strandsStats.totalHints / strandsStats.gamesPlayed) * 100) /
        100
      : 0;

  // something very wrong with display in smaller sizes
  return (
    <div className="p-10 flex items-center flex-col space-y-5">
      <h1 className="text-4xl">Strands Dashboard</h1>

      <div className="flex flex-row flex-wrap gap-5 justify-between w-4/5">
        <DashboardStatCard
          title="Games Played"
          stat={strandsStats.gamesPlayed}
        />
        <DashboardStatCard title="Hints Per Game" stat={hintsPerGame} />
        <DashboardStatCard
          title="Perfect Puzzles"
          stat={strandsStats.perfectPuzzles}
        />
        <DashboardStatCard title="Current Streak" stat="TODO" />
        <DashboardStatCard title="Best Streak" stat="TODO" />
      </div>

      <div className="flex flex-row w-full gap-5 w-4/5">
        <div className="w-1/2 flex flex-row flex-wrap bg-slate-200 p-5 rounded-lg shadow-md">
          {strandsStats.history.map((game) => {
            return <StrandsGameCard key={game.id} game={game as strandsGame} />;
          })}
        </div>
        <div className="w-1/2 flex flex-row justify-center bg-slate-200 p-5 rounded-lg shadow-md">
          graph
        </div>
      </div>
    </div>
  );
};

export default StrandsDashboard;
