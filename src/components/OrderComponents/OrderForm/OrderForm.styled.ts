import styled from "styled-components";
import { Form, Field } from "formik";

export const OrderText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;
export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 616px;
`;

export const ContainerRadioButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(16)};
`;

export const ContainerDeliveryInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme }) => theme.spacing(9)};
`;
export const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const AddCommentButton = styled.button`
  display: flex;
  align-items: center;
  width: 365px;
  margin-top: ${({ theme }) => theme.spacing(6)};
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
  ${({ theme }) => theme.spacing(4)};

  color: ${({ theme }) => theme.colors.buttons};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-radius: ${({ theme }) => theme.radii.button};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
  }
`;

export const RadioButton = styled.button`
  position: absolute;
  width: 48px;
  height: 48px;
  padding: 4px;

  top: 4px;
  left: 4px;
`;
export const RadioBck = styled.span`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  &:hover {
    background-color: #ebebeb;
  }
`;
export const RadioIcon = styled.img`
  position: absolute;
  cursor: pointer;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const RadioIconCheked = styled(RadioIcon)`
  opacity: 0;
`;
export const DeliveryRadioLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;

  padding: 12px 16px 12px 52px;
  height: 56px;
  border-radius: 12px;
  border: 1px solid #9a9a9a;
  background: #ffffff;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
`;
export const DeliveryRadioInput = styled(Field)`
  display: none;
  &:checked + ${RadioButton} > ${RadioBck} > ${RadioIconCheked} {
    opacity: 1;
  }
`;

export const DropDownLabel = styled.label<{ open: boolean }>`
  flex-direction: column;
  gap: 8px;
  margin-top: 50px;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  position: ${({ open }) => (open ? "relative" : "absolute")};
  top: 0;
  left: 0;
  display: flex;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 700ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const DropDownTextArea = styled.textarea`
  min-height: 70px;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};

  border-radius: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  background: ${({ theme }) => theme.colors.body};
  resize: none;
  outline: none;
`;
