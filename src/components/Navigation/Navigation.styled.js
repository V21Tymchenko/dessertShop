import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderNavItem = styled.li`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.radii.button}px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
  }
  cursor: pointer;
`;
export const HeaderNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
`;
export const Header = styled.header`
  margin-top: ${({ theme }) => theme.spacing(6)};
`;



    
