import { FC } from "react";
import {
  BasketBackdrop,
  BasketModal,
  CloseModalBtn,
  CloseModal,
  BasketHeader,
  BasketContainer,
  BasketImg,
  BasketDesc,
  BasketIcon,
  QuantityBask,
  QuantityInput,
  QuantityButton,
  IconTrash,
  TrashButton,
  TotalPrice,
  PriceLabel,
  PriceSpan,
  ButtonDivider,
  FirstButton,
  SecondButton,
  DescrUl,
  DescrLi,
  EmptyBasket,
  EmptySpan,
  EmptyVector,
  EmptyBusk,
} from "./ModalBasket.styled";
import { useState } from "react";
import img from "@/assets/delete/basket.svg";
import sprite from "@/assets/images/modal/sprite-basket.svg";
import { Link } from "react-router-dom";

interface ModalBasketProps {
  closeModal: () => void;
  price?: number;
}

const ModalBasket: FC<ModalBasketProps> = ({ closeModal, price = 760 }) => {
  const [quantity, setQuantity] = useState(1);
  const [isContentVisible, setIsContentVisible] = useState(true);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  const handleTrashButtonClick = () => {
    setIsContentVisible(false);
  };

  return (
    <BasketBackdrop>
      <BasketModal>
        <CloseModalBtn onClick={closeModal}>
          <CloseModal />
        </CloseModalBtn>
        <BasketHeader>Кошик</BasketHeader>
        {isContentVisible ? (
          <>
            <BasketContainer>
              <BasketImg src={img} alt="" />
              <BasketDesc>
                <DescrUl>
                  <DescrLi>Торт Шоколадно-Чорничний</DescrLi>
                  <DescrLi>Вага: 1 кг</DescrLi>
                  <DescrLi>{price} грн</DescrLi>
                </DescrUl>
                <QuantityBask>
                  <QuantityButton onClick={handleDecrease}>
                    <BasketIcon width={24}>
                      <use xlinkHref={`${sprite}#minus`}></use>
                    </BasketIcon>
                  </QuantityButton>
                  <QuantityInput type="number" value={quantity} readOnly />
                  <QuantityButton onClick={handleIncrease}>
                    <BasketIcon>
                      <use xlinkHref={`${sprite}#plus`}></use>
                    </BasketIcon>
                  </QuantityButton>
                </QuantityBask>
                <TrashButton type="button" onClick={handleTrashButtonClick}>
                  <IconTrash>
                    <use xlinkHref={`${sprite}#trash`}></use>
                  </IconTrash>
                </TrashButton>
              </BasketDesc>
            </BasketContainer>
            <TotalPrice>
              <PriceLabel>Разом:</PriceLabel>
              <PriceSpan>{price * quantity} грн</PriceSpan>
            </TotalPrice>
            <ButtonDivider>
              <Link to="/cakes">
                <FirstButton
                  type="button"
                  $variant={"cardOpacity"}
                  onClick={closeModal}
                >
                  Продовжити покупки
                </FirstButton>
              </Link>
              <SecondButton type="button" $variant={"hero"}>
                Оформити замовлення
              </SecondButton>
            </ButtonDivider>
          </>
        ) : (
          <EmptyBasket>
            <EmptyVector>
              <use xlinkHref={`${sprite}#vector`}></use>
            </EmptyVector>
            <EmptyBusk>
              <use xlinkHref={`${sprite}#busket`}></use>
            </EmptyBusk>
            <EmptySpan>Кошик порожній</EmptySpan>
          </EmptyBasket>
        )}
      </BasketModal>
    </BasketBackdrop>
  );
};
export default ModalBasket;
