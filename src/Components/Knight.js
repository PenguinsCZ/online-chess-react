import knightpicblack from "../Assets/Chess_ndt45.svg"
import knightpicwhite from "../Assets/Chess_nlt45.svg"
import "../App.css"

function Knight(props) {
    function getKnightPic(){
        if(props.color === "white"){
            return knightpicwhite
        }
        else{
            return knightpicblack
        }
    }
    return (<img src={getKnightPic()} className="knight" onClick={() => props.moves("knight", props.position, props.color)}></img> );
}

export default Knight;