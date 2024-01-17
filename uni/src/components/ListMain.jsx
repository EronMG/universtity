import "../index.css";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { useList } from "../context/ListContext";
import { TfiTrash } from "react-icons/tfi";
import { FaPencil } from "react-icons/fa6";

const ListMain = () => {
  const { handleActiveMain, activeMain, handleDelete, lessons } = useList();

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

  const spanWidths = {
    fac: { width: "100px", "padding-left": "0px" },
    name: { width: "169px", "padding-left": "19px" },
    code: { width: "82px", "padding-left": "30px" },
    title: { width: "61px", "padding-left": "75px" },
    course: { width: "12px", "padding-left": "134px" },
    lec: { width: "24px", "padding-left": "97px" },
    lab: { width: "24px", "padding-left": "120px" },
  };

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
        <div className="px-[10px] pt-[13px] flex justify-between pb-[10px]">
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
        <div className="h-[90%] overflow-scroll">
          {lessons.length === 0 ? (
            <div className="shadowWhite text-[#424242] text-[14px] font-nuni font-[700] w-[262px] h-[55px] flex items-center justify-center">
              Записей нет
            </div>
          ) : (
            <div className="flex flex-col w-full">
              {lessons.map((item) => (
                <div
                  onClick={() => handleActiveMain(item.id)}
                  key={item.id}
                  className={`${
                    activeMain === item.id ? "mainShadow" : ""
                  } flex h-[70px] border-t-2 pl-[20px] w-full`}
                >
                  <div className="w-[852px] flex items-center">
                    {Object.keys(item).map(
                      (key) =>
                        key !== "id" && (
                          <span
                            style={spanWidths[key]}
                            key={key}
                            className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center"
                          >
                            {item[key]}
                          </span>
                        )
                    )}
                  </div>
                  {activeMain === item.id && (
                    <div className="absolute right-0 -top-12 p-2 flex gap-6">
                      <button className="list w-[160px] h-[33px] justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2">
                        Изменить
                        <FaPencil className="text-black text-[16px]" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="list w-[160px] h-[33px] justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2"
                      >
                        Удалить <TfiTrash className="text-black text-[16px]" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListMain;
