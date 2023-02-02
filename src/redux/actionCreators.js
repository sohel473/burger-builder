import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addIngredient = (ingredientType) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: ingredientType,
  };
};

export const removeIngredient = (ingredientType) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: ingredientType,
  };
};

export const updatePurchasable = () => {
  return {
    type: actionTypes.UPDATE_PURCHASABLE,
  };
};

export const resetIngredients = () => {
  return {
    type: actionTypes.RESET_INGREDIENTS,
  };
};

export const loadOrders = (orders) => {
  return {
    type: actionTypes.LOAD_ORDERS,
    payload: orders,
  };
};

export const orderLoadFailed = () => {
  return {
    type: actionTypes.ORDER_LOAD_FAILED,
  };
};

export const fetchOrders = (token, userId) => (dispatch) => {
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .get(`http://127.0.0.1:8000/api/order?user_id=${userId}`, header)
    .then((response) => {
      console.log(response.data);
      dispatch(loadOrders(response.data));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(orderLoadFailed());
    });
};
