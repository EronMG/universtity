import { useEffect, useState } from "react";
import ListMain from "../components/ListMain";
import ListNav from "../components/ListNav";
import ListSideBar from "../components/ListSideBar";
import ListUP from "../components/ListUP";
import { useDepartment } from "../context/DepartmentContext";
import "../index.css";

const List = () => {
  const { isSideBarVisible } = useDepartment();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fadeInInterval = setInterval(() => {
      setOpacity((prevOpacity) => {
        const newOpacity = prevOpacity + 0.15; // Adjust the increment as needed
        return newOpacity >= 1 ? 1 : newOpacity;
      });
    }, 50); // Adjust the interval as needed

    return () => {
      clearInterval(fadeInInterval);
    };
  }, []);
  return (
    <div
      style={{ opacity }}
      className="mt-[10px] ml-[10px] mr-[15px] mb-[21px]"
    >
      <ListNav />
      <div className="flex gap-[23px] mt-[15px] h-[86vh]">
        <div
          className={`flex flex-col gap-[47px] ${
            isSideBarVisible === false ? "hidden" : "flex"
          }`}
        >
          <ListSideBar />
          <ListUP />
        </div>
        <ListMain />
      </div>
    </div>
  );
};

export default List;
