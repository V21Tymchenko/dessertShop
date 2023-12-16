import { FC, ReactNode } from "react";
import { ButtonStyled } from "./Button.styled";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  variant?: string | null;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick,
  text,
  children,
  type = "button",
  variant = null,
  disabled = false,
}) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      $variant={variant}
      disabled={disabled}
    >
      {text}
      {children}
    </ButtonStyled>
  );
};

export default Button;
