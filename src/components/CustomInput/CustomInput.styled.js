import styled from "styled-components";
import { flexCenter } from "@/helpers/styles/fragments";

export const AuthInputWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const WrapperInput = styled.div`
  ${flexCenter};
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`;

export const AuthInput = styled.input`
  width: ${({ theme }) => theme.spacing(91)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: 13px 4px 13px 16px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.inputText};
  line-height: ${({ theme }) => theme.lineHeights.body};
  border-radius: ${({ theme }) => theme.radii.button};
  border: ${({ theme }) => `${theme.borders.normal} ${theme.colors.input}`};

  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
`;

export const PasswordToggler = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 67%;
  right: ${({ theme }) => theme.spacing(1)};
  transform: translateY(-50%);
  background-color: transparent;

  border: ${({ theme }) => theme.borders.none};
  width: ${({ theme }) => theme.spacing(12)};
  height: ${({ theme }) => theme.spacing(12)};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
    border-radius: ${({ theme }) => theme.spacing(3)};
  }
`;

export const PasswordTogglerIcon = styled.svg`
  fill: #efede8;
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
`;

export const AuthErrorMessage = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 4px;
  bottom: -21px;
  left: 0px;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 10px;
  line-height: calc(15 / 10);
  letter-spacing: 0.12px;
  color: #d80027;
`;

export const AuthSuccessIcon = styled.svg`
  width: 12px;
  height: 12px;
`;

export const AuthErrorIcon = styled(AuthSuccessIcon)`
  fill: #d80027;
`;

export const AuthSuccessMessage = styled(AuthErrorMessage)`
  color: #3cbf61;
`;
