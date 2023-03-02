import { useState } from 'react';

const useGameManager = () => {
  const [gameState, setGameState] = useState<Object>({
    gameStatus: 'INIT',
    isPlayingVsComputer: false,
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
