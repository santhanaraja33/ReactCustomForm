import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import Button from "./components/Button";

const COMPONENTS = {
  Input,
  TextArea,
  Button,
};

const DroppableArea = () => {
  const [formElements, setFormElements] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["Input", "TextArea", "Button"],
    drop: (item) => addElement(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addElement = (item) => {
    setFormElements((prev) => [
      ...prev,
      { id: uuidv4(), type: item.type, label: item.label },
    ]);
  };

  return (
    <div
      ref={drop}
      style={{
        minHeight: "300px",
        border: "2px dashed gray",
        padding: "10px",
        backgroundColor: isOver ? "#f0f0f0" : "white",
      }}
    >
      {formElements.map(({ id, type, label }) => {
        const Component = COMPONENTS[type];
        return <Component key={id} label={label} />;
      })}
    </div>
  );
};

export default DroppableArea;
