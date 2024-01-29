/* eslint-disable react/prop-types */
import Modal from "react-modal";
import "../index.css";

// eslint-disable-next-line react/prop-types
const ContForms = ({ isOpen, onRequestClose }) => {
  const arr = [
    { id: "1", name: "Контингент (Бюджет)", count: "33" },
    { id: "2", name: "Контингент (Договор)", count: "33" },
    { id: "3", name: "Количество потоков", count: "33" },
    { id: "4", name: "Количество групп", count: "33" },
    { id: "5", name: "Количество подгрупп", count: "33" },
  ];

  const handleBackClick = () => {
    // Закройте модальное окно при нажатии кнопки "Назад"
    onRequestClose();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Модальная форма"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-md outline-none"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex justify-center items-center"
      >
        <div className="bb w-[698px] h-[449px] overflow-scroll flex flex-col items-center py-5 gap-5">
          <div className="flex  gap-4">
            <h2 className="shadowSecond h-[45px] text-primary text-xl font-nuni font-bold w-[652px] flex items-center justify-center">
              Название дисциплины
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {arr.map((item) => (
              <div key={item.id} className="flex gap-5">
                <div className="shadowSecond px-1 h-[41px] w-[494px] gap-1 flex items-center justify-center text-[#6C6993] text-xl font-nuni font-bold">
                  {item.name}
                  <span className="text-[#6C6993] text-base font-nuni font-bold">
                    {" "}
                    {item.title}
                  </span>
                </div>
                <div className="relative shadowSecond h-[41px] w-[138px] flex items-center justify-center  text-[#424242] text-xl font-nuni font-bold">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-end justify-between w-full px-5">
            <button className="shadowWhite text-primary font-2xl font-nuni font-bold flex justify-center items-center w-[341px] h-[55px]">
              Сохранить контингент
            </button>
            <button
              onClick={handleBackClick}
              type="button"
              className="shadowWhite text-[#74719E] font-2xl font-nuni font-bold flex justify-center items-center w-[192px] h-[55px]"
            >
              Отмена
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContForms;
