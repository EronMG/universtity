import PropTypes from "prop-types";
import "../index.css";
import { useDepartment } from "../context/DepartmentContext";

const SideBar = ({ children }) => {
  const { isSideBarVisible } = useDepartment();
  return (
    <div
      className={`${
        isSideBarVisible ? "" : "hidden"
      } shadow rounded-[32px] bg-[#F1F5F9] px-[13.5px] py-[11px] w-[410px] mt-[17px]`}
    >
      {children}
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.node,
};

export default SideBar;
