import styled from "styled-components";
import { ButtonStyled } from "../../../Button/Button.styled";
import { flexCenter } from "@/helpers/styles/fragments";

export const LoginHeader = styled.h1`
font-family: ${({ theme }) => theme.fonts.primary};
font-weight: ${({ theme }) => theme.fontWeights.semibold};
font-size: ${({ theme }) => theme.fontSizes.ml};
color: ${({ theme }) => theme.colors.text}; 
line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
text-align: center;
margin-top: ${({ theme }) => theme.spacing(15)};
`;

export const FormContainer = styled.div`
${ flexCenter }
margin: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(0)} ${({ theme }) => theme.spacing(4)} ; 

`
export const WrapperInputField = styled.div`
${ flexCenter }
flex-wrap: wrap;
width: ${({ theme }) => theme.spacing(130)};
`
export const WrapperInput = styled.div`
${ flexCenter }
align-items: flex-start;
flex-direction: column;
margin-bottom: ${({ theme }) => theme.spacing(8)};


label {
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeights.body};

`

export const InputField = styled.input`
  width: ${({ theme }) => theme.spacing(130)};
  margin-top: ${({ theme }) => theme.spacing(2)};
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
${ flexCenter }
  position: absolute;
  top: ${({ theme }) => theme.spacing(108)};
  right: ${({ theme }) => theme.spacing(38)};
  transform: translateY(-50%);
  background-color: transparent;
  border: ${({ theme }) => theme.borders.none};
  width: ${({ theme }) => theme.spacing(12)};
  height: ${({ theme }) => theme.spacing(12)};
`;

export const PasswordTogglerIcon = styled.svg`
  fill: inherit;
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(4)};
`;


export const SigninTextBtn = styled(ButtonStyled)`
margin-top: 0;
font-family: ${({ theme }) => theme.fonts.secondary};
font-weight: ${({ theme }) => theme.fontWeights.bold};
font-size: ${({ theme }) => theme.fontSizes.s};
color: ${({ theme }) => theme.colors.text};
line-height: ${({ theme }) => theme.lineHeights.body};
margin-left: ${({ theme }) => theme.spacing(83)};
background-color: inherit;
padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(6)};
border:${({ theme }) => theme.borders.none};

&:focus{
  background-color: inherit;
  border: ${({ theme }) => theme.borders.normal} ${({ theme }) => theme.colors.hoverButtons};

}
&:active {
  color: ${({ theme }) => theme.colors.active};
  border: ${({ theme }) => theme.borders.none}
}
`

export const SigninSubmitBtn = styled(ButtonStyled)`
max-width: ${({ theme }) => theme.spacing(130)};
margin-top: ${({ theme }) => theme.spacing(12)};
`


