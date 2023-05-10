import checkInputValidation from "./checkInputValidation";

type Input = {
  [key: string]: string | number | undefined;
};

const checkInput = (input: Input) => {
  const key = Object.keys(input)[0];
  const errorObject = {
    [key]: "",
  };

  if (typeof input[key] === "number") return;

  if (typeof input[key] === "undefined") {
    errorObject[key] = "This field is required";
    return errorObject;
  }

  const value = input[key];

  if (typeof value === "string") {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      errorObject[key] = "This field is required";
      return errorObject;
    }

    const types = ["name", "email", "password"];

    types.forEach((type) => {
      if (key.toLowerCase().includes(type)) {
        const validName = checkInputValidation(
          trimmedValue,
          type as "name" | "email" | "password"
        );
        if (!validName) {
          errorObject[key] = `Please enter a valid ${type}`;
        }
      }
    });
  }

  if (errorObject[key]) {
    return errorObject;
  }

  return {};
};

export default checkInput;
