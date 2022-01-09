import { createContext, useState } from "react";
export const AuthContext = createContext({ token: "", handleToken: () => {} });
export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const handleToken = (token) => {
    setToken(token);
  };
  const value = { token, handleToken };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
