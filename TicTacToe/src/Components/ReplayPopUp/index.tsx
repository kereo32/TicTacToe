import Modal from 'react-modal';

export function ReplayPopUp(props) {
  return (
    <Modal style={props.customStyles} isOpen={props.gameStatus == 'FINISHED' ? true : false} contentLabel="Example Modal">
      <div className="flex flex-col w-72 h-72 ">
        <h4 className=" text-textColor text-2xl text-center mt-4">
          {props.playerScores.player1 > props.playerScores.player2 ? 'Player 1 Won' : 'Player 2 Won'}
        </h4>
        <h4 className=" text-textColor text-2xl text-center mt-4">Game Over</h4>
        <button
          className=" bg-borderColor text-textColor text-2xl mt-6"
          onClick={() =>
            props.updateGameState({
              gameStatus: 'INIT',
            })
          }
        >
          Replay
        </button>
      </div>
    </Modal>
  );
}
