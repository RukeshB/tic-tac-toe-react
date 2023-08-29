import { useState } from "react";
import Square from "./Square";

const Board = () => {
    const [input, setInput] = useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true);
    const handleClick = (index) => {
        if(input[index] != null) return;
        const copyInput = [...input];
        copyInput[index] = xTurn ? 'x' : 'o';
        setInput(copyInput);
        setXTurn((prevState) => {
            return !prevState;
        })
    }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="grid grid-rows-3 gap-1">
        <div className="grid grid-cols-3  gap-1">
          <Square handleClick={()=>{handleClick(0)}} value={input[0]} />
          <Square handleClick={()=>{handleClick(1)}} value={input[1]} />
          <Square handleClick={()=>{handleClick(2)}} value={input[2]} />
        </div>
        <div className="grid grid-cols-3  gap-1">
          <Square handleClick={()=>{handleClick(3)}} value={input[3]} />
          <Square handleClick={()=>{handleClick(4)}} value={input[4]} />
          <Square handleClick={()=>{handleClick(5)}} value={input[5]} />
        </div>
        <div className="grid grid-cols-3  gap-1">
          <Square handleClick={()=>{handleClick(6)}} value={input[6]} />
          <Square handleClick={()=>{handleClick(7)}} value={input[7]} />
          <Square handleClick={()=>{handleClick(8)}} value={input[8]} />
        </div>
      </div>
    </div>
  );
};

export default Board;
