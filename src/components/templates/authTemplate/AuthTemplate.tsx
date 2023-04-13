import React, { FC } from "react";
//* Components
import AuthForm from "../../layout/form/AuthForm";
import LogoNavbar from "../../layout/logoNavbar/LogoNavbar";
//* Formik
import { FormikHelpers } from "formik";
//* Styles
import styles from "./AuthTemplate.module.scss";

interface Props {
  children: React.ReactNode;
  authType: "login" | "signup";
  handleSubmit: (
    values: {
      firstName?: string;
      lastName?: string;
      email: string;
      password: string;
    },
    formikHelpers: FormikHelpers<{
      firstName?: string;
      lastName?: string;
      email: string;
      password: string;
    }>
  ) => void;
}

const AuthTemplate: FC<Props> = ({ authType, children, handleSubmit }) => {
  return (
    <div className={styles.container}>
      <LogoNavbar />
      <div className={styles["form-container"]}>
        <AuthForm
          authType={authType}
          buttonText={authType === "signup" ? "sign up" : "login"}
          onSubmit={handleSubmit}
        >
          <h4>{authType === "signup" ? "sign up" : "login"}</h4>
          {children}
        </AuthForm>
      </div>
    </div>
  );
};

export default AuthTemplate;
