import React from "react";
import { Link } from "react-router-dom";
import Sticky from "react-sticky-el";
import { Button } from "reactstrap";
import Works from "../assets/images/menu_bar/works_38x38.png";
import Cute from "../assets/images/menu_bar/cute_38x38.png";
import Pencil from "../assets/images/menu_bar/pencil_services_38x38.png";
import Gmail from "../assets/images/menu_bar/gmail_38x38.png";
import Home from "../assets/images/menu_bar/home38x38.png";
import Logo from "../components/logo.js";
/**
 */

function MenuBar() {
  return (
    <div className="container-fluid menu-bar sticky-menu">
      <Sticky mode="top" stickyClassName={"sticky-menu"}>
        <Logo/>
        <ol>
        <li className="menu-item">
            <Link to="/">
              <Button color="link">
                <img src={Home} alt=" " />
                <div className="sub-menu">
                  <p>Home</p>
                </div>
              </Button>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/about">
              <Button color="link">
                <img src={Cute} alt=" " />
                <div className="sub-menu">
                  <p>about</p>
                </div>
              </Button>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/services">
              <Button color="link">
                <img src={Pencil} alt=" " />
                <div className="sub-menu">
                  <p>services</p>
                </div>
              </Button>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/works">
              <Button color="link">
                <img src={Works} alt=" " />
                <div className="sub-menu">
                  <p>works</p>
                </div>
              </Button>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">
              <Button color="link">
                <img src={Gmail} alt=" " />
                <div className="sub-menu">
                  <p>contact</p>
                </div>
              </Button>
            </Link>
          </li>
        </ol>
      </Sticky>
    </div>
  );
}
export default MenuBar;
