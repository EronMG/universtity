import { useState } from "react";
import Modal from "react-modal";
import { useList } from "../context/ListContext";
import "../index.css";
import { TbArrowBack } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const DisciplineForm = ({ isOpen, onRequestClose }) => {
  const { handleAddDiscipline } = useList();
  const [fac, setFac] = useState("");
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [semestr, setSemestr] = useState("");
  const [lectures, setLectures] = useState("");
  const [labs, setLabs] = useState("");
  const [practicals, setPracticals] = useState("");
  const [disciplineCode, setDisciplineCode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that necessary fields are not empty
    if (!semestr || !course || !title || !disciplineCode) {
      alert("Please fill in all required fields.");
      return;
    }

    // Add the discipline with entered data
    const newDiscipline = {
      id: Math.random().toString(), // Generate a unique ID (you may want to use a more robust method)
      fac,
      semestr,
      course,
      title,
      disciplineCode,
      lectures,
      labs,
      practicals,
    };

    // Call the context function to add the discipline
    handleAddDiscipline(newDiscipline);

    // Clear the form fields
    setFac("");
    setSemestr("");
    setCourse("");
    setTitle("");
    setDisciplineCode("");
    setLectures("");
    setLabs("");
    setPracticals("");

    // Close the modal
    onRequestClose();
    console.log(newDiscipline);
  };

  const handleBackClick = () => {
    // Закройте модальное окно при нажатии кнопки "Назад"
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
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
          Создание записи дисциплины
        </h2>
        <div className="flex gap-14">
          <div className="modaldiv px-4 py-5 flex flex-col gap-7">
            <label className="modaldiv flex h-12 overflow-hidden items-center border-[1px] border-[#B8CCE0]">
              <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[215px] justify-center">
                Направление
              </span>
              <div></div>
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
          <div className="modaldiv px-4 py-5 flex flex-col gap-7">
            <label
              className={`modaldiv flex h-12 overflow-hidden items-center ${
                !disciplineCode
                  ? "border-[3px] border-[#E98] "
                  : "border-[#B8CCE0]"
              }`}
            >
              <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[215px] justify-center">
                Код дисциплины
              </span>
              <input
                type="text"
                value={disciplineCode}
                onChange={(e) => {
                  const inputValue = e.target.value.slice(0, 7).toUpperCase(); // Ограничиваем до 7 символов и переводим в заглавные
                  setDisciplineCode(inputValue);
                }}
                className="bg-transparent h-full outline-none text-black text-2xl font-nuni font-bold text-center"
              />
            </label>
            <label
              className={`modaldiv h-12 flex overflow-hidden items-center  border-[1px] ${
                !title ? "border-[3px] border-[#E98] " : "border-[#B8CCE0]"
              }`}
            >
              <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[215px] justify-center">
                Наименование
              </span>{" "}
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  const inputValue = e.target.value.replace(/[^а-яА-Я]/g, "");
                  setTitle(inputValue);
                }}
                className="bg-transparent h-full outline-none text-black text-2xl font-nuni font-bold"
              />
            </label>
            <label className="modaldiv h-12 flex overflow-hidden items-center border-[1px] border-[#B8CCE0]">
              <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[215px] justify-center">
                Тип контроля
              </span>
              <div></div>
            </label>
          </div>
        </div>
        <div className={`flex flex-col gap-6 w-[285px]`}>
          <label
            className={`modaldiv h-12 flex overflow-hidden items-center pl-4  border-[1px] ${
              !lectures ? "border-[3px] border-[#E98] " : "border-[#B8CCE0]"
            }`}
          >
            <span className="text-[#6C6993] text-xl font-nuni font-bold border-r-2 h-full flex items-center min-w-[150px] justify-center pr-2">
              Лекции
            </span>
            <input
              type="text"
              value={lectures}
              onChange={(e) => {
                const inputValue = e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 3); // Оставляем только цифры и ограничиваем до 3 символов
                setLectures(inputValue);
              }}
              className="bg-transparent h-full outline-none text-center w-full text-black text-xl font-nuni font-bold"
            />
          </label>

          <label
            className={`modaldiv h-12 flex overflow-hidden items-center  pl-4  border-[1px] ${
              !labs ? "border-[3px] border-[#E98] " : "border-[#B8CCE0]"
            }`}
          >
            <span className="text-[#6C6993] text-xl font-nuni font-bold border-r-2 h-full flex items-center w-[150px] justify-center pr-2">
              Лабораторные
            </span>
            <input
              type="text"
              value={labs}
              onChange={(e) => {
                const inputValue = e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 3); // Оставляем только цифры и ограничиваем до 3 символов
                setLabs(inputValue);
              }}
              className="bg-transparent h-full outline-none text-center w-full text-black text-xl font-nuni font-bold"
            />
          </label>

          <label
            className={`modaldiv h-12 flex overflow-hidden items-center pl-4  border-[1px] ${
              !practicals ? "border-[3px] border-[#E98] " : "border-[#B8CCE0]"
            }`}
          >
            <span className="text-[#6C6993] text-xl font-nuni font-bold border-r-2 h-full flex items-center w-[150px] justify-center pr-2">
              Практические
            </span>
            <input
              type="text"
              value={practicals}
              onChange={(e) => {
                const inputValue = e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 3); // Оставляем только цифры и ограничиваем до 3 символов
                setPracticals(inputValue);
              }}
              className="bg-transparent h-full outline-none text-center w-full text-black text-xl font-nuni font-bold"
            />
          </label>
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
  );
};

export default DisciplineForm;