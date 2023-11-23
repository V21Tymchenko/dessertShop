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
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const OurAdvantageSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing(30)};
  padding-top: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(10)};

  border-top: 1px solid ${({ theme }) => theme.colors.footer};
  border-bottom: 1px solid ${({ theme }) => theme.colors.footer};
`;
