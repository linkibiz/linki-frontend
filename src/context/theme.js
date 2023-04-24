"use client";

import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({});

export const useAuth = () => useContext(ThemeContext)

export const ThemeContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <ThemeContext.Provider value={{ auth, setAuth }}>
      {children}
    </ThemeContext.Provider>
  )
};
