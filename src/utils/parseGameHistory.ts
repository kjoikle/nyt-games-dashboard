import { connectionsGame, strandsGame } from "./interfaces";

export function getTotalScore(data: connectionsGame[] | strandsGame[]) {
  if (!data) return 0;

  let totalScore = 0;
  data.forEach((game) => {
    totalScore += game.score;
  });
  return totalScore;
}

export function averageScore(data: connectionsGame[] | strandsGame[]) {
  const totalScore = getTotalScore(data);
  const avgScore =
    data.length > 0 ? Math.round((totalScore / data.length) * 100) / 100 : 0;
  return avgScore;
}
