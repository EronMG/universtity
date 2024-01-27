import { useList } from "../context/ListContext";
import "../index.css";
import ListFilter from "./ListFilter";
import ListSubject from "./ListSubject";

const ListMain = () => {
  const { item } = useList();
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
    {
      label: "Рук  курсовой/пр",
      id: "8",
    },
    {
      label: "Практика",
      id: "9",
    },
    {
      label: "Рук  фак/кафедр",
      id: "10",
    },
  ];

  const buttonsSec = [
    {
      label: "Курс",
      id: "1",
    },
    {
      label: "Всего студентов",
      id: "2",
    },
    {
      label: "Бюджет",
      id: "3",
    },
    {
      label: "Договор",
      id: "4",
    },
    {
      label: "Кол-во лек. потоков",
      id: "5",
    },
    {
      label: "Кол-во групп",
      id: "6",
    },
    {
      label: "Кол-во подгрупп",
      id: "7",
    },
    {
      label: "Кол-во профилей",
      id: "8",
    },
    {
      label: "Кол-во групп для практики",
      id: "9",
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
      case "8":
        return "w-[124px]";
      case "9":
        return "w-[108px]";
      case "10":
        return "w-[122px]";
      default:
        return ""; // Возвращайте пустую строку или другой класс по умолчанию
    }
  }
  function getButtonStyle2(id) {
    switch (id) {
      case "1":
        return "w-[95px]"; // Замените "buttonStyle1" на ваш класс стиля для кнопки с id "1"
      case "2":
        return "w-[182px]";
      case "3":
        return "w-[110px]";
      case "4":
        return "w-[110px]";
      case "5":
        return "w-[150px]";
      case "6":
        return "w-[104px]";
      case "7":
        return "w-[129px]";
      case "8":
        return "w-[124px]";
      case "9":
        return "w-[177px]";
      default:
        return ""; // Возвращайте пустую строку или другой класс по умолчанию
    }
  }
  return (
    <div className="sd py-[14px] px-[12px] w-full mt-[6px]">
      <div className="shadowSecond h-full">
        {item === "3" ? (
          <div className="flex justify-between border-b-[1px] border-primary w-[601px] mx-[30px] pt-[10px]">
            <span className="text-primary font-nuni font-bold text-xl">
              Название версии
            </span>
            <span className="text-[#6C6993] font-nuni font-bold text-xl">
              Объемы 2022-2023 (август)
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="px-[10px] pt-[13px] flex justify-between pb-[10px] ">
          <div className="flex gap-[15px]">
            {item !== "2"
              ? buttons.map((item) => (
                  <button
                    className={`shadowSecond flex flex-col items-center justify-center text-primary text-lg font-nuni font-[700] h-[55px]  ${getButtonStyle(
                      item.id
                    )}`}
                    key={item.id}
                  >
                    {item.label}
                    <span className="text-[#424242] text-[15px]">
                      {item.title}
                    </span>
                  </button>
                ))
              : buttonsSec.map((item) => (
                  <button
                    className={`shadowSecond flex flex-col items-center justify-center text-primary text-lg font-nuni font-[700] h-[55px]  ${getButtonStyle2(
                      item.id
                    )}`}
                    key={item.id}
                  >
                    {item.label}
                  </button>
                ))}
          </div>
          <ListFilter />
        </div>
        <ListSubject />
      </div>
    </div>
  );
};

export default ListMain;
