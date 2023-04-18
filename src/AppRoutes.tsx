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
      <Route path="/products">
        <Route path=":id" element={<h1>Product Details</h1>} />
        <Route path="category">
          <Route path="headphones" element={<div>headphones</div>} />
          <Route path="speakers" element={<div>speakers</div>} />
          <Route path="earphones" element={<div>earphones</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
