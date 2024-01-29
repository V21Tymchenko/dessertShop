import styled from "styled-components";
import CloseModalIcon from "@/assets/images/modal/close.svg?react";
import { ButtonStyled } from "../../Button/Button.styled";
import { flexCenter, flexSpaceBetween } from "@/helpers/styles/fragments";



export const BasketBackdrop = styled.div`
    ${ flexCenter } 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2e2f42b3;
    z-index: 999;
    overflow: hidden;

`

export const BasketModal = styled.div`
    position: relative;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.body};
    height: fit-content;
    border-radius: 36px;
    padding: ${({ theme }) => theme.spacing(8)};
    pointer-events: auto;
    overflow: hidden;
   

`

export const CloseModalBtn = styled.button`
    background-color: transparent;
    border:  ${({ theme }) => theme.borders.none};
    ${ flexCenter }
    position: absolute;
    top: ${({ theme }) => theme.spacing(6)};
    right: ${({ theme }) => theme.spacing(8)};
    width: ${({ theme }) => theme.spacing(10)};
    height: ${({ theme }) => theme.spacing(10)};
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

export const BasketHeader = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`
export const BasketContainer = styled.div`
margin-top: ${({ theme }) => theme.spacing(8)};
margin-bottom: ${({ theme }) => theme.spacing(20)};
display: flex;
grid-column-gap: ${({ theme }) => theme.spacing(6)};
`
export const BasketImg = styled.img`
width: ${({ theme }) => theme.spacing(28)};
height: ${({ theme }) => theme.spacing(28)};
`
export const BasketDesc = styled.div`
${ flexCenter }
`

export const BasketIcon = styled.svg`
  fill: inherit;
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};

`;

export const QuantityBask = styled.div`
${ flexCenter }
align-items: baseline;
margin-left: ${({ theme }) => theme.spacing(10)};
margin-right:${({ theme }) => theme.spacing(27)};

`

export const QuantityButton = styled.button`
  width: ${({ theme }) => theme.spacing(10)};
  height: ${({ theme }) => theme.spacing(10)};
  vertical-align: middle;
  ${ flexCenter }
`;

export const QuantityInput = styled.input`

border-radius: ${({ theme }) => theme.radii.button};
border: ${({ theme }) => theme.borders.normal} ${({ theme }) => theme.colors.input};
font-family: ${({ theme }) => theme.fonts.secondary};
font-weight: ${({ theme }) => theme.fontWeights.semibold};
font-size: ${({ theme }) => theme.fontSizes.xs};
color: ${({ theme }) => theme.colors.text};
line-height: ${({ theme }) => theme.lineHeights.body};
width: ${({ theme }) => theme.spacing(24)};
padding: ${({ theme }) => theme.spacing(3)};
height: fit-content;
white-space: nowrap;
text-overflow: ellipsis;
text-align: center;
margin-left: ${({ theme }) => theme.spacing(2)};
margin-right: ${({ theme }) => theme.spacing(2)};

`

export const IconTrash = styled.svg`
width: ${({ theme }) => theme.spacing(12)};
height: ${({ theme }) => theme.spacing(6)};
`

export const TrashButton = styled.button`
${ flexCenter }
width: ${({ theme }) => theme.spacing(12)};
height: ${({ theme }) => theme.spacing(12)};
`

export const TotalPrice = styled.div`
${ flexCenter }
justify-content: flex-end;
gap: ${({ theme }) => theme.spacing(4)};
`
export const PriceSpan = styled.span`

font-family: ${({ theme }) => theme.fonts.primary};
font-weight: ${({ theme }) => theme.fontWeights.bold};
font-size: ${({ theme }) => theme.fontSizes.xl};
color: ${({ theme }) => theme.colors.text};
line-height: ${({ theme }) => theme.lineHeights.body};
`

export const PriceLabel = styled.span`
font-family: ${({ theme }) => theme.fonts.primary};
font-weight: ${({ theme }) => theme.fontWeights.semibold};
font-size: ${({ theme }) => theme.fontSizes.ml};
color: ${({ theme }) => theme.colors.text};
line-height: ${({ theme }) => theme.lineHeights.mediumTitle};

`

export const ButtonDivider = styled.div`
${ flexSpaceBetween }
margin-top: ${({ theme }) => theme.spacing(4)};
`

export const FirstButton = styled(ButtonStyled)`
max-width: ${({ theme }) => theme.spacing(79)};
`
export const SecondButton = styled(ButtonStyled)`
max-width: ${({ theme }) => theme.spacing(79)};
margin-top: 0;
`
export const DescrUl = styled.ul`
display: flex;
flex-direction: column;
gap: ${({ theme }) => theme.spacing(4)};
`


export const DescrLi = styled.li`
font-family: ${({ theme }) => theme.fonts.secondary};
font-weight: ${({ theme }) => theme.fontWeights.regular};
font-size: ${({ theme }) => theme.fontSizes.xs};
color: ${({ theme }) => theme.colors.text};
line-height: ${({ theme }) => theme.lineHeights.body};
`
export const EmptyBasket = styled.div`
padding: 40px 242px 77px 242px;
`

export const EmptySpan = styled.span`
font-family: ${({ theme }) => theme.fonts.secondary};
font-weight: ${({ theme }) => theme.fontWeights.bold};
font-size: ${({ theme }) => theme.fontSizes.l};
color: ${({ theme }) => theme.colors.text};
line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
margin-top: ${({ theme }) => theme.spacing(4)};
`
export const EmptyVector = styled.svg`
position: relative;
width: ${({ theme }) => theme.spacing(48)};
height: ${({ theme }) => theme.spacing(45)};
`
export const EmptyBusk = styled.svg`
position: absolute;
top: ${({ theme }) => theme.spacing(39)};
left: ${({ theme }) => theme.spacing(77)};
width: ${({ theme }) => theme.spacing(33)};
height: ${({ theme }) => theme.spacing(30)};
`