import { useDepartment } from "../context/DepartmentContext";
import styles from "../styles";
import "../index.css";
import { TfiClose } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { useCallback, useState } from "react";

const AddCafedra = () => {
  const {
    isDepartmentVisible,
    hideDepartment,
    handleSaveCafedra,
    arrCaf,
    setNewCafedraName,
    newCafedraName,
    showFac,
    handleDeleteFac,
  } = useDepartment();
  const [active, setActive] = useState(false);
  const [selectedCaffedra, setSelectedCaffedra] = useState(null);

  const handleActive = useCallback(() => {
    setActive((prevActive) => !prevActive);
  }, []);

  const handleInputChange = (e) => {
    setNewCafedraName(e.target.value); // Обновляем значение input
  };

  const handleCaffedraClick = useCallback((name) => {
    setSelectedCaffedra(name);
    setActive((prevActive) => !prevActive);
  }, []);

  const generateAbbreviation = useCallback((fullName) => {
    const words = fullName.split(/\s|-/); // Разделяем строку по пробелам и дефисам
    const abbreviation = words.reduce(
      (abbr, word) => abbr + word.charAt(0).toUpperCase(),
      "K"
    );
    return abbreviation;
  }, []);

  const handleCancel2 = useCallback(() => {
    setNewCafedraName(""); // Очищаем значение поля ввода
    setSelectedCaffedra(null); // Сбрасываем выбранную кафедру
  }, [setNewCafedraName]);

  if (!isDepartmentVisible) {
    return null;
  }

  const abbreviation = generateAbbreviation(newCafedraName);
  const renderInput = (label, type, additionalClass = "") => (
    <div className={`input flex items-center ${additionalClass}`}>
      <span
        className={`${styles.textSecond} text-[24px] pl-[11px] w-[245px] border-r-2 h-[51.9px] flex items-center justify-center`}
      >
        {label}
      </span>
      {type === "text" ? (
        <input
          type="text"
          name="name"
          id="name"
          value={newCafedraName}
          onChange={handleInputChange}
          className="bg-transparent outline-none h-[52px] w-[440px] text-black text-[24px] font-nuni font-[700] overflow-hidden"
        />
      ) : (
        <div
          type="text"
          name="text"
          id="text"
          className={`fac ml-[5px] outline-none h-[37px] w-[430px] flex gap-[70px] items-center justify-end rounded-[32px] z-50`}
        >
          <p
            onClick={handleActive}
            className={`${styles.textBlack} cursor-pointer w-[245px] text-center`}
          >
            {selectedCaffedra || " Выбрать факультет"}
          </p>
          <span>
            <IoIosArrowDown className="text-[32px]" />
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div className="white absolute pt-[11px] pr-[12px] pl-[9px] pb-[31px] w-[709px] top-[126px]">
      <div className="flex justify-between pl-[11px] pr-[9px]">
        <h2 className={`${styles.textBlack} pb-[40.39px]`}>
          Добавление новой кафедры
        </h2>

        <TfiClose
          className="text-[30px] text-blue-500 pt-[4px] cursor-pointer"
          onClick={hideDepartment}
        />
      </div>
      <div className="flex flex-col gap-[30.66px]">
        {renderInput("Название кафедры", "text", "border-l-2")}
        {renderInput("Факультет", "select", "border-r-2 h-[52px] relative")}
        {active && (
          <div className="shadowThird absolute z-0 px-[7.5px] pb-[15px] left-[36%] top-[49%] w-[435px]">
            <div className="pt-[40px]">
              {arrCaf.map((item) => (
                <div
                  key={item.id}
                  className="bg flex items-center justify-end gap-[50px] py-[11px] px-[12px]"
                >
                  <span
                    onClick={() => handleCaffedraClick(item.name)}
                    className={`${styles.text} w-[187px] text-center cursor-pointer`}
                  >
                    {item.name}
                  </span>

                  <div className="flex gap-[5px]">
                    <span className="text-primary text-[25px]">
                      {item.change}
                    </span>
                    <span
                      onClick={() => handleDeleteFac(item.id)}
                      className="text-primaryLow text-[25px]"
                    >
                      {item.trash}
                    </span>
                  </div>
                </div>
              ))}
              <div
                onClick={showFac}
                className="flex flex-col items-center justify-center cursor-pointer pt-[15px]"
              >
                <div className="w-[54px] h-[54px] rounded-full bg-white flex items-center justify-center text-[24px]">
                  +
                </div>
                <p className="text-black font-nuni font-[700] text-[24px]">
                  Добавить факультет
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="pt-[46.04px] flex items-center justify-center gap-[96px]">
        <button
          onClick={() => handleSaveCafedra(abbreviation, newCafedraName)}
          className={`${styles.textSecond} text-[24px] shadowThird w-[296px] px-[20px] py-[11px]`}
        >
          Сохранить кафедру
        </button>
        <button
          onClick={handleCancel2}
          className={`${styles.textSecond} text-[24px] shadowThird w-[296px] px-[20px] py-[11px]`}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default AddCafedra;
