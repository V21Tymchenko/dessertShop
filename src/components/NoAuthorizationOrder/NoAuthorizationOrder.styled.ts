import styled from "styled-components";
import { Field } from "formik";
import { flexCenter } from "@/helpers/styles/fragments";

export const ButtonRegularСustomer = styled.button<{registration: boolean}>`
  width: 100%;
  max-width: 50%;

  border-radius: 0px 12px 12px 0px;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(6)};

  border: ${({ registration }) =>
    registration ? "1px solid #b83d6e" : " 1px solid #f575a1"};
  color: ${({ registration }) => (registration ? "#ffffff" : "#121212")};
  background: ${({ registration }) =>
    registration ? "#b83d6e" : "transparent"};

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const ButtonNewСustomer = styled(ButtonRegularСustomer)<{
  registration: boolean;
}>`
  border-radius: 12px 0px 0px 12px;

  border: ${({ registration }) =>
    registration ? "1px solid #f575a1" : " 1px solid #b83d6e"};
  color: ${({ registration }) => (registration ? "#121212" : "#ffffff")};
  background: ${({ registration }) =>
    registration ? "transparent" : "#b83d6e"};
`;

export const ContainerButtons = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing(16)};
`;
export const OrderAuthorizationLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;
export const OrderAuthorizationInput = styled(Field)`
  padding: 12px 16px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #9a9a9a;
  background: #ffffff;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
export const OrderFormContainer = styled.div`
  display: flex;
  gap: 24px;
`;
export const OrderEnterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 9px;
    width: ${({ theme }) => theme.spacing(55)};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.input};
  }
  &::before {
    left: 47px;
  }

  &::after {
    right: 47px;
  }
`;
export const OrderEnterText = styled.span`
  color: #666666;
  text-transform: uppercase;
`;
export const OrderEnterGoogle = styled.button`
  ${flexCenter}
  gap:  ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(6)};

  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  padding: 16px 0px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.button};
  border: 1px solid ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;
export const OrderEnterImage = styled.img`
  height: ${({ theme }) => theme.spacing(6)};
  width: ${({ theme }) => theme.spacing(6)};
`;
export const OrderLabelContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(6)};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;
export const NoAuthorizedText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const NoAuthorizedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: 0px 8px;
  border-radius: ${({ theme }) => theme.radii.cards};
  background: ${({ theme }) => theme.colors.hoverHeaderIcon};
`;
export const NoAuthorizedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 236px;
  padding: 12px 24px;
  font-family: ${({ theme }) => theme.fonts.secondary};

  background-color: ${({ theme }) => theme.colors.buttons};
  border-radius: ${({ theme }) => theme.radii.button};

  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.body};
  transition: ${({ theme }) => theme.transitions.primary};

  border: none;
  cursor: pointer;
  outline: none;
`;
export const NoAuthorizedSaved = styled(NoAuthorizedButton)`
  max-width: 180px;
  color: #9a9a9a;
  background: #ebebeb;
  margin-top: 32px;
`;
export const NoAuthorizedConainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(9)};
`;
