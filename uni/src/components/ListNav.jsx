import "../index.css";
import styles from "../styles";

const ListNav = () => {
  const buttons = [
    { label: "Список дисциплин", width: 300 },
    { label: "Контингент", width: 300 },
    { label: "Документ “Объемы”", width: 300 },
  ];

  return (
    <div className="purple p-[9px] flex justify-between">
      <div className="flex gap-[17px]">
        {buttons.slice(0, 2).map(({ label, width }) => (
          <button
            key={label}
            className={`purple ${styles.textDark} py-[16px] w-[${width}px]`}
          >
            {label}
          </button>
        ))}
      </div>
      <button className={`purple ${styles.textDark} py-[16px] w-[300px]`}>
        {buttons[2].label}
      </button>
    </div>
  );
};

export default ListNav;
