import React from "react";
import "./ProductListItemActions.scss";

export const ProductListItemActions = () => {
  return (
    <div className="ProductListItemActions">
      <div className="ProductListItemActions__take">
        <div className="ProductListItemActions__take-text">Tag én</div>
      </div>
      <div className="ProductListItemActions__edit">
        <div className="ProductListItemActions__edit-text">Redigér</div>
      </div>
    </div>
  );
};
