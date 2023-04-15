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

const App = () => {
  const notificationOpen = useSelector(selectNotificationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authenticateSession());
  }, []);

  return (
    <>
      <AppRoutes />
      {notificationOpen && <Notification />}
    </>
  );
};

export default App;
