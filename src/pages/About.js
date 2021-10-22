import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import logo from "../assets/images/logo/logo.png";
import ContactForm from "../components/contact_form";

class About extends Component {
  render() {
    return (
      <Container className="about-page mx-6">
        <Container className="card shadow rounded p-4 mb-4">
          <Row>
            <Col className="about-typist text-center" fill="vertical">
              <h2> Allow me to re-introduce myself, </h2>
              <h1> My name is </h1>
              <h1 className="text-bright"> Yanna </h1>
            </Col>
          </Row>
          <Row>
            <Col className="aboutSubText col-lg-6">
              <h3>
                I am a professional creative with a specialization in
                <font className="text-basic">
                  Web Development, graphic designe, & digital branding.
                </font>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                I work with
                <strong>
                  entrepreneurs, freelancers, and small business owners
                </strong>
                to design inclusive, effective, and impactful digital products.
                I enjoy being challenged by innovative ideas and pasionate
                people.With every new project I strive to{" "}
                <strong>turn innovative ideas into digital realities.</strong>
              </p>
            </Col>
            <Col>
              <p>
                With all the technologies available, there is no "best"
                solution. A web app built in ReactJs? Nice. A mobile app that
                needs to be deployed to both iOS and Android, with one code
                base? Ionic, it is! A custom UI solution implemented using
                jQuery on a Wordpress site? Done. The options are endless, so I
                typically use a combination of these:
                <Button color="primary">LEARN MORE</Button>
              </p>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <img
              src={logo}
              className="img-fluid rounded float-left"
              alt="oops"
            />
          </Col>
        </Row>
        <Row className="card shadow rounded p-4 mb-4">
          <p>my process</p>
          <Col>
            <h2>Design</h2>
          </Col>
          <Col>
            <h2>Develop</h2>
          </Col>
          <Col>
            <h2>Deploy</h2>
          </Col>
        </Row>
        <Row className="card about-text text-center shadow p-4 mb-4">
          <Col>
            <Row>
              <Col>
                {" "}
                <h1>experience</h1>
                <h2 className="text-muted">check me out</h2>
              </Col>
              <Col className=" ">
                <p>
                  I work with
                  <strong>
                    entrepreneurs, freelancers, and small business owners
                  </strong>
                  to design inclusive, effective, and impactful digital
                  products. I enjoy being challenged by innovative ideas and
                  pasionate people.With every new project I strive to{" "}
                  <strong>turn innovative ideas into digital realities.</strong>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <ul className="float-left">
              <li>beautiful and easy to professional animations</li>
              <li>beautiful and easy to professional animations</li>
              <li>beautiful and easy to professional animations</li>
            </ul>
            <Button color="primary">LEARN MORE</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={logo}
              className="img-fluid rounded float-left"
              alt="oops"
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-md-10 offset-md-3">
            <ContactForm />
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
export default About;
