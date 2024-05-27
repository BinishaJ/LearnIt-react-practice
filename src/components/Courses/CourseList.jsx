import React, { useContext, useEffect, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { PiUsersThree } from "react-icons/pi";
import { CourseContext } from "../../App";

import courses from "./courses.json";

const CourseList = () => {
  const searchCourse = useContext(CourseContext);

  const [filteredList, setFilteredList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const coursesPerPage = 5;

  useEffect(() => {
    if (!searchCourse) {
      setFilteredList(
        courses.slice(
          (activePage - 1) * coursesPerPage,
          (activePage - 1) * coursesPerPage + coursesPerPage
        )
      );
      setTotalPages(Math.ceil(courses.length / coursesPerPage));
    } else {
      const filteredCourses = courses.filter((c) =>
        c.title.toLowerCase().includes(searchCourse.toLowerCase())
      );
      setFilteredList(
        filteredCourses.slice(
          (activePage - 1) * coursesPerPage,
          (activePage - 1) * coursesPerPage + coursesPerPage
        )
      );
      setTotalPages(Math.ceil(filteredCourses.length / coursesPerPage));
    }
  }, [searchCourse, activePage, coursesPerPage]);

  const paginationNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationNumbers.push(i);
  }

  return (
    <>
      {filteredList.length ? (
        <>
          <div className="course-list-container">
            {filteredList.map((c, index) => (
              <div className="course-item" key={index}>
                <div className="course-image-container">
                  <img
                    src={require(`../../assets/${c.image}`)}
                    alt={c.title}
                    className="course-image"
                  />
                  <div className="play">
                    <BiSolidRightArrow className="play-icon" />
                  </div>
                </div>
                <div className="course-content">
                  <h4>{c.title}</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "10px 0",
                    }}
                  >
                    <p className="course-text">
                      <PiUsersThree className="course-list-icon" /> {c.enrolled}{" "}
                      Enrolled
                    </p>
                    <p className="course-text">
                      <FaRegCommentDots className="course-list-icon" />{" "}
                      {c.comments} Comments
                    </p>
                  </div>
                  <p className="course-text">{c.description}</p>
                  <span
                    style={{
                      display: "flex",
                      margin: "10px 0",
                    }}
                  >
                    <button className="course-button course-text">
                      Analytics
                    </button>
                    <button className="course-button course-text">
                      Review
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="course-pagination">
            <FaArrowLeft
              className={`arrow-button ${
                activePage === 1 ? "arrow-inactive" : "arrow-active"
              }`}
              onClick={() =>
                activePage > 1 ? setActivePage(activePage - 1) : ""
              }
            />

            {paginationNumbers.map((pageNumber) => (
              <p
                key={pageNumber}
                className={`paginate ${
                  activePage === pageNumber ? "active-paginate" : ""
                }`}
                onClick={() => setActivePage(pageNumber)}
              >
                {pageNumber}
              </p>
            ))}

            <FaArrowRight
              className={`arrow-button ${
                activePage === totalPages ? "arrow-inactive" : "arrow-active"
              }`}
              onClick={() =>
                activePage !== totalPages ? setActivePage(activePage + 1) : ""
              }
            />
          </div>
        </>
      ) : (
        <p className="no-courses">
          Oops! No courses available for search result {searchCourse}!
        </p>
      )}
    </>
  );
};

export default CourseList;
