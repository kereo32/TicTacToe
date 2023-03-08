import { useEffect } from 'react';
import { withAnimate, withGameScore } from '../../HOCS';
import GameBoard from './GameBoard';
import { GameAction } from '../../types/types';

const GameScreen = (props: GameAction) => {
  const { gameState, updateGameState, checkWinner } = props;
  useEffect(() => {
    updateGameState({ currentSign: gameState.currentSign == 'X' ? 'O' : 'X' });
    checkWinner(gameState.gameBoard);
  }, [gameState.gameBoard]);

  return (
    <div className="flex flex-col text-center w-[50%] h-[50%] border-2 shadow-lg border-borderColor">
      <GameBoard gameState={gameState} currentSign={gameState.currentSign} board={gameState.gameBoard} update={updateGameState} />
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
