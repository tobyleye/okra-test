import React from "react";
import "./spinner.scss";

export default function Spinner({ size = 24, color = "black" }) {
  return (
    <div
      className="spinner"
      style={{
        "--size": size + "px",
        "--color": color,
      }}
    >
      {Array(12)
        .fill(null)
        .map((_, index) => {
          return <div key={index} />;
        })}
    </div>
  );
}
