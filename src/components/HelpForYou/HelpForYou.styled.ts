import { Field, Form } from "formik";
import styled from "styled-components";

export const HelpForYouSection = styled.section`
  height: 360px;
  margin-top: ${({ theme }) => theme.spacing(30)};
`;

export const HelpForYouContainer = styled.div`
  position: absolute;
  left: 0;
  background-color: ${({ theme }) => theme.colors.borderCards};
  width: 100%;
`;
export const HelpForYouPositionContainer = styled.div`
  margin: 0 auto;
  width: 1240px;
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  padding: 60px 0;
`;
export const HelpForYouContentContainer = styled.div`
  width: 50%;
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;
export const HelpForYouTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;
export const HelpForYouInput = styled(Field)`
  width: 296px;
  height: 48px;
  padding: 13px 4px 13px 16px;
  border-radius: 12px 0px 0px 12px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  &:hover,
  &:focus {
    border: 1px solid #121212;
  }

  &::placeholder {
    color: #b6b6b6;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;
export const HelpForYouForm = styled(Form)`
  display: flex;
`;
export const HelpForYouButton = styled.button`
  color: ${({ theme }) => theme.colors.body};
  background-color: ${({ theme }) => theme.colors.buttons};
  padding: 12px 24px;
  border-radius: 0px 12px 12px 0px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
