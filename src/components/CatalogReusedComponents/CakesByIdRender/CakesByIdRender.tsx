import { FC, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import {
  selectCakeById,
  selectStatusLoading,
} from "@/redux/Cakes/cakes-selectors";
import { cakeByIdProps } from "@/redux/Cakes/cakes-slice";
import CatalogNavigation from "../CatalogNavigation";
import Spinner from "@/components/Spinner";
import Button from "@/components/Button/Button";
import CakeDescriptionByID from "../CakeDescriptionByID";
import ButtonWithIcon from "@/components/Button/ButtonWithIcon";
import FavoriteImage from "@/assets/images/Catalog/heart.svg?react";
import {
  CakeByIdImage,
  CakeByIdSection,
  CakeByIdTitle,
  CakeFlexContainer,
  FillingItem,
  FillingList,
  FillingTitle,
  InfoIdCakeContainer,
  MinusImage,
  OrderContainer,
  PlusImage,
  PriceTitle,
  RegulationInput,
} from "./CakesByIdRender.styled";
import { StandartFillingText } from "../CatalogNavigation/CatalogNavigation.styled";

const CakesByIdRender: FC = () => {
  const cakeById: cakeByIdProps | null = useSelector(selectCakeById);
  const isLoading = useSelector(selectStatusLoading);
  const [numberCake, setNumberCake] = useState(1);

  const handleChangeNumberCake = (kind: string) => {
    switch (kind) {
      case "minus":
        setNumberCake(prev => (prev -= 1));
        break;
      case "plus":
        setNumberCake(prev => (prev += 1));
        break;
      default:
        setNumberCake(1);
        break;
    }
  };

  return (
    <CakeByIdSection>
      {isLoading === "LOADING" ? (
        <Spinner />
      ) : (
        cakeById && (
          <>
            <CatalogNavigation
              navigationLinks={[
                {
                  hash: `/${cakeById.type}`,
                  name:
                    cakeById.type === "tarts"
                      ? "Тістечка"
                      : cakeById.type === "newCakes"
                      ? "Новинки"
                      : cakeById.type === "macaroon"
                      ? "Макаруни"
                      : cakeById.type === "bento"
                      ? "Бенто-торти"
                      : cakeById.type === "cakes"
                      ? "Торти на різні події"
                      : "Десерти",
                  $active: false,
                },
                {
                  hash: `${cakeById.id}`,
                  name: `${cakeById.name}`,
                  $active: true,
                },
              ]}
            />
            <CakeByIdTitle>{cakeById.name}</CakeByIdTitle>
            <CakeFlexContainer>
              <CakeByIdImage src={cakeById.imagePath} alt={cakeById.name} />
              <InfoIdCakeContainer>
                <FillingTitle>Оберіть начинку</FillingTitle>
                <FillingList>
                  {cakeById.desertFilling.length > 0 ? (
                    cakeById.desertFilling.map(({ name, imagePath }) => (
                      <FillingItem key={name}>
                        <img src={imagePath} title={name} />
                        <p>{name}</p>
                      </FillingItem>
                    ))
                  ) : (
                    <StandartFillingText>
                      Стандартна начинка для цього десерту
                    </StandartFillingText>
                  )}
                </FillingList>

                <PriceTitle>
                  Вартість: <span>{cakeById.price * numberCake} грн</span>
                </PriceTitle>
                <OrderContainer>
                  <div>
                    <ButtonWithIcon
                      icon={<MinusImage />}
                      disabled={numberCake < 2}
                      onClick={() => handleChangeNumberCake("minus")}
                    />
                    <RegulationInput
                      type="text"
                      value={numberCake}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setNumberCake(parseInt(e.target.value) || 1)
                      }
                    />
                    <ButtonWithIcon
                      icon={<PlusImage />}
                      disabled={numberCake > 19}
                      onClick={() => handleChangeNumberCake("plus")}
                    />
                  </div>
                  <Button text="Замовити" maxwidth="288px" />
                  <ButtonWithIcon
                    icon={<FavoriteImage />}
                    variant={"standart"}
                  />
                </OrderContainer>
              </InfoIdCakeContainer>
            </CakeFlexContainer>
            <CakeDescriptionByID />
          </>
        )
      )}
    </CakeByIdSection>
  );
};

export default CakesByIdRender;
