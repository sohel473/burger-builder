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
  orders: [],
  orderLoading: true,
  orderErr: false,
  token: null,
  userId: null,
  authLoading: false,
  authFailedMsg: null,
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

    case actionTypes.RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          { type: "salad", amount: 0 },
          { type: "cheese", amount: 0 },
          { type: "meat", amount: 0 },
        ],
        totalPrice: 0,
        purchasable: false,
      };

    case actionTypes.LOAD_ORDERS:
      const orders = action.payload;
      let orderArray = [];
      for (const order in orders) {
        orderArray.push({
          ...orders[order],
          id: order,
        });
      }
      // console.log(orderArray);
      // return state;
      return {
        ...state,
        orders: orderArray,
        orderLoading: false,
      };

    case actionTypes.ORDER_LOAD_FAILED:
      return {
        ...state,
        orderErr: true,
        orderLoading: false,
      };

    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };

    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        authFailedMsg: null,
      };

    case actionTypes.AUTH_LOADING:
      return {
        ...state,
        authLoading: action.payload,
      };

    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        authFailedMsg: action.payload,
      };

    default:
      return state;
  }
};
