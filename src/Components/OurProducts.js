import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurProducts = () => {
  return (
    <Container>
      <Row>
        <h1 className="mt-5 optxt">Our Products</h1>
        <ul className="mt-3 oplist">
          <li>Sales</li>
          <li className="hot">Hot</li>
          <li>New Arrivals</li>
          <li>Accessories</li>
        </ul>

        <Col xs={3} sm={3} md={3} lg={3} className=" mt-4">
          <div>
            <img src="/Images/opimg1.png" alt="img" className="  img-fluid" />
          </div>
          <div className="bsp">
            <p>Spread Collar Shirt</p>
            <p>$38.99</p>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className=" mt-4">
          <div>
            <img
              src="/Images/opimg2.png"
              alt="img"
              className=" opimg2 img-fluid"
            />
          </div>
          <div className="bsp">
            <p>White Solid Formal Shirt</p>
            <p>$39.00</p>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className=" mt-4">
          <div>
            <img
              src="/Images/opimg3.png"
              alt="img"
              className=" opimg3 img-fluid"
            />
          </div>
          <div className="bsp">
            <p>Shine On Me Blouse</p>
            <p>$42.99</p>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className=" mt-4">
          <div>
            <img
              src="/Images/opimg4.png"
              alt="img"
              className=" opimg3 img-fluid"
            />
          </div>
          <div className="bsp">
            <p>Gray Solid Padded Jacket</p>
            <p>$32.99</p>
          </div>
        </Col>
      </Row>
      <Row className=" mt-4">
        <Col xs={3} sm={3} md={3} lg={3}>
          <div>
            <img src="/Images/opimg5.png" alt="img" className="  img-fluid" />
          </div>
          <div className="bsp">
            <p>Printed Loose T-shirt</p>
            <p>$39.99</p>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <div>
            <img
              src="/Images/opimg6.png"
              alt="img"
              className=" opimg5 img-fluid"
            />
          </div>
          <div className="bsp">
            <p>Summer Wind Crop Shirt</p>
            <p>$39.95</p>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <div>
            <img src="/Images/opimg7.png" alt="img" className="img-fluid" />
          </div>
          <div className="bsp">
            <p>Tailored Jacket</p>
            <p>$46.00</p>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <div>
            <img
              src="/Images/opimg8.png"
              alt="img"
              className="pic8 img-fluid"
            />
          </div>
          <div className="bsp">
            <p> Solid Round Neck T-shirt</p>
            <p>$36.00</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurProducts;
