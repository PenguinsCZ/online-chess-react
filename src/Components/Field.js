import King from "./King.js"
import Rook from "./Rook.js";

function Field(props) {

    function getFigure(figurestring){
        if(figurestring === "rook"){
            return <Rook moves={props.move} position={props.position}/>
        }
        if(figurestring === "king"){
            return <King/>
        }
        else{
            return <></>
        }
    }

    return ( <div className="field">{getFigure(props.figuree)}
    <div className={props.aimedAt ? "aimedat" : ""}></div></div> );
}

export default Field;