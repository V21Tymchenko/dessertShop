import { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Formik, Field } from "formik";
import { initialValuesProps } from "@/helpers/generalInterface";
import { signInSchema } from "@/helpers/schemas/authValidationSchema";
import { selectEmail, selectIsVerified } from "@/redux/Auth/auth-selectors";
import { login } from "@/redux/Auth/auth-operations";
import Button from "@/components/Button/Button";
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



const initialValues: initialValuesProps = {
  login: "",
  password: "",
};
interface SignFormProps {
  onForgotPasswordClick: () => void;
  shouldCloseModal: (value: boolean) => void;
}

const SigninForm: FC<SignFormProps> = ({
  onForgotPasswordClick,
  shouldCloseModal,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const email = useSelector(selectEmail);
  const verified = useSelector(selectIsVerified);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (verified) {
      shouldCloseModal(true);
    }
  }, [verified, shouldCloseModal]);

  const onSubmit = (values: initialValuesProps) => {
    dispatch(login(values));
    shouldCloseModal(false);
  };

  return (
    <>
      <LoginHeader>Вхід</LoginHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signInSchema}
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
                  name="login"
                  placeholder="+380998765432"
                  as={InputField}
                  autoComplete="username"
                />
              </WrapperInput>
              <WrapperInput>
                <label htmlFor="password">Пароль</label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="*******"
                  autoComplete="current-password"
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
              <Button
                type="submit"
                variant={"RegButton"}
                text={"Увійти"}
                margintop="58px"
              />
            </WrapperInputField>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};

export default SigninForm;
