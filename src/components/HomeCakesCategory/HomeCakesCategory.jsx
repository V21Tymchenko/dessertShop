import { NavLink } from "react-router-dom";
import bentoCakes from "@/assets/images/category/бенто-торт.webp";
import macaroni from "@/assets/images/category/макаруни.webp";
import pastry from "@/assets/images/category/тістечка.webp";
import cakes from "@/assets/images/category/торт.webp";
import {
  CakesCategoryItem,
  CakesCategoryList,
  CakesCategorySection,
  CakesCategoryText,
  CakesCategoryTitle
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
    </>
  );
};
export default HomeCakesCategory;
