import styled from "styled-components";

export const MainTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.largeTitle};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const OrderSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing(16)};
  padding-bottom: 213px;
`;
