import React from "react";

const Input = ({ label, placeholder }) => (
  <div>
    <label>{label}</label>
    <input type="text" placeholder={placeholder} />
  </div>
);

export default Input;
