import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Home from "../../pages/Home";

// use react-router Link or NavLink
const Link = <a />;

const Navbar = () => {
  const {isAuth,Logout}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleClick=()=>{
    if(isAuth){
      Logout()
      navigate("/")
    }
    else{
    navigate("/Login")
    }
  }
  return (
    <div data-cy="navbar" style={{padding:"10px",display:"grid"}}>
      <Link data-cy="navbar-home-link">
        <Home />
      </Link>
      <span data-cy="navbar-cart-items-count">
        Cart:0
      </span>
      <button data-cy="navbar-login-logout-button" onClick={handleClick}>Login</button>
    </div>
  );
};

export default Navbar;
