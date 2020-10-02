import React, { ReactNode } from "react";
import "./CarouselItem.scss";

type CarouselItemProps = { children: ReactNode };

export const CarouselItem = ({ children }: CarouselItemProps) => {
  return <figure className="CarouselItem">{children}</figure>;
};
