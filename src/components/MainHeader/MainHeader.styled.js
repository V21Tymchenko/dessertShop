import styled from "styled-components";
import AddFavorite from "@/assets/images/header/heart.svg?react";
import AddInBasket from "@/assets/images/header/basket.svg?react";
import UserIcon from "@/assets/images/header/user.svg?react";
import InstagramIcon from "@/assets/images/header/instagram.svg?react";
import TelegramIcon from "@/assets/images/header/telelgram.svg?react";
import IconForSearch from "@/assets/images/header/search.svg?react";
import { flexSpaceBetween } from "@/helpers/styles/fragments";
import { generalIconStyle, iconContainer } from "@/helpers/styles/fragments";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing(12)};
`;
export const HeaderContainer = styled.div`
  ${flexSpaceBetween}
`;
export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(10)};
`;
export const ContainerContacts = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const ContainerUserMenu = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderForm = styled.form`
  position: relative;
`;
export const HeaderInput = styled.input`
  width: 397px;
  height: 48px;
  padding: 12px 16px 12px 48px;
  border-radius: ${p => p.theme.radii.button};
  background: ${p => p.theme.colors.input};
  border: ${p => p.theme.borders.none};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  transition: ${({ theme }) => theme.transitions.primary};
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
    font-family: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
`;
export const SearchButton = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  left: ${({ theme }) => theme.spacing(4)};
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  color: #000000;
  height: 100%;
  cursor: pointer;
  border-radius: 50%;
  transition: all 250ms ease 0s;
`;
export const SearchIcon = styled(IconForSearch)`
  ${generalIconStyle}
`;
export const FavoriteIcon = styled(AddFavorite)`
  ${generalIconStyle}
`;
export const BasketIcon = styled(AddInBasket)`
  ${generalIconStyle}
`;
export const AuthorizationIcon = styled(UserIcon)`
  ${generalIconStyle}
`;
export const InstagramLink = styled(InstagramIcon)`
  ${generalIconStyle}
`;
export const TelegramLink = styled(TelegramIcon)`
  ${generalIconStyle}
`;
export const HeaderIconButton = styled.button`
  ${iconContainer}
`;
export const HeaderIconLink = styled.a`
  ${iconContainer}
`;
export const ButtonsContainer = styled.div`
  display: flex;
`;
export const ButtonLanguage = styled.button`
  width: 54px;
  height: 48px;
  padding: 12px 8px;
  border-radius: ${({ theme }) => theme.radii.button};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.secondary};
  transition: ${({ theme }) => theme.transitions.primary};
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
  }
`;
