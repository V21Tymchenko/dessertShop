import { FC } from "react";
import cakes from "@/assets/images/CakesCard/Cakes.webp";
import cakesRetina from "@/assets/images/CakesCard/Cake_2x.webp";
import newCakes from "@/assets/images/CakesCard/NewCakes.webp";
import newCakesRetina from "@/assets/images/CakesCard/NewCakes_2x.webp";
import {
  CakesCardWrappers,
  CardWrapperConstructor,
  CardWrapperNew,
  StyledPicture,
  TextCard,
  TextWrapper,
  TitleCard,
} from "./CakesCard.styled";

const CakesCard: FC = () => {
  return (
    <CakesCardWrappers>
      <CardWrapperConstructor to="#">
        <TextWrapper>
          <TitleCard>Конструктор тортиків</TitleCard>
          <TextCard>Збери свій ідеальний тортик сам!</TextCard>
        </TextWrapper>
        <StyledPicture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${cakes} 1x, ${cakesRetina} 2x`}
            type="image/webp"
          />
          <img src={cakes} alt="Images Cakes" loading="lazy" />
        </StyledPicture>
      </CardWrapperConstructor>

      <CardWrapperNew to="#">
        <TextWrapper>
          <TitleCard>Новинки</TitleCard>
          <TextCard>
            Торт Анна Павлова – воздушный десерт из безе с хрустящим внешним
            слоем и мягкой серединкой. Невероятно вкусный и красивый, он сделан
            в форме корзинки со взбитыми сливками и фруктами.
          </TextCard>
        </TextWrapper>
        <StyledPicture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${newCakes} 1x, ${newCakesRetina} 2x`}
            type="image/webp"
          />
          <img src={newCakes} alt="Images Cakes" loading="lazy" />
        </StyledPicture>
      </CardWrapperNew>
    </CakesCardWrappers>
  );
};

export default CakesCard;
