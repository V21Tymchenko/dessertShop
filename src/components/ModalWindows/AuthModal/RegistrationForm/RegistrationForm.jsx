import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { register } from "@/redux/auth/auth-operations";
import { signUpSchema } from "@/helpers/schemas/authValidationSchema";
import CustomInput from "@/components/CustomInput";
import Button from "../../../Button/Button";
import googleIconUrl from "@/assets/images/modal/google.svg";
import PropTypes from "prop-types";
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

const RegistrationForm = ({ shouldCloseModal }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
  };
  const registerOnSubmit = async values => {
    dispatch(register(values));
    shouldCloseModal(false);
  };
  const handleSubmit = credentials => {
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

RegistrationForm.propTypes = {
  shouldCloseModal: PropTypes.func,
};
