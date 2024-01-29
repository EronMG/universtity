/* eslint-disable react/prop-types */
import React from "react";
import ThirdForm from "./ThirdForm";
import FourthForm from "./FourthForm";
import ContForms from "./ContingentForm";
import { FaPencil } from "react-icons/fa6";

const Third = React.memo(
  ({
    boot,
    handleActiveMain,
    handleButtonClickThird,
    handleButtonClickFourth,
    activeMain,
    isThirdForm,
    setIsThirdForm,
    handleButtonClickForms,
    item,
    isFourthForm,
    isContForms,
    setIsFourthForm,
    setIsContForms,
  }) => {
    return (
      <div
        onClick={() => handleActiveMain(boot.id)}
        key={boot.id}
        className={`${
          activeMain === boot.id ? "mainShadow" : ""
        } flex h-[70px] px-[8px] `}
      >
        <div className=" flex items-center gap-[15px]">
          <div
            onClick={
              boot.id === "1" ? handleButtonClickThird : handleButtonClickFourth
            }
            className={`shadowSecond text-[#6C6993] text-xl font-nuni font-bold flex justify-center items-center w-7 h-7 rounded-full cursor-pointer`}
          >
            <span className="relative bottom-1"> ...</span>
          </div>
          <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[169px]">
            {boot.fac}
          </span>
          <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[108px]">
            {boot.choose}
          </span>
          <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center w-[176px]">
            {boot.name}
          </span>
          <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[80px]">
            {boot.students}
          </span>
          <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[121px]">
            {boot.mon}
          </span>
          <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[83px]">
            {boot.dog}
          </span>
          <span className="font-nuni font-[700] text-[20px] text-[#424242] h-fit text-center  w-[158px]">
            {boot.potoc}
          </span>
        </div>

        {isThirdForm && (
          <ThirdForm
            isOpen={isThirdForm}
            onRequestClose={() => setIsThirdForm(false)}
          />
        )}
        {isFourthForm && (
          <FourthForm
            isOpen={isFourthForm}
            onRequestClose={() => setIsFourthForm(false)}
          />
        )}

        {isContForms && (
          <ContForms
            isOpen={isContForms}
            onRequestClose={() => setIsContForms(false)}
          />
        )}
        {activeMain === boot.id && item === "3" ? (
          <div className={`absolute  flex gap-6 right-6 top-4 p-2`}>
            <button
              onClick={() => handleButtonClickForms()} // Add parentheses to invoke the function
              className="justify-center text-primary text-[20px] font-nuni font-[700] flex items-center gap-2"
            >
              <FaPencil className=" text-[16px] text-primary" />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
);

Third.displayName = "Third";

export default Third;
