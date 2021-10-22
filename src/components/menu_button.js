import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, Container } from "reactstrap";
import Close from "../assets/images/side_nav/close38x38.png";
import MenuDots from "../assets/images/side_nav/menu_dots38x38.png";
import SocialIcons from "../components/social_icons.js";

const Logo = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" className="sideNav-button" onClick={toggle}>
        <img src={MenuDots} alt=" " />
      </Button>

      <Modal className="float-left" isOpen={modal} toggle={toggle}>
        <ModalBody>
          <ul className="justify-content-center">
            <li className="nav-item ">
              <Button className="x-button" color="link" onClick={toggle}>
                <img src={Close} alt=" " />
              </Button>
            </li>
            {["Home","About","Works","Services","Contact"].map(name => (
              <li className="nav-item">
                <Link to={`/${name}`}>
                  <Container
                    round="18px"
                    pad={{ horizontal: "medium", vertical: "small" }}>
                    <h1>{name}</h1>
                  </Container>
                </Link>
              </li>
            ))}
          </ul>
        </ModalBody>
        <SocialIcons />
      </Modal>
    </div>
  );
};
export default Logo;
