const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const updatedIngredient = [...state.ingredients];
      updatedIngredient.forEach((item) => {
        if (item.type === action.ingredientType) {
          item.amount++;
        }
      });
      return {
        ...state,
        ingredients: updatedIngredient,
        totalPrice:
          state.totalPrice + INGREDIENT_PRICES[action.ingredientType],
      };
    case actionTypes.REMOVE_INGREDIENT:
      const updatedIngredient2 = [...state.ingredients];
      updatedIngredient2.forEach((item) => {
        if (item.type === action.ingredientType) {
          if (item.amount > 0) {
            item.amount--;
          }
        }
      });
      return {
        ...state,
        ingredients: updatedIngredient2,
        totalPrice:
          state.totalPrice - INGREDIENT_PRICES[action.ingredientType],
      };
    default:
      return state;
  }
};
