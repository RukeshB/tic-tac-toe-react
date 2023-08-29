import Board from "./Board";
import { useEffect, useState } from "react";

const Game = () => {
  const [input, setInput] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [display, setDisplay] = useState(<></>);

  const handleNewGame = () => {
    setInput(Array(9).fill(null));
    setXTurn(true);
  };

  const handleClick = (index) => {
    if (input[index] != null) return;
    const copyInput = [...input];
    copyInput[index] = xTurn ? "x" : "o";
    setInput(copyInput);
    setXTurn((prevState) => {
      return !prevState;
    });
  };

  const checkWinner = (value) => {
    const winLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winLogic) {
      const [a, b, c] = logic;

      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }

    return null;
  };

  useEffect(() => {
    const winner = checkWinner(input);
    const hasNull = input.some((item) => item === null);
    
    winner ? (
      setDisplay(
        <div className="text-3xl md:text-6xl text-slate-700">{winner} won</div>
      )
    ) : hasNull ? (
      setDisplay(
        <>
          <Board input={input} handleClick={handleClick} />
          <h2 className="text-2xl text-slate-700">{xTurn ? "x" : "o"} Turn</h2>
        </>
      )
    ) : (
      setDisplay(<div className="text-3xl md:text-6xl text-slate-700">Draw</div>)
    );
  }, [input]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-screen">
      <h1 className="text-4xl md:text-7xl text-slate-700">Tic Tac Toe Game</h1>
      <button
        onClick={handleNewGame}
        className="border-2 border-slate-700 px-4 py-2 hover:bg-slate-700 hover:text-white rounded-lg"
      >
        New Game
      </button>
      {display}
    </div>
  );
};

export default Game;
