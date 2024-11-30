import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormBuilder from "./components/FormBuilder";
import PreviewPage from "./components/FormPreview"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DndProvider backend={HTML5Backend}>
              <FormBuilder />
            </DndProvider>
          }
        />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;


