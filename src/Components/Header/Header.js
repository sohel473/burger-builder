import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const Header = (props) => {
  let links = null;
  if (props.token) {
    links = (
      <Nav className="mr-md-5">
        <NavItem>
          <NavLink exact to="/" className="NavLink">
            Burger Builder
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact to="/orders" className="NavLink">
            Orders
          </NavLink>
        </NavItem>
      </Nav>
    );
  } else {
    links = (
      <NavItem>
        <NavLink exact className="NavLink" to="/login">
          Login
        </NavLink>
      </NavItem>
    );
  }

  return (
    <div className="Navigation">
      <Navbar className="Navbar">
        <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
          <img src={Logo} alt="Logo" width="80px" />
        </NavbarBrand>
        {links}
      </Navbar>
    </div>
  );
};

export default connect(mapStateToProps)(Header);
