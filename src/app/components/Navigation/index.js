import React, { useState } from "react";
import cx from "clsx";
import CloseIcon from "../../icons/close";
import ArrowLeftIcon from "../../icons/arrow-left";
import OkraLogo from "../../icons/okra-logo";
import UnionIcon from "../../icons/union";
import { useAppState } from "../../contexts/AppStateContext";
import { BankLogo } from "../BankLogo";
import "./navigation.scss";

export default function Navigation() {
  const { dispatch, state } = useAppState();

  let isBankSelected = state.selectedBank !== null;

  let handleBackBtnPress = () => {
    dispatch({
      type: "goBack",
    });
  };

  let handleCloseBtnPress = () => {
    dispatch({
      type: "goBack",
    });
  };

  return (
    <nav className="nav">
      {state.step > 0 ? (
        <button className="nav__back" onClick={handleBackBtnPress}>
          <ArrowLeftIcon />
        </button>
      ) : null}

      <div className="nav__mid">
        <UnionIcon />
        <OkraLogo />
        <div className="bank-logo-container">
          <div className={cx("bank-logo-slider", { slide: isBankSelected })}>
            <div className="no-logo">?</div>
            <div className="bank-logo">
              {isBankSelected && <BankLogo size="30" bank={state.selectedBank} />}
            </div>
          </div>
        </div>
      </div>

      {state.step > 0 ? (
        <button className="nav__close" onClick={handleCloseBtnPress}>
          <CloseIcon />
        </button>
      ) : null}
    </nav>
  );
}
