import Button  from "../Button/Button";
import {
  BackgroundImg,
  ContentHero,
  ContentMainHero,
  ContentTextTop,
  ImagesWrapper,
  StyledLink,
  StyledPicture,
  StyledSpan,
  TextHero,
  TextHeroSecondary,
  WrapperHero,
} from "./Hero.styled";

import cakes from "@/assets/images/homePage/Cakes.webp";
import cakesRetina from "@/assets/images/homePage/Cakes_2x.webp";

const Hero = () => {
  return (
    <WrapperHero>
      <ContentTextTop>
        <TextHeroSecondary>
          10% з продажів йде на допомогу для ЗСУ. Звіти можна побачити у нашому
          профілі у
        </TextHeroSecondary>
        <StyledLink
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to Instagram"
        >
          <StyledSpan>Instagram</StyledSpan>
        </StyledLink>
      </ContentTextTop>

      <ContentMainHero>
        <ContentHero>
          <TextHero>
            Майстерня Десертів: Знайти свій ідеальний смак десерту
          </TextHero>
          <TextHeroSecondary>
            Ласкаво просимо до нашої Майстерні Десертів, де смак і вишуканість
            об'єднуються в чудових десертах, створених з найкращих інгредієнтів
            та любові до кулінарного мистецтва.
          </TextHeroSecondary>

          <Button text={"Каталог"} variant={"hero"} />
        </ContentHero>
        <ImagesWrapper>
          <StyledPicture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${cakes} 1x, ${cakesRetina} 2x`}
              type="image/webp"
            />
            <img src={cakes} alt="Images Cakes" loading="lazy" />
          </StyledPicture>
          <BackgroundImg />
        </ImagesWrapper>
      </ContentMainHero>
    </WrapperHero>
  );
};

export default Hero;
