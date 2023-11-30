import styled from "styled-components";
import { Form, Field } from "formik";
import { flexSpaceBetween } from "@/helpers/styles/fragments";

export const FeedbackFormSection = styled.section`
  position: relative;
  ${flexSpaceBetween}
  padding: ${({ theme }) => theme.spacing(16)};
  margin-top: ${({ theme }) => theme.spacing(30)};
`;
export const MainTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;
export const StyledFeedbackForm = styled(Form)`
  margin-top: 42px;
`;
export const StyledInputForm = styled(Field)`
  width: 396px;
  height: 48px;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.radii.input};
  background: var(--base-colors-white, #fff);
  border: ${({ theme }) => theme.borders.none};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  transition: ${({ theme }) => theme.transitions.primary};
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
  &:not(:first-child) {
    margin-top: 24px;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
  }
`;
export const FormConytainer = styled.div`
  width: 397px;
`;

export const BackgroundImgLeft = styled.div`
  position: absolute;
  top: -78%;
  left: -11%;
  z-index: -1;
  height: 936.5px;
  width: 664.5px;
`;
export const BackgroundImgRight = styled.div`
  position: absolute;
  top: -100%;
  right: -11%;
  z-index: -1;
  height: 706.5px;
  width: 462px;
`;
export const BckImage = styled.img`
  width: 100%;
`;
