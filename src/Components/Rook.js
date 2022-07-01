import rookpic from "../Assets/Chess_rdt45.svg"


function Rook(props) {
    return (<img src={rookpic} className="rook" onClick={() => props.moves("rook", props.position)}></img> );
}

export default Rook;