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
import JobsPost from "./JobsPost";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      showPostForm: false,
    }
  }
  

  render() {
    return (
      <Container fluid>
        <Row noGutters>
          <Col lg={12}>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">Naukri.com</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Jobs</Nav.Link>
                  <Nav.Link href="#link">Recruiters</Nav.Link>
                  <Nav.Link href="#home">Companies</Nav.Link>
                  <Nav.Link href="#home" onClick={this.postJobsHandler}>Post Jobs</Nav.Link>
                  <Nav.Link href="#home">Apply Jobs</Nav.Link>
                  <Nav.Link href="#home">Expert Support</Nav.Link>
                  <Nav.Link href="#home">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row noGutters className="pageRow">
          <Col>
            <h4>Find A Job at India's No.1 Job Site</h4>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="Skills, Designation, Companies" />
                </Col>
                <Col>
                  <Form.Control placeholder="Enter Location" />
                </Col>
                <Col>
                  <Button>Submit</Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
        <Row noGutters className="pageRow">

        </Row>
        <JobsPost/>
      </Container>
    );
  }
}

export default App;
