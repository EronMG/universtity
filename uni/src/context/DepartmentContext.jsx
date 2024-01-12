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
  const [selectedCafedra, setSelectedCafedra] = useState(null);
  const handleTextPrimaryClick = useCallback(() => {
    setIsChangeCafedraVisible((prev) => !prev);
  }, []);
  const handleToggleSideBar = useCallback(() => {
    setIsSideBarVisible((prev) => !prev);
  }, []);

  const showDepartment = useCallback(() => {
    setIsDepartmentVisible(true);
  }, []);

  const hideDepartment = useCallback(() => {
    setIsDepartmentVisible(false);
  }, []);

  const [arr, setCafedralist] = useState([
    { id: "1", name: "КВТ", change: <MdModeEdit />, trash: <FaTrashAlt /> },
    { id: "2", name: "КГП", change: <MdModeEdit />, trash: <FaTrashAlt /> },
    { id: "3", name: "КТФ", change: <MdModeEdit />, trash: <FaTrashAlt /> },
  ]);

  const handleDeleteCafedra = useCallback(
    (id) => {
      // Реализуйте удаление кафедры из массива по id
      const updatedArrCaf = arr.filter((item) => item.id !== id);
      // Обновите состояние массива
      setCafedralist(updatedArrCaf);
    },
    [arr]
  );

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
  const handleSaveCafedra = useCallback(
    (name) => {
      // Добавление новой кафедры в массив
      const newCafedra = {
        id: String(arr.length + 1),
        name,
        change: <MdModeEdit />,
        trash: <FaTrashAlt />,
      };
      setCafedralist((prevList) => [...prevList, newCafedra]);
    },
    [arr.length]
  );
  const handleSaveChanges = useCallback(() => {
    const updatedArrCaf = arrCaf.map((item) =>
      item.name === selectedCafedra ? { ...item, name: newCafedraName } : item
    );
    // Обновляем состояние массива
    setArrCaf(updatedArrCaf);
    setSelectedCafedra(null); // Сбрасываем выбранную кафедру
  }, [arrCaf, newCafedraName, selectedCafedra, setArrCaf, setSelectedCafedra]);

  return (
    <DepartmentContext.Provider
      value={{
        isDepartmentVisible,
        showDepartment,
        hideDepartment,
        arr,
        handleSaveCafedra,
        arrCaf,
        setArrCaf,
        handleDeleteCafedra,
        handleToggleSideBar,
        isSideBarVisible,
        selectedCafedra,
        setSelectedCafedra,
        newCafedraName,
        setNewCafedraName,
        handleTextPrimaryClick,
        isChangeCafedraVisible,
        handleSaveChanges,
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
