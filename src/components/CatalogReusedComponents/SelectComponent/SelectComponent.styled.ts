import { flexSpaceBetween } from "@/helpers/styles/fragments";
import styled from "styled-components";
import ArrowDown from "@/assets/images/Catalog/arrow-down.svg?react";

export const SelectContainer = styled.div`
  position: relative;
  width: 288px;
`;
export const SelectTextContainer = styled.div<{ open: boolean }>`
  ${flexSpaceBetween}
  padding: 12px 24px;

  border-radius: ${({ theme, open }) =>
    open ? "12px 12px 0 0" : theme.radii.button};
  border: ${({ open }) => (open ? "1px solid #B83D6E" : "1px solid #f575a1")};
  background: ${({ theme, open }) =>
    open ? theme.colors.active : theme.colors.body};
`;
export const SelectText = styled.p<{ open: boolean }>`
  color: ${({ theme, open }) => (open ? theme.colors.body : theme.colors.text)};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;
export const SelectList = styled.ul<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.body};
  width: 100%;
  border-radius: 0px 0px 12px 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.secondary};
  z-index: 1;
`;
export const SelectItem = styled.li<{ selected: boolean }>`
  padding: 12px 24px;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.borderInput : theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
  }
`;
export const ArrowDownIcon = styled(ArrowDown)<{ open: boolean }>`
  transform: ${({ open }) => (open ? "rotateX(180deg)" : "none")};
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  fill: ${({ theme, open }) => (open ? theme.colors.body : theme.colors.text)};
`;
