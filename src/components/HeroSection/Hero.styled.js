import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bcgImage from "@/assets/images/homePage/Vector.webp";
import bcgImageRetina from "@/assets/images/homePage/Vector_2x.webp";

export const WrapperHero = styled.section`
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const TextHeroSecondary = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 22.4px;
`;

export const ContentMainHero = styled.div`
  display: flex;
  gap: 66px;
`;

export const ContentHero = styled.div`
  width: 547px;
`;

export const TextHero = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 57.6px;
`;

export const ImagesWrapper = styled.div`
  position: relative;
  width: 659px;
  height: 545px;
`;

export const HeroLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 264px;
  padding: 12px 24px;
  font-family: ${({ theme }) => theme.fonts.secondary};

  background-color: ${({ theme }) => theme.colors.buttons};
  border-radius: ${({ theme }) => theme.radii.button};

  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.body};
  transition: ${({ theme }) => theme.transitions.primary};

  border: none;
  cursor: pointer;
  outline: none;
  max-width: 288px;
  margin-top: 64px;
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverButtons};
  }

  &:disabled {
    opacity: ${({ $variant }) => ($variant === "dis" ? 1 : 0.5)};
    background-color: ${({ theme }) => theme.colors.input};
    cursor: default;
  }
`;

export const BackgroundImg = styled.div`
  position: absolute;
  top: 0%;
  right: -12%;
  width: 561px;
  height: 634px;

  z-index: -1;

  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${bcgImage});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bcgImageRetina});
  }
`;
