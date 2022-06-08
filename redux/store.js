import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootRedcer from "./reducers";

const store = createStore(rootRedcer, composeWithDevTools(applyMiddleware(thunk)))


export default store