import React from "react";
import { FaSpinner } from "react-icons/fa";

import "./FullPageLoading.scss";

export const FullPageLoading = () => {
  return (
    <div className="FullPageLoading">
      <div className="FullPageLoading__spinner">
        <FaSpinner size="6rem" />
      </div>
    </div>
  );
};
