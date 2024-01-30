import { FC, useState } from "react";
import CostOptionsRender from "../CostOptionsRender";
import FiltersCakes from "../FiltersCakes";
import GramsOptionsRender from "../GramsOptionsRender";
import { FiltersProps } from "@/helpers/generalInterface";
import {
  CakesFilterItem,
  CakesFilterList,
  CakesRadioList,
  TartsArrowIcon,
  TartsArrowUpIcon,
} from "./FilterCategoryByForAllTypes.styled";

const FilterCategoryByForAllTypes: FC<FiltersProps> = ({
  filterTypeCakes,
  type,
  gramsOptions,
  filterName,
  typeGrams,
  priceOptions,
  setFilterCake,
  options,
}) => {
  const [openFor, setOpenFor] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openGrams, setOpenGrams] = useState(false);
  const [openDynamicFilter, setOpenDynamicFilter] = useState(false);
  const [openTiers, setOpenTiers] = useState(false);

  const handleChangeOpenVariant = (name: string): void => {
    switch (name) {
      case "cost":
        setOpenPrice(prev => !prev);
        break;
      case "grams":
        setOpenGrams(prev => !prev);
        break;
      case "dynamic":
        setOpenDynamicFilter(prev => !prev);
        break;
      case "for":
        setOpenFor(prev => !prev);
        break;
      case "tiers":
        setOpenTiers(prev => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <CakesFilterList>
      {filterTypeCakes === "bento" && (
        <>
          {" "}
          <CakesFilterItem
            onClick={() => handleChangeOpenVariant("for")}
            open={openFor}
          >
            Для кого
            {openFor ? <TartsArrowUpIcon /> : <TartsArrowIcon />}
          </CakesFilterItem>
          <li>
            <FiltersCakes
              openVariety={openFor}
              filterNames={[
                "Для молодят",
                "Для дітей",
                "Для чоловіків",
                "Для всіх",
              ]}
              type="for"
              setFilterCake={setFilterCake}
            />
          </li>
        </>
      )}
      {filterTypeCakes === "cakes" && (
        <>
          {" "}
          <CakesFilterItem
            onClick={() => handleChangeOpenVariant("tiers")}
            open={openTiers}
          >
            Кількість ярусів
            {openTiers ? <TartsArrowUpIcon /> : <TartsArrowIcon />}
          </CakesFilterItem>
          <li>
            <FiltersCakes
              openVariety={openTiers}
              filterNames={["1 ярус", "2 яруса", "3 яруса"]}
              type="numberOfTiers"
              setFilterCake={setFilterCake}
            />
          </li>
        </>
      )}
      {filterTypeCakes !== "bento" && (
        <>
          <CakesFilterItem
            onClick={() => handleChangeOpenVariant("grams")}
            open={openGrams}
          >
            {typeGrams}
            {openGrams ? <TartsArrowUpIcon /> : <TartsArrowIcon />}
          </CakesFilterItem>
          <li>
            <CakesRadioList open={openGrams}>
              <GramsOptionsRender
                setFilterCake={setFilterCake}
                gramsOptions={gramsOptions}
              />
            </CakesRadioList>
          </li>
        </>
      )}
      <CakesFilterItem
        onClick={() => handleChangeOpenVariant("dynamic")}
        open={openDynamicFilter}
      >
        {filterName}
        {openDynamicFilter ? <TartsArrowUpIcon /> : <TartsArrowIcon />}
      </CakesFilterItem>
      <li>
        <FiltersCakes
          openVariety={openDynamicFilter}
          filterNames={options}
          type={type}
          setFilterCake={setFilterCake}
        />
      </li>
      <CakesFilterItem
        onClick={() => handleChangeOpenVariant("cost")}
        open={openPrice}
      >
        Ціна
        {openPrice ? <TartsArrowUpIcon /> : <TartsArrowIcon />}
      </CakesFilterItem>
      <li>
        <CakesRadioList open={openPrice}>
          <CostOptionsRender
            setFilterCake={setFilterCake}
            priceOptions={priceOptions}
          />
        </CakesRadioList>
      </li>
    </CakesFilterList>
  );
};

export default FilterCategoryByForAllTypes;
