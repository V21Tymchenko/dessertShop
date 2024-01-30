import { FC } from "react";
import CatalogNavigation from "../CatalogReusedComponents/CatalogNavigation";
import ourTeam from "@/assets/images/aboutUs/ourTeam.webp";
import ourTeamRetina from "@/assets/images/aboutUs/ourTeamRetina.webp";
import ourWork from "../../assets/images/aboutUs/ourWork.webp";
import ourWorkRetina from "../../assets/images/aboutUs/ourWorkRetina.webp";
import {
  AboutUsContainer,
  AboutUsContentContainer,
  AboutUsMainTitle,
  AboutUsTitle,
  AboutWorkContentContainer,
} from "./AboutUs.styled";

const AboutUs: FC = () => {
  return (
    <section>
      <CatalogNavigation
        navigationLinks={[{ hash: "/about", name: "Про нас", $active: true }]}
      />
      <AboutUsContainer>
        <AboutUsContentContainer>
          <AboutUsMainTitle>Про нас</AboutUsMainTitle>
          <AboutUsTitle>
            Майстерня Десертів - місце, де кулінарна майстерність об'єднується
            із вишуканістю смаків.
          </AboutUsTitle>
          <p>
            Ласкаво просимо в Майстерню Десертів. Ми - команда творчих
            кондитерів, які вірять у те, що кожен десерт - це справжнє
            мистецтво. Наша місія - створювати не просто солодощі, а справжні
            твори, які запам'ятаються та принесуть радість для вас та ваших
            близьких. Ми прагнемо подарувати вам не просто продукт, а емоції.
          </p>
        </AboutUsContentContainer>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${ourTeam} 1x, ${ourTeamRetina} 2x`}
            type="image/webp"
          />
          <img src={ourTeam} alt="Our Team" loading="lazy" />
        </picture>
      </AboutUsContainer>
      <AboutUsContainer>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${ourWork} 1x, ${ourWorkRetina} 2x`}
            type="image/webp"
          />
          <img src={ourWork} alt="Our Work" loading="lazy" />
        </picture>
        <AboutWorkContentContainer>
          <p>
            Наша історія почалась у 2019 році з невеличкого кондитерського цеху,
            де виготовлялись чудові тортики та тістечка для рідних та знайомих.
            Вже через 6 років ми перетворилися на справжню кондитерську
            майстерню, в штаті якої зараз працюють люди, закохані у свою справу.
          </p>
          <p>
            Наша історія почалась у 2019 році з невеличкого кондитерського цеху,
            де виготовлялись чудові тортики та тістечка для рідних та знайомих.
            Вже через 6 років ми перетворилися на справжню кондитерську
            майстерню, в штаті якої зараз працюють люди, закохані у свою справу.
          </p>
          <p>
            Ми прагнемо не лише створювати неймовірно смачні десерти, але й
            вражати, відкривати, поєднувати та дивувати кожного клієнта
            незабутніми смаками, щоб кожен зміг відчути нашу унікальність.
          </p>
        </AboutWorkContentContainer>
      </AboutUsContainer>
    </section>
  );
};

export default AboutUs;
