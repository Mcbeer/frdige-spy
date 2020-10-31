import React from "react";
import "./SectionTitle.scss";

type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="SectionTitle">{title}</h2>;
};
