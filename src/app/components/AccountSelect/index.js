import React from "react";
import { formatBalance } from "../../utils/formatAmount";
import cx from "clsx";
import "./accountSelect.scss";
import CheckCircleIcon from "../../svgs/check-circle.svg";
import RadioIcon from "../../svgs/radio.svg";

export default function AccountSelect({ accounts, value, onChange }) {
  let handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <ul className="account-select">
      {accounts.map((acct, index) => {
        let isChecked = acct.nuban === value;
        return (
          <li key={index}>
            <label
              className={cx("account-option", {
                "account-option--checked": isChecked,
              })}
            >
              <input
                type="radio"
                name="account-select"
                onChange={handleChange}
                checked={isChecked}
                value={acct.nuban}
              />
              <div className="account-option__details">
                <p className="account-option__account-no">
                  {acct.name}: {acct.nuban}
                </p>
                <p className="account-option__balance">
                  {formatBalance({
                    balance: acct.balance,
                    currency: acct.currency,
                  })}
                </p>
              </div>
              <div className="account-option__icon">
                {isChecked ? <CheckCircleIcon /> : <RadioIcon />}
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
