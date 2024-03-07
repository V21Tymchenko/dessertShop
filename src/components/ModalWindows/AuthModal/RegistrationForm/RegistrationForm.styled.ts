import styled from "styled-components";
import { Field, Form } from "formik";
import { flexCenter } from "@/helpers/styles/fragments";

export const RegistrationHeader = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.ml};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(8)};
`;
export const WrapperInputField = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-row-gap: ${({ theme }) => theme.spacing(8)};
  grid-column-gap: ${({ theme }) => theme.spacing(6)};
  width: ${({ theme }) => theme.spacing(189)};
`;

export const WrapperInput = styled.div`
  ${flexCenter};
  align-items: flex-start;
  flex-direction: column;
`;

export const InputField = styled(Field)`
  width: ${({ theme }) => theme.spacing(91)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: 13px 4px 13px 16px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.inputText};
  line-height: ${({ theme }) => theme.lineHeights.body};
  border-radius: ${({ theme }) => theme.radii.button};
  border: 1px solid #ebebeb;
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
`;

export const FormSpan = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.inputText};
  line-height: ${({ theme }) => theme.lineHeights.body};
  text-transform: uppercase;
`;

export const FormDiv = styled(Form)`
  ${flexCenter}
  margin-top: ${({ theme }) => theme.spacing(8)};
  flex-direction: column;
  position: relative;
`;
export const GoogleButton = styled.button`
  ${flexCenter}
  margin-top: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(4)};
  width: 100%;
  max-width: 520px;
  background-color: inherit;
  border: ${({ theme }) => `${theme.borders.normal} ${theme.colors.text}`};
  border-radius: ${({ theme }) => theme.radii.button};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const GoogleIcon = styled.img`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  margin-right: ${({ theme }) => theme.spacing(2)};
`;
export const RegistDivider = styled.div`
  ${flexCenter}
  flex-direction: column;
  margin-top: 35px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 57%;
    width: ${({ theme }) => theme.spacing(55)};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.input};
  }

  &::before {
    left: ${({ theme }) => theme.spacing(29)};
  }

  &::after {
    right: ${({ theme }) => theme.spacing(29)};
  }
`;
