import React, { ReactNode } from "react";
import "./IconButton.scss";

type IconButtonProps = {
  children: ReactNode;
  size: number;
};

export const IconButton = ({ children, size }: IconButtonProps) => {
  return (
    <button
      className="IconButton"
      style={{ width: size ? size : "auto", height: size ? size : "auto" }}
    >
      {children}
    </button>
  );
};
