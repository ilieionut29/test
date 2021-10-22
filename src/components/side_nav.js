import React from "react";
import MenuButton from "../components/menu_button.js";
import { Button, Col, Row, Container } from "reactstrap";
import Sticky from "react-sticky-el";
import Logo from "../components/logo.js";

const SideNav = () => {
  return (
    <div className="sideNav container-fluid">
      <Sticky mode="bottom" stickyClassName={"sticky-menu"}>
        <MenuButton />
      </Sticky>
    </div>
  );
};

export default SideNav;
