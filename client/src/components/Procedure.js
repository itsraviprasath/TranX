import React from "react";
import "../assets/styles/components/Procedure.scss";
import ProcedureImage from "../assets/images/procedure.png";

const Procedure = () => {
  return (
    <section id="procedure-section">
      <h3>How we go?</h3>
      <img className="procedure-image" src={ProcedureImage} alt="" />
    </section>
  );
};

export default Procedure;
