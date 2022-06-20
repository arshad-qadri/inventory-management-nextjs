import { combineReducers } from "redux";
import productReducer from "./productReducers";

const rootRedcer = combineReducers({
  productReducer,
});

export default rootRedcer