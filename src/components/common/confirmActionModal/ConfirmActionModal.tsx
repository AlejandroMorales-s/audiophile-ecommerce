import { FC } from "react";
import PopupsTemplate from "../../templates/popupsTemplate/PopupsTemplate";
import PrimaryButton from "../primaryButton/PrimaryButton";
import SecondaryButton from "../secondaryButton/SecondaryButton";
import styles from "./ConfirmActionModal.module.scss";

interface ComponentProps {
  closeModal: () => void;
  confirmAction: any;
  title: string;
  message: string;
}

const ConfirmActionModal: FC<ComponentProps> = ({
  closeModal,
  confirmAction,
  message,
  title,
}) => {
  return (
    <PopupsTemplate>
      <div className={styles["confirm-action-modal"]}>
        <h6>{title}</h6>
        <p className="regular-text">{message}</p>
        <div className={styles["buttons-container"]}>
          <SecondaryButton text="No, cancel" handleClick={closeModal} />
          <PrimaryButton text="Continue" handleClick={confirmAction} />
        </div>
      </div>
    </PopupsTemplate>
  );
};

export default ConfirmActionModal;
