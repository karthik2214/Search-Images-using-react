import React from 'react';
import { NavLink } from 'react-router-dom';
import "../index.css";

const Navbar = () => {
  return (
    <>
    <NavLink exact activeClassName="active" to="/"> Home </NavLink>
    <NavLink exact activeClassName="active" to="/search"> Search </NavLink>
    <NavLink exact activeClassName="active" to="/contact"> Contact Us </NavLink>
    </>
  )
}

export default Navbar;