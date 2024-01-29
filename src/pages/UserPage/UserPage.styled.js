import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const UserPageNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &.active{
  color: ${({ theme }) => theme.colors.iconColorAccent};

  }
`;

export const UserPageNavLinkBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  padding: 12px 16px;
  margin-top: 20px;

  min-width: 288px;
`;

export const UserPageImage = styled.img`
  margin-top: 24px;
`;

export const UserPageMainNavBox = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPageMainNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 16px;
  cursor: pointer;
`;

export const UserPageMainNavLinkActive = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.iconColorAccent};
  padding: 12px 16px;
  cursor: pointer;
`;

export const UserPageSection = styled.div`
  display: flex;

  justify-content: flex-start;
`;