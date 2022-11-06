import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogInPage } from "../pages/pages";
import RequireAuth from "../hoc/RequireAuth";
import Error404 from "../components/404";
import MainPage from "../pages/MainPage/MainPage";

const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogInPage/>} />
          <Route path="/" element={
            <RequireAuth >
                <MainPage/>
            </RequireAuth>
          } />
          <Route path="*" element={<Error404 />}/>
        </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
