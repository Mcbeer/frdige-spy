import { combineReducers } from "redux";
import { user } from "./UserReducers";
import { account } from "./AccountReducers";

export const rootReducer = combineReducers({
  user,
  account,
});
