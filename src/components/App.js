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
  ListGroup,
} from "react-bootstrap";
import { GreatThings } from "moving-letters";
import DashBoard from "./DashBoard";
import JobsPost from "./JobsPost";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostForm: false,
      showDashBoard: false,
      showJobs: true,
      skills: "",
      location: "",
    };
  }

  postJobsHandler = () => {
    if (this.state.showPostForm) {
      this.setState({
        showPostForm: false,
        showJobs: true,
      });
    } else {
      this.setState({
        showJobs: false,
        showPostForm: true,
      });
    }
  };

  toggleDashBoard = () => {
    if (this.state.showDashBoard) {
      this.setState({
        showDashBoard: false,
        showJobs: true,
      });
    } else {
      this.setState({
        showJobs: false,
        showDashBoard: true,
      });
    }
  };

  skillSearch = (e) => {
    this.setState({
      skills: e.target.value,
    });
  };

  locationSearch = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  jobSearchHandler = async () => {};

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
                  <Nav.Link href="#home" onClick={this.postJobsHandler}>
                    Post Jobs
                  </Nav.Link>
                  <Nav.Link href="#home">Apply Jobs</Nav.Link>
                  <Nav.Link href="#home">Expert Support</Nav.Link>
                  <Nav.Link href="#home" onClick={this.toggleDashBoard}>
                    DashBoard
                  </Nav.Link>
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
                  <Form.Control
                    placeholder="Skills, Designation, Companies"
                    onChange={this.skillSearch}
                    value={this.state.skills}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter Location"
                    onChange={this.locationSearch}
                    value={this.state.location}
                  />
                </Col>
                <Col>
                  <Button onClick={this.jobSearchHandler}>Submit</Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
        <Row noGutters className="pageRow">
          <div className="moving-text">
            <GreatThings text=" Hello User! Click on post jobs to post a new job." />
          </div>
        </Row>
        {/* {this.state.showJobs && (
          <ListGroup>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
        )} */}
        {this.state.showPostForm && <JobsPost />}
        {this.state.showDashBoard && <DashBoard />}
      </Container>
    );
  }
}

export default App;
