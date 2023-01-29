import React from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";

export default class BurgerBuilder extends React.Component {
  state = {
    ingredients: [
      { type: "salad", amount: 0 },
      { type: "cheese", amount: 0 },
      { type: "meat", amount: 0 },
    ],
  };

  addIngredientHandler = (type) => {
    const updatedIngredients = [...this.state.ingredients];
    const index = updatedIngredients.findIndex(
      (ingredient) => ingredient.type === type
    );
    updatedIngredients[index].amount += 1;
    this.setState({ ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {
    const updatedIngredients = [...this.state.ingredients];
    const index = updatedIngredients.findIndex(
      (ingredient) => ingredient.type === type
    );
    if (updatedIngredients[index].amount <= 0) {
      return;
    }
    updatedIngredients[index].amount -= 1;
    this.setState({ ingredients: updatedIngredients });
  };

  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <Burger ingredients={this.state.ingredients} />
        <Controls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
        />
      </div>
    );
  }
}
