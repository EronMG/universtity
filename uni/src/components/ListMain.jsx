import "../index.css";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

const ListMain = () => {
  const buttons = [
    {
      label: "Факультет",
      id: "1",
    },
    {
      label: "Наименование",
      id: "2",
    },
    {
      label: "Напр код",
      id: "3",
    },
    {
      label: "Напр название",
      id: "4",
    },
    {
      label: "Курс",
      id: "5",
    },
    {
      label: "Лекции",
      title: "акад часы",
      id: "6",
    },
    {
      label: "Лаб",
      title: "акад часы",
      id: "7",
    },
  ];

  function getButtonStyle(id) {
    switch (id) {
      case "1":
        return "w-[122px]"; // Замените "buttonStyle1" на ваш класс стиля для кнопки с id "1"
      case "2":
        return "w-[151px]";
      case "3":
        return "w-[108px]";
      case "4":
        return "w-[108px]";
      case "5":
        return "w-[83px]";
      case "6":
        return "w-[109px]";
      case "7":
        return "w-[109px]";
      default:
        return ""; // Возвращайте пустую строку или другой класс по умолчанию
    }
  }

  return (
    <div className="sd py-[14px] px-[12px] w-full mt-[6px]">
      <div className="shadowSecond h-full">
        <div className="px-[10px] pt-[13px] flex justify-between">
          <div className="flex gap-[11px]">
            {buttons.map((item) => (
              <button
                className={`shadowSecond flex flex-col items-center justify-center text-primary text-[18px] font-nuni font-[700] h-[55px] ${getButtonStyle(
                  item.id
                )}`}
                key={item.id}
              >
                {item.label}
                <span className="text-[#424242] text-[15px]">{item.title}</span>
              </button>
            ))}
          </div>
          <button className="white  h-[41px] justify-center w-[158px] text-primary text-[16px] font-nuni font-[700] flex items-center  gap-[11px]">
            <CiFilter className="text-[22px]" /> Фильтр{" "}
            <IoIosArrowForward className="text-[22px] rotate-90" />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ListMain;
