import kingpic from "../Assets/Chess_kdt45.svg"
import "../App.css"

function King(props) {
    return ( <img src={kingpic} className="king" onClick={() => props.moves}></img> );
}

export default King;