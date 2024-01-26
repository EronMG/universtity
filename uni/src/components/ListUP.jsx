import { useCallback, useState } from "react";
import { useList } from "../context/ListContext";
import "../index.css";
import styles from "../styles";
import { Link } from "react-router-dom";
const ListUP = () => {
  const { upArr, item } = useList();

  const [act, setAct] = useState(false);

  const handleActr = useCallback(() => setAct((prev) => !prev), []);
  return (
    <div
      className={`sd pt-[23px] pb-[16px] pl-[11px] pr-[6px] mb-[20px] ${
        item === "2" ? "hidden" : ""
      }`}
    >
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
              onClick={handleActr}
              className={`${
                upArr.length !== 0
                  ? " bg-white border-[1px] border-gray-300 rounded-[30px]"
                  : "button"
              } text-[#74719E] text-[20px] font-nuni font-[700] h-[41px] flex items-center justify-center w-[249px]`}
            >
              Сохранить версию
            </button>
            <Link
              to="/versions"
              className={`${
                upArr.length !== 0
                  ? " bg-white border-[1px] border-gray-300 rounded-[30px]"
                  : "button"
              } text-[#74719E] text-[20px] font-nuni font-[700] h-[41px] flex items-center justify-center w-[249px]`}
            >
              Вернуться к версиям
            </Link>
          </>
        ) : (
          ""
        )}
        {act && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="shadowMain flex flex-col gap-3 w-[371px] px-[25px] py-4 bg-white rounded-lg">
              <span className={`${styles.text} text-center`}>
                Текущая версия сохранена успешно
              </span>
              <span
                onClick={handleActr}
                className="shadowSecond px-2 text-[#74719E] font-nuni font-bold text-2xl text-center cursor-pointer"
              >
                Вернуться к просмотру текущей версии
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListUP;
