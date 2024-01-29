import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { PriceOptionProps } from "@/helpers/definitions/priceOptions";
import { AllCakesProps } from "@/helpers/generalInterface";
import { selectAllCakes } from "@/redux/Cakes/cakes-selectors";
import {
  RadioBck,
  RadioCheckedIcon,
  TartsRadioIcon,
  TartsRadioItem,
  TartsRadioLabel,
} from "./CostOptionsRender.styled";

interface CostOptionsRenderProps {
  setFilterCake: (arg: AllCakesProps[]) => void;
  priceOptions: PriceOptionProps[];
}

const CostOptionsRender: FC<CostOptionsRenderProps> = ({
  setFilterCake,
  priceOptions,
}) => {
  const allCakes = useSelector(selectAllCakes);
  const [cost, setCost] = useState<number | null>(null);

  const handleFilterPriceCakes = (minPrice: number, maxPrice: number) => {
    const filterCake = allCakes.filter(
      item => item.price <= maxPrice && item.price >= minPrice
    );
    setCost(maxPrice);
    setFilterCake(filterCake);
  };
  const handleAllCakesReturn = (filterPrice: number) => {
    setCost(filterPrice);
    setFilterCake(allCakes);
  };
  return (
    <>
      {priceOptions.map(({ minPrice, maxPrice, label }: PriceOptionProps) => (
        <TartsRadioLabel key={label}>
          <TartsRadioItem
            type="radio"
            name="cost"
            value={label}
            checked={cost === maxPrice}
            onChange={() => handleFilterPriceCakes(minPrice, maxPrice)}
          />
          <RadioBck>
            <TartsRadioIcon check={cost === maxPrice ? "true" : "false"} />
            <RadioCheckedIcon />
          </RadioBck>
          {label}
        </TartsRadioLabel>
      ))}
      <TartsRadioLabel>
        <TartsRadioItem
          type="radio"
          name="cost"
          value={0}
          checked={cost === 0}
          onChange={() => handleAllCakesReturn(0)}
        />
        <RadioBck>
          <TartsRadioIcon check={cost === 0 ? "true" : "false"} />
          <RadioCheckedIcon />
        </RadioBck>
        Усі
      </TartsRadioLabel>
    </>
  );
};

export default CostOptionsRender;
