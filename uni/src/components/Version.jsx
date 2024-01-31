import { useDepartment } from "../context/DepartmentContext";
import "../index.css";
import { Link } from "react-router-dom";

const Version = () => {
  const { selectedCaffedra, selectedYear } = useDepartment();

  return (
    <div
      className={`shadowMain pt-[28px] pb-[23px] pl-[13px] pr-[4px] mt-[30px]  ${
        selectedCaffedra ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="shadowSecond py-[15px] px-[12px]">
        <div className="shadowThird">
          <div className="shadowWhite flex items-center justify-center px-[5px] py-[6px] gap-[15px] cursor-pointer">
            <Link
              onClick={(e) => !selectedYear && e.preventDefault()}
              to="/versions"
              className="text-textSecond text-[24px] font-nuni font-[700]"
            >
              Выбрать версию
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version;
