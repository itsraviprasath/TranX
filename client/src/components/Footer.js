import React from "react";
import "../assets/styles/components/Footer.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaInstagramSquare, FaAddressCard } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Row>
          <Col>
            <h3>TranX</h3>
            <p>Lorem Ipsum is simply dummy</p>
          </Col>
          <Col>
            <p className="link-heading">Menu</p>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Loans</li>
              <li>More</li>
            </ul>
          </Col>

          <Col>
            <p className="link-heading">Other Links</p>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Disclamer</li>
              <li>FAQs</li>
            </ul>
          </Col>
          <Col>
            <p className="link-heading">Contact Us</p>
            <ul>
              <li>
                <FaAddressCard className="icon" />
                South Street, Ooty, Tamil Nadu, India 624622
              </li>
              <li>
                <MdEmail className="icon" />
                contact@tranx.com
              </li>
              <li>
                <MdPhone className="icon" />
                9876543210
              </li>
              <li>
                <FaInstagramSquare className="icon" />
                <AiFillFacebook className="icon" />
                <AiFillLinkedin className="icon" />
                <AiFillTwitterSquare className="icon" />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="copywrite">
        Copyright ©️ 2023 TranX Pvt Ltd. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
