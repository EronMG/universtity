// DirectionForm.js
import { useCallback, useState } from "react";
import Modal from "react-modal";
import { useDepartment } from "../context/DepartmentContext";
import styles from "../styles";
import "../index.css";

// eslint-disable-next-line react/prop-types
const DirectionForm = ({ isOpen, onRequestClose, onDirectionAdded }) => {
  const { arrCaf } = useDepartment();
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);

  const handleActive = useCallback(() => setActive((prev) => !prev), []);

  const handleSubmit = () => {
    if (date && name) {
      onDirectionAdded({ id: Math.random().toString(), date, name });
      onRequestClose();
    } else {
      alert("Please enter both date and name for the new direction.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Модальная форма"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-md outline-none"
      overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="shadowWhite w-[709px] py-3">
        <h2 className="text-black text-2xl font-nuni font-bold px-8">
          Добавление направления
        </h2>
        <div className="px-4">
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
                  .split(".") // Split the input by dots
                  .map((part) => (part.length > 2 ? part.slice(0, 2) : part)) // Limit each part to 2 characters
                  .join(".") // Join the parts with dots
                  .slice(0, 8); // Limit the entire input to 8 characters
                setDate(formattedValue);
              }}
              className="bg-transparent h-full outline-none text-black text-2xl font-nuni font-bold text-center"
            />
          </div>
          <div className="modaldiv flex h-12 overflow-hidden items-center border-[1px] border-[#B8CCE0]">
            <label className="px-2 text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[235px] justify-center">
              Факультет
            </label>
            <div className="w-[440px] h-full">
              <span
                onClick={handleActive}
                className="h-full shadowWhite text-black text-2xl font-nuni font-bold w-full flex items-center justify-center z-20"
              >
                Выбрать факультет
              </span>
              {active && (
                <div className="absolute">
                  {arrCaf.map((item) => (
                    <div
                      key={item.id}
                      className={`side2 flex items-center justify-center gap-4 h-14 ${styles.text}`}
                    >
                      {item.date} {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div></div>
        <button onClick={handleSubmit}>Save Direction</button>
      </div>
    </Modal>
  );
};

export default DirectionForm;

// <input type="text" value={name} onChange={(e) => setName(e.target.value)} />;
