import CakeType from "@/components/CakeType/CakesType";
import { quantityOptionsMacaroon } from "@/helpers/definitions/gramsOprions";
import { priceMacaroonOptions } from "@/helpers/definitions/priceOptions";

const MacaroonTypePage = () => {
  return (
    <>
      <CakeType
        type="flavor"
        filterName={"Смаки"}
        typeGrams={"Кількість"}
        title="Макаруни"
        cakeType="macaroon"
        priceOptions={priceMacaroonOptions}
        gramsOptions={quantityOptionsMacaroon}
        options={[
          "Фісташковий",
          "Солона карамель",
          "Шоколад-малина",
          "Полуничний",
          "Груша-карамель",
          "Маскарпоне-шоколад",
        ]}
      />
    </>
  );
};
export default MacaroonTypePage;
