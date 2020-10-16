import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
class JobsPost extends Component {
  render() {
    return (
      <Row>
        <Col lg={6}>
          <h4>Post a new Job</h4>
          <Form>
            <Form.Group controlId="JobRole">
              <Form.Label>Job Role</Form.Label>
              <Form.Control type="text" placeholder="Enter job role" />
            </Form.Group>
            <Form.Group controlId="Company">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Enter company name" />
            </Form.Group>
            <Form.Group controlId="Skills">
              <Form.Label>Expected Skills</Form.Label>
              <Form.Control type="text" placeholder="Enter your skills" />
            </Form.Group>
            <Form.Group controlId="SoftSkills">
              <Form.Label>Soft Skills</Form.Label>
              <Form.Control type="text" placeholder="Enter your soft skills" />
            </Form.Group>
            <Form.Group controlId="Location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter your location" />
            </Form.Group>
            <Form.Group controlId="Location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter your location" />
            </Form.Group>
            <Form.Group controlId="LocationZip">
              <Form.Label>Location PIN/ZIP</Form.Label>
              <Form.Control type="text" placeholder="Enter your zip-code" />
            </Form.Group>
            <Form.Group controlId="Compensation">
              <Form.Label>Compensation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your job compensation"
              />
            </Form.Group>
            <Form.Group controlId="JobDescription">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your job description"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default JobsPost;
