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
  margin-top: 48px;
  margin-bottom: ${p => p.theme.space[6]}px;
`;
export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[8]}px;
`;
export const ContainerContacts = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
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
  border-radius: ${p => p.theme.radii.button}px;
  background: ${p => p.theme.colors.input};
  border: ${p => p.theme.borders.none};
  ::placeholder {
    color: ${p => p.theme.colors.inputText};
    font-family: ${p => p.theme.colors.primary};
    font-size: 16px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  left: ${p => p.theme.space[5]}px;
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
  height: ${p => p.theme.space[6]}px;
  width: ${p => p.theme.space[6]}px;
`;
export const FavoriteIcon = styled(AddFavorite)`
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${p => p.theme.space[6]}px;
  width: ${p => p.theme.space[6]}px;
`;
export const BasketIcon = styled(AddInBasket)`
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${p => p.theme.space[6]}px;
  width: ${p => p.theme.space[6]}px;
`;
export const AuthorizationIcon = styled(UserIcon)`
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${p => p.theme.space[6]}px;
  width: ${p => p.theme.space[6]}px;
`;
export const InstagramLink = styled(InstagramIcon)`
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${p => p.theme.space[6]}px;
  width: ${p => p.theme.space[6]}px;
`;
export const TelegramLink = styled(TelegramIcon)`
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${p => p.theme.space[6]}px;
  width: ${p => p.theme.space[6]}px;
`;
export const HeaderIconButton = styled.button`
  padding: ${p => p.theme.space[2]}px;
  width: 48px;
  height: 48px;
  border-radius: ${p => p.theme.radii.button}px;
  &:hover {
    background-color: ${p => p.theme.colors.hoverHeaderIcon};
    cursor: pointer;
  }
`;
export const HeaderIconLink = styled.a`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  width: 48px;
  height: 48px;
  border-radius: ${p => p.theme.radii.button}px;
  &:hover {
    background-color: ${p => p.theme.colors.hoverHeaderIcon};
  }
  cursor: pointer;
`;
