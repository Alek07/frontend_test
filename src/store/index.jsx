import React from "react";
import reducer from "./reducer"

const initialState = {
  user_reservations: []
};

export const Store = React.createContext(initialState);

export function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  );
}
