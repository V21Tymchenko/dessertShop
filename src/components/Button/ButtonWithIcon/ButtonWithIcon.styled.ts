import styled, { css } from "styled-components";

export const ButtonWithIconStyled = styled.button<{
  $variant: string | null;
}>`
  width: ${({ theme }) => theme.spacing(12)};
  height: ${({ theme }) => theme.spacing(12)};
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.radii.button};

  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.input : theme.colors.buttons};
  & > svg {
    width: ${({ theme }) => theme.spacing(10)};
    height: ${({ theme }) => theme.spacing(10)};
    fill: ${({ disabled, theme }) =>
      disabled ? theme.colors.borderInput : theme.colors.body};
  }
  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.input : theme.colors.hoverButtons};
  }

  ${({ $variant }) =>
    $variant === "standart" &&
    css`
      background-color: transparent;
      & > svg {
        fill: ${({ theme }) => theme.colors.text};
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
      }
    `}
`;
