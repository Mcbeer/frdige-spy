import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import "./NavBarItem.scss";

export type NavBarItemProps = {
  title: string;
  path: string;
  children: ReactNode;
};

export const NavBarItem = ({
  title,
  path = "/",
  children,
}: NavBarItemProps) => {
  return (
    <Link to={path} className="NavBarItem">
      {children}
    </Link>
  );
};
