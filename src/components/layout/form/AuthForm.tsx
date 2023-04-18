import { FC } from "react";
//* Formik
import { Formik, Form } from "formik";
//* Components
import PrimaryButton from "../../common/primaryButton/PrimaryButton";
//* Styles
import styles from "./AuthForm.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoadingUser } from "../../../reducers/auth/authReducer";

//* Interfaces
interface Props {
  children: React.ReactNode;
  onSubmit: (values: {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
  }) => void;
  buttonText: string;
  authType: "login" | "signup";
}

//* Links
const links = {
  login: {
    text: "Don't have an account? Sign up",
    link: "/auth/sign-up",
  },
  signup: {
    text: "Already have an account? Login",
    link: "/auth/login",
  },
};

//* Initial values
const values = {
  login: {
    email: "",
    password: "",
  },
  signup: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
};

const AuthForm: FC<Props> = ({ children, onSubmit, buttonText, authType }) => {
  const isSubmitting = useSelector(selectLoadingUser);

  return (
    <Formik initialValues={values[authType]} onSubmit={onSubmit}>
      <Form className={styles.container}>
        {children}
        <div className={styles["links-container"]}>
          <Link className={styles.link} to={links[authType].link}>
            {links[authType].text}
          </Link>
          <PrimaryButton
            text={buttonText}
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default AuthForm;
