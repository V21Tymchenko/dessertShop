import styled from "styled-components";
import { ButtonStyled } from "../../../Button/Button.styled";

export const RegistrationHeader = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.ml};
  color: ${({ theme }) => theme.colors.text}; 
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  text-align: center;
  margin-top: 32px;
`;

export const FormContainer = styled.div`
margin-top: 32px; 

`
export const WrapperInput = styled.div`
display: flex;
flex-direction: column;
justify-content: center;


label {
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeights.body};

`

export const WrapperInputField = styled.div`
display: flex;
flex-wrap: wrap;
grid-row-gap: 32px;
grid-column-gap: 24px;
width: 754px;
`

export const InputField = styled.input`
  width: 365px;
  margin-top: 8px;
  padding: 13px 4px 13px 16px;;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.inputText};
  line-height: ${({ theme }) => theme.lineHeights.body};
  border-radius: ${({ theme }) => theme.radii.button};
  border: ${({ theme }) => theme.borders.normal} ${({ theme }) => theme.colors.input}; 
  `

export const FormSpan = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.inputText};
  line-height: ${({ theme }) => theme.lineHeights.body};
  text-transform: uppercase; 
  `

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  
`
export const GoogleButton = styled.button`

    display: flex;
    margin-top: 24px;
    align-items: center;
    justify-content: center;
    padding: 16px 108px;
    background-color: inherit;; 
    border: ${({ theme }) => theme.borders.normal} ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.radii.cards}; 
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const GoogleIcon = styled.img`
    width: 24px; 
    height: 24px; 
    margin-right: 1px;

`;
export const RegistDivider = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 24px 117px 0 117px;
&::before,
&::after {
content: "";
position: absolute;
top: 59%;
width: 221px;
height: 2px;
background-color: ${({ theme }) => theme.colors.input};
}

&::before {
left: 117px;
}

&::after {
right: 117px;
}
`

export const PasswordToggler = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 195px;
  right: 14px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  width: 48px;
  height: 48px;
`;

export const PasswordTogglerIcon = styled.svg`
  fill: inherit;
  width: 22px;
  height: 16px;
`;

export const RegstButton = styled(ButtonStyled)`
max-width: 520px;
margin-top: 32px;
`