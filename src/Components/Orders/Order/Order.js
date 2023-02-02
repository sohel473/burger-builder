import React from "react";
import "./Order.css";

const Order = (props) => {
  let ingredients = props.order.ingredients;
  const ingredientSummary = Object.keys(ingredients).map(
    (ingredient, index) => {
      return (
        <span className="Ingredients" key={index}>
          {ingredients[ingredient]}x{" "}
          <span style={{ textTransform: "capitalize" }}>{ingredient}</span>
        </span>
      );
    }
  );
  return (
    <div className="Order">
      <p>Order Number: {props.order.id}</p>
      <p>Delivery Address: {props.order.customer.deliveryAddress}</p>
      <hr />
      {ingredientSummary}
      <hr />
      <p>Total: £{props.order.price}</p>
    </div>
  );
};

export default Order;
