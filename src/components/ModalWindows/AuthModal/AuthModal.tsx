import { useState, useEffect, FC } from "react";
import { useSelector } from "react-redux";
import { selectIsVerified } from "@/redux/Auth/auth-selectors";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import Button from "@/components/Button/Button";
import SigninForm from "./SignIn/SigninForm";
import {
  AuthBackdrop,
  AuthorizationModal,
  CloseModalBtn,
  CloseModal,
  ButtonWrapper,
} from "./AuthModal.styled";

interface AuthModalProps {
  closeModal: () => void;
  closeLogin: () => void;
}

const AuthModal: FC<AuthModalProps> = ({ closeModal, closeLogin }) => {
  const [activeButton, setActiveButton] = useState("register");
  const verified = useSelector(selectIsVerified);

  useEffect(() => {
    if (verified) {
      setActiveButton("login");
    }
  }, [verified]);

  const handleButtonClick = (buttonType: "register" | "login") => {
    setActiveButton(buttonType);
  };
  const handleForgotPasswordClick = () => {
    setActiveButton("register");
  };

  return (
    <AuthBackdrop>
      <AuthorizationModal>
        <CloseModalBtn onClick={closeModal}>
          <CloseModal />
        </CloseModalBtn>
        <ButtonWrapper $activebutton={activeButton}>
          <Button
            onClick={() => handleButtonClick("register")}
            variant={"cardOpacity"}
            text="Реєстрація"
          />
          <Button
            onClick={() => handleButtonClick("login")}
            variant={"cardOpacity"}
            text="Вхід"
          />
        </ButtonWrapper>
        {activeButton === "register" ? (
          <RegistrationForm shouldCloseModal={closeLogin} />
        ) : (
          <SigninForm
            onForgotPasswordClick={handleForgotPasswordClick}
            shouldCloseModal={closeLogin}
          />
        )}
      </AuthorizationModal>
    </AuthBackdrop>
  );
};

export default AuthModal;
