import React, { Component } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

class DashBoard extends Component {
  render() {
    return (
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <img src="https://img.icons8.com/fluent/48/000000/user-male-circle.png" />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="PhoneNumaber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group controlId="Location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Location" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={2}></Col>
      </Row>
    );
  }
}

export default DashBoard;
