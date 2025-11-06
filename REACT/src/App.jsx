import React from "react";
import ColorBox from "./ColorBox";

export default function App() {
  // List of colors passed as props
  const colors = ["#ff4757", "#2ed573", "#1e90ff", "#ffa502", "#9b59b6", "#00cec9"];

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f1f2f6", fontFamily: "Poppins, sans-serif" }}
    >
      <h1 className="mb-4 text-primary fw-bold">🎨 Color Changer App</h1>
      <ColorBox colors={colors} />
    </div>
  );
}
