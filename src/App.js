import React from "react";
import "./App.css";
import Courses from "./components/Courses/Courses.jsx";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <div className="App">
      <LeftNavbar />
      <div className="courses-mid-container">
        <TopNavbar />
        <Courses />
      </div>
    </div>
  );
}

export default App;
