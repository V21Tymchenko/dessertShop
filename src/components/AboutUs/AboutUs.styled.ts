import styled from "styled-components";

export const AboutUsMainTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;
export const AboutUsTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;
export const AboutUsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(30)};
  }
`;
export const AboutUsContentContainer = styled.div`
  width: 50%;
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;
export const AboutWorkContentContainer = styled(AboutUsContentContainer)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;
