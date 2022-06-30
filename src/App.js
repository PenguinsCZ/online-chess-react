import King from "./Components/King.js"
import Rook from "./Components/Rook.js";
import Field from "./Components/Field.js"
import './App.css';
import { useState } from "react";

function App() {
  function showMoves(piece, position){
    console.log(piece, position)
    calculateMoves(piece, position)
  }

  function calculateMoves(piece, position){
    
    if(piece === "rook"){
      let possiblePositions = []
      for (let i = position; position <= 64; i += 8){
        possiblePositions += i
      }
      console.log(possiblePositions)
    }
  }

  const[fields, movement] = useState(
    
      [<Field figure={<Rook moves={showMoves} position={1}/>}></Field>,
      <Field figure={<King moves={showMoves} position={2}/>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
      <Field figure={<></>}></Field>,
  ]
    
  )

  return (
    <div className="App">
      <div className='chessboard'>
        {fields}
      </div></div>
  );
}

export default App;
