import { ContainerStyled } from "./Container.styled";

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);
export default Container;
