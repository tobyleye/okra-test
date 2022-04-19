import React, { useState } from "react";
import BottomBlock from "../../components/BottomBlock";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useAppState } from "../../contexts/AppStateContext";
import userdata from "./userdata";
import "./styles.scss";

export default function BankCredentialsForm() {
  const [identity, setIdentity] = useState("xxx");
  const [password, setPassword] = useState("xxx");
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useAppState();

  const submitCredentials = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch({
        type: "authenticate",
        payload: {
          userdata,
        },
      });
    }, 3000);
  };

  return (
    <div className="bank-credentials-form">
      <p className="heading">Type in your credentials</p>
      <p className="sub-heading">
        By entering your GTBank credentials here, you’re authorising Okra to pay
        Kent Woods the agreed amount.
      </p>

      <form onSubmit={submitCredentials}>
        <div className="form-fields">
          <TextField
            label="Email Address / Phone Number"
            required
            autoFocus
            value={identity}
            onChange={setIdentity}
          />
          <TextField
            label="Password / PIN"
            type="password"
            required
            value={password}
            onChange={setPassword}
          />
        </div>
        <span className="muted-text">Forgot password?</span>
        <BottomBlock>
          <Button label="Login" isLoading={isLoading} />
        </BottomBlock>
      </form>
    </div>
  );
}
