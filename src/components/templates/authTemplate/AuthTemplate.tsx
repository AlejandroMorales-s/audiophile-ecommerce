import React, { FC } from "react";
//* Components
import AuthForm from "../../layout/form/AuthForm";
import LogoNavbar from "../../layout/logoNavbar/LogoNavbar";
//* Styles
import styles from "./AuthTemplate.module.scss";
import { Helmet } from "react-helmet-async";

interface Props {
  children: React.ReactNode;
  authType: "login" | "signup";
  pageTitle: string;
  handleSubmit: (values: {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
  }) => void;
}

const AuthTemplate: FC<Props> = ({
  authType,
  children,
  handleSubmit,
  pageTitle,
}) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>{pageTitle} | audiophile</title>
      </Helmet>
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
