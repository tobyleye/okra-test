import React, { useState } from "react";
import BottomBlock from "../../components/BottomBlock";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useAppState } from "../../contexts/AppStateContext";
import userdata from "./userdata";
import { login_credentials } from "../../utils/constants";
import { isDev } from "../../utils/isDev";
import "./styles.scss";

console.log({
    isDev: isDev()
})

export default function BankCredentialsForm() {
  const [identity, setIdentity] = useState(isDev() ? login_credentials.username: '');
  const [password, setPassword] = useState(isDev() ? login_credentials.password : '');
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const { dispatch } = useAppState();

  const submitCredentials = (e) => {
    e.preventDefault();
    setLoginError(false)
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (
        login_credentials.username === identity &&
        login_credentials.password === password
      ) {
        dispatch({
          type: "authenticate",
          payload: {
            userdata,
          },
        });
      } else {
        setLoginError(true);
      }
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
            error={loginError && 'Account not found'}
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
