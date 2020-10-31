import React from "react";
import { animated } from "react-spring";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import "./ProductList.scss";

type ProductListProps = {
  locationId: number;
  expanded: boolean;
};

export const ProductList = ({ locationId, expanded }: ProductListProps) => {
  const productListStyles = ["ProductList"];

  if (expanded) {
    productListStyles.push("ProductList--expanded");
  }

  return (
    <animated.div className={productListStyles.join(" ")}>
      <div className="ProductList__header">
        <div className="ProductList__actions"></div>
        <div className="ProductList__name">
          Navn
        </div>
        <div className="ProductList__amount">Antal</div>
        <div className="ProductList__actions"></div>
      </div>
      {products &&
        products.map(({ id, name, amount }) => (
          <ProductListItem id={id} name={name} amount={amount} key={id} />
        ))}
    </animated.div>
  );
};

const products = [
  { id: 1, name: "Dåse cola", amount: 4 },
  { id: 2, name: "Chorizo", amount: 4 },
  { id: 3, name: "Mælk", amount: 4 },
  { id: 4, name: "Yankie bar", amount: 4 },
  { id: 5, name: "Dåse øl", amount: 4 },
  { id: 6, name: "Hamburggerryg", amount: 4 },
  { id: 7, name: "Kyllingsalat", amount: 4 },
];
