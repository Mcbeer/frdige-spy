import { combineReducers } from "redux";
import { account } from "./AccountReducers";
import { location } from "./LocationReducers";
import { productList } from "./ProductListReducers";
import { user } from "./UserReducers";

export const rootReducer = combineReducers({
  user,
  account,
  productList,
  location,
});
