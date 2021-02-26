import { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ reducer, initalState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);