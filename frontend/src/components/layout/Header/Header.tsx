import React from "react";
import { FaHamburger } from "react-icons/fa";
import "./Header.scss";

export const Header = () => {
  return (
    <section className="Header__section">
      <header className="Header">
        <h1 className="Header__title">Fridge Spy</h1>
        <FaHamburger size="2rem" />
      </header>
    </section>
  );
};
