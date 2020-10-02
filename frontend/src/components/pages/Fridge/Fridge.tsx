import React from "react";
import { Location } from "../../shared/Location/Location";
import "./Fridge.scss";

export const Fridge = () => {
  return (
    <div className="Fridge">
      <div className="Fridge__location">
        {locations.map((location, index) => (
          <Location
            locationId={location.id}
            locationName={location.name}
            index={index}
            key={location.id}
          />
        ))}
      </div>
    </div>
  );
};

const locations = [
  {
    id: 1,
    name: "Køleskab",
  },
  {
    id: 2,
    name: "Fryser",
  },
];
