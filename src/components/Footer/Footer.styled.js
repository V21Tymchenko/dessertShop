import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Instagram from "@/assets/images/footer/instagram.svg?react";
import Phone from "@/assets/images/footer/phone.svg?react";

export const ContainerFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  padding-top: ${({ theme }) => theme.spacing(14)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};
  margin-top: 130px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #f7d1de;
  }
  &::before {
    top: 1564px;
  }
  &::after {
    top: 1697px;
  }
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
export const FooterTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
export const FooterListItem = styled.li`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(3)};
  transition: ${({ theme }) => theme.transitions.primary};
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
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text};
`;
export const CopyrightText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
export const InstagramIcon = styled(Instagram)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
`;
export const PhoneIcon = styled(Phone)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
`;
