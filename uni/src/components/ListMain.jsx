import { useDepartment } from "../context/DepartmentContext";
import { useList } from "../context/ListContext";
import "../index.css";
import ListFilter from "./ListFilter";
import ListSubject from "./ListSubject";

const ListMain = () => {
  const { item } = useList();
  const { isSideBarVisible } = useDepartment();
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
      label: "Факультет",
      id: "10",
    },
    {
      label: "Направление",
      id: "11",
    },
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

  const buttonsThr = [
    {
      label: "Дисциплина",
      id: "1",
    },
    {
      label: "Код",
      id: "2",
    },
    {
      label: "Специальность",
      id: "3",
    },
    {
      label: "Курс",
      id: "4",
    },
    {
      label: "Семестр",
      id: "5",
    },
    {
      label: "Часы",
      id: "6",
    },
    {
      label: "Контингент",
      id: "7",
    },
  ];
  function getButtonStyle(id, version) {
    const styles = {
      1: { 1: "w-[122px]", 2: "w-[95px]", 3: "w-[169px]" },
      2: { 1: "w-[151px]", 2: "w-[182px]", 3: "w-[108px]" },
      3: { 1: "w-[108px]", 2: "w-[110px]", 3: "w-[176px]" },
      4: { 1: "w-[108px]", 2: "w-[110px]", 3: "w-[80px]" },
      5: { 1: "w-[83px]", 2: "w-[150px]", 3: "w-[121px]" },
      6: { 1: "w-[109px]", 2: "w-[104px]", 3: "w-[83px]" },
      7: { 1: "w-[109px]", 2: "w-[129px]", 3: "w-[158px]" },
      8: { 1: "w-[124px]", 2: "w-[124px]", 3: "" },
      9: { 1: "w-[108px]", 2: "w-[177px]", 3: "" },
      10: { 1: "w-[122px]", 2: "w-[122px]", 3: "" },
      11: { 2: "w-[133px]" },
    };

    return styles[id]?.[version] || "";
  }
  return (
    <div className="sd py-[14px] px-[12px] w-full mt-[6px]">
      <div
        className={`shadowSecond h-full overflow-scroll   ${
          window.innerWidth === 1440 && isSideBarVisible === true
            ? "max-w-[1060px]"
            : isSideBarVisible === true
            ? "max-w-[1550px]"
            : ""
        }`}
      >
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
        <div className={`px-[10px] pt-[13px] flex justify-between pb-[10px]`}>
          <div
            className={`flex gap-[15px] px-1 pt-[3px] ${
              item === "3" ? "pl-10" : ""
            }`}
          >
            {item === "1"
              ? buttons.map((item) => (
                  <button
                    className={`shadowSecond flex flex-col items-center justify-center text-primary text-lg font-nuni font-[700] h-[55px]  ${getButtonStyle(
                      item.id,
                      1
                    )}`}
                    key={item.id}
                  >
                    {item.label}
                    <span className="text-[#424242] text-[15px]">
                      {item.title}
                    </span>
                  </button>
                ))
              : item === "2"
              ? buttonsSec.map((item) => (
                  <button
                    className={`shrink-0 shadowSecond flex flex-col items-center justify-center text-primary text-lg font-nuni font-[700] h-[55px]  ${getButtonStyle(
                      item.id,
                      2
                    )}`}
                    key={item.id}
                  >
                    {item.label}
                  </button>
                ))
              : item === "3"
              ? buttonsThr.map((item) => (
                  <button
                    className={`shadowSecond flex flex-col items-center justify-center text-primary text-lg font-nuni font-[700] h-[55px]  ${getButtonStyle(
                      item.id,
                      3
                    )}`}
                    key={item.id}
                  >
                    {item.label}
                  </button>
                ))
              : ""}
          </div>
          <ListFilter />
        </div>
        <ListSubject />
      </div>
    </div>
  );
};

export default ListMain;
