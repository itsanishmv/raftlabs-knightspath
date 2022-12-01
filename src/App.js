import React, { useEffect, useState } from "react";
import "./App.css";
import Tile from "./components/Tile";
import findPath from "./findPath";

function App({}) {
  const [knightPosition, setKnightPosititon] = useState("");
  const [destinationTile, setDestinationTile] = useState();
  const y = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const x = ["A", "B", "C", "D", "E", "F", "G", "H"];

  useEffect(() => {
    setDestinationTile(findPath(knightPosition));
  }, [knightPosition]);

  function handlechildToParent(pos) {
    setKnightPosititon(pos);
  }
  let arr = [];
  for (let i = y.length - 1; i >= 0; i--) {
    for (let j = 0; j < x.length; j++) {
      const even = (i + j) % 2 == 0;
      const color = even ? "black" : "white";
      arr.push({ tileColor: color, coordinates: x[j] + y[i] });
    }
  }

  return (
    <div className="App">
      <h1>Chessboard</h1>
      <h5>
        (please click on the box to see the possible paths where a knight can
        move )
      </h5>
      <div className="chessboard">
        {arr.map((el) => (
          <Tile
            tileColor={
              destinationTile?.includes(el.coordinates) ? "green" : el.tileColor
            }
            coordinates={el.coordinates}
            handleChildToParent={handlechildToParent}
            knightPosition={knightPosition}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
