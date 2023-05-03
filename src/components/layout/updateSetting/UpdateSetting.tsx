import { FC } from "react";
//* Components
import PopupsTemplate from "../../templates/popupsTemplate/PopupsTemplate";
import SecondaryButton from "../../common/secondaryButton/SecondaryButton";
import PrimaryButton from "../../common/primaryButton/PrimaryButton";
import Input from "../../common/input/Input";
import ComponentSkeleton from "./ComponentSkeleton";
//* Redux
import { useSelector } from "react-redux";
import { selectLoadingUserUpload } from "../../../reducers/updateUser/updateUserReducer";
//* Formik
import { Formik, Form } from "formik";
//* Hooks
import useUpdateUserInfo from "../../../hooks/useUpdateUserInfo";
//* Styles
import styles from "./UpdateSetting.module.scss";
//* Interfaces
import { ComponentProps, InputsType } from "./interfaces";

//* Initial values
const formInitialValues: { [key: string]: any } = {
  email: { currentPassword: "", newEmail: "" },
  password: { currentPassword: "", newPassword: "" },
  name: { currentPassword: "", firstName: "", lastName: "" },
};

//* Inputs
const inputsType: InputsType = {
  password: [{ name: "newPassword", label: "New password", type: "password" }],
  email: [{ name: "newEmail", label: "New email", type: "email" }],
  name: [
    { name: "firstName", label: "New first name", type: "text" },
    { name: "lastName", label: "New last name", type: "text" },
  ],
};

const UpdateSetting: FC<ComponentProps> = ({ option, toggleMenu }) => {
  const { inputErrors, insertValuesToValidate } = useUpdateUserInfo();

  const loadingUserUpdate = useSelector(selectLoadingUserUpload);

  const handleSubmit = (values: { [key: string]: string }) => {
    insertValuesToValidate({ inputs: values });
  };

  return (
    <PopupsTemplate>
      <div className={styles["update-setting-container"]}>
        <h6>Update {option?.name}</h6>
        {option ? (
          <Formik
            onSubmit={(values) =>
              handleSubmit({ ...values, type: option.name.toLowerCase() })
            }
            initialValues={formInitialValues[option.name.toLowerCase()]}
          >
            <Form className={styles["form-container"]}>
              <Input
                label="Type your password"
                name="currentPassword"
                type="password"
                inputError={inputErrors.currentPassword}
              />

              {option &&
                inputsType[option.name.toLowerCase()].map((input) => {
                  const { label, name, type } = input;
                  return (
                    <Input
                      key={name}
                      inputError={inputErrors[name]}
                      label={label}
                      name={name}
                      type={type}
                    />
                  );
                })}
              <div className={styles["buttons-container"]}>
                <PrimaryButton
                  disabled={loadingUserUpdate}
                  text="Update"
                  type="submit"
                />
                <SecondaryButton
                  buttonVariant="second-variant"
                  handleClick={toggleMenu}
                  text="Cancel"
                />
              </div>
            </Form>
          </Formik>
        ) : (
          <ComponentSkeleton />
        )}
      </div>
    </PopupsTemplate>
  );
};

export default UpdateSetting;
