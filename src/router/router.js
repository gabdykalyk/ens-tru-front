import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogInPage } from "../pages/pages";

const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
