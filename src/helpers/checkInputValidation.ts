const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

const checkInputValidation = (
  input: string,
  type: "password" | "email" | "name"
): boolean => {
  switch (type) {
    case "email":
      return emailRegex.test(input);
    case "password":
      return passwordRegex.test(input);
    case "name":
      return nameRegex.test(input);
    default:
      return false;
  }
};

export default checkInputValidation;
