import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { ProductList } from "../ProductList/ProductList";
import "./Location.scss";

type LocationProps = {
  locationId: number;
  locationName: string;
  index: number;
};

export const Location = ({
  locationId,
  locationName,
  index,
}: LocationProps) => {
  const [expanded, setExpanded] = useState(index === 0);
  return (
    <div className="Location">
      <div className="Location__title">
        <h2 className="Location__title-text">{locationName}</h2>
        <button
          className="Location__title-chevron"
          onClick={() => setExpanded(!expanded)}
        >
          <RiArrowDownSLine size="1.5rem" />
        </button>
      </div>
      <ProductList locationId={locationId} expanded={expanded} />
    </div>
  );
};
