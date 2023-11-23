import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const flexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const generalIconStyle = css`
  color: inherit;
  fill: inherit;
  margin: 0 auto;
  height: ${({ theme }) => theme.spacing(6)};
  width: ${({ theme }) => theme.spacing(6)};
`;
export const iconContainer = css`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)};
  width: ${({ theme }) => theme.spacing(12)};
  height: ${({ theme }) => theme.spacing(12)};
  border-radius: ${({ theme }) => theme.radii.button};
  transition: ${({ theme }) => theme.transitions.primary};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
  }
  cursor: pointer;
`;
