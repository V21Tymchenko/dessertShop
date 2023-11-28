import minus from "@/assets/images/orderForm/minus.svg";
import plus from "@/assets/images/orderForm/plus.svg";
import Button from "@/components/Button/Button";
import cake from "@/assets/images/orderForm/cake.png";
import {
  CakesName,
  CakesText,
  ContainderCakes,
  ContainerCakesInfo,
  CostText,
  TogetherText,
  YourOrderButton,
  YourOrderContainer,
  YourOrderInput,
  YourOrderNumber,
  YourOrderOperation,
  YourOrderTitle,
} from "./YourOrder.styled";
import { useState } from "react";

const YourOrder = () => {
  const [numberCakes, setNumberCakes] = useState(1);
  const handleIncrease = () => {
    setNumberCakes(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (numberCakes > 1) {
      setNumberCakes(prevQuantity => prevQuantity - 1);
    }
  };
  const handleNumbersChange = e => {
    setNumberCakes(Number(e.target.value));
  };
  return (
    <YourOrderContainer>
      <YourOrderTitle>Ваше замовлення</YourOrderTitle>
      <ContainerCakesInfo>
        <div>
          <CakesName>Шоколадно-Чорничний торт</CakesName>
          <p>
            <CakesText>Вага</CakesText>
            <CakesText>1 кг</CakesText>
          </p>
          <ContainderCakes>
            <CakesText>Кількість</CakesText>
            <YourOrderNumber>
              <YourOrderButton type="button">
                <YourOrderOperation
                  src={minus}
                  title="minus"
                  onClick={handleDecrease}
                />
              </YourOrderButton>
              <YourOrderInput
                placeholder="1"
                type="text"
                name="number"
                value={numberCakes}
                onChange={e => handleNumbersChange(e)}
              />
              <YourOrderButton type="button">
                <YourOrderOperation
                  src={plus}
                  title="plus"
                  onClick={handleIncrease}
                />
              </YourOrderButton>
            </YourOrderNumber>
          </ContainderCakes>
        </div>
        <img src={cake} alt="cake" />
      </ContainerCakesInfo>
      <CostText>
        <CakesText>Вартість:</CakesText>
        <CakesText>760 грн</CakesText>
      </CostText>
      <CostText>
        <TogetherText>Разом до сплати:</TogetherText>
        <TogetherText>760 грн</TogetherText>
      </CostText>
      <Button type="submit" text="Замовлення підтверджую" variant="order" />
      <Button text="Повернутись до покупок" variant="backToSHop" />
    </YourOrderContainer>
  );
};
export default YourOrder;
