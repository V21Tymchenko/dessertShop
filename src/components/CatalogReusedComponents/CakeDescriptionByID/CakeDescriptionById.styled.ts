import styled from "styled-components";

export const DescriptionCakeContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(20)};
  padding: 40px 64px;
  background-color: ${({ theme }) => theme.colors.footer};
  border-radius: ${({ theme }) => theme.radii.button};
`;
export const DescriptionCakeList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;
export const DescriptionCakeButton = styled.button<{ active: string }>`
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.button};
  border: 1px solid ${({ theme }) => theme.colors.buttons};
  background-color: ${({ active }) =>
    active === "true" ? "#B83D6E" : "transparent"};
  color: ${({ active }) => (active === "true" ? "#ffffff" : "#121212")};

  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  &:hover {
    background-color: ${({ theme, active }) =>
      active === "true" ? theme.colors.active : theme.colors.hoverHeaderIcon};
  }
`;
export const DescriptionCakeTitle = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;
export const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
  & > span {
    margin-left: ${({ theme }) => theme.spacing(2)};
  }
`;
export const DescriptionDeliveryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  padding-left: ${({ theme }) => theme.spacing(3)};
  list-style: disc;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
