import { NavLink } from "react-router-dom";
import bentoCakes from "@/assets/images/category/бенто-торт.webp";
import macaroni from "@/assets/images/category/макаруни.webp";
import pastry from "@/assets/images/category/тістечка.webp";
import cakes from "@/assets/images/category/торт.webp";
import advantageFirst from "@/assets/images/advantage/advantage1.svg";
import advantageSecond from "@/assets/images/advantage/advantage2.svg";
import advantageThird from "@/assets/images/advantage/advantage3.svg";
import advantageFourth from "@/assets/images/advantage/advantage4.svg";
import {
  CakesCategoryItem,
  CakesCategoryList,
  CakesCategorySection,
  CakesCategoryText,
  CakesCategoryTitle,
  OurAdvantageItem,
  OurAdvantageList,
  OurAdvantageSection,
  OurAdvantageText,
  OurAdvantageTitle,
} from "./HomeCakesCategory.styled";

const HomeCakesCategory = () => {
  return (
    <>
      <CakesCategorySection>
        <CakesCategoryTitle>Наші смаколики</CakesCategoryTitle>
        <CakesCategoryList>
          <CakesCategoryItem color={"#f7d1de"}>
            <NavLink>
              <div>
                <img src={cakes} alt="Торти" width="208px" height="200px" />
                <CakesCategoryText>Торти на різні події</CakesCategoryText>
              </div>
            </NavLink>
          </CakesCategoryItem>
          <CakesCategoryItem color={"#ffeb98"}>
            <NavLink>
              <div>
                <img
                  src={bentoCakes}
                  alt="Бенто торти"
                  width="208px"
                  height="200px"
                />
                <CakesCategoryText>Бенто-торти</CakesCategoryText>
              </div>
            </NavLink>
          </CakesCategoryItem>
          <CakesCategoryItem color={"#bff3ee"}>
            <NavLink>
              <div>
                <img
                  src={macaroni}
                  alt="Макаруни"
                  width="208px"
                  height="200px"
                />
                <CakesCategoryText>Макаруни</CakesCategoryText>
              </div>
            </NavLink>
          </CakesCategoryItem>
          <CakesCategoryItem color={"#cddafa"}>
            <NavLink>
              <div>
                <img src={pastry} alt="Тістечка" width="208px" height="200px" />
                <CakesCategoryText>Тістечка</CakesCategoryText>
              </div>
            </NavLink>
          </CakesCategoryItem>
        </CakesCategoryList>
      </CakesCategorySection>

      <OurAdvantageSection>
        <OurAdvantageList>
          <OurAdvantageItem>
            <img src={advantageFirst} alt="Різноманітність смаків" />
            <div>
              <OurAdvantageTitle>Різноманітність смаків</OurAdvantageTitle>
              <OurAdvantageText>Широкий вибір асортименту</OurAdvantageText>
            </div>
          </OurAdvantageItem>
          <OurAdvantageItem>
            <img src={advantageSecond} alt="Ексклюзивність" />
            <div>
              <OurAdvantageTitle>Ексклюзивність</OurAdvantageTitle>
              <OurAdvantageText>Унікальний підхід до дизайну</OurAdvantageText>
            </div>
          </OurAdvantageItem>
          <OurAdvantageItem>
            <img src={advantageThird} alt="Гарантія доставки" />
            <div>
              <OurAdvantageTitle>Гарантія доставки</OurAdvantageTitle>
              <OurAdvantageText>
                Готові вчасно і доставлені в термін
              </OurAdvantageText>
            </div>
          </OurAdvantageItem>
          <OurAdvantageItem>
            <img src={advantageFourth} alt="Якість та Свіжість" />
            <div>
              <OurAdvantageTitle>Якість та Свіжість</OurAdvantageTitle>
              <OurAdvantageText>Найкращі інгредієнти</OurAdvantageText>
            </div>
          </OurAdvantageItem>
        </OurAdvantageList>
      </OurAdvantageSection>
    </>
  );
};
export default HomeCakesCategory;
