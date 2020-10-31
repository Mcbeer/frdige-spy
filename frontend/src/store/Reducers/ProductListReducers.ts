import { SET_EXPANDED_LOCATION } from "../Actions/ProductListActions";
import { ActionModel, StoreModel } from "../StoreModel";

const initialState: StoreModel["productList"] = {
  expandedLocation: -99,
};

export const productList = (
  state = initialState,
  { type, payload }: ActionModel
) => {
  switch (type) {
    case SET_EXPANDED_LOCATION:
      return {
        ...state,
        expandedLocation: payload,
      };

    default:
      return state;
  }
};
