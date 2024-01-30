import React, { FC, ReactNode } from "react";
import { ButtonWithIconStyled } from "./ButtonWithIcon.styled";

interface ButtonWithIconProps {
  icon: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variant?: string | null;
  disabled?: boolean;
}

const ButtonWithIcon: FC<ButtonWithIconProps> = React.memo(
  ({ icon, type = "button", onClick, variant = null, disabled = false }) => {
    return (
      <ButtonWithIconStyled
        type={type}
        onClick={onClick}
        disabled={disabled}
        $variant={variant}
      >
        {icon}
      </ButtonWithIconStyled>
    );
  }
);

export default ButtonWithIcon;
