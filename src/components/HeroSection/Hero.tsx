import { FC } from "react";
import ArmyHelp from "../ArmyHelp/ArmyHelp";
import cakes from "@/assets/images/homePage/Cakes.webp";
import cakesRetina from "@/assets/images/homePage/Cakes_2x.webp";
import {
  BackgroundImg,
  ContentHero,
  ContentMainHero,
  HeroLink,
  ImagesWrapper,
  TextHero,
  TextHeroSecondary,
  WrapperHero,
} from "./Hero.styled";

const Hero: FC = () => {
  return (
    <WrapperHero>
      <ArmyHelp />
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
          <HeroLink to="cakes">Каталог</HeroLink>
        </ContentHero>
        <ImagesWrapper>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${cakes} 1x, ${cakesRetina} 2x`}
              type="image/webp"
            />
            <img src={cakes} alt="Images Cakes" loading="lazy" />
          </picture>
          <BackgroundImg />
        </ImagesWrapper>
      </ContentMainHero>
    </WrapperHero>
  );
};

export default Hero;
