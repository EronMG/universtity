import styles from "../styles";
import "../index.css";
import { TfiClose } from "react-icons/tfi";
import { useDepartment } from "../context/DepartmentContext";

const AddFaculty = () => {
  const {
    hideFac,
    handleSaveFaculty,
    newFacultyName,
    newFacultyAbbreviation,
    setNewFacultyAbbreviation,
    setNewFacultyName,
    isFacVisible,
  } = useDepartment();

  if (!isFacVisible) {
    return null;
  }
  const renderInput = (label, type, additionalClass = "", value) => (
    <div className={`input flex items-center ${additionalClass}`}>
      <span
        className={`${styles.textSecond} text-[22px] pl-[11px] w-[300px] border-r-2 h-[51.9px] flex items-center justify-center`}
      >
        {label}
      </span>
      <input
        type="text"
        name={type === "text" ? "name" : "abbreviation"}
        id={type === "text" ? "name" : "abbreviation"}
        value={value}
        onChange={
          type === "text"
            ? (e) => setNewFacultyName(e.target.value)
            : (e) => setNewFacultyAbbreviation(e.target.value)
        }
        className="bg-transparent outline-none h-[52px] w-[440px] text-black text-[24px] font-nuni font-[700] overflow-hidden"
      />
    </div>
  );

  return (
    <div className="white absolute pt-[11px] pr-[12px] pl-[9px] pb-[31px] w-[709px] top-[126px]">
      <div className="flex justify-between pl-[11px] pr-[9px]">
        <h2 className={`${styles.textBlack} pb-[40.39px]`}>
          Добавление нового факультета
        </h2>

        <TfiClose
          className="text-[30px] text-blue-500 pt-[4px] cursor-pointer"
          onClick={hideFac}
        />
      </div>
      <div className="flex flex-col gap-[30.66px]">
        {renderInput(
          "Сокращенное название",
          "text",
          "border-l-2",
          newFacultyName
        )}

        {renderInput(
          "Название Факультета",
          "abbreviation",
          "border-r-2 h-[52px] relative",
          newFacultyAbbreviation
        )}
      </div>
      <div className="pt-[46.04px] flex items-center justify-center gap-[96px]">
        <button
          onClick={handleSaveFaculty}
          className={`${styles.textSecond} text-xl shadowThird w-[296px] px-5 py-3`}
        >
          Сохранить факультет
        </button>
        <button
          //   onClick={handleCancel2}
          className={`${styles.textSecond} text-xl shadowThird w-[296px] px-[20px] py-3`}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default AddFaculty;
