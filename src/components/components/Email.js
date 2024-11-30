import React from "react";

const Email = ({ label, placeholder }) => (
  <div>
    <label>{label}</label>
    <input type="text" placeholder={placeholder} />
  </div>
);

export default Email;