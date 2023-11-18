import React, { useState } from 'react';
import { AuthContext } from '../context/context';

export const AuthProvider = ({ children, authState }) => {
  const [userInfo, setUserInfo] = useState(authState.user);
  const [isTokenValid, setIsTokenValid] = useState(authState.tokenValid);

  return (
    <AuthContext.Provider 
    value={{ userInfo, setUserInfo, isTokenValid, setIsTokenValid }}>
      {children}
    </AuthContext.Provider>
  );
}; 