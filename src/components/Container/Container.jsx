import { ContainerStyled } from "./Container.styled";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);
export default Container;

Container.prototypes = {
  children: PropTypes.node.isRequired,
};
