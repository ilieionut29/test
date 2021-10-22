import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Sticky from "react-sticky-el";
import duck from "../assets/images/logo/logo_full_58x38.png";

function Logo() {
  return (
    <div className="sticky-menu">
      <Link to="/">
        <Button className="float-right" color="link">
          <img src={duck} alt=" " />
          <div className="logo-text sub-menu">
            <h4 className="brand-blue">sv_</h4>
            <h4 className="brand-yellow">ya</h4>
            <h4 className="brand-pink">na</h4>
            <h4 className="brand-gray">quack</h4>
          </div>
        </Button>
      </Link>
    </div>
  );
}
export default Logo;
