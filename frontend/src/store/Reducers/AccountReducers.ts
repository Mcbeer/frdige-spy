import { ActionModel } from "../StoreModel";

const initialState = {};

export const account = (
  state = initialState,
  { type, payload }: ActionModel
) => {
  switch (type) {
    default:
      return state;
  }
};
