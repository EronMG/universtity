import ListMain from "../components/ListMain";
import ListNav from "../components/ListNav";
import ListSideBar from "../components/ListSideBar";
import ListUP from "../components/ListUP";
import { useDepartment } from "../context/DepartmentContext";

const List = () => {
  const { isSideBarVisible } = useDepartment();
  return (
    <div className="mt-[10px] ml-[10px] mr-[15px] mb-[21px]">
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
