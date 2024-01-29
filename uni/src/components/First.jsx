/* eslint-disable react/prop-types */
import { FaPencil } from "react-icons/fa6";
import ContForm from "./ContForm";

const First = ({
  boot,
  handleActiveMain,
  item,
  activeMain,
  TfiTrash,
  isContForm,
  setIsContForm,
  handleDelete,
}) => {
  return (
    <div
      onClick={() => handleActiveMain(boot.id)}
      key={boot.id}
      className={`${
        activeMain === boot.id ? "mainShadow" : ""
      } flex h-[70px] px-[20px] w-full`}
    >
      <div className=" flex items-center w-full">
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-24">
          ФКТиПМ
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-48 pl-6">
          {boot.title}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-20 pl-5">
          {boot.direction.date}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-16 pl-[85px]">
          {boot.direction.name}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-3 pl-32">
          {boot.course}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-28">
          {boot.lectures}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-32">
          {boot.labs}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-[130px]">
          {boot.labs}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-[130px]">
          {boot.practice}
        </span>
        <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-6 pl-[115px]">
          {boot.caf}/{boot.rucfac}
        </span>
      </div>
      {activeMain === boot.id && item !== "3" ? (
        <div className={`absolute  flex gap-6 right-0 top-16 p-2`}>
          <button className="list w-[160px] h-[33px] justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2">
            Изменить
            <FaPencil className="text-black text-[16px]" />
          </button>
          <button
            onClick={() => handleDelete(boot.id)}
            className="list w-[160px] h-[33px] justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2"
          >
            Удалить <TfiTrash className="text-black text-[16px]" />
          </button>
        </div>
      ) : (
        ""
      )}

      {isContForm && (
        <ContForm
          isOpen={isContForm}
          onRequestClose={() => setIsContForm(false)}
        />
      )}
    </div>
  );
};

export default First;
