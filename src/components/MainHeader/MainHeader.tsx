import { FC } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import ModalBasket from "../ModalWindows/ModalBasket/ModalBasket";
import AuthModal from "@/components/ModalWindows/AuthModal/AuthModal";
import logo from "@/assets/images/лого.svg";
import { logout } from "@/redux/Auth/auth-operations";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  selectToken,
  selectName,
  selectIsVerified,
} from "@/redux/Auth/auth-selectors";
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
  HeaderIconSocialMedia,
  HeaderInput,
  InstagramLink,
  SearchButton,
  SearchIcon,
  TelegramLink,
  UserMenu,
  UserMenuButton,
  UserMenuContainer,
  UserName,
  UserNameButton,
  UserNameContainer,
} from "./MainHeader.styled";

type MainHeaderProps = {
  children: React.ReactNode;
};
const MainHeader: FC<MainHeaderProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const token = useSelector(selectToken);
  const name = useSelector(selectName).split(" ")[0];
  const isVerification = useSelector(selectIsVerified);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isVerification) {
      setIsModalOpen(true);
    }
  }, [isVerification]);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const toggleBasketModal = () => {
    setIsBasketOpen(prev => !prev);
  };

  const handleUserMenuOpen = () => {
    setOpenMenu(prev => !prev);
  };
  const handleLogOut = () => {
    try {
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };
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
            {isBasketOpen && <ModalBasket closeModal={toggleBasketModal} />}

            {token ? (
              <UserNameContainer>
                <UserNameButton type="button" onClick={handleUserMenuOpen}>
                  {" "}
                  <AuthorizationIcon />
                  <UserName>{name}</UserName>
                </UserNameButton>
                <UserMenuContainer open={openMenu}>
                  <UserMenuButton type="button" onClick={handleLogOut}>
                    Вийти
                  </UserMenuButton>
                </UserMenuContainer>
              </UserNameContainer>
            ) : (
              <HeaderIconButton type="button" onClick={toggleModal}>
                {" "}
                <AuthorizationIcon />
              </HeaderIconButton>
            )}
            {isModalOpen && (
              <AuthModal closeModal={toggleModal} closeLogin={setIsModalOpen} />
            )}
          </UserMenu>
          <ContainerContacts>
            <HeaderIconSocialMedia
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Instagram"
            >
              <InstagramLink />
            </HeaderIconSocialMedia>
            <HeaderIconSocialMedia
              href="https://web.telegram.org/k/"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Telegram"
            >
              <TelegramLink />
            </HeaderIconSocialMedia>
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
