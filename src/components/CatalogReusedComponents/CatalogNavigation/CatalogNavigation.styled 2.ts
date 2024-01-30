import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CatalogNavigationList = styled.ul`
  display: flex;
  margin-top: 40px;
`;
export const CatalogNavigationSlash = styled.span`
  display: block;
  padding: 14px 0;
  color: ${({ theme }) => theme.colors.text};
`;
export const CatalogNavigationLink = styled(NavLink)<{ active?: string }>`
  padding: 14px 6px;
  color: ${({ active }) => (active === "true" ? "#B83D6E" : "#121212")};
`;
export const StandartFillingText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
