import React, { useState } from "react";
import cx from "clsx";
import CloseIcon from "../../svgs/close.svg";
import ArrowLeftIcon from "../../svgs/arrow-left.svg";
import OkraLogo from "../../svgs/okra-logo.svg";
import UnionIcon from "../../svgs/union.svg";
import { useAppState } from "../../contexts/AppStateContext";
import { getInitials } from "../../utils/getInitials";
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
              {isBankSelected && (
                <img
                  src={state.selectedBank.icon}
                  alt={getInitials(state.selectedBank.name)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {state.step> 0 ? (
        <button className="nav__close" onClick={handleCloseBtnPress}>
          <CloseIcon />
        </button>
      ) : null}
    </nav>
  );
}
