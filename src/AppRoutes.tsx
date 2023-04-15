import { Routes, Route } from "react-router-dom";
//* Components
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth">
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
