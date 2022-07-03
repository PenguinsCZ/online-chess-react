import kingpicblack from "../Assets/Chess_kdt45.svg"
import kingpicwhite from "../Assets/Chess_klt45.svg"
import "../App.css"

function King(props) {
    function getKingPic(){
        if(props.color === "white"){
            return kingpicwhite
        }
        else{
            return kingpicblack
        }
    }
    return (<img src={getKingPic()} className="king" onClick={() => props.moves("king", props.position, props.color)}></img> );
}

export default King;