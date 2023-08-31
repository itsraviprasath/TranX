import React from "react";
import "../assets/styles/components/HeroSection.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Image from "../assets/images/image.png";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <Container>
        <Row>
          <Col className="left">
            <h1>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
            <Button
              className="btn"
              style={{ backgroundColor: "#fff", color: "#2D3079" }}
            >
              Apply Now
            </Button>
            <Button
              className="btn"
              style={{
                backgroundColor: "hsla(0,0%,100%,.1)",
                color: "#fff",
              }}
            >
              More
            </Button>
          </Col>
          <Col>
            <img src={""} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
