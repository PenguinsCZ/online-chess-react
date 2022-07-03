import rookpicblack from "../Assets/Chess_rdt45.svg"
import rookpicwhite from "../Assets/Chess_rlt45.svg"

function Rook(props) {
    function getRookPic(){
        if(props.color === "white"){
            return rookpicwhite
        }
        else{
            return rookpicblack
        }
    }
    return (<img src={getRookPic()} className="rook" onClick={() => props.moves("rook", props.position, props.color)}></img> );
}

export default Rook;