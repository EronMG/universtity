import { useList } from "../context/ListContext";
import { TfiTrash } from "react-icons/tfi";
import { FaPencil } from "react-icons/fa6";
import { useDepartment } from "../context/DepartmentContext";
import { IoIosArrowDown } from "react-icons/io";
import ContForm from "./ContForm";
import { useState } from "react";
const ListSubject = () => {
  const { handleToggleSideBar, isSideBarVisible } = useDepartment();
  const {
    handleActiveMain,
    activeMain,
    handleDelete,
    lessons,
    item,
    setIsContForm,
    isContForm,
  } = useList();

  const [pride, setPride] = useState([
    {
      id: "1",
      fac: "ФКТиПМ",
      choose: "01.02.03",
      name: "1",
      students: "96",
      mon: "40",
      dog: "40",
      potoc: "1",
      group: "4",
      pod: "8",
      prof: "3",
      prac: "4",
    },
    {
      id: "2",
      fac: "ФКТиПМ",
      choose: "03.02.13",
      name: "2",
      students: "56",
      mon: "40",
      dog: "10",
      potoc: "1",
      group: "4",
      pod: "8",
      prof: "3",
      prac: "4",
    },
    {
      id: "3",
      fac: "ЮРФАК",
      choose: "04.07.05",
      name: "3",
      students: "73",
      mon: "40",
      dog: "20",
      potoc: "1",
      group: "4",
      pod: "8",
      prof: "3",
      prac: "4",
    },
  ]);

  const handlePride = (id) => {
    const updatedLessons = pride.filter((item) => item.id !== id);
    setPride(updatedLessons);
  };

  const handleButtonClick = () => {
    setIsContForm(true);
  };

  return (
    <div
      className={`h-[90%] ${
        lessons.length === 0 ? "flex items-center justify-center" : ""
      }`}
    >
      <div
        onClick={handleToggleSideBar}
        className={`none bg-[#F1F5F9] ${
          isSideBarVisible === false
            ? "left-0 duration-500 transition-all"
            : "top-[45%] left-[325px]"
        } ${
          lessons.length !== 0 ? "top-[45%]" : ""
        } rotate-90 text-black absolute w-[64px] h-[64px] rounded-full flex items-center justify-center cursor-pointer active:scale-95 duration-300`}
      >
        <IoIosArrowDown
          className={`${
            isSideBarVisible ? "" : "rotate-180"
          } text-black text-[36px]`}
        />
      </div>
      {item !== "2" && lessons.length === 0 ? (
        <div className="shadowWhite text-[#424242] text-[14px] font-nuni font-[700] w-[262px] h-[55px] flex items-center justify-center">
          Записей нет
        </div>
      ) : (
        <div className="flex flex-col w-full h-full">
          {item !== "2"
            ? lessons.map((boot) => (
                <div
                  onClick={() => handleActiveMain(boot.id)}
                  key={boot.id}
                  className={`${
                    activeMain === boot.id ? "mainShadow" : ""
                  } flex h-[70px] border-t-2 px-[20px] w-full`}
                >
                  <div className=" flex items-center">
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-24">
                      ФКТиПМ
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-48 pl-6">
                      {boot.title}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-20 pl-5">
                      {boot.direction.date}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-16 pl-[85px]">
                      {boot.direction.name}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-3 pl-32">
                      {boot.course}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-28">
                      {boot.lectures}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-32">
                      {boot.labs}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-[130px]">
                      {boot.labs}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-[130px]">
                      {boot.practice}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-[115px]">
                      {boot.caf}/{boot.rucfac}
                    </span>
                  </div>
                  {activeMain === boot.id && item !== "3" ? (
                    <div className={`absolute  flex gap-6 right-0 top-16 p-2`}>
                      <button className="list w-[160px] h-[33px] justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2">
                        Изменить
                        <FaPencil className="text-black text-[16px]" />
                      </button>
                      <button
                        onClick={() => handleDelete(boot.id)}
                        className="list w-[160px] h-[33px] justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2"
                      >
                        Удалить <TfiTrash className="text-black text-[16px]" />
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                  {activeMain === boot.id && item === "3" ? (
                    <div className={`absolute  flex gap-6 right-6 top-4 p-2`}>
                      <button
                        onClick={() => handleButtonClick()} // Add parentheses to invoke the function
                        className="justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2"
                      >
                        <FaPencil className=" text-[16px] text-primary" />
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                  {isContForm && (
                    <ContForm
                      isOpen={isContForm}
                      onRequestClose={() => setIsContForm(false)}
                    />
                  )}
                </div>
              ))
            : pride.map((boot) => (
                <div
                  onClick={() => handleActiveMain(boot.id)}
                  key={boot.id}
                  className={`${
                    activeMain === boot.id ? "mainShadow" : ""
                  } flex h-[70px] border-t-2 px-[8px] w-full`}
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
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[124px]">
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
              ))}
        </div>
      )}
    </div>
  );
};

export default ListSubject;
