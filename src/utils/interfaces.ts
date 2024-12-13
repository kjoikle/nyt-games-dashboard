export interface connectionsGame {
  gameType: string; // "connections"
  id: number;
  date: string; // use Date object instead?
  puzzleNumber: number;
  score: number;
  grid: string[];
  mistakes: number;
  solved: boolean;
  yellowSolved: number;
  greenSolved: number;
  blueSolved: number;
  purpleSolved: number;
  solveOrder: string[];
}

export interface strandsGame {
  gameType: string; // "strands"
  id: number;
  date: string;
  puzzleNumber: number;
  score: number;
  grid: string[];
  hintsUsed: number;
  indexOfSpangram: number; // zero indexed
}

export interface connectionsData {
  gamesPlayed: number;
  gamesSolved: number;
  totalScore: number;
  perfectPuzzles: number;
  currentStreak: number;
  bestStreak: number;
  history: connectionsGame[];
}

export interface strandsData {
  gamesPlayed: number;
  totalScore: number;
  totalHints: number;
  currentStreak: number;
  bestStreak: number;
  perfectPuzzles: number;
  history: strandsGame[];
}
