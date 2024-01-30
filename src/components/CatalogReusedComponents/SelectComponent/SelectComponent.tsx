
import { FC, useState } from "react";
import { useSelector } from "react-redux";import { AllCakesProps } from "@/helpers/generalInterface";
import { selectAllCakes } from "@/redux/Cakes/cakes-selectors";
import {
  ArrowDownIcon,
  SelectContainer,
  SelectItem,
  SelectList,
  SelectText,
  SelectTextContainer,
} from "./SelectComponent.styled";

const DEFAULT = "За замовчуванням";
const GROWTH = "Ціна за зростанням";
const DECREASE = "Ціна за спаданням";

interface SelectComponentProps {
  setFilterCake: (filterAllCake: AllCakesProps[]) => void;
}

const SelectComponent: FC<SelectComponentProps> = ({ setFilterCake }) => {
  const allCakes = useSelector(selectAllCakes);
  const [selectValue, setSelectValue] = useState(DEFAULT);
  const [open, setOpen] = useState(false);

  const handleChangeSelectValue = (value: string, type: string) => {
    switch (type) {
      case DEFAULT:
        setFilterCake(allCakes);
        break;
      case DECREASE:
        const decreaseCake = [...allCakes].sort((a, b) => b.price - a.price);
        setFilterCake(decreaseCake);
        break;
      case GROWTH:
        const growthCake = [...allCakes].sort((a, b) => a.price - b.price);
        setFilterCake(growthCake);
        break;
      default:
      };
    setSelectValue(value);
    setOpen(prev => !prev);
  };

  const handleChangeOptionsState = () => {
    setOpen(prev => !prev);
  };
  return (
    <SelectContainer>
      <SelectTextContainer open={open} onClick={handleChangeOptionsState}>
        <SelectText open={open}>{selectValue}</SelectText>
        <ArrowDownIcon open={open} />
      </SelectTextContainer>
      <SelectList open={open}>
        <SelectItem
          value={DEFAULT}
          onClick={() => handleChangeSelectValue(DEFAULT, DEFAULT)}
          selected={selectValue === DEFAULT}
        >
          За замовчуванням
        </SelectItem>
        <SelectItem
          value={GROWTH}
          onClick={() => handleChangeSelectValue(GROWTH, GROWTH)}
          selected={selectValue === GROWTH}
        >
          Ціна за зростанням
        </SelectItem>
        <SelectItem
          value={DECREASE}
          onClick={() => handleChangeSelectValue(DECREASE, DECREASE)}
          selected={selectValue === DECREASE}
        >
          Ціна за спаданням
        </SelectItem>
      </SelectList>
    </SelectContainer>
  );
};
export default SelectComponent;
