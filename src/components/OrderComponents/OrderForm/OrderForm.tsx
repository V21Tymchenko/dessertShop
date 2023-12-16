import { useState, FC, FormEvent, ChangeEvent } from "react";
import { Formik } from "formik";
// import UserNameForm from "../UserNameForm/UserNameForm";
import NoAuthorizationOrder from "@/components/NoAuthorizationOrder";
import YourOrder from "@/components/OrderComponents/YourOrder";
import arrow from "@/assets/images/orderForm/leftArrow.svg";
import radioIcon from "@/assets/images/orderForm/radio.svg";
import radioPassed from "@/assets/images/orderForm/passedRadio.svg";
import {
  AddCommentButton,
  ContainerDeliveryInput,
  ContainerRadioButtons,
  DeliveryRadioInput,
  DeliveryRadioLabel,
  DropDownLabel,
  DropDownTextArea,
  OrderContainer,
  OrderText,
  RadioBck,
  RadioButton,
  RadioIcon,
  RadioIconCheked,
  StyledForm,
} from "./OrderForm.styled";

interface initialValuesProps {
  name: string;
  phone: string;
}

const initialValues = {
  name: "",
  phone: "",
};

const OrderForm: FC = () => {
  const [delivery, setDelivery] = useState("self");
  const [payment, setPayment] = useState("receiving");
  const [openComment, setOpenComment] = useState(false);

  const handleSubmit = (values: initialValuesProps) => {
    console.log(values);
  };

  const handleDeliveryChange = (event: FormEvent) => {
    const value = (event.target as HTMLSelectElement).value;
    setDelivery(value);
  };

  const handlePaymentChange = (event: FormEvent) => {
    const value = (event.target as HTMLSelectElement).value;
    setPayment(value);
  };
  return (
    <OrderContainer>
      <div>
        <OrderText>Особисті дані</OrderText>
        <NoAuthorizationOrder />
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <StyledForm>
            {/* <UserNameForm /> */}

            <ContainerRadioButtons>
              <OrderText>Адреса доставки</OrderText>
              <ContainerDeliveryInput>
                <DeliveryRadioLabel>
                  <DeliveryRadioInput
                    type="radio"
                    name="delivery"
                    value="self"
                    checked={delivery === "self"}
                    onChange={(e: ChangeEvent) => handleDeliveryChange(e)}
                  />
                  <RadioButton
                    type="button"
                    onClick={() => setDelivery("self")}
                  >
                    <RadioBck>
                      {" "}
                      <RadioIcon src={radioIcon} alt="pick-up option" />
                      <RadioIconCheked
                        src={radioPassed}
                        alt="pick-up option checked"
                      />
                    </RadioBck>
                  </RadioButton>
                  Cамовивіз
                </DeliveryRadioLabel>
                <DeliveryRadioLabel>
                  <DeliveryRadioInput
                    type="radio"
                    name="delivery"
                    value="courier"
                    checked={delivery === "courier"}
                    onChange={(e: ChangeEvent) => handleDeliveryChange(e)}
                  />
                  <RadioButton
                    type="button"
                    onClick={() => setDelivery("courier")}
                  >
                    <RadioBck>
                      <RadioIcon src={radioIcon} alt="pick-up option" />
                      <RadioIconCheked
                        src={radioPassed}
                        alt="pick-up option checked"
                      />
                    </RadioBck>
                  </RadioButton>
                  Кур'єр на вашу адресу
                </DeliveryRadioLabel>
              </ContainerDeliveryInput>
            </ContainerRadioButtons>
            <ContainerRadioButtons>
              <OrderText>Способи оплати</OrderText>
              <ContainerDeliveryInput>
                <DeliveryRadioLabel>
                  <DeliveryRadioInput
                    type="radio"
                    name="payment"
                    value="receiving"
                    checked={payment === "receiving"}
                    onChange={(e: ChangeEvent) => handlePaymentChange(e)}
                  />
                  <RadioButton
                    type="button"
                    onClick={() => setPayment("receiving")}
                  >
                    <RadioBck>
                      {" "}
                      <RadioIcon src={radioIcon} alt="pick-up option" />
                      <RadioIconCheked
                        src={radioPassed}
                        alt="pick-up option checked"
                      />
                    </RadioBck>
                  </RadioButton>
                  Оплата під час отримання товару
                </DeliveryRadioLabel>
                <DeliveryRadioLabel>
                  <DeliveryRadioInput
                    type="radio"
                    name="payment"
                    value="details"
                    checked={payment === "details"}
                    onChange={(e: ChangeEvent) => handlePaymentChange(e)}
                  />
                  <RadioButton
                    type="button"
                    onClick={() => setPayment("details")}
                  >
                    <RadioBck>
                      <RadioIcon src={radioIcon} alt="pick-up option" />
                      <RadioIconCheked
                        src={radioPassed}
                        alt="pick-up option checked"
                      />
                    </RadioBck>
                  </RadioButton>
                  Оплата за реквізитами
                </DeliveryRadioLabel>
              </ContainerDeliveryInput>
            </ContainerRadioButtons>
            <AddCommentButton
              type="button"
              onClick={() => setOpenComment(!openComment)}
            >
              <img src={arrow} alt="left" />
              Додати коментар до замовлення
            </AddCommentButton>
            <DropDownLabel open={openComment}>
              Коментар
              <DropDownTextArea name="comment" id=""></DropDownTextArea>
            </DropDownLabel>
          </StyledForm>
        </Formik>
      </div>
      <YourOrder />
    </OrderContainer>
  );
};
export default OrderForm;
