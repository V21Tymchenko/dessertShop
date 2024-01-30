import { Field, Form } from "formik";
import styled from "styled-components";

export const CooperationMainTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;
export const CooperationContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(30)};
  }
  margin-top: ${({ theme }) => theme.spacing(4)};
`;
export const CooperationContentContainer = styled.div`
  width: 50%;
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;
export const CooperationTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;
export const CooperationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
`;
export const CooperationContentTitle = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  & + p {
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;
export const ContactsSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing(30)};
  & > h5 {
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
  }
`;
export const ContactsForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(10)};
  & > button {
    margin: 40px auto 0;
  }
  & > label {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 1054px;
    margin: 0 auto;
  }
  & > label > textarea {
    margin-top: ${({ theme }) => theme.spacing(2)};
    padding: 13px 4px 65px 16px;
    width: 100%;
    border-radius: ${({ theme }) => theme.radii.button};
    border: 1px solid #b6b6b6;
    background: ${({ theme }) => theme.colors.body};
    outline: none;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    &::placeholder {
      color: #b6b6b6;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: ${({ theme }) => theme.fontWeights.semibold};
    }
    &:hover,
    &:focus {
      border: 1px solid #121212;
    }
  }
`;

export const ContactsLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  &:last-child {
    margin-bottom: 0;
  }
`;
export const ContactsLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 507px;
`;
export const ContactsInput = styled(Field)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: 13px 4px 13px 16px;
  height: ${({ theme }) => theme.spacing(12)};
  border-radius: ${({ theme }) => theme.radii.button};
  border: 1px solid #b6b6b6;
  background: ${({ theme }) => theme.colors.body};
  outline: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  &::placeholder {
    color: #b6b6b6;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
  &:hover,
  &:focus {
    border: 1px solid #121212;
  }
`;
