import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/styles/pages/Lend.scss";
import { TbMoneybag } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { BsChatLeftText } from "react-icons/bs";

const Lend = () => {
  return (
    <>
      <ProfileNavbar />
      <section id="lend">
        <Container>
          <Row lg={4}>
            <Col className="lend-card">
              <p className="amount">$100000</p>
              <p className="interest">
                <TbMoneybag className="icon" />
                Interest: 10%
              </p>
              <p className="repayment">
                <SlCalender className="icon" />
                Repayment: Monthly
              </p>
              <p className="description">
                <BsChatLeftText className="icon" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn">Lend</button>
            </Col>
            <Col className="lend-card">
              <p className="amount">$100000</p>
              <p className="interest">
                <TbMoneybag className="icon" />
                Interest: 10%
              </p>
              <p className="repayment">
                <SlCalender className="icon" />
                Repayment: Monthly
              </p>
              <p className="description">
                <BsChatLeftText className="icon" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col className="lend-card">
              <p className="amount">$100000</p>
              <p className="interest">
                <TbMoneybag className="icon" />
                Interest: 10%
              </p>
              <p className="repayment">
                <SlCalender className="icon" />
                Repayment: Monthly
              </p>
              <p className="description">
                <BsChatLeftText className="icon" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col className="lend-card">
              <p className="amount">$100000</p>
              <p className="interest">
                <TbMoneybag className="icon" />
                Interest: 10%
              </p>
              <p className="repayment">
                <SlCalender className="icon" />
                Repayment: Monthly
              </p>
              <p className="description">
                <BsChatLeftText className="icon" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col className="lend-card">
              <p className="amount">$100000</p>
              <p className="interest">
                <TbMoneybag className="icon" />
                Interest: 10%
              </p>
              <p className="repayment">
                <SlCalender className="icon" />
                Repayment: Monthly
              </p>
              <p className="description">
                <BsChatLeftText className="icon" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col className="lend-card">
              <p className="amount">$100000</p>
              <p className="interest">
                <TbMoneybag className="icon" />
                Interest: 10%
              </p>
              <p className="repayment">
                <SlCalender className="icon" />
                Repayment: Monthly
              </p>
              <p className="description">
                <BsChatLeftText className="icon" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col className="lend-card">
              <p className="amount">$100000</p>
              <p className="interest">
                <TbMoneybag className="icon" />
                Interest: 10%
              </p>
              <p className="repayment">
                <SlCalender className="icon" />
                Repayment: Monthly
              </p>
              <p className="description">
                <BsChatLeftText className="icon" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Lend;
