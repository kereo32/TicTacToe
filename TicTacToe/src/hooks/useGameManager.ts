import { useEffect, useState } from 'react';
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

  const winningConditions: Array<Array<number>> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const updateGameState = (newGameState: GameState) => {
    setGameState((prevState) => ({
      ...prevState,
      ...newGameState,
    }));
  };

  const incrementPlayerScore = (player: string) => {
    setGameState((prevState) => ({
      ...prevState,
      playerScores: {
        ...prevState.playerScores,
        [player]: prevState.playerScores[player] + 1,
      },
    }));
    console.log(gameState.playerScores);
  };
  const finishGame = (symbol: string) => {
    setGameState((prevState) => ({
      ...prevState,
      gameStatus: 'FINISHED',
    }));
    symbol === 'X' ? incrementPlayerScore('player1') : incrementPlayerScore('player2');
  };

  const checkWinner = (gameBoard: Array<string>) => {
    console.log('cheking winner');
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
        //finish game and increment score
        finishGame(gameBoard[a]);
      }
    }
    return null;
  };

  return {
    gameState,
    updateGameState,
    checkWinner,
  };
};

export default useGameManager;
