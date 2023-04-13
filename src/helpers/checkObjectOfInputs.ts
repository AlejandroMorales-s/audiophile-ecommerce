import checkInput from "./checkInput";

interface Values {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

type ErrorObject = {
  [key: string]: string;
};

export const checkObjectOfInputs = (inputs: Values) => {
  let currentInputErrors: ErrorObject = {};

  for (const [key, value] of Object.entries(inputs)) {
    const error = checkInput({ [key]: value });
    if (error) {
      currentInputErrors = { ...currentInputErrors, ...error };
    }
  }

  return currentInputErrors;
};

export default checkObjectOfInputs;
