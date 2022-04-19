import React from 'react';
import { BankLogo } from "../BankLogo";
import "./bankList.scss";

export default function BankList({ list, onSelect }) {
  return (
    <ul className="bank-list">
      {list.map((bank, index) => {
        return (
          <li key={index} className="bank-list-item" onClick={() => onSelect(bank)}>
            <BankLogo bank={bank} size="32" />
            <div className="bank-list-item__name">{bank.name}</div>
          </li>
        );
      })}
    </ul>
  );
}
