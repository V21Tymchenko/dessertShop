import styled from "styled-components";
import { Link } from "react-router-dom";

export const CakesCardWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const CakesCard = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 616px;
  height: 555px;
  padding: 36px 24px;

  border-radius: ${({ theme }) => theme.radii.cards};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  cursor: pointer;
`;

export const TitleCard = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 41.6px;
  /* margin-bottom: 32px; */
`;

export const TextCard = styled.p`
  text-align: justify;
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 22.4px;
`;

export const StyledPicture = styled.picture`
  width: 477px;
  height: 325px;
  border-radius: ${({ theme }) => theme.radii.cards};
`;
