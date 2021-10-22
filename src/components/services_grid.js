import React from "react";
import { Container, Card } from "reactstrap";
import { ReactComponent as ResponsiveIcon } from "../assets/images/programming.svg";
import { ReactComponent as DesignIcon } from "../assets/images/pantone.svg";
import { ReactComponent as BarIcon } from "../assets/images/laptop.svg";

function ServicesGrid() {
  return (
    <Container>
      <h1>Services</h1>
      <p className="section-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Container className="services-grid">
        <Card className="service">
          <ResponsiveIcon className="design_icon" />
            <h4>Full-Stack Web Development</h4>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="/#" className="cta">Read More <span className="ti-angle-right" /></a>
        </Card>
        <Card className="service">
          <DesignIcon className="blueprint_icon" />
            <h4>UI/UX & Grapic Design</h4>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="/#" className="cta">Read More <span className="ti-angle-right" /></a>
        </Card>
        <Card className="service">
              <BarIcon className="bar_icon" />
              <h4>Website & Content Management</h4>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="/#" className="cta">Read more <span className="ti-angle-right" /></a>
        </Card>
      </Container>
    </Container>
  );
}
export default ServicesGrid;