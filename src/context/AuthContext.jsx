import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, registerRequest, logoutRequest } from "../api/axios";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used with a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setisAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      console.log(res.data);
      setisAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
      setisAuthenticated(false);
    } catch (error) {
      setErrors(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors([]);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [errors]);

  useEffect(() => {
    const cookies = Cookies.get();
    console.log(cookies);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signUp, isAuthenticated, errors, signIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
