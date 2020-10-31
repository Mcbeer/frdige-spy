import React, { MouseEvent, ReactNode } from "react";
import "./Button.scss";

export enum ButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ICON = "icon",
}

export type ButtonProps = {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  type: ButtonTypes;
};

export const Button = ({
  children,
  onClick,
  type = ButtonTypes.PRIMARY,
}: ButtonProps) => {
  const buttonStyles = ["btn"];

  if (type) {
    buttonStyles.push(`btn-${type}`);
  }

  return (
    <button onClick={onClick} className={buttonStyles.join(" ")}>
      {children}
    </button>
  );
};
