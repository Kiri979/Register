import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
  const [user, setUser] = useState(null);
  const [tokenValid, setTokenValid] = useState(false);
  const [authStateReady, setAuthStateReady] = useState(false);

  useEffect(() => {
    isLoggedIn();
  }, []);

  //   const isLoggedIn = async () => {
  //     AsyncStorage.getItem("userInfo").then(async (result) => {
  //       const userInfo = JSON.parse(result);
  //       setUser(userInfo);
  //       setTokenValid(userInfo ? true : false);
  //       setAuthStateReady(true);
  //     });
  //   };

  const isLoggedIn = async () => {
    const userInfo = await AsyncStorage.getItem("userInfo").then((res) =>
      JSON.parse(res)
    );
    if (userInfo) {
      return checkAuthTokenValid(userInfo);
    } else {
      updateAppState({}, false);
    }
  };
  const checkAuthTokenValid = async (userInfo) => {
    try {
      const response = await authService.checkUserTokenValid(
        userInfo.access_token
      );
      updateAppState(userInfo, true);
    } catch (error) {
      updateAppState({}, false);
    }
  };
  const updateAppState = (userInfo, isTokenValid) => {
    setUser(userInfo);
    setTokenValid(userInfo ? true : false);
    setAuthStateReady(true);
  };

  return { user, setUser, tokenValid, ready: authStateReady };
};
