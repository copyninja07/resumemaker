import React from "react";
import "./App.css";
import ResumeData from "./ResumeData";
import Resume from "./templates/design1/Resume";
import { Routes, Route } from "react-router-dom";
// import Resume2 from "./templates/design2/resume2";
import Resume2 from "./templates/d3/resume2";
import Template from "./template";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ResumeData />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/template" element={<Template />} />
        <Route path="/resume2" element={<Resume2 />} />
      </Routes>
    </div>
  );
}

export default App;
