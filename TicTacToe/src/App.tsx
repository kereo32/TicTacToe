import React, { useEffect, useState } from 'react';
import withAnimate from './HOCS/WithAnimate';
import MainMenu from './Components/MainMenu';
import GameScreen from './Components/GameScreen';
import useGameManager from './hooks/useGameManager';

function App() {
  const { gameState, updateGameState } = useGameManager();
  return (
    <div className="flex w-full h-full justify-center items-center bg-backgroundColor">
      {gameState.gameStatus == 'INIT' ? <MainMenu updateGameState={updateGameState} /> : <GameScreen updateGameState={updateGameState} gameState={gameState} />}
    </div>
  );
}

export default App;
