// DepartmentContext.js
import { createContext, useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [zap, setZap] = useState(false);
  const [up, setUp] = useState(false);
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
  return (
    <ListContext.Provider value={{ handleZap, zap, handleUp, up }}>
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
