import { Dispatch } from "redux";
import { Location } from "../../models/Location";
import { perhaps } from "../../utils/perhaps";

export const FETCH_LOCATIONS_BEGIN = "FETCH_LOCATIONS_BEGIN";
export const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS";
export const FETCH_LOCATIONS_FAILURE = "FETCH_LOCATIONS_FAILURE";

const fetchLocationsBegin = () => {
  return {
    type: FETCH_LOCATIONS_BEGIN,
  };
};

const fetchLocationsSuccess = (data: Location[]) => {
  return {
    type: FETCH_LOCATIONS_SUCCESS,
    payload: data,
  };
};

const fetchLocationsFailure = (error: Error) => {
  return {
    type: FETCH_LOCATIONS_FAILURE,
    payload: error,
  };
};

export const fetchLocations = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(fetchLocationsBegin());

    const [locationsError, locations] = await perhaps(getLocations());

    if (locationsError) {
      dispatch(fetchLocationsFailure(locationsError));
      return;
    }

    if (locations) {
      dispatch(fetchLocationsSuccess(locations));
      return;
    }
  };
};

const getLocations = (): Promise<Location[]> => {
  return Promise.resolve().then(() => {
    return [
      {
        id: 1,
        name: "Køleskab",
      },
      {
        id: 2,
        name: "Fryser",
      },
    ];
  });
};
