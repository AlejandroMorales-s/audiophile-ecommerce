import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//* Helpers
import { checkObjectOfInputs } from "../helpers";
//* Redux
import { useAppDispatch } from "../store";
import { createUser, loginWithEmail } from "../reducers/auth/authAsyncThunks";

interface Values {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

interface InputErrors {
  [key: string]: string;
}

interface AuthType {
  type: "sign-up" | "login";
}

const useAuth = ({ type }: AuthType) => {
  const [inputs, setInputs] = useState<Values>();
  const [inputErrors, setInputErrors] = useState<InputErrors>({});

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!inputs) return;

    const currentInputErrors = checkObjectOfInputs(inputs);

    setInputErrors(currentInputErrors);

    if (Object.keys(currentInputErrors).length > 0) return;

    if (type === "login") {
      dispatch(loginWithEmail(inputs)).then((res) => {
        if (res.payload) {
          navigate("/");
        }
      });
      return;
    } else if (type === "sign-up") {
      dispatch(createUser(inputs)).then((res) => {
        if (res.payload) {
          navigate("/");
        }
      });
    }
  }, [inputs]);

  return { inputErrors, setInputs };
};

export default useAuth;
