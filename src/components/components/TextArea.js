import React from "react";

const TextArea = ({ label, placeholder }) => (
  <div>
    <label>{label}</label>
    <textarea placeholder={placeholder}></textarea>
  </div>
);

export default TextArea;
