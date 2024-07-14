// AuthContext.js
import React, { createContext, useState } from 'react';

// Crea el contexto
export const AuthContext = createContext();

// Crea el proveedor
export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  const login = (data) => {
    setAuthData(data);
  };

  const logout = () => {
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
