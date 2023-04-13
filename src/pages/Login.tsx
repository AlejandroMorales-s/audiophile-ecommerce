//* Components
import Input from "../components/common/input/Input";
import AuthTemplate from "../components/templates/authTemplate/AuthTemplate";
//* Formik
import { FormikHelpers } from "formik";
//* Redux
import { useAppDispatch } from "../store";
import { loginWithEmail } from "../reducers/auth/authReducer";

interface Values {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    dispatch(loginWithEmail(values)).then(() => setSubmitting(false));
  };

  return (
    <AuthTemplate handleSubmit={handleSubmit} authType="login">
      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="example@example.com"
      />
      <Input
        name="password"
        label="password"
        type="password"
        placeholder="********"
      />
    </AuthTemplate>
  );
};

export default Login;
