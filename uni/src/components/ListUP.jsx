import { useList } from "../context/ListContext";
import "../index.css";

const ListUP = () => {
  const { upArr, item } = useList();
  return (
    <div className="sd pt-[23px] pb-[16px] pl-[11px] pr-[6px] mb-[20px]">
      <div
        className={`shadowSecond pt-[12px] pl-[11px] pb-[17px] pr-[14px] flex items-center justify-center ${
          item === "3" ? "flex-col gap-2" : ""
        }`}
      >
        <button
          className={`${
            upArr.length !== 0
              ? " bg-white border-[1px] border-gray-300 rounded-[30px]"
              : "button"
          } ${
            item === "3" ? "hidden" : ""
          }  text-[#74719E] text-[20px] font-nuni font-[700] h-[81px] flex items-center justify-center w-[249px]`}
        >
          Сформировать из загруженных УП
        </button>
        {item === "3" ? (
          <>
            <button
              className={`${
                upArr.length !== 0
                  ? " bg-white border-[1px] border-gray-300 rounded-[30px]"
                  : "button"
              } text-[#74719E] text-[20px] font-nuni font-[700] h-[41px] flex items-center justify-center w-[249px]`}
            >
              Сохранить версию
            </button>
            <button
              className={`${
                upArr.length !== 0
                  ? " bg-white border-[1px] border-gray-300 rounded-[30px]"
                  : "button"
              } text-[#74719E] text-[20px] font-nuni font-[700] h-[41px] flex items-center justify-center w-[249px]`}
            >
              Вернуться к версиям
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ListUP;
