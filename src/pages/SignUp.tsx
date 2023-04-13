import { useState } from "react";
//* Components
import Input from "../components/common/input/Input";
import AuthTemplate from "../components/templates/authTemplate/AuthTemplate";
//* Formik
import { FormikHelpers } from "formik";
//* Redux
import { useAppDispatch } from "../store";
import { createUser } from "../reducers/auth/authReducer";
//* Helpers
import { checkObjectOfInputs } from "../helpers";

interface Values {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

interface InputErrors {
  [key: string]: string;
}

const SignUp = () => {
  const [inputErrors, setInputErrors] = useState<InputErrors>({});

  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    const currentInputErrors = checkObjectOfInputs(values);

    setInputErrors(currentInputErrors);

    if (Object.keys(currentInputErrors).length > 0) {
      setSubmitting(false);
      return;
    }

    dispatch(createUser(values)).then(() => setSubmitting(false));
    setSubmitting(false);
  };

  return (
    <AuthTemplate handleSubmit={handleSubmit} authType="signup">
      <Input
        name="firstName"
        label="First Name"
        type="text"
        placeholder="John"
        inputError={inputErrors.firstName}
      />
      <Input
        inputError={inputErrors.lastName}
        name="lastName"
        label="Last Name"
        type="text"
        placeholder="Doe"
      />
      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="example@example.com"
        inputError={inputErrors.email}
      />
      <Input
        inputError={inputErrors.password}
        name="password"
        label="password"
        type="password"
        placeholder="********"
      />
    </AuthTemplate>
  );
};

export default SignUp;
