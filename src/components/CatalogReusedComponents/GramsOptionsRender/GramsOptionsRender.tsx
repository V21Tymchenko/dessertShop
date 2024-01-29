import { useState, FC } from "react";
import { useSelector } from "react-redux";
import { selectAllCakes } from "@/redux/Cakes/cakes-selectors";
import { GramOption } from "@/helpers/definitions/gramsOprions";
import { AllCakesProps } from "@/helpers/generalInterface";
import {
  RadioBck,
  RadioCheckedIcon,
  TartsRadioIcon,
  TartsRadioItem,
  TartsRadioLabel,
  TartsRadioList,
} from "./GramsOptionsRender.styled";

interface GramsOptionsRenderProps {
  setFilterCake: (arg: AllCakesProps[]) => void;
  gramsOptions: GramOption[];
}
const GramsOptionsRender: FC<GramsOptionsRenderProps> = ({
  setFilterCake,
  gramsOptions,
}) => {
  const allCakes = useSelector(selectAllCakes);
  const [grams, setGrams] = useState<number | null>(null);

  const handleFilterGramsCakes = (filterGram: number) => {
    const filterCake = allCakes.filter(item =>
      item.weight
        ? item.weight === filterGram
        : Number(item.quantity) === filterGram
    );
    setGrams(filterGram);
    setFilterCake(filterCake);
  };
  const handleAllCakesReturn = (filterGram: number) => {
    setGrams(filterGram);
    setFilterCake(allCakes);
  };
  return (
    <>
      {gramsOptions.map(({ weight, label }: GramOption) => (
        <TartsRadioLabel key={label}>
          <TartsRadioItem
            type="radio"
            name="grams"
            value={label}
            checked={grams === weight}
            onChange={() => handleFilterGramsCakes(weight)}
          />{" "}
          <RadioBck>
            <TartsRadioIcon check={grams === weight ? "true" : "false"} />
            <RadioCheckedIcon />
          </RadioBck>
          {label}
        </TartsRadioLabel>
      ))}
      <TartsRadioLabel>
        <TartsRadioItem
          type="radio"
          name="grams"
          value={0}
          checked={grams === 0}
          onChange={() => handleAllCakesReturn(0)}
        />
        <RadioBck>
          <TartsRadioIcon check={grams === 0 ? "true" : "false"} />
          <RadioCheckedIcon />
        </RadioBck>
        Усі
      </TartsRadioLabel>
    </>
  );
};
export default GramsOptionsRender;
