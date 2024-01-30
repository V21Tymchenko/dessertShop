import { FC } from "react";
import Button from "../Button";
import { ArrowIcon, BasketIcon } from "./ButtonsCard.styled";

interface ButtonsCardProps {
  toggleBasketModal: () => void;
}

const ButtonsCard: FC<ButtonsCardProps> = ({ toggleBasketModal }) => {
  return (
    <>
      <Button text="Переглянути">
        <ArrowIcon />
      </Button>
      <Button
        text="До кошику"
        variant={"cardOpacity"}
        onClick={toggleBasketModal}
      >
        <BasketIcon />
      </Button>
    </>
  );
};

export default ButtonsCard;
