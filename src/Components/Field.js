import King from "./King.js"
import Rook from "./Rook.js";

function Field(props) {

    function getFigure(figurestring){
        if(figurestring === "rook-black"){
            return <Rook moves={props.move} position={props.position} color={"black"}/>
        }
        if(figurestring === "rook-white"){
            return <Rook moves={props.move} position={props.position} color={"white"}/>
        }
        if(figurestring === "king-black"){
            return <King moves={props.move} position={props.position} color={"black"}/>
        }
        if(figurestring === "king-white"){
            return <King moves={props.move} position={props.position}  color={"white"}/>
        }
        else{
            return <></>
        }
    }

    return ( <div className="field"><div className="absolute">{props.position}</div>{getFigure(props.figuree)}
    <div className={props.aimedAt ? "aimedat" : ""} onClick={() => props.moveTo(props.position, props.figuree)}></div></div> );
}

export default Field;