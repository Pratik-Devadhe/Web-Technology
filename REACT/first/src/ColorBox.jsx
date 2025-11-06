import React, { useState } from "react";

export default function ColorBox({ colors }) {
  const [color, setColor] = useState("#74b9ff");

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div
      className="p-5 rounded shadow-lg text-center"
      style={{
        backgroundColor: color,
        width: "300px",
        height: "300px",
        transition: "background-color 0.5s ease",
      }}
    >
      <h4 className="text-white fw-bold mb-4">Current Color</h4>
      <div
        className="bg-white text-dark fw-semibold rounded py-2 mb-4"
        style={{ fontSize: "18px" }}
      >
        {color}
      </div>
      <button
        className="btn btn-light fw-semibold px-4"
        onClick={changeColor}
      >
        Change Color
      </button>
    </div>
  );
}
