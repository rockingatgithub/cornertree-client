import React from "react";
import { Col, Card, Button } from "react-bootstrap";

function ShareScreen(props) {
  return (
    <Col>
      <Card>
        <Card.Header as="h5">Share</Card.Header>
        <Card.Body>
          <Card.Title>Share job post on social sites like:</Card.Title>
          <Card.Text>
            <img
              src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
              alt="social-link"
            />
            <img
              src="https://img.icons8.com/cute-clipart/48/000000/instagram-new.png"
              alt="social-link"
            />
            <img
              src="https://img.icons8.com/fluent/64/000000/linkedin.png"
              alt="social-link"
            />
            <img
              src="https://img.icons8.com/fluent/48/000000/twitter.png"
              alt="social-link"
            />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ShareScreen;
