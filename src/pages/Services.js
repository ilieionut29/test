import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ServicesGrid from "../components/services_grid";
import CardPreview from "../components/card_preview.js";

class Services extends Component {
  render() {
    return (
      <Container className="services-page">
        <Row>
          <Col>
            <h1>Services</h1>
            <p className="lead">
              Creating a personal brand isnt easy. From Seos to copywire there's
              alot to get done...
            </p>
          </Col>
        </Row>
        <Row className="card shadow rounded p-4 mb-5">
          <Col>
          <h3>WHY INVEST SO MUCH TIME & MONEY?</h3>
          <p className="section-lead">
            Creating a personal brand isnt easy. From Seos to copywire there's
            alot to get done. The short answer...because it’s awesome and I
            enjoy it. But really, to do things properly, it’s important to
            invest the time to plan it out. The success of a project hinges on
            all the pieces moving together in unity, whether it’s the
            functioning of the site, designs used in the app, or the number of
            people engaging on any social media outlet.
          </p>
</Col>
        </Row>
        <Row className="card shadow rounded p-4 mb-5">
          <Col pad="small" round="6px">
            <h2>Full-Stack Web Development</h2>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life.
              <br />
              <br />
            </p>
          </Col>
          <Col>
            <h3>Languages I speak:</h3>
            <p>React.js, JavaScript, HTML/CSS, Node.js, Java</p>
            <ul className="skills_list">
              <h3>Dev Tools:</h3>
              <li>Git</li>
              <li>Bootstrap</li>
              <li>MongoDB</li>
              <li>Canvas</li>
            </ul>
          </Col>
          <Col pad="small" round="6px" background="rgb(255,255,255)">
            <h2>
              Grapic Design
              <br />
              <br />
            </h2>
            <p>
              I love creative bold content structure, clean design patterns, and
              thoughtful user interactions.
            </p>
            <h3>Things I enjoy designing:</h3>
            <p>UX & UI, Banner & Logos, Posters, Animations , Illistration</p>
            <ul className="skills_list">
              <h3>Design Tools:</h3>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>SVG Animation</li>
              <li>Adobe InDesign</li>
            </ul>
          </Col>
          <Col pad="small" round="6px" background="rgb(255,255,255)">
            <h2>Website & Content Management</h2>
            <p>
              Have and existing website thats just doesn't meet your needs? I
              can help with that.
            </p>
            <h3>Content Management Systems:</h3>
            <p>Wordpress, Wix, Squarespace, email Marketing </p>
            <ul className="skills_list">
              <h3>Services:</h3>
              <li>JavaScript/CSS/HTML Fixes</li>
              <li>SEO Markingting</li>
              <li>Theme Development</li>
              <li>Plugin Development</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardPreview />
            <hr className="my-2" />
          </Col>
        </Row>
        <Row>
          <h1> PRICEING </h1>
        </Row>
      </Container>
    );
  }
}
export default Services;
