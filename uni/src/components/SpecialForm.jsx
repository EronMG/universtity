import { useCallback, useState } from "react";
import Modal from "react-modal";
import { useList } from "../context/ListContext";
import "../index.css";
import { TbArrowBack } from "react-icons/tb";
import styles from "../styles";
import DirectionForm from "./DirectionForm";
import { CiCircleQuestion } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
const SpecialForm = ({ isOpen, onRequestClose }) => {
  const { handleAddDiscipline, getNewId } = useList();
  const [fac, setFac] = useState("");
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [semestr, setSemestr] = useState("");
  const [ekz, setEkz] = useState("");
  const [def, setDef] = useState("");
  const [caf, setCaf] = useState("");
  const [quest, setQuest] = useState(false);
  const [rucfac, setRucfac] = useState("");
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
        !ekz ||
        !def ||
        !caf ||
        !rucfac ||
        selectedId === null
      ) {
        alert("Please fill in all required fields.");
        return;
      }
      const newDiscipline = {
        id: getNewId(),
        fac,
        semestr,
        course,
        title,
        ekz,
        def,
        caf,
        rucfac,
        direction: selectedDirection, // Include selected direction
      };
      // Call the context function to add the discipline
      handleAddDiscipline(newDiscipline);
      // Clear the form fields
      setFac("");
      setSemestr("");
      setCourse("");
      setTitle("");
      setEkz("");
      setCaf("");
      setRucfac("");
      setDef("");
      setSelectedId(null);
      setSelectedDirection({ date: "", name: "" });
      // Close the modal
      onRequestClose();
      console.log(newDiscipline);
    },
    [
      semestr,
      course,
      title,
      ekz,
      def,
      selectedId,
      getNewId,
      fac,
      caf,
      rucfac,
      selectedDirection,
      handleAddDiscipline,
      onRequestClose,
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

  const handleQuest = useCallback(() => setQuest((prev) => !prev), []);

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
          <div className="flex justify-between">
            <h2 className="text-[#424242] text-2xl font-nuni font-bold">
              Создание записи специальной дисциплины
            </h2>
            <CiCircleQuestion
              className="absolute text-4xl right-[80px] top-12"
              onClick={handleQuest}
            />
          </div>
          {quest && (
            <div className="shadowMain absolute top-[240px]  w-[702px] h-[468px] rounded-[35px] z-20 flex flex-col items-center justify-center ">
              <button className="shadowWhite w-[277px] h-[53px] flex items-center justify-center text-primary text-xl font-nuni font-bold">
                Справка
              </button>
              <div className="flex flex-col gap-6 mt-4 w-[500px]">
                <span className="text-[#424242] font-nuni font-bold text-base text-center">
                  Под специальной дисциплиной имеется ввиду понятие, выходящее
                  за рамки определения дисциплины, практики и государственной
                  аттестации, к примеру:
                </span>
                <span className="text-[#424242] font-nuni font-bold text-base text-center italic">
                  Работа секретаря ГЭК (гос. экзамен)
                  <br />
                  Работа секретаря ГЭК (защита)
                  <br />
                  Заведование кафедрой
                  <br /> Руководство факультетом
                  <br /> Защита ВКР
                </span>
                <span className="text-[#424242] font-nuni font-bold text-base text-center">
                  Специальные дисциплины не загружаются из УП, а вводятся
                  вручную.
                </span>
              </div>
              <button
                onClick={handleQuest}
                type="button"
                className="mt-5 shadowWhite flex gap-3 items-center justify-center w-[122px] h-[45px] text-[#74719E] text-xl font-nuni font-bold"
              >
                <TbArrowBack className="text-xl" /> Ок
              </button>
            </div>
          )}
          <div className="flex flex-col items-center gap-24">
            <div className="modaldiv px-4 py-5 flex flex-col gap-7 border-[1px] border-gray-400 w-fit">
              <label
                className={`modaldiv w-[956px] h-12 flex overflow-hidden items-center border-[1px] ${
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
                  className="bg-transparent h-full w-[750px] outline-none text-black text-2xl font-nuni font-bold"
                />
              </label>
            </div>
            <div className="flex gap-16 items-center h-[209px] mt-24">
              <div className="modaldiv flex-col flex gap-6 py-7 px-6 overflow-hidden items-center border-[1px] border-[#B8CCE0]">
                <label className="modaldiv flex h-12 overflow-hidden items-center border-[1px] border-[#B8CCE0]">
                  <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[215px] justify-center">
                    Направление
                  </span>
                  <div
                    onClick={handleChoose}
                    className=" h-full w-72 flex items-center justify-center z-0"
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
                      <div className="shadowThird absolute w-72 px-4 pb-5 pt-10 z-10 bottom-28">
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
                    !semestr
                      ? "border-[3px] border-[#E98] "
                      : "border-[#B8CCE0]"
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
              <div className=" h-[298px] justify-between flex flex-col ">
                <label
                  className={`modaldiv h-12 flex overflow-hidden items-center border-[1px] ${
                    !ekz ? "border-[3px] border-[#E98] " : "border-[#B8CCE0]"
                  }`}
                >
                  <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[461px] justify-center">
                    Количество членов ГЭК (экзамен)
                  </span>
                  <input
                    type="text"
                    value={ekz}
                    onChange={(e) => {
                      const inputValue = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 3); // Оставляем только цифры и ограничиваем до 3 символов
                      setEkz(inputValue);
                    }}
                    className="bg-transparent h-full outline-none text-center w-[153px] text-black text-xl font-nuni font-bold"
                  />
                </label>
                <label
                  className={`modaldiv h-12 flex overflow-hidden items-center border-[1px] ${
                    !def ? "border-[3px] border-[#E98] " : "border-[#B8CCE0]"
                  }`}
                >
                  <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[461px] justify-center">
                    Количество членов ГЭК (защита)
                  </span>
                  <input
                    type="text"
                    value={def}
                    onChange={(e) => {
                      const inputValue = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 3); // Оставляем только цифры и ограничиваем до 3 символов
                      setDef(inputValue);
                    }}
                    className="bg-transparent h-full outline-none w-[153px] text-center text-black text-xl font-nuni font-bold"
                  />
                </label>
                <label
                  className={`modaldiv h-12 flex overflow-hidden items-center border-[1px] ${
                    !caf ? "border-[3px] border-[#E98] " : "border-[#B8CCE0]"
                  }`}
                >
                  <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[461px] justify-center">
                    Руководство кафедрой
                  </span>
                  <input
                    type="text"
                    value={caf}
                    onChange={(e) => {
                      const inputValue = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 3); // Оставляем только цифры и ограничиваем до 3 символов
                      setCaf(inputValue);
                    }}
                    className="bg-transparent h-full outline-none w-[153px] text-center text-black text-xl font-nuni font-bold"
                  />
                </label>
                <label
                  className={`modaldiv h-12 flex overflow-hidden items-center border-[1px] ${
                    !rucfac ? "border-[3px] border-[#E98] " : "border-[#B8CCE0]"
                  }`}
                >
                  <span className="text-[#6C6993] text-2xl font-nuni font-bold border-r-2 h-full flex items-center w-[461px] justify-center">
                    Руководство факультетом
                  </span>
                  <input
                    type="text"
                    value={rucfac}
                    onChange={(e) => {
                      const inputValue = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 3); // Оставляем только цифры и ограничиваем до 3 символов
                      setRucfac(inputValue);
                    }}
                    className="bg-transparent h-full outline-none w-[153px] text-center text-black text-xl font-nuni font-bold"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between w-full mt-16">
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

export default SpecialForm;
