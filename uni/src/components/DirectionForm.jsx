// DirectionForm.js
import { useCallback, useState } from "react";
import Modal from "react-modal";
import { useDepartment } from "../context/DepartmentContext";
import styles from "../styles";
import "../index.css";
import { IoCloseOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const DirectionForm = ({ isOpen, onRequestClose, onDirectionAdded }) => {
  const { arrCaf } = useDepartment();
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const [fullName, setFullName] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleActive = useCallback(() => setActive((prev) => !prev), []);

  const handleSubmit = () => {
    if (date && name && fullName) {
      onDirectionAdded({
        id: Math.random().toString(),
        date,
        name,
        fullName,
      });
      setDate("");
      setName("");
      setFullName("");
      setSelectedFaculty(null);
      onRequestClose();
    } else {
      alert("Please enter date, name, and full name for the new direction.");
    }
  };

  const handleCancel = () => {
    setDate("");
    setName("");
    setFullName("");
    setSelectedFaculty(null);
  };

  const handleCancel1 = () => {
    onRequestClose();
  };

  const handleActive1 = (faculty) => {
    setSelectedFaculty(faculty);
    setActive((prev) => !prev);
  };

  const isSaveDisabled = !date || !name || !fullName;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Модальная форма"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-md outline-none"
      overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="shadowWhite w-[709px] py-3">
        <div className="flex justify-between px-8 items-center">
          {" "}
          <h2 className="text-black text-2xl font-nuni font-bold">
            Добавление направления
          </h2>
          <IoCloseOutline
            onClick={handleCancel1}
            className="text-primary text-4xl cursor-pointer"
          />
        </div>
        <div className="px-4 flex flex-col gap-7 pt-12">
          <div className="modaldiv flex h-12 overflow-hidden items-center border-[1px] border-[#B8CCE0]">
            <label className="px-2 text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[235px] justify-center">
              Код направления
            </label>
            <input
              type="text"
              value={date}
              onChange={(e) => {
                const inputValue = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and dots
                const formattedValue = inputValue
                  .split(".")
                  .map((part) => (part.length > 2 ? part.slice(0, 2) : part))
                  .join(".")
                  .slice(0, 8);
                setDate(formattedValue);
              }}
              className="bg-transparent h-full outline-none text-black text-2xl font-nuni font-bold text-center w-[435px]"
            />
          </div>
          <div className="modaldiv flex h-12 overflow-hidden items-center border-[1px] border-[#B8CCE0]">
            <label className="px-2 text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[235px] justify-center">
              Факультет
            </label>
            <div className=" w-[440px] h-full">
              <span
                onClick={handleActive}
                className="relative z-10 h-full shadowWhite text-black text-2xl font-nuni font-bold w-full flex items-center justify-center cursor-pointer"
              >
                {selectedFaculty
                  ? ` ${selectedFaculty.name}`
                  : "Выбрать факультет"}
              </span>
              {active && (
                <div className="shadowThird px-4 pt-10 pb-5 w-[440px] absolute top-[185px]">
                  <div>
                    {arrCaf.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleActive1(item)}
                        className={`side2 flex items-center justify-center gap-4 h-14 ${styles.text} cursor-pointer`}
                      >
                        {item.date} {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-4 flex flex-col gap-7 pt-12">
          <div className="modaldiv flex h-12 overflow-hidden items-center border-[1px] border-[#B8CCE0]">
            <label className="px-2 text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[235px] justify-center">
              Название
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-transparent h-full outline-none text-black text-2xl font-nuni font-bold w-[435px]"
            />
          </div>
          <div className="modaldiv flex h-12 overflow-hidden items-center border-[1px] border-[#B8CCE0]">
            <label className="px-2 text-[#6C6993] text-xl font-nuni font-bold border-r-2 h-full flex items-center w-[235px] justify-center">
              Короткое название
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent h-full outline-none text-black text-2xl font-nuni font-bold text-center w-[435px]"
            />
          </div>
        </div>
        <div className="flex justify-between items-center px-4 pt-20">
          <button
            onClick={handleSubmit}
            disabled={isSaveDisabled}
            className={`${
              isSaveDisabled ? "opacity-50 cursor-not-allowed" : "shadowSecond"
            } w-72 flex items-center justify-center text-[#74719E] h-14 text-xl font-nuni font-bold`}
          >
            Сохранить направление
          </button>
          <button
            onClick={handleCancel}
            className="shadowSecond w-72 flex items-center justify-center text-[#74719E] h-14 text-xl font-nuni font-bold"
          >
            Отмена
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DirectionForm;
