import styles from "../styles";
import { IoIosArrowDown } from "react-icons/io";
import { useDepartment } from "../context/DepartmentContext";

const Caffedra = () => {
  const {
    showDepartment,
    arr,
    handleDeleteCafedra,
    handleCaffedraClick,
    handleActive,
    active,
    selectedCaffedra,
    handleEditCafedra,
  } = useDepartment();

  return (
    <div className="relative">
      <button
        onClick={handleActive}
        className={`shadowWhite flex items-center gap-[15px] w-full justify-center py-[11px] ${styles.text} z-50 relative active:scale-95 duration-300`}
      >
        {selectedCaffedra || "Кафедра"}{" "}
        <IoIosArrowDown
          className={`${styles.text} ${active ? "rotate-180" : ""}`}
        />
      </button>
      {active && (
        <div className="shadowThird absolute top-[10px] z-40 px-[7.5px] w-full pb-[15px]">
          <div className="pt-[40px]">
            {arr.map((item) => (
              <div
                key={item.id}
                className="bg flex items-center justify-end gap-[20px] py-[11px] px-[12px] hover:bg-[#A8A3E680]"
              >
                <span
                  onClick={() => handleCaffedraClick(item.name)}
                  className={`${styles.text} w-[118px] text-center cursor-pointer`}
                >
                  {item.name}
                </span>
                <div className="flex gap-[5px]">
                  <span
                    onClick={() => handleEditCafedra(item)}
                    className="text-primary text-[25px] cursor-pointer"
                  >
                    {item.change}
                  </span>
                  <span
                    onClick={() => handleDeleteCafedra(item.id)}
                    className="text-primaryLow text-[25px] cursor-pointer"
                  >
                    {item.trash}
                  </span>
                </div>
              </div>
            ))}
            <div className="flex justify-between pt-[20px]">
              {["Добавить вручную", "Добавить из УП"].map((text, index) => (
                <div
                  key={index}
                  onClick={showDepartment}
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <div className="w-[54px] h-[54px] rounded-full bg-white flex items-center justify-center">
                    +
                  </div>
                  <p className="text-black font-nuni font-[700] text-[15px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Caffedra;
