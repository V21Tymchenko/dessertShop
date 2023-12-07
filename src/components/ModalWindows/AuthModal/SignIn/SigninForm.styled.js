import styled from "styled-components";
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

export const FormContainer = styled.form`
${ flexCenter }
margin-top: ${({ theme }) => theme.spacing(8)} ; 

`
export const WrapperInputField = styled.div`
${ flexCenter }
flex-wrap: wrap;
width: ${({ theme }) => theme.spacing(130)};


}
`
export const WrapperInput = styled.div`
${ flexCenter }
align-items: flex-start;
flex-direction: column;
gap: ${({ theme }) => theme.spacing(8)};

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

    
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.hoverButtons};

  `

  export const PasswordToggler = styled.button`
${ flexCenter }
  position: absolute;
  top: 439px;
  right: ${({ theme }) => theme.spacing(38)};
  transform: translateY(-50%);
  background-color: transparent;
  border: ${({ theme }) => theme.borders.none};
  width: ${({ theme }) => theme.spacing(12)};
  height: ${({ theme }) => theme.spacing(12)};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
    border-radius: ${({ theme }) => theme.spacing(3)};
  }
  // &:focus{
  //   border: 1px solid ${({ theme }) => theme.colors.hoverButtons};
  //   border-radius: ${({ theme }) => theme.spacing(3)}
  }
`;

export const PasswordTogglerIcon = styled.svg`
  fill: inherit;
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(4)};
`;

