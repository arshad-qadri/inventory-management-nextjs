import {
  FIND_PRODUCT,
  GET_PRODUCT,
  HISTORY,
  isLoading,
  SEARCHED,
} from "../actions/type";

const initState = {
  products: [],
  searched_data :null,
  oneProduct: {},
  loading: false,
  history: [],
};
const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload.reverse(),
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
    case SEARCHED:
      const filtered = state.products.filter(
        (item) =>
          item.bag_id.toLowerCase().includes(action.payload) ||
          item.bag_name.toLowerCase().includes(action.payload) ||
          item.bag_price.toLowerCase().includes(action.payload)
      );
      console.log("filtered===",filtered);

      return {
        ...state,
        searched_data: filtered,
      };

    default:
      return state;
  }
};

export default productReducer;
