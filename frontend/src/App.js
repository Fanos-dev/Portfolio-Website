import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import ProjectDetail from "./components/ProjectDetail";
import EducationLeadership from "./components/EducationLeadership";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/education-leadership" element={<EducationLeadership />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;