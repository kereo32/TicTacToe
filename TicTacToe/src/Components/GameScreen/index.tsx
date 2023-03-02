import React from 'react';
import withAnimate from '../../HOCS/WithAnimate';
import { withGameScore } from '../../HOCS/WithGameScore';
import { GameState } from '../../types/types';

const GameScreen = (props: GameState) => {
  const { gameState } = props;

  return <div className="flex flex-col text-center w-[50%] h-[50%] border-2 shadow-lg border-borderColor"></div>;
};

const GameScreenWithAnimate = withAnimate(GameScreen, {
  initial: { x: -1000 },
  whileInView: { x: 0 },
  transition: { ease: 'easeIn', duration: 0.5 },
});

const GameScreenWithGameScore = withGameScore(GameScreenWithAnimate);

export default GameScreenWithGameScore;
