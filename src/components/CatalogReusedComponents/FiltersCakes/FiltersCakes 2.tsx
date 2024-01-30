import { ChangeEvent, FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllCakes } from "@/redux/Cakes/cakes-selectors";
import { AllCakesProps } from "@/helpers/generalInterface";
import {
  RadioCheckedIcon,
  TartsRadioList,
  RadioBck,
  TartsRadioItem,
  TartsRadioLabel,
  TartsRadioIcon,
} from "./FiltersCakes.styled";

interface FilterCakesProps {
  openVariety: boolean;
  filterNames: string[];
  setFilterCake: (filterCake: AllCakesProps[]) => void;
  type: string;
}

const FiltersCakes: FC<FilterCakesProps> = ({
  openVariety,
  filterNames,
  setFilterCake,
  type,
}) => {
  const [variety, setVariety] = useState("");
  const allCakes = useSelector(selectAllCakes);


  const handleFilterNameCakes = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVariety(value);

    if (allCakes) {
      const filterCakes = allCakes.filter(item => {
        const property = item[type];
        if (typeof property === "string") {
          return property.toLowerCase().includes(value.toLowerCase());
        }
        if (typeof property === "number") {
          return property === parseInt(value);
        }
        return false;
      });
      setFilterCake(filterCakes);
    }
  };
  const handleFilterAllCake = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVariety(value);
    setFilterCake(allCakes);
  };

  return (
    <TartsRadioList open={openVariety}>
      {filterNames.map((item: string) => (
        <TartsRadioLabel key={item}>
          <TartsRadioItem
            type="radio"
            name={type}
            value={item}
            checked={variety === item}
            onChange={handleFilterNameCakes}
          />
          <RadioBck>
            <TartsRadioIcon check={variety === item ? "true" : "false"} />
            <RadioCheckedIcon />
          </RadioBck>
          {item}
        </TartsRadioLabel>
      ))}
      <TartsRadioLabel>
        <TartsRadioItem
          type="radio"
          name={type}
          value="Усі"
          checked={variety === "Усі"}
          onChange={handleFilterAllCake}
        />
        <RadioBck>
          <TartsRadioIcon check={variety === "Усі" ? "true" : "false"} />
          <RadioCheckedIcon />
        </RadioBck>
        Усі
      </TartsRadioLabel>
    </TartsRadioList>
  );
};
export default FiltersCakes;
