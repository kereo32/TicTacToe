import MainMenu from './Components/MainMenu';
import GameScreen from './Components/GameScreen';
import useGameManager from './hooks/useGameManager';
import { ReplayPopUp } from './Components/ReplayPopUp';
function App() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#00c1ac',
    },
  };

  const { gameState, updateGameState, checkWinner } = useGameManager();
  return (
    <div className="flex w-full h-full justify-center items-center bg-backgroundColor">
      <ReplayPopUp
        customStyles={customStyles}
        gameStatus={gameState.gameStatus}
        playerScores={gameState.playerScores}
        updateGameState={updateGameState}
      ></ReplayPopUp>

      {gameState.gameStatus == 'INIT' ? (
        <MainMenu updateGameState={updateGameState} />
      ) : (
        <GameScreen updateGameState={updateGameState} checkWinner={checkWinner} gameState={gameState} />
      )}
    </div>
  );
}

export default App;
