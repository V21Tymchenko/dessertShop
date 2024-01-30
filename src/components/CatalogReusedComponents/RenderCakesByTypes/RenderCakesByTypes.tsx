import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCakesById } from "@/redux/Cakes/cakes-operations";
import { AppDispatch } from "@/redux/store";
import ButtonsCard from "../../Button/ButtonsCard";
import {
  CakesButtonsContainer,
  CakesCardsText,
  CakesCardsTitle,
  CakesImage,
  CakesItem,
  CakesItemContainer,
  CakesList,
  ContainerIcon,
  HeartIcon,
} from "./RenderCakesByTypes.styled";

interface Cakes {
  id: number;
  name: string;
  price: number;
  quantity?: string;
  weight?: number;
  imagePath: string;
}
interface RenderCakesByTypesProps {
  cakes: Cakes[];
}
const RenderCakesByTypes: FC<RenderCakesByTypesProps> = ({ cakes }) => {
  const dispatch: AppDispatch = useDispatch();
  const [currentId, setCurrentId] = useState<null | number>(null);

  const handleClickById = async (id: number): Promise<void> => {
    if (currentId !== id) {
      setCurrentId(id);
      await dispatch(getCakesById(id));
    }
  };
  return (
    <CakesList>
      {cakes.map(({ id, name, price, quantity, weight, imagePath }) => (
        <CakesItem key={id}>
          <NavLink to={`/desserts/${id}`} onClick={() => handleClickById(id)}>
            <ContainerIcon>
              <HeartIcon />
            </ContainerIcon>
            <CakesImage src={imagePath} alt={name} width="200" height="200" />
            <CakesItemContainer>
              <CakesCardsTitle> {name}</CakesCardsTitle>
              <CakesCardsText>
                {price} грн/
                {weight
                  ? weight >= 1000
                    ? `${weight / 1000} кг`
                    : `${weight} г`
                  : `${quantity} шт`}
              </CakesCardsText>
              <CakesButtonsContainer>
                <ButtonsCard />
              </CakesButtonsContainer>
            </CakesItemContainer>
          </NavLink>
        </CakesItem>
      ))}
    </CakesList>
  );
};

export default RenderCakesByTypes;
