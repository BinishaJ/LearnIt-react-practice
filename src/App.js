import React, { createContext, useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses.jsx";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import TopNavbar from "./components/TopNavbar";

export const CourseContext = createContext();

function App() {
  const [searchCourse, setSearchCourse] = useState("");

  return (
    <CourseContext.Provider value={searchCourse}>
      <div className="App">
        <LeftNavbar />
        <div className="courses-mid-container">
          <TopNavbar setSearchCourse={setSearchCourse} />
          <Courses />
        </div>
      </div>
    </CourseContext.Provider>
  );
}

export default App;
