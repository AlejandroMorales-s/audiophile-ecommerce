import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
//* Components
import PrimaryButton from "../../common/primaryButton/PrimaryButton";
import SecondaryButton from "../../common/secondaryButton/SecondaryButton";
import UpdateSetting from "../updateSetting/UpdateSetting";
//* Redux
import { useAppDispatch } from "../../../store";
import { logout } from "../../../reducers/auth/authAsyncThunks";
//* Styles
import styles from "./UserSettingsMenu.module.scss";
//* Interfaces
import { UserSetting } from "../../../commonInterfaces";

interface Props {
  settings: UserSetting[];
}

const UserSettingsMenu: FC<Props> = ({ settings }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [optionToUpdate, setOptionToUpdate] = useState<UserSetting>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleInfoToUpdate = ({ option }: { option: UserSetting }) => {
    setOptionToUpdate(option);
    toggleMenu();
  };

  const handleLogout = () =>
    dispatch(logout()).then(() => navigate("/auth/login"));

  return (
    <section className={styles["user-settings-container"]}>
      <h4>Settings</h4>
      {settings.map((option) => {
        const { data, name } = option;

        return (
          <div key={name} className={styles["option-container"]}>
            <div>
              <p className="regular-text">{name}:</p>
              <p className="regular-text">{data}</p>
            </div>
            <SecondaryButton
              handleClick={() => handleInfoToUpdate({ option })}
              buttonVariant="second-variant"
              text="Modify"
            />
          </div>
        );
      })}
      {menuOpen && (
        <UpdateSetting option={optionToUpdate} toggleMenu={toggleMenu} />
      )}
      <PrimaryButton handleClick={handleLogout} text="Logout" />
    </section>
  );
};

export default UserSettingsMenu;
