export type GameState = {
  gameStatus: string;
  gameBoard: Array<string | null>;
  isPlayingVsComputer: boolean;
  playerScores: {
    player1: number;
    player2: number;
  };
};
