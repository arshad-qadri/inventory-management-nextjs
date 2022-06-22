import { FIND_PRODUCT, GET_PRODUCT, HISTORY, isLoading } from "../actions/type";

const initState = {
  products: [],
  oneProduct: {},
  loading: false,
  history:[]
};
const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case isLoading:
      return {
        ...state,
        loading: action.payload,
      };

    case FIND_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload,
      };
    case HISTORY:
      return {
        ...state,
        history: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
