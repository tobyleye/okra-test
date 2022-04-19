import React from "react";
import "./container.scss";

export function Container({ children }) {
  return (
    <div className="container">
      <div className="inner">{children}</div>
    </div>
  );
}
