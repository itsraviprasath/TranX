import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import "../assets/styles/pages/Borrow.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../components/Input";

const Borrow = () => {
  return (
    <>
      <ProfileNavbar />
      <section id="borrow">
        <h3>Create a borrow request</h3>

        <form>
          <Container>
            <Row>
              {/* Amount Details */}
              <Col className="amount-details">
                <p className="section-heading">Amount Details</p>

                <Input
                  labelFor="amount"
                  label="Amount (Rupees)"
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="50000"
                />

                <Input
                  labelFor="interest"
                  label="Interest Rate (%)"
                  id="interest"
                  name="interest"
                  type="number"
                  placeholder="10"
                />

                <Input
                  labelFor="description"
                  label="Description"
                  id="description"
                  name="description"
                  type="text"
                  placeholder="I need money for my business"
                />

                <label htmlFor="repayment">Repayment Method </label>
                <select id="repayment" name="repayment">
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="half-yearly">Half-Yearly</option>
                  <option value="yearly">Yearly</option>
                </select>

                <Input
                  labelFor="collateral"
                  label="Collateral"
                  id="collateral"
                  name="collateral"
                  type="text"
                  placeholder="House"
                />
              </Col>
              {/* Address Details */}
              <Col className="person-details">
                <p className="section-heading">Address</p>

                <Input
                  labelFor="streetName"
                  label="Door No. , Street Name"
                  id="streetName"
                  name="streetName"
                  type="text"
                  placeholder="9/1, 1st Street"
                />

                <Input
                  labelFor="landmark"
                  label="Landmark"
                  id="landmark"
                  name="landmark"
                  type="text"
                  placeholder="Near Bus Stop"
                />

                <Input
                  labelFor="town"
                  label="Town/Village"
                  id="town"
                  name="town"
                  type="text"
                  placeholder="Sriramapuram"
                />

                <Input
                  labelFor="district"
                  label="District (in Tamil Nadu, India)"
                  id="district"
                  name="district"
                  type="text"
                  placeholder="Dindigul"
                />

                <Input
                  labelFor="pincode"
                  label="Pincode"
                  id="pincode"
                  name="pincode"
                  type="number"
                  placeholder="624622"
                />
              </Col>
              <Col className="person-details">
                <p className="section-heading">Others</p>

                <Input
                  labelFor="aadhaarNumber"
                  label="Aadhaar No."
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  type="number"
                  placeholder="331520087298"
                />

                <Input
                  labelFor="panNumber"
                  label="Pan No."
                  id="panNumber"
                  name="panNumber"
                  type="text"
                  placeholder="CCXPS1234X"
                />

                <Input
                  labelFor="memberCount"
                  label="Family Members Count"
                  id="memberCount"
                  name="memberCount"
                  type="number"
                  placeholder="5"
                />

                <Input
                  labelFor="occupation"
                  label="Occupation"
                  id="occupation"
                  name="occupation"
                  type="text"
                  placeholder="Driver"
                />

                <Input
                  labelFor="dummy"
                  label="Dummy"
                  id="dummy"
                  name="dummy"
                  type="text"
                  placeholder="Dummy"
                />
              </Col>
            </Row>
          </Container>
          <div className="declaration">
            <input id="declaration" type="checkbox" />
            <label htmlFor="declaration">
              I declare all details are correct.
            </label>
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Borrow;
