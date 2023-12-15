import { FC } from "react";
import logo from "@/assets/images/footer/лого.svg";
import {
  ContainerFooter,
  ContentContainer,
  CopyrightText,
  FooterLink,
  FooterListItem,
  FooterListLink,
  FooterLogo,
  FooterTitle,
  InstagramIcon,
  MainContainerInfo,
  PhoneIcon,
} from "./Footer.styled";
import Container from "../Container";

const Footer: FC = () => {
  return (
    <ContainerFooter>
      <Container>
        <ContentContainer>
          <MainContainerInfo>
            <FooterLogo src={logo} alt="logo" />
            <p>
              Майстерня Десертів - це Інтернет магазин, де кулінарна
              майстерність об'єднується із вишуканістю смаків. Від розкішних
              тортів до індивідуально оформлених тістечок.
            </p>
          </MainContainerInfo>
          <div>
            <FooterTitle>Каталог</FooterTitle>
            <ul>
              <FooterListItem>
                <FooterListLink to="cakes">Торти</FooterListLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListLink to="bento">Бенто-торти</FooterListLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListLink to="macaroni">Макаруни</FooterListLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListLink to="pastry">Тістечка</FooterListLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListLink to="new">Новинки</FooterListLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListLink to="dayCakes">Пропозиції дня</FooterListLink>
              </FooterListItem>
            </ul>
          </div>
          <div>
            <FooterTitle>Компанія</FooterTitle>
            <ul>
              <FooterListItem>
                <FooterListLink to="cooperation">Співпраця</FooterListLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListLink to="about">Про нас</FooterListLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListLink to="delivery">
                  Доставка та оплата
                </FooterListLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListLink to="questions">
                  Питання та відповіді
                </FooterListLink>
              </FooterListItem>
            </ul>
          </div>
          <div>
            <FooterTitle>Зв’яжіться з нами</FooterTitle>
            <ul>
              <FooterListItem>
                <FooterLink
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Link to Instagram"
                >
                  <InstagramIcon />
                  Instagram
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="tel:+380678887744">
                  <PhoneIcon />
                  +380 67 888 77 44
                </FooterLink>
              </FooterListItem>
            </ul>
          </div>
        </ContentContainer>
        <CopyrightText>
          &copy; 2023 Інтернет магазин “Майстерня Десертів”. Всі права захищені
        </CopyrightText>
      </Container>
    </ContainerFooter>
  );
};
export default Footer;
