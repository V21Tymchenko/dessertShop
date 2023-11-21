import styled from "styled-components";
import { flexSpaceBetween } from "@/helpers/styles/fragments";

export const OurAdvantageList = styled.ul`
  ${flexSpaceBetween}
`;

export const OurAdvantageItem = styled.li`
  ${flexSpaceBetween}
  gap: 12px;
`;

export const OurAdvantageTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const OurAdvantageText = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const OurAdvantageSection = styled.section`
  margin-top: 132px;
`;
