/* eslint-disable react/prop-types */
import { useList } from "../context/ListContext";
import { TfiTrash } from "react-icons/tfi";
import { useDepartment } from "../context/DepartmentContext";
import { IoIosArrowDown } from "react-icons/io";
import { useCallback, useMemo, useState } from "react";
import Third from "./Third";
import Second from "./Second";
import First from "./First";

const ListSubject = () => {
  const { handleToggleSideBar, isSideBarVisible } = useDepartment();

  const {
    handleActiveMain,
    activeMain,
    handleDelete,
    lessons,
    item,
    setIsContForm,
    isContForm,
    setIsThirdForm,
    isThirdForm,
    setIsFourthForm,
    isFourthForm,
    setIsContForms,
    isContForms,
    isModalOpen,
    isPracticeFormOpen,
    isGAIFormOpen,
    isSpecialFormOpen,
    inputValue,
    inputValue2,
    inputValue3,
    inputValue4,
  } = useList();

  const [pride, setPride] = useState([
    {
      id: "1",
      fac: "ФКТиПМ",
      choose: "01.02.03",
      name: "1",
      students: "96",
      mon: "40",
      dog: "40",
      potoc: "1",
      group: "4",
      pod: "8",
      prof: "3",
      prac: "4",
    },
    {
      id: "2",
      fac: "ФКТиПМ",
      choose: "03.02.13",
      name: "2",
      students: "56",
      mon: "40",
      dog: "10",
      potoc: "1",
      group: "4",
      pod: "8",
      prof: "3",
      prac: "4",
    },
    {
      id: "3",
      fac: "ЮРФАК",
      choose: "04.07.05",
      name: "3",
      students: "73",
      mon: "40",
      dog: "20",
      potoc: "1",
      group: "4",
      pod: "8",
      prof: "3",
      prac: "4",
    },
    {
      id: "4",
      fac: "ЮРФАК",
      choose: "04.07.05",
      name: "3",
      students: "73",
      mon: "40",
      dog: "20",
      potoc: "1",
      group: "4",
      pod: "8",
      prof: "3",
      prac: "4",
    },
    {
      id: "5",
      fac: "ЮРФАК",
      choose: "04.07.05",
      name: "3",
      students: "73",
      mon: "40",
      dog: "20",
      potoc: "1",
      group: "4",
      pod: "8",
      prof: "3",
      prac: "4",
    },
  ]);

  // eslint-disable-next-line no-unused-vars
  const [third, setThird] = useState([
    {
      id: "1",
      fac: "Руководство ВКР бакалавр",
      choose: "Б1.О.01",
      name: "ФИИТ",
      course: "4",
      mon: "3",
      dog: "34",
      potoc: "55",
    },
    {
      id: "2",
      fac: "Руководство магистерской ...",
      choose: "Б2.В.02...",
      name: "ФИИТ",
      course: "1",
      mon: "8",
      dog: "0",
      potoc: "0",
    },
    {
      id: "3",
      fac: "Руководство ВКР бакалавр",
      choose: "Б1.О.01",
      name: "ФИИТ",
      course: "5",
      mon: "4",
      dog: "34",
      potoc: "55",
    },
    {
      id: "4",
      fac: "Руководство ВКР бакалавр",
      choose: "Б1.О.01",
      name: "ФИИТ",
      course: "3",
      mon: "4",
      dog: "34",
      potoc: "55",
    },
    {
      id: "5",
      fac: "Руководство ВКР бакалавр",
      choose: "Б1.О.01",
      name: "ФИИТ",
      course: "4",
      mon: "4",
      dog: "34",
      potoc: "55",
    },
  ]);

  const handlePride = useCallback(
    (id) => {
      const updatedLessons = pride.filter((item) => item.id !== id);
      setPride(updatedLessons);
    },
    [pride]
  );

  const handleButtonClickThird = useCallback(() => {
    setIsThirdForm(true);
  }, [setIsThirdForm]);

  const handleButtonClickFourth2 = useCallback(() => {
    setIsFourthForm(true);
  }, [setIsFourthForm]);

  const handleButtonClickForms = useCallback(() => {
    setIsContForms(true);
  }, [setIsContForms]);

  // Filter the courses based on the specified value
  const filteredPride = useMemo(() => {
    return inputValue === "0"
      ? pride // If inputValue is 0, show the entire array
      : pride.filter(
          (course) => parseInt(course.name) === parseInt(inputValue)
        );
  }, [inputValue, pride]);

  const filteredLessons = useMemo(() => {
    return inputValue3 === "0"
      ? lessons // If inputValue is 0, show the entire array
      : lessons.filter(
          (course) => parseInt(course.course) === parseInt(inputValue3)
        );
  }, [inputValue3, lessons]);

  const filteredThird = useMemo(() => {
    return inputValue2 === "0"
      ? third // If inputValue2 is 0, show the entire array
      : third.filter(
          (course) => parseInt(course.course) === parseInt(inputValue2)
        );
  }, [inputValue2, third]);

  const filteredSemester = useMemo(() => {
    return inputValue4 === "0"
      ? third // If inputValue is 0, show the entire array
      : third.filter(
          (course) => parseInt(course.mon) === parseInt(inputValue4)
        );
  }, [inputValue4, third]);

  return (
    <div
      className={`h-[90%] ${
        lessons.length === 0 ? "flex items-center justify-center" : ""
      } w-full`}
    >
      <div
        onClick={handleToggleSideBar}
        className={`none bg-[#F1F5F9] ${
          isSideBarVisible === false
            ? "left-0 duration-500 transition-all"
            : "top-[45%] left-[325px]"
        } ${
          lessons.length !== 0 ? "top-[45%]" : ""
        } rotate-90 text-black absolute w-[64px] h-[64px] rounded-full flex items-center justify-center cursor-pointer active:scale-95 duration-300 z-10   ${
          isModalOpen ||
          isPracticeFormOpen ||
          isGAIFormOpen ||
          isContForm ||
          isThirdForm ||
          isFourthForm ||
          isContForms ||
          isSpecialFormOpen === true
            ? "hidden"
            : "flex"
        }`}
      >
        <IoIosArrowDown
          className={`${
            isSideBarVisible ? "" : "rotate-180"
          } text-black text-[36px]`}
        />
      </div>
      {item !== "2" && lessons.length === 0 && third.length === 0 ? (
        <div className="shadowWhite text-[#424242] text-[14px] font-nuni font-[700] w-[262px] h-[55px] flex items-center justify-center">
          Записей нет
        </div>
      ) : (
        <div className="flex flex-col w-full h-full">
          {item === "1"
            ? inputValue3 === 0
              ? lessons.map((boot) => (
                  <First
                    key={boot.id}
                    boot={boot}
                    handleActiveMain={
                      isModalOpen ||
                      isPracticeFormOpen ||
                      isGAIFormOpen ||
                      isContForm ||
                      isThirdForm ||
                      isFourthForm ||
                      isContForms ||
                      isSpecialFormOpen === true
                        ? ""
                        : handleActiveMain
                    }
                    item={item}
                    activeMain={activeMain}
                    TfiTrash={TfiTrash}
                    isContForm={isContForm}
                    setIsContForm={setIsContForm}
                    handleDelete={handleDelete}
                  />
                ))
              : filteredLessons.map((boot) => (
                  <First
                    key={boot.id}
                    boot={boot}
                    handleActiveMain={
                      isModalOpen ||
                      isPracticeFormOpen ||
                      isGAIFormOpen ||
                      isContForm ||
                      isThirdForm ||
                      isFourthForm ||
                      isContForms ||
                      isSpecialFormOpen === true
                        ? ""
                        : handleActiveMain
                    }
                    item={item}
                    activeMain={activeMain}
                    TfiTrash={TfiTrash}
                    isContForm={isContForm}
                    setIsContForm={setIsContForm}
                    handleDelete={handleDelete}
                  />
                ))
            : ""}
          {item === "2"
            ? inputValue === 0
              ? pride.map((boot) => (
                  <Second
                    key={boot.id}
                    boot={boot}
                    handleActiveMain={
                      isModalOpen ||
                      isPracticeFormOpen ||
                      isGAIFormOpen ||
                      isContForm ||
                      isThirdForm ||
                      isFourthForm ||
                      isContForms ||
                      isSpecialFormOpen === true
                        ? ""
                        : handleActiveMain
                    }
                    handlePride={handlePride}
                    item={item}
                    activeMain={activeMain}
                    TfiTrash={TfiTrash}
                  />
                ))
              : filteredPride.map((boot) => (
                  <Second
                    key={boot.id}
                    boot={boot}
                    handleActiveMain={
                      isModalOpen ||
                      isPracticeFormOpen ||
                      isGAIFormOpen ||
                      isContForm ||
                      isThirdForm ||
                      isFourthForm ||
                      isContForms ||
                      isSpecialFormOpen === true
                        ? ""
                        : handleActiveMain
                    }
                    handlePride={handlePride}
                    item={item}
                    activeMain={activeMain}
                    TfiTrash={TfiTrash}
                  />
                ))
            : ""}
          {item === "3" &&
            (inputValue2 === 0 && inputValue4 === 0
              ? third.map((boot) => (
                  <Third
                    key={boot.id}
                    boot={boot}
                    handleActiveMain={
                      isModalOpen ||
                      isPracticeFormOpen ||
                      isGAIFormOpen ||
                      isContForm ||
                      isThirdForm ||
                      isFourthForm ||
                      isContForms ||
                      isSpecialFormOpen === true
                        ? ""
                        : handleActiveMain
                    }
                    handleButtonClickThird={handleButtonClickThird}
                    handleButtonClickFourth={handleButtonClickFourth2}
                    activeMain={activeMain}
                    isThirdForm={isThirdForm}
                    setIsThirdForm={setIsThirdForm}
                    isFourthForm={isFourthForm} // Corrected typo
                    setIsFourthForm={setIsFourthForm}
                    handleButtonClickForms={handleButtonClickForms}
                    item={item}
                    handleDelete={handleDelete}
                    handlePride={handlePride}
                    TfiTrash={TfiTrash}
                    isContForms={isContForms}
                    setIsContForms={setIsContForms}
                  />
                ))
              : inputValue2 === "0"
              ? filteredSemester.map((boot) => (
                  <Third
                    key={boot.id}
                    boot={boot}
                    handleActiveMain={
                      isModalOpen ||
                      isPracticeFormOpen ||
                      isGAIFormOpen ||
                      isContForm ||
                      isThirdForm ||
                      isFourthForm ||
                      isContForms ||
                      isSpecialFormOpen === true
                        ? ""
                        : handleActiveMain
                    }
                    handleButtonClickThird={handleButtonClickThird}
                    handleButtonClickFourth={handleButtonClickFourth2}
                    activeMain={activeMain}
                    isThirdForm={isThirdForm}
                    setIsThirdForm={setIsThirdForm}
                    isFourthForm={isFourthForm} // Corrected typo
                    setIsFourthForm={setIsFourthForm}
                    handleButtonClickForms={handleButtonClickForms}
                    item={item}
                    handleDelete={handleDelete}
                    handlePride={handlePride}
                    TfiTrash={TfiTrash}
                    isContForms={isContForms}
                    setIsContForms={setIsContForms}
                  />
                ))
              : filteredThird.map((boot) => (
                  <Third
                    key={boot.id}
                    boot={boot}
                    handleActiveMain={
                      isModalOpen ||
                      isPracticeFormOpen ||
                      isGAIFormOpen ||
                      isContForm ||
                      isThirdForm ||
                      isFourthForm ||
                      isContForms ||
                      isSpecialFormOpen === true
                        ? ""
                        : handleActiveMain
                    }
                    handleButtonClickThird={handleButtonClickThird}
                    handleButtonClickFourth={handleButtonClickFourth2}
                    activeMain={activeMain}
                    isThirdForm={isThirdForm}
                    setIsThirdForm={setIsThirdForm}
                    isFourthForm={isFourthForm} // Corrected typo
                    setIsFourthForm={setIsFourthForm}
                    handleButtonClickForms={handleButtonClickForms}
                    item={item}
                    handleDelete={handleDelete}
                    handlePride={handlePride}
                    TfiTrash={TfiTrash}
                    isContForms={isContForms}
                    setIsContForms={setIsContForms}
                  />
                )))}
        </div>
      )}
    </div>
  );
};

export default ListSubject;
