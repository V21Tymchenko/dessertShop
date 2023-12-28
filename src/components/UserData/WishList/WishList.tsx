import { FC, useState } from "react";
import Button from "@/components/Button/Button";
import ModalBasket from "../../ModalWindows/ModalBasket/ModalBasket";

import img from "@/assets/delete/фото.jpg";
import {
  ArrowIcon,
  BasketIcon,
  ButtonsContainer,
  CardsTextContainer,
  FavoriteBtn,
  FavoriteIcon,
  PopularItem,
  PopularList,
  PopularText,
  PopularTitle,
} from "../WishList/WishList.styled";

const WishList: FC = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const toggleBasketModal = () => {
    setIsBasketOpen(!isBasketOpen);
  };
  return (
    <PopularList>
      <PopularItem>
        <FavoriteBtn>
          <FavoriteIcon />
        </FavoriteBtn>
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
    </PopularList>
  );
};

export default WishList;
