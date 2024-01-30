import styled from "styled-components";
import RightArrow from "@/assets/images/popularCakes/right-arrow-alt.svg?react";
import Basket from "@/assets/images/popularCakes/basket.svg?react";

export const ArrowIcon = styled(RightArrow)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  margin-left: ${({ theme }) => theme.spacing(2)};
`;
export const BasketIcon = styled(Basket)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  margin-left: ${({ theme }) => theme.spacing(2)};
`;
