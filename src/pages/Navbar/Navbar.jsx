import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineLock,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useGlobalHook } from "../../Hooks/Context";
import { useEffect } from "react";
import logo from "../../assets/Img/logo.webp";

import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { show, toggle, navbar, scrollbar } = useGlobalHook();
  useEffect(() => {
    scrollbar();
    window.addEventListener("scroll", scrollbar);
  },[scrollbar]);

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      <div
        className={
          show ? "header show" : navbar ? "header active-nav" : "header"
        }
      >
        <NavLink to="/" className="navbar-logo">
          <img
            src={logo}
            alt="logo"
            width="150"
            height="30"
            className="nav-img"
          />
        </NavLink>

        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <NavLink to="/hosting" className="navbar-link" onClick={toggle}>
                Hosting
              </NavLink>
            </li>
            <li>
              <NavLink to="/vps" className="navbar-link" onClick={toggle}>
                Vps
              </NavLink>
            </li>
            <li>
              <NavLink to="/domain" className="navbar-link" onClick={toggle}>
                Domain
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navbar-link" onClick={toggle}>
                Contact
              </NavLink>
            </li>

            <div className="cart">
            <p className="cart-icon">
              <AiOutlineShoppingCart />
            </p>
            <p className="mt-2">Cart</p>
          </div> 

            {isAuthenticated ? (
            <button
              className="btn-login"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <span className="icon-lock">
                <FiLogOut />
              </span>
              Log Out
            </button>
          ) : (
            <button className="btn-login" onClick={() => loginWithRedirect()}>
              <span className="icon-lock">
                <AiOutlineLock />
              </span>{" "}
              Log In
            </button>
          )}
          </ul>
          
        </nav>
        <span className="icon-bar" onClick={toggle}>
          {show ? <AiOutlineClose /> : <FaBars />}
        </span>
      </div>
    </>
  );
};

export default Navbar;
