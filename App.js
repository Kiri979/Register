import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { AuthProvider } from "./src/hooks/provider/authProvider";
import Navigation from "./src/navigation/navigation"
import useAuthCheck from "./src/hooks/custom/useAuthCheck";

export default function App () {
  const authState = useAuthCheck();
  const isAppReady = authState.ready;

  useEffect(() => {
    hideSplash()
  }, [authState.ready])

  if (!isAppReady) return;

  return (
    <AuthProvider authState={authState}>
      <Navigation />
    </AuthProvider>
  );
};

const hideSplash = () => {
  const hideSplashAsync = async () => await SplashScreen.hideAsync()
  hideSplashAsync()
}

