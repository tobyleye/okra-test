import React, { useState } from "react";
import AccountSelect from "../../components/AccountSelect";
import BottomBlock from "../../components/BottomBlock";
import Button from "../../components/Button";
import Success from "../../components/Success";
import { useAppState } from "../../contexts/AppStateContext";
import "./styles.scss";

export default function SelectBankAccount() {
  const [selectedAcct, setSelectedAcct] = useState(null);
  const { state, dispatch } = useAppState();
  const [isLoading, setisLoading] = useState();
  const [showSuccess, setShowSuccess] = useState(false);

  const reset = () => {
    dispatch({
      type: "reset",
    });
  };

  const processPayment = () => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      setShowSuccess(true);
    }, 3000);
  };

  return (
    <div className="select-bank-account">
      <p className="heading">Which account do you want to pay from?</p>
      <p className="account-name">Account Name: TOKUNBO O. ADEDEJI</p>
      <AccountSelect
        accounts={state.userdata.accounts}
        value={selectedAcct}
        onChange={setSelectedAcct}
      />

      <BottomBlock>
        <Button
          label="Pay ₦1,000 + NIP Charges"
          isLoading={isLoading}
          disabled={selectedAcct === null}
          onClick={processPayment}
        />
      </BottomBlock>
      {showSuccess ? <Success selectedAccount={selectedAcct} onReset={reset} /> : null}
    </div>
  );
}
