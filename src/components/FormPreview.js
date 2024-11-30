import React from "react";
import { useLocation } from "react-router-dom";

const FormPreview = () => {
  const location = useLocation();
  const { formComponents } = location.state || { formComponents: [] };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Form Preview</h2>
      <form>
        {formComponents.map((component, index) => {
          switch (component.type) {
            case "Input":
              return (
                <input key={index} type="text" placeholder={component.label} />
              );
            case "TextArea":
              return <textarea key={index} placeholder={component.label} />;
            case "Button":
              return <button key={index}>{component.label}</button>;
            default:
              return null;
          }
        })}
      </form>
    </div>
  );
};

export default FormPreview;
