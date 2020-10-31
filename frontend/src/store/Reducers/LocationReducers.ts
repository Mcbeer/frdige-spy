import {
  FETCH_LOCATIONS_BEGIN,
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
} from "../Actions/LocationActions";
import { ActionModel, StoreModel } from "../StoreModel";

const initialState: StoreModel["location"] = {
  locations: [],
  loading: false,
  error: null,
};

export const location = (
  state = initialState,
  { type, payload }: ActionModel
) => {
  switch (type) {
    case FETCH_LOCATIONS_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        locations: payload,
      };

    case FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
