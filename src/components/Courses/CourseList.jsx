import React, { useContext, useEffect, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { PiUsersThree } from "react-icons/pi";
import { CourseContext } from "../../App";

import courses from "./courses.json";

const CourseList = () => {
  const searchCourse = useContext(CourseContext);

  const [coursesList, setCoursesList] = useState(courses);

  useEffect(() => {
    !searchCourse
      ? setCoursesList(courses)
      : setCoursesList(
          courses.filter((c) =>
            c.title.toLowerCase().includes(searchCourse.toLowerCase())
          )
        );
  }, [searchCourse]);

  return (
    <>
      {coursesList.length ? (
        <>
          <div className="course-list-container">
            {coursesList.map((c, index) => (
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
            <FaArrowLeft className="arrow-button arrow-inactive" />
            <p className="paginate active-paginate">1</p>
            <p className="paginate">2</p>
            <p className="paginate">3</p>
            <p className="paginate">4</p>
            <p className="paginate">5</p>
            <p className="paginate">...</p>
            <p className="paginate">9</p>
            <FaArrowRight className="arrow-button arrow-active" />
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
