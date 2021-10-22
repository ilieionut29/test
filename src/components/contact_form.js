import React from "react";
import { Col, Row, Button, Form, FormGroup, Input } from "reactstrap";

const ContactForm = props => {
  return (
    <div className="card card-3d rounded p-4 mb-4">
      <Form>
        <Row>
          <Col>
            <h1>
              Dont be shy <br /> Just say hi
            </h1>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input
                type="text"
                name="contactName"
                id="contactName"
                placeholder="My Name is..."
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                type="text"
                name="contactNumber"
                id="contactNumber"
                placeholder="My Phone Number is..."
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup row>
          <Col>
            <Input
              type="email"
              name="contactemail"
              id="contactEmail"
              placeholder="My Email is..."
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Input type="select" name="selectContact" id="selectContact">
              <option> "I'd like to start a project"</option>
              <option> "I'd like to ask a question" </option>
              <option> "I'd like to make a proposal" </option>
              <option> "Something else..." </option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Input
              type="textarea"
              name="contactText"
              id="contactText"
              placeholder="I'd like to chat about..."
            />
          </Col>
        </FormGroup>
        <Button>Send Message</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
