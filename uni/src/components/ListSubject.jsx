import { useList } from "../context/ListContext";
import { TfiTrash } from "react-icons/tfi";
import { FaPencil } from "react-icons/fa6";

const ListSubject = () => {
  const { handleActiveMain, activeMain, handleDelete, lessons } = useList();

  const spanWidths = {
    fac: { width: "100px", "padding-left": "0px" },
    name: { width: "169px", "padding-left": "19px" },
    code: { width: "82px", "padding-left": "30px" },
    title: { width: "61px", "padding-left": "75px" },
    course: { width: "12px", "padding-left": "134px" },
    lec: { width: "24px", "padding-left": "97px" },
    lab: { width: "24px", "padding-left": "120px" },
  };

  return (
    <div className="h-[90%] overflow-scroll">
      {lessons.length === 0 ? (
        <div className="shadowWhite text-[#424242] text-[14px] font-nuni font-[700] w-[262px] h-[55px] flex items-center justify-center">
          Записей нет
        </div>
      ) : (
        <div className="flex flex-col w-full">
          {lessons.map((item) => (
            <div
              onClick={() => handleActiveMain(item.id)}
              key={item.id}
              className={`${
                activeMain === item.id ? "mainShadow" : ""
              } flex h-[70px] border-t-2 px-[20px] w-full`}
            >
              {item.title}
              <div className="w-[852px] flex items-center">
                {Object.keys(item).map(
                  (key) =>
                    key !== "id" && (
                      <span
                        style={spanWidths[key]}
                        key={key}
                        className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center"
                      >
                        {item[key]}
                      </span>
                    )
                )}
              </div>
              {activeMain === item.id && (
                <div className="absolute right-0 -top-12 p-2 flex gap-6">
                  <button className="list w-[160px] h-[33px] justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2">
                    Изменить
                    <FaPencil className="text-black text-[16px]" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="list w-[160px] h-[33px] justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2"
                  >
                    Удалить <TfiTrash className="text-black text-[16px]" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListSubject;
