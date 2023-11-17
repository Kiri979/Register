import React, { useState } from 'react';
import { AuthContext } from '../context/context';

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isTokenValid, setIsTokenValid] = useState(false);

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo, isTokenValid, setIsTokenValid }}>
      {children}
    </AuthContext.Provider>
  );
};