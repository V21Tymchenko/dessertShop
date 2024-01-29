import CakeType from "@/components/CakeType/CakesType";
import { quantityOptionsCakes } from "@/helpers/definitions/gramsOprions";
import { priceCakesOptions } from "@/helpers/definitions/priceOptions";

const CakesTypePage = () => {
  return (
    <>
      <CakeType
        type="decor"
        filterName={"Декор"}
        typeGrams={"Вага"}
        title="Торти на різні події"
        cakeType="cakes"
        priceOptions={priceCakesOptions}
        gramsOptions={quantityOptionsCakes}
        options={[
          "Живі квіти",
          "Цукрові прикраси",
          "Шоколадні прикраси",
          "Макаруни",
          "Фрукти, ягоди",
        ]}
      />
    </>
  );
};

export default CakesTypePage;
