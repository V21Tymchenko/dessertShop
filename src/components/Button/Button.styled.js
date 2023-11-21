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
  line-height: 25.2px;
  color: ${({ theme }) => theme.colors.body};

  border: none;
  cursor: pointer;
  outline: none;

  &:focus,
  &:hover {
    /* transform: scale(1.01); */
    background-color: ${({ theme }) => theme.colors.hoverButtons};
  }

  &:disabled {
    opacity: ${({ $variant }) => ($variant === "dis" ? 1 : 0.5)};
    background-color: ${({ theme }) => theme.colors.input};
    cursor: default;

    &:focus,
    &:hover {
      transform: scale(1);
    }
  }

  ${({ $variant }) =>
    $variant === "hero" &&
    css`
      max-width: 288px;
      margin-top: 64px;
    `}

  ${({ $variant }) =>
    $variant === "cardOpacity" &&
    css`
      font-weight: ${({ theme }) => theme.fontWeights.semibold};
      color: ${({ theme }) => theme.colors.text};
      font-weight: ${({ theme }) => theme.fontWeights.semibold};

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
`;
