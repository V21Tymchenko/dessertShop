import { FC } from "react";
import { NavLink } from "react-router-dom";
import cakesCategory from "@/helpers/definitions/cakesCategory";
import ArmyHelp from "../ArmyHelp/ArmyHelp";
import { CakesCategoryProps } from "@/helpers/definitions/cakesCategory";
import {
  CakesCategoryItem,
  CakesCategoryList,
  CakesCategoryNav,
  CakesCategoryNavItem,
  CakesCategoryNavList,
  CakesCategorySection,
  CakesCategoryText,
  CakesCategoryTitle,
} from "./Catalog.styled";

const Catalog: FC = () => {
  return (
    <CakesCategorySection>
      <ArmyHelp />
      <CakesCategoryNavList>
        <li>
          <CakesCategoryNav to="/">Головна</CakesCategoryNav>
        </li>
        <li>
          <CakesCategoryNavItem>/</CakesCategoryNavItem>
        </li>
        <li>
          <CakesCategoryNav active={String(true)} to="/catalog">
            Каталог
          </CakesCategoryNav>
        </li>
      </CakesCategoryNavList>
      <CakesCategoryTitle>Каталог</CakesCategoryTitle>
      <CakesCategoryList>
        {cakesCategory.map(
          ({ id, text, path, src, color, cakesRetina }: CakesCategoryProps) => (
            <CakesCategoryItem key={id} color={color}>
              <NavLink to={path}>
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
          )
        )}
      </CakesCategoryList>
    </CakesCategorySection>
  );
};
export default Catalog;
