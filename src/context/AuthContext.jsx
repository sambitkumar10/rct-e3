import React, { createContext, useState } from "react";
import {useNavigate,useLocation} from "react-router-dom"
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isAuth,setIsAuth]=useState("")
  const navigate=useNavigate();
  const {state}=useLocation();

  const Login=()=>{
    setIsAuth(true)
  }
  const Logout=()=>{
    setIsAuth(false)
    navigate("/")
  }
  return <AuthContext.Provider value={{isAuth,Login,Logout}}>{children}</AuthContext.Provider>;
};
