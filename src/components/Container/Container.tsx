import { FC, ReactNode } from "react";
import { ContainerStyled } from "./Container.styled";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);
export default Container;
