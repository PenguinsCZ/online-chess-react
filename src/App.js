import King from "./Components/King.js"
import Rook from "./Components/Rook.js";
import Field from "./Components/Field.js"
import './App.css';
import { useState } from "react";

function App() {
  const rowOne = [1,2,3,4,5,6,7,8]
  const rowTwo = [9,10,11,12,13,14,15,16]
  const rowThree = [17, 18,19,20,21,22,23,24]
  const rowFour = [25,26,27,28,29,30,31,32]
  const rowFive = [33,34,35,36,37,38,39,40]
  const rowSix = [41,42,43,44,45,46,47,48]
  const rowSeven = [49,50,51,52,53,54,55,56]
  const rowEight = [57,58,59,60,61,62,63,64]
  
  function showMoves(piece, position){
    
    const positions = calculateMoves(piece, position)
    let newarray = fields
    positions.map(x =>
        {newarray[x - 1].aimedAt = true
        
    })
    rememberPosition(position)
    movement([...newarray])
  }

  function calculateMoves(piece, position){
    
    if(piece === "rook"){
      let possiblePositions = []
      for (let i = position; i <= 64; i += 8){
        possiblePositions.push(i)
      }
      for (let i = position; i >= 1; i -= 8){
        possiblePositions.push(i)
      }
      if(position < 9){possiblePositions = possiblePositions.concat(rowOne)}
      else if(position < 17){possiblePositions = possiblePositions.concat(rowTwo)}
      else if(position < 25){possiblePositions = possiblePositions.concat(rowThree)}
      else if(position < 33){possiblePositions = possiblePositions.concat(rowFour)}
      else if(position < 41){possiblePositions = possiblePositions.concat(rowFive)}
      else if(position < 49){possiblePositions = possiblePositions.concat(rowSix)}
      else if(position < 57){possiblePositions = possiblePositions.concat(rowSeven)}
      else{possiblePositions = possiblePositions.concat(rowEight)}
      const filteredarray = possiblePositions.filter(function(e) { return e !== position })
      
      return filteredarray
    }
  }

  const[selectedPosition, rememberPosition] = useState()

  function move(positionValue){
    console.log(positionValue)
    console.log(selectedPosition)
    console.log(fields[selectedPosition - 1].figure)
    let newarray = fields
    newarray[positionValue - 1].figure = fields[selectedPosition - 1].figure
    newarray[selectedPosition - 1].figure = "empty"
    newarray.forEach(
      x => x.aimedAt = false
    )
    movement([...newarray])
    console.log(newarray)
  }


  const[fields, movement] = useState(
    
      [{figure: "empty", aimedAt: false},
      {figure: "king", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "rook", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "rook", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
  ]
    
  )

  return (
    <div className="App">
      <div className='chessboard'>
        {fields.map((x) => <Field figuree={x.figure} aimedAt={x.aimedAt} move={showMoves} moveTo={move} position={fields.indexOf(x) + 1}/>)}
      </div></div>
  );
}

export default App;
