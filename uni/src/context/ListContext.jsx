// DepartmentContext.js
import { createContext, useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [zap, setZap] = useState(false);
  const [up, setUp] = useState(false);
  const [filter, setFilter] = useState(false);
  const [course, setCourse] = useState(false);
  const [fac, setFac] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGAIFormOpen, setIsGAIFormOpen] = useState(false);
  const [isSpecialFormOpen, setIsSpeacilFormOpen] = useState(false);
  const [isContForm, setIsContForm] = useState(false);
  const [isContForms, setIsContForms] = useState(false);
  const [isThirdForm, setIsThirdForm] = useState(false);
  const [isFourthForm, setIsFourthForm] = useState(false);
  const [isPracticeFormOpen, setIsPracticeFormOpen] = useState(false);

  const [item, setItem] = useState("1");
  const buttons = [
    { id: "1", label: "Список дисциплин", width: 300 },
    { id: "2", label: "Контингент", width: 300 },
    { id: "3", label: "Документ “Объемы”", width: 300 },
  ];

  const upArr = [
    {
      id: "1",
      name: "2023 Фундаментальная инф...",
    },
    {
      id: "2",
      name: "2023 Фундаментальная инф...",
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const [arrcourse, setArrcourse] = useState([
    {
      id: "1",
      date: "01.02.03",
    },
    {
      id: "2",
      date: "04.05.13",
    },
    {
      id: "3",
      date: "02.04.05",
    },
  ]);
  const [activeMain, setActiveMain] = useState({});
  const [lessons, setLessons] = useState([]);

  const addLesson = (lesson) => {
    setLessons([...lessons, lesson]);
  };
  //! Cоздать запись Функицонал

  const handleZap = useCallback(() => {
    setZap((prev) => !prev);
    setUp(false);
    setFilter(false);
  }, []);

  //! Cоздать запись Функицонал

  // ! Загруженные из УП Функционал

  const handleUp = useCallback(() => {
    setUp((prev) => !prev);
    setZap(false);
    setFilter(false);
  }, []);

  // ! Загруженные из УП Функционал

  // TODO: ADD FUNCTIONAL FOR MAINSCREEN

  const handleActiveMain = useCallback(
    (id) => setActiveMain((prevId) => (prevId === id ? null : id)),
    [setActiveMain]
  );

  const handleAddDiscipline = (newDiscipline) => {
    setLessons((prevLessons) => [...prevLessons, newDiscipline]);
  };

  // TODO: ADD FUNCTIONAL FOR MAINSCREEN

  //! DELETE

  const handleDelete = (id) => {
    const updatedLessons = lessons.filter((item) => item.id !== id);
    setLessons(updatedLessons);
    setActiveMain(null); // Clear activeMain after deletion if needed
  };

  //! DELETE

  // ? FILTER

  const handleFilter = useCallback(() => {
    setFilter((prev) => !prev);
    setUp(false);
    setZap(false);
  }, []);
  const handleCourse = useCallback(() => {
    setCourse((prev) => !prev), setFac(false);
  }, []);
  const handleFac = useCallback(() => {
    setFac((prev) => !prev);
    setCourse(false);
  }, []);
  // ? FILTER

  const getNewId = () => {
    const maxId = Math.max(...lessons.map((item) => item.id), 0);
    return maxId + 1;
  };

  return (
    <ListContext.Provider
      value={{
        handleZap,
        zap,
        handleUp,
        up,
        handleActiveMain,
        activeMain,
        handleDelete,
        lessons,
        handleFilter,
        handleCourse,
        course,
        filter,
        arrcourse,
        handleAddDiscipline,
        addLesson,
        isModalOpen,
        setIsModalOpen,
        getNewId,
        isPracticeFormOpen,
        setIsPracticeFormOpen,
        isGAIFormOpen,
        setIsGAIFormOpen,
        isSpecialFormOpen,
        setIsSpeacilFormOpen,
        upArr,
        handleFac,
        setItem,
        item,
        fac,
        buttons,
        setIsContForm,
        isContForm,
        setIsThirdForm,
        isThirdForm,
        setIsFourthForm,
        isFourthForm,
        setIsContForms,
        isContForms,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useDepartment must be used within a DepartmentProvider");
  }
  return context;
};

ListProvider.propTypes = {
  children: PropTypes.node,
};

// eslint-disable-next-line react-refresh/only-export-components
export { ListProvider, useList };
