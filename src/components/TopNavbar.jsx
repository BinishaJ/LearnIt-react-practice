import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { GoBell, GoMail } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CourseContext } from "../App";
import UserImage from "../assets/user.jpg";

const TopNavbar = ({ setSearchCourse }) => {
  const searchCourse = useContext(CourseContext);

  return (
    <div className="navbar-container">
      <div className="search">
        <input
          placeholder="Search"
          className="top-search"
          value={searchCourse}
          onChange={(e) => setSearchCourse(e.target.value)}
        />
        <CiSearch className="search-icon" />
      </div>

      <div className="top-navbar-icons">
        <div className="dot-icons">
          <GoMail className="top-icons" />
          <div className="notification-dot"></div>
        </div>
        <div className="dot-icons">
          <GoBell className="top-icons" />
          <div className="notification-dot"></div>
        </div>
        <IoSettingsOutline className="top-icons" />

        <img src={UserImage} className="user-icon" alt="User" />

        <IoIosArrowDown className="top-icons" />
      </div>
    </div>
  );
};

export default TopNavbar;
