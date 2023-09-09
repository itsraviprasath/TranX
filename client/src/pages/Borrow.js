import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import "../assets/styles/pages/Borrow.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../components/Input";
import axios from "axios";

const Borrow = () => {
  const [amount, setAmount] = React.useState(0);
  const [interest, setInterest] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [repayment, setRepayment] = React.useState("monthly");
  const [collateral, setCollateral] = React.useState("");
  const [streetName, setStreetName] = React.useState("");
  const [landmark, setLandmark] = React.useState("");
  const [town, setTown] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [aadhaarNumber, setAadhaarNumber] = React.useState("");
  const [panNumber, setPanNumber] = React.useState("");
  const [memberCount, setMemberCount] = React.useState(0);
  const [occupation, setOccupation] = React.useState("");
  const [income, setIncome] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
    axios
      .post(`http://localhost:8000/burrow`, {
        amount: amount,
        interest: interest,
        description: description,
        repayment: repayment,
        collateral: collateral,
        streetName: streetName,
        landmark: landmark,
        town: town,
        district: district,
        pincode: pincode,
        aadhaarNumber: aadhaarNumber,
        panNumber: panNumber,
        memberCount: memberCount,
        occupation: occupation,
        income: income,
      })
      .then((res) => {
        console.log("Success");
        console.log(res);
      })
      .catch((err) => console.log(err));
    setAmount(0);
    setInterest(0);
    setDescription("");
    setRepayment("monthly");
    setCollateral("");
    setStreetName("");
    setLandmark("");
    setTown("");
    setDistrict("");
    setPincode("");
    setAadhaarNumber("");
    setPanNumber("");
    setMemberCount(0);
    setOccupation("");
    setIncome(0);
  };
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
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <Input
                  labelFor="interest"
                  label="Interest Rate (%)"
                  id="interest"
                  name="interest"
                  type="number"
                  placeholder="10"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />

                <Input
                  labelFor="description"
                  label="Description"
                  id="description"
                  name="description"
                  type="text"
                  placeholder="I need money for my business"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="repayment">Repayment Method </label>
                <select
                  id="repayment"
                  name="repayment"
                  value={repayment}
                  onChange={setRepayment}
                >
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
                  value={collateral}
                  onChange={(e) => setCollateral(e.target.value)}
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
                  value={streetName}
                  onChange={(e) => setStreetName(e.target.value)}
                />

                <Input
                  labelFor="landmark"
                  label="Landmark"
                  id="landmark"
                  name="landmark"
                  type="text"
                  placeholder="Near Bus Stop"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                />

                <Input
                  labelFor="town"
                  label="Town/Village"
                  id="town"
                  name="town"
                  type="text"
                  placeholder="Sriramapuram"
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                />

                <Input
                  labelFor="district"
                  label="District (in Tamil Nadu, India)"
                  id="district"
                  name="district"
                  type="text"
                  placeholder="Dindigul"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />

                <Input
                  labelFor="pincode"
                  label="Pincode"
                  id="pincode"
                  name="pincode"
                  type="number"
                  placeholder="624622"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
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
                  value={aadhaarNumber}
                  onChange={(e) => setAadhaarNumber(e.target.value)}
                />

                <Input
                  labelFor="panNumber"
                  label="Pan No."
                  id="panNumber"
                  name="panNumber"
                  type="text"
                  placeholder="CCXPS1234X"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                />

                <Input
                  labelFor="memberCount"
                  label="Family Members Count"
                  id="memberCount"
                  name="memberCount"
                  type="number"
                  placeholder="5"
                  value={memberCount}
                  onChange={(e) => setMemberCount(e.target.value)}
                />

                <Input
                  labelFor="occupation"
                  label="Occupation"
                  id="occupation"
                  name="occupation"
                  type="text"
                  placeholder="Driver"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />

                <Input
                  labelFor="income"
                  label="Income (₹)"
                  id="income"
                  name="income"
                  type="number"
                  placeholder="1000000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
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
          <button className="btn" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Borrow;
