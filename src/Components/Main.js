import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import { Switch, Route } from "react-router-dom";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import Auth from "./Auth/Auth";

const Main = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Auth} />
          <Route exact path="/" component={BurgerBuilder} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
