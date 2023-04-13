import { FC } from "react";
//* Formik
import { Formik, Form, FormikHelpers } from "formik";
//* Components
import PrimaryButton from "../../common/primaryButton/PrimaryButton";
//* Styles
import styles from "./AuthForm.module.scss";

interface Props {
  children: React.ReactNode;
  initialValues: {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
  };
  onSubmit: (
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
  buttonText: string;
  authType: "login" | "signup";
}

const links = {
  login: {
    text: "Don't have an account? Sign up",
    link: "/signup",
  },
  signup: {
    text: "Already have an account? Login",
    link: "/login",
  },
};

const AuthForm: FC<Props> = ({
  children,
  initialValues,
  onSubmit,
  buttonText,
  authType,
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <>
          <Form className={styles.container}>
            {children}
            <div className={styles["links-container"]}>
              <a className={styles.link} href={links[authType].link}>
                {links[authType].text}
              </a>
              <PrimaryButton
                text={buttonText}
                type="submit"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              />
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default AuthForm;
