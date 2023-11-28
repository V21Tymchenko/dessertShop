import styled from "styled-components";
import { generalIconStyle } from "@/helpers/styles/fragments.js";
import { iconContainer } from "@/helpers/styles/fragments.js";

export const YourOrderContainer = styled.div`
  width: 506px;
  padding: ${({ theme }) => theme.spacing(10)};

  border-radius: ${({ theme }) => theme.radii.cards};
  background: ${({ theme }) => theme.colors.borderCards};
`;
export const YourOrderTitle = styled.h5`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;
export const ContainerCakesInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(10)};
`;
export const CakesName = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const CakesText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(4)};
  }
`;
export const YourOrderNumber = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const YourOrderOperation = styled.img`
  ${generalIconStyle}
`;
export const YourOrderInput = styled.input`
  height: ${({ theme }) => theme.spacing(9)};
  width: 58px;
  text-align: center;

  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  outline: none;
  border-radius: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.borderInput};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
`;
export const ContainderCakes = styled.div`
  display: flex;
  align-items: center;
`;
export const YourOrderButton = styled.button`
  ${iconContainer}
  padding: 3px;
`;
export const CostText = styled.p`
  margin-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderInput};
`;
export const TogetherText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  &:first-child {
    margin-right: ${({ theme }) => theme.spacing(4)};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;