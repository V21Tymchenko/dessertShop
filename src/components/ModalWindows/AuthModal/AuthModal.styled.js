import styled from "styled-components";
import CloseModalIcon from "@/assets/images/modal/close.svg?react";
import { ButtonStyled } from "../../Button/Button.styled";

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

`

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
   

`
export const CloseModalBtn = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 24px;
    right: 32px;
    cursor: pointer;
    pointer-events: auto;
`

export const CloseModal = styled(CloseModalIcon)`
    background-color: transparent;
    margin: 0 auto;
    fill: ${({ theme }) => theme.colors.text};
    height: ${({ theme }) => theme.spacing(6)};
    width: ${({ theme }) => theme.spacing(6)};
    pointer-events: auto;
  

`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const AuthButton = styled(ButtonStyled)`
max-width: none;
color: ${({ theme }) => theme.colors.text};
background-color: ${({ theme }) => theme.colors.body};


&.active {
  color: ${({ theme }) => theme.colors.body};
  background-color: ${({ theme }) => theme.colors.hoverButtons};
}
`;

export const AuthWrapper = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // margin-top: 32px;
`
