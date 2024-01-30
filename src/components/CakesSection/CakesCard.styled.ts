import styled from "styled-components";
import { Link } from "react-router-dom";

export const CakesCardWrappers = styled.section`
  display: flex;
  gap: 40px;
  margin-top: 96px;
`;

export const CardWrapperConstructor = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 49.5px;

  width: 616px;
  height: 555px;
  padding: 36px 24px;

  border-radius: ${({ theme }) => theme.radii.cards};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  transition: ${({ theme }) => theme.transitions.primary};

  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hoverButtons};
  }
`;

export const CardWrapperNew = styled(CardWrapperConstructor)`
  gap: 29px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TitleCard = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;

export const TextCard = styled.p`
  text-align: justify;
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const StyledPicture = styled.picture`
  width: 477px;
  height: 325px;
  margin-left: 8%;
  border-radius: ${({ theme }) => theme.radii.cards};
`;
