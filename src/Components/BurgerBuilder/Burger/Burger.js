import React from "react";
import Ingredient from "../Ingredient/Ingredient";

const Burger = (props) => {
  return (
    <div>
      <Ingredient type="bread-top" />
      <Ingredient type="cheese" />
      <Ingredient type="salad" />
      <Ingredient type="meat" />
      <Ingredient type="bread-bottom" />
      {/* <p>Burger</p> */}
    </div>
  );
};

export default Burger;
