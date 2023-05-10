import { FC, useState } from "react";
//* Formik
import { Field } from "formik";
//* Icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
//* Styles
import styles from "./Input.module.scss";

type Props = {
  type: "text" | "password" | "email" | "number";
  name: string;
  placeholder?: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputError?: string;
};

const Input: FC<Props> = ({
  type,
  name,
  placeholder,
  label,
  onChange,
  inputError,
}) => {
  //* State
  const [inputType, setInputType] = useState<"text" | "password">("password");

  return (
    <div className={styles.container}>
      <div className={styles["label-container"]}>
        <label
          className={`${styles.label} ${inputError && styles["label-error"]}`}
        >
          {label}
        </label>
        {inputError && <p className={styles["error-message"]}>{inputError}</p>}
      </div>

      <Field
        className={`${styles.input} ${inputError && styles["input-error"]}`}
        type={type === "password" ? inputType : type}
        name={name}
        placeholder={placeholder}
        onInput={onChange}
      />
      {type === "password" && (
        <>
          {inputType === "password" ? (
            <AiOutlineEye
              className={styles.icon}
              onClick={() => setInputType("text")}
            />
          ) : (
            <AiOutlineEyeInvisible
              className={styles.icon}
              onClick={() => setInputType("password")}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Input;
