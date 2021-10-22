import React, { Component } from "react";
import { Link } from "react-router-dom";
import TypistAnim from "../components/typist_animation.js";
import img1 from "../assets/images/d_sample.jpg";
import img318x270 from "../assets/images/unnamed.png";
import Testimonials from "../components/testimonial_carousel.js";
import BlogPreview from "../components/blog_preview.js";
import { Container, Row, Col, Jumbotron, Button } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <Container className="home-container">
        <Row>
          <Col sm="8" className="home-intro">
            <img src={img1} className="img-fluid rounded" alt="oops" />
          </Col>
          <Col sm={{ size: 6, offset: 5 }}>
            <h1>Hi im Yanna,</h1>
            <div className="card shadow rounded p-4 mb-5">
              <TypistAnim />
              <p>
                I turn your{" "}
                <strong> ideas, concepts and buisness plans </strong> into real
                working web applications.
                <br />
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <h1>I make designs that are bold & fresh.</h1>
            <h2 className="text-muted">Stay a bit and check it out</h2>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <div className="p-4 mb-5">
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
            <div className="card card-3d rounded p-4 mb-5">
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
        <Row className="my-5">
          <Col>
            <div className="card card-3d rounded p-4 mb-5">
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
            <h2>create the lifestyle you really desire.</h2>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <Jumbotron className="jumbotron rounded bg-warning shadow">
              <h1>I make designs that are bold & fresh.</h1>
              <h2 className="text-muted">Stay a bit and check it out</h2>
              <Button color="primary">RECENT WORKS</Button>
            </Jumbotron>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <Testimonials />
          </Col>
        </Row>
        <hr className="my-2" />
        <Row className="my-5">
          <Col>
            <h1>I make designs that are bold & fresh.</h1>
            <h2 className="text-muted">Stay a bit and check it out</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Home;
