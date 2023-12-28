import styled from "styled-components";
import RightArrow from "@/assets/images/popularCakes/right-arrow-alt.svg?react";
import Basket from "@/assets/images/popularCakes/basket.svg?react";
import { FaHeart } from "react-icons/fa";

export const PopularList = styled.ul`
  display: flex;
  margin-top: 41px;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const PopularItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.spacing(2)};
  width: 288px;
  box-shadow: ${({ theme }) => theme.shadows.primary};

  position: relative;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.body};
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 16px;
  right: 16px;

  cursor: pointer;
`;

export const FavoriteIcon = styled(FaHeart)`
  background-color: ${({ theme }) => theme.colors.body};
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.active};
  /* background-color: ${({ theme }) => theme.colors.active}; */
`;

export const CardsTextContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
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
