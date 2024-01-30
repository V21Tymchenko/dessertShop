import { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Formik } from "formik";
import { register } from "@/redux/Auth/auth-operations";
import { signUpSchema } from "@/helpers/schemas/authValidationSchema";
import { initialValuesProps } from "@/helpers/generalInterface";
import CustomInput from "@/components/CustomInput";
import Button from "../../../Button/Button";
import googleIconUrl from "@/assets/images/modal/google.svg";
import {
  RegistrationHeader,
  FormContainer,
  WrapperInputField,
  FormSpan,
  FormDiv,
  GoogleIcon,
  GoogleButton,
  RegistDivider,
} from "./RegistrationForm.styled";

interface RegisterFormProps {
  shouldCloseModal: (arg: boolean) => boolean;
}
const RegistrationForm: FC<RegisterFormProps> = ({ shouldCloseModal }) => {
  const dispatch: AppDispatch = useDispatch();

  const initialValues: initialValuesProps = {
    name: "",
    phone: "",
    email: "",
    password: "",
  };
  const registerOnSubmit = async (values: initialValuesProps) => {
    try {
      dispatch(register(values));
      shouldCloseModal(false);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };
  const handleSubmit = (credentials: initialValuesProps) => {
    try {
      registerOnSubmit(credentials);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <RegistrationHeader>Реєстрація</RegistrationHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpSchema}
      >
        {({ isValid, dirty }) => (
          <FormDiv>
            <FormContainer>
              <WrapperInputField>
                <CustomInput
                  name="name"
                  id="name"
                  required
                  placeholder="Ім’я та Прізвище"
                />
                <CustomInput
                  name="phone"
                  id="phone"
                  required
                  placeholder="Номер телефону"
                />
                <CustomInput
                  name="email"
                  id="email"
                  required
                  placeholder="Пошта"
                />
                <CustomInput
                  name="password"
                  id="password"
                  required
                  placeholder="Пароль"
                />
              </WrapperInputField>
              <RegistDivider>
                <FormSpan>Або</FormSpan>
                <GoogleButton type="button">
                  <GoogleIcon src={googleIconUrl} alt="Google Icon" />
                  Зареєструватись через Google
                </GoogleButton>
                <Button
                  type="submit"
                  text={"Зареєструватись"}
                  variant={"RegButton"}
                  disabled={!dirty || !isValid}
                />
              </RegistDivider>
            </FormContainer>
          </FormDiv>
        )}
      </Formik>
    </>
  );
};
export default RegistrationForm;
