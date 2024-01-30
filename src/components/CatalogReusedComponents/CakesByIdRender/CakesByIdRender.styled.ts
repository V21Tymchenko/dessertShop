import styled from "styled-components";
import PlusImg from "@/assets/images/Catalog/plusButton.svg?react";
import MinusImg from "@/assets/images/Catalog/minusButton.svg?react";
import { flexCenter } from "@/helpers/styles/fragments";

export const CakeByIdSection = styled.section`
  margin: 40px 0 120px 0;
`;
export const CakeByIdTitle = styled.h2`
  margin-top: ${({ theme }) => theme.spacing(4)};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;
export const CakeByIdImage = styled.img`
  margin-top: ${({ theme }) => theme.spacing(10)};
  width: 507px;
  height: 507px;
  object-fit: cover;
  border-radius: 12px;
`;
export const CakeFlexContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const InfoIdCakeContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(10)};
`;
export const FillingTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const FillingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: space-between;
  grid-row-gap: 24px;

  width: 725px;
  margin-top: ${({ theme }) => theme.spacing(6)};
`;
export const FillingItem = styled.li`
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radii.button};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
  & > img {
    border-radius: ${({ theme }) => theme.radii.button};
    overflow: hidden;
  }
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;
export const PriceTitle = styled.p`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(12)};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  & > span {
    margin-left: ${({ theme }) => theme.spacing(2)};

    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.l};
    line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  }
`;
export const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: ${({ theme }) => theme.spacing(10)};
  & > div {
    display: flex;
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const PlusImage = styled(PlusImg)`
  width: ${({ theme }) => theme.spacing(10)};
  height: ${({ theme }) => theme.spacing(10)};
  fill: ${({ disabled, theme }) =>
    disabled ? theme.colors.borderInput : theme.colors.body};
`;

export const MinusImage = styled(MinusImg)`
  width: ${({ theme }) => theme.spacing(10)};
  height: ${({ theme }) => theme.spacing(10)};
  fill: ${({ disabled, theme }) =>
    disabled ? theme.colors.borderInput : theme.colors.body};
`;
export const RegulationInput = styled.input`
  text-align: center;
  width: 107px;
  height: 48px;
  padding: 11px 24px;

  border-radius: ${({ theme }) => theme.radii.button};
  border: 1px solid ${({ theme }) => theme.colors.text};
  outline: none;

  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
