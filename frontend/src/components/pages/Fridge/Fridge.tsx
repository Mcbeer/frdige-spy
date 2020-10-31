import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../../../store/Actions/LocationActions";
import { setExpandedLocation } from "../../../store/Actions/ProductListActions";
import { StoreModel } from "../../../store/StoreModel";
import { Location } from "../../components/Location/Location";
import { LocationLoading } from "../../components/LocationLoading/LocationLoading";
import "./Fridge.scss";

export const Fridge = () => {
  const expandedLocation = useSelector(
    (state: StoreModel) => state.productList.expandedLocation
  );
  const { locations, loading, error } = useSelector(
    (state: StoreModel) => state.location
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (locations.length === 0 && error === null && !loading) {
      dispatch(fetchLocations());
    }
    if (expandedLocation === -1 && locations && locations.length > 0) {
      dispatch(setExpandedLocation(locations[0].id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Fridge">
      <div className="Fridge__location">
        {loading && <LocationLoading />}
        {!loading &&
          locations.map((location, index) => (
            <Location
              expanded={location.id === expandedLocation}
              locationId={location.id}
              locationName={location.name}
              key={location.id}
            />
          ))}
      </div>
    </div>
  );
};

// const locations = [
//   {
//     id: 1,
//     name: "Køleskab",
//   },
//   {
//     id: 2,
//     name: "Fryser",
//   },
// ];
