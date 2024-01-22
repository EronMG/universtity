import { useList } from "../context/ListContext";
import { TfiTrash } from "react-icons/tfi";
import { FaPencil } from "react-icons/fa6";

const ListSubject = () => {
  const { handleActiveMain, activeMain, handleDelete, lessons } = useList();

  return (
    <div
      className={`h-[90%] overflow-scroll ${
        lessons.length === 0 ? "flex items-center justify-center" : ""
      }`}
    >
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
              <div className=" flex items-center">
                <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-24">
                  ФКТиПМ
                </span>
                <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-48 pl-6">
                  {item.title}
                </span>
                <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-20 pl-3">
                  {item.direction.date}
                </span>
                <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-16 pl-16">
                  {item.direction.name}
                </span>
                <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-3 pl-32">
                  {item.course}
                </span>
                <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-24">
                  {item.lectures}
                </span>
                <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-32">
                  {item.labs}
                </span>
                <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-[115px]">
                  {item.labs}
                </span>
                <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-[135px]">
                  {item.practice}
                </span>
                <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-[125px]">
                  {item.caf}/{item.rucfac}
                </span>
              </div>
              {activeMain === item.id && (
                <div className={`absolute  flex gap-6 right-0 top-16 p-2`}>
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
