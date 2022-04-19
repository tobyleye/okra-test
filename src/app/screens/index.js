import React, { lazy } from "react";
import { useAppState } from "../contexts/AppStateContext";
import Navigation from "../components/Navigation";
import { BankListContextProvider } from "../contexts/BankListContext";
import Loader from "../components/Loader";

const SelectBank = lazy(() => import("./SelectBank"));
const BankCredentialsForm = lazy(() => import("./BankCredentialsForm"));
const SelectBankAccount = lazy(() => import("./SelectBankAccount"));

export default function Screens() {
  const { state } = useAppState();

  let renderScreen = () => {
    switch (state.step) {
      case 0:
        return <SelectBank />;
      case 1:
        return <BankCredentialsForm />;
      case 2:
        return <SelectBankAccount />;
      default:
        return null;
    }
  };

  return (
    <BankListContextProvider>
      {({ loading }) => {
        if (loading) {
          return <Loader />;
        }
        return (
          <>
            <Navigation />
            {renderScreen()}
          </>
        );
      }}
    </BankListContextProvider>
  );
}
