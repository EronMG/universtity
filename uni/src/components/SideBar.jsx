import PropTypes from "prop-types";
import "../index.css";
import { useDepartment } from "../context/DepartmentContext";

const SideBar = ({ children }) => {
  const { isSideBarVisible } = useDepartment();
  return (
    <div
      className={`${
        isSideBarVisible
          ? "w-[318px] duration-300 opacity-100"
          : "w-[0px] duration-300 opacity-0"
      } van shadow rounded-[32px] bg-[#F1F5F9] px-[13.5px] py-[11px] w-[410px] mt-[17px]`}
    >
      {children}
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.node,
};

export default SideBar;
