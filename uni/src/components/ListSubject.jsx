import { useList } from "../context/ListContext";
import { TfiTrash } from "react-icons/tfi";
import { FaPencil } from "react-icons/fa6";
import { useDepartment } from "../context/DepartmentContext";
import { IoIosArrowDown } from "react-icons/io";
import ContForm from "./ContForm";
import { useState } from "react";
import ThirdForm from "./ThirdForm";
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
    setIsThirdForm,
    isThirdForm,
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

  // eslint-disable-next-line no-unused-vars
  const [third, setThird] = useState([
    {
      id: "1",
      fac: "Руководство ВКР бакалавр",
      choose: "Б1.О.01",
      name: "ФИИТ",
      students: "4",
      mon: "4",
      dog: "34",
      potoc: "55",
    },
    {
      id: "2",
      fac: "Руководство магистерской ...",
      choose: "Б2.В.02...",
      name: "ФИИТ",
      students: "4",
      mon: "8",
      dog: "0",
      potoc: "0",
    },
    {
      id: "3",
      fac: "Руководство ВКР бакалавр",
      choose: "Б1.О.01",
      name: "ФИИТ",
      students: "4",
      mon: "4",
      dog: "34",
      potoc: "55",
    },
    {
      id: "4",
      fac: "Руководство ВКР бакалавр",
      choose: "Б1.О.01",
      name: "ФИИТ",
      students: "4",
      mon: "4",
      dog: "34",
      potoc: "55",
    },
    {
      id: "5",
      fac: "Руководство ВКР бакалавр",
      choose: "Б1.О.01",
      name: "ФИИТ",
      students: "4",
      mon: "4",
      dog: "34",
      potoc: "55",
    },
  ]);

  const handlePride = (id) => {
    const updatedLessons = pride.filter((item) => item.id !== id);
    setPride(updatedLessons);
  };

  const handleButtonClick = () => {
    setIsContForm(true);
  };

  const handleButtonClickThird = () => {
    setIsThirdForm(true);
  };
  return (
    <div
      className={`h-[90%] ${
        lessons.length === 0 ? "flex items-center justify-center" : ""
      } w-full`}
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
      {item !== "2" && lessons.length === 0 && third.length === 0 ? (
        <div className="shadowWhite text-[#424242] text-[14px] font-nuni font-[700] w-[262px] h-[55px] flex items-center justify-center">
          Записей нет
        </div>
      ) : (
        <div className="flex flex-col w-full h-full">
          {item === "1"
            ? lessons.map((boot) => (
                <div
                  onClick={() => handleActiveMain(boot.id)}
                  key={boot.id}
                  className={`${
                    activeMain === boot.id ? "mainShadow" : ""
                  } flex h-[70px] px-[20px] w-full`}
                >
                  <div className=" flex items-center w-full">
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

                  {isContForm && (
                    <ContForm
                      isOpen={isContForm}
                      onRequestClose={() => setIsContForm(false)}
                    />
                  )}
                </div>
              ))
            : item === "2"
            ? pride.map((boot) => (
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
              ))
            : item === "3"
            ? third.map((boot) => (
                <div
                  onClick={() => handleActiveMain(boot.id)}
                  key={boot.id}
                  className={`${
                    activeMain === boot.id ? "mainShadow" : ""
                  } flex h-[70px] px-[8px] pl-10 `}
                >
                  <div className=" flex items-center gap-[15px]">
                    <div
                      onClick={handleButtonClickThird}
                      className={`shadowSecond text-[#6C6993] text-xl font-nuni font-bold flex justify-center items-center w-7 h-7 rounded-full cursor-pointer`}
                    >
                      <span className="relative bottom-1"> ...</span>
                    </div>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[169px]">
                      {boot.fac}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[108px]">
                      {boot.choose}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[176px]">
                      {boot.name}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[80px]">
                      {boot.students}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[121px]">
                      {boot.mon}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[83px]">
                      {boot.dog}
                    </span>
                    <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[158px]">
                      {boot.potoc}
                    </span>
                  </div>

                  {isThirdForm && (
                    <ThirdForm
                      isOpen={isThirdForm}
                      onRequestClose={() => setIsThirdForm(false)}
                    />
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
                </div>
              ))
            : ""}
        </div>
      )}
    </div>
  );
};

export default ListSubject;
