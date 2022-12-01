import React from "react";

import KNIGHT from "./knightIMG.png";

function Tile({ tileColor, coordinates, handleChildToParent, knightPosition }) {
  return (
    <div
      onClick={(e) => handleChildToParent(e.target.getAttribute("value"))}
      value={coordinates}
      style={{
        backgroundColor: tileColor,
        height: "62.5px",
        width: "62.5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          display: knightPosition == coordinates ? "block" : "none",
          height: "20px",
          width: "20px",
        }}
        src={KNIGHT}
        alt="horse"
      />
      {coordinates}
    </div>
  );
}

export default Tile;
