import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import ModalBasket from "../ModalWindows/ModalBasket/ModalBasket";
import AuthModal from "@/components/ModalWindows/AuthModal/AuthModal";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const toggleBasketModal = () => {
    setIsBasketOpen(prev => !prev)
  }

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
            <HeaderIconButton type="button" onClick={toggleBasketModal}>
            {" "}
            <BasketIcon />
          </HeaderIconButton>         
           {isBasketOpen && (
              <ModalBasket closeModal={toggleBasketModal} />
            )}   

          <HeaderIconButton type="button" onClick={toggleModal}>
            {" "}
                 
            <AuthorizationIcon />
          </HeaderIconButton>
          {isModalOpen && (
              <AuthModal closeModal={toggleModal} />
            )}   
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
