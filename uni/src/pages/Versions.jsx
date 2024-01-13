import Caffedra from "../components/Caffedra";
import "../index.css";
import styles from "../styles";
import { BsFiletypeXls } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const Versions = () => {
  const arrVers = [
    {
      id: "1",
      name: "Версия 1.0.0",
      date: "2023.09.10",
      year: "2023",
      icon: <FiPlus />,
      comments: "...",
    },
    {
      id: "2",
      name: "Версия 2.0.0",
      date: "2023.10.10",
      year: "2023",
      icon: <FiPlus />,
      comments: "",
    },
    {
      id: "3",
      name: "Версия 1.0.0",
      date: "2023.10.10",
      year: "2023",
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
            <Caffedra />
          </div>
          <div className="flex items-center gap-[21px]">
            {arrButton.map((item) => (
              <button
                key={item.id}
                className={`${
                  styles.textSecond
                } text-xl shadowSecond text-center max-w-[230px] h-[55px] ${getButtonStyle(
                  item.id
                )}`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t-2 mt-[10px]">
          {arrVers.map((item) => (
            <div
              key={item.id}
              className="border-b-2 flex pl-[51px] pr-[300px] items-center h-[70px] pt-[15px]"
            >
              <span className={`${styles.textSecond} text-[24px]`}>
                {item.name}
              </span>
              <span className={`${styles.textSecond} text-[24px] pl-[105px]`}>
                {item.date}
              </span>
              <span className={`${styles.textSecond} text-[24px] pl-[92px]`}>
                {item.year}
              </span>
              <span className="text-[#7B61FF] text-[34px]  pl-[147px]">
                {item.icon}
              </span>
              <span
                className={`${styles.textSecond} text-[24px] w-[330px] text-center  pl-[107px]`}
              >
                {item.comments}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-[32px] justify-end pr-[20px] pb-[31px] pt-[47px]">
        <button
          className="white text-[#74719E] text-[20px] font-nuni font-[700] flex items-center 
          gap-[18px] rounded-[32px] bg-white h-[55px] w-[257px] justify-start px-[20px]"
        >
          <BsFiletypeXls />
          Экспорт в xls
        </button>
        <button
          className="white flex items-center gap-[5px] text-[#7B61FF] text-[20px] font-nuni 
          font-[700] rounded-[32px] bg-white h-[55px] w-[246px] justify-start px-[20px]"
        >
          <FiPlus />
          Добавить версию
        </button>
      </div>
    </div>
  );
};

export default Versions;
