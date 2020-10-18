import React, { Component } from "react";
import axios from "axios";
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
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      company: "",
      coreSkills: "",
      softSkills: "",
      location: "",
      locationZip: "",
      compensation: "",
      jobDescription: "",
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const {
      role,
      company,
      coreSkills,
      softSkills,
      location,
      locationZip,
      compensation,
      jobDescription,
    } = this.state;

    axios
      .post("http://localhost:9000/job/jobPost", {
        role,
        company,
        coreSkills,
        softSkills,
        location,
        locationZip,
        compensation,
        jobDescription,
      })
      .then((res) => console.log(res));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      role,
      company,
      coreSkills,
      softSkills,
      location,
      locationZip,
      compensation,
      jobDescription,
    } = this.state;
    return (
      <Row>
        <Col lg={6}>
          <h4>Post a new Job</h4>
          <Form onClick={this.handleFormSubmit}>
            <Form.Group controlId="JobRole">
              <Form.Label>Job Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job role"
                name="role"
                value={role}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="Company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                name="company"
                value={company}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="Skills">
              <Form.Label>Expected Skills</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your skills"
                name="coreSkills"
                value={coreSkills}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="SoftSkills">
              <Form.Label>Soft Skills</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your soft skills"
                name="softSkills"
                value={softSkills}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="Location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                name="location"
                value={location}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="LocationZip">
              <Form.Label>Location PIN/ZIP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your zip-code"
                name="locationZip"
                value={locationZip}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="Compensation">
              <Form.Label>Compensation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your job compensation"
                name="compensation"
                value={compensation}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="JobDescription">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your job description"
                name="jobDescription"
                value={jobDescription}
                onChange={this.handleChange}
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
