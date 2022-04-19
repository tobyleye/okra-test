import React, { useContext, useReducer, createContext } from "react";

const AppStateContext = createContext(null);

export function AppStateContextProvider({ children }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action.type === "reset") {
        return {
          ...state,
          step: 0,
          selectedBank: null,
        };
      } else if (action.type === "selectBank") {
        return {
          ...state,
          step: 1,
          selectedBank: action.payload,
        };
      } else if (action.type === "goBack") {
        let curStep = state.step;
        if (curStep === 1) {
          return {
            ...state,
            step: 0,
            selectedBank: null,
          };
        }
        return {
          ...state,
          step: state.step <= 0 ? state.step : state.step-1,
        };
      } else if (action.type === "authenticate") {
        return {
          ...state,
          userdata: action.payload.userdata,
          step: state.step + 1
        }
      }
      return state;
    },
    {
      step: 0,
      selectedBank: null,
      userdata: null,
    }
  );

  let value = { state, dispatch };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const value = useContext(AppStateContext);
  return value;
}
