import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <Row className="footer mb-1">
        <h1 className="py-3 footermain">Rivo</h1>
        <Col xs={3} sm={3} md={3} lg={3} className="pb-4">
          <h5 className="footerheader">SHOP</h5>
          <p className="footertxt">Products</p>
          <p className="footertxt">Overview</p>
          <p className="footertxt">Pricing</p>
          <p className="footertxt">Releases</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="pb-4">
          <h5 className="footerheader">COMPANY</h5>
          <p className="footertxt">About Us</p>
          <p className="footertxt">Contacts</p>
          <p className="footertxt">News</p>
          <p className="footertxt">Support</p>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} className="pb-4">
          <h5 className="footerheader3 mb-4">STAY UP TO DATE</h5>
          <span>
            <input
              type="text"
              className="footerinput"
              placeholder="Enter your email"
            />
          </span>
          <span>
            <button id="footerbtn">SUBMIT</button>
          </span>
          <br />
          <span className="footersp">
            <p className="mx-3">Terms</p>
            <p>Privacy</p>
            <p className="mx-3">Cookies</p>
          </span>
        </Col>
        <hr />
      </Row>
    </Container>
  );
};

export default Footer;
