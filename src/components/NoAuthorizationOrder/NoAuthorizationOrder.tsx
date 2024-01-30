import { useState, FC } from "react";
import { Formik, Form } from "formik";
import Button from "../Button/Button";
import googleIcon from "@/assets/images/orderForm/googleIcon.svg";
import {
  ButtonNewСustomer,
  ButtonRegularСustomer,
  ContainerButtons,
  NoAuthorizedButton,
  NoAuthorizedContainer,
  NoAuthorizedSaved,
  NoAuthorizedText,
  OrderAuthorizationInput,
  OrderAuthorizationLabel,
  OrderEnterContainer,
  OrderEnterGoogle,
  OrderEnterImage,
  OrderEnterText,
  OrderFormContainer,
  OrderLabelContainer,
  NoAuthorizedConainer,
} from "./NoAuthorizationOrder.styled.js";

interface initialValuesProps {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};
const NoAuthorizationOrder: FC = () => {
  const [registered, setRegistered] = useState(false);

  const handleChangeRegister = () => {
    setRegistered(prev => !prev);
  };
  const handleSubmit = (values: initialValuesProps) => {
    console.log(values);
  };

  return (
    <NoAuthorizedConainer>
      <ContainerButtons>
        <ButtonNewСustomer
          type="button"
          registration={registered}
          onClick={handleChangeRegister}
        >
          Я новий покупець
        </ButtonNewСustomer>
        <ButtonRegularСustomer
          type="button"
          registration={registered}
          onClick={handleChangeRegister}
        >
          Я постійний клієнт
        </ButtonRegularСustomer>
      </ContainerButtons>
      {registered ? (
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <OrderFormContainer>
              <OrderAuthorizationLabel>
                Пошта
                <OrderAuthorizationInput
                  type="text"
                  name="email"
                  placeholder="oksana_shevchenko@gmail.com"
                />
              </OrderAuthorizationLabel>
              <OrderAuthorizationLabel>
                Пароль
                <OrderAuthorizationInput
                  type="text"
                  name="password"
                  placeholder="********"
                />
              </OrderAuthorizationLabel>
            </OrderFormContainer>
            <OrderEnterContainer>
              <OrderEnterText>Aбо</OrderEnterText>
              <OrderEnterGoogle>
                <OrderEnterImage src={googleIcon} alt="google icon" />
                Google
              </OrderEnterGoogle>
            </OrderEnterContainer>
            <Button type="submit" text="Увійти" maxwidth="180px" margintop="32px" />
          </Form>
        </Formik>
      ) : (
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <OrderLabelContainer>
              <OrderAuthorizationLabel>
                Ім’я
                <OrderAuthorizationInput type="text" name="name" />
              </OrderAuthorizationLabel>
              <OrderAuthorizationLabel>
                Прізвище
                <OrderAuthorizationInput type="text" name="secondName" />
              </OrderAuthorizationLabel>
            </OrderLabelContainer>
            <OrderLabelContainer>
              <OrderAuthorizationLabel>
                Пошта
                <OrderAuthorizationInput type="text" name="email" />
              </OrderAuthorizationLabel>
              <OrderAuthorizationLabel>
                Номер телефону
                <OrderAuthorizationInput type="text" name="phone" />
              </OrderAuthorizationLabel>
            </OrderLabelContainer>
            <NoAuthorizedContainer>
              <NoAuthorizedText>
                Зареєструйте аккаунт для Вашої зручності
              </NoAuthorizedText>
              <NoAuthorizedButton type="button">
                Зараєструватися
              </NoAuthorizedButton>
            </NoAuthorizedContainer>
            <NoAuthorizedSaved type="button">Зберегти</NoAuthorizedSaved>
          </Form>
        </Formik>
      )}
    </NoAuthorizedConainer>
  );
};

export default NoAuthorizationOrder;
