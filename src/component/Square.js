const Square = (props) => {
    return (
        <button className="w-20 h-20 bg-slate-700 text-6xl text-white" onClick={props.handleClick}>
            {props.value}
        </button>
    )
}

export default Square;