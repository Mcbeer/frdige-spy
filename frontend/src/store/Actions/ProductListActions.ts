export const SET_EXPANDED_LOCATION = "SET_EXPANDED_LOCATION";

export const setExpandedLocation = (locationId: number) => {
  console.log({ locationId });
  return {
    type: SET_EXPANDED_LOCATION,
    payload: locationId,
  };
};
