import { Routes, Route } from "react-router-dom";
//* Components
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProductsCategory from "./pages/ProductsCategory";
import ProductDetails from "./pages/ProductDetails";
import UserSettings from "./pages/UserSettings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth">
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/user">
        <Route path="settings" element={<UserSettings />} />
      </Route>
      <Route path="/products">
        <Route path=":id" element={<ProductDetails />} />
        <Route path="category">
          <Route
            path="headphones"
            element={<ProductsCategory categoryName="Headphones" />}
          />
          <Route
            path="speakers"
            element={<ProductsCategory categoryName="Speakers" />}
          />
          <Route
            path="earphones"
            element={<ProductsCategory categoryName="Earphones" />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
