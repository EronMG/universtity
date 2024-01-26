import "../index.css";
import { PiCloudArrowDownThin } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { useList } from "../context/ListContext.jsx";
import DisciplineForm from "./DisciplineForm.jsx";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PracticeForm from "./PracticeForm.jsx";
import GAIform from "./GAIform.jsx";
import SpecialForm from "./SpecialForm.jsx";
import { BsFiletypeXls } from "react-icons/bs";
import { useDepartment } from "../context/DepartmentContext.jsx";
import styles from "../styles.js";
const ListSideBar = () => {
  const {
    zap,
    handleZap,
    up,
    handleUp,
    lessons,
    isModalOpen,
    setIsModalOpen,
    isPracticeFormOpen,
    setIsPracticeFormOpen,
    isGAIFormOpen,
    setIsGAIFormOpen,
    isSpecialFormOpen,
    setIsSpeacilFormOpen,
    upArr,
    item,
  } = useList();
  const { selectedCaffedra } = useDepartment();
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
    } else if (id === "2") {
      // Открываем форму практики
      setIsPracticeFormOpen(true);
    } else if (id === "3") {
      // Открываем форму практики
      setIsGAIFormOpen(true);
    } else {
      // Открываем форму практики
      setIsSpeacilFormOpen(true);
    }
  };

  const handleAddDiscipline = (discipline) => {
    // Добавьте вашу логику для добавления дисциплины
    console.log("Добавлена дисциплина:", discipline);
  };
  return (
    <>
      <div
        className={`side pt-[16px] pb-[11px] pl-[8px] pr-[10px] h-full ${
          item === "3" ? "border-[1px] border-gray-400" : ""
        }`}
      >
        {item === "3" ? (
          <div className="flex flex-col justify-center items-center gap-4">
            <div
              className={`shadowWhite w-[295px] h-[57px] flex items-center justify-center ${styles.text}`}
            >
              {selectedCaffedra}
            </div>
            <div className="shadowMain px-3 py-2">
              <div className="shadowSecond px-3 py-2">
                <button
                  className="shadowThird text-[#74719E] text-[20px] font-nuni font-[700] flex items-center 
          gap-[18px] rounded-[32px] border-[1px] border-gray-400 h-[55px] w-[247px] justify-start px-[20px] active:scale-95 duration-300"
                >
                  <BsFiletypeXls />
                  Экспорт в xls
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={`${item === "2" ? "flex flex-col gap-3" : "hidden"}`}>
          <button className="shadowWhite flex items-center justify-center gap-3 px-2 h-14 text-[#74719E] font-nuni font-bold text-xl w-[283px]">
            <IoCloudDownloadOutline className="text-[30px]" />
            Загрузить контингент
          </button>
          <button className="shadowWhite flex items-center justify-center gap-3 px-2 h-14 text-[#74719E] font-nuni font-bold text-xl w-[283px]">
            <IoCloudDownloadOutline className="text-[30px]" />
            Практики и курсовые
          </button>
        </div>
        <div
          className={`shadowSecond py-[17px] pr-[20px] pl-[9px] flex flex-col justify-between h-full relative ${
            item === "3" || item === "2" ? "hidden" : ""
          }`}
        >
          <div className="flex flex-col gap-3">
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
                className={`shadowSecond py-[12px]  px-[7px] flex flex-col gap-[10px] absolute top-[215px] left-0 mx-[15px] z-0`}
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
                {isPracticeFormOpen && (
                  <PracticeForm
                    isOpen={isPracticeFormOpen}
                    onRequestClose={() => setIsPracticeFormOpen(false)}
                  />
                )}
                {isGAIFormOpen && (
                  <GAIform
                    isOpen={isGAIFormOpen}
                    onRequestClose={() => setIsGAIFormOpen(false)}
                  />
                )}
                {isSpecialFormOpen && (
                  <SpecialForm
                    isOpen={isSpecialFormOpen}
                    onRequestClose={() => setIsSpeacilFormOpen(false)}
                  />
                )}
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
          <Link
            to="/versions"
            className={`shadowWhite font-nuni font-[700] text-2xl h-[42px] text-[#6C6993] active:scale-95 duration-300 flex items-center justify-center ${
              item === "2" ? "hidden" : ""
            }`}
          >
            Назад
          </Link>
        </div>
      </div>
    </>
  );
};

export default ListSideBar;
