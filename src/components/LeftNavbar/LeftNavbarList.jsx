import { AiOutlineHome } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBookMinus } from "react-icons/lu";

const LeftNavbarList = ({ menuClose }) => {
  return (
    <div className="left-navbar-list">
      <ul style={{ paddingLeft: 0 }}>
        <li className={`left-list ${menuClose && "close-icon"}`}>
          <AiOutlineHome
            className={`left-list-icons ${menuClose && "close-icon"}`}
          />
          <p className={`left-list-content ${menuClose && "close-content"}`}>
            Overview
          </p>
        </li>
        <li className={`left-list ${menuClose && "close-icon"}`}>
          <LuBookMinus
            className={`left-list-icons ${menuClose && "close-icon"}`}
          />
          <p className={`left-list-content ${menuClose && "close-content"}`}>
            My Courses
          </p>
        </li>
        <li className={`left-list ${menuClose && "close-icon"}`}>
          <svg
            className={`left-list-icons ${menuClose && "close-icon"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect
                x="3"
                y="3"
                width="6"
                height="4"
                stroke="#000000"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></rect>
              <rect
                x="3"
                y="17"
                width="8"
                height="4"
                stroke="#000000"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></rect>
              <rect
                x="7"
                y="10"
                width="14"
                height="4"
                stroke="#000000"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></rect>
            </g>
          </svg>
          <p className={`left-list-content ${menuClose && "close-content"}`}>
            Roadmaps
          </p>
        </li>
        <li className={`left-list ${menuClose && "close-icon"}`}>
          <BsPatchCheck
            className={`left-list-icons ${menuClose && "close-icon"}`}
          />
          <p className={`left-list-content ${menuClose && "close-content"}`}>
            Achievements
          </p>
        </li>
        <li className={`left-list ${menuClose && "close-icon"}`}>
          <IoSettingsOutline
            className={`left-list-icons ${menuClose && "close-icon"}`}
          />
          <p className={`left-list-content ${menuClose && "close-content"}`}>
            Settings
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavbarList;