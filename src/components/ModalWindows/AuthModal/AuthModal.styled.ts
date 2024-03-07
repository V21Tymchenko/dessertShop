import styled from "styled-components";
import CloseModalIcon from "@/assets/images/modal/close.svg?react";
import { flexCenter } from "@/helpers/styles/fragments";

export const AuthBackdrop = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2e2f42b3;
  z-index: 1000;
  overflow: hidden;
`;

export const AuthorizationModal = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 50px;
  background: ${({ theme }) => theme.colors.body};
  height: fit-content;
  border-radius: 36px;
  padding: 96px 32px 32px 32px;
  pointer-events: auto;
  overflow: hidden;
`;
export const CloseModalBtn = styled.button`
  background-color: transparent;
  border: none;
  ${flexCenter}
  position: absolute;
  top: ${({ theme }) => theme.spacing(6)};
  right: ${({ theme }) => theme.spacing(8)};
  cursor: pointer;
  pointer-events: auto;
  height: ${({ theme }) => theme.spacing(12)};
  width: ${({ theme }) => theme.spacing(12)};
`;

export const CloseModal = styled(CloseModalIcon)`
  background-color: transparent;
  margin: 0 auto;
  fill: ${({ theme }) => theme.colors.text};
  height: ${({ theme }) => theme.spacing(10)};
  width: ${({ theme }) => theme.spacing(10)};
  pointer-events: auto;
`;
export const ButtonWrapper = styled.div<{ $activebutton: string }>`
  ${flexCenter}
  & > button {
    min-width: 377px;
    padding: 16px 24px;
  }
  & > button:first-child {
    color: ${({ theme, $activebutton }) =>
      $activebutton === "register" && theme.colors.body};
    background-color: ${({ theme, $activebutton }) =>
      $activebutton === "register" && theme.colors.iconColorAccent};
    border-color: ${({ theme, $activebutton }) =>
      $activebutton === "register" && theme.colors.iconColorAccent};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > button:last-child {
    color: ${({ theme, $activebutton }) =>
      $activebutton === "login" && theme.colors.body};
    background-color: ${({ theme, $activebutton }) =>
      $activebutton === "login" && theme.colors.iconColorAccent};
    border-color: ${({ theme, $activebutton }) =>
      $activebutton === "register" && theme.colors.iconColorAccent};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
