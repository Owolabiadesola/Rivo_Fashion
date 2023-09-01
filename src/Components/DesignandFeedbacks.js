import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const DesignandFeedbacks = () => {
  return (
    <Container>
      <Row>
        <h1 className="dandfheader mt-5">Designer Clothes For You</h1>
        <p className="dandftxt mt-3">
          Immerse yourself in the world of luxury fashion with our meticulously
          crafted designer clothes!
        </p>
        <Col xs={4} sm={4} md={4} lg={4} className="mt-4">
          <img
            src="/Images/elegant1.png"
            alt="img"
            className="img-fluid dandfimg"
          />
          <h5 className="dandfcolheader">Accessories</h5>
          <p className="dandfcolp">
            Complete your ensemble with designer accessories such as handbags,
            scarvers, belts, and hats
          </p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="mt-4">
          <img src="/Images/elegant3.png" alt="img" className="img-fluid" />
          <h5 className="dandfcolheader">Dresses</h5>
          <p className="dandfcolp">
            Explore a stunning range of designer dresses, including evening
            gowns and chin day dresses
          </p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="mt-4">
          <img src="/Images/elegant2.png" alt="img" className="img-fluid" />
          <h5 className="dandfcolheader">Jackets</h5>
          <p className="dandfcolp">
            Browse luxurious designer coats, jackets and blazers to stay
            stylishly warm during colder seasons.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <h1 className="mt-5 dandfcolheader">Feedback Corner</h1>
        <Col xs={4} sm={4} md={4} lg={4} className="mt-4">
          <img src="/Images/feedback1.png" alt="img" className="img-fluid" />
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="mt-4">
          <img src="/Images/feedback2.png" alt="img" className="img-fluid" />
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="mt-4">
          <img src="/Images/feedback3.png" alt="img" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default DesignandFeedbacks;
