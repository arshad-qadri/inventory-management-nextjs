import { GET_PRODUCT, isLoading } from "../actions/type";

const initState = {
  products: [],
  loading:false
};
const productReducer = (state = initState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

      case isLoading:
        return{
          ...state,
          loading:action.payload
        }
    default:
      return state;
  }
};

export default productReducer;
