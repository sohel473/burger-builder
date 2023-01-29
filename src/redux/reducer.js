import * as actionTypes from "./actionTypes";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 3,
};

const INITIAL_STATE = {
  ingredients: [
    { type: "salad", amount: 0 },
    { type: "cheese", amount: 0 },
    { type: "meat", amount: 0 },
  ],
  totalPrice: 0,
  purchasable: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const updatedIngredients = [...state.ingredients];
  const index = updatedIngredients.findIndex(
    (ingredient) => ingredient.type === action.payload
  );
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      updatedIngredients[index].amount += 1;

      return {
        ...state,
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
      };

    case actionTypes.REMOVE_INGREDIENT:
      if (updatedIngredients[index].amount <= 0) {
        return state;
      }
      updatedIngredients[index].amount -= 1;
      return {
        ...state,
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload],
      };

    case actionTypes.UPDATE_PURCHASABLE:
      const sum = state.ingredients.reduce((sum, element) => {
        return sum + element.amount;
      }, 0);

      return {
        ...state,
        purchasable: sum > 0,
      };

    default:
      return state;
  }
};
