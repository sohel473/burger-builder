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
  const queryParams = '&orderBy="userId"&equalTo="' + userId + '"';
  axios
    .get(
      "https://burger-builder-23d20-default-rtdb.firebaseio.com//orders.json?auth=" +
        token +
        queryParams
    )
    .then((response) => {
      dispatch(loadOrders(response.data));
      // console.log(response.data);
    })
    .catch((err) => {
      dispatch(orderLoadFailed());
    });
};
