import { combineReducers } from "redux";
import reducer from "./reducers";

const rootRedcer = combineReducers({
  products: reducer,
});

export default rootRedcer