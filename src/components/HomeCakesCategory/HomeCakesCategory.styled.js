import styled from "styled-components";
import { flexCenter } from "@/helpers/styles/fragments";

export const CakesCategorySection = styled.section`
  margin-top: 170px;
  padding-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const CakesCategoryTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;
export const CakesCategoryList = styled.ul`
  display: flex;
  gap: 40px;
`;
export const CakesCategoryItem = styled.li`
  padding: 24px 0px;
  border-radius: 16px;
  background-color: ${({ color }) => color};
  width: calc((100% - 40px) / 4);
  ${flexCenter}
  box-shadow: ${({ theme }) => theme.shadows.primary};
  transition: ${({ theme }) => theme.transitions.primary};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;
export const CakesCategoryText = styled.p`
  margin-top: 16px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;
