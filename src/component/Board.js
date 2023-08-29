import Square from "./Square";

const Board = (props) => {

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="grid grid-rows-3 gap-1">
        <div className="grid grid-cols-3  gap-1">
          <Square handleClick={()=>{props.handleClick(0)}} value={props.input[0]} />
          <Square handleClick={()=>{props.handleClick(1)}} value={props.input[1]} />
          <Square handleClick={()=>{props.handleClick(2)}} value={props.input[2]} />
        </div>
        <div className="grid grid-cols-3  gap-1">
          <Square handleClick={()=>{props.handleClick(3)}} value={props.input[3]} />
          <Square handleClick={()=>{props.handleClick(4)}} value={props.input[4]} />
          <Square handleClick={()=>{props.handleClick(5)}} value={props.input[5]} />
        </div>
        <div className="grid grid-cols-3  gap-1">
          <Square handleClick={()=>{props.handleClick(6)}} value={props.input[6]} />
          <Square handleClick={()=>{props.handleClick(7)}} value={props.input[7]} />
          <Square handleClick={()=>{props.handleClick(8)}} value={props.input[8]} />
        </div>
      </div>
    </div>
  );
};

export default Board;
