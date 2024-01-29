import styled from "styled-components";
import CheckedRadio from "@/assets/images/Catalog/checkRadio.svg?react";
import RadioButton from "@/assets/images/Catalog/radioButton.svg?react";

export const TartsRadioList = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
`;
export const RadioBck = styled.span`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 8px;
`;
export const RadioCheckedIcon = styled(CheckedRadio)`
  position: absolute;
  opacity: 0;
`;
export const TartsRadioItem = styled.input`
  display: flex;
  gap: 4px;

  padding: 4px;
  align-items: center;
  &:checked + ${RadioBck} > ${RadioCheckedIcon} {
    opacity: 1;
  }
`;
export const TartsRadioLabel = styled.label`
  position: relative;
  display: flex;
  gap: 20px;
  align-items: center;
  height: 48px;
  padding-left: 18px;

  cursor: pointer;
`;
export const TartsRadioIcon = styled(RadioButton)<{ check: string }>`
  width: 100%;
  height: 100%;
  fill: none;

  stroke: ${({ check }) => (check === "true" ? "#B83D6E" : "#39363C")};
  border-radius: 50%;
  background-color: #ffffff;
  &:hover {
    background-color: #ebebeb;
  }
`;
