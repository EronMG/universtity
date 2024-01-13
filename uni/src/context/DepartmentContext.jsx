// DepartmentContext.js
import { createContext, useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
const DepartmentContext = createContext();

const DepartmentProvider = ({ children }) => {
  const [isDepartmentVisible, setIsDepartmentVisible] = useState(false);
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);
  const [newCafedraName, setNewCafedraName] = useState("");
  const [isChangeCafedraVisible, setIsChangeCafedraVisible] = useState(false);
  const [selectedCaffedra, setSelectedCaffedra] = useState(null);
  const [active, setActive] = useState(false);
  const [editingCafedra, setEditingCafedra] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const [arr, setCafedralist] = useState([
    { id: "1", name: "КВТ", change: <MdModeEdit />, trash: <FaTrashAlt /> },
    { id: "2", name: "КГП", change: <MdModeEdit />, trash: <FaTrashAlt /> },
    { id: "3", name: "КТФ", change: <MdModeEdit />, trash: <FaTrashAlt /> },
  ]);

  const [arrCaf, setArrCaf] = useState([
    {
      id: "1",
      name: "ФКТиПМ",
      change: <MdModeEdit />,
      trash: <FaTrashAlt />,
    },
    {
      id: "2",
      name: "Биофак",
      change: <MdModeEdit />,
      trash: <FaTrashAlt />,
    },
    {
      id: "3",
      name: "Физтех",
      change: <MdModeEdit />,
      trash: <FaTrashAlt />,
    },
  ]);

  const [arrYear, setArrYear] = useState([
    {
      id: "1",
      year: "2024",
    },
    {
      id: "2",
      year: "2023",
    },
    {
      id: "3",
      year: "2022",
    },
    {
      id: "4",
      year: "2021",
    },
    {
      id: "5",
      year: "2020",
    },
  ]);

  const handleYearClick = useCallback(
    (year) => {
      if (selectedCaffedra) {
        setSelectedYear(year);
      }
    },
    [selectedCaffedra]
  );

  const handleTextPrimaryClick = useCallback(() => {
    setIsChangeCafedraVisible((prev) => !prev);
  }, []);

  const handleToggleSideBar = useCallback(() => {
    setIsSideBarVisible((prev) => !prev);
  }, []);

  const handleActive = useCallback(() => {
    setActive((prevActive) => !prevActive);
  }, []);

  const showDepartment = useCallback(() => {
    setIsDepartmentVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    setNewCafedraName(""); // Очищаем значение поля ввода
    setSelectedCaffedra(null); // Сбрасываем выбранную кафедру
  }, []);

  const hideDepartment = useCallback(() => {
    setIsDepartmentVisible(false);
  }, []);

  const hideChange = useCallback(() => {
    setIsChangeCafedraVisible(false);
  }, []);

  const handleDeleteCafedra = useCallback(
    (id) => {
      // Реализуйте удаление кафедры из массива по id
      const updatedArrCaf = arr.filter((item) => item.id !== id);
      // Обновите состояние массива
      setCafedralist(updatedArrCaf);
    },
    [arr]
  );

  const handleCaffedraClick = useCallback((name) => {
    setSelectedCaffedra(name);
    setActive((prevActive) => !prevActive);
  }, []);

  const handleEditCafedra = useCallback(
    (caf) => {
      setEditingCafedra(caf);
      setNewCafedraName(caf.name);
      setActive(true);
      setIsChangeCafedraVisible(true); // Показать компонент кафедры
    },
    [setEditingCafedra, setNewCafedraName, setActive]
  );

  const handleSaveCafedra = useCallback(
    (name) => {
      if (editingCafedra) {
        // Редактирование существующей кафедры
        setCafedralist((prevList) =>
          prevList.map((caf) =>
            caf.id === editingCafedra.id ? { ...caf, name } : caf
          )
        );
        setEditingCafedra(null);
      } else {
        // Добавление новой кафедры
        const newCafedra = {
          id: String(arr.length + 1),
          name,
          change: <MdModeEdit />,
          trash: <FaTrashAlt />,
        };
        setCafedralist((prevList) => [...prevList, newCafedra]);
      }

      setNewCafedraName("");
      setSelectedCaffedra(null);
      setActive(false);
      setIsDepartmentVisible(false); // Скрыть компонент кафедры
    },
    [
      arr.length,
      setCafedralist,
      setNewCafedraName,
      setSelectedCaffedra,
      setActive,
      setIsDepartmentVisible,
      editingCafedra,
    ]
  );

  return (
    <DepartmentContext.Provider
      value={{
        isDepartmentVisible,
        showDepartment,
        hideDepartment,
        arr,
        handleSaveCafedra,
        selectedCaffedra,
        arrCaf,
        setArrCaf,
        handleDeleteCafedra,
        handleToggleSideBar,
        isSideBarVisible,
        newCafedraName,
        setNewCafedraName,
        handleTextPrimaryClick,
        isChangeCafedraVisible,
        handleCaffedraClick,
        handleActive,
        active,
        handleCancel,
        handleEditCafedra,
        hideChange,
        selectedYear,
        arrYear,
        setArrYear,
        handleYearClick,
      }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};

const useDepartment = () => {
  const context = useContext(DepartmentContext);
  if (!context) {
    throw new Error("useDepartment must be used within a DepartmentProvider");
  }
  return context;
};

DepartmentProvider.propTypes = {
  children: PropTypes.node,
};

// eslint-disable-next-line react-refresh/only-export-components
export { DepartmentProvider, useDepartment };
