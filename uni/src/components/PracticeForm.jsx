import { useCallback, useState } from "react";
import Modal from "react-modal";
import { useList } from "../context/ListContext";
import "../index.css";
import { TbArrowBack } from "react-icons/tb";
import styles from "../styles";
import DirectionForm from "./DirectionForm";

// eslint-disable-next-line react/prop-types
const PracticeForm = ({ isOpen, onRequestClose }) => {
  const { handleAddDiscipline, getNewId } = useList();
  const [fac, setFac] = useState("");
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [semestr, setSemestr] = useState("");
  const [practice, setPractice] = useState("");
  const [disciplineCode, setDisciplineCode] = useState("");
  const [choose, setChoose] = useState(false);
  const [isAddingDirection, setIsAddingDirection] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState({
    date: "",
    name: "",
  });
  const [selectedId, setSelectedId] = useState(null);

  const [side, setSide] = useState([
    {
      id: "1",
      date: "02.03.23",
      name: "ФИИТ",
    },
    {
      id: "2",
      date: "01.03.02",
      name: "ПМИ",
    },
    {
      id: "3",
      date: "09.03.03",
      name: "ПИ",
    },
  ]);

  const handleChoose = useCallback(() => setChoose((prev) => !prev), []);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // Validate that necessary fields are not empty
      if (
        !semestr ||
        !course ||
        !title ||
        !disciplineCode ||
        !practice ||
        selectedId === null
      ) {
        alert("Please fill in all required fields.");
        return;
      }
      // Add the discipline with entered data and selected direction
      const newDiscipline = {
        id: getNewId(),
        fac,
        semestr,
        course,
        title,
        disciplineCode,
        practice,
        direction: selectedDirection, // Include selected direction
      };
      // Call the context function to add the discipline
      handleAddDiscipline(newDiscipline);
      // Clear the form fields
      setFac("");
      setSemestr("");
      setCourse("");
      setTitle("");
      setDisciplineCode("");
      setPractice("");
      setSelectedId(null);
      setSelectedDirection({ date: "", name: "" });
      // Close the modal
      onRequestClose();
      console.log(newDiscipline);
    },
    [
      course,
      disciplineCode,
      fac,
      handleAddDiscipline,
      practice,
      onRequestClose,
      selectedDirection,
      selectedId,
      semestr,
      title,
      getNewId,
    ]
  );

  const handleBackClick = () => {
    // Закройте модальное окно при нажатии кнопки "Назад"
    onRequestClose();
  };

  const handleDivClick = (id) => {
    const selectedSide = side.find((item) => item.id === id);
    setSelectedId(id);
    setSelectedDirection(selectedSide);
    setChoose(!false);
  };

  const handleAddDirection = () => {
    setIsAddingDirection(true);
  };

  const handleDirectionAdded = (newDirection) => {
    setSide((prevSide) => [...prevSide, newDirection]);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen && !isAddingDirection}
        onRequestClose={onRequestClose}
        contentLabel="Модальная форма"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-md outline-none"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      >
        <form
          onSubmit={handleSubmit}
          className="shadowSecond flex flex-col items-center gap-14 px-20 py-16"
        >
          <h2 className="text-[#424242] text-2xl font-nuni font-bold">
            Создание записи практики
          </h2>
          <div className="flex flex-col items-center gap-24">
            <div className="modaldiv px-4 py-5 flex flex-col gap-7 border-[1px] border-gray-400 w-fit">
              <label className="modaldiv flex h-12 overflow-hidden items-center border-[1px] border-[#B8CCE0]">
                <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[215px] justify-center">
                  Направление
                </span>
                <div
                  onClick={handleChoose}
                  className=" h-full w-72 flex items-center justify-center"
                >
                  {selectedId !== null ? (
                    <span className=" h-full shadowWhite text-black text-2xl font-nuni font-bold w-full flex items-center justify-center z-20 gap-5 cursor-pointer">
                      {" "}
                      {side.find((item) => item.id === selectedId).date}
                      <span>
                        {side.find((item) => item.id === selectedId).name}
                      </span>
                    </span>
                  ) : (
                    <span className=" h-full shadowWhite text-black text-2xl font-nuni font-bold w-full flex items-center justify-center z-20 cursor-pointer">
                      Выбрать
                    </span>
                  )}
                  {choose && (
                    <div className="shadowThird absolute w-72 px-4 pb-5 pt-10 z-10 top-44">
                      <div className="flex flex-col ">
                        {side.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleDivClick(item.id)}
                            className={`side2 flex items-center justify-center gap-4 h-14 ${styles.text} cursor-pointer`}
                          >
                            {item.date} {item.name}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col items-center justify-center pt-3 gap-2">
                        <div
                          onClick={handleAddDirection}
                          className="text-2xl text-black bg-white rounded-full w-14 h-14 flex items-center justify-center cursor-pointer"
                        >
                          +
                        </div>
                        <span className="text-black text-xl font-nuni font-bold">
                          Добавить направление
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </label>
              <label
                className={`modaldiv h-12 flex overflow-hidden items-center  border-[1px] ${
                  !semestr ? "border-[3px] border-[#E98] " : "border-[#B8CCE0]"
                }`}
              >
                <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[215px] justify-center">
                  Семестр
                </span>{" "}
                <input
                  type="text"
                  value={semestr}
                  onChange={(e) => {
                    const inputValue = e.target.value.replace(/[^0-9]/g, ""); // Оставляем только цифры
                    const value = Math.min(Number(inputValue), 4); // Ограничиваем значение до 5
                    setSemestr(value.toString());
                  }}
                  className="bg-transparent h-full outline-none text-black text-2xl font-nuni font-bold text-center"
                />
              </label>

              <label
                className={`modaldiv h-12 flex overflow-hidden items-center border-[1px] ${
                  !course ? "border-[3px] border-[#E98] " : "border-[#B8CCE0]"
                }`}
              >
                <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[215px] justify-center">
                  Курс
                </span>
                <input
                  type="text"
                  value={course}
                  onChange={(e) => {
                    const inputValue = e.target.value.replace(/[^0-9]/g, ""); // Оставляем только цифры
                    const value = Math.min(Number(inputValue), 4); // Ограничиваем значение до 5
                    setCourse(value.toString());
                  }}
                  className={`bg-transparent h-full outline-none text-center text-black text-2xl font-nuni font-bold`}
                />
              </label>
            </div>
            <div className="flex gap-16 items-center h-[209px]">
              <div className="modaldiv flex-col flex gap-6 py-7 overflow-hidden items-center border-[1px] border-[#B8CCE0]">
                <label
                  className={`modaldiv h-12 flex overflow-hidden items-center  border-[1px] ${
                    !disciplineCode
                      ? "border-[3px] border-[#E98] "
                      : "border-[#B8CCE0]"
                  }`}
                >
                  <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[215px] justify-center">
                    Код дисциплины
                  </span>{" "}
                  <input
                    type="text"
                    value={disciplineCode}
                    onChange={(e) => {
                      const inputValue = e.target.value
                        .slice(0, 7)
                        .toUpperCase(); // Ограничиваем до 7 символов и переводим в заглавные
                      setDisciplineCode(inputValue);
                    }}
                    className="bg-transparent h-full outline-none text-black text-2xl font-nuni font-bold text-center"
                  />
                </label>

                <label
                  className={`modaldiv h-12 flex overflow-hidden items-center border-[1px] ${
                    !title ? "border-[3px] border-[#E98] " : "border-[#B8CCE0]"
                  }`}
                >
                  <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[215px] justify-center">
                    Наименование
                  </span>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                      const inputValue = e.target.value.replace(
                        /[^а-яА-Я\s]/g,
                        ""
                      );
                      setTitle(inputValue);
                    }}
                    className="bg-transparent h-full outline-none text-black text-2xl font-nuni font-bold"
                  />
                </label>
              </div>
              <div className="w-[369px] h-full flex flex-col justify-between">
                <label
                  className={`modaldiv h-12 flex overflow-hidden items-center  border-[1px] ${
                    !practice
                      ? "border-[3px] border-[#E98] "
                      : "border-[#B8CCE0]"
                  }`}
                >
                  <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[205px] justify-center">
                    Практика часы
                  </span>{" "}
                  <input
                    type="text"
                    value={practice}
                    onChange={(e) => {
                      const inputValue = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 3); // Оставляем только цифры и ограничиваем до 3 символов
                      setPractice(inputValue);
                    }}
                    className="bg-transparent h-full w-[100px] outline-none text-black text-2xl font-nuni font-bold text-center"
                  />
                </label>
                <label
                  className={`modaldiv py-2 flex flex-col overflow-hidden items-center  border-[1px] `}
                >
                  <span className="text-[#6C6993] text-2xl font-nuni font-bold border-b-2 h-full flex items-center w-full justify-center">
                    Часы
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-5">
                      <span className="text-[#6C6993] text-2xl font-nuni font-bold h-full flex w-[239px] items-center justify-center">
                        Часы на человека
                      </span>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex gap-5">
                      <span className="text-[#6C6993] text-2xl font-nuni font-bold h-full flex items-center w-[239px] justify-center">
                        Часы на группу
                      </span>
                      <input type="checkbox" name="" id="" />
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between w-full">
            <button
              onClick={handleBackClick}
              type="button"
              className="shadowWhite flex gap-3 items-center justify-center min-w-36 h-14 text-[#74719E] text-xl font-nuni font-bold"
            >
              <TbArrowBack className="text-xl" /> Назад
            </button>
            <button
              type="submit"
              className="but text-[#424242] text-2xl font-nuni font-bold w-80 h-[74px]"
            >
              Сохранить изменения
            </button>
          </div>
        </form>
      </Modal>
      <DirectionForm
        isOpen={isAddingDirection}
        onRequestClose={() => setIsAddingDirection(false)}
        onDirectionAdded={handleDirectionAdded}
      />
    </div>
  );
};

export default PracticeForm;
