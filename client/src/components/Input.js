import React from "react";
import "../assets/styles/components/Input.scss";

const Input = (props) => {
  return (
    <>
      <div id="input">
        <label htmlFor={props.labelFor}>{props?.label}</label>
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default Input;
