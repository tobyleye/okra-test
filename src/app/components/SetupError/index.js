import React from "react";
import Center from "../Center";

export default function SetupError() {
  return (
    <Center>
      <div className="setup-error">
        <p className="setup-error__message">Ooopps, something bad happened</p>
      </div>
    </Center>
  );
}
