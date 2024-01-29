/* eslint-disable react/prop-types */
import { FaPencil } from "react-icons/fa6";

const Second = ({
  boot,
  handleActiveMain,
  handlePride,
  item,
  activeMain,
  TfiTrash,
}) => {
  return (
    <div
      onClick={() => handleActiveMain(boot.id)}
      key={boot.id}
      className={`${
        activeMain === boot.id ? "mainShadow" : ""
      } flex h-[70px] px-[8px] `}
    >
      <div className=" flex items-center gap-[15px]">
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[122px]">
          {boot.fac}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[133px]">
          {boot.choose}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[95px]">
          {boot.name}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[182px]">
          {boot.students}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[110px]">
          {boot.mon}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[110px]">
          {boot.dog}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[150px]">
          {boot.potoc}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[104px]">
          {boot.group}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[129px]">
          {boot.pod}
        </span>
        <span
          className={`font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[124px]`}
        >
          {boot.prof}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[177px]">
          {boot.prac}
        </span>
      </div>
      {activeMain === boot.id && item !== "3" ? (
        <div className={`absolute  flex gap-6 right-0 top-16 p-2`}>
          <button className="list w-[160px] h-[33px] justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2">
            Изменить
            <FaPencil className="text-black text-[16px]" />
          </button>
          <button
            onClick={() => handlePride(boot.id)}
            className="list w-[160px] h-[33px] justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2"
          >
            Удалить <TfiTrash className="text-black text-[16px]" />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Second;
