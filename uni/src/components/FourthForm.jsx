/* eslint-disable react/prop-types */
import Modal from "react-modal";
import "../index.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const DropdownItem = ({ item, isOpen, handleClick, showArrow, data }) => (
  <div>
    {showArrow && (
      <IoIosArrowDown
        onClick={showArrow ? handleClick : null}
        className={`text-primary text-[30px] ${
          !isOpen && item.id ? "border-l-2" : ""
        } absolute right-5 cursor-pointer top-1 ${
          isOpen && item.id ? "rotate-90 border-b-2" : ""
        }`}
      />
    )}
    {isOpen && (
      <div className="bb absolute py-3 px-3 right-[50px] top-0 flex flex-col gap-2 z-40">
        <div className="flex items-center justify-center gap-2">
          <h2 className="shadowSecond text-primary font-nuni font-bold text-xl w-[120px] h-[48px] flex items-center justify-center">
            Бюджет
          </h2>
          <h2 className="shadowSecond text-primary font-nuni font-bold text-xl w-[120px] h-[48px] flex items-center justify-center">
            Договор
          </h2>
        </div>
        <div>
          {data.map((rowData, index) => (
            <div
              key={index}
              className="flex gap-2 justify-center items-cente border-t-2"
            >
              {rowData.map((value, idx) => (
                <span
                  key={idx}
                  className="text-[#424242] font-nuni font-bold text-xl w-[120px] h-[36px] flex items-center justify-center"
                >
                  {value}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// eslint-disable-next-line react/prop-types
const FourthForm = ({ isOpen, onRequestClose }) => {
  const arr = [
    {
      id: "1",
      name: "Контингент",
      count: "33",
    },
    {
      id: "2",
      name: "Часы",
      count: "33",
    },
    {
      id: "3",
      name: "Аудиторная работа",
      title: " (Лекции)",
      count: "33",
    },
    {
      id: "4",
      name: "Аудиторная работа",
      title: " (Практические)",
      count: "33",
    },
    {
      id: "5",
      name: "Аудиторная работа",
      title: " (Лабораторные)",
      count: "33",
    },
    {
      id: "6",
      name: "Консультация перед экзаменом",
      count: "33",
    },
    {
      id: "7",
      name: "Зачёт",
      count: "33",
    },
    {
      id: "8",
      name: "Устный экзамен",
      count: "33",
    },
    {
      id: "9",
      name: "Письменный экзамен",
      count: "33",
    },
    {
      id: "10",
      name: "Руководство курсовой работой / проектом",
      count: "33",
    },
    {
      id: "11",
      name: "Всего часов",
      title: " (руководство курсовой работой / проектом)",
      count: "33",
    },
    {
      id: "12",
      name: "Практика",
      count: "33",
    },
    {
      id: "13",
      name: "Количество потоков",
      count: "33",
    },
    {
      id: "14",
      name: "Количество групп",
      count: "33",
    },
    {
      id: "15",
      name: "Количество подгрупп",
      count: "33",
    },
  ];

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleClick = (itemId) => {
    if (itemId === "1") {
      setIsOpen1(!isOpen1);
      setIsOpen2(false); // Close the other window
    }
  };

  const handleBackClick = () => {
    // Закройте модальное окно при нажатии кнопки "Назад"
    onRequestClose();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Модальная форма"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-md outline-none"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex justify-center items-center"
      >
        <div className="bb w-[759px] h-[690px] overflow-scroll flex flex-col items-center py-5 gap-5">
          <div className="flex  gap-4">
            <h2 className="shadowSecond h-[45px] text-primary text-xl font-nuni font-bold w-[652px] flex items-center justify-center">
              Название дисциплины
            </h2>
            <div
              onClick={handleBackClick}
              className="shadowSecond absolute rounded-full h-[45px] right-0 w-[45px] flex items-center justify-center cursor-pointer"
            >
              X
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {arr.map((item) => (
              <div key={item.id} className="flex gap-5">
                <div className="shadowSecond px-1 h-[41px] w-[494px] gap-1 flex items-center justify-center text-[#6C6993] text-xl font-nuni font-bold">
                  {item.name}
                  <span className="text-[#6C6993] text-base font-nuni font-bold">
                    {" "}
                    {item.title}
                  </span>
                </div>
                <div className="relative shadowSecond h-[41px] w-[138px] flex items-center justify-center  text-[#424242] text-xl font-nuni font-bold">
                  {item.count}
                  <DropdownItem
                    item={item}
                    isOpen={item.id === "1" ? isOpen1 : isOpen2}
                    handleClick={() => handleClick(item.id)}
                    showArrow={item.id < 6} // Show arrow only for the first and second items
                    data={[
                      // Provide appropriate data here as an array
                      [13, 44],
                      [0, 44],
                      // ... additional rows
                    ]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FourthForm;
