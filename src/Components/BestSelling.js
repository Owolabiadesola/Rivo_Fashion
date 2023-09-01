import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BestSelling = () => {
  return (
    <Container>
      <Row className="m-4">
        <div className="bsword">
          <h1>Best Selling</h1>
          <p className="mt-3">
            Get in on the trend with our curated selection of best-selling
            styles
          </p>
        </div>
        <Col xs={4} sm={4} md={4} lg={4} className=" mt-4">
          <div>
            <img
              src="/Images/Bsimg1.png"
              alt="img"
              className=" bs1 img-fluid"
            />
          </div>
          <div className="bsp">
            <p>Regular Fit Long sleeve Top</p>
            <p>$38.99</p>
          </div>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className=" mt-4">
          <div className="bs2">
            <img src="/Images/Bsimg2.png" alt="img" className="img-fluid" />
          </div>
          <div className="bsp">
            <p>Black Crop Tailored Jacket</p>
            <p>$62.99</p>
          </div>
          <button className="bsbtn">See all -></button>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className=" mt-4">
          <div className="bs3">
            <img src="/Images/Bsimg3.png" alt="img" className="img-fluid" />
          </div>
          <div className="bsp">
            <p>Textured Sunset Shirt</p>
            <p>$49.99</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BestSelling;
