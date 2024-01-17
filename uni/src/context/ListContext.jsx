// DepartmentContext.js
import { createContext, useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [zap, setZap] = useState(false);
  const [up, setUp] = useState(false);
  const [activeMain, setActiveMain] = useState({});
  const [lessons, setLessons] = useState([
    {
      id: "1",
      fac: "ФКТиПМ",
      name: "Алгебра",
      code: "02.03.02",
      title: "ФИИТ",
      course: "1",
      lec: "40",
      lab: "20",
    },
    {
      id: "2",
      fac: "ФКТиПМ",
      name: "АиПиС",
      code: "02.03.02",
      title: "ФИИТ",
      course: "3",
      lec: "10",
      lab: "10",
    },
    {
      id: "3",
      fac: "ФКТиПМ",
      name: "Математическое моделирование",
      code: "02.03.02",
      title: "ФИИТ",
      course: "2",
      lec: "20",
      lab: "30",
    },
    {
      id: "4",
      fac: "ФКТиПМ",
      name: "Алгебра",
      code: "02.03.02",
      title: "ФИИТ",
      course: "1",
      lec: "40",
      lab: "20",
    },
    {
      id: "5",
      fac: "ФКТиПМ",
      name: "АиПиС",
      code: "02.03.02",
      title: "ФИИТ",
      course: "3",
      lec: "10",
      lab: "10",
    },
    {
      id: "6",
      fac: "ФКТиПМ",
      name: "Математическое моделирование",
      code: "02.03.02",
      title: "ФИИТ",
      course: "2",
      lec: "20",
      lab: "30",
    },
    {
      id: "7",
      fac: "ФКТиПМ",
      name: "Алгебра",
      code: "02.03.02",
      title: "ФИИТ",
      course: "1",
      lec: "40",
      lab: "20",
    },
    {
      id: "8",
      fac: "ФКТиПМ",
      name: "АиПиС",
      code: "02.03.02",
      title: "ФИИТ",
      course: "3",
      lec: "10",
      lab: "10",
    },
    {
      id: "9",
      fac: "ФКТиПМ",
      name: "Математическое моделирование",
      code: "02.03.02",
      title: "ФИИТ",
      course: "2",
      lec: "20",
      lab: "30",
    },
    {
      id: "10",
      fac: "ФКТиПМ",
      name: "Алгебра",
      code: "02.03.02",
      title: "ФИИТ",
      course: "1",
      lec: "40",
      lab: "20",
    },
    {
      id: "11",
      fac: "ФКТиПМ",
      name: "АиПиС",
      code: "02.03.02",
      title: "ФИИТ",
      course: "3",
      lec: "10",
      lab: "10",
    },
    {
      id: "12",
      fac: "ФКТиПМ",
      name: "Математическое моделирование",
      code: "02.03.02",
      title: "ФИИТ",
      course: "2",
      lec: "20",
      lab: "30",
    },
    {
      id: "13",
      fac: "ФКТиПМ",
      name: "Алгебра",
      code: "02.03.02",
      title: "ФИИТ",
      course: "1",
      lec: "40",
      lab: "20",
    },
    {
      id: "14",
      fac: "ФКТиПМ",
      name: "АиПиС",
      code: "02.03.02",
      title: "ФИИТ",
      course: "3",
      lec: "10",
      lab: "10",
    },
    {
      id: "15",
      fac: "ФКТиПМ",
      name: "Математическое моделирование",
      code: "02.03.02",
      title: "ФИИТ",
      course: "2",
      lec: "20",
      lab: "30",
    },
  ]);

  //! Cоздать запись Функицонал

  const handleZap = useCallback(() => {
    setZap((prev) => !prev);
    setUp(false);
  }, []);

  //! Cоздать запись Функицонал

  // ! Загруженные из УП Функционал

  const handleUp = useCallback(() => {
    setUp((prev) => !prev);
    setZap(false);
  }, []);

  // ! Загруженные из УП Функционал

  // TODO: ADD FUNCTIONAL FOR MAINSCREEN

  const handleActiveMain = useCallback(
    (id) => setActiveMain((prevId) => (prevId === id ? null : id)),
    [setActiveMain]
  );

  // TODO: ADD FUNCTIONAL FOR MAINSCREEN

  //! DELETE

  const handleDelete = (id) => {
    const updatedLessons = lessons.filter((item) => item.id !== id);
    setLessons(updatedLessons);
    setActiveMain(null); // Clear activeMain after deletion if needed
  };

  //! DELETE
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
