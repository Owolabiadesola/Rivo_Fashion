import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ExclusiveOffer() {
  return (
    <Container>
      <Row className="exoffer my-5 ">
        <Col xs={4} sm={4} md={6} lg={6}>
          <img
            src="/Images/excited.png"
            alt="img"
            className=" eximg img-fluid pt-2"
          />
        </Col>
        <Col xs={8} sm={8} md={6} lg={6}>
          <h1 className="pt-5 exheader">Exclusive offer</h1>
          <p className="extxt mt-4">
            Unlock the ultimate style upgraded with our exclusive <br />
            offer. Enjoy savings of up to 40% off on our latest arrival
          </p>
          <span className="exspan mx-3 mt-4">
            <h6 className="days bg-light">06 Days</h6>
          </span>
          <span className="exspan mx-3">
            <h6 className="days bg-light">18 Hours</h6>
          </span>
          <span className="exspan mx-3">
            <h6 className="days bg-light">48 Mins</h6>
          </span>
          <button className="exbtn my-3">Buy now</button>
        </Col>
      </Row>
    </Container>
  );
}
