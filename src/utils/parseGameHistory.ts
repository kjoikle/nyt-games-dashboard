import { connectionsData, strandsData } from "./interfaces";

export function averageScore(data: connectionsData | strandsData) {
  const totalScore = data.totalScore;
  const avgScore =
    data.gamesPlayed > 0
      ? Math.round((totalScore / data.gamesPlayed) * 100) / 100
      : 0;
  return avgScore;
}

export function calculateRate(is: number, of: number) {
  return of > 0 ? Math.round((is / of) * 100) : 0;
}
