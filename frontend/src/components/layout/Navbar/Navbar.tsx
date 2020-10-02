import React from "react";
import { RiFridgeFill, RiHome3Fill, RiSettings5Fill } from "react-icons/ri";
import "./Navbar.scss";
import { NavBarItem } from "./NavBarItem/NavBarItem";

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="Navbar__list">
        <NavBarItem title="Home" path="/">
          <RiHome3Fill size={36} color="#1e1e24ff" />
        </NavBarItem>
        <NavBarItem title="Fridge" path="/fridge">
          <RiFridgeFill size={36} color="#1e1e24ff" />
        </NavBarItem>
        <NavBarItem title="Settings" path="/settings">
          <RiSettings5Fill size={36} color="#1e1e24ff" />
        </NavBarItem>
      </ul>
    </nav>
  );
};
