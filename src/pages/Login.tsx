import { useState } from "react";
//* Components
import Input from "../components/common/input/Input";
import AuthTemplate from "../components/templates/authTemplate/AuthTemplate";
//* Formik
import { FormikHelpers } from "formik";
//* Redux
import { useAppDispatch } from "../store";
import { loginWithEmail } from "../reducers/auth/authAsyncThunks";
//* Helpers
import { checkObjectOfInputs } from "../helpers";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

interface Values {
  email: string;
  password: string;
}

interface InputErrors {
  [key: string]: string;
}

export default function Login() {
  const [inputErrors, setInputErrors] = useState<InputErrors>({});

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    const currentInputErrors = checkObjectOfInputs(values);

    setInputErrors(currentInputErrors);

    if (Object.keys(currentInputErrors).length > 0) {
      setSubmitting(false);
      return;
    }

    dispatch(loginWithEmail(values)).then((res) => {
      setSubmitting(false);
      if (res.payload) {
        navigate("/");
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Login | audiophile</title>
      </Helmet>
      <AuthTemplate handleSubmit={handleSubmit} authType="login">
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="example@example.com"
          inputError={inputErrors.email}
        />
        <Input
          name="password"
          label="password"
          type="password"
          placeholder="********"
          inputError={inputErrors.password}
        />
      </AuthTemplate>
    </>
  );
}
