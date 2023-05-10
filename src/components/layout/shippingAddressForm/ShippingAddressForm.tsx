import { FC } from "react";
//* Formik
import { Form, Formik } from "formik";
//* Components
import PrimaryButton from "../../common/primaryButton/PrimaryButton";
import Input from "../../common/input/Input";
//* Styles
import styles from "./ShippingAddressForm.module.scss";

interface FormValues {
  address: string;
  zipCode: number;
  city: string;
  country: string;
}

interface ComponentProps {
  createOrder: {
    inputErrors: { [key: string]: string };
    isLoading: boolean;
    addInputs: (values: FormValues) => void;
  };
}

const ShippingAddressForm: FC<ComponentProps> = ({ createOrder }) => {
  const { addInputs, inputErrors, isLoading } = createOrder;

  const handleSubmit = (values: FormValues) => addInputs(values);

  return (
    <Formik
      initialValues={{
        address: "",
        zipCode: 11111,
        city: "",
        country: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={styles["shipping-form-container"]}>
        <Input
          type="text"
          label="Your address"
          placeholder="1137 Williams Avenue"
          name="address"
          inputError={inputErrors["address"]}
        />
        <Input
          type="number"
          label="ZIP Code"
          placeholder="10001"
          name="zipCode"
          inputError={inputErrors["zipCode"]}
        />
        <Input
          type="text"
          label="City"
          placeholder="New York"
          name="city"
          inputError={inputErrors["city"]}
        />
        <Input
          type="text"
          label="Country"
          placeholder="United States"
          name="country"
          inputError={inputErrors["country"]}
        />
        <PrimaryButton disabled={isLoading} type="submit" text="Continue" />
      </Form>
    </Formik>
  );
};

export default ShippingAddressForm;
