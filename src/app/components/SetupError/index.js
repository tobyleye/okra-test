import React from "react";
import Center from "../Center";
import alert from "./alert.png";
import "./setupError.scss";

export default function SetupError() {
  return (
    <Center>
      <div className="setup-error">
          <div className="setup-error__icon">
              <img src={alert} alt="error"/>
          </div>
        <p className="setup-error__message">Ooopps! There seem to be a problem</p>
      </div>
    </Center>
  );
}
