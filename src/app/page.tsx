import React from "react";
import gameStats from "@data/gameStats.json";

export default function Home() {
  const connectionsStats = gameStats.connections;
  const strandsStats = gameStats.strands;

  return (
    <div className="p-5">
      <h1>Lifetime Stats:</h1>
      <p>
        Games Played: {connectionsStats.gamesPlayed + strandsStats.gamesPlayed}{" "}
      </p>
    </div>
  );
}
