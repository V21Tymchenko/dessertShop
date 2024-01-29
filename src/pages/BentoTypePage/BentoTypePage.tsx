import CakeType from "@/components/CakeType/CakesType";
import { priceBentoOptions } from "@/helpers/definitions/priceOptions";

const BentoTypePage = () => {
  return (
    <>
      <CakeType
        type="decor"
        filterName={"Декор"}
        title="Бенто"
        cakeType="bento"
        priceOptions={priceBentoOptions}
        options={[
          "Цукрові прикраси",
          "Шоколадні прикраси",
          "Фрукти, ягоди",
          "Напис",
        ]}
      />
    </>
  );
};

export default BentoTypePage;
