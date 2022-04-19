import React, { useEffect, useState, useContext, createContext } from "react";

const BankListContext = createContext(null);

export function BankListContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let fetchBankList = async () => {
      setError(false);
      setLoading(true);
      try {
        let { data } = await window
          .fetch("https://api.okra.ng/v2/banks/list")
          .then((res) => res.json());
        setData(data.banks);
        setError(false);
      } catch (err) {
        setError(true);
      }
      finally {
        setLoading(false)
      }
    };

    fetchBankList();
  }, []);

  let value = {
    data,
    loading,
    error,
  };

  return (
    <BankListContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </BankListContext.Provider>
  );
}

export function useBankList() {
  const value = useContext(BankListContext);
  return value;
}
