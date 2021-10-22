import React, { Component } from "react";
import ContactForm from "../components/contact_form";
import { Container, Row, Col } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <Container className="contact-page">
        <Row>
          <Col>
            <div className="contact-text">
              <h1>
                Do I need this page??.
              </h1>
            </div>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
