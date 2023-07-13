import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Welcome to my empty react portfolio...
          </NavLink>
          
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
