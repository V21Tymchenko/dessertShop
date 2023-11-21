import styled from "styled-components";
import { flexSpaceBetween } from "@/helpers/styles/fragments";
import RightArrow from "../../assets/images/popularCakes/right-arrow-alt.svg?react";
import Basket from "../../assets/images/popularCakes/basket.svg?react";
import LookEverything from "../../assets/images/popularCakes/lookAtEverythingArrow.svg?react";
import { NavLink } from "react-router-dom";

export const PopurSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing(30)};
`;
export const PopurContainer = styled.div`
  ${flexSpaceBetween}
`;
export const PopularList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 41px;
  gap: ${({ theme }) => theme.spacing(10)};
`;
export const PopularItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.spacing(2)};
  width: calc((100% - 40px) / 4);
  box-shadow: ${({ theme }) => theme.shadows.primary};
`;
export const MainTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;
export const PopularTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
export const PopularText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;
export const CardsTextContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;
export const ArrowIcon = styled(RightArrow)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  margin-left: ${({ theme }) => theme.spacing(2)};
`;
export const BasketIcon = styled(Basket)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  margin-left: ${({ theme }) => theme.spacing(2)};
`;
export const LinkToPopular = styled(NavLink)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(6)};
  
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.spacing(3)};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
  }
`;
export const LookIcon = styled(LookEverything)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
`;
