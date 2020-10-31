import React from "react";
import { LatestEvents } from "../../components/LatestEvents/LatestEvents";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="Home">
      <LatestEvents />
    </div>
  );
};
