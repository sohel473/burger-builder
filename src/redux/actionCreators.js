import * as actionTypes from "./actionTypes";

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
