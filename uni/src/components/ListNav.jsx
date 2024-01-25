import "../index.css";
import styles from "../styles";
import { useList } from "../context/ListContext";

const ListNav = () => {
  const { setItem, item, buttons } = useList();
  const handleId = (selectedItemId) => {
    setItem(selectedItemId);
  };

  return (
    <div className="purple p-[9px] flex justify-between">
      <div className="flex gap-[17px]">
        {buttons.slice(0, 2).map(({ id, label, width }) => (
          <button
            key={id}
            onClick={() => handleId(id)}
            className={`purple ${styles.textDark} py-[16px] w-[${width}px] ${
              id === item ? "border-[3px] border-emerald-300" : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <button
        onClick={() => handleId(buttons[2].id)}
        className={`purple ${styles.textDark} py-[16px] w-[300px] ${
          buttons[2].id === item ? "border-[3px] border-emerald-300" : ""
        }`}
      >
        {buttons[2].label}
      </button>
    </div>
  );
};

export default ListNav;
