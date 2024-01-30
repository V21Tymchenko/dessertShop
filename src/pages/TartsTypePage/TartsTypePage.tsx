import CakeType from "@/components/CakeType/CakesType";
import { gramsOptionsTarts } from "@/helpers/definitions/gramsOprions";
import { priceTartsOptions } from "@/helpers/definitions/priceOptions";

const TartsTypePage = () => {
  return (
    <>
      <CakeType
        type="name"
        filterName={"Різновид"}
        typeGrams={"Грами"}
        title="Тістечка"
        cakeType="tarts"
        priceOptions={priceTartsOptions}
        gramsOptions={gramsOptionsTarts}
        options={["Еклер", "Чізкейк", "Медовик", "Тартуфо", "Десерт"]}
      />
    </>
  );
};

export default TartsTypePage;
