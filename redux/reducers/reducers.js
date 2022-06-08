import { GET_PRODUCT } from "../actions/type";

const initState = {
  products: [],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
