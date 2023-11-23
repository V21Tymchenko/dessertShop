import styled from "styled-components";
import bcgImage from "@/assets/images/homePage/Vector.webp";
import bcgImageRetina from "@/assets/images/homePage/Vector_2x.webp";

export const WrapperHero = styled.section`
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const ContentTextTop = styled.div`
  width: 100%;
  height: 56px;
  text-align: center;

  display: flex;
  gap: 6px;
  padding: 4px 0px;
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.radii.text};
  background: ${({ theme }) => theme.colors.accentBlue};
`;

export const TextHeroSecondary = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 22.4px;
`;

export const ContentMainHero = styled.div`
  display: flex;
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

export const StyledPicture = styled.picture``;

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

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-decoration-line: underline;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.radii.button};
  transition: ${({ theme }) => theme.transitions.primary};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
  }
`;
