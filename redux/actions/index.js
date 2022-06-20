import axios from "axios";
import { baseUrl } from "../../variable";
import { GET_PRODUCT, isLoading } from "./type";

export const getProduct = () => {
  return (dispatch) => {
    dispatch({ type: isLoading, payload: true });
    axios
      .get(`${baseUrl}products`, {})
      .then((res) => {
        dispatch({ type: GET_PRODUCT, payload: res.data });
        dispatch({ type: isLoading, payload: false });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: isLoading, payload: true });
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({ type: isLoading, payload: true });
    axios
      .delete(`${baseUrl}products/${id}`, {})
      .then((res) => {
        if (res) {
          dispatch({ type: isLoading, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: isLoading, payload: true });
        console.log(err);
      });
  };
};
