import { useField } from "formik";
import { useState, FC } from "react";
import {
  AuthErrorIcon,
  AuthErrorMessage,
  AuthInput,
  WrapperInput,
  AuthSuccessIcon,
  AuthSuccessMessage,
  PasswordToggler,
  PasswordTogglerIcon,
} from "./CustomInput.styled";
import sprite from "../../assets/images/modal/sprite-eye.svg";

interface PropsType {
  name: "name" | "email" | "phone" | "password";
  id: string;
  required?: boolean;
  placeholder: string;
}

interface MessageProps {
  [key: string]: string;
}

const CustomInput: FC<PropsType> = props => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const showError = meta.touched && meta.error;
  const showSuccess = meta.touched && !meta.error;

  const changeInputType = () => {
    if (props.name === "name" || (props.name === "password" && showPassword))
      return "text";
    else return props.name;
  };

  const validationStatus = () => {
    if (showError) {
      return "validation-failed";
    }
    if (showSuccess) {
      return "validation-success";
    }
    return;
  };

  const successMessages: MessageProps = {
    name: "Nice to meet you!",
    phone: "Phone is okay",
    email: "Your email looks good and is ready for action.",
    password: "Password is okay.",
  };

  const labelMap: MessageProps = {
    name: "Ім’я та Прізвище",
    email: "Пошта",
    phone: "Номер телефону",
    password: "Пароль",
  };

  return (
    <WrapperInput>
      <label htmlFor={props.id || props.name}>{labelMap[props.name]}</label>

      <AuthInput
        type={changeInputType()}
        {...field}
        {...props}
        className={validationStatus()}
      />

      {props.name === "password" && (
        <PasswordToggler
          type="button"
          onClick={() => setShowPassword(prev => !prev)}
        >
          <PasswordTogglerIcon>
            <use href={`${sprite}#${showPassword ? "eye" : "eye-off"}`}></use>
          </PasswordTogglerIcon>
        </PasswordToggler>
      )}

      {showError && (
        <AuthErrorMessage>
          <AuthErrorIcon>
            <use href={`${sprite}#error`}></use>
          </AuthErrorIcon>
          {meta.error}
        </AuthErrorMessage>
      )}
      {showSuccess && (
        <AuthSuccessMessage>
          <AuthSuccessIcon>
            <use href={`${sprite}#success`}></use>
          </AuthSuccessIcon>
          {successMessages[props.name]}
        </AuthSuccessMessage>
      )}
    </WrapperInput>
  );
};

export default CustomInput;
