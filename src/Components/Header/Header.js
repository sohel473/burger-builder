import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Navigation">
      <Navbar className="Navbar">
        <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
          <img src={Logo} alt="Logo" width="80px" />
        </NavbarBrand>
        <Nav className="mr-md-5">
          <NavItem>
            <NavLink href="#" className="NavLink">
              Something
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
