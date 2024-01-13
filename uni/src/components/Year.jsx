import { useCallback, useState } from "react";
import { useDepartment } from "../context/DepartmentContext";
import "../index.css";
import { IoIosArrowDown } from "react-icons/io";
import styles from "../styles";
import allow from "../assets/allow.svg";

const Year = () => {
  const { active, selectedCaffedra, selectedYear, arrYear, handleYearClick } =
    useDepartment();

  const [active1, setActive1] = useState(false);
  const [hoveredYear, setHoveredYear] = useState(null);

  const handleActive = useCallback(
    () => setActive1((prev) => !prev),
    [setActive1]
  );

  const handleYearHover = useCallback((year) => {
    setHoveredYear(year);
  }, []);

  const handleYearLeave = useCallback(() => {
    setHoveredYear(null);
  }, []);

  return (
    <div
      className={`shadowMain pt-[28px] pb-[23px] pl-[13px] pr-[4px] mt-[24px] ${
        active ? "" : "opacity-50"
      } ${selectedCaffedra ? "opacity-100" : ""}`}
    >
      <div className="shadowSecond py-[15px] px-[12px]">
        <div
          onClick={handleActive}
          className="shadowWhite flex items-center px-[5px] py-[6px] gap-[15px] cursor-pointer"
        >
          <div className="rounded-full bg-[#F1F5F9] flex items-center justify-center w-[37px] h-[37px] shadow-xl ">
            <IoIosArrowDown
              className={`${
                active1 && selectedCaffedra ? "" : ""
              } text-textSecond `}
            />
          </div>
          <span className="text-textSecond text-[20px] font-nuni font-[700] w-[128px] text-center">
            {selectedYear || "Учебный год"}
          </span>

          <div className="bg-primaryLow w-[27px] h-[27px] flex items-center justify-center">
            {selectedYear && <img src={allow} alt="allow" />}
          </div>
        </div>
        {active1 && selectedCaffedra && (
          <div className="flex flex-col">
            {arrYear.map((item) => (
              <button
                key={item.id}
                onClick={() => handleYearClick(item.year)}
                onMouseEnter={() => handleYearHover(item.year)}
                onMouseLeave={handleYearLeave}
                className={`text-[16px] border-t-2 py-[14px] ${
                  hoveredYear === item.year ? "hover:bg-[#A8A3E680]" : ""
                } ${styles.textSecond}`}
              >
                {item.year}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Year;
