import { FC, ReactNode } from "react";
import { ButtonStyled } from "./Button.styled";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  variant?: string | null;
  disabled?: boolean;
  maxwidth?: string;
  margintop?: string;
}

const Button: FC<ButtonProps> = ({
  onClick,
  text,
  children,
  type = "button",
  variant = null,
  disabled = false,
  maxwidth = "264px",
  margintop = "0px",
}) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      $variant={variant}
      disabled={disabled}
      $maxwidth={maxwidth}
      $margintop={margintop}
    >
      {text}
      {children}
    </ButtonStyled>
  );
};

export default Button;
