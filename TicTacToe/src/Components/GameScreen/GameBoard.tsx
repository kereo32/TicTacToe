import React from 'react';

type BoardProps = {
  board: string[];
  update: (gameState: any) => void;
  currentSign: string;
};

const GameBoard: React.FC<BoardProps> = ({ board, update, currentSign }) => {
  const renderSquare = (index: number) => {
    return (
      <button
        className="bg-white border border-gray-400 p-4 w-20 h-20 text-3xl font-bold"
        onClick={() => {
          update({ gameBoard: board.map((square, i) => (i == index ? currentSign : square)) });
        }}
      >
        {board[index]}
      </button>
    );
  };

  return (
    <div className="flex flex-wrap self-center mt-[8%] w-60">
      {board.map((square, index) => (
        <div key={index} className="w-1/3">
          {renderSquare(index)}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
