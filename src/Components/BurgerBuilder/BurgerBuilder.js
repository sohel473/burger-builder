import React from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import Summary from "./Summary/Summary";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "reactstrap";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 3,
};

export default class BurgerBuilder extends React.Component {
  state = {
    ingredients: [
      { type: "salad", amount: 0 },
      { type: "cheese", amount: 0 },
      { type: "meat", amount: 0 },
    ],
    totalPrice: 0.5,
    modalOpen: false,
    purchasable: false,
  };

  updatePurchasable = (ingredients) => {
    const sum = ingredients.reduce((sum, element) => {
      return sum + element.amount;
    }, 0.5);
    this.setState({ purchasable: sum > 0.5 });
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
    this.updatePurchasable(updatedIngredients);
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
    this.updatePurchasable(updatedIngredients);
  };

  render() {
    return (
      <div>
        <div className="d-flex flex-md-row flex-column">
          <Burger ingredients={this.state.ingredients} />
          <Controls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            toggleModal={() => {
              this.setState({
                modalOpen: !this.state.modalOpen,
              });
            }}
          />
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your Order Summary</ModalHeader>
          <ModalBody>
            <h5>Total Price: £{this.state.totalPrice}</h5>
            <Summary ingredients={this.state.ingredients} />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggleModal}>
              Continue to Checkout
            </Button>
            <Button
              color="secondary"
              onClick={() => {
                this.setState({
                  modalOpen: !this.state.modalOpen,
                });
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
