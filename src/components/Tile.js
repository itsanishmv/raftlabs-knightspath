import React from "react";

function Tile({ tileColor, coordinates, handleChildToParent, knightPosition }) {
  return (
    <button
      onClick={(e) => handleChildToParent(e.target.getAttribute("value"))}
      value={coordinates}
      disabled={knightPosition == coordinates}
      style={{
        border: "none",
        backgroundColor: tileColor,
        height: "62.5px",
        width: "62.5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        style={{
          display: knightPosition == coordinates ? "block" : "none",
          height: "25px",
          width: "25px",
          cursor: "none",
        }}
        src={"knightIMG.png"}
        alt="horse"
      />
      {knightPosition == coordinates ? "" : coordinates}
    </button>
  );
}

export default Tile;
