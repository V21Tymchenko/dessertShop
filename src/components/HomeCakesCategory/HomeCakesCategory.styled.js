import styled from "styled-components";
import { flexCenter, flexSpaceBetween } from "@/helpers/styles/fragments";

export const CakesCategorySection = styled.section`
  margin-top: 73px;
`;

export const CakesCategoryTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;
export const CakesCategoryList = styled.ul`
  ${flexSpaceBetween}
  gap: 40px;
`;
export const CakesCategoryItem = styled.li`
  padding: 24px 0px;
  border-radius: 16px;
  background-color: ${({ color }) => color};
  width: calc((100% - 40px) / 4);
  ${flexCenter}
  box-shadow: ${({ theme }) => theme.shadows.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;
export const CakesCategoryText = styled.p`
  margin-top: 16px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;

