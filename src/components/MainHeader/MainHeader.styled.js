import styled from "styled-components";
import AddFavorite from "../../assets/images/header/heart.svg?react";
import AddInBasket from "../../assets/images/header/basket.svg?react";
import UserIcon from "../../assets/images/header/user.svg?react";
import InstagramIcon from "../../assets/images/header/instagram.svg?react";
import TelegramIcon from "../../assets/images/header/telelgram.svg?react";
import IconForSearch from "../../assets/images/header/search.svg?react";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(12)};
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
  gap: 6px;
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
  border-radius: ${({ theme }) => theme.radii.button}px;
  background: ${({ theme }) => theme.colors.input};
  border: ${({ theme }) => theme.borders.none};
  ::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
    font-family: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.xs};
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
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${({ theme }) => theme.spacing(6)};
  width: ${({ theme }) => theme.spacing(6)};
`;
export const FavoriteIcon = styled(AddFavorite)`
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${({ theme }) => theme.spacing(6)};
  width: ${({ theme }) => theme.spacing(6)};
`;
export const BasketIcon = styled(AddInBasket)`
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${({ theme }) => theme.spacing(6)};
  width: ${({ theme }) => theme.spacing(6)};
`;
export const AuthorizationIcon = styled(UserIcon)`
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${({ theme }) => theme.spacing(6)};
  width: ${({ theme }) => theme.spacing(6)};
`;
export const InstagramLink = styled(InstagramIcon)`
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${({ theme }) => theme.spacing(6)};
  width: ${({ theme }) => theme.spacing(6)};
`;
export const TelegramLink = styled(TelegramIcon)`
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${({ theme }) => theme.spacing(6)};
  width: ${({ theme }) => theme.spacing(6)};
`;
export const HeaderIconButton = styled.button`
  padding: ${({ theme }) => theme.spacing(1)};
  width: ${({ theme }) => theme.spacing(12)};
  height: ${({ theme }) => theme.spacing(12)};
  border-radius: ${({ theme }) => theme.radii.button}px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
    cursor: pointer;
  }
`;
export const HeaderIconLink = styled.a`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)};
  width: ${({ theme }) => theme.spacing(12)};
  height: ${({ theme }) => theme.spacing(12)};
  border-radius: ${({ theme }) => theme.radii.button}px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
  }
  cursor: pointer;
`;
