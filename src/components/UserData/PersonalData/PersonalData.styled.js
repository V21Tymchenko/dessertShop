import { BiLock, BiUser } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import styled from "styled-components";

export const PerdonalDataButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.body};
  background-color: ${({ theme }) => theme.colors.active};
  padding: 12px 16px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 16px;
  width: 944px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};

  &.active {
    background-color: inherit;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const PerdonalDataButtonBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PerdonalDataUserDataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;

export const PerdonalDataTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const PerdonalDataPopUpBox = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.iconColorAccent};
  border-right: 1px solid ${({ theme }) => theme.colors.iconColorAccent};
  border-bottom: 1px solid ${({ theme }) => theme.colors.iconColorAccent};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  width: 944px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: -34px;
  padding-left: 48px;
  padding-top: 34px;

  &.active {
    display: none;
  }
`;

export const PerdonalDataForm = styled.form`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const PerdonalDataInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PerdonalDataText = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const PerdonalDataInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.inputText};

  height: 48px;
  width: 397px;
  padding: 12px 16px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  border-radius: 12px;
  margin-bottom: 40px;
`;

export const PerdonalDataInput1 = styled.input`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.inputText};

  height: 48px;
  width: 130px;
  padding: 12px 16px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  border-radius: 12px;
  margin-bottom: 40px;
`;

export const PerdonalDataSubmitBtn = styled.button`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.body};

  height: 48px;
  width: 288px;
  padding: 12px 16px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.iconColorAccent};
  background-color: ${({ theme }) => theme.colors.buttons};
  border-radius: 12px;

  margin-bottom: 16px;

  cursor: pointer;
`;

export const PerdonalDataFiEyeOff = styled(FiEyeOff)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.text};

  position: absolute;
  top: 12px;
  right: 16px;

  cursor: pointer;
`;

export const PerdonalDataBiLock = styled(BiLock)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.body};

  &.active{
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const PerdonalDataBiUser = styled(BiUser)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.body};

  &.active{
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const PerdonalDataBsTelephone = styled(BsTelephone)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.body};
  
  &.active{
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const PerdonalDataTbTruckDelivery = styled(TbTruckDelivery)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.body};
  
  &.active{
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const PerdonalDataIoIosArrowDown = styled(IoIosArrowDown)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PerdonalDataInputPasswordBox = styled.div`
  position: relative;
`;

export const PerdonalDataIoIosArrowUp = styled(IoIosArrowUp)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.body};
`;
