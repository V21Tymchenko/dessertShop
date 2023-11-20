import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  padding-top: ${({ theme }) => theme.spacing(14)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};
`;
export const FooterLogo = styled.img`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(14)};
`;
export const MainContainerInfo = styled.div`
  max-width: 288px;
`;
export const Title2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
export const Title3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
export const Title4 = styled.h4`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
export const FooterListItem = styled.li`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(3)};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
  }
`;
export const FooterListLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text};
`;
export const FooterLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text};
`;
export const CopyrightText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
