import {
  CakesCardWrapper,
  StyledPicture,
  TextCard,
  TitleCard,
} from "./CakesCard.styled";

import cakes from "@/assets/images/CakesCard/Cakes.webp";
import cakesRetina from "@/assets/images/CakesCard/Cakes_2x.webp";
// import newCakes from "@/assets/images/CakesCard/NewCakes.webp";
// import newCakesRetina from "@/assets/images/CakesCard/NewCakes_2x.webp";

function CakesCard() {
  return (
    <CakesCardWrapper>
      <CakesCard>
        <TitleCard>Конструктор тортиків</TitleCard>
        <TextCard>Збери свій ідеальний тортик сам!</TextCard>
        <StyledPicture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${cakes} 1x, ${cakesRetina} 2x`}
            type="image/webp"
          />
          <img src={cakes} alt="Images Cakes" loading="lazy" />
        </StyledPicture>
      </CakesCard>
    </CakesCardWrapper>
  );
}

export default CakesCard;
