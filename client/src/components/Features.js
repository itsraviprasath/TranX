import React from "react";
import "../assets/styles/components/Features.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHandsHelping } from "react-icons/fa";
import { BsFillFastForwardFill } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Features = () => {
  return (
    <section id="features-section">
      <h3>We ensure every time</h3>
      <Container>
        <Row>
          <Col className="features-div">
            <FaHandsHelping className="icon" />
            <p>Easy</p>
            <span>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece text.
            </span>
          </Col>
          <Col className="features-div">
            <BsFillFastForwardFill className="icon" />
            <p>Quick</p>
            <span>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece text.
            </span>
          </Col>
          <Col className="features-div">
            <AiFillSafetyCertificate className="icon" />
            <p>Safe</p>
            <span>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece text.
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
