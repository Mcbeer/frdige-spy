import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setExpandedLocation } from "../../../store/Actions/ProductListActions";
import { StoreModel } from "../../../store/StoreModel";
import { ProductList } from "../ProductList/ProductList";
import "./Location.scss";

type LocationProps = {
  locationId: number;
  locationName: string;
  expanded: boolean;
};

export const Location = ({
  locationId,
  locationName,
  expanded,
}: LocationProps) => {
  const dispatch = useDispatch();
  const expandedLocation = useSelector(
    (state: StoreModel) => state.productList.expandedLocation
  );

  const iconStyles = ["Location__title-chevron"];

  if (expandedLocation === locationId) {
    iconStyles.push("Location__title-chevron--expanded");
  }

  return (
    <div className="Location">
      <div className="Location__title">
        <h2 className="Location__title-text">{locationName}</h2>
        <button
          className={iconStyles.join(" ")}
          onClick={() =>
            dispatch(
              setExpandedLocation(
                locationId === expandedLocation ? -1 : locationId
              )
            )
          }
        >
          <RiArrowDownSLine size="1.5rem" />
        </button>
      </div>
      <ProductList locationId={locationId} expanded={expanded} />
    </div>
  );
};
