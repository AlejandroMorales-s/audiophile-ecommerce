import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.scss";
//* Routes
import AppRoutes from "./AppRoutes";
//* Redux
import { useAppDispatch } from "./store";
import { useSelector } from "react-redux";
import { selectNotificationStatus } from "./reducers/notification/notificationReducer";
import { authenticateSession } from "./reducers/auth/authAsyncThunks";
import { getShoppingCart } from "./reducers/shoppingCart/shoppingCartAsyncThunks";
//* Components
import Notification from "./components/common/modals/Notification";

const App = () => {
  const notificationOpen = useSelector(selectNotificationStatus);

  const dispatch = useAppDispatch();

  const currentPath = useLocation().pathname;

  const navigate = useNavigate();

  const authRoutes = ["/auth/login", "/auth/sign-up"];

  useEffect(() => {
    dispatch(authenticateSession()).then((res) => {
      if (!res.payload) return;

      dispatch(getShoppingCart());

      if (authRoutes.includes(currentPath)) {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <AppRoutes />
      {notificationOpen && <Notification />}
    </>
  );
};

export default App;
