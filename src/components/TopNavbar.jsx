import { CiSearch } from "react-icons/ci";
import { GoMail, GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import UserImage from "../assets/user.jpg";
import { IoIosArrowDown } from "react-icons/io";

const TopNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="search">
        <input placeholder="Search" className="top-search" />
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
