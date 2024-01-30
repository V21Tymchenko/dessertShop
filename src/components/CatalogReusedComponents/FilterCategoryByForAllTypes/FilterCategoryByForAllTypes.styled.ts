import styled from "styled-components";
import ArrowDown from "@/assets/images/Catalog/arrow-down.svg?react";
import ArrowUp from "@/assets/images/Catalog/arrow-up.svg?react";

export const TartsArrowIcon = styled(ArrowDown)`
  width: 24px;
  height: 24px;
`;
export const TartsArrowUpIcon = styled(ArrowUp)`
  width: 24px;
  height: 24px;
`;
export const CakesFilterList = styled.ul`
  display: flex;
  flex-direction: column;

  width: ${({ theme }) => theme.spacing(72)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const CakesFilterItem = styled.li<{ open: boolean }>`
  display: flex;
  justify-content: space-between;

  color: ${({ open }) => (open ? "#B83D6E" : "#121212")};
  padding: 12px;
  &:not(:last-child) {
    margin-bottom: ${({ open }) => (open ? "0px" : "24px")};
  }
`;
export const CakesRadioList = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
`;