import styled from "styled-components";
import CakesHeart from "@/assets/images/Catalog/heart.svg?react";

export const CakesList = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: flex-start;
`;
export const CakesItem = styled.li`
  position: relative;
  width: 288px;
  border-radius: ${({ theme }) => theme.spacing(4)};
  overflow: hidden;

  box-shadow: ${({ theme }) => theme.shadows.primary};
`;
export const HeartIcon = styled(CakesHeart)`
  width: 24px;
  height: 24px;
`;
export const ContainerIcon = styled.div`
  position: absolute;
  padding: 8px;

  top: 16px;
  right: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.body};
`;
export const CakesImage = styled.img`
  width: 100%;
  height: 254px;
  object-fit: cover;
`;
export const CakesCardsTitle = styled.h4`
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
`;
export const CakesCardsText = styled.p`
  margin-top: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
`;
export const CakesButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(6)};
  gap: ${({ theme }) => theme.spacing(4)};
`;
export const CakesItemContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(3)};
`;
