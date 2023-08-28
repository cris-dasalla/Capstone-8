import React from "react";
import { Col, Container, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/thankyou.css";

const ThankYou = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="pt-5 text-center">
              <div className="y">
                <h1 className="mb-3 gw-semibold">Thank You!</h1>
                <h3 className="mb-4">You Tour is Booked!</h3>

                <Button className="btn primary__btn w-25"><Link to='/home'>Back to Home</Link></Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ThankYou;