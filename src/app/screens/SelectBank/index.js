import React, { useState } from "react";
import { BankLogo } from "../../components/BankLogo";
import { useAppState } from "../../contexts/AppStateContext";
import { useBankList } from "../../contexts/BankListContext";
import SearchIcon from "../../icons/search";
import "./styles.scss";

export default function SelectBank() {
  const { data } = useBankList();
  const [searchQuery, setSearchQuery] = useState("");

  const { dispatch } = useAppState();

  const filteredList = data.filter((bank) => {
    if (!searchQuery) {
      return bank;
    }
    return bank.name.toLowerCase().includes(searchQuery);
  });


  return (
    <div className="select-bank">
      <p className="heading">What bank do you use?</p>
      <div className="search">
        <div className="search__icon">
          <SearchIcon />
        </div>
        <input
          className="search__input"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <ul className="bank-list">
        {filteredList.map((bank, index) => {
          return (
            <li
              key={index}
              className="bank-list-item"
              onClick={() => {
                dispatch({ type: "selectBank", payload: bank });
              }}
            >
              <BankLogo bank={bank} size="32" />

              <div className="bank-name">{bank.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
