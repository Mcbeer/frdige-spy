export interface IEvent {
  id: number;
  type: EventType;
  name: string;
  image_url: string;
  event_date: string;
  account_name: string;
  location_name: string;
  amount: number;
}

export enum EventType {
  PRODUCT_REMOVED = "PRODUCT_REMOVED",
  PRODUCT_ADDED = "PRODUCT_ADDED",
  LOCATION_REMOVED = "LOCATION_REMOVED",
  LOCATION_ADDED = "LOCATION_ADDED",
}
