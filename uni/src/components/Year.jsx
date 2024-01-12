import "../index.css";
import { IoIosArrowDown } from "react-icons/io";

const Year = () => {
  return (
    <div className="shadowMain pt-[28px] pb-[23px] pl-[13px] pr-[4px] mt-[24px]">
      <div className="shadowSecond py-[15px] px-[12px]">
        <div className="shadowWhite flex items-center px-[5px] py-[6px] gap-[15px]">
          <div className="rounded-full bg-[#F1F5F9] flex items-center justify-center w-[37px] h-[37px] shadow-xl -rotate-90 z-0">
            <IoIosArrowDown className="text-textSecond " />
          </div>
          <span className="text-textSecond text-[20px] font-nuni font-[700]">
            Учебный год
          </span>
          <div className="bg-primaryLow w-[27px] h-[27px]" />
        </div>
      </div>
    </div>
  );
};

export default Year;
