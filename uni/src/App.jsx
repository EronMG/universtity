import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Versions from "./pages/Versions";
import { DepartmentProvider } from "./context/DepartmentContext";

const App = () => {
  return (
    <DepartmentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/versions" element={<Versions />} />
        </Routes>
      </BrowserRouter>
    </DepartmentProvider>
  );
};

export default App;
