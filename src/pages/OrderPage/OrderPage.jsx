import logo from "@/assets/images/лого.svg";
import Container from "@/components/Container";
import OrderForm from "@/components/OrderComponents/OrderForm";
import { MainTitle, OrderSection } from "./OrderPage.styled";
const OrderPage = () => {
  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <OrderSection>
          <MainTitle>Оформлення замовлення</MainTitle>
          <OrderForm />
        </OrderSection>
      </main>
    </Container>
  );
};
export default OrderPage;
