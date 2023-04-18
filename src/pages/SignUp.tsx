//* Components
import Input from "../components/common/input/Input";
import AuthTemplate from "../components/templates/authTemplate/AuthTemplate";

//* Hooks
import useAuth from "../hooks/useAuth";

interface Values {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const { inputErrors, setInputs } = useAuth({ type: "sign-up" });

  const handleSubmit = async (values: Values) => {
    setInputs(values);
  };

  return (
    <AuthTemplate
      pageTitle="Sign Up"
      handleSubmit={handleSubmit}
      authType="signup"
    >
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
}
