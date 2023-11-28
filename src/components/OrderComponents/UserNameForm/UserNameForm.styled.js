import styled from "styled-components";
import { Field } from "formik";
import { generalIconStyle } from "@/helpers/styles/fragments";
import UserIcon from "@/assets/images/orderForm/user.svg?react";
import PhoneIcon from "@/assets/images/orderForm/phone.svg?react";

export const ContainerUserInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;
export const DataUserLabel = styled.label`
  position: relative;
`;
export const FormInput = styled(Field)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(3)} 78px
    ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(12)};
  height: ${({ theme }) => theme.spacing(14)};

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  border-radius: ${({ theme }) => theme.radii.button};
  border: ${({ open }) => (open ? " 1px solid  #b83d6e" : "1px solid #121212")};
  background: ${({ open }) => (open ? "  #b83d6e" : "#ffffff")};
  transition: ${({ theme }) => theme.transitions.primary};
  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
  &::placeholder {
    color: ${({ open }) => (open ? "#ffffff" : "#121212")};
  }
`;

export const StyledUserIcon = styled(UserIcon)`
  position: absolute;
  fill: ${({ open }) => (open ? "#ffffff" : "#121212")} !important;
  left: ${({ theme }) => theme.spacing(4)};
  top: ${({ theme }) => theme.spacing(4)};
  ${generalIconStyle}
`;
export const StyledPhoneIcon = styled(PhoneIcon)`
  position: absolute;
  fill: ${({ open }) => (open ? "#ffffff" : "#121212")} !important;
  left: ${({ theme }) => theme.spacing(4)};
  top: ${({ theme }) => theme.spacing(4)};
  ${generalIconStyle}
`;
export const ChangeButtonUser = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ open }) => (open ? "#ffffff" : "#555555")};
`;
export const ChangeContainerName = styled.div`
  flex-direction: column;
  width: 616px;
  background-color: #ffffff;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;

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

export const DropDownButton = styled.button`
  width: 100%;
  max-width: 131px;
  padding: 12px 24px;
  margin-top: 24px;
  border-radius: 12px;
  color: #ffffff;
  background: #f575a1;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 18px;
  font-weight: 700;
`;
export const DropDownLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  &:not(:first-child) {
    margin-top: 8px;
  }
`;
export const DropDownInput = styled(Field)`
  height: 48px;
  padding: 12px 16px;

  border-radius: 12px;
  border: 1px solid #121212;
  background: #fff;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
