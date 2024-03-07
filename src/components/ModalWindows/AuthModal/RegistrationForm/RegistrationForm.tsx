import { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Formik } from "formik";
import { register } from "@/redux/Auth/auth-operations";
import { signUpSchema } from "@/helpers/schemas/authValidationSchema";
import { initialValuesProps } from "@/helpers/generalInterface";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button/Button";
import googleIconUrl from "@/assets/images/modal/google.svg";
import {
  RegistrationHeader,
  WrapperInputField,
  FormSpan,
  FormDiv,
  GoogleIcon,
  GoogleButton,
  RegistDivider,
} from "./RegistrationForm.styled";

const clientId =
  "1086645848192-3knfe7284s9qbipfhkabt12jmhfcipmr.apps.googleusercontent.com";
import {
  useGoogleLogin,
  UseGoogleLoginOptionsAuthCodeFlow,
} from "@react-oauth/google";

interface RegisterFormProps {
  shouldCloseModal: (arg: boolean) => void;
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

  const handleGoogleLogin = useGoogleLogin({
    clientId: clientId,
    onSuccess: codeResponse => {
      // Ваш код обробки відповіді від Google для потоку авторизації коду
      console.log("ok", codeResponse);
    },
    onError: codeResponse => {
      console.log("error", codeResponse);
    },
  } as UseGoogleLoginOptionsAuthCodeFlow);
  return (
    <>
      <RegistrationHeader>Реєстрація</RegistrationHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpSchema}
      >
        {({ isValid, dirty }) => (
          <FormDiv autoComplete="on">
            <div>
              <WrapperInputField>
                <CustomInput
                  name="name"
                  id="name"
                  required
                  placeholder="Оксана Шевченко"
                  autoComplete="username"
                />
                <CustomInput
                  name="phone"
                  id="phone"
                  required
                  placeholder="+380998765432"
                />
                <CustomInput
                  name="email"
                  id="email"
                  required
                  placeholder="oksana_shevchenko@gmail.com"
                  autoComplete="username"
                />
                <CustomInput
                  name="password"
                  id="password"
                  required
                  placeholder="********"
                  autoComplete="current-password"
                />
              </WrapperInputField>
              <RegistDivider>
                <FormSpan>Або</FormSpan>
                <GoogleButton type="button" onClick={handleGoogleLogin}>
                  <GoogleIcon src={googleIconUrl} alt="Google Icon" />
                  Зареєструватись через Google
                </GoogleButton>
                <Button
                  type="submit"
                  text={"Зареєструватись"}
                  variant={"RegButton"}
                  margintop="32px"
                  disabled={!dirty || !isValid}
                />
              </RegistDivider>
            </div>
          </FormDiv>
        )}
      </Formik>
    </>
  );
};
export default RegistrationForm;
