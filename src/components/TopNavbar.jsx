import React, { useContext, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoBell, GoMail } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CourseContext } from "../App";
import UserImage from "../assets/user.jpg";

const TopNavbar = ({ setSearchCourse }) => {
  const searchCourse = useContext(CourseContext);
  const dropdownRef = useRef(null);
  const [viewDropdown, setViewDropdown] = useState(false);

  const clickDropdown = () => {
    setViewDropdown(!viewDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setViewDropdown(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

        <div
          ref={dropdownRef}
          style={{ position: "relative", display: "flex" }}
        >
          <IoIosArrowDown className="top-icons" onClick={clickDropdown} />
          <ul className={`profile-dropdown ${viewDropdown ? "show" : ""}`}>
            <li className="dropdown-items">Profile</li>
            <li className="dropdown-items">Account</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
