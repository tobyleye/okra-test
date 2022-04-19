import React from "react";
import CloseIcon from "../../svgs/close.svg";
import BottomBlock from "../BottomBlock";
import Button from "../Button";
import CheckIcon from "../../svgs/check.svg"
import "./success.scss";

export default function Success({ selectedAccount, onReset }) {

  return (
    <div className="success">
      <div className="success__close">
        <button onClick={onReset}>
          <CloseIcon />
        </button>
      </div>
      <div className="success__icon">
          <CheckIcon />
      </div>
      <p className="success__message">
        Your account ending in {selectedAccount.slice(-4, 0)} has been successfully linked and debited.
      </p>
      <BottomBlock>
        <Button label="Return to CrossWallet" onClick={onReset} />
      </BottomBlock>
    </div>
  );
}
