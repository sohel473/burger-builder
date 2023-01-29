import React from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";

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
      <div className="d-flex flex-md-row flex-column">
        <Burger ingredients={this.state.ingredients} />
        <Controls />
      </div>
    );
  }
}
