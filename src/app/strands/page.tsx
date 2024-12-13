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
    <div className="flex items-center justify-center">
      <div className="p-10 flex items-center flex-col space-y-5 lg:w-4/5 md:w-11/12 sm:11/12">
        <h1 className="text-4xl">Strands Dashboard</h1>

        <div className="flex flex-row flex-wrap gap-5 justify-between w-full">
          <DashboardStatCard
            title="Games Played"
            stat={strandsStats.gamesPlayed}
          />
          <DashboardStatCard title="Hints Per Game" stat={hintsPerGame} />
          <DashboardStatCard
            title="Perfect Puzzles"
            stat={strandsStats.perfectPuzzles}
          />
          <DashboardStatCard
            title="Current Streak"
            stat={strandsStats.currentStreak}
          />
          <DashboardStatCard
            title="Best Streak"
            stat={strandsStats.bestStreak}
          />
        </div>

        <div className="flex flex-row w-full gap-5 w-full">
          <div className="w-1/2 flex flex-row flex-wrap bg-stone-200 p-5 rounded-lg shadow-md">
            {strandsStats.history.map((game) => {
              return (
                <StrandsGameCard key={game.id} game={game as strandsGame} />
              );
            })}
          </div>
          <div className="w-1/2 flex flex-row justify-center bg-stone-200 p-5 rounded-lg shadow-md">
            graph
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrandsDashboard;
