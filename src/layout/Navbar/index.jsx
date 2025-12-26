import React from "react";
import { useLocation } from "react-router-dom";
import { NavbarContainer, NavbarTitle } from "./Navbar.styled";

function Navbar() {
  const location = useLocation();

  const getTitle = (path) => {
    switch (path) {
      case "/create-product":
        return "Create product";
      case "/manage-product":
        return "Manage product";
      case "/create-category":
        return "Create category";
      case "/manage-category":
        return "Manage category";
      default:
        return "Admin Dashboard";
    }
  };

  return (
    <NavbarContainer>
      <NavbarTitle>{getTitle(location.pathname)}</NavbarTitle>
    </NavbarContainer>
  );
}

export default Navbar;
