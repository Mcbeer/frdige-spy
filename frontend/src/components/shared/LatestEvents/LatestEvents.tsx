import React from "react";
import { EventType, IEvent } from "../../../models/IEvent";
import { EventCard } from "../EventCard/EventCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import "./LatestEvents.scss";

export const LatestEvents = () => {
  return (
    <div className="LatestEvents">
      <SectionTitle title="Seneste events" />
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  );
};

const events: IEvent[] = [
  {
    id: 1,
    type: EventType.PRODUCT_ADDED,
    name: "Coca Cola tilføjet til",
    image_url:
      "https://yt3.ggpht.com/a/AATXAJx0BKNEtSEs5wkCXup8WlHImHjHfhHrn3dqTZJp=s900-c-k-c0xffffffff-no-rj-mo",
    event_date: new Date().toLocaleDateString(),
    account_name: "Bordingsvej",
    location_name: "Køleskab",
    amount: 6,
  },
  {
    id: 2,
    type: EventType.PRODUCT_REMOVED,
    name: "Coca Cola fjernet fra",
    image_url:
      "https://yt3.ggpht.com/a/AATXAJx0BKNEtSEs5wkCXup8WlHImHjHfhHrn3dqTZJp=s900-c-k-c0xffffffff-no-rj-mo",
    event_date: new Date().toLocaleDateString(),
    account_name: "Bordingsvej",
    location_name: "Køleskab",
    amount: 1,
  },
];
