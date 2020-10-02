import React from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { animated, useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";
import "./ProductListItem.scss";
import { ProductListItemActions } from "./ProductListItemActions/ProductListItemActions";

type ProductListItemProps = {
  id: number;
  name: string;
  amount: number;
};

export const ProductListItem = ({ id, name, amount }: ProductListItemProps) => {
  const [{ x }, set] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useGesture({
    onDrag: ({ down, movement: [mx] }) => {
      if (mx < 150 && mx > -150) {
        set({ x: down ? mx : 0 });
      }
    },
    onDragEnd: ({ movement: [mx] }) => {
      if (mx > 50) {
        console.log("Take item");
      } else if (mx < -50) {
        console.log("Edit something");
      }

      set({ x: 0 });
    },
  });

  return (
    <div className="ProductListItemWrapper">
      <ProductListItemActions />
      <animated.div className="ProductListItem" {...bind()} style={{ x }}>
        <div className="ProductListItem__slide-indicator">
          <RiArrowDropLeftLine size="1.5rem" />
        </div>
        <div className="ProductListItem__name">{name}</div>
        <div className="ProductListItem__amount">{amount}</div>
        <div className="ProductListItem__slide-indicator">
          <RiArrowDropRightLine size="1.5rem" />
        </div>
      </animated.div>
    </div>
  );
};
