import main from "../assets/main.jpg";
import { useDepartment } from "../context/DepartmentContext";
import "../index.css";
import AddCafedra from "./AddCafedra";
import { IoIosArrowDown } from "react-icons/io";
import ChangeCafedra from "./ChangeCafedra";

const MainWindow = () => {
  const { handleToggleSideBar, isSideBarVisible } = useDepartment();
  return (
    <div className="sd py-[16.5px] pl-[10px] pr-[15px] w-full relative">
      <div className="shadowSecond h-full flex items-center justify-center relative">
        <div
          onClick={handleToggleSideBar}
          className={`none bg-[#F1F5F9] top-[45%] left-[-50px] rotate-90 text-black absolute w-[64px] h-[64px] rounded-full flex items-center justify-center cursor-pointer active:scale-95 duration-300`}
        >
          <IoIosArrowDown
            className={`${
              isSideBarVisible ? "" : "rotate-180"
            } text-black text-[36px]`}
          />
        </div>
        <img src={main} alt="mainScreen" className="pt-[24px] pl-[30px]" />
        <AddCafedra />
        <ChangeCafedra />
      </div>
    </div>
  );
};

export default MainWindow;
