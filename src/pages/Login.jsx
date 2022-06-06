import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [x,setX]=useState("")
  return (
    <div>
      <input data-cy="login-email"  placeholder="enter email" />
      <input data-cy="login-password" placeholder="enter password"/>
      <button data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
