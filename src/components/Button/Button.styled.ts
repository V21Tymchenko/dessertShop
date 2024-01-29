import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{
  $variant: string | null;
  $maxwidth: string | null;
  $margintop: string | null;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ $margintop }) => $margintop};
  width: 100%;
  max-width: ${({ $maxwidth }) => $maxwidth};
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
    $variant === "authButtonReg" &&
    css`
      font-weight: ${({ theme }) => theme.fontWeights.semibold};
      color: ${({ theme }) => theme.colors.text};
      max-width: ${({ theme }) => theme.spacing(94)};
      background-color: ${({ theme }) => theme.colors.body};
      border: 1px solid ${({ theme }) => theme.colors.buttons};
      padding: ${({ theme }) => theme.spacing(4)}
        ${({ theme }) => theme.spacing(35)};
      border-radius: 10px 0 0 10px;

      &:focus,
      &:hover {
        background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
      }
    `}

    ${({ $variant }) =>
    $variant === "RegButton" &&
    css`
      max-width: ${({ theme }) => theme.spacing(130)};
      margin-top: ${({ theme }) => theme.spacing(8)};
      padding: ${({ theme }) => theme.spacing(4)}
        ${({ theme }) => theme.spacing(45)};
    `}

    ${({ $variant }) =>
    $variant === "SignInBtn" &&
    css`
      margin-top: ${({ theme }) => theme.spacing(4)};
      margin-bottom: ${({ theme }) => theme.spacing(4)};
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      font-size: ${({ theme }) => theme.fontSizes.s};
      color: ${({ theme }) => theme.colors.text};
      line-height: ${({ theme }) => theme.lineHeights.body};
      margin-left: ${({ theme }) => theme.spacing(83)};
      background-color: inherit;
      padding: ${({ theme }) => theme.spacing(5)}
        ${({ theme }) => theme.spacing(6)};
      border: ${({ theme }) => theme.borders.none};

      &:hover,
      &:focus {
        background-color: inherit;
        border: ${({ theme }) => theme.borders.normal}
          ${({ theme }) => theme.colors.hoverButtons};
      }
      &:active {
        color: ${({ theme }) => theme.colors.active};
        border: ${({ theme }) => theme.borders.none};
      }
    `}
`;
