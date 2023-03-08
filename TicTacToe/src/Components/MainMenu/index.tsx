import React, { SyntheticEvent } from 'react';
import withAnimate from '../../HOCS/WithAnimate';

type Props = {
  updateGameState: (gameState: any) => void;
};

const MainMenu = (props: Props) => {
  return (
    <div className="flex flex-col text-center w-[50%] h-[50%] border-2 shadow-lg border-borderColor">
      <h4 className="text-textColor text-4xl mt-10 font-serif">Tic Tac Toe</h4>
      <div className="flex flex-col mt-10 w-full items-center">
        <label className="text-textColor text-2xl w-[45%] font-mono">Play Vs AI</label>
        <button
          onClick={() => {
            props.updateGameState({ gameStatus: 'PLAYING', isPlayingVsComputer: true });
          }}
          className="border-2 w-[45%] border-borderColor shadow-lg mt-2 hover:bg-borderColor"
        >
          Play
        </button>
      </div>
      <div className="flex flex-col mt-10 w-full items-center">
        <label className="text-textColor text-2xl w-[45%] font-mono">Play Vs Player</label>
        <button
          onClick={() => {
            props.updateGameState({ gameStatus: 'PLAYING', isPlayingVsComputer: false });
          }}
          className="border-2 w-[45%] border-borderColor shadow-lg mt-2 hover:bg-borderColor"
        >
          Play
        </button>
      </div>
    </div>
  );
};

const MainMenuWithAnimate = withAnimate(MainMenu, {
  initial: { scale: 0 },
  animate: { rotate: 360, scale: 1 },
  transition: { type: 'spring', stiffness: 260, damping: 20 },
});

export default MainMenuWithAnimate;
