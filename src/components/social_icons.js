import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Behance from "../assets/images/social_icons/behance88x88.png";
import Instagram from "../assets/images/social_icons/insta88x88.png";
import Github from "../assets/images/social_icons/github88x88.png";
import Linkedin from "../assets/images/social_icons/linkedIn88x88.png";
import Shop from "../assets/images/social_icons/shop104x104.png";
import Blog from "../assets/images/social_icons/blog104x104.png";


function SocialIcons() {
  return (
    <Container className="social_icons">
      <Row>
        <Col>
          <Link to="/blog">
            <img src={Blog} alt=" " />
          </Link>
        </Col>
        <Col>
          <Link to="/shop">
            <img src={Shop} alt=" " />
          </Link>
        </Col>
      </Row>
      <Row>
      <Link to="/contact">
          <img src={Behance} alt=" " />
        </Link>
        <Link to="/https://www.instagram.com/yanna_studios/">
          <img src={Instagram} alt=" " />
        </Link>
        <Link to="https://github.com/Y-Seac">
          <img src={Github} alt=" " />
        </Link>
        <Link to="https://www.linkedin.com/in/seacyanique">
          <img src={Linkedin} alt=" " />
        </Link>
      </Row>
    </Container>
  );
}
export default SocialIcons;
