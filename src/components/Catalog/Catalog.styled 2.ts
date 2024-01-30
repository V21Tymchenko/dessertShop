import styled from "styled-components";
import { flexCenter } from "@/helpers/styles/fragments";
import { NavLink } from "react-router-dom";

export const CakesCategorySection = styled.section`
  margin-top: 24px;
`;
export const CakesCategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  margin-top: 34px;
`;
export const CakesCategoryNavList = styled.ul`
  display: flex;
  margin-top: 40px;
`;
export const CakesCategoryNavItem = styled.span`
  display: block;
  padding: 14px 0;
  color: ${({ theme }) => theme.colors.text};
`;
export const CakesCategoryNav = styled(NavLink)<{ active: string }>`
  padding: 14px 6px;
  color: ${({ active }) => (active ? "#B83D6E" : "#121212")};
`;

export const CakesCategoryItem = styled.li`
  padding: 24px 0px;
  border-radius: 16px;
  background-color: ${({ color }) => color};
  width: calc((100% - 120px) / 4);
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
export const CakesCategoryTitle = styled.h2`
  margin-top: 16px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;
