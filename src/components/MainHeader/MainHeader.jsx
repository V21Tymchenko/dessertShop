import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "@/assets/images/лого.svg";
import {
  AuthorizationIcon,
  BasketIcon,
  ButtonLanguage,
  ButtonsContainer,
  ContainerContacts,
  ContainerUserMenu,
  FavoriteIcon,
  Header,
  HeaderContainer,
  HeaderForm,
  HeaderIconButton,
  HeaderIconLink,
  HeaderInput,
  InstagramLink,
  SearchButton,
  SearchIcon,
  TelegramLink,
  UserMenu,
} from "./MainHeader.styled";

const MainHeader = () => {
  return (
    <Header>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ContainerUserMenu>
          <UserMenu>
            <HeaderForm>
              <HeaderInput type="text" placeholder="Пошук" />
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </HeaderForm>
            <HeaderIconLink to="favorite">
              <FavoriteIcon />
            </HeaderIconLink>
            <HeaderIconButton type="button">
              {" "}
              <BasketIcon />
            </HeaderIconButton>
            <HeaderIconButton type="button">
              {" "}
              <AuthorizationIcon />
            </HeaderIconButton>
          </UserMenu>
          <ContainerContacts>
            <HeaderIconLink
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Instagram"
            >
              <InstagramLink />
            </HeaderIconLink>
            <HeaderIconLink
              href="https://web.telegram.org/k/"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Telegram"
            >
              <TelegramLink />
            </HeaderIconLink>
            <ButtonsContainer>
              <ButtonLanguage type="button">UA</ButtonLanguage>
              <ButtonLanguage type="button">ENG</ButtonLanguage>
            </ButtonsContainer>
          </ContainerContacts>
        </ContainerUserMenu>
      </HeaderContainer>
      <Navigation />
    </Header>
  );
};

export default MainHeader;
