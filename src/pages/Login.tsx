//* Components
import Input from "../components/common/input/Input";
import AuthTemplate from "../components/templates/authTemplate/AuthTemplate";
//* Hooks
import useAuth from "../hooks/useAuth";

interface Values {
  email: string;
  password: string;
}

export default function Login() {
  const { inputErrors, setInputs } = useAuth({ type: "login" });

  const handleSubmit = (values: Values) => {
    setInputs(values);
  };

  return (
    <AuthTemplate
      handleSubmit={handleSubmit}
      pageTitle="Login"
      authType="login"
    >
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
  );
}
