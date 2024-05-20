import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RiGraduationCapFill } from "react-icons/ri";
import LeftNavbarList from "./LeftNavbarList";

const LeftNavbar = () => {
  const [menuClose, setMenuClose] = useState(false);

  return (
    <div className={`left-navbar ${menuClose && "small-menu"}`}>
      <span className="left-icons-container">
        {!menuClose && (
          <a href="/">
            <RiGraduationCapFill className="left-logo" />
          </a>
        )}
        <FiMenu
          className="left-menu"
          onClick={() => setMenuClose(!menuClose)}
        />
      </span>
      <LeftNavbarList menuClose={menuClose} />
    </div>
  );
};

export default LeftNavbar;
