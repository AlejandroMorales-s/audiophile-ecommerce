import { useEffect, useRef, useState } from "react";
import useValidateInputs from "./useValidateInputs";
import { useAppDispatch } from "../store";
import {
  updateUserEmail,
  updateUserFullName,
  updateUserPassword,
} from "../reducers/updateUser/updateUserAsyncThunks";

interface Inputs {
  inputs: {
    [key: string]: string;
  };
}

const useUpdateUserInfo = () => {
  const [currentInputs, setCurrentInputs] = useState<Inputs["inputs"]>();

  //* Custom hook
  const { inputErrors, setInputs } = useValidateInputs();

  //* Ref
  const updateType = useRef<string | null>(null);

  //* Dispatch
  const dispatch = useAppDispatch();

  //* Insert values
  const insertValuesToValidate = ({ inputs }: Inputs) => {
    updateType.current = inputs.type;

    delete inputs.type;

    setInputs(inputs);
    setCurrentInputs(inputs);
  };

  //* Submit values
  const submitValues = () => {
    if (
      Object.keys(inputErrors).length ||
      !updateType.current ||
      !currentInputs
    )
      return;

    if (updateType.current === "password") {
      const { currentPassword, newPassword } = currentInputs;
      dispatch(updateUserPassword({ currentPassword, newPassword }));
    } else if (updateType.current === "name") {
      const { currentPassword, firstName, lastName } = currentInputs;
      dispatch(updateUserFullName({ currentPassword, firstName, lastName }));
    } else if (updateType.current === "email") {
      const { currentPassword, newEmail } = currentInputs;
      dispatch(updateUserEmail({ currentPassword, newEmail }));
    } else console.log("not supported type");
  };

  //* Effect
  useEffect(submitValues, [inputErrors]);

  return { inputErrors, insertValuesToValidate };
};

export default useUpdateUserInfo;
