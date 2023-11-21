import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

const Button = ({
  onClick = null,
  text,
  children,
  // img = null,
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
      {/* {img} */}
    </ButtonStyled>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  // img: PropTypes.element,
  children: PropTypes.node,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
};
export default Button;
