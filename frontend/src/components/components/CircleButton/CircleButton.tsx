import React, { MouseEvent, ReactNode } from "react";
import { ButtonTypes } from "../Button/Button";

import "./CircleButton.scss";

export type CircleButtonProps = {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  size: number;
  type: ButtonTypes;
};

export const CircleButton = ({
  children,
  onClick,
  size = 28,
  type = ButtonTypes.PRIMARY,
}: CircleButtonProps) => {
  const circularButtonStyle = ["CircleButton"];
  if (type) {
    circularButtonStyle.push(`CircleButton__${type}`);
  }
  return (
    <button
      className={circularButtonStyle.join(" ")}
      onClick={onClick}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {children}
    </button>
  );
};
