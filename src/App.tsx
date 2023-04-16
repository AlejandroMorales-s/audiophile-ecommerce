import { useEffect } from "react";
import "./App.scss";
//* Routes
import AppRoutes from "./AppRoutes";
//* Redux
import { useAppDispatch } from "./store";
import { useSelector } from "react-redux";
import { selectNotificationStatus } from "./reducers/notification/notificationReducer";
import { authenticateSession } from "./reducers/auth/authAsyncThunks";
//* Components
import Notification from "./components/common/modals/Notification";
import { useLocation, useNavigate } from "react-router-dom";

const App = () => {
  const notificationOpen = useSelector(selectNotificationStatus);

  const dispatch = useAppDispatch();

  const currentPath = useLocation().pathname;

  const navigate = useNavigate();

  const authRoutes = ["/auth/login", "/auth/sign-up"];

  useEffect(() => {
    dispatch(authenticateSession()).then((res) => {
      if (!res.payload) return;

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
