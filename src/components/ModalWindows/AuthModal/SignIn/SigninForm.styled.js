import styled from "styled-components";
import { ButtonStyled } from "../../../Button/Button.styled";


export const LoginHeader = styled.h1`
font-family: ${({ theme }) => theme.fonts.primary};
font-weight: ${({ theme }) => theme.fontWeights.semibold};
font-size: ${({ theme }) => theme.fontSizes.ml};
color: ${({ theme }) => theme.colors.text}; 
line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
text-align: center;
margin-top: 58px;
`;

export const FormContainer = styled.div`
display: flex;
margin: 32px 16px ; 
justify-content: center;
align-items: center;
`
export const WrapperInputField = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

width: 520px;
`
export const WrapperInput = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 32px;


label {
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeights.body};

`

export const InputField = styled.input`
  width: 520px;
  margin-top: 8px;
  padding: 13px 16px 13px 16px;;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.inputText};
  line-height: ${({ theme }) => theme.lineHeights.body};
  border-radius: ${({ theme }) => theme.radii.button};
  border: ${({ theme }) => theme.borders.normal} ${({ theme }) => theme.colors.input}; 
  `

  export const PasswordToggler = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 63%;
  right: 153px;
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


export const SigninText = styled.span`
font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeights.body};
  margin-left: 384px;
`

export const SigninSubmitBtn = styled(ButtonStyled)`
max-width: 520px;
margin-top: 58px;
`
