import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Homepage = () => {
  return (
    <Container fluid>
      <Row className="homepage">
        <Col xs={12} sm={12} md={12} lg={6} className="">
          <div>
            <h1 className="hpheader mt-5">
              Discover and <br /> Find Your Own <br /> Fashion!
            </h1>
            <p className="hmp mt-5">
              Explore our curated collections of stylish <br /> clothing and
              accessories tailored to your <br /> unique taste
            </p>
            <button className="hmpbtn mt-5 mb-4">Explore now</button>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className="">
          <img
            className="img-fluid pb-5"
            id="hmpimg"
            src="/Images/Mask.png"
            alt="img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
