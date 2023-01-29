import React from "react";
import Ingredient from "../Ingredient/Ingredient";
// import "./Burger.css";

const Burger = (props) => {
  let ingredients = props.ingredients
    .map((item) => {
      let amounts = [...Array(item.amount).keys()];
      return amounts.map((_) => {
        return <Ingredient type={item.type} key={Math.random()} />;
      });
    })
    .reduce((arr, element) => {
      return arr.concat(element);
    }, []);

  if (ingredients.length === 0) {
    ingredients = (
      <p
        style={{
          textAlign: "center",
          color: "red",
          fontWeight: "bold",
          fontSize: "1.5rem",
          margin: "0 auto",
          width: "100%",
        }}
      >
        Please start adding ingredients!
      </p>
    );
  }
  return (
    <div>
      <Ingredient type="bread-top" />
      {ingredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
