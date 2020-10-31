import React, { ReactNode } from "react";
import "./Layout.scss";
import { Navbar } from "./Navbar/Navbar";

type LayoutProps = { children: ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="Layout">
      <div className="Layout__body">
        {children}
        <div className="Layout__body-bottom-padding"></div>
      </div>
      <div className="Layout__nav">
        <Navbar />
      </div>
    </div>
  );
};
