import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/styles/pages/Lend.scss";
import { TbMoneybag } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { BsChatLeftText } from "react-icons/bs";
import axios from "axios";
import { useEffect } from "react";

const Lend = () => {
  var [alldata, setalldata] = React.useState([]);

  const LS = JSON.parse(localStorage.getItem("Data"));
  const id = LS._id;

  const getdata = async () => {
    axios
      .get("http://localhost:8000/api/getburrow")
      .then((res) => {
        setalldata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <ProfileNavbar />
      <section id="lend">
        <Container>
          <Row lg={4}>
            {alldata.map((item) => (
              <Col className="lend-card">
                <p className="amount">{item?.amount}</p>
                <p className="interest">
                  <TbMoneybag className="icon" />
                  Interest: {item?.interest}%
                </p>
                <p className="repayment">
                  <SlCalender className="icon" />
                  Repayment: {item?.repayment}
                </p>
                <p className="description">
                  <BsChatLeftText className="icon" />
                  {item?.description}
                </p>
                <button className="btn">Lend</button>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Lend;
