import React from "react";
import { connectionsGame } from "@/utils/interfaces";

interface ConnectionsGameCardProps {
  game: connectionsGame;
}

const ConnectionsGameCard = ({ game }: ConnectionsGameCardProps) => {
  return (
    <div className="flex flex-col p-5 items-center">
      <h1>Puzzle #{game.puzzleNumber}</h1>
      <div>
        {game.grid.map((row, index) => {
          return <p key={index}>{row}</p>;
        })}
      </div>
    </div>
  );
};

export default ConnectionsGameCard;
