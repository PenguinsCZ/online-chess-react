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
  


  //--------------------------- SHOW MOVES ----------------------------//
  function showMoves(piece, position, color){
    
    const positions = calculateMoves(piece, position, color)
    let newarray = fields
    newarray.map(
      x => {x.aimedAt = false}
    )
    positions.map(x =>
        {newarray[x - 1].aimedAt = true
        
    })
    rememberPosition(position)
    movement([...newarray])
  }



  //---------------------- CALCULATE MOVES ---------------------------//
  function calculateMoves(piece, position, color){
    let x = false
    if(piece === "rook"){
      let possiblePositions = []
      for (let i = position; i <= 64; i += 8){
        
        if((fields[i-1].figure.slice(-5) === color && i !== position) || x){
          break
        }
        else if((fields[i-1].figure.slice(-5) === "black" || fields[i-1].figure.slice(-5) === "white") && fields[i-1].figure.slice(-5) !== color){
          x = true
          possiblePositions.push(i)
          
        }
        possiblePositions.push(i)
        
      }
      for (let i = position; i >= 1; i -= 8){
        if(fields[i-1].figure.slice(-5) === color && i !== position){
          break
        }
        possiblePositions.push(i)
      }
      if(position < 9){for(let i = position; i <= 8; i++){
        
        if(fields[i-1].figure.slice(-5) === color && i !== position && x){break}
        else if((fields[i-1].figure.slice(-5) === "black" || fields[i-1].figure.slice(-5) === "white") && fields[i-1].figure.slice(-5) !== color){
          x = false
          possiblePositions.push(rowOne[i-1])
          
        }
        else{possiblePositions.push(rowOne[i-1])}}
        
        for(let i = position; i >= 1; i--){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
        else{possiblePositions.push(rowOne[i-1])}}
      }
      else if(position < 17){for(let i = position; i <= 16; i++){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowTwo[i-9])}}
      for(let i = position; i >= 9; i--){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowTwo[i-9])}}
      }
      else if(position < 25){for(let i = position; i <= 24; i++){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowThree[i-17])}}
      for(let i = position; i >= 17; i--){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowThree[i-17])}}
      }
      else if(position < 33){for(let i = position; i <= 32; i++){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowFour[i-25])}}
      for(let i = position; i >= 25; i--){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowFour[i-25])}}
      }
      else if(position < 41){for(let i = position; i <= 40; i++){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowFive[i-33])}}
      for(let i = position; i >= 33; i--){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowFive[i-33])}}
      }
      else if(position < 49){for(let i = position; i <= 48; i++){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowSix[i-41])}}
      for(let i = position; i >= 41; i--){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowSix[i-41])}}
      }
      else if(position < 57){for(let i = position; i <= 56; i++){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowSeven[i-49])}}
      for(let i = position; i >= 49; i--){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowSeven[i-49])}}
      }
      else{for(let i = position; i <= 64; i++){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowEight[i-57])}}
      for(let i = position; i >= 57; i--){if(fields[i-1].figure.slice(-5) === color && i !== position){break}
      else{possiblePositions.push(rowEight[i-57])}}
      }
      const filteredarray = possiblePositions.filter(function(e) { return e !== position })
      
      return filteredarray
    }


    else if(piece === "king"){
      let possiblePositions = []
      const row = getRow(position)
      if(position > row[0]){possiblePositions.push(position - 1)}
      if(position  < row[row.length - 1]){possiblePositions.push(position + 1)}
      if(position + 7 > row[row.length - 1] && row !== rowEight){possiblePositions.push(position + 7)}
      if(row !== rowEight){possiblePositions.push(position + 8)}
      if(position !== row[row.length - 1] && row !== rowEight){possiblePositions.push(position + 9)}
      if(position !== row[0] && row !== rowOne){possiblePositions.push(position - 9)}
      if(row !== rowOne){possiblePositions.push(position - 8)}
      if(position -7 < row[0] && row !== rowOne){possiblePositions.push(position - 7)}

      return possiblePositions
    }
  }



  //---------------------- GET ROW ---------------------------//
  function getRow(position){
    if(position < 9){return rowOne}
      else if(position < 17){return rowTwo}
      else if(position < 25){return rowThree }
      else if(position < 33){return rowFour}
      else if(position < 41){return rowFive}
      else if(position < 49){return rowSix}
      else if(position < 57){return rowSeven}
      else{return rowEight}
  }




  //-------------------------- MOVE -------------------------------//
  const[selectedPosition, rememberPosition] = useState()

  function move(positionValue){
    
    let newarray = fields
    newarray[positionValue - 1].figure = fields[selectedPosition - 1].figure
    newarray[selectedPosition - 1].figure = "empty"
    newarray.forEach(
      x => x.aimedAt = false
    )
    movement([...newarray])
    
  }



  //--------------------------- FIELDS ---------------------------//
  const[fields, movement] = useState(
    
      [{figure: "empty", aimedAt: false},
      {figure: "king-black", aimedAt: false},
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
      {figure: "rook-black", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "rook-black", aimedAt: false},
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
      {figure: "rook-white", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "empty", aimedAt: false},
      {figure: "king-white", aimedAt: false},
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
