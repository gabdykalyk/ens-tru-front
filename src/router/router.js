import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewCodesPage from "../pages/NewCodesPage/NewCodesPage";
import { LogInPage } from "../pages/pages";

const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogInPage/>} />
          <Route path="/" element={<NewCodesPage/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
