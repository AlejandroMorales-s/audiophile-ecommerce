import "./App.scss";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { selectNotificationStatus } from "./reducers/notification/notificationReducer";
import Notification from "./components/common/modals/Notification";

const App = () => {
  const notificationOpen = useSelector(selectNotificationStatus);
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {notificationOpen && <Notification />}
    </>
  );
};

export default App;
