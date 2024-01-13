import Caffedra from "../components/Caffedra";
import MainWindow from "../components/MainWindow";
import SideBar from "../components/SideBar";
import Version from "../components/Version";
import Year from "../components/Year";

const Main = () => {
  return (
    <div className="pr-[21px] pl-[19px] pt-[13px] pb-[37px] flex gap-[19px] h-[100vh]">
      <SideBar>
        <Caffedra />
        <Year />
        <Version />
      </SideBar>
      <MainWindow />
    </div>
  );
};

export default Main;
