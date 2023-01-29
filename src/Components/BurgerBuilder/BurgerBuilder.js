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
import { connect } from "react-redux";
import {
  addIngredient,
  removeIngredient,
  updatePurchasable,
} from "../../redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingredientType) =>
      dispatch(addIngredient(ingredientType)),
    removeIngredient: (ingredientType) =>
      dispatch(removeIngredient(ingredientType)),
    updatePurchasable: () => dispatch(updatePurchasable()),
  };
};

class BurgerBuilder extends React.Component {
  state = {
    modalOpen: false,
  };

  addIngredientHandler = (type) => {
    this.props.addIngredient(type);
    this.props.updatePurchasable();
  };

  removeIngredientHandler = (type) => {
    this.props.removeIngredient(type);
    this.props.updatePurchasable();
  };

  handleCheckout = () => {
    console.log(this.props);
    this.props.history.push("/checkout");
  };

  render() {
    return (
      <div>
        <div className="d-flex flex-md-row flex-column">
          <Burger ingredients={this.props.ingredients} />
          <Controls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            price={this.props.totalPrice}
            purchasable={this.props.purchasable}
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
            <h5>Total Price: £{this.props.totalPrice}</h5>
            <Summary ingredients={this.props.ingredients} />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleCheckout}>
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

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
