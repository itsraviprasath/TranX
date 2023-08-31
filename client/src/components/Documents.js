import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/styles/components/Documents.scss";
import { TiTick } from "react-icons/ti";

const Documents = () => {
  return (
    <div id="documents-section">
      <h3>Documents we collect</h3>
      <div className="documents-needed">
        <Container>
          <Row>
            <Col>
              <p>
                <TiTick className="icon" />
                <span>Aadhaar Card</span>
              </p>
            </Col>
            <Col>
              <p>
                <TiTick className="icon" />
                <span>Pan Card</span>
              </p>
            </Col>
            <Col>
              <p>
                <TiTick className="icon" />
                <span>Ration Card</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <TiTick className="icon" />
                <span>Bank Passbook</span>
              </p>
            </Col>
            <Col>
              <p>
                <TiTick className="icon" />
                <span>Asset Documents</span>
              </p>
            </Col>
            <Col>
              <p>
                <TiTick className="icon" />
                <span>Proof of identity</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Documents;
