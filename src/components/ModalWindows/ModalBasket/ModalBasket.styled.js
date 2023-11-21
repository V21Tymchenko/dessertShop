import styled from "styled-components";
import CloseModalIcon from "../../../assets/images/modal/close.svg?react";
import { ButtonStyled } from "../../Button/Button.styled";


export const BasketBackdrop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    padding: 32px;
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
    width: 40px;
    height: 40px;
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
margin-top: 32px;
margin-bottom: 80px;
display: flex;
grid-column-gap: 24px;
`
export const BasketImg = styled.img`
width: 112px;
height: 112px
`
export const BasketDesc = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
`

export const BasketIcon = styled.svg`
  fill: inherit;
  width: 24px;
  height: 24px;

`;

export const QuantityBask = styled.div`
display: flex;
justify-content: center;
align-items: baseline;
margin-left: 40px;
margin-right:108px;

`

export const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuantityInput = styled.input`

border-radius: ${({ theme }) => theme.radii.button};
border: ${({ theme }) => theme.borders.normal} ${({ theme }) => theme.colors.input};
font-family: ${({ theme }) => theme.fonts.secondary};
font-weight: ${({ theme }) => theme.fontWeights.semibold};
font-size: ${({ theme }) => theme.fontSizes.xs};
color: ${({ theme }) => theme.colors.text};
line-height: ${({ theme }) => theme.lineHeights.body};
width: 95px;
padding: 10px;
height: fit-content;
white-space: nowrap;
text-overflow: ellipsis;
text-align: center;
margin-left: 8px;
margin-right: 8px;

`

export const IconTrash = styled.svg`
width: 48px ;
height: 24px;
`

export const TrashButton = styled.button`
display: flex;
    align-items: center;
    justify-content: center;
width: 48px;
height: 48px;
`

export const TotalPrice = styled.div`
display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
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
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 16px;
`

export const FirstButton = styled(ButtonStyled)`
width: 317px;
`
export const SecondButton = styled(ButtonStyled)`
width: 317px;
margin-top: 0;
`
export const DescrUl = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;`


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
margin-top: 16px;
`
export const EmptyVector = styled.svg`
position: relative;
width: 190px;
height: 180px
`
export const EmptyBusk = styled.svg`
position: absolute;
top: 156px;
left: 309px;
width: 130px;
height: 120px
`