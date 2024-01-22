'use client'

import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [ui, setUi] = useState({
    hidden: false,
    dark: false,
    modal: false
  });

  return (
    <AppContext.Provider value={{ ui, setUi }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}