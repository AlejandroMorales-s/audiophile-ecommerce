import { useEffect, useState } from "react";
import { checkObjectOfInputs } from "../helpers";

interface InputErrors {
  [key: string]: any;
}

const useValidateInputs = () => {
  const [inputs, setInputs] = useState<InputErrors>();
  const [inputErrors, setInputErrors] = useState<InputErrors>({});

  useEffect(() => {
    if (!inputs) return;

    const currentInputErrors = checkObjectOfInputs(inputs);

    setInputErrors(currentInputErrors);
  }, [inputs]);

  return { inputErrors, setInputs };
};

export default useValidateInputs;
