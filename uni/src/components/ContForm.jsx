// import { useCallback, useState } from "react";
import Modal from "react-modal";
// import { useList } from "../context/ListContext";
import "../index.css";
import { TbArrowBack } from "react-icons/tb";
// import styles from "../styles";
// import DirectionForm from "./DirectionForm";
// import { CiCircleQuestion } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
const ContForm = ({ isOpen, onRequestClose }) => {
  //   const { handleAddDiscipline, getNewId } = useList();

  //   const handleSubmit = useCallback(
  //     (e) => {
  //       e.preventDefault();
  //       // Validate that necessary fields are not empty
  //       if (
  //         !semestr ||
  //         !course ||
  //         !title ||
  //         !ekz ||
  //         !def ||
  //         !caf ||
  //         !rucfac ||
  //         selectedId === null
  //       ) {
  //         alert("Please fill in all required fields.");
  //         return;
  //       }
  //       const newDiscipline = {
  //         id: getNewId(),
  //         fac,
  //         semestr,
  //         course,
  //         title,
  //         ekz,
  //         def,
  //         caf,
  //         rucfac,
  //         direction: selectedDirection, // Include selected direction
  //       };
  //       // Call the context function to add the discipline
  //       handleAddDiscipline(newDiscipline);
  //       // Clear the form fields
  //       setFac("");
  //       setSemestr("");
  //       setCourse("");
  //       setTitle("");
  //       setEkz("");
  //       setCaf("");
  //       setRucfac("");
  //       setDef("");
  //       setSelectedId(null);
  //       setSelectedDirection({ date: "", name: "" });
  //       // Close the modal
  //       onRequestClose();
  //       console.log(newDiscipline);
  //     },
  //     [
  //       semestr,
  //       course,
  //       title,
  //       ekz,
  //       def,
  //       selectedId,
  //       getNewId,
  //       fac,
  //       caf,
  //       rucfac,
  //       selectedDirection,
  //       handleAddDiscipline,
  //       onRequestClose,
  //     ]
  //   );

  const arr = [
    {
      id: "1",
      name: "Контингент (Бюджет)",
      count: "33",
    },
    {
      id: "2",
      name: "Контингент (Договор)",
      count: "33",
    },
    {
      id: "3",
      name: "Количество потоков",
      count: "33",
    },
    {
      id: "4",
      name: "Контингент групп",
      count: "33",
    },
    {
      id: "5",
      name: "Контингент подгрупп",
      count: "33",
    },
  ];
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
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      >
        <form
          //   onSubmit={handleSubmit}
          className="shadowSecond flex flex-col items-center gap-10 px-10 py-5 w-[689px]"
        >
          <h2 className="tt w-full h-10 flex items-center justify-center text-primary text-xl font-nuni font-bold">
            Изменение контингента
          </h2>
          <div className="flex flex-col gap-4 ">
            {arr.map((item) => (
              <div key={item.id} className="gap-4 flex">
                <span className="shadowSecond text-[#6C6993] font-xl font-nuni font-bold h-10 flex justify-center items-center w-[478px]">
                  {item.name}
                </span>
                <span className="shadowSecond text-[#424242] font-xl font-nuni font-bold h-10 flex justify-center items-center w-[137px]">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-end justify-between w-full">
            <button
              //   type="submit"
              className="but text-[#424242] text-2xl font-nuni font-bold w-80 h-[55px]"
            >
              Сохранить контингент
            </button>
            <button
              onClick={handleBackClick}
              type="button"
              className="shadowWhite flex gap-3 items-center justify-center min-w-36 h-[55px] text-[#74719E] text-xl font-nuni font-bold"
            >
              <TbArrowBack className="text-xl" /> Назад
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ContForm;
