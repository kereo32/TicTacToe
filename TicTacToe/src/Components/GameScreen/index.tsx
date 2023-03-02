import React, { useEffect } from 'react';
import withAnimate from '../../HOCS/WithAnimate';
import { withGameScore } from '../../HOCS/WithGameScore';
import { GameState } from '../../types/types';
import GameBoard from './GameBoard';

type Props = {
  gameState: GameState;
  updateGameState: (gameState: any) => void;
};

const GameScreen = (props: Props) => {
  const { gameState, updateGameState } = props;
  useEffect(() => {
    updateGameState({ currentSign: gameState.currentSign == 'X' ? 'O' : 'X' });
  }, [gameState.gameBoard]);

  return (
    <div className="flex flex-col text-center w-[50%] h-[50%] border-2 shadow-lg border-borderColor">
      <GameBoard currentSign={gameState.currentSign} board={gameState.gameBoard} update={updateGameState} />
    </div>
  );
};

const GameScreenWithAnimate = withAnimate(GameScreen, {
  initial: { x: -1000 },
  whileInView: { x: 0 },
  transition: { ease: 'easeIn', duration: 0.5 },
});

const GameScreenWithGameScore = withGameScore(GameScreenWithAnimate);

export default GameScreenWithGameScore;
