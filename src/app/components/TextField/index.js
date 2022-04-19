import React, { useState } from "react";
import cx from "clsx";
import "./textfield.scss";

export default function TextField({
  type = "text",
  label,
  value = "",
  onChange,
  error,
  ...props
}) {
  let hasValue = value.length > 0;
  let [focused, setfocused] = useState(false);
  return (
    <div
      className={cx("text-field__wrapper", {
        "text-field__wrapper--error": !!error,
      })}
    >
      <div
        className={cx(
          "text-field",
          { "text-field--has-value": hasValue },
          { "text-field--focused": focused }
        )}
      >
        <input
          {...props}
          type={type}
          onChange={(e) => onChange(e.target.value, e)}
          value={value}
          onFocus={() => setfocused(true)}
          onBlur={() => setfocused(false)}
        />
        <label>{label}</label>
      </div>
      {error && <div className="text-field__error-msg">{error}</div>}
    </div>
  );
}
