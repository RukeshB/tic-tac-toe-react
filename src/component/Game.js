import Board from "./Board";
import { useState } from "react";

const Game = () => {
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
        <div>
            <Board input={input} handleClick={handleClick}/>
        </div>
    )
}

export default Game;