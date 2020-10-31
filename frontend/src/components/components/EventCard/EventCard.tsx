import React from "react";
import { IEvent } from "../../../models/IEvent";
import "./EventCard.scss";

type EventCardProps = {
  event: IEvent;
};

export const EventCard = ({ event }: EventCardProps) => {
  const { image_url, amount, name, location_name, event_date } = event;
  return (
    <div className="EventCard">
      <div className="EventCard__image">
        <img src={image_url} alt="" className="EventCard__image-img" />
      </div>
      <div className="EventCard__content">{`${amount} ${name} ${location_name}`}</div>
      <div className="EventCard__time">{event_date}</div>
    </div>
  );
};
