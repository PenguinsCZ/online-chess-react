import King from "./King.js"
import Rook from "./Rook.js";

function Field(props) {

    function getFigure(figurestring){
        if(figurestring === "rook"){
            return <Rook moves={props.move} position={props.position}/>
        }
        if(figurestring === "king"){
            return <King moves={props.move} position={props.position}/>
        }
        else{
            return <></>
        }
    }

    return ( <div className="field">{getFigure(props.figuree)}
    <div className={props.aimedAt ? "aimedat" : ""} onClick={() => props.moveTo(props.position, props.figuree)}></div></div> );
}

export default Field;