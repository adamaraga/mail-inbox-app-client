import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  messagesCount: null,
  messages: null,
  message: null,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        messagesCount: state.messagesCount,
        messages: state.messages,
        message: state.message,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
