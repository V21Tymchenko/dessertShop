import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { getCakes } from "@/redux/Cakes/cakes-operations";
import {
  selectAllCakes,
  selectStatusLoading,
} from "@/redux/Cakes/cakes-selectors";
import { CakeTypeProps } from "@/helpers/generalInterface";
import FilterCategoryByForAllTypes from "@/components/CatalogReusedComponents/FilterCategoryByForAllTypes";
import RenderCakesByTypes from "@/components/CatalogReusedComponents/RenderCakesByTypes";
import CatalogNavigation from "@/components/CatalogReusedComponents/CatalogNavigation";
import SelectComponent from "@/components/CatalogReusedComponents/SelectComponent";
import Spinner from "@/components/Spinner";
import {
  CakesContainer,
  CakesFilterList,
  CakesFilterTitle,
  CakesTitle,
  CakesTypeContainer,
} from "./CakesType.styled";

const CakeType: FC<CakeTypeProps> = ({
  title,
  cakeType,
  priceOptions,
  gramsOptions,
  type,
  options,
  filterName,
  typeGrams,
}) => {
  const allCakes = useSelector(selectAllCakes);
  const isLoading = useSelector(selectStatusLoading);
  const dispatch: AppDispatch = useDispatch();
  const [filterCake, setFilterCake] = useState(allCakes);

  useEffect(() => {
    dispatch(getCakes(cakeType));
  }, [cakeType]);

  useEffect(() => {
    setFilterCake(allCakes);
  }, [allCakes]);

  return (
    <section>
      <CatalogNavigation
        navigationLinks={[{ hash: `/${cakeType}`, name: title, $active: true }]}
      />
      <CakesTypeContainer>
        <CakesTitle>{title}</CakesTitle>
        <SelectComponent setFilterCake={setFilterCake} />
      </CakesTypeContainer>
      <CakesContainer>
        <div>
          <CakesFilterTitle>Фільтри</CakesFilterTitle>
          <CakesFilterList>
            <FilterCategoryByForAllTypes
              filterTypeCakes={cakeType}
              gramsOptions={gramsOptions}
              priceOptions={priceOptions}
              setFilterCake={setFilterCake}
              options={options}
              filterName={filterName}
              typeGrams={typeGrams}
              type={type}
            />
          </CakesFilterList>
        </div>
        {isLoading === "SUCCESS" && <RenderCakesByTypes cakes={filterCake} />}
        {isLoading === "LOADING" && <Spinner />}
      </CakesContainer>
    </section>
  );
};

export default CakeType;
