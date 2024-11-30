import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        padding: "10px",
        margin: "5px",
        border: "1px solid black",
        backgroundColor: "#fff",
      }}
    >
      {label}
    </div>
  );
};

export default DraggableItem;
