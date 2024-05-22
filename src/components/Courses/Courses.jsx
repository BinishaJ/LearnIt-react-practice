import { FaListUl } from "react-icons/fa6";
import { IoAddSharp, IoFilter } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <div className="courses-section">
      <p className="path-nav">
        Overview&nbsp;
        <MdKeyboardArrowRight />
        &nbsp;Courses
      </p>

      <div className="courses-header">
        <div>
          <h3>My Courses</h3>
          <p className="courses-welcome">Welcome to LearnIt My Courses page</p>
        </div>

        <div className="buttons-container">
          <button className="add-button">
            <IoAddSharp className="add-icon" />
            Add Course
          </button>

          <button className="courses-icon-button">
            <IoFilter className="courses-icon" />
          </button>
          <button className="courses-icon-button">
            <FaListUl className="courses-icon" />
          </button>
        </div>
      </div>

      <CourseList />
    </div>
  );
};

export default Courses;
