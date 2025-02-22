import { createContext, useContext } from "react";
// import apiCall from "./api";

const AppContext = createContext();


export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
 
  const instance = () => {
    // return apiCall();
  };

  return (
    <AppContext.Provider
      value={{  instance }}
    >
      {children}
    </AppContext.Provider>
  );
};
