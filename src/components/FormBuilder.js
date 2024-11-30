import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DraggableItem from "./DraggableItem";
import DroppableArea from "./DroppableArea";

const FormBuilder = () => {
  const [formComponents, setFormComponents] = useState([]);
  const navigate = useNavigate();

  const handlePreview = () => {
    navigate("/preview", { state: { formComponents } });
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ width: "200px", border: "1px solid black", padding: "10px" }}>
        <h3>Components</h3>
        <DraggableItem type="Input" label="Input Field" />
        <DraggableItem type="TextArea" label="Text Area" />
        <DraggableItem type="Button" label="Button" />
        <DraggableItem type="Input" label="Email" />
      </div>
      <DroppableArea setFormComponents={setFormComponents} />
      <button onClick={handlePreview} style={{ alignSelf: "flex-start" }}>
        Preview
      </button>
    </div>
  );
};

export default FormBuilder;
