import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
} from "reactstrap";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControl = (props) => {
  return (
    <div className="d-flex">
      <div
        className="mr-auto ml-5"
        style={{ fontWeight: "bold", fontSize: "1.2rem" }}
      >
        {props.label}
      </div>
      <Button
        onClick={props.removeIngredient}
        className="btn btn-danger btn-sm m-1"
      >
        Less
      </Button>
      <Button
        onClick={props.addIngredient}
        className="btn btn-success btn-sm m-1"
      >
        More
      </Button>
    </div>
  );
};

const Controls = (props) => {
  return (
    <div className="container ml-md-5" style={{ textAlign: "center" }}>
      <Card
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <CardHeader
          style={{
            backgroundColor: "#D70F64",
            color: "white",
          }}
        >
          <h4>Add Ingredients</h4>
        </CardHeader>
        <CardBody>
          {controls.map((item) => {
            return (
              <BuildControl
                label={item.label}
                addIngredient={() => props.addIngredient(item.type)}
                removeIngredient={() => props.removeIngredient(item.type)}
                type={item.type}
                key={Math.random()}
              />
            );
          })}
        </CardBody>
        <CardFooter>
          <h5>
            Price: <strong>£{props.price}</strong>
          </h5>
        </CardFooter>
        <Button
          style={{ backgroundColor: "#D70F64" }}
          disabled={!props.purchasable}
          onClick={props.toggleModal}
        >
          Order Now
        </Button>
      </Card>
    </div>
  );
};

export default Controls;
