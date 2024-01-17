import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Versions from "./pages/Versions";
import { DepartmentProvider } from "./context/DepartmentContext";
import List from "./pages/List";
import { ListProvider } from "./context/ListContext";

const App = () => {
  return (
    <ListProvider>
      <DepartmentProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/versions" element={<Versions />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </BrowserRouter>
      </DepartmentProvider>
    </ListProvider>
  );
};

export default App;
