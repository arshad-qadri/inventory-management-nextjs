import axios from "axios";
import { baseUrl } from "../../variable";
import { FIND_PRODUCT, GET_PRODUCT, HISTORY, isLoading } from "./type";

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

export const createProduct = (data) => {
  return (dispatch) => {
    dispatch({ type: isLoading, payload: true });
    axios
      .post(`${baseUrl}products`, data)
      .then((res) => {
        if (res) {
          console.log("crated product", res.data?.data);
          dispatch({ type: isLoading, payload: false });
          alert(res?.data?.message);
          dispatch(getProduct());
          if (res.data?.data) {
            dispatch(createHistory(res.data?.data))
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const findProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}products/${id}`, {})
      .then((res) => {
        if (res) {
          dispatch({ type: FIND_PRODUCT, payload: res.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addProduct = (id, data) => {
  return (dispatch) => {
    dispatch({ type: isLoading, payload: true });
    axios
      .put(`${baseUrl}products/${id}`, data)
      .then((res) => {
        if (res) {
          dispatch({ type: isLoading, payload: false });
          dispatch(getProduct());
        }
      })
      .catch((err) => {
        dispatch({ type: isLoading, payload: true });
        console.log(err);
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
          dispatch(getProduct());
        }
      })
      .catch((err) => {
        dispatch({ type: isLoading, payload: true });
        console.log(err);
      });
  };
};

export const createHistory = (data) => {
  return (dispatch) => {
    const { bag_id, bag_name, bag_price, qty } = data;
    const obj = {
      bag_id,
      bag_name,
      bag_price,
      qty,
      date: new Date(),
      history_type: "IN",
    };
    axios
      .post(`${baseUrl}history`, obj)
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
export const getHistory = () => {
  return (dispatch) => {
    
    axios
      .get(`${baseUrl}history`, {})
      .then((res) => {
        if (res) {
          dispatch({ type: isLoading, payload: false });
          dispatch({ type: HISTORY, payload: res.data });
          console.log("history",res.data );
        }
      })
      .catch((err) => {
        dispatch({ type: isLoading, payload: true });
        console.log(err);
      });
  };
};
