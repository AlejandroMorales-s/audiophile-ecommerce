import { UserSetting } from "../../../commonInterfaces";

export interface ComponentProps {
  option: UserSetting | undefined;
  toggleMenu: () => void;
}

interface InputType {
  label: string;
  type: "text" | "email" | "password";
  name: string;
}

export interface InputsType {
  [key: string]: InputType[];
}
