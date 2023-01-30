import React from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actionCreators";
import Spinner from "../Spinner/Spinner";

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    orderLoading: state.orderLoading,
    orderErr: state.orderErr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

class Orders extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  componentDidUpdate() {
    console.log(this.props.orders);
  }

  render() {
    return (
      <div>
        <p>Orders</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
