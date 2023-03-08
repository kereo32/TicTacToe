import useGameManager from '../hooks/useGameManager';

export const withGameScore = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return function WithGameScore(props: P) {
    return (
      <div className="flex flex-col justify-center text-center w-full h-full">
        <div className="flex flex-row justify-between text-center m-10">
          <h4 className="flex flex-col text-4xl">
            Player 1 <span className=" text-textColor mt-1">{props.gameState.playerScores.player1}</span>
          </h4>
          <h4 className="flex flex-col text-4xl">
            Player 2<span className=" text-textColor mt-1">{props.gameState.playerScores.player2} </span>
          </h4>
        </div>
        <WrappedComponent {...(props as P)} />
      </div>
    );
  };
};
