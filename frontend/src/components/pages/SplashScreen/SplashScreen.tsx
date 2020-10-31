import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./SplashScreen.scss";

export const SplashScreen = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 5500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="SplashScreen">
      <h1 className="SplashScreen__title">Fridge Spy</h1>
      <div className="SplashScreen__loading">
        {/* <div
          className="SplashScreen__loading-bar"
          style={{ width: `${width}%` }}
        ></div> */}
      </div>
    </div>
  );
};
