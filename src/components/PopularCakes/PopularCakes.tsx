import { FC } from "react";
import { useState } from "react";
import ModalBasket from "../ModalWindows/ModalBasket/ModalBasket";
import Button from "@/components/Button/Button";
import img from "@/assets/delete/фото.jpg";

import {
  ArrowIcon,
  BasketIcon,
  ButtonsContainer,
  CardsTextContainer,
  LinkToPopular,
  LookIcon,
  MainTitle,
  PopularItem,
  PopularList,
  PopularText,
  PopularTitle,
  PopurContainer,
  PopurSection,
} from "./PopularCakes.styled";

const PopularCakes: FC = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const toggleBasketModal = () => {
    setIsBasketOpen(prev => !prev);
  };
  return (
    <PopurSection>
      <PopurContainer>
        <MainTitle>Популярні десерти</MainTitle>
        <LinkToPopular to="/popular">
          Переглянути все
          <LookIcon />
        </LinkToPopular>
      </PopurContainer>
      <PopularList>
        <PopularItem>
          {" "}
          <img src={img} alt="" />
          <CardsTextContainer>
            <PopularTitle>Торт Шоколадно-Чорничний</PopularTitle>
            <PopularText>760 грн/1 кг</PopularText>
            <ButtonsContainer>
              <Button text="Переглянути">
                <ArrowIcon />
              </Button>
              {isBasketOpen && <ModalBasket closeModal={toggleBasketModal} />}
              <Button
                text="До кошику"
                variant={"cardOpacity"}
                onClick={toggleBasketModal}
              >
                <BasketIcon />
              </Button>
            </ButtonsContainer>
          </CardsTextContainer>
        </PopularItem>
        <PopularItem>
          {" "}
          <img src={img} alt="" />{" "}
          <CardsTextContainer>
            <PopularTitle>Бенто-торт Маракуйя-Ананас</PopularTitle>
            <PopularText>550 грн/1 кг</PopularText>
            <ButtonsContainer>
              <Button text="Переглянути">
                <ArrowIcon />
              </Button>
              <Button
                text="До кошику"
                variant={"cardOpacity"}
                onClick={toggleBasketModal}
              >
                <BasketIcon />
              </Button>
            </ButtonsContainer>
          </CardsTextContainer>
        </PopularItem>
        <PopularItem>
          {" "}
          <img src={img} alt="" />
          <CardsTextContainer>
            <PopularTitle>Капкейки Святкові</PopularTitle>
            <PopularText>450 грн/8 шт</PopularText>
            <ButtonsContainer>
              <Button text="Переглянути">
                <ArrowIcon />
              </Button>
              <Button
                text="До кошику"
                variant={"cardOpacity"}
                onClick={toggleBasketModal}
              >
                <BasketIcon />
              </Button>
            </ButtonsContainer>
          </CardsTextContainer>
        </PopularItem>
        <PopularItem>
          {" "}
          <img src={img} alt="" />
          <CardsTextContainer>
            <PopularTitle>Макаруни №8</PopularTitle>
            <PopularText>480 грн/10 шт</PopularText>
            <ButtonsContainer>
              <Button text="Переглянути">
                <ArrowIcon />
              </Button>
              <Button
                text="До кошику"
                variant={"cardOpacity"}
                onClick={toggleBasketModal}
              >
                <BasketIcon />
              </Button>
            </ButtonsContainer>
          </CardsTextContainer>
        </PopularItem>
      </PopularList>
    </PopurSection>
  );
};

export default PopularCakes;
