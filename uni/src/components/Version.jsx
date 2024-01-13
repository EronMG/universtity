import { useDepartment } from "../context/DepartmentContext";
import "../index.css";

const Version = () => {
  const { active, selectedCaffedra } = useDepartment();
  return (
    <div
      className={`shadowMain pt-[28px] pb-[23px] pl-[13px] pr-[4px] mt-[30px] ${
        active ? "" : "opacity-50"
      } ${selectedCaffedra ? "opacity-100" : ""}`}
    >
      <div className="shadowSecond py-[15px] px-[12px]">
        <div className="shadowThird">
          <div className="shadowWhite flex items-center justify-center px-[5px] py-[6px] gap-[15px] cursor-pointer">
            <span className="text-textSecond text-[24px] font-nuni font-[700]">
              Выбрать версию
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version;
