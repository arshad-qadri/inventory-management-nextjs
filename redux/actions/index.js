import axios from "axios";
import { baseUrl } from "../../variable";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FIND_PRODUCT,
  GET_PRODUCT,
  HISTORY,
  isLoading,
  SEARCHED,
} from "./type";

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

export const createProduct = (data, type) => {
  return (dispatch) => {
    dispatch({ type: isLoading, payload: true });
    axios
      .post(`${baseUrl}products`, data)
      .then((res) => {
        if (res) {
          dispatch({ type: isLoading, payload: false });
          dispatch(getProduct());
          dispatch(createHistory(res.data?.data, type));
          dispatch(tostifyMsg(res?.data?.message, "success"));
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

export const addProduct = (id, data, historyObj, type) => {
  alert(id)
  return (dispatch) => {
    dispatch({ type: isLoading, payload: true });
    axios
    .put(`${baseUrl}products/${id}`, data)
    .then((res) => {
      if (res) {
          dispatch({ type: isLoading, payload: false });
          dispatch(getProduct());
          dispatch(createHistory(historyObj, type));
        }
      })
      .catch((err) => {
        dispatch({ type: isLoading, payload: true });
        console.log(err);
      });
  };
};

export const saleProduct = (id, data, saleData,type) => {
  return (dispatch) => {
    dispatch(addProduct(id, data, saleData, type));
    dispatch(tostifyMsg("Product sale","success"))
  };
};
export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: isLoading, payload: true });
    await axios
      .delete(`${baseUrl}products/${id}`, {})
      .then((res) => {
        if (res) {
          dispatch({ type: isLoading, payload: false });
          dispatch(getProduct());
          dispatch(tostifyMsg(res.data.message, "success"));
        }
      })
      .catch((err) => {
        dispatch({ type: isLoading, payload: true });
        console.log(err);
      });
  };
};

export const createHistory = (data, type) => {
  console.log("data==>", data);
  return (dispatch) => {
    const { bag_id, bag_name, bag_price, qty } = data;
    const obj = {
      bag_id,
      bag_name,
      bag_price,
      qty,
      date: new Date(),
      history_type: type,
    };
    axios
      .post(`${baseUrl}history`, obj)
      .then((res) => {
        if (res) {
          dispatch({ type: isLoading, payload: false });
          dispatch(getHistory());
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
        }
      })
      .catch((err) => {
        dispatch({ type: isLoading, payload: true });
        console.log(err);
      });
  };
};

export const searchProduct = (text) => {
  return (dispatch) => {
    dispatch({ type: SEARCHED, payload: text });
  };
};

export const tostifyMsg = (msg, type) => {
  return (dispatch) => {
    if (type === "success") {
      toast.success(`${msg}`);
    } else {
      toast.error(`${msg}`);
    }
  };
};
