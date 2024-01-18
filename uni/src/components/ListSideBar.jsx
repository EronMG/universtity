import "../index.css";
import { PiCloudArrowDownThin } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { useList } from "../context/ListContext.jsx";
import DisciplineForm from "./DisciplineForm.jsx";
import { useState } from "react";
const ListSideBar = () => {
  const { zap, handleZap, up, handleUp, lessons } = useList();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDisciplineClick = (disciplineData) => {
    const newDiscipline = {
      id: lessons.length + 1,
      fac: disciplineData.fac,
      title: disciplineData.title,
      course: disciplineData.course,
      // Add other properties as needed
    };
    handleAddDiscipline(newDiscipline);
  };

  const zapButtons = [
    { id: "1", name: "Дисциплина" },
    { id: "2", name: "Практика" },
    { id: "3", name: "Государственная Итоговая Аттестация" },
    { id: "4", name: "Специальная дисциплина" },
  ];

  const upArr = [
    {
      id: "1",
      name: "2023 Фундаментальная инф...",
    },
    {
      id: "2",
      name: "2023 Фундаментальная инф...",
    },
  ];

  const buttons = [
    {
      label: "Загрузить УП",
      width: 262,
      icon: <PiCloudArrowDownThin className="text-[##74719E] text-[40px]" />,
      id: "1",
    },
    {
      label: "Загруженные УП",
      width: 262,
      icon: (
        <IoIosArrowForward
          className={`text-[##74719E] text-[40px] ${
            up === true ? "rotate-90" : ""
          }`}
        />
      ),
      id: "2",
    },
    {
      label: "Создать запись",
      width: 262,
      icon: (
        <IoIosArrowForward
          className={`${
            zap === true ? "rotate-90" : ""
          } text-[##74719E] text-[40px]`}
        />
      ),
      id: "3",
    },
  ];

  const handleButtonClick = (id) => {
    if (id === "1") {
      setIsModalOpen(true);
    }
  };

  const handleAddDiscipline = (discipline) => {
    // Добавьте вашу логику для добавления дисциплины
    console.log("Добавлена дисциплина:", discipline);
  };
  return (
    <div className="side pt-[16px] pb-[11px] pl-[8px] pr-[10px] h-full">
      <div className="shadowSecond py-[17px] pr-[20px] pl-[9px] flex flex-col gap-[10px] h-full relative">
        {buttons.map((item) => (
          <div key={item.id} className="relative">
            <button
              onClick={() => {
                if (item.id === "3") {
                  handleZap(); // For the third button, open zap
                } else if (item.id === "2") {
                  handleUp(); // For the second button, open up
                }
              }}
              className={`shadowWhite text-[#74719E] text-[20px] font-nuni font-[700] flex items-center 
                h-[55px] w-[262px] px-[10px] gap-[12px] active:scale-95 duration-300 ${
                  item.id === "3" && zap === true ? "active" : null
                } ${item.id === "2" && up === true ? "active" : null}`}
              style={
                up && item.id === "3" && upArr.length
                  ? { position: "absolute", top: "165px" }
                  : {}
              }
            >
              {item.icon}
              {item.label}
            </button>
          </div>
        ))}
        {zap === true ? (
          <div
            className={`shadowSecond py-[12px]  px-[7px] flex flex-col gap-[10px] absolute top-[215px] left-0 mx-[15px]`}
          >
            {zapButtons.map((item) => (
              <button
                key={item.id}
                onClick={() => handleButtonClick(item.id)}
                className="shadowWhite font-nuni font-[700] text-[16px] h-[52px] text-[#6C6993] active:scale-95 duration-300 "
              >
                {item.name}
              </button>
            ))}
            <DisciplineForm
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
              onAddDiscipline={handleAddDisciplineClick}
            />
          </div>
        ) : null}
        {up === true ? (
          <div className="shadowSecond py-[12px] px-[7px] flex flex-col gap-[10px]">
            {upArr.length > 0 ? (
              upArr.map((item) => (
                <button
                  key={item.id}
                  className="shadowWhite font-nuni font-[700] text-[16px] h-[52px] text-[#6C6993] active:scale-95 duration-300 "
                >
                  {item.name}
                </button>
              ))
            ) : (
              <div className="shadowWhite h-[55px] flex justify-center items-center">
                <span className="text-[#D45C5C] text-[18px] font-nuni font-[700]">
                  Нет загруженных УП
                </span>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ListSideBar;
