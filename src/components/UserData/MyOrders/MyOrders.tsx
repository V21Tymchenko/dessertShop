import { FC } from "react";
import {
  DeliveryRow,
  HeaderTable,
  NameRow,
  NumRow,
  OrderItem,
  PMethodRow,
  QuantityRow,
  StatusFilter,
  SumRow,
} from "./MyOdrders.styled";

const MyOrders: FC = () => {
  return (
    <div>
      <HeaderTable>
        <NumRow>Номер</NumRow>
        <NameRow>Назва</NameRow>
        <QuantityRow>Кількість</QuantityRow>
        <SumRow>Сума до сплати</SumRow>
        <PMethodRow>Спосіб оплати</PMethodRow>
        <DeliveryRow>Спосіб доставки</DeliveryRow>
        <StatusFilter name="" id="">
          <option value="">Всі</option>
          <option value="">В обробці</option>
          <option value="">Доставлено</option>
        </StatusFilter>
      </HeaderTable>
      <ul>
        <OrderItem>
          <NumRow>1</NumRow>
          <NameRow>Шоколадно-чорничний торт</NameRow>
          <QuantityRow>1</QuantityRow>
          <SumRow>760 грн</SumRow>
          <PMethodRow>Оплата при отриманні товару</PMethodRow>
          <DeliveryRow>Самовивіз, м. Дніпро, вул. Кірова 1а</DeliveryRow>
          <span>В обробці</span>
        </OrderItem>
      </ul>
    </div>
  );
};

export default MyOrders;
