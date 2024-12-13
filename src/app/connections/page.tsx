import React from "react";
import gameStats from "@data/gameStats.json";
import DashboardStatCard from "@/components/DashboardStatCard";
import { averageScore } from "@/utils/parseGameHistory";
import { connectionsData, connectionsGame } from "@/utils/interfaces";
import ConnectionsGameCard from "@/components/ConnectionsGameCard";

const ConnectionsDashboard = () => {
  const connectionsStats: connectionsData = gameStats.connections;
  const avgScore = averageScore(connectionsStats); // whoops, this is avg score not win rate

  // something very wrong with display in smaller sizes
  return (
    <div className="p-10 flex items-center flex-col space-y-5">
      <h1 className="text-4xl">Connections Dashboard</h1>

      <div className="flex flex-row flex-wrap gap-5 justify-between w-4/5">
        <DashboardStatCard
          title="Games Played"
          stat={connectionsStats.gamesPlayed}
        />
        <DashboardStatCard title="Win Rate" stat={avgScore + "%"} />
        <DashboardStatCard
          title="Perfect Puzzles"
          stat={connectionsStats.perfectPuzzles}
        />
        <DashboardStatCard title="Current Streak" stat="TODO" />
        <DashboardStatCard title="Best Streak" stat="TODO" />
      </div>

      <div className="flex flex-row w-full gap-5 w-4/5">
        <div className="w-1/2 flex flex-row flex-wrap bg-slate-200 p-5 rounded-lg shadow-md">
          {connectionsStats.history.map((game) => {
            return (
              <ConnectionsGameCard
                key={game.id}
                game={game as connectionsGame}
              />
            );
          })}
        </div>
        <div className="w-1/2 flex flex-row justify-center bg-slate-200 p-5 rounded-lg shadow-md">
          graph
        </div>
      </div>
    </div>
  );
};

export default ConnectionsDashboard;
