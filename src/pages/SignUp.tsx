import React from "react";
//* Components
import Input from "../components/common/input/Input";
import AuthTemplate from "../components/templates/authTemplate/AuthTemplate";
//* Formik
import { FormikHelpers } from "formik";
//* Redux
import { useAppDispatch } from "../store";
import { createUser } from "../reducers/auth/authReducer";

interface Values {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const dispatch = useAppDispatch();

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    dispatch(createUser(values)).then(() => setSubmitting(false));
  };

  return (
    <AuthTemplate handleSubmit={handleSubmit} authType="signup">
      <Input
        name="firstName"
        label="First Name"
        type="text"
        placeholder="John"
        onChange={change}
      />
      <Input name="lastName" label="Last Name" type="text" placeholder="Doe" />
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

export default SignUp;
