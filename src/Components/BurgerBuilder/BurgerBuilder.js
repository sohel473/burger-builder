import React from "react";
import Burger from "./Burger/Burger";

export default class BurgerBuilder extends React.Component {
  state = {
    ingredients: [
      { type: "salad", amount: 2 },
      { type: "cheese", amount: 1 },
      { type: "meat", amount: 2 },
    ],
  };
  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
      </div>
    );
  }
}
