import styled from "styled-components";
import { flexSpaceBetween } from "@/helpers/styles/fragments";

export const CakesTitle = styled.h2`
  margin-top: ${({ theme }) => theme.spacing(4)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;
export const CakesContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  margin-top: ${({ theme }) => theme.spacing(20)};
`;
export const CakesFilterTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;

export const CakesFilterList = styled.ul`
  display: flex;
  flex-direction: column;

  width: ${({ theme }) => theme.spacing(72)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;
export const CakesTypeContainer = styled.div`
  ${flexSpaceBetween}
`;

