import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import ProjectDetail from "./components/ProjectDetail";
import EducationLeadership from "./components/EducationLeadership";
import { EditModeProvider } from "./contexts/EditModeContext";
import EditModeControls from "./components/EditModeControls";

function App() {
  return (
    <EditModeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            <Route path="/education-leadership" element={<EducationLeadership />} />
          </Routes>
          <EditModeControls />
        </BrowserRouter>
      </div>
    </EditModeProvider>
  );
}

export default App;