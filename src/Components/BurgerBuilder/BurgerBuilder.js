import React from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";

const INGREDIENT_PRICES = {
  salad: 1.5,
  cheese: 2,
  meat: 4,
};

export default class BurgerBuilder extends React.Component {
  state = {
    ingredients: [
      { type: "salad", amount: 0 },
      { type: "cheese", amount: 0 },
      { type: "meat", amount: 0 },
    ],
    totalPrice: 0.5,
  };

  addIngredientHandler = (type) => {
    const updatedIngredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    const index = updatedIngredients.findIndex(
      (ingredient) => ingredient.type === type
    );
    updatedIngredients[index].amount += 1;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };

  removeIngredientHandler = (type) => {
    const updatedIngredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    const index = updatedIngredients.findIndex(
      (ingredient) => ingredient.type === type
    );
    if (updatedIngredients[index].amount <= 0) {
      return;
    }
    updatedIngredients[index].amount -= 1;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };

  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <Burger ingredients={this.state.ingredients} />
        <Controls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          price={this.state.totalPrice}
        />
      </div>
    );
  }
}
