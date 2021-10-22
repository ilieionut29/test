import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron, Button } from "reactstrap";
import logo from "../assets/images/logo/logo.png";
import WorksGrid from "../components/works_grid";

class Works extends Component {
  render() {
    return (
      <Container fluid={true} className="works-page">
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">
                This is a simple hero unit, a simple Jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-2" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3> Projects Photo</h3>
          </Col>
          <Col sm="4">
            <div className="p-4 mb-4">
              <h2>create the lifestyle you really desire.</h2>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia a leo nulla ve elementum lacus et mi posuere
                pulvinar nec pulvin.
              </p>
              <ul>
                <li>beautiful and easy to professional animations</li>
                <li>beautiful and easy to professional animations</li>
                <li>beautiful and easy to professional animations</li>
              </ul>
              <Button color="primary">LEARN MORE</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">
                This is a simple hero unit, a simple Jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-2" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <div className="p-4 mb-4">
              <h2>create the lifestyle you really desire.</h2>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia a leo nulla ve elementum lacus et mi posuere
                pulvinar nec pulvin.
              </p>
              <ul>
                <li>beautiful and easy to professional animations</li>
                <li>beautiful and easy to professional animations</li>
                <li>beautiful and easy to professional animations</li>
              </ul>
              <Button color="primary">LEARN MORE</Button>
            </div>
          </Col>
          <Col>
            <h3> Projects Photo</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3> Wanna see more check out my blog...</h3>
            <Button color="primary">LEARN MORE</Button>
          </Col>
        </Row>
        <Row>
          <Col>
          <img
              src={logo}
              className="img-fluid rounded mx-auto d-block"
              alt="oops"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Works;
