import React, { useReducer, createContext, useEffect } from "react";
import Reducer from "./Reducer";
import { IUser } from "../models";

interface IContext {
  user: IUser;
  isFetching: boolean;
  error: boolean;
  dispatch?: any;
}

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")!),
  isFetching: false,
  error: false,
};

export const MyContext = createContext<IContext>(INITIAL_STATE);

export const MyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

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
