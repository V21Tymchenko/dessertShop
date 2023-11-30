import { NavLink } from "react-router-dom";
import ArmyHelp from "../ArmyHelp/ArmyHelp";
import cakesCategory from "@/helpers/definitions/cakesCategory";
import {
  CakesCategoryItem,
  CakesCategoryList,
  CakesCategorySection,
  CakesCategoryText,
  CakesCategoryTitle,
} from "./Catalog.styled";

const Catalog = () => {
  return (
    <CakesCategorySection>
      <ArmyHelp />
      <CakesCategoryTitle>Каталог</CakesCategoryTitle>
      <CakesCategoryList>
        {cakesCategory.map(({ id, text, src, color, cakesRetina }) => (
          <CakesCategoryItem key={id} color={color}>
            <NavLink>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={`${src} 1x, ${cakesRetina} 2x`}
                  type="image/webp"
                />
                <img
                  src={src}
                  alt={text}
                  width="208px"
                  height="200px"
                  loading="lazy"
                />
              </picture>
              <CakesCategoryText>{text}</CakesCategoryText>
            </NavLink>
          </CakesCategoryItem>
        ))}
      </CakesCategoryList>
    </CakesCategorySection>
  );
};
export default Catalog;
