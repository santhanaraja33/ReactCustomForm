import React from "react";
import DraggableItem from "./DraggableItem";
import DroppableArea from "./DroppableArea";

const FormBuilder = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ width: "200px", border: "1px solid black", padding: "10px" }}>
        <h3>Components</h3>
        <DraggableItem type="Input" label="Input Field" />
        <DraggableItem type="TextArea" label="Text Area" />
        <DraggableItem type="Button" label="Button" />
      </div>
      <DroppableArea />
    </div>
  );
};

export default FormBuilder;
