import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

export const Button = ({
  onClick = null,
  text,
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
    </ButtonStyled>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
};
