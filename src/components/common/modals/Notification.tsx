//* Redux
import { useSelector } from "react-redux";
import {
  resetNotification,
  selectNotificationClosing,
  selectNotificationData,
  setClosingNotification,
} from "../../../reducers/notification/notificationReducer";
import { useAppDispatch } from "../../../store";
//* Icons
import {
  AiOutlineClose,
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { MdError } from "react-icons/md";
//* Styles
import styles from "./Notification.module.scss";

export default function Notification() {
  //* Selectors
  const data = useSelector(selectNotificationData);
  const notificationClosing = useSelector(selectNotificationClosing);

  const dispatch = useAppDispatch();

  //* Handle closing notification
  const closeNotification = () => {
    dispatch(setClosingNotification());
    setTimeout(() => {
      dispatch(resetNotification());
    }, 650);
  };

  const notificationTypesIcons = {
    info: (
      <AiFillInfoCircle
        className={`${styles.icon} ${styles["status-color"]}`}
      />
    ),
    warning: <MdError className={`${styles.icon} ${styles["status-color"]}`} />,
    success: (
      <AiFillCheckCircle
        className={`${styles.icon} ${styles["status-color"]}`}
      />
    ),
    error: (
      <AiFillCloseCircle
        className={`${styles.icon} ${styles["status-color"]}`}
      />
    ),
  };

  return (
    <div
      className={`${styles.notification} ${styles[data.type]} ${
        notificationClosing
          ? styles["closing-notification"]
          : styles["opening-notification"]
      }`}
    >
      {notificationTypesIcons[data.type]}
      <div>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.message}>{data.message}</p>
      </div>
      <AiOutlineClose onClick={closeNotification} className={styles.icon} />
    </div>
  );
}
