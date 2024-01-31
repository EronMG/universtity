import "../index.css";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { useList } from "../context/ListContext";
import { FaPencil } from "react-icons/fa6";
import styles from "../styles";
import { useDepartment } from "../context/DepartmentContext";

const ListFilter = () => {
  const {
    handleFilter,
    handleCourse,
    course,
    filter,
    arrcourse,
    isModalOpen,
    isPracticeFormOpen,
    isGAIFormOpen,
    isSpecialFormOpen,
    handleFac,
    fac,
    isContForm,
    item,
    isThirdForm,
    isFourthForm,
    isContForms,
    handleInputChange,
    inputValue,
    inputValue2,
    inputValue3,
    handleInputChange2,
    handleInputChange3,
    inputValue4,
    handleInputChange4,
  } = useList();
  const { arrCaf } = useDepartment();
  const arrFilter = [
    {
      id: "1",
      name: "Курс",
      title: "2",
    },
    {
      id: "2",
      name: "Семестр",
      title: "0",
    },
    {
      id: "3",
      name: "Направление",
      title: (
        <IoIosArrowForward
          className={`text-primary text-[30px] ${course && "rotate-180"}`}
        />
      ),
    },
    {
      id: "4",
      name: "Факультет",
      title: (
        <IoIosArrowForward
          className={`text-primary text-[30px] ${fac && "rotate-180"}`}
        />
      ),
    },
    {
      id: "5",
      name: "Бакалвриат Магистратура",
      title: <IoIosArrowForward className={`text-primary text-[30px]`} />,
    },
  ];
  const slice = [
    {
      id: "1",
      name: "Курс",
      title: "2",
    },
    {
      id: "2",
      name: "Семестр",
      title: "0",
    },
    {
      id: "3",
      name: "Направление",
      title: (
        <IoIosArrowForward
          className={`text-primary text-[30px] ${course && "rotate-180"}`}
        />
      ),
    },

    {
      id: "5",
      name: "Бакалвриат Магистратура",
      title: <IoIosArrowForward className={`text-primary text-[30px]`} />,
    },
  ];
  return (
    <div
      className={`relative flex justify-center`}
      style={{ position: "relative" }}
    >
      <button
        onClick={handleFilter}
        className={`${
          filter === true
            ? "filterm w-[158px] gap-[11px]"
            : "white w-[158px] gap-[11px]"
        }  h-[41px] justify-center  text-primary text-[16px] font-nuni font-[700] items-center z-20 active:scale-95 duration-300
        ${
          isModalOpen ||
          isPracticeFormOpen ||
          isGAIFormOpen ||
          isContForm ||
          isThirdForm ||
          isFourthForm ||
          isContForms ||
          isSpecialFormOpen === true
            ? "hidden"
            : "flex"
        } `}
        style={{ position: "relative" }}
      >
        <CiFilter className="text-[22px]" /> Фильтр{" "}
        <IoIosArrowForward className="text-[22px] rotate-90" />
      </button>
      {filter && item === "1" && (
        <div className="z-10 shadowWhite absolute right-[0px] px-[12px] pt-[40px] pb-[20px] w-[270px] -top-[0px]">
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
                {item.id === "1" ? (
                  <input
                    className={`fil rounded-[10px] w-[102.2px] flex justify-center items-center h-[30.9px] text-[#74719E] text-xl text-center font-nuni font-[700] cursor-pointer`}
                    type="text"
                    value={inputValue3}
                    onChange={handleInputChange3}
                  />
                ) : item.id === "2" ? (
                  <input
                    className={`fil rounded-[10px] w-[102.2px] flex justify-center items-center h-[30.9px] text-[#74719E] text-xl text-center font-nuni font-[700] cursor-pointer`}
                    type="text"
                    placeholder="0"
                  />
                ) : (
                  <div
                    onClick={
                      item.id === "3"
                        ? handleCourse
                        : item.id === "4"
                        ? handleFac
                        : ""
                    }
                    className={`fil rounded-[10px] min-w-[102.2px] flex justify-center items-center h-[30.9px] text-[#74719E] text-[16px] font-nuni font-[700] ${
                      item.id === "1" ? "pur" : ""
                    } cursor-pointer`}
                  >
                    {item.title}
                  </div>
                )}

                {course && item.id === "1" ? (
                  <div className="shadowThird absolute px-[8px] py-[18.5px] w-[289px] -left-[290px] top-[100px]">
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
                {fac && (
                  <div className="shadowThird absolute px-[8px] py-[18.5px] w-[289px] -left-[290px] top-[200px]">
                    {arrCaf.map((item) => (
                      <div
                        key={item.id}
                        className={`${styles.text} flex gap-5 items-center bg-white border-2 w-full justify-center h-[57px]`}
                      >
                        {item.name}
                        <FaPencil className="text-[20px] text-textSecond cursor-pointer" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {filter && item === "2" && (
        <div className="z-10 shadowWhite absolute right-[0px] px-[12px] pt-[40px] pb-[20px] w-[270px] -top-[0px]">
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
                {item.id === "1" ? (
                  <input
                    className={`fil rounded-[10px] w-[102.2px] flex justify-center items-center h-[30.9px] text-[#74719E] text-xl text-center font-nuni font-[700] cursor-pointer`}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                ) : item.id === "2" ? (
                  <input
                    className={`fil rounded-[10px] w-[102.2px] flex justify-center items-center h-[30.9px] text-[#74719E] text-xl text-center font-nuni font-[700] cursor-pointer`}
                    type="text"
                    placeholder="0"
                  />
                ) : (
                  <div
                    onClick={
                      item.id === "3"
                        ? handleCourse
                        : item.id === "4"
                        ? handleFac
                        : ""
                    }
                    className={`fil rounded-[10px] min-w-[102.2px] flex justify-center items-center h-[30.9px] text-[#74719E] text-[16px] font-nuni font-[700] ${
                      item.id === "1" ? "pur" : ""
                    } cursor-pointer`}
                  >
                    {item.title}
                  </div>
                )}

                {course && item.id === "1" ? (
                  <div className="shadowThird absolute px-[8px] py-[18.5px] w-[289px] -left-[290px] top-[100px]">
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
                {fac && (
                  <div className="shadowThird absolute px-[8px] py-[18.5px] w-[289px] -left-[290px] top-[200px]">
                    {arrCaf.map((item) => (
                      <div
                        key={item.id}
                        className={`${styles.text} flex gap-5 items-center bg-white border-2 w-full justify-center h-[57px]`}
                      >
                        {item.name}
                        <FaPencil className="text-[20px] text-textSecond cursor-pointer" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {filter && item === "3" && (
        <div className="z-10 shadowWhite absolute right-[0px] px-[12px] pt-[40px] pb-[20px] w-[270px] -top-[0px]">
          <div className="flex-col flex">
            {slice.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b-[3px] py-[7px] gap-[15px]"
              >
                <span
                  className={`text-[#74719E] text-[16px] font-nuni font-[700]`}
                >
                  {item.name}
                </span>
                {item.id === "1" ? (
                  <input
                    className={`fil rounded-[10px] w-[102.2px] flex justify-center items-center h-[30.9px] text-[#74719E] text-xl text-center font-nuni font-[700] cursor-pointer`}
                    type="text"
                    value={inputValue2}
                    onChange={handleInputChange2}
                  />
                ) : item.id === "2" ? (
                  <input
                    className={`fil rounded-[10px] w-[102.2px] flex justify-center items-center h-[30.9px] text-[#74719E] text-xl text-center font-nuni font-[700] cursor-pointer`}
                    type="text"
                    value={inputValue4}
                    onChange={handleInputChange4}
                  />
                ) : (
                  <div
                    onClick={
                      item.id === "3"
                        ? handleCourse
                        : item.id === "4"
                        ? handleFac
                        : ""
                    }
                    className={`fil rounded-[10px] min-w-[102.2px] flex justify-center items-center h-[30.9px] text-[#74719E] text-[16px] font-nuni font-[700] ${
                      item.id === "1" ? "pur" : ""
                    } cursor-pointer`}
                  >
                    {item.title}
                  </div>
                )}
                {course && item.id === "1" ? (
                  <div className="shadowThird absolute px-[8px] py-[18.5px] w-[289px] right-[270px] top-[100px]">
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
                {fac && (
                  <div className="shadowThird absolute px-[8px] py-[18.5px] w-[289px] left-[270px] top-[200px]">
                    {arrCaf.map((item) => (
                      <div
                        key={item.id}
                        className={`${styles.text} flex gap-5 items-center bg-white border-2 w-full justify-center h-[57px]`}
                      >
                        {item.name}
                        <FaPencil className="text-[20px] text-textSecond cursor-pointer" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListFilter;
