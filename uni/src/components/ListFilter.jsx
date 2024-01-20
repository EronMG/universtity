import "../index.css";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { useList } from "../context/ListContext";
import { FaPencil } from "react-icons/fa6";
import styles from "../styles";

const ListFilter = () => {
  const { handleFilter, handleCourse, course, filter, arrcourse, isModalOpen } =
    useList();

  const arrFilter = [
    {
      id: "1",
      name: "Курс",
      title: "2",
    },
    {
      id: "2",
      name: "Семестр",
      title: "",
    },
    {
      id: "3",
      name: "Направление",
      title: <IoIosArrowForward className="text-primary text-[30px]" />,
    },
    {
      id: "4",
      name: "Факультет",
      title: <IoIosArrowForward className="text-primary text-[30px]" />,
    },
  ];

  return (
    <div className="relative" style={{ position: "relative" }}>
      <button
        onClick={handleFilter}
        className={`${
          filter === true
            ? "filterm w-[270px] gap-[25px]"
            : "white w-[158px] gap-[11px]"
        }  h-[41px] justify-center  text-primary text-[16px] font-nuni font-[700] items-center z-20 active:scale-95 duration-300
        ${isModalOpen === true ? "hidden" : "flex"} `}
        style={{ position: "relative" }}
      >
        <CiFilter className="text-[22px]" /> Фильтр{" "}
        <IoIosArrowForward className="text-[22px] rotate-90" />
      </button>
      {filter && (
        <div className="z-10 shadowWhite absolute -left-[0px] px-[12px] pt-[40px] pb-[20px] w-[270px] -top-[0px]">
          <div className="flex-col flex">
            {arrFilter.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b-[3px] py-[7px] gap-[15px]"
              >
                <span
                  className={`text-[#74719E] text-[16px] font-nuni font-[700]`}
                >
                  {item.name}
                </span>
                <div
                  onClick={item.id === "1" ? handleCourse : ""}
                  className={`fil rounded-[10px] w-[102.2px] flex justify-center items-center h-[30.9px] text-[#74719E] text-[16px] font-nuni font-[700] ${
                    course === true && item.id === "1" ? "pur" : ""
                  } cursor-pointer`}
                >
                  {item.title}
                </div>
                {course && item.id === "1" ? (
                  <div className="shadowThird absolute px-[8px] py-[18.5px] w-[289px] -left-[300px] top-[100px]">
                    {arrcourse.map((item) => (
                      <div
                        key={item.id}
                        className={`${styles.text} flex gap-5 items-center bg-white border-2 w-full justify-center h-[57px]`}
                      >
                        {item.date}
                        <FaPencil className="text-[20px] text-textSecond cursor-pointer" />
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
            <span className="text-[#74719E] text-[16px] font-nuni font-[700] max-w-[120px]">
              Бакалвриат Магистратура
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListFilter;
