import { FC } from "react";
import { SpinnerContainer } from "./Spinner.styled";
import { PacmanLoader } from "react-spinners";

const Spinner: FC = () => {
  return (
    <SpinnerContainer>
      <PacmanLoader color="#B83D6E" size={50} />
    </SpinnerContainer>
  );
};

export default Spinner;
