import { FC, useState } from "react";
//* Formik
import { Field } from "formik";
//* Icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
//* Styles
import styles from "./Input.module.scss";

type Props = {
  type: "text" | "password" | "email";
  name: string;
  placeholder?: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({ type, name, placeholder, label, onChange }) => {
  //* State
  const [inputType, setInputType] = useState<"text" | "password">("password");

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      <Field
        className={styles.input}
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
