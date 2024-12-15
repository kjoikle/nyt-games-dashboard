import React from "react";
import { strandsGame } from "@/utils/interfaces";

interface StrandsGameCardProps {
  game: strandsGame;
}

// make display as constant width
const StrandsGameCard = ({ game }: StrandsGameCardProps) => {
  return (
    <div className="flex flex-col p-5 items-center">
      <h1>Puzzle #{game.puzzleNumber}</h1>
      <div>{game.grid}</div>
    </div>
  );
};

export default StrandsGameCard;
