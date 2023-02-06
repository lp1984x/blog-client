import React, { useReducer, createContext } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};
interface IContext {
  user: null;
  isFetching: boolean;
  error: boolean;
  dispatch?: any;
}

export const MyContext = createContext<IContext>(INITIAL_STATE);

export const MyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  return (
    <MyContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
