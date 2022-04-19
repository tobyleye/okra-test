import "./styles/global.scss";
import React, { Suspense, useState, useEffect } from "react";
import { Container } from "./components/Container";
import { validateOptions } from "./utils/validateOptions";
import Loader from "./components/Loader";
import Screens from "./screens";
import SetupError from "./components/SetupError";
import { AppStateContextProvider } from "./contexts/AppStateContext";

export default function App({ options }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    validateOptions(options)
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [options]);

  return (
    <Container>
      <Suspense fallback={<Loader />}>
        {isLoading && <Loader />}
        {!isLoading && error && <SetupError />}
        {!isLoading && !error && (
          <AppStateContextProvider>
            <Screens />
          </AppStateContextProvider>
        )}
      </Suspense>
    </Container>
  );
}
