import React from "react";
import "./Order.css";

const Order = (props) => {
  const ingredientSummary = props.order.ingredients.map((item) => {
    return (
      <span className="Ingredients" key={item.type}>
        {item.amount}x{" "}
        <span style={{ textTransform: "capitalize" }}>{item.type}</span>
      </span>
    );
  });
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
