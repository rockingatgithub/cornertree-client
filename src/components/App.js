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

class App extends Component {
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
                  <Nav.Link href="#home">Tools</Nav.Link>
                  <Nav.Link href="#home">Services</Nav.Link>
                  <Nav.Link href="#home">More</Nav.Link>
                  <Nav.Link href="#home">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
