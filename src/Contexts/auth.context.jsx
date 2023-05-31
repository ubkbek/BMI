import { createContext, useContext, useState, useEffect } from "react";
const Context = createContext();

// eslint-disable-next-line react/prop-types
const LoginProvider = ({ children }) => {
  const [state, setState] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    window.localStorage.setItem("token", state);
  }, [state]);

  const value = {
    state,
    setState,
  };

  return (
    <Context.Provider value={value}>
      <Context.Consumer>{() => children}</Context.Consumer>
    </Context.Provider>
  );
};

const useLogin = (setterOnly) => {
  const { state, setState } = useContext(Context);
  return setterOnly ? [setState] : [state, setState];
};

export { LoginProvider, useLogin };
