import React from 'react';
import withAnimate from '../../HOCS/WithAnimate';

type Props = {};

const MainMenu = (props: Props) => {
  return (
    <div className="flex flex-col text-center w-[50%] h-[50%] border-2 shadow-lg border-borderColor">
      <h4 className="text-textColor text-4xl mt-10 font-serif">Tic Tac Toe</h4>
      <div className="flex flex-col mt-10 w-full items-center">
        <label className="text-textColor text-2xl w-[45%] font-mono">Play Vs AI</label>
        <button className="border-2 w-[45%] border-borderColor shadow-lg mt-2 hover:bg-borderColor">Play</button>
      </div>
      <div className="flex flex-col mt-10 w-full items-center">
        <label className="text-textColor text-2xl w-[45%] font-mono">Play Vs Player</label>
        <button className="border-2 w-[45%] border-borderColor shadow-lg mt-2 hover:bg-borderColor">Play</button>
      </div>
    </div>
  );
};

const MainMenuWithAnimate = withAnimate(MainMenu, { transition: { delay: 1 }, initial: { opacity: 0 }, whileInView: { opacity: 1 } });

export default MainMenuWithAnimate;
