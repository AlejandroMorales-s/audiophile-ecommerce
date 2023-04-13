import checkInputValidation from "./checkInputValidation";

type ErrorObject = {
  [key: string]: string;
};

const checkInput = (input: ErrorObject) => {
  const key = Object.keys(input)[0];
  const value = input[key].trim();

  const errorObject = {
    [key]: "",
  };

  if (!value) {
    errorObject[key] = "This field is required";
    return errorObject;
  }

  const types = ["name", "email", "password"];

  types.forEach((type) => {
    if (key.toLowerCase().includes(type)) {
      const validName = checkInputValidation(
        value,
        type as "name" | "email" | "password"
      );
      if (!validName) {
        errorObject[key] = `Please enter a valid ${type}`;
      }
    }
  });

  if (errorObject[key]) {
    return errorObject;
  }
};

export default checkInput;
