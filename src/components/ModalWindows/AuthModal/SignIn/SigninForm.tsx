import { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { selectEmail, selectIsVerified } from "@/redux/Auth/auth-selectors";
import { login } from "@/redux/Auth/auth-operations";
import Button from "../../../Button/Button";
import sprite from "@/assets/images/modal/sprite-eye.svg";
import {
  LoginHeader,
  FormContainer,
  WrapperInputField,
  WrapperInput,
  InputField,
  PasswordToggler,
  PasswordTogglerIcon,
} from "./SigninForm.styled";

interface SignFormProps {
  onForgotPasswordClick: () => void;
  shouldCloseModal: (value: boolean) => void;
}
interface initialValuesProps {
  [key: string]: string;
}

const SigninForm: FC<SignFormProps> = ({
  onForgotPasswordClick,
  shouldCloseModal,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const email = useSelector(selectEmail);
  const verified = useSelector(selectIsVerified);
  const dispatch = useDispatch();

  useEffect(() => {
    if (verified) {
      shouldCloseModal(true);
    }
  }, [verified, shouldCloseModal]);

  const initialValues: initialValuesProps = {
    email: email || "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Введіть дійсний email")
      .required('Поле "Ел. пошта" є обов’язковим'),
    password: Yup.string()
      .min(6, "Пароль повинен містити принаймні 6 символів")
      .required('Поле "Пароль" є обов’язковим'),
  });

  const loginOnSubmit = async (values: initialValuesProps) => {
    await dispatch(login(values));
    shouldCloseModal(false);
  };
  const onSubmit = (values: initialValuesProps) => {
    try {
      loginOnSubmit(values);
    } catch (error) {
      console.error("Login error:", error);
    }
    loginOnSubmit(values);
  };

  return (
    <>
      <LoginHeader>Вхід</LoginHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {formik => (
          <FormContainer onSubmit={formik.handleSubmit}>
            <WrapperInputField>
              <WrapperInput>
                <label htmlFor="emailOrPhone">
                  Ел. пошта або номер телефону
                </label>
                <Field
                  type="text"
                  name="email"
                  placeholder="Введіть ел. пошту або номер телефону"
                  as={InputField}
                />
              </WrapperInput>
              <WrapperInput>
                <label htmlFor="password">Пароль</label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="*******"
                  as={InputField}
                />
                <PasswordToggler
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                >
                  <PasswordTogglerIcon width="20" height="20">
                    <use
                      href={`${sprite}#${showPassword ? "eye" : "eye-off"}`}
                    ></use>
                  </PasswordTogglerIcon>
                </PasswordToggler>
              </WrapperInput>
              <Button
                type="button"
                variant={"SignInBtn"}
                text={"Забули пароль"}
                onClick={onForgotPasswordClick}
              />
              <Button type="submit" variant={"RegButton"} text={"Увійти"} />
            </WrapperInputField>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};

export default SigninForm;
