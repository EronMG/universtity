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
    newCafedraName,
    setNewFacultyName,
    setNewCafedraName,
    isFacVisible,
  } = useDepartment();

  const handleInputChange = (e) => {
    console.log("Input for department name:", e.target.value);
    setNewCafedraName(e.target.value);
  };

  const handleFacultyInputChange = (e) => {
    console.log("Input for faculty name:", e.target.value);
    setNewFacultyName(e.target.value);
  };

  if (!isFacVisible) {
    return null;
  }

  const renderInput = (label, type, additionalClass = "") => (
    <div className={`input flex items-center ${additionalClass}`}>
      <span
        className={`${styles.textSecond} text-[22px] pl-[11px] w-[300px] border-r-2 h-[51.9px] flex items-center justify-center`}
      >
        {label}
      </span>
      {type === "text" ? (
        <input
          type="text"
          name="name"
          id="name"
          value={type === "text" ? newCafedraName : newFacultyName}
          onChange={
            type === "text" ? handleInputChange : handleFacultyInputChange
          }
          className="bg-transparent outline-none h-[52px] w-[440px] text-black text-[24px] font-nuni font-[700] overflow-hidden"
        />
      ) : (
        // ... (existing code)
        // Add the following lines for faculty abbreviation
        <input
          type="text"
          name="abbreviation"
          id="abbreviation"
          value={newFacultyAbbreviation}
          onChange={(e) => setNewFacultyAbbreviation(e.target.value)}
          className="bg-transparent outline-none h-[52px] w-[440px] text-black text-[24px] font-nuni font-[700] overflow-hidden"
        />
      )}
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
        {renderInput("Название факультета", "text", "border-l-2")}
        {renderInput(
          "Сокращенное название",
          "select",
          "border-r-2 h-[52px] relative"
        )}
      </div>
      <div className="pt-[46.04px] flex items-center justify-center gap-[96px]">
        <button
          onClick={handleSaveFaculty}
          className={`${styles.textSecond} text-[24px] shadowThird w-[296px] px-[20px] py-[11px]`}
        >
          Сохранить кафедру
        </button>
        <button
          //   onClick={handleCancel2}
          className={`${styles.textSecond} text-[24px] shadowThird w-[296px] px-[20px] py-[11px]`}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default AddFaculty;
