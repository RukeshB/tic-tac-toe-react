import Square from "./Square";

const Board = (props) => {

    const squares = props.input.map((element,index)=>{
        return <Square key={index} handleClick={()=>{props.handleClick(index)}} value={element}/>
    })

  return (
      <div className="grid grid-cols-3 gap-1">
        {squares}
      </div>
  );
};

export default Board;
