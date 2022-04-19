import React from "react";
import Spinner from "../Spinner";
import cx from "clsx";
import "./button.scss";

export default function Button({ label, isLoading, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cx("btn", isLoading && "btn--is-loading")}
    >
      <span className="btn__label">{label}</span>
      <div className="btn__spinner">
        <Spinner size="24" color="white" />
      </div>
    </button>
  );
}
