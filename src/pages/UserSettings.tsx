//* Components
import GeneralTemplate from "../components/templates/generalTemplate/GeneralTemplate";
import UserSettingsMenu from "../components/layout/userSettings/UserSettingsMenu";
//* Redux
import { useSelector } from "react-redux";
import { selectUserData } from "../reducers/auth/authReducer";

const UserSettings = () => {
  const userData = useSelector(selectUserData);

  const options = [
    {
      name: "Name",
      data: `${userData?.first_name} ${userData?.last_name}`,
    },
    {
      name: "Email",
      data: userData?.email,
    },
    {
      name: "Password",
      data: "********",
    },
  ];

  return (
    <GeneralTemplate title="Settings">
      <UserSettingsMenu settings={options} />
    </GeneralTemplate>
  );
};

export default UserSettings;
