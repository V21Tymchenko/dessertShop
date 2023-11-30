import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 264px;
  padding: 12px 24px;
  font-family: ${({ theme }) => theme.fonts.secondary};

  background-color: ${({ theme }) => theme.colors.buttons};
  border-radius: ${({ theme }) => theme.radii.button};

  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.body};
  transition: ${({ theme }) => theme.transitions.primary};

  border: none;
  cursor: pointer;
  outline: none;
 
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverButtons};
  }

  &:disabled {
    opacity: ${({ $variant }) => ($variant === "dis" ? 1 : 0.5)};
    background-color: ${({ theme }) => theme.colors.input};
    cursor: default;
  }

  ${({ $variant }) =>
    $variant === "cardOpacity" &&
    css`
      font-weight: ${({ theme }) => theme.fontWeights.semibold};
      color: ${({ theme }) => theme.colors.text};

      background-color: ${({ theme }) => theme.colors.body};
      border: 1px solid ${({ theme }) => theme.colors.buttons};
      &:focus,
      &:hover {
        background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
      }
    `}
  ${({ $variant }) =>
    $variant === "input" &&
    css`
      max-width: 100%;
      margin-top: 48px;
    `}
         ${({ $variant }) =>
    $variant === "order" &&
    css`
      max-width: 100%;
      margin-top: 40px;
    `}
    ${({ $variant }) =>
    $variant === "backToSHop" &&
    css`
      max-width: 100%;
      background-color: transparent;
      margin-top: 12px;
      color: #121212;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: ${({ theme }) => theme.fontWeights.semibold};
      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
      }
    `}
     ${({ $variant }) =>
    $variant === "authorization" &&
    css`
      max-width: 180px;
      margin-top: 32px;
    `}
`;
