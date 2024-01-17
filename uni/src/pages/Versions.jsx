import { useCallback, useState } from "react";
import "../index.css";
import styles from "../styles";
import { BsFiletypeXls } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDepartment } from "../context/DepartmentContext";

const Versions = () => {
  const [activeMain, setActiveMain] = useState({});
  const { selectedCaffedra } = useDepartment();
  const handleActiveMain = useCallback(
    (id) => setActiveMain((prevId) => (prevId === id ? null : id)),
    [setActiveMain]
  );

  const arrVers = [
    {
      id: "1",
      name: "Версия 1.0.0",
      date: "2023.09.10",
      year: "2023",
      redact: <FiPlus />,
      icon: <FiPlus />,
      comments: "...",
    },
    {
      id: "2",
      name: "Версия 2.0.0",
      date: "2023.10.10",
      year: "2023",
      redact: <FiPlus />,
      icon: <FiPlus />,
      comments: "",
    },
    {
      id: "3",
      name: "Версия 1.0.0",
      date: "2023.10.10",
      year: "2023",
      redact: <FiPlus />,
      icon: <FiPlus />,
      comments: "Закончить за...",
    },
  ];

  const arrButton = [
    {
      id: "1",
      title: "Название",
    },
    {
      id: "2",
      title: "Дата последнего изменения",
    },
    {
      id: "3",
      title: "Год",
    },
    {
      id: "6",
      title: "Возможность редактирования",
    },
    {
      id: "4",
      title: "Закреплённость в УМУ",
    },
    {
      id: "5",
      title: "Комментарии",
    },
  ];

  function getButtonStyle(id) {
    switch (id) {
      case "1":
        return "w-[213px]"; // Замените "buttonStyle1" на ваш класс стиля для кнопки с id "1"
      case "2":
        return "";
      case "3":
        return "w-[98px]";
      case "4":
        return "";
      case "5":
        return "w-[186px]"; // Замените "buttonStyle2" на ваш класс стиля для кнопки с id "2"
      // Добавьте дополнительные кейсы для других id
      default:
        return ""; // Возвращайте пустую строку или другой класс по умолчанию
    }
  }

  return (
    <div className="shadowSecond mx-[29.5px] mt-[35px] mb-[22px]">
      <div>
        <div className="flex flex-col gap-[11px] px-[15px] pt-[11px]">
          <div className="max-w-[289px]">
            <div
              className={`shadowWhite w-[289px] h-[57px] flex items-center justify-center ${styles.text}`}
            >
              {selectedCaffedra}
            </div>
          </div>
          <div className="flex items-center gap-[21px]">
            {arrButton.map((item) => (
              <button
                key={item.id}
                className={`${
                  styles.textSecond
                } text-xl shadowSecond text-center max-w-[230px] h-[55px] ${getButtonStyle(
                  item.id
                )} active:scale-95 duration-300`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t-2 mt-[10px] h-[67.6vh]">
          {arrVers.map((item) => (
            <Link
              to="/list"
              key={item.id}
              onClick={() => handleActiveMain(item.id)}
              className={` ${
                activeMain === item.id ? "mainShadow" : ""
              } border-b-2 flex pr-[50px] items-center h-[70px]  gap-[21px]`}
            >
              <span
                className={`${styles.textSecond} text-[24px] w-[213px] text-center`}
              >
                {item.name}
              </span>
              <span
                className={`${styles.textSecond} text-[24px] w-[230px] text-center`}
              >
                {item.date}
              </span>
              <span
                className={`${styles.textSecond} text-[24px] w-[98px] text-center`}
              >
                {item.year}
              </span>
              <span className="text-[#7B61FF] text-[34px]  w-[236px] text-center flex justify-center">
                {item.redact}
              </span>
              <span className="text-[#7B61FF] text-[34px]  w-[236px] text-center flex justify-center">
                {item.icon}
              </span>
              <span
                className={`${styles.textSecond} text-[24px] w-[200px] text-center `}
              >
                {item.comments}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pr-[20px] pb-[31px] pt-[47px]">
        <Link
          to="/"
          className="ml-[30px] white text-[#74719E] text-[20px] font-nuni font-[700] flex items-center 
          rounded-[32px] bg-white h-[55px] w-[146px]  px-[20px] justify-center active:scale-95 duration-300"
        >
          Назад
        </Link>
        <div className="flex items-center  gap-[32px]">
          <button
            className="white text-[#74719E] text-[20px] font-nuni font-[700] flex items-center 
          gap-[18px] rounded-[32px] bg-white h-[55px] w-[257px] justify-start px-[20px] active:scale-95 duration-300"
          >
            <BsFiletypeXls />
            Экспорт в xls
          </button>
          <button
            className="white flex items-center gap-[5px] text-[#7B61FF] text-[20px] font-nuni 
          font-[700] rounded-[32px] bg-white h-[55px] w-[246px] justify-start px-[20px] active:scale-95 duration-300"
          >
            <FiPlus />
            Добавить версию
          </button>
        </div>
      </div>
    </div>
  );
};

export default Versions;
