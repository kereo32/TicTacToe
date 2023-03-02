import { useState } from 'react';
import { GameState } from '../types/types';

const useGameManager = () => {
  const [gameState, setGameState] = useState<GameState>({
    gameStatus: 'INIT',
    gameBoard: Array(9).fill(null),
    isPlayingVsComputer: false,
    currentSign: 'O',
    playerScores: {
      player1: 0,
      player2: 0,
    },
  });

  const updateGameState = (newGameState) => {
    setGameState((prevState) => ({
      ...prevState,
      ...newGameState,
    }));
  };

  return {
    gameState,
    updateGameState,
  };
};

export default useGameManager;
