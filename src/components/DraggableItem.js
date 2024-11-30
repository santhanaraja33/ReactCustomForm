import React from "react";

const DraggableItem = ({ type, label }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("item", JSON.stringify({ type, label }));
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        padding: "5px",
        margin: "5px 0",
        border: "1px solid black",
        borderRadius: "5px",
        cursor: "grab",
      }}
    >
      {label}
    </div>
  );
};

export default DraggableItem;
