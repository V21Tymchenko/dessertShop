import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderNavItem = styled.li`
  padding: 12px ${({ theme }) => theme.spacing(4)};
  border-radius: ${p => p.theme.radii.button};
  &:hover {
    background-color: ${p => p.theme.colors.hoverHeaderIcon};
  }
  cursor: pointer;
`;
export const HeaderNavLink = styled(NavLink)`
  font-family: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.text};
`;
